# 🏥 Hospital Management System API

A secure RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage hospital infrastructure, including ventilator tracking, hospital data, and authenticated access.

This project simulates a hospital's internal management backend with role-based authentication using JWT. It demonstrates key backend engineering skills such as API routing, middleware handling, database interaction, and token-based security.

---

## 🚀 Features

- 🔐 **JWT Authentication** for secure access
- 🏥 **CRUD APIs** for Hospital and Ventilator records
- 🔎 **Search APIs** by hospital name or ventilator status
- 🛡️ **Middleware** to validate tokens on protected routes
- 🧩 Modular architecture with separation of concerns

---

## 🛠️ Tech Stack

| Category        | Technology            |
|----------------|-----------------------|
| Backend         | Node.js, Express.js   |
| Database        | MongoDB               |
| Authentication  | JSON Web Token (JWT)  |
| Dev Tools       | Nodemon, Postman      |

---

## 📁 Project Structure

```bash
project1/
├── config.js            # Secret config for JWT
├── index.js             # Core API routes & MongoDB connection
├── middleware.js        # Token authentication middleware
├── server.js            # Login and main route logic
├── package.json         # Dependencies and scripts
└── README.md


