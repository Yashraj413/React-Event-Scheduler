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

---

## 🚀 Getting Started

Clone the repo and jump in:

git clone https://github.com/Yashraj413/React-Event-Scheduler
cd react-event-scheduler
npm install
npm start

text

To run tests:

npm test

text

---

## 🧪 Example Usage

Once installed, just drop the `Scheduler` component into your app:

import Scheduler from './components/Scheduler';

function App() {
return (
<div>
<h1>Plan Your Event</h1>
<Scheduler />
</div>
);
}

text

Want to get fancier? Use the subcomponents individually:  
`<DatePickerUI />`, `<RecurrenceOptions />`, and `<PreviewCalendar />`.

---

## 🧠 Why I Made This

Sometimes all you need is a simple, reusable way to select a date and see when something repeats. Whether you're building a planner app, scheduling tool, or just automating reminders, this gives you a clean head start. Bonus: It's modular and testable from the ground up.

---

## 🛠️ Customize Me!

Want to take it further? Some fun ideas:

- Add support for **end dates** or number of recurrences
- Let users choose specific days of the week (e.g. Mon & Wed only)
- Export results as an `.ics` file for calendar import
- Add styling libraries like Tailwind or Material UI

---

## 👨‍💻 Author

Made with ⚛️ by **Yash Raj**  
[GitHub]([https://github.com/your-username](https://github.com/Yashraj413)) 

---

## 📃 License

Use it, modify it, build cool stuff with it. Just give credit. 🤝

---

## 🙌 Contributions?

Pull requests are welcome! Bug fixes, features, ideas — bring it on.  
Let’s build something useful together. 💙

---

