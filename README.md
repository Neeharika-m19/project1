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

```

## 📦 Installation & Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/Neeharika-m19/project1.git
    cd project1
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up MongoDB**

    Make sure MongoDB is running locally at:

    ```bash
    mongodb://127.0.0.1:27017
    ```

    Create a database named `hospitalInventory` with two collections:

    - `hospital`
    - `ventilators`

    > 💡 You can add sample documents manually using MongoDB Compass or Mongo Shell.

4. **Run the Servers**

    **Main API Server** (port 1200)

    ```bash
    node index.js
    ```

    **Auth/Login Server** (port 200)

    ```bash
    node server.js
    ```
```
