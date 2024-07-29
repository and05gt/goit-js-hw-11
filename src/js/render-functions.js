import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

export function renderImage(data) {
  const imagesMarkup = data.hits
    .map(
      hit =>
        `<li class="gallery-item">
        <a class="gallery-link" href="${hit.largeImageURL}">
        <img class="gallery-image" src="${hit.webformatURL}" alt="${hit.tags}"/>
        </a>
        <div class="gallery-wrapper">
        <div class="text-wrap"><h3>Likes</h3><p>${hit.likes}</p></div>
        <div class="text-wrap"><h3>Views</h3><p>${hit.views}</p></div>
        <div class="text-wrap"><h3>Comments</h3><p>${hit.comments}</p></div>
        <div class="text-wrap"><h3>Downloads</h3><p>${hit.downloads}</p></div>
        </div>
        </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('afterbegin', imagesMarkup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh();
}

export function handleImageClear() {
  gallery.innerHTML = '';
}
