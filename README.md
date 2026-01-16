# Assignments Manager

A React web application for managing academic work using a hierarchical structure:
**Semesters → Courses → Assignments**.

## Overview
This project allows users to create, edit, and manage semesters, courses, and assignments with persistent storage in the browser. Navigation mirrors the data hierarchy, enabling users to drill down from semesters to individual assignments.

## Key Features
- Hierarchical navigation using React Router
- Create, edit, and delete semesters, courses, and assignments
- Inline editing of names and assignment weights
- Persistent client-side storage using `localStorage`
- Cascading deletion to remove dependent data when a parent item is deleted

## Technical Highlights
- Implemented reusable CRUD components for adding, listing, editing, and deleting items
- Designed a rename-tolerant routing approach using UUID-based identifiers combined with URL-friendly slugs
- Centralized ID handling, storage key generation, and deletion logic into shared helper functions.
- Used useState to manage UI data and useEffect to synchronize it with localStorage

## Tech Stack
- React
- React Router
- JavaScript (ES6+)
- Vite

## Project Structure
- `components/` — reusable UI components (Add, Items)
- `pages/` — route-level pages (Semesters, Courses, Assignments)
- `functions.js` — shared helper logic (IDs, slugs, storage keys, deletion)
- `constants.js` — shared constants and item types

## Getting Started
```bash
npm install
npm run dev

