import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidateProperty } from './hooks/revalidateProperty'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'

export const Properties: CollectionConfig<'properties'> = {
  slug: 'properties',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    price: true,
    propertyType: true,
    status: true,
    location: true,
    images: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'price', 'propertyType', 'status', 'location', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'properties',
          req,
        })
        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'properties',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Property title/name',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Property Details',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'price',
                  type: 'number',
                  required: true,
                  admin: {
                    width: '50%',
                    description: 'Property price',
                  },
                },
                {
                  name: 'currency',
                  type: 'select',
                  defaultValue: 'USD',
                  options: [
                    { label: 'USD ($)', value: 'USD' },
                    { label: 'EUR (€)', value: 'EUR' },
                    { label: 'GBP (£)', value: 'GBP' },
                    { label: 'NGN (₦)', value: 'NGN' },
                  ],
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'propertyType',
                  type: 'select',
                  required: true,
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
                    width: '50%',
                  },
                },
                {
                  name: 'status',
                  type: 'select',
                  required: true,
                  defaultValue: 'available',
                  options: [
                    { label: 'Available', value: 'available' },
                    { label: 'Sold', value: 'sold' },
                    { label: 'Pending', value: 'pending' },
                    { label: 'Off Market', value: 'off-market' },
                  ],
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'bedrooms',
                  type: 'number',
                  admin: {
                    width: '33%',
                    description: 'Number of bedrooms',
                  },
                },
                {
                  name: 'bathrooms',
                  type: 'number',
                  admin: {
                    width: '33%',
                    description: 'Number of bathrooms',
                  },
                },
                {
                  name: 'area',
                  type: 'number',
                  admin: {
                    width: '34%',
                    description: 'Property area in sq ft',
                  },
                },
              ],
            },
            {
              name: 'location',
              type: 'group',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'address',
                      type: 'text',
                      required: true,
                      admin: {
                        width: '100%',
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'city',
                      type: 'text',
                      required: true,
                      admin: {
                        width: '33%',
                      },
                    },
                    {
                      name: 'state',
                      type: 'text',
                      required: true,
                      admin: {
                        width: '33%',
                      },
                    },
                    {
                      name: 'zipCode',
                      type: 'text',
                      admin: {
                        width: '34%',
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'latitude',
                      type: 'number',
                      admin: {
                        width: '50%',
                        description: 'GPS Latitude',
                      },
                    },
                    {
                      name: 'longitude',
                      type: 'number',
                      admin: {
                        width: '50%',
                        description: 'GPS Longitude',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Media & Description',
          fields: [
            {
              name: 'images',
              type: 'array',
              required: true,
              minRows: 1,
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'caption',
                  type: 'text',
                  admin: {
                    description: 'Optional image caption',
                  },
                },
              ],
              admin: {
                description: 'Property images - first image will be used as the main image',
              },
            },
            {
              name: 'description',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              required: true,
              admin: {
                description: 'Detailed property description',
              },
            },
          ],
        },
        {
          label: 'Features & Amenities',
          fields: [
            {
              name: 'features',
              type: 'array',
              fields: [
                {
                  name: 'feature',
                  type: 'text',
                  required: true,
                },
              ],
              admin: {
                description: 'Property features (e.g., Swimming Pool, Garage, Garden)',
              },
            },
            {
              name: 'amenities',
              type: 'array',
              fields: [
                {
                  name: 'amenity',
                  type: 'text',
                  required: true,
                },
              ],
              admin: {
                description: 'Neighborhood amenities (e.g., Schools, Shopping Centers)',
              },
            },
          ],
        },
        {
          label: 'Agent & Contact',
          fields: [
            {
              name: 'agent',
              type: 'group',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      required: true,
                      admin: {
                        width: '50%',
                      },
                    },
                    {
                      name: 'email',
                      type: 'email',
                      required: true,
                      admin: {
                        width: '50%',
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'phone',
                      type: 'text',
                      admin: {
                        width: '50%',
                      },
                    },
                    {
                      name: 'photo',
                      type: 'upload',
                      relationTo: 'media',
                      admin: {
                        width: '50%',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Feature this property on homepage',
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidateProperty],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
