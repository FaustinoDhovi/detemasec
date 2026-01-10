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
  FileText, 
  Settings, 
  LogOut, 
  MessageSquare, 
  TrendingUp, 
  BarChart, 
  AlertCircle,
  Lock
} from "lucide-react";

export default function StudentPortal() {
  // Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginName, setLoginName] = useState("");
  const [loginId, setLoginId] = useState("");
  const [loginError, setLoginError] = useState("");

  // Dashboard State
  const [activeTab, setActiveTab] = useState("dashboard");
  const [notifications] = useState(3);

  // Mock Data (Later this will come from Sanity)
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
    { id: 1, title: "Term 1 Exams Schedule", description: "Examination timetable for Term 1 has been released.", date: "2026-02-10", priority: "high" },
    { id: 2, title: "Sports Day Postponed", description: "Annual Sports Day rescheduled to March 15, 2026.", date: "2026-02-08", priority: "medium" },
    { id: 3, title: "Library Opening Hours", description: "Extended library hours during exam period.", date: "2026-02-05", priority: "low" },
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

  // Login Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginName === user.name && loginId === user.studentId) {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid Name or Student ID. Please check your credentials.");
    }
  };

  // 1. LOGIN VIEW
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border-t-8 border-blue-700">
          <div className="text-center mb-8">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-blue-700" size={28} />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Student Login</h1>
            <p className="text-gray-500 text-sm">Access the Detema Secondary Portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="e.g. Tendai Moyo"
                  value={loginName}
                  onChange={(e) => setLoginName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1 ml-1">Student ID</label>
              <div className="relative">
                <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="e.g. DET2026-001"
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                  required
                />
              </div>
            </div>

            {loginError && (
              <div className="flex items-center gap-2 text-red-600 text-xs font-medium bg-red-50 p-3 rounded-lg border border-red-100">
                <AlertCircle size={14} /> {loginError}
              </div>
            )}

            <button type="submit" className="w-full bg-blue-700 text-white font-bold py-3 rounded-xl hover:bg-blue-800 transition-colors shadow-lg uppercase tracking-wider text-sm">
              Sign In
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <Link href="/" className="text-sm text-gray-400 hover:text-blue-600 transition-colors">← Back to School Website</Link>
          </div>
        </div>
      </div>
    );
  }

  // 2. DASHBOARD VIEW (Visible after login)
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
              <p className="text-xs text-gray-600">Logged in as {user.name}</p>
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
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="h-5 w-5 text-gray-700" />
              </button>
              <button onClick={() => setIsLoggedIn(false)} className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                <LogOut className="h-5 w-5 text-red-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
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
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Welcome back, {user.name}!</h2>
                      <p className="text-blue-100">Here's your academic summary for today.</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">Day 45</div>
                      <div className="text-sm text-blue-200">of Term 1</div>
                    </div>
                  </div>
                </div>

                {/* Academic Performance */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Subject Progress</h3>
                  <div className="space-y-4">
                    {subjects.map((subject, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center font-bold">
                            {subject.grade}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{subject.name}</h4>
                            <p className="text-sm text-gray-600">{subject.teacher}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500" style={{ width: `${subject.progress}%` }}></div>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{subject.progress}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Announcements */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <Bell className="h-6 w-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">Announcements</h3>
                    </div>
                    <div className="space-y-4">
                      {announcements.map((ann) => (
                        <div key={ann.id} className="p-4 border border-gray-100 rounded-xl">
                          <h4 className="font-bold text-sm text-gray-900">{ann.title}</h4>
                          <p className="text-xs text-gray-500 mb-1">{ann.date}</p>
                          <p className="text-sm text-gray-600">{ann.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Downloads */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <Download className="h-6 w-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">Resources</h3>
                    </div>
                    <div className="grid gap-3">
                      {downloads.map((doc, idx) => (
                        <button key={idx} className="flex items-center justify-between p-3 border rounded-xl hover:bg-blue-50 transition-colors group">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-blue-600" />
                            <div className="text-left">
                              <p className="text-sm font-bold text-gray-800">{doc.title}</p>
                              <p className="text-[10px] text-gray-400 uppercase font-bold">{doc.size}</p>
                            </div>
                          </div>
                          <Download className="h-4 w-4 text-gray-300 group-hover:text-blue-600" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "academics" && (
               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Information</h3>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <p className="text-blue-800">Your full academic transcript will be available here at the end of Term 1.</p>
                </div>
               </div>
            )}
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">Detema Secondary Student Portal v3.0</p>
          <p className="text-xs text-gray-600 mt-1">© 2026 Detema Secondary. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}