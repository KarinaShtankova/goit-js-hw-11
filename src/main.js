// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const options = {
  method: 'GET',
};

let searchName = 'cat';

const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('.input'),
    btn: document.querySelector('.btn'),
  gallery: document.querySelector('.gallery')
};

refs.input.addEventListener('input', onInputSearch);
refs.btn.addEventListener('click', onBtnSubmitClick);

function onInputSearch(event) {
  searchName = event.target.value;
  // console.log(event.target.value);
}

function onBtnSubmitClick(event) {
  event.preventDefault();

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
        console.log(data.hits);
        const imagesData = data.hits;
        const images = imagesData.map(
          ({
            webformatURL,
            largeImageURL,
            tags,
            views,
            comments,
              downloads,
            likes
          }) => {
            return {
              preview: webformatURL,
              original: largeImageURL,
              description: tags,
              views,
              comments,
                downloads,
              likes
            };
          }
        );

        const galleryString = images.reduce(
          (
            html,
            { preview, original, description, views, comments, downloads, likes }
          ) => {
            return (
              html +
              `        <li class="gallery-item">
          <a class="gallery-link" href=${original} ></a>
        <img
            class="gallery-image"
            src=${preview}
            alt=${description}
            />

          <ul class="desc">
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
          </ul>
        </li>`
            );
          },
          ''
        );
refs.gallery.insertAdjacentHTML('afterbegin', galleryString)
          
          
        console.log(images);
      }
    })
    .catch(error => {
      console.log(error);
    });

  refs.form.reset();
}

// const images = [
//   {
//     preview:
//       `${webformatURL}`,
//     original:
//       `${largeImageURL}`,
//     description: `${tags}`,
//   },
// ];

// const galleryString = images.reduce(
//   (html, { preview, original, description }) => {
//     return (
//       html +
//       `        <li class="gallery-item">
//           <a class="gallery-link" href=${original} ></a>
//         <img
//             class="gallery-image"
//             src=${preview}
//             alt=${description}
//             />

//           <ul class="desc">
//             <li class="desc-item">
//               <h2 class="desc-title">likes</h2>
//               <p class="desc-text">${tags}</p>
//             </li>
//             <li class="desc-item">
//               <h2 class="desc-title">views</h2>
//               <p class="desc-text">${views}</p>
//             </li>
//             <li class="desc-item">
//               <h2 class="desc-title">comments</h2>
//               <p class="desc-text">${comments}</p>
//             </li>
//             <li class="desc-item">
//               <h2 class="desc-title">downloads</h2>
//               <p class="desc-text">${downloads}</p>
//             </li>
//           </ul>
//         </li>`
//     );
//   },
//   ''
// );
