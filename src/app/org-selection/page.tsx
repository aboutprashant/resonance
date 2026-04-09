import { OrganizationList } from "@clerk/nextjs";

export default function OrgSelectionPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-backgroung p-6 dark:bg-black">
            <OrganizationList
                hidePersonal
                afterCreateOrganizationUrl="/"
                afterSelectOrganizationUrl="/"
                appearance={{
                    elements: {
                        rootBox: "mx-auto",
                        card: "shadow-lg",
                    },
                }}
            />
        </main>
    );
}