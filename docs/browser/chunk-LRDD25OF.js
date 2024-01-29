import{B as b,Ba as T,E as g,Ea as _,G as v,Ga as A,Ha as R,L as C,M as E,Oa as D,Qa as u,Ra as z,U as w,W as I,X as a,Y as c,aa as O,ba as S,d as y,ea as F,fa as r,ga as o,ha as l,i as x,ma as M,na as s,oa as f,pa as j,qa as P,r as d,ra as k,w as m}from"./chunk-JZKPGTR4.js";var L=(()=>{let e=class e{constructor(t,i){this.http=t,this.router=i,this.endpoint="http://sunnan-001-site2.atempurl.com",this.httpOptions={headers:new A({"Content-Type":"application/json","Accept-language":"ar-SA"})}}getCategories(){return this.http.get(this.endpoint+"/collections/list",this.httpOptions).pipe(m(1),d(this.handleError))}getIncidentById(t){return this.http.get(this.endpoint+"/IncidentTypes/"+t,this.httpOptions).pipe(m(1),d(this.handleError))}craeteIncident(t){let i=`${this.endpoint}/IncidentTypes`;return this.http.post(i,t).pipe(d(this.handleError))}updateIncident(t){return this.http.put(this.endpoint+"/IncidentTypes",t,this.httpOptions).pipe(m(1),d(this.handleError))}deleteIncident(t){return this.http.delete(this.endpoint+"/IncidentTypes/"+t,this.httpOptions).pipe(m(1),d(this.handleError))}handleError(t){let i="";return t.error instanceof ErrorEvent?i=t.error.message:i=`Error Code: ${t.status}
Message: ${t.message}`,x(i)}};e.\u0275fac=function(i){return new(i||e)(g(R),g(u))},e.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var N=n=>[n];function U(n,e){if(n&1&&(r(0,"div",3)(1,"div",4)(2,"table",5)(3,"tbody")(4,"tr",6)(5,"h5",7),s(6),o(),r(7,"td",8),l(8,"div",9),o()()()(),r(9,"a",10)(10,"div",11)(11,"div",12),C(),r(12,"svg",13),l(13,"circle",14)(14,"image",15),o()()()(),E(),r(15,"table",16)(16,"tbody")(17,"tr",17)(18,"td",18)(19,"span",19),s(20,"\u0639\u062F\u062F \u0627\u0644\u0627\u0642\u0633\u0627\u0645"),o()(),r(21,"td",20)(22,"span",21),s(23),o()()()()(),r(24,"table",22)(25,"tbody")(26,"tr",17)(27,"td",18)(28,"span",19),s(29,"\u0639\u062F\u062F \u0627\u0644\u0641\u064A\u062F\u064A\u0648\u0647\u0627\u062A "),o()(),r(30,"td",20)(31,"span",21),s(32),o()()()()(),l(33,"div",23),o()()),n&2){let p=e.$implicit;a(6),j(" ",p.name," "),a(3),M("routerLink","/hadith-type/list-hadith-type/",p.id,""),a(5),O("href",k(5,N,p.imageUrl),null,"xlink"),a(9),f(p.sectionsCount),a(9),f(p.videosCount)}}var et=(()=>{let e=class e{constructor(t,i,h,B,H){this.categoryService=t,this.router=i,this.actRoute=h,this.renderer=B,this.el=H,this.Categories=[],this.routeSub=y.EMPTY}GetCategories(){return this.categoryService.getCategories().subscribe(t=>{this.Categories=t.data,this.catId=this.Categories.id})}ngOnInit(){this.renderer.setStyle(document.body,"background","#F9FDF7"),this.actRoute.params.subscribe(t=>{this.id=t.id}),this.GetCategories()}ngOnDestroy(){this.renderer.removeStyle(document.body,"background")}};e.\u0275fac=function(i){return new(i||e)(c(L),c(u),c(D),c(I),c(w))},e.\u0275cmp=v({type:e,selectors:[["app-list-category"]],standalone:!0,features:[P],decls:10,vars:1,consts:[["dir","rtl",1,"container"],[1,"row"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"card",2,"width","19rem","box-shadow","0 3px 10px rgb(0 0 0 / 0.2)","margin","1%","padding","3%"],[2,"margin","2%","padding","10%"],[1,""],[1,"card-title","green"],[1,"black-text"],[1,"test"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Edit",1,"px-2","text-primary",3,"routerLink"],[1,"card-body",2,"display","grid","justify-items","center"],[2,"display","grid","justify-items","center"],["xmlns","http://www.w3.org/2000/svg","width","150","height","150","viewBox","0 0 100 100","fill","none",2,"display","grid","justify-items","center"],["cx","50","cy","50","r","45","fill","#E6F3F0","fill-opacity","0.8"],["x","20","y","20","width","60","height","60","clip-path","url(#circleView)",1,"img"],[1,"tb"],[1,"tr"],[1,"black-text",2,"text-align","right"],[1,"black-text",2,"margin-right","20px"],[1,"green",2,"text-align","left"],[2,"margin-left","20px"],[2,"margin-top","5px"],[1,"card-footer"]],template:function(i,h){i&1&&(l(0,"br")(1,"br")(2,"br"),r(3,"div",0)(4,"h2"),s(5," \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645"),o(),l(6,"br")(7,"br"),r(8,"div",1),F(9,U,34,7,"div",2),o()()),i&2&&(a(9),S("ngForOf",h.Categories))},dependencies:[_,T,z],styles:['@font-face{font-family:AdvertisingExtraBold-1;src:("./AdvertisingExtraBold-1.ttf") format("truetype")}.card[_ngcontent-%COMP%]{box-shadow:0 3px 10px #0003}@media (max-width: 768px){.card-title[_ngcontent-%COMP%]{font-size:1em}.row[_ngcontent-%COMP%]{grid-gap:20px}.green[_ngcontent-%COMP%]{color:#05532a;font-family:"Tajawal, sans-serif-1";font-size:10px;font-style:normal;font-weight:800}}table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]{background:#0000000A}.container[_ngcontent-%COMP%]{--bs-gutter-x: 5.5rem}.test[_ngcontent-%COMP%]:after{content:"\\2807";display:flex;justify-content:flex-end;font-size:25px}.green[_ngcontent-%COMP%]{color:#05532a;text-align:right;font-family:Tajawal;font-size:20px;font-style:normal;font-weight:1000}.black-text[_ngcontent-%COMP%]{font-weight:700}h2[_ngcontent-%COMP%]{font-family:Tajawal,sans-serif;font-size:20px;font-weight:700;line-height:24px;letter-spacing:0em;text-align:right}a[_ngcontent-%COMP%]{text-decoration:none;color:#000}']});let n=e;return n})();export{et as a};