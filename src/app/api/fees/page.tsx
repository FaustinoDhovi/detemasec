// src/app/fees/page.tsx
'use client'

import { useState } from 'react'

interface Transaction {
  transactionId: string
  transactionDate: string
  transactionType: string
  amount: number
  description: string
  receiptNumber: string
  verified: boolean
}

interface StudentData {
  studentId: string
  fullName: string
  totalFees: number
  amountPaid: number
  balance: number
  course: string
  yearOfStudy: string
}

export default function FeesPage() {
  const [studentId, setStudentId] = useState('')
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [studentData, setStudentData] = useState<StudentData | null>(null)
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const handleCheckFees = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setStudentData(null)
    setTransactions([])

    try {
      const response = await fetch('/api/fees/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentId, fullName }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch data')
      }

      setStudentData(data.student)
      setTransactions(data.transactions)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Check Your Fees Balance</h1>
      
      <form onSubmit={handleCheckFees} className="max-w-md mb-8">
        <div className="mb-4">
          <label className="block mb-2 font-medium">Student ID</label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter your Student ID"
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block mb-2 font-medium">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter your Full Name"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? 'Checking...' : 'Check Balance'}
        </button>
      </form>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {studentData && (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Student Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Student ID:</p>
              <p>{studentData.studentId}</p>
            </div>
            <div>
              <p className="font-medium">Name:</p>
              <p>{studentData.fullName}</p>
            </div>
            <div>
              <p className="font-medium">Course:</p>
              <p>{studentData.course}</p>
            </div>
            <div>
              <p className="font-medium">Year of Study:</p>
              <p>{studentData.yearOfStudy}</p>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-medium text-gray-600">Total Fees</p>
              <p className="text-2xl font-bold">${studentData.totalFees?.toLocaleString() || '0'}</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <p className="font-medium text-green-600">Amount Paid</p>
              <p className="text-2xl font-bold text-green-700">
                ${studentData.amountPaid?.toLocaleString() || '0'}
              </p>
            </div>
            <div className={`p-4 rounded ${
              studentData.balance > 0 ? 'bg-red-50' : 'bg-green-50'
            }`}>
              <p className="font-medium">Current Balance</p>
              <p className={`text-2xl font-bold ${
                studentData.balance > 0 ? 'text-red-700' : 'text-green-700'
              }`}>
                ${studentData.balance?.toLocaleString() || '0'}
              </p>
              {studentData.balance > 0 && (
                <p className="text-sm text-red-600 mt-1">
                  Payment required
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {transactions.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Date</th>
                  <th className="text-left py-2">Type</th>
                  <th className="text-left py-2">Description</th>
                  <th className="text-left py-2">Amount</th>
                  <th className="text-left py-2">Receipt</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.transactionId} className="border-b">
                    <td className="py-2">
                      {new Date(transaction.transactionDate).toLocaleDateString()}
                    </td>
                    <td className="py-2">
                      <span className={`px-2 py-1 rounded text-sm ${
                        transaction.transactionType === 'payment' 
                          ? 'bg-green-100 text-green-800'
                          : transaction.transactionType === 'charge'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {transaction.transactionType}
                      </span>
                    </td>
                    <td className="py-2">{transaction.description}</td>
                    <td className="py-2 font-medium">
                      ${transaction.amount.toLocaleString()}
                    </td>
                    <td className="py-2">
                      {transaction.receiptNumber || 'N/A'}
                    </td>
                    <td className="py-2">
                      <span className={`px-2 py-1 rounded text-sm ${
                        transaction.verified
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {transaction.verified ? 'Verified' : 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}