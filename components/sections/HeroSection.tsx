import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-12 lg:py-20 relative overflow-hidden">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10"></div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
            Transform Your Business With Digital Innovation
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
            We deliver cutting-edge technology solutions to help businesses thrive in the digital age. From custom software development to IT consulting, we&apos;re your trusted technology partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="premium" size="lg" className="font-semibold w-full sm:w-auto">
              Get Started
            </Button>
            <Button variant="glass" size="lg" className="font-semibold w-full sm:w-auto">
              Our Services
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
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
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative w-full aspect-square max-w-[600px] mx-auto lg:max-w-none lg:h-[600px]">
            <Image
              src="/hero-image-new.svg"
              alt="Digital Innovation"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 800px"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 