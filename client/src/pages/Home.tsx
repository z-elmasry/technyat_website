import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, MapPin, Phone, Mail, Briefcase, Shield, Clock, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Technyat Solutions - Building Construction Futures
 * Design Philosophy: Modern Industrial Elegance
 * - Bold contrast between deep blacks and vibrant orange accent (#dd5126)
 * - Clean, geometric layouts with strategic whitespace
 * - Alexandria font throughout for cohesive professional look
 */

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlayTestimonials, setIsAutoPlayTestimonials] = useState(true);
  const [currentHero, setCurrentHero] = useState(0);
  const [isAutoPlayHero, setIsAutoPlayHero] = useState(true);

  // Hero carousel auto-play (3 seconds)
  useEffect(() => {
    if (!isAutoPlayHero) return;
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlayHero]);

  // Testimonials carousel auto-play (5 seconds)
  useEffect(() => {
    if (!isAutoPlayTestimonials) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlayTestimonials]);

  const goToHero = (index: number) => {
    setCurrentHero(index);
    setIsAutoPlayHero(false);
    setTimeout(() => setIsAutoPlayHero(true), 10000);
  };

  const nextHero = () => {
    setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlayHero(false);
    setTimeout(() => setIsAutoPlayHero(true), 10000);
  };

  const prevHero = () => {
    setCurrentHero((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlayHero(false);
    setTimeout(() => setIsAutoPlayHero(true), 10000);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlayTestimonials(false);
    setTimeout(() => setIsAutoPlayTestimonials(true), 10000);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlayTestimonials(false);
    setTimeout(() => setIsAutoPlayTestimonials(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlayTestimonials(false);
    setTimeout(() => setIsAutoPlayTestimonials(true), 10000);
  };

  const heroSlides = [
    {
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/hero-carousel-1-6WmntX99BWJqfUwiRGJyDM.webp",
      title: "Building Construction Futures",
      description: "Expert construction solutions for residential, commercial, and industrial projects. Delivering excellence since day one.",
    },
    {
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/hero-carousel-2-EwGtXRw7hmjxdeYBLtfQa3.webp",
      title: "Residential Excellence",
      description: "Transform your dream home into reality with our expert residential construction and renovation services.",
    },
    {
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/hero-carousel-3-83Kjw7mbAVgezgDXLS8Y9w.webp",
      title: "Commercial Expertise",
      description: "Large-scale commercial projects delivered with precision, expertise, and unwavering commitment to quality.",
    },
  ];

  const services = [
    {
      icon: Briefcase,
      title: "General Construction",
      description: "Comprehensive construction solutions for residential, commercial, and industrial projects with expert project management.",
    },
    {
      icon: Shield,
      title: "Project Management",
      description: "Professional oversight and coordination ensuring projects stay on schedule and within budget constraints.",
    },
    {
      icon: Clock,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with modern updates and sustainable construction practices.",
    },
  ];

  const portfolio = [
    { title: "Modern Office Complex", category: "Commercial", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/portfolio-bg-DXgyXXKYEunNobR8S5yi3u.webp" },
    { title: "Residential Development", category: "Residential", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/portfolio-bg-DXgyXXKYEunNobR8S5yi3u.webp" },
    { title: "Industrial Facility", category: "Industrial", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/portfolio-bg-DXgyXXKYEunNobR8S5yi3u.webp" },
  ];

  const testimonials = [
    { name: "John Smith", role: "Project Director", text: "Technyat delivered exceptional results on our commercial project. Their attention to detail and professionalism was outstanding." },
    { name: "Sarah Johnson", role: "Property Manager", text: "Working with Technyat was seamless. They completed our renovation ahead of schedule without compromising quality." },
    { name: "Michael Chen", role: "Developer", text: "Their expertise in project management saved us significant time and resources. Highly recommended for any construction project." },
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#dd5126] to-[#111111] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#111111]">Technyat</h1>
              <p className="text-xs text-[#939598]">Solutions</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-[#3c3c3c] hover:text-[#dd5126] transition-colors font-medium">About</a>
            <a href="#services" className="text-[#3c3c3c] hover:text-[#dd5126] transition-colors font-medium">Services</a>
            <a href="#portfolio" className="text-[#3c3c3c] hover:text-[#dd5126] transition-colors font-medium">Portfolio</a>
            <a href="#contact" className="text-[#3c3c3c] hover:text-[#dd5126] transition-colors font-medium">Contact</a>
          </div>
          <Button className="bg-[#dd5126] hover:bg-[#c94520] text-white">Get Quote</Button>
        </div>
      </nav>

      {/* Hero Section - Carousel */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Images Carousel */}
        <div className="absolute inset-0 z-0">
          <div className="flex transition-all duration-500 ease-in-out h-full" style={{
            transform: `translateX(-${currentHero * 100}%)`,
          }}>
            {heroSlides.map((slide, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content - Dynamic */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="transition-all duration-500">
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {heroSlides[currentHero].title}
              </h2>
              <p className="text-xl text-gray-100 mb-8">
                {heroSlides[currentHero].description}
              </p>
            </div>
            <div className="flex gap-4">
              <Button size="lg" className="bg-[#dd5126] hover:bg-[#c94520] text-white text-lg px-8">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Navigation Arrows */}
        <button
          onClick={prevHero}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 hover:bg-[#dd5126]/20 rounded-full transition-colors"
          aria-label="Previous hero slide"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
        <button
          onClick={nextHero}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 hover:bg-[#dd5126]/20 rounded-full transition-colors"
          aria-label="Next hero slide"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>

        {/* Hero Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex justify-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToHero(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentHero
                  ? "bg-[#dd5126] w-8"
                  : "bg-white/60 hover:bg-white"
              }`}
              aria-label={`Go to hero slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Diagonal divider */}
        <svg className="absolute bottom-0 left-0 right-0 z-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="white"></path>
        </svg>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-sm font-bold text-[#dd5126] uppercase tracking-widest mb-4">About Us</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
                Trusted Construction Partner
              </h2>
              <p className="text-lg text-[#3c3c3c] mb-6">
                With over a decade of experience in the construction industry, Technyat Solutions has established itself as a leader in delivering high-quality projects on time and within budget.
              </p>
              <p className="text-lg text-[#939598] mb-8">
                Our team of skilled professionals combines technical expertise with innovative problem-solving to bring your vision to life.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#dd5126] rounded-full"></div>
                  <span className="text-[#3c3c3c]">500+ Completed Projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#dd5126] rounded-full"></div>
                  <span className="text-[#3c3c3c]">98% Client Satisfaction</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#dd5126] rounded-full"></div>
                  <span className="text-[#3c3c3c]">Award-Winning Team</span>
                </li>
              </ul>
              <Button className="bg-[#dd5126] hover:bg-[#c94520] text-white">
                Learn More <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663545630865/bQnD4oR8mRhyTLpPGdD4Vw/about-section-huSEpWvjDcyLbKGUzZxj3o.webp"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#dd5126] rounded-lg opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold text-[#dd5126] uppercase tracking-widest mb-4">Our Services</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111]">
              Comprehensive Construction Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white"
                  onClick={() => setActiveService(index)}
                >
                  <div className="w-16 h-16 bg-[#dd5126]/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-[#dd5126]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111] mb-4">{service.title}</h3>
                  <p className="text-[#939598] mb-6">{service.description}</p>
                  <a href="#" className="inline-flex items-center text-[#dd5126] font-semibold hover:gap-2 transition-all">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold text-[#dd5126] uppercase tracking-widest mb-4">Our Work</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111]">
              Featured Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg h-64 cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm text-gray-300 mb-2">{project.category}</p>
                    <h4 className="text-2xl font-bold">{project.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-[#dd5126] text-[#dd5126] hover:bg-[#dd5126] hover:text-white">
              View All Projects <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Slider */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold text-[#dd5126] uppercase tracking-widest mb-4">Testimonials</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What Our Clients Say
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            {/* Slider Container */}
            <div className="relative overflow-hidden">
              <div className="flex transition-all duration-500 ease-in-out" style={{
                transform: `translateX(-${currentTestimonial * 100}%)`,
              }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="p-8 md:p-12 bg-[#1a1a1a] border-[#3c3c3c] mx-auto">
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-[#dd5126] text-2xl">★</span>
                        ))}
                      </div>
                      <p className="text-gray-300 mb-8 text-xl italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <p className="font-bold text-white text-lg">{testimonial.name}</p>
                        <p className="text-[#dd5126] text-sm font-medium">{testimonial.role}</p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 z-10 p-2 hover:bg-[#dd5126]/20 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8 text-[#dd5126]" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 z-10 p-2 hover:bg-[#dd5126]/20 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-8 h-8 text-[#dd5126]" />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-[#dd5126] w-8"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold text-[#dd5126] uppercase tracking-widest mb-4">Get In Touch</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-8">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-[#939598] mb-8">
                Contact us today for a free consultation and project quote. Our team is ready to discuss your construction needs.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#dd5126] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#111111]">Phone</p>
                    <p className="text-[#939598]">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#dd5126] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#111111]">Email</p>
                    <p className="text-[#939598]">info@technyat.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#dd5126] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#111111]">Address</p>
                    <p className="text-[#939598]">123 Construction Ave, Building City, BC 12345</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="p-8 border-0 shadow-lg">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#111111] mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dd5126] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111111] mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dd5126] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111111] mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dd5126] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111111] mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Tell us about your project..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dd5126] focus:border-transparent resize-none"
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-[#dd5126] hover:bg-[#c94520] text-white text-lg py-3">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#dd5126] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <h3 className="text-xl font-bold">Technyat</h3>
              </div>
              <p className="text-gray-400">Building Construction Futures</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#dd5126]">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#dd5126] transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-[#dd5126] transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-[#dd5126] transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-[#dd5126] transition-colors">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#dd5126]">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#dd5126] transition-colors">General Construction</a></li>
                <li><a href="#" className="hover:text-[#dd5126] transition-colors">Project Management</a></li>
                <li><a href="#" className="hover:text-[#dd5126] transition-colors">Renovation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#dd5126]">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+1 (555) 123-4567</li>
                <li>info@technyat.com</li>
                <li>123 Construction Ave</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#3c3c3c] pt-8">
            <p className="text-center text-gray-400">
              © 2024 Technyat Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
