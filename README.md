# Bharath Waj M - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring a dynamic backend for serving certifications.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Dynamic Certifications**: Backend integration to serve certificates from local directory
- **Interactive Components**: Hover effects, animations, and smooth transitions
- **Mobile Responsive**: Optimized for all device sizes
- **TypeScript**: Full type safety throughout the application
- **Component Library**: Built with Radix UI and shadcn/ui components

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Radix UI + shadcn/ui for components
- React Query for data fetching
- React Router for navigation

### Backend
- Node.js with Express
- CORS enabled for cross-origin requests
- File system integration for serving certificates
- RESTful API endpoints

## 📁 Project Structure

```
bharathwaj-creative-hub/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── About.tsx       # About section
│   │   ├── Certifications.tsx # Dynamic certifications
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Education.tsx   # Education section
│   │   ├── Experience.tsx  # Work experience
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Navigation.tsx  # Navigation bar
│   │   ├── Projects.tsx    # Projects showcase
│   │   └── Skills.tsx      # Skills section
│   ├── pages/              # Page components
│   ├── assets/             # Static assets
│   └── lib/                # Utility functions
├── backend/                # Backend server
│   ├── server.js          # Express server
│   └── package.json       # Backend dependencies
└── public/                # Public assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bharathwaj-creative-hub
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

### Development

#### Option 1: Start both servers separately
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
npm run dev
```

#### Option 2: Start both servers together
```bash
npm run dev:full
```

#### Option 3: Use the batch script (Windows)
```bash
start-dev.bat
```

### Production Build

```bash
# Build frontend
npm run build

# Start backend in production
cd backend
npm start
```

## 🔧 Configuration

### Backend Configuration
The backend is configured to serve certificates from:
```
D:\bharath_resume\certificates
```

To change this path, modify the `certificatesPath` variable in `backend/server.js`:

```javascript
const certificatesPath = 'YOUR_CERTIFICATES_PATH';
```

### API Endpoints

- `GET /api/health` - Health check
- `GET /api/certificates` - List all certificates
- `GET /api/certificates/:filename` - Serve individual certificate file

## 📱 Features Overview

### Hero Section
- Animated background with floating elements
- Smooth scroll indicators
- Social media links

### About Section
- Professional profile with image
- Animated statistics
- Responsive layout

### Skills Section
- Categorized technical skills
- Interactive skill cards
- Language proficiency

### Certifications Section
- Dynamic loading from backend
- PDF preview in modal
- Download functionality
- File size and date information

### Experience & Education
- Timeline-based layout
- Detailed information cards
- Responsive design

### Projects Section
- Project showcase with descriptions
- Technology tags
- Live demo links

### Contact Section
- Contact form with validation
- Social media integration
- Location information

## 🎨 Customization

### Colors
The color scheme is defined in `src/index.css` using CSS custom properties:

```css
:root {
  --primary: 217 91% 60%;
  --secondary: 268 83% 58%;
  --accent: 142 76% 36%;
  /* ... */
}
```

### Animations
Custom animations are defined in the CSS file:
- `animate-float` - Floating animation
- `animate-fade-in` - Fade in effect
- `animate-slide-in-left/right` - Slide animations
- `animate-glow` - Glowing effect

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Backend (Railway/Heroku)
1. Deploy the `backend` folder
2. Update the API URL in the frontend if needed

## 📄 License

This project is private and proprietary.

## 👨‍💻 Author

**Bharath Waj M**
- Email: bharathwaj2912005@gmail.com
- LinkedIn: [thebharathwaj](https://linkedin.com/in/thebharathwaj)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS