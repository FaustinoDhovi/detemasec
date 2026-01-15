'use client'

import { Home, Users, DollarSign, FileText, User, Bell, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

export function MobileNav() {
  const pathname = usePathname()
  const [showNotifications, setShowNotifications] = useState(false)

  const navItems = [
    { href: '/dashboard', icon: Home, label: 'Home' },
    { href: '/students', icon: Users, label: 'Students' },
    { href: '/fees', icon: DollarSign, label: 'Fees' },
    { href: '/reports', icon: FileText, label: 'Reports' },
    { href: '/profile', icon: User, label: 'Profile' },
  ]

  const notifications = [
    { id: 1, title: 'Fee Payment Due', message: '5 students have overdue fees', time: '2 hours ago' },
    { id: 2, title: 'New Student', message: 'John Doe has been registered', time: '1 day ago' },
    { id: 3, title: 'System Update', message: 'Maintenance scheduled for Sunday', time: '2 days ago' },
  ]

  return (
    <>
      {/* Mobile Navigation Bar */}
      <nav className="mobile-nav md:hidden">
        <div className="flex justify-around items-center h-16 safe-area-bottom">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center touch-target ${
                  isActive ? 'text-green-700' : 'text-gray-600'
                }`}
              >
                <item.icon size={22} />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            )
          })}
          
          {/* Notifications Bell */}
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="flex flex-col items-center justify-center touch-target relative"
          >
            <Bell size={22} className="text-gray-600" />
            <span className="text-xs mt-1">Alerts</span>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              {notifications.length}
            </span>
          </button>
        </div>
      </nav>

      {/* Notifications Panel */}
      {showNotifications && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowNotifications(false)}
          />
          
          {/* Notifications Panel */}
          <div className="absolute bottom-16 left-0 right-0 bg-white rounded-t-2xl max-h-[60vh] overflow-hidden">
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <button 
                onClick={() => setShowNotifications(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Menu size={20} />
              </button>
            </div>
            
            <div className="overflow-y-auto">
              {notifications.map((notification) => (
                <div key={notification.id} className="p-4 border-b hover:bg-gray-50">
                  <p className="font-medium">{notification.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                </div>
              ))}
              
              {notifications.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  No notifications
                </div>
              )}
            </div>
            
            <div className="p-4 bg-gray-50">
              <button className="w-full text-center text-green-600 font-medium">
                Mark all as read
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}