import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-backgroung p-6 dark:bg-black">
      <SignUp appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "shadow-lg",
        },
      }} />
    </main>
  );
}