import { NextResponse } from 'next/server'
import { createForms } from '@/scripts/create-forms'

export async function POST() {
  try {
    await createForms()
    return NextResponse.json({ success: true, message: 'Forms created successfully' })
  } catch (error) {
    console.error('Error creating forms:', error)
    return NextResponse.json({ error: 'Failed to create forms' }, { status: 500 })
  }
}
