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

  // 10 distinct horizontal lanes (percentages)
  const lanes = [4, 13, 22, 31, 40, 49, 58, 67, 76, 85];
  const laneBusyUntil = new Array(lanes.length).fill(0);

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

    const imgSrc = introImages[imgIndex % introImages.length];
    imgIndex++;

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Fotografia de rua';
    img.loading = 'lazy';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-photo-btn';
    closeBtn.innerHTML = '&times;';

    photoWrapper.appendChild(img);
    photoWrapper.appendChild(closeBtn);

    // 4X SMALLER UNIFORM DIMENSIONS (50px x 35px)
    const fixedWidth = 50; 
    const fixedHeight = 35; 
    const duration = 22; // 22s smooth rise

    photoWrapper.style.left = `${chosenLeftPercent}%`;
    photoWrapper.style.width = `${fixedWidth}px`;
    photoWrapper.style.height = `${fixedHeight}px`;
    photoWrapper.style.animationDuration = `${duration}s`;

    // Click to expand modal / close
    photoWrapper.addEventListener('click', (e) => {
      e.stopPropagation();
      if (photoWrapper.classList.contains('is-expanded')) {
        photoWrapper.classList.remove('is-expanded');
        particlesContainer.classList.remove('has-expanded');
      } else {
        document.querySelectorAll('.floating-photo.is-expanded').forEach(el => el.classList.remove('is-expanded'));
        photoWrapper.classList.add('is-expanded');
        particlesContainer.classList.add('has-expanded');
      }
    });

    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      photoWrapper.classList.remove('is-expanded');
      particlesContainer.classList.remove('has-expanded');
    });

    // Cleanup after float finishes
    photoWrapper.addEventListener('animationend', () => {
      if (!photoWrapper.classList.contains('is-expanded')) {
        photoWrapper.remove();
      }
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
