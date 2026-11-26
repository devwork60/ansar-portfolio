"use client";

import { motion } from "motion/react";
import { certifications, education, experience } from "@/lib/data";
import { Reveal, Rise, ease } from "./ui";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-none tracking-wide">
          <Rise text="WHERE I&apos;VE" />{" "}
          <Rise text="done" delay={0.1} italic={["done"]} />{" "}
          <Rise text="THE WORK" delay={0.18} />
        </h2>
        <Reveal y={10}>
          <p className="max-w-xs text-[14px] leading-snug text-mut">Roles and engagements from the Upwork profile.</p>
        </Reveal>
      </div>

      <ol className="mt-12 border-t border-line">
        {experience.map((e, i) => (
          <motion.li
            key={e.role + e.period}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.7, ease, delay: (i % 3) * 0.05 }}
            className="group relative overflow-hidden border-b border-line"
          >
            <span aria-hidden className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-y-100" />
            <div className="relative grid gap-3 px-2 py-7 transition-colors duration-500 group-hover:text-paper sm:px-6 lg:grid-cols-12 lg:gap-8">
              <p className="text-[14px] opacity-70 lg:col-span-3">{e.period}</p>
              <div className="lg:col-span-4">
                <h3 className="font-display text-[clamp(1.8rem,2.8vw,2.4rem)] leading-[0.98] tracking-wide">{e.role.toUpperCase()}</h3>
                <p className="mt-1 font-serif text-[17px] italic opacity-80">{e.org}</p>
              </div>
              <p className="text-[15px] leading-snug opacity-80 lg:col-span-5">{e.detail}</p>
            </div>
          </motion.li>
        ))}
      </ol>

      <div className="mt-16 grid gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[1.75rem] bg-card p-8">
            <h3 className="border-b border-line pb-4 font-serif text-3xl italic">Education</h3>
            <ul className="mt-2">
              {education.map((e) => (
                <li key={e.title} className="flex items-baseline justify-between gap-4 border-b border-line py-4 last:border-0">
                  <span>
                    <span className="block font-display text-[1.5rem] leading-tight tracking-wide">{e.title.toUpperCase()}</span>
                    <span className="text-[14px] text-mut">{e.org}</span>
                  </span>
                  <span className="shrink-0 text-[14px] tabular-nums text-mut">{e.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-[1.75rem] bg-card p-8">
            <h3 className="border-b border-line pb-4 font-serif text-3xl italic">Certifications</h3>
            <ul className="mt-2">
              {certifications.map((c) => (
                <li key={c.title} className="flex items-baseline justify-between gap-4 border-b border-line py-4 last:border-0">
                  <span>
                    <span className="block font-display text-[1.35rem] leading-tight tracking-wide">{c.title.toUpperCase()}</span>
                    <span className="text-[14px] text-mut">{c.org}</span>
                  </span>
                  <span className="shrink-0 text-[14px] tabular-nums text-mut">{c.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
