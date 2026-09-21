"use client";
import { useEffect, useId, useRef } from "react";
import gsap from "gsap";
import {
  BriefcaseBusiness,
  FileUser,
  MessagesSquare,
  Code2,
  Rocket,
  MessageCircleQuestion,
  Lightbulb,
  BadgeCheck,
  Headphones,
} from "lucide-react";
import "./live-illustration.css";

export function LiveIllustration({ scene }: { scene: number }) {
  const root = useRef<SVGSVGElement>(null);
  const id = useId().replace(/:/g, "");
  useEffect(() => {
    const svg = root.current;
    if (!svg) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const animations: gsap.core.Animation[] = [];
      const ctx = gsap.context(() => {
        svg.querySelectorAll<SVGPathElement>("[data-route]").forEach((path, i) => {
          const particle = svg.querySelectorAll("[data-particle]")[i];
          if (!particle) return;
          const travel = { progress: 0 };
          const length = path.getTotalLength();
          const start = path.getPointAtLength(0);
          gsap.set(particle, { x: start.x, y: start.y });
          animations.push(
            gsap.to(travel, {
              progress: 1,
              duration: 3.8 + i * 0.4,
              delay: i * 0.65,
              repeat: -1,
              ease: "none",
              paused: true,
              onUpdate: () => {
                const point = path.getPointAtLength(length * travel.progress);
                gsap.set(particle, { x: point.x, y: point.y });
              },
            })
          );
        });
        const mechanisms = svg.querySelectorAll("[data-mechanism]");
        if (mechanisms.length)
          animations.push(
            gsap.to(mechanisms, {
              rotation: 360,
              transformOrigin: "50% 50%",
              duration: 26,
              repeat: -1,
              ease: "none",
              paused: true,
            })
          );
        const routes = svg.querySelectorAll("[data-route]");
        if (routes.length)
          animations.push(
            gsap.fromTo(
              routes,
              { strokeOpacity: 0.35 },
              {
                strokeOpacity: 1,
                duration: 1.8,
                stagger: 0.25,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                paused: true,
              }
            )
          );
        const sequence = svg.querySelectorAll("[data-sequence]");
        if (sequence.length)
          animations.push(
            gsap.fromTo(
              sequence,
              { opacity: 0.3 },
              {
                opacity: 1,
                duration: 0.9,
                stagger: 0.45,
                repeat: -1,
                repeatDelay: 0.6,
                yoyo: true,
                ease: "sine.inOut",
                paused: true,
              }
            )
          );
        const parts = svg.querySelectorAll("[data-part]");
        if (parts.length)
          animations.push(
            gsap.to(parts, {
              y: -9,
              stagger: 0.22,
              duration: 2.6,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              paused: true,
            })
          );
        const scan = svg.querySelectorAll("[data-scanner]");
        if (scan.length)
          animations.push(
            gsap.to(scan, {
              y: 98,
              duration: 3.6,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              paused: true,
            })
          );
      }, svg);
      const surface = svg.closest("article, [data-art-surface]") ?? svg;
      const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
      const activate = () => {
        if (finePointer.matches) animations.forEach((a) => a.timeScale(1.65));
      };
      const settle = () => animations.forEach((a) => a.timeScale(1));
      surface.addEventListener("pointerenter", activate);
      surface.addEventListener("pointerleave", settle);
      let visible = false;
      const sync = () =>
        animations.forEach((a) => (visible && !document.hidden ? a.resume() : a.pause()));
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        sync();
      });
      observer.observe(svg);
      document.addEventListener("visibilitychange", sync);
      return () => {
        observer.disconnect();
        surface.removeEventListener("pointerenter", activate);
        surface.removeEventListener("pointerleave", settle);
        document.removeEventListener("visibilitychange", sync);
        ctx.revert();
      };
    });
    return () => media.revert();
  }, [scene]);
  const ink = "#817f87",
    blue = "#2b59d1",
    paper = "#faf8f5";
  const port = (x: number, y: number) => (
    <g data-part>
      <rect x={x - 30} y={y - 24} width="60" height="48" rx="13" fill={paper} stroke="#d3cdca" />
      <circle cx={x} cy={y} r="8" fill={`url(#${id})`} stroke={ink} />
    </g>
  );
  return (
    <svg
      ref={root}
      className="v19-live-art"
      data-live-scene={scene}
      viewBox="0 0 480 300"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#a0b5eb" />
          <stop offset=".5" stopColor="#d5c1d9" />
          <stop offset="1" stopColor="#ff9473" />
        </linearGradient>
        <radialGradient id={`${id}-glow`}>
          <stop stopColor={scene % 2 ? "#ffbc9e" : "#a7fccd"} stopOpacity=".8" />
          <stop offset="1" stopColor="#f6f3f1" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="240" cy="156" rx="222" ry="140" fill={`url(#${id}-glow)`} />
      {scene === 0 && (
        <>
          <path data-route d="M35 75C124 75 118 150 180 150" stroke="#d8b3a2" />
          <path data-route d="M35 225C124 225 118 150 180 150" stroke="#d8b3a2" />
          <path data-route d="M300 150C365 150 360 75 440 75" stroke="#a8c2b3" />
          <path data-route d="M300 150C365 150 360 225 440 225" stroke="#a8c2b3" />
          <g data-mechanism>
            <path
              d="M193 87h94v24l25-16v111l-25-16v24h-94v-24l-25 16V95l25 16Z"
              fill={`url(#${id})`}
              stroke={ink}
            />
            <circle cx="240" cy="150" r="25" fill={paper} stroke={ink} strokeDasharray="2 5" />
          </g>
          {port(35, 75)}
          {port(35, 225)}
          {port(440, 75)}
          {port(440, 225)}
        </>
      )}
      {scene === 1 && (
        <>
          <rect x="74" y="52" width="332" height="200" rx="18" fill={paper} stroke="#c9c4c1" />
          <path d="M74 87h332" stroke="#c9c4c1" />
          {[94, 107, 120].map((x) => (
            <circle key={x} cx={x} cy="70" r="3" fill={blue} />
          ))}
          <rect x="98" y="109" width="87" height="119" rx="8" fill={`url(#${id})`} />
          {[0, 1, 2].map((i) => (
            <g data-part key={i}>
              <rect
                x={206 + i * 57}
                y="109"
                width="44"
                height="43"
                rx="7"
                fill="#dce8de"
                stroke="#c4cec7"
              />
              <path d={`M206 ${177 + i * 21}h155`} stroke="#ccc6c3" />
            </g>
          ))}
          <path data-route d="M102 218C176 218 251 221 291 185S360 120 380 120" stroke={blue} />
        </>
      )}
      {scene === 2 && (
        <>
          <path data-route d="M105 154C156 40 322 38 376 156" stroke={blue} strokeDasharray="3 6" />
          {[0, 1].map((i) => (
            <g key={i} data-part>
              <rect
                x={104 + i * 155}
                y={49 + i * 29}
                width="111"
                height="204"
                rx="21"
                fill={paper}
                stroke={ink}
              />
              <rect
                x={115 + i * 155}
                y={77 + i * 29}
                width="89"
                height="118"
                rx="10"
                fill={`url(#${id})`}
              />
              <path
                d={`M${139 + i * 155} ${64 + i * 29}h40M${129 + i * 155} ${219 + i * 29}h60`}
                stroke={ink}
              />
            </g>
          ))}
          <path data-route d="M375 220C295 291 161 286 105 219" stroke="#a5baa9" />
        </>
      )}
      {scene === 3 && (
        <>
          <path data-route d="M76 75H188Q240 75 240 130" stroke={ink} />
          <path data-route d="M76 225H188Q240 225 240 170" stroke={ink} />
          <path data-route d="M270 150H400" stroke={ink} />
          {port(76, 75)}
          {port(76, 225)}
          {port(400, 150)}
          <g data-mechanism>
            <rect
              x="201"
              y="111"
              width="78"
              height="78"
              rx="21"
              fill={`url(#${id})`}
              stroke={ink}
            />
            <path d="M224 150h32M240 134v32" stroke={paper} strokeWidth="3" />
          </g>
        </>
      )}
      {scene === 4 && (
        <>
          {[0, 1, 2].map((i) => (
            <g key={i} data-part>
              <path d={`M116 ${104 + i * 49}v32c0 38 168 38 168 0v-32`} fill={paper} stroke={ink} />
              <ellipse
                cx="200"
                cy={104 + i * 49}
                rx="84"
                ry="26"
                fill={`url(#${id})`}
                stroke={ink}
              />
            </g>
          ))}
          <path data-route d="M286 133H340V82h75M286 208H340v38h75" stroke={ink} />
          {port(399, 82)}
          {port(399, 246)}
        </>
      )}
      {scene === 5 && (
        <>
          <path d="M60 260h365M80 260V50" stroke="#d0c9c4" />
          {[0, 1, 2, 3].map((i) => (
            <rect
              data-part
              key={i}
              x={119 + i * 63}
              y={215 - i * 39}
              width="40"
              height={45 + i * 39}
              rx="9"
              fill={`url(#${id})`}
              stroke={ink}
            />
          ))}
          <path data-route d="M85 230C221 226 186 95 387 55" stroke={blue} />
          <path d="m373 51 16 3-10 14" stroke={blue} />
        </>
      )}
      {scene === 6 && (
        <>
          <rect x="92" y="58" width="300" height="185" rx="15" fill={paper} stroke="#d1cac5" />
          <path d="M137 200 189 93M302 207 353 96" stroke="#b3bbb9" />
          <path data-route d="M137 200C189 93 302 207 353 96" stroke={blue} strokeWidth="2" />
          {[
            [137, 200],
            [189, 93],
            [302, 207],
            [353, 96],
          ].map(([x, y]) => (
            <rect
              key={x}
              x={x - 5}
              y={y - 5}
              width="10"
              height="10"
              fill={`url(#${id})`}
              stroke={blue}
            />
          ))}
          <g data-part>
            <path d="m233 148 5 45 13-14 16-3Z" fill={paper} stroke={ink} />
          </g>
        </>
      )}
      {scene === 7 && (
        <>
          <rect x="90" y="51" width="310" height="51" rx="25" fill={paper} stroke="#c9c2be" />
          <circle cx="119" cy="75" r="10" stroke={ink} />
          <path d="m126 83 8 7M152 76h214" stroke="#c9c2be" />
          {[0, 1, 2].map((i) => (
            <g key={i} data-part>
              <rect
                x="108"
                y={128 + i * 47}
                width={267 - i * 27}
                height="32"
                rx="6"
                fill={`url(#${id})`}
                opacity={0.7 - i * 0.15}
              />
              <path d={`M132 ${144 + i * 47}h${170 - i * 27}`} stroke={paper} />
            </g>
          ))}
          <path data-scanner d="M85 121h328" stroke={blue} />
        </>
      )}
      {scene === 8 && (
        <>
          {[
            [106, 86],
            [106, 215],
            [373, 86],
            [373, 215],
          ].map(([x, y]) => (
            <g key={`${x}-${y}`}>
              <path data-route d={`M${x} ${y}Q240 ${y} 240 150`} stroke="#bbb3c5" />
              <g data-part>
                <circle cx={x} cy={y} r="28" fill={paper} stroke="#c9c2be" />
                <circle cx={x} cy={y - 7} r="7" fill={`url(#${id})`} />
                <path d={`M${x - 12} ${y + 14}q12-20 24 0`} stroke={ink} />
              </g>
            </g>
          ))}
          <g data-mechanism>
            <path d="m240 104 40 23v46l-40 23-40-23v-46Z" fill={`url(#${id})`} stroke={ink} />
          </g>
        </>
      )}
      {scene === 9 && (
        <>
          <path data-route d="M90 62v57q0 26 35 26h218q35 0 35 28v70" stroke={ink} />
          {[
            [90, 62],
            [238, 145],
            [378, 243],
          ].map(([x, y], i) => (
            <g key={x} data-part>
              <rect
                x={x - 45}
                y={y - 23}
                width="90"
                height="46"
                rx="12"
                fill={paper}
                stroke="#c9c2be"
              />
              <circle cx={x - 23} cy={y} r="8" fill={`url(#${id})`} />
              <path d={`M${x - 4} ${y - 5}h29m-29 10h19`} stroke={ink} />
              <circle cx={x + 40} cy={y - 22} r="10" fill="#dcf4e5" stroke="#c5d9c9" />
              <path d={`m${x + 36} ${y - 22} 3 3 5-6`} stroke="#428166" />
            </g>
          ))}
        </>
      )}
      {scene === 10 && (
        <>
          <path data-route d="M45 150h125M310 150h125" stroke={ink} />
          {[0, 1, 2].map((i) => (
            <g key={i} data-part transform={`translate(0 ${i * 30})`}>
              <path d="m151 122 89-48 89 48v16l-89 47-89-47Z" fill={paper} stroke={ink} />
              <path d="m151 122 89 47 89-47" stroke={ink} />
              <path d="m189 122 51-27 51 27-51 27Z" fill={`url(#${id})`} stroke={ink} />
            </g>
          ))}
          <path data-scanner d="M125 70h230" stroke={blue} opacity=".5" />
          {port(45, 150)}
          {port(435, 150)}
        </>
      )}
      {scene === 11 && (
        <>
          <path data-route d="M100 85C215 85 265 215 380 215" stroke={blue} />
          <path data-route d="M100 215C215 215 265 85 380 85" stroke="#dc9475" />
          {[
            [100, 85],
            [100, 215],
            [380, 85],
            [380, 215],
          ].map(([x, y]) => (
            <g key={`${x}-${y}`} data-part>
              <circle cx={x} cy={y} r="26" fill={paper} stroke={ink} />
              <circle cx={x} cy={y - 7} r="7" fill={`url(#${id})`} />
              <path d={`M${x - 12} ${y + 13}q12-19 24 0`} stroke={ink} />
            </g>
          ))}
          <g data-mechanism>
            <rect
              x="211"
              y="121"
              width="58"
              height="58"
              rx="16"
              fill={`url(#${id})`}
              stroke={ink}
            />
            <path d="m227 150 9 9 18-20" stroke={paper} strokeWidth="2" />
          </g>
        </>
      )}
      {scene === 12 && (
        <>
          <path data-route d="M65 226H165Q190 226 190 200V103Q190 78 215 78h190" stroke={ink} />
          {[0, 1, 2].map((i) => (
            <g key={i} data-part>
              <rect
                x={70 + i * 119}
                y={175 - i * 47}
                width="99"
                height="78"
                rx="13"
                fill={paper}
                stroke={ink}
              />
              <rect
                x={84 + i * 119}
                y={190 - i * 47}
                data-sequence
                width="38"
                height="9"
                rx="4"
                fill={`url(#${id})`}
              />
              <path d={`M${84 + i * 119} ${217 - i * 47}h64m-64 13h42`} stroke="#d1c6c2" />
            </g>
          ))}
          <circle data-sequence cx="405" cy="78" r="21" fill="#d5efdf" stroke="#a8c2b3" />
          <path d="m394 78 8 8 16-18" stroke="#47846c" strokeWidth="2" />
        </>
      )}
      {scene === 13 && (
        <>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => {
            const x = 240 + Math.cos((i * Math.PI * 2) / 7) * 175,
              y = 150 + Math.sin((i * Math.PI * 2) / 7) * 106;
            return (
              <g key={i}>
                <path data-route d={`M${x} ${y}Q240 ${y} 240 150`} stroke="#acb9ce" />
                {port(x, y)}
              </g>
            );
          })}
          <g data-mechanism>
            <path d="m240 105 39 22v46l-39 22-39-22v-46Z" fill={`url(#${id})`} stroke={ink} />
            <path
              d="m222 143-10 7 10 7m36-14 10 7-10 7m-14-17-8 40"
              stroke={paper}
              strokeWidth="2"
            />
          </g>
        </>
      )}
      {(scene === 14 || scene === 15) && (
        <>
          {[
            [96, 80],
            [96, 222],
            [384, 80],
            [384, 222],
          ].map(([x, y], index) => {
            const Icon =
              scene === 14
                ? [FileUser, MessagesSquare, Code2, Rocket][index]
                : [MessageCircleQuestion, Headphones, Lightbulb, BadgeCheck][index];
            return (
              <g key={index}>
                <path
                  data-route
                  d={`M${x} ${y}Q240 ${y} 240 150`}
                  stroke={index % 2 ? "#d8b3a2" : "#a8bcd6"}
                />
                <g data-part>
                  <rect
                    x={x - 34}
                    y={y - 30}
                    width="68"
                    height="60"
                    rx="18"
                    fill={paper}
                    stroke="#c9c2be"
                  />
                  <Icon
                    x={x - 14}
                    y={y - 14}
                    width="28"
                    height="28"
                    stroke={index % 2 ? "#b57c65" : blue}
                    strokeWidth={1.3}
                  />
                  <circle
                    data-sequence
                    cx={x + 29}
                    cy={y - 25}
                    r="6"
                    fill="#a7d9b9"
                    stroke={paper}
                    strokeWidth="2"
                  />
                </g>
              </g>
            );
          })}
          <g data-mechanism>
            <path d="m240 98 45 26v52l-45 26-45-26v-52Z" fill={`url(#${id})`} stroke={ink} />
          </g>
          {scene === 14 ? (
            <BriefcaseBusiness
              x="220"
              y="130"
              width="40"
              height="40"
              stroke={paper}
              strokeWidth={1.3}
            />
          ) : (
            <MessagesSquare
              x="220"
              y="130"
              width="40"
              height="40"
              stroke={paper}
              strokeWidth={1.3}
            />
          )}
        </>
      )}
      {Array.from({ length: scene === 13 ? 7 : 4 }, (_, i) => (
        <g data-particle key={i}>
          <circle r="8" fill={paper} stroke={i % 2 ? blue : "#e3916f"} />
          <circle r="3" fill={i % 2 ? blue : "#e3916f"} />
        </g>
      ))}
    </svg>
  );
}
