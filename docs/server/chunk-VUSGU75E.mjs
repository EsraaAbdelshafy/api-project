import './polyfills.server.mjs';
import{B as F,C as I,D,E as T,F as j,I as A,M as H,P as N,Q as R,R as L,S as O,T as P,a as v,b as g,c as p,d as h,e as s,f as x,g as b,h as C,i as y,j as S,k as i,l as r,m as d,n as E,o as a,p as u,q as w,r as k,s as m,z as M}from"./chunk-X4AWSV67.mjs";var U=(()=>{let t=class t{constructor(){this.title="project"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-navbar"]],standalone:!0,features:[m],decls:18,vars:0,consts:[[1,"fixed-top"],[1,"navbar","navbar-expand-lg","bg-black","navbar-dark"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","mx-auto"],[1,"nav-item"],["routerLink","home","routerLinkActive","bg-primary rounded-pill",1,"nav-link"],["routerLink","contact","routerLinkActive","bg-primary rounded-pill",1,"nav-link"],["routerLink","about","routerLinkActive","bg-primary rounded-pill",1,"nav-link"]],template:function(o,l){o&1&&(i(0,"div",0)(1,"nav",1)(2,"div",2)(3,"a",3),a(4,"Navbar"),r(),i(5,"button",4),d(6,"span",5),r(),i(7,"div",6)(8,"ul",7)(9,"li",8)(10,"a",9),a(11,"home"),r()(),i(12,"li",8)(13,"a",10),a(14,"contact"),r()(),i(15,"li",8)(16,"a",11),a(17,"about"),r()()()()()()())},dependencies:[N,R]});let e=t;return e})();var z=(()=>{let t=class t{constructor(){this.title="project"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-about"]],standalone:!0,features:[m],decls:3,vars:0,template:function(o,l){o&1&&(i(0,"div")(1,"h3"),a(2," welcom about "),r()())},styles:["div[_ngcontent-%COMP%]{padding:50px;border:5px solid red;margin:20px;text-align:center}"]});let e=t;return e})();var B=(()=>{let t=class t{constructor(n){this._HttpClient=n}getProducts(){return this._HttpClient.get("https://fakestoreapi.com/products")}};t.\u0275fac=function(o){return new(o||t)(g(F))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function tt(e,t){if(e&1&&(i(0,"div",3)(1,"div",4),d(2,"img",5),i(3,"h3"),a(4),r(),i(5,"p"),a(6),r(),i(7,"span",6),a(8),r(),i(9,"h5"),a(10),r(),i(11,"div")(12,"span",7),a(13),r()()()()),e&2){let c=t.$implicit;s(2),b("src",c.image,h),s(2),u(c.title.split(" ",2).join(" ")),s(2),u(c.description.split(" ",5).join(" ")),s(2),u(c.rating.rate),s(2),w(" ",c.category,""),s(3),u(c.rating.count)}}var $=(()=>{let t=class t{constructor(n){this._ProductsService=n,this.title="project",this.role="men's clothing",this.products=[]}ngOnInit(){this._ProductsService.getProducts().subscribe({next:n=>{this.products=n},error:n=>{console.log(n)}})}};t.\u0275fac=function(o){return new(o||t)(x(B))},t.\u0275cmp=p({type:t,selectors:[["app-home"]],standalone:!0,features:[m],decls:6,vars:0,consts:[[1,"p-2","text-center","bg-info"],[1,"container"],[1,"row","g-2"],[1,"col-md-3"],[1,"border","border-danger"],["height","400px","alt","",1,"w-100",3,"src"],[1,"bg-success-subtle"],[1,"bg-danger-subtle"]],template:function(o,l){o&1&&(i(0,"h1",0),a(1,"the populer products"),r(),i(2,"div",1)(3,"div",2),y(4,tt,14,6,"div",3,C),r()()),o&2&&(s(4),S(l.products))}});let e=t;return e})();var V=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-notfound"]],standalone:!0,features:[m],decls:2,vars:0,template:function(o,l){o&1&&(i(0,"p"),a(1,"notfound works!"),r())}});let e=t;return e})();var q=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-flowers"]],standalone:!0,features:[m],decls:2,vars:0,template:function(o,l){o&1&&(i(0,"p"),a(1,"flowers works!"),r())}});let e=t;return e})();var G=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-animals"]],standalone:!0,features:[m],decls:2,vars:0,template:function(o,l){o&1&&(i(0,"p"),a(1,"animals works!"),r())}});let e=t;return e})();var J=(()=>{let t=class t{constructor(n){this._HttpClient=n}getmovies(){return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=48d62e7452a1f1a5e6018217ac27c50a&language=en-US")}};t.\u0275fac=function(o){return new(o||t)(g(F))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function ot(e,t){if(e&1&&(i(0,"div",3)(1,"h2"),a(2),r(),d(3,"img",4),i(4,"p"),a(5),r(),i(6,"span",5),a(7),r()()),e&2){let c=t.$implicit,n=E();s(2),k("",c.title," ",c.name,""),s(),b("src",n.imgbase+c.poster_path,h),s(2),u(c.overview.split(" ",3).join(" ")),s(2),w("vote:",c.vote_count,"")}}var K=(()=>{let t=class t{constructor(n){this._MoviesService=n,this.title="project",this.imgbase="https://image.tmdb.org/t/p/w500",this.movies=[]}ngOnInit(){this._MoviesService.getmovies().subscribe({next:n=>{this.movies=n.results},error:n=>{console.log(n)}})}};t.\u0275fac=function(o){return new(o||t)(x(J))},t.\u0275cmp=p({type:t,selectors:[["app-contact"]],standalone:!0,features:[m],decls:7,vars:0,consts:[[1,"text-bg-primary","text-center","p-5","m-4"],[1,"container"],[1,"row","g-3"],[1,"col-md-3","border"],["height","200px","alt","",1,"w-100",3,"src"],[1,"bg-danger-subtle"]],template:function(o,l){o&1&&(i(0,"h1",0),a(1,"movies componant"),r(),d(2,"hr"),i(3,"div",1)(4,"div",2),y(5,ot,8,5,"div",3,C),r()()),o&2&&(s(5),S(l.movies))}});let e=t;return e})();var Q=(()=>{let t=class t{constructor(){this.title="project"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-root"]],standalone:!0,features:[m],decls:6,vars:0,consts:[[1,"text-bg-info","text-center","p-5","m-4"]],template:function(o,l){o&1&&(i(0,"h1",0),a(1,"our products"),r(),d(2,"app-navbar")(3,"router-outlet"),i(4,"h1",0),a(5,"END view"),r())},dependencies:[H,U]});let e=t;return e})();var W=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:$,title:"home"},{path:"about",component:z,title:"about"},{path:"contact",component:K,title:"contact",children:[{path:"animals",component:G},{path:"flowers",component:q}]},{path:"**",component:V,title:"NOTFOUND"}];var X={providers:[L(W,P(),O({scrollPositionRestoration:"top"})),j(),I(D())]};var nt={providers:[A()]},Y=M(X,nt);var it=()=>T(Q,Y),Xt=it;export{Xt as a};
