export interface EducationItem {
  id: number;
  period: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  description: string;
  status: string;
}

export const education: EducationItem[] = [
  {
    id: 1,
    period: "2024 — 2026",
    degree: "Master's Degree",
    field: "Artificial Intelligence & Automated Reasoning",
    institution: "Faculty of Sciences of Monastir",
    location: "Monastir, Tunisia",
    description:
      "Advanced studies focused on artificial intelligence, machine learning, automated reasoning and intelligent systems.",
    status: "Completed",
  },
  {
    id: 2,
    period: "2021 — 2024",
    degree: "Bachelor's Degree",
    field: "Software Engineering and Information Systems",
    institution: "Faculty of Sciences of Monastir",
    location: "Monastir, Tunisia",
    description:
      "Academic foundation in software development, algorithms, databases, web development and computer science.",
    status: "Completed",
  },
];