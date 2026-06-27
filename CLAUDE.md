# Taurai Paris Baiwa — Developer Portfolio

## CLAUDE CODE PORTFOLIO PROMPT

Build a production-ready developer portfolio for **Taurai Paris Baiwa**, a Computer Science student
and aspiring software/data engineer. Implement this in a **Next.js** project with Tailwind CSS.

Include a responsive project grid, detailed case-study pages, technical skills, measurable results,
and a contact CTA. Use accessible HTML, mobile-first layout, semantic sections, keyboard-friendly
navigation, and clean component boundaries.

Add implementation notes for reusable project cards, case-study routing, image optimization,
metadata, and deployment.

---

## 1. HERO SECTION

- **Headline:** "Hi, I'm Taurai Paris Baiwa"
- **Animated typing effect** cycling through roles:
  - "Computer Science Student"
  - "Database Developer"
  - "Data Analytics Enthusiast"
  - "Software Developer"
- **Brief intro paragraph:**
  > Detail-oriented CS student passionate about building scalable, database-driven applications.
  > Currently interning at Tata Consultancy Services, where I turn complex datasets into
  > actionable insights.
- **CTA buttons:** "View Projects" and "Download Resume"
- **Social links:** LinkedIn, GitHub, Email (tauraiparisbaiwa@gmail.com)
  - LinkedIn: https://www.linkedin.com/in/taurai-paris-baiwa/
  - GitHub: https://github.com/tauraiPbaiwa-bit
  - Email: tauraiparisbaiwa@gmail.com
- **Hero photo:** Use `esther.jpeg` (professional headshot — woman in black blazer and head
  covering, smiling confidently). Place as a circular or rounded portrait beside or above
  the text on desktop; centered above text on mobile.
- **Design element:** Terminal-style code snippet or SQL query decoration (e.g., a styled
  `SELECT * FROM skills WHERE passion = 'high';` block)

---

## 2. ABOUT SECTION

- **Professional summary:**
  > Detail-oriented computer science student with a strong foundation in software development,
  > database systems, and data analytics. Experienced in designing and developing database-driven
  > applications using Java and Python, with expertise in SQL and PL/SQL. Proficient in Oracle
  > and MySQL database technologies. Passionate about building scalable applications, solving
  > complex technical challenges, and delivering impactful software solutions.
- **Currently:** Industry Project Intern at **Tata Consultancy Services**, Maharashtra, India
- **Education:** B.Sc. Computer Science, Vishwakarma University (Jul 2024 – Present)
- **Tech stack visualization** (icon grid)
- **Stats:** ~2 years into degree | 1 internship | 2 key projects | 2 certifications
- **Fun fact / personal touch:** "I think of databases like cities — good architecture makes
  everything flow."

---

## 3. SKILLS SECTION

Organized by category. Display as **icon grid with labels**, not progress bars.

### Data & Databases
- SQL / PL-SQL
- Oracle Database
- MySQL
- Data Modeling
- Data Visualization

### Programming Languages
- Python
- Java
- C++
- Object-Oriented Programming (OOP)

### Tools & Workflows
- Git
- Oracle Database Explorer
- Sales Order Management systems
- Agile methodology

---

## 4. PROJECTS SECTION

Featured projects (2 main + placeholder for future):

### Project 1 — Oracle E-Commerce Order Management System
- **Description:** An Oracle-based backend system to manage e-commerce orders, inventory,
  and secure transactions end-to-end.
- **Tech stack tags:** Oracle, SQL, PL-SQL, Data Modeling
- **One-line outcome:** Guaranteed data integrity and reliable order processing through
  robust SQL/PL-SQL stored procedures.
- **GitHub link:** https://github.com/tauraiPbaiwa-bit
- **Case-study link:** /projects/oracle-ecommerce-oms

### Project 2 — Student Management System
- **Description:** An OOP-based application that centralizes student records, enrollments,
  and grade management.
- **Tech stack tags:** Java, OOP, MySQL, CRUD Operations
- **One-line outcome:** Enhanced query speed and record accuracy through optimized
  database operations.
- **GitHub link:** https://github.com/tauraiPbaiwa-bit
- **Case-study link:** /projects/student-management-system

### Project card layout
- Image/mockup top
- Content bottom (title, description, tags, links)
- Hover: slight lift with drop shadow

---

## 5. CASE-STUDY PAGES

### /projects/oracle-ecommerce-oms
- **Problem:** E-commerce platforms need reliable backend systems to handle concurrent orders,
  real-time inventory updates, and secure financial transactions.
- **Constraints & tradeoffs:** Oracle-first design; prioritized data integrity over raw speed.
- **Architecture:** Entity-relationship diagram area showing Orders, Inventory, Transactions tables.
- **Implementation highlights:** PL-SQL procedures for order validation, inventory decrement,
  and transaction rollback on failure.
