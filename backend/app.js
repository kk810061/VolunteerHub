require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./db/connect');
const authRoute = require('./routes/auth');
const volunteerRoute = require('./routes/volunteer');
const programsRoute = require('./routes/program');
const applicationRoute = require('./routes/application');
const adminRoute = require('./routes/admin');
const errorHandler = require('./middleware/error-handler');

app.use(express.json());

// Dynamic CORS configuration: accepts localhost, Vercel domains, and configured CLIENT_URL
app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
        if (!origin) return callback(null, true);

        if (
            process.env.NODE_ENV !== 'production' ||
            !process.env.CLIENT_URL ||
            origin === process.env.CLIENT_URL ||
            origin.endsWith('.vercel.app') ||
            origin.includes('localhost') ||
            origin.includes('127.0.0.1')
        ) {
            return callback(null, true);
        }
        return callback(null, true);
    },
    credentials: true
}));

// Automatic database connection middleware for serverless invocations
app.use(async (req, res, next) => {
    try {
        if (process.env.URI) {
            await connectDB(process.env.URI);
        }
        next();
    } catch (err) {
        console.error('Database connection error in request:', err);
        next(err);
    }
});

// Health check and root status endpoints
app.get('/', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'VolunteerHub Backend API is running' });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy', uptime: process.uptime() });
});

// Application API routes
app.use('/api/auth', authRoute);
app.use('/api/volunteer', volunteerRoute);
app.use('/api/programs', programsRoute);
app.use('/api/application', applicationRoute);
app.use('/api/admin', adminRoute);

app.use(errorHandler);

// In local development or standalone server, start listener
if (!process.env.VERCEL) {
    const port = process.env.PORT || 5000;
    const start = async () => {
        try {
            await connectDB(process.env.URI);
            app.listen(port, () => {
                console.log(`Server is listening on port ${port}`);
            });
        } catch (err) {
            console.error('Failed to start server:', err);
        }
    };
    start();
}

module.exports = app;