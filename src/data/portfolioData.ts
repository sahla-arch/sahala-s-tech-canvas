export const portfolioData = {
  identity: {
    name: "Sahala Shana VK",
    shortName: "SS/VK",
    role: "B.Tech Information Technology Student",
    graduation: "Graduating 2027",
    positioning: "Software Developer focused on building attractive and user-friendly digital experiences.",
    statement: "Building practical technology with a creative eye.",
    location: "Parappanangdi, Malappuram, Kerala, India",
    email: "sahlashana.it@gmail.com",
    phone: "9037687545",
    availability: "Open to technology opportunities",
  },
  links: {
    github: "https://github.com/sahla-arch",
    linkedin: "https://www.linkedin.com/in/sahla-shana-320a46374",
    youtube: "https://www.youtube.com/@sahlashana44",
    instagram: "https://www.instagram.com/canvaco_",
    canva: "",
    resume: "",
  },
  navigation: [
    ["Home", "home"], ["About", "about"], ["Focus", "focus"], ["Skills", "skills"],
    ["Projects", "projects"], ["Experience", "experience"], ["Design", "design"],
    ["Certificates", "certifications"], ["Education", "education"], ["Contact", "contact"],
  ],
  focusAreas: [
    { title: "Software Development", text: "Building practical solutions while strengthening programming and problem-solving foundations." },
    { title: "Web Development", text: "Creating responsive, accessible web experiences with HTML, CSS and JavaScript." },
    { title: "Mobile App Development", text: "Developing mobile applications with Flutter and Firebase." },
    { title: "UI/UX & Product Design", text: "Using interface design to make technology clearer and easier to use." },
  ],
  exploring: ["AI/ML", "Cloud", "Cybersecurity", "React", ".NET"],
  skills: [
    { level: "Current / Hands-on", groups: ["Web — HTML, CSS, JavaScript", "Mobile — Flutter, Firebase", "Design — Figma, Canva", "Tools — GitHub, VS Code, Android Studio", "Database — Firebase, MySQL"] },
    { level: "Developing", groups: ["Python", "Java", "C", "Data Structures", "Computer Networks", "Operating Systems", "MySQL"] },
    { level: "Foundational Knowledge", groups: ["Artificial Intelligence", "Machine Learning"] },
    { level: "Learning / Exploring", groups: ["Dart", "React", ".NET", "Cloud technologies", "Cybersecurity", "AI/ML"] },
  ],
  featuredProjects: [
    {
      name: "HostelHub",
      subtitle: "Smart Digital Hostel Management System",
      status: "Featured mobile app",
      tech: ["Flutter", "Firebase"],
      problem: "Hostel management workflows need a clearer, centralized digital experience.",
      solution: "A Flutter and Firebase mobile application for digital hostel management.",
      features: ["Detailed feature list to be added", "Project screenshots to be added", "Repository link to be added"],
    },
    {
      name: "Gramika",
      subtitle: "Digital Panchayat Management System",
      status: "Featured mobile app",
      tech: ["Flutter", "Firebase"],
      problem: "Local governance services involve multiple roles and need an organized digital system.",
      solution: "A multi-role Flutter and Firebase mobile application for Panchayat management.",
      features: ["Detailed role list to be added", "Project screenshots to be added", "Repository link to be added"],
    },
    {
      name: "Major Project — Coming Soon",
      subtitle: "Topic to be decided",
      status: "In progress",
      tech: [],
      problem: "Project topic not selected yet.",
      solution: "Details will be added when the major project is finalized.",
      features: ["Topic to be added", "Technology stack to be added", "Project media to be added"],
    },
  ],
  webExperiments: [
    { name: "IT Department Website", type: "College assignment", tech: "HTML / CSS / JavaScript" },
    { name: "Valentine Interactive Website", type: "Personal experiment", tech: "HTML / CSS / JavaScript" },
    { name: "5th Anniversary Website", type: "Personal project", tech: "HTML / CSS / JavaScript" },
  ],
  experience: [
    { organization: "Madcodres Technologies", location: "Kinfra Kakanchery", role: "Flutter Mobile App Development Intern", period: "June 1 – July 1, 2026", detail: "Built an official Panchayat mobile app.", certificate: "Certificate to be added" },
    { organization: "Corizo", location: "", role: "Cybersecurity Intern", period: "August 2025 – October 2025", detail: "Cybersecurity fundamentals training.", certificate: "Certificate details to be added" },
  ],
  education: [
    { institution: "Government Engineering College Idukki", qualification: "B.Tech Information Technology", board: "APJ Abdul Kalam Technological University", period: "2023–2027", result: "CGPA 7.00" },
    { institution: "SNMHSS Parappanangadi", qualification: "Higher Secondary", board: "", period: "", result: "95.6%" },
    { institution: "SNMHSS Parappanangadi", qualification: "10th Standard", board: "", period: "", result: "9 A+" },
  ],
  development: [
    "Python workshop — IIT Palakkad", "IEEE technical workshops", "Technical workshop — NIT Calicut",
    "Drishti Tech Fest — CET · Upcoming / attending", "Preparing for GATE 2027",
  ],
  design: {
    summary: "A supporting perspective that helps me think through interfaces, structure and visual communication.",
    categories: ["Figma frameworks", "UI/UX wireframes", "Digital invitations", "Posters", "Save-the-dates"],
  },
  certifications: [
    { name: "Madcodres Technologies Internship Certificate", status: "Certificate to be added" },
  ],
  volunteering: ["Alumni Connect Volunteer", "Oasis Volunteer", "Sterelerio Astronomy Club Volunteer"],
  interests: ["Digital Design", "Cooking", "Journaling", "Driving"],
} as const;

export type FeaturedProject = (typeof portfolioData.featuredProjects)[number];