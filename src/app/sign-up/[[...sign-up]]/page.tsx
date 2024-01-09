import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex justify-center mt-10">
      <SignUp />
    </main>
  );
}
