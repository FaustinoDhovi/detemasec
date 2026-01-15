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
      validation: (Rule: any) => Rule.required() 
    },
    
    {
      name: 'academicTerm',
      title: 'Academic Term',
      type: 'reference',
      to: [{ type: 'academicYear' }],
      description: 'Which term this transaction applies to',
      validation: (Rule: any) => Rule.required()
    },
    
    { 
      name: 'transactionType', 
      title: 'Transaction Type', 
      type: 'string', 
      options: { 
        list: [
          { title: 'Fee Charge (Debit)', value: 'charge' }, 
          { title: 'Payment Received (Credit)', value: 'payment' },
          { title: 'Adjustment (Debit)', value: 'adjustment_debit' },
          { title: 'Adjustment (Credit)', value: 'adjustment_credit' },
          { title: 'Refund', value: 'refund' }
        ] 
      },
      validation: (Rule: any) => Rule.required()
    },
    
    { 
      name: 'amount', 
      title: 'Amount ($)', 
      type: 'number', 
      initialValue: 75, 
      validation: (Rule: any) => Rule.required().min(0) 
    },
    
    { 
      name: 'paymentMethod', 
      title: 'Payment Method', 
      type: 'reference',
      to: [{ type: 'paymentMethod' }],
      description: 'How the payment was made (for payments only)',
      hidden: ({ document }: any) => !['payment', 'refund'].includes(document?.transactionType)
    },
    
    { 
      name: 'paymentReference', 
      title: 'Payment Reference/Number', 
      type: 'string',
      description: 'Ecocash/Bank Transfer reference number',
      hidden: ({ document }: any) => !['payment', 'refund'].includes(document?.transactionType)
    },
    
    { 
      name: 'description', 
      title: 'Description', 
      type: 'string', 
      initialValue: 'Termly Fees',
      validation: (Rule: any) => Rule.required()
    },
    
    { 
      name: 'transactionDate', 
      title: 'Transaction Date', 
      type: 'date', 
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (Rule: any) => Rule.required()
    },
    
    {
      name: 'receiptNumber',
      title: 'Receipt Number',
      type: 'string',
      description: 'Official receipt number if issued',
      hidden: ({ document }: any) => document?.transactionType !== 'payment'
    },
    
    {
      name: 'notes',
      title: 'Additional Notes',
      type: 'text',
      rows: 3,
      description: 'Any additional information about this transaction'
    },
    
    {
      name: 'recordedBy',
      title: 'Recorded By',
      type: 'string',
      description: 'Staff member who recorded this transaction'
    },
    
    {
      name: 'verified',
      title: 'Verified',
      type: 'boolean',
      initialValue: false,
      description: 'Has this transaction been verified?',
      hidden: ({ document }: any) => document?.transactionType !== 'payment'
    }
  ],
  preview: {
    select: {
      title: 'student.fullName',
      amount: 'amount',
      type: 'transactionType',
      method: 'paymentMethod.method',
      description: 'description',
      date: 'transactionDate',
      verified: 'verified'
    },
    prepare({ title, amount, type, method, description, date, verified }: any) {
      // Determine emoji based on transaction type
      let emoji = '💰';
      if (type === 'payment') emoji = verified ? '✅' : '📝';
      if (type === 'refund') emoji = '↩️';
      if (type.includes('adjustment')) emoji = '🔄';
      
      // Format date
      const dateStr = date ? new Date(date).toLocaleDateString() : '';
      
      // Create subtitle
      let subtitle = `${description}: $${amount}`;
      if (type === 'payment' && method) {
        subtitle += ` via ${method}`;
      }
      if (dateStr) {
        subtitle += ` • ${dateStr}`;
      }
      
      return { 
        title: `${emoji} ${title || 'Unknown Student'}`,
        subtitle
      }
    }
  },
  
  // Order transactions by date in descending order
  orderings: [
    {
      title: 'Transaction Date (Newest)',
      name: 'transactionDateDesc',
      by: [
        { field: 'transactionDate', direction: 'desc' }
      ]
    },
    {
      title: 'Transaction Date (Oldest)',
      name: 'transactionDateAsc',
      by: [
        { field: 'transactionDate', direction: 'asc' }
      ]
    }
  ]
}