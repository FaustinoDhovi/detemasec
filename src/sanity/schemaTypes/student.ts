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
      options: { list: [{ title: 'Form 1', value: 'f1' }, { title: 'Form 2', value: 'f2' }, { title: 'Form 3', value: 'f3' }, { title: 'Form 4', value: 'f4' }] },
      validation: (Rule: any) => Rule.required()
    },
    { name: 'classSection', title: 'Class Section', type: 'string', description: 'e.g., East, West, or A, B' },
    { name: 'gender', title: 'Gender', type: 'string', options: { list: ['Male', 'Female'] } },
    { name: 'dateOfBirth', title: 'Date of Birth', type: 'date' },
    { name: 'status', title: 'Status', type: 'string', initialValue: 'active', options: { list: ['active', 'graduated', 'withdrawn'] } },
  ],
  preview: { select: { title: 'fullName', subtitle: 'studentId' } }
}