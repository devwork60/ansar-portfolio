"use client";

import { projects } from "@/lib/projects";
import { Magnetic, Pill, Reveal, Rise } from "./ui";
import { ProjectPanel } from "./project-panel";

const HOME_LIMIT = 4;

export function Projects() {
  const shown = projects.slice(0, HOME_LIMIT);
  return (
    <section id="work" className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-none tracking-wide">
          <Rise text="PORTFOLIO" />
        </h2>
        <Reveal y={10}>
          <p className="max-w-xs text-[14px] leading-snug text-mut">
            Recent GoHighLevel, CRM and automation projects. Open one to see how it was built.
          </p>
        </Reveal>
      </div>

      <div className="mt-10 space-y-14">
        {shown.map((p, i) => (
          <ProjectPanel key={p.slug} p={p} n={i + 1} big />
        ))}
      </div>

      <Reveal className="mt-16 flex flex-col items-center gap-3 text-center">
        <Magnetic>
          <Pill href="/work">VIEW ALL PROJECTS</Pill>
        </Magnetic>
        <p className="text-[14px] italic text-mut">{projects.length} projects in total</p>
      </Reveal>
    </section>
  );
}
