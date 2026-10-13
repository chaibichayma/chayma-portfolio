import {
  Brain,
  Heart,
  Lightbulb,
  Users,
  ArrowUpRight,
} from "lucide-react";

import Reveal from "./animations/Reveal";
import RevealScale from "./animations/RevealScale";

/* ============================================================
   QUALITIES
   ============================================================ */

const qualities = [
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "I love turning complex problems into simple, practical and effective solutions.",
  },
  {
    icon: Brain,
    title: "Continuous Learner",
    description:
      "Always exploring new technologies, AI techniques and better approaches.",
  },
  {
    icon: Users,
    title: "Team Player",
    description:
      "I enjoy collaborating, sharing ideas and learning from other developers and teams.",
  },
  {
    icon: Heart,
    title: "Impact Driven",
    description:
      "I build technology with a focus on useful products and real-world impact.",
  },
];

/* ============================================================
   ABOUT COMPONENT
   ============================================================ */

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
      aria-labelledby="about-title"
    >
      <div className="about-container">

        {/* ======================================================
            SECTION HEADER
            ====================================================== */}

        <Reveal>
          <div className="section-heading">
            <span
              className="section-number"
              aria-hidden="true"
            >
              01. ABOUT ME
            </span>

            <h2 id="about-title">
              A story of{" "}
              <span>curiosity</span>
              <br />
              and impact.
            </h2>
          </div>
        </Reveal>

        {/* ======================================================
            MAIN CONTENT
            ====================================================== */}

        <div className="about-grid">

          {/* ====================================================
              LEFT SIDE - VISUAL
              ==================================================== */}

          <RevealScale className="about-visual">

            {/* Decorative orbit */}

            <div
              className="about-orbit orbit-one"
              aria-hidden="true"
            />

            <div
              className="about-orbit orbit-two"
              aria-hidden="true"
            />

            {/* ==================================================
                PROFILE PHOTO
                ================================================== */}

            <div className="about-photo-card">
              <img
                src="/images/chayma1.png"
                alt="Chayma Chaibi, Full-Stack Developer and AI Engineer"
                loading="lazy"
                width="600"
                height="750"
              />

              <div
                className="photo-overlay"
                aria-hidden="true"
              />
            </div>

            {/* ==================================================
                HANDWRITTEN NOTE
                ================================================== */}

            <div
              className="about-note note-one"
              aria-hidden="true"
            >
              <span>
                Passionate about
              </span>

              <strong>
                tech, AI & innovation
              </strong>

              <span className="note-arrow">
                ↗
              </span>
            </div>

            {/* ==================================================
                FLOATING CARD
                ================================================== */}

            <div
              className="about-floating-card"
              aria-label="Always learning and always building"
            >
              <div
                className="floating-dot"
                aria-hidden="true"
              />

              <div>
                <strong>
                  Always learning
                </strong>

                <span>
                  Always building
                </span>
              </div>
            </div>

          </RevealScale>

          {/* ====================================================
              RIGHT SIDE - CONTENT
              ==================================================== */}

          <div className="about-content">

            {/* ==================================================
                INTRODUCTION
                ================================================== */}

            <Reveal>
              <div className="about-introduction">

                <p>
                  I&apos;m{" "}
                  <strong>Chayma Chaibi</strong>, a{" "}
                  <strong>Full-Stack Developer</strong> and{" "}
                  <strong>AI enthusiast</strong> passionate about
                  building intelligent, useful and user-centered
                  digital experiences.
                </p>

                <p>
                  My journey combines{" "}
                  <strong>web development</strong>,{" "}
                  <strong>mobile application development</strong>{" "}
                  and{" "}
                  <strong>artificial intelligence</strong> to
                  transform ideas into practical and impactful
                  digital solutions.
                </p>

                <p>
                  I believe great software is not only about
                  writing code. It&apos;s about understanding a
                  problem, designing the right solution and
                  creating technology that people can actually
                  use.
                </p>

              </div>
            </Reveal>

            {/* ==================================================
                QUALITIES
                ================================================== */}

            <div
              className="qualities-grid"
              aria-label="Professional qualities"
            >
              {qualities.map((quality, index) => {
                const Icon = quality.icon;

                return (
                  <Reveal
                    key={quality.title}
                    delay={index * 0.08}
                  >
                    <article className="quality-card">

                      <div
                        className="quality-icon"
                        aria-hidden="true"
                      >
                        <Icon
                          size={20}
                          strokeWidth={1.6}
                        />
                      </div>

                      <div>
                        <h3>
                          {quality.title}
                        </h3>

                        <p>
                          {quality.description}
                        </p>
                      </div>

                    </article>
                  </Reveal>
                );
              })}
            </div>

            {/* ==================================================
                QUOTE
                ================================================== */}

            <Reveal delay={0.1}>
              <div className="about-quote">

                <div
                  className="quote-line"
                  aria-hidden="true"
                />

                <div className="quote-content">

                  <span aria-hidden="true">
                    "
                  </span>

                  <p>
                    I don&apos;t just write code.
                    <br />
                    I turn ideas into meaningful digital
                    experiences.
                  </p>

                </div>

                <a
                  href="#projects"
                  className="about-link"
                  aria-label="Explore Chayma Chaibi's projects"
                >
                  <span>
                    Explore my work
                  </span>

                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                  />
                </a>

              </div>
            </Reveal>

          </div>
        </div>

        {/* ======================================================
            STATS
            ====================================================== */}

        <Reveal delay={0.15}>
          <div
            className="about-stats"
            aria-label="Professional statistics"
          >

            <div className="stat">
              <strong>
                1+
              </strong>

              <span>
                Year of Experience
              </span>
            </div>

            <div className="stat">
              <strong>
                5+
              </strong>

              <span>
                Projects Completed
              </span>
            </div>

            <div className="stat">
              <strong>
                3+
              </strong>

              <span>
                Internships & Experiences
              </span>
            </div>

            <div className="stat">
              <strong>
                ∞
              </strong>

              <span>
                Ideas to Build
              </span>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}