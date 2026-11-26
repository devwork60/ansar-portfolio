import type { Project } from "@/lib/projects";

/* Drawn app previews (no screenshots needed). Each kind matches the type of work.
   They are designed for a dark panel; the accent colour comes from the --c variable. */
const bar = "block rounded-full bg-white/80";
const dim = "block rounded-full bg-white/25";
const tile = "rounded-lg border border-white/10 bg-white/[0.05]";
const acc = "bg-[var(--c)]";
const accSoft = "bg-[color-mix(in_srgb,var(--c)_28%,transparent)]";

const Top = () => (
  <div className="flex items-center gap-2">
    <span className={`h-1.5 w-6 rounded-full ${acc}`} />
    <span className={`${dim} ml-auto h-1 w-4`} /><span className={`${dim} h-1 w-4`} /><span className={`${dim} h-1 w-4`} />
  </div>
);

function Dashboard() {
  return (
    <>
      <Top />
      <div className="grid grid-cols-3 gap-2">
        {[70, 55, 62].map((w) => (
          <div key={w} className={`${tile} space-y-2 p-2.5`}><span className={`${dim} h-1 w-1/2`} /><span className={`${bar} h-2.5`} style={{ width: `${w}%` }} /></div>
        ))}
      </div>
      <div className={`${tile} flex h-24 items-end gap-1.5 p-2.5`}>
        {[40, 62, 48, 80, 66, 92, 74].map((h, i) => (<i key={i} className="flex-1 rounded-t bg-gradient-to-t from-[color-mix(in_srgb,var(--c)_25%,transparent)] to-[var(--c)]" style={{ height: `${h}%` }} />))}
      </div>
      {[0, 1, 2, 3].map((n) => (
        <div key={n} className={`${tile} flex items-center gap-2 px-2.5 py-2`}><i className={`h-2 w-2 rounded-full ${acc}`} /><span className={`${dim} h-1`} style={{ width: `${60 - n * 9}%` }} /><span className={`ml-auto h-2 w-7 rounded-full ${accSoft}`} /></div>
      ))}
      <div className={`${tile} flex h-16 items-end gap-1.5 p-2.5`}>
        {[30, 52, 44, 70, 58, 80].map((h, i) => (<i key={i} className={`flex-1 rounded-t ${accSoft}`} style={{ height: `${h}%` }} />))}
      </div>
    </>
  );
}

function Pipeline() {
  return (
    <>
      <Top />
      {[0, 1].map((row) => (
        <div key={row} className="grid grid-cols-4 gap-1.5">
          {[2, 3, 2, 1].map((cards, c) => (
            <div key={c} className="space-y-1.5">
              <span className={`${dim} h-1.5 w-full`} />
              {Array.from({ length: cards }).map((_, k) => (
                <div key={k} className={`${row === 0 && c === 1 && k === 0 ? `border border-[var(--c)] ${accSoft}` : tile} space-y-1.5 rounded-md p-2`}>
                  <span className={`${dim} h-1 w-4/5`} /><span className={`${dim} h-1 w-1/2`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
      <div className={`${tile} space-y-2 p-3`}><span className={`${bar} h-2 w-1/2`} /><span className={`${dim} h-1 w-2/3`} /></div>
    </>
  );
}

function Booking() {
  return (
    <>
      <Top />
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <span className={`${bar} h-2 w-2/3`} />
          {[0, 1, 2].map((n) => (<span key={n} className="block h-4 rounded border border-white/15 bg-white/[0.04]" />))}
          <span className={`block h-4 rounded ${acc}`} />
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 28 }).map((_, i) => (<i key={i} className={`aspect-square rounded-[3px] ${[9, 16, 17, 23].includes(i) ? acc : "bg-white/10"}`} />))}
        </div>
      </div>
      {[60, 48].map((w) => (<div key={w} className={`flex items-center gap-2 rounded-lg p-2.5 ${accSoft}`}><i className={`h-3 w-3 rounded-full ${acc}`} /><span className={`${dim} h-1`} style={{ width: `${w}%` }} /></div>))}
    </>
  );
}

function Board() {
  return (
    <>
      <Top />
      {[[true, true, false], [false, false, false, false]].map((g, gi) => (
        <div key={gi} className="space-y-1.5">
          <span className={`${bar} h-2`} style={{ width: gi ? "34%" : "44%" }} />
          {g.map((done, i) => (
            <div key={i} className={`${tile} flex items-center gap-2 px-2.5 py-2`}>
              <i className={`h-2.5 w-2.5 rounded-full border border-[var(--c)] ${done ? acc : ""}`} />
              <span className={`${dim} h-1`} style={{ width: `${70 - i * 10}%` }} /><span className={`ml-auto h-2 w-7 rounded-full ${accSoft}`} />
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

function Integration() {
  const row = (k: number) => (
    <div key={k} className="flex items-center py-3">
      <i className={`h-9 w-9 rounded-xl border border-[var(--c)] ${accSoft}`} />
      <span className="mx-1.5 h-0.5 flex-1 bg-[repeating-linear-gradient(90deg,var(--c)_0_5px,transparent_5px_9px)]" />
      <i className={`h-9 w-9 rounded-xl border border-[var(--c)] ${accSoft}`} />
      <span className="mx-1.5 h-0.5 flex-1 bg-[repeating-linear-gradient(90deg,var(--c)_0_5px,transparent_5px_9px)]" />
      <i className={`h-9 w-9 rounded-xl border border-[var(--c)] ${accSoft}`} />
    </div>
  );
  return (
    <>
      <Top />
      {row(0)}
      {[0, 1, 2, 3].map((n) => (<div key={n} className={`${tile} flex items-center gap-2 px-2.5 py-2`}><i className={`h-2 w-2 rounded-full ${acc}`} /><span className={`${dim} h-1`} style={{ width: `${66 - n * 8}%` }} /></div>))}
      {row(1)}
    </>
  );
}

const KINDS = { dashboard: Dashboard, pipeline: Pipeline, booking: Booking, board: Board, integration: Integration };

/** A browser frame with a tall page inside. The page scrolls while any `.group` ancestor is hovered. */
export function Mock({ kind, color, className = "" }: { kind: Project["mock"]; color: string; className?: string }) {
  const V = KINDS[kind];
  return (
    <div
      aria-hidden
      style={{ "--c": color } as React.CSSProperties}
      className={`relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#0b0e16] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="absolute inset-x-0 top-0 z-10 flex h-6 items-center gap-1.5 border-b border-white/10 bg-[#0e1220] px-3">
        <i className="h-1.5 w-1.5 rounded-full bg-white/25" /><i className="h-1.5 w-1.5 rounded-full bg-white/25" /><i className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="ml-3 h-2 w-1/3 rounded-full bg-white/10" />
      </div>
      <div className="absolute inset-0 top-6 overflow-hidden">
        <div className="space-y-3 p-3 transition-transform duration-[5000ms] ease-linear group-hover:-translate-y-[55%]">
          <V />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[color-mix(in_srgb,var(--c)_14%,transparent)] to-transparent" />
      </div>
    </div>
  );
}
