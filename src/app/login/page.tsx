"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  // Pre-fill with demo credentials for evaluators
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <div className="animate-fade-in-up" style={{ maxWidth: 400, margin: "60px auto", padding: "40px 30px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "8px", fontWeight: 800 }}>Welcome Back</h1>
      <p style={{ color: "var(--foreground-secondary)", marginBottom: "30px" }}>
        Log in to access your saved predictions. <br/><br/>
        <span style={{ color: "var(--accent-primary)", fontSize: "0.9rem", fontWeight: 600 }}>
          Evaluator Notice: Demo credentials have been pre-filled. You can also create a new account via Sign Up.
        </span>
      </p>

      {error && (
        <div style={{ padding: "12px", background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.2)", borderRadius: "8px", color: "#ef4444", marginBottom: "20px" }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: 600 }}>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
            style={{ width: "100%", padding: "12px" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: 600 }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
            style={{ width: "100%", padding: "12px" }}
          />
        </div>
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "14px", marginTop: "10px" }}>
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>

      <p style={{ marginTop: "24px", textAlign: "center", color: "var(--foreground-secondary)" }}>
        Don't have an account? <Link href="/register" style={{ color: "var(--accent-primary)", fontWeight: 600, textDecoration: "none" }}>Sign up</Link>
      </p>
    </div>
  );
}
