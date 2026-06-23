import { Metadata } from "next";
import PredictorTool from "@/components/PredictorTool";

export const metadata: Metadata = {
  title: "College Predictor | CollegeCompass",
  description: "Predict your chances of getting into top engineering colleges based on your JEE Main, JEE Advanced, or state CET ranks.",
};

export default function PredictorPage() {
  return (
    <div style={{ padding: "40px 0 100px" }}>
      <div className="section-container">
        <div style={{ marginBottom: 40, textAlign: "center" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: 12 }}>
            College <span className="gradient-text">Predictor</span>
          </h1>
          <p style={{ color: "var(--foreground-secondary)", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto" }}>
            Enter your competitive exam rank or score to see which colleges you have
            the best chances of getting into based on historical cutoff trends.
          </p>
        </div>

        <PredictorTool />
      </div>
    </div>
  );
}
