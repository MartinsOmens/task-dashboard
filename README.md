# TaskFlow – Task Management App

A full‑stack task management application with **Google OAuth authentication**, a dashboard, and full **CRUD operations** powered by **Supabase**.

## ✨ Features

- 🔐 **Google OAuth login** (bypasses Supabase email rate limits)
- 📊 **Dashboard** with sidebar navigation
- ✅ **Full CRUD** for tasks (Create, Read, Update, Delete)
- 🗄️ **Supabase** backend (authentication + database)
- 🛡️ **Protected routes** (only authenticated users can access tasks)
- 🚪 **Complete logout** that fully clears the session

## 🛠️ Tech Stack

- **Frontend**: React + React Router DOM
- **Authentication**: Supabase Auth (Google OAuth provider)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Build Tool**: Vite

## 📋 Prerequisites

- Node.js (v18 or later)
- A [Supabase](https://supabase.com) project
- A [Google Cloud](https://console.cloud.google.com) project (for OAuth credentials)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MartinsOmens/task-dashboard
cd taskflow