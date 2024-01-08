import{S as g,i as p}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const s={form:document.querySelector(".form"),gallery:document.querySelector(".gallery-list"),loader:document.querySelector("span")};s.form.addEventListener("submit",y);function y(l){l.preventDefault(),s.gallery.innerHTML="",s.loader.hidden=!1,s.loader.classList.add("loader");const a=l.currentTarget.elements.search.value;L(a).then(o=>{o.total?b(o):n()}).catch(n).finally(()=>{s.loader.classList.remove("loader"),s.loader.hidden=!0}),s.form.reset()}function L(l){return fetch(`https://pixabay.com/api/?key=41464538-044fa7fe64ee4a60fb4972757&q=${l}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function b(l){const o=l.hits.map(e=>({preview:e.webformatURL,original:e.largeImageURL,description:e.tags,views:e.views,comments:e.comments,downloads:e.downloads,likes:e.likes})).reduce((e,{preview:i,original:c,description:d,views:u,comments:f,downloads:m,likes:h})=>e+`<li class="gallery">
          <a class="gallery-link" href=${c} >       
           <img
            class="gallery-image"
            src=${i}
            alt="${d}"
            />          <ul class="desc">
            <li class="desc-item">
              <h2 class="desc-title">likes</h2>
              <p class="desc-text">${h}</p>
            </li>
            <li class="desc-item">
              <h2 class="desc-title">views</h2>
              <p class="desc-text">${u}</p>
            </li>
            <li class="desc-item">
              <h2 class="desc-title">comments</h2>
              <p class="desc-text">${f}</p>
            </li>
            <li class="desc-item">
              <h2 class="desc-title">downloads</h2>
              <p class="desc-text">${m}</p>
            </li>
          </ul></a>
        </li>`,"");s.gallery.insertAdjacentHTML("afterbegin",o),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function n(){p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
