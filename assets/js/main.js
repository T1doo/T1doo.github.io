// === Mobile Nav Toggle ===
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });

    // Close menu when a link is clicked
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  // === Tag Filtering (Projects & Notes) ===
  document.querySelectorAll('.filter-bar').forEach(function (bar) {
    var buttons = bar.querySelectorAll('.filter-btn');
    // Determine which list to filter
    var listId = bar.id === 'project-filter' ? 'project-grid' : 'note-list';
    var list = document.getElementById(listId);
    if (!list) return;

    var items = list.children;

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        // Update active state
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var filter = btn.getAttribute('data-filter');

        Array.from(items).forEach(function (item) {
          if (filter === 'all') {
            item.style.display = '';
          } else {
            var tags = (item.getAttribute('data-tags') || '').split(',');
            item.style.display = tags.indexOf(filter) !== -1 ? '' : 'none';
          }
        });
      });
    });
  });

  // === Scroll Fade-In Animation ===
  var fadeElements = document.querySelectorAll('.fade-in');

  function checkFade() {
    fadeElements.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }

  checkFade();
  window.addEventListener('scroll', checkFade);
});
