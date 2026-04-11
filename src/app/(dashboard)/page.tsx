"use client";

import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { toast } from "sonner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0a0a0a]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 md:px-10">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="size-7 lg:hidden"/>
          <div className="flex items-center gap-2">
            <span className="group-data-[collapsible=icon]:hidden font-semibold text-lg tracking-tighter text-foreground">Resonance</span>
          </div>
        </div>
        {/* Content */}
        <section className="flex flex-1 items-center">
          <div className="grid w-full grid-cols-1 gap-12 py-16 md:grid-cols-[1fr_420px]">
            {/* Left */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-semibold tracking-tight leading-tight md:text-6xl">
                  Everything you need.
                  <br />
                  Nothing you don’t.
                </h1>

                <p className="max-w-lg text-lg leading-7 text-black/50">
                  Manage organizations, access, and account settings from a
                  single, focused surface.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  className="h-11 rounded-full bg-black px-6 text-sm font-medium text-white hover:bg-black/90"
                  onClick={() => toast.success("Ready when you are")}
                >
                  Continue
                </Button>

                <Button
                  variant="ghost"
                  className="h-11 rounded-full px-5 text-sm text-black/60 hover:bg-black/5"
                  onClick={() =>
                    toast("Use the switcher on the right to change orgs")
                  }
                >
                  Learn more
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-black/40">
                <span>⌘K quick actions</span>
                <span>•</span>
                <span>Fast switching</span>
              </div>
            </div>

            {/* Right panel */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <p className="text-xs text-black/40">Current</p>
                <p className="mt-2 text-lg font-medium">Active workspace</p>
                <p className="mt-1 text-sm text-black/50">
                  Switch organizations anytime using the top right control.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-black/10 p-5">
                  <p className="text-xs text-black/40">Users</p>
                  <p className="mt-2 text-2xl font-semibold">128</p>
                </div>

                <div className="rounded-2xl border border-black/10 p-5">
                  <p className="text-xs text-black/40">Active</p>
                  <p className="mt-2 text-2xl font-semibold">94</p>
                </div>
              </div>

              <div className="rounded-2xl border border-black/10 p-6">
                <p className="text-xs text-black/40">Tip</p>
                <p className="mt-2 text-sm text-black/60 leading-6">
                  Keep your workspace clean. Invite only relevant members and
                  review access regularly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
