import type { Payload } from 'payload'

export const seedProperties = async (payload: Payload): Promise<void> => {
  try {
    console.log('Seeding properties...')

    // Check if properties already exist
    const existingProperties = await payload.find({
      collection: 'properties',
      limit: 1,
    })

    if (existingProperties.totalDocs > 0) {
      console.log('Properties already exist, skipping seed')
      return
    }

    // Create sample properties
    const properties = [
      {
        title: 'Luxury Villa in Abuja',
        price: 250000000,
        currency: 'NGN' as const,
        propertyType: 'villa' as const,
        status: 'available' as const,
        bedrooms: 4,
        bathrooms: 3,
        area: 3500,
        location: {
          address: '123 Diplomatic Zone, Abuja',
          city: 'Abuja',
          state: 'FCT',
          zipCode: '900001',
        },
        images: [
          {
            image: 'https://example.com/villa.jpg', // 👈 use `image`, not `url`
            caption: 'Luxury Villa in Abuja', // optional
          },
        ],
        description: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'A beautiful villa in Lekki with ocean view.',
                    version: 1,
                  },
                ],
                direction: 'ltr' as const,
                format: '' as const, // ✅ fixed
                indent: 0,
                version: 1,
              },
            ],
            direction: 'ltr' as const,
            format: '' as const, // ✅ fixed
            indent: 0,
            version: 1,
          },
        },

        features: [
          { feature: 'Swimming Pool' },
          { feature: 'Garden' },
          { feature: 'Garage' },
          { feature: 'Security System' },
        ],
        agent: {
          name: 'John Doe',
          email: 'john@pagemansions.com',
          phone: '+234 123 456 7890',
        },
        featured: true,
        _status: 'published' as const,
        publishedAt: new Date().toISOString(),
      },
      {
        title: 'Modern Apartment in Lagos',
        price: 150000000,
        currency: 'NGN' as const,
        propertyType: 'apartment' as const,
        status: 'available' as const,
        bedrooms: 3,
        bathrooms: 2,
        area: 2200,
        location: {
          address: '456 Victoria Island, Lagos',
          city: 'Lagos',
          state: 'Lagos',
          zipCode: '101001',
        },
        images: [
          {
            image: 'https://example.com/villa.jpg', // 👈 use `image`, not `url`
            caption: 'Luxury Villa in Abuja', // optional
          },
        ],

        description: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'A beautiful villa in Lekki with ocean view.',
                    version: 1,
                  },
                ],
                direction: 'ltr' as const,
                format: '' as const, // ✅ fixed
                indent: 0,
                version: 1,
              },
            ],
            direction: 'ltr' as const,
            format: '' as const, // ✅ fixed
            indent: 0,
            version: 1,
          },
        },

        features: [{ feature: 'Ocean View' }, { feature: 'Gym' }, { feature: 'Parking' }],
        agent: {
          name: 'Jane Smith',
          email: 'jane@pagemansions.com',
          phone: '+234 987 654 3210',
        },
        featured: false,
        _status: 'published' as const,
        publishedAt: new Date().toISOString(),
      },
      {
        title: 'Family House in Port Harcourt',
        price: 80000000,
        currency: 'NGN' as const,
        propertyType: 'house' as const,
        status: 'available' as const,
        bedrooms: 5,
        bathrooms: 4,
        area: 4000,
        location: {
          address: '789 GRA Phase 2, Port Harcourt',
          city: 'Port Harcourt',
          state: 'Rivers',
          zipCode: '500001',
        },
        images: [
          {
            image: 'https://example.com/villa.jpg', // 👈 use `image`, not `url`
            caption: 'Luxury Villa in Abuja', // optional
          },
        ],
        description: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'A beautiful villa in Lekki with ocean view.',
                    version: 1,
                  },
                ],
                direction: 'ltr' as const,
                format: '' as const, // ✅ fixed
                indent: 0,
                version: 1,
              },
            ],
            direction: 'ltr' as const,
            format: '' as const, // ✅ fixed
            indent: 0,
            version: 1,
          },
        },

        features: [
          { feature: 'Large Garden' },
          { feature: 'Playground' },
          { feature: 'Double Garage' },
        ],
        agent: {
          name: 'Mike Johnson',
          email: 'mike@pagemansions.com',
          phone: '+234 555 123 4567',
        },
        featured: false,
        _status: 'published' as const,
        publishedAt: new Date().toISOString(),
      },
    ]

    for (const propertyData of properties) {
      await payload.create({
        collection: 'properties',
        data: propertyData,
      })
    }

    console.log(`Successfully seeded ${properties.length} properties`)
  } catch (error) {
    console.error('Error seeding properties:', error)
  }
}
