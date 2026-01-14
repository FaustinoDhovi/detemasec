'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'

export default function PortalLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/login')
  }, [status, router])

  if (status === 'loading') return null

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6">
        <h2 className="font-bold text-xl mb-8">Detema Portal</h2>

        <nav className="space-y-4">
          <Link href="/portal" className="block hover:text-blue-600">
            Dashboard
          </Link>
          <Link href="/portal/fees" className="block hover:text-blue-600">
            Fees
          </Link>
          <Link href="/portal/profile" className="block hover:text-blue-600">
            Profile
          </Link>
        </nav>

        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="mt-10 text-sm text-red-600"
        >
          Logout
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
