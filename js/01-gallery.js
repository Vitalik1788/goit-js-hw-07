import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryImgList = document.querySelector('.gallery');
const cardsMarkup = onCreateImgCards(galleryItems);
galleryImgList.insertAdjacentHTML('beforeend', cardsMarkup);

galleryImgList.addEventListener('click', onGalleryContainerClick);




function onCreateImgCards(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
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
  }).join('');
};


function onGalleryContainerClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`);
  instance.show();  
};



// console.log(galleryItems);
