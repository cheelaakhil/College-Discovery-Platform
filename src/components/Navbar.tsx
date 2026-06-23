"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const navLinks = [
  { href: "/", label: "Home", match: (path: string) => path === "/" },
  {
    href: "/colleges",
    label: "Colleges",
    match: (path: string) => path === "/colleges" || path.startsWith("/colleges/"),
  },
  { href: "/compare", label: "Compare", match: (path: string) => path === "/compare" },
  { href: "/predictor", label: "Predictor", match: (path: string) => path === "/predictor" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo" id="navbar-logo">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="8" fill="url(#logo-grad)" />
              <path
                d="M16 6L8 11V21L16 26L24 21V11L16 6Z"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
              <path d="M16 6V26" stroke="white" strokeWidth="1.5" />
              <path d="M8 11L24 21" stroke="white" strokeWidth="1.5" />
              <path d="M24 11L8 21" stroke="white" strokeWidth="1.5" />
              <defs>
                <linearGradient
                  id="logo-grad"
                  x1="0"
                  y1="0"
                  x2="32"
                  y2="32"
                >
                  <stop stopColor="#6366f1" />
                  <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
            <span>
              College<span className="gradient-text">Compass</span>
            </span>
          </Link>

          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`navbar-link ${
                    link.match(pathname) ? "navbar-link-active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {session ? (
              <>
                <li>
                  <Link href="/dashboard" className={`navbar-link ${pathname === "/dashboard" ? "navbar-link-active" : ""}`}>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button onClick={() => signOut()} className="navbar-link" style={{ background: "none", border: "none", cursor: "pointer", padding: "10px 16px" }}>
                    Log out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link href="/login" className={`navbar-link ${pathname === "/login" ? "navbar-link-active" : ""}`}>
                  Log In
                </Link>
              </li>
            )}
          </ul>

          <button
            className="navbar-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span
              style={{
                transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none",
              }}
            />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span
              style={{
                transform: mobileOpen
                  ? "rotate(-45deg) translateY(-7px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <ul className="mobile-menu-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`mobile-menu-link ${
                  link.match(pathname) ? "navbar-link-active" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {session ? (
            <>
              <li>
                <Link href="/dashboard" className={`mobile-menu-link ${pathname === "/dashboard" ? "navbar-link-active" : ""}`}>
                  Dashboard
                </Link>
              </li>
              <li>
                <button onClick={() => signOut()} className="mobile-menu-link" style={{ background: "none", border: "none", cursor: "pointer", width: "100%", textAlign: "left" }}>
                  Log out
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login" className={`mobile-menu-link ${pathname === "/login" ? "navbar-link-active" : ""}`}>
                Log In
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
