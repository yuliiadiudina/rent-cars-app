"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[370],{729:function(e,t,a){a.d(t,{Z:function(){return E}});var s=a(683),i=a(791),n=a(439),r={carsListItemDiv:"CarsListItem_carsListItemDiv__dJmNX",itemImg:"CarsListItem_itemImg__eQfyF",btnHeart:"CarsListItem_btnHeart__xjQ10",titelItem:"CarsListItem_titelItem__qTbT7",titelItemSpan:"CarsListItem_titelItemSpan__ArRS6",titelPrice:"CarsListItem_titelPrice__G2L6B",ulList:"CarsListItem_ulList__SE3Ji",liList:"CarsListItem_liList__eVtku",learnMoreBtn:"CarsListItem_learnMoreBtn__K4-Aa"};var l=a.p+"static/media/heart.ac060e771360fcc26ebb0c86173c8396.svg";var c=a.p+"static/media/heartblue.623a3b874365d724c658e79a860ad4a4.svg",o="CarDetails_backdrop__5X5MR",m="CarDetails_modal__U+9f5",d="CarDetails_closeButton__jGwSQ",u="CarDetails_carImage__nQf5D",_="CarDetails_modalTitel__a0R+s",p="CarDetails_modalTitelSpan__BTdek",h="CarDetails_modalList__HgwMD",f="CarDetails_modalItem__f-sIh",v="CarDetails_modalDescription__5wtiY",C="CarDetails_accessoriesTitel__kv6cK",x="CarDetails_listAccessories__-5VKr",j="CarDetails_itemAccessories__Q8QCI",g="CarDetails_detailsTitel__4+eCv",N="CarDetails_detailsList__PqAX-",L="CarDetails_detailsItem__GC9jT",b="CarDetails_detailsItemSpan__gwzAB",I="CarDetails_rentalBtn__RxLoo",k="CarDetails_rentalLink__wR-Ap";var y=a.p+"static/media/x.f3cbdd58dc25ca7cbb3d242106b56fb9.svg",D=a(184),w=function(e){var t=e.advert,a=e.onClose;(0,i.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);var s=t.rentalConditions.split("\n"),n=t.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),r=function(e){var t=e.split(/(\d+)/);return(0,D.jsx)(D.Fragment,{children:t.map((function(e,t){return/^\d+$/.test(e)?(0,D.jsx)("span",{className:b,children:e},t):e}))})};return(0,D.jsx)("div",{className:o,onClick:a,children:(0,D.jsxs)("div",{className:m,onClick:function(e){return e.stopPropagation()},children:[(0,D.jsx)("button",{className:d,type:"button",onClick:a,children:(0,D.jsx)("img",{src:y,alt:"close"})}),(0,D.jsx)("img",{src:t.img,alt:"car",className:u}),(0,D.jsxs)("h1",{className:_,children:[t.make," ",(0,D.jsx)("span",{className:p,children:t.model}),", ",t.year]}),(0,D.jsx)("ul",{className:h,children:(0,D.jsxs)("li",{className:f,children:[t.address," | Id: ",t.id," | Year: ",t.year," | Type: ",t.type," | Fuel Consumption: ",t.fuelConsumption," | Engine Size: ",t.engineSize]})}),(0,D.jsx)("p",{className:v,children:t.description}),(0,D.jsx)("h2",{className:C,children:"Accessories and functionalities:"}),(0,D.jsxs)("ul",{className:x,children:[(0,D.jsx)("li",{className:j,children:t.accessories.join(" | ")}),(0,D.jsx)("li",{className:j,children:t.functionalities.join(" | ")})]}),(0,D.jsx)("h2",{className:g,children:"Rental Conditions:"}),(0,D.jsxs)("ul",{className:N,children:[s.map((function(e,t){return(0,D.jsx)("li",{className:L,children:r(e)},t)})),(0,D.jsxs)("li",{className:L,children:["Mileage: ",(0,D.jsx)("span",{className:b,children:n})]}),(0,D.jsxs)("li",{className:L,children:["Price: ",(0,D.jsx)("span",{className:b,children:t.rentalPrice})]})]}),(0,D.jsx)("button",{className:I,children:(0,D.jsx)("a",{className:k,href:"tel:+380730000000",children:"Rental car"})})]})})},S=function(e){var t=e.img,a=e.make,s=e.model,o=e.year,m=e.rentalPrice,d=e.address,u=e.rentalCompany,_=e.type,p=e.id,h=e.functionalities,f=e.fuelConsumption,v=e.engineSize,C=e.description,x=e.accessories,j=e.rentalConditions,g=e.mileage,N=e.isFavorite,L=e.onToggleFavorite,b=(0,i.useState)(!1),I=(0,n.Z)(b,2),k=I[0],y=I[1];return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("div",{className:r.carsListItemDiv,children:[(0,D.jsx)("button",{className:r.btnHeart,type:"button",onClick:function(){return L({id:p,img:t,make:a,model:s,year:o,rentalPrice:m,address:d,rentalCompany:u,type:_,functionalities:h})},children:(0,D.jsx)("img",{className:r.btnHeartImg,src:N?c:l,alt:"heart"})}),(0,D.jsx)("img",{className:r.itemImg,src:t,alt:"Car",width:"274",height:"268"}),(0,D.jsxs)("h1",{className:r.titelItem,children:[a," ",(0,D.jsx)("span",{className:r.titelItemSpan,children:s}),", ",o," ",(0,D.jsx)("span",{className:r.titelPrice,children:m})]}),(0,D.jsx)("ul",{className:r.ulList,children:(0,D.jsxs)("li",{className:r.liList,children:[d," | ",u," | ",_," | ",s," | ",p," | ",h[0]]})}),(0,D.jsx)("button",{className:r.learnMoreBtn,type:"button",onClick:function(){y(!0)},children:"Learn more"})]}),k&&(0,D.jsx)(w,{advert:{img:t,make:a,model:s,year:o,rentalPrice:m,address:d,rentalCompany:u,type:_,id:p,functionalities:h,fuelConsumption:f,engineSize:v,description:C,accessories:x,rentalConditions:j,mileage:g},onClose:function(){y(!1)}})]})},Z="CarsList_mainSection__ZEY7m",T="CarsList_listContainer__dh-Ot",F="CarsList_carsList__PSLgy",B="CarsList_carsListItem__Uimpd",P="CarsList_anverbInfo__sp06C",E=function(e){var t=e.adverts,a=e.index,i=e.favorites,n=e.onToggleFavorite;return(0,D.jsx)("section",{className:Z,children:(0,D.jsx)("div",{className:T,children:(0,D.jsx)("ul",{className:F,children:t&&t.length>0?t.map((function(e){return(0,D.jsx)("li",{className:B,children:(0,D.jsx)(S,(0,s.Z)((0,s.Z)({},e),{},{isFavorite:i.some((function(t){return t.id===e.id})),onToggleFavorite:function(){return n(e)}}))},a)})):(0,D.jsx)("p",{className:P,children:"No adverts available"})})})})}},370:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var s=a(433),i=a(861),n=a(439),r=a(757),l=a.n(r),c=a(791),o=a(729),m=a(16);m.Z.defaults.baseURL="https://6661973c63e6a0189feaa096.mockapi.io/adverts";var d=function(){var e=(0,i.Z)(l().mark((function e(){var t,a,s,i=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,a=i.length>1&&void 0!==i[1]?i[1]:12,e.prev=2,e.next=5,m.Z.get("/adverts",{params:{page:t,limit:a}});case 5:return s=e.sent,e.abrupt("return",s.data);case 9:return e.prev=9,e.t0=e.catch(2),console.error("Error:",e.t0.message),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),u=a(455),_="LoadBtn_loadBtn__fjQck",p=a(184),h=function(e){var t=e.onClick;return(0,p.jsx)("button",{type:"button",className:_,onClick:t,children:"Load More"})};var f=function(e){var t=e.favorites,a=e.onToggleFavorite,r=(0,c.useState)(!1),m=(0,n.Z)(r,2),_=m[0],f=m[1],v=(0,c.useState)([]),C=(0,n.Z)(v,2),x=C[0],j=C[1],g=(0,c.useState)(1),N=(0,n.Z)(g,2),L=N[0],b=N[1],I=(0,c.useState)(!0),k=(0,n.Z)(I,2),y=k[0],D=k[1];return(0,c.useEffect)((function(){function e(){return(e=(0,i.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),e.next=4,d(L);case 4:t=e.sent,j((function(e){return[].concat((0,s.Z)(e),(0,s.Z)(t))})),t.length<12&&D(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error:",e.t0.message);case 12:return e.prev=12,f(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[L]),(0,p.jsxs)(p.Fragment,{children:[_&&(0,p.jsx)(u.Z,{}),(0,p.jsx)(o.Z,{adverts:x,favorites:t,onToggleFavorite:a}),y&&!_&&(0,p.jsx)(h,{onClick:function(){b((function(e){return e+1}))}})]})}}}]);
//# sourceMappingURL=370.06b904d6.chunk.js.map