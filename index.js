import{a as S,S as q,i as n}from"./assets/vendor-S2qh7U4E.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const M="57065525-8f77b836fab1fdfa97291f836",P="https://pixabay.com/api/";async function d(o,t){return(await S.get(P,{params:{key:M,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=document.querySelector(".load-more"),B=new q(".gallery a",{captionsData:"alt",captionDelay:250});function p(o){const t=o.map(({webformatURL:s,largeImageURL:l,tags:e,likes:r,views:a,comments:v,downloads:w})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${l}">
          <img
            class="gallery-image"
            src="${s}"
            alt="${e}"
          />

          <div class="image-info">
            <p><b>Likes</b><br>${r}</p>
            <p><b>Views</b><br>${a}</p>
            <p><b>Comments</b><br>${v}</p>
            <p><b>Downloads</b><br>${w}</p>
          </div>
        </a>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",t),B.refresh()}function $(){f.innerHTML=""}function h(){m.classList.add("is-visible")}function y(){m.classList.remove("is-visible")}function b(){g.classList.add("is-visible")}function L(){g.classList.remove("is-visible")}const u=document.querySelector(".form"),R=u.elements["search-text"],O=document.querySelector(".load-more");let c="",i=1;u.addEventListener("submit",x);O.addEventListener("click",E);async function x(o){if(o.preventDefault(),c=R.value.trim(),!!c){i=1,$(),L(),h();try{const t=await d(c,i);if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(t.hits);const s=Math.ceil(t.totalHits/15);i<s?b():n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{y()}u.reset()}}async function E(){i+=1,L(),h();try{const o=await d(c,i);p(o.hits);const t=Math.ceil(o.totalHits/15);i<t?b():n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),H()}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{y()}}function H(){const o=document.querySelector(".gallery-item");if(!o)return;const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
