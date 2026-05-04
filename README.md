# 🛒 SunCart - E-commerce Website

## 🌐 Live URL

👉https://sun-cart-e-commerce-website.vercel.app/

---

## 📌 Project Purpose

SunCart is a simple e-commerce web application where users can:

* Browse products
* Register and log in
* View and update their profile
* Access protected product details pages

---

## 🚀 Key Features

### 🔐 Authentication System

* Email & Password login and registration
* Google Login using Firebase Authentication
* Protected routes (users must log in to view product details)
* Redirect system (after login, users return to the previous page)

### 👤 User Profile

* Profile page displaying name, email, and photo
* Update profile functionality
* Image fallback support

### 🛍️ Product System

* Product listing on the home page
* Dynamic product details page (`/product/[id]`)
* 404 error handling for invalid product IDs

### 🎨 UI/UX Design

* Fully responsive (mobile, tablet, desktop)
* Modern e-commerce design
* Sticky Navbar (fixed on scroll)
* Gradient backgrounds and glassmorphism UI

### 📦 Additional Sections

* Summer Care Tips section
* Top Brands section
* Footer with contact information and social links

---

## 🧰 Technologies Used

* ⚛️ Next.js (App Router)
* 🎨 Tailwind CSS
* 🔥 Firebase Authentication
* 🧠 React Hooks (useState, useEffect)
* 🌐 LocalStorage (for basic authentication handling)

---

## 📦 NPM Packages Used

* firebase
* animate.css

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/injamamulhoqtamim/suncart.git
cd suncart
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 🚀 Deployment

This project is deployed using **Vercel**.

Steps:

1. Push  project to GitHub
2. Import the repository into Vercel
3. Configure environment variables (Firebase config if needed)
4. Deploy

---

## ⚠️ Important Notes

* Google Login requires Firebase authorized domain setup
* LocalStorage is used for demo authentication (not suitable for production)
* Make sure environment variables are properly configured in Vercel

---

## 👨‍💻 Author

**Your Name**
📧 Injamamul Hoq 

---

## 📄 License

This project is for educational purposes only.
