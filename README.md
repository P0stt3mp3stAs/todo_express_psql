# Todo List Web Application
  This is a simple todo list web application built using React for the frontend and Express.js for the backend. The application utilizes an API to store and manage todo list items in a PostgreSQL database. Users can add, edit, delete, and mark todo items as completed through the user interface.

# Features
  Add new todo items with a description.
  Mark todo items as completed.
  Edit existing todo items.
  Delete todo items.
  Clear all todo items.

# Technologies Used
  Frontend:
  * React.js - JavaScript library for building user interfaces.
  * Axios - Promise-based HTTP client for making API requests.
  * Tailwind CSS - Utility-first CSS framework for styling components.

  Backend:
  * Express.js - Web application framework for Node.js.
  * PostgreSQL - Relational database management system.
  * Node.js - JavaScript runtime environment.

# Prerequisites
  Before running the application locally, ensure you have the following installed:
  * Node.js and npm (Node Package Manager)
  * PostgreSQL database server

# Getting Started
  * Clone the repository to your local machine:
  git clone https://github.com/P0stt3mp3stAs/todo_express_psql todoList

  * Navigate to the project directory:
  cd todoList

  * Install dependencies for both frontend and backend:
    cd client
    npm install

    cd ../server
    npm install

  * Set up the PostgreSQL database:
    Create a PostgreSQL database.
    Update the database connection details in server/db.js.
  Start the backend server:

  bash
  Copy code
# From the project root directory
  cd backend
  npm start
  Start the frontend development server:

  bash
  Copy code
# From the project root directory
  cd frontend
  npm start
  Open your web browser and navigate to http://localhost:3000 to view the todo list application.

  License
  This project is licensed under the

  