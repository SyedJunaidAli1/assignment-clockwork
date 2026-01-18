# Shopify Assignment ClockWork – Frontend (Admin UI)

This is the frontend admin interface for the Shopify Post-Purchase application.
It allows merchants to view and update the post-purchase message that is shown to customers after checkout.

## 🚀 Tech Stack

Next.js

React

TypeScript

Fetch API

CSS / basic styling

## 🧠 Purpose of the Frontend

The frontend serves as the Shopify Admin UI where merchants can:

View the current post-purchase message

Update the message via a simple form

Save the message to the backend server

This UI is accessed after app installation, when the merchant is redirected from Shopify to the app.

## 📁 Folder Structure (Simplified)
```
frontend/
├── app/
│   └── page.tsx
├── public/
├── .env.example
├── package.json
└── README.md
```
🔐 Environment Variables

Create a .env.local file using .env.example as a reference.
```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SHOP_DOMAIN=

```

## ⚙️ Installation & Setup
1️⃣ Install dependencies
```
bun install
```
2️⃣ Start the development server
```
bun run dev
```

The frontend will run on:

http://localhost:3000

## 🔁 Data Flow
```
Shopify Admin
   ↓
Frontend (Next.js)
   ↓
Backend API (Express)
   ↓
MongoDB
```
Example:

Frontend fetches the current post-purchase message

Merchant updates the message

Frontend sends update request to backend

Backend saves the message in MongoDB

## 🧩 Relationship with Post-Purchase Extension

The frontend does not run inside checkout

It is used only for configuration

The post-purchase UI extension runs in Shopify’s checkout environment

For the core assignment:

The extension displays a static message

The frontend demonstrates how merchants could configure this message

This separation follows Shopify’s official architecture.

## 📝 Notes & Assumptions

Authentication and session handling are kept minimal for assignment scope

The shop domain is hardcoded via environment variables

UI styling is intentionally simple

Production deployment is not required

## ✅ Assignment Coverage

✔ Admin UI implemented

✔ Message editing supported

✔ Backend integration complete

✔ Clear separation of concerns