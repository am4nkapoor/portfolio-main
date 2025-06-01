import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Clock, Target, Award, CheckCircle, Zap } from "lucide-react";

export default function StaffingPage() {
    const benefits = [
        {
            title: "Expert Talent Pool",
            description: "Access to pre-vetted, skilled IT professionals across technologies",
            icon: <Users className="w-12 h-12 text-blue-600" />
        },
        {
            title: "Quick Turnaround",
            description: "Fast placement of qualified candidates to meet your timeline",
            icon: <Clock className="w-12 h-12 text-blue-600" />
        },
        {
            title: "Perfect Match",
            description: "Rigorous screening process to ensure the right fit",
            icon: <Target className="w-12 h-12 text-blue-600" />
        },
        {
            title: "Quality Assured",
            description: "Highly skilled professionals with proven track records",
            icon: <Award className="w-12 h-12 text-blue-600" />
        }
    ];

    const roles = [
        {
            category: "Development",
            positions: [
                "Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
                "Mobile Developer",
                "DevOps Engineer"
            ]
        },
        {
            category: "Design",
            positions: [
                "UI/UX Designer",
                "Product Designer",
                "Visual Designer",
                "Interaction Designer"
            ]
        },
        {
            category: "Management",
            positions: [
                "Project Manager",
                "Product Manager",
                "Scrum Master",
                "Technical Lead"
            ]
        },
        {
            category: "Quality Assurance",
            positions: [
                "QA Engineer",
                "Test Automation Engineer",
                "Performance Tester",
                "Security Tester"
            ]
        }
    ];

    const process = [
        {
            step: 1,
            title: "Requirements Analysis",
            description: "We understand your specific needs and project requirements"
        },
        {
            step: 2,
            title: "Candidate Screening",
            description: "Thorough evaluation of technical skills and experience"
        },
        {
            step: 3,
            title: "Client Interview",
            description: "Direct interaction with pre-screened candidates"
        },
        {
            step: 4,
            title: "Onboarding",
            description: "Smooth integration of selected candidates into your team"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            IT Staff Augmentation Services
                        </h1>
                        <p className="text-xl mb-8">
                            Scale your team with top tech talent. Get the right skills at the right time.
                        </p>
                        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Staffing Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="flex justify-center mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Roles Section */}
            <div className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Available Roles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {roles.map((role, index) => (
                            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-bold mb-4 flex items-center">
                                    <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                                    {role.category}
                                </h3>
                                <ul className="space-y-2">
                                    {role.positions.map((position, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <Zap className="w-4 h-4 text-blue-600 mr-2" />
                                            {position}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Hiring Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, index) => (
                            <div key={index} className="relative">
                                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </Card>
                                {index < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-600"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dream Team?</h2>
                    <p className="text-xl mb-8">Let's discuss how we can help you scale your development team.</p>
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                        Contact Us Now
                    </Button>
                </div>
            </div>
        </div>
    );
} 