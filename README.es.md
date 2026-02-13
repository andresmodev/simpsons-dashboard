# Simmpsons Dashboard

Aplicación frontend construida con React enfocada en un manejo de estado escalable, gestión de errores y optimización de rendimiento al consumir una API pública.

## 🎯 Objetivo

Mostrar una lista de personajes con soporte para estados de carga y error, persistencia, paginación y filtrado, siguiendo prácticas de arquitectura frontend del mundo real.

## 🐱‍💻 Objetivo de la versión

Crear un diseño agradable al usuario, usar colores cálidos, bonitos, hacer que la estructura de la aplicación se adapte a diferentes tamaños de pantallas, además aplicar un tooltip en la vista de ocupación de la tarjeta.

## 📓 Tareas pendientes

- [x] estilar completamente
- [x] diseño responsivo
- [x] estructurar mejor las carpetas
- [x] componentes reutilizables
- [x] organizar css global y moduls
- [x] custom hook para manejar el menú hamburguesa
- [x] header funcional y responsivo
- [x] main funcional y responsivo
- [x] footer funcional y responsivo
- [x] hero funcional y responsivo
- [x] about funcional y responsivo
- [x] characters funcional en la parte de mostrar las tarjetas
- [x] componente input de busqueda solo visual
- [x] tarjetas individuales con buen diseño y responsivas

## 🧩 Funcionalidades

- [x] Obtener y renderizar personajes
- [x] Mejorar legibilidad en la tarjeta
- [x] Manejo de carga y error
- [x] Diseño responsivo, componentes de UI
- [] Paginación
- [] Filtrado
- [] Rendimiento

## 🏗 Arquitectura

- **Components**: UI de presentación
- **Hooks**: estado y efectos secundarios
- **api**: comunicación con la API
- **constants**: configuración y endpoints
- 📝 **Reusable components**: En esta versión me centré en la creación, gestión e implementación de componentes reutilizables. Comprendí por qué el enfoque basado en componentes de React acelera el desarrollo y mejora la mantenibilidad. El diseño de la aplicación está prácticamente completo, excepto el componente de paginación, que se implementará en una versión futura.
- 📝 **Theme handling**: Experimenté con un custom hook para gestionar el modo claro/oscuro. Aunque decidí no mantener el modo oscuro debido a inconsistencias visuales, la experiencia me enseñó a gestionar el cambio de tema, lo cual me será útil para proyectos futuros.
- 📝 **LocalStorage**: Opté por no implementar almacenamiento local, ya que esta aplicación se centra principalmente en mostrar datos (caracteres, filtros, paginación) en lugar de almacenar contenido generado por el usuario. Esto permite centrarse en crear un panel de control limpio e interactivo.
- 📝 La paginación se agregará en una versión futura una vez que la lógica esté lista.

## 🚀 Tecnologías

- React
- Vite
- JavaScript
- CSS Modules

## 📦 Versión

v0.4.0

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente con atribución.

## 🦉 Autor

Desarrollador frontend junior Gonzalo Montoya. Si te gustó, dale una estrella en GitHub ⭐
