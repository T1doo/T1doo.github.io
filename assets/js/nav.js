/* === 导航 · 当前页高亮 + 移动端折叠 + 淡入观察 === */
(() => {
  // 当前页高亮
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('is-active');
    }
  });

  // 移动端汉堡菜单
  const hamburger = document.querySelector('.nav__hamburger');
  const links = document.querySelector('.nav__links');
  if (hamburger && links) {
    hamburger.addEventListener('click', () => {
      links.classList.toggle('is-open');
      hamburger.setAttribute(
        'aria-expanded',
        links.classList.contains('is-open') ? 'true' : 'false'
      );
    });
    // 点击菜单项后自动收起
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('is-open'));
    });
  }

  // 淡入观察
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

  // 年份自动填入
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
