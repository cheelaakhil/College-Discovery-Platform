"use client";

import { useState } from "react";
import { getAllColleges } from "@/data/colleges";
import CollegeCard from "@/components/CollegeCard";
import { College } from "@/types/college";
import { useSession } from "next-auth/react";

type Exam = "JEE Advanced" | "JEE Main" | "BITSAT" | "State CET";

export default function PredictorTool() {
  const { data: session } = useSession();
  const [exam, setExam] = useState<Exam | "">("");
  const [rank, setRank] = useState<string>("");
  const [hasPredicted, setHasPredicted] = useState(false);
  const [isPredicting, setIsPredicting] = useState(false);
  const [results, setResults] = useState<{ high: College[]; moderate: College[]; tough: College[] } | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!exam || !rank) return;

    setIsPredicting(true);
    
    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rank, exam, category: 'General' }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setResults({ 
          high: data.safe, 
          moderate: data.reach, 
          tough: data.dream 
        });
        setHasPredicted(true);
      } else {
        console.error("Prediction failed");
      }
    } catch (error) {
      console.error("Prediction error:", error);
    } finally {
      setIsPredicting(false);
    }
  };

  const handleReset = () => {
    setHasPredicted(false);
    setResults(null);
    setSaved(false);
  };

  const handleSave = async () => {
    if (!session || !exam || !rank) return;
    setSaving(true);
    try {
      const res = await fetch("/api/predict/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ exam, rank, category: "General", state: "All India" }),
      });
      if (res.ok) {
        setSaved(true);
      }
    } catch (err) {
      console.error("Failed to save:", err);
    } finally {
      setSaving(false);
    }
  };

  if (hasPredicted && results) {
    return (
      <div className="animate-fade-in-up">
        <div className="glass-card" style={{ padding: "24px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40, borderLeft: "4px solid var(--accent-primary)" }}>
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 8px", display: "flex", alignItems: "center", gap: 12 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
              Prediction Results
            </h2>
            <p style={{ color: "var(--foreground-secondary)", margin: 0, fontSize: "1.05rem" }}>
              Based on <strong style={{ color: "var(--foreground)" }}>{exam}</strong> rank/score of <strong style={{ color: "var(--foreground)" }}>{rank}</strong>
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            {session && !saved && (
              <button onClick={handleSave} disabled={saving} className="btn-primary" style={{ padding: "10px 20px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>
                </svg>
                {saving ? "Saving..." : "Save Result"}
              </button>
            )}
            {session && saved && (
              <span style={{ display: "inline-flex", alignItems: "center", padding: "10px 20px", color: "#10b981", fontWeight: 600, background: "rgba(16, 185, 129, 0.1)", borderRadius: "var(--radius-md)", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                Saved!
              </span>
            )}
            <button onClick={handleReset} className="btn-secondary" style={{ padding: "10px 20px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                <path d="M3 3v5h5"/>
              </svg>
              Check Another
            </button>
          </div>
        </div>

        {results.high.length > 0 && (
          <div className="animate-fade-in-up stagger-1" style={{ marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(16, 185, 129, 0.1)", padding: "8px 16px", borderRadius: "var(--radius-full)", border: "1px solid rgba(16, 185, 129, 0.2)", marginBottom: 20 }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, borderRadius: "50%", background: "rgba(16, 185, 129, 0.2)", color: "#10b981" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#10b981", margin: 0 }}>High Chances</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
              {results.high.map(c => <CollegeCard key={c.id} college={c} />)}
            </div>
          </div>
        )}

        {results.moderate.length > 0 && (
          <div className="animate-fade-in-up stagger-2" style={{ marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(245, 158, 11, 0.1)", padding: "8px 16px", borderRadius: "var(--radius-full)", border: "1px solid rgba(245, 158, 11, 0.2)", marginBottom: 20 }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, borderRadius: "50%", background: "rgba(245, 158, 11, 0.2)", color: "#f59e0b" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              </span>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f59e0b", margin: 0 }}>Moderate Chances</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
              {results.moderate.map(c => <CollegeCard key={c.id} college={c} />)}
            </div>
          </div>
        )}

        {results.tough.length > 0 && (
          <div className="animate-fade-in-up stagger-3" style={{ marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(239, 68, 68, 0.1)", padding: "8px 16px", borderRadius: "var(--radius-full)", border: "1px solid rgba(239, 68, 68, 0.2)", marginBottom: 20 }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, borderRadius: "50%", background: "rgba(239, 68, 68, 0.2)", color: "#ef4444" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
              </span>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ef4444", margin: 0 }}>Tough Chances (Reach)</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
              {results.tough.map(c => <CollegeCard key={c.id} college={c} />)}
            </div>
          </div>
        )}

        {results.high.length === 0 && results.moderate.length === 0 && results.tough.length === 0 && (
          <div className="glass-card animate-fade-in-up stagger-1" style={{ textAlign: "center", padding: "80px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--foreground-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 8px" }}>No Matches Found</h3>
              <p style={{ color: "var(--foreground-secondary)", margin: 0, maxWidth: 400 }}>We couldn't find any matching colleges in our database for this specific exam and rank combination.</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up" style={{ position: "relative", maxWidth: 560, margin: "0 auto" }}>
      {/* Decorative background glow */}
      <div style={{
        position: "absolute",
        top: -20,
        left: -20,
        right: -20,
        bottom: -20,
        background: "var(--accent-glow)",
        filter: "blur(60px)",
        borderRadius: "50%",
        zIndex: -1,
        opacity: isPredicting ? 0.8 : 0.4,
        transition: "opacity 0.5s ease"
      }} className="animate-pulse-glow" />

      <div className="glass-card" style={{ padding: "48px 40px", position: "relative", overflow: "hidden" }}>
        
        {/* Decorative corner accent */}
        <div style={{ position: "absolute", top: 0, right: 0, width: 120, height: 120, background: "var(--accent-gradient)", opacity: 0.1, filter: "blur(30px)", borderBottomLeftRadius: "100%" }} />

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: "16px", background: "rgba(99, 102, 241, 0.1)", color: "var(--accent-primary)", marginBottom: 20, border: "1px solid rgba(99, 102, 241, 0.2)" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, margin: "0 0 12px" }}>Find Your <span className="gradient-text-animated">Match</span></h2>
          <p style={{ color: "var(--foreground-secondary)", fontSize: "1.05rem", margin: 0, lineHeight: 1.6 }}>
            Enter your exam details below to discover which top colleges you have the best chance of getting into.
          </p>
        </div>

        <form onSubmit={handlePredict}>
          <div style={{ marginBottom: 28 }}>
            <label htmlFor="exam" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.9rem", fontWeight: 700, color: "var(--foreground)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              Select Exam
            </label>
            <div style={{ position: "relative" }}>
              <select
                id="exam"
                className="select-field"
                value={exam}
                onChange={(e) => setExam(e.target.value as Exam)}
                required
                style={{ width: "100%", padding: "16px 20px", fontSize: "1.05rem", background: "rgba(26, 31, 53, 0.5)" }}
              >
                <option value="" disabled>-- Choose an Exam --</option>
                <option value="JEE Advanced">JEE Advanced (For IITs)</option>
                <option value="JEE Main">JEE Main (For NITs/IIITs)</option>
                <option value="BITSAT">BITSAT (Enter Score, not rank)</option>
                <option value="State CET">State CET (VITEEE/WBJEE/TNEA)</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: 40 }}>
            <label htmlFor="rank" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.9rem", fontWeight: 700, color: "var(--foreground)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              Expected/Actual Rank (or Score)
            </label>
            <input
              id="rank"
              type="number"
              className="input-field"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              required
              placeholder="e.g. 1500"
              min="1"
              style={{ width: "100%", padding: "16px 20px", fontSize: "1.05rem", background: "rgba(26, 31, 53, 0.5)" }}
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ 
              width: "100%", 
              justifyContent: "center", 
              padding: "16px", 
              fontSize: "1.1rem",
              position: "relative",
              overflow: "hidden"
            }}
            disabled={!exam || !rank || isPredicting}
          >
            {isPredicting ? (
              <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "spin-slow 1s linear infinite" }}>
                  <line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                </svg>
                Analyzing Historical Data...
              </span>
            ) : (
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                Predict My Colleges
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
