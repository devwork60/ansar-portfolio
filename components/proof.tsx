"use client";

import { motion } from "motion/react";
import { testimonials } from "@/lib/data";
import { Reveal, Rise, ease } from "./ui";

export function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-none tracking-wide">
          <Rise text="KIND" />{" "}
          <Rise text="WORDS" delay={0.1} italic={["WORDS"]} />
        </h2>
        <Reveal y={10}>
          <p className="max-w-xs text-[14px] leading-snug text-mut">From completed Upwork jobs. Client names are private, so they are shown as Upwork clients.</p>
        </Reveal>
      </div>

      <ul className="mt-12 grid gap-4 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ duration: 0.9, ease, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="flex flex-col rounded-[1.75rem] bg-card p-8"
          >
            <span className="font-display text-7xl leading-[0.6] text-ink/80">“</span>
            <blockquote className="mt-4 text-[19px] leading-snug">{t.quote}</blockquote>
            <div className="mt-8 flex items-center justify-between gap-3 border-t border-line pt-5">
              <div>
                <p className="font-display text-xl tracking-wide">{t.who.toUpperCase()}</p>
                <p className="text-[13px] italic text-mut">{t.job}</p>
              </div>
              <span className="text-[15px] tracking-[3px]" aria-label="5 out of 5 stars">★★★★★</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
