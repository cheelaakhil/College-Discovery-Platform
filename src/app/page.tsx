import Link from "next/link";
import { getColleges } from "@/data/colleges";
import CollegeCard from "@/components/CollegeCard";

export default function Home() {
  const { colleges } = getColleges();
  const topColleges = colleges.slice(0, 4); // Top 4 for featured section

  return (
    <div>
      {/* ── Hero Section ── */}
      <section className="hero-mesh" style={{ padding: "100px 0 80px", textAlign: "center" }}>
        <div className="section-container animate-fade-in-up">
          <div
            style={{
              display: "inline-block",
              padding: "6px 16px",
              background: "rgba(99, 102, 241, 0.1)",
              border: "1px solid rgba(99, 102, 241, 0.2)",
              borderRadius: "var(--radius-full)",
              color: "#818cf8",
              fontSize: "0.85rem",
              fontWeight: 600,
              marginBottom: 24,
            }}
          >
            India&apos;s #1 College Discovery Platform
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 24,
              maxWidth: 900,
              margin: "0 auto 24px",
            }}
          >
            Discover Your <span className="gradient-text-animated">Dream College</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
              color: "var(--foreground-secondary)",
              maxWidth: 680,
              margin: "0 auto 40px",
              lineHeight: 1.6,
            }}
          >
            Data-driven insights, real placement stats, and comprehensive profiles
            to help you make the most important decision of your career.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/colleges" className="btn-primary">
              Explore Colleges
            </Link>
            <Link href="/colleges?sortBy=package" className="btn-secondary">
              Top Placements
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section style={{ padding: "40px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--surface)" }}>
        <div className="section-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 24,
            }}
            className="animate-fade-in-up stagger-2"
          >
            {[
              { value: "18", label: "Top Institutes" },
              { value: "₹2.4 Cr", label: "Highest Package" },
              { value: "95%", label: "Avg Placement Rate" },
              { value: "100+", label: "Programs Covered" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--foreground)" }}>
                  {stat.value}
                </div>
                <div style={{ color: "var(--foreground-secondary)", fontSize: "0.9rem", fontWeight: 500, marginTop: 4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Colleges Section ── */}
      <section style={{ padding: "100px 0" }}>
        <div className="section-container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40 }}>
            <div>
              <h2 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: 12 }}>Top Ranked</h2>
              <p style={{ color: "var(--foreground-secondary)", fontSize: "1.1rem" }}>
                India&apos;s premier engineering institutions
              </p>
            </div>
            <Link
              href="/colleges"
              style={{
                color: "var(--accent-primary)",
                textDecoration: "none",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              View all
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {topColleges.map((college, idx) => (
              <div key={college.id} className={`animate-fade-in-up stagger-${idx + 1}`}>
                <CollegeCard college={college} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Section ── */}
      <section style={{ padding: "80px 0 120px", background: "var(--surface)" }}>
        <div className="section-container">
          <h2 style={{ fontSize: "2.25rem", fontWeight: 800, textAlign: "center", marginBottom: 64 }}>
            Why <span className="gradient-text">College Compass?</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 32,
            }}
          >
            {[
              {
                title: "Data-Driven Insights",
                desc: "We analyze thousands of data points to give you an accurate picture of each college.",
                icon: "📊",
              },
              {
                title: "Verified Placements",
                desc: "Real statistics on average packages, top recruiters, and placement rates.",
                icon: "💼",
              },
              {
                title: "Transparent Fees",
                desc: "Complete breakdown of tuition, hostel, and hidden charges so you can plan better.",
                icon: "💰",
              },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className={`glass-card animate-fade-in-up stagger-${i + 2}`}
                style={{ padding: 40, textAlign: "center" }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: 20,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "rgba(99, 102, 241, 0.1)",
                    border: "1px solid rgba(99, 102, 241, 0.2)",
                  }}
                >
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 12 }}>{feature.title}</h3>
                <p style={{ color: "var(--foreground-secondary)", lineHeight: 1.6, margin: 0 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
