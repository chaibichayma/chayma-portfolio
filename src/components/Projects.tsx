import { useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  GitBranch,
} from "lucide-react";

import { projects } from "../data/projects";

import Reveal from "./animations/Reveal";
import RevealScale from "./animations/RevealScale";

/* ============================================================
   PROJECT FILTERS
   ============================================================ */

const filters = ["All", "AI", "Web", "Mobile"] as const;

type Filter = (typeof filters)[number];

/* ============================================================
   PROJECTS COMPONENT
   ============================================================ */

export default function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<Filter>("All");

  /* ==========================================================
     FILTER PROJECTS
     ========================================================== */

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-title"
    >
      <div className="projects-container">

        {/* ====================================================
            SECTION HEADER
            ==================================================== */}

        <Reveal>
          <div className="projects-header">

            <div>
              <span
                className="section-number"
                aria-hidden="true"
              >
                03. SELECTED PROJECTS
              </span>

              <h2 id="projects-title">
                Work that
                <br />
                <span>speaks for itself.</span>
              </h2>
            </div>

            <p>
              A selection of web, mobile and artificial
              intelligence projects where technology,
              design and problem-solving come together
              to create useful digital experiences.
            </p>

          </div>
        </Reveal>

        {/* ====================================================
            PROJECT FILTERS
            ==================================================== */}

        <Reveal delay={0.1}>
          <div
            className="projects-filters"
            role="group"
            aria-label="Filter projects by category"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  className={
                    isActive
                      ? "project-filter active"
                      : "project-filter"
                  }
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  aria-label={`Show ${
                    filter === "All"
                      ? "all"
                      : `${filter} development`
                  } projects`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ====================================================
            PROJECTS LIST
            ==================================================== */}

        <div
          className="projects-list"
          aria-live="polite"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))
          ) : (
            <p className="projects-empty">
              No projects available in this category.
            </p>
          )}
        </div>

        {/* ====================================================
            PROJECTS BOTTOM CTA
            ==================================================== */}

        <Reveal delay={0.1}>
          <div className="projects-bottom">

            <span>
              {projects.length
                .toString()
                .padStart(2, "0")}
              + projects & counting
            </span>

            <a
              href="#contact"
              aria-label="Contact Chayma Chaibi about a project"
            >
              <span>
                Have a project in mind?
              </span>

              <ArrowUpRight
                size={17}
                aria-hidden="true"
              />
            </a>

          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* ============================================================
   PROJECT CARD
   ============================================================ */

interface ProjectCardProps {
  project: (typeof projects)[number];
  index: number;
}

function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <RevealScale
      delay={index * 0.06}
      className="project-card-wrapper"
    >
      <article
        className="project-card"
        aria-labelledby={`project-title-${project.id}`}
      >

        {/* ==================================================
            PROJECT NUMBER
            ================================================== */}

        <div
          className="project-number"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* ==================================================
            PROJECT IMAGE
            ================================================== */}

        <div className="project-image-wrapper">

          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="project-image"
            loading="lazy"
            width="1200"
            height="750"
          />

          {/* Decorative overlay */}

          <div
            className="project-image-overlay"
            aria-hidden="true"
          />

          {/* =================================================
              PROJECT CATEGORY
              ================================================= */}

          <span
            className="project-category"
            aria-label={`Project category: ${project.category}`}
          >
            {project.category}
          </span>

          {/* =================================================
              HOVER ICON
              ================================================= */}

          <div
            className="project-hover-icon"
            aria-hidden="true"
          >
            <ArrowUpRight size={22} />
          </div>

        </div>

        {/* ==================================================
            PROJECT CONTENT
            ================================================== */}

        <div className="project-content">

          {/* =================================================
              PROJECT HEADER
              ================================================= */}

          <div className="project-content-top">

            <div>
              <span
                className="project-index"
                aria-hidden="true"
              >
                PROJECT{" "}
                {String(project.id).padStart(2, "0")}
              </span>

              <h3
                id={`project-title-${project.id}`}
              >
                {project.title}
              </h3>
            </div>

            {/* Featured */}

            {project.featured && (
              <span
                className="featured-badge"
                aria-label="Featured project"
              >
                Featured
              </span>
            )}

          </div>

          {/* =================================================
              SHORT DESCRIPTION
              ================================================= */}

          <p className="project-description">
            {project.description}
          </p>

          {/* =================================================
              LONG DESCRIPTION
              ================================================= */}

          <p className="project-long-description">
            {project.longDescription}
          </p>

          {/* =================================================
              TECHNOLOGIES
              ================================================= */}

          <div
            className="project-technologies"
            aria-label={`Technologies used in ${project.title}`}
          >
            {project.technologies.map(
              (technology) => (
                <span
                  key={technology}
                  title={technology}
                >
                  {technology}
                </span>
              )
            )}
          </div>

          {/* =================================================
              PROJECT LINKS
              ================================================= */}

          <div className="project-links">

            {/* LIVE DEMO */}

            {project.liveUrl &&
            project.liveUrl !== "#" ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink
                  size={15}
                  aria-hidden="true"
                />

                <span>
                  Live Demo
                </span>
              </a>
            ) : null}

            {/* GITHUB */}

            {project.githubUrl &&
            project.githubUrl !== "#" ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <GitBranch
                  size={15}
                  aria-hidden="true"
                />

                <span>
                  GitHub
                </span>
              </a>
            ) : null}

          </div>

        </div>
      </article>
    </RevealScale>
  );
}