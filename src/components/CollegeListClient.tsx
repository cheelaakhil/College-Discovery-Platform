"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { College, CollegeFilters } from "@/types/college";
import { getColleges, getLocations, getCollegeTypes } from "@/data/colleges";
import CollegeCard from "./CollegeCard";
import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";

export default function CollegeListClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filters: CollegeFilters = useMemo(() => ({
    search: searchParams.get("search") || undefined,
    location: searchParams.get("location") || undefined,
    type: searchParams.get("type") || undefined,
    minRating: searchParams.get("minRating")
      ? Number(searchParams.get("minRating"))
      : undefined,
    sortBy: (searchParams.get("sortBy") as CollegeFilters["sortBy"]) || undefined,
  }), [searchParams]);

  const result = useMemo(
    () => getColleges({ ...filters, limit: 50 }),
    [filters]
  );
  const locations = useMemo(() => getLocations(), []);
  const types = useMemo(() => getCollegeTypes(), []);

  const hasActiveFilters =
    filters.search || filters.location || filters.type || filters.minRating || filters.sortBy;

  const clearAll = () => {
    router.replace(pathname, { scroll: false });
  };

  return (
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
            {result.total}
          </span>{" "}
          {result.total === 1 ? "college" : "colleges"}
        </p>
        {hasActiveFilters && (
          <button
            onClick={clearAll}
            style={{
              background: "none",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-full)",
              padding: "6px 16px",
              color: "var(--foreground-secondary)",
              fontSize: "0.8rem",
              cursor: "pointer",
              transition: "all 0.25s",
            }}
            onMouseOver={(e) => {
              (e.target as HTMLButtonElement).style.borderColor =
                "var(--accent-primary)";
              (e.target as HTMLButtonElement).style.color =
                "var(--accent-primary)";
            }}
            onMouseOut={(e) => {
              (e.target as HTMLButtonElement).style.borderColor = "var(--border)";
              (e.target as HTMLButtonElement).style.color =
                "var(--foreground-secondary)";
            }}
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Grid */}
      {result.total > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
          }}
        >
          {result.colleges.map((college: College, index: number) => (
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
          <button onClick={clearAll} className="btn-primary">
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
