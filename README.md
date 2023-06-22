# Full-Stack Application

This is a full-stack application that consists of a frontend built with React (using Vite) and a backend built with Node.js and Express.

## Frontend

The frontend is developed using React and Vite, and it communicates with the backend API to fetch and manipulate data.

### External Libraries Used

- React: A JavaScript library for building user interfaces.
- Vite: A fast and opinionated build tool for modern web applications.
- React Router: A library for routing and navigation in React applications.
- Axios: A library for making HTTP requests from the browser.

### Environment Configuration

To configure the frontend environment, follow these steps:

1. Rename the `.env.example` file in the root directory to `.env`.
2. Update the environment variables in the `.env` file as needed.

### Running the Frontend

To run the frontend, follow these steps:

1. Install dependencies: `npm install`.
2. Start the development server: `npm run dev`.
3. Access the application in your browser at `http://localhost:3000`.

## Backend

The backend is developed using Node.js and Express. It provides API endpoints to handle data retrieval and manipulation.

### External Libraries Used

- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express: A fast and minimalist web application framework for Node.js.
- Mongoose: An object data modeling library for MongoDB.
- Dotenv: A module to load environment variables from a `.env` file.

### Environment Configuration

To configure the backend environment, follow these steps:

1. Rename the `.env.example` file in the `backend` directory to `.env`.
2. Update the environment variables in the `.env` file as needed.

### Running the Backend

To run the backend, follow these steps:

1. Install dependencies: `cd backend && npm install`.
2. Start the server: `nodemon app`.
3. The backend will be running at `http://localhost:3000`.

## Running the Full Application

To run the full application, both the frontend and backend should be running simultaneously.

1. Follow the steps mentioned above to start the frontend and backend servers.
2. Access the application in your browser at `http://localhost:5173`.
