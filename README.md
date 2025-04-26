# 🛒 React Shopping Cart App

A fully functional shopping cart web application built using **React**, **React Router**, and **Context API**. This app fetches product data from [Fake Store API](https://fakestoreapi.com/), displays it in a responsive layout, and allows users to add products to their cart with quantity management and real-time notifications.

---

## ✨ Features

- 📦 **Product Listing** – Displays products with title, price, image, and an "Add to Cart" button.
- ➕ **Add to Cart** – Adds an item to the cart and shows a real-time notification.
- 🔁 **Quantity Control** – Increase/decrease quantity of each item directly from the cart.
- 🛍️ **Cart Management** – View cart contents and item-wise count.
- 🔔 **Toast Notification** – Instant feedback when items are added or updated in the cart.
- 🚀 **Client-Side Routing** – Seamless navigation using `react-router-dom`.

---

## 🚀 What I Learned

This project helped me practice and understand the following **React concepts**:

- ✅ **React Functional Components**  
- ✅ **JSX Syntax and Composition**
- ✅ **React State Management** using `useState`
- ✅ **Context API** to share global state (`CartContext`)
- ✅ **React Router (`react-router-dom`)** for client-side routing
- ✅ **React Hooks** like `useEffect`, `useContext`, and `useState`
- ✅ **Conditional Rendering** based on cart content
- ✅ **State Immutability** while updating cart arrays
- ✅ **Derived State Updates** (updating `count` when items exist)
- ✅ **Styling using CSS Modules**
- ✅ **Temporary Notification System** using state and `setTimeout`

> 🧠 This was a hands-on journey into how React apps communicate between components, manage global state, and update UI reactively based on user interaction.

---

## 🧠 Tech Stack

- **React**
- **React Router DOM**
- **Context API**
- **CSS Modules**
- **Fake Store API**

---

## 📂 Folder Structure
shopping-cart-app/
├── public/
│   └── icons/
│       ├── add.png
│       ├── cart.png
│       ├── down-arrow.png
│       ├── home.png
│       └── minus.png
│
├── src/
│   ├── cartComponents/
│   │   └── Cart.jsx
│   │
│   ├── productListComponents/
│   │   ├── Header.jsx
│   │   └── ProductCard.jsx
│   │
│   ├── contexts/
│   │   └── CartContext.js
│   │
│   ├── App.jsx
│   ├── index.js
│   └── index.css
│
├── package.json
├── README.md
└── ... (other config files like .gitignore, etc.)


---

## 🛠️ How to Run Locally

1. **Clone the repository:**

git clone https://github.com/Akash-a11-droid/shoppingCart.git
cd shoppingCart

2. **Install dependancies:**

npm install

3. **Start the development server:**

npm start

The app will be running at http://localhost:3000.


👨‍💻 Author

Akash
Learning frontend as I am aiming for using this front-end knowledge in my other app.
Reach out or star the repo if this helped you!


📄 License

This project is open source and free to use.