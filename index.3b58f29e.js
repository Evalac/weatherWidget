!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}};var n={},o=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function v(){}function m(){}function w(){}var g={};u(g,a,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(P([])));b&&b!==r&&n.call(b,a)&&(g=b);var L=w.prototype=v.prototype=Object.create(g);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:e,done:!0}}return m.prototype=w,u(L,"constructor",w),u(w,"constructor",m),m.displayName=u(w,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(j.prototype),u(j.prototype,i,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new j(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),u(L,c,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(n);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var a="https://restcountries.com/v3.1/name",i={searchForm:document.querySelector(".js-search"),addBtn:document.querySelector(".js-add"),listEl:document.querySelector(".js-list"),formContainer:document.querySelector(".form-container"),weatherContainer:document.querySelector(".js-weather-container")};function c(){return c=t(e)(t(n).mark((function r(o){var i,c,u;return t(n).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=o.map(function(){var r=t(e)(t(n).mark((function e(r){var o;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/").concat(r));case 2:if((o=t.sent).ok){t.next=5;break}throw new Error("");case 5:return t.abrupt("return",o.json());case 6:case"end":return t.stop()}}),e)})));return function(t){return r.apply(this,arguments)}}()),r.next=3,Promise.allSettled(i);case 3:return c=r.sent,u=c.filter((function(t){return"fulfilled"===t.status})).flatMap((function(t){return t.value})),r.abrupt("return",u);case 6:case"end":return r.stop()}}),r)}))),c.apply(this,arguments)}function u(t){return s.apply(this,arguments)}function s(){return s=t(e)(t(n).mark((function r(o){var a,i,c;return t(n).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return"http://api.weatherapi.com/v1","de3d646b80f44831adc131731240809",a=o.map(function(){var r=t(e)(t(n).mark((function e(r){var o,a;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=new URLSearchParams({key:"de3d646b80f44831adc131731240809",q:r,lang:"uk"}),t.next=3,fetch("".concat("http://api.weatherapi.com/v1","//current.json?").concat(o));case 3:if((a=t.sent).ok){t.next=6;break}throw new Error(a.statusText);case 6:return t.abrupt("return",a.json());case 7:case"end":return t.stop()}}),e)})));return function(t){return r.apply(this,arguments)}}()),r.next=5,Promise.allSettled(a);case 5:return i=r.sent,c=i.filter((function(t){return"fulfilled"===t.status})).map((function(t){return t.value})),r.abrupt("return",c);case 8:case"end":return r.stop()}}),r)}))),s.apply(this,arguments)}i.addBtn.addEventListener("click",(function(t){i.formContainer.insertAdjacentHTML("beforeend",'<input type="text" name="country">')})),i.searchForm.addEventListener("submit",(function(r){r.preventDefault(),function(t){return c.apply(this,arguments)}(new FormData(r.currentTarget).getAll("country").filter((function(t){return t})).map((function(t){return t.replace(/ /g,"")}))).then((o=t(e)(t(n).mark((function e(r){var o,a;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.map((function(t){return t.capital[0]})),t.next=3,u(o);case 3:a=t.sent,e=void 0,e=a.map((function(t){var e=t.current,r=e.temp_c,n=e.humidity,o=e.condition,a=o.text,i=o.icon,c=t.location,u=c.name,s=c.country;return' <ul class="weather-widget">\n      <li class="weather-item weather-country">'.concat(u,'</li>\n      <li class="weather-item weather-capital">').concat(s,'</li>\n      <ul class="weather-condition">\n        <li><p class="weather-condition-text">').concat(a,'</p></li>\n        <li><img class="weather-icon" src="').concat(i,'" alt="ICON" /></li>\n      </ul>\n      <li class="weather-item weather-temp">Current temp: ').concat(r,' &deg;C</li>\n      <li class="weather-item weather-humidity">Humidity: ').concat(n,"</li>\n    </ul>")})).join(""),i.weatherContainer.insertAdjacentHTML("beforeend",e);case 5:case"end":return t.stop()}var e}),e)}))),function(t){return o.apply(this,arguments)})).catch((function(t){return console.log(t)})).finally((function(t){return i.searchForm.reset()}));var o}))}();
//# sourceMappingURL=index.3b58f29e.js.map
