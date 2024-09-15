/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={187:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t){var i="function"==typeof Map?new Map:void 0;return e=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(t))return i.get(t);i.set(t,e)}function e(){return function(t,e,o){if(n())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var a=new(t.bind.apply(t,i));return o&&r(a,o.prototype),a}(t,arguments,o(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},e(t)}function n(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(n=function(){return!!t})()}function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}var i=function(e){function i(){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=function(e,r,i){return r=o(r),function(e,n){if(n&&("object"==t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(e,n()?Reflect.construct(r,i||[],o(e).constructor):r.apply(e,i))}(this,i)).attachShadow({mode:"open"}),e.shadowRoot.innerHTML='\n        <style>\n          .app-bar {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            background: #021526;\n            color: white;\n            border-radius: 5px;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n            padding: 10px;\n            height: 60px; /* added a fixed height */\n          }\n          .app-bar h1 {\n            font-size: 24px;\n            font-weight: bold;\n            margin: 0;\n          }\n        </style>\n        <div class="app-bar">\n          <h1>Write✍️</h1>\n        </div>\n      ',e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}(i,e),a=i,Object.defineProperty(a,"prototype",{writable:!1}),a;var a}(e(HTMLElement));customElements.define("app-bar",i)},128:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t){var i="function"==typeof Map?new Map:void 0;return e=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(t))return i.get(t);i.set(t,e)}function e(){return function(t,e,o){if(n())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var a=new(t.bind.apply(t,i));return o&&r(a,o.prototype),a}(t,arguments,o(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},e(t)}function n(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(n=function(){return!!t})()}function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}var i=function(e){function i(){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=function(e,r,i){return r=o(r),function(e,n){if(n&&("object"==t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(e,n()?Reflect.construct(r,i||[],o(e).constructor):r.apply(e,i))}(this,i)).attachShadow({mode:"open"}),e.shadowRoot.innerHTML='\n        <style>\n          :host {\n            display: block;\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0, 0, 0, 0.5);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            z-index: 1000;\n          }\n          .loader {\n            border: 8px solid #f3f3f3;\n            border-radius: 50%;\n            border-top: 8px solid #3498db;\n            width: 50px;\n            height: 50px;\n            -webkit-animation: spin 2s linear infinite;\n            animation: spin 2s linear infinite;\n          }\n          @-webkit-keyframes spin {\n            0% { -webkit-transform: rotate(0deg); }\n            100% { -webkit-transform: rotate(360deg); }\n          }\n          @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n          }\n        </style>\n        <div class="loader"></div>\n      ',e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}(i,e),a=i,Object.defineProperty(a,"prototype",{writable:!1}),a;var a}(e(HTMLElement));customElements.define("loading-indicator",i)},17:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t){var i="function"==typeof Map?new Map:void 0;return e=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(t))return i.get(t);i.set(t,e)}function e(){return function(t,e,o){if(n())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var a=new(t.bind.apply(t,i));return o&&r(a,o.prototype),a}(t,arguments,o(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},e(t)}function n(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(n=function(){return!!t})()}function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}var i=function(e){function i(){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=function(e,r,i){return r=o(r),function(e,n){if(n&&("object"==t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(e,n()?Reflect.construct(r,i||[],o(e).constructor):r.apply(e,i))}(this,i)).shadowDOM=e.attachShadow({mode:"open"}),e.shadowDOM.innerHTML='\n      <style>\n        :host {\n          display: block;\n          padding: 20px;\n          border: 1px solid #ccc;\n          border-radius: 10px;\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n        }\n        form {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          padding: 20px;\n          justify-content: center;\n          max-width: 400px;\n          margin: 40px auto;\n          background-color: #f9f9f9;\n          border: 1px solid #ddd;\n          border-radius: 10px;\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        }\n        @media (max-width: 768px) {\n          form {\n            max-width: 90%;\n            margin: 20px auto;\n          }\n        }\n        input[type="text"], textarea {\n          padding: 10px;\n          font-size: 16px;\n          border: 1px solid #ccc;\n          border-radius: 5px;\n          margin-bottom: 10px;\n          width: 100%;\n          box-sizing: border-box;\n        }\n        button {\n          background-color: #337ab7;\n          color: #fff;\n          padding: 10px 20px;\n          border: none;\n          border-radius: 5px;\n          cursor: pointer;\n        }\n        button:hover {\n          background-color: #23527c;\n        }\n      </style>\n      <form>\n        <input type="text" id="title" placeholder="Title">\n        <textarea id="body" name="body" placeholder="Isi"></textarea>\n        <button id="submit">Add Note</button>\n      </form>\n    ',e.form=e.shadowDOM.querySelector("form"),e.titleInput=e.shadowDOM.querySelector("#title"),e.bodyInput=e.shadowDOM.querySelector("#body"),e.submitButton=e.shadowDOM.querySelector("#submit"),e.submitButton.addEventListener("click",(function(t){t.preventDefault();var n=e.titleInput.value,r=e.bodyInput.value;e.dispatchEvent(new CustomEvent("noteAdded",{detail:{title:n,body:r}})),e.form.reset()})),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}(i,e),a=i,Object.defineProperty(a,"prototype",{writable:!1}),a;var a}(e(HTMLElement));customElements.define("note-form",i)},236:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}function r(t){var e="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var a=new(t.bind.apply(t,r));return n&&i(a,n.prototype),a}(t,arguments,a(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var c=function(n){function r(){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=function(e,n,r){return n=a(n),function(e,n){if(n&&("object"==t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(e,o()?Reflect.construct(n,r||[],a(e).constructor):n.apply(e,r))}(this,r)).attachShadow({mode:"open"}),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(r,n),c=r,(u=[{key:"connectedCallback",value:function(){var t=this,e=this.getAttribute("id"),n=this.getAttribute("title"),r=this.getAttribute("body");this.shadowRoot.innerHTML='\n      <style>\n        :host {\n          display: block;\n          padding: 20px;\n          border-bottom: 1px solid #ccc;\n          margin-bottom: 20px;\n        }\n        \n        :host h2 {\n          font-weight: bold;\n          margin-top: 0;\n        }\n        \n        :host p {\n          margin-bottom: 20px;\n        }\n        \n        :host button {\n          background-color: #ff3b3b;\n          color: #fff;\n          padding: 10px 20px;\n          border: none;\n          border-radius: 5px;\n          cursor: pointer;\n        }\n        \n        :host button:hover {\n          background-color: #ff0000;\n        }\n\n        #archive-button {\n         background-color: blue;\n         padding: 10px;\n         width: 80px;         \n        }\n\n        .button {\n          display: flex;\n          gap: 5px;\n          cursor: pointer;\n          justify-content: flex-end; \n        }\n\n    .note-item {\n    width: 100%; \n    background-color: #fff; \n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); \n    overflow: hidden;\n    transition: transform 0.3s ease, box-shadow 0.3s ease; \n  }\n  \n  .note-item:hover {\n    transform: translateY(-5px); \n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); \n  }\n  \n  .note-item h2 {\n    margin: 0;\n    padding: 15px;\n    font-size: 1.5rem;\n    color: #333; /* Darker text color */\n  }\n  \n  .note-item p {\n    padding: 0 15px 15px;\n    color: #666; /* Lighter text color */\n  }\n  \n  .note-item .button {\n    padding: 10px;\n    display: flex;\n    justify-content: flex-end;\n    gap: 10px;\n  }\n  \n        \n      </style>\n   \n        <div class="note-item">\n          <h2>'.concat(n,"</h2>\n          <p>").concat(r,'</p>\n          <div class="button">  \n            <button id="delete-button">Delete</button>\n            <button id="archive-button">Archive</button>\n          </div>\n        </div>\n    '),this.shadowRoot.querySelector("#delete-button").addEventListener("click",(function(){t.dispatchEvent(new CustomEvent("deleteNote",{detail:{id:e},bubbles:!0,composed:!0}))}))}}])&&e(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),c;var c,u}(r(HTMLElement));customElements.define("note-item",c)},106:(t,e,n)=>{"use strict";n.d(e,{A:()=>i});var r=n(314),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,".note-container {\r\n    border-radius: 10px;\r\n    margin-top: 1rem;\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 20px;\r\n\r\n  }\r\n  \r\n  @media (max-width: 767px) {\r\n    .note-container {\r\n      grid-template-columns: repeat(2, 1fr); /* 2 columns for mobile */\r\n    }\r\n  }\r\n  \r\n ",""]);const i=o},314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},72:(t,e,n)=>{"use strict";var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var c=t[o],u=e.base?c[0]+e.base:c[0],f=n[u]||0,l="".concat(u," ").concat(f);n[u]=f+1;var s=a(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==s?(i[s].references++,i[s].updater(p)):i.push({identifier:l,updater:h(p,e),references:1}),r.push(l)}return r}function u(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var f,l=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function s(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,y=0;function h(t,e){var n,r,o;if(e.singleton){var i=y++;n=d||(d=u(e)),r=s.bind(null,n,i,!1),o=s.bind(null,n,i,!0)}else n=u(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var u=c(t,e),f=0;f<n.length;f++){var l=a(n[f]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=u}}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(72),e=n.n(t),r=n(106);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function a(){a=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",f=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),c=new A(r||[]);return i(a,"_invoke",{value:P(t,n,c)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var y="suspendedStart",h="suspendedYield",b="executing",v="completed",m={};function g(){}function w(){}function x(){}var O={};s(O,u,(function(){return this}));var j=Object.getPrototypeOf,S=j&&j(j(R([])));S&&S!==n&&r.call(S,u)&&(O=S);var E=x.prototype=g.prototype=Object.create(O);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(i,a,c,u){var f=d(t[i],t,a);if("throw"!==f.type){var l=f.arg,s=l.value;return s&&"object"==o(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(s).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(f.arg)}var a;i(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function P(e,n,r){var o=y;return function(i,a){if(o===b)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=T(c,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===y)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=b;var f=d(e,n,r);if("normal"===f.type){if(o=r.done?v:h,f.arg===m)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(o=v,r.method="throw",r.arg=f.arg)}}}function T(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=d(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function R(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(o(e)+" is not iterable")}return w.prototype=x,i(E,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:w,configurable:!0}),w.displayName=s(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},L(_.prototype),s(_.prototype,f,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new _(p(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),s(E,l,"Generator"),s(E,u,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=R,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),f=r.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;M(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:R(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}function c(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,u,"next",t)}function u(t){c(i,r,o,a,u,"throw",t)}a(void 0)}))}}e()(r.A,{insert:"head",singleton:!1}),r.A.locals,n(17),n(236),n(187),n(128);var f="https://notes-api.dicoding.dev/v2";function l(t){var e=document.querySelector(".note-container");e.innerHTML="",t.forEach((function(t){var n=document.createElement("note-item");n.setAttribute("id",t.id),n.setAttribute("title",t.title),n.setAttribute("body",t.body),e.appendChild(n)}))}function s(){return(s=u(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.querySelector(".note-container").innerHTML="<loading-indicator></loading-indicator>",t.prev=1,t.next=4,fetch("".concat(f,"/notes"));case 4:return e=t.sent,t.next=7,e.json();case 7:l(t.sent.data),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),alert("An error occurred while fetching notes. Please try again later.");case 15:return t.prev=15,n=void 0,(n=document.querySelector("loading-indicator"))&&n.remove(),t.finish(15);case 18:case"end":return t.stop()}var n}),t,null,[[1,12,15,18]])})))).apply(this,arguments)}function p(){return(p=u(a().mark((function t(e,n){var r,o,c,u,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(f,"/notes"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e,body:n})});case 3:return r=t.sent,t.next=6,r.json();case 6:o=t.sent,c=o.data,u=document.querySelectorAll("note-item"),s=Array.from(u).map((function(t){return{id:t.getAttribute("id"),title:t.getAttribute("title"),body:t.getAttribute("body")}})),l([c].concat(function(t){if(Array.isArray(t))return i(t)}(a=s)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(a)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error(t.t0);case 16:case"end":return t.stop()}var a}),t,null,[[0,13]])})))).apply(this,arguments)}function d(){return(d=u(a().mark((function t(e,n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(f,"/notes/").concat(e),{method:"DELETE"});case 3:t.sent.ok?(n.remove(),alert("Note deleted successfully.")):alert("Failed to delete note. Please try again."),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Failed to delete note:",t.t0),alert("An error occurred while deleting the note. Please try again later.");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){!function(){s.apply(this,arguments)}(),document.querySelector("note-form").addEventListener("noteAdded",(function(t){var e=t.detail;!function(t,e){p.apply(this,arguments)}(e.title,e.body)})),document.querySelector(".note-container").addEventListener("deleteNote",(function(t){!function(t,e){d.apply(this,arguments)}(t.detail.id,t.target.closest("note-item"))}))}))})()})();