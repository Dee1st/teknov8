# Teknov8 - Render Deployment Guide

## Prerequisites
1. A GitHub account
2. A Render account (free tier available at https://render.com)

## Deployment Steps

### 1. Push Your Code to GitHub
First, initialize a git repository and push to GitHub:

```bash
git init
git add .
git commit -m "Initial commit for Render deployment"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. Deploy on Render

1. Go to https://render.com and sign in with GitHub
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository (authorize Render if needed)
4. Select the `Teknov8` repository
5. Configure the service:
   - **Name**: `teknov8` (or your preferred name)
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
   - **Plan**: Select **Free** (or paid if you prefer)

### 3. Add Environment Variable

Before deploying, add your API key:

1. Scroll down to **Environment Variables**
2. Click **"Add Environment Variable"**
3. Add:
   - **Key**: `GROQ_API_KEY`
   - **Value**: `[Your GROQ API Key from .env file]`

### 4. Deploy

Click **"Create Web Service"** at the bottom.

Render will:
- Clone your repository
- Install dependencies (this may take 5-10 minutes for FAISS)
- Start your Flask app
- Provide you with a live URL (e.g., `https://teknov8.onrender.com`)

### 5. Monitor Deployment

You can watch the build logs in real-time on the Render dashboard.

## Notes

- **Free tier**: Your app will spin down after 15 minutes of inactivity and take ~30 seconds to wake up on the first request
- **Paid tier** ($7/month): Keeps your app always running
- The `render.yaml` file I created allows for automatic deployments from GitHub

## Troubleshooting

If the build fails:
- Check the logs in the Render dashboard
- Ensure all files are committed to GitHub
- Verify the environment variable is set correctly
