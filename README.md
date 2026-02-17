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

Integrate React’s Context API to centralize state management and eliminate prop drilling. The goal is to improve scalability and maintainability by allowing components to consume global state directly, ensuring cleaner component hierarchies and a more professional architecture.

### 📓 TO-DO

- [x] Create CharacterContext and CharacterProvider to wrap the application and expose global state
- [x] Integrate the existing useCharacter hook inside the provider to manage logic and state centrally
- [x] Implement a custom hook useCharacterContext to simplify context consumption across components
- [x] Refactor Main, CharacterList, CharacterPagination, and CharacterInput to consume context directly instead of receiving props

---

## 🧩 Features

- [x] Fetch and render character
- [x] Improve readability on the card
- [x] Loading and error handling
- [x] Responsive design, UI components
- [x] Pagination
- [x] Filtering
- [x] Performance with context

---

## 🏗 Architecture

- **Componets**: presentational UI
- **Hooks**: state and side effects
- **api**: API communication
- **constants**: configuration and endp\*\*: Introduced a debounced search mechanism using useRef and useEffect. The input value updates immediately, but filtering only triggers after 500ms of inactivity. This reduces unnecessary re-renders and simulates real-world search behavior.

- 📝 **Context API integration**: Implemented CharacterContext and CharacterProvider to centralize state management. This eliminated prop drilling and allowed components to consume global state directly.

- 📝 **Custom context hook**: Added useCharacterContext to simplify context consumption and ensure consistency across components.

- 📝 **Cleaner component hierarchy**: Components like CharacterList, CharacterPagination, and CharacterInput now consume context directly, reducing unnecessary prop passing from App and Main.

- 📝 **Scalable architecture**: By separating logic into hooks and context, the project is now more maintainable and ready for future extensions (e.g., global theming, authentication).

---

## 🚀 Tech Stack

- React
- Vite
- JavaScript
- Css module

---

## 📦 Version

v0.7.0

---

## 📄 License

This project is under the MIT license. You can use it freely with attribution.

---

## 🦉 Author

Frontend developer junior Gonzalo Montoya, if you liked it, give it a star on GitHub! ⭐
