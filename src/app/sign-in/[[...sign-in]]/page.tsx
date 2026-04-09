import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-backgroung p-6 dark:bg-black">
      <SignIn appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "shadow-lg",
        },
      }} />
    </main>
  );
}