# Simmpsons Dashboard

Aplicación frontend construida con React enfocada en un manejo de estado escalable, gestión de errores y optimización de rendimiento al consumir una API pública.

## 🎯 Objetivo

Mostrar una lista de personajes con soporte para estados de carga y error, persistencia, paginación y filtrado, siguiendo prácticas de arquitectura frontend del mundo real.

## 🐱‍💻 Objetivo de la versión

Manejar los estados de carga, error y vacío implementando componentes de IU reutilizables (spinner, mensaje de error, mensaje vacío) para mejorar la respuesta del usuario.

## 📓 Tareas pendientes

- [x] Crear un componente de carga con un spinner y un mensaje
- [x] Crear un componente de error con un mensaje descriptivo
- [x] Crear un componente de estado vacío si no hay datos
- [x] Integrar el manejo del estado en la representación de la lista de caracteres

## 🧩 Funcionalidades

- [x] Obtener y renderizar personajes
- [x] Mejorar legibilidad en la tarjeta
- [x] Manejo de carga y error
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

La aplicación maneja tres estados principales: carga, error y vacío.  
Estos estados se controlan en el hook `useCharacter` y se reflejan en la UI mediante renderizado condicional en `App`.

- **Carga**: se muestra un spinner con mensaje mientras se obtienen los datos.
- **Error**: se muestra un mensaje con opción de recargar si la API falla.
- **Vacío**: se muestra un mensaje indicando que no hay datos disponibles.
- **Datos**: se renderiza la lista de personajes cuando la API responde correctamente.

Cada estado tiene su propio componente (`LoadingMessage`, `ErrorMessage`, `ShowEmptyState`) para mantener la UI clara y reutilizable.  
El flujo de renderizado sigue la prioridad: **loading → error → empty → data**.

## 🚀 Tecnologías

- React
- Vite
- JavaScript
- CSS Modules

## 📦 Versión

v0.3.0

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente con atribución.

## 🦉 Autor

Desarrollador frontend junior Gonzalo Montoya. Si te gustó, dale una estrella en GitHub ⭐
