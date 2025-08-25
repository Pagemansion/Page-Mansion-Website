# Forms Setup Documentation

## Overview

This project now has a complete forms system integrated with Payload CMS. Forms are submitted through the API and stored in the `form-submissions` collection, which can be viewed and managed in the Payload admin panel.

## Collections Created

### 1. Forms Collection (`/admin/collections/forms`)

- Stores form definitions including fields, validation rules, and confirmation messages
- Each form has a unique title that should match what's used in the frontend components
- Supports various field types: text, email, textarea, select, checkbox, phone
- Can configure email notifications and confirmation messages

### 2. Form Submissions Collection (`/admin/collections/form-submissions`)

- Stores all form submissions with metadata
- Links submissions to their parent forms
- Includes IP address and user agent tracking
- Supports status management (new, in-progress, completed, spam)
- Allows admin notes and comments

## Forms Available

### 1. Contact Form

- **Title**: "Contact Form"
- **Used by**: `/contact` page (`ContactForm` component)
- **Fields**: full-name, email, phone, message
- **Location**: Contact page

### 2. General Contact Form

- **Title**: "General Contact"
- **Used by**: Home page (`ContactSection` component)
- **Fields**: name, email, phone, propertyInterest, message
- **Location**: Home page contact section

### 3. Property Interest Form

- **Title**: "Property Interest Form"
- **Used by**: Property pages (`PropertyInterestForm` component)
- **Fields**: full-name, email, phone, message, propertyTitle
- **Location**: Individual property pages

## How It Works

1. **Frontend**: Forms submit to `/api/form-submissions` endpoint
2. **API**: Endpoint finds the form by title and creates a submission record
3. **Database**: Submission is stored with all form data and metadata
4. **Admin**: Admins can view, manage, and respond to submissions
5. **Emails**: Automatic email notifications can be sent to users and admins

## Testing Forms

1. **Start your development server**

   ```bash
   npm run dev
   ```

2. **Access Payload admin**
   - Go to `/admin`
   - Check that you see "Forms" and "Form Submissions" in the collections menu

3. **Test form submission**
   - Go to `/contact` page
   - Fill out and submit the contact form
   - Check the admin panel to see the submission

4. **Verify data**
   - Go to `/admin/collections/form-submissions`
   - You should see your test submission with all the form data

## Troubleshooting

### Forms not appearing in admin

- Restart your development server
- Check that the collections are properly imported in `payload.config.ts`
- Verify the form builder plugin is enabled

### Form submissions not saving

- Check the browser console for errors
- Verify the API endpoint is working (`/api/form-submissions`)
- Ensure the form title matches exactly between frontend and admin

### Email notifications not working

- Check your email configuration in the form settings
- Verify the email templates are properly configured
- Check server logs for email delivery errors

## Customization

### Adding New Forms

1. Create a new form in the admin panel
2. Configure fields, validation, and confirmation messages
3. Update your frontend component to use the correct form title
4. Test the form submission

### Modifying Existing Forms

1. Edit the form in the admin panel
2. Update field configurations as needed
3. Test to ensure existing functionality still works
4. Update frontend components if field names change

### Field Types Available

- **text**: Single line text input
- **email**: Email input with validation
- **textarea**: Multi-line text input
- **select**: Dropdown selection
- **checkbox**: Boolean checkbox
- **phone**: Phone number input

## Security Notes

- Forms are publicly accessible for submission
- Submissions are stored with IP address and user agent for spam detection
- Admin access controls prevent unauthorized access to submissions
- Form data is sanitized before storage

## Next Steps

1. **Email Integration**: Configure SMTP settings for email notifications
2. **Spam Protection**: Add CAPTCHA or other anti-spam measures
3. **Form Analytics**: Track form performance and conversion rates
4. **Custom Fields**: Add more field types as needed for your use case
