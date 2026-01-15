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
      options: {
        list: [
          { title: 'Cash', value: 'cash' },
          { title: 'Ecocash', value: 'ecocash' },
          { title: 'Bank Transfer', value: 'bank_transfer' },
          { title: 'Swipe (USD)', value: 'usd_swipe' },
          { title: 'Swipe (ZWG)', value: 'zwg_swipe' },
          { title: 'Mobile Money', value: 'mobile_money' },
          { title: 'Cheque', value: 'cheque' },
          { title: 'Scholarship', value: 'scholarship' }
        ]
      }
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
      active: 'active'
    },
    prepare({ title, subtitle, active }: any) {
      return {
        title: `${active ? '✅' : '❌'} ${title}`,
        subtitle: subtitle || 'No description'
      }
    }
  },
}