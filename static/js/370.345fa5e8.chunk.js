"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[370],{769:function(t,e,r){r.d(e,{Z:function(){return _}});var a=r(683),s=(r(791),{carsListItemDiv:"CarsListItem_carsListItemDiv__dJmNX",itemImg:"CarsListItem_itemImg__eQfyF",btnHeart:"CarsListItem_btnHeart__xjQ10",titelItem:"CarsListItem_titelItem__qTbT7",titelItemSpan:"CarsListItem_titelItemSpan__ArRS6",ulList:"CarsListItem_ulList__SE3Ji",liList:"CarsListItem_liList__eVtku",learnMoreBtn:"CarsListItem_learnMoreBtn__K4-Aa"});var n=r.p+"static/media/heart.ac060e771360fcc26ebb0c86173c8396.svg";var i=r.p+"static/media/heartblue.623a3b874365d724c658e79a860ad4a4.svg",c=r(184),o=function(t){var e=t.img,r=t.make,a=t.model,o=t.year,l=t.rentalPrice,u=t.address,m=t.rentalCompany,d=t.type,v=t.id,_=t.functionalities,p=t.isFavorite,f=t.onToggleFavorite;return(0,c.jsxs)("div",{className:s.carsListItemDiv,children:[(0,c.jsx)("button",{className:s.btnHeart,type:"button",onClick:function(){return f({id:v,img:e,make:r,model:a,year:o,rentalPrice:l,address:u,rentalCompany:m,type:d,functionalities:_})},children:(0,c.jsx)("img",{className:s.btnHeartImg,src:p?i:n,alt:"heart"})}),(0,c.jsx)("img",{className:s.itemImg,src:e,alt:"Car",width:"274",height:"268"}),(0,c.jsxs)("h1",{className:s.titelItem,children:[r," ",(0,c.jsx)("span",{className:s.titelItemSpan,children:a}),", ",o," ",l]}),(0,c.jsx)("ul",{className:s.ulList,children:(0,c.jsxs)("li",{className:s.liList,children:[u," ",m," ",d," ",a," ",v," ",_]})}),(0,c.jsx)("button",{className:s.learnMoreBtn,type:"button",children:"Learn more"})]})},l="CarsList_mainSection__ZEY7m",u="CarsList_listContainer__dh-Ot",m="CarsList_carsList__PSLgy",d="CarsList_carsListItem__Uimpd",v="CarsList_anverbInfo__sp06C",_=function(t){var e=t.adverts,r=t.index,s=t.favorites,n=t.onToggleFavorite;return(0,c.jsx)("section",{className:l,children:(0,c.jsx)("div",{className:u,children:(0,c.jsx)("ul",{className:m,children:e&&e.length>0?e.map((function(t){return(0,c.jsx)("li",{className:d,children:(0,c.jsx)(o,(0,a.Z)((0,a.Z)({},t),{},{isFavorite:s.some((function(e){return e.id===t.id})),onToggleFavorite:function(){return n(t)}}))},r)})):(0,c.jsx)("p",{className:v,children:"No adverts available"})})})})}},370:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var a=r(433),s=r(861),n=r(439),i=r(757),c=r.n(i),o=r(791),l=r(769),u=r(16);u.Z.defaults.baseURL="https://6661973c63e6a0189feaa096.mockapi.io/adverts";var m=function(){var t=(0,s.Z)(c().mark((function t(){var e,r,a,s=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:1,r=s.length>1&&void 0!==s[1]?s[1]:12,t.prev=2,t.next=5,u.Z.get("/adverts",{params:{page:e,limit:r}});case 5:return a=t.sent,t.abrupt("return",a.data);case 9:return t.prev=9,t.t0=t.catch(2),console.error("Error:",t.t0.message),t.abrupt("return",[]);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}(),d=r(455),v="LoadBtn_loadBtn__fjQck",_=r(184),p=function(t){var e=t.onClick;return(0,_.jsx)("button",{type:"button",className:v,onClick:e,children:"Load More"})};var f=function(t){var e=t.favorites,r=t.onToggleFavorite,i=(0,o.useState)(!1),u=(0,n.Z)(i,2),v=u[0],f=u[1],h=(0,o.useState)([]),g=(0,n.Z)(h,2),L=g[0],x=g[1],C=(0,o.useState)(1),b=(0,n.Z)(C,2),I=b[0],j=b[1],k=(0,o.useState)(!0),N=(0,n.Z)(k,2),Z=N[0],y=N[1];return(0,o.useEffect)((function(){function t(){return(t=(0,s.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,f(!0),t.next=4,m(I);case 4:e=t.sent,x((function(t){return[].concat((0,a.Z)(t),(0,a.Z)(e))})),e.length<12&&y(!1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error("Error:",t.t0.message);case 12:return t.prev=12,f(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[I]),(0,_.jsxs)(_.Fragment,{children:[v&&(0,_.jsx)(d.Z,{}),(0,_.jsx)(l.Z,{adverts:L,favorites:e,onToggleFavorite:r}),Z&&!v&&(0,_.jsx)(p,{onClick:function(){j((function(t){return t+1}))}})]})}}}]);
//# sourceMappingURL=370.345fa5e8.chunk.js.map