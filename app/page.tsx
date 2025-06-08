"use client";

import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import YouTubeSection from "./components/YouTubeSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TechnologiesSection />
      <StatsSection />
      <YouTubeSection />
      <TestimonialsSection />
    </main>
  );
}
