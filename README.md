# 🎮 Arcadia Frontend

Aplicación web desarrollada en **React** para la gestión de videojuegos, con autenticación por roles, CRUD de juegos, manejo de favoritos y generación de descripciones con IA.  
La app incluye distintos niveles de usuario (**user, editor, admin**) y un sistema de rutas protegidas.

---

## 🛠 Tecnologías utilizadas

- ⚛️ **React 19 + Vite** — Framework moderno para construir interfaces rápidas y modulares.  
- 💨 **Tailwind CSS** — Estilos responsivos con utilidades listas para usar.  
- 🔄 **React Context + Custom Hooks** — Manejo de estado global (auth, juegos y favoritos).  
- 📡 **Axios** — Llamadas HTTP con soporte para tokens Bearer.  
- 🧩 **react-hook-form** — Manejo eficiente de formularios.  
- 🚦 **react-router-dom v7** — Rutas dinámicas y privadas.  
- 🎭 **framer-motion** — Animaciones fluidas para mejorar la UX.  

---

## 🌈 Funcionalidades principales

### 👤 Autenticación y Roles
- Login y registro de usuarios.  
- **Roles con permisos específicos**:
  - **User** → Ver lista y detalle de juegos, generar descripción con IA, CRUD de favoritos.  
  - **Editor** → Todo lo anterior + editar juegos.  
  - **Admin** → Todo lo anterior + crear y eliminar juegos.  
- Rutas protegidas según rol (`PrivateRoute`).  

### 🎮 Juegos
- Listado de juegos con **búsqueda, filtros (Nuevos/Viejos) y paginación**.  
- Ver detalle de cada juego (con generación de descripción mediante IA).  
- Crear, editar y eliminar juegos (según permisos).  

### ⭐ Favoritos
- Agregar y quitar juegos de favoritos.  
- Buscar dentro de la lista de favoritos.  
- Estadísticas en el perfil: cantidad de juegos, género favorito, primer favorito.  

### ⚡ Experiencia de Usuario
- Manejo de estados de **loading** y **error**.  
- Animaciones con **framer-motion**.  
- Vistas de error personalizadas:
  - `Forbidden (403)` → sin permisos.  
  - `NotFound (404)` → ruta inexistente.  

---

## 📂 Estructura general

- **context/** → Manejo global de auth, juegos y favoritos.  
- **hooks/** → Custom hooks (ej. `usePermission` para validar roles).  
- **helper/** → Configuración de Axios y utilidades (íconos).  
- **pages/** → Páginas principales (Home, Juegos, Favoritos, Perfil, Login/Register, etc.).  
- **router/** → Rutas privadas y públicas.  
- **App.jsx / main.jsx** → Punto de entrada de la aplicación.  

---

## 🔗 Dependencias principales

```json
"dependencies": {
  "@tailwindcss/vite": "^4.1.12",
  "axios": "^1.11.0",
  "framer-motion": "^12.23.12",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-hook-form": "^7.62.0",
  "react-router-dom": "^7.8.2",
  "tailwindcss": "^4.1.12"
}
