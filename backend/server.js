const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipesRoutes = require('./routes/recipes');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();

// Подключение к MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/recipeDB'
).then(() => {
  console.log('Подключено к MongoDB');
}).catch(err => {
  console.error('Ошибка подключения к MongoDB', err);
});

// Обработка CORS
app.use(cors());
app.use(express.json());

// Подключение маршрутов
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipesRoutes);

// Прослушивание порта сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
