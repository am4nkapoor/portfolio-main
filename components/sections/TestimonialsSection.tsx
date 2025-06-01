import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "John Smith",
    position: "CTO",
    company: "TechCorp Inc.",
    image: "/testimonials/person1.svg",
    content: "Working with this team has been transformative for our business. Their technical expertise and commitment to delivering quality solutions is unmatched.",
  },
  {
    name: "Sarah Johnson",
    position: "CEO",
    company: "InnovateTech Solutions",
    image: "/testimonials/person2.svg",
    content: "The level of professionalism and technical knowledge displayed by the team is exceptional. They've helped us modernize our entire IT infrastructure.",
  },
  {
    name: "Michael Chen",
    position: "Director of Engineering",
    company: "Global Systems Ltd",
    image: "/testimonials/person3.svg",
    content: "Their ability to understand our complex requirements and deliver innovative solutions has made them our go-to technology partner.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 