import{S as u,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();function d(s){const o=new URLSearchParams({key:"47679134-c77d37d01e499358209d43473",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:200});return fetch(`https://pixabay.com/api/?${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const c=document.querySelector(".gallery"),p=new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function m(s){const o=s.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
            />
          </a>
          <div class="stat-container">
            <div>
                <span><b>Likes</b></span>
                <span>${e.likes}</span>
            </div>
            <div>
                <span><b>Views</b></span>
                <span>${e.views}</span>
            </div>
             <div>
                <span><b>Comments</b></span>
                <span>${e.comments}</b></span>
            </div>
             <div>
                <span><b>Downloads</b></span>
                <span>${e.downloads}</span>
            </div>
          </div>
        </li>
    `).join("");c.innerHTML=o,p.refresh()}const l=document.querySelector(".search-form"),f=document.querySelector(".loader");function g(){f.style.display="block"}function h(){f.style.display="none"}l.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="";const o=s.target.elements.search.value.trim().toLowerCase();if(o===""){a.show({message:"Input field can not be empty. Please enter your message.",messageColor:"#ffffff",iconUrl:xmarkSvg,backgroundColor:"#ef4040",position:"topRight"});return}g(),d(o).then(e=>(e.hits.length===0&&a.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",iconUrl:xmarkSvg,backgroundColor:"#ef4040",position:"topRight"}),m(e.hits))).catch(e=>a.show({message:`${e}`,messageColor:"#ffffff",iconUrl:xmarkSvg,backgroundColor:"#ef4040",position:"topRight"})).finally(()=>h()),l.reset()});
//# sourceMappingURL=index.js.map
