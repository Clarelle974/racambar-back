import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from  './src/router'; 
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // pour parser le JSON dans le body

// Route principale pour les blagues
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API Carambar & Co !');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
