"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  Filter, 
  Search, 
  ChevronLeft,
  Camera,
  Trophy,
  Users,
  BookOpen
} from "lucide-react";

// Types for news items
interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  images: string[];
  content: string;
}

export default function NewsPage() {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  
  const newsCategories = [
    { id: "all", label: "All News", count: 24 },
    { id: "sports", label: "Sports", icon: Trophy },
    { id: "academic", label: "Academic", icon: BookOpen },
    { id: "events", label: "Events", icon: Users },
    { id: "achievements", label: "Achievements", icon: Trophy },
  ];

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Annual Sports Day 2026",
      description: "Students showcased exceptional talent in athletics, football, and netball competitions.",
      date: "March 15, 2026",
      category: "sports",
      images: [
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200",
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84f?q=80&w=1200",
        "https://images.unsplash.com/photo-1532974297617-c0f05fa48a5b?q=80&w-1200"
      ],
      content: "The annual sports day was held with great enthusiasm..."
    },
    {
      id: 2,
      title: "National Cleanup Campaign",
      description: "Students participated in cleaning Mtuya Township as part of national environmental day.",
      date: "March 10, 2026",
      category: "events",
      images: [
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200",
        "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1200"
      ],
      content: "Over 500 students participated in the cleanup..."
    },
    // Add more news items here
  ];

  const filteredNews = newsItems.filter(item => {
    if (filter !== "all" && item.category !== filter) return false;
    if (search && !item.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-blue-700 hover:text-blue-600">
              <ChevronLeft className="h-5 w-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              News & Events
            </h1>
            <div className="w-24"></div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Filter and Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="flex flex-wrap gap-2">
              {newsCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                    filter === cat.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.icon && <cat.icon className="h-4 w-4" />}
                  <span>{cat.label}</span>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search news..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.date}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {item.category.toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center space-x-1">
                    <Camera className="h-4 w-4" />
                    <span>{item.images.length} photos</span>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <Link 
                    href={`/news/${item.id}`}
                    className="text-blue-700 hover:text-blue-800 font-semibold"
                  >
                    Read Full Story →
                  </Link>
                  <Link 
                    href="/gallery"
                    className="text-gray-600 hover:text-gray-800 text-sm flex items-center space-x-1"
                  >
                    <Camera className="h-4 w-4" />
                    <span>View Gallery</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}