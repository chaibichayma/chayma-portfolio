import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  Moon,
  X,
} from "lucide-react";

/* ============================================================
   NAVIGATION ITEMS
   ============================================================ */

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* ============================================================
     CLOSE MOBILE MENU WHEN WINDOW BECOMES DESKTOP
     ============================================================ */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ============================================================
     PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
     ============================================================ */

  useEffect(() => {
    if (mobileMenuOpen && window.innerWidth <= 1000) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /* ============================================================
     CLOSE MOBILE MENU
     ============================================================ */

  const handleMobileLink = () => {
    setMobileMenuOpen(false);
  };

  /* ============================================================
     TOGGLE MOBILE MENU
     ============================================================ */

  const toggleMobileMenu = () => {
    setMobileMenuOpen((previous) => !previous);
  };

  return (
    <>
      {/* ========================================================
          MAIN SITE HEADER
          ======================================================== */}

      <header className="navbar">
        {/* ======================================================
            LOGO
            ====================================================== */}

        <a
          href="#home"
          className="logo"
          aria-label="Chayma Chaibi - Home"
          onClick={handleMobileLink}
        >
          Chayma<span>.</span>
        </a>

        {/* ======================================================
            DESKTOP NAVIGATION
            ====================================================== */}

        <nav
          className="nav-links"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={`Go to ${item.label} section`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ======================================================
            NAVIGATION ACTIONS
            ====================================================== */}

        <div className="nav-actions">
          {/* ====================================================
              CONTACT CTA
              ==================================================== */}

          <a
            href="#contact"
            className="talk-button"
            aria-label="Go to contact section"
          >
            <span>Let's Talk</span>
            <ArrowUpRight
              size={16}
              aria-hidden="true"
            />
          </a>

          {/* ====================================================
              THEME BUTTON
              ==================================================== */}

          <button
            type="button"
            className="theme-button"
            aria-label="Toggle dark theme"
          >
            <Moon
              size={15}
              aria-hidden="true"
            />
          </button>

          {/* ====================================================
              MOBILE MENU BUTTON
              ==================================================== */}

          <button
            type="button"
            className="navbar-mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <X
                size={21}
                aria-hidden="true"
              />
            ) : (
              <Menu
                size={21}
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </header>

      {/* ========================================================
          MOBILE NAVIGATION
          ======================================================== */}

      <div
        id="mobile-navigation"
        className={`navbar-mobile-menu ${
          mobileMenuOpen ? "is-open" : ""
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* ======================================================
            MOBILE MENU HEADER
            ====================================================== */}

        <div className="navbar-mobile-header">
          <span>Navigation</span>

          <span className="navbar-mobile-status">
            <span aria-hidden="true" />
            Online
          </span>
        </div>

        {/* ======================================================
            MOBILE LINKS
            ====================================================== */}

        <nav
          className="navbar-mobile-links"
          aria-label="Mobile navigation"
        >
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleMobileLink}
              style={{
                transitionDelay: mobileMenuOpen
                  ? `${index * 40}ms`
                  : "0ms",
              }}
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              {/* NUMBER */}

              <span
                className="mobile-nav-number"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* LABEL */}

              <span className="mobile-nav-label">
                {item.label}
              </span>

              {/* ARROW */}

              <ArrowUpRight
                size={17}
                className="mobile-nav-arrow"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        {/* ======================================================
            MOBILE CTA
            ====================================================== */}

        <a
          href="#contact"
          className="navbar-mobile-cta"
          onClick={handleMobileLink}
          tabIndex={mobileMenuOpen ? 0 : -1}
        >
          <span>Start a conversation</span>

          <ArrowUpRight
            size={18}
            aria-hidden="true"
          />
        </a>

        {/* ======================================================
            MOBILE FOOTER
            ====================================================== */}

        <div className="navbar-mobile-footer">
          <span>Chayma.DEV</span>
          <span>FULL-STACK · AI</span>
        </div>
      </div>

      {/* ========================================================
          MOBILE OVERLAY
          ======================================================== */}

      {mobileMenuOpen && (
        <button
          type="button"
          className="navbar-mobile-overlay"
          aria-label="Close navigation menu"
          onClick={handleMobileLink}
        />
      )}
    </>
  );
}