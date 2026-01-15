import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MobilePaymentButton } from '@/components/MobilePaymentButton'
import { MobileStats } from '@/components/MobileStats'
import { RecentTransactions } from '@/components/RecentTransactions'

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
          <div className="mt-4 flex items-center space-x-2 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">
              📅 Term 1, 2024
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full">
              👥 245 Students
            </span>
          </div>
        </div>

        {/* Quick Stats */}
        <MobileStats />

        {/* Quick Actions - Mobile Only */}
        <div className="mobile-only">
          <div className="bg-white rounded-2xl p-4 shadow">
            <h3 className="font-bold text-lg mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-blue-50 text-blue-700 p-4 rounded-xl text-sm font-medium flex flex-col items-center justify-center touch-target">
                <span className="text-2xl mb-2">👨‍🎓</span>
                Add Student
              </button>
              <button className="bg-green-50 text-green-700 p-4 rounded-xl text-sm font-medium flex flex-col items-center justify-center touch-target">
                <span className="text-2xl mb-2">💰</span>
                Add Fee
              </button>
              <button className="bg-purple-50 text-purple-700 p-4 rounded-xl text-sm font-medium flex flex-col items-center justify-center touch-target">
                <span className="text-2xl mb-2">📊</span>
                Reports
              </button>
              <button className="bg-orange-50 text-orange-700 p-4 rounded-xl text-sm font-medium flex flex-col items-center justify-center touch-target">
                <span className="text-2xl mb-2">📢</span>
                Announce
              </button>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <Card className="responsive-card">
          <CardHeader>
            <CardTitle className="text-xl flex justify-between items-center">
              <span>Recent Transactions</span>
              <span className="text-sm font-normal text-gray-500">
                Last 7 days
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RecentTransactions limit={5} />
          </CardContent>
        </Card>

        {/* Important Notices */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
          <h4 className="font-bold text-yellow-800 mb-2 flex items-center">
            ⚡ Important Notice
          </h4>
          <p className="text-sm text-yellow-700">
            Term 1 fees due by January 31, 2024. Late payments incur a 10% penalty.
          </p>
        </div>
      </div>

      {/* Mobile Payment Button */}
      <MobilePaymentButton />
    </>
  )
}