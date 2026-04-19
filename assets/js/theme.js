/* === 深浅色切换 · localStorage 持久化 === */
(() => {
  const STORAGE_KEY = 't1doo-theme';
  const body = document.body;
  const btn = document.querySelector('.nav__toggle');

  function setTheme(mode) {
    if (mode === 'dark') {
      body.classList.add('dark-mode');
      if (btn) {
        btn.textContent = '☀️';
        btn.setAttribute('aria-label', '切换到浅色模式');
      }
    } else {
      body.classList.remove('dark-mode');
      if (btn) {
        btn.textContent = '🌙';
        btn.setAttribute('aria-label', '切换到深色模式');
      }
    }
  }

  // 初始：localStorage > 系统偏好
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark' || saved === 'light') {
    setTheme(saved);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }

  if (btn) {
    btn.addEventListener('click', () => {
      const next = body.classList.contains('dark-mode') ? 'light' : 'dark';
      setTheme(next);
      localStorage.setItem(STORAGE_KEY, next);
    });
  }
})();
