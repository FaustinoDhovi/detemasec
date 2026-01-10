"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  Grid, 
  List, 
  Search, 
  Filter,
  Camera,
  Video,
  Users,
  Building,
  Award,
  ChevronRight,
  Download,
  Share2
} from "lucide-react";

export default function Gallery() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All Photos", icon: Grid, count: 56 },
    { id: "campus", name: "Campus", icon: Building, count: 24 },
    { id: "events", name: "Events", icon: Users, count: 18 },
    { id: "sports", name: "Sports", icon: Award, count: 12 },
    { id: "academic", name: "Academic", icon: Award, count: 16 },
    { id: "facilities", name: "Facilities", icon: Building, count: 8 },
  ];

  const images = [
    { 
      id: 1, 
      url: "https://images.unsplash.com/photo-1523050335392-9befbf527f4c?q=80&w=1200", 
      title: "Main Campus Entrance", 
      description: "Our beautiful campus entrance with modern architecture",
      category: "campus",
      date: "2025-12-15",
      tags: ["architecture", "entrance", "campus"]
    },
    { 
      id: 2, 
      url: "https://images.unsplash.com/photo-1577891729319-f4871c674881?q=80&w=1200", 
      title: "Science Laboratory", 
      description: "Students conducting experiments in our state-of-the-art lab",
      category: "facilities",
      date: "2025-11-20",
      tags: ["science", "lab", "experiment"]
    },
    { 
      id: 3, 
      url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200", 
      title: "Annual Sports Day", 
      description: "Students competing in track and field events",
      category: "sports",
      date: "2025-10-05",
      tags: ["sports", "athletics", "competition"]
    },
    { 
      id: 4, 
      url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200", 
      title: "Library Study Area", 
      description: "Students studying in our modern library facility",
      category: "facilities",
      date: "2025-09-12",
      tags: ["library", "study", "quiet"]
    },
    { 
      id: 5, 
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200", 
      title: "Classroom Session", 
      description: "Interactive learning in Form 4 Mathematics class",
      category: "academic",
      date: "2025-08-25",
      tags: ["classroom", "learning", "mathematics"]
    },
    { 
      id: 6, 
      url: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200", 
      title: "Morning Assembly", 
      description: "Daily assembly with announcements and prayers",
      category: "events",
      date: "2025-07-30",
      tags: ["assembly", "morning", "announcements"]
    },
    { 
      id: 7, 
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", 
      title: "Computer Lab", 
      description: "Students learning ICT skills in computer lab",
      category: "facilities",
      date: "2025-06-18",
      tags: ["computer", "ict", "technology"]
    },
    { 
      id: 8, 
      url: "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?q=80&w=1200", 
      title: "Art Exhibition", 
      description: "Annual student art exhibition showcasing talent",
      category: "events",
      date: "2025-05-22",
      tags: ["art", "exhibition", "creativity"]
    },
  ];

  const filteredImages = selectedCategory === "all" || !selectedCategory 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="flex items-center space-x-2 text-blue-700 hover:text-blue-600 font-semibold"
              >
                <ChevronLeft className="h-5 w-5" />
                <span>Back Home</span>
              </Link>
            </div>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                School Gallery
              </h1>
              <p className="text-sm text-gray-600">Visual Stories from Detema Secondary</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Search className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Filter className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Camera className="h-5 w-5" />
              <span className="font-semibold">Over 500+ Photos & Videos</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Campus <span className="text-yellow-300">Gallery</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Explore our vibrant campus life, modern facilities, and memorable events through photos and videos
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Controls Bar */}
        <div className="mb-8 p-4 bg-white rounded-2xl shadow-sm border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-4 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id === selectedCategory ? null : category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${selectedCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  <category.icon className="h-4 w-4" />
                  <span className="font-medium">{category.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${selectedCategory === category.id ? 'bg-white/20' : 'bg-gray-300'}`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${viewMode === "grid" ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
                >
                  <Grid className="h-5 w-5 text-gray-700" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${viewMode === "list" ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
                >
                  <List className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100 cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                        </span>
                        <div className="flex items-center space-x-2">
                          <button className="p-1.5 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
                            <Download className="h-4 w-4" />
                          </button>
                          <button className="p-1.5 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
                            <Share2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold">{image.title}</h3>
                      <p className="text-sm text-blue-100 mt-1">{image.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{image.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{image.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-gray-500">{image.date}</span>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center space-x-1">
                      <span>View</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="flex">
                  <div className="w-48 h-48 flex-shrink-0">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                      </span>
                      <span className="text-sm text-gray-500">{image.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                    <p className="text-gray-600 mb-4">{image.description}</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-wrap gap-2">
                        {image.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex-1"></div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Download className="h-4 w-4 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Share2 className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-blue-600 text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all hover:shadow-lg">
            Load More Photos
          </button>
        </div>

        {/* Video Section */}
        <section className="mt-20">
          <div className="flex items-center space-x-3 mb-8">
            <Video className="h-8 w-8 text-red-600" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">School Videos</h2>
              <p className="text-gray-600">Watch highlights from recent events</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-l-[20px] border-transparent border-l-white ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">2025 Graduation Ceremony</h3>
                  <p className="text-sm text-gray-600 mb-4">Watch our Form 4 graduates receive their certificates</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Duration: 15:30</span>
                    <span>Dec 15, 2025</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Want Your Photos Featured?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Submit your photos from school events to be featured in our gallery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all">
                Submit Photos
              </button>
              <Link 
                href="/register" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Camera className="h-8 w-8 text-blue-400" />
              <h3 className="text-2xl font-bold">Detema Secondary Gallery</h3>
            </div>
            <p className="text-gray-400 mb-6">Capturing Excellence in Education Since 1990</p>
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