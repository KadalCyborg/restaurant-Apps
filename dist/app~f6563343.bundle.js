/*! For license information please see app~f6563343.bundle.js.LICENSE.txt */
(()=>{"use strict";var n,e={584:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(186),A=t(402);function o(n){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o(n)}function i(){i=function(){return e};var n,e={},t=Object.prototype,r=t.hasOwnProperty,A=Object.defineProperty||function(n,e,t){n[e]=t.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function d(n,e,t){return Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),n[e]}try{d({},"")}catch(n){d=function(n,e,t){return n[e]=t}}function p(n,e,t,r){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),a=new G(r||[]);return A(i,"_invoke",{value:z(n,t,a)}),i}function C(n,e,t){try{return{type:"normal",arg:n.call(e,t)}}catch(n){return{type:"throw",arg:n}}}e.wrap=p;var u="suspendedStart",h="suspendedYield",f="executing",g="completed",m={};function x(){}function y(){}function b(){}var v={};d(v,s,(function(){return this}));var w=Object.getPrototypeOf,B=w&&w(w(Y([])));B&&B!==t&&r.call(B,s)&&(v=B);var E=b.prototype=x.prototype=Object.create(v);function k(n){["next","throw","return"].forEach((function(e){d(n,e,(function(n){return this._invoke(e,n)}))}))}function _(n,e){function t(A,i,a,s){var c=C(n[A],n,i);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==o(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(n){t("next",n,a,s)}),(function(n){t("throw",n,a,s)})):e.resolve(d).then((function(n){l.value=n,a(l)}),(function(n){return t("throw",n,a,s)}))}s(c.arg)}var i;A(this,"_invoke",{value:function(n,r){function A(){return new e((function(e,A){t(n,r,e,A)}))}return i=i?i.then(A,A):A()}})}function z(e,t,r){var A=u;return function(o,i){if(A===f)throw new Error("Generator is already running");if(A===g){if("throw"===o)throw i;return{value:n,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=j(a,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(A===u)throw A=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);A=f;var c=C(e,t,r);if("normal"===c.type){if(A=r.done?g:h,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(A=g,r.method="throw",r.arg=c.arg)}}}function j(e,t){var r=t.method,A=e.iterator[r];if(A===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=C(A,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,m;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,m):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function F(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function L(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function G(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(F,this),this.reset(!0)}function Y(e){if(e||""===e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var A=-1,i=function t(){for(;++A<e.length;)if(r.call(e,A))return t.value=e[A],t.done=!1,t;return t.value=n,t.done=!0,t};return i.next=i}}throw new TypeError(o(e)+" is not iterable")}return y.prototype=b,A(E,"constructor",{value:b,configurable:!0}),A(b,"constructor",{value:y,configurable:!0}),y.displayName=d(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(n){var e="function"==typeof n&&n.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,b):(n.__proto__=b,d(n,l,"GeneratorFunction")),n.prototype=Object.create(E),n},e.awrap=function(n){return{__await:n}},k(_.prototype),d(_.prototype,c,(function(){return this})),e.AsyncIterator=_,e.async=function(n,t,r,A,o){void 0===o&&(o=Promise);var i=new _(p(n,t,r,A),o);return e.isGeneratorFunction(t)?i:i.next().then((function(n){return n.done?n.value:i.next()}))},k(E),d(E,l,"Generator"),d(E,s,(function(){return this})),d(E,"toString",(function(){return"[object Generator]"})),e.keys=function(n){var e=Object(n),t=[];for(var r in e)t.push(r);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=Y,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function A(r,A){return a.type="throw",a.arg=e,t.next=r,A&&(t.method="next",t.arg=n),!!A}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return A("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return A(i.catchLoc,!0);if(this.prev<i.finallyLoc)return A(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return A(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return A(i.finallyLoc)}}}},abrupt:function(n,e){for(var t=this.tryEntries.length-1;t>=0;--t){var A=this.tryEntries[t];if(A.tryLoc<=this.prev&&r.call(A,"finallyLoc")&&this.prev<A.finallyLoc){var o=A;break}}o&&("break"===n||"continue"===n)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=n,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(n,e){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&e&&(this.next=e),m},finish:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),L(t),m}},catch:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===n){var r=t.completion;if("throw"===r.type){var A=r.arg;L(t)}return A}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:Y(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),m}},e}function a(n,e,t,r,A,o,i){try{var a=n[o](i),s=a.value}catch(n){return void t(n)}a.done?e(s):Promise.resolve(s).then(r,A)}function s(n){return function(){var e=this,t=arguments;return new Promise((function(r,A){var o=n.apply(e,t);function i(n){a(o,r,A,i,s,"next",n)}function s(n){a(o,r,A,i,s,"throw",n)}i(void 0)}))}}const c={render:function(){return s(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n    <div class="hero">\n      <div class="orverlay-element"></div>\n      <picture>\n        <source media="(max-width: 600px)" srcset="./images/hero-image_1-small.jpg">\n        <img src=\'./images/hero-image_1-large.jpg\' \n             alt="dirt rally poster">\n      </picture>\n        <div class="hero__inner">\n          <h1 class="hero__title">Journey into Gastronomy</h1>\n          <p class="hero__tagline">\n            Join Us in Uncovering the Secrets of Extraordinary Cuisine. Your Next Culinary Adventure Starts Here!\n          </p>\n        </div>\n      </div>\n    <section class="content">\n    <h2>Restaurant List</h2>\n    <div class="card-container" id="restaurantContainer"></div>\n    </section>\n      ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return s(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.Z.listRestaurants();case 2:e=n.sent,t=document.querySelector("#restaurantContainer"),e.forEach((function(n){t.innerHTML+=(0,A.Rg)(n)}));case 5:case"end":return n.stop()}}),n)})))()}}},402:(n,e,t)=>{t.d(e,{HR:()=>a,Rg:()=>A,SF:()=>i,p5:()=>o});var r=t(597),A=function(n){return'\n<div class="restaurant-item">\n<img class="lazyload" data-src="'.concat(r.Z.SMALL_IMAGE_URL).concat(n.pictureId,'" alt="').concat(n.name,' ">\n<div class="card-content">\n  <div class="restaurant-name">\n    ').concat(n.name,'\n    <span class="rating">⭐️ ').concat(n.rating,'</span>\n  </div>\n  <div class="location">').concat(n.city,'</div>\n  <div class="description">').concat(n.description,'</div>\n  <div class="detail-button">\n  <a href="/#/detail/').concat(n.id,'">Details</a>\n  </div>\n</div>\n</div>\n')},o=function(n){return'\n<div class="header-palsu"></div>\n<div class="container-details">\n<div id="likeButtonContainer"></div>\n<img class="lazyload" class="restaurant-image-details" data-src="'.concat(r.Z.MEDIUM_IMAGE_URL).concat(n.pictureId,'" alt="').concat(n.name,'">\n<div class="restaurant-details">\n  <div class="header-details">\n    <div class="restaurant-name-details">').concat(n.name,'</div>\n    <div class="rating-details">⭐️ ').concat(n.rating,'</div>\n  </div>\n  <div class="location-details">\n    <span>City : ').concat(n.city,"</span>\n    <span>, Address : ").concat(n.address,'</span>\n  </div>\n  <div class="description-details">\n    ').concat(n.description,'\n  </div>\n    <div class="menu-details">\n        <div class="foods-container">\n            <h2>Menu Makanan:</h2>\n            <ul>\n                ').concat(n.menus.foods.map((function(n){return"<li>".concat(n.name,"</li>")})).join(""),'\n            </ul>\n        </div>\n        <div class="beverages-container">\n            <h2>Menu Minuman:</h2>\n            <ul>\n            ').concat(n.menus.drinks.map((function(n){return"<li>".concat(n.name,"</li>")})).join(""),'\n            </ul>\n        </div>\n    </div>\n  </div>\n\n</div>\n<div class="review-section">\n    <div class="review-container">\n    <h2>Customer Reviews:</h2>\n    <div class="customer-reviews">\n    ').concat(n.customerReviews.map((function(n){return'\n        <div class="customer-review">\n        <div class="customer-info">\n            <strong>'.concat(n.name,"</strong>\n            <span>, ").concat(n.date,'</span>\n        </div>\n        <p>"').concat(n.review,'"</p>\n        </div>\n    ')})).join(""),"\n    </div>\n    </div>\n</div>\n")},i=function(){return'\n  <button aria-label="favorite this restaurant" id="likeButton" class="like">\n  <i class="ri-heart-add-line" aria-hidden="true"></i>\n  </button>\n'},a=function(){return'\n  <button aria-label="unfavorite this restaurant" id="likeButton" class="like">\n    <i class="ri-heart-3-fill" aria-hidden="true"></i>\n  </button>\n'}},144:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(537),A=t.n(r),o=t(645),i=t.n(o)()(A());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap);"]),i.push([n.id,'*{padding:0;margin:0;box-sizing:border-box;font-family:"Poppins",sans-serif;text-decoration:none;list-style:none}a{min-height:45px;min-width:45px}body{min-height:100vh;background-color:#fff;color:#fff}body header{width:100%;position:fixed;top:0;right:0;z-index:1000;display:flex;align-items:center;justify-content:space-between;background:#222327;padding:22px 12%;transition:all .5s ease}body header .logo{min-width:50px;min-height:50px;display:flex;align-items:center}body header .logo i{color:#29fd53;font-size:30px;margin-right:3px}body header .logo span{margin:10px;transition:all .5s ease;color:#fff;font-size:1.7rem;font-weight:600}body header .navbar{display:flex}body header .navbar a{display:block;min-height:45px;color:#fff;font-size:1.1rem;font-weight:500;padding:5px 0;margin:0px 30px;transition:all .5s ease}body header .navbar a:hover{color:#29fd53}body header .navbar a.active{color:#29fd53}body header .main{display:none;align-items:center}body header .main a{display:flex;align-items:center;min-height:45px;margin-right:25px;margin-left:10px;color:#fff;font-size:1.1rem;font-weight:500;transition:all .5s ease}body header .main a:hover{color:#29fd53}body header .main .user{display:flex;align-items:center}body header .main .user i{color:#29fd53;font-size:28px;margin-right:7px}body header .main #hamburgerButton{font-size:40px;color:#fff;cursor:pointer;z-index:10001;display:none}body main{color:#222327}@media screen and (max-width: 1500px){body header{padding:14px 2%}body header .navbar a{height:45px;font-size:1rem;padding:14px 0;margin:0px 20px}}@media screen and (max-width: 880px){body .customer-reviews{grid-template-columns:1fr 1fr}body .container-details{margin:20px;display:block}body .restaurant-image-details{width:100%}body .card-container{grid-template-columns:repeat(2, 1fr)}body .hero{transition:all .5s ease}body .hero .hero__title{font-size:2rem}body .hero .hero__tagline{font-size:1rem}body .hero picture{height:50vh}body header .main{display:flex}body header .main #hamburgerButton{border:none;display:block;background-color:rgba(0,0,0,0)}body header .navbar{position:absolute;top:100%;right:-100%;width:270px;height:35vh;background-color:#29fd53;display:flex;flex-direction:column;justify-content:flex-start;border-radius:10px;transition:all .5s ease}body header .navbar.open{right:2%}body header .navbar a{display:block;margin:12px 0;padding:0 25px;transition:all .5s ease}body header .navbar a:hover{color:#fff}body header .navbar a.active{color:#fff}.container-details{display:block}.restaurant-image-details{width:100%}}@media screen and (max-width: 520px){body .customer-reviews{grid-template-columns:1fr}body header .logo span{transition:all .5s ease-in-out;font-size:1rem}body header .main a{margin-right:10px;font-size:.8rem}body .card-container{grid-template-columns:repeat(1, 1fr)}body .hero .hero__title{font-size:1.5rem}body .hero .hero__tagline{font-size:.7rem}}.hero{justify-content:center;transition:all .5s ease;display:flex;align-items:center;text-align:center}.hero picture{width:100%;height:80vh}.hero picture img{width:100%;height:100%;object-fit:cover}.hero__inner{position:absolute;margin:0 auto;max-width:800px}.hero__title{color:#29fd53;font-weight:600;font-size:3rem}.hero__tagline{color:#29fd53;margin-top:10px;font-size:18px;font-weight:500}.card-container{display:grid;grid-template-columns:repeat(3, 1fr);gap:20px;padding:20px;max-width:1200px;margin:0 auto}.restaurant-item{background-color:#fff;border-radius:10px;overflow:hidden;box-shadow:rgba(0,0,0,.1) 0px 10px 15px -3px,rgba(0,0,0,.05) 0px 4px 6px -2px;transition:all .5s ease}.restaurant-item:hover{transform:scale(1.05);transition:transform .5s ease-in-out}.restaurant-item img{width:100%;height:200px;object-fit:cover}.card-content{color:#222327;padding:15px}.detail-button{height:20px;display:flex;justify-items:baseline;justify-content:flex-end}.detail-button a{color:#222327;font-weight:600}.restaurant-name{display:flex;justify-content:space-between;font-size:1.2em;font-weight:600;margin-bottom:4px}.rating{color:#f8d028;font-size:1.1em;margin-bottom:8px}.location{font-size:1em;color:#555}.description{margin-top:10px;font-size:.8em}footer{display:flex;justify-content:center;align-items:center;height:60px;background-color:#222327}.skip-link{width:120px;min-width:45px;position:absolute;top:-40px;left:10px;padding:8px;background-color:#29fd53;color:#222327}.skip-link:focus{top:0;z-index:10002}.container-details{margin-top:10%;display:flex;align-items:center;max-width:1000px;margin:20px auto;background-color:#fff;border-radius:8px;box-shadow:rgba(0,0,0,.1) 0px 10px 15px -3px,rgba(0,0,0,.05) 0px 4px 6px -2px;overflow:hidden}.restaurant-image-details{width:50%;max-height:500px;object-fit:cover}.restaurant-details{padding:20px}.restaurant-name-details{font-size:24px;font-weight:bold;margin-bottom:10px}.rating-details{color:gold;font-size:18px;margin-bottom:10px}.header-details{display:flex;justify-content:space-between;align-items:center}.location-details{font-size:16px;color:#555;margin-bottom:10px}.description-details{font-size:16px;line-height:1.5;color:#333}.menu-details ul{display:flex;flex-wrap:wrap}.menu-details li{margin:0 10px 0 10px;width:auto;list-style:circle}.review-container{max-width:1300px;color:#29fd53;background-color:#222327;margin:20px auto;padding:20px;border-radius:8px;box-shadow:rgba(0,0,0,.1) 0px 10px 15px -3px,rgba(0,0,0,.05) 0px 4px 6px -2px}.customer-reviews{gap:20px;display:grid;grid-template-columns:1fr 1fr 1fr}.customer-info strong{font-size:1.2rem}.customer-info span{color:#555}.customer-review{color:#222327;padding:10px;border-radius:8px;background-color:#fff}.like{width:55px;height:55px;display:flex;align-items:center;justify-content:center;background-color:#db0000;position:fixed;bottom:16px;right:16px;border-radius:50%;border:0;font-size:18px;color:#fff;cursor:pointer}.header-palsu{height:15vh}.restaurant-item__not__found{height:65vh}',"",{version:3,sources:["webpack://./src/styles/main.scss"],names:[],mappings:"AAMA,EACE,SAAA,CACA,QAAA,CACA,qBAAA,CACA,gCAAA,CACA,oBAAA,CACA,eAAA,CAEF,EACE,eAAA,CACA,cAAA,CAEF,KACE,gBAAA,CACA,qBAjBW,CAkBX,UAlBW,CAmBX,YACE,UAAA,CACA,cAAA,CACA,KAAA,CACA,OAAA,CACA,YAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,kBA7BO,CA8BP,gBAAA,CACA,uBAAA,CACA,kBACE,cAAA,CACA,eAAA,CACA,YAAA,CACA,kBAAA,CACA,oBACE,aApCQ,CAqCR,cAAA,CACA,gBAAA,CAEF,uBACE,WAAA,CACA,uBAAA,CACA,UA5CK,CA6CL,gBAAA,CACA,eAAA,CAIJ,oBACE,YAAA,CACA,sBACE,aAAA,CACA,eAAA,CACA,UAvDK,CAwDL,gBAAA,CACA,eAAA,CACA,aAAA,CACA,eAAA,CACA,uBAAA,CACA,4BACE,aA7DM,CA+DR,6BACE,aAhEM,CAoEZ,kBACE,YAAA,CACA,kBAAA,CACA,oBACE,YAAA,CACA,kBAAA,CACA,eAAA,CACA,iBAAA,CACA,gBAAA,CACA,UA9EK,CA+EL,gBAAA,CACA,eAAA,CACA,uBAAA,CACA,0BACE,aAlFM,CAqFV,wBACE,YAAA,CACA,kBAAA,CACA,0BACE,aAzFM,CA0FN,cAAA,CACA,gBAAA,CAGJ,mCACE,cAAA,CACA,UAjGK,CAkGL,cAAA,CACA,aAAA,CACA,YAAA,CAIN,UACE,aA1GO,CA6GX,sCAEI,YACE,eAAA,CAEE,sBACE,WAAA,CACA,cAAA,CACA,cAAA,CACA,eAAA,CAAA,CAMV,qCAEI,uBACE,6BAAA,CAEF,wBACE,WAAA,CACA,aAAA,CAEF,+BACE,UAAA,CAEF,qBACE,oCAAA,CAEF,WAEE,uBAAA,CACA,wBACE,cAAA,CAEF,0BACE,cAAA,CAEF,mBACE,WAAA,CAIF,kBACE,YAAA,CACA,mCACE,WAAA,CACA,aAAA,CACA,8BAAA,CAGJ,oBACE,iBAAA,CACA,QAAA,CACA,WAAA,CACA,WAAA,CACA,WAAA,CACA,wBArKQ,CAsKR,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,kBAAA,CACA,uBAAA,CACA,yBACE,QAAA,CAEF,sBACE,aAAA,CACA,aAAA,CACA,cAAA,CACA,uBAAA,CACA,4BACE,UArLC,CAuLH,6BACE,UAxLC,CA8LX,mBACE,aAAA,CAEF,0BACE,UAAA,CAAA,CAGJ,qCAEI,uBACE,yBAAA,CAIE,uBACE,8BAAA,CACA,cAAA,CAIF,oBACE,iBAAA,CACA,eAAA,CAIN,qBACE,oCAAA,CAGA,wBACE,gBAAA,CAEF,0BACE,eAAA,CAAA,CAKR,MACE,sBAAA,CAEA,uBAAA,CACA,YAAA,CACA,kBAAA,CAGA,iBAAA,CAEA,cACE,UAAA,CACA,WAAA,CACA,kBACE,UAAA,CACA,WAAA,CACA,gBAAA,CAKN,aACE,iBAAA,CACA,aAAA,CACA,eAAA,CAGF,aACE,aAhQc,CAiQd,eAAA,CACA,cAAA,CAGF,eACE,aAtQc,CAuQd,eAAA,CACA,cAAA,CACA,eAAA,CAGF,gBACE,YAAA,CACA,oCAAA,CACA,QAAA,CACA,YAAA,CACA,gBAAA,CACA,aAAA,CAGF,iBACE,qBAAA,CACA,kBAAA,CACA,eAAA,CACA,6EAAA,CACA,uBAAA,CAEF,uBACE,qBAAA,CACA,oCAAA,CAGF,qBACE,UAAA,CACA,YAAA,CACA,gBAAA,CAGF,cACE,aA1SS,CA2ST,YAAA,CAGF,eACE,WAAA,CACA,YAAA,CACA,sBAAA,CACA,wBAAA,CACA,iBACE,aApTO,CAqTP,eAAA,CAIJ,iBACE,YAAA,CACA,6BAAA,CACA,eAAA,CACA,eAAA,CACA,iBAAA,CAGF,QACE,aAAA,CACA,eAAA,CACA,iBAAA,CAGF,UACE,aAAA,CACA,UAAA,CAEF,aACE,eAAA,CACA,cAAA,CAEF,OACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,WAAA,CACA,wBApVS,CAsVX,WACE,WAAA,CACA,cAAA,CACA,iBAAA,CACA,SAAA,CACA,SAAA,CACA,WAAA,CACA,wBA3Vc,CA4Vd,aA9VS,CA+VT,iBACE,KAAA,CACA,aAAA,CAGJ,mBACA,cAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,gBAAA,CACA,qBAAA,CACA,iBAAA,CACA,6EAAA,CACA,eAAA,CAGA,0BACA,SAAA,CACA,gBAAA,CACA,gBAAA,CAGA,oBACA,YAAA,CAGA,yBACA,cAAA,CACA,gBAAA,CACA,kBAAA,CAGA,gBACA,UAAA,CACA,cAAA,CACA,kBAAA,CAEA,gBACE,YAAA,CACA,6BAAA,CACA,kBAAA,CAGF,kBACA,cAAA,CACA,UAAA,CACA,kBAAA,CAGA,qBACA,cAAA,CACA,eAAA,CACA,UAAA,CAGE,iBACE,YAAA,CACA,cAAA,CAEF,iBACE,oBAAA,CACA,UAAA,CACA,iBAAA,CAGJ,kBACE,gBAAA,CACA,aAjac,CAkad,wBApaS,CAqaT,gBAAA,CACA,YAAA,CACF,iBAAA,CACA,6EAAA,CAEA,kBACE,QAAA,CACA,YAAA,CACA,iCAAA,CAGA,sBACE,gBAAA,CAEF,oBACE,UAAA,CAGJ,iBACE,aAxbS,CAybT,YAAA,CACA,iBAAA,CACA,qBA1bW,CA4bb,MACE,UAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,wBAAA,CAEA,cAAA,CACA,WAAA,CACA,UAAA,CACA,iBAAA,CACA,QAAA,CAEA,cAAA,CACA,UAAA,CACA,cAAA,CAEF,cACE,WAAA,CAEF,6BACE,WAAA",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');\n\n$bg-color: #222327;\n$text-color: white;\n$primary-color: #29fd53;\n\n*{\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n  text-decoration: none;\n  list-style: none;\n}\na{\n  min-height: 45px;\n  min-width: 45px;\n}\nbody{\n  min-height: 100vh;\n  background-color: $text-color;\n  color:$text-color;\n  header{\n    width: 100%;\n    position: fixed;\n    top: 0;\n    right: 0 ;\n    z-index:1000;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background: $bg-color;\n    padding: 22px 12% ;\n    transition: all .50s ease;\n    .logo{\n      min-width: 50px;\n      min-height: 50px;\n      display: flex;\n      align-items: center;\n      i{\n        color: $primary-color;\n        font-size: 30px;\n        margin-right: 3px;\n      }\n      span{\n        margin: 10px;\n        transition: all .50s ease;\n        color: $text-color;\n        font-size: 1.7rem;\n        font-weight: 600;\n      }\n\n    }\n    .navbar{\n      display: flex;\n      a{\n        display: block;\n        min-height: 45px;\n        color: $text-color;\n        font-size: 1.1rem;\n        font-weight: 500;\n        padding: 5px 0;\n        margin: 0px 30px;\n        transition: all .50s ease;\n        &:hover{\n          color: $primary-color;\n        }\n        &.active{\n          color: $primary-color;\n        }\n      }\n    }\n    .main{\n      display: none;\n      align-items: center;\n      a{\n        display: flex;\n        align-items: center;\n        min-height: 45px;\n        margin-right: 25px;\n        margin-left: 10px;\n        color: $text-color;\n        font-size: 1.1rem;\n        font-weight: 500;\n        transition: all .50s ease;\n        &:hover{\n          color: $primary-color;\n        }\n      }\n      .user{\n        display: flex;\n        align-items: center;\n        i{\n          color: $primary-color;\n          font-size: 28px;\n          margin-right: 7px;\n        }\n      }\n      #hamburgerButton{\n        font-size: 40px;\n        color: $text-color;\n        cursor: pointer;\n        z-index: 10001;\n        display: none;\n      }\n    }\n  }\n  main{\n    color: $bg-color;\n  }\n}\n@media screen and (max-width: 1500px){\n  body{\n    header{\n      padding: 14px 2%;\n      .navbar{\n        a{\n          height: 45px;\n          font-size: 1rem;\n          padding: 14px 0;\n          margin: 0px 20px;\n        }\n      }\n    }\n  }\n}\n@media screen and (max-width: 880px) {\n  body{\n    .customer-reviews{\n      grid-template-columns: 1fr 1fr;\n    }\n    .container-details{\n      margin: 20px;\n      display: block;\n    }\n    .restaurant-image-details{\n      width: 100%;\n    }\n    .card-container{\n      grid-template-columns: repeat(2, 1fr);\n    }\n    .hero{\n      // min-height: 70vh;\n      transition: all .50s ease;\n      .hero__title{\n        font-size: 2rem;\n      }\n      .hero__tagline{\n        font-size: 1rem;\n      }\n      picture{\n        height: 50vh;\n      }\n    }\n    header{\n      .main{\n        display: flex;\n        #hamburgerButton{\n          border: none;\n          display: block;\n          background-color: transparent;\n        }\n      }\n      .navbar{\n        position: absolute;\n        top:100%;\n        right: -100%;\n        width: 270px;\n        height: 35vh;\n        background-color: $primary-color;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        border-radius: 10px;\n        transition: all .50s ease;\n        &.open{\n          right: 2%;\n        }\n        a{\n          display: block;\n          margin: 12px 0;\n          padding: 0 25px;\n          transition: all .50s ease;\n          &:hover{\n            color: $text-color;\n          }\n          &.active{\n            color: $text-color;\n          }\n        }\n      }\n    }\n  }\n  .container-details{\n    display: block;\n  }\n  .restaurant-image-details{\n    width: 100%;\n  }\n}\n@media screen and (max-width : 520px){\n  body{\n    .customer-reviews{\n      grid-template-columns: 1fr;\n    }\n    header{\n      .logo{\n        span{\n          transition: all .50s ease-in-out;\n          font-size: 1rem;\n        }\n      }\n      .main{\n        a{\n          margin-right: 10px;\n          font-size: .8rem;\n        }\n      }\n    }\n    .card-container{\n      grid-template-columns: repeat(1, 1fr);\n    }\n    .hero{\n      .hero__title{\n        font-size: 1.5rem;\n      }\n      .hero__tagline{\n        font-size: .7rem;\n      }\n    }\n  }\n}\n.hero {\n  justify-content: center;\n  // margin-top: 5%;\n  transition: all .50s ease;\n  display: flex;\n  align-items: center;\n  // min-height: 80vh;\n  // width: 100%;\n  text-align: center;\n  // background-color: #222327ac;\n  picture{\n    width: 100%;\n    height: 80vh;\n    img{\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n}\n\n.hero__inner {\n  position: absolute;\n  margin: 0 auto;\n  max-width: 800px;\n}\n\n.hero__title {\n  color: $primary-color;\n  font-weight: 600;\n  font-size: 3rem;\n}\n\n.hero__tagline {\n  color: $primary-color;\n  margin-top: 10px;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.card-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.restaurant-item {\n  background-color: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;\n  transition: all .50s ease;\n}\n.restaurant-item:hover {\n  transform: scale(1.05); /* Perbesar sel ketika dihover */\n  transition: transform .50s ease-in-out; \n}\n\n.restaurant-item img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n\n.card-content {\n  color: $bg-color;\n  padding: 15px;\n}\n\n.detail-button{\n  height: 20px;\n  display: flex;\n  justify-items: baseline;\n  justify-content: flex-end;\n  a{\n    color: $bg-color;\n    font-weight: 600;\n  }\n}\n\n.restaurant-name {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.2em;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n\n.rating {\n  color: #f8d028;\n  font-size: 1.1em;\n  margin-bottom: 8px;\n}\n\n.location {\n  font-size: 1em;\n  color: #555;\n}\n.description{\n  margin-top: 10px;\n  font-size: .8em;\n}\nfooter{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 60px;\n  background-color: $bg-color;\n}\n.skip-link {\n  width: 120px;\n  min-width: 45px;\n  position: absolute;\n  top: -40px;\n  left: 10px;\n  padding: 8px;\n  background-color: $primary-color;\n  color: $bg-color;\n  &:focus{\n    top: 0;\n    z-index: 10002;\n  }\n}\n.container-details {\nmargin-top: 10%;\ndisplay: flex;\nalign-items: center;\nmax-width: 1000px;\nmargin: 20px auto;\nbackground-color: #fff;\nborder-radius: 8px;\nbox-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;\noverflow: hidden;\n}\n\n.restaurant-image-details {\nwidth: 50%;\nmax-height: 500px;\nobject-fit: cover;\n}\n\n.restaurant-details {\npadding: 20px;\n}\n\n.restaurant-name-details {\nfont-size: 24px;\nfont-weight: bold;\nmargin-bottom: 10px;\n}\n\n.rating-details {\ncolor: #FFD700; /* warna emas */\nfont-size: 18px;\nmargin-bottom: 10px;\n}\n.header-details{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.location-details {\nfont-size: 16px;\ncolor: #555;\nmargin-bottom: 10px;\n}\n\n.description-details {\nfont-size: 16px;\nline-height: 1.5;\ncolor: #333;\n}\n.menu-details{\n  ul{\n    display: flex;\n    flex-wrap: wrap;\n  }\n  li{\n    margin: 0 10px 0 10px;\n    width: auto;\n    list-style: circle;\n  }\n}\n.review-container{\n  max-width: 1300px;\n  color: $primary-color;\n  background-color: $bg-color;\n  margin: 20px auto;\n  padding: 20px;\nborder-radius: 8px;\nbox-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;\n}\n.customer-reviews{\n  gap: 20px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n.customer-info{\n  strong{\n    font-size: 1.2rem;\n  }\n  span{\n    color: #555;\n  }\n}\n.customer-review{\n  color: $bg-color;\n  padding: 10px;\n  border-radius: 8px;\n  background-color: $text-color;\n}\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n.header-palsu{\n  height: 15vh;\n}\n.restaurant-item__not__found{\n  height: 65vh;\n}"],sourceRoot:""}]);const a=i},545:(n,e,t)=>{var r=t(379),A=t.n(r),o=t(795),i=t.n(o),a=t(569),s=t.n(a),c=t(565),l=t.n(c),d=t(216),p=t.n(d),C=t(589),u=t.n(C),h=t(144),f={};f.styleTagTransform=u(),f.setAttributes=l(),f.insert=s().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=p(),A()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals}},t={};function r(n){var A=t[n];if(void 0!==A)return A.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,n=[],r.O=(e,t,A,o)=>{if(!t){var i=1/0;for(l=0;l<n.length;l++){for(var[t,A,o]=n[l],a=!0,s=0;s<t.length;s++)(!1&o||i>=o)&&Object.keys(r.O).every((n=>r.O[n](t[s])))?t.splice(s--,1):(a=!1,o<i&&(i=o));if(a){n.splice(l--,1);var c=A();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[t,A,o]},r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n={535:0};r.O.j=e=>0===n[e];var e=(e,t)=>{var A,o,[i,a,s]=t,c=0;if(i.some((e=>0!==n[e]))){for(A in a)r.o(a,A)&&(r.m[A]=a[A]);if(s)var l=s(r)}for(e&&e(t);c<i.length;c++)o=i[c],r.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return r.O(l)},t=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})(),r.nc=void 0;var A=r.O(void 0,[946,2,495,337,268],(()=>r(746)));A=r.O(A)})();
//# sourceMappingURL=app~f6563343.bundle.js.map