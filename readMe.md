# 🃏 Racambar - Backend API
This is the backend API for Racambar, a mini web application for Carambar-style jokes 🍬

## 🚀 Live API & Documentation
API Base URL: https://racambar-api.onrender.com/api

API Documentation (Swagger): https://racambar-api.onrender.com/api-docs

## 🛠️ Tech Stack
Node.js with Express

Sequelize ORM with SQLite

Swagger for API documentation

## 📁 Project Structure

racambar-back/
├── config/             # Database & app configuration
├── controllers/        # Request handlers
├── middlewares/        # Express middlewares (auth, error handling, etc.)
├── models/             # Sequelize models
├── routes/             # API routes
├── seeders/            # Seed data scripts
├── swagger/            # Swagger config & docs
├── app.js              # Express app setup
├── server.js           # Server launch
├── .env                # Environment variables (not committed)
├── package.json
└── README.md

## ⚙️ Environment Variables (.env)
Create a .env file in the root directory with the following variables. Use the .env.sample file as an example.

## 💻 Getting Started — Run Locally
Clone the repository:

git clone https://github.com/Clarelle974/racambar-back.git
cd racambar-back

Install dependencies:

npm install
Create your .env file as described above.

Run database migrations and seed data :
npm run db:migrate
npm run db:seed

Start the development server:
npm run dev
The API will be available at http://localhost:3000/api

## 🚀 Deployment
The backend is deployed on Render.com at:
https://racambar-api.onrender.com

## 🔗 Useful Links
Frontend repository: https://github.com/Clarelle974/racambar-front

API Documentation (Swagger): https://racambar-api.onrender.com/api-docs

