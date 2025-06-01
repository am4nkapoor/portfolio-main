import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-20 relative overflow-hidden">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10"></div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
            Transform Your Business With Digital Innovation
          </h1>
          <p className="text-xl text-gray-300">
            We deliver cutting-edge technology solutions to help businesses thrive in the digital age. From custom software development to IT consulting, we&apos;re your trusted technology partner.
          </p>
          <div className="flex gap-4">
            <Button variant="premium" size="lg" className="font-semibold">
              Get Started
            </Button>
            <Button variant="glass" size="lg" className="font-semibold">
              Our Services
            </Button>
          </div>
          <div className="flex items-center gap-8 pt-8">
            <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
              <h4 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">400+</h4>
              <p className="text-gray-400">Expert Employees</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
              <h4 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">1500+</h4>
              <p className="text-gray-400">Satisfied Clients</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4">
              <h4 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">3500+</h4>
              <p className="text-gray-400">Projects Delivered</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative w-full h-[600px]">
            <Image
              src="/hero-image.svg"
              alt="Digital Innovation"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 