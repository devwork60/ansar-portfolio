"use client";

import { motion } from "motion/react";
import { about, audience, features, profile, tools } from "@/lib/data";
import { Label, Reveal, Rise, ease } from "./ui";

/** The four short columns under the hero. */
export function Features() {
  return (
    <section aria-label="What I do, in short" className="mx-auto max-w-[1240px] px-5 pb-10 pt-16 sm:px-8 lg:pt-20">
      <ul className="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.li
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ duration: 0.8, ease, delay: i * 0.09 }}
            className="relative px-0 sm:px-6 lg:first:pl-0 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-line"
          >
            <h3 className="font-display text-xl tracking-wide">{f.title.toUpperCase()}</h3>
            <p className="mt-2 max-w-[17rem] text-[14px] leading-snug text-mut">{f.text}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

/** Tools I work with: a bordered grid, like the "trusted by" block of the reference style. */
export function Tools() {
  return (
    <section aria-label="Tools" className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-none tracking-wide">
          <Rise text="TOOLS I WORK WITH" />
        </h2>
        <Reveal y={10}>
          <p className="max-w-sm text-[14px] leading-snug text-mut">
            Also part of{" "}
            <a href={profile.agency.href} target="_blank" rel="noreferrer" className="text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
              {profile.agency.name}
            </a>
            . {profile.agency.note}.
          </p>
        </Reveal>
      </div>

      <ul className="mt-9 grid grid-cols-2 border-l border-t border-line lg:grid-cols-4">
        {tools.map((t, i) => (
          <motion.li
            key={t.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.08 + Math.floor(i / 4) * 0.12 }}
            className="group relative overflow-hidden border-b border-r border-line"
          >
            <span aria-hidden className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-y-100" />
            <div className="relative flex items-center gap-4 px-6 py-7 transition-colors duration-500 group-hover:text-paper">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-current/40 font-display text-lg tracking-wide">{t.mark}</span>
              <span className="font-display text-2xl tracking-wide">{t.name.toUpperCase()}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 md:py-24">
      <div className="grid gap-10 lg:grid-cols-12">
        <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] tracking-wide lg:col-span-6">
          <Rise text="SYSTEMS THAT FOLLOW UP SO YOUR TEAM" />
          {" "}
          <Rise text="DOESN'T" delay={0.3} italic={["DOESN'T"]} />
          {" "}
          <Rise text="HAVE TO" delay={0.38} />
        </h2>
        <div className="lg:col-span-6 lg:pl-8">
          <Reveal>
            <p className="text-[clamp(1.4rem,2.2vw,1.9rem)] leading-[1.25]">{about.lead}</p>
          </Reveal>
          {about.body.map((para, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p className="mt-6 text-[16px] leading-relaxed text-mut">{para}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-14">
        <p className="font-display text-lg tracking-[0.12em]">WHAT I DO</p>
        <ul className="mt-4 grid border-t border-line sm:grid-cols-2">
          {about.points.map((p, i) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -30px 0px" }}
              transition={{ duration: 0.6, ease, delay: (i % 2) * 0.06 }}
              className="flex gap-3 border-b border-line py-3.5 text-[15.5px] sm:odd:pr-8 sm:even:pl-8"
            >
              <span aria-hidden className="font-display text-lg leading-none text-ink/50">{String(i + 1).padStart(2, "0")}</span>
              {p}
            </motion.li>
          ))}
        </ul>
        <p className="mt-9 font-display text-lg tracking-[0.12em]">WHO I WORK WITH</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {audience.map((a) => (
            <li key={a} className="rounded-full border border-ink/25 px-4 py-1.5 text-[14px] transition-colors duration-300 hover:bg-ink hover:text-paper">{a}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export { Label };
