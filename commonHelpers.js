import{i as h}from"./assets/vendor-32231325.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function f(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=f(e);fetch(e.href,t)}})();const g={method:"GET"};let m="cat";const l={form:document.querySelector(".form"),input:document.querySelector(".input"),btn:document.querySelector(".btn"),gallery:document.querySelector(".gallery")};l.input.addEventListener("input",y);l.btn.addEventListener("click",b);function y(i){m=i.target.value}function b(i){i.preventDefault(),fetch(`https://pixabay.com/api/?key=41464538-044fa7fe64ee4a60fb4972757&q=${m}&image_type=photo&orientation=horizontal&safesearch=true`,g).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{if(!s.total)h.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else{console.log(s.hits);const o=s.hits.map(({webformatURL:t,largeImageURL:r,tags:c,views:n,comments:a,downloads:u,likes:d})=>({preview:t,original:r,description:c,views:n,comments:a,downloads:u,likes:d})),e=o.reduce((t,{preview:r,original:c,description:n,views:a,comments:u,downloads:d,likes:p})=>t+`        <li class="gallery-item">
          <a class="gallery-link" href=${c} ></a>
        <img
            class="gallery-image"
            src=${r}
            alt=${n}
            />

          <ul class="desc">
            <li class="desc-item">
              <h2 class="desc-title">likes</h2>
              <p class="desc-text">${p}</p>
            </li>
            <li class="desc-item">
              <h2 class="desc-title">views</h2>
              <p class="desc-text">${a}</p>
            </li>
            <li class="desc-item">
              <h2 class="desc-title">comments</h2>
              <p class="desc-text">${u}</p>
            </li>
            <li class="desc-item">
              <h2 class="desc-title">downloads</h2>
              <p class="desc-text">${d}</p>
            </li>
          </ul>
        </li>`,"");l.gallery.insertAdjacentHTML("afterbegin",e),console.log(o)}}).catch(s=>{console.log(s)}),l.form.reset()}
//# sourceMappingURL=commonHelpers.js.map
