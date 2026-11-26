"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { profile, stats } from "@/lib/data";
import { Counter, Magnetic, Pill, Reveal, Rise, ease } from "./ui";

const ICONS = {
  mail: (<><rect x="3" y="6" width="18" height="12" rx="2" /><path d="m3 7 9 7 9-7" /></>),
  calendar: (<><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M9 3v4M15 3v4" /></>),
  check: (<><circle cx="12" cy="12" r="8.5" /><path d="m8.5 12.3 2.4 2.4 4.6-5" /></>),
  chat: <path d="M5 6h14v10h-7l-4 3.5V16H5z" />,
};

/** Shown until a real photo is set in lib/data.ts: slow orbiting icons around the initials. */
function Placeholder() {
  const chip = "absolute grid h-12 w-12 place-items-center rounded-full bg-paper text-ink shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]";
  const spots: [keyof typeof ICONS, string][] = [
    ["mail", "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"],
    ["calendar", "right-0 top-1/2 translate-x-1/2 -translate-y-1/2"],
    ["check", "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"],
    ["chat", "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"],
  ];
  return (
    <div className="relative grid h-full w-full place-items-center overflow-hidden bg-gradient-to-b from-[#c3c7be] via-[#b6bab0] to-[#a4a99d]">
      <div className="animate-breathe absolute h-[85%] w-[85%] rounded-full border border-ink/10" />
      <div className="animate-breathe absolute h-[62%] w-[62%] rounded-full border border-ink/15 [animation-delay:-2s]" />
      <div className="animate-spin-slow absolute aspect-square w-[62%]">
        {spots.map(([k, pos]) => (
          <span key={k} className={`${chip} ${pos}`}>
            <span className="animate-spin-slow-rev grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                {ICONS[k]}
              </svg>
            </span>
          </span>
        ))}
      </div>
      <span className="absolute bottom-[9%] left-1/2 -translate-x-1/2 font-display text-[min(24vw,6.5rem)] leading-none tracking-wide text-ink">{profile.initials}</span>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const archY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section ref={ref} id="top" className="relative mx-auto max-w-[1240px] px-5 pb-6 pt-28 sm:px-8 lg:pt-32">
      <div className="relative flex flex-col xl:block xl:h-[640px]">
        {/* arch portrait */}
        <motion.div
          style={{ y: archY }}
          className="relative order-2 mx-auto mt-10 h-[440px] w-[min(86vw,360px)] xl:absolute xl:left-[50%] xl:top-0 xl:mt-0 xl:h-[600px] xl:w-[30%]"
        >
          <motion.div
            initial={{ clipPath: "inset(45% 0% 0% 0%)", opacity: 0 }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
            transition={{ duration: 1.5, ease, delay: 0.25 }}
            className="h-full w-full overflow-hidden rounded-t-[999px] rounded-b-[2.5rem]"
          >
            {profile.photo ? (
              <div className="relative h-full w-full bg-gradient-to-b from-[#c3c7be] via-[#b6bab0] to-[#a4a99d]">
                {/* transparent cut-out: stands on the bottom edge of the arch, a little wider than the frame */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.photo}
                  alt={profile.name}
                  draggable={false}
                  className="absolute bottom-0 left-1/2 w-[125%] max-w-none -translate-x-1/2 select-none xl:h-[86%] xl:w-auto"
                />
              </div>
            ) : (
              <Placeholder />
            )}
          </motion.div>
        </motion.div>

        {/* left: name + intro */}
        <motion.div style={{ y: textY }} className="relative z-10 order-1 xl:absolute xl:left-0 xl:top-6 xl:w-[43%]">
          <Reveal y={14} delay={0.1}>
            <p className="text-2xl italic">Hey, I&rsquo;m {profile.short},</p>
          </Reveal>
          <h1 className="mt-3 font-display text-[clamp(3.8rem,8.4vw,6.8rem)] leading-[0.86] tracking-[0.005em] xl:text-[clamp(3.8rem,4.6vw,4.1rem)]">
            <Rise text="A CRM" immediate delay={0.2} />
            <br />
            <Rise text="& Automation" immediate delay={0.32} italic={["Automation"]} />
            <br />
            <Rise text="EXPERT" immediate delay={0.44} />
          </h1>
          <Reveal y={18} delay={0.75}>
            <p className="mt-6 max-w-[27rem] text-[17px] leading-snug text-ink/80">{profile.intro}</p>
          </Reveal>
          <Reveal y={18} delay={0.9} className="mt-7">
            <Magnetic>
              <Pill href={profile.hire} external>{profile.consult.label.toUpperCase()}</Pill>
            </Magnetic>
          </Reveal>
        </motion.div>

        {/* right: stats */}
        <ul className="relative z-10 order-3 mt-10 grid grid-cols-2 gap-y-6 xl:absolute xl:right-0 xl:top-24 xl:mt-0 xl:block xl:space-y-9 xl:text-right">
          {stats.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.8 + i * 0.1 }}
            >
              <p className="font-display text-[2.6rem] leading-none tracking-wide">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-[13px] italic text-mut">{s.label}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
