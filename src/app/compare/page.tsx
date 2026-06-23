import { Metadata } from "next";
import { Suspense } from "react";
import CompareTool from "@/components/CompareTool";

export const metadata: Metadata = {
  title: "Compare Colleges | CollegeCompass",
  description: "Compare engineering colleges side-by-side based on fees, placements, rankings, and facilities.",
};

export default function ComparePage() {
  return (
    <div style={{ padding: "40px 0 100px" }}>
      <div className="section-container">
        <div style={{ marginBottom: 40, textAlign: "center" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: 12 }}>
            Compare <span className="gradient-text-animated">Colleges</span>
          </h1>
          <p style={{ color: "var(--foreground-secondary)", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto" }}>
            Make an informed decision by comparing up to 3 colleges side-by-side. 
            Analyze fees, placements, and ratings to find your perfect fit.
          </p>
        </div>

        <Suspense
          fallback={
            <div style={{ padding: "60px 0", textAlign: "center", color: "var(--foreground-secondary)" }}>
              Loading comparison tool...
            </div>
          }
        >
          <CompareTool />
        </Suspense>
      </div>
    </div>
  );
}
