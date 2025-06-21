import sequelize from './src/config/database';
import Joke from './src/models/Joke';

const jokes : {question: string; answer: string }[] =[
  { question: 'Quelle est la femelle du hamster ?', answer: 'L’Amsterdam' },
  { question: 'Que dit un oignon quand il se cogne ?', answer: 'Aïe' },
  { question: "Quel est l'animal le plus heureux ?", answer: 'Le hibou, parce que sa femme est chouette.' },
  { question: "Pourquoi le football c'est rigolo ?", answer: 'Parce que Thierry en rit' },
  { question: 'Quel est le sport le plus fruité ?', answer: 'La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.' },
  { question: 'Que se fait un Schtroumpf quand il tombe ?', answer: 'Un Bleu' },
  { question: 'Quel est le comble pour un marin ?', answer: 'Avoir le nez qui coule' },
  { question: "Qu'est ce que les enfants usent le plus à l'école ?", answer: 'Le professeur' },
  { question: 'Quel est le sport le plus silencieux ?', answer: 'Le para-chuuuut' },
  { question: 'Quel est le comble pour un joueur de bowling ?', answer: 'C’est de perdre la boule' },
];


const seed = async () => {
  try {
    await sequelize.sync({ force: true });
    await Joke.bulkCreate(jokes);
    console.log('Blagues insérées !');
    process.exit();
  } catch (error) {
    console.error('Erreur lors du seed :', error);
    process.exit(1);
  }
};

seed();
