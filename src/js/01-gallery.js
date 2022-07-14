import { galleryItems } from './gallery-items.js';
// Change code below this line

const bodyRef = document.querySelector('body');
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createCardsMarkup(galleryItems);
// const forTest = document.querySelector('.basicLightbox--visible');

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

// galleryContainer.addEventListener('click', isModalOpen);

function createCardsMarkup(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join('');
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();

  const wayToImg = evt.target.dataset.source;

  basicLightBoxOpen(wayToImg);
  // addSpecialClass();
  // removeSpecialClass();
}

function basicLightBoxOpen(wayToImg) {
  basicLightbox
    .create(`<img width="1400" height="900" src="${wayToImg}">`)
    .show();

  addSpecialClass();
  // const visible = basicLightbox.visible();

  // isActive(visible);
}

function addSpecialClass() {
  bodyRef.classList.toggle('modal-open');
}

// function isModalOpen(evt) {
//   if (bodyRef.classList.contains('modal-open')) {
//     bodyRef.classList.remove('modal-open');
//   }
// }

// function isActive(boolean) {
//   console.log(boolean);
// }

// function removeSpecialClass() {
//   if (galleryContainer.classList.contains('modal-open')) {
//     galleryContainer.classList.remove('modal-open');
//   }
// }
