# Simmpsons Dashboard

Aplicación frontend construida con React enfocada en un manejo de estado escalable, gestión de errores y optimización de rendimiento al consumir una API pública.

## 🎯 Objetivo

Mostrar una lista de personajes con soporte para estados de carga y error, persistencia, paginación y filtrado, siguiendo prácticas de arquitectura frontend del mundo real.

## Objetivo de la versión 🐱‍💻

Mejorar la legibilidad de las tarjetas truncando el texto de ocupación largo y seleccionando frases más cortas para una mejor visualización

## 📓 Tareas pendientes

- [x] Truncar texto largo en `occupation`
- [x] Escoger frases cortas para una mejor visualización

## 🧩 Funcionalidades

- [x] Obtener y renderizar personajes
- [x] Mejorar legibilidad en la tarjeta
- [] Manejo de carga y error
- [] Diseño responsivo, componentes de UI
- [] Estado persistente (localStorage)
- [] Paginación
- [] Filtrado
- [] Rendimiento

## 🏗 Arquitectura

- **Components**: UI de presentación
- **Hooks**: estado y efectos secundarios
- **api**: comunicación con la API
- **constants**: configuración y endpoints
- 📝Para truncar el texto en múltiples líneas se requiere `-webkit-line-clamp` que es un hack dependiente de `-webkit-box`.
- 📝Seguí mi patrón de arquitectura separando responsabilidades, cree una nueva carpeta `utils/` con su archivo `services.js` el cual dentro llama una constante que su rol es asignar un limite de caracteres, también exporta una función `chooseCharacterPhrase` que recibe un array de strings y dentro devuelve la frase más corta dentro del límite o un fallback.

## 🚀 Tecnologías

- React
- Vite
- JavaScript
- CSS Modules

## 📦 Versión

v0.2.0

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente con atribución.

## 🦉 Autor

Desarrollador frontend junior Gonzalo Montoya. Si te gustó, dale una estrella en GitHub ⭐
