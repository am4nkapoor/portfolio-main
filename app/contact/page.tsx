"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const offices = [
        {
            country: "United States",
            address: "41 Flatbush Avenue, Brooklyn, NY 11217",
            phone: "+1 271-456-4157",
            email: "us@gemscoder.com"
        },
        {
            country: "India",
            address: "1086-B, Sector 57, Gurgaon, Haryana - 122003",
            phone: "+91 971-8023-370",
            email: "india@gemscoder.com"
        },
        {
            country: "UAE",
            address: "Business Center, Oud Metha Office Building, Dubai",
            phone: "+971 545-796-256",
            email: "uae@gemscoder.com"
        }
    ];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    to: 'gemscode@gmail.com'
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setSubmitStatus({
                type: 'success',
                message: 'Message sent successfully! We will get back to you soon.'
            });
            e.currentTarget.reset();
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

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
                            {submitStatus && (
                                <div className={`p-4 rounded-lg mb-6 ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                    }`}>
                                    {submitStatus.message}
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            name="firstName"
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
                                            name="lastName"
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
                                        name="email"
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
                                        name="phone"
                                        type="tel"
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    ></textarea>
                                </div>
                                <div className="mt-6">
                                    <Button
                                        type="submit"
                                        variant="premium"
                                        size="lg"
                                        className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </div>
                                        ) : (
                                            'Send Message'
                                        )}
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