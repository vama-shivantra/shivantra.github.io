import { basePath } from "@/lib/basePath";
import { LiveIllustration } from "@/app/(home)/_components/live-illustration";
import "./PageLoader.css";

export default function PageLoader({
  leaving = false,
  initial = false,
}: {
  leaving?: boolean;
  initial?: boolean;
}) {
  return (
    <div
      className={`page-loader${leaving ? " page-loader--leaving" : ""}`}
      data-initial-loader={initial || undefined}
      role="status"
      aria-live="polite"
      aria-label="Shivantra is loading your page"
    >
      <div className="page-loader__content">
        <span className="page-loader__eyebrow" aria-hidden="true">
          Ideas into impact
        </span>
        <div className="page-loader__art" aria-hidden="true">
          <LiveIllustration scene={0} />
        </div>
        <div className="page-loader__brand">
          <img
            src={`${basePath}/assets/images/logo-dark.svg`}
            width="218"
            height="80"
            alt="Shivantra"
            fetchPriority="high"
          />
        </div>
        <p className="page-loader__caption">Connecting ideas. Creating possibilities.</p>
        <div className="page-loader__track" aria-hidden="true">
          <span />
        </div>
        <span className="page-loader__label">
          Loading your experience<span aria-hidden="true">…</span>
        </span>
      </div>
      <span className="page-loader__footer" aria-hidden="true">
        SOFTWARE · PEOPLE · POSSIBILITIES
      </span>
    </div>
  );
}
