
import { useState } from "react";
import {
  Code2,
  Server,
  Brain,
  Smartphone,
  Database,
  Wrench,
  ChevronDown,
} from "lucide-react";

import SkillsScene from "./three/SkillsScene";
import Reveal from "./animations/Reveal";

/* ============================================================
   SKILL CATEGORIES
   ============================================================ */

const categories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: [
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Angular",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express",
      "Spring Boot",
      "REST APIs",
    ],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Neural Networks",
      "Natural Language Processing",
      "LLM",
      "RAG",
      "LangChain",
      "Hugging Face",
      "Transformers",
      "Computer Vision",
      "OCR",
      "Feature Engineering",
      "Model Evaluation",
      "Data Preprocessing",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    icon: Wrench,
    title: "Development Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
    ],
  },
];

/* ============================================================
   SKILLS COMPONENT
   ============================================================ */

export default function Skills() {
  const [showAllAI, setShowAllAI] = useState(false);

  return (
    <section
      id="skills"
      className="skills-section"
      aria-labelledby="skills-title"
    >
      <div className="skills-container">

        {/* SECTION HEADER */}

        <Reveal>
          <div className="skills-header">
            <div>
              <span className="section-number">
                02. MY SKILLS
              </span>

              <h2 id="skills-title">
                Technologies
                <br />
                <span>I work with.</span>
              </h2>
            </div>

            <p className="skills-description">
              I use modern web development technologies,
              backend frameworks, artificial intelligence
              and cloud tools to build scalable,
              user-friendly and end-to-end digital solutions.
            </p>
          </div>
        </Reveal>

        {/* 3D TECHNOLOGY UNIVERSE */}

        <Reveal delay={0.1}>
          <div
            className="skills-universe"
            aria-label="Interactive visualization of Chayma Chaibi's technology skills"
          >
            <div
              className="universe-glow"
              aria-hidden="true"
            />

            <SkillsScene />

            <div
              className="universe-label universe-label-left"
              aria-hidden="true"
            >
              <span>01</span>
              <strong>Build</strong>
            </div>

            <div
              className="universe-label universe-label-right"
              aria-hidden="true"
            >
              <span>02</span>
              <strong>Innovate</strong>
            </div>

            <div
              className="universe-caption"
              aria-hidden="true"
            >
              Move your cursor to explore
            </div>
          </div>
        </Reveal>

        {/* SKILL CATEGORY CARDS */}

        <div
          className="skills-categories"
          aria-label="Technical skills and technologies"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isAI =
              category.title === "AI & Machine Learning";

            const displayedSkills =
              isAI && !showAllAI
                ? category.skills.slice(0, 4)
                : category.skills;

            return (
              <Reveal
                key={category.title}
                delay={index * 0.06}
                className="skill-category-reveal"
              >
                <article
                  className={`skill-category ${
                    isAI ? "skill-category-ai" : ""
                  }`}
                  aria-labelledby={`skill-category-${index}`}
                >

                  {/* CATEGORY HEADER */}

                  <div className="skill-category-header">
                    <div
                      className="skill-category-icon"
                      aria-hidden="true"
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.7}
                      />
                    </div>

                    <h3 id={`skill-category-${index}`}>
                      {category.title}
                    </h3>
                  </div>

                  {/* TECHNOLOGY TAGS */}

                  <div
                    id={isAI ? "ai-skill-tags" : undefined}
                    className="skill-tags"
                    aria-label={`${category.title} technologies`}
                  >
                    {displayedSkills.map((skill) => (
                      <span
                        key={skill}
                        title={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* VIEW MORE — BELOW THE SKILLS */}

                  {isAI && (
                    <button
                      type="button"
                      className="skills-show-more"
                      onClick={() =>
                        setShowAllAI((previous) => !previous)
                      }
                      aria-expanded={showAllAI}
                      aria-controls="ai-skill-tags"
                    >
                      <span>
                        {showAllAI ? "View Less" : "View More"}
                      </span>

                      <ChevronDown
                        size={14}
                        aria-hidden="true"
                        className={
                          showAllAI ? "is-rotated" : ""
                        }
                      />
                    </button>
                  )}

                </article>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
