import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-content-center justify-items-start gap-6 px-5 sm:px-12">
      <p className="font-display text-xl tracking-[0.12em] text-mut">404 · PAGE NOT FOUND</p>
      <h1 className="max-w-3xl font-display text-[clamp(3.4rem,10vw,8rem)] leading-[0.86] tracking-wide">
        THIS PAGE ISN&rsquo;T <span className="font-serif font-normal italic tracking-normal">in the pipeline.</span>
      </h1>
      <Link href="/" className="rounded-full bg-ink px-7 py-3 font-display text-xl tracking-wide text-paper transition-colors hover:bg-acc">BACK TO THE HOMEPAGE</Link>
    </main>
  );
}
