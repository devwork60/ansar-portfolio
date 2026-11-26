"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { categories, projects } from "@/lib/projects";
import { Rise, ease } from "./ui";
import { Nav } from "./nav";
import { Contact } from "./contact";
import { ProjectPanel } from "./project-panel";

const PAGE = 12;

export function WorkIndex() {
  const [filter, setFilter] = useState("All");
  const [shown, setShown] = useState(PAGE);
  const list = useMemo(() => projects.filter((p) => filter === "All" || p.category === filter), [filter]);
  const counts = useMemo(
    () => Object.fromEntries(categories.map((c) => [c, c === "All" ? projects.length : projects.filter((p) => p.category === c).length])),
    [],
  );
  const visible = list.slice(0, shown);

  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-[1240px] px-5 pb-20 pt-32 sm:px-8 md:pt-40">
        <Link href="/" className="font-display text-lg tracking-[0.12em] text-mut transition-colors hover:text-ink">← HOME</Link>
        <h1 className="mt-6 font-display text-[clamp(3.6rem,11vw,9rem)] leading-[0.86] tracking-wide">
          <Rise text="ALL" immediate />{" "}
          <Rise text="projects" immediate delay={0.1} italic={["projects"]} />
        </h1>
        <p className="mt-5 max-w-md text-[16px] leading-snug text-mut">
          {projects.length} projects. Filter by category, then open one to see how it was built.
        </p>

        <div role="group" aria-label="Filter by category" className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                type="button"
                aria-pressed={active}
                onClick={() => { setFilter(c); setShown(PAGE); }}
                className={`relative rounded-full border px-5 py-2 font-display text-lg tracking-wide transition-colors ${active ? "border-ink text-paper" : "border-ink/25 text-ink hover:border-ink"}`}
              >
                {active && <motion.span layoutId="chip" className="absolute inset-0 -z-10 rounded-full bg-ink" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
                {c.toUpperCase()} <span className={active ? "opacity-60" : "text-mut"}>{counts[c]}</span>
              </button>
            );
          })}
        </div>

        <motion.ul layout className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.li
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease }}
              >
                <ProjectPanel p={p} n={projects.indexOf(p) + 1} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {list.length > visible.length && (
          <div className="mt-14 flex justify-center">
            <button type="button" onClick={() => setShown((s) => s + PAGE)} className="rounded-full border border-ink/25 px-8 py-3 font-display text-xl tracking-wide transition-colors hover:bg-ink hover:text-paper">
              SHOW MORE <span className="text-mut">({list.length - visible.length} LEFT)</span>
            </button>
          </div>
        )}
      </section>
      <Contact />
    </main>
  );
}
