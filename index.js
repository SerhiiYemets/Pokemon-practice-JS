import{a}from"./assets/vendor-CWxt7QI6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l="https://pokeapi.co/api/v2/pokemon/",d=document.querySelector(".search-form"),u=document.querySelector(".card-container"),i=document.querySelector(".loader");d.addEventListener("submit",p);async function f(r){return(await a(`${l}${r}`)).data}async function p(r){r.preventDefault(),i.classList.remove("hidden");const o=r.currentTarget.elements.query.value.trim();try{const s=await f(o);u.innerHTML=m(s)}catch(s){y(s.message)}finally{r.target.reset(),i.classList.add("hidden")}}function m({name:r,weight:o,height:s,sprites:n,abilities:e}){const t=e.map(({ability:c})=>`
        <li class="list-group-item">${c.name}</li>
        `).join("");return`
        <div class="card">
            <div class="card-img-top">
            <img src="${n.front_default}" alt="${r}"/>
        </div>
        <div class="card-body">
            <h3 class="card-title">Ім'я: ${r}</h3>
            <p class="card-text">"Вага": ${o}</p>
            <p class="card-text">"Зріст": ${s}</p>
        </div>
        
        <p class="card-text">
            <h4>Вміння:</h4>
            <ul>
                ${t}
            </ul>
            </p>
    `}function y(r){alert(r)}
//# sourceMappingURL=index.js.map
