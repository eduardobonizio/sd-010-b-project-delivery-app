(this["webpackJsonpdelivery-app-back-end"]=this["webpackJsonpdelivery-app-back-end"]||[]).push([[0],{101:function(e,t,c){},126:function(e,t,c){},129:function(e,t,c){},130:function(e,t,c){},131:function(e,t,c){},133:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),n=c(27),s=c.n(n),i=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,152)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),r(e),n(e),s(e)}))},o=c(65),d=c(2),l={};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EMAIL":return Object(d.a)(Object(d.a)({},e),{},{email:t.payload});case"SET_PASSWORD":return Object(d.a)(Object(d.a)({},e),{},{password:t.payload});default:return e}},j=Object(o.a)({loginReducer:u}),b=Object(o.b)(j),h=c(90),O=c(36),m=(c(101),c(102),c(10)),p=c(8),x=c.n(p),f=c(14),v=c(5),_=c(142),g=c(37),y=c(143),S=c(87),k=c(144),N=c(16),w=c.n(N),I=c(1);var E=function(e){var t=e.setStateEmail,c=e.emailTestId,a=e.title;return Object(I.jsxs)(g.a.Label,{children:[a,Object(I.jsx)(g.a.Control,{id:"email-input","data-testid":c,onChange:function(e){t(e.target.value)},type:"text"})]})},T=c(38);var C=function(e){var t=e.dispatchOnSubmit,c=e.disabled;return Object(I.jsx)(T.a,{variant:"success","data-testid":"common_login__button-login",disabled:c,onClick:t,type:"button",children:"Entrar"})};var P=function(e){var t=e.setStatePassword,c=e.passwordTestId;return Object(I.jsxs)(g.a.Label,{children:["Senha",Object(I.jsx)(g.a.Control,{"data-testid":c,onChange:function(e){t(e.target.value)},type:"password"})]})},D=c(141);var R=function(e){var t=e.hideErrorMessage;return Object(I.jsx)(D.a,{variant:"warning",hidden:t,children:"Usu\xe1rio/Senha inv\xe1lidos"})};var A=function(){var e=Object(m.g)();return Object(I.jsx)(T.a,{variant:"warning",onClick:function(){return e.push("/register")},"data-testid":"common_login__button-register",type:"button",children:"Ainda n\xe3o tenho conta"})},F="https://grupo-19-delivery-app.herokuapp.com",q=function(e){return/\S+@\S+\.\S+/.test(e)},B=function(e){return e.length>11},J=function(e){return e.length>5};var L=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(""),s=Object(v.a)(n,2),i=s[0],o=s[1],d=Object(a.useState)(!0),l=Object(v.a)(d,2),u=l[0],j=l[1],b=Object(a.useState)(!0),h=Object(v.a)(b,2),O=h[0],p=h[1],N=Object(m.g)();Object(a.useEffect)((function(){i&&c&&(q(c)&&J(i)?j(!1):j(!0))}),[c,i]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user"));if(e){var t=e.role;if("customer"===t)return N.push("/customer/products");if("seller"===t)return N.push("/seller/orders")}}));var T=function(){var e=Object(f.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post("".concat(F,"/login"),{email:c,password:i});case 3:t=e.sent,a=t.data,localStorage.setItem("user",JSON.stringify(a)),redirect.to[a.role](),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),3e3,p(!1),setTimeout((function(){return p(!0)}),3e3);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(I.jsx)(_.a,{className:"d-flex justify-content-center",children:Object(I.jsxs)(g.a,{children:[Object(I.jsx)(y.a,{children:Object(I.jsx)(S.a,{children:Object(I.jsx)(k.a,{src:"images/logo.svg"})})}),Object(I.jsx)(y.a,{children:Object(I.jsx)(S.a,{className:"d-flex justify-content-center",children:Object(I.jsx)("h3",{children:"Disk-Birita"})})}),Object(I.jsx)(y.a,{children:Object(I.jsx)(S.a,{children:Object(I.jsx)(E,{title:"Login",setStateEmail:r,emailTestId:"common_login__input-email"})})}),Object(I.jsx)(y.a,{children:Object(I.jsx)(S.a,{children:Object(I.jsx)(P,{setStatePassword:o,passwordTestId:"common_login__input-password"})})}),Object(I.jsx)(y.a,{children:Object(I.jsx)(S.a,{className:"d-flex justify-content-center",children:Object(I.jsx)(C,{dispatchOnSubmit:T,disabled:u})})}),Object(I.jsx)(y.a,{children:Object(I.jsx)(S.a,{className:"d-flex justify-content-center",children:Object(I.jsx)(A,{})})}),Object(I.jsx)(y.a,{children:Object(I.jsx)(S.a,{className:"d-flex justify-content-center",children:Object(I.jsx)(R,{hideErrorMessage:O})})})]})})};var M=function(e){var t=e.setStateName,c=e.nameTestId;return Object(I.jsxs)(g.a.Label,{children:["Nome",Object(I.jsx)(g.a.Control,{id:"name-input","data-testid":c,onChange:function(e){t(e.target.value)},type:"text"})]})};var $=function(e){var t=e.hidden;return Object(I.jsx)(D.a,{variant:"warning",hidden:t,"data-testid":"common_register__element-invalid_register",children:"Usu\xe1rio j\xe1 existente!"})};var z=function(){var e=Object(m.g)(),t=Object(a.useState)(),c=Object(v.a)(t,2),r=c[0],n=c[1],s=Object(a.useState)(),i=Object(v.a)(s,2),o=i[0],d=i[1],l=Object(a.useState)(),u=Object(v.a)(l,2),j=u[0],b=u[1],h=Object(a.useState)(!0),O=Object(v.a)(h,2),p=O[0],N=O[1],C=Object(a.useState)(!0),D=Object(v.a)(C,2),R=D[0],A=D[1];Object(a.useEffect)((function(){j&&o&&r&&(q(o)&&J(j)&&B(r)?N(!1):N(!0))}),[o,r,j]);var L=function(){var t=Object(f.a)(x.a.mark((function t(){var c,a,n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.a.post("".concat(F,"/register"),{name:r,email:o,password:j});case 3:c=t.sent,a=c.data,n={name:a.name,email:a.email,role:a.role,token:a.token},localStorage.setItem("user",JSON.stringify(n)),e.push("/customer/products"),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),3e3,A(!1),setTimeout((function(){return A(!0)}),3e3);case 15:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(I.jsx)(_.a,{className:"d-flex justify-content-center",children:Object(I.jsxs)(g.a,{className:"align-self-center",children:[Object(I.jsx)(y.a,{children:Object(I.jsx)(S.a,{children:Object(I.jsx)(k.a,{src:"images/logo.svg",className:".login-logo",fluid:!0})})}),Object(I.jsx)(y.a,{children:Object(I.jsx)(S.a,{className:"d-flex justify-content-center",children:Object(I.jsx)("h3",{children:"Disk-Birita"})})}),Object(I.jsx)(y.a,{children:Object(I.jsx)(S.a,{children:Object(I.jsx)(M,{nameTestId:"common_register__input-name",setStateName:n})})}),Object(I.jsx)(y.a,{children:Object(I.jsx)(S.a,{children:Object(I.jsx)(E,{emailTestId:"common_register__input-email",setStateEmail:d,title:"Email"})})}),Object(I.jsx)(y.a,{children:Object(I.jsx)(S.a,{children:Object(I.jsx)(P,{passwordTestId:"common_register__input-password",setStatePassword:b})})}),Object(I.jsx)(y.a,{children:Object(I.jsx)(S.a,{className:"d-flex justify-content-center",children:Object(I.jsx)(T.a,{variant:"success","data-testid":"common_register__button-register",disabled:p,onClick:L,type:"button",children:"Cadastrar"})})}),Object(I.jsx)(y.a,{className:"justify-content-md-center",children:Object(I.jsx)(S.a,{children:Object(I.jsx)($,{hidden:R})})})]})})},U=c(148),V=c(150),W=c(149);c(126);var H=function(e){var t=e.cartTotal,c=Object(m.g)();return Object(I.jsx)(V.a.Link,{href:"/customer/checkout",children:Object(I.jsxs)("div",{className:"container-test","data-testid":"customer_products__checkout-bottom-value",disabled:t<=0,children:[Object(I.jsx)(W.a,{style:{fontSize:"2.5rem"}}),Object(I.jsx)("button",{type:"button","data-testid":"customer_products__button-cart",className:"clear-button-style price-tag",disabled:t<=0,onClick:function(){return c.push("/customer/checkout")},children:" ".concat(t.toFixed(2).toString().split(".").join(","))})]})})};c(129);var Q=function(e){var t=e.openMenu,c=e.setOpenMenu;return Object(I.jsx)("div",{className:"".concat(t&&"open"," menu-btn"),onClick:function(){return c(!t)},children:Object(I.jsx)("div",{className:"menu-btn__burger"})})};c(130);var G=function(e){var t=e.openMenu,c=e.setOpenMenu,a=e.logout,r=e.name,n=t?"250px":"0px";return Object(I.jsxs)("div",{id:"mySidenav",className:"sidenav",style:{width:n},children:[Object(I.jsx)("button",{type:"button",className:"closebtn clear-button-style",onClick:function(){return c(!t)},children:"\xd7"}),Object(I.jsx)("span",{children:r}),Object(I.jsx)(T.a,{className:"clear-button-style",onClick:a,"data-testid":"customer_products__element-navbar-link-logout",type:"button",children:"Sair"})]})};var Z=function(){var e=Object(a.useState)({width:void 0,height:void 0}),t=Object(v.a)(e,2),c=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),c};function K(e){var t=e.cartTotal,c=JSON.parse(localStorage.getItem("user")).name,r=Object(m.g)(),n=r.location.pathname.includes("/seller"),s=Object(a.useState)(!1),i=Object(v.a)(s,2),o=i[0],d=i[1],l=Z().width,u=function(){localStorage.clear(),r.push("/")};return Object(I.jsxs)(U.a,{sticky:"top",bg:"light",expand:"md",style:{flexWrap:"nowrap"},children:[Object(I.jsx)(G,{setOpenMenu:d,openMenu:o,logout:u,name:c}),Object(I.jsx)(_.a,{className:"d-flex",style:{padding:0},children:Object(I.jsxs)(_.a,{className:"d-flex",style:{padding:0},children:[Object(I.jsxs)(V.a,{className:"me-auto my-2 my-lg-0 flex-row align-items-center",navbarScroll:!0,children:[Object(I.jsx)(U.a.Brand,{children:Object(I.jsx)(k.a,{src:"/images/logo.svg",width:"50",height:"40",alt:"Disk Birita logo"})}),Object(I.jsx)(V.a.Link,{href:n?"/seller/orders":"/customer/products","data-testid":"customer_products__element-navbar-link-".concat(n?"orders":"products"),style:{marginRight:"10px"},children:n?"ORDERS":"PRODUTOS"}),!n&&Object(I.jsx)(V.a.Link,{href:"/customer/orders","data-testid":"customer_products__element-navbar-link-orders",children:"PEDIDOS"})]}),l>=800&&Object(I.jsxs)(_.a,{className:"d-flex justify-content-end align-items-center",children:[Object(I.jsx)(U.a.Text,{"data-testid":"customer_products__element-navbar-user-full-name",href:"/customer/orders",style:{marginRight:"10px"},children:c}),Object(I.jsx)(T.a,{onClick:u,"data-testid":"customer_products__element-navbar-link-logout",type:"button",children:"Sair"})]}),!n&&Object(I.jsx)(H,{cartTotal:t}),l<800&&Object(I.jsx)(Q,{setOpenMenu:d,openMenu:o})]})})]})}K.defaultProps={cartTotal:0};var X=K,Y=c(31),ee=c(151),te=c(145);var ce=function(e){var t=e.product,c=e.product,a=c.id,r=c.name,n=c.price,s=c.urlImage,i=c.quantity,o=e.setCart,d=e.cart;return Object(I.jsxs)(ee.a,{children:[Object(I.jsx)(ee.a.Img,{"data-testid":"customer_products__img-card-bg-image-".concat(a),variant:"top",src:s,style:{heigth:"100px"}}),Object(I.jsx)(ee.a.Title,{"data-testid":"customer_products__element-card-title-".concat(a),style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textAlign:"center"},children:r}),Object(I.jsxs)(ee.a.Text,{style:{textAlign:"center"},children:["R$",Object(I.jsx)("span",{"data-testid":"customer_products__element-card-price-".concat(a),children:n.toString().split(".").join(",")})]}),Object(I.jsxs)(te.a,{className:"d-flex justify-content-center",children:[Object(I.jsx)(T.a,{id:a,"data-testid":"customer_products__button-card-rm-item-".concat(a),variant:"success",onClick:function(e){return function(e){var c="input-".concat(e),i=document.getElementById(c);/^[0-9\b]+$/.test(i.value)&&parseInt(i.value,10)>0?i.value=parseInt(i.value,10)-1:i.value=0;var l=d.indexOf(t),u=Object(Y.a)(d);u[l]={id:a,price:n,quantity:parseInt(i.value,10),name:r,urlImage:s},o(u)}(e.target.id)},children:"-"}),Object(I.jsx)(g.a.Control,{as:"input",min:"0",max:"99",id:"input-".concat(a),"data-testid":"customer_products__input-card-quantity-".concat(a),onChange:function(e){!function(e,t){var c=t,i=e.split("-")[1]-1;t||(c=0);var l=Object(Y.a)(d);l[i]={id:a,price:n,quantity:parseInt(c,10),name:r,urlImage:s},o(l)}(e.target.id,e.target.value)},type:"integer",placeholder:"0",defaultValue:i,style:{maxWidth:"176px"}}),Object(I.jsx)(T.a,{id:a,"data-testid":"customer_products__button-card-add-item-".concat(a),onClick:function(e){return function(e){var c="input-".concat(e),i=document.getElementById(c);/^[0-9\b]+$/.test(i.value)?i.value=parseInt(i.value,10)+1:i.value=1;var l=d.indexOf(t),u=Object(Y.a)(d);u[l]={id:a,price:n,quantity:parseInt(i.value,10),name:r,urlImage:s},o(u)}(e.target.id)},variant:"success",children:"+"})]})]})};var ae=function(){var e=Object(a.useState)(),t=Object(v.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(0),s=Object(v.a)(n,2),i=s[0],o=s[1];return Object(a.useEffect)((function(){(function(){var e=Object(f.a)(x.a.mark((function e(){var t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(F,"/products"));case 2:t=e.sent,c=t.data.map((function(e){return e.quantity=0,e})),r(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){var e=0;localStorage.setItem("cart",JSON.stringify(c)),c&&c.forEach((function(t){e+=t.price*t.quantity})),o(e)}),[c]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(X,{cartTotal:i}),Object(I.jsx)(_.a,{children:Object(I.jsx)(y.a,{xs:2,md:3,sm:2,className:"g-4",children:c&&c.map((function(e,t){return Object(I.jsx)(ce,{product:e,setCart:r,cart:c},t)}))})})]})},re=c(3),ne=["component"],se=function(e){var t=e.component,c=Object(re.a)(e,ne),a=localStorage.getItem("user");return Object(I.jsx)(m.b,Object(d.a)(Object(d.a)({},c),{},{render:function(e){return a?Object(I.jsx)(t,Object(d.a)({},e)):Object(I.jsx)(m.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},ie=se;se.defaultProps={location:{}};var oe=c(146);c(131);function de(e){var t=e.cartTotal,c=e.setCart,a=e.cart;return Object(I.jsxs)(oe.a,{responsive:!0,hover:!0,className:"table-format",children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"Item"}),Object(I.jsx)("th",{children:"Descri\xe7\xe3o"}),Object(I.jsx)("th",{children:"Quantidade"}),Object(I.jsx)("th",{children:"Valor Unit\xe1rio"}),Object(I.jsx)("th",{children:"Sub-total"}),Object(I.jsx)("th",{children:"Remover Item"})]})}),Object(I.jsxs)("tbody",{children:[a&&a.map((function(e,t){var r=e.id,n=e.name,s=e.price,i=e.quantity;return Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{"data-testid":"customer_checkout__element-order-table-item-number-".concat(t),children:t+1}),Object(I.jsx)("td",{"data-testid":"customer_checkout__element-order-table-name-".concat(t),children:n}),Object(I.jsx)("td",{"data-testid":"customer_checkout__element-order-table-quantity-".concat(t),children:i}),Object(I.jsx)("td",{"data-testid":"customer_checkout__element-order-table-unit-price-".concat(t),children:"R$".concat(s.toString().split(".").join(","))}),Object(I.jsxs)("td",{children:["R$",Object(I.jsx)("span",{"data-testid":"customer_checkout__element-order-table-sub-total-".concat(t),children:(s*i).toFixed(2).toString().split(".").join(",")})]}),Object(I.jsx)("td",{children:Object(I.jsx)("button",{id:r,"data-testid":"customer_checkout__element-order-table-remove-".concat(t),onClick:function(){return function(e){var t=Object(Y.a)(a);return t.splice(e,1),c(t)}(t)},type:"button",className:"clear-button-style",children:"Remover"})})]},r)})),Object(I.jsx)("tr",{children:Object(I.jsx)("td",{className:"total-price",colSpan:"6",children:"Total: R$".concat(t.toFixed(2).toString().split(".").join(","))})})]})]})}de.defaultProps={cart:[]};var le=de,ue=c(147);var je=function(e){var t=e.finishSale,c=e.setDeliveryAddress,a=e.setDeliveryNumber,r=e.setSellerId,n=e.sellers;return Object(I.jsxs)(_.a,{children:[Object(I.jsxs)("div",{className:"d-flex",children:[Object(I.jsxs)(ue.a,{children:[Object(I.jsx)("div",{children:Object(I.jsx)("span",{children:"P. Vendedora Respons\xe1vel:"})}),Object(I.jsxs)("select",{onChange:function(e){return r(e.target.value)},name:"select","data-testid":"customer_checkout__select-seller",defaultValue:"DEFAULT",children:[Object(I.jsx)("option",{disabled:!0,value:"DEFAULT",children:" -- Selecione -- "}),n.map((function(e,t){var c=e.id,a=e.name;return Object(I.jsx)("option",{value:c,defaultValue:!0,children:a},t)}))]})]}),Object(I.jsxs)(g.a.Label,{children:["Endere\xe7o",Object(I.jsx)(g.a.Control,{placeholder:"Travessa Terceira da Castanheira, Bairro Murici",type:"text","data-testid":"customer_checkout__input-address",onChange:function(e){c(e.target.value)}})]}),Object(I.jsxs)(g.a.Label,{children:["N\xfamero",Object(I.jsx)(g.a.Control,{placeholder:"198","data-testid":"customer_checkout__input-addressNumber",type:"number",onChange:function(e){a(e.target.value)}})]})]}),Object(I.jsx)("button",{type:"button","data-testid":"customer_checkout__button-submit-order",onClick:t,children:"FINALIZAR PEDIDO"})]})};var be=function(){var e=Object(m.g)(),t=Object(a.useState)(),c=Object(v.a)(t,2),r=c[0],n=c[1],s=Object(a.useState)(0),i=Object(v.a)(s,2),o=i[0],d=i[1],l=Object(a.useState)(""),u=Object(v.a)(l,2),j=u[0],b=u[1],h=Object(a.useState)(""),O=Object(v.a)(h,2),p=O[0],g=O[1],y=Object(a.useState)(),S=Object(v.a)(y,2),k=S[0],N=S[1],E=Object(a.useState)([]),T=Object(v.a)(E,2),C=T[0],P=T[1];Object(a.useEffect)((function(){(function(){var e=Object(f.a)(x.a.mark((function e(){var t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=JSON.parse(localStorage.getItem("cart")),c=t.filter((function(e){return e.quantity>0})),n(c);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){(function(){var e=Object(f.a)(x.a.mark((function e(){var t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(F,"/seller/all"));case 2:t=e.sent,c=t.data,P(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[P]),Object(a.useEffect)((function(){var e=0;localStorage.setItem("cart",JSON.stringify(r)),r&&r.forEach((function(t){e+=t.price*t.quantity})),d(e)}),[r]);var D=function(){var t=Object(f.a)(x.a.mark((function t(){var c,a,n,s,i,d;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=JSON.parse(localStorage.getItem("user")),a=c.token,n={headers:{authorization:a}},s={totalPrice:o,products:r,deliveryAddress:j,deliveryNumber:p,sellerId:k},t.next=6,w.a.post("".concat(F,"/customer/checkout"),s,n);case 6:i=t.sent,d=i.data.saleId,e.push("/customer/orders/".concat(d)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(X,{cartTotal:o}),Object(I.jsxs)(_.a,{children:[Object(I.jsx)(le,{cart:r,setCart:n,cartTotal:o}),Object(I.jsx)("div",{children:"Detalhes e Endere\xe7o para Entrega"}),Object(I.jsx)(je,{setDeliveryNumber:g,setDeliveryAddress:b,finishSale:D,setSellerId:N,sellers:C})]})]})};c(61);var he=function(e){var t=e.products,c=e.totalPrice;return Object(I.jsxs)(oe.a,{responsive:!0,hover:!0,className:"table-format",children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"Item"}),Object(I.jsx)("th",{children:"Descri\xe7\xe3o"}),Object(I.jsx)("th",{children:"Quantidade"}),Object(I.jsx)("th",{children:"Valor unit\xe1rio"}),Object(I.jsx)("th",{children:"Sub-total"})]})}),Object(I.jsxs)("tbody",{children:[t.map((function(e){return Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{"data-testid":"customer_order_details__element-order-table-item-number-".concat(e.id),children:e.id}),Object(I.jsx)("td",{"data-testid":"customer_order_details__element-order-table-name-".concat(e.id),children:e.name}),Object(I.jsx)("td",{"data-testid":"customer_order_details__element-order-table-quantity-".concat(e.id),children:e.SalesProduct.quantity}),Object(I.jsxs)("td",{"data-testid":"customer_order_details__element-order-table-sub-total-".concat(e.id),children:["R$",e.price.split(".").join(",")]}),Object(I.jsxs)("td",{children:["R$",(parseFloat(e.price)*e.SalesProduct.quantity).toFixed(2).split(".").join(",")]})]},e.id)})),Object(I.jsx)("tr",{children:Object(I.jsx)("td",{colSpan:"5","data-testid":"customer_order_details__element-order-total-price",className:"total-price",children:"Total: R$".concat(c.split(".").join(","))})})]})]})};var Oe=function(e){var t=e.updateButtonsText,c=e.orderId,a=e.sellerName,r=e.orderStatus,n=e.saleDate.split("-"),s="".concat(n[2][0]).concat(n[2][1]),i="".concat(n[1][0]).concat(n[1][1]),o="".concat(n[0].slice(0,4)),d="".concat(s,"/").concat(i,"/").concat(o);return Object(I.jsx)(oe.a,{responsive:!0,hover:!0,className:"table-head-format",children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{"data-testid":"customer_order_details__element-order-details-label-order-id",children:"Pedido ".concat(c)}),Object(I.jsx)("th",{"data-testid":"customer_order_details__element-order-details-label-seller-name",children:"P. Vend: ".concat(a)}),Object(I.jsx)("th",{"data-testid":"customer_order_details__element-order-details-label-order-date",children:d}),Object(I.jsx)("th",{"data-testid":"customer_order_details__element-order-details-label-delivery-status",children:r}),Object(I.jsx)("th",{children:Object(I.jsx)("button",{"data-testid":"customer_order_details__button-delivery-check",type:"button",disabled:"Em Tr\xe2nsito"!==r,onClick:function(){return t("Entregue")},children:"MARCAR COMO ENTREGUE"})})]})})};var me=function(){var e=Object(a.useState)(!1),t=Object(v.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)("Pendente"),s=Object(v.a)(n,2),i=s[0],o=s[1],d=Object(a.useState)(),l=Object(v.a)(d,2),u=l[0],j=l[1],b=Object(a.useState)(0),h=Object(v.a)(b,2),O=h[0],p=h[1],g=Object(m.g)();Object(a.useEffect)((function(){var e=g.location.pathname.split("/"),t=e[e.length-1],c={headers:{authorization:JSON.parse(localStorage.getItem("user")).token}};(function(){var e=Object(f.a)(x.a.mark((function e(){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(F,"/customer/order/").concat(t),c);case 2:a=e.sent,j(a.data.order),o(a.data.order.status);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[g.location.pathname]);var y=function(){var e=Object(f.a)(x.a.mark((function e(t){var a,n,s,i,d;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=g.location.pathname.split("/"),n=a[a.length-1],s=JSON.parse(localStorage.getItem("user")),i=s.token,d={headers:{authorization:i}},w.a.post("".concat(F,"/seller/orders/").concat(n),{orderStatus:t},d),r(!c),o(t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=0,t=JSON.parse(localStorage.getItem("cart"));t&&t.forEach((function(t){e+=t.price*t.quantity})),p(e)}),[]),u?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(X,{cartTotal:O}),Object(I.jsxs)(_.a,{children:[Object(I.jsx)("p",{children:"Detalhe do pedido"}),Object(I.jsx)(Oe,{orderId:u.id,sellerName:u.seller.name,orderStatus:i,updateButtonsText:y,saleDate:u.saleDate}),Object(I.jsx)(he,{products:u.products,totalPrice:u.totalPrice})]})]}):Object(I.jsx)("p",{children:"Carregando"})};var pe=function(e){var t=e.products,c=e.totalPrice;return console.log(t),Object(I.jsxs)(oe.a,{responsive:!0,hover:!0,className:"table-format",children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"Item"}),Object(I.jsx)("th",{children:"Descri\xe7\xe3o"}),Object(I.jsx)("th",{children:"Quantidade"}),Object(I.jsx)("th",{children:"Valor unit\xe1rio"}),Object(I.jsx)("th",{children:"Sub-total"})]})}),Object(I.jsxs)("tbody",{children:[t.map((function(e){return Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{"data-testid":"seller_order_details__element-order-table-item-number-".concat(e.id),children:e.id}),Object(I.jsx)("td",{"data-testid":"seller_order_details__element-order-table-name--".concat(e.id),children:e.name}),Object(I.jsx)("td",{"data-testid":"seller_order_details__element-order-table-quantity-".concat(e.id),children:e.SalesProduct.quantity}),Object(I.jsxs)("td",{"data-testid":"seller_order_details__element-order-table-unit-price-".concat(e.id),children:["R$",e.price.split(".").join(",")]}),Object(I.jsxs)("td",{"data-testid":"seller_order_details__element-order-table-sub-total".concat(e),children:["R$",(parseFloat(e.price)*e.SalesProduct.quantity).toFixed(2).split(".").join(",")]})]},e.id)})),Object(I.jsx)("tr",{children:Object(I.jsx)("td",{colSpan:"5","data-testid":"seller_order_details__element-order-total-price",className:"total-price",children:"Total: R$".concat(c.split(".").join(","))})})]})]})};var xe=function(e){var t=e.updateButtonsText,c=e.orderId,a=e.orderStatus,r=e.saleDate.split("-"),n="".concat(r[2][0]).concat(r[2][1]),s="".concat(r[1][0]).concat(r[1][1]),i="".concat(r[0].slice(0,4)),o="".concat(n,"/").concat(s,"/").concat(i);return Object(I.jsx)(oe.a,{responsive:!0,hover:!0,className:"table-head-format",children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{"data-testid":"seller_order_details__element-order-details-label-order-id",children:"Pedido ".concat(c)}),Object(I.jsx)("th",{"data-testid":"seller_order_details__element-order-details-label-order-date",children:o}),Object(I.jsx)("th",{"data-testid":"seller_order_details__element-order-details-label-delivery-status",children:a}),Object(I.jsx)("th",{children:Object(I.jsx)("button",{"data-testid":"seller_order_details__button-preparing-check",type:"button",disabled:"Pendente"!==a,onClick:function(){return t("Preparando")},children:"PREPARAR PEDIDO"})}),Object(I.jsx)("th",{children:Object(I.jsx)("button",{"data-testid":"seller_order_details__button-dispatch-check",type:"button",disabled:"Preparando"!==a,onClick:function(){return t("Em Tr\xe2nsito")},children:"SAIU PARA ENTREGA"})})]})})};var fe=function(){var e=Object(a.useState)(),t=Object(v.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(!1),s=Object(v.a)(n,2),i=s[0],o=s[1],d=Object(a.useState)("Pendente"),l=Object(v.a)(d,2),u=l[0],j=l[1],b=Object(m.g)();Object(a.useEffect)((function(){var e=b.location.pathname.split("/"),t=e[e.length-1],c={headers:{authorization:JSON.parse(localStorage.getItem("user")).token}};(function(){var e=Object(f.a)(x.a.mark((function e(){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(F,"/seller/orders/").concat(t),c);case 2:a=e.sent,r(a.data.order),j(a.data.order.status);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b.location.pathname]);var h=function(){var e=Object(f.a)(x.a.mark((function e(t){var c,a,r,n,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=b.location.pathname.split("/"),a=c[c.length-1],r=JSON.parse(localStorage.getItem("user")),n=r.token,s={headers:{authorization:n}},e.next=6,w.a.post("".concat(F,"/seller/orders/").concat(a),{orderStatus:t},s);case 6:o(!i),j(t);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(X,{}),console.log(c),Object(I.jsxs)(_.a,{children:[Object(I.jsx)("p",{children:"Detalhe do pedido"}),Object(I.jsx)(xe,{orderId:c.id,orderStatus:u,updateButtonsText:h,saleDate:c.saleDate}),Object(I.jsx)(pe,{products:c.products,totalPrice:c.totalPrice})]})]}):Object(I.jsx)("p",{children:"Carregando"})};c(85);var ve=function(e){var t=e.id,c=e.status,a=e.date,r=e.totalPrice,n=a.split("-"),s="".concat(n[2][0]).concat(n[2][1]),i="".concat(n[1][0]).concat(n[1][1]),o="".concat(n[0][0]).concat(n[0][1]).concat(n[0][2]).concat(n[0][3]),d="".concat(s,"/").concat(i,"/").concat(o),l=Object(m.g)();return Object(I.jsxs)(ee.a,{onClick:function(){l.push("/customer/orders/".concat(t))},style:{flexDirection:"row",justifyContent:"space-between",maxWidth:"400px",alignItems:"center",minHeight:"70px"},children:[Object(I.jsx)(ee.a.Text,{style:{marginBottom:0},"data-testid":"customer_orders__element-order-id-".concat(t),children:"Pedido ".concat(t)}),Object(I.jsx)(ee.a.Text,{style:{marginBottom:0},"data-testid":"customer_orders__element-delivery-status-".concat(t),children:c}),Object(I.jsxs)("div",{children:[Object(I.jsx)(ee.a.Text,{style:{marginBottom:0},"data-testid":"customer_orders__element-order-date-".concat(t),children:d}),Object(I.jsx)(ee.a.Text,{"data-testid":"customer_orders__element-card-price-".concat(t),children:"R$".concat(r.toString().split(".").join(","))})]})]})};var _e=function(){var e=Object(a.useState)(),t=Object(v.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(0),s=Object(v.a)(n,2),i=s[0],o=s[1];return Object(a.useEffect)((function(){var e={headers:{authorization:JSON.parse(localStorage.getItem("user")).token}};(function(){var t=Object(f.a)(x.a.mark((function t(){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.get("".concat(F,"/customer/order"),e);case 2:c=t.sent,r(c.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){var e=0,t=JSON.parse(localStorage.getItem("cart"));t&&t.forEach((function(t){e+=t.price*t.quantity})),o(e)}),[]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(X,{cartTotal:i}),Object(I.jsx)(_.a,{children:Object(I.jsx)(y.a,{xs:2,md:2,sm:2,className:"g-2 justify-content-between",children:c&&c.map((function(e){return Object(I.jsx)(ve,{id:e.id,status:e.status,date:e.saleDate,totalPrice:e.totalPrice},e.id)}))})})]})};var ge=function(e){var t=e.id,c=e.status,a=e.date,r=e.totalPrice,n=e.deliveryAddress,s=e.deliveryNumber,i=a.split("-"),o="".concat(i[2][0]).concat(i[2][1]),d="".concat(i[1][0]).concat(i[1][1]),l="".concat(i[0][0]).concat(i[0][1]).concat(i[0][2]).concat(i[0][3]),u="".concat(o,"/").concat(d,"/").concat(l),j=Object(m.g)();return console.log(n,s),Object(I.jsxs)(ee.a,{onClick:function(){j.push("/seller/orders/".concat(t))},style:{flexDirection:"row",maxWidth:"400px",alignItems:"center",minHeight:"70px",justifyContent:"space-evenly"},children:[Object(I.jsx)("div",{children:Object(I.jsx)(ee.a.Text,{style:{marginBottom:0},"data-testid":"seller_orders__element-order-id-".concat(t),children:"Pedido ".concat(t)})}),Object(I.jsxs)("div",{children:[Object(I.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(I.jsx)("div",{children:Object(I.jsx)(ee.a.Text,{style:{marginBottom:0},"data-testid":"seller_orders__element-delivery-status-".concat(t),children:c})}),Object(I.jsxs)("div",{children:[Object(I.jsx)(ee.a.Text,{style:{marginBottom:0},"data-testid":"seller_orders__element-order-date-".concat(t),children:u}),Object(I.jsx)(ee.a.Text,{"data-testid":"seller_orders__element-card-price-".concat(t),children:"R$".concat(r.toString().split(".").join(","))})]})]}),Object(I.jsx)(ee.a.Text,{style:{textAlign:"end"},children:Object(I.jsx)("span",{"data-testid":"seller_orders__element-card-address-".concat(t),children:"".concat(n,",").concat(s)})})]})]})};var ye=function(){var e=Object(a.useState)(),t=Object(v.a)(e,2),c=t[0],r=t[1];return Object(a.useEffect)((function(){var e={headers:{authorization:JSON.parse(localStorage.getItem("user")).token}};(function(){var t=Object(f.a)(x.a.mark((function t(){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.get("".concat(F,"/seller/orders"),e);case 2:c=t.sent,r(c.data.sales);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(X,{}),Object(I.jsx)(_.a,{children:Object(I.jsx)(y.a,{xs:1,md:2,sm:2,className:"g-2 justify-content-between",children:c&&c.map((function(e){return Object(I.jsx)(ge,{id:e.id,status:e.status,date:e.saleDate,totalPrice:e.totalPrice,deliveryAddress:e.deliveryAddress,deliveryNumber:e.deliveryNumber},e.id)}))})})]})};c(132);var Se=function(){return Object(I.jsxs)(m.d,{children:[Object(I.jsx)(m.b,{path:"/login",component:L}),Object(I.jsx)(m.b,{path:"/register",component:z}),Object(I.jsx)(ie,{path:"/customer/products",component:ae}),Object(I.jsx)(ie,{path:"/customer/checkout",component:be}),Object(I.jsx)(ie,{path:"/customer/orders/:id",component:me}),Object(I.jsx)(ie,{path:"/customer/orders",component:_e}),Object(I.jsx)(ie,{path:"/seller/orders/:id",component:fe}),Object(I.jsx)(ie,{path:"/seller/orders",component:ye}),Object(I.jsx)(m.a,{strict:!0,from:"/",to:"/login"})]})};s.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(O.a,{children:Object(I.jsx)(h.a,{store:b,children:Object(I.jsx)(Se,{})})})}),document.getElementById("root")),i()},61:function(e,t,c){},85:function(e,t,c){}},[[133,1,2]]]);
//# sourceMappingURL=main.7bc591cc.chunk.js.map