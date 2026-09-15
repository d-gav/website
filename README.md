# Demetrios Gavalas - Portfolio Website

Minimalist personal portfolio website for Demetrios Gavalas, highlighting experience in custom silicon tapeouts, ASIC physical design flows, FPGA acceleration, and computer architecture.

**Domain:** [https://demetri.nyc](https://demetri.nyc)  
**GitHub:** [https://github.com/d-gav](https://github.com/d-gav)

---

## Features

- **Minimalist, High-Performance Design**: Clean typography, semantic HTML5, zero external dependencies, responsive on all screen sizes.
- **Dark / Light Mode**: System theme detection with toggle and `localStorage` persistence.
- **Print / PDF Optimized**: Integrated `@media print` styling for clean, executive resume/CV printing (`Ctrl + P`).
- **1-Click Copy**: Quick-copy email button with visual confirmation.
- **Built with Zola**: Fast static site generation designed for seamless deployment on Cloudflare Pages, GitHub Pages, or Vercel.

---

## Local Development & Preview

Run the Zola development server from the repository root:

```bash
zola serve
```

Then navigate to `http://127.0.0.1:1111` in your browser.

To build the static site:

```bash
zola build
```

The output will be placed in the `public/` directory.

---

## Deployment (Cloudflare Pages)

- **Framework preset**: Zola
- **Build command**: `zola build`
- **Build output directory**: `public`
- **Root directory**: `/` (repository root)