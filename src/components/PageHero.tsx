import type { ReactNode } from "react";
import { Reveal } from "@/src/components/motion/Reveal";

export function PageHero({ title, copy, aside }: { title: string; copy: string; aside?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal><h1 className="page-title display">{title}</h1></Reveal>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
          <Reveal delay={.08}><p className="body-large">{copy}</p></Reveal>
          {aside && <Reveal delay={.14}>{aside}</Reveal>}
        </div>
      </div>
    </section>
  );
}
