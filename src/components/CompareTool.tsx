"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import Link from "next/link";
import { getAllColleges, formatCurrency, getCollegeById } from "@/data/colleges";
import { College } from "@/types/college";

export default function CompareTool() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const allColleges = getAllColleges();
  
  // Read IDs from URL, limit to 3; default to two empty slots for easier discovery
  const urlIds = searchParams.get("ids");
  const initialIds = urlIds ? urlIds.split(",").slice(0, 3) : ["", ""];
  
  const [selectedIds, setSelectedIds] = useState<string[]>(initialIds);

  const updateUrl = useCallback(
    (ids: string[]) => {
      const params = new URLSearchParams(searchParams.toString());
      const validIds = ids.filter(Boolean);
      if (validIds.length > 0) {
        params.set("ids", validIds.join(","));
      } else {
        params.delete("ids");
      }
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const handleSelect = (index: number, newId: string) => {
    const newIds = [...selectedIds];
    if (newId) {
      newIds[index] = newId;
    } else {
      newIds.splice(index, 1);
    }
    setSelectedIds(newIds);
    updateUrl(newIds);
  };

  const handleRemove = (index: number) => {
    const newIds = [...selectedIds];
    newIds.splice(index, 1);
    setSelectedIds(newIds);
    updateUrl(newIds);
  };

  const handleAdd = () => {
    if (selectedIds.length < 3) {
      setSelectedIds([...selectedIds, ""]);
    }
  };

  // Get the actual college data for the selected IDs
  const selectedColleges = selectedIds.map(id => getCollegeById(id));

  // If we have less than 3, we add placeholders for the UI
  const slots = [0, 1, 2];

  return (
    <div className="animate-fade-in">
      {/* Selection Area */}
      <div className="glass-card" style={{ padding: 24, marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>Select Colleges to Compare</h2>
          {selectedIds.length < 3 && (
            <button onClick={handleAdd} className="btn-secondary" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
              + Add College
            </button>
          )}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
          {selectedIds.map((id, idx) => (
            <div key={idx} style={{ position: "relative" }}>
              <select
                className="select-field"
                value={id}
                onChange={(e) => handleSelect(idx, e.target.value)}
                style={{ width: "100%", paddingRight: 40 }}
              >
                <option value="">-- Choose a College --</option>
                {allColleges.map((c) => (
                  <option key={c.id} value={c.id} disabled={selectedIds.includes(c.id) && c.id !== id}>
                    {c.shortName} - {c.location}
                  </option>
                ))}
              </select>
              {selectedIds.length > 1 && (
                <button
                  onClick={() => handleRemove(idx)}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "var(--foreground-muted)",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    lineHeight: 1,
                  }}
                  aria-label="Remove college"
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      {selectedColleges.filter(Boolean).length > 0 ? (
        <div className="glass-card" style={{ overflowX: "auto", padding: 0 }}>
          <table className="data-table" style={{ minWidth: 800 }}>
            <thead>
              <tr>
                <th style={{ width: "20%", background: "var(--surface)", position: "sticky", left: 0, zIndex: 10 }}>Feature</th>
                {slots.map(i => (
                  <th key={i} style={{ width: "26.6%" }}>
                    {selectedColleges[i] ? (
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <span style={{ fontSize: "1.1rem", fontWeight: 700 }}>{selectedColleges[i]?.shortName}</span>
                        <Link href={`/colleges/${selectedColleges[i]?.id}`} className="btn-primary" style={{ padding: "6px 12px", fontSize: "0.8rem", textAlign: "center" }}>
                          View Details
                        </Link>
                      </div>
                    ) : (
                      <span style={{ color: "var(--foreground-muted)", fontWeight: 400 }}>Empty Slot</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Basic Info */}
              <tr style={{ background: "rgba(255,255,255,0.02)" }}>
                <td colSpan={4} style={{ fontWeight: 700, color: "var(--accent-primary)" }}>Basic Information</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, background: "var(--surface)", position: "sticky", left: 0 }}>Location</td>
                {slots.map(i => <td key={i}>{selectedColleges[i] ? `${selectedColleges[i]?.location}, ${selectedColleges[i]?.state}` : "-"}</td>)}
              </tr>
              <tr>
                <td style={{ fontWeight: 600, background: "var(--surface)", position: "sticky", left: 0 }}>Type</td>
                {slots.map(i => <td key={i}>{selectedColleges[i]?.type || "-"}</td>)}
              </tr>
              <tr>
                <td style={{ fontWeight: 600, background: "var(--surface)", position: "sticky", left: 0 }}>Ranking</td>
                {slots.map(i => <td key={i}>{selectedColleges[i] ? `#${selectedColleges[i]?.ranking}` : "-"}</td>)}
              </tr>
              <tr>
                <td style={{ fontWeight: 600, background: "var(--surface)", position: "sticky", left: 0 }}>Rating</td>
                {slots.map(i => <td key={i}>{selectedColleges[i] ? `★ ${selectedColleges[i]?.rating}` : "-"}</td>)}
              </tr>

              {/* Fees */}
              <tr style={{ background: "rgba(255,255,255,0.02)" }}>
                <td colSpan={4} style={{ fontWeight: 700, color: "var(--accent-primary)" }}>Fees Structure (Annual)</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, background: "var(--surface)", position: "sticky", left: 0 }}>Total Fees</td>
                {slots.map(i => <td key={i}>{selectedColleges[i] ? formatCurrency(selectedColleges[i]?.fees!) : "-"}</td>)}
              </tr>
              <tr>
                <td style={{ fontWeight: 600, background: "var(--surface)", position: "sticky", left: 0 }}>Tuition</td>
                {slots.map(i => <td key={i} style={{ color: "var(--foreground-secondary)" }}>{selectedColleges[i] ? formatCurrency(selectedColleges[i]?.feesBreakdown.tuition!) : "-"}</td>)}
              </tr>
              <tr>
                <td style={{ fontWeight: 600, background: "var(--surface)", position: "sticky", left: 0 }}>Hostel</td>
                {slots.map(i => <td key={i} style={{ color: "var(--foreground-secondary)" }}>{selectedColleges[i] ? formatCurrency(selectedColleges[i]?.feesBreakdown.hostel!) : "-"}</td>)}
              </tr>

              {/* Placements */}
              <tr style={{ background: "rgba(255,255,255,0.02)" }}>
                <td colSpan={4} style={{ fontWeight: 700, color: "var(--accent-primary)" }}>Placements</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, background: "var(--surface)", position: "sticky", left: 0 }}>Average Package</td>
                {slots.map(i => <td key={i} style={{ fontWeight: 600, color: "#10b981" }}>{selectedColleges[i] ? formatCurrency(selectedColleges[i]?.placements.averagePackage!) : "-"}</td>)}
              </tr>
              <tr>
                <td style={{ fontWeight: 600, background: "var(--surface)", position: "sticky", left: 0 }}>Highest Package</td>
                {slots.map(i => <td key={i}>{selectedColleges[i] ? formatCurrency(selectedColleges[i]?.placements.highestPackage!) : "-"}</td>)}
              </tr>
              <tr>
                <td style={{ fontWeight: 600, background: "var(--surface)", position: "sticky", left: 0 }}>Placement Rate</td>
                {slots.map(i => <td key={i}>{selectedColleges[i] ? `${selectedColleges[i]?.placements.placementRate}%` : "-"}</td>)}
              </tr>
              <tr>
                <td style={{ fontWeight: 600, background: "var(--surface)", position: "sticky", left: 0 }}>Top Recruiters</td>
                {slots.map(i => (
                  <td key={i} style={{ fontSize: "0.85rem", lineHeight: 1.5 }}>
                    {selectedColleges[i] ? selectedColleges[i]?.placements.topRecruiters.slice(0, 4).join(", ") + "..." : "-"}
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>
      ) : (
        <div className="glass-card" style={{ textAlign: "center", padding: "60px 20px" }}>
          <div style={{ fontSize: "3rem", marginBottom: 16 }}>⚖️</div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 8 }}>No Colleges Selected</h3>
          <p style={{ color: "var(--foreground-secondary)", fontSize: "0.95rem" }}>
            Select up to 3 colleges from the dropdowns above to compare their fees, placements, and rankings side-by-side.
          </p>
        </div>
      )}
    </div>
  );
}
