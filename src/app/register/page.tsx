"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        // Automatically log them in after registration
        await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        router.push("/dashboard");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "Registration failed");
        setLoading(false);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="animate-fade-in-up" style={{ maxWidth: 400, margin: "60px auto", padding: "40px 30px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "8px", fontWeight: 800 }}>Create an Account</h1>
      <p style={{ color: "var(--foreground-secondary)", marginBottom: "30px" }}>Save predictions and track your favorite colleges.</p>

      {error && (
        <div style={{ padding: "12px", background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.2)", borderRadius: "8px", color: "#ef4444", marginBottom: "20px" }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: 600 }}>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input-field"
            style={{ width: "100%", padding: "12px" }}
          />
        </div>
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
            minLength={6}
            className="input-field"
            style={{ width: "100%", padding: "12px" }}
          />
        </div>
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "14px", marginTop: "10px" }}>
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>

      <p style={{ marginTop: "24px", textAlign: "center", color: "var(--foreground-secondary)" }}>
        Already have an account? <Link href="/login" style={{ color: "var(--accent-primary)", fontWeight: 600, textDecoration: "none" }}>Log in</Link>
      </p>
    </div>
  );
}
