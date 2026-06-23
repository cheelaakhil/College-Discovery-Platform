import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCollegeById, getAllCollegeIds } from "@/data/colleges";
import { getCollegeBannerStyle, getCollegeInitials } from "@/lib/collegeTheme";
import CollegeDetailTabs from "@/components/CollegeDetailTabs";

// Generate static params for all colleges
export function generateStaticParams() {
  const ids = getAllCollegeIds();
  return ids.map((id) => ({
    id,
  }));
}

// Generate dynamic metadata based on the college
export async function generateMetadata(
  props: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const college = getCollegeById(params.id);
  
  if (!college) {
    return {
      title: "College Not Found | CollegeCompass",
    };
  }

  return {
    title: `${college.shortName} - Fees, Placements, Courses & Rankings | CollegeCompass`,
    description: college.description,
  };
}

export default async function CollegeDetailPage(
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const college = getCollegeById(params.id);

  if (!college) {
    notFound();
  }

  const typeBadgeClass =
    college.type === "Public"
      ? "badge-public"
      : college.type === "Private"
        ? "badge-private"
        : "badge-deemed";

  return (
    <div style={{ paddingBottom: 100 }}>
      {/* ── Hero Banner ── */}
      <div className="section-container" style={{ padding: "20px 24px 0" }}>
        {/* Breadcrumb */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: "0.85rem",
            color: "var(--foreground-muted)",
            marginBottom: 20,
          }}
        >
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-white">
            Home
          </Link>
          <span>/</span>
          <Link href="/colleges" style={{ color: "inherit", textDecoration: "none" }} className="hover:text-white">
            Colleges
          </Link>
          <span>/</span>
          <span style={{ color: "var(--foreground)" }}>{college.shortName}</span>
        </div>

        <div className="detail-hero animate-fade-in-up">
          {college.image ? (
            <img src={college.image} alt={college.name} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
          ) : (
            <div className="college-banner detail-banner" style={getCollegeBannerStyle(college)}>
              <span className="college-banner-initials detail-banner-initials">
                {getCollegeInitials(college.shortName)}
              </span>
            </div>
          )}
          <div className="detail-hero-overlay">
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              <span className="badge badge-ranking" style={{ fontSize: "0.85rem", padding: "6px 14px" }}>
                #{college.ranking} in India
              </span>
              <span className={`badge ${typeBadgeClass}`} style={{ fontSize: "0.85rem", padding: "6px 14px" }}>
                {college.type}
              </span>
            </div>
            
            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "white",
                lineHeight: 1.1,
                marginBottom: 8,
              }}
            >
              {college.name}
            </h1>
            
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "1rem",
                fontWeight: 500,
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {college.location}, {college.state}
              </span>
              <span>•</span>
              <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#fbbf24" }}>
                ★ {college.rating} / 5
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="section-container" style={{ marginTop: 40 }}>
        <CollegeDetailTabs college={college} />
      </div>
    </div>
  );
}
