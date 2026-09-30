# VolunteerHub — Volunteer Management & Community Portal 🤝

A full-stack **MERN** (MongoDB, Express.js, React, Node.js) web application designed to streamline community volunteering initiatives, volunteer onboarding, and charity program operations.

---

## 🌟 Highlights & Architecture

- **Role-Based Access Control (RBAC)**: Distinct permissions and interactive interfaces for **Volunteers** and **Administrators**.
- **Volunteer Onboarding & Approval Pipeline**: Two-stage onboarding where new signups submit profile details (skills, availability, contact, city) and administrators review/approve profiles before event application privileges are granted.
- **Charity Program Management (CRUD)**: Administrators can create, update, filter, and close volunteering events and outreach initiatives.
- **Application Tracking System**: Volunteers browse active programs with pagination and apply in real time; admins review and update application decisions.
- **Administrative Analytics Dashboard**: Interactive visual dashboards (powered by Chart.js) providing metrics on total volunteer registrations, pending reviews, program categories, and fulfillment rates.
- **Modern Responsive UI**: Built with React 19, Tailwind CSS v4, dynamic modal/toast notifications, and glassmorphic dark-mode design.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19, Vite
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4
- **Data Visualization**: Chart.js, react-chartjs-2
- **HTTP Client**: Axios (with centralized request interceptors for JWT injection)

### Backend
- **Runtime & Framework**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT) & bcryptjs password hashing
- **Mock Data Generation**: @faker-js/faker

---

## 📸 Screenshots

<img width="1807" height="911" alt="Homepage" src="https://github.com/user-attachments/assets/99f50186-d724-444c-90cc-a5f0a82c1fdd" />

<img width="1820" height="922" alt="Programs Directory" src="https://github.com/user-attachments/assets/ee7a09fc-935b-44e3-a757-cf125b23c158" />

<img width="1821" height="917" alt="Admin Dashboard Overview" src="https://github.com/user-attachments/assets/7adbba51-90d9-4bdf-a4c3-a77f0c6e034b" />

<img width="1822" height="922" alt="Volunteer Management Queue" src="https://github.com/user-attachments/assets/0bc1e680-214c-4804-920d-1d09e618de34" />

<img width="1842" height="912" alt="Application Management" src="https://github.com/user-attachments/assets/4b01c24e-18c4-4109-a5fc-f4c50a870678" />

<img width="1836" height="912" alt="Program Creation Modal" src="https://github.com/user-attachments/assets/e9d1ce70-b693-423a-bce9-b8b0882e0463" />

---

## 🔐 Credentials & Default Roles

An initial administrative user can be seeded or authenticated with:
- **Email:** `admin@gmail.com`
- **Password:** `admin123`

*Standard volunteer users can register freely directly from the registration page (`/register`).*

---

## ⚙️ Local Setup Guide

### Prerequisites
- Node.js (v18 or newer)
- MongoDB instance (Local or MongoDB Atlas)

---

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment configuration (.env)
cp .env.example .env # or create manually
```

Configure your `backend/.env` file:
```env
PORT=5000
URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_LIFETIME=7d
CLIENT_URL=http://localhost:5173
```

*(Optional) Seed database with mock programs, volunteers, and applications:*
```bash
npm run seed
```

Start the backend server:
```bash
npm start
# or with live reload:
npm run dev
```
Backend will run at `http://localhost:5000`.

---

### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start Vite development server
npm run dev
```
Frontend will be accessible at `http://localhost:5173`.

---

## 📋 API Endpoints Overview

| Method | Endpoint | Description | Access |
|---|---|---|---|
| `POST` | `/api/auth/register` | Register new user account | Public |
| `POST` | `/api/auth/login` | Authenticate user & receive JWT | Public |
| `GET` | `/api/volunteer/my` | Fetch current volunteer profile | Authenticated |
| `POST` | `/api/volunteer` | Submit volunteer profile details | Authenticated |
| `GET` | `/api/programs` | List active programs (paginated) | Public |
| `POST` | `/api/application/:id`| Apply to a program | Approved Volunteer |
| `GET` | `/api/application/my` | View personal applications | Authenticated |
| `GET` | `/api/admin/stats` | Aggregated dashboard analytics | Admin |
| `GET` | `/api/admin/volunteers` | List volunteers with status filter | Admin |
| `PATCH`| `/api/admin/volunteer/:id` | Approve/Reject volunteer profile | Admin |
| `POST` | `/api/admin/programs` | Create new volunteering program | Admin |
| `GET` | `/api/admin/applications` | Review & update volunteer applications | Admin |

---

## 🚀 Deploying to Vercel

You can deploy VolunteerHub to Vercel in either of two ways:

### Option 1: Two Separate Vercel Projects (Recommended)

#### Step A: Deploy the Backend API
1. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
2. Select your repository and configure:
   - **Root Directory**: Select `backend`
   - **Framework Preset**: Other
3. In **Environment Variables**, add:
   - `URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: A secure random secret string
   - `JWT_LIFETIME`: `7d`
   - `CLIENT_URL`: Your frontend Vercel URL (can be updated after frontend is deployed)
4. Click **Deploy**. Note down your deployed Backend URL (e.g., `https://volunteer-backend.vercel.app`).

#### Step B: Deploy the Frontend
1. In Vercel, click **"Add New Project"** and select the same repository again.
2. Configure:
   - **Root Directory**: Select `frontend`
   - **Framework Preset**: Vite
3. In **Environment Variables**, add:
   - `VITE_API_URL`: `https://volunteer-backend.vercel.app/api` (using your backend URL from Step A)
4. Click **Deploy**.

---

### Option 2: Single Unified Monorepo (All-in-One Deployment)

Deploy both the frontend and backend under a single Vercel domain with zero CORS setup:
1. In Vercel, click **"Add New Project"** and import the repository.
2. Keep **Root Directory** as the root (`.`).
3. Add the following **Environment Variables**:
   - `URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret
   - `JWT_LIFETIME`: `7d`
4. Click **Deploy**.
   - Vercel automatically builds the frontend from `frontend/` and routes `/api/*` requests to the Express serverless function (`api/index.js`).

---

## 📄 License
MIT License

