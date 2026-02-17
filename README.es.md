# Simmpsons Dashboard

Aplicación frontend construida con React enfocada en un manejo de estado escalable, gestión de errores y optimización de rendimiento al consumir una API pública.

## 🎯 Objetivo

Mostrar una lista de personajes con soporte para estados de carga y error, persistencia, paginación y filtrado, siguiendo prácticas de arquitectura frontend del mundo real.

## 🐱‍💻 Objetivo de la versión

Integrar la API de contexto de React para centralizar la gestión de estados y eliminar la perforación de propiedades. El objetivo es mejorar la escalabilidad y la facilidad de mantenimiento al permitir que los componentes consuman el estado global directamente, garantizando jerarquías de componentes más limpias y una arquitectura más profesional.

## 📓 Tareas pendientes

- [x] Cree CharacterContext y CharacterProvider para encapsular la aplicación y exponer el estado global
- [x] Integre el hook useCharacter existente dentro del proveedor para administrar la lógica y el estado de forma centralizada
- [x] Implementar un custom hook useCharacterContext para simplificar el consumo de contexto en todos los componentes
- [x] Refactorizar Main, CharacterList, CharacterPagination y CharacterInput para consumir el contexto directamente en lugar de recibir propiedades

## 🧩 Funcionalidades

- [x] Obtener y renderizar personajes
- [x] Mejorar legibilidad en la tarjeta
- [x] Manejo de carga y error
- [x] Diseño responsivo, componentes de UI
- [x] Paginación
- [x] Filtrado
- [x] Mejor desempeño con useContext

## 🏗 Arquitectura

- **Components**: UI de presentación
- **Hooks**: estado y efectos secundarios
- **api**: comunicación con la API
- **constants**: configuración y endpoints
- 📝 **Integración de la API Context**: Se implementaron CharacterContext y CharacterProvider para centralizar la gestión de estados. Esto eliminó la perforación de propiedades y permitió que los componentes consumieran el estado global directamente.

- 📝 **Custom context hook**: Se agregó useCharacterContext para simplificar el consumo de contexto y garantizar la coherencia entre los componentes.

- 📝 **Jerarquía de componentes más limpia**: Componentes como CharacterList, CharacterPagination y CharacterInput ahora consumen contexto directamente, lo que reduce el paso innecesario de propiedades desde App y Main.

- 📝 **Arquitectura esclable**: Al separar la lógica en hooks y contexto, el proyecto ahora es más fácil de mantener y está listo para futuras extensiones (por ejemplo, temas globales, autenticación).

## 🚀 Tecnologías

- React
- Vite
- JavaScript
- CSS Modules

## 📦 Versión

v0.7.0

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente con atribución.

## 🦉 Autor

Desarrollador frontend junior Gonzalo Montoya. Si te gustó, dale una estrella en GitHub ⭐
