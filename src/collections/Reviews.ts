import type { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'rating', 'status', 'createdAt'],
  },
  access: {
    read: ({ req: { user } }) => {
      // Public can read published reviews
      if (!user) {
        return {
          status: {
            equals: 'published',
          },
        }
      }
      // Admin can read all
      return true
    },
    create: () => true, // Allow public submissions
    update: ({ req: { user } }) => Boolean(user), // Only admin can update
    delete: ({ req: { user } }) => Boolean(user), // Only admin can delete
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Customer Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'rating',
      type: 'select',
      required: true,
      options: [
        { label: '5 Stars', value: '5' },
        { label: '4 Stars', value: '4' },
        { label: '3 Stars', value: '3' },
        { label: '2 Stars', value: '2' },
        { label: '1 Star', value: '1' },
      ],
      defaultValue: '5',
    },
    {
      name: 'review',
      type: 'textarea',
      required: true,
      label: 'Review Text',
    },
    {
      name: 'propertyPurchased',
      type: 'text',
      label: 'Property Purchased (Optional)',
    },
    {
      name: 'location',
      type: 'text',
      label: 'Location/Area',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Pending Review', value: 'pending' },
        { label: 'Published', value: 'published' },
        { label: 'Rejected', value: 'rejected' },
      ],
      admin: {
        description: 'Only published reviews will appear on the website',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Review',
      admin: {
        description: 'Featured reviews will be highlighted on the homepage',
      },
    },
    {
      name: 'adminNotes',
      type: 'textarea',
      label: 'Admin Notes',
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.status),
      },
    },
    {
      name: 'submittedAt',
      type: 'date',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (!value && !siblingData.submittedAt) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create') {
          data.submittedAt = new Date()
        }
        return data
      },
    ],
  },
}
