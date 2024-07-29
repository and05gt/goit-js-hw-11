import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImages } from './js/pixabay-api.js';
import { renderImage, handleImageClear } from './js/render-functions';

const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  handleImageClear();

  loader.classList.add('loader-active');

  const form = event.currentTarget;
  const searchValue = form.elements.search.value.trim();

  searchImages(searchValue)
    .then(data => {
      if (data.total === 0 || searchValue === '') {
        return iziToast.error({
          title: 'Error',
          titleColor: '#fff',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: '#fff',
          theme: 'dark',
        });
      } else {
        renderImage(data);
        loader.classList.remove('loader-active');
      }
    })
    .catch(error => {
      return iziToast.error({
        title: 'Error',
        titleColor: '#fff',
        message: `${error}`,
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        theme: 'dark',
      });
    })
    .finally(() => {
      form.reset();
      loader.classList.remove('loader-active');
    });
}
