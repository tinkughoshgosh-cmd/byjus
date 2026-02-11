# Byjus - Educational AI App

An innovative educational platform powered by AI that provides personalized learning experiences with integrated payment processing.

## Features

### Core Features
- **AI-Powered Learning**: Personalized educational content using machine learning
- **Interactive Lessons**: Engaging course materials with interactive quizzes
- **Progress Tracking**: Real-time progress monitoring and analytics
- **Multi-Subject Support**: Comprehensive curriculum across various subjects
- **Payment Integration**: Seamless third-party payment processing (Stripe)

### Technology Stack
- **Frontend**: React.js, Redux
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI/ML**: Python, TensorFlow
- **Payments**: Stripe API
- **Authentication**: JWT

## Project Structure

```
byjus/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── ml-service/
│   ├── models/
│   ├── training/
│   └── inference.py
├── config/
└── docs/
```

## Installation

### Prerequisites
- Node.js v16+
- Python 3.8+
- MongoDB
- Stripe Account

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## Environment Variables

Create a `.env` file with:
```
MONGODB_URI=your_mongodb_uri
STRIPE_SECRET_KEY=your_stripe_key
JWT_SECRET=your_jwt_secret
API_URL=http://localhost:3000
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh-token` - Refresh JWT token

### Courses
- `GET /api/courses` - List all courses
- `GET /api/courses/:id` - Get course details
- `POST /api/courses` - Create course (Admin)

### Payments
- `POST /api/payments/create-intent` - Create payment intent
- `POST /api/payments/webhook` - Stripe webhook handler

### User Progress
- `GET /api/progress/:userId` - Get user progress
- `POST /api/progress/update` - Update progress

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
