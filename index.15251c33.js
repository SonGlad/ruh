const e=document.querySelector("#hero-accordeon-list"),c=Array.from(e.children);function o(){c.forEach((e=>{const c=e.querySelector(".js-accordeon-title");e.querySelector(".js-accordeon-element").classList.remove("accordeon-visible"),c.classList.remove("accordeon-title-active"),e.classList.remove("hero-accordeon-item-active")}))}c[0].classList.add("hero-accordeon-item-active"),c[0].querySelector(".js-accordeon-title").classList.add("accordeon-title-active"),c[0].querySelector(".js-accordeon-element").classList.add("accordeon-visible"),document.addEventListener("click",(e=>{e.target.closest("#hero-accordeon-list")||o()})),c.forEach((e=>{const c=e.querySelector(".js-accordeon-title"),t=e.querySelector(".js-accordeon-element");c.addEventListener("click",(()=>{e.classList.contains("hero-accordeon-item-active")||o(),t.classList.add("accordeon-visible"),c.classList.add("accordeon-title-active"),e.classList.add("hero-accordeon-item-active")}))}));
//# sourceMappingURL=index.15251c33.js.map