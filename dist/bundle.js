/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={267:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},187:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t){var i="function"==typeof Map?new Map:void 0;return e=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(t))return i.get(t);i.set(t,e)}function e(){return function(t,e,o){if(n())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var a=new(t.bind.apply(t,i));return o&&r(a,o.prototype),a}(t,arguments,o(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},e(t)}function n(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(n=function(){return!!t})()}function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}var i=function(e){function i(){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=function(e,r,i){return r=o(r),function(e,n){if(n&&("object"==t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(e,n()?Reflect.construct(r,i||[],o(e).constructor):r.apply(e,i))}(this,i)).attachShadow({mode:"open"}),e.shadowRoot.innerHTML='\n        <style>\n          .app-bar {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            background: #021526;\n            color: white;\n            border-radius: 5px;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n            padding: 10px;\n            height: 60px; /* added a fixed height */\n          }\n          .app-bar h1 {\n            font-size: 24px;\n            font-weight: bold;\n            margin: 0;\n          }\n        </style>\n        <div class="app-bar">\n          <h1>Write✍️</h1>\n        </div>\n      ',e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}(i,e),a=i,Object.defineProperty(a,"prototype",{writable:!1}),a;var a}(e(HTMLElement));customElements.define("app-bar",i)},17:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t){var i="function"==typeof Map?new Map:void 0;return e=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(t))return i.get(t);i.set(t,e)}function e(){return function(t,e,o){if(n())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var a=new(t.bind.apply(t,i));return o&&r(a,o.prototype),a}(t,arguments,o(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},e(t)}function n(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(n=function(){return!!t})()}function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}var i=function(e){function i(){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=function(e,r,i){return r=o(r),function(e,n){if(n&&("object"==t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(e,n()?Reflect.construct(r,i||[],o(e).constructor):r.apply(e,i))}(this,i)).shadowDOM=e.attachShadow({mode:"open"}),e.shadowDOM.innerHTML='\n        <style>\n         :host {\n            display: block;\n            padding: 20px;\n            border: 1px solid #ccc;\n            border-radius: 10px;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n        }\n\n        form {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            padding: 20px;\n            justify-content: center;\n            max-width: 400px; /* changed from width to max-width */\n            margin: 40px auto;\n            background-color: #f9f9f9; /* added a light gray background */\n            border: 1px solid #ddd; /* added a border */\n            border-radius: 10px; /* added a border radius */\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* added a box shadow */\n         }\n\n            @media (max-width: 768px) {\n            form {\n                max-width: 90%; /* changed from 400px to 90% for better responsiveness */\n                margin: 20px auto; /* reduced margin for smaller screens */\n            }\n         }\n\n            input[type="text"], textarea {\n            padding: 10px;\n            font-size: 16px;\n            border: 1px solid #ccc;\n            border-radius: 5px;\n            margin-bottom: 10px;\n            width: 100%;\n            box-sizing: border-box; /* added box-sizing for better layout */\n          }\n\n            button {\n            background-color: #337ab7; /* changed from blue to a more muted blue */\n            color: #fff;\n            padding: 10px 20px;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n         }\n\n            button:hover {\n            background-color: #23527c; /* changed from skyblue to a darker blue */\n            color: #fff;\n          }\n        </style>\n        <form>\n          <input type="text" id="title" placeholder="Title">\n          <textarea id="body" name="body" placeholder="Isi"></textarea>\n          <button id="submit">Add Note</button>\n        </form>\n      ',e.form=e.shadowDOM.querySelector("form"),e.titleInput=e.shadowDOM.querySelector("#title"),e.bodyInput=e.shadowDOM.querySelector("#body"),e.submitButton=e.shadowDOM.querySelector("#submit"),e.submitButton.addEventListener("click",(function(t){t.preventDefault();var n=e.titleInput.value,r=e.bodyInput.value;e.dispatchEvent(new CustomEvent("noteAdded",{detail:{title:n,body:r}})),e.form.reset()})),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}(i,e),a=i,Object.defineProperty(a,"prototype",{writable:!1}),a;var a}(e(HTMLElement));customElements.define("note-form",i)},236:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}function r(t){var e="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var a=new(t.bind.apply(t,r));return n&&i(a,n.prototype),a}(t,arguments,a(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var c=function(n){function r(){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=function(e,n,r){return n=a(n),function(e,n){if(n&&("object"==t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(e,o()?Reflect.construct(n,r||[],a(e).constructor):n.apply(e,r))}(this,r)).attachShadow({mode:"open"}),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(r,n),c=r,(u=[{key:"connectedCallback",value:function(){var t=this,e=this.getAttribute("id"),n=this.getAttribute("title"),r=this.getAttribute("body");this.shadowRoot.innerHTML='\n      <style>\n        :host {\n          display: block;\n          padding: 20px;\n          border-bottom: 1px solid #ccc;\n          margin-bottom: 20px;\n        }\n        \n        :host:last-child {\n          border-bottom: none;\n        }\n        \n        :host h2 {\n          font-weight: bold;\n          margin-top: 0;\n        }\n        \n        :host p {\n          margin-bottom: 20px;\n        }\n        \n        :host button {\n          background-color: #ff3b3b;\n          color: #fff;\n          padding: 10px 20px;\n          border: none;\n          border-radius: 5px;\n          cursor: pointer;\n        }\n        \n        :host button:hover {\n          background-color: #ff0000;\n        }\n\n        #archive-button {\n         background-color: blue;\n         padding: 10px;\n         width: 80px;\n         \n        }\n        \n        .note-item {\n          background-color: #fff;\n          border: 1px solid #ddd;\n          border-radius: 10px;\n          padding: 20px;\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        }\n      </style>\n      <div class="note-item">\n        <h2>'.concat(n,"</h2>\n        <p>").concat(r,'</p>\n        <button id="delete-button">Delete</button>\n        <button id="archive-button">Archive</button>\n      </div>\n    '),this.shadowRoot.querySelector("#delete-button").addEventListener("click",(function(){console.log("Dispatching deleteNote event for ID:",e),t.dispatchEvent(new CustomEvent("deleteNote",{detail:{id:e}}))}))}}])&&e(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),c;var c,u}(r(HTMLElement));customElements.define("note-item",c)},106:(t,e,n)=>{"use strict";n.d(e,{A:()=>i});var r=n(267),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"",""]);const i=o},72:(t,e,n)=>{"use strict";var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var c=t[o],u=e.base?c[0]+e.base:c[0],l=n[u]||0,s="".concat(u," ").concat(l);n[u]=l+1;var f=a(s),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:s,updater:y(d,e),references:1}),r.push(s)}return r}function u(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,s=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function f(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=s(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var p=null,h=0;function y(t,e){var n,r,o;if(e.singleton){var i=h++;n=p||(p=u(e)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(e),r=d.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var u=c(t,e),l=0;l<n.length;l++){var s=a(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=u}}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=[{id:"notes-jT-jjsyz61J8XKiI",title:"Welcome to Notes, Dimas!",body:"Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",createdAt:"2022-07-28T10:03:12.594Z",archived:!1},{id:"notes-aB-cdefg12345",title:"Meeting Agenda",body:"Discuss project updates and assign tasks for the upcoming week.",createdAt:"2022-08-05T15:30:00.000Z",archived:!1},{id:"notes-XyZ-789012345",title:"Shopping List",body:"Milk, eggs, bread, fruits, and vegetables.",createdAt:"2022-08-10T08:45:23.120Z",archived:!1},{id:"notes-1a-2b3c4d5e6f",title:"Personal Goals",body:"Read two books per month, exercise three times a week, learn a new language.",createdAt:"2022-08-15T18:12:55.789Z",archived:!1},{id:"notes-LMN-456789",title:"Recipe: Spaghetti Bolognese",body:"Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",createdAt:"2022-08-20T12:30:40.200Z",archived:!1},{id:"notes-QwErTyUiOp",title:"Workout Routine",body:"Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",createdAt:"2022-08-25T09:15:17.890Z",archived:!1},{id:"notes-abcdef-987654",title:"Book Recommendations",body:"1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",createdAt:"2022-09-01T14:20:05.321Z",archived:!1},{id:"notes-zyxwv-54321",title:"Daily Reflections",body:"Write down three positive things that happened today and one thing to improve tomorrow.",createdAt:"2022-09-07T20:40:30.150Z",archived:!1},{id:"notes-poiuyt-987654",title:"Travel Bucket List",body:"1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",createdAt:"2022-09-15T11:55:44.678Z",archived:!1},{id:"notes-asdfgh-123456",title:"Coding Projects",body:"1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",createdAt:"2022-09-20T17:10:12.987Z",archived:!1},{id:"notes-5678-abcd-efgh",title:"Project Deadline",body:"Complete project tasks by the deadline on October 1st.",createdAt:"2022-09-28T14:00:00.000Z",archived:!1},{id:"notes-9876-wxyz-1234",title:"Health Checkup",body:"Schedule a routine health checkup with the doctor.",createdAt:"2022-10-05T09:30:45.600Z",archived:!1},{id:"notes-qwerty-8765-4321",title:"Financial Goals",body:"1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",createdAt:"2022-10-12T12:15:30.890Z",archived:!1},{id:"notes-98765-54321-12345",title:"Holiday Plans",body:"Research and plan for the upcoming holiday destination.",createdAt:"2022-10-20T16:45:00.000Z",archived:!1},{id:"notes-1234-abcd-5678",title:"Language Learning",body:"Practice Spanish vocabulary for 30 minutes every day.",createdAt:"2022-10-28T08:00:20.120Z",archived:!1}],e=n(72),r=n.n(e),o=n(106);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function c(){c=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new M(r||[]);return o(a,"_invoke",{value:k(t,n,c)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var h="suspendedStart",y="suspendedYield",b="executing",v="completed",m={};function g(){}function w(){}function x(){}var O={};f(O,u,(function(){return this}));var S=Object.getPrototypeOf,j=S&&S(S(C([])));j&&j!==n&&r.call(j,u)&&(O=j);var E=x.prototype=g.prototype=Object.create(O);function T(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,a,c,u){var l=p(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==i(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function k(e,n,r){var o=h;return function(i,a){if(o===b)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=A(c,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=b;var l=p(e,n,r);if("normal"===l.type){if(o=r.done?v:y,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=v,r.method="throw",r.arg=l.arg)}}}function A(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,A(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=p(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(i(e)+" is not iterable")}return w.prototype=x,o(E,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},T(L.prototype),f(L.prototype,l,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new L(d(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},T(E),f(E,s,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=C,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}function u(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){u(i,r,o,a,c,"next",t)}function c(t){u(i,r,o,a,c,"throw",t)}a(void 0)}))}}r()(o.A,{insert:"head",singleton:!1}),o.A.locals,n(17),n(236),n(187);var s="https://notes-api.dicoding.dev/v2";function f(t){var e=document.querySelector(".notes-container");e.innerHTML="",t.forEach((function(t){var n=document.createElement("note-item");n.setAttribute("id",t.id),n.setAttribute("title",t.title),n.setAttribute("body",t.body),e.appendChild(n)}))}function d(){return(d=l(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(s,"/notes"));case 3:return e=t.sent,t.next=6,e.json();case 6:f(t.sent),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),alert("An error occurred while fetching notes. Please try again later.");case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function p(t,e){return h.apply(this,arguments)}function h(){return(h=l(c().mark((function e(n,r){var o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/notes"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n,body:r})});case 3:return o=e.sent,e.next=6,o.json();case 6:f([e.sent].concat(function(t){if(Array.isArray(t))return a(t)}(i=t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(i)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}var i}),e,null,[[0,10]])})))).apply(this,arguments)}function y(){return(y=l(c().mark((function t(e,n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("Attempting to delete note with ID: ".concat(e)),t.next=4,fetch("".concat(s,"/notes/").concat(e),{method:"DELETE"});case 4:n.remove(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Failed to delete note:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){!function(){d.apply(this,arguments)}(),document.querySelector("#noteFormModal"),document.querySelector("note-form").addEventListener("noteAdded",(function(t){var e=t.detail;p(e.title,e.body)})),document.querySelector(".notes-container").addEventListener("deleteNote",(function(t){var e=t.detail.id,n=t.target;console.log("Note to be deleted:",e),function(t,e){y.apply(this,arguments)}(e,n)}))})),document.querySelector("note-form").addEventListener("DOMContentLoaded",(function(){document.querySelector("#submit").addEventListener("click",(function(t){t.preventDefault(),p(document.querySelector("#title").value,document.querySelector("#body").value),noteFormModal.style.display="none"}))}))})()})();