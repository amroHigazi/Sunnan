import{a as n,b as F}from"./chunk-ZX2CG5WV.js";import{a as O}from"./chunk-LRDD25OF.js";import{a as A}from"./chunk-5D5U3RZP.js";import{C as f,Ca as x,Ea as I,F as h,G as s,H as u,Ia as L,Ja as S,Ma as b,N as g,Pa as j,Sa as m,Ta as w,Y as a,ba as v,ea as C,fa as y,fb as P,ga as M,ha as p,qa as d,v as l}from"./chunk-JZKPGTR4.js";var _=(()=>{let e=class e{constructor(r){this.loader=r}};e.\u0275fac=function(o){return new(o||e)(a(n))},e.\u0275cmp=s({type:e,selectors:[["app-loader"]],standalone:!0,features:[d],decls:3,vars:0,consts:[[1,"overlay"],[1,"loader"],["src","/assets/login.svg","alt","Loading"]],template:function(o,c){o&1&&(y(0,"div",0)(1,"div",1),p(2,"img",2),M()())},styles:[".overlay[_ngcontent-%COMP%]{position:fixed;display:flex;justify-content:center;align-items:center;width:100%;height:100%;background-color:#00000080;z-index:9999999999999999999999999999999999999999999999999999999999999999999999}.loader-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;width:100vw;position:fixed;top:0;left:0;background-color:#fffc}.loader[_ngcontent-%COMP%]{border:5px solid #f3f3f3;border-top:5px solid #3498db;border-radius:50%;width:100px;height:100px;animation:_ngcontent-%COMP%_spin 2s linear infinite}.loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]});let t=e;return t})();function R(t,e){t&1&&p(0,"app-loader")}var k=(()=>{let e=class e{constructor(r,o){this.loader=r,this.authService=o,this.title="hadith-project"}logout(){this.authService.doLogout()}};e.\u0275fac=function(o){return new(o||e)(a(n),a(w))},e.\u0275cmp=s({type:e,selectors:[["app-root"]],standalone:!0,features:[d],decls:2,vars:1,consts:[[4,"ngIf"]],template:function(o,c){o&1&&(C(0,R,1,0,"app-loader",0),p(1,"router-outlet")),o&2&&v("ngIf",c.loader.getIsLoading)},dependencies:[I,x,j,_]});let t=e;return t})();var B=[{path:"",redirectTo:"auth/log-in",pathMatch:"full"},{path:"",component:A,children:[{path:"list-category",component:O,canActivate:[P]}]},{path:"auth",loadChildren:()=>import("./chunk-I5K4OAWT.js").then(t=>t.AuthModule)},{path:"hadith",loadChildren:()=>import("./chunk-PXUSDQQO.js").then(t=>t.HadithModule)},{path:"hadith-type",loadChildren:()=>import("./chunk-TANZTEGA.js").then(t=>t.HadithTypeModule)},{path:"category",loadChildren:()=>import("./chunk-RJGAJLU7.js").then(t=>t.CategoryModule)}],D=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=u({type:e}),e.\u0275inj=f({imports:[m.forRoot(B,{useHash:!0}),m]});let t=e;return t})();function H(t,e){let i=localStorage.getItem("access_token");if(i){let r=t.clone({headers:t.headers.set("Authorization","Bearer "+i)});return e(r)}return e(t)}function z(t,e){let i=h(n);return i.incressCounter(),i.setLoading(!0),e(t).pipe(l(()=>{i.DecressCounter(),(i.getCounter===0||i.getCounter>=0)&&i.setLoading(!1)}))}b(k,{providers:[g(D),L(S([z,H])),F()]});