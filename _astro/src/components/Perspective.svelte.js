import{S as s,i as e,s as t,p as a,e as n,c as l,d as o,h as r,B as i,l as c,m as u,v as p,w as f,x as d,y as h,z as v,o as m,C as $}from"../../../svelte.internal.v3.43.1-3cb5f1e0.js";function x(s){let e,t,m;const $=s[6].default,x=a($,s,s[5],null);return{c(){e=n("span"),t=n("div"),x&&x.c(),this.h()},l(s){e=l(s,"SPAN",{style:!0});var a=o(e);t=l(a,"DIV",{style:!0});var n=o(t);x&&x.l(n),n.forEach(r),a.forEach(r),this.h()},h(){i(t,"transform","perspective(1000px) translateZ(0) rotateX("+s[2]+") rotateY("+s[3]+")"),i(t,"transition","all 150ms linear 0s"),i(e,"display","inline-block")},m(a,n){c(a,e,n),u(e,t),x&&x.m(t,null),s[7](t),s[8](e),m=!0},p(s,[e]){x&&x.p&&(!m||32&e)&&p(x,$,s,s[5],m?d($,s[5],e,null):f(s[5]),null),(!m||12&e)&&i(t,"transform","perspective(1000px) translateZ(0) rotateX("+s[2]+") rotateY("+s[3]+")")},i(s){m||(h(x,s),m=!0)},o(s){v(x,s),m=!1},d(t){t&&r(e),x&&x.d(t),s[7](null),s[8](null)}}}function E(s,e,t){let a,n,{$$slots:l={},$$scope:o}=e,r=0,i=0,{scale:c=40}=e;return m((()=>{const s=s=>{let e=n.offsetWidth,a=s.pageX-n.offsetLeft,l=(.25-(s.pageY-n.offsetTop)/e)*c*2;t(3,i=-(.5-a/e)*c+"deg"),t(2,r=l+"deg")};a.addEventListener("mousemove",s,!1),a.addEventListener("mouseenter",s,!1),a.addEventListener("mouseleave",(()=>{t(2,r=0),t(3,i=0)}))})),s.$$set=s=>{"scale"in s&&t(4,c=s.scale),"$$scope"in s&&t(5,o=s.$$scope)},[a,n,r,i,c,o,l,function(s){$[s?"unshift":"push"]((()=>{n=s,t(1,n)}))},function(s){$[s?"unshift":"push"]((()=>{a=s,t(0,a)}))}]}class g extends s{constructor(s){super(),e(this,s,E,x,t,{scale:4})}}export{g as default};
