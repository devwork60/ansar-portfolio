"use client";

import { motion } from "motion/react";
import { contactUs, profile } from "@/lib/data";
import { Arrow, LiveClock, Magnetic, Reveal, Rise, ease } from "./ui";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1240px] px-5 pb-6 pt-6 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-paper sm:px-12 sm:py-20">
          <span aria-hidden className="animate-breathe absolute -right-24 -top-24 h-72 w-72 rounded-full border border-paper/15" />
          <span aria-hidden className="animate-breathe absolute -right-10 -top-10 h-44 w-44 rounded-full border border-paper/15 [animation-delay:-3s]" />

          <p className="relative flex items-center gap-3 font-display text-lg tracking-[0.12em] text-paper/70">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-ok" />
              <span className="relative h-2 w-2 rounded-full bg-ok" />
            </span>
            {profile.availability.toUpperCase()}
          </p>
          <h2 className="relative mt-5 font-display text-[clamp(3.4rem,10vw,9rem)] leading-[0.86] tracking-wide">
            <Rise text="LET'S LOOK AT" />
            <br />
            <Rise text="YOUR" delay={0.12} />{" "}
            <Rise text="workflow." delay={0.2} italic={["workflow"]} />
          </h2>
          <p className="relative mt-6 max-w-xl text-[18px] leading-snug text-paper/70">{contactUs.text}</p>

          <ul className="relative mt-10 grid gap-3 md:grid-cols-3">
            {contactUs.actions.map((a, i) => (
              <motion.li
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.1 }}
                className="[&>div]:!block [&>div]:h-full"
              >
                <Magnetic strength={0.12}>
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex h-full w-full items-center justify-between gap-4 rounded-[1.5rem] px-6 py-5 transition-colors duration-300 ${
                      a.primary ? "bg-paper text-ink hover:bg-white" : "border border-paper/25 hover:bg-paper hover:text-ink"
                    }`}
                  >
                    <span>
                      <span className="block font-display text-2xl tracking-wide">{a.title.toUpperCase()}</span>
                      <span className={`text-[14px] ${a.primary ? "text-mut" : "opacity-60"}`}>{a.sub}</span>
                    </span>
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-lg transition-transform duration-500 group-hover:-rotate-45 ${a.primary ? "bg-ink text-paper" : "bg-paper text-ink group-hover:bg-ink group-hover:text-paper"}`}>
                      <Arrow />
                    </span>
                  </a>
                </Magnetic>
              </motion.li>
            ))}
          </ul>

          <dl className="relative mt-14 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-paper/15 pt-8 lg:grid-cols-3">
            {contactUs.facts.map((f) => (
              <div key={f.label}>
                <dt className="font-display text-base tracking-[0.14em] text-paper/50">{f.label.toUpperCase()}</dt>
                <dd className="mt-1 text-[16px]">
                  {f.href ? (
                    <a href={f.href} target="_blank" rel="noreferrer" className="underline decoration-paper/30 underline-offset-4 transition-colors hover:decoration-paper">{f.value} ↗</a>
                  ) : (
                    f.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      <footer className="flex flex-wrap items-center justify-between gap-4 py-8 text-[14px] text-mut">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>
          Rawalpindi · <LiveClock className="text-ink" /> PKT
        </span>
        <span className="flex gap-6">
          <a href={profile.agency.href} target="_blank" rel="noreferrer" className="underline decoration-ink/20 underline-offset-4 hover:text-ink hover:decoration-ink">{profile.agency.name} ↗</a>
          <a href="#top" className="underline decoration-ink/20 underline-offset-4 hover:text-ink hover:decoration-ink">Back to top ↑</a>
        </span>
      </footer>
    </section>
  );
}
