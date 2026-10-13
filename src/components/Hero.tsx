import {
  ArrowDown,
  ArrowRight,
  Code2,
  Brain,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
      aria-labelledby="hero-title"
    >
      {/* ======================================================
          BACKGROUND
          ====================================================== */}

      <div
        className="hero-overlay"
        aria-hidden="true"
      />

      <div
        className="hero-glow hero-glow-1"
        aria-hidden="true"
      />

      <div
        className="hero-glow hero-glow-2"
        aria-hidden="true"
      />

      {/* ======================================================
          MAIN CONTENT
          ====================================================== */}

      <div className="hero-content">

        {/* ====================================================
            HERO TEXT
            ==================================================== */}

        <div className="hero-text">

          {/* Availability */}

          <div
            className="availability"
            aria-label="Currently available for professional opportunities"
          >
            <span
              className="availability-dot"
              aria-hidden="true"
            />

            <span>
              Available for opportunities
            </span>
          </div>

          {/* Professional label */}

          <p className="hero-label">
            Full-Stack Developer · AI Engineer
          </p>

          {/* ==================================================
              MAIN SEO HEADING
              ONLY H1 ON THE PAGE
              ================================================== */}

          <h1 id="hero-title">
            Hi, I'm
            <br />
            <span>Chayma Chaibi</span>
          </h1>

          {/* ==================================================
              SEO DESCRIPTION
              ================================================== */}

          <p className="hero-description">
            I&apos;m a Full-Stack Developer and AI Engineer
            specializing in modern web and mobile applications,
            artificial intelligence, and intelligent digital
            solutions. I build scalable, user-friendly and
            impactful products that turn ideas into real-world
            experiences.
          </p>

          {/* ==================================================
              CTA BUTTONS
              ================================================== */}

          <div className="hero-buttons">

            {/* Projects */}

            <a
              href="#projects"
              className="primary-button"
              aria-label="View Ayah Al-Mahjoubi's projects"
            >
              <span>
                View My Work
              </span>

              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </a>

            {/* CV */}

            <a
              href="/Chayma-Chaibi-CV.pdf"
              className="secondary-button"
              download
              aria-label="Download Chayma Chaibi's CV"
            >
              <span>
                Download CV
              </span>

              <ArrowDown
                size={17}
                aria-hidden="true"
              />
            </a>

          </div>

          {/* ==================================================
              SOCIAL LINKS
              ================================================== */}

          <nav
            className="social-links"
            aria-label="Social media and contact links"
          >
            {/* GitHub */}

            <a
              href="https://github.com/chaibichayma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chayma Chaibi on GitHub"
            >
              GitHub
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/chayma-chaibi-807116263/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chayma Chaibi on LinkedIn"
            >
              LinkedIn
            </a>

            {/* Email */}

            <a
              href="mailto:chayma.chaibi003@gmail.com"
              aria-label="Send an email to Chayma Chaibi"
            >
              Email
            </a>
          </nav>

        </div>

        {/* ====================================================
            HERO VISUAL
            ==================================================== */}

        <div
          className="hero-visual"
          aria-label="Portrait of Chayma Chaibi"
        >

          <div className="image-frame">

            {/* ==================================================
                PROFILE IMAGE
                ================================================== */}

            <motion.div
              className="hero-image-wrapper"
              initial={{
                opacity: 0,
                scale: 0.85,
                x: 60,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src="/images/chayma.png"
                alt="Chayma Chaibi, Full-Stack Developer and AI Engineer"
                width="600"
                height="750"
                fetchPriority="high"
              />
            </motion.div>

            {/* Decorative glow */}

            <div
              className="image-glow"
              aria-hidden="true"
            />

          </div>

          {/* ==================================================
              FLOATING FULL-STACK CARD
              ================================================== */}

          <div
            className="floating-card floating-card-code"
            aria-label="Full-Stack Development"
          >
            <Code2
              size={22}
              aria-hidden="true"
            />

            <div>
              <strong>
                Full-Stack
              </strong>

              <span>
                Development
              </span>
            </div>
          </div>

          {/* ==================================================
              FLOATING AI CARD
              ================================================== */}

          <div
            className="floating-card floating-card-ai"
            aria-label="Artificial Intelligence Engineering"
          >
            <Brain
              size={22}
              aria-hidden="true"
            />

            <div>
              <strong>
                AI
              </strong>

              <span>
                Engineering
              </span>
            </div>
          </div>

          {/* ==================================================
              FLOATING MOBILE CARD
              ================================================== */}

          <div
            className="floating-card floating-card-mobile"
            aria-label="Mobile Development"
          >
            <Smartphone
              size={22}
              aria-hidden="true"
            />

            <div>
              <strong>
                Mobile
              </strong>

              <span>
                Development
              </span>
            </div>
          </div>

          {/* ==================================================
              DECORATIVE SPARK
              ================================================== */}

          <div
            className="floating-card floating-card-spark"
            aria-hidden="true"
          >
            <Sparkles size={18} />
          </div>

        </div>

      </div>

      {/* ======================================================
          SCROLL INDICATOR
          ====================================================== */}

      <div
        className="scroll-indicator"
        aria-hidden="true"
      >
        <div className="scroll-icon">
          <ArrowDown size={15} />
        </div>

        <span>
          Scroll to explore
        </span>
      </div>

    </section>
  );
}