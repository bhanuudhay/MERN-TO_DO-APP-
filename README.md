# TASK MANAGER

This is a Task Management System developed using Node.js, Express.js, and MongoDB. The platform enables users to efficiently manage tasks through full CRUD (Create, Read, Update, Delete) functionality. It is designed as a RESTful API, providing endpoints to facilitate seamless task operations.

## Features
- Create a new task
- Retrieve all tasks
- Retrieve a single task by ID
- Update an existing task
- Delete a task

## Technologies Used
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM (Object Data Modeling) for MongoDB
- **dotenv** - Environment variable management
- **Nodemon** - Development tool for automatic server restarts

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (latest LTS recommended)
- [MongoDB](https://www.mongodb.com/) (Cloud or Local)

### Installation

1. Clone the repository:
    ```sh
   git clone https://github.com/yourusername/mern-todo-backend.git
   cd mern-todo-backend

2. Install dependencies:
    ```sh
   MONGO_URI=your_mongodb_connection_string

3. Start the server:
   ```sh
    npm start
## API Endpoints  

1. Get all tasks
   ```sh
   GET /api/tasks  

3. Get a single task by ID
   ```sh
   GET /api/tasks/:id  

5. Create a new task
   ```sh
   POST /api/tasks
   
   Request Body:
   
   {  
     "title": "Buy groceries",  
     "completed": false  
   }  

7. Update a task
   ```sh
   PUT /api/tasks/:id  

   Request Body:  
   {  
     "title": "Updated task title",  
     "completed": true  
   }  

   Uses { new: true, runValidators: true } to return the updated task and validate data.  

9. Delete a task
    ```sh 
   DELETE /api/tasks/:id  

## Notes  
- The backend is connected to a cloud database.  
- runValidators: true ensures data validation during updates.  
- You can use Postman or cURL to test API endpoints.  
