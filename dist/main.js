(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(81),r=n.n(o),a=n(645),c=n.n(a),i=n(667),s=n.n(i),d=new URL(n(45),n.b),l=new URL(n(32),n.b),u=new URL(n(99),n.b),p=new URL(n(97),n.b),m=c()(r()),f=s()(d),h=s()(l),y=s()(u),v=s()(p);m.push([e.id,"@font-face {\n    font-family: 'seaside';\n    src: url("+f+") format('woff2'),\n        url("+h+") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'blok';\n    src: url("+y+") format('woff2'),\n        url("+h+") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n}\n\n.header {\n    overflow: hidden;\n    border: 1px solid #58a16e;\n    background-color: #6abe83;\n}\n.name {\n    font-family: 'seaside';\n    font-size: 40pt;\n}\n.slogan {\n    font-family: 'blok';\n    font-size: 25pt;\n}\nbutton {\n    float: left;\n    color: #eef4da;\n    background-color: inherit;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 15px 25px;\n    transition: 0.3s;\n    font-size: 18px;\n    font-family: 'blok';\n    font-weight: 800;\n}\n\nbutton:hover {\n    background-color: #f1ac9d;\n}\n\nbutton.active {\n    background-color: rgba(240,105,102,1) ;\n}\n#content {\n    display: flex;\n    flex-direction: column;\n    background-color: #eef4da;\n    color: #6abe83;\n    font-family: 'blok';\n    height: 100vh;\n}\n\n.display {\n    flex: 1;\n}\n.tabContent {\n    height: 100%;\n}\n\n#Home2 {\n    background-image: url("+v+");\n    background-size: cover;\n}\n\n.home{\n    text-align: center;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    padding: 60px 30px;\n}\n.slogan{\n    padding: 20px;\n}\n\n.menus {\n    padding: 30px 40px;\n}\n.menus > div {\n    font-family: 'seaside';\n    font-size: 20pt;\n}\n.menus > div > div {\n    font-size: 14pt;\n    font-family: 'blok';\n}",""]);const g=m},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},32:(e,t,n)=>{e.exports=n.p+"da770bc4848587486b3e.woff"},99:(e,t,n)=>{e.exports=n.p+"768b95e8b605d4560edf.woff2"},45:(e,t,n)=>{e.exports=n.p+"3f89915a3e5699850259.woff2"},97:(e,t,n)=>{e.exports=n.p+"ffb32553e5b7bdcb0b2f.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e,t,o;const r=(n,r,a)=>({description:c=>{const i=document.createElement("div"),s=document.createElement("div");i.textContent=r,s.textContent=a,i.appendChild(s),"starter"==n?e.appendChild(i):"sandwich"==n?t.appendChild(i):o.appendChild(i);const d=document.createElement("p");d.textContent=c,i.appendChild(d)}});var a=n(379),c=n.n(a),i=n(795),s=n.n(i),d=n(569),l=n.n(d),u=n(565),p=n.n(u),m=n(216),f=n.n(m),h=n(589),y=n.n(h),v=n(426),g={};g.styleTagTransform=y(),g.setAttributes=p(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=f(),c()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals,n(97);const b=document.createElement("div");b.classList.add("header"),content.setAttribute("id","content"),content.appendChild(b);const C=(e,t)=>{const n=document.createElement("button");n.classList.add("navTab"),n.setAttribute("id",e),n.textContent=e;const o=document.createElement("div");o.classList.add("tabContent"),o.setAttribute("id",`${e+2}`),b.appendChild(n),content.appendChild(o),t()};C("Home",(function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("home"),e.appendChild(t);const n=document.createElement("p");n.classList.add("name"),n.textContent="Busytown Bistro",t.appendChild(n);const o=document.createElement("p");o.classList.add("slogan"),o.textContent="Catch a yummy break at Busytown Bistro! Best Food in town! Bon appetit!",t.appendChild(o)})),document.querySelector("#Home").classList.add("active");const w=document.querySelector("#Home2"),x=document.querySelector(".home");w.appendChild(x),C("Menu",(function(){const n=document.createElement("div");n.classList.add("menus"),content.appendChild(n),(e=document.createElement("div")).textContent="Starters",(t=document.createElement("div")).textContent="Sandwiches",(o=document.createElement("div")).textContent="Drinks",n.appendChild(e),n.appendChild(t),n.appendChild(o),r("starter","Honey Brussel Sprouts","$8").description("Grilled brussel sprouts with sweet and spicy pecans and honey glaze"),r("starter","Soup of the Day","$8").description("French Onion Soup / Creamy Tomato Soup / Veggie Melody Soup"),r("starter","Spicy Calamari","$10").description("Crispy calamari served with hot n sweet sauce"),r("sandwich","Big Bird","$14").description("Crispy boneless chicken thigh with argugula, pickles, jelapenos cheddar cheese, and hot-honey dressing"),r("sandwich","Flying Pig","$14").description("Juicy pulled pork with secret BBQ sauce, pretzel buns, and coleslaw"),r("sandwich","Fish Story","$14").description("Battered cod filet served between a brioche roll with lettus and garlic-thyme aioli"),r("sandwich","Avo Good Day Burger","$14").description("Veggie burger topped with a sunny-side up egg, melted Asiago cheese, and fresh guacamole"),r("drink","Oolong Bubble Tea","$6").description("Sweet creamy mountaintop Oolong served hot or with ice"),r("drink","Coffee","$4").description("House blend of medium roasted coffee served hot or with ice"),r("drink","Coconut Water","$4").description("Freshly picked from the tree!"),r("drink","Gin Gin Mule","$9").description("Bubbly, refreshing mix of gin, ginger beer, lime, mint, and syrup")}));const S=document.querySelector("#Menu2"),E=document.querySelector(".menus");S.appendChild(E),C("Contact",(function(){const e=document.createElement("div");e.classList.add("contact"),content.appendChild(e);const t=document.createElement("div");t.classList.add("hours");const n=document.createElement("p");n.textContent="Hours",t.appendChild(n);const o=document.createElement("p");o.textContent="Mon - Fri: 11am - 9pm",t.appendChild(o);const r=document.createElement("p");r.textContent="Sat - Sun: 10am - 10pm",t.appendChild(r),e.appendChild(t);const a=document.createElement("div");a.classList.add("address"),a.textContent="Address: 123 Buzzy Boulevard, Busytown, NY",e.appendChild(a);const c=document.createElement("div");c.classList.add("phone"),c.textContent="Phone: 888-888-8888",e.appendChild(c)}));const k=document.querySelector("#Contact2"),L=document.querySelector(".contact");k.appendChild(L);const T=document.createElement("div");T.classList.add("display"),content.appendChild(T),T.appendChild(w),T.appendChild(S),T.appendChild(k);const B=document.createElement("div");function $(e){const t=document.getElementsByClassName("tabContent");for(let e=0;e<t.length;e++)t[e].style.display="none";const n=document.getElementsByClassName("navTab");for(let e=0;e<n.length;e++)n[e].className=n[e].className.replace(" active","");e.currentTarget==document.querySelector("#Home")?w.style.display="block":e.currentTarget==document.querySelector("#Menu")?S.style.display="block":e.currentTarget==document.querySelector("#Contact")&&(k.style.display="block"),e.currentTarget.className+=" active"}B.classList.add("footer"),content.appendChild(B),document.querySelectorAll(".navTab").forEach((e=>{e.addEventListener("click",$)})),document.querySelector(".active").click()})()})();