import { Card } from "@/components/ui/card";
import { Users, Target, Award, Rocket, Heart, Shield } from "lucide-react";

export default function AboutPage() {
    const stats = [
        { number: "400+", label: "Expert Employees" },
        { number: "1500+", label: "Satisfied Clients" },
        { number: "3500+", label: "Projects Delivered" },
        { number: "25+", label: "Years Experience" }
    ];

    const values = [
        {
            title: "Innovation",
            description: "Pushing boundaries with cutting-edge solutions",
            icon: <Rocket className="w-12 h-12 text-blue-600" />
        },
        {
            title: "Excellence",
            description: "Delivering exceptional quality in everything we do",
            icon: <Award className="w-12 h-12 text-blue-600" />
        },
        {
            title: "Client Focus",
            description: "Putting our clients' success at the heart of our work",
            icon: <Heart className="w-12 h-12 text-blue-600" />
        },
        {
            title: "Integrity",
            description: "Operating with transparency and ethical principles",
            icon: <Shield className="w-12 h-12 text-blue-600" />
        }
    ];

    const leadership = [
        {
            name: "John Smith",
            role: "Chief Executive Officer",
            image: "/team/ceo.jpg"
        },
        {
            name: "Sarah Johnson",
            role: "Chief Technology Officer",
            image: "/team/cto.jpg"
        },
        {
            name: "Michael Chen",
            role: "Head of Engineering",
            image: "/team/engineering-head.jpg"
        },
        {
            name: "Emily Brown",
            role: "Head of Operations",
            image: "/team/operations-head.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Transforming Businesses Through Technology
                        </h1>
                        <p className="text-xl mb-8">
                            For over 25 years, we've been helping businesses innovate and grow with cutting-edge technology solutions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="flex justify-center mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Leadership Section */}
            <div className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {leadership.map((leader, index) => (
                            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                                <p className="text-gray-600">{leader.role}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-xl">
                            To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 