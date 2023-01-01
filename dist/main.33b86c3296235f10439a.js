(()=>{"use strict";var n={25:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(537),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,".footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 15px 0;\n    background-color: #DB4C3F;\n    color: white;\n  }","",{version:3,sources:["webpack://./src/css/footer.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,yBAAyB;IACzB,YAAY;EACd",sourcesContent:[".footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 15px 0;\n    background-color: #DB4C3F;\n    color: white;\n  }"],sourceRoot:""}]);const c=a},850:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(537),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,".header {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 13px 0;\n    background-color: #DB4C3F;\n    color: white;\n  }\n\n.header h1 {\n  margin-left: 30px;\n  font-size: 1.1rem;\n} ","",{version:3,sources:["webpack://./src/css/header.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,eAAe;IACf,yBAAyB;IACzB,YAAY;EACd;;AAEF;EACE,iBAAiB;EACjB,iBAAiB;AACnB",sourcesContent:[".header {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 13px 0;\n    background-color: #DB4C3F;\n    color: white;\n  }\n\n.header h1 {\n  margin-left: 30px;\n  font-size: 1.1rem;\n} "],sourceRoot:""}]);const c=a},716:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(537),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,".middle-content {\n    display: grid;\n    grid-template-columns: minmax(305px, 1fr) 4fr;\n\n}\n\n.main-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 40px;\n    padding-left: 30px;\n}\n\n.project-view {\n    width: 75%;\n}","",{version:3,sources:["webpack://./src/css/middle-content.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,6CAA6C;;AAEjD;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd",sourcesContent:[".middle-content {\n    display: grid;\n    grid-template-columns: minmax(305px, 1fr) 4fr;\n\n}\n\n.main-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 40px;\n    padding-left: 30px;\n}\n\n.project-view {\n    width: 75%;\n}"],sourceRoot:""}]);const c=a},93:(n,t,e)=>{e.d(t,{Z:()=>d});var o=e(537),r=e.n(o),i=e(645),a=e.n(i),c=e(402),A=a()(r());A.i(c.Z),A.push([n.id,".sidebar {\n    background-color: #f7f7f7;\n    padding-top: 30px;\n    padding-left: 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    font-size: 0.9rem;\n}\n\n.sidebar h2 {\n    font-size: 0.9rem;\n    padding-bottom: 10px;\n    margin-left: 5px;\n}\n\n.first-links,\n.second-links {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: start;\n    padding-bottom: 40px;\n    padding-left: 0px;\n    margin-right: 18px;\n}\n\n\n.first-links li,\n.second-links li{\n    width: 100%;\n}\n\n#list-projects {\n    width: 100%;\n}\n\n.first-links button.btn-project,\n.second-links button.btn-project{\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    cursor: pointer;\n    width: 100%;\n    padding: 8px 10px;\n    border-radius: 8px;\n    border: none;\n    background-color: #f7f7f7;\n}\n\n#btn-add-project {\n    background-color: #f7f7f7;;\n}\n\n#btn-add-project:hover {\n    background-color: #d6d6d6;\n}\n\n\n\n\n.first-links button.btn-project:hover,\n.second-links button.btn-project:hover{\n    background-color: #d6d6d6;\n}\n\n.first-links img,\n.second-links img {\n    width: 21px;\n}\n\nbutton.btn-project[active] {\n    background-color: #d6d6d6;\n}\n\n#add-project-form {\n    padding-left: 10px;\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 80%;\n    margin-top: 8px;\n}\n\n\n#add-project-form input{\n    height: 35px;\n    width: 100%;\n    padding-left: 5px;\n    border-radius: 5px;\n    border: 1px solid #ddd;\n}\n\n/* to make the blue focus rectangle disappear */\n#add-project-form input:focus{\n    outline: none; \n    border-color: grey;\n}\n\n#add-project-buttons {\n    display: flex;\n    justify-content: space-around;\n}\n\n.btn-add,\n.btn-cancel{\n    padding : 10px 20px;\n    border: none;\n    border-radius: 5px;\n    width: 80px;\n    text-align: center;\n}\n\n.btn-add:not([disabled]) {\n    background-color: var(--not-hover-add-button-color);\n    color: white;\n}\n\n.btn-add[disabled] {\n    background-color: var(--disabled-add-button-color);\n    color: white;\n}\n\n.btn-add:hover:not([disabled]) {\n    background-color: var(--hover-add-button-color);\n    cursor: pointer;\n}\n\n\n.btn-cancel {\n    background-color: var(--not-active-cancel-button-color);\n    color: var(--font-color);\n    cursor: pointer;\n}\n\n.btn-cancel:hover {\n    background-color: #b0b0b0;\n}\n\n\n#add-project-form:not([active]) {\n    display: none;\n}\n\n#btn-add-project:not([active]) {\n    display: none;\n}\n\n.project-button-container {\n    width:100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project-button-sub-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap:10px;\n}\n\n.btn-delete-project {\n    visibility: hidden;\n    opacity: 0;\n    /* //transition: visibility 2s 1s, opacity 1s linear; */\n    transition: opacity 0.4s;\n\n}\n\n.btn-project:hover .btn-delete-project {\n    visibility: visible;\n    opacity: 1;\n    transition: opacity 0.4s;\n\n}\n\n\n\n\n","",{version:3,sources:["webpack://./src/css/sidebar.css"],names:[],mappings:"AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,oBAAoB;IACpB,iBAAiB;IACjB,kBAAkB;AACtB;;;AAGA;;IAEI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;;IAEI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,eAAe;IACf,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;;;;AAKA;;IAEI,yBAAyB;AAC7B;;AAEA;;IAEI,WAAW;AACf;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,eAAe;AACnB;;;AAGA;IACI,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA,+CAA+C;AAC/C;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;;IAEI,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,mDAAmD;IACnD,YAAY;AAChB;;AAEA;IACI,kDAAkD;IAClD,YAAY;AAChB;;AAEA;IACI,+CAA+C;IAC/C,eAAe;AACnB;;;AAGA;IACI,uDAAuD;IACvD,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,uDAAuD;IACvD,wBAAwB;;AAE5B;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,wBAAwB;;AAE5B",sourcesContent:["@import 'style.css';\n\n.sidebar {\n    background-color: #f7f7f7;\n    padding-top: 30px;\n    padding-left: 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    font-size: 0.9rem;\n}\n\n.sidebar h2 {\n    font-size: 0.9rem;\n    padding-bottom: 10px;\n    margin-left: 5px;\n}\n\n.first-links,\n.second-links {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: start;\n    padding-bottom: 40px;\n    padding-left: 0px;\n    margin-right: 18px;\n}\n\n\n.first-links li,\n.second-links li{\n    width: 100%;\n}\n\n#list-projects {\n    width: 100%;\n}\n\n.first-links button.btn-project,\n.second-links button.btn-project{\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    cursor: pointer;\n    width: 100%;\n    padding: 8px 10px;\n    border-radius: 8px;\n    border: none;\n    background-color: #f7f7f7;\n}\n\n#btn-add-project {\n    background-color: #f7f7f7;;\n}\n\n#btn-add-project:hover {\n    background-color: #d6d6d6;\n}\n\n\n\n\n.first-links button.btn-project:hover,\n.second-links button.btn-project:hover{\n    background-color: #d6d6d6;\n}\n\n.first-links img,\n.second-links img {\n    width: 21px;\n}\n\nbutton.btn-project[active] {\n    background-color: #d6d6d6;\n}\n\n#add-project-form {\n    padding-left: 10px;\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 80%;\n    margin-top: 8px;\n}\n\n\n#add-project-form input{\n    height: 35px;\n    width: 100%;\n    padding-left: 5px;\n    border-radius: 5px;\n    border: 1px solid #ddd;\n}\n\n/* to make the blue focus rectangle disappear */\n#add-project-form input:focus{\n    outline: none; \n    border-color: grey;\n}\n\n#add-project-buttons {\n    display: flex;\n    justify-content: space-around;\n}\n\n.btn-add,\n.btn-cancel{\n    padding : 10px 20px;\n    border: none;\n    border-radius: 5px;\n    width: 80px;\n    text-align: center;\n}\n\n.btn-add:not([disabled]) {\n    background-color: var(--not-hover-add-button-color);\n    color: white;\n}\n\n.btn-add[disabled] {\n    background-color: var(--disabled-add-button-color);\n    color: white;\n}\n\n.btn-add:hover:not([disabled]) {\n    background-color: var(--hover-add-button-color);\n    cursor: pointer;\n}\n\n\n.btn-cancel {\n    background-color: var(--not-active-cancel-button-color);\n    color: var(--font-color);\n    cursor: pointer;\n}\n\n.btn-cancel:hover {\n    background-color: #b0b0b0;\n}\n\n\n#add-project-form:not([active]) {\n    display: none;\n}\n\n#btn-add-project:not([active]) {\n    display: none;\n}\n\n.project-button-container {\n    width:100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project-button-sub-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap:10px;\n}\n\n.btn-delete-project {\n    visibility: hidden;\n    opacity: 0;\n    /* //transition: visibility 2s 1s, opacity 1s linear; */\n    transition: opacity 0.4s;\n\n}\n\n.btn-project:hover .btn-delete-project {\n    visibility: visible;\n    opacity: 1;\n    transition: opacity 0.4s;\n\n}\n\n\n\n\n"],sourceRoot:""}]);const d=A},402:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(537),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;700&display=swap);"]),a.push([n.id,":root {\n    font-family: Arial, Helvetica, sans-serif;\n    --main-color: #1A92D3;\n    --grey: #E2E8EF;\n    --bborder: 1px solid black;\n    --font-color: #232b2b;\n    --disabled-add-button-color: #F2B9B3;\n    --not-hover-add-button-color: #db4c3f;\n    --hover-add-button-color: #B03D31;\n    --active-cancel-button-color: #E5E5E5;;\n    --not-active-cancel-button-color: #d6d6d6;\n\n    color: #232b2b;\n    \n}\n\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* border: var(--bborder) */\n}\n\na,\na:visited {\n    color: black;\n    text-decoration: none;\n}\n\nul {\n    list-style-type: none;\n}\n\nhtml, body {\n    max-width: 100%;\n    overflow-x: hidden;\n}\n\n\n.container {\n    height: 100vh;\n    width: 100vw;\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    grid-template-columns: 100%;\n}\n\n.project-name {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 25ch;\n}\n\n.project-name:hover{\n    text-overflow: clip;\n    white-space: normal;\n    word-break: break-all;\n}\n","",{version:3,sources:["webpack://./src/css/style.css"],names:[],mappings:"AAGA;IACI,yCAAyC;IACzC,qBAAqB;IACrB,eAAe;IACf,0BAA0B;IAC1B,qBAAqB;IACrB,oCAAoC;IACpC,qCAAqC;IACrC,iCAAiC;IACjC,qCAAqC;IACrC,yCAAyC;;IAEzC,cAAc;;AAElB;;;AAGA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;;IAEI,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,iCAAiC;IACjC,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;IACnB,qBAAqB;AACzB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;700&display=swap');\n\n\n:root {\n    font-family: Arial, Helvetica, sans-serif;\n    --main-color: #1A92D3;\n    --grey: #E2E8EF;\n    --bborder: 1px solid black;\n    --font-color: #232b2b;\n    --disabled-add-button-color: #F2B9B3;\n    --not-hover-add-button-color: #db4c3f;\n    --hover-add-button-color: #B03D31;\n    --active-cancel-button-color: #E5E5E5;;\n    --not-active-cancel-button-color: #d6d6d6;\n\n    color: #232b2b;\n    \n}\n\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* border: var(--bborder) */\n}\n\na,\na:visited {\n    color: black;\n    text-decoration: none;\n}\n\nul {\n    list-style-type: none;\n}\n\nhtml, body {\n    max-width: 100%;\n    overflow-x: hidden;\n}\n\n\n.container {\n    height: 100vh;\n    width: 100vw;\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    grid-template-columns: 100%;\n}\n\n.project-name {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 25ch;\n}\n\n.project-name:hover{\n    text-overflow: clip;\n    white-space: normal;\n    word-break: break-all;\n}\n"],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(a[A]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);o&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},537:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},379:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var A=n[c],d=o.base?A[0]+o.base:A[0],s=i[d]||0,l="".concat(d," ").concat(s);i[d]=s+1;var p=e(l),u={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var b=r(u,o);o.byIndex=c,t.splice(c,0,{identifier:l,updater:b,references:1})}a.push(l)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);t[c].references--}for(var A=o(n,r),d=0;d<i.length;d++){var s=e(i[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=A}}},569:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{var n=e(379),t=e.n(n),o=e(795),r=e.n(o),i=e(569),a=e.n(i),c=e(565),A=e.n(c),d=e(216),s=e.n(d),l=e(589),p=e.n(l),u=e(402),b={};b.styleTagTransform=p(),b.setAttributes=A(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=s(),t()(u.Z,b),u.Z&&u.Z.locals&&u.Z.locals;var f=e(850),m={};m.styleTagTransform=p(),m.setAttributes=A(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=s(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var B=e(25),C={};C.styleTagTransform=p(),C.setAttributes=A(),C.insert=a().bind(null,"head"),C.domAPI=r(),C.insertStyleElement=s(),t()(B.Z,C),B.Z&&B.Z.locals&&B.Z.locals;var g=e(716),I={};I.styleTagTransform=p(),I.setAttributes=A(),I.insert=a().bind(null,"head"),I.domAPI=r(),I.insertStyleElement=s(),t()(g.Z,I),g.Z&&g.Z.locals&&g.Z.locals;var v=e(93),y={};y.styleTagTransform=p(),y.setAttributes=A(),y.insert=a().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=s(),t()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;const h=function(){localStorage.setItem("projectList",JSON.stringify(Z.projects))},j=function(){null!==localStorage.getItem("projectList")&&Z.setProjects(JSON.parse(localStorage.getItem("projectList")))},x={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let k;const w=new Uint8Array(16);function E(){if(!k&&(k="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!k))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return k(w)}const S=[];for(let n=0;n<256;++n)S.push((n+256).toString(16).slice(1));const P=function(n,t,e){if(x.randomUUID&&!t&&!n)return x.randomUUID();const o=(n=n||{}).random||(n.rng||E)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){e=e||0;for(let n=0;n<16;++n)t[e+n]=o[n];return t}return function(n,t=0){return(S[n[t+0]]+S[n[t+1]]+S[n[t+2]]+S[n[t+3]]+"-"+S[n[t+4]]+S[n[t+5]]+"-"+S[n[t+6]]+S[n[t+7]]+"-"+S[n[t+8]]+S[n[t+9]]+"-"+S[n[t+10]]+S[n[t+11]]+S[n[t+12]]+S[n[t+13]]+S[n[t+14]]+S[n[t+15]]).toLowerCase()}(o)};var T=function(n){return n&&n.trim().length>0};const U=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=P(),o=n,r=[],i=t;null!==n&&T(n)&&(o=n);var a=function(n){r.push(n),h()};return{addTask:a,get id(){return e},get name(){return o},set name(n){if(!T(n))throw new Error("Project name is invalid");o=n},get special(){return i},get tasks(){return r}}},Z=((Y=[]).push(U("Inbox",!0)),Y.push(U("Today",!0)),Y.push(U("Upcoming",!0)),{get projects(){return Y},addProject:function(n){Y.push(n),h()},deleteProject:function(n){var t=Y.findIndex((function(t){return t.id===n}));if(-1===t)throw Error("The project id ".concat(n," doesn't exist"));Y.splice(t,1),h()},setProjects:function(n){Y=n}}),D=(()=>{const n=document.querySelector(".project-view");return{openProject:t=>{n.innerHTML=`\n        <h2>${t}</h2>\n        `},cleanProjectView:()=>{n.innerHTML=""}}})(),q=e.p+"images/list.ead01c65c53d35779b52.png",L=e.p+"images/close.b3c9527613e6128a5b28.png";var Y;function M(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}var z,R,F,W,V,N,H,O,G,$,J,Q,X,_,K,nn,tn,en,on,rn,an=(z=document.getElementById("btn-inbox-project"),R=document.getElementById("btn-today-project"),F=document.getElementById("btn-upcoming-project"),W=document.getElementById("btn-add-project"),V=document.querySelector("#add-project-buttons .btn-add"),N=document.querySelector("#add-project-buttons .btn-cancel"),H=document.querySelector(".input-project"),O=document.querySelector("#list-projects"),$=function(){K(),en()},J=function(){var n=document.querySelector(".input-project"),t=U(n.value);Z.addProject(t),rn(t),nn(),tn(),_()},Q=function(){nn(),tn(),_()},X=function(n){var t=document.querySelector("#add-project-buttons .btn-add");T(n.target.value)&&"Enter"===n.key?J():T(n.target.value)?t.removeAttribute("disabled"):t.setAttribute("disabled","")},_=function(){document.querySelector(".input-project").value=""},K=function(){document.getElementById("add-project-form").setAttribute("active","")},nn=function(){var n=document.getElementById("add-project-form"),t=document.querySelector("#add-project-buttons .btn-add");n.removeAttribute("active"),t.setAttribute("disabled","")},tn=function(){document.getElementById("btn-add-project").setAttribute("active","")},en=function(){document.getElementById("btn-add-project").removeAttribute("active")},on=function(n,t){n.stopPropagation();var e=t.getAttribute("data-project");t.hasAttribute("active")&&D.cleanProjectView(),Z.deleteProject(e),document.querySelector("#list-projects").innerHTML="",dn.loadProjects()},{initNavLinkButtons:function(){z.addEventListener("click",(function(){D.openProject("Inbox"),G(z)})),R.addEventListener("click",(function(){D.openProject("Today"),G(R)})),F.addEventListener("click",(function(){D.openProject("Upcoming"),G(F)}))},setActiveProject:G=function(n){var t;(t=document.querySelectorAll(".btn-project"),function(n){if(Array.isArray(n))return M(n)}(t)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(t)||function(n,t){if(n){if("string"==typeof n)return M(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?M(n,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(n){return"btn-add-project"!==n.getAttribute("id")})).forEach((function(n){return n.removeAttribute("active")})),n.setAttribute("active","")},initAddProjectButtons:function(){W.addEventListener("click",$),H.addEventListener("keyup",X),V.addEventListener("click",J),N.addEventListener("click",Q)},addProjectButtons:rn=function(n){var t=document.createElement("button");t.classList.add("btn-project"),t.setAttribute("id","btn-".concat(n.name,"-project")),t.setAttribute("data-project","".concat(n.id)),t.innerHTML='\n            <div class="project-button-container">\n                <div class="project-button-sub-container">\n                    <img src="'.concat(q,'" alt="').concat(n.name,'"> <span class="project-name">').concat(n.name,"</span>\n                </div>\n\n            </div>\n        "),t.addEventListener("click",(function(e){D.openProject("".concat(n.name)),an.setActiveProject(t)})),O.appendChild(t);var e=document.createElement("div");e.innerHTML='<img class="btn-delete-project" src="'.concat(L,'" alt="Delete project ').concat(n.name,'"></img>'),t.appendChild(e),e.addEventListener("click",(function(n){return on(n,t)}))}});const cn=an;var An;const dn=((An=function(){j(),Z.projects.forEach((function(n){n.special||cn.addProjectButtons(n)}))})(),cn.initNavLinkButtons(),cn.initAddProjectButtons(),D.openProject("Inbox"),{loadProjects:An});Z.projects.forEach((function(n){console.log(n.name),n.tasks.forEach((function(n){return console.log(n)}))}))})()})();
//# sourceMappingURL=main.33b86c3296235f10439a.js.map