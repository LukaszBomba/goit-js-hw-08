import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryPics = galleryItems
  .map(
    galleryPics => `
<a class="gallery__item" href="${galleryPics.original}">
  <img
  class="gallery__image"
  src="${galleryPics.preview}"
  alt="${galleryPics.description}" 
  title = "${galleryPics.description}"/>
</a>`
  )
  .join('');

gallery.innerHTML = galleryPics;

new SimpleLightbox('.gallery a', { captionDelay: 100 });

console.log(galleryItems);
