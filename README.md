🗂️ Full-Stack Kanban Board

A full-stack Kanban board application built with React, Node.js, Express, and MongoDB.
The app supports authentication, role-based access control, and persistent task management with drag-and-drop functionality.

This project was built to practice real-world full-stack development patterns, including protected APIs, JWT authentication, and backend-driven state.

✨ Features
Authentication & Authorization

User signup and login

JWT-based authentication

Protected backend routes

Role-based access control (RBAC)

admin vs user

Only admins can delete tasks

Kanban Board

Three columns:

To Do

In Progress

Done

Create tasks and assign them to columns

Edit task titles

Drag & drop tasks between columns

Tasks persist in the database

Tasks reload correctly on page refresh

UX & State Management

React custom hook (useKanbanBoard) for board logic

Loading data from backend on app load

Search/filter tasks by title

Modals for adding and editing tasks

Role-aware UI (restricted actions hidden for non-admins)

🧱 Tech Stack
Frontend

React

Tailwind CSS

@dnd-kit (drag & drop)

Fetch API

Backend

Node.js

Express

MongoDB + Mongoose

JWT (authentication)

bcrypt (password hashing)

🔐 Roles & Permissions

User

Create tasks

Edit tasks

Move tasks between columns

Admin

All user permissions

Delete tasks

🧠 What I Learned

Implementing JWT authentication end-to-end

Enforcing authorization rules on the backend

Managing frontend state based on backend data

Handling real-world bugs (403 errors, enum validation, ObjectId issues)

Designing a clean separation between UI logic and business logic

📌 Future Improvements

Task descriptions and due dates

Multiple boards per user

Better error messages and notifications

Deployment (Render / Vercel)

📝 Notes

This project was built as a learning exercise to understand full-stack application flow, not as a production-ready system. The focus was on correctness, clarity, and real-world patterns rather than feature volume.
