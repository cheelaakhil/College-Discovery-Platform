export interface College {
  id: string;
  name: string;
  shortName: string;
  location: string;
  state: string;
  type: "Public" | "Private" | "Deemed";
  establishedYear: number;
  rating: number;
  ranking: number;
  image: string;
  logo: string;
  description: string;
  overview: string;
  fees: number;
  feesBreakdown: {
    tuition: number;
    hostel: number;
    other: number;
  };
  courses: string[];
  courseDetails: CourseDetail[];
  placements: PlacementData;
  facilities: string[];
  accreditation: string[];
  website: string;
  highlights: string[];
}

export interface CourseDetail {
  name: string;
  duration: string;
  level: "UG" | "PG" | "PhD";
  fees: number;
  seats: number;
}

export interface PlacementData {
  averagePackage: number;
  highestPackage: number;
  medianPackage: number;
  placementRate: number;
  topRecruiters: string[];
}

export interface CollegeListResponse {
  colleges: College[];
  total: number;
  page: number;
  totalPages: number;
}

export interface CollegeFilters {
  search?: string;
  location?: string;
  type?: string;
  minRating?: number;
  sortBy?: "ranking" | "rating" | "fees" | "name" | "package";
  page?: number;
  limit?: number;
}
