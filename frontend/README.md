# VolunteerHub Frontend 🤝

Responsive, accessible, modern React client for the **VolunteerHub** volunteer registration and program management portal.

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4
- **Charts & Data Visualization**: Chart.js + react-chartjs-2
- **Networking**: Axios

## 🚀 Getting Started Locally

Ensure the backend server is running on `http://localhost:5000` (or configure via environment variables).

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Launch the Vite development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## 🌐 Environment Variables

When deploying the frontend to platforms like Vercel, Netlify, or Cloudflare Pages, configure:

```env
VITE_API_URL=https://your-backend-api-domain.com/api
```

*(If omitted in development, requests default to `http://localhost:5000/api`)*

## 📄 Key Pages & Routes

- `/` — Homepage with mission overview, program categories, and impact statistics
- `/programs` — Paginated directory of active volunteering initiatives with one-click application
- `/register` — Account registration for volunteers
- `/login` — Secure authentication for volunteers and administrators
- `/volunteer/dashboard` — Profile completion (skills, availability, city, phone) and personal application tracker
- `/admin/dashboard` — Administrative analytics dashboard, volunteer approval/rejection queue, program CRUD management, and application review

## 📦 Build & Quality Checks

```bash
# Lint code
npm run lint

# Production build
npm run build

# Preview production build locally
npm run preview
```
