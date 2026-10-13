import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  Sparkles,
} from "lucide-react";

/* ============================================================
   FOOTER INFORMATION
   ============================================================ */

const contactEmail = "chayma.chaibi003@gmail.com";

const githubUrl = "https://github.com/chaibichayma";
const linkedinUrl = "https://www.linkedin.com/in/chayma-chaibi-807116263/";

/* ============================================================
   NAVIGATION
   ============================================================ */

const footerNavigation = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

/* ============================================================
   FOOTER COMPONENT
   ============================================================ */

function Footer() {
  const currentYear = new Date().getFullYear();

  /* ==========================================================
     SCROLL TO TOP
     ========================================================== */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="footer"
      aria-label="Website footer"
    >
      {/* ======================================================
          DECORATIVE GLOW
          ====================================================== */}

      <div
        className="footer-glow"
        aria-hidden="true"
      />

      <div className="footer-container">

        {/* ====================================================
            TOP FOOTER
            ==================================================== */}

        <div className="footer-top">

          {/* ==================================================
              BRAND
              ================================================== */}

          <div className="footer-brand">

            <a
              href="#home"
              className="footer-logo"
              aria-label="Chayma Chaibi - back to homepage"
            >
              Chayma<span aria-hidden="true">.</span>
            </a>

            <p>
              Full-Stack Developer &amp; AI Engineer
              <br />
              Building digital experiences with
              <br />
              code, creativity and intelligence.
            </p>

            <div
              className="footer-status"
              aria-label="Currently available for opportunities"
            >
              <span
                className="footer-status-dot"
                aria-hidden="true"
              />

              <span>
                Available for opportunities
              </span>
            </div>

          </div>

          {/* ==================================================
              NAVIGATION
              ================================================== */}

          <div className="footer-navigation">

            <span className="footer-heading">
              NAVIGATION
            </span>

            <nav
              aria-label="Footer navigation"
            >
              {footerNavigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-label={`Go to ${item.label} section`}
                >
                  <span>
                    {item.label}
                  </span>

                  <ArrowUpRight
                    size={13}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>

          </div>

          {/* ==================================================
              CONNECT
              ================================================== */}

          <div className="footer-connect">

            <span className="footer-heading">
              CONNECT
            </span>

            {/* EMAIL */}

            <a
              href={`mailto:${contactEmail}`}
              className="footer-email"
              aria-label={`Send an email to ${contactEmail}`}
            >
              <Mail
                size={16}
                aria-hidden="true"
              />

              <span>
                {contactEmail}
              </span>
            </a>

            {/* SOCIAL LINKS */}

            <nav
              className="footer-socials"
              aria-label="Social media profiles"
            >

              {/* =================================================
                  GITHUB
                  ================================================= */}

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chayma Chaibi on GitHub"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.46-1.21-1.11-1.53-1.11-1.53-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.59 2.36 1.13 2.94.86.09-.67.35-1.13.64-1.39-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.1 9.1 0 0 1 12 6.14c.85 0 1.7.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9v2.83c0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                </svg>

                <span>
                  GitHub
                </span>
              </a>

              {/* =================================================
                  LINKEDIN
                  ================================================= */}

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chayma Chaibi on LinkedIn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V8.99h3.56v11.46ZM22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46C23.21 24 24 .79 24 1.77V1.77C24 .79 23.21 0 22.23 0Z" />
                </svg>

                <span>
                  LinkedIn
                </span>
              </a>

            </nav>

          </div>

        </div>

        {/* ====================================================
            BIG SIGNATURE
            ==================================================== */}

        <div
          className="footer-signature"
          aria-labelledby="footer-signature-title"
        >

          <div
            className="footer-signature-line"
            aria-hidden="true"
          >
            <span>
              Chayma
            </span>

            <Sparkles
              size={14}
              aria-hidden="true"
            />

            <span>
              DEV
            </span>
          </div>

          <h2 id="footer-signature-title">
            Code with purpose.
          </h2>

        </div>

        {/* ====================================================
            BOTTOM FOOTER
            ==================================================== */}

        <div className="footer-bottom">

          {/* COPYRIGHT */}

          <div className="footer-copyright">

            <span>
              © {currentYear} Chayma Chaibi.
            </span>

            <span>
              All rights reserved.
            </span>

          </div>

          {/* TECHNOLOGY */}

          <div
            className="footer-built"
            aria-label="Website built with React and artificial intelligence"
          >
            <span>
              Designed &amp; built with
            </span>

            <strong>
              React
            </strong>

            <span aria-hidden="true">
              +
            </span>

            <strong>
              AI
            </strong>
          </div>

          {/* BACK TO TOP */}

          <button
            type="button"
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Scroll back to the top of the page"
          >
            <ArrowUp
              size={16}
              aria-hidden="true"
            />

            <span>
              BACK TO TOP
            </span>
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;