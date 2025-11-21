import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Users, Target, Award, Plane, Building2, Heart, Globe, Briefcase, Shield, Star, CheckCircle, Clock, TrendingUp, BookOpen, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

import indianFlagMp4 from "./assets/flag-indian.mp4";
import saudiarabiaFlagMp4 from "./assets/flag-saudiarabia.mp4";
import mecca from "./assets/images/mecca.jpeg"
import jeddah from "./assets/images/jeddah.jpeg"
import madeena from "./assets/images/madeena.jpeg"
import riyadh from "./assets/images/riyadh.jpeg"
import kingdomTower from "./assets/images/kingdom-tower.jpeg"

import indianFlagSvg from "./assets/images/Flag_of_India.svg"
import saudiArabiaFlagSvg from "./assets/images/Flag_of_Saudi_Arabia.svg"

import licenseImg from "./assets/images/banner/licensed.jpg"
import gatewayImg from "./assets/images/banner/gateway-to-saudi.webp"
import completeTravelSolutionImg from "./assets/images/banner/complete-travel-solutions.png"
import experienceImg from "./assets/images/banner/14+-years-excellence.webp"

import Header from './Header';
import FeatureSection from './FeatureSection';

const DayLifeTravels = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const banners = [
    {
      image: gatewayImg,
      title: "Your Gateway to Saudi Arabia",
      subtitle: "Hajj, Umrah & Premium Employment Opportunities",
      gradient: "from-orange-600/80 via-green-600/70 to-emerald-700/80"
    },
    {
      image: experienceImg,
      title: "9+ Years of Excellence",
      subtitle: "India's Most Trusted Manpower Recruitment Partner",
      gradient: "from-green-700/80 via-white/20 to-orange-600/80"
    },
    {
      image: licenseImg,
      title: "Licensed & Authorized",
      subtitle: "Government Approved Travel & Recruitment Agency",
      gradient: "from-emerald-800/80 via-green-600/70 to-yellow-600/80"
    },
    {
      image: completeTravelSolutionImg,
      title: "Complete Travel Solutions",
      subtitle: "Visa Processing • Flight Booking • Accommodation",
      gradient: "from-orange-700/80 via-white/20 to-green-800/80"
    }
  ];

  const testimonials = [
    { name: "Rajesh Kumar", role: "Engineer in Riyadh", text: "Golden Dreams Agency helped me secure my dream job in Saudi Arabia. Professional service!" },
    { name: "Fatima Ahmed", role: "Nurse in Jeddah", text: "Excellent support throughout the visa process. Highly recommended!" },
    { name: "Mohammed Ali", role: "IT Professional", text: "9 years of experience shows in their service quality. Thank you!" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  const handleClick = () => {
    alert("Thank you for your inquiry! We will contact you within 24 hours.");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Top Bar with Indian Tricolor */}
      <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

      {/* Header */}
      {/* <header className="bg-gradient-to-r from-orange-600 via-green-700 to-emerald-800 text-white shadow-2xl md:sticky md:top-0 md:z-50">
        <div className="container mx-auto px-2 py-5">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 p-3">
              <div className="bg-white rounded-full shadow-md flex-shrink-0">
                <img
                  src={logo}
                  alt="Golden Dreams Agency logo"
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-cover rounded-full"
                />
              </div>

              <div className="text-center sm:text-left">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide
                              bg-gradient-to-r from-yellow-300 via-yellow-200 to-white
                              bg-clip-text text-transparent py-1">
                  Golden Dreams Agency
                </h1>

                <p className="text-xs sm:text-sm text-orange-200 font-semibold">
                  Golden Way to Saudi
                </p>
              </div>
            </div>

            <div className="hidden lg:flex space-x-8 text-lg">
              <a href="#about" className="hover:text-yellow-300 transition font-semibold">About</a>
              <a href="#services" className="hover:text-yellow-300 transition font-semibold">Services</a>
              <a href="#mission" className="hover:text-yellow-300 transition font-semibold">Mission</a>
              <a href="#gallery" className="hover:text-yellow-300 transition font-semibold">Gallery</a>
              <a href="#contact" className="hover:text-yellow-300 transition font-semibold">Contact</a>
            </div>
          </div>
        </div>
      </header> */}
      <Header />

      {/* Enhanced Banner Slider */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-r ${banner.gradient}`}>
              <div className="h-full flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-5xl">
                  <div className="mb-6 flex justify-center space-x-4">
                    <img
                      src={indianFlagSvg}
                      alt="India Flag"
                      className="w-20 h-14 object-cover rounded-lg shadow-2xl border-2 border-white"
                    />
                    <img
                      src={saudiArabiaFlagSvg}
                      alt="Saudi Flag"
                      className="w-20 h-14 object-cover rounded-lg shadow-2xl border-2 border-white"
                    />
                  </div>
                  <h2 className="text-3xl md:text-7xl font-bold mb-6 drop-shadow-2xl animate-pulse">
                    {banner.title}
                  </h2>
                  <p className="text-xl md:text-3xl text-yellow-200 font-semibold drop-shadow-lg">
                    {banner.subtitle}
                  </p>
                  <button className="mt-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-2 rounded-full text-lg font-bold shadow-2xl hover:scale-110 transition transform">
                    Get Started Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2
                      bg-transparent hover:bg-transparent
                      rounded-full p-2 transition shadow-2xl"
          >
            <ChevronLeft className="w-10 h-10 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2
                      bg-transparent hover:bg-transparent
                      rounded-full p-2 transition shadow-2xl"
          >
            <ChevronRight className="w-10 h-10 text-white" />
          </button>


        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition transform hover:scale-125 ${index === currentSlide ? 'bg-orange-500 scale-125' : 'bg-white bg-opacity-60'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Animated Stats Bar */}
      <div className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-700 py-8 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Clock, number: "9+", label: "Years Experience" },
              { icon: Users, number: "10,000+", label: "Candidates Placed" },
              { icon: Building2, number: "500+", label: "Partner Companies" },
              { icon: Globe, number: "100%", label: "Success Rate" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center text-white">
                <stat.icon className="w-10 h-10 mx-auto mb-1 animate-bounce" />
                <div className="text-2xl font-bold text-yellow-300">{stat.number}</div>
                <div className="text-sm font-semibold mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flags Connection Section */}
      {/* <div className="relative py-16 bg-gradient-to-br from-orange-100 via-white to-green-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-600 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center space-x-8 md:space-x-16 flex-wrap">
            <div className="text-center transform hover:scale-110 transition">
              <div className="relative">
                  <video
                      src={indianFlagMp4}
                      autoPlay
                      loop
                      muted
                      className="w-48 h-32 object-cover rounded-2xl shadow-2xl border-4 border-orange-500 mb-4 mx-auto"
                    />
                <div className="absolute -bottom-2 -right-2 bg-orange-600 text-white rounded-full p-2">
                  <Home className="w-6 h-6" />
                </div>
              </div>
              <p className="font-bold text-2xl text-orange-700 mt-2">भारत • India</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 via-green-600 to-emerald-700 p-3 rounded-full shadow-2xl animate-pulse">
                <Plane className="w-12 h-12 text-white transform rotate-45 m-auto" />
              </div>
              <p className="mt-4 font-bold text-emerald-700 text-xl">Connecting Dreams</p>
            </div>
            
            <div className="text-center transform hover:scale-110 transition">
              <div className="relative">
                <video
                      src={saudiarabiaFlagMp4}
                      autoPlay
                      loop
                      muted
                      className="w-48 h-32 object-cover rounded-2xl shadow-2xl border-4 border-orange-500 mb-4 mx-auto"
                    />
                <div className="absolute -bottom-2 -right-2 bg-green-700 text-white rounded-full p-2">
                  <Star className="w-6 h-6" />
                </div>
              </div>
              <p className="font-bold text-2xl text-green-800 mt-2">السعودية • Saudi Arabia</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-orange-600 via-white to-green-700 p-1 rounded-2xl shadow-2xl">
              <div className="bg-white px-8 py-4 rounded-2xl">
                <p className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent">
                  ✈️ Hajj • Umrah • Employment • Business Visa • Family Visa • Tourism ✈️
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Responsive Flags Connection Section */}
      <div className="relative py-10 md:py-16 bg-gradient-to-br from-orange-100 via-white to-green-100 overflow-hidden">
        {/* Background Blurs */}

        <div className="container mx-auto px-4 relative z-10">
          {/* Responsive Flags Connection Section (no horizontal scroll on phones) */}
          <div className="relative py-10 md:py-16 bg-gradient-to-br from-orange-100 via-white to-green-100 overflow-hidden">
            {/* Background Blurs */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-orange-500 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-green-600 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
              {/* Mobile-first: stacked (no horizontal scroll). On sm+ -> row */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12">
                {/* India Flag */}
                <div className="w-full sm:w-auto max-w-xs sm:max-w-none text-center transform hover:scale-105 transition">
                  <div className="relative">
                    <video
                      src={indianFlagMp4}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full sm:w-48 md:w-56 h-auto object-cover rounded-xl shadow-xl border-2 md:border-4 border-orange-500 mb-2 mx-auto"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="font-bold text-sm sm:text-base md:text-lg text-orange-700 mt-1 leading-tight whitespace-normal" dir="auto">
                    भारत • India
                  </p>
                </div>

                {/* Plane Icon - stays centered between flags on wide screens, appears inline in column on phones */}
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-r from-orange-500 via-green-600 to-emerald-700 p-2 sm:p-3 md:p-4 rounded-full shadow-xl animate-pulse inline-flex items-center justify-center">
                    <Plane className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-white transform rotate-45" />
                  </div>
                </div>

                {/* Saudi Arabia Flag */}
                <div className="w-full sm:w-auto max-w-xs sm:max-w-none text-center transform hover:scale-105 transition">
                  <div className="relative">
                    <video
                      src={saudiarabiaFlagMp4}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full sm:w-48 md:w-56 h-auto object-cover rounded-xl shadow-xl border-2 md:border-4 border-orange-500 mb-2 mx-auto"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="font-bold text-sm sm:text-base md:text-lg text-green-800 mt-1 leading-tight whitespace-normal" dir="auto">
                    السعودية • Saudi Arabia
                  </p>
                </div>
              </div>
            </div>
          </div>



          {/* Bottom Banner */}
          <div className="mt-8 md:mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-orange-600 via-white to-green-700 p-[2px] rounded-2xl shadow-xl">
              <div className="bg-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-2xl">
                <p className="text-sm sm:text-lg md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent">
                  ✈️ Hajj • Umrah • Employment • Business Visa • Family Visa • Tourism ✈️
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* About Section with Indian & Saudi Colors */}
      <section id="about" className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Award className="w-20 h-20 text-orange-600 mx-auto animate-bounce" />
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 via-green-600 to-emerald-700 bg-clip-text text-transparent mb-4">
            About Golden Dreams Agency
          </h2>
          <div className="flex justify-center space-x-2">
            <div className="w-20 h-1 bg-orange-500 rounded"></div>
            <div className="w-20 h-1 bg-white rounded"></div>
            <div className="w-20 h-1 bg-green-600 rounded"></div>
          </div>
        </div>
        <FeatureSection />
      </section>

      

      {/* Saudi Arabia Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Globe className="w-12 h-12 md:w-20 md:h-20 text-yellow-400 mx-auto mb-4 animate-spin" style={{ animationDuration: '3s' }} />
            <h2 className="text-2xl md:text-5xl font-bold mb-4">Discover Saudi Arabia</h2>
            <p className="text-lg md:text-xl text-green-200">Your New Destination for Success & Spirituality</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: mecca, title: "Masjid al-Haram", desc: "Holy Pilgrimage - Hajj & Umrah Packages" },
              { img: riyadh, title: "Modern Riyadh", desc: "Career Opportunities in Capital City" },
              { img: madeena, title: "Masjid an-Nabawi", desc: "Medina - City of the Prophet" },
              { img: jeddah, title: "Jeddah", desc: "Commercial Hub & Port City" },
              { img: kingdomTower, title: "Kingdom Tower", desc: "Modern Architecture & Development" },
              { img: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*1gOvWg2AXX2PxMP22lXZlA.jpeg", title: "Saudi Culture", desc: "Rich Heritage & Traditions" }
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500">
                <img src={item.img} alt={item.title} className="w-full h-72 object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition duration-500">
                    <h4 className="text-2xl font-bold text-yellow-400 mb-2">{item.title}</h4>
                    <p className="text-white">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-full md:font-bold shadow-lg">
                  Explore
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </section>

      {/* Services Section with Vibrant Colors */}
      <section id="services" className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <Briefcase className="w-20 h-20 text-green-700 mx-auto mb-4 animate-bounce" />
          <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent mb-4">
            Our Premium Facilities & Services
          </h2>
          <div className="flex justify-center space-x-2 mb-6">
            <div className="w-24 h-1 bg-orange-500 rounded"></div>
            <div className="w-24 h-1 bg-white rounded"></div>
            <div className="w-24 h-1 bg-green-600 rounded"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive recruitment solutions across multiple disciplines and industries
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 via-white to-green-50 rounded-3xl shadow-2xl p-8 md:p-16 border-4 border-orange-200">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "Engineering Excellence", desc: "Mechanical, Civil, Electrical, Electronics, Electro-Mechanical, Welding, Piping, Pipeline Engineers", color: "from-orange-500 to-red-600", bgColor: "from-orange-50 to-red-50" },
              { icon: Shield, title: "Quality & Safety", desc: "Quality Control Specialists, Welding Inspectors, Safety Officers, HSE Engineers", color: "from-green-600 to-emerald-700", bgColor: "from-green-50 to-emerald-50" },
              { icon: Heart, title: "Healthcare Professionals", desc: "Hospitals, Nursing Homes, Medical Staff, Healthcare Providers", color: "from-pink-500 to-red-600", bgColor: "from-pink-50 to-red-50" },
              { icon: Globe, title: "IT & Technology", desc: "Hardware, Software, Telecommunications, IT Services, Tech Support", color: "from-blue-600 to-indigo-700", bgColor: "from-blue-50 to-indigo-50" },
              { icon: TrendingUp, title: "Banking & Finance", desc: "Management Professionals, Finance Experts, Accountants, Financial Analysts", color: "from-yellow-600 to-orange-600", bgColor: "from-yellow-50 to-orange-50" },
              { icon: Users, title: "Sales & Marketing", desc: "Sales Executives, Marketing Professionals, Business Development, Salesman, Drivers", color: "from-purple-600 to-pink-600", bgColor: "from-purple-50 to-pink-50" },
              { icon: Building2, title: "Production & Manufacturing", desc: "Production Managers, Maintenance Teams, Technical Skills, Operations", color: "from-gray-600 to-slate-700", bgColor: "from-gray-50 to-slate-50" },
              { icon: Users, title: "Hospitality & Catering", desc: "Restaurants, Catering Services, Hospitality Staff, Helpers", color: "from-amber-600 to-yellow-700", bgColor: "from-amber-50 to-yellow-50" },
              { icon: BookOpen, title: "Administration", desc: "General Administration, Office Management, Support Staff, Coordinators", color: "from-teal-600 to-cyan-700", bgColor: "from-teal-50 to-cyan-50" }
            ].map((service, index) => (
              <div key={index} className={`bg-gradient-to-br ${service.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 border-2 border-white`}>
                <div className={`bg-gradient-to-r ${service.color} w-10 h-10 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="font-bold text-xl md:text-2xl text-gray-800 mb-3">{service.title}</h4>
                <p className="text-gray-700 leading-relaxed">{service.desc}</p>
                <div className="mt-4 flex items-center text-sm font-semibold text-gray-600">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                  Verified Professionals
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section with Indian Flag Colors */}
      <section id="mission" className="py-20 bg-gradient-to-br from-orange-600 via-white to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Target className="w-20 h-20 text-orange-700 mx-auto mb-4 animate-pulse" />
            <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
            <div className="flex justify-center space-x-2">
              <div className="w-24 h-2 bg-orange-600 rounded"></div>
              <div className="w-24 h-2 bg-white rounded"></div>
              <div className="w-24 h-2 bg-green-700 rounded"></div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto space-y-4">
            <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border-l-8 border-orange-600 transform hover:scale-105 transition">
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-2 md:p-4 rounded-2xl">
                  <Target className="w-6 h-6 md:w-12 md:h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-orange-700 mb-4">Our Commitment</h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    We dedicate ourselves to delivering a high level of competency, professionalism, and satisfaction, while continuously improving client and applicant relationships. To provide an efficient and professional recruitment service to our valued clients and candidates.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border-l-8 border-green-700 transform hover:scale-105 transition">
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-2 md:p-4 rounded-2xl">
                  <Award className="w-6 h-6 md:w-12 md:h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4">9+ Years of Trust</h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    We hereby take this opportunity to sincerely thank all our existing and prospective clients based in India and all over the Middle East, as well as our educated and experienced candidates for your trust and cooperation during more than <strong className="text-green-700 text-xl">9 YEARS</strong> with the company.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-10 shadow-2xl border-4 border-yellow-500 transform hover:scale-105 transition">
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-2 md:p-4 rounded-2xl">
                  <Star className="w-6 h-6 md:w-12 md:h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-orange-700 mb-4">Our Gratitude</h3>
                  <p className="text-lg text-gray-800 leading-relaxed italic">
                    "Finally, I would like to offer my thanks to those clients, candidates, staff, and government and non-governmental agencies in India and abroad who stretched their helping hand for us to become a predominant manpower supplier."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="inline-block bg-gradient-to-r from-orange-600 via-white to-green-700 p-1 rounded-full shadow-2xl">
              <div className="bg-white px-12 py-6 rounded-full">
                <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent">
                  🏆 9+ Years of Excellence 🏆
                </p>
                <p className="text-gray-600 font-semibold mt-2">India's Most Trusted Recruitment Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Star className="w-20 h-20 text-yellow-500 mx-auto mb-4 animate-spin" style={{ animationDuration: '4s' }} />
            <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-700">Hear from our satisfied clients and candidates</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border-t-8 border-orange-500">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0 p-12'
                    }`}
                >
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-2xl text-gray-700 text-center italic mb-8">
                    "{testimonial.text}"
                  </p>
                  <div className="text-center">
                    <p className="font-bold text-xl text-gray-800">{testimonial.name}</p>
                    <p className="text-green-700 font-semibold">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition ${index === currentTestimonial ? 'bg-orange-600 scale-125' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <Award className="w-20 h-20 text-orange-600 mx-auto mb-4 animate-bounce" />
          <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent mb-4">
            Why Choose Golden Dreams Agency?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: "Licensed & Authorized", desc: "Government approved agency with all necessary certifications", color: "from-orange-500 to-red-600" },
            { icon: Clock, title: "9+ Years Experience", desc: "Proven track record of successful placements since 2016", color: "from-green-600 to-emerald-700" },
            { icon: Globe, title: "Global Network", desc: "Strong connections in India, Saudi Arabia, and Middle East", color: "from-blue-600 to-indigo-700" },
            { icon: Users, title: "10,000+ Placements", desc: "Successfully placed thousands of candidates worldwide", color: "from-purple-600 to-pink-600" },
            { icon: CheckCircle, title: "100% Support", desc: "Complete assistance from visa to employment", color: "from-yellow-600 to-orange-600" },
            { icon: Star, title: "Quality Assurance", desc: "Verified and screened candidates for all positions", color: "from-teal-600 to-cyan-700" },
            { icon: Heart, title: "Hajj & Umrah", desc: "Special packages for religious pilgrimages", color: "from-pink-600 to-red-600" },
            { icon: TrendingUp, title: "Career Growth", desc: "Opportunities for professional development", color: "from-indigo-600 to-purple-700" }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 border-2 border-gray-100">
              <div className={`bg-gradient-to-r ${feature.color} w-10 h-10 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto`}>
                <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h4 className="font-bold text-xl text-gray-800 mb-3 text-center">{feature.title}</h4>
              <p className="text-gray-600 text-center leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section with Tricolor Theme */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-100 via-white to-green-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Phone className="w-20 h-20 text-orange-600 mx-auto mb-4 animate-bounce" />
            <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent mb-4">
              Get In Touch With Us
            </h2>
            <div className="flex justify-center space-x-2">
              <div className="w-24 h-1 bg-orange-500 rounded"></div>
              <div className="w-24 h-1 bg-white rounded"></div>
              <div className="w-24 h-1 bg-green-600 rounded"></div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-orange-200">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-orange-600 via-white to-green-700 p-12 text-white">
                  <h3 className="text-xl md:text-3xl font-bold mb-8 text-gray-800">Contact Information</h3>

                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-white p-3 rounded-xl shadow-lg">
                        <MapPin className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-800 mb-1">Our Office</h4>
                        <p className="text-gray-700">Al-Olaya district, Riyadh, KSA</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-white p-3 rounded-xl shadow-lg">
                        <Phone className="w-6 h-6 text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-800 mb-1">Phone</h4>
                        <p className="text-gray-700">+966 508021982</p>
                        <p className="text-gray-700">+966 574003927</p>
                        <p className="text-gray-700">Available 24/7 for inquiries</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-white p-3 rounded-xl shadow-lg">
                        <FaWhatsapp className="w-6 h-6 text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-800 mb-1">WhatsApp</h4>
                        <p className="text-gray-700"><a href="https://wa.me/+918143190670" className="hover:underline transition-all duration-200">+91 8143190670 - SHAIK IMRAN AHMED</a></p>
                        <p className="text-gray-700"><a href="https://wa.me/+918712246509" className="hover:underline transition-all duration-200">+91 8712246509 - RAFI AHMED</a></p>
                        <p className="text-gray-700">Available 24/7 for inquiries</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-white p-3 rounded-xl shadow-lg">
                        <Mail className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-800 mb-1">Email</h4>
                        <p className="text-gray-700">
                          <a href="mailto:dreamsagolden@gmail.com">dreamsagolden@gmail.com</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-white p-3 rounded-xl shadow-lg">
                        <Globe className="w-6 h-6 text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-800 mb-1">Working Hours</h4>
                        <p className="text-gray-700">Monday - Saturday: 9 AM - 7 PM</p>
                        <p className="text-gray-700">Sunday: By Appointment</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-12 bg-gradient-to-br from-green-50 to-emerald-50">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us A Message</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-xl border-2 border-green-200 focus:border-green-500 focus:outline-none transition"
                    />
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition"
                    />
                    <select className="w-full px-4 py-3 rounded-xl border-2 border-green-200 focus:border-green-500 focus:outline-none transition">
                      <option>Select Service</option>
                      <option>Hajj Package</option>
                      <option>Umrah Package</option>
                      <option>Job Recruitment</option>
                      <option>Visa Assistance</option>
                      <option>Other Services</option>
                    </select>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition"
                    ></textarea>
                    <button 
                      onClick={handleClick}
                      className="w-full bg-gradient-to-r from-orange-600 to-green-700 text-white font-bold py-2 md:py-3 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block bg-gradient-to-r from-orange-600 via-white to-green-700 p-1 rounded-2xl shadow-2xl">
                <div className="bg-white px-8 py-6 rounded-2xl">
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <Shield className="w-8 h-8 text-orange-600" />
                    <h4 className="text-xl md:text-2xl font-bold text-gray-800">Government Authorized</h4>
                  </div>
                  <p className="text-sm text-gray-600 font-semibold">
                    Licensed Travel Agency • Ministry of Tourism Approved
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Registered & Certified by Government of India
                  </p>
                  <div className="mt-4 flex justify-center space-x-4">
                    <div className="bg-orange-100 px-4 py-2 rounded-lg">
                      <p className="text-xs md:font-bold text-orange-700">IATA Certified</p>
                    </div>
                    <div className="bg-green-100 px-4 py-2 rounded-lg">
                      <p className="text-xs md:font-bold text-green-700">ISO Certified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Tricolor */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="text-center flex flex-col items-center">
              <div className="mb-4">
                <h3 className="text-center text-base sm:text-lg md:text-2xl font-bold tracking-wide
                             bg-gradient-to-r from-yellow-300 via-yellow-200 to-white
                             bg-clip-text text-transparent leading-tight">Golden Dreams Agency</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for travel and recruitment services between India and Saudi Arabia for over 9 years.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4 text-orange-400">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Our Services</a></li>
                <li><a href="#mission" className="text-gray-400 hover:text-white transition">Our Mission</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-white transition">Gallery</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4 text-green-400">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Hajj Packages</li>
                <li className="text-gray-400">Umrah Packages</li>
                <li className="text-gray-400">Job Recruitment</li>
                <li className="text-gray-400">Visa Processing</li>
                <li className="text-gray-400">Travel Assistance</li>
              </ul>
            </div>

            <div className="text-center">
              <h4 className="font-bold text-xl mb-4 text-yellow-400">Connect With Us</h4>

              <div className="space-y-3 flex flex-col items-center">
                <div className="flex items-center space-x-3 justify-center">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-400"><a href="mailto:dreamsagolden@gmail.com">dreamsagolden@gmail.com</a></span>
                </div>

                <div className="flex items-center space-x-3 justify-center">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">+966 508021982</span>
                </div>

                <div className="flex items-center space-x-3 justify-center">
                  <FaWhatsapp className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">
                    <a href="https://wa.me/+918143190670">+91 8143190670</a>
                  </span>
                </div>

                <div className="flex items-center space-x-3 justify-center">
                  <Instagram className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">
                    <a href="https://www.instagram.com/immu89600?utm_source=qr&igsh=MXEzeHlsZ3NlangyZw%3D%3D">
                      Golden Dreams Agency
                    </a>
                  </span>
                </div>

                <div className="flex items-center space-x-3 justify-center">
                  <Facebook className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">
                    <a href="https://www.facebook.com/imran.ahmed.113044?rdid=zg0JXql4BRIx7MW3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BmJ8Ev8Mx%2F#">
                      Golden Dreams Agency
                    </a>
                  </span>
                </div>

                <div className="flex items-center space-x-3 justify-center">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-400">India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col items-center justify-between space-y-4">
              <p className="text-gray-400 text-center">
                © 2025 Golden Dreams Agency. All Rights Reserved. | Licensed Travel & Recruitment Agency
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={indianFlagSvg}
                  alt="India"
                  className="w-12 h-8 object-cover rounded shadow-lg"
                />
                <span className="text-orange-400 font-bold">🤝</span>
                <img
                  src={saudiArabiaFlagSvg}
                  alt="Saudi Arabia"
                  className="w-12 h-8 object-cover rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Tricolor Bar */}
      <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
    </div>
  );
};

export default DayLifeTravels;