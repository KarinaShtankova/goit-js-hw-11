import{i as g,S as y}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const b={method:"GET"};let n="cat";const l={form:document.querySelector(".form"),input:document.querySelector(".input"),btn:document.querySelector(".btn"),gallery:document.querySelector(".gallery-list"),loader:document.querySelector("span")};l.input.addEventListener("input",L);l.btn.addEventListener("click",w);function L(o){n=o.target.value}function w(o){o.preventDefault(),l.loader.hidden=!1,l.loader.classList.add("loader"),fetch(`https://pixabay.com/api/?key=41464538-044fa7fe64ee4a60fb4972757&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`,b).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{if(!s.total)g.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else{const e=s.hits.map(t=>({preview:t.webformatURL,original:t.largeImageURL,description:t.tags,views:t.views,comments:t.comments,downloads:t.downloads,likes:t.likes})).reduce((t,{preview:c,original:d,description:u,views:f,comments:m,downloads:p,likes:h})=>t+`<li class="gallery">
          <a class="gallery-link" href=${d} >       
           <img
            class="gallery-image"
            src=${c}
            alt="${u}"
            />          <ul class="desc">
            <li class="desc-item">
              <h2 class="desc-title">likes</h2>
              <p class="desc-text">${h}</p>
            </li>
            <li class="desc-item">
              <h2 class="desc-title">views</h2>
              <p class="desc-text">${f}</p>
            </li>
            <li class="desc-item">
              <h2 class="desc-title">comments</h2>
              <p class="desc-text">${m}</p>
            </li>
            <li class="desc-item">
              <h2 class="desc-title">downloads</h2>
              <p class="desc-text">${p}</p>
            </li>
          </ul></a>
        </li>`,"");l.gallery.insertAdjacentHTML("afterbegin",e),new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}}).catch(s=>{console.log(s)}).finally(()=>{l.loader.classList.remove("loader"),l.loader.hidden=!0}),l.form.reset(),l.gallery.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
