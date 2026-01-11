export default {
  name: 'paymentMethod',
  title: 'Payment Method',
  type: 'document',
  fields: [
    {
      name: 'method',
      title: 'Payment Method',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'method',
      subtitle: 'description',
    },
  },
}