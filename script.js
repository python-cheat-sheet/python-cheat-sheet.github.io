// ═════════════════════════════════════════════════════════════════
// Python Cheat Sheet — Main Interactive Logic
// ═════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // ── State Variables ──
  let currentLanguage = 'ru';
  let currentCategory = 'all';
  let currentQuery = '';

  // ── DOM References ──
  const prog = document.getElementById('progress');
  const backTop = document.getElementById('back-top');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileToggleText = document.getElementById('mobile-toggle-text');
  const sidebar = document.getElementById('sidebar');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');
  const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
  const sections = Array.from(document.querySelectorAll('.section'));
  const navLinks = Array.from(document.querySelectorAll('#sidebar-nav a[href^="#"]'));
  const topSearch = document.getElementById('top-search');
  const sidebarSearch = document.getElementById('sidebar-search');
  const clearBtn = document.getElementById('clear-search');
  const searchCounter = document.getElementById('search-counter');
  const noResults = document.getElementById('no-results');
  const filterTabs = Array.from(document.querySelectorAll('.filter-tab'));
  const toast = document.getElementById('toast');
  const langButtons = Array.from(document.querySelectorAll('.lang-btn'));

  // ── Toast Notification ──
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg || (window.TRANSLATIONS && window.TRANSLATIONS.ui[currentLanguage] ? window.TRANSLATIONS.ui[currentLanguage].copy.toast : 'Код скопирован!');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1600);
  }

  // ── Mobile Drawer Open / Close ──
  function openMobileSidebar() {
    if (!sidebar) return;
    sidebar.classList.add('open');
    if (sidebarBackdrop) sidebarBackdrop.classList.add('show');
    document.body.classList.add('sidebar-open');
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMobileSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove('open');
    if (sidebarBackdrop) sidebarBackdrop.classList.remove('show');
    document.body.classList.remove('sidebar-open');
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', e => {
      e.stopPropagation();
      if (sidebar && sidebar.classList.contains('open')) {
        closeMobileSidebar();
      } else {
        openMobileSidebar();
      }
    });
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', () => closeMobileSidebar());
  }

  if (sidebarCloseBtn) {
    sidebarCloseBtn.addEventListener('click', () => closeMobileSidebar());
  }

  // ── Search & Filter Logic ──
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
        sec.querySelectorAll('.entry').forEach(e => e.style.display = '');
        return;
      }

      // Query filter: check section title, category tag, or inner entries text
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
          entries.forEach(e => e.style.display = '');
        }
      } else {
        sec.style.display = 'none';
      }
    });

    const ui = (window.TRANSLATIONS && window.TRANSLATIONS.ui[currentLanguage]) ? window.TRANSLATIONS.ui[currentLanguage] : null;

    if (q) {
      if (clearBtn) clearBtn.style.display = 'block';
      if (searchCounter) {
        const foundTpl = ui ? ui.search.counterFound : 'Найдено: {n}';
        searchCounter.textContent = foundTpl.replace('{n}', visibleCount);
      }
    } else {
      if (clearBtn) clearBtn.style.display = 'none';
      if (searchCounter) {
        const totalTpl = ui ? ui.search.counterSections : '{n} разделов';
        searchCounter.textContent = totalTpl.replace('{n}', sections.length);
      }
    }

    if (noResults) {
      noResults.style.display = (visibleCount === 0) ? 'block' : 'none';
    }
  }

  function syncSearch(val) {
    currentQuery = val;
    if (topSearch && topSearch.value !== val) topSearch.value = val;
    if (sidebarSearch && sidebarSearch.value !== val) sidebarSearch.value = val;
    applyFilters();
  }

  if (topSearch) topSearch.addEventListener('input', e => syncSearch(e.target.value));
  if (sidebarSearch) sidebarSearch.addEventListener('input', e => syncSearch(e.target.value));
  if (clearBtn) clearBtn.addEventListener('click', () => syncSearch(''));

  // ── Category Tabs ──
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-cat') || 'all';
      applyFilters();
    });
  });

  // ── Language Switching Logic ──
  function setLanguage(lang) {
    if (!window.TRANSLATIONS) return;
    currentLanguage = (lang === 'en') ? 'en' : 'ru';
    const ui = window.TRANSLATIONS.ui[currentLanguage];
    if (!ui) return;

    // 1. Root and Meta
    document.documentElement.lang = currentLanguage;
    document.title = ui.pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', ui.metaDescription);

    // 2. Hero Elements
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) heroTitle.textContent = ui.heroTitle;
    const heroDesc = document.getElementById('hero-desc');
    if (heroDesc) heroDesc.textContent = ui.heroDesc;
    const badgeVer = document.getElementById('hero-badge-version');
    if (badgeVer) badgeVer.textContent = ui.heroBadges.version;
    const badgeFw = document.getElementById('hero-badge-frameworks');
    if (badgeFw) badgeFw.textContent = ui.heroBadges.frameworks;
    const badgeTool = document.getElementById('hero-badge-tooling');
    if (badgeTool) badgeTool.textContent = ui.heroBadges.tooling;
    const heroGithub = document.getElementById('hero-github-text');
    if (heroGithub) heroGithub.textContent = ui.heroBadges.github;

    // 3. Search & Categories
    if (topSearch) topSearch.placeholder = ui.search.placeholderTop;
    if (sidebarSearch) sidebarSearch.placeholder = ui.search.placeholderSidebar;
    if (clearBtn) clearBtn.title = ui.search.clearTitle;

    filterTabs.forEach(tab => {
      const cat = tab.getAttribute('data-cat');
      if (cat && ui.categories[cat]) {
        tab.textContent = ui.categories[cat];
      }
    });

    // 4. Sidebar Elements
    const subtitle = document.querySelector('.sidebar-logo .subtitle');
    if (subtitle) subtitle.textContent = ui.sidebar.subtitle;
    const statSections = document.getElementById('sidebar-stat-sections');
    if (statSections) statSections.textContent = ui.sidebar.statsSections;
    const statRecipes = document.getElementById('sidebar-stat-recipes');
    if (statRecipes) statRecipes.textContent = ui.sidebar.statsRecipes;
    const sidebarGithub = document.getElementById('sidebar-github-text');
    if (sidebarGithub) sidebarGithub.textContent = ui.sidebar.githubBtn;

    // Sidebar group titles
    const groupTitles = document.querySelectorAll('.nav-group-title');
    groupTitles.forEach((gt, idx) => {
      if (ui.sidebar.navGroups[idx]) {
        gt.textContent = ui.sidebar.navGroups[idx];
      }
    });

    // Sidebar links
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const id = href.slice(1);
      if (ui.sidebar.links[id]) {
        const iconSpan = link.querySelector('.nav-icon');
        const iconHtml = iconSpan ? iconSpan.outerHTML : '';
        link.innerHTML = iconHtml + ui.sidebar.links[id];
      }
    });

    // 5. Interactive UI Strings
    if (noResults) {
      noResults.innerHTML = `${ui.noResults.title}<br><small style="color:var(--muted);margin-top:8px;display:block;">${ui.noResults.hint}</small>`;
    }

    if (backTop) {
      backTop.title = ui.backTop;
      backTop.setAttribute('aria-label', ui.backTop);
    }

    if (mobileToggleText) {
      mobileToggleText.textContent = ui.mobile.toggleText || (currentLanguage === 'ru' ? 'Меню' : 'Menu');
    }
    if (mobileToggle) {
      mobileToggle.setAttribute('aria-label', ui.mobile.aria || (currentLanguage === 'ru' ? 'Открыть навигацию' : 'Toggle navigation'));
    }
    if (sidebarCloseBtn) {
      sidebarCloseBtn.setAttribute('aria-label', ui.mobile.closeAria || (currentLanguage === 'ru' ? 'Закрыть меню' : 'Close menu'));
    }

    document.querySelectorAll('.copy-btn').forEach(btn => {
      if (!btn.classList.contains('copied')) {
        btn.textContent = ui.copy.copy;
      }
    });

    // 6. Section Titles, Tags, and Content
    const secDict = window.TRANSLATIONS.sections[currentLanguage];
    if (secDict) {
      Object.keys(secDict).forEach(secId => {
        const secEl = document.getElementById(secId);
        if (!secEl) return;
        const sData = secDict[secId];

        // Section header
        const h2 = secEl.querySelector('h2');
        if (h2) h2.textContent = sData.title;
        const tag = secEl.querySelector('.section-category-tag');
        if (tag) tag.textContent = sData.tag;

        // Entries
        const entryEls = secEl.querySelectorAll('.entry');
        sData.entries.forEach((eData, ei) => {
          const ent = entryEls[ei];
          if (!ent) return;

          const titleEl = ent.querySelector('.entry-title');
          if (titleEl) {
            let tagHtml = '';
            const existingTag = titleEl.querySelector('.tag');
            const tagClass = existingTag ? existingTag.className : 'tag';
            if (eData.tag) {
              tagHtml = ` <span class="${tagClass}">${eData.tag}</span>`;
            }
            titleEl.innerHTML = eData.title + tagHtml;
          }

          const descEl = ent.querySelector('.desc');
          if (descEl && eData.desc) {
            descEl.innerHTML = eData.desc;
          }

          const noteEl = ent.querySelector('.note');
          if (noteEl && eData.note) {
            noteEl.innerHTML = eData.note;
          }
        });
      });
    }

    // 7. Tables
    const tblDict = window.TRANSLATIONS.tables;
    if (tblDict) {
      Object.keys(tblDict).forEach(secId => {
        const secEl = document.getElementById(secId);
        if (!secEl) return;
        const table = secEl.querySelector('table');
        if (table && tblDict[secId][currentLanguage]) {
          table.innerHTML = tblDict[secId][currentLanguage];
        }
      });
    }

    // 8. Code Comments
    const cmtDict = window.TRANSLATIONS.comments;
    if (cmtDict) {
      const map = (currentLanguage === 'en') ? cmtDict.ruToEn : cmtDict.enToRu;
      document.querySelectorAll('.code-block pre span.cmt').forEach(cmt => {
        const raw = cmt.textContent.trim();
        if (!raw.startsWith('#')) return;
        const body = raw.slice(1).trim();
        if (map[body]) {
          cmt.textContent = '# ' + map[body];
        }
      });
    }

    // 9. Update Active Switcher Buttons across all locations (Sidebar, Hero, Mobile Topbar)
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLanguage);
    });

    // 10. Persist to localStorage & URL Parameter
    try {
      localStorage.setItem('py_cheat_lang', currentLanguage);
    } catch (e) {
      // Ignore storage restrictions
    }

    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', currentLanguage);
      window.history.replaceState({}, '', url.toString());
    } catch (e) {
      // Ignore history state issues
    }

    // Refresh search counter and filtering with new language
    applyFilters();
  }

  // Language switcher button clicks (handles all buttons)
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang && targetLang !== currentLanguage) {
        setLanguage(targetLang);
      }
    });
  });

  // ── Copy buttons with toast ──
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const codeBlock = btn.closest('.code-block');
      if (!codeBlock) return;
      const pre = codeBlock.querySelector('pre');
      if (!pre) return;
      const code = pre.innerText;
      const ui = (window.TRANSLATIONS && window.TRANSLATIONS.ui[currentLanguage]) ? window.TRANSLATIONS.ui[currentLanguage] : null;

      navigator.clipboard.writeText(code).then(() => {
        const copiedText = ui ? ui.copy.copied : 'скопировано! ✓';
        const defaultText = ui ? ui.copy.copy : 'копировать';
        const toastMsg = ui ? ui.copy.toast : 'Код скопирован в буфер обмена!';

        btn.textContent = copiedText;
        btn.classList.add('copied');
        showToast(toastMsg);
        setTimeout(() => {
          btn.textContent = defaultText;
          btn.classList.remove('copied');
        }, 1600);
      }).catch(() => {
        showToast('Не удалось скопировать код');
      });
    });
  });

  // ── Progress bar & Back to Top ──
  window.addEventListener('scroll', () => {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollTotal > 0 ? (window.scrollY / scrollTotal) * 100 : 0;
    if (prog) prog.style.width = pct + '%';
    if (backTop) {
      if (window.scrollY > 350) {
        backTop.classList.add('visible');
      } else {
        backTop.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (backTop) {
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ── Sidebar active link on scroll (IntersectionObserver) ──
  const visibleSections = new Set();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        visibleSections.add(e.target);
      } else {
        visibleSections.delete(e.target);
      }
    });

    let topSection = null;
    let minTop = Infinity;
    visibleSections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 250 && rect.bottom >= 40) {
        if (rect.top < minTop) {
          minTop = rect.top;
          topSection = sec;
        }
      }
    });

    if (!topSection && visibleSections.size > 0) {
      topSection = Array.from(visibleSections)[0];
    }

    if (topSection) {
      const activeId = topSection.id;
      navLinks.forEach(a => {
        const href = a.getAttribute('href');
        const match = href === '#' + activeId;
        a.classList.toggle('active', match);
        if (match && window.innerWidth > 900 && sidebar) {
          const linkRect = a.getBoundingClientRect();
          const sidebarRect = sidebar.getBoundingClientRect();
          if (linkRect.bottom > sidebarRect.bottom - 40 || linkRect.top < sidebarRect.top + 160) {
            a.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          }
        }
      });
    }
  }, { rootMargin: '-60px 0px -40% 0px', threshold: [0, 0.1, 0.3] });

  sections.forEach(s => observer.observe(s));

  // ── Sidebar link click handling ──
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const targetId = href.slice(1);
      const targetSec = document.getElementById(targetId);

      if (targetSec && targetSec.style.display === 'none') {
        // If target section is hidden by category filter or search, reset to 'all'
        currentCategory = 'all';
        filterTabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-cat') === 'all'));
        if (currentQuery) {
          syncSearch('');
        } else {
          applyFilters();
        }
      }

      if (window.innerWidth <= 900) {
        closeMobileSidebar();
      }
    });
  });

  // ── Keyboard Shortcuts ──
  window.addEventListener('keydown', e => {
    // Focus search on '/' or 'Ctrl+K' / 'Cmd+K'
    const isSearchFocused = document.activeElement === topSearch || document.activeElement === sidebarSearch;
    if ((e.key === '/' && !isSearchFocused) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
      e.preventDefault();
      if (topSearch) {
        topSearch.focus();
        topSearch.select();
      }
    }
    // Escape clears search or closes drawer
    if (e.key === 'Escape') {
      if (sidebar && sidebar.classList.contains('open')) {
        closeMobileSidebar();
      } else if (currentQuery) {
        syncSearch('');
      } else {
        if (topSearch) topSearch.blur();
        if (sidebarSearch) sidebarSearch.blur();
      }
    }
  });

  // ── Initialization: Language Preference ──
  function getInitialLanguage() {
    try {
      const urlParam = new URLSearchParams(window.location.search).get('lang');
      if (urlParam === 'en' || urlParam === 'ru') return urlParam;
    } catch (e) {}

    try {
      const saved = localStorage.getItem('py_cheat_lang');
      if (saved === 'en' || saved === 'ru') return saved;
    } catch (e) {}

    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.startsWith('ru') || browserLang.startsWith('be') || browserLang.startsWith('uk') || browserLang.startsWith('kk')) {
      return 'ru';
    }
    return 'en';
  }

  const initialLang = getInitialLanguage();
  setLanguage(initialLang);
});
