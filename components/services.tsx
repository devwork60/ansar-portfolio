"use client";

import { motion } from "motion/react";
import { problems, services } from "@/lib/data";
import { Reveal, Rise, ease } from "./ui";

function ProblemRow({ bad, good, i }: { bad: string; good: string; i: number }) {
  return (
    <motion.li
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      className="grid gap-1 border-b border-line py-5 last:border-0 sm:grid-cols-2 sm:gap-10"
    >
      <motion.p
        variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.6, ease, delay: i * 0.12 }}
        className="relative text-[16px] text-mut"
      >
        <span className="relative inline">
          {bad}
          <motion.span
            aria-hidden
            className="absolute left-0 top-1/2 h-px w-full origin-left bg-ink/70"
            variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
            transition={{ duration: 0.5, ease, delay: i * 0.12 + 0.5 }}
          />
        </span>
      </motion.p>
      <motion.p
        variants={{ hidden: { opacity: 0, x: 14 }, show: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.6, ease, delay: i * 0.12 + 0.85 }}
        className="text-[16px]"
      >
        <span className="mr-2 font-display text-lg text-ink">→</span>
        {good}
      </motion.p>
    </motion.li>
  );
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-none tracking-wide">
          <Rise text="WHAT I" />{" "}
          <Rise text="BUILD" delay={0.1} italic={["BUILD"]} />
        </h2>
        <Reveal y={10}>
          <p className="max-w-xs text-[14px] leading-snug text-mut">CRM setup, automation and integrations, from the first pipeline to the handover video.</p>
        </Reveal>
      </div>

      <ul className="mt-10 border-t border-line">
        {services.map((s, i) => (
          <motion.li
            key={s.n}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ duration: 0.8, ease, delay: i * 0.08 }}
            className="group relative overflow-hidden border-b border-line"
          >
            <span aria-hidden className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-y-100" />
            <div className="relative grid gap-5 px-2 py-8 transition-colors duration-500 group-hover:text-paper sm:px-6 lg:grid-cols-12 lg:gap-8">
              <span className="font-display text-xl tracking-wide lg:col-span-1">{s.n}</span>
              <h3 className="font-display text-[clamp(1.9rem,3.2vw,2.8rem)] leading-[0.98] tracking-wide lg:col-span-4">{s.title.toUpperCase()}</h3>
              <ul className="space-y-2 text-[15px] leading-snug opacity-80 lg:col-span-5">
                {s.points.map((p) => (<li key={p} className="flex gap-3"><span aria-hidden>—</span>{p}</li>))}
              </ul>
              <ul className="flex flex-wrap content-start gap-2 lg:col-span-2 lg:justify-end">
                {s.tags.map((t) => (
                  <li key={t} className="rounded-full border border-current/30 px-3 py-1 font-display text-base tracking-wide">{t.toUpperCase()}</li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ul>

      <Reveal className="mt-20">
        <h3 className="font-display text-[clamp(2.2rem,4.5vw,3.4rem)] leading-none tracking-wide">
          PROBLEMS I FIX <span className="font-serif text-[1.02em] font-normal italic tracking-normal">most often</span>
        </h3>
        <ul className="mt-6 border-t border-line">
          {problems.map((p, i) => (<ProblemRow key={p.bad} bad={p.bad} good={p.good} i={i} />))}
        </ul>
      </Reveal>
    </section>
  );
}
