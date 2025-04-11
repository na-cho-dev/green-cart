# Green Cart - Client Side

## Overview

The client side of **Green Cart** is a modern, responsive, and feature-rich e-commerce platform built using **React** and **Vite**. It provides a seamless shopping experience for users, allowing them to browse products, manage their cart, place orders, and more. The client communicates with the backend API to fetch and manage data dynamically.

---

## Features

- **User Authentication**: Login and registration functionality for users.
- **Product Browsing**: View all products, filter by categories, and search for specific items.
- **Cart Management**: Add, update, and remove items from the cart.
- **Order Placement**: Place orders with options for Cash on Delivery (COD) or online payment via Stripe.
- **Address Management**: Add and manage shipping addresses.
- **Seller Dashboard**: Admin/seller functionalities to add products, view product lists, and manage orders.
- **Responsive Design**: Fully responsive UI for mobile, tablet, and desktop devices.
- **Notifications**: Real-time feedback using toast notifications for user actions.

---

## Tech Stack

- **React**: Frontend library for building user interfaces.
- **Vite**: Fast development environment and build tool.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: For client-side routing.
- **Axios**: For making HTTP requests to the backend.
- **React Hot Toast**: For displaying toast notifications.

---

## Project Structure

```
client/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images, icons, and other static assets
│   ├── components/        # Reusable React components
│   ├── context/           # Global state management using React Context
│   ├── pages/             # Page components for routing
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Entry point for the React app
│   ├── index.css          # Global CSS styles
├── .env                   # Environment variables
├── vite.config.js         # Vite configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Documentation
```

---

## Installation and Setup

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/green-cart.git
   cd green-cart/client
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the `client` directory and add the following:
   ```
   VITE_CURRENCY="$"
   VITE_BACKEND_URL="http://localhost:3300"
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   The application will be available at [http://localhost:4400](http://localhost:4400).

5. **Build for Production**:
   To create a production build, run:
   ```bash
   npm run build
   ```

6. **Preview the Production Build**:
   ```bash
   npm run preview
   ```

---

## Available Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality issues.

---

## Key Features and Components

### Pages

1. **Home Page**:
   - Displays banners, categories, and best-selling products.

2. **All Products**:
   - Lists all available products with search functionality.

3. **Product Details**:
   - Detailed view of a single product with options to add to cart or buy now.

4. **Cart**:
   - Manage cart items and proceed to checkout.

5. **My Orders**:
   - View order history and details.

6. **Seller Dashboard**:
   - Add products, view product lists, and manage orders.

### Components

- **Navbar**: Navigation bar with links, search, and cart icon.
- **Footer**: Footer with quick links and contact information.
- **ProductCard**: Reusable card component for displaying product information.
- **Login**: Modal for user login and registration.
- **Seller Components**: Components for seller-specific functionalities like adding products and viewing orders.

---

## Styling

The application uses **Tailwind CSS** for styling. Custom styles are defined in `index.css` and Tailwind's utility classes are used throughout the components for consistent and responsive design.

---

## Environment Variables

The following environment variables are used in the client:

- `VITE_CURRENCY`: The currency symbol to display (e.g., `$`).
- `VITE_BACKEND_URL`: The base URL for the backend API (e.g., `http://localhost:3300`).

---

## Backend Integration

The client communicates with the backend API for all dynamic functionalities. Ensure the backend server is running and accessible at the URL specified in `VITE_BACKEND_URL`.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

For any questions or feedback, please contact [nachodev369@gmail.com](mailto:nachodev369@gmail.com).
