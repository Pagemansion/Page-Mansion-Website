# Email Notifications Setup

Email notifications have been configured for your Payload CMS to notify you about important events.

## What Gets Notified

You'll receive email notifications for:

1. **Form Submissions** - When someone submits any form
2. **New Properties** - When a new property is created
3. **New Reviews** - When someone submits a review

## Configuration

### 1. Set up Resend API Key

You already have Resend installed. Now you need to add your API key to `.env`:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

Get your API key from: https://resend.com/api-keys

### 2. Configure Admin Email

Add your admin email address to `.env`:

```env
ADMIN_EMAIL=your-email@example.com
```

This is where all notifications will be sent.

### 3. Configure Sender Email (Important!)

By default, emails are sent from `onboarding@resend.dev`. For production, you need to:

1. Verify your domain in Resend
2. Update the `from` address in `src/utilities/sendEmail.ts`:

```typescript
from: from || 'notifications@yourdomain.com',
```

## Email Templates

All email templates are in `src/utilities/emailTemplates.ts`. They include:

- Beautiful HTML formatting
- Responsive design
- Direct links to admin panel
- All relevant submission data

## Testing

To test the notifications:

1. Make sure your `.env` has `RESEND_API_KEY` and `ADMIN_EMAIL` set
2. Create a new property in the admin panel
3. Submit a form on your website
4. Submit a review
5. Check your email inbox

## Customization

### Change Email Recipients

Edit the hooks in each collection file:
- `src/collections/FormSubmissions.ts`
- `src/collections/Properties/index.ts`
- `src/collections/Reviews.ts`

### Customize Email Templates

Edit `src/utilities/emailTemplates.ts` to change the design or content.

### Add More Notifications

To add notifications for other collections, follow this pattern:

```typescript
import { sendEmail } from '../utilities/sendEmail'

// In your collection config:
hooks: {
  afterChange: [
    async ({ doc, operation }) => {
      if (operation === 'create') {
        await sendEmail({
          to: process.env.ADMIN_EMAIL || 'admin@example.com',
          subject: 'Your Subject',
          html: 'Your HTML content',
        })
      }
    },
  ],
}
```

## Troubleshooting

### Emails not sending?

1. Check that `RESEND_API_KEY` is set in `.env`
2. Check server logs for error messages
3. Verify your Resend account is active
4. Make sure you're using a verified sender domain (not `onboarding@resend.dev` in production)

### Emails going to spam?

1. Verify your domain in Resend
2. Set up SPF, DKIM, and DMARC records
3. Use a professional sender address

## Files Modified

- ✅ `src/utilities/sendEmail.ts` - Email sending utility
- ✅ `src/utilities/emailTemplates.ts` - Email templates
- ✅ `src/collections/FormSubmissions.ts` - Added form submission notifications
- ✅ `src/collections/Properties/index.ts` - Added property creation notifications
- ✅ `src/collections/Reviews.ts` - Added review submission notifications
