# Deployment Guide

## Step-by-Step Deployment Instructions

### Prerequisites
- GitHub account (create if needed)
- Project code ready
- Environment variables prepared

---

## ✅ Step 1: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial project setup - BFHL REST API"
```

---

## ✅ Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name: `Bajaj` or `BFHL-API`
4. Make it **PUBLIC** ⚠️
5. Don't add README/gitignore (we have them)
6. Click "Create repository"

---

## ✅ Step 3: Push to GitHub

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Bajaj.git
git push -u origin main
```

**Copy your repository URL:** 
```
https://github.com/YOUR_USERNAME/Bajaj
```

---

## 🚀 Deployment Option 1: VERCEL (Recommended)

### A. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" → Sign in with GitHub
3. Click "New Project"
4. Click "Import Git Repository"
5. Select your `Bajaj` repository
6. Click "Import"

### B. Configure Environment Variables

1. Under "Environment Variables" add:
   - Key: `PORT` → Value: `3000`
   - Key: `OFFICIAL_EMAIL` → Value: `your.email@chitkara.edu.in`
   - Key: `GEMINI_API_KEY` → Value: `your_api_key`
2. Click "Deploy"

### C. Get Your URL
After deployment completes, copy the URL:
```
https://your-project.vercel.app
```

**Test it:**
```
https://your-project.vercel.app/health
```

---

## 🚀 Deployment Option 2: RAILWAY

### A. Deploy on Railway

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Authorize Railway
5. Select your `Bajaj` repository
6. Click "Deploy"

### B. Configure Environment Variables

1. Go to "Variables" tab
2. Add:
   - `PORT` = `3000`
   - `OFFICIAL_EMAIL` = `your.email@chitkara.edu.in`
   - `GEMINI_API_KEY` = `your_api_key`
3. Railway auto-deploys

### C. Get Your URL
Your project will have a public URL like:
```
https://your-project.up.railway.app
```

---

## 🚀 Deployment Option 3: RENDER

### A. Deploy on Render

1. Go to [render.com](https://render.com)
2. Click "New+" → "Web Service"
3. Select "Build and deploy from a Git repository"
4. Click "Connect account" for GitHub
5. Select your `Bajaj` repository
6. Click "Connect"

### B. Configure Service

- **Name:** `bfhl-api`
- **Environment:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`

### C. Add Environment Variables

1. Under "Environment" add:
   - `PORT` = `3000`
   - `OFFICIAL_EMAIL` = `your.email@chitkara.edu.in`
   - `GEMINI_API_KEY` = `your_api_key`
2. Click "Create Web Service"

### D. Get Your URL
After deployment:
```
https://your-project.onrender.com
```

---

## 📋 Final Checklist Before Submission

- [ ] GitHub repository is PUBLIC
- [ ] All source code uploaded
- [ ] `.env` file NOT uploaded (in .gitignore)
- [ ] `README.md` is complete
- [ ] API deployed and working
- [ ] `/health` endpoint returns 200
- [ ] `/bfhl` endpoint with fibonacci works
- [ ] `/bfhl` endpoint with prime works
- [ ] `/bfhl` endpoint with lcm works
- [ ] `/bfhl` endpoint with hcf works
- [ ] `/bfhl` endpoint with AI works
- [ ] Error handling returns correct status codes
- [ ] Input validation prevents crashes

---

## 🧪 Test All Endpoints After Deployment

Replace `YOUR_DEPLOYED_URL` with your actual URL:

### 1. Health Check
```bash
curl YOUR_DEPLOYED_URL/health
```

### 2. Fibonacci
```bash
curl -X POST YOUR_DEPLOYED_URL/bfhl \
  -H "Content-Type: application/json" \
  -d '{"fibonacci": 7}'
```

### 3. Prime
```bash
curl -X POST YOUR_DEPLOYED_URL/bfhl \
  -H "Content-Type: application/json" \
  -d '{"prime": [2,4,7,9,11]}'
```

### 4. LCM
```bash
curl -X POST YOUR_DEPLOYED_URL/bfhl \
  -H "Content-Type: application/json" \
  -d '{"lcm": [12,18,24]}'
```

### 5. HCF
```bash
curl -X POST YOUR_DEPLOYED_URL/bfhl \
  -H "Content-Type: application/json" \
  -d '{"hcf": [24,36,60]}'
```

### 6. AI
```bash
curl -X POST YOUR_DEPLOYED_URL/bfhl \
  -H "Content-Type: application/json" \
  -d '{"AI": "What is the capital of India?"}'
```

---

## 📧 Submission Format

Submit:
1. **GitHub Repository URL** (public)
2. **Deployed API URL** (one of Vercel/Railway/Render)
3. **Your Chitkara Email**

Example:
```
GitHub: https://github.com/username/Bajaj
API: https://bfhl-api.vercel.app
Email: your.name@chitkara.edu.in
```

---

## ⚠️ Important Notes

- Keep `GEMINI_API_KEY` secret - never share
- Always use HTTPS URLs
- Test all endpoints before final submission
- Ensure API responds within reasonable time
- Verify JSON structure matches specification

---

Good luck with your submission! 🎉
