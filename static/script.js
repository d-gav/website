// Demetrios Gavalas — Minimal Scripts

(function () {
  'use strict';

  // Subtle theme toggle
  const toggle = document.getElementById('theme-toggle');

  function getTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
    if (toggle) {
      toggle.textContent = t === 'dark' ? '[light]' : '[dark]';
    }
  }

  const initial = getTheme();
  setTheme(initial);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || 'light';
      setTheme(cur === 'dark' ? 'light' : 'dark');
    });
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Quiet email copy
  const copyBtn = document.getElementById('copy-email');
  const copyNotice = document.getElementById('copy-notice');

  if (copyBtn && copyNotice) {
    copyBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText('deg273@cornell.edu');
        copyNotice.classList.add('active');
        setTimeout(() => copyNotice.classList.remove('active'), 1500);
      } catch (_) {
        window.location.href = 'mailto:deg273@cornell.edu';
      }
    });
  }
})();
