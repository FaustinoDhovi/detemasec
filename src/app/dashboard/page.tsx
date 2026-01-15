import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'  // Changed from '@/components/ui/card'
import { MobilePaymentButton } from '../components/MobilePaymentButton'  // Changed from '@/components/MobilePaymentButton'
import { MobileStats } from '../components/MobileStats'  // Changed from '@/components/MobileStats'
import { RecentTransactions } from '../components/RecentTransactions'  // Changed from '@/components/RecentTransactions'

export default function DashboardPage() {
  return (
    <>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Welcome to Detema Management
          </h1>
          <p className="text-green-100 opacity-90">
            Managing excellence in education since 1995
          </p>
        </div>

        {/* Quick Stats */}
        <MobileStats />

        {/* Quick Actions - Mobile Only */}
        <div className="mobile-only">
          <div className="bg-white rounded-2xl p-4 shadow">
            <h3 className="font-bold text-lg mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-blue-50 text-blue-700 p-4 rounded-xl text-sm font-medium flex flex-col items-center">
                <span className="text-2xl mb-2">👨‍🎓</span>
                Add Student
              </button>
              <button className="bg-green-50 text-green-700 p-4 rounded-xl text-sm font-medium flex flex-col items-center">
                <span className="text-2xl mb-2">💰</span>
                Add Fee
              </button>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <Card className="responsive-card">
          <CardHeader>
            <CardTitle className="text-xl">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentTransactions limit={5} />
          </CardContent>
        </Card>
      </div>

      {/* Mobile Payment Button */}
      <MobilePaymentButton />
    </>
  )
}