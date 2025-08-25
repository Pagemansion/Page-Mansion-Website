import { getPayload } from 'payload'
import config from '@/payload.config'
import { contactFormSeed } from '@/endpoints/seed/contact-form-seed'
import { generalContactFormSeed } from '@/endpoints/seed/general-contact-form-seed'
import { propertyInterestFormSeed } from '@/endpoints/seed/property-interest-form-seed'

export async function createForms() {
  const payload = await getPayload({ config })

  try {
    // Check if forms already exist
    const { docs: existingForms } = await payload.find({
      collection: 'forms',
      limit: 10,
    })

    const existingTitles = existingForms.map((form) => form.title)

    // Create Contact Form if it doesn't exist
    if (!existingTitles.includes('Contact Form')) {
      await payload.create({
        collection: 'forms',
        data: contactFormSeed,
      })
      console.log('✅ Created Contact Form')
    } else {
      console.log('ℹ️ Contact Form already exists')
    }

    // Create General Contact form if it doesn't exist
    if (!existingTitles.includes('General Contact')) {
      await payload.create({
        collection: 'forms',
        data: generalContactFormSeed,
      })
      console.log('✅ Created General Contact form')
    } else {
      console.log('ℹ️ General Contact form already exists')
    }

    // Create Property Interest form if it doesn't exist
    if (!existingTitles.includes('Property Interest')) {
      await payload.create({
        collection: 'forms',
        data: propertyInterestFormSeed,
      })
      console.log('✅ Created Property Interest form')
    } else {
      console.log('ℹ️ Property Interest form already exists')
    }

    console.log('🎉 Forms creation completed!')
  } catch (error) {
    console.error('❌ Error creating forms:', error)
  }
}
