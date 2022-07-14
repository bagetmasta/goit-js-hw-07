import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createCardsMarkup(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join('');
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();

  const lightbox = new SimpleLightbox('.gallery a', {
    overlay: true,
  });
}
