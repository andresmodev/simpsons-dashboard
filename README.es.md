# Simmpsons Dashboard

Aplicación frontend construida con React enfocada en un manejo de estado escalable, gestión de errores y optimización de rendimiento al consumir una API pública.

## 🎯 Objetivo

Mostrar una lista de personajes con soporte para estados de carga y error, persistencia, paginación y filtrado, siguiendo prácticas de arquitectura frontend del mundo real.

## 🐱‍💻 Objetivo de la versión

Diseñar e implementar un sistema de paginación intuitivo para optimizar la navegación entre las tarjetas de personaje. El objetivo es ofrecer una experiencia de navegación fluida con colores cálidos y visualmente atractivos, garantizar que el diseño se adapte perfectamente a diferentes tamaños de pantalla.

## 📓 Tareas pendientes

- [x] Crear un componente de paginación reutilizable
- [x] Implementar lógica de paginación para manejar múltiples páginas de caracteres
- [x] Garantizar un diseño responsivo para los controles de paginación en todos los dispositivos
- [x] Custom hook maneja cache y prefetch para mejorar el rendimiento de la app

## 🧩 Funcionalidades

- [x] Obtener y renderizar personajes
- [x] Mejorar legibilidad en la tarjeta
- [x] Manejo de carga y error
- [x] Diseño responsivo, componentes de UI
- [x] Paginación
- [] Filtrado
- [] Rendimiento

## 🏗 Arquitectura

- **Components**: UI de presentación
- **Hooks**: estado y efectos secundarios
- **api**: comunicación con la API
- **constants**: configuración y endpoints
- 📝 **Pagination logic and caching**: En esta versión, me centré en diseñar e implementar un sistema de paginación robusto. Agregué a mi custom hook el almacenamiento en caché con useRef para evitar recargas innecesarias. Esto mejoró el rendimiento y facilitó la navegación entre páginas.
- 📝 **Prefetch optimization**: Añadí la precarga de la página siguiente, para que los datos estén listos antes de que el usuario navegue hacia adelante. Esto redujo los tiempos de espera y mejoró la experiencia.
- 📝 **Reusable pagination component**: Creé un componente CharacterPagination dedicado que recibe la página actual, los metadatos y las funciones de navegación del gancho. Representa dinámicamente los botones de la página, resalta la página activa y desactiva los controles de navegación cuando corresponde. Esta separación de la lógica (gancho) y la presentación (componente) mejoró la claridad y la facilidad de mantenimiento.
- 📝 **Responsive design**: El componente de paginación se diseñó con módulos CSS, lo que garantiza un diseño uniforme y una respuesta fluida en diferentes tamaños de pantalla. Los botones se adaptan a pantallas más pequeñas, ajustándose en varias filas cuando es necesario.
- 📝 **Future improvements**: Si bien la implementación actual cubre el almacenamiento en caché, la búsqueda previa y la navegación, las versiones futuras pueden explorar límites de caché, rangos adaptables para dispositivos móviles y mejoras adicionales de la interfaz de usuario.

## 🚀 Tecnologías

- React
- Vite
- JavaScript
- CSS Modules

## 📦 Versión

v0.5.0

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente con atribución.

## 🦉 Autor

Desarrollador frontend junior Gonzalo Montoya. Si te gustó, dale una estrella en GitHub ⭐
