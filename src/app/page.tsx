"use client";

import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { toast } from "sonner";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f5f0] font-sans text-[#3b3b3b]">
      {/* soft organic background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(180,140,100,0.15),_transparent_40%),radial-gradient(circle_at_bottom,_rgba(120,150,120,0.12),_transparent_40%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
        {/* NAV */}
        <nav className="flex items-center justify-between rounded-sm border border-[#e8e1d9] bg-white/60 px-5 py-3 backdrop-blur-md shadow-sm">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-[#a67c52]">
              Resonance
            </p>
            <p className="text-xs text-[#7a756e]">
              Calm workspace for teams
            </p>
          </div>

          <div className="flex items-center gap-3">
            <OrganizationSwitcher
              appearance={{
                elements: {
                  organizationSwitcherTrigger:
                    "h-10 rounded-full border border-[#e5ded6] bg-white px-4 text-sm text-[#4b4b4b] hover:bg-[#f3efe9] transition",
                },
              }}
            />
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox:
                    "h-10 w-10 rounded-full ring-2 ring-[#e5ded6]",
                },
              }}
            />
          </div>
        </nav>

        {/* HERO */}
        <section className="flex flex-1 items-center py-12">
          <div className="grid w-full gap-10 rounded-sm border border-[#e8e1d9] bg-white/70 p-10 shadow-lg backdrop-blur-lg md:grid-cols-[1.2fr_0.8fr]">
            {/* LEFT */}
            <div className="max-w-2xl space-y-6">
              <span className="inline-flex items-center rounded-full border border-[#e5ded6] bg-[#f3efe9] px-4 py-1 text-xs font-medium text-[#7a756e]">
                Resonance dashboard
              </span>

              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                  Stay grounded. Manage your workspace with clarity.
                </h1>
                <p className="max-w-xl text-base leading-7 text-[#6f6a63] sm:text-lg">
                  A softer, distraction-free environment to switch teams,
                  manage access, and keep everything in harmony.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  className="h-11 rounded-full bg-[#a67c52] px-6 text-sm font-semibold text-white hover:bg-[#8c653f]"
                  onClick={() => toast.success("Workspace ready ✨")}
                >
                  Explore workspace
                </Button>
                <Button
                  variant="outline"
                  className="h-11 rounded-full border-[#d6cdc3] bg-transparent px-6 text-sm text-[#4b4b4b] hover:bg-[#f3efe9]"
                  onClick={() =>
                    toast("Switch organizations anytime from the top right.")
                  }
                >
                  Quick tip
                </Button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              <div className="rounded-3xl border border-[#e8e1d9] bg-[#faf7f2] p-6">
                <p className="text-xs text-[#9b948c]">Current focus</p>
                <p className="mt-3 text-xl font-semibold">
                  Organization hub
                </p>
                <p className="mt-2 text-sm leading-6 text-[#6f6a63]">
                  Everything you need, gently organized in one place without
                  overwhelm.
                </p>
              </div>

              <div className="rounded-3xl border border-[#e8e1d9] bg-[#f1ebe4] p-6">
                <p className="text-xs text-[#9b948c]">Design philosophy</p>
                <p className="mt-3 text-xl font-semibold">Boho minimal</p>
                <p className="mt-2 text-sm leading-6 text-[#6f6a63]">
                  Earthy tones, soft contrast, and breathing space create a calm
                  and intentional experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
