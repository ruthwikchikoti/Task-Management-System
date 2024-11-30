# **Task Management System**

## **🚀 Overview**
The **Task Management System** is a user-friendly web application designed to streamline task management. It offers features like user authentication, task creation, editing, deletion, and status toggling, all wrapped in a polished and responsive user interface.

---

## **🌟 Features**
### **Core Features**
1. **Authentication**:
   - Register and log in securely with password hashing and JWT authentication.
2. **Task Management**:
   - Add tasks with details like title, description, due date, priority, and status.
   - View all tasks in an organized list.
   - Edit or delete existing tasks.
   - Mark tasks as **Pending** or **Completed** using a toggle.
3. **Filtering and Search**:
   - Filter tasks by status (Pending/Completed) or priority (High, Medium, Low).
   - Use the search bar to find tasks by title or description.
4. **Error Handling**:
   - User-friendly error messages for invalid inputs or authentication issues.
5. **Responsive Design**:
   - Accessible across devices, including desktops, tablets, and mobile phones.

---

## **🎨 User Interface**
- A clean and minimal design ensures a smooth user experience.
- Features like button hover effects, badges for task status, and confirmation prompts enhance usability.
- Fully responsive layout for a seamless experience across devices.

---

## **📂 Project Structure**

```
TaskManagementSystem/
├── backend/
│   ├── controllers/
│   │   ├── authController.js   # Handles user authentication
│   │   ├── taskController.js   # Handles task CRUD operations
│   ├── middleware/
│   │   ├── authMiddleware.js   # Protects routes with JWT
│   ├── models/
│   │   ├── db.js               # SQLite database setup
│   │   ├── userModel.js        # User-related database operations
│   │   ├── taskModel.js        # Task-related database operations
│   ├── routes/
│   │   ├── authRoutes.js       # Routes for authentication
│   │   ├── taskRoutes.js       # Routes for task management
│   ├── app.js                  # Express app configuration
│   ├── server.js               # Server entry point
├── frontend/
│   ├── components/
│   │   ├── Auth/               # Login and Register components
│   │   ├── Tasks/              # TaskForm, TaskList, TaskFilter components
│   ├── pages/
│   │   ├── Home.js             # Landing page for Login/Register
│   │   ├── Dashboard.js        # Main app dashboard
│   ├── App.js                  # Main app component
│   ├── index.js                # Entry point for React app
│   ├── App.css                 # Global styles
├── README.md                   # Project documentation
├── package.json                # Project dependencies
├── .env                        # Environment variables (e.g., JWT_SECRET)
```

---

## **⚙️ Technology Stack**

### **Frontend**
- **React.js**: For building the user interface.
- **CSS**: For styling and responsive design.

### **Backend**
- **Node.js**: Server-side runtime environment.
- **Express.js**: Framework for building RESTful APIs.

### **Database**
- **SQLite**: Lightweight, file-based database for data persistence.

### **Authentication**
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **bcrypt.js**: To securely hash user passwords.

---

## **📋 Installation & Setup**

### **1. Prerequisites**
Ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **SQLite**

### **2. Clone the Repository**
```bash
git clone https://github.com/yourusername/TaskManagementSystem.git
cd TaskManagementSystem
```

### **3. Setup Backend**
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following environment variable:
   ```env
   JWT_SECRET=your_secret_key
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### **4. Setup Frontend**
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```

### **5. Open the Application**
The application will open in your default browser at:
```
http://localhost:3000
```

---

## **🚀 Usage**

1. **Register**: Create a new account or log in with existing credentials.
2. **Dashboard**: After logging in, manage your tasks on the dashboard.
3. **Create Tasks**: Use the task form to create new tasks with optional due dates and priorities.
4. **Search**: Find specific tasks using the search bar.
5. **Filter**: Use the filter buttons to view tasks by status or priority.
6. **Edit or Delete**: Modify or remove tasks using the respective buttons.
7. **Toggle Status**: Mark tasks as "Completed" or revert them to "Pending".

---

## **📡 API Endpoints**

### **Authentication**
- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Log in an existing user.

### **Tasks**
- **GET** `/api/tasks`: Get all tasks for the logged-in user.
- **POST** `/api/tasks`: Create a new task.
- **PUT** `/api/tasks/:id`: Update an existing task.
- **DELETE** `/api/tasks/:id`: Delete a task.

---