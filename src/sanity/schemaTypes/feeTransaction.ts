export default {
  name: 'feeTransaction',
  title: 'Fee Transaction',
  type: 'document',
  fields: [
    {
      name: 'transactionId',
      title: 'Transaction ID',
      type: 'string',
      description: 'Unique transaction identifier (e.g., TXN20240001)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'student',
      title: 'Student',
      type: 'reference',
      to: [{ type: 'student' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'transactionDate',
      title: 'Transaction Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'transactionType',
      title: 'Transaction Type',
      type: 'string',
      options: {
        list: [
          { title: 'Payment Received', value: 'payment' },
          { title: 'Fee Charge', value: 'charge' },
          { title: 'Refund', value: 'refund' },
          { title: 'Adjustment', value: 'adjustment' },
          { title: 'Waiver', value: 'waiver' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'paymentMethod',
      title: 'Payment Method',
      type: 'reference',
      to: [{ type: 'paymentMethod' }],
    },
    {
      name: 'receiptNumber',
      title: 'Receipt Number',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'academicYear',
      title: 'Academic Year',
      type: 'reference',
      to: [{ type: 'academicYear' }],
    },
    {
      name: 'semester',
      title: 'Semester',
      type: 'string',
      options: {
        list: [
          { title: 'Semester 1', value: 'sem1' },
          { title: 'Semester 2', value: 'sem2' },
          { title: 'Full Year', value: 'full' },
        ],
      },
    },
    {
      name: 'verified',
      title: 'Verified',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'student.fullName',
      subtitle: 'transactionId',
      amount: 'amount',
      type: 'transactionType',
      date: 'transactionDate',
    },
    prepare(selection: any) {
      const { title, subtitle, amount, type, date } = selection
      const formattedDate = date ? new Date(date).toLocaleDateString() : ''
      return {
        title: `${title || 'Unknown Student'}`,
        subtitle: `${subtitle} - ${type}: $${amount} (${formattedDate})`,
      }
    },
  },
}