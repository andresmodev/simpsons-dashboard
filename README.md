# Simmpsons Dashboard

---

> 📖 También disponible en [Español](./README.es.md)

---

Frontend application built with React focused on scalable state managment, error handling, and performance optimization with consuming a public API.

---

## 🎯 Objective

Display a list of characters with support for loading and error states, persistence, pagination, and filtering, following real-world frontend architecture practices.

---

### 🐱‍💻 Version Objective

Handle loading, error, and empty states by implementing reusable UI components (spinner, error message, empty message) to improve user feedback.

### 📓 TO-DO

- [x] Create a loading component with spinner and message
- [x] Create an error component with descriptive message
- [x] Create an empty state component for no data
- [x] Integrate state handling into character list rendering

---

## 🧩 Features

- [x] Fetch and render character
- [x] Improve readability on the card
- [x] Loading and error handling
- [] Responsive design, UI components
- [] Persistent state (localStorage)
- [] Pagination
- [] Filtering
- [] Performance

---

## 🏗 Architecture

- **Componets**: presentational UI
- **Hooks**: state and side effects
- **api**: API communication
- **constants**: configuration and endpoints

The application manages three main states: loading, error, and empty. These states are controlled in the `useCharacter` hook and reflected in the UI through conditional rendering in `App`.

- **Loading**: a spinner with a message is displayed while data is being fetched.
- **Error**: an error message with a reload option is shown if the API request fails.
- **Empty**: a message is displayed when no data is available.
- **Data**: the character list is rendered when the API responds successfully.

Each state has its own dedicated component (`LoadingMessage`, `ErrorMessage`, `ShowEmptyState`) to keep the UI clear and reusable. The rendering flow follows a strict priority: **loading → error → empty → data**.

---

## 🚀 Tech Stack

- React
- Vite
- JavaScript
- Css module

---

## 📦 Version

v0.3.0

---

## 📄 License

This project is under the MIT license. You can use it freely with attribution.

---

## 🦉 Author

Frontend developer junior Gonzalo Montoya, if you liked it, give it a star on GitHub! ⭐
