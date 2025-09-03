# 🌸 Mirai no Michi (未来の道)

> **“The Path for Your Future”** — an application that helps students discover their potential career paths through assessments, preferences, and recommendations.  

---

## 🚀 Overview
**Mirai no Michi** is a student guidance and recommendation system designed to analyze test results, map them to career fields, and provide personalized suggestions. Students can:  
- Take tests in multiple fields (Math, Biology, Literature, etc.).  
- Input their **preferred top 3 career choices**.  
- Receive recommendations with **confidence percentages**.  
- Override the system’s recommendation if they strongly want their choice.  

---

## 🏗️ Tech Stack
- **Backend:** Python (Django / FastAPI)  
- **Frontend:** React (optional integration)  
- **Database:** PostgreSQL / SQLite (for development)  
- **Deployment:** Ubuntu Server (Docker optional for production)  

---

## 📂 Project Structure
```
mirai_no_michi/
│── backend/          # Python backend (API, ML logic, database)
│── frontend/         # Optional React frontend
│── data/             # Training data, dummy data files (CSV/JSON/SQL)
│── docs/             # Documentation & design notes
│── README.md         # Project description
```

---

## 📊 Dummy Data
We provide **dummy datasets** for testing under `/data/`:
- `students.json` → API testing & NoSQL  
- `students.csv` → Pandas/Django imports  
- `students.sql` → Seed relational DB  

Example (CSV):  
```csv
student,math,biology,literature,choice1,choice2,choice3
Alice,90,65,40,Computer Science,Medicine,Law
Bob,55,85,60,Medicine,Engineering,Arts
Charlie,75,40,90,Arts,Law,Computer Science
```

---

## 🔮 Future Features
- [ ] Machine Learning model to predict career fit.  
- [ ] Admin dashboard for schools.  
- [ ] Student progress tracking.  
- [ ] Recommendation confidence scoring.  

---

## 🛠️ Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/mirai-no-michi.git
cd mirai-no-michi
```

### 2️⃣ Backend Setup (Python)
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 3️⃣ Run the server
```bash
uvicorn app.main:app --reload
```

### 4️⃣ Load dummy data
```bash
python scripts/load_dummy_data.py
```

---

## 🌐 Deployment
- For **development** → run with Python virtualenv.  
- For **production** → deploy on Ubuntu server, optionally use Docker for consistency.  
