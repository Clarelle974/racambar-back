import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

interface JokeAttributes {
  id?: number;
  question: string;
  answer: string;
}

class Joke extends Model<JokeAttributes> implements JokeAttributes {
  public id!: number;
  public question!: string;
  public answer!: string;
}

Joke.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'jokes',
    modelName: 'Joke',
    timestamps: false,
  }
);

export default Joke;
