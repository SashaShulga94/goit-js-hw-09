const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.body;let n=null;t.addEventListener("click",(()=>{n=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;o.style.backgroundColor=t}),1500)})),e.addEventListener("click",(()=>{clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.e8696035.js.map
