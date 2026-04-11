import { cookies } from "next/headers";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/features/dashboard/components/dashboard-sidebar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies();
    const sidebarState = cookieStore.get("sidebar_state")?.value; // we ensure that we are keeping a global sidebar state.
    const isSidebarOpen = sidebarState === "true";

    return (
        <SidebarProvider defaultOpen={isSidebarOpen} className="h-svh">
            <DashboardSidebar />
            <SidebarInset className="min-h-0 min-w-0">
                <main className="flex flex-col flex-1 min-h-0">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}