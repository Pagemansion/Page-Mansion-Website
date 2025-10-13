export function formatFormSubmissionEmail(data: any): string {
  const formName = data.form?.title || data.form || 'Unknown Form'
  const submissionData = data.submissionData || []

  let fieldsHtml = ''
  submissionData.forEach((item: any) => {
    fieldsHtml += `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">
          ${item.field}
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
          ${item.value}
        </td>
      </tr>
    `
  })

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); overflow: hidden;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">
                🔔 New Form Submission
              </h1>
            </div>
            
            <div style="padding: 30px;">
              <p style="margin: 0 0 20px; font-size: 16px; color: #6b7280;">
                You have received a new submission for <strong style="color: #1f2937;">${formName}</strong>
              </p>
              
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <thead>
                  <tr style="background-color: #f3f4f6;">
                    <th style="padding: 12px; text-align: left; font-weight: 600; color: #374151; border-bottom: 2px solid #e5e7eb;">
                      Field
                    </th>
                    <th style="padding: 12px; text-align: left; font-weight: 600; color: #374151; border-bottom: 2px solid #e5e7eb;">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  ${fieldsHtml}
                </tbody>
              </table>
              
              <div style="margin-top: 30px; padding: 20px; background-color: #f9fafb; border-radius: 6px; border-left: 4px solid #667eea;">
                <p style="margin: 0; font-size: 14px; color: #6b7280;">
                  <strong style="color: #374151;">Submitted:</strong> ${new Date().toLocaleString()}
                </p>
                ${data.ipAddress ? `
                  <p style="margin: 8px 0 0; font-size: 14px; color: #6b7280;">
                    <strong style="color: #374151;">IP Address:</strong> ${data.ipAddress}
                  </p>
                ` : ''}
              </div>
              
              <div style="margin-top: 30px; text-align: center;">
                <a href="${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/custom-form-submissions" 
                   style="display: inline-block; padding: 12px 24px; background-color: #667eea; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
                  View in Admin Panel
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
  `
}

export function formatPropertyCreatedEmail(data: any): string {
  const title = data.title || 'Untitled Property'
  const price = data.price ? `$${data.price.toLocaleString()}` : 'N/A'
  const propertyType = data.propertyType || 'N/A'
  const status = data.status || 'N/A'
  const location = data.location?.address || 'N/A'
  const city = data.location?.city || ''
  const state = data.location?.state || ''
  const bedrooms = data.bedrooms || 'N/A'
  const bathrooms = data.bathrooms || 'N/A'
  const area = data.area ? `${data.area} sq ft` : 'N/A'
  const agentName = data.agent?.name || 'N/A'
  const agentEmail = data.agent?.email || 'N/A'

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); overflow: hidden;">
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">
                🏡 New Property Created
              </h1>
            </div>
            
            <div style="padding: 30px;">
              <h2 style="margin: 0 0 20px; font-size: 22px; color: #1f2937; font-weight: 700;">
                ${title}
              </h2>
              
              <div style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-radius: 8px; border-left: 4px solid #10b981;">
                <p style="margin: 0; font-size: 28px; font-weight: 700; color: #059669;">
                  ${price}
                </p>
              </div>
              
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; width: 40%;">
                    Property Type
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                    ${propertyType}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">
                    Status
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                    ${status}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">
                    Location
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                    ${location}${city && state ? `, ${city}, ${state}` : ''}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">
                    Bedrooms
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                    ${bedrooms}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">
                    Bathrooms
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                    ${bathrooms}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">
                    Area
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                    ${area}
                  </td>
                </tr>
              </table>
              
              <div style="margin-top: 30px; padding: 20px; background-color: #f9fafb; border-radius: 6px;">
                <h3 style="margin: 0 0 12px; font-size: 16px; color: #374151; font-weight: 600;">
                  Agent Information
                </h3>
                <p style="margin: 0 0 8px; font-size: 14px; color: #6b7280;">
                  <strong style="color: #374151;">Name:</strong> ${agentName}
                </p>
                <p style="margin: 0; font-size: 14px; color: #6b7280;">
                  <strong style="color: #374151;">Email:</strong> ${agentEmail}
                </p>
              </div>
              
              <div style="margin-top: 30px; text-align: center;">
                <a href="${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/properties/${data.id}" 
                   style="display: inline-block; padding: 12px 24px; background-color: #10b981; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; margin-right: 10px;">
                  View in Admin Panel
                </a>
                ${data.slug ? `
                  <a href="${process.env.NEXT_PUBLIC_SERVER_URL}/properties/${data.slug}" 
                     style="display: inline-block; padding: 12px 24px; background-color: #6b7280; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
                    View on Website
                  </a>
                ` : ''}
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
  `
}
