function e(e,t){const n=e.map((({current:{temp_c:e,humidity:t,condition:{text:n,icon:a}},location:{name:r,country:c}})=>` <ul class="weather-widget">\n      <li class="weather-item weather-country">${r}</li>\n      <li class="weather-item weather-capital">${c}</li>\n      <ul class="weather-condition">\n        <li><p class="weather-condition-text">${n}</p></li>\n        <li><img class="weather-icon" src="${a}" alt="ICON" /></li>\n      </ul>\n      <li class="weather-item weather-temp">Current temp: ${e} &deg;C</li>\n      <li class="weather-item weather-humidity">Humidity: ${t}</li>\n    </ul>`)).join("");return t.insertAdjacentHTML("beforeend",n)}async function t(e){const t=e.map((async e=>{const t=await fetch(`https://restcountries.com/v3.1/name/${e}`);if(!t.ok)throw new Error("");return t.json()}));return(await Promise.allSettled(t)).filter((({status:e})=>"fulfilled"===e)).flatMap((({value:e})=>e))}async function n(e){const t=e.map((async e=>{const t=new URLSearchParams({key:"de3d646b80f44831adc131731240809",q:e,lang:"uk"}),n=await fetch(`http://api.weatherapi.com/v1//current.json?${t}`);if(!n.ok)throw new Error(n.statusText);return n.json()}));return(await Promise.allSettled(t)).filter((({status:e})=>"fulfilled"===e)).map((({value:e})=>e))}const a={searchForm:document.querySelector(".js-search"),addBtn:document.querySelector(".js-add"),listEl:document.querySelector(".js-list"),formContainer:document.querySelector(".form-container"),weatherContainer:document.querySelector(".js-weather-container")};a.addBtn.addEventListener("click",(function(e){a.formContainer.insertAdjacentHTML("beforeend",'<input type="text" name="country">')})),a.searchForm.addEventListener("submit",(function(r){r.preventDefault();const c=new FormData(r.currentTarget).getAll("country");t(c.filter((e=>e)).map((e=>e.replace(/ /g,"")))).then((async t=>{const r=t.map((({capital:e})=>e[0]));e(await n(r),a.weatherContainer)})).catch((e=>console.log(e))).finally((e=>a.searchForm.reset()))}));
//# sourceMappingURL=index.c910642f.js.map
