export default {
  name: 'academicYear',
  title: 'Academic Year & Terms',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Academic Year',
      type: 'string',
      description: 'e.g., 2026',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'term',
      title: 'Current Term',
      type: 'string',
      options: {
        list: [
          { title: 'Term 1', value: 'term1' },
          { title: 'Term 2', value: 'term2' },
          { title: 'Term 3', value: 'term3' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tuitionFee',
      title: 'Standard Tuition Fee ($)',
      type: 'number',
      initialValue: 75,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'active',
      title: 'Is this the Current Active Term?',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      year: 'year',
      term: 'term',
      active: 'active',
    },
    prepare({ year, term, active }: any) {
      return {
        title: `${year} - ${term?.toUpperCase()}`,
        subtitle: active ? '🔴 ACTIVE TERM' : 'Inactive',
      }
    },
  },
}