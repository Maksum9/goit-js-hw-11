import{S as d,i as u}from"./assets/vendor-9310f15c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p=document.querySelector(".form"),l=document.querySelector(".gallery"),c=document.querySelector(".text-input"),f=new d(".gallery a",{captionsData:"alt",captionDelay:250}),i=document.querySelector(".loader");i.style.display="none";p.addEventListener("submit",o=>{o.preventDefault();const r=c.value;l.innerHTML="",c.value="",i.style.display="block";const n=new URLSearchParams({key:"41525979-544d9b4f8d317eee068e80d65",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${n}`).then(s=>{if(i.style.display="none",!s.ok)throw new Error(s.status);return s.json()}).then(s=>{if(s.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});return}s.hits.map(e=>{const t=m(e);l.appendChild(t)}),f.refresh()}).catch(s=>{console.error(s)})});function m(o){const r=document.createElement("div");return r.innerHTML=`
    <a href="${o.largeImageURL}">
    <img src="${o.webformatURL}" alt="${o.tags}"></a>
    <div class="info">
    <div class="image-info">
    <span>Likes</span>
    <span class="image-value">${o.likes}</span></div>
    <div class="image-info">
    <span>Views</span>
    <span class="image-value">${o.views}</span></div>
    <div class="image-info">
    <span>Comments</span>
    <span class="image-value">${o.comments}</span></div>
    <div class="image-info">
    <span>Downloads</span>
    <span class="image-value">${o.downloads}</span></div>
    </div>
  `,r}
//# sourceMappingURL=commonHelpers.js.map
