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

Design and implement a responsive input filter to allow users to quickly search and refine character cards. The goal is to improve usability by enabling dynamic filtering, ensuring that the search logic integrates seamlessly with the existing pagination system, and maintaining a clean, intuitive interface.

### 📓 TO-DO

- [x] Implement filtering logic in the custom hook to handle search queries
- [x] Ensure compatibility between filtering and pagination (filtered results update correctly)
- [x] Apply debounce to the filter to improve search performance, debounce is done locally because the API does not receive search parameters
- [x] Document the filter workflow and update the README with usage examples

---

## 🧩 Features

- [x] Fetch and render character
- [x] Improve readability on the card
- [x] Loading and error handling
- [x] Responsive design, UI components
- [x] Pagination
- [x] Filtering
- [] Performance

---

## 🏗 Architecture

- **Componets**: presentational UI
- **Hooks**: state and side effects
- **api**: API communication
- **constants**: configuration and endpoints
- 📝 **Debounced input filtering**: Introduced a debounced search mechanism using useRef and useEffect. The input value updates immediately, but filtering only triggers after 500ms of inactivity. This reduces unnecessary re-renders and simulates real-world search behavior.

- 📝 **Derived state for filtered results**: Added a filteredCharacters state derived from the raw characters array. This ensures the UI displays either the full dataset or the filtered subset based on the debounced input value.

- 📝 **Local filtering implementation**: Since the Simpsons API does not support query parameters for search, filtering is performed locally on the characters of the current page. This design highlights adaptability to API limitations while still providing a responsive user experience.

- 📝 **Custom hook enhancements**: The useCharacter hook now manages both the raw data (characters) and the debounced filtered results (filteredCharacters). This separation of concerns improves clarity and makes the hook reusable for future scenarios.

- 📝 **Clean architecture with refs**: Leveraged useRef to store timeout IDs for debounce logic, avoiding unnecessary re-renders. This demonstrates best practices in managing mutable values across renders.

- 📝 **Future improvements**: Upcoming versions may explore global filtering by prefetching multiple pages, integrating APIs with search parameters, or extending the debounce logic to remote fetches. This will allow comparisons between local and remote filtering strategies.

---

## 🚀 Tech Stack

- React
- Vite
- JavaScript
- Css module

---

## 📦 Version

v0.6.0

---

## 📄 License

This project is under the MIT license. You can use it freely with attribution.

---

## 🦉 Author

Frontend developer junior Gonzalo Montoya, if you liked it, give it a star on GitHub! ⭐
