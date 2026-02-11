module.exports = {
  // Server Configuration
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // Database Configuration
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/byjus',
  
  // JWT Configuration
  JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '7d',
  
  // Stripe Configuration
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  
  // API Configuration
  API_URL: process.env.API_URL || 'http://localhost:3000',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3001',
  
  // AI Service Configuration
  AI_SERVICE_URL: process.env.AI_SERVICE_URL || 'http://localhost:5000',
  
  // CORS Configuration
  CORS_ORIGIN: process.env.CORS_ORIGIN || ['http://localhost:3001', 'http://localhost:3000'],
  
  // Email Configuration
  EMAIL_SERVICE: process.env.EMAIL_SERVICE || 'gmail',
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  
  // Application Features
  FEATURES: {
    ENABLE_AI_RECOMMENDATIONS: true,
    ENABLE_PAYMENT_PROCESSING: true,
    ENABLE_EMAIL_NOTIFICATIONS: true,
    ENABLE_PROGRESS_ANALYTICS: true,
  }
};
