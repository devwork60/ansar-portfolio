import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { CaseStudy } from "@/components/case-study";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.blurb } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  return (
    <CaseStudy
      project={projects[i]}
      index={i}
      total={projects.length}
      prev={projects[(i - 1 + projects.length) % projects.length]}
      next={projects[(i + 1) % projects.length]}
    />
  );
}
