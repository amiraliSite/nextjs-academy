import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
        textAlign: "center",
        padding: "120px 6% 60px",
      }}
    >
      <p
        className="grad-text"
        style={{ fontFamily: "var(--font-head)", fontSize: "clamp(4rem, 14vw, 8rem)", fontWeight: 700, lineHeight: 1 }}
      >
        404
      </p>
      <h1 style={{ fontSize: "clamp(1.4rem, 4vw, 2.2rem)" }}>Lost in the router</h1>
      <p style={{ color: "var(--muted)", maxWidth: 460, lineHeight: 2 }}>
        This route doesn&apos;t exist — even middleware couldn&apos;t intercept it.
        <br />
        این مسیر وجود ندارد — حتی middleware هم نتوانست آن را پیدا کند.
      </p>
      <Link href="/" className="btn btn-primary" style={{ marginTop: 10 }}>
        ← Back to base / بازگشت به خانه
      </Link>
    </main>
  );
}