- **Results:** Reliable order processing with enforced referential integrity; zero data
  inconsistency errors in testing.

### /projects/student-management-system
- **Problem:** Academic institutions struggle with fragmented student data across enrollment,
  grading, and records systems.
- **Constraints & tradeoffs:** OOP design for maintainability; MySQL chosen for simplicity
  and portability.
- **Architecture:** Class diagram area showing Student, Course, Enrollment, Grade entities.
- **Implementation highlights:** Optimized CRUD queries; encapsulated business logic in
  well-defined classes.
- **Results:** Improved query response time and record accuracy for multi-table lookups.

---

## 6. EXPERIENCE TIMELINE

Vertical timeline layout.

### Industry Project Intern — Tata Consultancy Services
**Feb 2026 – May 2026 | Maharashtra, India**
- Leveraged SQL/PL-SQL to analyze retail sales data and uncover key business trends.
- Optimized database queries to streamline data extraction, enhancing accuracy and
  minimizing manual effort.
- Developed executive dashboards that translated complex datasets into actionable
  stakeholder recommendations.
- Standardized reporting procedures and documented workflows to improve operational efficiency.
- **Technologies:** SQL, PL-SQL, Oracle, Data Visualization, Agile

---

## 7. CERTIFICATIONS SECTION

Display as badge/card grid:

- **Sales Order Management in Supply Chain Management** — Tata Consultancy Services
- **Oracle Database Explorer** — Oracle

---

## 8. CONTACT SECTION

- **Headline:** "Interested in working together?"
- **Email prominently displayed:** tauraiparisbaiwa@gmail.com
- **Phone:** +91 97647 87953
- **Location:** Maharashtra, India
- **Contact form:** name, email, message fields
- **Response time expectation:** "Usually responds within 24–48 hours"
- **CTA copy:** Open to internships, collaborative projects, and entry-level opportunities
  in software development and data engineering.

---

## 9. DESIGN SPECIFICATIONS

- **Theme:** Dark theme with terminal/SQL aesthetic
  - Background: deep navy or near-black (`#0a0f1e` or similar)
  - Accent: electric blue or cyan (`#00b4d8` / `#00fff7`)
  - Text: off-white with muted secondary text
- **Typography:** Monospace font for code elements (Fira Code or JetBrains Mono);
  clean sans-serif for body (Inter or Geist)
- **Decorative elements:** Subtle SQL/code syntax highlighting blocks, grid lines,
  terminal window chrome
- **Mobile responsive:** hamburger menu on mobile, collapsible nav
- **Animations:** Subtle — typing effect on hero, fade-in on scroll, card hover lift

---

## 10. IMPLEMENTATION NOTES

### Components to create
- `Hero` — name, typing effect, CTA buttons, social links
- `About` — summary, stats, education, current role
- `SkillsGrid` — icon + label cards, grouped by category
- `ProjectGrid` — responsive grid of ProjectCard components
- `ProjectCard` — image, title, description, tags, links, hover effect
- `CaseStudyPage` — problem, architecture, results layout
- `ExperienceTimeline` — vertical timeline, role/company/dates/bullets
- `CertificationBadges` — card grid for certifications
- `ContactSection` — email display, contact form, CTA

### Data files
- `data/projects.ts` — array of project objects (title, description, tags, links, caseStudySlug)
- `data/skills.ts` — array of skill objects grouped by category
- `data/experience.ts` — array of experience objects
- `data/certifications.ts` — array of certification objects

### SEO metadata
- Title: "Taurai Paris Baiwa | Computer Science Student & Database Developer"
- Description: "Portfolio of Taurai Paris Baiwa — CS student at Vishwakarma University,
  TCS intern, Oracle & SQL developer specializing in database-driven applications."
- Keywords: database developer portfolio, Oracle SQL developer, CS student portfolio India,
  data analytics developer

### Tech stack for the portfolio itself
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (typing effect, scroll reveals)
- **Icons:** Lucide React or Devicons for tech stack icons
- **Deployment:** Vercel
- **Font:** Geist (body) + JetBrains Mono (code elements)

### Responsive breakpoints
- Mobile: < 640px — single column, hamburger nav
- Tablet: 640px–1024px — two-column project grid
- Desktop: > 1024px — three-column project grid, full nav

---

## OWNER DETAILS (for placeholder data)

```
Name:     Taurai Paris Baiwa
Email:    tauraiparisbaiwa@gmail.com
Phone:    +91 97647 87953
Location: Maharashtra, India
School:   Vishwakarma University (B.Sc. CS, Jul 2024 – Present)
Employer: Tata Consultancy Services (Intern, Feb 2026 – May 2026)
LinkedIn: https://www.linkedin.com/in/taurai-paris-baiwa/
GitHub:   https://github.com/tauraiPbaiwa-bit
Photo:    esther.jpeg (place in /public/images/esther.jpeg in the Next.js project)
```
