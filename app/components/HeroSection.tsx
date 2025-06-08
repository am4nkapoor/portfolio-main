import Image from 'next/image';
import { useState } from 'react';

const HeroSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            title: "Modern Web Apps",
            description: "Building fast, responsive, and scalable web applications",
            icon: "🚀"
        },
        {
            title: "Custom Solutions",
            description: "Tailored development to meet your unique business needs",
            icon: "⚡"
        },
        {
            title: "Innovation First",
            description: "Leveraging cutting-edge technologies and best practices",
            icon: "💡"
        }
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between relative z-10">
                {/* Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
                    <div className="space-y-2 mb-6">
                        <p className="text-blue-400 font-semibold tracking-wide uppercase animate-fade-in">Welcome to the Future</p>
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
                            Crafting Digital
                            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> Excellence</span>
                        </h1>
                    </div>

                    <p className="text-lg lg:text-xl text-gray-300 mb-8 animate-slide-up">
                        Transforming ideas into powerful digital solutions. We specialize in creating innovative web applications that drive business growth and user engagement.
                    </p>

                    {/* Interactive Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-lg transition-all duration-300 cursor-pointer transform hover:scale-105 ${activeFeature === index
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
                                    }`}
                                onMouseEnter={() => setActiveFeature(index)}
                            >
                                <div className="text-3xl mb-2">{feature.icon}</div>
                                <h3 className="font-semibold mb-1">{feature.title}</h3>
                                <p className="text-sm opacity-80">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
                        <button className="group px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 relative overflow-hidden">
                            <span className="relative z-10">Get Started</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </button>
                        <button className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition-all group">
                            Learn More
                            <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">
                                →
                            </span>
                        </button>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-12 hidden lg:block">
                        <p className="text-gray-400 mb-4">Technologies we work with:</p>
                        <div className="flex flex-wrap gap-3">
                            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind'].map((tech) => (
                                <span
                                    key={tech}
                                    className="text-gray-300 bg-gray-800/50 px-4 py-2 rounded-full text-sm hover:bg-blue-600/20 hover:text-blue-400 transition-colors cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="lg:w-1/2 relative">
                    <div className="w-full h-[600px] relative animate-float">
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 pointer-events-none"></div>
                        <Image
                            src="/hero-image-new.svg"
                            alt="Digital Innovation Illustration"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Animated Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
    );
};

export default HeroSection;

// Add these animations to your globals.css or tailwind.config.js
/*
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}
*/ 