import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="glass p-8 text-center max-w-md">
        <h1 className="text-3xl font-bold text-sky-200 mb-2">404</h1>
        <p className="text-slate-200 mb-4">Sorry, the page you’re looking for isn’t here.</p>
        <Link href="/" className="button">Back to home</Link>
      </div>
    </div>
  );
}
