"use client";

import { useState } from "react";
import { College } from "@/types/college";
import { formatCurrency } from "@/data/colleges";

const tabs = ["Overview", "Courses", "Placements", "Facilities"] as const;
type Tab = (typeof tabs)[number];

export default function CollegeDetailTabs({ college }: { college: College }) {
  const [activeTab, setActiveTab] = useState<Tab>("Overview");

  return (
    <div>
      {/* Tab bar */}
      <div className="detail-tabs" style={{ marginBottom: 32 }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`detail-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
            id={`tab-${tab.toLowerCase()}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="animate-fade-in" key={activeTab}>
        {activeTab === "Overview" && <OverviewTab college={college} />}
        {activeTab === "Courses" && <CoursesTab college={college} />}
        {activeTab === "Placements" && <PlacementsTab college={college} />}
        {activeTab === "Facilities" && <FacilitiesTab college={college} />}
      </div>
    </div>
  );
}

/* ─── Overview Tab ──────────────────────────────────────────── */

function OverviewTab({ college }: { college: College }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {/* About */}
      <div className="glass-card glass-card-static" style={{ padding: 28 }}>
        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 12 }}>
          About {college.shortName}
        </h3>
        <p
          style={{
            color: "var(--foreground-secondary)",
            lineHeight: 1.8,
            fontSize: "0.92rem",
            margin: 0,
          }}
        >
          {college.overview}
        </p>
      </div>

      {/* Key stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
        }}
      >
        {[
          { label: "Established", value: college.establishedYear.toString(), icon: "🏛️" },
          { label: "Location", value: `${college.location}, ${college.state}`, icon: "📍" },
          { label: "Type", value: college.type, icon: "🏷️" },
          { label: "Total Fees", value: formatCurrency(college.fees), icon: "💰" },
          { label: "Avg Package", value: formatCurrency(college.placements.averagePackage), icon: "📊" },
          { label: "Placement Rate", value: `${college.placements.placementRate}%`, icon: "🎯" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="glass-card"
            style={{ padding: 20, display: "flex", alignItems: "center", gap: 14 }}
          >
            <span style={{ fontSize: "1.5rem" }}>{stat.icon}</span>
            <div>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "var(--foreground-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: 2,
                }}
              >
                {stat.label}
              </div>
              <div style={{ fontWeight: 700, fontSize: "1rem" }}>{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="glass-card glass-card-static" style={{ padding: 28 }}>
        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 16 }}>
          Key Highlights
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 12,
          }}
        >
          {college.highlights.map((h) => (
            <div
              key={h}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 14px",
                background: "var(--surface)",
                borderRadius: "var(--radius-md)",
                fontSize: "0.88rem",
              }}
            >
              <span style={{ color: "var(--accent-primary)" }}>✦</span>
              {h}
            </div>
          ))}
        </div>
      </div>

      {/* Accreditations */}
      <div className="glass-card glass-card-static" style={{ padding: 28 }}>
        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 16 }}>
          Accreditations & Rankings
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {college.accreditation.map((a) => (
            <span
              key={a}
              style={{
                padding: "8px 16px",
                background: "rgba(99, 102, 241, 0.1)",
                border: "1px solid rgba(99, 102, 241, 0.25)",
                borderRadius: "var(--radius-full)",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#818cf8",
              }}
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Courses Tab ───────────────────────────────────────────── */

function CoursesTab({ college }: { college: College }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Available programs */}
      <div className="glass-card glass-card-static" style={{ padding: 28 }}>
        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 16 }}>
          Programs Offered
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {college.courses.map((c) => (
            <span
              key={c}
              style={{
                padding: "8px 18px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-full)",
                fontSize: "0.85rem",
                fontWeight: 600,
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Detailed table */}
      <div
        className="glass-card"
        style={{ padding: 0, overflow: "hidden" }}
      >
        <div style={{ padding: "20px 28px 0" }}>
          <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>
            Course Details
          </h3>
          <p style={{ color: "var(--foreground-muted)", fontSize: "0.85rem", margin: "0 0 16px" }}>
            Fees shown are per year (approximate)
          </p>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Duration</th>
                <th>Level</th>
                <th>Fees (Annual)</th>
                <th>Seats</th>
              </tr>
            </thead>
            <tbody>
              {college.courseDetails.map((course) => {
                const levelBadge =
                  course.level === "UG"
                    ? "badge-public"
                    : course.level === "PG"
                      ? "badge-private"
                      : "badge-deemed";
                return (
                  <tr key={course.name}>
                    <td style={{ fontWeight: 600 }}>{course.name}</td>
                    <td>{course.duration}</td>
                    <td>
                      <span className={`badge ${levelBadge}`}>{course.level}</span>
                    </td>
                    <td>{formatCurrency(course.fees)}</td>
                    <td>{course.seats}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Fee breakdown */}
      <div className="glass-card glass-card-static" style={{ padding: 28 }}>
        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 16 }}>
          Fee Breakdown (Total Program)
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 16,
          }}
        >
          {[
            { label: "Tuition", value: college.feesBreakdown.tuition, color: "#6366f1" },
            { label: "Hostel", value: college.feesBreakdown.hostel, color: "#8b5cf6" },
            { label: "Other", value: college.feesBreakdown.other, color: "#a855f7" },
          ].map((item) => (
            <div key={item.label} style={{ padding: 16, background: "var(--surface)", borderRadius: "var(--radius-md)" }}>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "var(--foreground-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: 6,
                }}
              >
                {item.label}
              </div>
              <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                {formatCurrency(item.value)}
              </div>
              <div
                style={{
                  marginTop: 8,
                  height: 4,
                  borderRadius: 2,
                  background: "var(--border)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${(item.value / college.fees) * 100}%`,
                    background: item.color,
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Placements Tab ────────────────────────────────────────── */

function PlacementsTab({ college }: { college: College }) {
  const pct = college.placements.placementRate;
  const circumference = 2 * Math.PI * 56;
  const dashOffset = circumference - (pct / 100) * circumference;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Top stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
        }}
      >
        {[
          { label: "Average Package", value: formatCurrency(college.placements.averagePackage) },
          { label: "Highest Package", value: formatCurrency(college.placements.highestPackage) },
          { label: "Median Package", value: formatCurrency(college.placements.medianPackage) },
        ].map((stat) => (
          <div key={stat.label} className="glass-card stat-card">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Placement rate donut */}
      <div
        className="glass-card"
        style={{
          padding: 32,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        <h3 style={{ fontSize: "1.15rem", fontWeight: 700 }}>Placement Rate</h3>
        <div className="placement-ring">
          <svg width="140" height="140" viewBox="0 0 140 140">
            <circle
              cx="70"
              cy="70"
              r="56"
              fill="none"
              stroke="var(--surface)"
              strokeWidth="12"
            />
            <circle
              cx="70"
              cy="70"
              r="56"
              fill="none"
              stroke="url(#ring-grad)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{ transition: "stroke-dashoffset 1s ease" }}
            />
            <defs>
              <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
          <div className="placement-ring-value">
            <span className="gradient-text">{pct}%</span>
            <span
              style={{
                fontSize: "0.7rem",
                color: "var(--foreground-muted)",
                fontWeight: 500,
              }}
            >
              Placed
            </span>
          </div>
        </div>
      </div>

      {/* Top recruiters */}
      <div className="glass-card glass-card-static" style={{ padding: 28 }}>
        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 16 }}>
          Top Recruiters
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: 12,
          }}
        >
          {college.placements.topRecruiters.map((name) => (
            <div
              key={name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 16px",
                background: "var(--surface)",
                borderRadius: "var(--radius-md)",
                fontWeight: 600,
                fontSize: "0.88rem",
                border: "1px solid var(--border)",
                transition: "all 0.25s",
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Facilities Tab ────────────────────────────────────────── */

const facilityIcons: Record<string, string> = {
  Library: "📚",
  "Central Library": "📚",
  "Digital Library": "📱",
  "Sports Complex": "⚽",
  "Sports Ground": "🏏",
  "Swimming Pool": "🏊",
  Hostel: "🏠",
  Hospital: "🏥",
  "Medical Centre": "🏥",
  "Medical Room": "🏥",
  Gymnasium: "💪",
  Auditorium: "🎭",
  "Seminar Hall": "🎤",
  "Research Labs": "🔬",
  "Research Park": "🔬",
  "Research Centres": "🔬",
  "Innovation Centre": "💡",
  "Innovation Hub": "💡",
  "Incubation Centre": "🚀",
  "Startup Incubator": "🚀",
  Cafeteria: "☕",
  "Food Court": "🍽️",
  "Wi-Fi Campus": "📶",
  ATM: "🏧",
  "Computer Centre": "💻",
  "Computer Labs": "💻",
  Beach: "🏖️",
  "Open Air Theatre": "🎬",
  "Guest House": "🏨",
  "National Nanofabrication Centre": "🔬",
  "Supercomputer Centre": "🖥️",
};

function FacilitiesTab({ college }: { college: College }) {
  return (
    <div className="glass-card" style={{ padding: 28 }}>
      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 20 }}>
        Campus Facilities
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: 12,
        }}
      >
        {college.facilities.map((f) => (
          <div
            key={f}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 16px",
              background: "var(--surface)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
              fontSize: "0.88rem",
              fontWeight: 500,
              transition: "all 0.25s ease",
            }}
          >
            <span style={{ fontSize: "1.25rem" }}>
              {facilityIcons[f] || "🏢"}
            </span>
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}
