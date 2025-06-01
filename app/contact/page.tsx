import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function ContactPage() {
    const offices = [
        {
            country: "United States",
            address: "41 Flatbush Avenue, Brooklyn, NY 11217",
            phone: "+1 281-456-4155",
            email: "us@company.com"
        },
        {
            country: "India",
            address: "E-138, Sector 63, Noida, Uttar Pradesh - 201301",
            phone: "+91 888-2709-959",
            email: "india@company.com"
        },
        {
            country: "UAE",
            address: "Business Center, Oud Metha Office Building, Dubai",
            phone: "+971 544-794-252",
            email: "uae@company.com"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-20">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Let's discuss how we can help transform your business with our technology solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    ></textarea>
                                </div>
                                <div className="mt-6">
                                    <Button
                                        type="submit"
                                        variant="glass"
                                        size="lg"
                                        className="w-full font-semibold"
                                    >
                                        Send Message
                                    </Button>
                                </div>
                            </form>
                        </Card>
                    </div>

                    {/* Office Locations */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
                        <div className="space-y-6">
                            {offices.map((office, index) => (
                                <Card key={index} className="p-6">
                                    <h3 className="text-xl font-bold mb-4 flex items-center">
                                        <Globe className="w-6 h-6 text-blue-600 mr-2" />
                                        {office.country}
                                    </h3>
                                    <div className="space-y-3">
                                        <p className="flex items-start text-gray-600">
                                            <MapPin className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                                            {office.address}
                                        </p>
                                        <p className="flex items-center text-gray-600">
                                            <Phone className="w-5 h-5 text-blue-600 mr-2" />
                                            {office.phone}
                                        </p>
                                        <p className="flex items-center text-gray-600">
                                            <Mail className="w-5 h-5 text-blue-600 mr-2" />
                                            {office.email}
                                        </p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 