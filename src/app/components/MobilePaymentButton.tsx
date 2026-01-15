'use client'

import { useState } from 'react'
import { Plus, X, Check } from 'lucide-react'

export function MobilePaymentButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [amount, setAmount] = useState('')
  const [method, setMethod] = useState('cash')

  const paymentMethods = [
    { id: 'cash', label: 'Cash', icon: '💵' },
    { id: 'ecocash', label: 'Ecocash', icon: '📱' },
    { id: 'bank', label: 'Bank Transfer', icon: '🏦' },
    { id: 'swipe', label: 'Card Swipe', icon: '💳' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle payment submission
    console.log('Payment submitted:', { amount, method })
    setIsOpen(false)
    setAmount('')
  }

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-4 bg-green-600 text-white p-4 rounded-full shadow-lg md:hidden z-40 flex items-center justify-center touch-target"
        style={{ boxShadow: '0 4px 20px rgba(76, 175, 80, 0.3)' }}
      >
        <Plus size={24} />
      </button>

      {/* Payment Modal */}
      {isOpen && (
        <div className="modal-backdrop md:hidden">
          <div className="bg-white w-full max-w-md rounded-2xl overflow-hidden max-h-[80vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-green-800">
                Record Payment
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Amount Input */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Amount ($)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="mobile-input pl-10 text-lg"
                    placeholder="0.00"
                    required
                    step="0.01"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.map((pm) => (
                    <button
                      key={pm.id}
                      type="button"
                      onClick={() => setMethod(pm.id)}
                      className={`p-4 border-2 rounded-xl text-center transition-all ${
                        method === pm.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-2xl mb-2">{pm.icon}</div>
                      <span className="text-sm font-medium">{pm.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Reference Number */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Reference Number
                </label>
                <input
                  type="text"
                  className="mobile-input"
                  placeholder="Enter reference number"
                />
              </div>

              {/* Student Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Student
                </label>
                <select className="mobile-input">
                  <option value="">Select a student</option>
                  <option value="1">John Doe (Form 4)</option>
                  <option value="2">Jane Smith (Form 3)</option>
                  <option value="3">Mike Johnson (Form 2)</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Notes (Optional)
                </label>
                <textarea
                  className="mobile-input min-h-[100px]"
                  placeholder="Additional notes..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 text-white p-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 hover:bg-green-700 transition-colors touch-target"
              >
                <Check size={20} />
                <span>Confirm Payment</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}