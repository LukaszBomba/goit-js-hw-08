import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryItem = galleryItems
  .map(
    galleryItem => `
<a class="gallery__item" href="${galleryItem.original}">
  <img
  class="gallery__image"
  src="${galleryItem.preview}"
  alt="${galleryItem.description}" 
  title = "${galleryItem.description}"/>
</a>`
  )
  .join('');

gallery.innerHTML = galleryItem;

new SimpleLightbox('.gallery a', { captionDelay: 250 });

console.log(galleryItems);
