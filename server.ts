import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from  './src/router'; 
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

//swagger config 
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Racambar API',
      version: '1.0.0',
      description: 'API for Racambar mini web app',
    },
    servers: [
      { url: 'http://localhost:3000' },
      { url: 'https://racambar-api.onrender.com' }
    ],
  },
  apis: ['./src/router.ts'], // Chemin vers tes fichiers de routes TypeScript
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// CORS config

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json()); 

// Main route for the API
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API Carambar & Co !');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});