export default {
  name: 'feeTransaction',
  title: 'Fee Transaction',
  type: 'document',
  fields: [
    { name: 'student', title: 'Student', type: 'reference', to: [{ type: 'student' }], validation: (Rule: any) => Rule.required() },
    { 
      name: 'transactionType', 
      title: 'Type', 
      type: 'string', 
      options: { list: [{ title: 'Fee Charge (Debit)', value: 'charge' }, { title: 'Payment Received (Credit)', value: 'payment' }] },
      validation: (Rule: any) => Rule.required()
    },
    { name: 'amount', title: 'Amount ($)', type: 'number', initialValue: 75, validation: (Rule: any) => Rule.required().min(0) },
    { 
      name: 'paymentMethod', 
      title: 'Payment Method', 
      type: 'string', 
      options: { list: [{ title: 'Cash', value: 'cash' }, { title: 'USD Swipe', value: 'usd_swipe' }, { title: 'ZWG Swipe', value: 'zwg_swipe' }] },
      hidden: ({ document }: any) => document?.transactionType !== 'payment'
    },
    { name: 'description', title: 'Description', type: 'string', initialValue: 'Termly Fees' },
    { name: 'transactionDate', title: 'Date', type: 'date', initialValue: () => new Date().toISOString().split('T')[0] },
  ],
  preview: {
    select: { title: 'student.fullName', amount: 'amount', type: 'transactionType' },
    prepare({ title, amount, type }: any) {
      return { title: `${type === 'payment' ? '✅' : '💰'} ${title}`, subtitle: `$${amount}` }
    }
  }
}