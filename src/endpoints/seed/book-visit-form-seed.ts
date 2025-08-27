import type { Payload } from 'payload'

export const seedBookVisitForm = async (payload: Payload): Promise<void> => {
  try {
    // Check if the form already exists
    const existingForms = await payload.find({
      collection: 'forms',
      where: {
        title: {
          equals: 'Book a Visit Form',
        },
      },
    })

    if (existingForms.docs.length > 0) {
      console.log('Book a Visit Form already exists, skipping...')
      return
    }

    // Create the Book a Visit Form
    const bookVisitForm = await payload.create({
      collection: 'forms',
      data: {
        title: 'Book a Visit Form',
        fields: [
          {
            name: 'full-name',
            label: 'Full Name',
            type: 'text',
            required: true,
          },
          {
            name: 'email',
            label: 'Email Address',
            type: 'email',
            required: true,
          },
          {
            name: 'phone',
            label: 'Phone Number',
            type: 'phone',
            required: true,
          },
          {
            name: 'project-location',
            label: 'Select Project Location',
            type: 'select',
            required: true,
            options: [
              {
                label: 'Page Mansion',
                value: 'page-mansion',
              },
              {
                label: 'Downtown Tower',
                value: 'downtown-tower',
              },
              {
                label: 'Riverside Villa',
                value: 'riverside-villa',
              },
              {
                label: 'Garden Estate',
                value: 'garden-estate',
              },
            ],
          },
          {
            name: 'message',
            label: 'Your Message',
            type: 'textarea',
            required: true,
          },
        ],
        confirmationType: 'message',
        confirmationMessage: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Thank you for your visit booking request! A member of our team will be in touch shortly to confirm your visit.',
                  },
                ],
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        emails: [
          {
            emailTo: process.env.ADMIN_EMAIL || 'admin@example.com',
            emailFrom: process.env.RESEND_FROM_EMAIL || 'noreply@example.com',
            subject: 'New Visit Booking Request - {{project-location}}',
            message: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [
                      {
                        type: 'text',
                        text: 'New Visit Booking Request',
                      },
                    ],
                    tag: 'h2',
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        text: 'A new visit booking request has been submitted:',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        text: 'Name: {{full-name}}',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        text: 'Email: {{email}}',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        text: 'Phone: {{phone}}',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        text: 'Project Location: {{project-location}}',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        text: 'Message: {{message}}',
                      },
                    ],
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
          },
        ],
      },
    })

    console.log('✅ Book a Visit Form created successfully:', bookVisitForm.id)
  } catch (error) {
    console.error('❌ Error creating Book a Visit Form:', error)
  }
}
