import{a as R}from"./chunk-DIDUALKL.js";import{c as H,k as J}from"./chunk-XKH77S27.js";import{m as U}from"./chunk-BKPI2KSS.js";import{X as V,Z as O}from"./chunk-ARAQLGTM.js";import{Ca as m,Cb as C,Da as g,Ib as _,Ka as v,Kc as h,Lc as E,Ob as r,Pc as S,Qb as k,Rb as L,Yd as F,Zd as N,ac as s,bc as l,dc as M,ec as I,fe as W,gc as d,jc as f,je as j,lc as c,nb as T,od as D,oe as $,pd as y,qb as a,td as P,vb as b,wc as w,xc as u,xd as z,zc as x}from"./chunk-KR3MWAJY.js";var X=(t,i,e,n,o)=>({width:t,height:i,minWidth:e,minHeight:n,background:o}),Y=(t,i,e,n,o)=>({width:t,height:i,minWidth:e,minHeight:n,borderRadius:o}),Z=(t,i,e,n,o,p)=>({width:t,height:i,minWidth:e,minHeight:n,borderRadius:o,background:p});function ee(t,i){if(t&1&&(s(0,"div",2),u(1),l()),t&2){let e=c();r("ngStyle",h(2,X,e.size===0?"":e.size+"px",e.size===0?"":e.size+"px",e.size+"px",e.size+"px",e.backgroundColor)),a(),x(" ",e.firstLetter,`
`)}}function te(t,i){if(t&1){let e=d();s(0,"img",5),f("error",function(){m(e);let o=c(2);return g(o.onError())}),l()}if(t&2){let e=c(2);r("src",e.src,T)("ngStyle",h(3,Y,e.size===0?"":e.size+"px",e.size===0?"":e.size+"px",e.size+"px",e.size+"px",e.radius+"px"))("alt",e.firstLetter)}}function ie(t,i){if(t&1&&(s(0,"div",2),u(1),l()),t&2){let e=c(2);r("ngStyle",E(2,Z,e.size===0?"":e.size+"px",e.size===0?"":e.size+"px",e.size+"px",e.size+"px",e.radius+"px",e.backgroundColor)),a(),x(" ",e.firstLetter," ")}}function ne(t,i){if(t&1&&_(0,te,1,9,"img",3)(1,ie,2,9,"div",4),t&2){let e=c();r("ngIf",!e.isError),a(),r("ngIf",e.isError)}}var q=class t{src="";name="";size=35;radius=3;check=!0;backgroundColor="#1890ff";firstLetter="";isError=!1;constructor(){}ngOnInit(){this.src||(this.generateColor(),this.getFirstLetter())}generateColor(){this.backgroundColor=`linear-gradient(45deg, #fff, ${H()} 41%)`}getFirstLetter(){this.name&&(this.firstLetter=J(this.name)[0].toUpperCase())}onError(){this.isError=!0,this.generateColor(),this.getFirstLetter()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-logo"]],inputs:{src:"src",name:"name",size:"size",radius:"radius",check:"check"},decls:3,vars:2,consts:[["img",""],["class","circle common-icon",3,"ngStyle",4,"ngIf","ngIfElse"],[1,"circle","common-icon",3,"ngStyle"],["class","icon common-icon","draggable","false","loading","lazy",3,"src","ngStyle","alt","error",4,"ngIf"],["class","circle common-icon",3,"ngStyle",4,"ngIf"],["draggable","false","loading","lazy",1,"icon","common-icon",3,"error","src","ngStyle","alt"]],template:function(e,n){if(e&1&&_(0,ee,2,8,"div",1)(1,ne,2,2,"ng-template",null,0,S),e&2){let o=w(2);r("ngIf",!n.src)("ngIfElse",o)}},dependencies:[z,y,P],styles:['.icon[_ngcontent-%COMP%]{position:relative;display:inline-block;vertical-align:middle;pointer-events:none;background-color:#eee;border-radius:3px;object-fit:cover;transition:all .12s linear}.icon[_ngcontent-%COMP%]:after{content:"" attr(alt);z-index:2;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1890ff;color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px}.circle[_ngcontent-%COMP%]{color:#fff;display:flex;justify-content:center;align-items:center;border-radius:50%;font-size:18px}'],changeDetection:0})};function oe(t,i){if(t&1){let e=d();s(0,"div",3),f("click",function(o){let p=m(e).$implicit,B=c();return g(B.jumpService.goUrl(o,p.url))}),u(1),l()}if(t&2){let e=i.$implicit,n=c();L("background-color: "+(n.tagMap[e.id]&&n.tagMap[e.id].color)),k("cursor-pointer",e.url),a(),x(" ",n.tagMap[e.id]&&n.tagMap[e.id].name," ")}}function re(t,i){if(t&1){let e=d();s(0,"div",7),f("click",function(o){m(e);let p=c(2);return g(p.openEditWebMoal(o))}),l()}}function ce(t,i){if(t&1){let e=d();s(0,"div",8),f("click",function(o){m(e);let p=c(2);return g(p.openMoveWebModal(o))}),l()}}function ae(t,i){if(t&1){let e=d();s(0,"div",9),f("click",function(){m(e);let o=c(2);return g(o.confirmDel())}),l()}}function se(t,i){if(t&1&&(M(0),_(1,re,1,0,"div",4)(2,ce,1,0,"div",5)(3,ae,1,0,"div",6),I()),t&2){let e=c();a(),r("ngIf",e.isLogin||e.permissions.edit),a(),r("ngIf",e.isLogin),a(),r("ngIf",e.isLogin||e.permissions.del)}}var A=class t{constructor(i){this.jumpService=i}data=[];action=!1;onDelete=new v;onMove=new v;onEdit=new v;$t=$;isLogin=F;tagMap=j;permissions=N(W);handleClick(i){i.stopPropagation(),i.preventDefault()}openEditWebMoal(i){i.stopPropagation(),i.preventDefault(),this.onEdit.emit()}confirmDel(){this.onDelete.emit()}openMoveWebModal(i){i.stopPropagation(),i.preventDefault(),this.onMove.emit()}static \u0275fac=function(e){return new(e||t)(b(R))};static \u0275cmp=C({type:t,selectors:[["tag-list"]],inputs:{data:"data",action:"action"},outputs:{onDelete:"onDelete",onMove:"onMove",onEdit:"onEdit"},decls:3,vars:2,consts:[[1,"tagbox"],["class","tag-item",3,"cursor-pointer","style","click",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"tag-item",3,"click"],["class","tag-item cursor-pointer tag-action","style","background-color: #1f883d","nz-icon","","nzType","edit","nzTheme","outline",3,"click",4,"ngIf"],["class","tag-item cursor-pointer tag-action","style","background-color: #108ee9","nz-icon","","nzType","swap","nzTheme","outline",3,"click",4,"ngIf"],["class","tag-item cursor-pointer tag-action bg-red-500","nz-icon","","nzType","delete","nzTheme","outline","nzOkType","danger",3,"click",4,"ngIf"],["nz-icon","","nzType","edit","nzTheme","outline",1,"tag-item","cursor-pointer","tag-action",2,"background-color","#1f883d",3,"click"],["nz-icon","","nzType","swap","nzTheme","outline",1,"tag-item","cursor-pointer","tag-action",2,"background-color","#108ee9",3,"click"],["nz-icon","","nzType","delete","nzTheme","outline","nzOkType","danger",1,"tag-item","cursor-pointer","tag-action","bg-red-500",3,"click"]],template:function(e,n){e&1&&(s(0,"div",0),_(1,oe,2,5,"div",1)(2,se,4,3,"ng-container",2),l()),e&2&&(a(),r("ngForOf",n.data),a(),r("ngIf",n.action))},dependencies:[z,D,y,O,V,U],styles:[".tagbox[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:6px}.tag-item[_ngcontent-%COMP%]{padding:0 6px;border-radius:2px;font-size:12px;display:flex;align-items:center;transition:all .1s linear;color:#fff;min-height:15px}.tag-item[_ngcontent-%COMP%]:hover{opacity:.8}.tag-action[_ngcontent-%COMP%]{display:none}"]})};export{q as a,A as b};
