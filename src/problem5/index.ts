import express from 'express';
import resourceRoutes from './routes/ResourcesRoute';
import sequelize from './config/dbConfig';
const SERVER_PORT: number = 3000;
const app = express();

app.use(express.json());
app.use('/api', resourceRoutes);

sequelize.sync()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err));

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
  });