"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/industries", label: "Industries" },
        { href: "/staffing", label: "Staffing" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" }
    ];

    return (
        <nav className="fixed w-full bg-black/10 backdrop-blur-md z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="text-white font-bold text-xl">
                        <img src="/logo/logo.svg" alt="Gemscoder Logo" className="h-8" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button variant="premium" size="lg" className="font-semibold">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/20 backdrop-blur-md rounded-lg mt-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="px-3 py-2">
                                <Button variant="premium" size="lg" className="w-full font-semibold">
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
} 