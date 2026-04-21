import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, MapPin, Calendar, DollarSign, CheckCircle, ChevronRight, ChevronUp } from "lucide-react";
import { useRoute } from "wouter";
import { useState, useEffect } from "react";

interface ProjectData {
  id: string;
  title: string;
  image: string;
  gallery: string[];
  location: string;
  duration: string;
  budget: string;
  description: string;
  challenge: string;
  solution: string;
  specifications: string[];
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
}

const projects: Record<string, ProjectData> = {
  "mondelez-factory": {
    id: "mondelez-factory",
    title: "Mondelez Food Factory - Industrial Epoxy Flooring",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/project-mondelez-factory-cxahndYGJBHEakxdctwDpN.webp",
    gallery: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/mondelez-project-1-nCCHqdjkJktnBq6ma9DAWL.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/mondelez-project-2-SzxcrDamGMfMa59iQQyVHq.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/mondelez-project-3-aWGQYYSQSYZTpH4RGoYriq.webp",
    ],
    location: "10th of Ramadan City, Egypt",
    duration: "8 weeks",
    budget: "EGP 450,000 - 550,000",
    description: "High-performance epoxy flooring installation for Mondelez International's food manufacturing facility. The project involved coating over 5,000 square meters of production floor with specialized food-grade epoxy.",
    challenge: "The facility required continuous production during installation, necessitating careful scheduling and phased implementation to minimize downtime. The flooring needed to meet strict food safety standards and withstand heavy machinery.",
    solution: "We implemented a night-shift installation schedule to avoid production disruptions. Used premium food-grade epoxy with anti-bacterial properties and high chemical resistance. Applied multiple protective layers to ensure durability and compliance with international food safety standards.",
    specifications: [
      "Food-grade epoxy coating system",
      "Anti-bacterial and anti-fungal properties",
      "Chemical resistant finish",
      "Seamless application over 5,000 m²",
      "High-traffic durability rating",
      "Slip-resistant surface",
      "Easy-to-clean maintenance",
    ],
    testimonial: "Technyat Solutions delivered exceptional results on our factory floor. Their team worked efficiently during night shifts without compromising quality. The epoxy flooring has exceeded our expectations in terms of durability and cleanliness standards.",
    testimonialAuthor: "Ahmed Hassan",
    testimonialRole: "Facility Manager, Mondelez Egypt",
  },
  "warehouse-flooring": {
    id: "warehouse-flooring",
    title: "Commercial Warehouse - Anti-Slip Epoxy System",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/project-warehouse-flooring-iCbmDrY5MssuFhmcoG5pbd.webp",
    gallery: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/warehouse-project-1-f6Yz6XqmYviPpsqNuMpDt4.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/warehouse-project-2-WUudyXFi8DV2seCXMtvbtU.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/warehouse-project-3-oE7S6wktxYyHfan6wdhBCq.webp",
    ],
    location: "6th of October City, Egypt",
    duration: "6 weeks",
    budget: "EGP 320,000 - 400,000",
    description: "Complete epoxy flooring renovation for a large commercial warehouse. The project included anti-slip coating, safety zone markings, and specialized areas for different storage requirements.",
    challenge: "The warehouse needed to remain operational during renovation. Different zones required different epoxy specifications, and precise safety markings were critical for worker safety and compliance.",
    solution: "Implemented a phased approach, working on one section at a time. Applied anti-slip epoxy with high-visibility markings for pick zones and loading areas. Used color-coded systems to designate different functional areas.",
    specifications: [
      "Anti-slip epoxy coating",
      "Color-coded zone system",
      "Safety line markings",
      "High-visibility finish",
      "Heavy-duty traffic rated",
      "Forklift resistant",
      "3,500 m² coverage",
    ],
    testimonial: "The warehouse floor transformation has improved our operations significantly. Worker safety has improved with the clear markings, and the anti-slip surface prevents accidents. Technyat's attention to detail was impressive.",
    testimonialAuthor: "Fatima Al-Mansouri",
    testimonialRole: "Operations Director, Commercial Logistics",
  },
  "chemical-plant": {
    id: "chemical-plant",
    title: "Chemical Plant - Specialized Resistant Coating",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/project-chemical-plant-X9dp4ouX7TXKKbomamkbKd.webp",
    gallery: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/chemical-project-1-8u5yFosJDwjSqfxwRRRi4F.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/chemical-project-2-P7G6u2TQbx96AoNxQJEkRr.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/chemical-project-3-B3Rab87Hv4QYcQa9tnmSqQ.webp",
    ],
    location: "Port Said, Egypt",
    duration: "10 weeks",
    budget: "EGP 600,000 - 750,000",
    description: "Specialized chemical-resistant epoxy flooring for a pharmaceutical manufacturing facility. The project required compliance with strict chemical resistance standards and cleanroom protocols.",
    challenge: "The facility processes various chemicals requiring extreme chemical resistance. The flooring needed to withstand spills, regular chemical cleaning, and maintain integrity under harsh conditions while maintaining sterility standards.",
    solution: "Applied premium chemical-resistant epoxy with enhanced durability. Used specialized primers and multiple coating layers. Implemented seamless joints to prevent chemical seepage. Regular testing ensured compliance with pharmaceutical industry standards.",
    specifications: [
      "Chemical-resistant epoxy system",
      "Pharmaceutical grade coating",
      "Seamless joint application",
      "Spill containment capability",
      "Easy decontamination",
      "Anti-microbial properties",
      "4,200 m² coverage",
    ],
    testimonial: "Technyat's expertise in chemical-resistant flooring was evident from day one. Their team understood the strict requirements of our facility. The floor has performed exceptionally well under demanding chemical exposure.",
    testimonialAuthor: "Dr. Mohamed Karim",
    testimonialRole: "Plant Manager, Pharmaceutical Division",
  },
};

function ImageGallerySlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg group">
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-[#dd5126] w-8" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  if (!match) return null;

  const projectId = params?.id as string;
  const project = projects[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#111111] mb-4">Project Not Found</h1>
          <p className="text-[#939598] mb-8">The project you're looking for doesn't exist.</p>
          <a href="/" className="inline-flex items-center gap-2 text-[#dd5126] hover:text-[#c94520] font-medium">
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#111111] border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-white hover:text-[#dd5126] transition-colors">
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </a>
          <h1 className="text-white font-bold text-lg">Project Details</h1>
          <div className="w-12"></div>
        </div>
      </nav>

      {/* Gallery Slider */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <ImageGallerySlider images={project.gallery} />
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Key Information */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#dd5126] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-[#939598] font-medium mb-1">Location</p>
                  <p className="text-lg font-semibold text-[#111111]">{project.location}</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-[#dd5126] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-[#939598] font-medium mb-1">Duration</p>
                  <p className="text-lg font-semibold text-[#111111]">{project.duration}</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-start gap-4">
                <DollarSign className="w-6 h-6 text-[#dd5126] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-[#939598] font-medium mb-1">Budget</p>
                  <p className="text-lg font-semibold text-[#111111]">{project.budget}</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#dd5126] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-[#939598] font-medium mb-1">Status</p>
                  <p className="text-lg font-semibold text-[#111111]">Completed</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">{project.title}</h1>
          </div>

          {/* Description */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#111111] mb-6">Project Overview</h2>
            <p className="text-lg text-[#3c3c3c] leading-relaxed">{project.description}</p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">The Challenge</h3>
              <p className="text-[#3c3c3c] leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">Our Solution</h3>
              <p className="text-[#3c3c3c] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Specifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#111111] mb-8">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.specifications.map((spec, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#dd5126] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#3c3c3c]">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <Card className="p-8 md:p-12 border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white mb-16">
            <div className="mb-6">
              <p className="text-2xl font-bold text-[#dd5126]">"</p>
            </div>
            <p className="text-lg text-[#3c3c3c] mb-6 leading-relaxed italic">{project.testimonial}</p>
            <div>
              <p className="font-semibold text-[#111111]">{project.testimonialAuthor}</p>
              <p className="text-sm text-[#939598]">{project.testimonialRole}</p>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#111111] mb-6">Ready to Transform Your Space?</h3>
            <Button className="bg-[#dd5126] hover:bg-[#c94520] text-white text-lg px-8 py-3">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-12">
        <div className="container mx-auto px-4">
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

