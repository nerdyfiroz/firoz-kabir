import Link from "next/link";

export default function NotFound() {
  return (
    <div id="main" className="min-h-[75vh] flex items-center justify-center px-4 pt-24">
      <div className="glass p-8 sm:p-10 text-center max-w-md space-y-4">
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-sky-300">
          Error 404
        </p>
        <h1 className="font-display text-4xl font-bold text-white">Page Not Found</h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Sorry, the page you are looking for does not exist or may have moved.
        </p>
        <div className="pt-2">
          <Link href="/" className="button">
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
