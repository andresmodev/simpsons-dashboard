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

Design and implement a user-friendly pagination system to enhance navigation across character cards. The goal is to provide a smooth browsing experience with warm, visually appealing colors, ensure the layout adapts seamlessly to different screen sizes.

### 📓 TO-DO

- [x] Create a reusable pagination component
- [x] Implement pagination logic to handle multiple pages of characters
- [x] Ensure responsive design for pagination controls across devices
- [x] Custom hook handles cache and prefetch to improve app performance

---

## 🧩 Features

[x] Fetch and render character
[x] Improve readability on the card
[x] Loading and error handling
[x] Responsive design, UI components
[x] Pagination
[] Filtering
[] Performance

---

## 🏗 Architecture

- **Componets**: presentational UI
- **Hooks**: state and side effects
- **api**: API communication
- **constants**: configuration and endpoints
- 📝 **Pagination logic and caching**: In this version I focused on designing and implementing a robust pagination system. I added my custom hook caching with useRef to avoid unnecessary re-fetches. This improved performance and made navigation between pages smoother.
- 📝 **Prefetch optimization**: I added prefetching of the next page, so data is ready before the user navigates forward. This reduced waiting times and made the experience more fluid.
- 📝 **Reusable pagination component**: I created a dedicated CharacterPagination component that receives the current page, metadata, and navigation functions from the hook. It dynamically renders page buttons, highlights the active page, and disables navigation controls when appropriate. This separation of logic (hook) and presentation (component) improved clarity and maintainability.
- 📝 **Responsive design**: The pagination component was styled with CSS Modules, ensuring consistent design and responsiveness across different screen sizes. Buttons adapt to smaller screens by wrapping into multiple rows when needed.
- 📝 **Future improvements**: While the current implementation covers caching, prefetch, and navigation, future versions may explore cache limits, adaptive ranges for mobile devices, and additional UI enhancements.

---

## 🚀 Tech Stack

- React
- Vite
- JavaScript
- Css module

---

## 📦 Version

v0.5.0

---

## 📄 License

This project is under the MIT license. You can use it freely with attribution.

---

## 🦉 Author

Frontend developer junior Gonzalo Montoya, if you liked it, give it a star on GitHub! ⭐
