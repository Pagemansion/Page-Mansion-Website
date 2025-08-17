import type { Block } from 'payload'

export const PropertiesBlock: Block = {
  slug: 'properties',
  interfaceName: 'PropertiesBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Featured Properties',
    },
    {
      name: 'subtitle',
      type: 'text',
      admin: {
        description: 'Optional subtitle for the properties section',
      },
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 6,
      min: 1,
      max: 12,
      admin: {
        description: 'Number of properties to display',
      },
    },
    {
      name: 'showFeaturedOnly',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show only featured properties',
      },
    },
    {
      name: 'propertyType',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'House', value: 'house' },
        { label: 'Apartment', value: 'apartment' },
        { label: 'Condo', value: 'condo' },
        { label: 'Townhouse', value: 'townhouse' },
        { label: 'Villa', value: 'villa' },
        { label: 'Land', value: 'land' },
        { label: 'Commercial', value: 'commercial' },
      ],
      admin: {
        description: 'Filter by property types (leave empty to show all)',
      },
    },
    {
      name: 'showViewAllButton',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show "View All Properties" button',
      },
    },
  ],
}
