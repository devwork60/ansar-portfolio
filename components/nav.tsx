"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { nav, profile } from "@/lib/data";
import { LiveClock, ease } from "./ui";

export function Nav() {
  const pathname = usePathname();
  const home = pathname === "/";
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 });

  // hide the bar while scrolling down, bring it back on scroll up
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 360 && !open);
      last = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.__lenis?.stop();
    return () => {
      window.removeEventListener("keydown", onKey);
      window.__lenis?.start();
    };
  }, [open]);

  const href = (h: string) => (home ? h : `/${h}`);

  return (
    <>
      <motion.div className="fixed left-0 top-0 z-[70] h-[2px] w-full origin-left bg-ink" style={{ scaleX }} />
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.7, ease, delay: hidden ? 0 : 0.1 }}
        className="fixed inset-x-0 top-0 z-[65]"
      >
        <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3 font-display text-2xl tracking-wide" aria-label={`${profile.name} home`}>
            <span className="h-3 w-3 rounded-full bg-ink" />
            {profile.name.toUpperCase()}
          </Link>
          <div className="flex items-center gap-2">
            <a
              href={profile.hire}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink/25 px-4 py-2.5 font-display text-lg tracking-wide transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper sm:px-5"
            >
              <span className="sm:hidden">HIRE</span>
              <span className="hidden sm:inline">HIRE ME</span>
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((v) => !v)}
              className="group flex items-center gap-3 rounded-full bg-ink py-2.5 pl-5 pr-4 font-display text-lg tracking-wide text-paper transition-colors duration-300 hover:bg-acc sm:pl-6"
            >
              {open ? "CLOSE" : "MENU"}
              <span className="relative block h-3 w-5" aria-hidden>
                <span className={`absolute left-0 h-[1.5px] w-5 bg-paper transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-[1.5px] w-5 bg-paper transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3 group-hover:w-3"}`} />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-label="Menu"
            data-lenis-prevent
            className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-ink text-paper"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* the inner box fills the screen when there is room, and the whole menu scrolls when there is not */}
            <div className="flex min-h-full flex-col justify-between gap-8 px-5 pb-10 pt-24 sm:px-8">
            <ul className="mx-auto w-full max-w-[1240px]">
              {nav.map((l, i) => (
                <li key={l.href} className="overflow-hidden border-b border-paper/15">
                  <motion.a
                    href={href(l.href)}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between py-2 font-display text-[clamp(2.6rem,min(9vw,9.5vh),6rem)] leading-[0.95] tracking-wide"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.8, ease, delay: 0.25 + i * 0.07 }}
                  >
                    <span className="transition-transform duration-500 group-hover:translate-x-4">{l.label.toUpperCase()}</span>
                    <span className="font-serif text-base italic tracking-normal text-paper/50">0{i + 1}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
            <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-end justify-between gap-4 text-paper/70">
              <p className="font-serif text-lg">
                {profile.location} · <LiveClock className="text-paper" /> PKT
              </p>
              <a href={profile.hire} target="_blank" rel="noreferrer" className="font-display text-xl tracking-wide text-paper underline decoration-paper/30 underline-offset-8 hover:decoration-paper">
                HIRE ME ON UPWORK ↗
              </a>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
