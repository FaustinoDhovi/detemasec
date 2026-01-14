"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { 
  Loader2, 
  LogOut, 
  TrendingUp, 
  Clock, 
  ArrowUpRight, 
  ArrowDownLeft,
  FileText
} from "lucide-react";
import { client } from "@/sanity/lib/client";

interface Transaction {
  _id: string;
  transactionId: string;
  transactionDate: string;
  transactionType: string;
  amount: number;
  description: string;
}

export default function StudentPortal() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }

    if (status === "authenticated" && session?.user?.name) {
      fetchStudentData();
    }
  }, [status, session, router]);

  const fetchStudentData = async () => {
    try {
      setLoading(true);
      // Query transactions linked to this student's unique ID
      const query = `*[_type == "feeTransaction" && student->studentId == $studentId] | order(transactionDate desc) {
        _id,
        transactionId,
        transactionDate,
        transactionType,
        amount,
        description
      }`;
      
      const data = await client.fetch(query, { studentId: session?.user?.name });
      setTransactions(data);

      // Calculate Real Balance: Charges - Payments
      const totalBalance = data.reduce((acc: number, curr: Transaction) => {
        if (curr.transactionType === 'charge') return acc + curr.amount;
        if (['payment', 'waiver', 'adjustment'].includes(curr.transactionType)) return acc - curr.amount;
        return acc;
      }, 0);

      setBalance(totalBalance);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Fetching your records...</p>
        </div>
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <FileText className="text-white h-5 w-5" />
              </div>
              <span className="font-bold text-xl text-gray-900 hidden sm:block">Detema Portal</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-900">{(session.user as any).fullName}</p>
                <p className="text-xs text-gray-500">{session.user?.name}</p>
              </div>
              <button 
                onClick={() => signOut({ callbackUrl: '/' })}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Financial Summary</h2>
          <p className="text-gray-500 mt-1">Real-time balance for the 2026 Academic Year.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Real-time Balance Card */}
          <div className="lg:col-span-1">
            <div className={`rounded-3xl p-8 text-white shadow-xl ${balance > 0 ? 'bg-gradient-to-br from-blue-600 to-blue-800' : 'bg-gradient-to-br from-green-500 to-green-700'}`}>
              <div className="flex items-center justify-between mb-6">
                <TrendingUp className="h-10 w-10 opacity-80" />
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Live Balance
                </span>
              </div>
              <p className="text-blue-100 text-sm font-medium uppercase tracking-widest mb-1">Total Outstanding</p>
              <h3 className="text-5xl font-black mb-4">
                ${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </h3>
              <div className="pt-6 border-t border-white/10 flex items-center gap-2 text-sm text-blue-100">
                <Clock className="h-4 w-4" />
                <span>Verified: {new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Detailed Statement of Account */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">Statement of Account</h3>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {transactions.length} Records
                </span>
              </div>
              
              <div className="overflow-x-auto">
                {transactions.length > 0 ? (
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Date</th>
                        <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Description</th>
                        <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {transactions.map((txn) => (
                        <tr key={txn._id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <p className="text-sm font-medium text-gray-900">
                              {new Date(txn.transactionDate).toLocaleDateString()}
                            </p>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg ${txn.transactionType === 'charge' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                                {txn.transactionType === 'charge' ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownLeft className="h-4 w-4" />}
                              </div>
                              <div>
                                <p className="text-sm font-bold text-gray-900">{txn.description || 'School Fees'}</p>
                                <p className="text-xs text-gray-500 capitalize">{txn.transactionType}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <span className={`text-sm font-bold ${txn.transactionType === 'charge' ? 'text-gray-900' : 'text-green-600'}`}>
                              {txn.transactionType === 'charge' ? '' : '-'}
                              ${txn.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="p-12 text-center">
                    <p className="text-gray-500">No transaction history found.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}