if(!self.define){let e,i={};const n=(n,a)=>(n=new URL(n+".js",a).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,s)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let c={};const r=e=>n(e,f),d={module:{uri:f},exports:c,require:r};i[f]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(s(...e),c)))}}define(["./workbox-94c66d79"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2.bundle.js",revision:"db33bb721f49f0b29bd26e76e0874eb1"},{url:"946.bundle.js",revision:"cbc435a155cc44d631a17ce6c4bafa19"},{url:"app.webmanifest",revision:"8360c4bb4eb3fce848934e7460fd08f3"},{url:"app~a51fa3f5.bundle.js",revision:"13ec5e420d3f26248d17ab18c47c2706"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"1bbbeafbe63426cb40e4a015ca334e0f"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"5f2f9e0e6f60e2caa132298faf73ded9"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~f6563343.bundle.js",revision:"19f222a4eafab61534b5f1489509ef1f"},{url:"app~f6563343.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"images/icons/icon-120x120.png",revision:"84d609a9d50d47f6240b072cb38e0049"},{url:"images/icons/icon-240x240.png",revision:"2d503c8d6cc0deaacf4896cc4797da19"},{url:"images/icons/icon-72x72.png",revision:"7646e23a1da77800278902fcfc584aab"},{url:"images/icons/icon-96x96.png",revision:"3651093486e7b1ff13cd68ae35c17221"},{url:"index.html",revision:"0954e0e5cb55fb08859bce79a67e22c1"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map