import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

import { education } from "../data/education";

import Reveal from "./animations/Reveal";
import RevealScale from "./animations/RevealScale";

export default function Education() {
  return (
    <section
      id="education"
      className="education-section"
      aria-labelledby="education-title"
    >
      <div className="education-container">

        {/* ======================================================
            SECTION HEADER
            ====================================================== */}

        <Reveal>
          <div className="education-header">

            <div>
              <span
                className="section-number"
                aria-hidden="true"
              >
                05. EDUCATION
              </span>

              <h2 id="education-title">
                Academic
                <br />
                <span>path.</span>
              </h2>
            </div>

            <p>
              The academic foundation behind my technical
              journey, curiosity and passion for artificial
              intelligence, software development and
              intelligent technologies.
            </p>

          </div>
        </Reveal>

        {/* ======================================================
            ACADEMIC UNIVERSE
            ====================================================== */}

        <div
          className="education-universe"
          aria-label="Academic education timeline"
        >

          {/* ====================================================
              DECORATIVE STARS
              ==================================================== */}

          <span
            className="education-star star-1"
            aria-hidden="true"
          />

          <span
            className="education-star star-2"
            aria-hidden="true"
          />

          <span
            className="education-star star-3"
            aria-hidden="true"
          />

          <span
            className="education-star star-4"
            aria-hidden="true"
          />

          <span
            className="education-star star-5"
            aria-hidden="true"
          />

          {/* ====================================================
              CONNECTING LINE
              ==================================================== */}

          <div
            className="education-line"
            aria-hidden="true"
          >
            <div className="education-line-progress" />
          </div>

          {/* ====================================================
              EDUCATION ITEMS
              ==================================================== */}

          <div className="education-items">

            {education.map((item, index) => (
              <Reveal
                key={item.id}
                delay={index * 0.1}
              >
                <article
                  className={`education-item ${
                    index % 2 === 0
                      ? "education-left"
                      : "education-right"
                  }`}
                  aria-labelledby={`education-field-${item.id}`}
                >

                  {/* ==============================================
                      PERIOD
                      ============================================== */}

                  <div className="education-period">
                    <span>
                      {item.period}
                    </span>
                  </div>

                  {/* ==============================================
                      EDUCATION NODE
                      ============================================== */}

                  <div
                    className="education-node"
                    aria-hidden="true"
                  >
                    <div className="education-node-inner">
                      <GraduationCap
                        size={18}
                        strokeWidth={1.7}
                      />
                    </div>
                  </div>

                  {/* ==============================================
                      EDUCATION CARD
                      ============================================== */}

                  <RevealScale
                    delay={index * 0.1 + 0.1}
                    className="education-card-wrapper"
                  >
                    <div className="education-card">

                      {/* ==========================================
                          CARD HEADER
                          ========================================== */}

                      <div className="education-card-header">

                        <div
                          className="education-icon"
                          aria-hidden="true"
                        >
                          {index === 0 ? (
                            <Sparkles
                              size={18}
                              strokeWidth={1.7}
                            />
                          ) : (
                            <BookOpen
                              size={18}
                              strokeWidth={1.7}
                            />
                          )}
                        </div>

                        <span className="education-status">
                          {item.status}
                        </span>

                      </div>

                      {/* ==========================================
                          DEGREE
                          ========================================== */}

                      <span className="education-degree">
                        {item.degree}
                      </span>

                      {/* ==========================================
                          FIELD OF STUDY
                          ========================================== */}

                      <h3
                        id={`education-field-${item.id}`}
                      >
                        {item.field}
                      </h3>

                      {/* ==========================================
                          INSTITUTION
                          ========================================== */}

                      <h4>
                        {item.institution}
                      </h4>

                      {/* ==========================================
                          LOCATION
                          ========================================== */}

                      <div className="education-location">

                        <MapPin
                          size={11}
                          aria-hidden="true"
                        />

                        <span>
                          {item.location}
                        </span>

                      </div>

                      {/* ==========================================
                          DESCRIPTION
                          ========================================== */}

                      <p>
                        {item.description}
                      </p>

                      {/* ==========================================
                          CARD FOOTER
                          ========================================== */}

                      <div className="education-card-footer">

                        <span>
                          {index === 0
                            ? "AI • Intelligent Systems"
                            : "Computer Science • Software"}
                        </span>

                        <ArrowUpRight
                          size={15}
                          aria-hidden="true"
                        />

                      </div>

                    </div>
                  </RevealScale>

                </article>
              </Reveal>
            ))}

          </div>
        </div>

        {/* ======================================================
            BOTTOM STATEMENT
            ====================================================== */}

        <Reveal delay={0.15}>
          <div className="education-bottom">

            <div
              className="education-bottom-symbol"
              aria-hidden="true"
            >
              ∞
            </div>

            <div>
              <span>
                LEARNING NEVER STOPS
              </span>

              <p>
                From academic foundations to real-world
                applications, every step continues to shape
                my way of building technology.
              </p>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}