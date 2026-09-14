# Paradise Nursery

Paradise Nursery is a React single-page application for a fictional online
plant shop. It was built as a front-end project to practice component-based
architecture, client-side routing, and state management (via the Context
API) with React.

## Project Name

**Paradise Nursery** — "Where you can find your favourite plants."

## About the Project

Paradise Nursery lets visitors browse an online plant catalog organized by
category, add plants to a shopping cart, and adjust quantities before
checking out. The app also includes a landing page and an About Us page
describing the company.

### Features

- **Landing page** — introduces the Paradise Nursery brand with a "Get
  Started" button that takes visitors straight into the product catalog.
- **Product listing page** — plants organized into four categories
  (Aromatic Fragrant Plants, Insect Repellent Plants, Air Purifying Plants,
  and Low Maintenance Plants), each with a name, description, price, and
  an "Add to Cart" control.
- **Shopping cart** — add, increase/decrease, and remove items, with a
  live item count in the header and a running total cost.
- **About Us page** — background on the company and its mission.

## Tech Stack

- [React](https://react.dev/) (functional components + hooks)
- [React Router](https://reactrouter.com/) for client-side navigation
- React Context API for global shopping cart state
- [Vite](https://vitejs.dev/) as the build tool / dev server
- Plain CSS (no external UI framework)

## Project Structure

```
paradise-nursery/
├── public/
├── src/
│   ├── assets/
│   │   └── landing-bg.svg
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── AboutUs.css
│   │   ├── Cart.jsx
│   │   ├── Cart.css
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── ProductList.jsx
│   │   └── ProductList.css
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
git clone <this-repo-url>
cd paradise-nursery
npm install
```

### Run the development server

```bash
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`) in your
browser.

### Build for production

```bash
npm run build
```

The optimized production build is output to the `dist/` folder.

### Preview the production build

```bash
npm run preview
```

## Author

Built by Mariam.
