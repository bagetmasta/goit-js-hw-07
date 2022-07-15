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
}

function basicLightBoxOpen(wayToImg) {
  const html = `<img width="1400" height="900" src="${wayToImg}">`;

  const ligthboxLib = basicLightbox.create(html, {
    onShow: ligthboxLib => window.addEventListener('keydown', onEscKeyPress),
    onClose: ligthboxLib =>
      window.removeEventListener('keydown', onEscKeyPress),
  });

  ligthboxLib.show();

  function onEscKeyPress(evt) {
    const ESC_KEY_CODE = 'Escape';

    if (evt.code === ESC_KEY_CODE) {
      console.log(`Click on Esc`);
      ligthboxLib.close();
    }
  }
}
