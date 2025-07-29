# 📝 Proyecto: TodoApp – Desarrollo Progresivo en Frontend

## 🎯 Objetivo

Desarrollar una aplicación web de lista de tareas (**TodoApp**) en dos fases: primero con **JavaScript puro (Vanilla JS)** y luego usando un **framework moderno de frontend** (como React o Vue). El proyecto se desarrollará dentro de **un único repositorio** utilizando **ramas por fase** y **Pull Requests** como mecanismo de integración.

---

## 🧩 Estructura del Repositorio

```
todoapp/
├── README.md
├── vanilla/          # Versión con JavaScript puro
└── framework/        # Versión con un framework moderno
```

---

## ⚙️ Requisitos Iniciales

- Instalar [Visual Studio Code](https://code.visualstudio.com/) o [IntelliJ](https://www.jetbrains.com/idea/)
- Instalar [Node.js y npm](https://nodejs.org/)
- Tener cuenta en [GitHub](https://github.com/)
- Aprender comandos básicos de Git:
  - `git init`, `git status`, `git add`, `git commit`, `git push`
  - `git checkout -b`, `git merge`, `git pull`
  - Crear ramas y Pull Requests

---

## 🧠 Fase 1 – TodoApp con JavaScript Puro (`/vanilla`)

### 🛠️ Fases de desarrollo (una rama y PR por cada una)

1. **Setup inicial**
   - Crear estructura básica del proyecto (`index.html`, `style.css`, `app.js`)
   - Rama: `feature/setup-vanilla`

2. **Listado de ToDos**
   - Mostrar tareas en el DOM desde un array en memoria
   - Rama: `feature/list-todos-vanilla`

3. **Formulario de creación**
   - Crear formulario para añadir nuevas tareas
   - Validar que no estén vacías
   - Rama: `feature/form-create-todo-vanilla`

4. **Estado global y persistencia**
   - Usar `localStorage` para guardar y recuperar tareas
   - Refactorizar para centralizar el manejo del estado
   - Rama: `feature/state-management-vanilla`

5. **Conexión con API externa**
   - Usar un servicio como [Supabase](https://supabase.com/), [Firebase](https://firebase.google.com/), [MockAPI](https://mockapi.io/), o [JSONBin](https://jsonbin.io/)
   - Sustituir `localStorage` por llamadas HTTP
   - Rama: `feature/api-connection-vanilla`

---

## ⚛️ Fase 2 – TodoApp con Framework (`/framework`)

### Tecnologías sugeridas

- React (con Vite o Create React App)
- Vue (con Vite)
- Svelte, Solid, etc.

### 🛠️ Fases de desarrollo (una rama y PR por cada una)

1. **Setup inicial**
   - Crear proyecto en `/framework` con el CLI del framework
   - Rama: `feature/setup-framework`

2. **Listado de ToDos**
   - Crear componente de listado
   - Estado en memoria
   - Rama: `feature/list-todos-framework`

3. **Formulario de creación**
   - Componente de formulario con validación
   - Rama: `feature/form-create-todo-framework`

4. **Estado global**
   - Manejo de estado con `useState`, `ref`, context o store
   - Rama: `feature/state-management-framework`

5. **Conexión con API externa**
   - Conexión a la misma API usada en la versión vanilla
   - Manejo de errores y carga
   - Rama: `feature/api-connection-framework`

---

## ✅ Entregables

- Un único repositorio GitHub con las carpetas `/vanilla` y `/framework`
- Pull Requests por cada fase, con descripción de cambios
- Commits claros y organizados
- `README.md` explicando:
  - Cómo ejecutar cada versión
  - Qué tecnologías se usaron
  - Qué aprendiste en el proceso

---

## 🧠 Evaluación

- Aplicación funcional en ambas versiones
- Código limpio, modular y reutilizable
- Correcto uso de ramas y Pull Requests
- Capacidad para refactorizar y mejorar el código entre fases
- Comprensión sólida de asincronía, estado y componentes
