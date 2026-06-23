import { College, CollegeFilters, CollegeListResponse } from "@/types/college";

export const colleges: College[] = [
  {
    id: "iit-bombay",
    name: "Indian Institute of Technology Bombay",
    shortName: "IIT Bombay",
    location: "Mumbai",
    state: "Maharashtra",
    type: "Public",
    establishedYear: 1958,
    rating: 4.9,
    ranking: 1,
    image: "/colleges/iit-bombay.jpg",
    logo: "/colleges/logos/iit-bombay.png",
    description:
      "IIT Bombay is one of India's most prestigious engineering institutions, known for its cutting-edge research, world-class faculty, and exceptional placement records.",
    overview:
      "Established in 1958, IIT Bombay is the second oldest IIT and is consistently ranked among the top engineering colleges in India and Asia. Located in Powai, Mumbai, the institute spans over 550 acres and offers a vibrant campus life with over 100 student clubs and organizations. The institute is known for its strong emphasis on research and innovation, with state-of-the-art laboratories and research centers.",
    fees: 1000000,
    feesBreakdown: { tuition: 800000, hostel: 120000, other: 80000 },
    courses: [
      "B.Tech",
      "M.Tech",
      "MSc",
      "PhD",
      "MBA",
      "M.Des",
      "BS-MS Dual Degree",
    ],
    courseDetails: [
      { name: "B.Tech Computer Science", duration: "4 years", level: "UG", fees: 800000, seats: 120 },
      { name: "B.Tech Electrical Engineering", duration: "4 years", level: "UG", fees: 800000, seats: 110 },
      { name: "B.Tech Mechanical Engineering", duration: "4 years", level: "UG", fees: 800000, seats: 100 },
      { name: "M.Tech Computer Science", duration: "2 years", level: "PG", fees: 200000, seats: 60 },
      { name: "MBA", duration: "2 years", level: "PG", fees: 1200000, seats: 40 },
      { name: "PhD Computer Science", duration: "5 years", level: "PhD", fees: 100000, seats: 30 },
    ],
    placements: {
      averagePackage: 2100000,
      highestPackage: 23000000,
      medianPackage: 1800000,
      placementRate: 97,
      topRecruiters: ["Google", "Microsoft", "Goldman Sachs", "Amazon", "Meta", "Apple", "Uber", "JP Morgan"],
    },
    facilities: ["Library", "Sports Complex", "Swimming Pool", "Hostel", "Hospital", "Gymnasium", "Auditorium", "Research Labs", "Cafeteria", "Wi-Fi Campus"],
    accreditation: ["NAAC A++", "NBA", "NIRF Rank 3", "QS World Rank 149"],
    website: "https://www.iitb.ac.in",
    highlights: ["550+ acre campus in Mumbai", "97% placement rate", "₹2.3 Cr highest package", "100+ student clubs"],
  },
  {
    id: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    shortName: "IIT Delhi",
    location: "New Delhi",
    state: "Delhi",
    type: "Public",
    establishedYear: 1961,
    rating: 4.8,
    ranking: 2,
    image: "/colleges/iit-delhi.jpg",
    logo: "/colleges/logos/iit-delhi.png",
    description:
      "IIT Delhi is a premier engineering institution in India, renowned for its academic excellence, innovative research, and strong industry connections.",
    overview:
      "Established in 1961, IIT Delhi is located in the heart of New Delhi and spans 325 acres. The institute has been consistently ranked among the top engineering institutions in India. It offers a comprehensive range of undergraduate, postgraduate, and doctoral programs across various disciplines of engineering, science, and humanities. The campus houses world-class research facilities and fosters a culture of innovation and entrepreneurship.",
    fees: 950000,
    feesBreakdown: { tuition: 750000, hostel: 110000, other: 90000 },
    courses: ["B.Tech", "M.Tech", "MSc", "PhD", "MBA", "M.Des"],
    courseDetails: [
      { name: "B.Tech Computer Science", duration: "4 years", level: "UG", fees: 750000, seats: 100 },
      { name: "B.Tech Electrical Engineering", duration: "4 years", level: "UG", fees: 750000, seats: 95 },
      { name: "B.Tech Civil Engineering", duration: "4 years", level: "UG", fees: 750000, seats: 80 },
      { name: "M.Tech Data Science", duration: "2 years", level: "PG", fees: 190000, seats: 50 },
      { name: "MBA", duration: "2 years", level: "PG", fees: 1100000, seats: 35 },
      { name: "PhD Electrical Engineering", duration: "5 years", level: "PhD", fees: 95000, seats: 25 },
    ],
    placements: {
      averagePackage: 2000000,
      highestPackage: 21000000,
      medianPackage: 1700000,
      placementRate: 96,
      topRecruiters: ["Google", "Microsoft", "Adobe", "Samsung", "Qualcomm", "Amazon", "Goldman Sachs", "McKinsey"],
    },
    facilities: ["Library", "Sports Complex", "Swimming Pool", "Hostel", "Medical Centre", "Gymnasium", "Auditorium", "Incubation Centre", "Cafeteria", "Wi-Fi Campus"],
    accreditation: ["NAAC A++", "NBA", "NIRF Rank 2", "QS World Rank 150"],
    website: "https://home.iitd.ac.in",
    highlights: ["325 acre campus in New Delhi", "96% placement rate", "₹2.1 Cr highest package", "Strong startup ecosystem"],
  },
  {
    id: "iit-madras",
    name: "Indian Institute of Technology Madras",
    shortName: "IIT Madras",
    location: "Chennai",
    state: "Tamil Nadu",
    type: "Public",
    establishedYear: 1959,
    rating: 4.9,
    ranking: 3,
    image: "/colleges/iit-madras.jpg",
    logo: "/colleges/logos/iit-madras.png",
    description:
      "IIT Madras is India's top-ranked engineering institution, known for its research output, innovative programs, and beautiful campus set within a reserved forest.",
    overview:
      "Established in 1959, IIT Madras is consistently ranked #1 by NIRF among engineering institutions in India. Spread over 617 acres within the Guindy National Park in Chennai, the campus is home to diverse flora and fauna including deer and blackbucks. The institute is a pioneer in online education through NPTEL and has a thriving research park that has incubated over 200 startups.",
    fees: 920000,
    feesBreakdown: { tuition: 720000, hostel: 115000, other: 85000 },
    courses: ["B.Tech", "M.Tech", "MSc", "PhD", "MBA", "BS Data Science"],
    courseDetails: [
      { name: "B.Tech Computer Science", duration: "4 years", level: "UG", fees: 720000, seats: 90 },
      { name: "B.Tech Aerospace Engineering", duration: "4 years", level: "UG", fees: 720000, seats: 45 },
      { name: "B.Tech Mechanical Engineering", duration: "4 years", level: "UG", fees: 720000, seats: 85 },
      { name: "M.Tech AI & ML", duration: "2 years", level: "PG", fees: 185000, seats: 40 },
      { name: "MBA", duration: "2 years", level: "PG", fees: 1050000, seats: 30 },
      { name: "PhD Mechanical Engineering", duration: "5 years", level: "PhD", fees: 90000, seats: 20 },
    ],
    placements: {
      averagePackage: 2150000,
      highestPackage: 24000000,
      medianPackage: 1850000,
      placementRate: 98,
      topRecruiters: ["Google", "Microsoft", "Intel", "Texas Instruments", "Amazon", "Oracle", "Deloitte", "Boeing"],
    },
    facilities: ["Library", "Sports Complex", "Swimming Pool", "Hostel", "Hospital", "Research Park", "Auditorium", "Innovation Centre", "Open Air Theatre", "Wi-Fi Campus"],
    accreditation: ["NAAC A++", "NBA", "NIRF Rank 1", "QS World Rank 227"],
    website: "https://www.iitm.ac.in",
    highlights: ["NIRF Rank #1 for 8 years", "617 acre campus in national park", "₹2.4 Cr highest package", "200+ startup incubations"],
  },
  {
    id: "bits-pilani",
    name: "Birla Institute of Technology and Science, Pilani",
    shortName: "BITS Pilani",
    location: "Pilani",
    state: "Rajasthan",
    type: "Private",
    establishedYear: 1964,
    rating: 4.6,
    ranking: 4,
    image: "/colleges/bits-pilani.jpg",
    logo: "/colleges/logos/bits-pilani.png",
    description:
      "BITS Pilani is India's leading private university for engineering and science, known for its unique dual-degree programs and strong industry collaboration.",
    overview:
      "BITS Pilani, established in 1964, is one of India's most elite private engineering universities. With campuses in Pilani, Goa, Hyderabad, and Dubai, BITS offers a flexible academic system with no rigid departmental boundaries. The institute is known for its Practice School program, which provides students with extensive industry exposure. BITS alumni have founded and led several Fortune 500 companies worldwide.",
    fees: 2200000,
    feesBreakdown: { tuition: 1900000, hostel: 180000, other: 120000 },
    courses: ["B.E.", "M.E.", "MSc", "PhD", "MBA", "Dual Degree"],
    courseDetails: [
      { name: "B.E. Computer Science", duration: "4 years", level: "UG", fees: 1900000, seats: 150 },
      { name: "B.E. Electronics & Instrumentation", duration: "4 years", level: "UG", fees: 1900000, seats: 90 },
      { name: "B.E. Mechanical Engineering", duration: "4 years", level: "UG", fees: 1900000, seats: 80 },
      { name: "M.E. Software Systems", duration: "2 years", level: "PG", fees: 600000, seats: 40 },
      { name: "MBA", duration: "2 years", level: "PG", fees: 1500000, seats: 25 },
      { name: "PhD Computer Science", duration: "5 years", level: "PhD", fees: 300000, seats: 15 },
    ],
    placements: {
      averagePackage: 1800000,
      highestPackage: 18000000,
      medianPackage: 1500000,
      placementRate: 93,
      topRecruiters: ["Google", "Microsoft", "Goldman Sachs", "DE Shaw", "Uber", "Flipkart", "Samsung", "Sprinklr"],
    },
    facilities: ["Library", "Sports Complex", "Swimming Pool", "Hostel", "Medical Centre", "Auditorium", "Innovation Hub", "Cafeteria", "ATM", "Wi-Fi Campus"],
    accreditation: ["NAAC A", "NIRF Rank 25", "UGC"],
    website: "https://www.bits-pilani.ac.in",
    highlights: ["Multi-campus model", "Practice School program", "Flexible dual degrees", "Strong alumni network"],
  },
  {
    id: "iisc-bangalore",
    name: "Indian Institute of Science",
    shortName: "IISc Bangalore",
    location: "Bangalore",
    state: "Karnataka",
    type: "Public",
    establishedYear: 1909,
    rating: 4.9,
    ranking: 5,
    image: "/colleges/iisc-bangalore.jpg",
    logo: "/colleges/logos/iisc-bangalore.png",
    description:
      "IISc Bangalore is India's premier research institution, consistently ranked as the best university in India for research and innovation.",
    overview:
      "The Indian Institute of Science, established in 1909 by Jamsetji Tata, is India's foremost centre for advanced scientific and technological research and education. Located in Bangalore, the institute spans 400 acres of lush green campus. IISc has produced numerous fellows of the Royal Society and has been instrumental in India's space and defense research programs. It is the only Indian institution consistently ranked in the top 20 in Asia.",
    fees: 350000,
    feesBreakdown: { tuition: 200000, hostel: 80000, other: 70000 },
    courses: ["BS", "M.Tech", "MSc", "PhD", "M.Des", "M.Mgmt"],
    courseDetails: [
      { name: "BS Research Program", duration: "4 years", level: "UG", fees: 200000, seats: 120 },
      { name: "M.Tech Computer Science", duration: "2 years", level: "PG", fees: 100000, seats: 35 },
      { name: "M.Tech AI", duration: "2 years", level: "PG", fees: 100000, seats: 25 },
      { name: "PhD Physics", duration: "5 years", level: "PhD", fees: 50000, seats: 40 },
      { name: "PhD Computer Science", duration: "5 years", level: "PhD", fees: 50000, seats: 30 },
    ],
    placements: {
      averagePackage: 2300000,
      highestPackage: 26000000,
      medianPackage: 2000000,
      placementRate: 95,
      topRecruiters: ["Google", "Intel", "Samsung Research", "Microsoft Research", "ISRO", "DRDO", "Amazon", "Qualcomm"],
    },
    facilities: ["Central Library", "Supercomputer Centre", "National Nanofabrication Centre", "Hostel", "Hospital", "Gymnasium", "Auditorium", "Guest House", "Cafeteria", "Wi-Fi Campus"],
    accreditation: ["NAAC A++", "NIRF Rank 1 (University)", "QS World Rank 211"],
    website: "https://www.iisc.ac.in",
    highlights: ["India's #1 research university", "400 acre green campus", "Founded by Tata in 1909", "Top 20 in Asia"],
  },
  {
    id: "nit-trichy",
    name: "National Institute of Technology Tiruchirappalli",
    shortName: "NIT Trichy",
    location: "Tiruchirappalli",
    state: "Tamil Nadu",
    type: "Public",
    establishedYear: 1964,
    rating: 4.5,
    ranking: 6,
    image: "/colleges/nit-trichy.jpg",
    logo: "/colleges/logos/nit-trichy.png",
    description:
      "NIT Trichy is the top-ranked NIT in India, known for its strong academics, excellent placement record, and vibrant campus culture.",
    overview:
      "NIT Tiruchirappalli, established in 1964, is the highest-ranked NIT in India. Spread over 800 acres on the banks of the Cauvery river, the institute offers a serene academic environment. Known for its annual cultural festival Festember and technical festival Pragyan, NIT Trichy combines academic rigor with a vibrant extracurricular scene. The institute has strong ties with industries and offers excellent placement opportunities.",
    fees: 650000,
    feesBreakdown: { tuition: 475000, hostel: 100000, other: 75000 },
    courses: ["B.Tech", "M.Tech", "MCA", "MBA", "MSc", "PhD"],
    courseDetails: [
      { name: "B.Tech Computer Science", duration: "4 years", level: "UG", fees: 475000, seats: 80 },
      { name: "B.Tech Electronics & Communication", duration: "4 years", level: "UG", fees: 475000, seats: 75 },
      { name: "B.Tech Mechanical Engineering", duration: "4 years", level: "UG", fees: 475000, seats: 80 },
      { name: "M.Tech VLSI Design", duration: "2 years", level: "PG", fees: 150000, seats: 25 },
      { name: "MBA", duration: "2 years", level: "PG", fees: 500000, seats: 30 },
    ],
    placements: {
      averagePackage: 1200000,
      highestPackage: 15000000,
      medianPackage: 1000000,
      placementRate: 92,
      topRecruiters: ["Microsoft", "Amazon", "Oracle", "TCS", "Infosys", "Wipro", "L&T", "Qualcomm"],
    },
    facilities: ["Central Library", "Sports Complex", "Hostel", "Medical Centre", "Gymnasium", "Auditorium", "Computer Centre", "Cafeteria", "ATM", "Wi-Fi Campus"],
    accreditation: ["NAAC A++", "NBA", "NIRF Rank 9"],
    website: "https://www.nitt.edu",
    highlights: ["Top-ranked NIT in India", "800 acre riverside campus", "92% placement rate", "Strong alumni network"],
  },
  {
    id: "iiit-hyderabad",
    name: "International Institute of Information Technology Hyderabad",
    shortName: "IIIT Hyderabad",
    location: "Hyderabad",
    state: "Telangana",
    type: "Deemed",
    establishedYear: 1998,
    rating: 4.6,
    ranking: 7,
    image: "/colleges/iiit-hyderabad.jpg",
    logo: "/colleges/logos/iiit-hyderabad.png",
    description:
      "IIIT Hyderabad is a research-driven institution focused on IT and allied areas, known for producing top-tier computer science graduates.",
    overview:
      "IIIT Hyderabad, established in 1998, is a research university focused on core and applied Information Technology. Located in Gachibowli, Hyderabad's IT hub, the institute has carved a niche for itself with its research-first approach and industry-relevant curriculum. The institute has strong research groups in areas like AI, Machine Learning, NLP, Computer Vision, and Robotics. Many IIIT-H graduates have gone on to pursue research at top global universities and companies.",
    fees: 1100000,
    feesBreakdown: { tuition: 850000, hostel: 140000, other: 110000 },
    courses: ["B.Tech", "M.Tech", "MS by Research", "PhD", "Dual Degree"],
    courseDetails: [
      { name: "B.Tech Computer Science", duration: "4 years", level: "UG", fees: 850000, seats: 230 },
      { name: "B.Tech Electronics & Communication", duration: "4 years", level: "UG", fees: 850000, seats: 120 },
      { name: "M.Tech Computer Science", duration: "2 years", level: "PG", fees: 350000, seats: 50 },
      { name: "MS by Research", duration: "2 years", level: "PG", fees: 200000, seats: 30 },
      { name: "PhD Computer Science", duration: "5 years", level: "PhD", fees: 100000, seats: 20 },
    ],
    placements: {
      averagePackage: 1600000,
      highestPackage: 20000000,
      medianPackage: 1400000,
      placementRate: 95,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Adobe", "Samsung", "Uber", "Flipkart", "Qualcomm"],
    },
    facilities: ["Digital Library", "Research Labs", "Hostel", "Medical Centre", "Gymnasium", "Auditorium", "Startup Incubator", "Cafeteria", "Wi-Fi Campus"],
    accreditation: ["NAAC A++", "NIRF Rank 20", "UGC"],
    website: "https://www.iiit.ac.in",
    highlights: ["Research-first approach", "Located in Hyderabad IT hub", "95% placement rate", "Strong AI & ML research"],
  },
  {
    id: "dtu-delhi",
    name: "Delhi Technological University",
    shortName: "DTU Delhi",
    location: "New Delhi",
    state: "Delhi",
    type: "Public",
    establishedYear: 1941,
    rating: 4.3,
    ranking: 8,
    image: "/colleges/dtu-delhi.jpg",
    logo: "/colleges/logos/dtu-delhi.png",
    description:
      "DTU (formerly DCE) is one of India's oldest and most reputed engineering institutions, known for its strong technical education and vibrant student community.",
    overview:
      "Delhi Technological University, formerly known as Delhi College of Engineering (DCE), was established in 1941. It is one of India's oldest engineering institutions and became a university in 2009. Located in Rohini, New Delhi, the campus spans 164 acres and hosts numerous national and international events. DTU is known for its strong alumni network and competitive placements, particularly in the software and consulting sectors.",
    fees: 550000,
    feesBreakdown: { tuition: 380000, hostel: 90000, other: 80000 },
    courses: ["B.Tech", "M.Tech", "MBA", "PhD"],
    courseDetails: [
      { name: "B.Tech Computer Engineering", duration: "4 years", level: "UG", fees: 380000, seats: 185 },
      { name: "B.Tech Software Engineering", duration: "4 years", level: "UG", fees: 380000, seats: 90 },
      { name: "B.Tech Electronics & Communication", duration: "4 years", level: "UG", fees: 380000, seats: 120 },
      { name: "M.Tech Data Analytics", duration: "2 years", level: "PG", fees: 120000, seats: 30 },
      { name: "MBA", duration: "2 years", level: "PG", fees: 400000, seats: 40 },
    ],
    placements: {
      averagePackage: 1150000,
      highestPackage: 15000000,
      medianPackage: 950000,
      placementRate: 90,
      topRecruiters: ["Microsoft", "Amazon", "Adobe", "Goldman Sachs", "Samsung", "Deloitte", "Flipkart", "PayPal"],
    },
    facilities: ["Central Library", "Sports Ground", "Hostel", "Medical Room", "Gymnasium", "Seminar Hall", "Computer Labs", "Cafeteria", "ATM", "Wi-Fi Campus"],
    accreditation: ["NAAC A", "NBA", "NIRF Rank 36"],
    website: "https://www.dtu.ac.in",
    highlights: ["Founded in 1941 as DCE", "Strong Delhi alumni network", "90% placement rate", "Competitive fee structure"],
  },
  {
    id: "vit-vellore",
    name: "Vellore Institute of Technology",
    shortName: "VIT Vellore",
    location: "Vellore",
    state: "Tamil Nadu",
    type: "Private",
    establishedYear: 1984,
    rating: 4.2,
    ranking: 9,
    image: "/colleges/vit-vellore.jpg",
    logo: "/colleges/logos/vit-vellore.png",
    description:
      "VIT Vellore is a leading private university known for its global exposure, diverse student body, and strong industry partnerships.",
    overview:
      "Vellore Institute of Technology, established in 1984, has grown into one of India's top private engineering universities. With campuses in Vellore, Chennai, Bhopal, and Amaravati, VIT offers a truly diverse and global academic experience. The university hosts students from 60+ countries and has collaborations with over 200 international universities. VIT's VITEE exam is one of the largest engineering entrance exams in India.",
    fees: 1800000,
    feesBreakdown: { tuition: 1500000, hostel: 160000, other: 140000 },
    courses: ["B.Tech", "M.Tech", "MCA", "MBA", "MSc", "PhD"],
    courseDetails: [
      { name: "B.Tech Computer Science", duration: "4 years", level: "UG", fees: 1500000, seats: 500 },
      { name: "B.Tech Electronics & Communication", duration: "4 years", level: "UG", fees: 1500000, seats: 300 },
      { name: "B.Tech Mechanical Engineering", duration: "4 years", level: "UG", fees: 1500000, seats: 250 },
      { name: "M.Tech Software Engineering", duration: "2 years", level: "PG", fees: 500000, seats: 60 },
      { name: "MBA", duration: "2 years", level: "PG", fees: 800000, seats: 80 },
    ],
    placements: {
      averagePackage: 850000,
      highestPackage: 12000000,
      medianPackage: 650000,
      placementRate: 88,
      topRecruiters: ["Cognizant", "TCS", "Infosys", "Wipro", "Amazon", "Microsoft", "Deloitte", "Capgemini"],
    },
    facilities: ["Digital Library", "Sports Complex", "Swimming Pool", "Hostel", "Hospital", "Gymnasium", "Auditorium", "Innovation Centre", "Food Court", "Wi-Fi Campus"],
    accreditation: ["NAAC A++", "NIRF Rank 12", "UGC"],
    website: "https://vit.ac.in",
    highlights: ["Students from 60+ countries", "200+ international tie-ups", "Multi-campus model", "Large student community"],
  },
  {
    id: "nsut-delhi",
    name: "Netaji Subhas University of Technology",
    shortName: "NSUT Delhi",
    location: "New Delhi",
    state: "Delhi",
    type: "Public",
    establishedYear: 1983,
    rating: 4.1,
    ranking: 10,
    image: "/colleges/nsut-delhi.jpg",
    logo: "/colleges/logos/nsut-delhi.png",
    description:
      "NSUT (formerly NSIT) is a prominent engineering university in Delhi, known for its strong technical programs and competitive placements.",
    overview:
      "Netaji Subhas University of Technology, formerly NSIT, was established in 1983 in Dwarka, New Delhi. The university gained university status in 2018 and has since expanded its academic programs. Known for its strong computer science and IT programs, NSUT produces highly sought-after graduates. The campus, while compact, is well-equipped with modern facilities and has a strong emphasis on extracurricular activities including its famous annual fest Moksha.",
    fees: 520000,
    feesBreakdown: { tuition: 360000, hostel: 85000, other: 75000 },
    courses: ["B.Tech", "M.Tech", "MBA", "PhD"],
    courseDetails: [
      { name: "B.Tech Computer Science", duration: "4 years", level: "UG", fees: 360000, seats: 170 },
      { name: "B.Tech Information Technology", duration: "4 years", level: "UG", fees: 360000, seats: 85 },
      { name: "B.Tech Electronics & Communication", duration: "4 years", level: "UG", fees: 360000, seats: 110 },
      { name: "M.Tech Computer Science", duration: "2 years", level: "PG", fees: 110000, seats: 20 },
    ],
    placements: {
      averagePackage: 1100000,
      highestPackage: 14000000,
      medianPackage: 900000,
      placementRate: 89,
      topRecruiters: ["Google", "Amazon", "Microsoft", "Samsung", "Adobe", "PayPal", "Goldman Sachs", "Flipkart"],
    },
    facilities: ["Library", "Sports Ground", "Hostel", "Medical Room", "Gymnasium", "Seminar Hall", "Computer Labs", "Cafeteria", "Wi-Fi Campus"],
    accreditation: ["NAAC A", "NIRF Rank 44"],
    website: "https://www.nsut.ac.in",
    highlights: ["Formerly NSIT", "Strong CS placements", "Affordable fees", "Located in Dwarka, Delhi"],
  },
  {
    id: "jadavpur-university",
    name: "Jadavpur University",
    shortName: "Jadavpur University",
    location: "Kolkata",
    state: "West Bengal",
    type: "Public",
    establishedYear: 1955,
    rating: 4.4,
    ranking: 11,
    image: "/colleges/jadavpur-university.jpg",
    logo: "/colleges/logos/jadavpur-university.png",
    description:
      "Jadavpur University is a premier public research university in Kolkata, known for its strong engineering programs and illustrious alumni.",
    overview:
      "Jadavpur University, established in 1955, is one of the most prestigious public universities in India. Located in Kolkata, the university has two campuses — Jadavpur and Salt Lake. Known for its rigorous academic culture, JU has produced numerous notable alumni in engineering, science, arts, and public service. The university is particularly strong in electrical, mechanical, and computer science engineering, and has a thriving research environment with multiple centres of excellence.",
    fees: 35000,
    feesBreakdown: { tuition: 15000, hostel: 12000, other: 8000 },
    courses: ["B.E.", "M.E.", "MSc", "MA", "PhD", "MCA"],
    courseDetails: [
      { name: "B.E. Computer Science", duration: "4 years", level: "UG", fees: 15000, seats: 60 },
      { name: "B.E. Electrical Engineering", duration: "4 years", level: "UG", fees: 15000, seats: 60 },
      { name: "B.E. Mechanical Engineering", duration: "4 years", level: "UG", fees: 15000, seats: 60 },
      { name: "M.E. Computer Science", duration: "2 years", level: "PG", fees: 10000, seats: 20 },
      { name: "PhD Engineering", duration: "5 years", level: "PhD", fees: 8000, seats: 15 },
    ],
    placements: {
      averagePackage: 900000,
      highestPackage: 14500000,
      medianPackage: 700000,
      placementRate: 85,
      topRecruiters: ["TCS", "Cognizant", "Infosys", "Amazon", "Google", "Microsoft", "Capgemini", "Deloitte"],
    },
    facilities: ["Central Library", "Sports Ground", "Hostel", "Medical Centre", "Auditorium", "Computer Labs", "Research Centres", "Cafeteria", "Wi-Fi Campus"],
    accreditation: ["NAAC A", "NIRF Rank 16", "UGC"],
    website: "https://jadavpuruniversity.in",
    highlights: ["Extremely affordable fees", "Strong research culture", "Two campuses in Kolkata", "Illustrious alumni"],
  },
  {
    id: "nit-surathkal",
    name: "National Institute of Technology Karnataka",
    shortName: "NIT Surathkal",
    location: "Mangalore",
    state: "Karnataka",
    type: "Public",
    establishedYear: 1960,
    rating: 4.4,
    ranking: 12,
    image: "/colleges/nit-surathkal.jpg",
    logo: "/colleges/logos/nit-surathkal.png",
    description:
      "NIT Surathkal is one of India's top NITs, renowned for its beautiful beachside campus, strong academics, and excellent placements.",
    overview:
      "NIT Karnataka (Surathkal), established in 1960, is one of the oldest and most prestigious NITs in India. Located on a spectacular beachside campus in Surathkal near Mangalore, the institute spans 295 acres along the Arabian Sea coast. NITK is known for its strong engineering programs, excellent placement record, and vibrant campus life. The annual technical festival Engineer hosts participants from across India.",
    fees: 680000,
    feesBreakdown: { tuition: 500000, hostel: 105000, other: 75000 },
    courses: ["B.Tech", "M.Tech", "MCA", "MBA", "PhD"],
    courseDetails: [
      { name: "B.Tech Computer Science", duration: "4 years", level: "UG", fees: 500000, seats: 80 },
      { name: "B.Tech Electronics & Communication", duration: "4 years", level: "UG", fees: 500000, seats: 70 },
      { name: "B.Tech Mechanical Engineering", duration: "4 years", level: "UG", fees: 500000, seats: 70 },
      { name: "M.Tech Computer Science", duration: "2 years", level: "PG", fees: 160000, seats: 20 },
      { name: "MBA", duration: "2 years", level: "PG", fees: 450000, seats: 25 },
    ],
    placements: {
      averagePackage: 1150000,
      highestPackage: 14000000,
      medianPackage: 950000,
      placementRate: 91,
      topRecruiters: ["Microsoft", "Amazon", "Oracle", "Samsung", "Goldman Sachs", "TCS", "Infosys", "Cisco"],
    },
    facilities: ["Central Library", "Beach", "Sports Complex", "Swimming Pool", "Hostel", "Medical Centre", "Gymnasium", "Auditorium", "Computer Centre", "Wi-Fi Campus"],
    accreditation: ["NAAC A++", "NBA", "NIRF Rank 10"],
    website: "https://www.nitk.ac.in",
    highlights: ["Beachside campus", "295 acres on Arabian Sea coast", "91% placement rate", "Top 3 NIT in India"],
  },
  {
    id: "iit-kanpur",
    name: "Indian Institute of Technology Kanpur",
    shortName: "IIT Kanpur",
    location: "Kanpur",
    state: "Uttar Pradesh",
    type: "Public",
    establishedYear: 1959,
    rating: 4.8,
    ranking: 4,
    image: "/colleges/iit-kanpur.jpg",
    logo: "/colleges/logos/iit-kanpur.png",
    description: "One of the first IITs established, IIT Kanpur is renowned globally for its rigorous academic curriculum and research excellence.",
    overview: "Established in 1959, IIT Kanpur has sprawling 1055-acre campus. It has a rich history of academic rigor and a vibrant student culture. The institute pioneered computer science education in India and continues to be a leader in technology research and development.",
    fees: 940000,
    feesBreakdown: { tuition: 730000, hostel: 120000, other: 90000 },
    courses: ["B.Tech", "M.Tech", "MSc", "PhD", "MBA", "BS"],
    courseDetails: [
      { name: "B.Tech Computer Science", duration: "4 years", level: "UG", fees: 730000, seats: 110 },
      { name: "B.Tech Aerospace Engineering", duration: "4 years", level: "UG", fees: 730000, seats: 60 },
      { name: "B.Tech Electrical Engineering", duration: "4 years", level: "UG", fees: 730000, seats: 130 }
    ],
    placements: {
      averagePackage: 2200000,
      highestPackage: 19000000,
      medianPackage: 1800000,
      placementRate: 96,
      topRecruiters: ["Google", "Microsoft", "Jane Street", "Optiver", "Amazon", "Goldman Sachs"]
    },
    facilities: ["Library", "Flight Lab", "Sports Complex", "Swimming Pool", "Hostel", "Hospital", "Wi-Fi Campus"],
    accreditation: ["NAAC A++", "NBA", "NIRF Rank 4", "QS World Rank 278"],
    website: "https://www.iitk.ac.in",
    highlights: ["1055 acre green campus", "Only IIT with a Flight Lab", "Pioneer in CS education", "Strong alumni network"]
  },
  {
    id: "iit-roorkee",
    name: "Indian Institute of Technology Roorkee",
    shortName: "IIT Roorkee",
    location: "Roorkee",
    state: "Uttarakhand",
    type: "Public",
    establishedYear: 1847,
    rating: 4.7,
    ranking: 5,
    image: "/colleges/iit-roorkee.jpg",
    logo: "/colleges/logos/iit-roorkee.png",
    description: "The oldest technical institution in Asia, IIT Roorkee combines rich heritage with cutting-edge modern research.",
    overview: "Established in 1847 as the Thomason College of Civil Engineering, it is the oldest engineering institution in Asia. The 365-acre campus sits at the foothills of the Himalayas. IIT Roorkee is globally acclaimed for its Civil Engineering, Architecture, and Computer Science programs.",
    fees: 930000,
    feesBreakdown: { tuition: 740000, hostel: 110000, other: 80000 },
    courses: ["B.Tech", "B.Arch", "M.Tech", "MSc", "PhD", "MBA"],
    courseDetails: [
      { name: "B.Tech Computer Science", duration: "4 years", level: "UG", fees: 740000, seats: 105 },
      { name: "B.Tech Civil Engineering", duration: "4 years", level: "UG", fees: 740000, seats: 150 },
      { name: "B.Arch", duration: "5 years", level: "UG", fees: 900000, seats: 30 }
    ],
    placements: {
      averagePackage: 1950000,
      highestPackage: 17000000,
      medianPackage: 1650000,
      placementRate: 94,
      topRecruiters: ["Microsoft", "Amazon", "Google", "JP Morgan", "Uber", "Schlumberger"]
    },
    facilities: ["Central Library", "Sports Ground", "Hostel", "Medical Centre", "Gymnasium", "Computer Centre", "Wi-Fi Campus"],
    accreditation: ["NAAC A++", "NBA", "NIRF Rank 5"],
    website: "https://www.iitr.ac.in",
    highlights: ["Oldest engineering college in Asia", "Beautiful heritage campus", "Excellent Civil/Arch programs", "₹1.7 Cr highest package"]
  },
  {
    id: "nit-warangal",
    name: "National Institute of Technology Warangal",
    shortName: "NIT Warangal",
    location: "Warangal",
    state: "Telangana",
    type: "Public",
    establishedYear: 1959,
    rating: 4.4,
    ranking: 15,
    image: "/colleges/nit-warangal.jpg",
    logo: "/colleges/logos/nit-warangal.png",
    description: "The first among the NITs, NIT Warangal is a top-tier institution known for its stellar placements and academic excellence.",
    overview: "Established in 1959 as the first Regional Engineering College, NIT Warangal is located on a 248-acre campus. It has a strong legacy of producing exceptional engineers and leaders. The institute is particularly famous for its highly competitive placements and rigorous academic environment.",
    fees: 660000,
    feesBreakdown: { tuition: 500000, hostel: 90000, other: 70000 },
    courses: ["B.Tech", "M.Tech", "MCA", "MBA", "MSc", "PhD"],
    courseDetails: [
      { name: "B.Tech Computer Science", duration: "4 years", level: "UG", fees: 500000, seats: 130 },
      { name: "B.Tech Electronics & Communication", duration: "4 years", level: "UG", fees: 500000, seats: 110 }
    ],
    placements: {
      averagePackage: 1500000,
      highestPackage: 8800000,
      medianPackage: 1200000,
      placementRate: 92,
      topRecruiters: ["Amazon", "Microsoft", "Oracle", "Qualcomm", "TCS", "Infosys"]
    },
    facilities: ["Library", "Sports Complex", "Hostel", "Medical Centre", "Gymnasium", "Auditorium", "Wi-Fi Campus"],
    accreditation: ["NAAC A", "NBA", "NIRF Rank 21"],
    website: "https://www.nitw.ac.in",
    highlights: ["First RECs/NITs", "Strong alumni base", "Excellent CS placements", "Vibrant campus life"]
  },
  {
    id: "bits-goa",
    name: "BITS Pilani, K.K. Birla Goa Campus",
    shortName: "BITS Goa",
    location: "Zuarinagar",
    state: "Goa",
    type: "Private",
    establishedYear: 2004,
    rating: 4.5,
    ranking: 16,
    image: "/colleges/bits-goa.jpg",
    logo: "/colleges/logos/bits-goa.png",
    description: "Located along the scenic Zuari River, BITS Goa offers world-class education with the classic BITS Pilani flexibility.",
    overview: "Established in 2004, the Goa campus of BITS Pilani sits on 180 acres of lush land overlooking the Zuari River. It follows the same rigorous and flexible curriculum as the Pilani campus, including the unique dual degree system and Practice School programs.",
    fees: 2200000,
    feesBreakdown: { tuition: 1900000, hostel: 180000, other: 120000 },
    courses: ["B.E.", "M.E.", "MSc", "PhD"],
    courseDetails: [
      { name: "B.E. Computer Science", duration: "4 years", level: "UG", fees: 1900000, seats: 100 },
      { name: "B.E. Electronics & Communication", duration: "4 years", level: "UG", fees: 1900000, seats: 90 }
    ],
    placements: {
      averagePackage: 1700000,
      highestPackage: 6000000,
      medianPackage: 1400000,
      placementRate: 91,
      topRecruiters: ["Google", "Microsoft", "Uber", "Swiggy", "Postman", "Amazon"]
    },
    facilities: ["Library", "Sports Complex", "Hostel", "Medical Centre", "Auditorium", "Wi-Fi Campus"],
    accreditation: ["NAAC A", "UGC"],
    website: "https://www.bits-pilani.ac.in/goa/",
    highlights: ["Scenic 180-acre campus", "No rigid attendance policy", "Flexible dual degrees", "Strong coding culture"]
  },
  {
    id: "iiit-allahabad",
    name: "Indian Institute of Information Technology Allahabad",
    shortName: "IIIT Allahabad",
    location: "Prayagraj",
    state: "Uttar Pradesh",
    type: "Public",
    establishedYear: 1999,
    rating: 4.5,
    ranking: 18,
    image: "/colleges/iiit-allahabad.jpg",
    logo: "/colleges/logos/iiit-allahabad.png",
    description: "A center of excellence in Information Technology, renowned for producing top-tier software engineers and strong coding culture.",
    overview: "IIIT Allahabad was established in 1999 as a center of excellence in IT. The 100-acre campus at Jhalwa is known for its intense coding culture and specialized curriculum focused purely on IT and ECE disciplines. IIIT-A students frequently dominate coding competitions globally.",
    fees: 750000,
    feesBreakdown: { tuition: 600000, hostel: 90000, other: 60000 },
    courses: ["B.Tech", "M.Tech", "MBA", "PhD"],
    courseDetails: [
      { name: "B.Tech Information Technology", duration: "4 years", level: "UG", fees: 600000, seats: 260 },
      { name: "B.Tech Electronics & Communication", duration: "4 years", level: "UG", fees: 600000, seats: 130 }
    ],
    placements: {
      averagePackage: 1850000,
      highestPackage: 12500000,
      medianPackage: 1600000,
      placementRate: 96,
      topRecruiters: ["Google", "Atlassian", "Microsoft", "Amazon", "Sprinklr", "Apple"]
    },
    facilities: ["Library", "Sports Complex", "Hostel", "Hospital", "Gymnasium", "Computer Labs", "Wi-Fi Campus"],
    accreditation: ["NAAC A", "NBA", "NIRF Rank 87"],
    website: "https://www.iiita.ac.in",
    highlights: ["Intense competitive programming culture", "Specialized IT curriculum", "100% CS/IT placements", "State-of-the-art labs"]
  },
  {
    id: "anna-university",
    name: "Anna University, College of Engineering Guindy",
    shortName: "CEG Chennai",
    location: "Chennai",
    state: "Tamil Nadu",
    type: "Public",
    establishedYear: 1794,
    rating: 4.2,
    ranking: 20,
    image: "/colleges/anna-university.jpg",
    logo: "/colleges/logos/anna-university.png",
    description: "One of India's oldest technical institutions, offering highly reputed engineering programs in the heart of Chennai.",
    overview: "Established in 1794, the College of Engineering Guindy (CEG) is India's oldest engineering institution. It is the flagship campus of Anna University. Spread over 223 acres, it offers excellent infrastructure and is highly sought after by students in Tamil Nadu and across India.",
    fees: 150000,
    feesBreakdown: { tuition: 80000, hostel: 40000, other: 30000 },
    courses: ["B.E.", "B.Tech", "M.E.", "MCA", "MBA", "PhD"],
    courseDetails: [
      { name: "B.E. Computer Science", duration: "4 years", level: "UG", fees: 80000, seats: 120 },
      { name: "B.E. Electronics & Communication", duration: "4 years", level: "UG", fees: 80000, seats: 120 }
    ],
    placements: {
      averagePackage: 700000,
      highestPackage: 3600000,
      medianPackage: 600000,
      placementRate: 85,
      topRecruiters: ["Zoho", "TCS", "Cognizant", "Infosys", "Cisco", "Ford"]
    },
    facilities: ["Library", "Sports Complex", "Hostel", "Medical Centre", "Gymnasium", "Auditorium", "Wi-Fi Campus"],
    accreditation: ["NAAC A++", "NBA", "NIRF Rank 13"],
    website: "https://www.annauniv.edu",
    highlights: ["Founded in 1794", "Extremely affordable fees", "Strong core engineering branches", "Large alumni base"]
  }
];

