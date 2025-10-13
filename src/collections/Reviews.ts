import type { CollectionConfig } from 'payload'
import { sendEmail } from '../utilities/sendEmail'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'rating', 'status', 'createdAt'],
  },
  access: {
    read: ({ req: { user } }) => {
      // Public can read published reviews
      if (!user) {
        return {
          status: {
            equals: 'published',
          },
        }
      }
      // Admin can read all
      return true
    },
    create: () => true, // Allow public submissions
    update: ({ req: { user } }) => Boolean(user), // Only admin can update
    delete: ({ req: { user } }) => Boolean(user), // Only admin can delete
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Customer Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'rating',
      type: 'select',
      required: true,
      options: [
        { label: '5 Stars', value: '5' },
        { label: '4 Stars', value: '4' },
        { label: '3 Stars', value: '3' },
        { label: '2 Stars', value: '2' },
        { label: '1 Star', value: '1' },
      ],
      defaultValue: '5',
    },
    {
      name: 'review',
      type: 'textarea',
      required: true,
      label: 'Review Text',
    },
    {
      name: 'propertyPurchased',
      type: 'text',
      label: 'Property Purchased (Optional)',
    },
    {
      name: 'location',
      type: 'text',
      label: 'Location/Area',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Pending Review', value: 'pending' },
        { label: 'Published', value: 'published' },
        { label: 'Rejected', value: 'rejected' },
      ],
      admin: {
        description: 'Only published reviews will appear on the website',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Review',
      admin: {
        description: 'Featured reviews will be highlighted on the homepage',
      },
    },
    {
      name: 'adminNotes',
      type: 'textarea',
      label: 'Admin Notes',
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.status),
      },
    },
    {
      name: 'submittedAt',
      type: 'date',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (!value && !siblingData.submittedAt) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create') {
          data.submittedAt = new Date()
        }
        return data
      },
    ],
    afterChange: [
      async ({ doc, operation }) => {
        // Send email notification for new reviews
        if (operation === 'create') {
          const adminEmail = process.env.ADMIN_EMAIL || 'admin@pagemansion.com'
          
          await sendEmail({
            to: adminEmail,
            subject: `New Review Submitted - ${doc.rating} Stars`,
            html: `
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
                  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); overflow: hidden;">
                      <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 30px; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">
                          ⭐ New Review Submitted
                        </h1>
                      </div>
                      
                      <div style="padding: 30px;">
                        <div style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 8px; text-align: center;">
                          <p style="margin: 0; font-size: 32px; font-weight: 700; color: #d97706;">
                            ${'⭐'.repeat(parseInt(doc.rating))}
                          </p>
                          <p style="margin: 8px 0 0; font-size: 18px; font-weight: 600; color: #92400e;">
                            ${doc.rating} out of 5 stars
                          </p>
                        </div>
                        
                        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                          <tr>
                            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; width: 30%;">
                              Name
                            </td>
                            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                              ${doc.name}
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">
                              Email
                            </td>
                            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                              ${doc.email}
                            </td>
                          </tr>
                          ${doc.propertyPurchased ? `
                          <tr>
                            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">
                              Property
                            </td>
                            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                              ${doc.propertyPurchased}
                            </td>
                          </tr>
                          ` : ''}
                          ${doc.location ? `
                          <tr>
                            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">
                              Location
                            </td>
                            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                              ${doc.location}
                            </td>
                          </tr>
                          ` : ''}
                          <tr>
                            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">
                              Status
                            </td>
                            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                              <span style="padding: 4px 12px; background-color: #fef3c7; color: #92400e; border-radius: 12px; font-size: 12px; font-weight: 600;">
                                ${doc.status}
                              </span>
                            </td>
                          </tr>
                        </table>
                        
                        <div style="margin: 20px 0; padding: 20px; background-color: #f9fafb; border-radius: 6px; border-left: 4px solid #f59e0b;">
                          <h3 style="margin: 0 0 12px; font-size: 16px; color: #374151; font-weight: 600;">
                            Review
                          </h3>
                          <p style="margin: 0; font-size: 14px; color: #6b7280; line-height: 1.6;">
                            ${doc.review}
                          </p>
                        </div>
                        
                        <div style="margin-top: 30px; text-align: center;">
                          <a href="${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/reviews/${doc.id}" 
                             style="display: inline-block; padding: 12px 24px; background-color: #f59e0b; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
                            Review & Approve
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div style="text-align: center; margin-top: 20px; padding: 20px;">
                      <p style="margin: 0; font-size: 12px; color: #9ca3af;">
                        This is an automated notification from Page Mansion
                      </p>
                    </div>
                  </div>
                </body>
              </html>
            `,
          })
        }
      },
    ],
  },
}
