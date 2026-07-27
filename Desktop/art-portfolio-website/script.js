/* ============================================
   ARUZHAN NUGMANOVA — Visual Art Portfolio
   javascript
   ============================================ */


/* =====  YOUR WORKS  =====

   Each work now supports MULTIPLE IMAGES via an `images` array.
   Right arrow navigates through images of the current work;
   when you reach the last one, it moves to the next work.

   Fields:
     - title, year, medium, category (required)
     - images: array of image paths (e.g. ["images/name-1.png", "images/name-2.png"])
       If no images, the placeholder card is shown.
     - badge: optional small label
     - gold: true → uses the special gold badge color
*/
const works = [
  // ========== 2026 MASSACHUSETTS SCHOLASTIC ==========
  {
    title:    "My Heritage",
    year:     "2025",
    medium:   "Acrylic on canvas",
    category: "painting",
    badge:    "Gold Key · American Visions Nominee · Persky Award",
    gold:     true,
    images:   ["images/my-heritage.jpg"]
  },
  {
    title:    "Broccoli",
    year:     "2025",
    medium:   "Digital illustration",
    category: "design",
    badge:    "Gold Key, Scholastic (Graphic Design)",
    gold:     true,
    images:   ["images/broccoli.jpg"]
  },
  {
    title:    "Bird Ocarina",
    year:     "2025",
    medium:   "Ceramics",
    category: "sculpture",
    badge:    "Gold Key, Scholastic (Ceramics & Glass)",
    gold:     true,
    images:   ["images/bird-ocarina.jpg"]
  },
  {
    title:    "I cry I bloom",
    year:     "2025",
    medium:   "Oil on woodboard, watercolor on paper",
    category: "painting",
    badge:    "Silver Key, Scholastic (Painting)",
    images:   ["images/i-cry-i-bloom.jpg"]
  },
  {
    title:    "Constellations",
    year:     "2025",
    medium:   "Ceramics",
    category: "sculpture",
    badge:    "Silver Key, Scholastic (Ceramics & Glass)",
    images:   ["images/constellations.jpg"]
  },
  {
    title:    "Khan Shatyr Model",
    year:     "2025",
    medium:   "Architectural model",
    category: "3d",
    badge:    "Silver Key, Scholastic (Architecture & Industrial Design)",
    images:   ["images/khan-shatyr-model.jpg"]
  },
  {
    title:    "Stars and Bones",
    year:     "2025",
    medium:   "Ceramics, wire",
    category: "sculpture",
    badge:    "Honorable Mention, Scholastic (Jewelry)",
    images:   ["images/stars-and-bones.jpg"]
  },
  {
    title:    "The Time We Met",
    year:     "2025",
    medium:   "Ceramics, rope, wire, branches",
    category: "sculpture",
    badge:    "Honorable Mention, Scholastic (Conceptual, Installation & Participatory Art)",
    images:   ["images/the-time-we-met.jpg"]
  },

  // ========== 2025 MICHIGAN SCHOLASTIC ==========
  {
    title:    "Follow Your Dreams",
    year:     "2024",
    medium:   "Digital art",
    category: "3d",
    badge:    "Silver Key, Scholastic (Digital Art)",
    images:   ["images/follow-your-dreams.jpg"]
  },
  {
    title:    "Kazakh Steppe",
    year:     "2024",
    medium:   "Acrylic on canvas",
    category: "painting",
    badge:    "Silver Key, Scholastic (Painting)",
    images:   ["images/kazakh-steppe.jpg"]
  },
  {
    title:    "Korpe",
    year:     "2024",
    medium:   "Mixed media",
    category: "painting",
    badge:    "Honorable Mention, Scholastic (Mixed Media)",
    images:   ["images/korpe.jpg"]
  },
  {
    title:    "Creative Writing House",
    year:     "2024",
    medium:   "Acrylic on canvas",
    category: "painting",
    badge:    "Honorable Mention, Scholastic (Painting)",
    images:   ["images/creative-writing-house.jpg"]
  },
  {
    title:    "Tree House",
    year:     "2024",
    medium:   "Architectural model",
    category: "3d",
    badge:    "Honorable Mention, Scholastic (Architecture & Industrial Design)",
    images:   ["images/tree-house.jpg"]
  },

  // ========== OTHER WORKS ==========
  {
    title:    "Catch the Star",
    year:     "2024",
    medium:   "Acrylic on canvas",
    category: "painting",
    badge:    "Sold at Student Jury Exhibition",
    images:   ["images/catch-the-star.jpg"]
  },
  {
    title:    "Uide (At Home)",
    year:     "2025",
    medium:   "Digital art in Photoshop",
    category: "painting",
    images:   ["images/uide.jpg"]
  },
  {
    title:    "Umai Ana",
    year:     "2025",
    medium:   "Acrylic on canvas",
    category: "painting",
    images:   ["images/umai-ana.jpg"]
  },
  {
    title:    "Hometown Sunsets",
    year:     "2025",
    medium:   "Watercolor on paper",
    category: "painting",
    images:   ["images/hometown-sunsets.jpg"]
  },
  {
    title:    "Kazakh Earrings",
    year:     "2024",
    medium:   "3D model in Blender",
    category: "3d",
    images:   ["images/kazakh-earrings.jpg"]
  },
  {
    title:    "Light the Way Ahead",
    year:     "2026",
    medium:   "Sculpture, collaboration with Brandon Zhang",
    category: "sculpture",
    badge:    "Claire Skinner Memorial Winner · Permanent Installation at Interlochen",
    gold:     true,
    images:   ["images/light-the-way-ahead.jpg"]
  },
  {
    title:    "Cups and Mugs",
    year:     "2025",
    medium:   "Pottery, ceramics",
    category: "sculpture",
    images:   ["images/cups-and-mugs.jpg"]
  },
  {
    title:    "Signature",
    year:     "2024",
    medium:   "Digital illustration in Adobe Illustrator",
    category: "design",
    images:   ["images/signature.jpg"]
  }
];


