"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

interface HeroProps {
  /** Absolute or relative URL for the fullscreen background photo */
  backgroundImage?: string;
  /** Small label above the headline */
  eyebrow?: string;
  /** Main headline — use \n for manual line breaks */
  headline?: string;
  /** Supporting paragraph */
  body?: string;
  /** CTA button label */
  ctaLabel?: string;
  /** CTA href — typically an anchor to the next section */
  ctaHref?: string;
}

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function Hero({
  backgroundImage = "/images/hero-bg.jpg",
  eyebrow = "Financiamiento inteligente",
  headline = "Soluciones diseñadas\npara empresas que\nno pueden esperar.",
  body = "Conectamos empresas e inversionistas con herramientas financieras ágiles, seguras y de alto impacto.",
  ctaLabel = "Cómo trabajamos",
  ctaHref = "#servicios",
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll progress relative to the hero section's travel through the viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: background drifts upward at 60% of scroll speed
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  // Content fades and floats away as user scrolls
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, -72]);

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-[#1B365F]"
    >
      {/* ── Background: zoom-in on mount + parallax on scroll ─────────────── */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: bgY }}
      >
        <motion.div
          className="h-full w-full"
          initial={{ scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </motion.div>

      {/* ── Cinematic gradient overlays ────────────────────────────────────── */}
      {/* Top vignette — darkens sky / top edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(27,54,95,0.55) 0%, transparent 38%)",
        }}
      />
      {/* Bottom vignette — dark stage for the text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,20,40,0.80) 0%, rgba(10,20,40,0.40) 40%, transparent 70%)",
        }}
      />

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex h-full flex-col justify-end"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="mx-auto w-full max-w-7xl px-8 pb-16 sm:px-12 lg:px-20 lg:pb-28">

          {/* Eyebrow */}
          <motion.span
            custom={0.6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.34em] text-white/55"
          >
            {/* Accent line */}
            <span className="block h-px w-8 bg-white/40" aria-hidden="true" />
            {eyebrow}
          </motion.span>

          {/* Headline */}
          <motion.h1
            custom={0.82}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-7 max-w-[14ch] whitespace-pre-line font-display font-bold leading-[1.05] tracking-[-0.025em] text-white text-[2.5rem] sm:text-[3.4rem] lg:text-[4.5rem] xl:text-[5.2rem]"
          >
            {headline}
          </motion.h1>

          {/* Body + CTA row */}
          <motion.div
            custom={1.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-10"
          >
            <p className="max-w-[38ch] font-body text-[15px] leading-[1.70] text-white/65 lg:text-[16.5px]">
              {body}
            </p>

            <a
              href={ctaHref}
              className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-white/25 bg-white/10 px-7 py-3.5 font-display text-[14.5px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-[#1B365F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              {ctaLabel}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* ── Scroll indicator — bottom-right ──────────────────────────────── */}
        <motion.div
          custom={1.7}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          aria-hidden="true"
          className="absolute bottom-10 right-8 flex flex-col items-center gap-3 sm:right-14 lg:right-20"
        >
          <motion.div
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-px origin-top bg-gradient-to-b from-white/50 to-transparent"
          />
          <span className="rotate-90 font-mono text-[8.5px] uppercase tracking-[0.30em] text-white/35">
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Inline icon (no extra dependency) ───────────────────────────────────────

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
        clipRule="evenodd"
      />
    </svg>
  );
}
