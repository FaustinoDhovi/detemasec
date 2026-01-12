'use client'

import { useSession } from 'next-auth/react'
import { client } from '@/sanity/lib/client'
import { useState, useEffect } from 'react'

interface Transaction {
  transactionId: string
  amount: number
  transactionType: 'charge' | 'payment'
  transactionDate: string
  notes: string
}

export default function StudentDashboard() {
  const { data: session } = useSession()
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (session?.user?.name) {
      // Fetch all transactions linked to this student ID
      const query = `*[_type == "feeTransaction" && student->studentId == $studentId] | order(transactionDate desc)`
      client.fetch(query, { studentId: session.user.name }).then((data) => {
        setTransactions(data)
        setLoading(setLoading as any) // Safety check
        setLoading(false)
      })
    }
  }, [session])

  // Calculation Logic
  const totalCharges = transactions
    .filter(t => t.transactionType === 'charge')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalPayments = transactions
    .filter(t => t.transactionType === 'payment')
    .reduce((sum, t) => sum + t.amount, 0)

  const balanceDue = totalCharges - totalPayments

  if (loading) return <div className="p-8 text-center">Loading Financial Records...</div>

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Student Fee Portal</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600 font-semibold">Total Invoiced</p>
          <p className="text-2xl font-bold">${totalCharges}</p>
        </div>
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-600 font-semibold">Total Paid</p>
          <p className="text-2xl font-bold">${totalPayments}</p>
        </div>
        <div className="p-4 bg-blue-600 text-white rounded-lg shadow-lg">
          <p className="text-sm font-semibold opacity-90">Outstanding Balance</p>
          <p className="text-3xl font-bold">${balanceDue}</p>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 text-sm font-semibold">Date</th>
              <th className="p-4 text-sm font-semibold">Description</th>
              <th className="p-4 text-sm font-semibold text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.transactionId} className="border-b last:border-0 hover:bg-gray-50">
                <td className="p-4 text-sm">{t.transactionDate}</td>
                <td className="p-4">
                  <p className="text-sm font-medium">{t.notes}</p>
                  <p className="text-xs text-gray-500 uppercase">{t.transactionType}</p>
                </td>
                <td className={`p-4 text-right font-semibold ${t.transactionType === 'payment' ? 'text-green-600' : 'text-gray-900'}`}>
                  {t.transactionType === 'payment' ? '-' : ''}${t.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}