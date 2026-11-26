"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { profile } from "@/lib/data";

export const ease = [0.22, 1, 0.36, 1] as const;

/** Fade + lift when scrolled into view. */
export function Reveal({
  children, delay = 0, y = 32, className,
}: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Headline where each word rises out of a mask. Words listed in `italic` switch to the serif italic. */
export function Rise({
  text, className = "", delay = 0, immediate = false, italic = [],
}: { text: string; className?: string; delay?: number; immediate?: boolean; italic?: string[] }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const show = immediate || inView;
  const clean = (w: string) => w.replace(/[.,:;!?'’]/g, "").toLowerCase();
  const it = italic.map(clean);
  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split(" ").map((w, i, arr) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden py-[0.06em] align-bottom -my-[0.06em]">
          <motion.span
            className={`inline-block ${it.includes(clean(w)) ? "font-serif text-[1.02em] font-normal italic normal-case tracking-normal" : ""}`}
            initial={{ y: "115%" }}
            animate={{ y: show ? "0%" : "115%" }}
            transition={{ duration: 1, ease, delay: delay + i * 0.07 }}
          >
            {w}
            {i < arr.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Counts up to `to` when visible. */
export function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, { duration: 2, ease, onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to, reduce]);
  return <span ref={ref} className="tabular-nums">{prefix}{val}{suffix}</span>;
}

/** Wraps a button so it gently pulls toward the pointer. */
export function Magnetic({ children, strength = 0.3 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });
  return (
    <motion.div
      ref={ref}
      className="inline-block"
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.div>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`h-[1em] w-[1em] ${className}`} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** The black pill button with a small circled arrow, as in the reference style. */
export function Pill({
  href, children, external = false, tone = "dark", className = "",
}: { href: string; children: React.ReactNode; external?: boolean; tone?: "dark" | "light" | "ghost"; className?: string }) {
  const tones = {
    dark: "bg-ink text-paper hover:bg-acc",
    light: "bg-paper text-ink hover:bg-white",
    ghost: "border border-ink/25 text-ink hover:bg-ink hover:text-paper",
  } as const;
  const circle = tone === "dark" ? "bg-paper text-ink" : tone === "light" ? "bg-ink text-paper" : "bg-ink text-paper group-hover:bg-paper group-hover:text-ink";
  const cls = `group inline-flex items-center gap-3 rounded-full py-2.5 pl-6 pr-2.5 font-display text-xl tracking-wide transition-colors duration-300 ${tones[tone]} ${className}`;
  const inner = (
    <>
      {children}
      <span className={`grid h-9 w-9 place-items-center rounded-full text-lg transition-transform duration-500 group-hover:-rotate-45 ${circle}`}>
        <Arrow />
      </span>
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>{inner}</a>
  ) : (
    <Link href={href} className={cls}>{inner}</Link>
  );
}

/** Small section label: a dot, then the name in tracked-out caps. */
export function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-3 font-display text-lg tracking-[0.12em] text-ink ${className}`}>
      <span className="h-2 w-2 rounded-full bg-ink" />
      {children}
    </p>
  );
}

/** Live local time for Ansar. Renders a dash until mounted, to avoid a hydration mismatch. */
export function LiveClock({ className = "" }: { className?: string }) {
  const [t, setT] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", { timeZone: profile.timeZone, hour: "numeric", minute: "2-digit" });
    const tick = () => setT(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return <span className={`tabular-nums ${className}`}>{t ?? "—"}</span>;
}
