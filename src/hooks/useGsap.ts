import { useEffect } from "react";
import { gsap, ScrollTrigger } from "../components/animations/gsap";

function useGsap() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================================
         SECTION REVEALS
         ===================================================== */

      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 70,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* =====================================================
         HERO BACKGROUND PARALLAX
         ===================================================== */

      const heroBackground = document.querySelector(
        ".hero-background"
      );

      if (heroBackground) {
        gsap.to(heroBackground, {
          yPercent: 18,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      /* =====================================================
         HERO CONTENT PARALLAX
         ===================================================== */

      const heroContent = document.querySelector(".hero-content");

      if (heroContent) {
        gsap.to(heroContent, {
          y: -80,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "80% top",
            scrub: true,
          },
        });
      }

      /* =====================================================
         HERO IMAGE PARALLAX
         ===================================================== */

      const heroVisual = document.querySelector(".hero-visual");

      if (heroVisual) {
        gsap.to(heroVisual, {
          y: -45,
          rotate: 2,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      /* =====================================================
         PROJECT CARDS
         ===================================================== */

      gsap.utils
        .toArray<HTMLElement>(".project-card")
        .forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 60,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.05,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

      /* =====================================================
         EXPERIENCE TIMELINE
         ===================================================== */

      const experienceLine = document.querySelector(
        ".experience-timeline-line"
      );

      if (experienceLine) {
        gsap.fromTo(
          experienceLine,
          {
            scaleY: 0,
            transformOrigin: "top center",
          },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".experience-section",
              start: "top 65%",
              end: "bottom 70%",
              scrub: true,
            },
          }
        );
      }

      /* =====================================================
         EDUCATION LINE
         ===================================================== */

      const educationLine = document.querySelector(
        ".education-line"
      );

      if (educationLine) {
        gsap.fromTo(
          educationLine,
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".education-section",
              start: "top 70%",
              end: "center 50%",
              scrub: true,
            },
          }
        );
      }

      /* =====================================================
         CONTACT GLOW
         ===================================================== */

      const contactSection = document.querySelector(
        ".contact-section"
      );

      if (contactSection) {
        gsap.fromTo(
          contactSection,
          {
            "--contactGlow": 0,
          },
          {
            "--contactGlow": 1,
            scrollTrigger: {
              trigger: contactSection,
              start: "top 75%",
              end: "center center",
              scrub: true,
            },
          }
        );
      }

      /* =====================================================
         FOOTER SIGNATURE
         ===================================================== */

      const footerSignature = document.querySelector(
        ".footer-signature h2"
      );

      if (footerSignature) {
        gsap.fromTo(
          footerSignature,
          {
            x: -80,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".footer-signature",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
    };
  }, []);
}

export default useGsap;