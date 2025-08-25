export const contactForm = {
  confirmationMessage: {
    root: {
      type: 'root' as const,
      children: [
        {
          type: 'heading' as const,
          children: [
            {
              type: 'text' as const,
              detail: 0,
              format: 0,
              mode: 'normal' as const,
              style: '',
              text: 'The contact form has been submitted successfully.',
              version: 1,
            },
          ],
          direction: 'ltr' as const,
          format: '',
          indent: 0,
          tag: 'h2' as const,
          version: 1,
        },
      ],
      direction: 'ltr' as const,
      format: '',
      indent: 0,
      version: 1,
    },
  },
  confirmationType: 'message' as const,
  createdAt: '2023-01-12T21:47:41.374Z',
  emails: [
    {
      emailFrom: '"Payload" \u003Cdemo@payloadcms.com\u003E',
      emailTo: '{{email}}',
      message: {
        root: {
          type: 'root' as const,
          children: [
            {
              type: 'paragraph' as const,
              children: [
                {
                  type: 'text' as const,
                  detail: 0,
                  format: 0,
                  mode: 'normal' as const,
                  style: '',
                  text: 'Your contact form submission was successfully received.',
                  version: 1,
                },
              ],
              direction: 'ltr' as const,
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr' as const,
          format: '',
          indent: 0,
          version: 1,
        },
      },
      subject: "You've received a new message.",
    },
  ],
  fields: [
    {
      name: 'full-name',
      type: 'text' as const,
      label: 'Full Name',
      required: true,
    },
    {
      name: 'email',
      type: 'email' as const,
      label: 'Email',
      required: true,
    },
    {
      name: 'phone',
      type: 'phone' as const,
      label: 'Phone',
      required: false,
    },
    {
      name: 'message',
      type: 'textarea' as const,
      label: 'Message',
      required: true,
    },
  ],
  redirect: undefined,
  submitButtonLabel: 'Submit',
  title: 'Contact Form',
  updatedAt: '2023-01-12T21:47:41.374Z',
}
