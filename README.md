# 🔐 MERN Authentication App

A full-stack user authentication system built with **React**, **Node.js**, **Express**, and **MongoDB Atlas**. The app supports user registration, login, logout, protected routes, and toast notifications. JWT is used for authentication and stored in `localStorage` for persistent login.

---

## 🔗 Live Demo

👉 [Check it out here](https://authentication-frontend-0fye.onrender.com)

---

## 📸 Screenshots

| Dark Mode                                 | Light Mode                                  |
| ----------------------------------------- | ------------------------------------------- |
| ![Dark Mode](./screenshots/dark-mode.png) | ![Light Mode](./screenshots/light-mode.png) |

---

## ✨ Features

- 📝 User Registration with unique username/email checks
- 🔐 JWT-based login & logout system
- 🧠 Authentication state stored using `localStorage`
- 🔐 Protected routes using conditional rendering
- 📦 MongoDB Atlas for secure database storage
- 📡 REST API built with Express.js
- 🚫 Graceful error handling and toast notifications
- 🌈 Modern UI built with Tailwind CSS
- 🔁 Realtime feedback with `react-toastify`
- 🌐 Responsive design for mobile and desktop

---

## 🛠️ Tech Stack

### 🔹 Frontend

- **React 19**
- **React Router v7**
- **Tailwind CSS**
- **Axios**
- **React Toastify**

### 🔹 Backend

- **Node.js**
- **Express.js v5**
- **MongoDB Atlas**
- **Mongoose**
- **dotenv**
- **CORS**
- **Nodemon**

---

## 🧪 Getting Started

- Clone the repo :

```bash
git clone https://github.com/PARTHA-PATTANAYAK-02/Authentication_App.git
cd typing-speed-checker
```

### 📦 Installation & Setup

### 🔧 Backend Setup

```bash
cd backend
npm install
```

- Create a .env file and add:

```bash
PORT=8000
MONGODB_URI=your_mongodb_connection_uri
```

- Run the backend:

```bash
nodemon server.js
```

### 🎨 Frontend Setup

- create a react app (vite or CRA)

```bash
cd frontend
npm install
npm run dev
```

### 🔐 Authentication Flow

- User registers with a unique username and email
- User logs in with valid credentials
- On refresh or revisit, login state is retained
- Protected routes like /home are only accessible to logged-in users
- Toasts show login, logout, register, and error states

### 📦 Dependencies

- Backend

```bash
"cors": "^2.8.5",
"dotenv": "^16.5.0",
"express": "^5.1.0",
"mongoose": "^8.14.2",
"nodemon": "^3.1.10"
```

- Frontend

```bash
"axios": "^1.9.0",
"react": "^19.1.0",
"react-dom": "^19.1.0",
"react-router-dom": "^7.6.0",
"react-toastify": "^11.0.5",
"tailwindcss": "^4.1.6"
```

---

## 🌐 Deployment

## This project can be deployed easily using:

- ### 🔗 [vercel](https://authentication-frontend-0fye.onrender.com)

## ✍️ Author

### Made with ❤️ by Partha Pattanayak

- 🔗[Github](https://github.com/PARTHA-PATTANAYAK-02)
- 🔗[LinkedIn](https://www.linkedin.com/in/partha-pattanayak-082a46320/)
