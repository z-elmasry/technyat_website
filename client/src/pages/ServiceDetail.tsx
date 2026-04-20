import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";

/**
 * Service Detail Page
 * Displays comprehensive service information with client logos slider
 * Design: Modern Industrial Elegance with Technyat brand colors
 */

export default function ServiceDetail() {
  const [, params] = useRoute("/service/:id");
  const [, setLocation] = useLocation();
  const [currentLogoSlide, setCurrentLogoSlide] = useState(0);

  const serviceId = params?.id;

  // Client logos slider auto-play (5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoSlide((prev) => (prev + 1) % Math.ceil(clientLogos.length / 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextLogoSlide = () => {
    setCurrentLogoSlide((prev) => (prev + 1) % Math.ceil(clientLogos.length / 3));
  };

  const prevLogoSlide = () => {
    setCurrentLogoSlide((prev) => (prev - 1 + Math.ceil(clientLogos.length / 3)) % Math.ceil(clientLogos.length / 3));
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
        "Stain and scratch resistant surfaces",
        "Easy to clean and maintain",
        "Wide range of colors and designs",
        "Anti-fatigue options for employee comfort",
        "Sustainable and eco-friendly options",
      ],
      process: [
        "Design consultation and color selection",
        "Concrete surface preparation",
        "Primer application",
        "Decorative epoxy layer",
        "Protective topcoat",
        "Final inspection and handover",
      ],
      benefits:
        "Commercial epoxy flooring enhances brand image, improves customer experience, and provides a professional environment. The durable finish requires minimal maintenance while maintaining its aesthetic appeal for years.",
      pricing: "Starting from $12/sq ft based on design complexity",
      timeline: "5-10 days depending on project scope",
    },
    residential: {
      title: "Residential Epoxy Solutions",
      subtitle: "Stunning Garage and Home Flooring",
      overview:
        "Upgrade your residential spaces with our high-quality epoxy flooring. From garage floors to basements and patios, we create beautiful, durable surfaces that enhance your home's value and functionality.",
      features: [
        "Garage floor protection and enhancement",
        "Basement waterproofing and durability",
        "Decorative finishes and patterns",
        "Slip-resistant surfaces",
        "Eco-friendly formulations",
        "Customizable designs and colors",
      ],
      process: [
        "Home consultation and design selection",
        "Concrete preparation and cleaning",
        "Epoxy primer application",
        "Decorative epoxy installation",
        "Protective topcoat application",
        "Curing and final walkthrough",
      ],
      benefits:
        "Residential epoxy flooring transforms your spaces into beautiful, functional areas. It protects concrete from stains, moisture, and wear while adding significant value to your home. Perfect for garages, basements, and outdoor patios.",
      pricing: "Starting from $10/sq ft for residential projects",
      timeline: "3-7 days depending on area size",
    },
  };

  const service = services[serviceId as string];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#111111] mb-4">Service Not Found</h1>
          <Button onClick={() => setLocation("/")} className="bg-[#dd5126] hover:bg-[#c94520] text-white">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <div className="bg-[#111111] text-white py-6">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-[#dd5126] hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </button>
          <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
          <p className="text-xl text-gray-300 mt-2">{service.subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Overview Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#111111] mb-6">Overview</h2>
          <p className="text-lg text-[#3c3c3c] leading-relaxed">{service.overview}</p>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#111111] mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature: string, index: number) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#dd5126] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="text-[#3c3c3c]">{feature}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#111111] mb-8">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.process.map((step: string, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#dd5126] to-[#111111] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <p className="text-[#3c3c3c] font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20 bg-gradient-to-r from-[#dd5126]/10 to-[#111111]/10 p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-[#111111] mb-6">Why Choose Us</h2>
          <p className="text-lg text-[#3c3c3c] leading-relaxed">{service.benefits}</p>
        </section>

        {/* Pricing & Timeline */}
        <section className="mb-20 grid md:grid-cols-2 gap-8">
          <Card className="p-8 border-0 shadow-lg">
            <h3 className="text-2xl font-bold text-[#111111] mb-4">Pricing</h3>
            <p className="text-xl text-[#dd5126] font-semibold">{service.pricing}</p>
            <p className="text-sm text-[#939598] mt-4">*Final pricing based on site assessment and specific requirements</p>
          </Card>
          <Card className="p-8 border-0 shadow-lg">
            <h3 className="text-2xl font-bold text-[#111111] mb-4">Timeline</h3>
            <p className="text-xl text-[#dd5126] font-semibold">{service.timeline}</p>
            <p className="text-sm text-[#939598] mt-4">*Timeline varies based on project complexity and weather conditions</p>
          </Card>
        </section>

        {/* Client Logos Slider */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#111111] mb-12 text-center">Trusted by Leading Companies</h2>
          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden bg-gray-50 rounded-lg p-8">
              <div className="flex gap-6 transition-transform duration-500" style={{ transform: `translateX(-${currentLogoSlide * 100}%)` }}>
                {Array.from({ length: Math.ceil(clientLogos.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="flex gap-6 min-w-full">
                    {clientLogos.slice(slideIndex * 3, slideIndex * 3 + 3).map((client, index) => (
                      <div key={index} className="flex-1 flex items-center justify-center bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300">
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
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-12 w-10 h-10 bg-[#dd5126] hover:bg-[#c94520] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextLogoSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-12 w-10 h-10 bg-[#dd5126] hover:bg-[#c94520] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
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
                    currentLogoSlide === index ? "bg-[#dd5126] w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#dd5126] to-[#111111] text-white py-16 rounded-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Contact us today for a free consultation and site assessment. Our experts will help you choose the perfect epoxy flooring solution for your needs.</p>
          <Button className="bg-white text-[#dd5126] hover:bg-gray-100 text-lg px-8 py-3">
            Get a Free Quote
          </Button>
        </section>
      </div>
    </div>
  );
}
