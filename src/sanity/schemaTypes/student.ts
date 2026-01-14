export default {
  name: 'student',
  title: 'Student',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'studentId',
      title: 'Student ID',
      type: 'string',
      description: 'The unique ID used for portal login (e.g., DET-2026-001)',
      validation: (Rule: any) => Rule.required(),
    },
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
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'classSection',
      title: 'Class / Arms',
      type: 'string',
      description: 'e.g., East, West, or A, B, C',
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: ['Male', 'Female'],
      },
    },
    {
      name: 'dateOfBirth',
      title: 'Date of Birth',
      type: 'date',
    },
    {
      name: 'status',
      title: 'Enrollment Status',
      type: 'string',
      initialValue: 'active',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Graduated', value: 'graduated' },
          { title: 'Withdrawn', value: 'withdrawn' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'studentId',
      grade: 'grade',
    },
    prepare({ title, subtitle, grade }: any) {
      return {
        title,
        subtitle: `${grade?.toUpperCase()} | ID: ${subtitle}`,
      }
    },
  },
}