import {
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
  Sparkles,
} from "lucide-react";

import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">

      <div className="experience-container">

        {/* Header */}
        <div className="experience-header">

          <div>
            <span className="section-number">
              04. EXPERIENCE
            </span>

            <h2>
              My professional
              <br />
              <span>journey.</span>
            </h2>
          </div>

          <p>
            Every experience has been an opportunity to learn,
            build real solutions and grow as a developer.
          </p>

        </div>

        {/* Timeline */}
        <div className="experience-timeline">

          {/* Main line */}
          <div className="timeline-line">
            <div className="timeline-progress" />
          </div>

          {experiences.map((experience, index) => (
            <article
              className={`experience-item ${
                index % 2 === 0
                  ? "experience-left"
                  : "experience-right"
              }`}
              key={experience.id}
            >

              {/* Timeline point */}
              <div className="timeline-point">
                <span />
              </div>

              {/* Period */}
              <div className="experience-period">
                <span>{experience.period}</span>
              </div>

              {/* Card */}
              <div className="experience-card">

                <div className="experience-card-top">

                  <div className="experience-icon">
                    <BriefcaseBusiness size={19} />
                  </div>

                  {experience.current && (
                    <span className="current-badge">
                      <span />
                      Current
                    </span>
                  )}

                </div>

                <div className="experience-meta">
                  <span>{experience.type}</span>
                  <span>•</span>
                  <span>
                    <MapPin size={11} />
                    {experience.location}
                  </span>
                </div>

                <h3>{experience.role}</h3>

                <h4>{experience.company}</h4>

                <p>
                  {experience.description}
                </p>

                <div className="experience-technologies">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="experience-arrow">
                  <ArrowUpRight size={17} />
                </div>

              </div>

            </article>
          ))}

        </div>

        {/* Bottom statement */}
        <div className="experience-bottom">

          <div className="experience-bottom-icon">
            <Sparkles size={18} />
          </div>

          <div>
            <span>THE JOURNEY CONTINUES</span>

            <p>
              Always learning. Always building.
              Always looking for the next challenge.
            </p>
          </div>

          <a href="#contact">
            Let's connect
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>

    </section>
  );
}