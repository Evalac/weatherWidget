const e={searchForm:document.querySelector(".js-search"),addBtn:document.querySelector(".js-add"),listEl:document.querySelector(".js-list"),formContainer:document.querySelector(".form-container"),weatherContainer:document.querySelector(".js-weather-container")};e.addBtn.addEventListener("click",(function(t){e.formContainer.insertAdjacentHTML("beforeend",'<input type="text" name="country">')})),e.searchForm.addEventListener("submit",(function(t){t.preventDefault();const n=new FormData(t.currentTarget).getAll("country");(async function(e){const t=e.map((async e=>{const t=await fetch(`https://restcountries.com/v3.1/name/${e}`);if(!t.ok)throw new Error("");return t.json()})),n=await Promise.allSettled(t);return n.filter((({status:e})=>"fulfilled"===e)).flatMap((({value:e})=>e))})(n.filter((e=>e)).map((e=>e.replace(/ /g,"")))).then((async t=>{const n=t.map((({capital:e})=>e[0])),a=await async function(e){const t="http://api.weatherapi.com/v1",n="de3d646b80f44831adc131731240809",a=e.map((async e=>{const a=new URLSearchParams({key:n,q:e,lang:"uk"}),r=await fetch(`${t}//current.json?${a}`);if(!r.ok)throw new Error(r.statusText);return r.json()})),r=await Promise.allSettled(a);return r.filter((({status:e})=>"fulfilled"===e)).map((({value:e})=>e))}(n);!function(t){const n=t.map((({current:{temp_c:e,humidity:t,condition:{text:n,icon:a}},location:{name:r,country:c}})=>` <ul class="weather-widget">\n      <li class="weather-item weather-country">${r}</li>\n      <li class="weather-item weather-capital">${c}</li>\n      <ul class="weather-condition">\n        <li><p class="weather-condition-text">${n}</p></li>\n        <li><img class="weather-icon" src="${a}" alt="ICON" /></li>\n      </ul>\n      <li class="weather-item weather-temp">Current temp: ${e} &deg;C</li>\n      <li class="weather-item weather-humidity">Humidity: ${t}</li>\n    </ul>`)).join("");e.weatherContainer.insertAdjacentHTML("beforeend",n)}(a)})).catch((e=>console.log(e))).finally((t=>e.searchForm.reset()))}));
//# sourceMappingURL=index.c8bd46d9.js.map
