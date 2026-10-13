import { useState } from "react";

import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

/* ============================================================
   CONTACT INFORMATION
   ============================================================ */

const contactEmail = "chayma.chaibi003@gmail.com";

const githubUrl = "https://github.com/chaibichayma";
const linkedinUrl = "https://www.linkedin.com/in/chayma-chaibi-807116263/";

/* ============================================================
   CONTACT COMPONENT
   ============================================================ */

function Contacte() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  /* ==========================================================
     COPY EMAIL
     ========================================================== */

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(
        "Unable to copy email.",
        error
      );
    }
  };

  /* ==========================================================
     FORM SUBMIT
     ========================================================== */

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = (
      form.elements.namedItem(
        "name"
      ) as HTMLInputElement
    ).value;

    const senderEmail = (
      form.elements.namedItem(
        "email"
      ) as HTMLInputElement
    ).value;

    const message = (
      form.elements.namedItem(
        "message"
      ) as HTMLTextAreaElement
    ).value;

    /* ========================================================
       EMAIL SUBJECT
       ======================================================== */

    const subject =
      `Portfolio Contact — ${name}`;

    /* ========================================================
       EMAIL BODY
       ======================================================== */

    const body =
      `Name: ${name}\n` +
      `Email: ${senderEmail}\n\n` +
      `${message}`;

    /* ========================================================
       MAILTO
       ======================================================== */

    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    /* ========================================================
       FORM STATUS
       ======================================================== */

    setFormStatus(
      "Your email client is opening..."
    );

    setTimeout(() => {
      setFormStatus("");
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      {/* ======================================================
          DECORATIVE NOISE
          ====================================================== */}

      <div
        className="contact-noise"
        aria-hidden="true"
      />

      <div className="contact-container">

        {/* ====================================================
            HEADER
            ==================================================== */}

        <div className="contact-header">

          <div className="contact-eyebrow">

            <span
              className="contact-eyebrow-line"
              aria-hidden="true"
            />

            <span>
              LET&apos;S CONNECT
            </span>

            <Sparkles
              size={14}
              aria-hidden="true"
            />

          </div>

          {/* Main SEO heading */}

          <h2 id="contact-title">
            Have an idea?
            <br />
            <span>Let&apos;s build it.</span>
          </h2>

          <p>
            Whether you have a project in mind, a
            job opportunity, or simply want to talk
            about technology and artificial
            intelligence, my inbox is open.
          </p>

        </div>

        {/* ====================================================
            MAIN CONTACT AREA
            ==================================================== */}

        <div className="contact-grid">

          {/* ==================================================
              LEFT SIDE - CONTACT INFORMATION
              ================================================== */}

          <div className="contact-info">

            {/* =================================================
                AVAILABILITY STATUS
                ================================================= */}

            <div
              className="contact-status"
              aria-label="Currently available for opportunities"
            >
              <span
                className="contact-status-dot"
                aria-hidden="true"
              />

              <div>

                <span className="contact-status-label">
                  CURRENT STATUS
                </span>

                <strong>
                  Available for opportunities
                </strong>

              </div>

              <span
                className="contact-status-pulse"
                aria-hidden="true"
              />

            </div>

            {/* =================================================
                EMAIL CARD
                ================================================= */}

            <div className="contact-email-card">

              <div className="contact-card-top">

                <div
                  className="contact-icon"
                  aria-hidden="true"
                >
                  <Mail size={20} />
                </div>

                <span>
                  DIRECT CHANNEL
                </span>

              </div>

              <span className="contact-card-label">
                EMAIL
              </span>

              <a
                href={`mailto:${contactEmail}`}
                className="contact-email"
                aria-label={`Send an email to ${contactEmail}`}
              >
                {contactEmail}
              </a>

              <button
                className="contact-copy"
                onClick={copyEmail}
                type="button"
                aria-label={
                  copied
                    ? "Email address copied"
                    : "Copy email address"
                }
              >
                {copied ? (
                  <>
                    <Check
                      size={15}
                      aria-hidden="true"
                    />

                    <span>
                      Copied
                    </span>
                  </>
                ) : (
                  <>
                    <Copy
                      size={15}
                      aria-hidden="true"
                    />

                    <span>
                      Copy email
                    </span>
                  </>
                )}
              </button>

            </div>

            {/* =================================================
                SOCIAL LINKS
                ================================================= */}

            <nav
              className="contact-socials"
              aria-label="Social media profiles"
            >

              {/* =================================================
                  GITHUB
                  ================================================= */}

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social"
                aria-label="Ayah Al-Mahjoubi on GitHub"
              >
                <div
                  className="contact-social-icon"
                  aria-hidden="true"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.46-1.21-1.11-1.53-1.11-1.53-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.59 2.36 1.13 2.94.86.09-.67.35-1.13.64-1.39-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.1 9.1 0 0 1 12 6.14c.85 0 1.7.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9v2.83c0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                  </svg>
                </div>

                <div>
                  <span>
                    GITHUB
                  </span>

                  <strong>
                    Explore my code
                  </strong>
                </div>

                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                />
              </a>

              {/* =================================================
                  LINKEDIN
                  ================================================= */}

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social"
                aria-label="Ayah Al-Mahjoubi on LinkedIn"
              >
                <div
                  className="contact-social-icon"
                  aria-hidden="true"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V8.99h3.56v11.46ZM22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0Z" />
                  </svg>
                </div>

                <div>
                  <span>
                    LINKEDIN
                  </span>

                  <strong>
                    Let&apos;s connect
                  </strong>
                </div>

                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                />
              </a>

            </nav>

            {/* =================================================
                LOCATION
                ================================================= */}

            <address className="contact-location">

              <MapPin
                size={17}
                aria-hidden="true"
              />

              <div>
                <span>
                  BASED IN
                </span>

                <strong>
                  Tunisia · Open to remote
                </strong>
              </div>

            </address>

          </div>

          {/* ==================================================
              CONTACT FORM
              ================================================== */}

          <div className="contact-form-wrapper">

            {/* FORM HEADER */}

            <div className="contact-form-header">

              <div>
                <span className="contact-form-code">
                  / INITIATE_CONNECTION
                </span>

                <h3>
                  Send a message
                </h3>
              </div>

              <div
                className="contact-terminal-dot"
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
              </div>

            </div>

            {/* FORM */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              aria-label="Contact form"
            >

              {/* =================================================
                  NAME + EMAIL
                  ================================================= */}

              <div className="contact-form-row">

                <div className="contact-field">

                  <label htmlFor="contact-name">
                    YOUR NAME
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    required
                  />

                </div>

                <div className="contact-field">

                  <label htmlFor="contact-email">
                    YOUR EMAIL
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="john@email.com"
                    autoComplete="email"
                    required
                  />

                </div>

              </div>

              {/* =================================================
                  MESSAGE
                  ================================================= */}

              <div className="contact-field">

                <label htmlFor="contact-message">
                  MESSAGE
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project, idea or opportunity..."
                  required
                />

              </div>

              {/* =================================================
                  FORM BOTTOM
                  ================================================= */}

              <div className="contact-form-bottom">

                <div
                  className="contact-form-status"
                  role="status"
                  aria-live="polite"
                >
                  {formStatus && (
                    <>
                      <span aria-hidden="true" />
                      <span>
                        {formStatus}
                      </span>
                    </>
                  )}
                </div>

                <button
                  type="submit"
                  className="contact-submit"
                  aria-label="Send message"
                >
                  <span>
                    Send Message
                  </span>

                  <Send
                    size={17}
                    aria-hidden="true"
                  />
                </button>

              </div>

            </form>

          </div>
        </div>

        {/* ======================================================
            BOTTOM CTA
            ====================================================== */}

        <div className="contact-bottom">

          <div
            className="contact-bottom-line"
            aria-hidden="true"
          />

          <div className="contact-bottom-content">

            <span>
              GOT SOMETHING INTERESTING?
            </span>

            <strong>
              Let&apos;s turn an idea into something real.
            </strong>

          </div>

          <div
            className="contact-bottom-decoration"
            aria-hidden="true"
          >
            <span>
              01
            </span>

            <div />

            <span>
              ∞
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contacte;