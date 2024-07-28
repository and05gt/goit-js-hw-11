export function searchImages(search) {
  const URL = 'https://pixabay.com/api';
  const API_KEY = '45098257-09112d803d024f473cdacef7f';

  return fetch(
    `${URL}?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
