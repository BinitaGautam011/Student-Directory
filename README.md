# Student Directory

A modern and user-friendly student management interface designed to simplify record keeping and improve accessibility.

---

## Features
- Add student with **name, course, grade, and status**. Toggle status easily.
- Delete a student by clicking the '✕' button.
- Conditional rendering:
  - Empty state when no students exist
  - Status badges (Present = green, Absent = red)
  - Top Performer badge for students with grade ≥ 90
- Reusable components:
  - **Button** (supports variants like primary, danger, outline)
  - **Badge** (supports types like success, warning, neutral)
  - **StudentCard** (displays student info + actions)
- Filter & search students by **name, course, and status**
- Sort students by **name, grade, or status**
- Responsive **grid layout** for student cards
- Hover effects on buttons and cards for better UI feedback
- Modal form for adding students without affecting the grid layout

---

## Setup

### Steps
```bash
# Clone the repository
git clone https://github.com/BinitaGautam011/Student-Directory.git

# Navigate into project folder
cd STUDENT-DIRECTORY

# Install dependencies
npm install

# Start development server
npm run dev

Then open your browser and go to: http://localhost:5173/

Search & Discovery

🔍 Live Search — Filter students by name in real-time

📚 Filter by Course — Dynamic dropdown to select available courses

🟢 Filter by Status — Show only Present or Absent students

🔃 Sort — Sort alphabetically by Name or by Grade (highest first)

Visual & UX

⭐ Top Performer Badge — Auto-awarded to students with Grade ≥ 90

🔴 / 🟢 Status Badges — Color-coded Present/Absent indicators

💬 Empty State — Friendly message when no students match the filter

Reusable Components

Button — Supports variants via props (primary, danger, outline)

Badge — Supports types (success, warning, neutral)

StudentCard — Displays student info, status, grade, and delete action

Project Structure
student-directory/
├── public/              # Static files
├── src/                 # Main source code
│   ├── assets/          # Images/icons/styles
│   ├── Components/      # Reusable React components
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── Header.jsx
│   │   ├── StudentCard.jsx
│   │   ├── StudentForm.jsx
│   │   └── Toolbar.jsx
│   ├── App.jsx          # Root component
│   ├── App.css          # App-level styling
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── .firebase/           # Firebase build cache (auto-generated)
├── build/               # Production build output
├── dist/                # Vite distribution folder
├── firebase.json        # Firebase configuration
├── .firebaserc          # Firebase project mapping
├── index.html           # HTML template
├── package.json         # Project dependencies & scripts
├── vite.config.js       # Vite configuration
├── eslint.config.js     # Linting rules
└── README.md            # Project documentation
Tech Stack
Technology	Purpose
React 19	UI Framework
Vite	Build Tool & Dev Server
Vanilla CSS	Styling (no frameworks)
React Hooks	State Management
Available Scripts
Command	Description
npm install	Install project dependencies
npm run dev	Start local development server
npm run build	Build for production
npm run lint	Run ESLint code checks
npm run preview	Preview production build
Notes

All student IDs are auto-generated — no manual entry required

Form modal is independent and does not affect the grid display

Screenshots

Student Grid: Displays all students in a responsive grid with status & top performer badges

Add Student Form: Modal form for adding a new student

Toolbar: Search, filter, and sort students
![Student Directory Grid](./assets/ss.png)
![Student Directory Grid](./assets/ss1.png)
![Student Directory Grid](./assets/ss2.png)


3rd Semester React Project
