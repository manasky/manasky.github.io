import{S as s,i as e,s as t,m as a,e as l,p as c,b as n,c as r,d as i,q as o,g as $,h,j as m,k as d,l as f,r as u,u as p,t as v,v as x,w as g,x as w,y as b}from"../../../svelte.internal.v3.43.1-6b706b9a.js";import E from"./Perspective.svelte.js";function H(s){let e,t,a;return{c(){e=l("h1"),t=n(),a=l("p"),this.h()},l(s){e=r(s,"H1",{class:!0}),i(e).forEach($),t=h(s),a=r(s,"P",{class:!0}),i(a).forEach($),this.h()},h(){m(e,"class","mb-5 inline-block relative z-10 uppercase font-title text-[14vw] leading-[.75em] sm:text-[10vw] sm:leading-[.75em] xl:text-9xl xl:leading-[.75em] "),m(a,"class","relative z-10 mb-5 text-xl tracking-wider")},m(l,c){d(l,e,c),e.innerHTML=s[0],d(l,t,c),d(l,a,c),a.innerHTML=s[1]},p(s,t){1&t&&(e.innerHTML=s[0]),2&t&&(a.innerHTML=s[1])},d(s){s&&$(e),s&&$(t),s&&$(a)}}}function D(s){let e,t,D,I,L,M,T;L=new E({props:{scale:"20","client:load":!0,$$slots:{default:[H]},$$scope:{ctx:s}}});const V=s[2].default,j=a(V,s,s[3],null);return{c(){e=l("div"),t=l("div"),D=l("div"),I=l("div"),c(L.$$.fragment),M=n(),j&&j.c(),this.h()},l(s){e=r(s,"DIV",{class:!0});var a=i(e);t=r(a,"DIV",{class:!0});var l=i(t);D=r(l,"DIV",{class:!0});var c=i(D);I=r(c,"DIV",{});var n=i(I);o(L.$$.fragment,n),n.forEach($),M=h(c),j&&j.l(c),c.forEach($),l.forEach($),a.forEach($),this.h()},h(){m(D,"class","w-full"),m(t,"class","items-stretch w-full max-w-6xl hero-content"),m(e,"class","h-screen max-h-[60rem] hero")},m(s,a){d(s,e,a),f(e,t),f(t,D),f(D,I),u(L,I,null),f(D,M),j&&j.m(D,null),T=!0},p(s,[e]){const t={};11&e&&(t.$$scope={dirty:e,ctx:s}),L.$set(t),j&&j.p&&(!T||8&e)&&p(j,V,s,s[3],T?x(V,s[3],e,null):v(s[3]),null)},i(s){T||(g(L.$$.fragment,s),g(j,s),T=!0)},o(s){w(L.$$.fragment,s),w(j,s),T=!1},d(s){s&&$(e),b(L),j&&j.d(s)}}}function I(s,e,t){let{$$slots:a={},$$scope:l}=e,{title:c=""}=e,{desc:n=""}=e;return s.$$set=s=>{"title"in s&&t(0,c=s.title),"desc"in s&&t(1,n=s.desc),"$$scope"in s&&t(3,l=s.$$scope)},[c,n,a,l]}class L extends s{constructor(s){super(),e(this,s,I,D,t,{title:0,desc:1})}}export{L as default};
