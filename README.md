# 🦆 BlindBook Dashboard – AI-Powered Notification System

A prototype of an intelligent dashboard built with **Next.js**, **Supabase**, and **Claude AI**, inspired by the BlindBook platform used in duck hunting clubs.

This project demonstrates how to integrate real-time data, user personalization, and AI insights in a fullstack React application.

---

## 🚀 Features

- 🔐 **User Authentication** via Supabase
- 🌅 **Sunrise/Sunset-based Alerts**
- 🤖 **Claude-generated Recommendations** for hunting strategy
- ⚙️ **Alert Configuration Panel**
- 📉 **Data Visualizations** (graphs & timelines)
- 💾 **Offline Fallback** using localStorage / IndexedDB
- 🧠 Built with **Claude CLI & Windsurf** for AI-assisted coding

---

## 🧱 Tech Stack

| Tech         | Description                   |
| ------------ | ----------------------------- |
| Next.js 14   | App Router + React 18         |
| Tailwind CSS | Modern, utility-first styling |
| Supabase     | Auth, DB, Realtime            |
| Claude CLI   | AI assistant (via Anthropic)  |
| TypeScript   | Type safety throughout        |

---

## 🗂️ Project Structure

```
/app
  /dashboard
    page.tsx             # Main dashboard view
    Notifications.tsx    # Alert list
    InsightCard.tsx      # AI-generated recommendations

/hooks
  useNotifications.ts    # Fetch and manage user alerts
  useSunEvents.ts        # Time-based logic

/lib
  claudeClient.ts        # Integration with Claude

/supabase
  schema.sql             # DB schema: users, notifications, preferences
```

---

## 🛠 Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/blindbook-dashboard.git
cd blindbook-dashboard
npm install
npm run dev
```

---

## 📦 Environment Variables

You'll need a `.env.local` file with:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Claude API runs locally via `claude` CLI and does not require a token here.

---

## 📌 Inspiration

Based on the [BlindBook Platform](https://www.blindbookai.com) — an AI-powered duck club management system. This dashboard reimagines part of its functionality for demo and interview purposes.

---

## 📄 License

MIT © Felipe José Negreiros Figueiredo
