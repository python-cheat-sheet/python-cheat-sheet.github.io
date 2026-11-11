// ── Toast Notification ──
  function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1600);
  }

  // ── Copy buttons with toast ──
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const codeBlock = btn.closest('.code-block');
      const code = codeBlock.querySelector('pre').innerText;
      navigator.clipboard.writeText(code).then(() => {
        btn.textContent = 'скопировано! ✓';
        btn.classList.add('copied');
        showToast('Код скопирован в буфер обмена!');
        setTimeout(() => {
          btn.textContent = 'копировать';
          btn.classList.remove('copied');
        }, 1600);
      });
    });
  });

  // ── Progress bar & Back to Top ──
  const prog = document.getElementById('progress');
  const backTop = document.getElementById('back-top');
  window.addEventListener('scroll', () => {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollTotal > 0 ? (window.scrollY / scrollTotal) * 100 : 0;
    prog.style.width = pct + '%';
    if (window.scrollY > 350) {
      backTop.classList.add('visible');
    } else {
      backTop.classList.remove('visible');
    }
  });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ── Sidebar active link on scroll (IntersectionObserver) ──
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('#sidebar-nav a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navLinks.forEach(a => {
          const match = a.getAttribute('href') === '#' + id;
          a.classList.toggle('active', match);
          if (match && window.innerWidth > 900) {
            // Keep active item in sidebar view if needed
            const sidebar = document.getElementById('sidebar');
            const linkRect = a.getBoundingClientRect();
            const sidebarRect = sidebar.getBoundingClientRect();
            if (linkRect.bottom > sidebarRect.bottom - 40 || linkRect.top < sidebarRect.top + 120) {
              a.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
          }
        });
      }
    });
  }, { threshold: 0.15 });
  sections.forEach(s => observer.observe(s));

  // ── Mobile drawer ──
  const mobileToggle = document.getElementById('mobile-toggle');
  const sidebar = document.getElementById('sidebar');
  mobileToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    mobileToggle.textContent = sidebar.classList.contains('open') ? '✕ Меню' : '☰ Меню';
  });
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        sidebar.classList.remove('open');
        mobileToggle.textContent = '☰ Меню';
      }
    });
  });

  // ── Search & Filter Logic ──
  const topSearch = document.getElementById('top-search');
  const sidebarSearch = document.getElementById('sidebar-search');
  const clearBtn = document.getElementById('clear-search');
  const searchCounter = document.getElementById('search-counter');
  const noResults = document.getElementById('no-results');
  const filterTabs = document.querySelectorAll('.filter-tab');

  let currentCategory = 'all';
  let currentQuery = '';

  function applyFilters() {
    let visibleCount = 0;
    const q = currentQuery.toLowerCase().trim();

    sections.forEach(sec => {
      const secCat = sec.getAttribute('data-category') || '';
      const catMatches = (currentCategory === 'all') || (secCat === currentCategory);

      if (!catMatches) {
        sec.style.display = 'none';
        return;
      }

      if (!q) {
        sec.style.display = '';
        visibleCount++;
        // Reset entries display
        sec.querySelectorAll('.entry').forEach(e => e.style.display = '');
        return;
      }

      // Query filter: check section title or inner entries
      const secTitle = (sec.querySelector('h2') ? sec.querySelector('h2').innerText : '').toLowerCase();
      const entries = sec.querySelectorAll('.entry');
      let matchingEntriesInSec = 0;

      entries.forEach(ent => {
        const entText = ent.innerText.toLowerCase();
        if (entText.includes(q)) {
          ent.style.display = '';
          matchingEntriesInSec++;
        } else {
          ent.style.display = 'none';
        }
      });

      if (secTitle.includes(q) || matchingEntriesInSec > 0) {
        sec.style.display = '';
        visibleCount++;
        if (secTitle.includes(q) && matchingEntriesInSec === 0) {
          // If title matches, show all entries
          entries.forEach(e => e.style.display = '');
        }
      } else {
        sec.style.display = 'none';
      }
    });

    if (q) {
      clearBtn.style.display = 'block';
      searchCounter.textContent = `Найдено: ${visibleCount}`;
    } else {
      clearBtn.style.display = 'none';
      searchCounter.textContent = `${sections.length} разделов`;
    }

    noResults.style.display = (visibleCount === 0) ? 'block' : 'none';
  }

  function syncSearch(val) {
    currentQuery = val;
    if (topSearch.value !== val) topSearch.value = val;
    if (sidebarSearch.value !== val) sidebarSearch.value = val;
    applyFilters();
  }

  topSearch.addEventListener('input', e => syncSearch(e.target.value));
  sidebarSearch.addEventListener('input', e => syncSearch(e.target.value));
  clearBtn.addEventListener('click', () => syncSearch(''));

  // ── Category Tabs ──
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-cat');
      applyFilters();
    });
  });

  // ── Keyboard Shortcuts ──
  window.addEventListener('keydown', e => {
    // Focus search on '/' or 'Ctrl+K'
    if ((e.key === '/' && document.activeElement !== topSearch && document.activeElement !== sidebarSearch) ||
        (e.ctrlKey && e.key.toLowerCase() === 'k')) {
      e.preventDefault();
      topSearch.focus();
      topSearch.select();
    }
    // Escape clears search
    if (e.key === 'Escape') {
      if (currentQuery) {
        syncSearch('');
      } else {
        topSearch.blur();
        sidebarSearch.blur();
      }
    }
  });
