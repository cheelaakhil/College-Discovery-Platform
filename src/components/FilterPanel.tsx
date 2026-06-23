"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface FilterPanelProps {
  locations: string[];
  types: string[];
}

export default function FilterPanel({ locations, types }: FilterPanelProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      params.delete("page");
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  return (
    <div className="filter-panel glass-card animate-fade-in-up stagger-1" style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ paddingBottom: 16, borderBottom: '1px solid var(--border)', marginBottom: -8 }}>
        <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: 'var(--radius-sm)', background: 'var(--accent-glow)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
          </div>
          Filters & Sorting
        </h3>
      </div>

      <div>
        <label
          htmlFor="filter-location"
          style={{
            display: "block",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "var(--foreground-secondary)",
            marginBottom: 8,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Location
        </label>
        <select
          id="filter-location"
          className="select-field"
          value={searchParams.get("location") || ""}
          onChange={(e) => updateParam("location", e.target.value)}
        >
          <option value="">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="filter-type"
          style={{
            display: "block",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "var(--foreground-secondary)",
            marginBottom: 8,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Institution Type
        </label>
        <select
          id="filter-type"
          className="select-field"
          value={searchParams.get("type") || ""}
          onChange={(e) => updateParam("type", e.target.value)}
        >
          <option value="">All Types</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="filter-rating"
          style={{
            display: "block",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "var(--foreground-secondary)",
            marginBottom: 8,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Minimum Rating
        </label>
        <select
          id="filter-rating"
          className="select-field"
          value={searchParams.get("minRating") || ""}
          onChange={(e) => updateParam("minRating", e.target.value)}
        >
          <option value="">Any Rating</option>
          <option value="4.5">4.5+ ★</option>
          <option value="4.0">4.0+ ★</option>
          <option value="3.5">3.5+ ★</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="filter-sort"
          style={{
            display: "block",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "var(--foreground-secondary)",
            marginBottom: 8,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Sort Results By
        </label>
        <select
          id="filter-sort"
          className="select-field"
          value={searchParams.get("sortBy") || ""}
          onChange={(e) => updateParam("sortBy", e.target.value)}
        >
          <option value="">Ranking (Default)</option>
          <option value="rating">User Rating</option>
          <option value="fees">Fees (Low to High)</option>
          <option value="package">Avg Package</option>
          <option value="name">Name (A–Z)</option>
        </select>
      </div>
    </div>
  );
}
