# VolunteerHub — Volunteer Management & Community Portal 🤝

A full-stack **MERN** (MongoDB, Express.js, React, Node.js) web application designed to streamline community volunteering initiatives, volunteer onboarding, and charity program operations.

Live URL :- https://volunteer-hub-woad.vercel.app

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

## 📄 License
MIT License

