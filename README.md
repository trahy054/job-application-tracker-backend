# Job Tracker - Backend

Backend of the **Job Tracker** project, built with **Node.js** and **Express**, using **MongoDB Atlas** for the database.

This service provides RESTful API endpoints for managing jobs (view, add, update, delete) with support for filtering, sorting, and statistics.

## 📌 Features
- Fetch job list
- Add new job
- Update / Delete job
- Filter jobs by status
- Sort jobs
- Job statistics

## ⚙️ Requirements
- Node.js >= 16 
- npm >= 8
- MongoDB Atlas account and cluster

## 🛠 Installation & Run
1. Clone the repo:
```bash
git clone https://github.com/trahy054/job-application-tracker-backend.git
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file in the root folder and add your MongoDB connection URI:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/jobtracker?retryWrites=true&w=majority

4. Start the backend server:
```bash
npm run dev
```
    
## Notes
- Tested with Node.js v24.7.0 and npm v11.5.1
- Ensure your MongoDB Atlas user has proper access to the database.
- Frontend is configured to call http://localhost:5000/api/jobs by default


## Project Structure
```
backend/
├─ controllers/
├─ models/
├─ routes/
├─ .env
├─ config
├─ index.js/
├─ package.json
└─ README.md
```

## Author
**Son Hoang Tran**
