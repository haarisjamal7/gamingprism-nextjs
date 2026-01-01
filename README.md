# Next.js Dashboard Application

A modern **Next.js App Router–based dashboard application** demonstrating
server components, dynamic routing, loading states, error boundaries, and
real-world data handling using public APIs.

This project simulates working on an existing production dashboard with
partial requirements and evolving UI needs.

---

## Features

### Home
- Minimal landing screen
- Guides users toward dashboard experience
- Clear CTA to explore data modules

---

### Dashboard Overview
- Sidebar layout using reusable UI components
- Overview cards showing:
  - Total Posts
  - Total Products
- Clickable cards navigate to detailed modules

---

### Posts Module
- Data fetched from **DummyJSON Posts API**
- Server Components with:
  - Pagination via `searchParams`
  - Dynamic routes (`/posts/[postsId]`)
- Skeleton loading states using `loading.jsx`
- Error handling via `error.jsx`
- Post detail page includes:
  - Title
  - Body
  - Tags
  - Views & reactions

---

### Products Module
- Data fetched from **DummyJSON Products API**
- Server-rendered list pages
- Dynamic product detail pages
- Skeleton loaders for:
  - Product list
  - Product detail
- Graceful handling of invalid IDs via `notFound()`

---

## Tech Stack

- **Next.js 14+ (App Router)**
- **React Server Components**
- **Tailwind CSS**
- **shadcn/ui**
- **Dynamic Routes**
- **DummyJSON Public APIs**

---

## Setup Instructions

###  Install Dependencies
```bash
npm install
