import Hero from "@/components/Hero";
import Newest from "@/components/Newest";
import Services from "@/components/Services";
import PublicLayout from "@/app/layouts/Public-layout";
import GetStarted from "@/components/GetStarted";
import { auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();

  return (
    <PublicLayout>
      <Hero />
      <Services />
      <Newest />
      {!userId && <GetStarted />}
    </PublicLayout>
  );
}
