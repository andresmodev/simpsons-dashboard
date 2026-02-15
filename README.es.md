# Simmpsons Dashboard

Aplicación frontend construida con React enfocada en un manejo de estado escalable, gestión de errores y optimización de rendimiento al consumir una API pública.

## 🎯 Objetivo

Mostrar una lista de personajes con soporte para estados de carga y error, persistencia, paginación y filtrado, siguiendo prácticas de arquitectura frontend del mundo real.

## 🐱‍💻 Objetivo de la versión

Diseñar e implementar un filtro de entrada adaptable que permita a los usuarios buscar y refinar rápidamente las tarjetas de personajes. El objetivo es mejorar la usabilidad mediante el filtrado dinámico, garantizando que la lógica de búsqueda se integre a la perfección con el sistema de paginación existente y manteniendo una interfaz clara e intuitiva.

## 📓 Tareas pendientes

- [x] Implementar lógica de filtrado en el custom hook para manejar consultas de búsqueda
- [x] Garantizar la compatibilidad entre el filtrado y la paginación (los resultados filtrados se actualizan correctamente)
- [x] Aplicar debounce al filtro para mejorar el rendimiento de busqueda, el debounce se hace de manera local porque la API de los simpson no recibe parámetros de búsqueda
- [x] Documentar el flujo de trabajo del filtro y actualizar el README con ejemplos de uso

## 🧩 Funcionalidades

- [x] Obtener y renderizar personajes
- [x] Mejorar legibilidad en la tarjeta
- [x] Manejo de carga y error
- [x] Diseño responsivo, componentes de UI
- [x] Paginación
- [x] Filtrado
- [] Rendimiento

## 🏗 Arquitectura

- **Components**: UI de presentación
- **Hooks**: estado y efectos secundarios
- **api**: comunicación con la API
- **constants**: configuración y endpoints
- 📝 **Filtro de busqueda con debounce**: Se introdujo un mecanismo de búsqueda sin rebotes mediante useRef y useEffect. El valor de entrada se actualiza inmediatamente, pero el filtrado solo se activa tras 500 ms de inactividad. Esto reduce las repeticiones de renderizado innecesarias y simula el comportamiento de búsqueda real.
- 📝 **Estado derivado para resultados filtrados**: Se agregó un estado `filteredCharacters` derivado de la matriz de caracteres sin procesar. Esto garantiza que la interfaz de usuario muestre el conjunto de datos completo o el subconjunto filtrado según el valor de entrada sin rebote.
- 📝 **Implementación de filtrado local**: Dado que la API de Los Simpson no admite parámetros de consulta para la búsqueda, el filtrado se realiza localmente en los caracteres de la página actual. Este diseño destaca la adaptabilidad a las limitaciones de la API, a la vez que ofrece una experiencia de usuario ágil.
- 📝 **Mejoras en custom hook**: El useCharacter ahora gestiona tanto los datos sin procesar `characters` como los resultados filtrados y sin rebotes `filteredCharacters`. Esta separación de tareas mejora la claridad y permite reutilizar el gancho en futuras situaciones.
- 📝 **Arquitectura limpia con refs**: Se aprovechó useRef para almacenar los ID de tiempo de espera para la lógica de rebote, evitando así rerenderizados innecesarios. Esto demuestra las mejores prácticas para gestionar valores mutables en diferentes renderizados.
- 📝 **Mejoras futuras**: Las próximas versiones podrían explorar el filtrado global mediante la precarga de varias páginas, la integración de API con parámetros de búsqueda o la extensión de la lógica de rebote a las búsquedas remotas. Esto permitirá comparar estrategias de filtrado locales y remotas.

## 🚀 Tecnologías

- React
- Vite
- JavaScript
- CSS Modules

## 📦 Versión

v0.6.0

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente con atribución.

## 🦉 Autor

Desarrollador frontend junior Gonzalo Montoya. Si te gustó, dale una estrella en GitHub ⭐
