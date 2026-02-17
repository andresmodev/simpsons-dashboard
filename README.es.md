# 📺 Simpsons Dashboard

Una aplicación web responsiva para explorar personajes de Los Simpson, construida con React.
Este proyecto fue desarrollado de manera iterativa a través de múltiples versiones, simulando un flujo de trabajo real con ramas, pull requests y versiones etiquetadas. Ahora ha alcanzado su versión entregable y está listo para desplegarse.

---

## 📺 ¿Qué es Simpsons Dashboard?

Simpsons Dashboard es una aplicación basada en React que consume una API pública de Los Simpson para mostrar información de personajes en una interfaz limpia e interactiva.
El proyecto fue diseñado pensando en la escalabilidad y mantenibilidad, aplicando principios arquitectónicos como separación de responsabilidades, componentes reutilizables y una estructura de carpetas clara.

---

## 🎯 Funcionalidades principales

- 🖼️ Tarjetas de personajes: Muestran imagen, nombre, ocupación (truncada para evitar desbordamiento), edad, estado y una frase icónica seleccionada (con lógica para evitar frases demasiado largas).

- 📑 Paginación: Navega entre múltiples páginas de personajes con resultados en caché y optimización de prefetch para transiciones más fluidas.

- 🔍 Filtrado local con debounce: Busca personajes por nombre con un input con debounce para reducir renders innecesarios.

- 🧩 Integración con Context API: Se implementó useContext para eliminar el prop drilling y permitir que los componentes consuman estado global directamente.

- 🎨 Diseño responsivo: Construido con CSS Modules para asegurar estilos consistentes y adaptabilidad en diferentes tamaños de pantalla.

- 🛠️ Custom hooks: Lógica encapsulada para personajes, paginación, filtrado y menú hamburguesa (navbar responsivo).

---

## 🧩 Objetivos

- [x] Obtener y renderizar personajes
- [x] Mejorar la legibilidad en las tarjetas
- [x] Manejo de carga y errores
- [x] Diseño responsivo y componentes de UI
- [x] Paginación
- [x] Filtrado
- [x] Rendimiento con context

---

## 🛠️ Tecnologías usadas

- React (componentes funcionales + hooks)
- Context API para manejo de estado global
- CSS Modules para estilos responsivos y con alcance local
- JavaScript (ES6+)
- Git + GitHub (ramas, PRs, tags para versionado)

---

## 🏗 Estructura del proyecto

📁 src/
├── api/ # Funciones de servicio API (fetchCharacters)
├── components/ # Componentes reutilizables de UI (Header, Footer, Main, CharacterList, etc.)
├── constants/ # Valores de configuración (endpoints de API, etc.)
├── context/ # Provider de contexto y custom hook (CharacterContext, useCharacterContext)
├── hooks/ # Custom hooks (useCharacter, useHamburger)
├── styles/ # CSS Modules para estilos
├── utils/ # Funciones para truncar texto, validaciones, etc.
└── App.jsx # Componente raíz

---

## 📐 Principios de arquitectura

- _Separación de responsabilidades_: Lógica en hooks, UI en componentes, constantes en archivos dedicados.
- _Componentes reutilizables_: Paginación, input y lista diseñados para flexibilidad.
- _Escalabilidad_: Context API introducido para manejar estado global de forma limpia.
- _Mantenibilidad_: Estructura de carpetas clara y flujo de trabajo documentado.

---

## 🛠️ Instalación

```bash
# Clona el repositorio
git clone https://github.com/andresmo23/simpsons-dashboard.git

# Entra al directorio
cd simpsons-dashboard

# Instala las dependencias
npm install

# Ejecuta el servidor de desarrollo
npm run dev
```

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente con atribución.

---

## 🦉 Autor

Desarrollado por Andrés, frontend developer junior.
Si te gustó, ¡dale una estrella ⭐ en GitHub!
