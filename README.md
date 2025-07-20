# 🗓️ React Event Scheduler

A clean and simple date-based event scheduler built with React.  
Pick a date, choose how often it repeats (daily, weekly, monthly), and instantly preview upcoming events. Perfect for calendars, planners, or productivity tools.

---

## ✨ What This Is

This project is a reusable React component that lets you:

✅ Select a **start date**  
🔁 Choose a **recurrence** (none, daily, weekly, monthly)  
🔍 See a **preview** of upcoming event dates  
💡 All in a modular, well-tested component

---

## 📦 Tech Stack

- **React** – Front-end framework
- **date-fns** – Date formatting & manipulation
- **Jest + React Testing Library** – For unit and integration tests

---

## 📁 What’s Inside

src/
components/
📅 DatePickerUI.jsx // Date selector
🔁 RecurrenceOptions.jsx // Recurrence radio buttons
👀 PreviewCalendar.jsx // Preview of upcoming dates
🧩 Scheduler.jsx // Main UI wrapper for all components

utils/
recurrenceUtils.js // Date logic (recurrence generator)

tests/
🌡️ recurrenceUtils.test.js
🔬 Scheduler.test.jsx

App.jsx
index.js
