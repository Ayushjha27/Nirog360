h1 align="center" style="font-size:3rem;">🚑 Nirog360 – Dispensary Management System</h1>

<p align="center">
A full-stack web application to streamline dispensary operations and patient management.<br>
Secure, scalable, and real-time enabled – designed for modern medical workflows.
</p>

---

## 📦 Repository

[👉 GitHub – Ayushjha27/Nirog360]((https://github.com/Ayushjha27/DMS.git))

---

## 🛠️ Tech Stack

### 🌐 Frontend
- **HTML**, **CSS**, **JavaScript**
- **React.js** – Component-based UI
- **JWT (JSON Web Tokens)** – Secure user sessions

### 🔧 Backend
- **Node.js** with **Express.js**
- **MongoDB** – NoSQL database for storing patient and appointment data
- **Nodemailer** – Email-based alerts and confirmations
- **REST APIs** – For frontend-backend communication
- **JWT** – For authentication & role-based access control

---

## 📁 Project Structure

Nirog360/
├── client/ # Frontend (React.js)
│ ├── public/
│ └── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Login, dashboard, appointment etc.
│ ├── utils/ # API, JWT functions
│ └── App.js # Main component
│
└── server/ # Backend (Node.js + Express)
├── controllers/ # Business logic
├── models/ # MongoDB schemas
├── routes/ # API routes
├── middlewares/ # Auth and validation
├── utils/ # JWT & email utility
└── server.js # Main server file

yaml
Copy
Edit

---

## 🚀 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

---

### 🧩 Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/Ayushjha27/Nirog360.git
cd Nirog360
Install dependencies

bash
Copy
Edit
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
Setup environment variables

Create a .env file in the /server folder with:

env
Copy
Edit
PORT = Your Port
EMAIL_PASSWORD = "Your Password"
EMAIL= "Your Email"

bash
Copy
Edit
# In /server
npm start

# In /client (in another terminal)
npm run dev
✨ Features
👨‍⚕️  Role-based access system
🔐 Secure login & registration with JWT

👨‍⚕️ Role-based dashboards for doctors and staff

🧾Admin analytics dashboard

🧾 Patient record management

💊 Medicine inventory tracking

📧 Email notifications for appointments and alerts

🔄 Real-time data updates via REST APIs

🎯 Roadmap
Core functionalities: login, appointments, inventory

PDF generation for prescriptions

Dockerized deployment

 Cloud hosting (Render/Heroku/Vercel)

🎥 Demo
👉 Click here to watch the demo <>

👨‍💻 Author
Made with 💡 by Shruti Sahu


📄 License
This project is licensed under the MIT License.

markdown
Copy
Edit

---

### ✅ What’s Updated:

- Title made larger using HTML tags (`<h1>`) for emphasis in GitHub rendering.
- Consistent section formatting with clear spacing and emphasis.
- All features, tech, and steps detailed in **clean sections**.
- Placeholder for **demo video link**.
- Attribution to **you as author**.
