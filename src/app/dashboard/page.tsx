import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
  }

  const userId = (session.user as any).id;

  const savedPredictions = await prisma.predictionResult.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="animate-fade-in-up" style={{ maxWidth: 800, margin: "60px auto", padding: "40px 30px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "8px", fontWeight: 800 }}>
        Welcome back, <span className="gradient-text">{session.user.name || "User"}</span>
      </h1>
      <p style={{ color: "var(--foreground-secondary)", marginBottom: "40px", fontSize: "1.1rem" }}>
        Here are your saved college predictions.
      </p>

      {savedPredictions.length === 0 ? (
        <div className="glass-card" style={{ padding: "40px", textAlign: "center" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)", margin: "0 auto 16px" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--foreground-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 8px" }}>No saved predictions</h3>
          <p style={{ color: "var(--foreground-secondary)", margin: 0 }}>Use the Predictor tool and save your results to see them here.</p>
        </div>
      ) : (
        <div style={{ display: "grid", gap: "20px" }}>
          {savedPredictions.map((pred) => (
            <div key={pred.id} className="glass-card" style={{ padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 8px" }}>{pred.exam}</h3>
                <div style={{ display: "flex", gap: "16px", color: "var(--foreground-secondary)", fontSize: "0.95rem" }}>
                  <span><strong style={{ color: "var(--foreground)" }}>Rank:</strong> {pred.rank}</span>
                  <span><strong style={{ color: "var(--foreground)" }}>Category:</strong> {pred.category}</span>
                  <span><strong style={{ color: "var(--foreground)" }}>State:</strong> {pred.state}</span>
                </div>
              </div>
              <div style={{ color: "var(--foreground-muted)", fontSize: "0.85rem" }}>
                {new Date(pred.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
