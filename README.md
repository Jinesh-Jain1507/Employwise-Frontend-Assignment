# EmployWise Frontend Assignment

This project is a React application for basic user management, integrating with the Reqres API. It includes features such as user authentication, a paginated user list, and options to edit and delete users.

---

## 🚀 Features
1. **Login Page**: Secure login with email and password authentication.
2. **User List**: Displays a paginated list of users with their details.
3. **Edit and Delete Users**: Allows editing user details and deleting users from the list.
4. **Responsive Design**: Optimized for desktop and mobile screens.
5. **Error Handling**: Handles API errors gracefully with user-friendly messages.

---

## 📋 Technologies Used
- React (Frontend Framework)
- Axios (HTTP Requests)
- React Router DOM (Navigation)
- Bootstrap (UI Styling)

---

## 📦 Setup Instructions

### Prerequisites
- Node.js installed on your system
- npm or yarn (Node Package Manager)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/jinesh-jain1507/employwise-frontend-assignment.git
   cd employwise-frontend-assignment
2. Install dependencies:
   ```bash
   npm install
3. Run the project:
   ```bash
   npm start
4. Open the application in your browser:
   ```bash
   http://localhost:3000

- **Authentication**: The application uses a static email (`eve.holt@reqres.in`) and password (`cityslicka`) for login.
- **Persistence**: Login tokens are stored in local storage for session persistence.
- **Pagination**: User data is paginated as per the API response.