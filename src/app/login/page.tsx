'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [studentId, setStudentId] = useState('')
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await signIn('credentials', {
      studentId,
      fullName,
      redirect: false
    })

    if (res?.error) {
      setError('Invalid student details')
      setLoading(false)
      return
    }

    router.push('/portal')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Student Portal Login
        </h1>

        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={e => setStudentId(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        {error && (
          <p className="text-red-600 text-sm mb-3 text-center">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          {loading ? 'Signing in…' : 'Login'}
        </button>
      </form>
    </div>
  )
}
