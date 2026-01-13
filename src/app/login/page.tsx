'use client'

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [studentId, setStudentId] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // REMOVE ALL SPACES: "Lee Abel Dzitiro" becomes "leeabeldzitiro"
    const formattedId = studentId.trim().toUpperCase();
    const cleanNameForLogin = fullName.replace(/\s+/g, '').toLowerCase();

    const result = await signIn('credentials', {
      studentId: formattedId,
      fullName: cleanNameForLogin, 
      redirect: false,
    });

    if (result?.error) {
      setError('Student not found. Check your ID and ensure you typed your full name.');
      setLoading(false);
    } else {
      router.push('/portal/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Detema Secondary</h1>
          <p className="text-gray-500 mt-2">Fees Portal Login</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. LeeAbelDzitiro"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
            <input
              type="text"
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="DET-2026-001"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 uppercase"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm font-medium bg-red-50 p-2 rounded">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-3 rounded-lg transition`}
          >
            {loading ? 'Verifying...' : 'Login to Check Fees'}
          </button>
        </form>
      </div>
    </div>
  );
}