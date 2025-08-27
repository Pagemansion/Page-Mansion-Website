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
            type: 'text', // Changed to text since options are now dynamic
            required: true,
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
                    version: 1,
                  },
                ],
                version: 1,
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
            emailTo: process.env.ADMIN_EMAIL || 'pagemansionsltd@gmail.com',
            emailFrom: process.env.RESEND_FROM_EMAIL || 'pagemansionsltd@gmail.com',
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
                        version: 1,
                      },
                    ],
                    tag: 'h2',
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        text: 'A new visit booking request has been submitted:',
                        version: 1,
                      },
                    ],
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        text: 'Name: {{full-name}}',
                        version: 1,
                      },
                    ],
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        text: 'Email: {{email}}',
                        version: 1,
                      },
                    ],
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        text: 'Phone: {{phone}}',
                        version: 1,
                      },
                    ],
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        text: 'Project Location: {{project-location}}',
                        version: 1,
                      },
                    ],
                    version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        text: 'Message: {{message}}',
                        version: 1,
                      },
                    ],
                    version: 1,
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
