import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Users, Database, Smartphone, Cloud, Shield } from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            title: "Software Development",
            description: "Custom software solutions built with cutting-edge technologies",
            icon: <Code className="w-12 h-12 text-blue-600" />,
            features: [
                "Web Applications",
                "Mobile Apps",
                "Enterprise Software",
                "API Integration"
            ]
        },
        {
            title: "IT Staff Augmentation",
            description: "Expert tech talent for your project needs",
            icon: <Users className="w-12 h-12 text-blue-600" />,
            features: [
                "Developers",
                "Project Managers",
                "UI/UX Designers",
                "QA Engineers"
            ]
        },
        {
            title: "Database Solutions",
            description: "Robust database design and management",
            icon: <Database className="w-12 h-12 text-blue-600" />,
            features: [
                "Database Design",
                "Migration Services",
                "Performance Optimization",
                "Data Security"
            ]
        },
        {
            title: "Mobile Development",
            description: "Native and cross-platform mobile applications",
            icon: <Smartphone className="w-12 h-12 text-blue-600" />,
            features: [
                "iOS Development",
                "Android Development",
                "React Native",
                "Flutter"
            ]
        },
        {
            title: "Cloud Services",
            description: "Comprehensive cloud solutions and management",
            icon: <Cloud className="w-12 h-12 text-blue-600" />,
            features: [
                "AWS",
                "Azure",
                "Google Cloud",
                "Cloud Migration"
            ]
        },
        {
            title: "Cybersecurity",
            description: "Protect your business with advanced security solutions",
            icon: <Shield className="w-12 h-12 text-blue-600" />,
            features: [
                "Security Audits",
                "Penetration Testing",
                "Compliance",
                "Security Training"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Comprehensive IT Services & Solutions
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Transform your business with our cutting-edge technology solutions and expert staffing services.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {services.map((service, index) => (
                            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <ArrowRight className="w-4 h-4 text-blue-600 mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        Get Started
                    </Button>
                </div>
            </div>


        </div>
    );
} 