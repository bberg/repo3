import{r as x,o as k,O as v,d as b,m as u,x as w,L as S,q as I,c as m,e as p,f as n,I as s,i as B,h as E,P as K,Q as L,R as V,n as A,E as D}from"./Cies05uQ.js";import{f as N}from"./BFDxGfwR.js";import{u as P}from"./C_FZJ2Ak.js";function q(){const o=x(),t=function(r){r.key==="k"&&(r.ctrlKey||r.metaKey)&&(r.preventDefault(),o.value.focus())};return k(()=>{document.body.addEventListener("keydown",t)}),v(()=>{document.body.removeEventListener("keydown",t)}),o}const z={class:"mb-10 not-prose"},M={class:"mt-2 flex rounded-md shadow-sm"},R={class:"relative flex flex-grow items-stretch focus-within:z-10"},U={key:0,class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},C=["placeholder"],T=b({__name:"Search",async setup(o){let t,r;const c=u("search");u("tags",()=>[]);const e=w().directory.search,y=([t,r]=S(()=>f()),t=await t,r(),t);async function f(){if(e!=null&&e.placeholder&&e.placeholder.includes("{0}")){const{data:l}=await P("content-count",()=>I("/dir").where({_extension:"md"}).count());return N((e==null?void 0:e.placeholder)??"Search {0} listings",l.value)}return(e==null?void 0:e.placeholder)??"Search"}const h=q();return(l,a)=>{var d,i;const _=D;return m(),p("div",z,[n("div",M,[n("div",R,[(d=s(e))!=null&&d.icon?(m(),p("div",U,[B(_,{name:s(e).icon,class:"h-5 w-5 text-gray-400","aria-hidden":"true"},null,8,["name"])])):E("",!0),K(n("input",{"onUpdate:modelValue":a[0]||(a[0]=g=>V(c)?c.value=g:null),ref_key:"searchInput",ref:h,class:A(["block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:active:ring-primary-400 dark:bg-gray-700 dark:ring-gray-600 dark:text-gray-200 dark:placeholder:text-gray-400",(i=s(e))!=null&&i.icon?"pl-10":""]),placeholder:s(y)},null,10,C),[[L,s(c)]]),a[1]||(a[1]=n("div",{class:"absolute inset-y-0 right-0 flex py-1.5 pr-1.5"},[n("kbd",{class:"inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400 dark:border-gray-500 dark:text-gray-500"},"⌘K")],-1))])])])}}});export{T as default};