// ─── Utility Functions ─────────────────────────────────────────────────────────

export function getColleges(filters: CollegeFilters = {}): CollegeListResponse {
  let filtered = [...colleges];

  // Search filter
  if (filters.search) {
    const query = filters.search.toLowerCase();
    filtered = filtered.filter(
      (c) =>
        c.name.toLowerCase().includes(query) ||
        c.shortName.toLowerCase().includes(query) ||
        c.location.toLowerCase().includes(query) ||
        c.state.toLowerCase().includes(query)
    );
  }

  // Location filter
  if (filters.location) {
    filtered = filtered.filter(
      (c) =>
        c.location.toLowerCase() === filters.location!.toLowerCase() ||
        c.state.toLowerCase() === filters.location!.toLowerCase()
    );
  }

  // Type filter
  if (filters.type) {
    filtered = filtered.filter(
      (c) => c.type.toLowerCase() === filters.type!.toLowerCase()
    );
  }

  // Min rating filter
  if (filters.minRating) {
    filtered = filtered.filter((c) => c.rating >= filters.minRating!);
  }

  // Sort
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case "ranking":
        filtered.sort((a, b) => a.ranking - b.ranking);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "fees":
        filtered.sort((a, b) => a.fees - b.fees);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "package":
        filtered.sort(
          (a, b) =>
            b.placements.averagePackage - a.placements.averagePackage
        );
        break;
    }
  } else {
    // Default sort by ranking
    filtered.sort((a, b) => a.ranking - b.ranking);
  }

  // Pagination
  const page = filters.page || 1;
  const limit = filters.limit || 12;
  const startIdx = (page - 1) * limit;
  const paged = filtered.slice(startIdx, startIdx + limit);

  return {
    colleges: paged,
    total: filtered.length,
    page,
    totalPages: Math.ceil(filtered.length / limit),
  };
}

export function getCollegeById(id: string): College | undefined {
  return colleges.find((c) => c.id === id);
}

export function getLocations(): string[] {
  const locs = new Set(colleges.map((c) => c.location));
  return Array.from(locs).sort();
}

export function getCollegeTypes(): string[] {
  return Array.from(new Set(colleges.map((c) => c.type))).sort();
}

export function getAllColleges(): College[] {
  return colleges;
}

export function formatCurrency(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(1)} Cr`;
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)} L`;
  }
  if (amount >= 1000) {
    return `₹${(amount / 1000).toFixed(0)}K`;
  }
  return `₹${amount}`;
}

export function getAllCollegeIds(): string[] {
  return colleges.map((c) => c.id);
}
