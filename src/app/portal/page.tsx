"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  BookOpen, 
  Calendar, 
  Download, 
  Bell, 
  User,
  Clock,
  FileText,
  Settings,
  LogOut,
  Search,
  MessageSquare,
  Award,
  TrendingUp,
  BarChart,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function StudentPortal() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [notifications, setNotifications] = useState(3);

  const user = {
    name: "Tendai Moyo",
    grade: "Form 4",
    studentId: "DET2026-001",
    avatar: "TM",
    attendance: "98%",
    performance: "A-"
  };

  const subjects = [
    { name: "Mathematics", teacher: "Mr. Ndlovu", grade: "A", progress: 90 },
    { name: "English Language", teacher: "Mrs. Sibanda", grade: "B+", progress: 85 },
    { name: "Science", teacher: "Mr. Khumalo", grade: "A-", progress: 88 },
    { name: "History", teacher: "Ms. Moyo", grade: "B", progress: 82 },
    { name: "Geography", teacher: "Mr. Ncube", grade: "A", progress: 92 },
    { name: "ICT", teacher: "Mrs. Dube", grade: "A+", progress: 95 },
  ];

  const announcements = [
    {
      id: 1,
      title: "Term 1 Exams Schedule",
      description: "Examination timetable for Term 1 has been released.",
      date: "2026-02-10",
      priority: "high"
    },
    {
      id: 2,
      title: "Sports Day Postponed",
      description: "Annual Sports Day rescheduled to March 15, 2026.",
      date: "2026-02-08",
      priority: "medium"
    },
    {
      id: 3,
      title: "Library Opening Hours",
      description: "Extended library hours during exam period.",
      date: "2026-02-05",
      priority: "low"
    },
  ];

  const downloads = [
    { title: "2026 Term 1 Calendar", type: "PDF", size: "1.2 MB" },
    { title: "School Uniform Guidelines", type: "PDF", size: "800 KB" },
    { title: "Stationery Requirements", type: "PDF", size: "500 KB" },
    { title: "Examination Rules", type: "PDF", size: "600 KB" },
  ];

  const upcomingEvents = [
    { date: "2026-02-15", title: "Mathematics Olympiad", time: "9:00 AM" },
    { date: "2026-02-20", title: "Parent-Teacher Meeting", time: "2:00 PM" },
    { date: "2026-02-25", title: "Science Fair", time: "10:00 AM" },
    { date: "2026-03-01", title: "Term 1 Exams Begin", time: "8:00 AM" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2 text-blue-700 hover:text-blue-600">
                <ChevronLeft className="h-5 w-5" />
                <span className="font-semibold">Back to Home</span>
              </Link>
            </div>
            
            <div className="text-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Student Portal
              </h1>
              <p className="text-xs text-gray-600">Welcome back, {user.name}</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="h-5 w-5 text-gray-700" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="h-5 w-5 text-gray-700" />
              </button>
              <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <LogOut className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Layout */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
              {/* User Profile */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {user.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-600">{user.grade}</p>
                  <p className="text-xs text-gray-500">ID: {user.studentId}</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-blue-700">{user.attendance}</div>
                  <div className="text-xs text-blue-600 font-medium">Attendance</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-green-700">{user.performance}</div>
                  <div className="text-xs text-green-600 font-medium">Performance</div>
                </div>
              </div>

              {/* Navigation Menu */}
              <nav className="space-y-2">
                {[
                  { id: "dashboard", label: "Dashboard", icon: BarChart },
                  { id: "academics", label: "Academics", icon: BookOpen },
                  { id: "timetable", label: "Timetable", icon: Calendar },
                  { id: "resources", label: "Resources", icon: FileText },
                  { id: "messages", label: "Messages", icon: MessageSquare },
                  { id: "fees", label: "Fees", icon: TrendingUp },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all ${activeTab === item.id ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <Link href="/fees" className="flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors">
                  <span>Check Fees Balance</span>
                  <ChevronLeft className="h-4 w-4 transform rotate-180" />
                </Link>
                <Link href="/register" className="flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors">
                  <span>Update Information</span>
                  <ChevronLeft className="h-4 w-4 transform rotate-180" />
                </Link>
                <button className="w-full flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors">
                  <span>Download Report</span>
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                {/* Welcome Card */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Welcome back, {user.name}!</h2>
                      <p className="text-blue-100">Here's what's happening with your education today.</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">Day 45</div>
                      <div className="text-sm text-blue-200">of Term 1</div>
                    </div>
                  </div>
                </div>

                {/* Academic Performance */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Academic Performance</h3>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center space-x-1">
                      <span>View Details</span>
                      <ChevronLeft className="h-4 w-4 transform rotate-180" />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {subjects.map((subject, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${subject.grade === 'A+' ? 'bg-green-100 text-green-800' : subject.grade.startsWith('A') ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            <span className="font-bold">{subject.grade}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{subject.name}</h4>
                            <p className="text-sm text-gray-600">{subject.teacher}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${subject.progress > 90 ? 'bg-green-500' : subject.progress > 80 ? 'bg-blue-500' : 'bg-yellow-500'}`}
                              style={{ width: `${subject.progress}%` }}
                            ></div>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{subject.progress}% progress</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Announcements */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <Bell className="h-6 w-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">Announcements</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {announcements.map((announcement) => (
                        <div key={announcement.id} className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              {announcement.priority === "high" ? (
                                <AlertCircle className="h-4 w-4 text-red-500" />
                              ) : announcement.priority === "medium" ? (
                                <AlertCircle className="h-4 w-4 text-yellow-500" />
                              ) : (
                                <AlertCircle className="h-4 w-4 text-blue-500" />
                              )}
                              <h4 className="font-bold text-gray-900">{announcement.title}</h4>
                            </div>
                            <span className="text-xs text-gray-500">{announcement.date}</span>
                          </div>
                          <p className="text-sm text-gray-600">{announcement.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Events */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <Calendar className="h-6 w-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">Upcoming Events</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                          <div>
                            <h4 className="font-bold text-gray-900">{event.title}</h4>
                            <p className="text-sm text-gray-600">{event.time}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-blue-700">{event.date.split('-')[2]}</div>
                            <div className="text-xs text-gray-500">
                              {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Downloads */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <Download className="h-6 w-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">Downloads</h3>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                      View All
                    </button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {downloads.map((doc, index) => (
                      <button key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FileText className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="text-left">
                            <h4 className="font-bold text-gray-900 group-hover:text-blue-700">{doc.title}</h4>
                            <p className="text-xs text-gray-500">{doc.type} • {doc.size}</p>
                          </div>
                        </div>
                        <Download className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "academics" && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Information</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Curriculum Overview</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-blue-50 p-6 rounded-xl">
                        <h5 className="font-bold text-blue-800 mb-2">Form 1-2 (Junior)</h5>
                        <p className="text-sm text-blue-700">Core subjects: English, Mathematics, Sciences, Humanities</p>
                      </div>
                      <div className="bg-green-50 p-6 rounded-xl">
                        <h5 className="font-bold text-green-800 mb-2">Form 3-4 (O-Level)</h5>
                        <p className="text-sm text-green-700">ZIMSEC curriculum with subject specialization</p>
                      </div>
                      <div className="bg-purple-50 p-6 rounded-xl">
                        <h5 className="font-bold text-purple-800 mb-2">A-Level</h5>
                        <p className="text-sm text-purple-700">Arts, Commercials, and Sciences streams</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Detema Secondary Student Portal v3.0</p>
              <p className="text-xs text-gray-500">Secure and confidential</p>
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link href="/" className="text-sm text-gray-400 hover:text-white">Help Center</Link>
              <Link href="/" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link href="/" className="text-sm text-gray-400 hover:text-white">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}