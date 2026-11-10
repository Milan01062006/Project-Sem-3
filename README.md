# Project-Sem-3
# LearnSphere: Online Learning & Course Portal
# link for guthub pages deployment:
https://milan01062006.github.io/Project-Sem-3/index.html

A fully responsive, single-page website for browsing online courses, viewing course details, meeting instructors and registering for a course. Built as a front-end learning project with **HTML5, CSS3 (Grid & Flexbox), Bootstrap 5 and jQuery**.

It works on desktop, tablet and mobile screens.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)


---

## Features

**Page sections**

- **Navbar:** logo and links (Home, Courses, Instructors, Register). Sticky, and collapses into a hamburger menu on mobile.
- **Hero:** headline, tagline and an "Explore Courses" button.
- **Courses:** 6 course cards, each with image, title, category, duration, rating and a "View Details" button.
- **Course Details Modal:** description, instructor info, expandable module list, duration and fee.
- **Instructors:** 4 instructor cards with photo, name, expertise and short bio.
- **Registration Form:** full name, email, phone, course dropdown and terms checkbox, with validation.
- **Footer:** quick links, contact details and social icons.

**jQuery interactions**

- Live course search as you type.
- Category filter buttons (All, Web Development, Data Science, Design).
- Fade in/out of course cards when filtering, with a "no results" message.
- Slide-toggle (show/hide) of course modules inside the modal.
- Real-time form validation with inline error messages and a success message.
- Smooth scrolling from navbar and footer links.
- "Back to top" button that fades in after scrolling down.
- Hover and click animations on cards and buttons.
- "Enroll in this Course" in the modal pre-selects that course in the registration form.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure (`header`, `nav`, `main`, `section`, `article`, `footer`) |
| CSS3 | Custom styling, CSS variables, Grid, Flexbox, media queries |
| Bootstrap 5.3 | Navbar, modal, form controls, responsive utilities |
| Bootstrap Icons | Icons for buttons, meta info and social links |
| jQuery 3.7 | DOM manipulation, events, effects and form validation |

All libraries load from CDNs, so there is nothing to install.

---

## Project Structure

```
learnsphere/
├── index.html    # Page structure (HTML only)
├── style.css     # All custom CSS
├── script.js     # All jQuery code
└── README.md     # This file
```

There is no inline CSS or JavaScript. Each file has one job.

---
