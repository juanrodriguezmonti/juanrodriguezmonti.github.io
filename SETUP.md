# Blog Setup Instructions

## 1. Sanity CMS Setup

1. Go to [sanity.io](https://sanity.io) and create a free account
2. Create a new project:
   - Choose a project name (e.g., "juan-blog")
   - Select "Blog" template or start blank
   - Note your **Project ID** (format: abc123de)
   - Choose dataset name: "production"

## 2. Update Environment Variables

Update your Vercel environment variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your actual project ID from Sanity
- `NEXT_PUBLIC_SANITY_DATASET`: "production"

## 3. Deploy and Access Studio

1. Deploy to Vercel (environment variables will be applied)
2. Access your Sanity Studio at: `https://your-domain.vercel.app/studio`
3. Start adding blog posts and talks!

## 4. Content Structure

### Blog Posts
- Title
- Slug (auto-generated)
- Excerpt
- Content (rich text with code blocks)
- Tags
- Reading time
- Published date

### Talks
- Title
- Event name
- Date
- Location
- Description
- Slides URL
- Video URL
- Tags

## 5. Example Content

Create your first blog post about:
- "Building a Modern Developer Blog with Next.js and Sanity"
- "Python Algorithms Every Developer Should Know"
- "My Journey as a Backend Developer"

Add some talks:
- Conference presentations
- Workshop sessions
- University lectures
