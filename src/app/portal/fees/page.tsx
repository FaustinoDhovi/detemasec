'use client'

import { useSession } from 'next-auth/react'
import { client } from '@/sanity/lib/client'
import { useEffect, useState } from 'react'

interface Transaction {
  _id: string
  transactionDate: string
  transactionType: 'charge' | 'payment'
  amount: number
  description: string
}

export default function FeesPage() {
  const { data: session } = useSession()
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!session?.user?.name) return

    const query = `
      *[_type == "feeTransaction" && student->studentId == $studentId]
      | order(transactionDate desc) {
        _id,
        transactionDate,
        transactionType,
        amount,
        description
      }
    `

    client
      .fetch(query, { studentId: session.user.name })
      .then(data => {
        setTransactions(data)
        setLoading(false)
      })
  }, [session])

  const totalCharges = transactions
    .filter(t => t.transactionType === 'charge')
    .reduce((a, b) => a + b.amount, 0)

  const totalPayments = transactions
    .filter(t => t.transactionType === 'payment')
    .reduce((a, b) => a + b.amount, 0)

  const balance = totalCharges - totalPayments

  if (loading) return <p>Loading fees…</p>

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Fees Statement</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <SummaryCard label="Total Charges" value={totalCharges} />
        <SummaryCard label="Total Paid" value={totalPayments} />
        <SummaryCard label="Balance Due" value={balance} highlight />
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Date</th>
              <th className="p-4">Description</th>
              <th className="p-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(t => (
              <tr key={t._id} className="border-t">
                <td className="p-4">{t.transactionDate}</td>
                <td className="p-4">{t.description}</td>
                <td
                  className={`p-4 text-right font-semibold ${
                    t.transactionType === 'payment'
                      ? 'text-green-600'
                      : 'text-gray-900'
                  }`}
                >
                  {t.transactionType === 'payment' ? '-' : ''}
                  ${t.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

function SummaryCard({
  label,
  value,
  highlight
}: {
  label: string
  value: number
  highlight?: boolean
}) {
  return (
    <div
      className={`p-6 rounded-xl ${
        highlight ? 'bg-blue-600 text-white' : 'bg-white'
      }`}
    >
      <p className="text-sm opacity-80">{label}</p>
      <p className="text-2xl font-bold">${value}</p>
    </div>
  )
}
