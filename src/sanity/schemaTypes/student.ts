export default {
  name: 'student',
  title: 'Student',
  type: 'document',
  fields: [
    { name: 'fullName', title: 'Full Name', type: 'string', validation: (Rule: any) => Rule.required() },
    
    { name: 'studentId', title: 'Student ID', type: 'string', description: 'Unique ID (e.g., DET-2026-001)', validation: (Rule: any) => Rule.required() },
    
    { 
      name: 'grade', 
      title: 'Grade / Form', 
      type: 'string', 
      options: { 
        list: [
          { title: 'Form 1', value: 'f1' },
          { title: 'Form 2', value: 'f2' }, 
          { title: 'Form 3', value: 'f3' }, 
          { title: 'Form 4', value: 'f4' },
          { title: 'Lower 6', value: 'l6' },
          { title: 'Upper 6', value: 'u6' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    
    { name: 'classSection', title: 'Class Section', type: 'string', description: 'e.g., East, West, or A, B' },
    
    { name: 'gender', title: 'Gender', type: 'string', options: { list: ['Male', 'Female', 'Other'] } },
    
    { name: 'dateOfBirth', title: 'Date of Birth', type: 'date' },
    
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'phone', title: 'Phone Number', type: 'string' },
        { name: 'email', title: 'Email Address', type: 'string' },
        { name: 'address', title: 'Home Address', type: 'text', rows: 2 }
      ]
    },
    
    {
      name: 'parentInfo',
      title: 'Parent/Guardian Information',
      type: 'object',
      fields: [
        { name: 'parentName', title: 'Parent Name', type: 'string' },
        { name: 'parentPhone', title: 'Parent Phone', type: 'string' },
        { name: 'parentEmail', title: 'Parent Email', type: 'string' },
        { name: 'relationship', title: 'Relationship', type: 'string' }
      ]
    },
    
    { 
      name: 'status', 
      title: 'Status', 
      type: 'string', 
      initialValue: 'active', 
      options: { 
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Graduated', value: 'graduated' }, 
          { title: 'Withdrawn', value: 'withdrawn' },
          { title: 'Suspended', value: 'suspended' }
        ] 
      }
    },
    
    {
      name: 'enrollmentDate',
      title: 'Enrollment Date',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0]
    },
    
    // ✅ Balance field
    {
      name: 'currentBalance',
      title: 'Current Balance ($)',
      type: 'number',
      readOnly: true,
      initialValue: 0,
      description: 'Auto-calculated from all transactions'
    },
    
    // ✅ Last payment information
    {
      name: 'lastPayment',
      title: 'Last Payment Information',
      type: 'object',
      readOnly: true,
      fields: [
        { name: 'date', title: 'Date', type: 'date' },
        { name: 'amount', title: 'Amount', type: 'number' },
        { name: 'method', title: 'Method', type: 'string' },
        { name: 'reference', title: 'Reference', type: 'string' }
      ]
    },
    
    // ✅ Preferred payment method
    {
      name: 'preferredPaymentMethod',
      title: 'Preferred Payment Method',
      type: 'reference',
      to: [{ type: 'paymentMethod' }],
      description: 'Student\'s preferred method of payment'
    },
    
    {
      name: 'notes',
      title: 'Student Notes',
      type: 'text',
      rows: 4,
      description: 'Any additional notes about this student'
    }
  ],
  
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'studentId',
      balance: 'currentBalance',
      status: 'status',
      grade: 'grade',
      lastPaymentDate: 'lastPayment.date',
      lastPaymentMethod: 'lastPayment.method'
    },
    prepare({ title, subtitle, balance, status, grade, lastPaymentDate, lastPaymentMethod }: any) {
      // Format balance
      const balanceStr = balance ? `$${balance}` : '$0';
      
      // Format status with emoji
      let statusEmoji = '🟢';
      if (status === 'graduated') statusEmoji = '🎓';
      if (status === 'withdrawn') statusEmoji = '🚫';
      if (status === 'suspended') statusEmoji = '⏸️';
      
      // Format last payment info
      let paymentInfo = '';
      if (lastPaymentDate) {
        const dateStr = new Date(lastPaymentDate).toLocaleDateString();
        paymentInfo = `Last paid: ${dateStr}${lastPaymentMethod ? ` via ${lastPaymentMethod}` : ''}`;
      }
      
      return {
        title: `${title} (${grade || 'No Grade'})`,
        subtitle: `${subtitle} | ${statusEmoji} ${status} | Balance: ${balanceStr} ${paymentInfo ? `| ${paymentInfo}` : ''}`
      }
    }
  },
  
  // Custom orderings for the studio
  orderings: [
    {
      title: 'Balance (Highest)',
      name: 'balanceDesc',
      by: [
        { field: 'currentBalance', direction: 'desc' }
      ]
    },
    {
      title: 'Balance (Lowest)',
      name: 'balanceAsc',
      by: [
        { field: 'currentBalance', direction: 'asc' }
      ]
    },
    {
      title: 'Name (A-Z)',
      name: 'nameAsc',
      by: [
        { field: 'fullName', direction: 'asc' }
      ]
    },
    {
      title: 'Grade',
      name: 'gradeAsc',
      by: [
        { field: 'grade', direction: 'asc' }
      ]
    }
  ]
}