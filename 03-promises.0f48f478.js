var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");function i(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:t,step:o,amount:n}}=e.target;let l=Number(t.value);const u=Number(o.value),s=Number(n.value);for(let e=1;e<s;e+=1){const t=l+u*(e+1);i(e,t).then((o=>r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`))).catch((o=>r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)))}}));
//# sourceMappingURL=03-promises.0f48f478.js.map