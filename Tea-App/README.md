# 🍵 Tea-App — V1 (Angular)

**Tea-App** es una aplicación web desarrollada con Angular cuyo objetivo es ofrecer un espacio donde descubrir, explorar y conocer diferentes variedades de té e infusiones.

La plataforma busca facilitar el descubrimiento de nuevas bebidas mediante información sobre sus propiedades, características y notas de cata, además de ofrecer funcionalidades de personalización para los usuarios.

Esta versión corresponde a la **V1 del frontend web**, desarrollada como parte del proyecto Tea-App de Aurea Publishing.

---

## 🌿 Características principales

La primera versión de Tea-App incorpora las siguientes secciones:

### 🏡 Inicio

- Página principal de presentación de la aplicación.
- Apartado de propiedades y beneficios de los tés.
- Apartado de notas de cata.
- Selección interactiva de etiquetas de propiedades y sabores.

### 🌱 Infusiones

- Sección dedicada al catálogo de infusiones.
- Campo de búsqueda por nombre.
- Controles visuales para filtros y ordenación.

### 🍃 Tés

- Apartado destinado a mostrar el catálogo de variedades de té.

### 👤 Perfil de usuario

- Acceso mediante autenticación.
- Edición de información del perfil.
- Sección de tés favoritos.
- Sección de tés propios.
- Cierre de sesión con confirmación.

### 🔐 Autenticación

- Pantalla de inicio de sesión.
- Formulario de registro.
- Validación de formularios.
- Comprobación de contraseñas.
- Recuperación de contraseña (simulada).
- Protección de la ruta del perfil mediante un guard de autenticación.

---

## 🛠️ Tecnologías utilizadas

| Tecnología             | Uso                                |
| ---------------------- | ---------------------------------- |
| Angular 22             | Framework principal                |
| TypeScript 6           | Lenguaje de programación           |
| HTML5                  | Estructura de las vistas           |
| CSS3                   | Estilos y diseño visual            |
| RxJS 7                 | Gestión de operaciones asíncronas  |
| Angular Router         | Navegación entre páginas           |
| Angular Reactive Forms | Formularios y validaciones         |
| Angular Forms          | Formularios y vinculación de datos |
| Git / GitHub           | Control de versiones               |

---

## 🎨 Diseño e interfaz

La interfaz utiliza una temática botánica inspirada en el mundo del té, con una paleta de colores naturales:

- **Verde salvia:** fondo principal.
- **Verde bosque:** navegación y elementos principales.
- **Crema:** tarjetas y superficies de contenido.
- **Dorado y mostaza:** botones, detalles y elementos destacados.

El proyecto utiliza ilustraciones SVG propias para acompañar las diferentes secciones y mantener una identidad visual coherente.

---

## 📂 Estructura del proyecto

La aplicación sigue una organización por componentes y funcionalidades utilizando componentes standalone de Angular.

```text
Tea-App/
│
├── public/
│   └── images/              # Ilustraciones, iconos y recursos SVG
│
├── src/
│   ├── app/
│   │   ├── inicio/          # Página principal
│   │   ├── infusiones/      # Catálogo de infusiones
│   │   ├── tes/             # Sección de tés
│   │   ├── login/           # Inicio de sesión
│   │   ├── registro/        # Registro de usuarios
│   │   ├── navbar/          # Barra de navegación
│   │   ├── layout/          # Estructura común de páginas
│   │   ├── perfil/          # Perfil de usuario
│   │   │   ├── favoritos/   # Tés favoritos
│   │   │   └── propios/     # Tés propios
│   │   ├── services/        # Servicios de aplicación
│   │   ├── app.routes.ts    # Configuración de rutas
│   │   ├── app.config.ts    # Configuración de Angular
│   │   └── app.ts           # Componente principal
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.css           # Estilos globales
│
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Instalación y ejecución

### Requisitos previos

Antes de comenzar, es necesario tener instalado:

- [Node.js](https://nodejs.org/)
- npm
- [Angular CLI](https://angular.dev/tools/cli)

### 1. Clonar el repositorio

```bash
git clone https://github.com/Tea-AppbyAureaPublishing/Tea-App_Angular-Ver.git
```

### 2. Acceder al proyecto

```bash
cd Tea-App
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar la aplicación

```bash
npm start
```

La aplicación estará disponible en:

```text
http://localhost:4200/
```

El servidor de desarrollo permite actualizar automáticamente la aplicación cuando se modifican los archivos del proyecto.

---

## 🔑 Autenticación en modo desarrollo

La V1 incorpora un sistema de autenticación con datos simulados para facilitar las pruebas del frontend sin depender de un servidor backend.

Se incluyen dos cuentas de prueba:

| Usuario | Correo electrónico | Contraseña  |
| ------- | ------------------ | ----------- |
| Karol   | karol@example.com  | password123 |
| Jazmin  | jazmin@example.com | password123 |

**Importante:** estas cuentas son exclusivamente para pruebas. Los usuarios simulados se almacenan en memoria y se pierden al recargar la aplicación.

El servicio de autenticación (`services/auth.ts`) dispone de una configuración para alternar entre datos simulados y peticiones a un backend real.

---

## 🧪 Comandos disponibles

| Comando         | Descripción                                   |
| --------------- | --------------------------------------------- |
| `npm start`     | Inicia el servidor de desarrollo              |
| `npm run build` | Compila la aplicación                         |
| `npm run watch` | Compila en modo desarrollo observando cambios |
| `npm test`      | Ejecuta las pruebas unitarias                 |

---

## 📌 Estado de desarrollo

Esta primera versión establece la estructura visual y funcional del frontend web.

**Implementado en V1:**

- Estructura de navegación.
- Diseño de las principales pantallas.
- Componentes de inicio, infusiones y tés.
- Formularios de inicio de sesión y registro.
- Servicio de autenticación simulado.
- Protección de la ruta del perfil.
- Edición local del perfil.
- Confirmación de cierre de sesión.

**Pendiente de desarrollo:**

- Integración completa con el backend.
- Conexión de los catálogos con la base de datos.
- Implementación funcional de filtros, ordenación y búsquedas.
- Gestión persistente de tés favoritos.
- Creación, edición y eliminación de tés propios.
- Recuperación real de contraseñas.
- Obtención de los datos reales del usuario.

---

## 👥 Proyecto

**Tea-App** es un proyecto desarrollado por el equipo de **Aurea Publishing**, orientado a crear una plataforma digital para descubrir, consultar y gestionar información sobre tés e infusiones.

- **Proyecto:** Tea-App
- **Organización:** Aurea Publishing
- **Plataforma:** Web
- **Versión:** V1
- **Framework:** Angular

---

_Tea-App — Descubre el mundo del té, una taza a la vez. 🍵_

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
