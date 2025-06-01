import { Card } from "@/components/ui/card";
import { Factory, Building2, Landmark, Car, Store, Truck, TestTube, Briefcase, GraduationCap } from "lucide-react";

export default function IndustriesPage() {
    const industries = [
        {
            title: "Manufacturing",
            description: "Digital transformation solutions for modern manufacturing",
            icon: <Factory className="w-12 h-12 text-blue-600" />,
            solutions: [
                "Production Management",
                "Supply Chain Optimization",
                "Quality Control",
                "IoT Integration"
            ]
        },
        {
            title: "Construction",
            description: "Technology solutions for construction and infrastructure",
            icon: <Building2 className="w-12 h-12 text-blue-600" />,
            solutions: [
                "Project Management",
                "Resource Planning",
                "Safety Compliance",
                "BIM Integration"
            ]
        },
        {
            title: "BFSI",
            description: "Digital solutions for banking and financial services",
            icon: <Landmark className="w-12 h-12 text-blue-600" />,
            solutions: [
                "Digital Banking",
                "Risk Management",
                "Regulatory Compliance",
                "Fraud Detection"
            ]
        },
        {
            title: "Automotive",
            description: "Innovative solutions for the automotive industry",
            icon: <Car className="w-12 h-12 text-blue-600" />,
            solutions: [
                "Connected Vehicles",
                "Supply Chain Management",
                "Quality Assurance",
                "Dealer Management"
            ]
        },
        {
            title: "Retail",
            description: "Digital transformation for retail businesses",
            icon: <Store className="w-12 h-12 text-blue-600" />,
            solutions: [
                "E-commerce Solutions",
                "Inventory Management",
                "POS Systems",
                "Customer Analytics"
            ]
        },
        {
            title: "Logistics",
            description: "Technology solutions for logistics and transportation",
            icon: <Truck className="w-12 h-12 text-blue-600" />,
            solutions: [
                "Fleet Management",
                "Route Optimization",
                "Warehouse Management",
                "Real-time Tracking"
            ]
        },
        {
            title: "Pharmaceutical",
            description: "Digital solutions for the pharmaceutical industry",
            icon: <TestTube className="w-12 h-12 text-blue-600" />,
            solutions: [
                "Clinical Trials Management",
                "Quality Control",
                "Regulatory Compliance",
                "Supply Chain Tracking"
            ]
        },
        {
            title: "Professional Services",
            description: "Technology solutions for service-based businesses",
            icon: <Briefcase className="w-12 h-12 text-blue-600" />,
            solutions: [
                "Project Management",
                "Resource Allocation",
                "Client Management",
                "Billing & Invoicing"
            ]
        },
        {
            title: "Education",
            description: "Digital transformation for educational institutions",
            icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
            solutions: [
                "Learning Management",
                "Student Information",
                "Virtual Classrooms",
                "Analytics & Reporting"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-20">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Industries We Serve
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We deliver tailored technology solutions across diverse industries, helping businesses innovate and grow.
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                            <div className="mb-4">{industry.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                            <p className="text-gray-600 mb-4">{industry.description}</p>
                            <ul className="space-y-2">
                                {industry.solutions.map((solution, idx) => (
                                    <li key={idx} className="text-gray-700">
                                        • {solution}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
} 