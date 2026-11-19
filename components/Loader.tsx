/**
 * Shared loading state used by loading.tsx segments:
 * orbit spinner + shimmering skeleton — pure markup, no hooks,
 * so it works in server components.
 */
export function Loader() {
  return (
    <div className="loader-wrap" role="status" aria-label="Loading">
      <div className="loader-orbit">
        <span className="ring" />
        <span className="ring o2" />
        <span className="core">N</span>
      </div>
      <div className="loader-skel">
        <span className="skel skel-title" />
        <span className="skel" />
        <span className="skel" />
        <span className="skel skel-short" />
      </div>
      <span className="loader-note">loading…</span>
    </div>
  );
}
