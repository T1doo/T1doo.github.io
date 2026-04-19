/* === 背景飘落花瓣 / 夜空小星星 ===
   白天：樱花、花瓣 🌸
   夜晚：星星、月牙 ✨
*/
(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const LIGHT_ITEMS = ['🌸', '🌸', '🌸', '🌷', '💮', '✿', '❁'];
  const DARK_ITEMS  = ['✨', '✨', '⭐', '🌟', '💫', '·'];
  const MAX_ALIVE   = 28;
  const INTERVAL    = window.innerWidth < 640 ? 1400 : 800;

  // 创建容器
  const layer = document.createElement('div');
  layer.className = 'petal-layer';
  layer.setAttribute('aria-hidden', 'true');
  document.body.prepend(layer);

  let alive = 0;

  function spawn() {
    if (document.hidden) return;
    if (alive >= MAX_ALIVE) return;

    const isDark = document.body.classList.contains('dark-mode');
    const pool = isDark ? DARK_ITEMS : LIGHT_ITEMS;

    const el = document.createElement('div');
    el.className = 'petal';
    el.textContent = pool[Math.floor(Math.random() * pool.length)];

    const left = Math.random() * 100;
    const size = 0.8 + Math.random() * 1.4;
    const duration = 8 + Math.random() * 7;
    const delay = Math.random() * 0.5;
    const drift = Math.random();

    const anim =
      drift < 0.34 ? 'petal-fall'
      : drift < 0.67 ? 'petal-fall-left'
      : 'petal-fall-right';

    el.style.left = left + 'vw';
    el.style.fontSize = size + 'rem';
    el.style.animation = `${anim} ${duration}s linear ${delay}s forwards`;

    layer.appendChild(el);
    alive++;

    el.addEventListener('animationend', () => {
      el.remove();
      alive--;
    }, { once: true });
  }

  setInterval(spawn, INTERVAL);

  // 初始撒一把，不然刚开页面太空
  for (let i = 0; i < 6; i++) setTimeout(spawn, i * 300);
})();
