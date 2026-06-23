import Link from "next/link";
import { College } from "@/types/college";
import { formatCurrency } from "@/data/colleges";
import { getCollegeBannerStyle, getCollegeInitials } from "@/lib/collegeTheme";
import RatingStars from "./RatingStars";

export default function CollegeCard({ college }: { college: College }) {
  const typeBadgeClass =
    college.type === "Public"
      ? "badge-public"
      : college.type === "Private"
        ? "badge-private"
        : "badge-deemed";
  const bannerStyle = getCollegeBannerStyle(college);

  return (
    <Link
      href={`/colleges/${college.id}`}
      className="college-card animate-fade-in-up"
      id={`college-card-${college.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="college-card-image">
        {college.image ? (
          <img src={college.image} alt={college.name} />
        ) : (
          <div className="college-banner" style={bannerStyle}>
            <span className="college-banner-initials">{getCollegeInitials(college.shortName)}</span>
            <span className="college-banner-watermark">#{college.ranking}</span>
          </div>
        )}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            display: "flex",
            gap: 8,
          }}
        >
          <span className="badge badge-ranking">#{college.ranking}</span>
          <span className={`badge ${typeBadgeClass}`}>{college.type}</span>
        </div>
      </div>

      <div className="college-card-body">
        <div>
          <h3
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              margin: "0 0 4px",
              lineHeight: 1.3,
            }}
          >
            {college.shortName}
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "var(--foreground-secondary)",
              fontSize: "0.85rem",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {college.location}, {college.state}
          </div>
        </div>

        <RatingStars rating={college.rating} />

        <p
          style={{
            fontSize: "0.82rem",
            color: "var(--foreground-muted)",
            lineHeight: 1.5,
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {college.description}
        </p>

        <div className="college-card-stats">
          <div className="college-card-stat">
            <div className="college-card-stat-value">
              {formatCurrency(college.fees)}
            </div>
            <div className="college-card-stat-label">Fees</div>
          </div>
          <div className="college-card-stat">
            <div className="college-card-stat-value">
              {formatCurrency(college.placements.averagePackage)}
            </div>
            <div className="college-card-stat-label">Avg CTC</div>
          </div>
          <div className="college-card-stat">
            <div className="college-card-stat-value">
              {college.placements.placementRate}%
            </div>
            <div className="college-card-stat-label">Placed</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
