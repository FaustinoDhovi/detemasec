export default {
  name: 'academicYear',
  title: 'Academic Year',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Academic Year',
      type: 'string',
      description: 'e.g., 2023-2024',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tuitionFee',
      title: 'Standard Tuition Fee',
      type: 'number',
    },
    {
      name: 'active',
      title: 'Active Academic Year',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'year',
      subtitle: 'active',
    },
    prepare(selection: any) {
      const { title, subtitle } = selection
      return {
        title: title,
        subtitle: subtitle ? 'Active' : 'Inactive',
      }
    },
  },
}