import { Features } from "../components/landing/Features";
import { FinalCta } from "../components/landing/FinalCta";
import { Hero } from "../components/landing/Hero";
import { HowItWorks } from "../components/landing/HowItWorks";
import { Navbar } from "../components/landing/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <FinalCta />
    </main>
  );
}