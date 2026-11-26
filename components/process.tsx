"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { process } from "@/lib/data";
import { Reveal, Rise, ease } from "./ui";

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="process" className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-none tracking-wide">
          <Rise text="HOW I" />{" "}
          <Rise text="WORK" delay={0.1} italic={["WORK"]} />
        </h2>
        <Reveal y={10}>
          <p className="max-w-xs text-[14px] leading-snug text-mut">Map it first, build it second, test every trigger before handover.</p>
        </Reveal>
      </div>

      <div className="relative mt-14">
        {/* the line draws itself as you scroll (desktop) */}
        <div aria-hidden className="absolute left-0 right-0 top-[19px] hidden h-px bg-line lg:block">
          <motion.div style={{ scaleX: progress }} className="h-full origin-left bg-ink" />
        </div>
        <ol ref={ref} className="grid gap-10 lg:grid-cols-5 lg:gap-6">
          {process.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              className="relative"
            >
              <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-lg tracking-wide text-paper">{i + 1}</span>
              <h3 className="mt-5 font-display text-[2.2rem] leading-none tracking-wide">{s.title.toUpperCase()}</h3>
              <p className="mt-2 max-w-[15rem] text-[15px] leading-snug text-mut">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
