"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  Award, 
  Calendar, 
  ChevronRight, 
  BookOpen,
  Sparkles,
  School,
  Newspaper,
  Clock,
  Phone,
  Mail,
  MapPin,
  Target,
  Trophy,
  Building,
  Activity,
  CreditCard,
  Bell,
  Camera
} from "lucide-react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1523050335392-9befbf527f4c?q=80&w=1200",
    "https://images.unsplash.com/photo-1577891729319-f4871c674881?q=80&w=1200",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200",
  ];

  const schoolImages = [
    {
      url: "https://images.unsplash.com/photo-1523050335392-9befbf527f4c?q=80&w=800",
      title: "Main School Building",
      category: "Facilities"
    },
    {
      url: "https://images.unsplash.com/photo-1577891729319-f4871c674881?q=80&w=800",
      title: "Science Laboratory",
      category: "Facilities"
    },
    {
      url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800",
      title: "Sports Day",
      category: "Activities"
    },
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
      title: "Classroom Learning",
      category: "Academic"
    },
  ];

  const news = [
    {
      date: "Mar 15, 2026",
      title: "Annual Sports Day Success",
      description: "Students showcased exceptional talent in athletics, football, and netball competitions.",
      category: "Sports",
      color: "bg-red-100 text-red-800",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800"
    },
    {
      date: "Mar 10, 2026",
      title: "National Cleanup Campaign",
      description: "Students participated in cleaning Mtuya Township as part of national environmental day.",
      category: "Events",
      color: "bg-green-100 text-green-800",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800"
    },
    {
      date: "Mar 05, 2026",
      title: "2025 Prize Giving Ceremony",
      description: "Academic excellence awards ceremony for outstanding students from last year.",
      category: "Achievements",
      color: "bg-yellow-100 text-yellow-800",
      image: "https://images.unsplash.com/photo-1535982337055-9dd0cdf1b59d?q=80&w=800"
    },
    {
      date: "Jan 10, 2026",
      title: "2026 Form 1 Admissions Open",
      description: "Registration for new Form 1 students is now officially open. Apply through our portal.",
      category: "Admissions",
      color: "bg-blue-100 text-blue-800",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800"
    },
  ];

  // Hero image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Modern Header with Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-blue-600">
                <Image
                  src="/logo.png"
                  alt="Detema Secondary School Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Detema Secondary School
                </h1>
                <p className="text-xs text-gray-600">Excellence in Secondary Education</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-blue-700 font-semibold hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors">
                Gallery
              </Link>
              <Link href="/portal" className="text-gray-700 hover:text-blue-600 transition-colors">
                Portal
              </Link>
              <Link href="/fees" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1">
                <CreditCard className="h-4 w-4" />
                <span>Fees</span>
              </Link>
              <Link 
                href="/register" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
              >
                Apply Now
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Large Logo */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
              style={{
                backgroundImage: `url(${heroImages[currentImageIndex]})`,
                opacity: 0.2
              }}
            />
          </div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-yellow-300" />
                <span className="text-sm font-semibold text-white">Established 1984</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Quality Secondary
                <span className="block text-yellow-300">Education</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-10">
                A leading secondary school in Dete, Zimbabwe, committed to academic excellence, 
                character development, and preparing students for Form 4 and Form 6 examinations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/register" 
                  className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <span>Start Application</span>
                  <ChevronRight className="h-5 w-5" />
                </Link>
                <Link 
                  href="/fees" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Pay Fees</span>
                </Link>
              </div>
            </div>

            {/* Large Logo with Motto */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white p-6 shadow-lg">
                  <Image
                    src="/logo.png"
                    alt="Detema Secondary School Logo with Motto"
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>
                <div className="mt-8 text-center">
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                    <p className="text-lg font-bold text-white italic">"Excellence in Education"</p>
                    <p className="text-sm text-blue-100 mt-1">Our School Motto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "2,000+", label: "Students", color: "text-blue-600" },
              { icon: Trophy, value: "95%", label: "Pass Rate", color: "text-green-600" },
              { icon: School, value: "Forms 1-6", label: "All Forms", color: "text-purple-600" },
              { icon: Calendar, value: "2026", label: "Academic Year", color: "text-orange-600" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 border border-gray-100 text-center"
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 bg-opacity-10 ${stat.color}`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions Section with Fees Highlight */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Access</h2>
            <p className="text-gray-600">Important links for students and parents</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="/fees" 
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <CreditCard className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">Fees Payment</h3>
                  <p className="text-sm text-gray-600">Check balance & pay fees</p>
                </div>
              </div>
            </Link>
            
            <Link 
              href="/register" 
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <School className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">Apply Now</h3>
                  <p className="text-sm text-gray-600">2026 admissions open</p>
                </div>
              </div>
            </Link>
            
            <Link 
              href="/portal" 
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">Student Portal</h3>
                  <p className="text-sm text-gray-600">Resources & information</p>
                </div>
              </div>
            </Link>
            
            <Link 
              href="/gallery" 
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <Camera className="h-8 w-8 text-red-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">School Gallery</h3>
                  <p className="text-sm text-gray-600">Photos & events</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* School Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Detema?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide quality secondary education that prepares students for success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Excellence",
                description: "Comprehensive curriculum aligned with ZIMSEC standards for Forms 1-6",
                icon: BookOpen,
                color: "blue"
              },
              {
                title: "Modern Facilities",
                description: "Well-equipped laboratories, libraries, and sports facilities for all students",
                icon: Building,
                color: "green"
              },
              {
                title: "Holistic Development",
                description: "Focus on discipline, ethics, sports, and community values",
                icon: Activity,
                color: "purple"
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className={`inline-flex p-3 rounded-xl bg-${feature.color}-100 mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events Section with Images */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">News & Events</h2>
              <p className="text-gray-600 mt-2">Latest happenings at our school</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/fees" 
                className="flex items-center space-x-2 text-blue-700 font-semibold hover:text-blue-600"
              >
                <CreditCard className="h-5 w-5" />
                <span>Fee Updates</span>
              </Link>
              <Link 
                href="/gallery" 
                className="flex items-center space-x-2 text-blue-700 font-semibold hover:text-blue-600"
              >
                <span>All Events</span>
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                {/* Event Image */}
                {item.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.color}`}>
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <Link 
                      href="/gallery" 
                      className="inline-flex items-center space-x-2 text-blue-700 font-semibold text-sm"
                    >
                      <Camera className="h-4 w-4" />
                      <span>View Photos</span>
                    </Link>
                    {item.category === "Admissions" && (
                      <Link 
                        href="/fees" 
                        className="text-sm text-gray-600 hover:text-blue-700"
                      >
                        Fee Details →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Gallery Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">School Life</h2>
              <p className="text-gray-600 mt-2">Experience our vibrant school community</p>
            </div>
            <Link 
              href="/gallery" 
              className="flex items-center space-x-2 text-blue-700 font-semibold hover:text-blue-600"
            >
              <span>View All Photos</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {schoolImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6 text-white">
                    <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      {image.category}
                    </span>
                    <h4 className="text-lg font-bold mt-2">{image.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Fees Emphasis */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Join Our School?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Applications for Form 1 and other forms are now open for the 2026 academic year.
                  Check our fee structure and payment options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/register" 
                    className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Apply Now</span>
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="/fees" 
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
                  >
                    <CreditCard className="h-5 w-5" />
                    <span>View Fee Structure</span>
                  </Link>
                  <Link 
                    href="/portal" 
                    className="bg-white/10 border-2 border-white/50 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
                  >
                    <BookOpen className="h-5 w-5" />
                    <span>Student Portal</span>
                  </Link>
                </div>
              </div>
              
              {/* Fees Information Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
                <div className="flex items-center space-x-3 mb-4">
                  <CreditCard className="h-8 w-8 text-yellow-300" />
                  <h3 className="text-xl font-bold text-white">Fee Information</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <p className="text-sm text-blue-200">Form 1-4 (per term)</p>
                    <p className="text-2xl font-bold text-white">$70.00</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <p className="text-sm text-blue-200">Form 5-6 (per term)</p>
                    <p className="text-2xl font-bold text-white">$85.00</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <p className="text-sm text-blue-200">Payment Methods</p>
                    <p className="text-sm text-white">EcoCash, Bank Transfer, Cash</p>
                  </div>
                </div>
                <Link 
                  href="/fees" 
                  className="mt-6 block w-full bg-white text-blue-700 py-3 rounded-lg font-bold text-center hover:bg-blue-50 transition-colors"
                >
                  Check Balance & Pay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-14 h-14 rounded-lg overflow-hidden border-2 border-white">
                  <Image
                    src="/logo.png"
                    alt="Detema Secondary School Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Detema Secondary School</h3>
                  <p className="text-sm text-gray-400">Established 1984</p>
                </div>
              </div>
              <p className="text-gray-400">
                A leading secondary school in Dete, Zimbabwe, providing quality education 
                to Forms 1-6 students for over 40 years.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["About Us", "Gallery", "Admissions", "Student Portal", "Fees", "Contact"].map((link) => (
                  <li key={link}>
                    <Link 
                      href={`/${link.toLowerCase().replace(' ', '-').replace('student-portal', 'portal')}`} 
                      className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                    >
                      {link === "Fees" && <CreditCard className="h-4 w-4" />}
                      <span>{link}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Resources</h4>
              <ul className="space-y-3">
                {["Fee Structure", "Academic Calendar", "School Rules", "Downloads", "FAQs", "Career Guidance"].map((link) => (
                  <li key={link}>
                    <Link 
                      href={link === "Fee Structure" ? "/fees" : "/portal"} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">Mtuya Township, Dete, Zimbabwe</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">+263 772 621 693</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">info@detema.edu.zw</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">Mon-Fri: 7:30 AM - 4:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-24 h-24">
                <Image
                  src="/logo.png"
                  alt="Detema Secondary School Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Detema Secondary School. All rights reserved.
                </p>
                <p className="text-lg text-yellow-300 italic font-bold mt-2">"Excellence in Education"</p>
                <div className="mt-4 flex justify-center space-x-6">
                  <Link href="/fees" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    📋 Fee Structure
                  </Link>
                  <Link href="/register" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    📝 Apply Online
                  </Link>
                  <Link href="/gallery" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    📸 School Events
                  </Link>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  "Education is the most powerful weapon which you can use to change the world." — Nelson Mandela
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}