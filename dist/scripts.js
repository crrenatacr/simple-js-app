();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addDropdownItem(e)})})var pokemonRepository=function(){var e=[];function t(t){"object"==typeof t&&"name"in t&&"detailsUrl"in t?(t.name=t.name.charAt(0).toUpperCase()+t.name.slice(1),e.push(t)):console.log("Invalid Pokemon data.")}function n(){return e}function i(e){return a(),fetch(e.detailsUrl).then(function(e){return e.json()}).then(function(t){r(),e.imageUrl=t.sprites.front_default,e.height=t.height,e.types=t.types.map(function(e){return e.type.name}),t.abilities?e.abilities=t.abilities.map(function(e){return e.ability.name}):e.abilities=[]}).catch(function(e){r(),console.error(e)})}function o(e){i(e).then(function(){var t,n,i,o,a,r;t=e,n=document.querySelector(".modal-title"),i=document.querySelector(".modal-image"),o=document.querySelector(".modal-name"),a=document.querySelector(".modal-height"),r=document.querySelector(".modal-abilities"),n.innerText=t.name,i.setAttribute("src",t.imageUrl),o.innerText="Name: "+t.name,a.innerText="Height: "+t.height+"m",r.innerText="Abilities: "+t.abilities.join(", "),$("#pokemonModal").modal("show")})}function a(){var e=document.createElement("div");e.classList.add("loading-message"),e.innerText="Loading...",document.body.appendChild(e)}function r(){var e=document.querySelector(".loading-message");e&&e.remove()}return{add:t,getAll:n,addDropdownItem:function e(t){var n=document.getElementById("pokemonDropdown"),i=document.createElement("a");i.classList.add("dropdown-item"),i.innerText=t.name,i.setAttribute("href","#"),i.addEventListener("click",function(){o(t)}),n.appendChild(i)},loadList:function e(){return a(),fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(e){return e.json()}).then(function(e){r(),e.results.forEach(function(e){t({name:e.name,detailsUrl:e.url})})}).catch(function(e){r(),console.error(e)})},loadDetails:i,showDetails:o}};