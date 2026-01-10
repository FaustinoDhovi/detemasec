"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Target, 
  Eye, 
  History, 
  BookOpen, 
  Users, 
  Award,
  GraduationCap,
  ChevronLeft,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle
} from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Pursuing the highest standards in education through innovative teaching methods"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Serving Dete with pride and local commitment"
    },
    {
      icon: Award,
      title: "Character Building",
      description: "Developing ethical, responsible, and disciplined citizens"
    },
    {
      icon: Target,
      title: "Holistic Development",
      description: "Balancing academics, sports, arts, and leadership"
    }
  ];

  const milestones = [
    { year: "1990", event: "School Established", description: "Founded to serve Mtuya Township" },
    { year: "2005", event: "Science Block Added", description: "Expanded laboratory facilities" },
    { year: "2015", event: "ICT Integration", description: "Computer lab and digital learning" },
    { year: "2024", event: "Modern Library", description: "State-of-the-art learning resource center" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2 text-blue-700 hover:text-blue-600">
                <ChevronLeft className="h-5 w-5" />
                <span className="font-semibold">Back Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-xl">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Detema Secondary
              </h1>
            </div>
            <Link 
              href="/register" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
              <History className="h-4 w-4" />
              <span className="text-sm font-semibold">Established 1990</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Story</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              For over three decades, Detema Secondary has been shaping minds, building character, 
              and empowering the youth of Dete to reach their full potential.
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-500">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Mtuya Township, Dete</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>2,000+ Students</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-3xl text-white shadow-2xl transform -rotate-1">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="h-8 w-8" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg leading-relaxed opacity-95">
                  To provide a transformative educational experience that combines academic excellence 
                  with character development, preparing students to become ethical leaders and responsible 
                  citizens in a rapidly changing world.
                </p>
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold">
                📍 Since 1990
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Eye className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be Zimbabwe's leading secondary school in academic innovation, student development, 
                and community engagement, recognized for producing graduates who excel in higher education 
                and contribute meaningfully to society.
              </p>
              <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600">
                <p className="text-blue-800 font-medium italic">
                  "Education is not preparation for life; education is life itself."
                </p>
                <p className="text-sm text-blue-600 mt-2">— John Dewey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones that shaped our legacy</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="md:w-1/2"></div>
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2 md:left-0 md:-translate-x-1/2"></div>
                  </div>
                  <div className="md:w-1/2 mt-4 md:mt-0">
                    <div className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                      <div className="flex items-center space-x-3 mb-4">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span className="text-2xl font-bold text-blue-700">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Detema Secondary
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className="inline-flex p-3 bg-blue-100 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-lg font-semibold">Dedicated Staff</div>
              <p className="text-blue-200 mt-2">Qualified and passionate educators</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">30+</div>
              <div className="text-lg font-semibold">Years Experience</div>
              <p className="text-blue-200 mt-2">Educational excellence since 1990</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg font-semibold">Extracurricular Activities</div>
              <p className="text-blue-200 mt-2">Sports, arts, and leadership programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Location</h4>
                      <p className="text-gray-600">Mtuya Township, Dete, Zimbabwe</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+263 772 621 693</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@detema.edu.zw</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Hours</h4>
                      <p className="text-gray-600">Mon-Fri: 7:30 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <h3 className="text-2xl font-bold">Detema Secondary School</h3>
            </div>
            <p className="text-gray-400 mb-6">"Education is the key to Success"</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Return to Home</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}