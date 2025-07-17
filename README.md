# Inventory Management System

This is a modern inventory management web application built with **Vue 3**, **Vite**, and **TypeScript**. It allows users to manage products, categories, and users, providing features such as a dashboard with analytics, dark/light mode, filtering, searching, pagination, and a responsive UI. The project integrates with a mock API for demonstration and is designed for easy customization and scalability.

## Features

- Product, category, and user management
- Dashboard with analytics and charts (custom Canvas-based)
- Dark/light mode toggle (with system and user preference)
- Filtering, searching, and pagination for products
- Responsive sidebar and offcanvas navigation
- Mock API integration (using [mockapi.io](https://mockapi.io/))
- TypeScript support and type checking
- Modern, accessible UI with Bootstrap 5

## Screenshots

> _Add screenshots or GIFs here to showcase the UI_

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-username/inventory-management.git
cd inventory-management
npm install
```

### Development

Start the development server with hot reload:

```sh
npm run dev
```

### Type Check, Build, and Minify for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## Usage

- Access the app at `http://localhost:5173` (or the port shown in your terminal)
- Log in or register a user
- Add, edit, or delete products and categories
- Use the dashboard for analytics and quick insights
- Toggle dark/light mode in settings

## API

This project uses a mock API for demonstration:

```
https://686790d4e3fefb261edf218d.mockapi.io/users
```

You can update the API endpoints in the store files as needed.

## Project Structure

- `src/components/` — UI components (Sidebar, Navbar, InventoryForm, etc.)
- `src/views/` — Main views/pages (Dashboard, Products, Categories, Settings, etc.)
- `src/stores/` — Pinia stores for state management
- `src/composables/` — Custom composables (e.g., useDarkMode)
- `src/assets/` — Global styles and assets

## Customization

- Update styles in `src/assets/main.css` for branding
- Modify API endpoints in `src/stores/`
- Add new features or pages as needed

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur)

## License

MIT
