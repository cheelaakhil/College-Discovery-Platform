"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState, useEffect, useCallback } from "react";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("search") || "");
  const [isFocused, setIsFocused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pushSearch = useCallback(
    (query: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (query) {
        params.set("search", query);
      } else {
        params.delete("search");
      }
      params.delete("page");
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValue(searchParams.get("search") || "");
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValue(v);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => pushSearch(v), 300);
  };

  const handleClear = () => {
    setValue("");
    pushSearch("");
  };

  return (
    <div 
      className="animate-fade-in-up" 
      style={{ 
        position: "relative", 
        width: "100%", 
        transform: isFocused ? "translateY(-2px)" : "translateY(0)",
        transition: "transform 0.3s ease"
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke={isFocused ? "var(--accent-primary)" : "var(--foreground-muted)"}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          position: "absolute",
          left: 18,
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          transition: "stroke 0.3s ease"
        }}
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        id="search-input"
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search colleges by name, location, or state..."
        className="input-field"
        style={{ 
          paddingLeft: 48, 
          paddingRight: value ? 48 : 20,
          paddingTop: 16,
          paddingBottom: 16,
          fontSize: '1.05rem',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(26, 31, 53, 0.4)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--glass-border)',
          boxShadow: isFocused ? '0 0 0 3px var(--accent-glow)' : '0 8px 32px rgba(0,0,0,0.15)',
        }}
      />
      {value && (
        <button
          onClick={handleClear}
          aria-label="Clear search"
          style={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            background: "var(--surface-hover)",
            border: "1px solid var(--border)",
            borderRadius: "50%",
            color: "var(--foreground)",
            cursor: "pointer",
            width: 24,
            height: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            lineHeight: 1,
            transition: "all 0.2s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--danger)';
            e.currentTarget.style.borderColor = 'var(--danger)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--surface-hover)';
            e.currentTarget.style.borderColor = 'var(--border)';
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}
