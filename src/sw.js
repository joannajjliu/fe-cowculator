if(!self.define){const e=e=>{'require'!==e&&(e+='.js');let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if('document'in self){const a=document.createElement('script');a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,p)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case'exports':return a;case'module':return c;default:return e(s)}}))).then((e=>{const s=p(...e);return a.default||(a.default=s),a}))})))}}define('./sw.js',['./workbox-d6040a4a'],(function(e){'use strict';self.addEventListener('message',(e=>{e.data&&'SKIP_WAITING'===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:'icons/apple-icon-180.png',revision:'f8bd9d5a2263e741f16be2d7152ede8b'},{url:'icons/apple-splash-1125-2436.jpg',revision:'18ba6f33cc7a3da71417f9abcca90975'},{url:'icons/apple-splash-1136-640.jpg',revision:'05421510a7d9855cdbef0f041dbcbdda'},{url:'icons/apple-splash-1170-2532.jpg',revision:'ed556b672446557db6e0da68706964d8'},{url:'icons/apple-splash-1242-2208.jpg',revision:'6a064206c28e22efcfaf43b9a3d6bb55'},{url:'icons/apple-splash-1242-2688.jpg',revision:'d223d1dc9362dab5bb2f5c25563f5485'},{url:'icons/apple-splash-1284-2778.jpg',revision:'4df727c3d42e7acdc4baaf46175b3ecb'},{url:'icons/apple-splash-1334-750.jpg',revision:'525cb4514b22e2a996bc8c03012a3196'},{url:'icons/apple-splash-1536-2048.jpg',revision:'740de768c01bb952303af7f5c05a800f'},{url:'icons/apple-splash-1620-2160.jpg',revision:'7b7bda0d6a983790247ba925f0db3393'},{url:'icons/apple-splash-1668-2224.jpg',revision:'041162b5a87a93764e9e313a108d1258'},{url:'icons/apple-splash-1668-2388.jpg',revision:'644e3cdf039f3659d2ed8b6e2133e7fe'},{url:'icons/apple-splash-1792-828.jpg',revision:'a90a9a5d80f61d8348866ee8dbf18569'},{url:'icons/apple-splash-2048-1536.jpg',revision:'0d4dc15227f16296265e6ae73460bf35'},{url:'icons/apple-splash-2048-2732.jpg',revision:'dfd63b6c237ff8947c7ca43bd3c5e4c2'},{url:'icons/apple-splash-2160-1620.jpg',revision:'9a95874265ae2eee2cd2a6d4895dae02'},{url:'icons/apple-splash-2208-1242.jpg',revision:'8aa1a77165f0d04822beb76f317fb164'},{url:'icons/apple-splash-2224-1668.jpg',revision:'dc37c785454da8672667d172d71001c8'},{url:'icons/apple-splash-2388-1668.jpg',revision:'ef4c3641af06744a6099168ab0d8353b'},{url:'icons/apple-splash-2436-1125.jpg',revision:'ffb5f52d48bc11a580e6c3e4348f805a'},{url:'icons/apple-splash-2532-1170.jpg',revision:'d26180bcd83dc4acdf62f2f7754ec306'},{url:'icons/apple-splash-2688-1242.jpg',revision:'6e19ee2327a0000106bce3676182f32a'},{url:'icons/apple-splash-2732-2048.jpg',revision:'4bdc0d43e2466c910fcc90229982c9bb'},{url:'icons/apple-splash-2778-1284.jpg',revision:'ebee86470cae4ab3f98188093992618d'},{url:'icons/apple-splash-640-1136.jpg',revision:'58e25ad89708052af7e3520162e55125'},{url:'icons/apple-splash-750-1334.jpg',revision:'082cb034cd350e56266f7e568e0b9aa7'},{url:'icons/apple-splash-828-1792.jpg',revision:'e4ce5ca39e58162db43c8ea496d5f5fc'},{url:'icons/manifest-icon-192.png',revision:'61a87497997bca428c9032f918fa56c7'},{url:'icons/manifest-icon-512.png',revision:'d651561403659d3e9edf2e7356059bd8'},{url:'index.html',revision:'59b30eabc777a9c87288ef79a532d5d8'},{url:'manifest.json',revision:'d3a438ad3623f36b9bf70b720677f319'}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map