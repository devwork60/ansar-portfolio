"use client";

import { motion } from "motion/react";
import { engagements, skillGroups } from "@/lib/data";
import { Reveal, Rise, ease } from "./ui";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-none tracking-wide">
          <Rise text="THE TOOLKIT" />{" "}
          <Rise text="behind" delay={0.1} italic={["behind"]} />{" "}
          <Rise text="THE SYSTEMS" delay={0.18} />
        </h2>
        <Reveal y={10}>
          <p className="max-w-xs text-[14px] leading-snug text-mut">Skills from the Upwork profile, grouped by what they&rsquo;re used for.</p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ duration: 0.8, ease, delay: i * 0.1 }}
            className="rounded-[1.75rem] bg-card p-8"
          >
            <h3 className="border-b border-line pb-4 font-serif text-3xl italic">{g.title}</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="rounded-full border border-ink/20 px-3.5 py-1.5 text-[14px] transition-colors duration-300 hover:bg-ink hover:text-paper">{s}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <Reveal className="mt-20">
        <h3 className="font-display text-[clamp(2.2rem,4.5vw,3.4rem)] leading-none tracking-wide">
          RECENT <span className="font-serif text-[1.02em] font-normal italic tracking-normal">engagements</span>
        </h3>
        <ul className="mt-6 border-t border-line">
          {engagements.map((e, i) => (
            <motion.li
              key={e.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -30px 0px" }}
              transition={{ duration: 0.6, ease, delay: (i % 3) * 0.05 }}
              className="group relative overflow-hidden border-b border-line"
            >
              <span aria-hidden className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-y-100" />
              <div className="relative grid gap-3 px-2 py-6 transition-colors duration-500 group-hover:text-paper sm:px-6 lg:grid-cols-12 lg:items-start lg:gap-8">
                <div className="lg:col-span-4">
                  <p className="font-display text-[1.7rem] leading-tight tracking-wide">{e.title.toUpperCase()}</p>
                  <p className="mt-1 flex items-center gap-3 text-[14px] opacity-70">
                    {e.period}
                    {e.rating !== null && (
                      <span aria-label={`Rated ${e.rating} out of 5`} className="tracking-[2px]">
                        {"★".repeat(Math.round(e.rating))}
                        <span className="opacity-30">{"★".repeat(5 - Math.round(e.rating))}</span>
                      </span>
                    )}
                  </p>
                </div>
                <p className="text-[15px] italic leading-snug opacity-80 lg:col-span-5">{e.quote ? `“${e.quote}”` : ""}</p>
                <ul className="flex flex-wrap gap-2 lg:col-span-3 lg:justify-end">
                  {e.tags.map((t) => (
                    <li key={t} className="rounded-full border border-current/30 px-3 py-1 font-display text-base tracking-wide">{t.toUpperCase()}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
