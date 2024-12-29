# To-Do-List-app
This To-Do List App is a project I developed to learn backend web development using Node.js, Express.js, and RESTful APIs. In this project, I applied the core principles of backend development to build a fully functional to-do list application, allowing users to create, read, update, and delete tasks.

=>What I Learned:
Node.js & Express.js:

I learned how to set up a server using Node.js and handle various HTTP requests. Express.js helped simplify the routing and middleware handling, allowing me to structure the backend efficiently.
Express's routing system enabled me to create various endpoints for managing tasks, while middleware was used for logging, data parsing, and error handling.
RESTful API & CRUD Operations:

I implemented a RESTful API where users can perform CRUD operations (Create, Read, Update, Delete) on tasks:
Create: Users can add new tasks to the list.
Read: Users can view all tasks or a specific task.
Update: Users can edit existing tasks.
Delete: Users can remove tasks they no longer need.
Each operation was tied to an HTTP request (POST, GET, PUT/PATCH, DELETE), making it easier to handle data operations in a standardized way.

=>Backend Logic and Routing:

The app's backend features a dynamic routing system where each endpoint is responsible for handling a specific task operation. I also learned how to pass data to the frontend dynamically to ensure that users see the most up-to-date information.

=>Error Handling and Data Validation:

I implemented error handling to manage invalid input or failed database operations, ensuring that users receive appropriate feedback. I also explored basic data validation to make sure only correct and valid data is accepted.

=>Technologies Used:
Frontend: EJS (Embedded JavaScript Templates) for rendering dynamic HTML pages.

Backend: Node.js and Express.js for creating the server and managing API routes