/* =====  TWINKLING BACKGROUND STARS (intro)  ===== */
function makeStars() {
  const bg = document.getElementById('starsBg');
  if (!bg) return;
  const STAR    = "M10 1 L12.4 7.6 L19.5 8 L13.8 12.2 L15.8 19 L10 15 L4.2 19 L6.2 12.2 L0.5 8 L7.6 7.6 Z";
  const SPARKLE = "M10 0 L11.2 8.8 L20 10 L11.2 11.2 L10 20 L8.8 11.2 L0 10 L8.8 8.8 Z";
  for (let i = 0; i < 55; i++) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 20 20");
    svg.classList.add("bg-star");
    if (Math.random() > 0.7) svg.classList.add("bright");
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("d", Math.random() > 0.5 ? STAR : SPARKLE);
    svg.appendChild(p);
    const size = 8 + Math.random() * 26;
    svg.style.width = svg.style.height = size + 'px';
    svg.style.left = (Math.random() * 100) + '%';
    svg.style.top  = (Math.random() * 100) + '%';
    svg.style.animationDelay    = (Math.random() * 4) + 's';
    svg.style.animationDuration = (2.8 + Math.random() * 3) + 's';
    bg.appendChild(svg);
  }
}


/* =====  INTRO → MAIN TRANSITION  ===== */
function endIntro() {
  document.body.classList.remove('intro-active');
  document.getElementById('intro').classList.add('gone');
  document.getElementById('main').classList.add('show');
}


/* =====  GALLERY RENDERING  =====
   Each work now shows its first image (if any) as the thumbnail.
   Clicking opens the lightbox at that work's first image. */

// A list of visible works after filtering — needed for the lightbox
// so we can navigate work-to-work in the same order the user sees them.
let visibleWorks = [];

function renderGallery(filter = 'all') {
  const grid = document.getElementById('grid');
  visibleWorks = filter === 'all'
    ? works
    : works.filter(w => w.category === filter);

  grid.innerHTML = visibleWorks.map((w, idx) => {
    const hasImages = w.images && w.images.length > 0;
    return `
      <article class="work" data-index="${idx}">
        <div class="frame">
          ${hasImages
            ? `<img src="${w.images[0]}" alt="${w.title}" loading="lazy">`
            : `<span class="placeholder">${w.title}</span>`}
        </div>
        <div class="meta-line">
          <span class="title">${w.title}</span>
          <span class="year">${w.year}</span>
        </div>
        <div class="medium">${w.medium}</div>
        ${w.badge ? `<span class="badge ${w.gold ? 'gold' : ''}">${w.badge}</span>` : ''}
      </article>
    `;
  }).join('');

  document.getElementById('count').textContent =
    `${visibleWorks.length} work${visibleWorks.length === 1 ? '' : 's'}`;

  // Wire click handlers on all work cards
  document.querySelectorAll('.work').forEach(el => {
    el.addEventListener('click', () => {
      const workIdx = parseInt(el.dataset.index, 10);
      openLightbox(workIdx, 0);
    });
  });
}


/* =====  LIGHTBOX  =====

   State:
     lbWorkIdx   — index in visibleWorks
     lbImageIdx  — which image of that work we're on

   Navigation rules:
     - Next: advance to next image of current work.
             If we're already on the last image, jump to work[+1] image 0.
     - Prev: back to previous image of current work.
             If we're on image 0, jump to work[-1]'s LAST image.
     - Wrap-around: after the last work's last image, we don't wrap
       (feels more natural — hitting the end reveals no more arrows visually).
       Same for going before the first work's first image.
*/

let lbWorkIdx  = 0;
let lbImageIdx = 0;

