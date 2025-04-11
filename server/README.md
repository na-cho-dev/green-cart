# Green Cart - Server Side

## Overview

The server side of **Green Cart** is a robust and scalable backend built using **Node.js** and **Express.js**. It provides RESTful APIs for managing users, products, orders, and more. The server integrates with **MongoDB** for data storage, **Cloudinary** for image hosting, and **Stripe** for payment processing.

---

## Features

- **User Authentication**: Secure login and registration using JWT.
- **Seller Authentication**: Admin/seller login for managing products and orders.
- **Product Management**: APIs for adding, updating, and retrieving products.
- **Cart Management**: APIs for managing user cart data.
- **Order Management**: APIs for placing orders (COD and Stripe payments).
- **Address Management**: APIs for adding and retrieving user addresses.
- **Stripe Integration**: Secure online payment processing.
- **Cloudinary Integration**: Image upload and hosting for products.
- **Middleware**: Authentication and error handling middleware for secure and efficient API operations.

---

## Tech Stack

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for creating RESTful APIs.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM library for MongoDB.
- **Cloudinary**: Image hosting and management.
- **Stripe**: Payment gateway for online transactions.
- **JWT**: Secure authentication using JSON Web Tokens.
- **dotenv**: Environment variable management.

---

## Project Structure

```
server/
├── configs/               # Configuration files (DB, Cloudinary, Multer)
├── controllers/           # API controllers for handling business logic
├── middlewares/           # Custom middleware for authentication and error handling
├── models/                # Mongoose models for MongoDB collections
├── routes/                # Express routes for API endpoints
├── .env                   # Environment variables
├── server.js              # Entry point for the server
├── package.json           # Project dependencies and scripts
└── README.md              # Documentation
```

---

## Installation and Setup

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)
- **Cloudinary** account for image hosting
- **Stripe** account for payment processing

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-repo/green-cart.git
   cd green-cart/server
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the `server` directory and add the following:

   ```
   PORT=3300
   NODE_ENV=development

   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>

   # Admin Credentials
   SELLER_EMAIL=<admin-email>
   SELLER_PASSWORD=<admin-password>

   # Cloudinary
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_SECRET_KEY=<your-cloudinary-secret-key>

   # Stripe
   STRIPE_PUBLISHABLE_KEY=<your-stripe-publishable-key>
   STRIPE_SECRET_KEY=<your-stripe-secret-key>
   STRIPE_WEBHOOK_SECRET=<your-stripe-webhook-secret>
   ```

4. **Run the Server**:
   ```bash
   npm run server
   ```
   The server will start on [http://localhost:3300](http://localhost:3300).

---

## Available Scripts

- `npm start`: Start the server in production mode.
- `npm run server`: Start the server in development mode using Nodemon.

---

## API Endpoints

### User Routes (`/api/user`)

- `POST /register`: Register a new user.
- `POST /login`: Login a user.
- `GET /is-auth`: Check if a user is authenticated.
- `GET /logout`: Logout a user.

### Seller Routes (`/api/seller`)

- `POST /login`: Login a seller.
- `GET /is-auth`: Check if a seller is authenticated.
- `GET /logout`: Logout a seller.

### Product Routes (`/api/product`)

- `POST /add`: Add a new product (requires seller authentication).
- `GET /list`: Get a list of all products.
- `GET /id`: Get details of a specific product by ID.
- `POST /stock`: Update product stock status (requires seller authentication).

### Cart Routes (`/api/cart`)

- `POST /update`: Update user cart data.

### Address Routes (`/api/address`)

- `POST /add`: Add a new address for a user.
- `GET /get`: Get all addresses for a user.

### Order Routes (`/api/order`)

- `POST /cod`: Place an order with Cash on Delivery.
- `POST /stripe`: Place an order with Stripe payment.
- `GET /user`: Get all orders for a user.
- `GET /seller`: Get all orders for a seller/admin.

### Stripe Webhooks

- `POST /stripe`: Handle Stripe payment events.

---

## Middleware

- **authUser**: Middleware to authenticate users using JWT.
- **authSeller**: Middleware to authenticate sellers using JWT.

---

## Database Models

### User

- `name`: String (required)
- `email`: String (required, unique)
- `password`: String (required)
- `cartItems`: Object (default: {})

### Product

- `name`: String (required)
- `description`: Array of strings (required)
- `price`: Number (required)
- `offerPrice`: Number (required)
- `image`: Array of strings (required)
- `category`: String (required)
- `inStock`: Boolean (default: true)

### Order

- `userId`: String (required, ref: User)
- `items`: Array of objects (product and quantity)
- `amount`: Number (required)
- `address`: String (required, ref: Address)
- `status`: String (default: "Order Placed")
- `paymentType`: String (required)
- `isPaid`: Boolean (default: false)

### Address

- `userId`: String (required)
- `firstName`: String (required)
- `lastName`: String (required)
- `email`: String (required)
- `street`: String (required)
- `city`: String (required)
- `state`: String (required)
- `zipcode`: String (required)
- `country`: String (required)
- `phone`: String (required)

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
