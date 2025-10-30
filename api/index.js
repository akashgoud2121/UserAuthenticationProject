// server.js (or index.js)

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

// Load environment variables (kept for local testing)
dotenv.config();

// Mongoose Connection Logic
// Uses process.env.MONGO set in Vercel dashboard
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('🎉 Connected to MongoDB successfully!'); 
  })
  .catch((err) => {
    console.log('❌ MongoDB Connection Error:', err);
  });

// Setup Express App
const __dirname = path.resolve();
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// Static Asset Serving (client/dist)
app.use(express.static(path.join(__dirname, '/client/dist')));

// Catch-all to serve the frontend (index.html)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

// CRITICAL: Export the Express app instance for Vercel to run it
export default app;
