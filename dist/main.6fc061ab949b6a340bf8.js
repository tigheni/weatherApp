(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),i=t.n(r),o=t(314),a=t.n(o)()(i());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Kavoon&display=swap);"]),a.push([n.id,"/* The switch - the box around the slider */\n.switch {\n    font-size: 15px;\n    position: relative;\n    display: inline-block;\n    width: 5em;\n    height: 2.25em;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n/* The slider */\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #e7eff9;\n    outline: 1px solid #f3f8fe;\n    box-shadow:\n        0 4px 5px #f3f8fe inset,\n        0 4px 5px #c8d5e6;\n    transition: 0.4s;\n    border-radius: 30px;\n}\n\n.slider:before {\n    position: absolute;\n    content: 'off';\n    font-size: 0.85em;\n    color: #d2d6d8;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 2em;\n    min-width: 2em;\n    border-radius: 20px;\n    left: 0.35em;\n    bottom: 0.3em;\n    background-color: transparent;\n    outline: 2px solid #d2d6d8;\n    transition: 0.4s;\n}\n\n.switch input:checked + .slider:before {\n    content: 'on';\n    background-color: #6ce961;\n    color: white;\n    transform: translateX(3.1em);\n}\n/* END */\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    font-family: 'Kavoon', cursive;\n    font-size: 1.2em;\n    background-color: #c8d5e6;\n    color: #3a3a3a;\n    height: 100vh;\n    width: 100vw;\n}\n.lst_section {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 1.2em;\n    padding: 0.5em 1em;\n\n    gap: 10em;\n}\n.lst_section > div {\n    padding: 10px;\n    flex: 1;\n}\nheader {\n    font-size: 1.4rem;\n    text-align: center;\n    margin: 0.5em 0;\n}\n\n.search_bar {\n    outline: none;\n    border: none;\n    padding: 0.7rem;\n    width: 22em;\n    font-family: 'Kavoon', cursive;\n    border-radius: 20px;\n}\n\n.temp_toggle {\n    display: flex;\n    justify-content: center;\n    gap: 0.25em;\n    font-size: 1.2em;\n    align-items: center;\n}\n.weather_card {\n    padding: 1em;\n    margin: 0.5rem auto;\n    border-radius: 20px;\n    max-width: fit-content;\n    background-color: #f3f8fe;\n    box-shadow:\n        0 4px 5px #f3f8fe inset,\n        0 4px 5px #c8d5e6;\n}\n.temp_weather {\n    font-size: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5em;\n}\n.wind_humidity {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2em;\n}\n.time {\n    text-align: center;\n    margin: 10px 0 0px;\n}\n.weather_icon {\n    width: 100px;\n    height: auto;\n}\n",""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=i(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var c=t(o[a]);e[c].references--}for(var s=r(n,i),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),i=t.n(r),o=t(825),a=t.n(o),c=t(659),s=t.n(c),d=t(56),l=t.n(d),u=t(540),p=t.n(u),f=t(113),m=t.n(f),h=t(208),v={};v.styleTagTransform=m(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),i()(h.A,v),h.A&&h.A.locals&&h.A.locals,document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("form").addEventListener("submit",(n=>{n.preventDefault(),async function(n){try{const e=await fetch(`http://api.weatherapi.com/v1/current.json?key=fa27276d62f44a5a923174621242903&q=${n}&aqi=no`);!function(n){const e=document.querySelector(".weather_card"),t=document.querySelector(".localisation_span"),r=n.location+","+n.regiom;t.innerHTML=`${r}`,e.innerHTML=`\n <div class="temp_weather">\n    <div class="weather_icon">\n        <img\n            src="${n.icon}"\n             class="weather_icon"\n            alt=""\n        />\n    </div>\n    <div class="weather_info">\n        <div class="temperature">\n            <h2>${n.temperatureC}°</h2>\n        </div>\n        <div class="description">\n            <h3>${n.weatherCondition}</h3>\n        </div>\n    </div>\n</div>\n<div class="wind_humidity">\n    <div class="wind">\n        <i class="fa-solid fa-wind"></i>\n        <span> ${n.wind}</span>\n    </div>\n    <div class="humidity">\n        <i class="fa-solid fa-droplet"></i>\n        <span class="hum">${n.humidity}%</span>\n    </div>\n</div>\n<div class="time">15.15.2002</div>`}(await async function(n){const e=await n.json();return console.log(e),{location:e.location.name,regiom:e.location.region,weatherCondition:e.current.condition.text,temperatureC:e.current.temp_c,temperatureF:e.current.temp_f,feelsLikeC:e.current.feelslike_c,feelsLikeF:e.current.feelslike_f,humidity:e.current.humidity,wind:e.current.wind_kph,cloud:e.current.cloud,precip_mm:e.current.precip_mm,uv:e.current.uv,visibility:e.current.vis_km,icon:e.current.condition.icon}}(e))}catch(n){console.error("Failed to fetch weather data:",n)}}(document.querySelector(".search_bar").value)}))}))})();