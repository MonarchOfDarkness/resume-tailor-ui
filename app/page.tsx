export default function Landing() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "56px 16px",
        background:
          "radial-gradient(1200px 600px at 20% 10%, rgba(99,102,241,0.25), transparent 60%), radial-gradient(900px 500px at 80% 20%, rgba(34,197,94,0.20), transparent 55%), radial-gradient(900px 700px at 50% 90%, rgba(236,72,153,0.18), transparent 55%), #070A12",
        color: "white",
        fontFamily: "system-ui",
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <div style={{ fontWeight: 800, letterSpacing: 0.2 }}>Resume Tailor</div>
          <a
            href="/app"
            style={{
              padding: "10px 14px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.16)",
              background: "rgba(99,102,241,0.28)",
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Open App
          </a>
        </nav>

        <section style={{ padding: "64px 0 24px" }}>
          <h1 style={{ fontSize: 44, margin: 0, lineHeight: 1.05 }}>
            Tailor your resume to any job in seconds.
          </h1>
          <p style={{ marginTop: 14, opacity: 0.85, fontSize: 16, maxWidth: 720 }}>
            Paste a job description and upload your resume. Get ATS-aware improvements, a fit score, and a downloadable
            tailored DOCX — powered by AI.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
            <a
              href="/app"
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                background: "rgba(34,197,94,0.25)",
                border: "1px solid rgba(34,197,94,0.45)",
                color: "white",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Try it now
            </a>
            <a
              href="#features"
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              See features
            </a>
          </div>
        </section>

        <section id="features" style={{ padding: "20px 0 60px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 14,
            }}
          >
            {[
              ["ATS-friendly suggestions", "Avoid common rejection triggers and formatting pitfalls."],
              ["Job fit score", "See keyword coverage and what you’re missing."],
              ["DOCX export", "Download a clean tailored resume you can submit immediately."],
              ["Fast workflow", "Upload → tailor → export in one click."],
            ].map(([title, desc]) => (
              <div
                key={title}
                style={{
                  padding: 16,
                  borderRadius: 16,
                  background: "rgba(0,0,0,0.22)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div style={{ fontWeight: 800, marginBottom: 6 }}>{title}</div>
                <div style={{ opacity: 0.85 }}>{desc}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 20, opacity: 0.7, fontSize: 12 }}>
            Note: Always review outputs before submitting.
          </div>
        </section>

        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 18, opacity: 0.8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>© {new Date().getFullYear()} Resume Tailor</div>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="/app" style={{ color: "white" }}>App</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

