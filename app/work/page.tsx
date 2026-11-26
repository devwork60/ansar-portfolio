import type { Metadata } from "next";
import { WorkIndex } from "@/components/work-index";

export const metadata: Metadata = {
  title: "All projects",
  description: "Every GoHighLevel, CRM and workflow automation project, with a case study for each.",
};

export default function WorkPage() {
  return <WorkIndex />;
}
