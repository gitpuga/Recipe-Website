
# CookBook - Сайт с рецептами

![image](https://github.com/gitpuga/Recipe-Website/assets/118254224/34bf469b-3491-4632-955f-1b9465680482)

## Описание проекта
Проект представляет собой веб-приложение для управления рецептами, включающее фронтенд на React и бэкенд на Node.js с использованием Express.

Пользователи могут просматривать рецепты, получать подробную информацию о каждом рецепте и добавлять новые рецепты.

Приложение разработано с использованием современной архитектуры и технологий, что делает его масштабируемым и поддерживаемым.

## Стек технологий

### Фронтенд:

- React: *Библиотека для построения      пользовательских интерфейсов.*
- CSS: *Стилизация компонентов и страниц.*
- React Router: *Маршрутизация в приложении.*

### Бэкенд:

- Node.js: *Среда выполнения JavaScript.*
- Express: *Фреймворк для создания серверного приложения.*
- MongoDB: *NoSQL база данных для хранения данных о рецептах.*
- Mongoose: *ORM для работы с MongoDB.*
- Docker: *Контейнеризация приложения.*
- Docker Compose: *Оркестрация многоконтейнерных приложений.*

## Архитектура проекта
### Фронтенд

**Компонентная структура:** Фронтенд состоит из отдельных React-компонентов, каждый из которых отвечает за определенную часть пользовательского интерфейса.

**Маршрутизация:** Реализована с использованием React Router, что позволяет пользователям навигировать между страницами списка рецептов и страницей деталей рецепта.

**HTTP-запросы:** Компоненты фронтенда отправляют HTTP-запросы на бэкенд для получения и отправки данных.

### Основные компоненты:

- `RecipeList`: Отображает список рецептов.
- `RecipeCard`: Отдельная карточка рецепта.
- `RecipeDetail`: Отображает подробную информацию о выбранном рецепте.
- `Header и Footer`: Навигационные компоненты и компоненты нижнего колонтитула.

### Бэкенд

**Express сервер:** Обрабатывает HTTP-запросы от фронтенда и взаимодействует с базой данных MongoDB.

**REST API:** Реализует CRUD операции (Create, Read, Update, Delete) для работы с рецептами.

**Mongoose модели:** Определяют схему данных и взаимодействуют с MongoDB для выполнения операций с данными.

### Основные маршруты API:

`GET /api/recipes`: Получение всех рецептов.

`GET /api/recipes/:id`: Получение рецепта по ID.

`POST /api/recipes`: Добавление нового рецепта.

`PUT /api/recipes/:id`: Обновление рецепта по ID.

`DELETE /api/recipes/:id`: Удаление рецепта по ID.

### База данных

**MongoDB:** Хранит данные о рецептах, таких как название, описание, ингредиенты, инструкции и URL изображения.

### Контейнеризация

**Docker:** Используется для упаковки приложения в контейнеры, обеспечивая его изоляцию и переносимость.

**Docker Compose:** Упрощает развертывание многоконтейнерных приложений, таких как фронтенд, бэкенд и база данных.
## Инструкция по развертыванию
**1.** Установите [Docker](https://www.docker.com/products/docker-desktop/) и [Docker Compose](https://www.docker.com/products/docker-desktop/).

**2.** Клонируйте репозиторий:

`git clone <URL репозитория>`   
`cd <директория>`

**3.** Запустите контейнеры:

`docker-compose up --build`

**4.** Доступ к приложению:

Фронтенд: http://localhost:3000

Бэкенд: http://localhost:5000

**5.** Остановите контейнеры:

`docker-compose down`
