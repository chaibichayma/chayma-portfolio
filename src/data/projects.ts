export type ProjectCategory = "AI" | "Web" | "Mobile";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI CV Analyzer",
    category: "AI",
    description:
      "AI-powered CV analysis and candidate matching platform.",
    longDescription:
      "An intelligent platform that analyzes CVs, extracts relevant information and helps match candidates with job descriptions.",
    image: "/images/Analyse_Cv.png",
    technologies: ["React", "Artificial Intelligence", "NLP", "CV Parsing", "Semantic Matching", "Skills Extraction", "Candidate Ranking"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },

  {
    id: 2,
    title: "Invoice Analysis System",
    category: "AI",
    description:
      "Automated invoice extraction and intelligent data analysis.",
    longDescription:
      "A document intelligence application designed to extract and structure information from invoices using OCR and NLP.",
    image: "/images/projects/invoice.png",
    technologies: [
  "React",
  "Python",
  "OCR",
  "NLP",
  "Document Parsing",
  "Data Extraction",
  "Data Validation",
  "Automated Data Processing",
],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },

  {
    id: 3,
    title: "Smart Hotel Management",
    category: "Web",
    description:
      "Complete hotel management platform with reservations and analytics.",
    longDescription:
      "A modern hotel management system designed to manage reservations, rooms, customers and operational information through an intuitive interface.",
    image: "/images/projects/Hotele.png",
    technologies: [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "React Router",
  "React Hook Form",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "JWT",
],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },

  {
    id: 4,
    title: "PharmaChem",
    category: "Mobile",
    description:
      "Mobile application for pharmaceutical management.",
    longDescription:
      "A mobile application for selling and recommending cosmetic, pharmaceutical, and biological products, offering personalized product suggestions and a seamless shopping experience.",
    image: "/images/projects/Pharmachem.png",
    technologies: [
  "Flutter",
  "Dart",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "AI Chatbot",
],
    liveUrl: "#",
    githubUrl: "#",
  },


  {
    id: 5,
    title: "Women's E-commerce Platform",
    category: "Web",
    description:
      "Modern e-commerce platform with product management.",
    longDescription:
      "A modern e-commerce web application designed to offer women a seamless online shopping experience, featuring product discovery, category-based browsing, product details, and an intuitive shopping journey.",
    image: "/images/projects/women.png",
    technologies: ["React", "TypeScript", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
];