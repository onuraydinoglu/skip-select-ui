# ♻️ Skip Size Selector – UI Redesign

This is a React-based front-end UI redesign project created as part of a technical coding challenge. The objective was to rebuild the "Choose Your Skip Size" page from scratch, using modern front-end practices while keeping the original functionality intact.

---

## 🌐 Live Demo

👉 [https://bespoke-stardust-f2b9a1.netlify.app](https://bespoke-stardust-f2b9a1.netlify.app)

---

## 🛠️ Tech Stack

- **React.js** – Component-based structure
- **Tailwind CSS** – Utility-first styling framework
- **Vite** – Lightweight and fast dev/build tool
- **Axios** – For fetching skip options from the provided API
- **Lucide Icons** – Icon library for cleaner visuals

---

## ✅ Key Features

- ✅ Fully redesigned skip size selection UI
- ✅ Responsive layout for mobile and desktop
- ✅ Interactive skip cards with hover and selection effects
- ✅ Stepper component showing current progress
- ✅ Data fetched dynamically from a skip API

🖱️ Interaction
- Clicking a skip card selects it (visual border highlights the selection)
- Hovering reveals subtle border animation
- Selection state managed via React state hooks

---

## 🧠 My Approach

- Focused on delivering a clean and modern user experience
- Prioritized **maintainable, modular code**
- Designed reusable components like `<SkipCard />` and `<Stepper />`
- Ensured **mobile responsiveness** from the ground up
- Separated concerns clearly (data, UI, logic)

---

## 📸 Screenshots

### 🖥️ Desktop View
![Desktop View](https://github.com/user-attachments/assets/a14f0b2e-96c1-471b-b91b-647354385a87)

### ➕ Skip Selection with Detail Panel
![Mobile View](https://github.com/user-attachments/assets/d900a0b1-6d41-418e-ac29-6c2f0b1abba5)

### 📱 Mobile View
![Stepper](https://github.com/user-attachments/assets/972253cb-8964-436a-9e06-71ff4e752c13)

---

## 🔧 Getting Started

To run the project locally:

## 🔧 Getting Started

To run the project locally:

```bash
git clone https://github.com/onuraydinoglu/skip-select-ui.git
cd skip-select-ui
npm install
npm run dev
```

---

## 📁 Folder Structure

```text
skip-select-ui/
├── public/
│   └── images/         # Image assets
└── src/
    ├── components/     # Reusable UI components (SkipCard, Stepper, etc.)
    ├── pages/          # Page-level components (e.g., SkipSelection.jsx)
    ├── services/       # API integration using Axios
    ├── shared/         # Static data or shared resources
    ├── utils/          # Helper functions
