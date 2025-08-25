import type { CollectionConfig } from 'payload'

export const Forms: CollectionConfig = {
  slug: 'forms',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'createdAt', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'fields',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'type',
          type: 'select',
          required: true,
          options: [
            { label: 'Text', value: 'text' },
            { label: 'Email', value: 'email' },
            { label: 'Textarea', value: 'textarea' },
            { label: 'Select', value: 'select' },
            { label: 'Checkbox', value: 'checkbox' },
            { label: 'Phone', value: 'phone' },
          ],
        },
        {
          name: 'required',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'options',
          type: 'array',
          admin: {
            condition: (data) => data.type === 'select',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'value',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'confirmationMessage',
      type: 'richText',
      admin: {
        description: 'Message shown after successful form submission',
      },
    },
    {
      name: 'confirmationType',
      type: 'select',
      options: [
        { label: 'Message', value: 'message' },
        { label: 'Redirect', value: 'redirect' },
      ],
      defaultValue: 'message',
    },
    {
      name: 'redirect',
      type: 'group',
      admin: {
        condition: (data) => data.confirmationType === 'redirect',
      },
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'emails',
      type: 'array',
      fields: [
        {
          name: 'emailTo',
          type: 'text',
          required: true,
          admin: {
            description:
              'Email address to send notifications to. Use {{fieldName}} for dynamic values.',
          },
        },
        {
          name: 'emailFrom',
          type: 'text',
          admin: {
            description: 'From email address',
          },
        },
        {
          name: 'subject',
          type: 'text',
          required: true,
        },
        {
          name: 'message',
          type: 'richText',
          required: true,
          admin: {
            description: 'Email message. Use {{fieldName}} for dynamic values.',
          },
        },
      ],
    },
  ],
}
