
# 📝 Note-Worthy

**Note-Worthy** is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to securely create, manage, and access their personal notes. It features a modern, responsive interface and a robust backend with user authentication and rate limiting.

---

## ✨ Features

- 🔐 **Secure User Authentication**  
  Users can register and log in to their personal accounts securely.

- 🔑 **JWT-Protected API**  
  All user and note-related API endpoints are secured using JSON Web Tokens (JWT).

- 📝 **Full CRUD Functionality**  
  Users can **Create**, **Read**, **Update**, and **Delete** their notes.

- 💅 **Modern UI**  
  Built with **React**, styled using **Tailwind CSS** and **daisyUI** for a clean, responsive, and customizable design.

- 🚫 **API Rate Limiting**  
  Protects backend endpoints from spam and brute-force attacks.

---

## 🛠️ Tech Stack

**Frontend:**
- React (with Vite)
- Tailwind CSS
- daisyUI
- Axios

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB (with Mongoose)

**Authentication & Security:**
- JSON Web Tokens (JWT)
- bcryptjs (for password hashing)
- Rate limiting using a Redis database (leveraging the functionality provided at upstash)

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### ✅ Prerequisites

- Node.js (v18 or later)
- MongoDB installed locally or a MongoDB Atlas URI
- `mongosh` or any MongoDB client
- A preconfigured redis database on upstash 

---

### 📁 Clone the Repository

```bash
git clone https://github.com/your-username/Note-Worthy.git
cd Note-Worthy
```

---

## 🔧 Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install
```

### 🔑 Environment Variables

Create a `.env` file inside the `backend` directory:

```env
MONGO_URI=mongodb://127.0.0.1:27017/note-worthy
PORT=5001
JWT_SECRET=your_super_random_and_long_secret_string
UPSTASH_REDIS_REST_URL=url_to_your_upstash_redis_database
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_database_rest_token
```

---

## 💻 Frontend Setup

Open a new terminal and run:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
```

---

## 🏃‍♂️ Running the Application

### In Terminal 1: Start Backend Server

```bash
cd backend
npm run dev
```

> The backend will run on: [http://localhost:5001](http://localhost:5001)

### In Terminal 2: Start Frontend App

```bash
cd frontend
npm run dev
```

> The frontend will run on: [http://localhost:5173](http://localhost:5173)

---

## 🙌 Acknowledgements

- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)

