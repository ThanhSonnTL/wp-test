import{e as c,u as a,o as l,c as u,b as p,l as f,d as _}from"./js/index.9_UWDUyH.js";const d={__name:"App",setup(h){return c(()=>{const t=a().aioseoBrokenLinkChecker.brokenLinks;if(!t)return;document.querySelectorAll("a").forEach(e=>{let n=e.getAttribute("href");if(!n)return;n.startsWith("http")||(n=new URL(n,window.location.href).href),t.find(i=>i.url===n)&&e.classList.add("aioseo-blc-broken-link")})}),(s,t)=>(l(),u("div"))}};let o=p(d);o=f(o);_(o,null);const r=document.createElement("div");r.id="aioseo-blc-highlighter";document.body.insertBefore(r,document.body.firstChild);o.mount("#aioseo-blc-highlighter");
