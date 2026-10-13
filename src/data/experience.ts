export interface ExperienceItem {
  id: number;
  period: string;
  company: string;
  role: string;
  type: string;
  location: string;
  description: string;
  technologies: string[];
  current?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
  id: 1,
  period: "June 2023 — September 2026",
  company: "IT Dev For You",
  role: "Full-Stack Developer & AI Engineer",
  type: "Freelance",
  location: "Tunisia",
  description:
    "Designed and developed web and mobile applications, as well as AI-powered solutions, focusing on responsive interfaces, intelligent automation, and user-friendly digital experiences.",
  technologies: [
    "React",
    "TypeScript",
    "Flutter",
    "Dart",
    "Python",
    "FastAPI",
    "AI",
    "NLP",
  ],
  current: false,
},

{
  id: 2,
  period: "January 2024 — June 2024",
  company: "SMARTUP",
  role: "Software Development Intern",
  type: "Internship",
  location: "Tunisia",
  description:
    "Contributed to software development projects, building and improving application features while gaining practical experience in web development and software engineering.",
  technologies: [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
  ],
},

{
  id: 3,
  period: "May 2023 — September 2023",
  company: "SMARTUP",
  role: "Software Development Intern",
  type: "Internship",
  location: "Tunisia",
  description:
    "Participated in the development and maintenance of web applications, implementing user interface components and supporting application testing and debugging.",
  technologies: [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
  ],
},

{
  id: 4,
  period: "January 2022 — June 2022",
  company: "SMARTUP",
  role: "Software Development Intern",
  type: "Internship",
  location: "Tunisia",
  description:
    "Assisted with web development tasks, learned software development workflows, and contributed to building and testing basic application features.",
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
  ],
},
];