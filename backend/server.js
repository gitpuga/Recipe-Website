const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const recipesRoutes = require('./routes/recipes');

const app = express();

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/recipeDB'
).then(() => {
  console.log('Подключено к MongoDB');
}).catch(err => {
  console.error('Ошибка подключения к MongoDB', err);
});

// Обработка CORS
app.use(cors());

// Парсинг тела запроса в формате JSON
app.use(bodyParser.json());

// Подключение маршрутов
app.use('/api/recipes', recipesRoutes);

// Обработка 404 ошибок (маршрут не найден)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Resource not found' });
});

// Обработка других ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

// Прослушивание порта сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
