document.addEventListener('DOMContentLoaded', () => {
  const heroHeader = document.querySelector('header.hero');
  if (!heroHeader) return;

  heroHeader.style.position = 'relative';

  let particlesContainer = heroHeader.querySelector('.photo-particles');
  if (!particlesContainer) {
    particlesContainer = document.createElement('div');
    particlesContainer.className = 'photo-particles';
    heroHeader.prepend(particlesContainer);
  }

  const introImages = [
    'images/slides/intro/1.jpg',
    'images/slides/intro/3.jpg',
    'images/slides/intro/5.JPG',
    'images/slides/intro/IMG_5939.jpg',
    'images/slides/intro/WOF_1002_resultado.jpg',
    'images/slides/intro/WOF_1019_resultado.jpg',
    'images/slides/intro/WOF_1083_resultado.jpg',
    'images/slides/intro/WOF_1457_resultado.jpg',
    'images/slides/intro/WOF_1699_resultado.jpg',
    'images/slides/intro/WOF_1709_resultado.jpg',
    'images/slides/intro/WOF_1777_resultado.jpg',
    'images/slides/intro/WOF_1778_resultado.jpg',
    'images/slides/intro/WOF_1807_resultado.jpg',
    'images/slides/intro/WOF_1867_resultado.jpg',
    'images/slides/intro/WOF_1882_resultado.jpg',
    'images/slides/intro/WOF_1904_resultado.jpg',
    'images/slides/intro/WOF_2036_resultado.jpg',
    'images/slides/intro/WOF_2039_resultado.jpg',
    'images/slides/intro/WOF_2103_resultado.jpg',
    'images/slides/intro/WOF_2137_resultado.jpg',
    'images/slides/intro/WOF_2168_resultado.jpg',
    'images/slides/intro/WOF_2180_resultado.jpg',
    'images/slides/intro/WOF_2241_resultado.jpg',
    'images/slides/intro/WOF_2272_resultado.jpg'
  ];

  let imgIndex = 0;

  // Lateral lanes ONLY (Left margin: 2%-14% | Right margin: 84%-96%)
  // Keeps the central text area and profile photo (15%-83%) 100% CLEAR!
  const lanes = [2, 5, 8, 11, 14, 84, 87, 90, 93, 96];
  const laneBusyUntil = new Array(lanes.length).fill(0);

  let currentLightboxIndex = 0;

  // Global photo lightbox appended directly to document.body (bypasses all parent stacking contexts)
  let globalLightbox = document.getElementById('global-photo-lightbox');
  if (!globalLightbox) {
    globalLightbox = document.createElement('div');
    globalLightbox.id = 'global-photo-lightbox';
    globalLightbox.className = 'global-photo-lightbox';
    globalLightbox.innerHTML = `
      <div class="lightbox-content">
        <button type="button" class="lightbox-close-btn" aria-label="Fechar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <button type="button" class="lightbox-arrow-btn prev-btn" aria-label="Anterior">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <img src="" alt="Fotografia expandida">
        <button type="button" class="lightbox-arrow-btn next-btn" aria-label="Próxima">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    `;
    document.body.appendChild(globalLightbox);

    const closeBtn = globalLightbox.querySelector('.lightbox-close-btn');
    const prevBtn = globalLightbox.querySelector('.prev-btn');
    const nextBtn = globalLightbox.querySelector('.next-btn');
    const lightboxImg = globalLightbox.querySelector('img');

    function showLightboxImage(index) {
      if (introImages.length === 0) return;
      currentLightboxIndex = (index + introImages.length) % introImages.length;
      lightboxImg.src = introImages[currentLightboxIndex];
    }

    closeBtn.addEventListener('click', () => {
      globalLightbox.classList.remove('active');
    });

    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showLightboxImage(currentLightboxIndex - 1);
    });

    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showLightboxImage(currentLightboxIndex + 1);
    });

    globalLightbox.addEventListener('click', (e) => {
      if (e.target === globalLightbox) {
        globalLightbox.classList.remove('active');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (!globalLightbox.classList.contains('active')) return;
      if (e.key === 'ArrowLeft') {
        showLightboxImage(currentLightboxIndex - 1);
      } else if (e.key === 'ArrowRight') {
        showLightboxImage(currentLightboxIndex + 1);
      } else if (e.key === 'Escape') {
        globalLightbox.classList.remove('active');
      }
    });

    globalLightbox.showImage = showLightboxImage;
  }

  function spawnPhoto() {
    if (document.hidden) return;

    const now = Date.now();
    // Find lanes that are currently free
    const availableLaneIndices = [];
    for (let i = 0; i < lanes.length; i++) {
      if (now >= laneBusyUntil[i]) {
        availableLaneIndices.push(i);
      }
    }

    if (availableLaneIndices.length === 0) return; // No lane available right now

    // Pick a random free lane
    const chosenLaneIdx = availableLaneIndices[Math.floor(Math.random() * availableLaneIndices.length)];
    const chosenLeftPercent = lanes[chosenLaneIdx];

    // DOUBLED LANE SPACING INTERVAL: 13 seconds between photos in the same lane
    laneBusyUntil[chosenLaneIdx] = now + 13000;

    const photoWrapper = document.createElement('div');
    photoWrapper.className = 'floating-photo';

    const currentImgPath = introImages[imgIndex % introImages.length];
    const currentImgIndex = imgIndex % introImages.length;
    imgIndex++;

    const img = document.createElement('img');
    img.src = currentImgPath;
    img.alt = 'Fotografia de rua';
    img.loading = 'lazy';

    photoWrapper.appendChild(img);

    // UNIFORM DIMENSIONS (50px x 35px)
    const fixedWidth = 50; 
    const fixedHeight = 35; 
    const duration = 22; // 22s smooth rise

    photoWrapper.style.left = `${chosenLeftPercent}%`;
    photoWrapper.style.width = `${fixedWidth}px`;
    photoWrapper.style.height = `${fixedHeight}px`;
    photoWrapper.style.animationDuration = `${duration}s`;

    // Click to open lightbox on document.body portal (100% in front of all page elements)
    photoWrapper.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = introImages.indexOf(currentImgPath);
      globalLightbox.showImage(idx !== -1 ? idx : currentImgIndex);
      globalLightbox.classList.add('active');
    });

    // Cleanup after float finishes
    photoWrapper.addEventListener('animationend', () => {
      photoWrapper.remove();
    });

    particlesContainer.appendChild(photoWrapper);
  }

  // DOUBLED FIRST EMERGENCE TIMING (3000ms delay between initial batch items)
  for (let i = 0; i < 4; i++) {
    setTimeout(spawnPhoto, i * 3000);
  }

  // DOUBLED SPAWN INTERVAL (4400ms between continuous photo spawns)
  setInterval(spawnPhoto, 4400);
});
