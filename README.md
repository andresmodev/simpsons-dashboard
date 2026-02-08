# Simmpsons Dashboard

---

> 📖 También disponible en [Español](./README.es.md)

---

Frontend application built with React focused on scalable state managment, error handling, and performance optimization with consuming a public API.

---

## 🎯 Objective

Display a list of characters with support for loading and error states, persistence, pagination, and filtering, following real-world frontend architecture practices.

---

### Version Objective 🐱‍💻

Improve card readability by truncating long occupation text and selecting shorter phrases for better display.

### 📓 TO-DO

- [x] Truncate long occupation text
- [x] Select short phrases for better display

---

## 🧩 Features

- [x] Fetch and render character
- [x] Improve readability on the card
- [] Loading and error handling
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
- 📝To truncate text across multiple lines requires `-webkit-line-clamp`, which is a hack dependent on `-webkit-box`.
- 📝I followed my architectural pattern of separating responsibilities, creating a new `utils/` folder with its `services.js` file, which calls a constant whose role is to assign a character limit. It also exports a `chooseCharacterPhrase` function that receives an array of strings and returns the shortest phrase within the limit or a fallback.

---

## 🚀 Tech Stack

- React
- Vite
- JavaScript
- Css module

---

## 📦 Version

v0.2.0

---

## 📄 License

This project is under the MIT license. You can use it freely with attribution.

---

## 🦉 Author

Frontend developer junior Gonzalo Montoya, if you liked it, give it a star on GitHub! ⭐
