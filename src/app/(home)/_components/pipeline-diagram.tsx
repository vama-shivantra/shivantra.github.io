"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import {
  FileText,
  PenTool,
  Database,
  MessageSquare,
  Webhook,
  Globe,
  Smartphone,
  Layers,
  LayoutDashboard,
  Building2,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Pause,
  Play,
} from "lucide-react";
import { company } from "@/content/site-data";
import "./pipeline-diagram.css";

const sources = [
  { label: "Client Requirements", icon: FileText },
  { label: "Design & UX Specs", icon: PenTool },
  { label: "Legacy Systems", icon: Database },
  { label: "User Feedback", icon: MessageSquare },
  { label: "API Integrations", icon: Webhook },
];
const destinations = [
  { label: "Web Platforms", icon: Globe },
  { label: "Mobile Apps", icon: Smartphone },
  { label: "SaaS Products", icon: Layers },
  { label: "Dashboards & ERP", icon: LayoutDashboard },
  { label: "Client Systems", icon: Building2 },
];
const hubStages = ["Plan", "Build", "Test", "Ship"];
const inLabels = company.values.slice(0, sources.length);
const badgeIcons = [AlertTriangle, ShieldCheck];

export function PipelineDiagram() {
  const rootRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const playbackRef = useRef<() => void>(() => {});
  const timelines = useRef<gsap.core.Timeline[]>([]);
  useEffect(() => {
    pausedRef.current = paused;
    playbackRef.current();
  }, [paused]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    gsap.registerPlugin(MotionPathPlugin);
    let alive = true;
    let frame = 0;
    let inView = true;
    let animationContext: gsap.Context | undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const rebuild = () => {
      animationContext?.revert();
      timelines.current = [];
      const box = root.getBoundingClientRect();
      const hub = root.querySelector<HTMLElement>(".v19-hub")!.getBoundingClientRect();
      const vertical = window.matchMedia("(max-width: 1023px)").matches;
      const paths = Array.from(root.querySelectorAll<SVGPathElement>(".v19-flow-path"));
      const nodes = [
        ...root.querySelectorAll<HTMLElement>(".v19-source"),
        ...root.querySelectorAll<HTMLElement>(".v19-destination"),
      ];
      nodes.forEach((node, index) => {
        const r = node.getBoundingClientRect();
        const incoming = index < sources.length;
        let sx: number, sy: number, ex: number, ey: number;
        if (vertical) {
          sx = incoming ? r.left + r.width / 2 - box.left : hub.left + hub.width / 2 - box.left;
          sy = incoming ? r.bottom - box.top : hub.bottom - box.top;
          ex = incoming ? hub.left + hub.width / 2 - box.left : r.left + r.width / 2 - box.left;
          ey = incoming ? hub.top - box.top : r.top - box.top;
          const mid = (sy + ey) / 2;
          paths[index].setAttribute("d", `M${sx},${sy} C${sx},${mid} ${ex},${mid} ${ex},${ey}`);
        } else {
          sx = incoming ? r.right - box.left : hub.right - box.left;
          sy = incoming ? r.top + r.height / 2 - box.top : hub.top + hub.height / 2 - box.top;
          ex = incoming ? hub.left - box.left : r.left - box.left;
          ey = incoming ? hub.top + hub.height / 2 - box.top : r.top + r.height / 2 - box.top;
          const mid = (sx + ex) / 2;
          paths[index].setAttribute("d", `M${sx},${sy} C${mid},${sy} ${mid},${ey} ${ex},${ey}`);
        }
        const badge = badgeRefs.current[index];
        if (badge) {
          const len = paths[index].getTotalLength();
          const t = incoming ? 0.34 : 0.66;
          const pt = paths[index].getPointAtLength(len * t);
          badge.style.transform = `translate(${pt.x}px, ${pt.y}px) translate(-50%, -50%)`;
        }
      });
      paths.forEach((path, index) => {
        const light = root.querySelectorAll<SVGPathElement>(".v19-flow-light")[index];
        light.setAttribute("d", path.getAttribute("d") || "");
      });
      if (reduced.matches) return;
      animationContext = gsap.context(() => {
        root.querySelectorAll<SVGPathElement>(".v19-flow-light").forEach((path, index) => {
          const length = path.getTotalLength();
          const trace = gsap.timeline({ repeat: -1, delay: index * 0.5, repeatDelay: 0.8 });
          trace.fromTo(
            path,
            { strokeDasharray: `28 ${length}`, strokeDashoffset: 28 },
            { strokeDashoffset: -length, duration: 3.6, ease: "none" }
          );
          timelines.current.push(trace);
        });
        const packets = root.querySelectorAll<HTMLElement>(".v19-packet");
        const checks = root.querySelectorAll<HTMLElement>(".v19-destination-check");
        const count = sources.length;
        paths.slice(0, count).forEach((path, i) => {
          const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.65, delay: i * 0.6 });
          timeline
            .set(packets[i], { autoAlpha: 1 })
            .fromTo(
              packets[i],
              { motionPath: { path, align: path, alignOrigin: [0.5, 0.5], start: 0, end: 0 } },
              {
                motionPath: { path, align: path, alignOrigin: [0.5, 0.5], start: 0, end: 1 },
                duration: 2.2,
                ease: "none",
              }
            )
            .set(packets[i], { autoAlpha: 0 })
            .to(".v19-hub-core", { scale: 1.07, duration: 0.18, repeat: 1, yoyo: true }, "-=.1")
            .set(packets[i + count], { autoAlpha: 1 })
            .fromTo(
              packets[i + count],
              {
                motionPath: {
                  path: paths[i + count],
                  align: paths[i + count],
                  alignOrigin: [0.5, 0.5],
                  start: 0,
                  end: 0,
                },
              },
              {
                motionPath: {
                  path: paths[i + count],
                  align: paths[i + count],
                  alignOrigin: [0.5, 0.5],
                },
                duration: 2,
                ease: "none",
              }
            )
            .set(packets[i + count], { autoAlpha: 0 })
            .fromTo(checks[i], { scale: 0.6 }, { scale: 1, duration: 0.35, ease: "back.out(2)" });
          timelines.current.push(timeline);
        });
        const atmosphere = gsap
          .timeline({ repeat: -1, yoyo: true })
          .to(".v19-hub-outer", { scale: 1.08, duration: 4, ease: "sine.inOut" })
          .to(".v19-hub-aura", { scale: 1.15, rotate: 20, duration: 4, ease: "sine.inOut" }, "<");
        timelines.current.push(atmosphere);
        gsap.utils.toArray<HTMLElement>(".v19-line-badge").forEach((badge, i) => {
          gsap.to(badge, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            delay: 0.4 + i * 0.08,
            ease: "back.out(2)",
          });
        });
        if (pausedRef.current || !inView || document.hidden)
          timelines.current.forEach((t) => t.pause());
      }, root);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (alive) rebuild();
      });
    };
    const resize = new ResizeObserver(schedule);
    resize.observe(root);
    root
      .querySelectorAll(".v19-source,.v19-destination,.v19-hub")
      .forEach((el) => resize.observe(el));
    const syncPlayback = () =>
      timelines.current.forEach((t) =>
        pausedRef.current || !inView || document.hidden ? t.pause() : t.resume()
      );
    playbackRef.current = syncPlayback;
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncPlayback();
    });
    observer.observe(root);
    reduced.addEventListener("change", schedule);
    document.addEventListener("visibilitychange", syncPlayback);
    document.fonts.ready.then(() => {
      if (alive) schedule();
    });
    schedule();
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      reduced.removeEventListener("change", schedule);
      document.removeEventListener("visibilitychange", syncPlayback);
      animationContext?.revert();
      timelines.current = [];
    };
  }, []);

  const totalPaths = sources.length + destinations.length;

  return (
    <div className="v19-pipeline-wrap" data-paused={paused}>
      <div
        ref={rootRef}
        className="v19-pipeline"
        role="img"
        aria-label="Client requirements, design specs, legacy systems, user feedback and API integrations flow through Shivantra's plan, build, test and ship process into web, mobile, SaaS, dashboard and client-system deliverables."
      >
        <svg className="v19-flow-lines" aria-hidden="true">
          {Array.from({ length: totalPaths }, (_, i) => (
            <path
              key={i}
              className="v19-flow-path"
              fill="none"
              stroke={i < sources.length ? "#e3b9a6" : "#a9c7bd"}
              strokeWidth="1.5"
            />
          ))}
          {Array.from({ length: totalPaths }, (_, i) => (
            <path
              key={`light-${i}`}
              className="v19-flow-light"
              fill="none"
              stroke={i < sources.length ? "#e69b79" : "#40a986"}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          ))}
        </svg>

        <div className="v19-source-list">
          {sources.map(({ label, icon: Icon }) => (
            <div className="v19-source" key={label}>
              <Icon size={16} />
              {label}
            </div>
          ))}
        </div>

        <div className="v19-hub">
          <div className="v19-hub-aura" />
          <div className="v19-hub-facet facet-one" />
          <div className="v19-hub-facet facet-two" />
          <div className="v19-hub-outer">
            <div className="v19-hub-core">
              <span className="v19-hub-core-inner">
                <svg className="v19-hub-ring" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="8.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="1.5 4.2"
                  />
                </svg>
              </span>
            </div>
          </div>
          {hubStages.map((stage, i) => (
            <div key={stage} className={`v19-hub-stage hub-stage-${i}`}>
              <span>{stage}</span>
            </div>
          ))}
        </div>

        <div className="v19-destination-list">
          {destinations.map(({ label, icon: Icon }) => (
            <div className="v19-destination" key={label}>
              <Icon size={16} />
              {label}
              <CheckCircle2 size={14} className="v19-destination-check" />
            </div>
          ))}
        </div>

        {Array.from({ length: totalPaths }, (_, i) => {
          const BadgeIcon = badgeIcons[i % badgeIcons.length];
          return (
            <span
              key={`badge-${i}`}
              ref={(el) => {
                badgeRefs.current[i] = el;
              }}
              className="v19-line-badge"
              aria-hidden="true"
            >
              <BadgeIcon size={11} />
            </span>
          );
        })}

        {Array.from({ length: totalPaths }, (_, i) => (
          <span
            key={i}
            className={`v19-packet ${i < sources.length ? "packet-in" : "packet-out"}`}
            aria-hidden="true"
          >
            {i < sources.length ? <FileText size={11} /> : <CheckCircle2 size={11} />}
            <span>{i < sources.length ? inLabels[i] : "Shipped"}</span>
          </span>
        ))}
      </div>
      <button
        className="v19-motion-control"
        type="button"
        onClick={() => setPaused(!paused)}
        aria-pressed={paused}
      >
        {paused ? <Play size={12} /> : <Pause size={12} />}{" "}
        {paused ? "Play animation" : "Pause animation"}
      </button>
    </div>
  );
}
