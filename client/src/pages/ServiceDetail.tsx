import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ChevronUp, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";

/**
 * Service Detail Page
 * Displays comprehensive service information with image sliders and client logos slider
 * Design: Modern Industrial Elegance with Technyat brand colors
 */

export default function ServiceDetail() {
  const [, params] = useRoute("/service/:id");
  const [, setLocation] = useLocation();
  const [currentLogoSlide, setCurrentLogoSlide] = useState(0);
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const serviceId = params?.id;

  // Client logos slider auto-play (5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoSlide((prev) => (prev + 1) % Math.ceil(clientLogos.length / 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextLogoSlide = () => {
    setCurrentLogoSlide((prev) => (prev + 1) % Math.ceil(clientLogos.length / 3));
  };

  const prevLogoSlide = () => {
    setCurrentLogoSlide((prev) => (prev - 1 + Math.ceil(clientLogos.length / 3)) % Math.ceil(clientLogos.length / 3));
  };

  const nextImageSlide = () => {
    setCurrentImageSlide((prev) => (prev + 1) % images.length);
  };

  const prevImageSlide = () => {
    setCurrentImageSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const clientLogos = [
    {
      name: "Mondelez International",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/client-logo-mondelez-aPdXX3CpnV6RgyNMuqt4Tw.webp",
    },
    {
      name: "Henkel",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/client-logo-henkel-UszLGZUdL5Q94tRmS7v4D6.webp",
    },
    {
      name: "L'Oreal",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/client-logo-loreal-i8f7ajPUaSLrUpHdpU8hrv.webp",
    },
    {
      name: "Nestle",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/client-logo-nestle-8RjHCZxTZAjGbYJQ3JZCqo.webp",
    },
    {
      name: "Mars Incorporated",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/client-logo-mars-ZtkNETQaFHesPV6eayqWxA.webp",
    },
    {
      name: "Unilever",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/client-logo-unilever-4k5rV5tiYPMbXrAjL2uvuV.webp",
    },
    {
      name: "Reckitt Benckiser",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/client-logo-reckitt-A92VEtvjh7RnFbyGU6pTgj.webp",
    },
  ];

  const serviceImages: Record<string, string[]> = {
    industrial: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/service-industrial-1-TEeP2CgZUHdtT695SytTF9.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/service-industrial-2-dzSkffJYfXe6Pxs3gGKiSN.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/service-industrial-3-5oi5ddKMts9g6xkS7oTgy8.webp",
    ],
    commercial: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/service-commercial-1-NEzTsurjaXX8YhTfvcWVyU.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/service-commercial-2-hX2xTHPoVja5nmSWVzk8Yn.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/service-commercial-3-azjXbkuNRGAaGwsKaEzwtx.webp",
    ],
    residential: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/service-residential-1-aVVWyX7nJmVR3C589iNejK.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/service-residential-2-EQmGbi3T4xi2gid73PH7dF.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/service-residential-3-n7n67q9NUissM8Q6KDnWQe.webp",
    ],
  };

  const services: Record<string, any> = {
    industrial: {
      title: "Industrial Epoxy Flooring",
      subtitle: "Heavy-Duty Solutions for Demanding Environments",
      overview:
        "Our industrial epoxy flooring systems are engineered for factories, warehouses, and production facilities that demand superior performance. We provide durable, chemical-resistant, and abrasion-resistant flooring solutions that withstand the harshest industrial conditions.",
      features: [
        "Chemical and oil resistance for manufacturing plants",
        "Anti-slip surfaces for worker safety",
        "Seamless, hygienic flooring for food processing",
        "Static-dissipative systems for electronics manufacturing",
        "Heavy-load bearing capacity for equipment",
        "Easy maintenance and long-term durability",
      ],
      process: [
        "Site assessment and surface preparation",
        "Concrete repair and leveling",
        "Epoxy primer application",
        "Multi-layer epoxy coating system",
        "Topcoat and curing",
        "Quality inspection and testing",
      ],
      benefits:
        "Industrial epoxy flooring extends facility lifespan, reduces maintenance costs, improves worker safety, and ensures compliance with industry standards. Our systems are designed to handle heavy machinery, chemical spills, and continuous foot traffic.",
      pricing: "Starting from $15/sq ft based on specifications",
      timeline: "7-14 days depending on facility size",
    },
    commercial: {
      title: "Commercial Epoxy Systems",
      subtitle: "Professional Flooring for Modern Businesses",
      overview:
        "Transform your commercial spaces with our premium epoxy flooring systems. Perfect for offices, retail spaces, showrooms, and commercial facilities, our solutions combine aesthetics with durability and functionality.",
      features: [
        "Sleek, polished finishes for professional appearance",
        "Customizable colors and designs",
        "Stain and scratch resistant",
        "Low-maintenance and easy to clean",
        "Enhanced lighting reflection for brighter spaces",
        "Suitable for high-traffic areas",
      ],
      process: [
        "Design consultation and color selection",
        "Surface preparation and cleaning",
        "Epoxy base coat application",
        "Decorative elements or patterns (optional)",
        "Protective topcoat application",
        "Final inspection and walkthrough",
      ],
      benefits:
        "Commercial epoxy flooring creates a professional atmosphere, improves customer experience, and reduces maintenance costs. Our systems are perfect for creating branded spaces and modern office environments.",
      pricing: "Starting from $10/sq ft based on design complexity",
      timeline: "5-10 days depending on space size",
    },
    residential: {
      title: "Residential Epoxy Solutions",
      subtitle: "Decorative and Functional Flooring for Homes",
      overview:
        "Enhance your home with our residential epoxy flooring solutions. From garage floors to basements and living spaces, we offer decorative and functional options that add value and style to your property.",
      features: [
        "Decorative finishes and custom designs",
        "Durable garage floor coatings",
        "Moisture-resistant basement solutions",
        "Slip-resistant options for safety",
        "UV-stable colors that won't fade",
        "Eco-friendly formulations available",
      ],
      process: [
        "Home consultation and design selection",
        "Surface preparation and repair",
        "Primer application",
        "Decorative epoxy layer",
        "Protective topcoat",
        "Curing and final walkthrough",
      ],
      benefits:
        "Residential epoxy flooring increases home value, provides a modern aesthetic, and offers superior durability compared to traditional flooring. Perfect for garages, basements, and interior spaces.",
      pricing: "Starting from $8/sq ft for basic finishes",
      timeline: "3-7 days depending on area size",
    },
  };

  const service = services[serviceId as keyof typeof services];
  const images = serviceImages[serviceId as keyof typeof serviceImages] || [];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <button
            onClick={() => setLocation("/")}
            className="bg-[#dd5126] text-white px-6 py-2 rounded hover:bg-[#c94620] transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-[#111111] text-white py-4">
        <div className="container flex items-center gap-2 cursor-pointer" onClick={() => window.history.back()}>
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Services</span>
        </div>
      </div>

      {/* Image Slider */}
      {images.length > 0 && (
        <div className="relative bg-gray-100 py-12">
          <div className="container">
            <div className="relative overflow-hidden rounded-lg">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentImageSlide * 100}%)` }}>
                {images.map((image, index) => (
                  <div key={index} className="min-w-full">
                    <img src={image} alt={`Service ${index + 1}`} className="w-full h-96 object-cover" />
                  </div>
                ))}
              </div>
              {/* Navigation Arrows */}
              <button
                onClick={prevImageSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#dd5126] text-white p-2 rounded-full hover:bg-[#c94620] transition-all duration-300 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImageSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#dd5126] text-white p-2 rounded-full hover:bg-[#c94620] transition-all duration-300 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageSlide ? 'bg-[#dd5126] w-8' : 'bg-gray-300 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Service Content */}
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl font-bold text-[#111111] mb-2">{service.title}</h1>
          <p className="text-xl text-[#dd5126] mb-8">{service.subtitle}</p>

          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#111111] mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">{service.overview}</p>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#111111] mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature: string, index: number) => (
                <div key={index} className="flex gap-3">
                  <div className="w-2 h-2 bg-[#dd5126] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#111111] mb-4">Our Process</h2>
            <div className="space-y-3">
              {service.process.map((step: string, index: number) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#dd5126] text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#111111] mb-4">Benefits</h2>
            <p className="text-gray-700 leading-relaxed">{service.benefits}</p>
          </div>

          {/* Pricing & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 border-2 border-[#dd5126]">
              <h3 className="text-xl font-bold text-[#111111] mb-2">Pricing</h3>
              <p className="text-[#dd5126] font-semibold">{service.pricing}</p>
            </Card>
            <Card className="p-6 border-2 border-[#dd5126]">
              <h3 className="text-xl font-bold text-[#111111] mb-2">Timeline</h3>
              <p className="text-[#dd5126] font-semibold">{service.timeline}</p>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mb-12">
            <button className="bg-[#dd5126] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c94620] transition-colors">
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Trusted Companies Section */}
      <div className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#111111] mb-12 text-center">Trusted by Leading Companies</h2>
          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden bg-white rounded-lg p-8">
              <div className="flex gap-6 transition-transform duration-500" style={{ transform: `translateX(-${currentLogoSlide * 100}%)` }}>
                {Array.from({ length: Math.ceil(clientLogos.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="flex gap-6 min-w-full">
                    {clientLogos.slice(slideIndex * 3, slideIndex * 3 + 3).map((client, index) => (
                      <div key={index} className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                        <img src={client.logo} alt={client.name} className="max-h-24 max-w-full object-contain" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevLogoSlide}
              className="absolute -left-6 top-1/2 -translate-y-1/2 bg-[#dd5126] text-white p-2 rounded-full hover:bg-[#c94620] transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextLogoSlide}
              className="absolute -right-6 top-1/2 -translate-y-1/2 bg-[#dd5126] text-white p-2 rounded-full hover:bg-[#c94620] transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(clientLogos.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentLogoSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentLogoSlide ? 'bg-[#dd5126] w-8' : 'bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">About Technyat</h4>
              <p className="text-gray-400 text-sm">Leading epoxy flooring specialist in Egypt with 20+ years of experience.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-[#dd5126]">Industrial Flooring</a></li>
                <li><a href="#" className="hover:text-[#dd5126]">Commercial Systems</a></li>
                <li><a href="#" className="hover:text-[#dd5126]">Residential Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">Email: info@technyat.com</p>
              <p className="text-gray-400 text-sm">Phone: +20 (0) 123 456 789</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4 text-gray-400">
                <a href="#" className="hover:text-[#dd5126]">Facebook</a>
                <a href="#" className="hover:text-[#dd5126]">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Technyat Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#dd5126] text-white p-3 rounded-full hover:bg-[#c94620] transition-all duration-300 shadow-lg hover:scale-110 z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
