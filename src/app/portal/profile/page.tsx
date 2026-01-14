'use client'

import { useSession } from 'next-auth/react'

export default function ProfilePage() {
  const { data: session } = useSession()

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Student Profile</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm max-w-lg">
        <p className="mb-3">
          <strong>Student ID:</strong> {(session?.user as any)?.name}
        </p>
        <p>
          <strong>Full Name:</strong> {(session?.user as any)?.fullName}
        </p>
      </div>
    </>
  )
}
