"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[719],{729:function(e,s,a){a.d(s,{Z:function(){return E}});var t=a(683),i=a(791),n=a(439),r={carsListItemDiv:"CarsListItem_carsListItemDiv__dJmNX",itemImg:"CarsListItem_itemImg__eQfyF",btnHeart:"CarsListItem_btnHeart__xjQ10",titelItem:"CarsListItem_titelItem__qTbT7",titelItemSpan:"CarsListItem_titelItemSpan__ArRS6",titelPrice:"CarsListItem_titelPrice__G2L6B",ulList:"CarsListItem_ulList__SE3Ji",liList:"CarsListItem_liList__eVtku",learnMoreBtn:"CarsListItem_learnMoreBtn__K4-Aa"};var l=a.p+"static/media/heart.ac060e771360fcc26ebb0c86173c8396.svg";var c=a.p+"static/media/heartblue.623a3b874365d724c658e79a860ad4a4.svg",o="CarDetails_backdrop__5X5MR",m="CarDetails_modal__U+9f5",d="CarDetails_closeButton__jGwSQ",_="CarDetails_carImage__nQf5D",u="CarDetails_modalTitel__a0R+s",C="CarDetails_modalTitelSpan__BTdek",h="CarDetails_modalList__HgwMD",p="CarDetails_modalItem__f-sIh",j="CarDetails_modalDescription__5wtiY",x="CarDetails_accessoriesTitel__kv6cK",f="CarDetails_listAccessories__-5VKr",g="CarDetails_itemAccessories__Q8QCI",v="CarDetails_detailsTitel__4+eCv",N="CarDetails_detailsList__PqAX-",L="CarDetails_detailsItem__GC9jT",I="CarDetails_detailsItemSpan__gwzAB",b="CarDetails_rentalBtn__RxLoo",D="CarDetails_rentalLink__wR-Ap";var k=a.p+"static/media/x.f3cbdd58dc25ca7cbb3d242106b56fb9.svg",y=a(184),w=function(e){var s=e.advert,a=e.onClose;(0,i.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);var t=s.rentalConditions.split("\n"),n=s.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),r=function(e){var s=e.split(/(\d+)/);return(0,y.jsx)(y.Fragment,{children:s.map((function(e,s){return/^\d+$/.test(e)?(0,y.jsx)("span",{className:I,children:e},s):e}))})};return(0,y.jsx)("div",{className:o,onClick:a,children:(0,y.jsxs)("div",{className:m,onClick:function(e){return e.stopPropagation()},children:[(0,y.jsx)("button",{className:d,type:"button",onClick:a,children:(0,y.jsx)("img",{src:k,alt:"close"})}),(0,y.jsx)("img",{src:s.img,alt:"car",className:_}),(0,y.jsxs)("h1",{className:u,children:[s.make," ",(0,y.jsx)("span",{className:C,children:s.model}),", ",s.year]}),(0,y.jsx)("ul",{className:h,children:(0,y.jsxs)("li",{className:p,children:[s.address," | Id: ",s.id," | Year: ",s.year," | Type: ",s.type," | Fuel Consumption: ",s.fuelConsumption," | Engine Size: ",s.engineSize]})}),(0,y.jsx)("p",{className:j,children:s.description}),(0,y.jsx)("h2",{className:x,children:"Accessories and functionalities:"}),(0,y.jsxs)("ul",{className:f,children:[(0,y.jsx)("li",{className:g,children:s.accessories.join(" | ")}),(0,y.jsx)("li",{className:g,children:s.functionalities.join(" | ")})]}),(0,y.jsx)("h2",{className:v,children:"Rental Conditions:"}),(0,y.jsxs)("ul",{className:N,children:[t.map((function(e,s){return(0,y.jsx)("li",{className:L,children:r(e)},s)})),(0,y.jsxs)("li",{className:L,children:["Mileage: ",(0,y.jsx)("span",{className:I,children:n})]}),(0,y.jsxs)("li",{className:L,children:["Price: ",(0,y.jsx)("span",{className:I,children:s.rentalPrice})]})]}),(0,y.jsx)("button",{className:b,children:(0,y.jsx)("a",{className:D,href:"tel:+380730000000",children:"Rental car"})})]})})},S=function(e){var s=e.img,a=e.make,t=e.model,o=e.year,m=e.rentalPrice,d=e.address,_=e.rentalCompany,u=e.type,C=e.id,h=e.functionalities,p=e.fuelConsumption,j=e.engineSize,x=e.description,f=e.accessories,g=e.rentalConditions,v=e.mileage,N=e.isFavorite,L=e.onToggleFavorite,I=(0,i.useState)(!1),b=(0,n.Z)(I,2),D=b[0],k=b[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:r.carsListItemDiv,children:[(0,y.jsx)("button",{className:r.btnHeart,type:"button",onClick:function(){return L({id:C,img:s,make:a,model:t,year:o,rentalPrice:m,address:d,rentalCompany:_,type:u,functionalities:h})},children:(0,y.jsx)("img",{className:r.btnHeartImg,src:N?c:l,alt:"heart"})}),(0,y.jsx)("img",{className:r.itemImg,src:s,alt:"Car",width:"274",height:"268"}),(0,y.jsxs)("h1",{className:r.titelItem,children:[a," ",(0,y.jsx)("span",{className:r.titelItemSpan,children:t}),", ",o," ",(0,y.jsx)("span",{className:r.titelPrice,children:m})]}),(0,y.jsx)("ul",{className:r.ulList,children:(0,y.jsxs)("li",{className:r.liList,children:[d," | ",_," | ",u," | ",t," | ",C," | ",h[0]]})}),(0,y.jsx)("button",{className:r.learnMoreBtn,type:"button",onClick:function(){k(!0)},children:"Learn more"})]}),D&&(0,y.jsx)(w,{advert:{img:s,make:a,model:t,year:o,rentalPrice:m,address:d,rentalCompany:_,type:u,id:C,functionalities:h,fuelConsumption:p,engineSize:j,description:x,accessories:f,rentalConditions:g,mileage:v},onClose:function(){k(!1)}})]})},T="CarsList_mainSection__ZEY7m",F="CarsList_listContainer__dh-Ot",P="CarsList_carsList__PSLgy",B="CarsList_carsListItem__Uimpd",A="CarsList_anverbInfo__sp06C",E=function(e){var s=e.adverts,a=e.index,i=e.favorites,n=e.onToggleFavorite;return(0,y.jsx)("section",{className:T,children:(0,y.jsx)("div",{className:F,children:(0,y.jsx)("ul",{className:P,children:s&&s.length>0?s.map((function(e){return(0,y.jsx)("li",{className:B,children:(0,y.jsx)(S,(0,t.Z)((0,t.Z)({},e),{},{isFavorite:i.some((function(s){return s.id===e.id})),onToggleFavorite:function(){return n(e)}}))},a)})):(0,y.jsx)("p",{className:A,children:"No adverts available"})})})})}},719:function(e,s,a){a.r(s);a(791);var t=a(729),i=a(184);s.default=function(e){var s=e.favorites,a=e.onToggleFavorite;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.Z,{adverts:s,favorites:s,onToggleFavorite:a})})}}}]);
//# sourceMappingURL=719.f9fb0143.chunk.js.map