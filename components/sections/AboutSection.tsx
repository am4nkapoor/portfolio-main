import { Check } from "lucide-react";
import Image from "next/image";

const highlights = [
  "25+ years of industry experience",
  "400+ tech experts worldwide",
  "1500+ satisfied clients globally",
  "3500+ successful projects delivered",
  "CMMI and ISO certified excellence",
  "24/7 dedicated support team",
];

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative w-full h-[500px]">
              <Image
                src="/about-image.svg"
                alt="About Us"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold mb-6">
              Empowering Business Ecosystems with Digital Transformation
            </h2>
            <p className="text-gray-600 text-lg">
              For over 25 years, we have been transforming businesses through technology,
              not just as a service provider, but as a trusted innovation partner. Our
              commitment to excellence and customer-centric approach has helped us deliver
              exceptional results for businesses worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 