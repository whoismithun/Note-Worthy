Note-Worthy 📝
Note-Worthy is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to securely create, manage, and access their personal notes. It features a modern, responsive interface and a robust backend with user authentication.

✨ Features
Secure User Authentication: Users can register for a new account and log in to a personal session.

JWT-Protected API: All user-specific data and note-related API endpoints are protected via JSON Web Token (JWT) authentication.

Full CRUD Functionality: Users can Create, Read, Update, and Delete their own notes.

Modern UI: A clean, responsive, and themeable user interface built with React and styled with Tailwind CSS & daisyUI.

API Rate Limiting: The backend is protected against spam and brute-force attacks with request rate limiting.

🛠️ Tech Stack
Frontend: React, Vite, Tailwind CSS, daisyUI, Axios

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Authentication: JSON Web Tokens (JWT), bcryptjs

🚀 Getting Started
Follow these instructions to set up and run the project on your local machine.

Prerequisites
Node.js (v18 or later recommended)

MongoDB installed locally or a MongoDB Atlas connection string.

mongosh or another MongoDB client to manage the database if needed.

1. Clone the Repository
First, clone the repository to your local machine:

Bash

git clone https://github.com/your-username/Note-Worthy.git
cd Note-Worthy
2. Backend Setup
Navigate to the backend folder, create your environment file, and install the necessary dependencies.

Bash

# Navigate to the backend directory
cd backend

# Install dependencies
npm install
3. Frontend Setup
In a new terminal, or after returning to the root folder, navigate to the frontend folder and install its dependencies.

Bash

# Navigate to the frontend directory from the root
cd frontend

# Install dependencies
npm install
🔑 Environment Variables
The backend requires a few environment variables to connect to the database and manage security.

In the backend directory, create a new file named .env.

Copy the following content into the .env file and replace the placeholder values with your own.

# MongoDB Connection URI (local or from Atlas)
MONGO_URI=mongodb://127.0.0.1:27017/note-worthy

# Port for the backend server
PORT=5001

# Your secret key for signing JSON Web Tokens (generate a long, random string)
JWT_SECRET=your_super_random_and_long_secret_string
🏃‍♂️ Running the Application
You will need two separate terminals open to run both the backend and frontend servers simultaneously.

In your first terminal (for the Backend):

Bash

# Navigate to the backend directory
cd backend

# Start the backend server
npm run dev
Your backend API will be running at http://localhost:5001.

In your second terminal (for the Frontend):

Bash

# Navigate to the frontend directory
cd frontend

# Start the frontend development server
npm run dev
Your React application will be running at http://localhost:5173. You can now open this URL in your browser.
