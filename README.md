# 🛒 E-Commerce Inventory API

A robust RESTful API built with **Node.js**, **Express**, and **MongoDB**. This backend service handles product management with advanced features like server-side pagination, regex-based search, and full CRUD operations.

## 🚀 Key Features

- **Full CRUD Operations**: Create, Read, Update, and Delete products.
- **Advanced Search**: Filter products by name using regex (case-insensitive).
- **Pagination**: Efficiently loads data in chunks to improve performance.
- **RESTful Architecture**: Follows standard HTTP methods and status codes.
- **MVC Structure**: Organized codebase using Model-View-Controller pattern.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Tools**: Postman (for testing), Git (version control)

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [https://github.com/gabrieliyinbor/ecommerce-api.git](https://github.com/gabrieliyinbor/ecommerce-api.git)
   cd ecommerce-api

2. **Install dependencies**
   ```bash
   npm install

3. **Environment Setup**
   ```Code snippet
   PORT=5000
   MONGO_URI=your_mongodb_connection_string_here

4. **Run the server**
   ```bash
   # Development mode (with nodemon)
   npm run dev

   # Production mode
   npm start

## 📡 API Endpoints

### Products

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/products` | Fetch all products (includes pagination) |
| `GET` | `/api/products?keyword=iphone` | Search products by name |
| `GET` | `/api/products?pageNumber=2` | Fetch specific page of products |
| `GET` | `/api/products/:id` | Fetch single product details |
| `POST` | `/api/products` | Create a new product |
| `PUT` | `/api/products/:id` | Update product details |
| `DELETE` | `/api/products/:id` | Remove a product |

## 🧪 Example Request (Search)

**GET** `/api/products?keyword=camera`

```json
[
  {
    "_id": "64f1a2b...",
    "name": "Sony Alpha Camera",
    "price": 1200,
    "category": "Electronics"
  }
]