# Reviews System Documentation

## Overview

This project now has a complete customer reviews/testimonials system integrated with Payload CMS. Reviews are submitted through the API and stored in the `reviews` collection, which can be viewed and managed in the Payload admin panel.

## Collections Created

### Reviews Collection (`/admin/collections/reviews`)

- Stores customer reviews and testimonials
- Each review includes customer name, email, rating (1-5 stars), review text, and optional property/location info
- Supports status management (pending, published, rejected)
- Features a "featured" flag for highlighting special reviews
- Includes admin notes for internal management

## Components Created

### 1. ReviewForm (`/components/ReviewForm/index.tsx`)

- **Used by**: `/reviews` page
- **Fields**: name, email, rating, review, propertyPurchased (optional), location (optional)
- **Features**: Form validation, loading states, success/error messages
- **Submission**: Posts to `/api/reviews` endpoint

### 2. ReviewCard (`/components/ReviewCard/index.tsx`)

- **Purpose**: Displays individual review cards
- **Features**: Star rating display, featured review badge, formatted dates
- **Used by**: Reviews page and homepage reviews section

### 3. ReviewsSection (`/components/PageComponents/Home/ReviewsSection.tsx`)

- **Used by**: Homepage
- **Purpose**: Shows featured reviews on the homepage
- **Features**: Fetches up to 3 featured reviews, loading states, call-to-action buttons

## Pages

### Reviews Page (`/app/(frontend)/reviews/page.tsx`)

- **URL**: `/reviews`
- **Features**:
  - Display all published reviews with pagination
  - Toggle review submission form
  - Average rating calculation and display
  - Responsive grid layout
  - Loading states and empty states

## API Endpoints

### Reviews API (`/app/api/reviews/route.ts`)

- **POST**: Submit new reviews (public access)
- **GET**: Fetch published reviews with pagination and filtering
- **Query Parameters**:
  - `page`: Page number for pagination
  - `limit`: Number of reviews per page
  - `featured`: Filter for featured reviews only

## How It Works

1. **Frontend**: Users submit reviews via the ReviewForm component
2. **API**: Reviews are created with "pending" status by default
3. **Admin**: Admins can review, approve/reject, and feature reviews
4. **Display**: Only published reviews appear on the website
5. **Homepage**: Featured reviews are highlighted in the ReviewsSection

## Admin Management

### Review Workflow

1. **New Submission**: All reviews start with "pending" status
2. **Admin Review**: Admins can view submissions in `/admin/collections/reviews`
3. **Status Options**:
   - **Pending**: Awaiting admin review
   - **Published**: Visible on website
   - **Rejected**: Hidden from website
4. **Featured Reviews**: Can be marked as featured for homepage display

### Admin Features

- View all reviews with filtering by status
- Edit review content if needed
- Add admin notes for internal tracking
- Mark reviews as featured for homepage prominence
- Bulk actions for managing multiple reviews

## Testing the System

1. **Start your development server**

   ```bash
   npm run dev
   ```

2. **Access Payload admin**
   - Go to `/admin`
   - Check that you see "Reviews" in the collections menu

3. **Test review submission**
   - Go to `/reviews` page
   - Click "Write a Review" button
   - Fill out and submit the form
   - Check the admin panel to see the submission

4. **Test homepage display**
   - Mark some reviews as "featured" in the admin
   - Visit the homepage to see the reviews section

## Customization

### Adding New Fields

1. Update the Reviews collection in `src/collections/Reviews.ts`
2. Update the ReviewForm component to include new fields
3. Update the API endpoint to handle new fields
4. Update the ReviewCard component to display new fields

### Styling

- All components use Tailwind CSS classes
- Colors and styling can be customized in the component files
- Featured reviews have a yellow border to distinguish them

### Email Notifications

To add email notifications when reviews are submitted:

1. Configure email settings in your Payload config
2. Add email hooks to the Reviews collection
3. Create email templates for notifications

## Security Features

- Reviews are publicly submittable but require admin approval
- Email validation prevents invalid submissions
- Admin-only access for status changes and management
- IP tracking could be added for spam prevention

## Integration with Homepage

The reviews system is integrated into the homepage via the ReviewsSection component, which:

- Fetches up to 3 featured reviews
- Displays them in an attractive grid layout
- Provides links to view all reviews and submit new ones
- Shows average rating when reviews exist

## Next Steps

1. **Email Notifications**: Set up admin notifications for new reviews
2. **Spam Protection**: Add CAPTCHA or rate limiting
3. **Review Analytics**: Track review metrics and trends
4. **Photo Reviews**: Allow customers to upload photos with reviews
5. **Response System**: Allow admins to respond to reviews publicly
