import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from  './src/router'; 
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));
// app.use(cors()); 

app.use(express.json()); 

// Main route for the API
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API Carambar & Co !');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});