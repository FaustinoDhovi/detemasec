export default {
  name: 'feeTransaction',
  title: 'Fee Transaction',
  type: 'document',
  fields: [
    {
      name: 'student',
      title: 'Student',
      type: 'reference',
      to: [{ type: 'student' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'transactionType',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Fee Charge (Debit)', value: 'charge' },
          { title: 'Payment Received (Credit)', value: 'payment' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'amount',
      title: 'Amount ($)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'paymentMethod',
      title: 'Payment Method (For Payments Only)',
      type: 'reference',
      to: [{ type: 'paymentMethod' }],
      hidden: ({ document }: any) => document?.transactionType !== 'payment',
    },
    {
      name: 'description',
      title: 'Notes / Description',
      type: 'string',
      initialValue: 'Termly Fees',
    },
    {
      name: 'transactionDate',
      title: 'Date',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
    },
  ],
  preview: {
    select: {
      studentName: 'student.fullName',
      amount: 'amount',
      type: 'transactionType',
      date: 'transactionDate',
    },
    prepare({ studentName, amount, type, date }: any) {
      const icon = type === 'payment' ? '✅' : '💰';
      return {
        title: `${icon} ${studentName}`,
        subtitle: `${type.toUpperCase()}: $${amount} - ${date}`,
      }
    },
  },
}