# 🛒 SunCart - E-commerce Website

## 🌐 Live URL

👉 https://your-project-name.vercel.app

---

## 📌 Project Purpose

SunCart একটি simple e-commerce web application যেখানে users:

* products দেখতে পারে
* login/register করতে পারে
* নিজের profile manage করতে পারে
* protected product details page access করতে পারে

---

## 🚀 Key Features

### 🔐 Authentication System

* Email & Password login/register
* Google Login (Firebase Authentication)
* Protected routes (login ছাড়া product details access করা যাবে না)
* Redirect system (login এর পরে previous page এ ফিরে যাওয়া)

### 👤 User Profile

* Profile page (name, email, photo)
* Update profile feature
* Image fallback support

### 🛍️ Product System

* Product list (Home page)
* Dynamic product details page (`/product/[id]`)
* 404 handling (invalid product ID হলে error দেখাবে)

### 🎨 UI/UX

* Fully responsive design (mobile, tablet, desktop)
* Modern e-commerce style UI
* Sticky Navbar
* Gradient backgrounds & glassmorphism effect

### 📦 Extra Sections

* Summer Care Tips
* Top Brands section
* Footer with contact info & social links

---

## 🧰 Technologies Used

* ⚛️ Next.js (App Router)
* 🎨 Tailwind CSS
* 🔥 Firebase Authentication
* 🧠 React Hooks (useState, useEffect)
* 🌐 LocalStorage (for simple auth handling)

---

## 📦 NPM Packages Used

* firebase
* animate.css

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/suncart.git
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

This project is deployed on **Vercel**.

Steps:

1. Push code to GitHub
2. Import project in Vercel
3. Add Firebase config (if needed)
4. Deploy

---

## ⚠️ Important Notes

* Google Login requires Firebase authorized domain setup
* LocalStorage is used for demo authentication (not production-ready)
* Make sure `.env` variables are configured in Vercel

---

## 👨‍💻 Author

**Your Name**
📧 [your-email@example.com](mailto:your-email@example.com)

---

## 📄 License

This project is for educational purposes only.
