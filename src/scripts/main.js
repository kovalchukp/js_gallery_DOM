'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const largeImage = document.getElementById('largeImg');
  const galleries = document.querySelectorAll('.gallery__list');

  galleries.forEach((ul) => {
    ul.addEventListener('click', (e) => {
      e.preventDefault();

      const img = e.target.closest('a');

      if (!largeImage || !ul.contains(img)) {
        return;
      }

      if (!img) {
        return;
      }

      const href = new URL(img.getAttribute('href'), window.location).href;
      const title = img.getAttribute('title');

      largeImage.src = href;
      largeImage.alt = title || '';
    });
  });
});
