import{S as p,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();function u(s){const r=new URLSearchParams({key:"47679134-c77d37d01e499358209d43473",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const f=document.querySelector(".gallery"),m=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function g(s){const r=s.map(e=>`
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
    `).join("");f.innerHTML=r,m.refresh()}const i="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='16'%20height='16'%20id='icon-bound'%20fill='none'%20/%3e%3cpolygon%20points='14.707,2.707%2013.293,1.293%208,6.586%202.707,1.293%201.293,2.707%206.586,8%201.293,13.293%202.707,14.707%208,9.414%2013.293,14.707%2014.707,13.293%209.414,8%20'/%3e%3c/svg%3e",c=document.querySelector(".search-form"),d=document.querySelector(".loader");function h(){d.style.display="block"}function y(){d.style.display="none"}c.addEventListener("submit",s=>{s.preventDefault(),f.innerHTML="";const r=s.target.elements.search.value.trim().toLowerCase();if(r===""){a.show({message:"Input field can not be empty. Please enter your message.",messageColor:"#ffffff",iconUrl:i,backgroundColor:"#ef4040",position:"topRight"});return}h(),u(r).then(e=>(e.hits.length===0&&a.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",iconUrl:i,backgroundColor:"#ef4040",position:"topRight"}),g(e.hits))).catch(e=>a.show({message:`${e}`,messageColor:"#ffffff",iconUrl:i,backgroundColor:"#ef4040",position:"topRight"})).finally(()=>y()),c.reset()});
//# sourceMappingURL=index.js.map
