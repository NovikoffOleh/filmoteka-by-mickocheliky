!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};function n(t,e,o,n,i,a,r){try{var s=t[a](r),l=s.value}catch(t){return void o(t)}s.done?e(l):Promise.resolve(l).then(n,i)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return function(){var e=this,o=arguments;return new Promise((function(i,a){var r=t.apply(e,o);function s(t){n(r,i,a,s,l,"next",t)}function l(t){n(r,i,a,s,l,"throw",t)}s(void 0)}))}};var i={},a=function(t){"use strict";var e,o=Object.prototype,n=o.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",r=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,o){return t[e]=o}}function c(t,e,o,n){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),r=new E(n||[]);return a._invoke=function(t,e,o){var n=m;return function(i,a){if(n===u)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw a;return T()}for(o.method=i,o.arg=a;;){var r=o.delegate;if(r){var s=I(r,o);if(s){if(s===y)continue;return s}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(n===m)throw n=d,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n=u;var l=f(t,e,o);if("normal"===l.type){if(n=o.done?d:p,l.arg===y)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(n=d,o.method="throw",o.arg=l.arg)}}}(t,o,r),a}function f(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var m="suspendedStart",p="suspendedYield",u="executing",d="completed",y={};function h(){}function x(){}function g(){}var v={};l(v,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(z([])));w&&w!==o&&n.call(w,a)&&(v=w);var k=g.prototype=h.prototype=Object.create(v);function N(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function o(i,a,r,s){var l=f(t[i],t,a);if("throw"!==l.type){var c=l.arg,m=c.value;return m&&"object"==typeof m&&n.call(m,"__await")?e.resolve(m.__await).then((function(t){o("next",t,r,s)}),(function(t){o("throw",t,r,s)})):e.resolve(m).then((function(t){c.value=t,r(c)}),(function(t){return o("throw",t,r,s)}))}s(l.arg)}var i;this._invoke=function(t,n){function a(){return new e((function(e,i){o(t,n,e,i)}))}return i=i?i.then(a,a):a()}}function I(t,o){var n=t.iterator[o.method];if(n===e){if(o.delegate=null,"throw"===o.method){if(t.iterator.return&&(o.method="return",o.arg=e,I(t,o),"throw"===o.method))return y;o.method="throw",o.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var i=f(n,t.iterator,o.arg);if("throw"===i.type)return o.method="throw",o.arg=i.arg,o.delegate=null,y;var a=i.arg;return a?a.done?(o[t.resultName]=a.value,o.next=t.nextLoc,"return"!==o.method&&(o.method="next",o.arg=e),o.delegate=null,y):a:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,y)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function z(t){if(t){var o=t[a];if(o)return o.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,r=function o(){for(;++i<t.length;)if(n.call(t,i))return o.value=t[i],o.done=!1,o;return o.value=e,o.done=!0,o};return r.next=r}}return{next:T}}function T(){return{value:e,done:!0}}return x.prototype=g,l(k,"constructor",g),l(g,"constructor",x),x.displayName=l(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},N(C.prototype),l(C.prototype,r,(function(){return this})),t.AsyncIterator=C,t.async=function(e,o,n,i,a){void 0===a&&(a=Promise);var r=new C(c(e,o,n,i),a);return t.isGeneratorFunction(o)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},N(k),l(k,s,"Generator"),l(k,a,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var o in t)e.push(o);return e.reverse(),function o(){for(;e.length;){var n=e.pop();if(n in t)return o.value=n,o.done=!1,o}return o.done=!0,o}},t.values=z,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var o in this)"t"===o.charAt(0)&&n.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var o=this;function i(n,i){return s.type="throw",s.arg=t,o.next=n,i&&(o.method="next",o.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a],s=r.completion;if("root"===r.tryLoc)return i("end");if(r.tryLoc<=this.prev){var l=n.call(r,"catchLoc"),c=n.call(r,"finallyLoc");if(l&&c){if(this.prev<r.catchLoc)return i(r.catchLoc,!0);if(this.prev<r.finallyLoc)return i(r.finallyLoc)}else if(l){if(this.prev<r.catchLoc)return i(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return i(r.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var r=a?a.completion:{};return r.type=t,r.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(r)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),A(o),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var n=o.completion;if("throw"===n.type){var i=n.arg;A(o)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,o,n){return this.delegate={iterator:z(t),resultName:o,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(i);try{regeneratorRuntime=a}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var s={};function l(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(t,e,o){e&&l(t.prototype,e);o&&l(t,o);return t};var c=function(){"use strict";function e(){t(r)(this,e),this.currentPage=1}return t(s)(e,[{key:"getPopularMovieFromServer",value:function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("197007a676a4d3e84c6bdb6f21b18a1a","&page=").concat(this.page)).then((function(t){return t.json()}))}},{key:"getSubmitMovieFromServer",value:function(t){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("197007a676a4d3e84c6bdb6f21b18a1a","&page=").concat(this.page,"&query=").concat(t)).then((function(t){return t.json()}))}},{key:"page",get:function(){return this.currentPage},set:function(t){this.currentPage=t}}]),e}(),f=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],m=document.querySelector(".film-list"),p=new c;function u(){return u=t(o)(t(i).mark((function e(){var o,n,a=arguments;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=a.length>0&&void 0!==a[0]?a[0]:1,p.page=o,t.next=4,p.getPopularMovieFromServer().then((function(t){return t}));case 4:n=t.sent,m.innerHTML="",d(n.results);case 7:case"end":return t.stop()}}),e)}))),u.apply(this,arguments)}function d(t){var e=t.map((function(t){var e=t.id,o=t.poster_path,n=t.title,i=t.genre_ids,a=t.release_date,r='src="https://www.themoviedb.org/t/p/w500/'.concat(o,'"'),s=function(t){var e=[],o=!0,n=!1,i=void 0;try{for(var a,r=function(t,o){var n=o.value;f.map((function(t){n===t.id&&e.push(t.name)}))},s=t[Symbol.iterator]();!(o=(a=s.next()).done);o=!0)r(s,a)}catch(t){n=!0,i=t}finally{try{o||null==s.return||s.return()}finally{if(n)throw i}}return e}(i);return 1===s.length?'<li class="film-item" id="'.concat(e,'">\n    <img width="280" class="film-img" ').concat(r,'" alt="').concat(n,'" />\n    <p class="film-name">\n      ').concat(n,' <br />\n      <span class="film-tag">').concat(s[0]," | ").concat(a.slice(0,4),"</span>\n    </p>\n  </li>"):s.length>1&&s.length<3?'<li class="film-item" id="'.concat(e,'">\n    <img width="280" class="film-img" ').concat(r,'" alt="').concat(n,'" />\n    <p class="film-name">\n      ').concat(n,' <br />\n      <span class="film-tag">').concat(s[0],", ").concat(s[1]," | ").concat(a.slice(0,4),"</span>\n    </p>\n  </li>"):s.length>2?'<li class="film-item" id="'.concat(e,'">\n    <img width="280" class="film-img" ').concat(r,'" alt="').concat(n,'" />\n    <p class="film-name">\n      ').concat(n,' <br />\n      <span class="film-tag">').concat(s[0],", ").concat(s[1],", Other | ").concat(a.slice(0,4),"</span>\n    </p>\n  </li>"):void 0})).join("");m.insertAdjacentHTML("beforeend",e)}!function(){u.apply(this,arguments)}();var y,h,x={};y=void 0!==e?e:"undefined"!=typeof window?window:x,h=function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var e,o="Success",n="Failure",i="Warning",a="Info",r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(e){return e||(e="head"),null!==t.document[e]||(s('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,o=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],o++);for(var n=function(o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e&&"[object Object]"===Object.prototype.toString.call(o[n])?t[n]=c(t[n],o[n]):t[n]=o[n])};o<arguments.length;o++)n(arguments[o]);return t},f=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},m=0,p=function(s,f,p,d){if(!l("body"))return!1;e||u.Notify.init({});var y=c(!0,e,{});if("object"==typeof p&&!Array.isArray(p)||"object"==typeof d&&!Array.isArray(d)){var h={};"object"==typeof p?h=p:"object"==typeof d&&(h=d),e=c(!0,e,h)}var x,g,v=e[s.toLocaleLowerCase("en")];m++,"string"!=typeof f&&(f="Notiflix "+s),e.plainText&&(x=f,(g=t.document.createElement("div")).innerHTML=x,f=g.textContent||g.innerText||""),!e.plainText&&f.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),f='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),f.length>e.messageMaxLength&&(f=f.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(v.fontAwesomeIconColor=v.background),e.cssAnimation||(e.cssAnimationDuration=0);var b=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(b.id=r.wrapID,b.style.width=e.width,b.style.zIndex=e.zindex,b.style.opacity=e.opacity,"center-center"===e.position?(b.style.left=e.distance,b.style.top=e.distance,b.style.right=e.distance,b.style.bottom=e.distance,b.style.margin="auto",b.classList.add("nx-flex-center-center"),b.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",b.style.display="flex",b.style.flexWrap="wrap",b.style.flexDirection="column",b.style.justifyContent="center",b.style.alignItems="center",b.style.pointerEvents="none"):"center-top"===e.position?(b.style.left=e.distance,b.style.right=e.distance,b.style.top=e.distance,b.style.bottom="auto",b.style.margin="auto"):"center-bottom"===e.position?(b.style.left=e.distance,b.style.right=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.margin="auto"):"right-bottom"===e.position?(b.style.right=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.left="auto"):"left-top"===e.position?(b.style.left=e.distance,b.style.top=e.distance,b.style.right="auto",b.style.bottom="auto"):"left-bottom"===e.position?(b.style.left=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.right="auto"):(b.style.right=e.distance,b.style.top=e.distance,b.style.left="auto",b.style.bottom="auto"),e.backOverlay){var w=t.document.getElementById(r.overlayID)||t.document.createElement("div");w.id=r.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=e.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=v.backOverlayColor||e.backOverlayColor,w.className=e.cssAnimation?"nx-with-animation":"",w.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(w)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(b);var k=t.document.createElement("div");k.id=e.ID+"-"+m,k.className=e.className+" "+v.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof p?"nx-with-close-button":"")+" "+("function"==typeof p?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=v.textColor,k.style.background=v.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var N="";if(e.closeButton&&"function"!=typeof p&&(N='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+v.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+v.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+v.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+f+"</span>"+(e.closeButton?N:"");else{var C="";s===o?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===n?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===i?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=C+'<span class="nx-message nx-with-icon">'+f+"</span>"+(e.closeButton?N:"")}else k.innerHTML='<span class="nx-message">'+f+"</span>"+(e.closeButton?N:"");if("left-bottom"===e.position||"right-bottom"===e.position){var I=t.document.getElementById(r.wrapID);I.insertBefore(k,I.firstChild)}else t.document.getElementById(r.wrapID).appendChild(k);var L=t.document.getElementById(k.id);if(L){var A,E,z=function(){L.classList.add("nx-remove");var e=t.document.getElementById(r.overlayID);e&&b.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(A)},T=function(){if(L&&null!==L.parentNode&&L.parentNode.removeChild(L),b.childElementCount<=0&&null!==b.parentNode){b.parentNode.removeChild(b);var e=t.document.getElementById(r.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(E)};if(e.closeButton&&"function"!=typeof p&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){z();var t=setTimeout((function(){T(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof p||e.clickToClose)&&L.addEventListener("click",(function(){"function"==typeof p&&p(),z();var t=setTimeout((function(){T(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof p){var W=function(){A=setTimeout((function(){z()}),e.timeout),E=setTimeout((function(){T()}),e.timeout+e.cssAnimationDuration)};W(),e.pauseOnHover&&(L.addEventListener("mouseenter",(function(){L.classList.add("nx-paused"),clearTimeout(A),clearTimeout(E)})),L.addEventListener("mouseleave",(function(){L.classList.remove("nx-paused"),W()})))}}if(e.showOnlyTheLastOne&&m>0)for(var O=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+m+"])"),S=0;S<O.length;S++){var M=O[S];null!==M.parentNode&&M.parentNode.removeChild(M)}e=c(!0,e,y)},u={Notify:{init:function(o){e=c(!0,r,o),function(e,o){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(o)){var n=t.document.createElement("style");n.id=o,n.innerHTML=e(),t.document.head.appendChild(n)}}(f,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return s("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,n){p(o,t,e,n)},failure:function(t,e,o){p(n,t,e,o)},warning:function(t,e,o){p(i,t,e,o)},info:function(t,e,o){p(a,t,e,o)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:u.Notify}):{Notify:u.Notify}},"function"==typeof define&&define.amd?define([],(function(){return h(y)})):"object"==typeof x?x=h(y):y.Notiflix=h(y);var g=new c,v=document.querySelector(".home_header-form"),b=document.querySelector(".home_header-btn"),w=document.querySelector(".film-list");function k(){return(k=t(o)(t(i).mark((function e(o){var n;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o.preventDefault(),Boolean(v[0].value.trim())){t.next=5;break}return b.style.visibility="visible",x.Notify.warning("Введіть назву фільму."),t.abrupt("return");case 5:return t.next=7,g.getSubmitMovieFromServer(v[0].value.trim()).then((function(t){return t}));case 7:if(0!=(n=t.sent).total_results){t.next=11;break}return x.Notify.warning("Такого фільму немає."),t.abrupt("return");case 11:w.innerHTML="",N(n.results);case 13:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function N(t){var e=t.map((function(t){var e=t.id,o=t.poster_path,n=t.title,i=t.genre_ids,a=t.release_date,r='src="https://www.themoviedb.org/t/p/w500/'.concat(o,'"'),s=function(t){var e=[],o=!0,n=!1,i=void 0;try{for(var a,r=function(t,o){var n=o.value;C.map((function(t){n===t.id&&e.push(t.name)}))},s=t[Symbol.iterator]();!(o=(a=s.next()).done);o=!0)r(s,a)}catch(t){n=!0,i=t}finally{try{o||null==s.return||s.return()}finally{if(n)throw i}}return e}(i);return 1===s.length?'<li class="film-item" id="'.concat(e,'">\n    <img width="280" class="film-img" ').concat(r,'" alt="').concat(n,'" />\n    <p class="film-name">\n      ').concat(n,' <br />\n      <span class="film-tag">').concat(s[0]," | ").concat(a.slice(0,4),"</span>\n    </p>\n  </li>"):s.length>1&&s.length<3?'<li class="film-item" id="'.concat(e,'">\n\t\t  <img width="280" class="film-img" ').concat(r,'" alt="').concat(n,'" />\n    <p class="film-name">\n      ').concat(n,' <br />\n      <span class="film-tag">').concat(s[0],", ").concat(s[1]," | ").concat(a.slice(0,4),"</span>\n    </p>\n  </li>"):s.length>2?'<li class="film-item" id="'.concat(e,'">\n    <img width="280" class="film-img" ').concat(r,'" alt="').concat(n,'" />\n    <p class="film-name">\n      ').concat(n,' <br />\n      <span class="film-tag">').concat(s[0],", ").concat(s[1],", Other | ").concat(a.slice(0,4),"</span>\n    </p>\n  </li>"):void 0})).join("");w.insertAdjacentHTML("beforeend",e)}v.addEventListener("submit",(function(t){return k.apply(this,arguments)}));var C=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]}();
//# sourceMappingURL=index.31d66141.js.map
