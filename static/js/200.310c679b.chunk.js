"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[200],{722:function(e,s,a){a.d(s,{Z:function(){return A}});var t=a(791),i=a(439),r={carsListItemDiv:"CarsListItem_carsListItemDiv__dJmNX",itemImg:"CarsListItem_itemImg__eQfyF",btnHeart:"CarsListItem_btnHeart__xjQ10",titelItem:"CarsListItem_titelItem__qTbT7",titelItemSpan:"CarsListItem_titelItemSpan__ArRS6",titelPrice:"CarsListItem_titelPrice__G2L6B",ulList:"CarsListItem_ulList__SE3Ji",liList:"CarsListItem_liList__eVtku",learnMoreBtn:"CarsListItem_learnMoreBtn__K4-Aa"};var n=a.p+"static/media/heart.ac060e771360fcc26ebb0c86173c8396.svg";var l=a.p+"static/media/heartblue.623a3b874365d724c658e79a860ad4a4.svg",c="CarDetails_backdrop__5X5MR",o="CarDetails_modal__U+9f5",m="CarDetails_closeButton__jGwSQ",d="CarDetails_carImage__nQf5D",_="CarDetails_modalTitel__a0R+s",u="CarDetails_modalTitelSpan__BTdek",h="CarDetails_modalList__HgwMD",C="CarDetails_modalItem__f-sIh",j="CarDetails_modalDescription__5wtiY",v="CarDetails_accessoriesTitel__kv6cK",x="CarDetails_listAccessories__-5VKr",p="CarDetails_itemAccessories__Q8QCI",f="CarDetails_detailsTitel__4+eCv",g="CarDetails_detailsList__PqAX-",N="CarDetails_detailsItem__GC9jT",L="CarDetails_detailsItemSpan__gwzAB",I="CarDetails_rentalBtn__RxLoo",b="CarDetails_rentalLink__wR-Ap";var D=a.p+"static/media/x.f3cbdd58dc25ca7cbb3d242106b56fb9.svg",k=a(184),w=function(e){var s,a=e.advert,i=e.onClose;(0,t.useEffect)((function(){var e=function(e){"Escape"===e.code&&i()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[i]);var r=a.rentalConditions?a.rentalConditions.split("\n"):[],n=a.mileage?a.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):"",l=function(e){var s=e.split(/(\d+)/);return(0,k.jsx)(k.Fragment,{children:s.map((function(e,s){return/^\d+$/.test(e)?(0,k.jsx)("span",{className:L,children:e},s):e}))})};return(0,k.jsx)("div",{className:c,onClick:i,children:(0,k.jsxs)("div",{className:o,onClick:function(e){return e.stopPropagation()},children:[(0,k.jsx)("button",{className:m,type:"button",onClick:i,children:(0,k.jsx)("img",{src:D,alt:"close"})}),(0,k.jsx)("img",{src:a.img,alt:"car",className:d}),(0,k.jsxs)("h1",{className:_,children:[a.make," ",(0,k.jsx)("span",{className:u,children:a.model}),", ",a.year]}),(0,k.jsx)("ul",{className:h,children:(0,k.jsxs)("li",{className:C,children:[a.address," | Id: ",a.id," | Year: ",a.year," | Type: ",a.type," | Fuel Consumption: ",a.fuelConsumption," | Engine Size: ",a.engineSize]})}),(0,k.jsx)("p",{className:j,children:a.description}),(0,k.jsx)("h2",{className:v,children:"Accessories and functionalities:"}),(0,k.jsxs)("ul",{className:x,children:[(0,k.jsx)("li",{className:p,children:null===(s=a.accessories)||void 0===s?void 0:s.join(" | ")}),(0,k.jsx)("li",{className:p,children:a.functionalities.join(" | ")})]}),(0,k.jsx)("h2",{className:f,children:"Rental Conditions:"}),(0,k.jsxs)("ul",{className:g,children:[r.map((function(e,s){return(0,k.jsx)("li",{className:N,children:l(e)},s)})),(0,k.jsxs)("li",{className:N,children:["Mileage: ",(0,k.jsx)("span",{className:L,children:n})]}),(0,k.jsxs)("li",{className:N,children:["Price: ",(0,k.jsx)("span",{className:L,children:a.rentalPrice})]})]}),(0,k.jsx)("button",{className:I,children:(0,k.jsx)("a",{className:b,href:"tel:+380730000000",children:"Rental car"})})]})})},y=function(e){var s=e.advert,a=e.isFavorite,c=e.onToggleFavorite,o=(0,t.useState)(!1),m=(0,i.Z)(o,2),d=m[0],_=m[1];return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("div",{className:r.carsListItemDiv,children:[(0,k.jsx)("button",{className:r.btnHeart,type:"button",onClick:function(){return c(s)},children:(0,k.jsx)("img",{className:r.btnHeartImg,src:a?l:n,alt:"heart"})}),(0,k.jsx)("img",{className:r.itemImg,src:s.img,alt:"Car",width:"274",height:"268"}),(0,k.jsxs)("h1",{className:r.titelItem,children:[s.make," ",(0,k.jsx)("span",{className:r.titelItemSpan,children:s.model}),", ",s.year," ",(0,k.jsx)("span",{className:r.titelPrice,children:s.rentalPrice})]}),(0,k.jsx)("ul",{className:r.ulList,children:(0,k.jsxs)("li",{className:r.liList,children:[s.address," | ",s.rentalCompany," | ",s.type," | ",s.model," | ",s.id," | ",s.functionalities[0]]})}),(0,k.jsx)("button",{className:r.learnMoreBtn,type:"button",onClick:function(){_(!0)},children:"Learn more"})]}),d&&(0,k.jsx)(w,{advert:s,onClose:function(){_(!1)}})]})},S="CarsList_mainSection__ZEY7m",T="CarsList_listContainer__dh-Ot",F="CarsList_carsList__PSLgy",B="CarsList_carsListItem__Uimpd",P="CarsList_anverbInfo__sp06C",A=function(e){var s=e.adverts,a=e.favorites,t=e.onToggleFavorite;return(0,k.jsx)("section",{className:S,children:(0,k.jsx)("div",{className:T,children:(0,k.jsx)("ul",{className:F,children:s&&s.length>0?s.map((function(e){return(0,k.jsx)("li",{className:B,children:(0,k.jsx)(y,{advert:e,isFavorite:a.some((function(s){return s.id===e.id})),onToggleFavorite:function(){return t(e)}})},e.id)})):(0,k.jsx)("p",{className:P,children:"No adverts available"})})})})}},200:function(e,s,a){a.r(s);a(791);var t=a(722),i=a(184);s.default=function(e){var s=e.favorites,a=e.onToggleFavorite;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.Z,{adverts:s,favorites:s,onToggleFavorite:a})})}}}]);
//# sourceMappingURL=200.310c679b.chunk.js.map