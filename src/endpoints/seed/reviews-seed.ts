import type { Payload } from 'payload'

export const seedReviews = async (payload: Payload): Promise<void> => {
  const sampleReviews = [
    {
      name: 'David Bradford',
      email: 'david.bradford@example.com',
      rating: '5' as const,
      review:
        "Working with Page Mansions was a game changer! Their expertise and personalized approach made buying my first home a breeze. They took the time to understand my needs and guided me through every step, making the process feel seamless. I felt confident and well-informed and I couldn't have asked for a better experience.",
      propertyPurchased: '3-bedroom apartment',
      location: 'Maitama, Abuja',
      status: 'published' as const,
      featured: true,
      submittedAt: new Date('2024-01-15').toISOString(),
    },
    {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      rating: '5' as const,
      review:
        'Exceptional service from start to finish! The team at Page Mansions helped me find the perfect property for my family. Their attention to detail and commitment to customer satisfaction is unmatched.',
      propertyPurchased: '4-bedroom duplex',
      location: 'Victoria Island, Lagos',
      status: 'published' as const,
      featured: true,
      submittedAt: new Date('2024-02-10').toISOString(),
    },
    {
      name: 'Michael Chen',
      email: 'michael.chen@example.com',
      rating: '4' as const,
      review:
        'Great experience overall. The property search process was smooth and the team was very professional. Would definitely recommend Page Mansions to anyone looking for quality real estate services.',
      propertyPurchased: '2-bedroom flat',
      location: 'Lekki, Lagos',
      status: 'published' as const,
      featured: false,
      submittedAt: new Date('2024-02-20').toISOString(),
    },
    {
      name: 'Aisha Abdullahi',
      email: 'aisha.abdullahi@example.com',
      rating: '5' as const,
      review:
        'Outstanding service! Page Mansions made my property investment journey incredibly smooth. Their market knowledge and professional guidance were invaluable. Highly recommended!',
      propertyPurchased: 'Commercial space',
      location: 'Garki, Abuja',
      status: 'published' as const,
      featured: true,
      submittedAt: new Date('2024-03-05').toISOString(),
    },
    {
      name: 'James Wilson',
      email: 'james.wilson@example.com',
      rating: '4' as const,
      review:
        'Very satisfied with the service provided. The team was responsive and helped me navigate the complexities of property purchase. Good value for money.',
      propertyPurchased: '3-bedroom terrace',
      location: 'Ikeja, Lagos',
      status: 'published' as const,
      featured: false,
      submittedAt: new Date('2024-03-12').toISOString(),
    },
    {
      name: 'Fatima Mohammed',
      email: 'fatima.mohammed@example.com',
      rating: '5' as const,
      review:
        'Excellent customer service and professional handling of my property needs. The team went above and beyond to ensure I got the best deal. Thank you Page Mansions!',
      propertyPurchased: '5-bedroom villa',
      location: 'Asokoro, Abuja',
      status: 'published' as const,
      featured: false,
      submittedAt: new Date('2024-03-18').toISOString(),
    },
  ]

  try {
    // Check if reviews already exist
    const existingReviews = await payload.find({
      collection: 'reviews',
      limit: 1,
    })

    if (existingReviews.docs.length === 0) {
      console.log('Seeding reviews...')

      for (const reviewData of sampleReviews) {
        await payload.create({
          collection: 'reviews',
          data: reviewData,
        })
      }

      console.log('✅ Reviews seeded successfully')
    } else {
      console.log('Reviews already exist, skipping seed')
    }
  } catch (error) {
    console.error('Error seeding reviews:', error)
  }
}
