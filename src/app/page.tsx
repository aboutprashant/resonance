"use client";

import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, SignInButton, UserButton } from "@clerk/nextjs";
import { toast } from "sonner";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-blue-50 font-sans dark:bg-black">
      <h1 className="text-2xl font-bold">Welcome to Resonance</h1>
      <div className="flex items-center gap-2">
        <OrganizationSwitcher />
        <UserButton />
      </div>
    </div>
  );
}