const lb          = document.getElementById('lightbox');
const lbImage     = document.getElementById('lbImage');
const lbPlaceholder = document.getElementById('lbPlaceholder');
const lbTitle     = document.getElementById('lbTitle');
const lbYear      = document.getElementById('lbYear');
const lbMedium    = document.getElementById('lbMedium');
const lbBadge     = document.getElementById('lbBadge');
const lbDots      = document.getElementById('lbDots');
const lbClose     = document.getElementById('lbClose');
const lbPrev      = document.getElementById('lbPrev');
const lbNext      = document.getElementById('lbNext');

function openLightbox(workIdx, imageIdx) {
  lbWorkIdx  = workIdx;
  lbImageIdx = imageIdx;
  updateLightbox();
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lb-open');
}

function closeLightbox() {
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lb-open');
}

function updateLightbox() {
  const work = visibleWorks[lbWorkIdx];
  if (!work) return;

  // Text meta
  lbTitle.textContent  = work.title;
  lbYear.textContent   = work.year;
  lbMedium.textContent = work.medium;

  if (work.badge) {
    lbBadge.textContent = work.badge;
    lbBadge.className = 'lb-badge show' + (work.gold ? ' gold' : '');
  } else {
    lbBadge.className = 'lb-badge';
  }

  // Image / placeholder
  const hasImages = work.images && work.images.length > 0;
  if (hasImages) {
    lbImage.style.display = 'block';
    lbPlaceholder.classList.remove('show');
    lbImage.classList.add('loading');
    lbImage.src = work.images[lbImageIdx];
    lbImage.alt = work.title;
    lbImage.onload = () => lbImage.classList.remove('loading');
  } else {
    lbImage.style.display = 'none';
    lbPlaceholder.classList.add('show');
    lbPlaceholder.textContent = work.title;
  }

  // Dots (one per image of this work)
  if (hasImages && work.images.length > 1) {
    lbDots.innerHTML = work.images.map((_, i) =>
      `<span class="lb-dot ${i === lbImageIdx ? 'active' : ''}"></span>`
    ).join('');
  } else {
    lbDots.innerHTML = '';
  }

  // Show/hide nav arrows at the very start/end of the entire gallery
  const isFirstWork = lbWorkIdx === 0;
  const isLastWork  = lbWorkIdx === visibleWorks.length - 1;
  const isFirstImage = lbImageIdx === 0;
  const isLastImage  = !hasImages || lbImageIdx === work.images.length - 1;

  lbPrev.style.display = (isFirstWork && isFirstImage) ? 'none' : 'flex';
  lbNext.style.display = (isLastWork && isLastImage)   ? 'none' : 'flex';
}

function lbNextClick() {
  const work = visibleWorks[lbWorkIdx];
  const hasImages = work.images && work.images.length > 0;

  if (hasImages && lbImageIdx < work.images.length - 1) {
    // Next image of the same work
    lbImageIdx++;
  } else if (lbWorkIdx < visibleWorks.length - 1) {
    // Jump to next work, first image
    lbWorkIdx++;
    lbImageIdx = 0;
  }
  updateLightbox();
}

function lbPrevClick() {
  if (lbImageIdx > 0) {
    // Previous image of the same work
    lbImageIdx--;
  } else if (lbWorkIdx > 0) {
    // Jump to previous work, LAST image of that work
    lbWorkIdx--;
    const prevWork = visibleWorks[lbWorkIdx];
    lbImageIdx = (prevWork.images && prevWork.images.length > 0)
      ? prevWork.images.length - 1
      : 0;
  }
  updateLightbox();
}


/* =====  EVENT WIRING  ===== */

// Intro dismiss
document.getElementById('enter-btn').addEventListener('click', endIntro);
document.getElementById('skipBtn').addEventListener('click', endIntro);

// Filter buttons
document.getElementById('filters').addEventListener('click', e => {
  if (!e.target.classList.contains('filter')) return;
  document.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
  e.target.classList.add('active');
  renderGallery(e.target.dataset.f);
});

// Lightbox controls
lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', lbPrevClick);
lbNext.addEventListener('click', lbNextClick);

// Click outside image to close
lb.addEventListener('click', e => {
  if (e.target === lb) closeLightbox();
});

// Keyboard nav
document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowRight')  lbNextClick();
  if (e.key === 'ArrowLeft')   lbPrevClick();
});

// Touch swipe on mobile
let touchStartX = 0;
lb.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});
lb.addEventListener('touchend', e => {
  const touchEndX = e.changedTouches[0].screenX;
  const diff = touchEndX - touchStartX;
  if (Math.abs(diff) < 50) return;   // ignore tiny swipes
  if (diff < 0) lbNextClick();       // swiped left → next
  else          lbPrevClick();        // swiped right → previous
});


/* =====  INIT  ===== */
makeStars();
renderGallery();
