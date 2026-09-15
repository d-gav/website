# Demetrios Gavalas - Portfolio Website

Minimalist personal portfolio website for Demetrios Gavalas, highlighting experience in custom silicon tapeouts, ASIC physical design flows, FPGA acceleration, and computer architecture.

**Domain:** [https://demetri.nyc](https://demetri.nyc)  
**GitHub:** [https://github.com/d-gav](https://github.com/d-gav)

---

## Features

- **Minimalist, High-Performance Design**: Clean typography semantic HTML5, zero external dependencies, responsive on all screen sizes.
- **Dark / Light Mode**: System theme detection with toggle and `localStorage` persistence.
- **Print / PDF Optimized**: Integrated `@media print` styling for clean, executive resume/CV printing via the print button (`Ctrl + P`).
- **1-Click Copy**: Quick-copy email button with visual confirmation.
- **Dual Deployment Ready**:
  - Direct static files at root (`index.html`, `style.css`, `script.js`) for instant GitHub Pages / static hosting without build steps.
  - Zola SSG setup inside [`zola/`](zola/) with templates and assets pre-configured.

---

## Local Development & Preview

### Option 1: Direct Static Preview (No installation required)
Simply open [`index.html`](index.html) directly in any web browser, or run a local Python server:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000`.

### Option 2: Using Zola
If you have [Zola](https://www.getzola.org/) installed:
```bash
cd zola
zola serve
```
Then open `http://127.0.0.1:1111` in your browser.