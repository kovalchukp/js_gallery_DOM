'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const largeImage = document.getElementById('largeImg');
  const galleries = document.querySelectorAll('.gallery__list');

  galleries.forEach((ul) => {
    ul.addEventListener('click', (e) => {
      const anchor = e.target.closest('a');

      if (!anchor) {
        return;
      }

      if (!largeImage || !ul.contains(anchor)) {
        return;
      }
      e.preventDefault();

      const href = new URL(anchor.getAttribute('href'), window.location).href;
      const title = anchor.getAttribute('title');

      largeImage.src = href;
      largeImage.alt = title || '';
    });
  });
});
