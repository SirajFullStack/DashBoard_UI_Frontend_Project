# Pulse — Growth Admin Dashboard

A sleek, modern, fully responsive admin dashboard UI built with **pure HTML, CSS & JavaScript** — no frameworks, no dependencies, no bloat. Designed for SaaS products, growth teams, and admin panels that need to look premium out of the box.

![Made with HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Made with CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Made with JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Framework](https://img.shields.io/badge/Dependencies-None-success?style=flat)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat)

---

## Why Pulse?

Most admin dashboard templates come locked inside heavy frameworks, force you into a build pipeline, or charge a premium for basic components. **Pulse is different** — it's clean, dependency-free, fully editable HTML/CSS/JS that drops straight into any project, integrates with any backend, and still looks like a $10k design.

If you're a startup, agency, or SaaS founder looking for a dashboard that's **fast to ship and easy to customize**, this is built for you.

---

## ✨ Features

- **10 fully designed pages** — Dashboard, Analytics, Customers, Orders, Billing, Messages, Settings, Profile, and Sign In
- **Dark & Light theme toggle** — instant switching via CSS variables, no page reload
- **Live interactive charts** — powered by Chart.js (revenue trends, traffic sources, sparklines)
- **Smart global search** — searches across all dashboard sections instantly
- **Fully responsive layout** — collapsible sidebar and adaptive grid for mobile, tablet, and desktop
- **Reusable component patterns** — consistent sidebar, topbar, profile menu, and cards across every page
- **Clean, modular codebase** — one HTML/JS pair per page, single shared stylesheet, zero framework lock-in
- **Production-ready UI details** — empty states, pagination, status badges, notification dots, and more

---

## 🖥️ Preview

| Dashboard Overview | Customers |
|---|---|
| ![Dashboard](Screenshots/dashboard.png) | ![Customers](Screenshots/customers.png) |

| Sign In | Analytics |
|---|---|
| ![Sign In](Screenshots/sign_in.png) | ![Analytics](Screenshots/analytics.png) |

More screenshots available in the [`Screenshots/`](Screenshots) folder — Billing, Orders, Messages, Settings, and Profile pages included.

---

## 🚀 Getting Started

No build tools. No npm install. No setup headaches.

```bash
# 1. Clone the repository
git clone https://github.com/your-username/pulse-dashboard.git

# 2. Open it
cd pulse-dashboard

# 3. Just open index.html in your browser
```

That's it — Pulse runs instantly in any modern browser.

---

## 📁 Project Structure

```
pulse-dashboard/
├── index.html          # Dashboard entry point (Overview)
├── dashboard.html / .js
├── analytics.html / .js
├── customers.html / .js
├── orders.html / .js
├── billing.html / .js
├── messages.html / .js
├── settings.html / .js
├── profile.html / .js
├── sign_in.html / sign_in.css
├── styles.css           # Single shared stylesheet (design tokens + components)
└── Screenshots/          # UI preview images
```

Each page is self-contained (its own HTML + JS), while sharing one global stylesheet built on CSS custom properties — so theming, spacing, and colors stay consistent across the whole product with zero duplication.

---

## 🛠️ Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties (design tokens), CSS Grid & Flexbox, no preprocessor needed
- **Vanilla JavaScript (ES6+)** — DOM rendering, event delegation, state handling
- **[Chart.js](https://www.chartjs.org/)** — for all data visualizations

---

## 🎨 Customization

Every color, spacing value, and radius is controlled through CSS variables at the top of `styles.css`:

```css
:root {
  --accent: #4f6df5;
  --bg: #0b0f19;
  --surface: #11172a;
  --text: #e6e8ee;
  ...
}
```

Change the palette once — it propagates across every page and every component instantly.

---

## 📌 Roadmap

- [ ] Backend/API integration guide
- [ ] Additional chart types (heatmaps, funnels)
- [ ] Accessibility (WCAG) audit pass
- [ ] Component documentation site

---

## 🤝 Let's Work Together

This dashboard is available for **customization, white-labeling, and integration** into your product. If you're looking for a developer to adapt Pulse to your brand or connect it to your backend, feel free to reach out.

**Contact:** your-email@example.com
**Portfolio:** your-portfolio-link.com

---

## 📄 License

Released under the [MIT License](LICENSE) — free to use, modify, and build upon.
