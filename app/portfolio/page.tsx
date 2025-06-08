import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, ShoppingCart, Building2, Briefcase, Truck, Laptop } from "lucide-react";

export default function PortfolioPage() {
    const projects = [
        {
            title: "Enterprise Resource Planning System",
            client: "Global Manufacturing Corp",
            industry: "Manufacturing",
            description: "Developed and implemented a comprehensive ERP solution that streamlined operations across 12 facilities.",
            impact: [
                "40% reduction in operational costs",
                "60% improvement in inventory accuracy",
                "25% increase in productivity"
            ],
            icon: <Building className="w-12 h-12 text-blue-600" />,
            tags: ["ERP", "Cloud", "Integration"]
        },
        {
            title: "E-commerce Platform Transformation",
            client: "Fashion Retail Chain",
            industry: "Retail",
            description: "Built a scalable e-commerce platform with omnichannel capabilities and real-time inventory management.",
            impact: [
                "200% increase in online sales",
                "99.9% platform uptime",
                "50% reduction in cart abandonment"
            ],
            icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
            tags: ["E-commerce", "Mobile", "Analytics"]
        },
        {
            title: "Digital Banking Solution",
            client: "Leading National Bank",
            industry: "Banking",
            description: "Developed a secure digital banking platform with advanced fraud detection and personalized services.",
            impact: [
                "1M+ active mobile users",
                "90% reduction in fraud cases",
                "30% increase in customer satisfaction"
            ],
            icon: <Building2 className="w-12 h-12 text-blue-600" />,
            tags: ["FinTech", "Security", "Mobile"]
        },
        {
            title: "Supply Chain Management System",
            client: "Logistics Company",
            industry: "Transportation",
            description: "Implemented an AI-powered supply chain management system with real-time tracking and optimization.",
            impact: [
                "30% reduction in delivery times",
                "25% cost savings in operations",
                "95% delivery accuracy"
            ],
            icon: <Truck className="w-12 h-12 text-blue-600" />,
            tags: ["AI/ML", "IoT", "Analytics"]
        },
        {
            title: "Professional Services Automation",
            client: "Global Consulting Firm",
            industry: "Professional Services",
            description: "Delivered a comprehensive PSA solution for resource management and project tracking.",
            impact: [
                "35% improvement in resource utilization",
                "45% faster project delivery",
                "20% increase in profitability"
            ],
            icon: <Briefcase className="w-12 h-12 text-blue-600" />,
            tags: ["PSA", "Cloud", "Analytics"]
        },
        {
            title: "Custom CRM Development",
            client: "Tech Startup",
            industry: "Technology",
            description: "Built a custom CRM system with advanced automation and integration capabilities.",
            impact: [
                "50% increase in sales efficiency",
                "40% improvement in customer retention",
                "65% faster lead response time"
            ],
            icon: <Laptop className="w-12 h-12 text-blue-600" />,
            tags: ["CRM", "Automation", "Integration"]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="container mx-auto px-4">

                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Our Success Stories
                        </h1>
                        <p className="text-xl text-white max-w-3xl mx-auto">
                            Discover how we've helped businesses across industries achieve digital transformation and drive growth.
                        </p>
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                                <div className="mb-4">
                                    <img
                                        src={`/portfolio/${project.title.toLowerCase().replace(/ /g, '-')}.svg`}
                                        alt={project.title}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                    {project.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-2">{project.client}</p>
                                <p className="text-blue-600 text-sm mb-4">{project.industry}</p>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                <div className="mb-4">
                                    <h4 className="font-semibold mb-2">Key Impact:</h4>
                                    <ul className="space-y-1">
                                        {project.impact.map((item, idx) => (
                                            <li key={idx} className="flex items-center text-gray-600">
                                                <ArrowRight className="w-4 h-4 text-blue-600 mr-2" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-16">
                        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
                        <p className="text-gray-600 mb-8">Let's discuss how we can help you achieve similar results.</p>
                        <Button variant="premium" size="lg" className="font-semibold">
                            Contact Us Today
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
} 