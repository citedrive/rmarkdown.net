"use strict";(self.webpackChunkmonorepo=self.webpackChunkmonorepo||[]).push([[693],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5585:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={title:"CiteDrive"},a="CiteDrive - A non-opinionated and BibTeX-driven reference management tool for the web.",c={type:"mdx",permalink:"/citedrive",source:"@site/src/pages/citedrive.md",title:"CiteDrive",description:"CiteDrive is a bibtex-driven reference manager that works with RStudio and R Markdown. It allows you to manage your bibliographic references directly within RStudio, making it easy to manage your sources and insert citations into your documents.",frontMatter:{title:"CiteDrive"}},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Step 1:",id:"step-1",level:3},{value:"Step 2:",id:"step-2",level:3}],s={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"citedrive---a-non-opinionated-and-bibtex-driven-reference-management-tool-for-the-web"},"CiteDrive - A non-opinionated and BibTeX-driven reference management tool for the web."),(0,o.kt)("p",null,"CiteDrive is a bibtex-driven reference manager that works with RStudio and R Markdown. It allows you to manage your bibliographic references directly within RStudio, making it easy to manage your sources and insert citations into your documents."),(0,o.kt)("p",null,"CiteDrive is particularly useful for those working with large bibliographies or collaborating with others on a project, as it offers an easy way to keep track of references and ensure that everyone is using the same bibliographic data."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h3",{id:"step-1"},"Step 1:"),(0,o.kt)("p",null,"To begin, let's look at CiteDrive and create an R Markdown project. To establish a new project, click the big R Markdown button +. Then input the name you desire."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We won't go through how to add references since we already have some helpful instructions: We have a guide on how to add references to Overleaf so you may use it - don't worry, the process is the same. Also, the CiteDrive companion browser add-on in the Chrome Web Store is the simplest method to do it. If you want to use Microsoft Edge or Firefox, there are add-ons available.")),(0,o.kt)("h3",{id:"step-2"},"Step 2:"))}p.isMDXComponent=!0}}]);