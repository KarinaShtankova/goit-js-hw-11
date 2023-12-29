// iziToast

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// const loadText = '<p class="text">Loading images, please wait...</p>'
const options = {
  method: 'GET',
};

let searchName = 'cat';

const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('.input'),
  btn: document.querySelector('.btn'),
  gallery: document.querySelector('.gallery-list'),
  loader: document.querySelector('span'),
};

refs.input.addEventListener('input', onInputSearch);
refs.btn.addEventListener('click', onBtnSubmitClick);

function onInputSearch(event) {
  searchName = event.target.value;
  // console.log(event.target.value);
}

function onBtnSubmitClick(event) {
  event.preventDefault();
  refs.loader.hidden = false;
  refs.loader.classList.add('loader');

  // console.log('Loading images, please wait...');

  fetch(
    `https://pixabay.com/api/?key=41464538-044fa7fe64ee4a60fb4972757&q=${searchName}&image_type=photo&orientation=horizontal&safesearch=true`,
    options
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (!data.total) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        // window.alert('Sorry, there are no images matching your search query. Please try again!');
      } else {
        // console.log(data.hits);
        const imagesData = data.hits;
        const images = imagesData.map(image => {
          return {
            preview: image.webformatURL,
            original: image.largeImageURL,
            description: image.tags,
            views: image.views,
            comments: image.comments,
            downloads: image.downloads,
            likes: image.likes,
          };
        });
        const galleryString = images.reduce(
          (
            html,
            {
              preview,
              original,
              description,
              views,
              comments,
              downloads,
              likes,
            }
          ) => {
            return (
              html +
              `<li class="gallery">
          <a class="gallery-link" href=${original} >       
           <img
            class="gallery-image"
            src=${preview}
            alt="${description}"
            />          <ul class="desc">
            <li class="desc-item">
              <h2 class="desc-title">likes</h2>
              <p class="desc-text">${likes}</p>
            </li>
            <li class="desc-item">
              <h2 class="desc-title">views</h2>
              <p class="desc-text">${views}</p>
            </li>
            <li class="desc-item">
              <h2 class="desc-title">comments</h2>
              <p class="desc-text">${comments}</p>
            </li>
            <li class="desc-item">
              <h2 class="desc-title">downloads</h2>
              <p class="desc-text">${downloads}</p>
            </li>
          </ul></a>
        </li>`
            );
          },
          ''
        );

        refs.gallery.insertAdjacentHTML('afterbegin', galleryString);
        const lightbox = new SimpleLightbox('.gallery a', {
          captionsData: 'alt',
          captionDelay: 250,
        });
        lightbox.refresh();
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      // console.log('End loading...');
      refs.loader.classList.remove('loader');
      refs.loader.hidden = true;
    });

  refs.form.reset();
  refs.gallery.innerHTML = '';
}
