/* ==========================================================================
   Abhijith Sharma — site scripts. No dependencies.
   Theme + pen, typewriter, clock, entrance animation, clipboard,
   and rendering of publications / changelog from assets/js/data.js.
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var D = window.SITE_DATA || { pubs: [], news: [], me: 'Abhijith Sharma' };

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  function $(sel, el) { return (el || document).querySelector(sel); }
  function $$(sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ---------- Theme ---------- */
  /* `persist` is true only for an explicit click, so the site keeps following
     the OS setting until the visitor chooses a theme themselves. */
  function setTheme(t, persist) {
    root.setAttribute('data-theme', t);
    if (persist) store.set('theme', t);
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'dark' ? '#121210' : '#F3F0E8');
    $$('[data-theme-toggle]').forEach(function (b) {
      b.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      b.setAttribute('aria-pressed', String(t === 'dark'));
    });
  }
  $$('[data-theme-toggle]').forEach(function (b) {
    b.addEventListener('click', function () {
      setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
    });
  });
  setTheme(root.getAttribute('data-theme') || 'light', false);
  try {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!store.get('theme')) setTheme(e.matches ? 'dark' : 'light', false);
    });
  } catch (e) {}

  /* ---------- Pen (accent colour) ---------- */
  function setPen(p, persist) {
    root.setAttribute('data-pen', p);
    if (persist) store.set('pen', p);
    $$('[data-pen-pick]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-pen-pick') === p));
    });
  }
  $$('[data-pen-pick]').forEach(function (b) {
    b.addEventListener('click', function () { setPen(b.getAttribute('data-pen-pick'), true); });
  });
  setPen(root.getAttribute('data-pen') || 'green', false);

  /* ---------- Typewriter ---------- */
  var typeEl = $('[data-typewriter]');
  if (typeEl) {
    var phrases = [];
    try { phrases = JSON.parse(typeEl.getAttribute('data-typewriter')); } catch (e) { phrases = [typeEl.textContent]; }
    if (reduceMotion || phrases.length < 2) {
      typeEl.textContent = phrases[0] || typeEl.textContent;
    } else {
      var pi = 0, ci = phrases[0].length, deleting = false;
      typeEl.textContent = phrases[0];
      var tick = function () {
        var phrase = phrases[pi];
        ci += deleting ? -1 : 1;
        typeEl.textContent = phrase.slice(0, ci);
        var delay = deleting ? 26 : 44 + Math.random() * 46;
        if (!deleting && ci >= phrase.length) { delay = 2400; deleting = true; }
        else if (deleting && ci <= 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 380; }
        setTimeout(tick, delay);
      };
      setTimeout(tick, 2600);
    }
  }

  /* ---------- Clock (Abu Dhabi vs. visitor) ---------- */
  var HOME_TZ = 'Asia/Dubai';
  var homeTime = $('#homeTime'), visitorTime = $('#visitorTime'), homeTz = $('#homeTz'), offsetLabel = $('#offsetLabel');
  if (homeTime && window.Intl && Intl.DateTimeFormat) {
    var fmtTime = function (date, tz) {
      try { return new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit', timeZone: tz }).format(date); }
      catch (e) { return '--:--'; }
    };
    var tzOffsetMinutes = function (tz, date) {
      var parts = new Intl.DateTimeFormat('en-US', {
        timeZone: tz, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
      }).formatToParts(date);
      var o = {};
      parts.forEach(function (p) { o[p.type] = p.value; });
      var asUTC = Date.UTC(+o.year, +o.month - 1, +o.day, +o.hour % 24, +o.minute, +o.second);
      return Math.round((asUTC - date.getTime()) / 60000);
    };
    var updateClock = function () {
      var now = new Date();
      var vtz = 'UTC';
      try { vtz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'; } catch (e) {}
      homeTime.textContent = fmtTime(now, HOME_TZ);
      if (visitorTime) visitorTime.textContent = fmtTime(now, vtz);
      try {
        var diff = tzOffsetMinutes(HOME_TZ, now) - tzOffsetMinutes(vtz, now);
        var abs = Math.abs(diff), h = Math.floor(abs / 60), m = abs % 60;
        var span = h + 'h' + (m ? ' ' + m + 'm' : '');
        if (homeTz) homeTz.textContent = 'GST · UTC+4';
        if (offsetLabel) offsetLabel.textContent = diff === 0 ? 'same time as you' : span + (diff > 0 ? ' ahead of you' : ' behind you');
      } catch (e) {}
    };
    updateClock();
    setInterval(updateClock, 30000);
  }

  /* ---------- Avatar: idle sway, cursor tilt, spin on load and on click ---------- */
  var av3d = $('#avatar3d'), avWrap = $('#avatarWrap');
  if (av3d && avWrap && !reduceMotion && window.requestAnimationFrame) {
    var introCard = av3d.closest('.card') || avWrap;
    var tx = 0, ty = 0, cx = 0, cy = 0, spinStart = -1, spinDir = 1, running = true;
    var t0 = performance.now();
    introCard.addEventListener('pointermove', function (e) {
      var r = avWrap.getBoundingClientRect();
      tx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width * 0.9)));
      ty = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height * 0.9)));
    });
    introCard.addEventListener('pointerleave', function () { tx = 0; ty = 0; });
    var spin = function (dir) { if (spinStart >= 0) return; spinDir = dir || 1; spinStart = performance.now(); };
    avWrap.addEventListener('click', function () { spin(1); });
    var frame = function (now) {
      if (!running) return;
      var t = (now - t0) / 1000;
      cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
      var rotY = Math.sin(t * 0.8) * 9 + cx * 30;
      var rotX = Math.sin(t * 0.6 + 1.3) * 3 - cy * 14;
      var extra = 0;
      if (spinStart >= 0) {
        var p = Math.min(1, (now - spinStart) / 1400);
        extra = (1 - Math.pow(1 - p, 3)) * 360 * spinDir;
        if (p >= 1) { spinStart = -1; extra = 0; }
      }
      av3d.style.transform = 'rotateX(' + rotX.toFixed(2) + 'deg) rotateY(' + (rotY + extra).toFixed(2) + 'deg)';
      requestAnimationFrame(frame);
    };
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { running = false; } else if (!running) { running = true; requestAnimationFrame(frame); }
    });
    requestAnimationFrame(frame);
    setTimeout(function () { spin(1); }, 900);
  }

  /* ---------- Cursor spotlight on cards ---------- */
  document.addEventListener('pointermove', function (e) {
    var card = e.target && e.target.closest ? e.target.closest('.card') : null;
    if (!card) return;
    var r = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
    card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
  }, { passive: true });

  /* ---------- Copy to clipboard ---------- */
  function copyText(text, onDone) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onDone, function () {});
    } else {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.left = '-9999px';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); onDone(); } catch (e) {}
      document.body.removeChild(ta);
    }
  }
  $$('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      copyText(btn.getAttribute('data-copy'), function () {
        btn.classList.add('copied');
        setTimeout(function () { btn.classList.remove('copied'); }, 1500);
      });
    });
  });

  /* ---------- Helpers for publication rendering ---------- */
  var LINK_LABELS = { arxiv: 'arXiv', venue: 'Venue', doi: 'Publisher', pdf: 'PDF', code: 'Code', page: 'Project page', data: 'Dataset', thesis: 'Thesis' };
  var LINK_ORDER = ['arxiv', 'doi', 'venue', 'pdf', 'page', 'code', 'data', 'thesis'];
  function primaryLink(p) {
    var L = p.links || {};
    for (var i = 0; i < LINK_ORDER.length; i++) if (L[LINK_ORDER[i]]) return L[LINK_ORDER[i]];
    return 'publications.html#' + p.id;
  }
  function authorName(a) { return a.replace(/\*+$/, ''); }
  function authorStar(a) { return /\*$/.test(a) ? '<sup>*</sup>' : ''; }
  function authorsFull(list) {
    return list.map(function (a) {
      var n = authorName(a), s = authorStar(a);
      return n === D.me ? '<strong>' + esc(n) + s + '</strong>' : esc(n) + s;
    }).join(', ');
  }
  function authorsShort(list) {
    return list.map(function (a) {
      var n = authorName(a), s = authorStar(a), parts = n.split(/\s+/);
      var short = parts.length > 1 ? parts[0].charAt(0) + '. ' + parts[parts.length - 1] : n;
      return n === D.me ? '<strong>' + esc(short) + s + '</strong>' : esc(short) + s;
    }).join(', ');
  }
  function monthLabel(ym) {
    var m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var parts = String(ym).split('-');
    return parts.length > 1 ? m[(+parts[1]) - 1] + ' ' + parts[0] : ym;
  }

  /* ---------- Home: selected work ---------- */
  var selRoot = $('#selected-pubs');
  if (selRoot && D.pubs) {
    var selected = D.pubs.filter(function (p) { return p.selected; });
    selRoot.innerHTML = selected.map(function (p) {
      return '<li>' +
        '<a class="t" href="' + esc(primaryLink(p)) + '" target="_blank" rel="noopener">' + esc(p.title) + '</a>' +
        '<div class="meta"><span class="badge">' + esc(p.venue) + '</span><span>' + authorsShort(p.authors) + '</span></div>' +
        (p.tldr ? '<p class="tldr">' + esc(p.tldr) + '</p>' : '') +
        '</li>';
    }).join('');
  }

  /* ---------- Home: changelog ---------- */
  var logRoot = $('#changelog');
  if (logRoot && D.news) {
    var limit = parseInt(logRoot.getAttribute('data-limit') || '0', 10) || D.news.length;
    logRoot.innerHTML = D.news.slice(0, limit).map(function (n) {
      return '<li><time datetime="' + esc(n.date) + '">' + esc(monthLabel(n.date)) + '</time><span>' + n.html + '</span></li>';
    }).join('');
  }

  /* ---------- Publications page ---------- */
  var pubsRoot = $('#pubs-root');
  if (pubsRoot && D.pubs) {
    var years = [];
    D.pubs.forEach(function (p) { if (years.indexOf(p.year) < 0) years.push(p.year); });
    years.sort(function (a, b) { return b - a; });

    pubsRoot.innerHTML = years.map(function (y) {
      var items = D.pubs.filter(function (p) { return p.year === y; });
      return '<section class="year-group" data-year="' + y + '"><h2>' + y + '</h2><div class="list">' +
        items.map(function (p) {
          var L = p.links || {};
          var links = LINK_ORDER.filter(function (k) { return L[k]; }).map(function (k) {
            return '<a href="' + esc(L[k]) + '" target="_blank" rel="noopener">' + LINK_LABELS[k] + '</a>';
          }).join('');
          var bib = p.bibtex ? '<button type="button" class="bib-toggle" aria-expanded="false" aria-controls="bib-' + esc(p.id) + '">BibTeX</button>' : '';
          return '<article class="card pub" id="' + esc(p.id) + '" data-type="' + esc(p.type) + '">' +
            '<h3><a href="' + esc(primaryLink(p)) + '" target="_blank" rel="noopener">' + esc(p.title) + '</a></h3>' +
            '<p class="authors">' + authorsFull(p.authors) + '</p>' +
            '<p class="venue"><span class="badge">' + esc(p.venue) + '</span><span>' + esc(p.venueLong || '') + '</span></p>' +
            (p.note ? '<p class="note">' + esc(p.note) + '</p>' : '') +
            (p.tldr ? '<p class="tldr">' + esc(p.tldr) + '</p>' : '') +
            '<div class="pub-links">' + links + bib + '</div>' +
            (p.bibtex ? '<pre class="bib" id="bib-' + esc(p.id) + '" hidden>' + esc(p.bibtex) + '<button type="button" class="copybtn" data-bib="' + esc(p.id) + '">copy</button></pre>' : '') +
            '</article>';
        }).join('') + '</div></section>';
    }).join('');

    /* BibTeX toggles + copy */
    $$('.bib-toggle', pubsRoot).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var pre = document.getElementById(btn.getAttribute('aria-controls'));
        var open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
        if (pre) pre.hidden = open;
      });
    });
    $$('.copybtn', pubsRoot).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var p = D.pubs.filter(function (x) { return x.id === btn.getAttribute('data-bib'); })[0];
        if (!p) return;
        copyText(p.bibtex, function () {
          btn.textContent = 'copied ✓';
          setTimeout(function () { btn.textContent = 'copy'; }, 1500);
        });
      });
    });

    /* Filters */
    var filterBtns = $$('[data-filter]');
    var countEl = $('#pub-count');
    function applyFilter(type) {
      var shown = 0;
      $$('.pub', pubsRoot).forEach(function (el) {
        var show = type === 'all' || el.getAttribute('data-type') === type;
        el.hidden = !show;
        if (show) shown++;
      });
      $$('.year-group', pubsRoot).forEach(function (g) {
        g.hidden = $$('.pub', g).every(function (el) { return el.hidden; });
      });
      filterBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-filter') === type)); });
      if (countEl) countEl.textContent = shown + (shown === 1 ? ' entry' : ' entries');
    }
    filterBtns.forEach(function (b) {
      b.addEventListener('click', function () { applyFilter(b.getAttribute('data-filter')); });
    });
    applyFilter('all');

    /* Deep link: publications.html#id opens that entry's BibTeX */
    if (location.hash) {
      var target = document.getElementById(location.hash.slice(1));
      if (target && target.classList.contains('pub')) {
        target.style.borderColor = 'var(--accent)';
        setTimeout(function () { target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' }); }, 50);
      }
    }
  }

  /* ---------- Reveal cards as they enter the viewport ---------- */
  var cards = $$('.card');
  if (cards.length && !reduceMotion && Element.prototype.animate && 'IntersectionObserver' in window) {
    cards.forEach(function (c) { c.classList.add('is-hidden'); });
    var io = new IntersectionObserver(function (entries) {
      entries.filter(function (en) { return en.isIntersecting; }).forEach(function (en, i) {
        var c = en.target; io.unobserve(c); c.classList.remove('is-hidden');
        c.animate([{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 520, delay: i * 55, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' });
      });
    }, { threshold: 0.08 });
    cards.forEach(function (c) { io.observe(c); });
    /* Safety net: never leave a card invisible (e.g. observer never fires). */
    setTimeout(function () { cards.forEach(function (c) { c.classList.remove('is-hidden'); }); }, 2500);
  }

  /* ---------- Footer year ---------- */
  $$('[data-year]').forEach(function (el) { if (el.tagName !== 'SECTION') el.textContent = String(new Date().getFullYear()); });
})();
