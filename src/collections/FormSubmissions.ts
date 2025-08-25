import type { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  admin: {
    useAsTitle: 'id',
    defaultColumns: ['form', 'createdAt', 'updatedAt'],
    group: 'Content',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => false, // Prevent editing submissions
    delete: () => true,
  },
  fields: [
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
      admin: {
        description: 'The form this submission belongs to',
      },
    },
    {
      name: 'submissionData',
      type: 'array',
      fields: [
        {
          name: 'field',
          type: 'text',
          required: true,
          admin: {
            description: 'Field name from the form',
          },
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: {
            description: 'Value submitted by the user',
          },
        },
        {
          name: 'id',
          type: 'text',
          admin: {
            description: 'Optional field ID',
          },
        },
      ],
      admin: {
        description: 'The actual form data submitted by the user',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'New', value: 'new' },
        { label: 'In Progress', value: 'in-progress' },
        { label: 'Completed', value: 'completed' },
        { label: 'Spam', value: 'spam' },
      ],
      defaultValue: 'new',
      admin: {
        description: 'Status of this submission',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Internal notes about this submission',
      },
    },
    {
      name: 'ipAddress',
      type: 'text',
      admin: {
        description: 'IP address of the submitter',
        readOnly: true,
      },
    },
    {
      name: 'userAgent',
      type: 'text',
      admin: {
        description: 'User agent of the submitter',
        readOnly: true,
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, req }) => {
        // Capture IP address and user agent if available
        if (req) {
          const ip =
            req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket?.remoteAddress
          const userAgent = req.headers['user-agent']

          if (ip) {
            data.ipAddress = Array.isArray(ip) ? ip[0] : ip
          }
          if (userAgent) {
            data.userAgent = userAgent
          }
        }
        return data
      },
    ],
  },
}
