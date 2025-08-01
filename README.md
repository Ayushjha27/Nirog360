<h1 align="center" style="font-size:3rem;">🚑 Nirog360 – Dispensary Management System</h1>

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
🎥 Demo
👉 👉 [Click here to watch the demo](https://drive.google.com/file/d/1Aqeykbhh0JDbHps5bX86bBM02aU0TJYw/view?usp=sharing)

Home Page:
<img width="1907" height="960" alt="image" src="https://github.com/user-attachments/assets/ed105aa8-31bf-4589-a520-bd676fc07e36" />
<img width="1918" height="952" alt="image" src="https://github.com/user-attachments/assets/0bda77ea-b3cd-47a4-9cbc-4a9b074435e6" />
Login Page:
<img width="1900" height="981" alt="image" src="https://github.com/user-attachments/assets/6440595d-3b31-446d-af9c-491560a35cfb" />
Admin Dashboard:
<img width="1917" height="975" alt="image" src="https://github.com/user-attachments/assets/83d5df20-29e3-4198-9f4a-278a11fcfdde" />




## 📁 Project Structure

<code>```
 ` 📦 dispensary-management-system/
│
├── 📁 config/
│   └── db.js                     # MongoDB connection
│
├── 📁 controllers/
│   ├── authController.js
│   ├── userController.js
│   ├── historyController.js
│   ├── medicineController.js
│   ├── facilityController.js
│   ├── notificationController.js
│   ├── hospitalController.js
│   └── galleryController.js
│
├── 📁 models/
│   ├── User.js
│   ├── History.js
│   ├── Medicine.js
│   ├── Facility.js
│   ├── Notification.js
│   ├── NearByHospital.js
│   └── Gallery.js
│
├── 📁 routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   ├── historyRoutes.js
│   ├── medicineRoutes.js
│   ├── facilityRoutes.js
│   ├── notificationRoutes.js
│   ├── hospitalRoutes.js
│   └── galleryRoutes.js
│
├── 📁 middlewares/
│   └── authMiddleware.js         # For protected routes
│
├── 📁 utils/
│   └── helpers.js                # Utility functions
│
├── 📁 uploads/                   # For storing gallery images
│
├── .env                          # Environment variables
├── .gitignore
├── package.json
├── README.md
└── server.js                     # Entry point
</code>

---

## 🚀 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

---

### 🧩 Installation Steps

**Clone the repository**

```bash
git clone https://github.com/Ayushjha27/Nirog360.git
cd Nirog360
Install dependencies


# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
Setup environment variables

Create a .env file in the /server folder with:
PORT = Your Port
EMAIL_PASSWORD = "Your Password"
EMAIL= "Your Email"


# In /backend
npm start

# In /frontend (in another terminal)
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


👨‍💻 Author
Made with 💡 by Shruti Sahu and Ayush Jha

📄 License
This project is licensed under the MIT License.

---


