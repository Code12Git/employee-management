# Employee Management System

### Overview
The Employee Management System is a web application designed to manage employee-related operations. It provides a secure login system for both employees and admins, with specific permissions based on roles. Admin users have full control over managing employees, payroll, and attendance, while employees can manage their attendance and view payroll information.

---

## Features

### Admin
The admin has full access to the system and can perform the following tasks:

- **Employee Management**:
  - Create, Read, Update, and Delete (CRUD) operations for employee records.

- **Payroll Management**:
  - Create payroll for employees.
  - View payroll records.
  - Delete payroll records.

- **Attendance Management**:
  - Update attendance records for employees.
  - Delete attendance records.

- **Authentication**:
  - Admin login functionality.

### Employee
Employees have limited access and can perform the following tasks:

- **Attendance**:
  - Mark attendance.
  - View their own attendance records.

- **Payroll**:
  - View their own payroll records.

- **Authentication**:
  - Employee login functionality.

---

## Tech Stack

- **Frontend**: Vite(React.js), Tailwind CSS for styling, Framer Motion for animations.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (for storing employees, payroll, and attendance records).
- **Authentication**: JWT-based authentication.
- **State Management**: Redux.
- **Other Tools**: Redux Thunk for async operations, Toast notifications for user feedback.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Code12Git/employee-management
   cd employee-management-admin
   cd employee-management-client
   cd employee-management-backend

2. **Install dependencies for both frontend and backend**:

- Frontend:

 ```bash

 Copy code
 cd employee-management-admin
 cd employee-management-client
 npm install

```

- Backend:

 ```bash
 Copy code
 cd backend
 npm install

 ```

3. **Environment Variables**: 

Create a .env file in the root of the backend folder and configure the following:

 ```bash
APP_PORT='PORT NUMBER'
LOG_LEVEL='DEBUG'
NODE_ENV='ENIVORNMENT'
NOSQL_DATABASE_URL="YOUR_DATABASE_URL"
SECRET_KEY = 'YOUR_SECRET_KEY'
JWT_TIMEOUT = 'YOUR_JWT_TIMEOUT'
```
4. **Start the development servers**:

Frontend (React):

 ```bash
 Copy code
 cd employee-management-admin
 cd employee-management-client
 npm run dev
 ```

Backend (Express):

```bash
Copy code
cd backend
npm run dev

```

5. **Access the application**:

Frontend: http://localhost:5173
Backend: http://localhost:80000

## API Endpoints

### Authentication

- **POST** `/api/v1/auth/login`: Login for both admin and employee.
- **POST** `/api/v1/auth/register`: Register for admin.

### Employees (Admin only)

- **GET** `/api/v1/employee`: Fetch all employees.
- **POST** `/api/v1/employee`: Create a new employee.
- **PUT** `/api/v1/employee/:id`: Update employee details.
- **DELETE** `/api/v1/employee/:id`: Delete an employee.
- **UPLOAD** `/api/v1/employee/upload/:id`: Upload Avatar Image.
### Payroll (Admin only)

- **GET** `/api/v1/payroll/:id`: Fetch payroll records.
- **POST** `/api/v1/payroll`: Create a new payroll record.
- **DELETE** `/api/v1/payroll/:id`: Delete a payroll record.
- **UPDATE** `/api/v1/payroll/:id`: Update a payroll record.

### Payroll (Employee only)

- **GET** `/api/v1/payroll/:id`: Employee's payroll details.

### Attendance

- **POST** `/api/v1/attendance`: Mark attendance (employee only).
- **GET** `/api/v1/attendance/:id`: View own attendance records (employee only).
- **PUT** `/api/v1/attendance/:id`: Update attendance (admin only).
- **DELETE** `/api/v1/attendance/:id`: Delete attendance (admin only).

## User Roles and Permissions

### Admin:
- Full CRUD access for employees, payroll, and attendance.
- Can create and manage payrolls and attendance records.

### Employee:
- Can only mark their attendance and view their own payroll and attendance.
- Limited access to their own records.

---

## Usage

### Admin
- **Login**: Admins can log in to the system using the admin credentials.
- **Sample Credentials:**
    - **Username**: `rahul46`
    - **Password**: `rahul21`
- **Manage Employees**: Admins can create new employee records, update existing ones, view all employees, and delete employee records.
- **Payroll**: Admins can create payroll records for employees, view all payrolls, and delete payroll entries.
- **Attendance**: Admins can update attendance records, view employee attendance records, and delete attendance entries.

### Employee
- **Login**: Employees can log in using their employee credentials created by admin.
- **Mark Attendance**: Employees can mark their attendance every day.
- **View Payroll**: Employees can view their payroll information.
- **View Attendance**: Employees can view their past attendance records.

---

## Future Enhancements
- Add email notifications for payroll generation.
- Implement role-based access control using a more robust authorization system.
- Improve reporting by adding detailed analytics for payroll and attendance.
- Add Filtering Logic and Pagination Logic

## License
This project is licensed under the MIT License.