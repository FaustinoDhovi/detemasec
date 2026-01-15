interface Transaction {
  id: string
  student: string
  amount: number
  type: 'payment' | 'charge'
  method: string
  date: string
}

export function RecentTransactions({ limit = 5 }: { limit?: number }) {
  const transactions: Transaction[] = [
    { id: '1', student: 'John Doe', amount: 150, type: 'payment', method: 'Cash', date: 'Today' },
    { id: '2', student: 'Jane Smith', amount: 75, type: 'charge', method: 'Term Fee', date: 'Today' },
    { id: '3', student: 'Mike Johnson', amount: 100, type: 'payment', method: 'Ecocash', date: 'Yesterday' },
    { id: '4', student: 'Sarah Williams', amount: 200, type: 'payment', method: 'Bank Transfer', date: 'Jan 12' },
    { id: '5', student: 'David Brown', amount: 75, type: 'charge', method: 'Term Fee', date: 'Jan 11' },
  ]

  return (
    <>
      {/* Desktop Table */}
      <div className="mobile-hide">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b">
              <th className="pb-3">Student</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Type</th>
              <th className="pb-3">Method</th>
              <th className="pb-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.slice(0, limit).map((tx) => (
              <tr key={tx.id} className="border-b last:border-0">
                <td className="py-3">{tx.student}</td>
                <td className="py-3 font-medium">${tx.amount}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    tx.type === 'payment' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {tx.type}
                  </span>
                </td>
                <td className="py-3 text-sm">{tx.method}</td>
                <td className="py-3 text-sm text-gray-500">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="mobile-only space-y-3">
        {transactions.slice(0, limit).map((tx) => (
          <div key={tx.id} className="bg-gray-50 rounded-xl p-4">
            <div className="flex justify-between items-start">
              <div>
                <h5 className="font-medium">{tx.student}</h5>
                <p className="text-sm text-gray-600">{tx.method}</p>
              </div>
              <div className="text-right">
                <p className={`font-bold ${
                  tx.type === 'payment' ? 'text-green-600' : 'text-blue-600'
                }`}>
                  ${tx.amount}
                </p>
                <p className="text-xs text-gray-500">{tx.date}</p>
              </div>
            </div>
            <div className="mt-2">
              <span className={`px-3 py-1 rounded-full text-xs ${
                tx.type === 'payment' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {tx.type.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}