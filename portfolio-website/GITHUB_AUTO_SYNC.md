# GitHub Auto-Sync Setup

This workflow automatically syncs images from Cloudinary every Wednesday at 3 AM UTC.

## Setup Instructions

### 1. Push Your Code to GitHub

```bash
git add .
git commit -m "Add automatic Cloudinary sync workflow"
git push
```

### 2. Add GitHub Secrets

Go to your GitHub repository:

1. Click **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add these three secrets:

**Secret 1:**

- Name: `CLOUDINARY_CLOUD_NAME`
- Value: `<your-cloud-name>` (get from your .env file)

**Secret 2:**

- Name: `CLOUDINARY_API_KEY`
- Value: `<your-api-key>` (get from your .env file)

**Secret 3:**

- Name: `CLOUDINARY_API_SECRET`
- Value: `<your-api-secret>` (get from your .env file)

### 3. Enable Actions

1. Go to **Actions** tab in your GitHub repo
2. If prompted, click **I understand my workflows, go ahead and enable them**

## How It Works

**Automatic Sync:**

- Runs every Wednesday at 3:00 AM UTC
- Fetches all images from your Cloudinary account
- Updates `public/images-data.json`
- Commits and pushes the changes
- Vercel automatically deploys the update

**Manual Sync:**

1. Go to **Actions** tab
2. Click "Sync Cloudinary Images" workflow
3. Click **Run workflow** → **Run workflow**
4. Images will sync immediately

## Schedule

Current schedule: **Every Wednesday at 3:00 AM UTC**

To change the schedule, edit `.github/workflows/sync-images.yml`:

- `'0 3 * * 3'` = Wednesday 3 AM
- `'0 0 * * *'` = Daily at midnight
- `'0 12 * * 1'` = Every Monday at noon
- `'0 0 1 * *'` = First day of every month

[Cron schedule syntax reference](https://crontab.guru/)

## Important Notes

✅ After initial setup, images sync automatically every Wednesday  
✅ You can manually trigger sync anytime from GitHub Actions tab  
✅ When sync runs, Vercel auto-deploys with new images  
✅ Local development still requires `npm run sync-images`

⚠️ First sync won't run until next Wednesday - use manual trigger for immediate sync  
⚠️ Keep your `.env` file private - never commit it to GitHub
