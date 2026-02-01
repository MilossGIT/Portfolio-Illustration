# Cloudinary Image Management Setup

## Initial Setup (One-time)

### 1. Create Cloudinary Account

- Go to https://cloudinary.com/users/register/free
- Sign up for a free account
- Verify your email

### 2. Get Your API Credentials

- Go to Dashboard: https://console.cloudinary.com/
- Find **Account Details** section
- Copy these three values:
  - **Cloud Name** (e.g., `dxxxx`)
  - **API Key** (e.g., `123456789012345`)
  - **API Secret** (click eye icon to reveal)

### 3. Update .env File

Open `.env` file and replace the placeholder values:

```
CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

### 4. Create Portfolio Folder

- In Cloudinary Console, go to **Media Library**
- Create a folder called `portfolio-gallery`
- This is where all portfolio images will be stored

## Adding/Updating Images

### Method 1: Upload via Cloudinary Console (Easiest)

1. Go to https://console.cloudinary.com/media-library
2. Navigate to `portfolio-gallery` folder
3. Click **Upload** button
4. Select and upload your images
5. After upload completes, run sync command (see below)

### Method 2: Drag and Drop

1. Open Cloudinary Media Library
2. Open `portfolio-gallery` folder
3. Drag images directly into the browser
4. After upload completes, run sync command (see below)

## Sync Images to Website

**Every time you add/remove images in Cloudinary:**

1. Open terminal in project folder
2. Run the sync command:
   ```bash
   npm run sync-images
   ```
3. This creates/updates `public/images-data.json` with all your images
4. Refresh your website - new images will appear!

## Important Notes

✅ **DO**: Upload images to the `portfolio-gallery` folder only  
✅ **DO**: Run `npm run sync-images` after uploading new images  
✅ **DO**: Commit `public/images-data.json` to git so images appear in production

❌ **DON'T**: Share your `.env` file (it contains secrets)  
❌ **DON'T**: Upload images to the root folder - use `portfolio-gallery`  
❌ **DON'T**: Delete `public/images-data.json` - it's needed for the website

## Deployment (Vercel)

When deploying to Vercel:

1. The `public/images-data.json` file will be included automatically
2. Your images will display without any additional configuration
3. When you want to add new images:
   - Upload to Cloudinary
   - Run `npm run sync-images` locally
   - Commit and push the updated `images-data.json` file
   - Vercel will auto-deploy with the new images

## Troubleshooting

**"Error: HTTP error! status: 404" in console**

- Run `npm run sync-images` to generate the images data file

**"Error syncing images" when running sync script**

- Check that your `.env` file has the correct credentials
- Make sure the `portfolio-gallery` folder exists in Cloudinary

**Images not showing up**

- Verify images are in the `portfolio-gallery` folder (not root)
- Run `npm run sync-images` again
- Check browser console for errors
- Refresh the page

**Need to reorganize images?**

- You can rename/move images in Cloudinary Media Library
- Just run `npm run sync-images` afterwards to update the website
