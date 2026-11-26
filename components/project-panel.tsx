"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import type { Project } from "@/lib/projects";
import { Arrow, ease } from "./ui";
import { Mock } from "./mock";

/** A dark panel holding the project's drawn preview, with a caption row below, as in the reference's portfolio. */
export function ProjectPanel({ p, n, big = false }: { p: Project; n: number; big?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const inner = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const glow = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const coverY = useTransform(scrollYProgress, [0, 1], ["-1.5%", "1.5%"]);

  return (
    <Link href={`/work/${p.slug}`} className="group block">
      <motion.div
        ref={ref}
        initial={{ clipPath: "inset(10% 6% 10% 6% round 36px)", opacity: 0.4 }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0% round 28px)", opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -12% 0px" }}
        transition={{ duration: 1.2, ease }}
        className={`relative overflow-hidden ${p.image ? "" : "bg-[#0d1017]"} ${big ? (p.image ? "" : "aspect-[16/9]") : "aspect-[4/3]"}`}
        style={{
          "--c": p.color,
          ...(p.image ? { background: p.imageBg ?? "#eef2f6" } : {}),
          ...(big && p.image ? { aspectRatio: p.imageRatio ?? "16 / 10" } : {}),
        } as React.CSSProperties}
      >
        {p.image ? (
          <>
            <motion.div style={{ y: coverY }} className="absolute inset-0">
              <Image
                src={p.image}
                alt={`${p.title}: cover`}
                fill
                sizes="(max-width: 768px) 100vw, 1240px"
                className="object-contain transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]"
              />
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              aria-hidden
              style={{ x: glow }}
              className="absolute left-1/2 top-1/2 h-[90%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--c)_32%,transparent),transparent_68%)] blur-2xl transition-opacity duration-700 group-hover:opacity-100"
            />
            <motion.div style={{ y: inner }} className="absolute inset-0 grid place-items-center">
              <div className={`transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] ${big ? "w-[58%] max-w-[640px]" : "w-[72%]"}`}>
                <Mock kind={p.mock} color={p.color} />
              </div>
            </motion.div>
          </>
        )}
        <span className={`absolute left-5 top-5 rounded-full px-3.5 py-1 font-display text-lg tracking-wide ${p.image ? "bg-ink text-paper" : "bg-paper/90 text-ink"}`}>{String(n).padStart(2, "0")}</span>
        <span className={`absolute bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full text-xl transition-all duration-500 group-hover:-rotate-45 ${p.image ? "bg-ink text-paper" : "bg-paper text-ink group-hover:bg-white"}`}>
          <Arrow />
        </span>
      </motion.div>

      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="font-display text-[1.9rem] leading-none tracking-wide transition-colors duration-300 group-hover:text-acc">{p.title.toUpperCase()}</h3>
        <p className={`hidden max-w-sm text-[14px] leading-snug text-mut ${big ? "md:block" : ""}`}>{p.blurb}</p>
        <span className="flex items-center gap-3 text-[14px] text-mut">
          {p.year}
          <span className="rounded-full bg-ink px-3 py-1 font-display text-base tracking-wide text-paper">{p.category.toUpperCase()}</span>
        </span>
      </div>
    </Link>
  );
}
