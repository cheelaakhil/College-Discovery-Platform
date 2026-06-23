import { Metadata } from "next";
import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import SearchBar from "@/components/SearchBar";
import FilterPanel from "@/components/FilterPanel";
import CollegeCard from "@/components/CollegeCard";
import { College } from "@/types/college";

export const metadata: Metadata = {
  title: "All Colleges | CollegeCompass",
  description: "Browse, filter, and compare top engineering colleges in India based on rankings, placements, and fees.",
};

export default async function CollegesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  // 1. Get unique locations and types for the FilterPanel
  const locationsData = await prisma.college.findMany({
    select: { location: true },
    distinct: ["location"],
    orderBy: { location: "asc" },
  });
  const locations = locationsData.map((l) => l.location);

  const typesData = await prisma.college.findMany({
    select: { type: true },
    distinct: ["type"],
    orderBy: { type: "asc" },
  });
  const types = typesData.map((t) => t.type);

  // 2. Build Prisma Query
  const search = typeof params.search === "string" ? params.search : undefined;
  const location = typeof params.location === "string" ? params.location : undefined;
  const type = typeof params.type === "string" ? params.type : undefined;
  const minRating = typeof params.minRating === "string" ? parseFloat(params.minRating) : undefined;
  const sortBy = typeof params.sortBy === "string" ? params.sortBy : undefined;

  const where: any = {};

  if (search) {
    where.OR = [
      { name: { contains: search } },
      { shortName: { contains: search } },
      { location: { contains: search } },
      { state: { contains: search } },
    ];
  }

  if (location) {
    where.location = location;
  }

  if (type) {
    where.type = type;
  }

  if (minRating) {
    where.rating = { gte: minRating };
  }

  let orderBy: any = { ranking: "asc" }; // default
  if (sortBy === "rating") orderBy = { rating: "desc" };
  if (sortBy === "fees") orderBy = { fees: "asc" };
  if (sortBy === "package") orderBy = { avgPackage: "desc" };
  if (sortBy === "name") orderBy = { name: "asc" };

  // 3. Fetch Data
  const rawColleges = await prisma.college.findMany({
    where,
    orderBy,
  });

  // Parse JSON strings back to arrays
  const parsedColleges = rawColleges.map((c) => ({
    ...c,
    courses: JSON.parse(c.coursesString),
    facilities: JSON.parse(c.facilitiesString),
    accreditation: JSON.parse(c.accreditationString),
    highlights: JSON.parse(c.highlightsString),
    placements: {
      averagePackage: c.avgPackage,
      highestPackage: c.highestPackage,
      medianPackage: c.medianPackage,
      placementRate: c.placementRate,
      topRecruiters: JSON.parse(c.topRecruitersString),
    },
    feesBreakdown: {
      tuition: c.tuitionFee,
      hostel: c.hostelFee,
      other: c.otherFee,
    },
    courseDetails: [], // Skipping for list view
  })) as College[];

  const hasActiveFilters = !!(search || location || type || minRating || sortBy);

  return (
    <div style={{ padding: "40px 0 100px" }}>
      <div className="section-container">
        <div style={{ marginBottom: 40, textAlign: "center" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: 12 }}>
            Explore <span className="gradient-text-animated">Colleges</span>
          </h1>
          <p style={{ color: "var(--foreground-secondary)", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto" }}>
            Find the right fit for your future. Use the filters below to narrow down
            colleges by location, type, rating, and more.
          </p>
        </div>

        <div>
          {/* Search */}
          <div style={{ marginBottom: 20 }}>
            <SearchBar />
          </div>

          {/* Filters */}
          <div style={{ marginBottom: 28 }}>
            <FilterPanel locations={locations} types={types} />
          </div>

          {/* Results info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 24,
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <p
              style={{
                color: "var(--foreground-secondary)",
                fontSize: "0.9rem",
                margin: 0,
              }}
            >
              Showing{" "}
              <span style={{ color: "var(--foreground)", fontWeight: 700 }}>
                {parsedColleges.length}
              </span>{" "}
              {parsedColleges.length === 1 ? "college" : "colleges"}
            </p>
            {hasActiveFilters && (
              <a
                href="/colleges"
                className="btn-secondary"
                style={{
                  padding: "6px 16px",
                  fontSize: "0.8rem",
                  textDecoration: "none",
                  display: "inline-block"
                }}
              >
                Clear all filters
              </a>
            )}
          </div>

          {/* Grid */}
          {parsedColleges.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: 24,
              }}
            >
              {parsedColleges.map((college: College, index: number) => (
                <div
                  key={college.id}
                  style={{ animationDelay: `${index * 0.08}s` }}
                  className="animate-fade-in-up"
                >
                  <CollegeCard college={college} />
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "80px 20px",
              }}
              className="glass-card"
            >
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>🔍</div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                No colleges found
              </h3>
              <p
                style={{
                  color: "var(--foreground-secondary)",
                  fontSize: "0.9rem",
                  marginBottom: 20,
                }}
              >
                Try adjusting your search or filters to find what you&apos;re
                looking for.
              </p>
              <a href="/colleges" className="btn-primary" style={{ textDecoration: "none", display: "inline-block" }}>
                Clear all filters
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
