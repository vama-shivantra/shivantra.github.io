import { Rocket, MousePointer2, User } from "lucide-react";
import "./service-illustration.css";

export type IllustrationVariant =
  | "stack"
  | "browser"
  | "phone"
  | "network"
  | "database"
  | "rocket"
  | "canvas"
  | "chart"
  | "avatars";

export function ServiceIllustration({
  variant,
  colors,
}: {
  variant: IllustrationVariant;
  colors: string[];
}) {
  if (variant === "stack") {
    return (
      <div className="svc-illus svc-illus-stack">
        {colors.map((color, i) => (
          <div className="svc-mini-card" key={i}>
            <span
              style={{
                display: "block",
                margin: "10px auto 0",
                width: 24,
                height: 24,
                borderRadius: 9999,
                background: color,
              }}
            />
          </div>
        ))}
      </div>
    );
  }

  if (variant === "browser") {
    return (
      <div className="svc-illus svc-illus-browser">
        <div className="svc-browser">
          <div className="svc-browser-bar">
            <span style={{ background: colors[0] }} />
            <span style={{ background: colors[1] }} />
            <span style={{ background: colors[2] }} />
          </div>
          <div className="svc-browser-body">
            <span className="svc-line" style={{ width: "72%", background: colors[0] }} />
            <span className="svc-line" style={{ width: "46%", background: colors[1] }} />
            <span className="svc-line" style={{ width: "60%", background: colors[2] }} />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "phone") {
    return (
      <div className="svc-illus svc-illus-phone">
        <div className="svc-phone">
          <span className="svc-phone-notch" />
          <span className="svc-phone-bar" style={{ background: colors[0] }} />
          <span className="svc-phone-bar svc-short" style={{ background: colors[1] }} />
          <span className="svc-phone-dot" style={{ background: colors[2] }} />
        </div>
      </div>
    );
  }

  if (variant === "network") {
    return (
      <div className="svc-illus svc-illus-network">
        <svg viewBox="0 0 140 96" className="svc-network-svg" aria-hidden="true">
          <line x1="20" y1="20" x2="70" y2="48" stroke="#cecac8" strokeWidth="1.5" />
          <line x1="120" y1="16" x2="70" y2="48" stroke="#cecac8" strokeWidth="1.5" />
          <line x1="20" y1="78" x2="70" y2="48" stroke="#cecac8" strokeWidth="1.5" />
          <line x1="118" y1="80" x2="70" y2="48" stroke="#cecac8" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="7" fill={colors[0]} className="svc-net-node" />
          <circle
            cx="120"
            cy="16"
            r="6"
            fill={colors[1]}
            className="svc-net-node"
            style={{ animationDelay: "0.3s" }}
          />
          <circle
            cx="20"
            cy="78"
            r="6"
            fill={colors[1]}
            className="svc-net-node"
            style={{ animationDelay: "0.6s" }}
          />
          <circle
            cx="118"
            cy="80"
            r="7"
            fill={colors[2]}
            className="svc-net-node"
            style={{ animationDelay: "0.9s" }}
          />
          <circle cx="70" cy="48" r="10" fill={colors[0]} className="svc-net-core" />
        </svg>
      </div>
    );
  }

  if (variant === "database") {
    return (
      <div className="svc-illus svc-illus-db">
        <span className="svc-db-disc" style={{ borderColor: colors[0], animationDelay: "0s" }} />
        <span className="svc-db-disc" style={{ borderColor: colors[1], animationDelay: "0.2s" }} />
        <span className="svc-db-disc" style={{ borderColor: colors[2], animationDelay: "0.4s" }} />
      </div>
    );
  }

  if (variant === "rocket") {
    return (
      <div className="svc-illus svc-illus-rocket">
        <span
          className="svc-rocket-trail"
          style={{ background: `linear-gradient(to top, ${colors[0]}, transparent)` }}
        />
        <span className="svc-rocket-icon">
          <Rocket size={26} style={{ color: colors[0] }} />
        </span>
      </div>
    );
  }

  if (variant === "canvas") {
    return (
      <div className="svc-illus svc-illus-canvas">
        <div className="svc-canvas-frame">
          <span className="svc-canvas-shape svc-canvas-circle" style={{ borderColor: colors[0] }} />
          <span className="svc-canvas-shape svc-canvas-square" style={{ borderColor: colors[1] }} />
          <span className="svc-cursor">
            <MousePointer2 size={16} style={{ color: colors[2] }} />
          </span>
        </div>
      </div>
    );
  }

  if (variant === "chart") {
    const heights = [34, 56, 44, 70, 50];
    return (
      <div className="svc-illus svc-illus-chart">
        {heights.map((h, i) => (
          <span
            className="svc-chart-bar"
            key={i}
            style={{
              height: h,
              background: colors[i % colors.length],
              animationDelay: `${i * 0.12}s`,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="svc-illus svc-illus-avatars">
      <span className="svc-avatar" style={{ background: colors[0] }}>
        <User size={13} />
      </span>
      <span className="svc-avatar" style={{ background: colors[1] }}>
        <User size={13} />
      </span>
      <span className="svc-avatar" style={{ background: colors[2] }}>
        <User size={13} />
      </span>
      <span className="svc-avatar svc-avatar-plus">+12</span>
    </div>
  );
}
