"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/lib/data";
import type { Project } from "@/lib/projects";
import { Magnetic, Pill, Reveal, Rise, ease } from "./ui";
import { Mock } from "./mock";
import { Nav } from "./nav";

/** The workflow as a row of nodes that light up in turn while a dot travels the line. Click a step to jump. */
function Flow({ steps }: { steps: string[] }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % steps.length), 1800);
    return () => clearInterval(id);
  }, [reduce, paused, steps.length]);

  const pct = steps.length > 1 ? (active / (steps.length - 1)) * 100 : 0;
  return (
    <div className="rounded-[1.75rem] bg-card p-6 sm:p-10">
      <div className="flex items-center justify-between font-display text-lg tracking-[0.12em] text-mut">
        <span>WORKFLOW · SAMPLE</span>
        <button type="button" aria-pressed={paused} onClick={() => setPaused((p) => !p)} className="rounded-full border border-ink/25 px-4 py-1 transition-colors hover:bg-ink hover:text-paper">
          {paused ? "▶ PLAY" : "❚❚ PAUSE"}
        </button>
      </div>

      <div className="relative mt-10">
        <div aria-hidden className="absolute top-6 hidden h-px bg-ink/15 sm:block" style={{ left: `${50 / steps.length}%`, right: `${50 / steps.length}%` }}>
          <motion.div className="h-full bg-ink" animate={{ width: `${pct}%` }} transition={{ duration: 0.8, ease }} />
          <motion.i className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-acc" animate={{ left: `${pct}%` }} transition={{ duration: 0.8, ease }} />
        </div>

        <ol className="relative grid gap-3 sm:flex sm:gap-0">
          {steps.map((s, i) => {
            const state = i === active ? "on" : i < active ? "done" : "todo";
            return (
              <li key={s} className="flex items-center gap-4 sm:flex-1 sm:flex-col sm:gap-4 sm:text-center">
                <button
                  type="button"
                  onClick={() => { setActive(i); setPaused(true); }}
                  aria-label={`Step ${i + 1}: ${s}`}
                  className={`relative grid h-12 w-12 shrink-0 place-items-center rounded-full border font-display text-xl tracking-wide transition-all duration-500 ${
                    state === "on" ? "scale-110 border-ink bg-ink text-paper"
                    : state === "done" ? "border-ink bg-card text-ink" : "border-ink/25 bg-card text-mut"}`}
                >
                  {state === "done" ? "✓" : i + 1}
                  {state === "on" && <span className="animate-ping-slow absolute inset-0 rounded-full border border-ink" />}
                </button>
                <span className={`text-[15px] leading-snug transition-colors duration-500 sm:px-2 ${state === "todo" ? "text-mut/60" : "text-ink"}`}>{s}</span>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mt-10 rounded-xl bg-paper/70 p-4 font-display text-xl tracking-wide">
        <span className="text-acc">›</span>{" "}
        <motion.span key={active} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          {steps[active].toUpperCase()}… <em className="font-serif text-base font-normal not-italic text-ok">ok</em>
        </motion.span>
      </div>
    </div>
  );
}

export function CaseStudy({ project: p, index, total, prev, next }: { project: Project; index: number; total: number; prev: Project; next: Project }) {
  return (
    <main style={{ "--c": p.color } as React.CSSProperties}>
      <Nav />
      <article className="mx-auto max-w-[1240px] px-5 pb-20 pt-32 sm:px-8 md:pt-40">
        <Link href="/work" className="font-display text-lg tracking-[0.12em] text-mut transition-colors hover:text-ink">← ALL PROJECTS</Link>

        <header className="mt-8">
          <p className="font-display text-xl tracking-[0.12em] text-mut">
            {[p.category.toUpperCase(), `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`, p.year].filter(Boolean).join(" · ")}
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-[clamp(3.4rem,9vw,8rem)] leading-[0.88] tracking-wide">
            <Rise text={p.title.toUpperCase()} immediate />
          </h1>
          <Reveal delay={0.5}><p className="mt-6 max-w-2xl text-[20px] leading-snug text-ink/80">{p.blurb}</p></Reveal>
          {p.role && <Reveal delay={0.58}><p className="mt-3 text-[15px] italic text-mut">My role: {p.role}</p></Reveal>}
          <Reveal delay={0.65} className="mt-6 flex flex-wrap gap-2">
            {p.tools.map((t) => (<span key={t} className="rounded-full border border-ink/25 px-4 py-1.5 font-display text-lg tracking-wide">{t.toUpperCase()}</span>))}
          </Reveal>
        </header>

        <Reveal className="mt-12">
          {p.image ? (
            <div className="relative overflow-hidden rounded-[1.75rem]" style={{ background: p.imageBg ?? "#eef2f6", aspectRatio: p.imageRatio ?? "16 / 10" }}>
              <Image src={p.image} alt={`${p.title}: cover`} fill priority sizes="(max-width: 1240px) 100vw, 1240px" className="object-contain" />
            </div>
          ) : (
            <div className="group relative grid place-items-center overflow-hidden rounded-[1.75rem] bg-[#0d1017] px-6 py-12 sm:py-16">
              <div aria-hidden className="absolute left-1/2 top-1/2 h-[90%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--c)_30%,transparent),transparent_68%)] blur-2xl" />
              <div className="relative w-full max-w-[760px]"><Mock kind={p.mock} color={p.color} /></div>
              <p className="relative mt-6 text-[13px] italic text-white/50">Hover to scroll the preview · illustrative layout, sample data</p>
            </div>
          )}
        </Reveal>

        {p.description && (
          <Reveal className="mt-10">
            <div className="grid gap-4 lg:grid-cols-12">
              <h2 className="font-display text-xl tracking-[0.12em] text-mut lg:col-span-3">ABOUT THE PROJECT</h2>
              <div className="space-y-4 text-[clamp(1.15rem,1.7vw,1.4rem)] leading-snug lg:col-span-9">
                {p.description.split("\n\n").map((para) => (<p key={para}>{para}</p>))}
                {p.note && <p className="!mt-5 text-[15px] italic text-mut">{p.note}</p>}
              </div>
            </div>
          </Reveal>
        )}

        {p.gallery && (
          <section aria-label="The build, slide by slide" className="mt-16">
            <Reveal>
              <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.4rem)] leading-none tracking-wide">
                THE BUILD, <span className="font-serif text-[1.02em] font-normal italic tracking-normal">slide by slide</span>
              </h2>
            </Reveal>
            <ul className="mt-8 grid gap-x-5 gap-y-10 md:grid-cols-2">
              {p.gallery.map((g, i) => (
                <Reveal key={g.src} delay={(i % 2) * 0.08}>
                  <li className="list-none">
                    <a href={g.src} target="_blank" rel="noreferrer" className="group block" aria-label={`${g.label}: open full size`}>
                      <div className="relative aspect-video overflow-hidden rounded-[1.25rem] bg-card ring-1 ring-ink/10 transition-transform duration-500 group-hover:-translate-y-1.5">
                        <Image src={g.src} alt={g.label} fill sizes="(max-width: 768px) 100vw, 600px" className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]" />
                      </div>
                      <p className="mt-3 flex items-baseline justify-between gap-4">
                        <span className="font-display text-2xl tracking-wide">{String(i + 1).padStart(2, "0")} · {g.label.toUpperCase()}</span>
                        <span className="text-[13px] italic text-mut opacity-0 transition-opacity group-hover:opacity-100">open full size ↗</span>
                      </p>
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>
          </section>
        )}

        <Reveal className="mt-4"><Flow steps={p.flow} /></Reveal>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Reveal><div className="h-full rounded-[1.75rem] bg-card p-8"><h2 className="font-display text-xl tracking-[0.12em] text-mut">THE CHALLENGE</h2><p className="mt-4 text-[19px] leading-snug">{p.challenge}</p></div></Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-[1.75rem] bg-card p-8">
              <h2 className="font-display text-xl tracking-[0.12em] text-mut">WHAT I BUILT</h2>
              <ul className="mt-4 space-y-3 text-[16px] leading-snug">{p.built.map((b) => (<li key={b} className="flex gap-3"><span aria-hidden>—</span>{b}</li>))}</ul>
            </div>
          </Reveal>
          <Reveal delay={0.16}><div className="h-full rounded-[1.75rem] bg-ink p-8 text-paper"><h2 className="font-display text-xl tracking-[0.12em] text-paper/50">THE RESULT</h2><p className="mt-4 text-[19px] leading-snug">{p.result}</p></div></Reveal>
        </div>

        <nav aria-label="More projects" className="mt-14 grid gap-4 sm:grid-cols-2">
          {[{ l: "← PREVIOUS", pr: prev }, { l: "NEXT →", pr: next }].map(({ l, pr }, i) => (
            <Link key={l} href={`/work/${pr.slug}`} className={`group rounded-[1.75rem] border border-ink/20 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-ink hover:text-paper ${i ? "sm:text-right" : ""}`}>
              <small className="font-display text-lg tracking-[0.12em] text-mut group-hover:text-paper/60">{l}</small>
              <strong className="mt-1 block font-display text-3xl font-normal leading-none tracking-wide">{pr.title.toUpperCase()}</strong>
            </Link>
          ))}
        </nav>

        <Reveal className="mt-20 flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-3xl font-display text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.92] tracking-wide">
            NEED A SYSTEM <span className="font-serif text-[1.02em] font-normal italic tracking-normal">like this?</span>
          </h2>
          <Magnetic><Pill href={profile.hire} external>HIRE ME ON UPWORK</Pill></Magnetic>
        </Reveal>
      </article>
    </main>
  );
}
