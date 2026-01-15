export function MobileStats() {
  return (
    <div className="responsive-grid">
      <div className="bg-white rounded-2xl p-5 shadow border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-700">Total Students</h4>
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-xl">👨‍🎓</span>
          </div>
        </div>
        <p className="text-3xl font-bold">245</p>
        <p className="text-sm text-gray-500 mt-1">230 Active • 15 Graduated</p>
      </div>
      
      <div className="bg-white rounded-2xl p-5 shadow border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-700">Total Balance</h4>
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <span className="text-xl">💰</span>
          </div>
        </div>
        <p className="text-3xl font-bold">$18,450</p>
        <p className="text-sm text-gray-500 mt-1">Outstanding fees</p>
      </div>
      
      <div className="bg-white rounded-2xl p-5 shadow border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-700">This Month</h4>
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <span className="text-xl">📈</span>
          </div>
        </div>
        <p className="text-3xl font-bold">$4,250</p>
        <p className="text-sm text-gray-500 mt-1">Payments received</p>
      </div>
      
      <div className="bg-white rounded-2xl p-5 shadow border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-700">Attendance</h4>
          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
            <span className="text-xl">📊</span>
          </div>
        </div>
        <p className="text-3xl font-bold">98%</p>
        <p className="text-sm text-gray-500 mt-1">Average this week</p>
      </div>
    </div>
  )
}