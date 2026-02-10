# BFHL REST API - Chitkara Qualifier 1

A production-ready REST API implementing mathematical operations (Fibonacci, Prime, LCM, HCF) and AI integration using Node.js & Express.

## 📋 Features

- ✅ **GET /health** - Health check endpoint
- ✅ **POST /bfhl** - Multi-operation API supporting:
  - Fibonacci series generation
  - Prime number filtering
  - LCM (Least Common Multiple) calculation
  - HCF (Highest Common Factor) calculation
  - AI-powered question answering (Google Gemini)
- ✅ **Robust input validation** - Comprehensive error handling
- ✅ **Security guardrails** - Input size limits, type checking
- ✅ **CORS enabled** - Safe cross-origin requests
- ✅ **Production-ready** - Deployable on Vercel/Railway/Render

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **AI Integration:** Google Gemini API
- **Environment:** dotenv for configuration
- **HTTP Client:** Axios

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- NPM or Yarn
- Google Gemini API key ([Get free key](https://aistudio.google.com))

### Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Bajaj
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   # Copy example to .env
   cp .env.example .env
   
   # Edit .env with your values
   # Add your Gemini API key and Chitkara email
   ```

4. **Run the server**
   ```bash
   npm start
   # Server runs on http://localhost:3000
   ```

## 📚 API Endpoints

### GET /health
Health check endpoint.

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in"
}
```

---

### POST /bfhl

Main endpoint for all operations. Request should contain exactly one of these keys.

#### 1. Fibonacci Series
**Request:**
```json
{
  "fibonacci": 7
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": [0, 1, 1, 2, 3, 5, 8]
}
```

---

#### 2. Prime Numbers
**Request:**
```json
{
  "prime": [2, 4, 7, 9, 11]
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": [2, 7, 11]
}
```

---

#### 3. LCM (Least Common Multiple)
**Request:**
```json
{
  "lcm": [12, 18, 24]
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": 72
}
```

---

#### 4. HCF (Highest Common Factor)
**Request:**
```json
{
  "hcf": [24, 36, 60]
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": 12
}
```

---

#### 5. AI Query
**Request:**
```json
{
  "AI": "What is the capital city of Maharashtra?"
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": "Mumbai"
}
```

---

## ❌ Error Responses

### Missing/Invalid Input
```json
{
  "is_success": false,
  "official_email": "your.email@chitkara.edu.in",
  "error": "At least one of: fibonacci, prime, lcm, hcf, or AI is required"
}
```

### Invalid Data Type
```json
{
  "is_success": false,
  "official_email": "your.email@chitkara.edu.in",
  "error": "fibonacci must be a non-negative integer"
}
```

### HTTP Status Codes
- `200` - Success
- `400` - Bad Request (validation error)
- `404` - Route Not Found
- `500` - Internal Server Error

---

## 🚀 Deployment

### Vercel
1. Push code to GitHub (public repository)
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import your GitHub repository
4. Add environment variables (.env values)
5. Deploy → Get public URL

**Vercel URL:** `https://your-project.vercel.app`

### Railway
1. Go to [railway.app](https://railway.app)
2. Click "New Project" → Deploy from GitHub
3. Select your repository
4. Add environment variables
5. Deploy → Get public URL

### Render
1. Go to [render.com](https://render.com)
2. Click "New+" → "Web Service"
3. Connect GitHub repository
4. Set build command: `npm install`
5. Set start command: `npm start`
6. Add environment variables
7. Deploy → Get public URL

---

## 🧪 Testing with cURL

```bash
# Health check
curl http://localhost:3000/health

# Fibonacci
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"fibonacci": 7}'

# Prime
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"prime": [2, 4, 7, 9, 11]}'

# LCM
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"lcm": [12, 18, 24]}'

# HCF
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"hcf": [24, 36, 60]}'

# AI
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"AI": "What is 2+2?"}'
```

---

## 🔐 Environment Variables

Create a `.env` file with:

```
PORT=3000
GEMINI_API_KEY=your_api_key_here
OFFICIAL_EMAIL=your.email@chitkara.edu.in
```

**To get Google Gemini API Key:**
1. Visit [https://aistudio.google.com](https://aistudio.google.com)
2. Sign in with your Google account
3. Click "Get API Key"
4. Create API key in project
5. Copy and paste in `.env`

---

## 📋 Input Validation

| Operation | Input Type | Constraints |
|-----------|-----------|-------------|
| fibonacci | number | 0 ≤ n ≤ 50 |
| prime | array | 1-100 elements, positive integers |
| lcm | array | 1-10 elements, positive integers |
| hcf | array | 1-10 elements, positive integers |
| AI | string | 1-500 characters |

---

## 📂 Project Structure

```
.
├── server.js          # Main server file
├── .env.example       # Environment variables template
├── .env               # Environment variables (not uploaded to Git)
├── .gitignore         # Git ignore rules
├── package.json       # Dependencies
├── package-lock.json  # Dependency lock file
└── README.md          # This file
```

---

## 🐛 Troubleshooting

### "Cannot find module 'express'"
```bash
npm install
```

### "Gemini API key not configured"
Add `GEMINI_API_KEY` to your `.env` file

### "Port 3000 already in use"
Change PORT in `.env` or kill the process using port 3000

### API returns "Internal server error"
Check server logs and ensure all environment variables are set

---

## ✨ Key Features Implemented

✅ Strict API response structure
✅ Correct HTTP status codes
✅ Robust input validation
✅ Graceful error handling (no crashes)
✅ Security guardrails (size limits, type checking)
✅ Public accessibility of APIs
✅ Boundary condition handling
✅ Security edge cases covered
✅ Production-ready code

---

## 📝 Author

Your Name (Chitkara University, Class of 2027)

---

## 📄 License

MIT License - feel free to use this for your submission!
