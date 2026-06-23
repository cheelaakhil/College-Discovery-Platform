import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="navbar-logo" style={{ marginBottom: 8 }}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="8" fill="url(#footer-logo)" />
              <path
                d="M16 6L8 11V21L16 26L24 21V11L16 6Z"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
              <path d="M16 6V26" stroke="white" strokeWidth="1.5" />
              <defs>
                <linearGradient
                  id="footer-logo"
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
          <p>
            Your trusted guide to discovering the perfect college in India.
            Data-driven insights, real placement stats, and comprehensive
            college profiles — all in one place.
          </p>
        </div>

        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-link-list">
            <li>
              <Link href="/" className="footer-link">Home</Link>
            </li>
            <li>
              <Link href="/colleges" className="footer-link">All Colleges</Link>
            </li>
            <li>
              <Link href="/compare" className="footer-link">Compare Colleges</Link>
            </li>
            <li>
              <Link href="/predictor" className="footer-link">College Predictor</Link>
            </li>
            <li>
              <Link href="/colleges?type=Public" className="footer-link">Public Colleges</Link>
            </li>
            <li>
              <Link href="/colleges?type=Private" className="footer-link">Private Colleges</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Top Colleges</h4>
          <ul className="footer-link-list">
            <li>
              <Link href="/colleges/iit-bombay" className="footer-link">IIT Bombay</Link>
            </li>
            <li>
              <Link href="/colleges/iit-delhi" className="footer-link">IIT Delhi</Link>
            </li>
            <li>
              <Link href="/colleges/iit-madras" className="footer-link">IIT Madras</Link>
            </li>
            <li>
              <Link href="/colleges/iisc-bangalore" className="footer-link">IISc Bangalore</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-link-list">
            <li>
              <Link href="/colleges?sortBy=ranking" className="footer-link">Rankings</Link>
            </li>
            <li>
              <Link href="/colleges?sortBy=fees" className="footer-link">Compare Fees</Link>
            </li>
            <li>
              <Link href="/colleges?sortBy=package" className="footer-link">Placements</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} CollegeCompass. All rights reserved.</span>
        <span>Made with ❤️ for students</span>
      </div>
    </footer>
  );
}
