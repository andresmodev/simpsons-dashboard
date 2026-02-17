# Simmpsons Dashboard

A responsive web application to explore characters from The Simpsons, built with React.
This project was developed iteratively through multiple versions, simulating a real-world workflow with branches, pull requests, and tagged releases. It has now reached its deliverable version and is ready for deployment.

---

> 📖 También disponible en [Español](./README.es.md)

---

## 🌐 Deployment

This project is deployed on Vercel:
🔗 Live Demo URL – [Simpsons-Dashboard](https://simpsons-dashboard-kappa.vercel.app/)

---

## 📺 What is Simpsons Dashboard?

Simpsons Dashboard is a React-based application that consumes a public Simpsons API to display character information in a clean, interactive interface.
The project was designed with scalability and maintainability in mind, applying architectural principles such as separation of concerns, reusable components, and clear folder structure.

---

## 🎯 Main Features

- 🖼️ Character cards: Show character image, name, occupation (truncated to avoid overflow), age, status, and a selected iconic phrase (logic applied to avoid overly long quotes).
- 📑 Pagination: Navigate through multiple pages of characters with cached results and prefetch optimization for smoother transitions.
- 🔍 Local filtering with debounce: Search characters by name with a debounced input to reduce unnecessary re-renders.
- 🧩 Context API integration: Implemented useContext to eliminate prop drilling and allow components to consume global state directly.
- 🎨 Responsive design: Built with CSS Modules to ensure consistent styling and adaptability across screen sizes.
- 🛠️ Custom hooks: Encapsulated logic for characters, pagination, filtering, and hamburger menu (responsive navbar).

---

## 🧩 Goals

- [x] Fetch and render character
- [x] Improve readability on the card
- [x] Loading and error handling
- [x] Responsive design, UI components
- [x] Pagination
- [x] Filtering
- [x] Performance with context

---

## 🛠️ Technologies Used

- React (functional components + hooks)
- Context API for global state management
- CSS Modules for scoped, responsive styling
- JavaScript (ES6+)
- Git + GitHub (branches, PRs, tags for versioning)

---

## 🏗 Project Structure

📁 src/
├── api/ # API service functions (fetchCharacters)
├── components/ # Reusable UI components (Header, Footer, Main, CharacterList, etc.)
├── constants/ # Config values (API endpoints, etc.)
├── context/ # Context provider and custom hook (CharacterContext, useCharacterContext)
├── hooks/ # Custom hooks (useCharacter, useHamburger)
├── styles/ # CSS Modules for styling
├── utils/ # Function to truncate text, validation, etc
└── App.jsx # Root component

---

## 📐 Architectural Principles

- Separation of concerns: Logic in hooks, UI in components, constants in dedicated files.

- Reusable components: Pagination, input, and list components designed for flexibility.

- Scalability: Context API introduced to manage global state cleanly.

- Maintainability: Clear folder structure and documented workflow.

---

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/andresmo23/simpsons-dashboard.git

# Enter the project directory
cd simpsons-dashboard

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

## 📄 License

This project is under the MIT license. You can use it freely with attribution.

---

## 🦉 Author

Frontend developer junior Gonzalo Montoya, if you liked it, give it a star on GitHub! ⭐
