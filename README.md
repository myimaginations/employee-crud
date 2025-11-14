# Angular Employee CRUD Application

A simple and clean **Employee Management CRUD Application** built using **Angular 17** with a **JSON Server backend**.  
The project demonstrates full CRUD operations, dynamic state loading through a service, and a custom salary formatting pipe.

---

## Features

### ✔ CRUD Operations
- Add Employee  
- Edit Employee  
- Delete Employee  
- List All Employees  

### ✔ Employee Fields
Each employee contains:
- `id` (auto-generated)
- `name`
- `email`
- `position`
- `salary`
- `state`

### ✔ Dynamic State Dropdown
- States fetched from JSON Server  
- No hardcoding in the component  
- Loaded using a StateService  

### ✔ Custom Salary Pipe
- Displays salary like: **₹50,000**

### ✔ JSON Server Backend
- Stores employees & states in `db.json`
- Provides REST API endpoints used by Angular

---

## Project Structure

```
src/app
│
├── employee/
│   ├── employee.component.ts
│   ├── employee.component.html
│   └── employee.component.css
│
├── services/
│   ├── employee.service.ts
│   └── state.service.ts
│
└── pipes/
    └── salary-format.pipe.ts
```

---

## Technologies Used
- Angular 17+
- TypeScript
- JSON Server
- RxJS Observables
- HTML & CSS

---

## 🏃‍♂️ How to Run the Project

### 1️.Install Dependencies
```
npm install
```

### 2️.Start JSON Server
```
json-server --watch db.json --port 3000
```

Backend runs at:
```
http://localhost:3000
```

### 3️.Start Angular App
```
ng serve
```

App runs at:
```
http://localhost:4200
```

---

## 🌐 API Endpoints

### Employees
```
GET     /employees
POST    /employees
PUT     /employees/:id
DELETE  /employees/:id
```

### States
```
GET /states
```

---

## Author
**Preeti Sahani**

---

## License
This project is for educational and learning purposes.
