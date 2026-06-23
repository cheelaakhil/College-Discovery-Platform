import { College } from "@/types/college";

const TYPE_GRADIENTS: Record<College["type"], string> = {
  Public:
    "linear-gradient(135deg, #1e3a5f 0%, #3730a3 45%, #6366f1 100%)",
  Private:
    "linear-gradient(135deg, #78350f 0%, #b45309 45%, #f59e0b 100%)",
  Deemed:
    "linear-gradient(135deg, #581c87 0%, #7e22ce 45%, #a855f7 100%)",
};

export function getCollegeBannerStyle(college: Pick<College, "shortName" | "type" | "ranking">) {
  const name = college.shortName.toLowerCase();

  if (name.includes("iit") || name.includes("iisc")) {
    return {
      background:
        "linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #6366f1 70%, #818cf8 100%)",
    };
  }
  if (name.includes("nit")) {
    return {
      background:
        "linear-gradient(135deg, #022c22 0%, #065f46 45%, #10b981 100%)",
    };
  }
  if (name.includes("bits")) {
    return {
      background:
        "linear-gradient(135deg, #450a0a 0%, #991b1b 45%, #ef4444 100%)",
    };
  }
  if (name.includes("iiit")) {
    return {
      background:
        "linear-gradient(135deg, #172554 0%, #1d4ed8 45%, #38bdf8 100%)",
    };
  }

  return { background: TYPE_GRADIENTS[college.type] };
}

export function getCollegeInitials(shortName: string): string {
  return shortName
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 4)
    .toUpperCase();
}
