"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-16 text-[#0a0a0a]">
      <div className="w-full max-w-xl rounded-3xl border border-black/10 bg-white p-10 text-center shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-black/40">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Features are coming soon
        </h1>
        <p className="mt-4 text-base leading-7 text-black/55">
          The page you tried to open is not available yet. We are still building
          this part of Resonance.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild className="rounded-full px-6">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
