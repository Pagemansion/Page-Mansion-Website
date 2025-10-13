import type { CollectionConfig } from 'payload'
import { sendEmail } from '../utilities/sendEmail'
import { formatFormSubmissionEmail } from '../utilities/emailTemplates'

export const FormSubmissions: CollectionConfig = {
  slug: 'custom-form-submissions',
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
          const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip')
          const userAgent = req.headers.get('user-agent')

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
    afterChange: [
      async ({ doc, operation }) => {
        // Send email notification for new form submissions
        if (operation === 'create') {
          const adminEmail = process.env.ADMIN_EMAIL || 'admin@pagemansion.com'
          
          await sendEmail({
            to: adminEmail,
            subject: `New Form Submission - ${doc.form?.title || 'Form'}`,
            html: formatFormSubmissionEmail(doc),
          })
        }
      },
    ],
  },
}
