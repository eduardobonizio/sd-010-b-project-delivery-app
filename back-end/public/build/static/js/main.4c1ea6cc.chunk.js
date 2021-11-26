(this["webpackJsonpdelivery-app-back-end"]=this["webpackJsonpdelivery-app-back-end"]||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(22),s=a.n(n),o=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,126)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))},i=a(55),d=a(2),l={};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EMAIL":return Object(d.a)(Object(d.a)({},e),{},{email:t.payload});case"SET_PASSWORD":return Object(d.a)(Object(d.a)({},e),{},{password:t.payload});default:return e}},j=Object(i.a)({loginReducer:u}),b=Object(i.b)(j),m=a(73),O=a(27),p=(a(84),a(85),a(9)),h=(a(86),a(8)),x=a.n(h),f=a(13),_=a(5),v=a(118),g=a(33),S=a(119),y=a(70),k=a(120),N=a(14),I=a.n(N),C=a(1);var E=function(e){var t=e.setStateEmail,a=e.emailTestId,r=e.title;return Object(C.jsxs)(g.a.Label,{children:[r,Object(C.jsx)(g.a.Control,{id:"email-input","data-testid":a,onChange:function(e){t(e.target.value)},type:"text"})]})},T=a(28);var w=function(e){var t=e.dispatchOnSubmit,a=e.disabled;return Object(C.jsx)(T.a,{variant:"success","data-testid":"common_login__button-login",disabled:a,onClick:t,type:"button",children:"LOGIN"})};var P=function(e){var t=e.setStatePassword,a=e.passwordTestId;return Object(C.jsxs)(g.a.Label,{children:["Senha",Object(C.jsx)(g.a.Control,{"data-testid":a,onChange:function(e){t(e.target.value)},type:"password"})]})};var R=function(e){var t=e.hideErrorMessage;return Object(C.jsx)("span",{"data-testid":"common_login__element-invalid-email",hidden:t,children:"Usu\xe1rio/Senha inv\xe1lidos"})};var D=function(){var e=Object(p.g)();return Object(C.jsx)(T.a,{variant:"warning",onClick:function(){return e.push("/register")},"data-testid":"common_login__button-register",type:"button",children:"Ainda n\xe3o tenho conta"})},J="https://grupo-19-delivery-app.herokuapp.com",A=function(e){return/\S+@\S+\.\S+/.test(e)},F=function(e){return e.length>11},q=function(e){return e.length>5};a(110);var $=function(){var e=Object(r.useState)(""),t=Object(_.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(""),s=Object(_.a)(n,2),o=s[0],i=s[1],d=Object(r.useState)(!0),l=Object(_.a)(d,2),u=l[0],j=l[1],b=Object(r.useState)(!0),m=Object(_.a)(b,2),O=m[0],h=m[1],N=Object(p.g)(),T={to:{customer:function(){return N.push("/customer/products")},seller:function(){return N.push("/seller/orders")}}};Object(r.useEffect)((function(){o&&a&&(A(a)&&q(o)?j(!1):j(!0))}),[a,o]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user"));if(e){var t=e.role;T.to[t]()}}));var F=function(){var e=Object(f.a)(x.a.mark((function e(){var t,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("".concat(J,"/login"),{email:a,password:o});case 3:t=e.sent,r=t.data,localStorage.setItem("user",JSON.stringify(r)),T.to[r.role](),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),h(!1);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(C.jsx)(v.a,{className:"login",children:Object(C.jsxs)(g.a,{children:[Object(C.jsx)(S.a,{className:"justify-content-md-center",children:Object(C.jsx)(y.a,{md:"auto",children:Object(C.jsx)(k.a,{src:"images/logo.svg",className:"login-logo"})})}),Object(C.jsx)(S.a,{className:"justify-content-md-center",children:Object(C.jsx)(y.a,{md:"auto",children:Object(C.jsx)("h3",{children:"Disk-Birita"})})}),Object(C.jsx)(S.a,{className:"justify-content-md-center",children:Object(C.jsx)(y.a,{md:"auto",children:Object(C.jsx)(E,{title:"Login",setStateEmail:c,emailTestId:"common_login__input-email"})})}),Object(C.jsx)(S.a,{className:"justify-content-md-center",children:Object(C.jsx)(y.a,{md:"auto",children:Object(C.jsx)(P,{setStatePassword:i,passwordTestId:"common_login__input-password"})})}),Object(C.jsx)("br",{}),Object(C.jsx)(S.a,{className:"justify-content-md-center",children:Object(C.jsx)(y.a,{md:"auto",children:Object(C.jsx)(w,{dispatchOnSubmit:F,disabled:u})})}),Object(C.jsx)("br",{}),Object(C.jsx)(S.a,{className:"justify-content-md-center",children:Object(C.jsx)(y.a,{md:"auto",children:Object(C.jsx)(D,{})})}),Object(C.jsx)("br",{}),Object(C.jsx)(S.a,{className:"justify-content-md-center",children:Object(C.jsx)(y.a,{md:"auto",children:Object(C.jsx)(R,{hideErrorMessage:O})})})]})})};var z=function(e){var t=e.setStateName,a=e.nameTestId;return Object(C.jsxs)(g.a.Label,{children:["Nome",Object(C.jsx)(g.a.Control,{id:"name-input","data-testid":a,onChange:function(e){t(e.target.value)},type:"text"})]})};a(111);var L=function(){var e=Object(p.g)(),t=Object(r.useState)(),a=Object(_.a)(t,2),c=a[0],n=a[1],s=Object(r.useState)(),o=Object(_.a)(s,2),i=o[0],d=o[1],l=Object(r.useState)(),u=Object(_.a)(l,2),j=u[0],b=u[1],m=Object(r.useState)(!0),O=Object(_.a)(m,2),h=O[0],k=O[1],N=Object(r.useState)(!0),w=Object(_.a)(N,2),R=w[0],D=w[1];Object(r.useEffect)((function(){j&&i&&c&&(A(i)&&q(j)&&F(c)?k(!1):k(!0))}),[i,c,j]);var $=function(){var t=Object(f.a)(x.a.mark((function t(){var a,r,n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.a.post("".concat(J,"/register"),{name:c,email:i,password:j});case 3:a=t.sent,r=a.data,n={name:r.name,email:r.email,role:r.role,token:r.token},localStorage.setItem("user",JSON.stringify(n)),e.push("/customer/products"),t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",D(!1));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(C.jsx)(v.a,{fluid:!0,className:"register",children:Object(C.jsxs)(g.a,{children:[Object(C.jsx)(S.a,{className:"justify-content-md-center",children:Object(C.jsx)(y.a,{md:"auto",children:Object(C.jsx)(z,{nameTestId:"common_register__input-name",setStateName:n})})}),Object(C.jsx)(S.a,{className:"justify-content-md-center",children:Object(C.jsx)(y.a,{md:"auto",children:Object(C.jsx)(E,{emailTestId:"common_register__input-email",setStateEmail:d,title:"Email"})})}),Object(C.jsx)(S.a,{className:"justify-content-md-center",children:Object(C.jsx)(y.a,{md:"auto",children:Object(C.jsx)(P,{passwordTestId:"common_register__input-password",setStatePassword:b})})}),Object(C.jsx)(S.a,{className:"justify-content-md-center",children:Object(C.jsx)(y.a,{md:"auto",children:Object(C.jsx)(T.a,{variant:"success","data-testid":"common_register__button-register",disabled:h,onClick:$,type:"button",children:"Cadastrar"})})}),Object(C.jsx)(S.a,{className:"justify-content-md-center",children:Object(C.jsx)(y.a,{md:"auto",children:Object(C.jsx)("span",{"data-testid":"common_register__element-invalid_register",hidden:R,children:"Usu\xe1rio j\xe1 existente!"})})})]})})},V=a(124);var B=function(){var e=Object(p.g)();return Object(C.jsx)(T.a,{variant:"primary",onClick:function(){localStorage.clear(),e.push("/")},"data-testid":"customer_products__element-navbar-link-logout",type:"button",children:"Sair"})};var M=function(e){var t=e.name,a=Object(p.g)().location.pathname.includes("/seller");return Object(C.jsx)(V.a,{variant:"dark",className:"navbar",children:Object(C.jsxs)(V.a.Collapse,{className:"justify-content-start",children:[Object(C.jsx)(V.a.Brand,{className:"logo",children:Object(C.jsx)(k.a,{src:"/images/logo.svg",width:"50",height:"40",alt:"Disk Birita logo"})}),Object(C.jsx)("a",{href:a?"/seller/orders":"/customer/products",children:Object(C.jsx)(V.a.Text,{variant:"light",className:"products align-items-center","data-testid":"customer_products__element-navbar-link-".concat(a?"orders":"products"),href:"/customer/products",children:a?"ORDERS":"PRODUTOS"})}),!a&&Object(C.jsx)("a",{href:"/customer/orders",children:Object(C.jsx)(V.a.Text,{className:"orders align-items-center","data-testid":"customer_products__element-navbar-link-orders",href:"/customer/orders",children:"MEUS PEDIDOS"})}),Object(C.jsxs)(V.a.Collapse,{className:"justify-content-end",children:[Object(C.jsx)(V.a.Text,{className:"name align-items-center","data-testid":"customer_products__element-navbar-user-full-name",href:"/customer/orders",children:t}),Object(C.jsx)(V.a.Text,{className:"exit align-items-center","data-testid":"customer_products__element-navbar-link-logout",href:"/customer/orders",children:Object(C.jsx)(B,{})})]})]})})},U=a(25),G=a(125),Q=a(121);var W=function(e){var t=e.product,a=e.product,r=a.id,c=a.name,n=a.price,s=a.urlImage,o=a.quantity,i=e.setCart,d=e.cart;return Object(C.jsxs)("div",{children:[Object(C.jsx)(G.a.Img,{"data-testid":"customer_products__img-card-bg-image-".concat(r),variant:"top",src:s,style:{height:"158px"}}),Object(C.jsx)(G.a.Title,{"data-testid":"customer_products__element-card-title-".concat(r),style:{fontSize:"5px"},children:c}),Object(C.jsxs)(G.a.Text,{children:["R$",Object(C.jsx)("span",{"data-testid":"customer_products__element-card-price-".concat(r),children:n.toString().split(".").join(",")})]}),Object(C.jsxs)(Q.a,{className:"sm-3",children:[Object(C.jsx)(T.a,{id:r,"data-testid":"customer_products__button-card-rm-item-".concat(r),variant:"success",onClick:function(e){return function(e){var a="input-".concat(e),o=document.getElementById(a);/^[0-9\b]+$/.test(o.value)&&parseInt(o.value,10)>0?o.value=parseInt(o.value,10)-1:o.value=0;var l=d.indexOf(t),u=Object(U.a)(d);u[l]={id:r,price:n,quantity:parseInt(o.value,10),name:c,urlImage:s},i(u)}(e.target.id)},children:"-"}),Object(C.jsx)(g.a.Control,{as:"input",size:"sm",min:"0",max:"99",id:"input-".concat(r),"data-testid":"customer_products__input-card-quantity-".concat(r),onChange:function(e){!function(e,t){var a=t,o=e.split("-")[1]-1;t.isNaN&&(a=0);var l=Object(U.a)(d);l[o]={id:r,price:n,quantity:parseInt(a,10),name:c,urlImage:s},i(l)}(e.target.id,e.target.value)},type:"integer",placeholder:"0",defaultValue:o}),Object(C.jsx)(T.a,{id:r,"data-testid":"customer_products__button-card-add-item-".concat(r),onClick:function(e){return function(e){var a="input-".concat(e),o=document.getElementById(a);/^[0-9\b]+$/.test(o.value)?o.value=parseInt(o.value,10)+1:o.value=1;var l=d.indexOf(t),u=Object(U.a)(d);u[l]={id:r,price:n,quantity:parseInt(o.value,10),name:c,urlImage:s},i(u)}(e.target.id)},variant:"success",children:"+"})]})]})};var Z=function(e){var t=e.cartTotal,a=Object(p.g)();return Object(C.jsxs)("div",{className:"floating-total","data-testid":"customer_products__checkout-bottom-value",disabled:t<=0,style:{marginLeft:"5px"},children:["Ver Carrinho: R$",Object(C.jsx)("button",{type:"button","data-testid":"customer_products__button-cart",disabled:t<=0,onClick:function(){return a.push("/customer/checkout")},children:" ".concat(t.toFixed(2).toString().split(".").join(","))})]})};a(31);var H=function(){var e=JSON.parse(localStorage.getItem("user")).name,t=Object(r.useState)(),a=Object(_.a)(t,2),c=a[0],n=a[1],s=Object(r.useState)(0),o=Object(_.a)(s,2),i=o[0],d=o[1];return Object(r.useEffect)((function(){(function(){var e=Object(f.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(J,"/products"));case 2:t=e.sent,a=t.data.map((function(e){return e.quantity=0,e})),n(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){var e=0;localStorage.setItem("cart",JSON.stringify(c)),c&&c.forEach((function(t){e+=t.price*t.quantity})),d(e)}),[c]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(M,{name:e}),Object(C.jsx)(v.a,{fluid:!0,children:Object(C.jsx)(S.a,{children:c&&c.map((function(e){return Object(C.jsx)(y.a,{style:{padding:"0px"},children:Object(C.jsx)(W,{product:e,setCart:n,cart:c})},e.key)}))})}),Object(C.jsx)(Z,{cartTotal:i})]})},K=a(3),X=["component"],Y=function(e){var t=e.component,a=Object(K.a)(e,X),r=localStorage.getItem("user");return Object(C.jsx)(p.b,Object(d.a)(Object(d.a)({},a),{},{render:function(e){return r?Object(C.jsx)(t,Object(d.a)({},e)):Object(C.jsx)(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},ee=Y;Y.defaultProps={location:{}};var te=function(e){var t=e.product,a=e.product,r=a.id,c=a.name,n=a.price,s=a.quantity,o=e.setCart,i=e.cart,d=i.indexOf(t);return Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{"data-testid":"customer_checkout__element-order-table-item-number-".concat(d),children:d+1}),Object(C.jsx)("div",{"data-testid":"customer_checkout__element-order-table-name-".concat(d),children:c}),Object(C.jsx)("div",{"data-testid":"customer_checkout__element-order-table-quantity-".concat(d),children:s}),Object(C.jsxs)("div",{children:["R$",Object(C.jsx)("div",{"data-testid":"customer_checkout__element-order-table-unit-price-".concat(d),children:n.toString().split(".").join(",")})]}),Object(C.jsxs)("div",{children:["R$",Object(C.jsx)("span",{"data-testid":"customer_checkout__element-order-table-sub-total-".concat(d),children:(n*s).toFixed(2).toString().split(".").join(",")})]}),Object(C.jsx)(T.a,{id:r,"data-testid":"customer_checkout__element-order-table-remove-".concat(d),onClick:function(){return function(e){var t=Object(U.a)(i);return t.splice(e,1),o(t)}(d)},variant:"success",children:"Remover"})]})};var ae=function(e){var t=e.cartTotal,a=Object(p.g)();return Object(C.jsxs)("div",{className:"floating-total","data-testid":"customer_products__checkout-bottom-value",disabled:t<=0,style:{marginLeft:"5px"},children:["Total: R$",Object(C.jsx)("button",{type:"button","data-testid":"customer_checkout__element-order-total-price",disabled:t<=0,onClick:function(){return a.push("/customer/checkout")},children:" ".concat(t.toFixed(2).toString().split(".").join(","))})]})},re=a(123);var ce=function(e){var t=e.finishSale,a=e.setDeliveryAddress,r=e.setDeliveryNumber,c=e.setSellerId;return Object(C.jsxs)(v.a,{children:[Object(C.jsxs)("div",{className:"d-flex",style:{fontSize:"11px"},children:[Object(C.jsxs)(re.a,{children:[Object(C.jsx)("div",{children:Object(C.jsx)("span",{children:"P. Vendedora Respons\xe1vel:"})}),Object(C.jsxs)("select",{onChange:function(e){return c(e.target.value)},name:"select","data-testid":"customer_checkout__select-seller",children:[Object(C.jsx)("option",{value:"1",defaultValue:!0,children:"Fulana pereira"}),Object(C.jsx)("option",{value:"2",children:"Valor 2"}),Object(C.jsx)("option",{value:"3",children:"Valor 3"})]})]}),Object(C.jsxs)(g.a.Label,{children:["Endere\xe7o",Object(C.jsx)(g.a.Control,{placeholder:"Travessa Terceira da Castanheira, Bairro Murici",type:"text","data-testid":"customer_checkout__input-address",onChange:function(e){a(e.target.value)}})]}),Object(C.jsxs)(g.a.Label,{children:["N\xfamero",Object(C.jsx)(g.a.Control,{placeholder:"198","data-testid":"customer_checkout__input-addressNumber",type:"number",onChange:function(e){r(e.target.value)}})]})]}),Object(C.jsx)("button",{type:"button","data-testid":"customer_checkout__button-submit-order",onClick:t,children:"FINALIZAR PEDIDO"})]})};var ne=function(){var e=JSON.parse(localStorage.getItem("user")).name,t=Object(r.useState)(),a=Object(_.a)(t,2),c=a[0],n=a[1],s=Object(r.useState)(0),o=Object(_.a)(s,2),i=o[0],d=o[1],l=Object(r.useState)(""),u=Object(_.a)(l,2),j=u[0],b=u[1],m=Object(r.useState)(""),O=Object(_.a)(m,2),h=O[0],v=O[1],g=Object(r.useState)(1),S=Object(_.a)(g,2),y=S[0],k=S[1],N=Object(p.g)();Object(r.useEffect)((function(){(function(){var e=Object(f.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=JSON.parse(localStorage.getItem("cart")),a=t.filter((function(e){return e.quantity>0})),n(a);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){var e=0;localStorage.setItem("cart",JSON.stringify(c)),c&&c.forEach((function(t){e+=t.price*t.quantity})),d(e)}),[c]);var E=function(){var e=Object(f.a)(x.a.mark((function e(){var t,a,r,n,s,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=JSON.parse(localStorage.getItem("user")),a=t.token,r={headers:{authorization:a}},n={totalPrice:i,products:c,deliveryAddress:j,deliveryNumber:h,sellerId:y},e.next=6,I.a.post("".concat(J,"/customer/checkout"),n,r);case 6:s=e.sent,o=s.data.saleId,N.push("/customer/orders/".concat(o)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(M,{name:e}),Object(C.jsxs)("div",{style:{display:"flex"},children:[c&&c.map((function(e){return Object(C.jsx)(te,{product:e,setCart:n,cart:c},e.key)})),Object(C.jsx)(ae,{cartTotal:i})]}),Object(C.jsx)("div",{children:"Detalhes e Endere\xe7o para Entrega"}),Object(C.jsx)(ce,{setDeliveryNumber:v,setDeliveryAddress:b,finishSale:E,setSellerId:k})]})},se=a(122);var oe=function(e){var t=e.order;return Object(C.jsxs)(se.a,{striped:!0,bordered:!0,hover:!0,children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"Item"}),Object(C.jsx)("th",{children:"Descri\xe7\xe3o"}),Object(C.jsx)("th",{children:"Quantidade"}),Object(C.jsx)("th",{children:"Valor unit\xe1rio"}),Object(C.jsx)("th",{children:"Sub-total"})]})}),Object(C.jsx)("tbody",{children:t.map((function(e){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{"data-testid":"customer_order_details__element-order-table-item-number-".concat(e.id),children:e.id}),Object(C.jsx)("td",{"data-testid":"customer_order_details__element-order-table-name-".concat(e.id),children:e.name}),Object(C.jsx)("td",{"data-testid":"customer_order_details__element-order-table-quantity-".concat(e.id),children:e.SalesProduct.quantity}),Object(C.jsxs)("td",{"data-testid":"customer_order_details__element-order-table-sub-total-".concat(e.id),children:["R$",e.price.split(".").join(",")]}),Object(C.jsxs)("td",{children:["R$",(parseFloat(e.price)*e.SalesProduct.quantity).toFixed(2).split(".").join(",")]})]},e.id)}))})]})};var ie=function(){var e=JSON.parse(localStorage.getItem("user")).name,t=Object(r.useState)(!1),a=Object(_.a)(t,2),c=a[0],n=a[1],s=Object(r.useState)("Pendente"),o=Object(_.a)(s,2),i=o[0],d=o[1],l=Object(r.useState)(),u=Object(_.a)(l,2),j=u[0],b=u[1],m=Object(p.g)();Object(r.useEffect)((function(){var e=m.location.pathname.split("/"),t=e[e.length-1],a={headers:{authorization:JSON.parse(localStorage.getItem("user")).token}};(function(){var e=Object(f.a)(x.a.mark((function e(){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(J,"/customer/orders/").concat(t),a);case 2:r=e.sent,b(r.data.order),d(r.data.order.status);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m.location.pathname]);var O=function(){var e=Object(f.a)(x.a.mark((function e(t){var a,r,s,o,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=m.location.pathname.split("/"),r=a[a.length-1],s=JSON.parse(localStorage.getItem("user")),o=s.token,i={headers:{authorization:o}},I.a.post("".concat(J,"/seller/orders/").concat(r),{orderStatus:t},i),n(!c),d(t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(j){var h=j.saleDate.split("-"),v="".concat(h[2][0]).concat(h[2][1]),g="".concat(h[1][0]).concat(h[1][1]),S="".concat(h[0].slice(0,4)),y="".concat(v,"/").concat(g,"/").concat(S);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(M,{name:e}),Object(C.jsx)("p",{children:"Detalhe do pedido"}),Object(C.jsxs)("div",{children:[Object(C.jsxs)("span",{"data-testid":"customer_order_details__element-order-details-label-order-id",children:["Pedido",j.id]}),Object(C.jsxs)("span",{"data-testid":"customer_order_details__element-order-details-label-seller-name",children:["P. Vendedora:",j.seller.name]}),Object(C.jsx)("span",{"data-testid":"customer_order_details__element-order-details-label-order-date",children:y}),Object(C.jsx)("span",{"data-testid":"customer_order_details__element-order-details-label-delivery-status",children:i}),Object(C.jsx)("button",{"data-testid":"customer_order_details__button-delivery-check",type:"button",disabled:"Em Tr\xe2nsito"!==i,onClick:function(){return O("Entregue")},style:{fontSize:"5px"},children:"MARCAR COMO ENTREGUE"}),Object(C.jsx)(oe,{order:j.products}),Object(C.jsx)("span",{children:"Total: R$"}),Object(C.jsx)("span",{"data-testid":"customer_order_details__element-order-total-price",children:j.totalPrice.split(".").join(",")})]})]})}return Object(C.jsx)("p",{children:"Carregando"})};var de=function(e){var t=e.order;return Object(C.jsxs)(se.a,{striped:!0,bordered:!0,hover:!0,children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"Item"}),Object(C.jsx)("th",{children:"Descri\xe7\xe3o"}),Object(C.jsx)("th",{children:"Quantidade"}),Object(C.jsx)("th",{children:"Valor unit\xe1rio"}),Object(C.jsx)("th",{children:"Sub-total"})]})}),Object(C.jsx)("tbody",{children:t.map((function(e){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{"data-testid":"seller_order_details__element-order-table-item-number-".concat(e.id),children:e.id}),Object(C.jsx)("td",{"data-testid":"seller_order_details__element-order-table-name--".concat(e.id),children:e.name}),Object(C.jsx)("td",{"data-testid":"seller_order_details__element-order-table-quantity-".concat(e.id),children:e.SalesProduct.quantity}),Object(C.jsxs)("td",{"data-testid":"seller_order_details__element-order-table-unit-price-".concat(e.id),children:["R$",e.price.split(".").join(",")]}),Object(C.jsxs)("td",{"data-testid":"seller_order_details__element-order-table-sub-total".concat(e),children:["R$",(parseFloat(e.price)*e.SalesProduct.quantity).toFixed(2).split(".").join(",")]})]},e.id)}))})]})};var le=function(){var e=JSON.parse(localStorage.getItem("user")).name,t=Object(r.useState)(),a=Object(_.a)(t,2),c=a[0],n=a[1],s=Object(r.useState)(!1),o=Object(_.a)(s,2),i=o[0],d=o[1],l=Object(r.useState)("Pendente"),u=Object(_.a)(l,2),j=u[0],b=u[1],m=Object(p.g)();Object(r.useEffect)((function(){var e=m.location.pathname.split("/"),t=e[e.length-1],a={headers:{authorization:JSON.parse(localStorage.getItem("user")).token}};(function(){var e=Object(f.a)(x.a.mark((function e(){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(J,"/seller/orders/").concat(t),a);case 2:r=e.sent,n(r.data.order),b(r.data.order.status);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m.location.pathname]);var O=function(){var e=Object(f.a)(x.a.mark((function e(t){var a,r,c,n,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m.location.pathname.split("/"),r=a[a.length-1],c=JSON.parse(localStorage.getItem("user")),n=c.token,s={headers:{authorization:n}},e.next=6,I.a.post("".concat(J,"/seller/orders/").concat(r),{orderStatus:t},s);case 6:d(!i),b(t);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(c){var h=c.saleDate.split("-"),v="".concat(h[2][0]).concat(h[2][1]),g="".concat(h[1][0]).concat(h[1][1]),S="".concat(h[0].slice(0,4)),y="".concat(v,"/").concat(g,"/").concat(S);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(M,{name:e}),Object(C.jsx)("p",{children:"Detalhe do pedido"}),Object(C.jsxs)("div",{children:[Object(C.jsxs)("span",{"data-testid":"seller_order_details__element-order-details-label-order-id",children:["Pedido",c.id]}),Object(C.jsx)("span",{"data-testid":"seller_order_details__element-order-details-label-order-date",children:y}),Object(C.jsx)("span",{"data-testid":"seller_order_details__element-order-details-label-delivery-status",children:j}),Object(C.jsx)("button",{"data-testid":"seller_order_details__button-preparing-check",type:"button",disabled:"Pendente"!==j,onClick:function(){return O("Preparando")},children:"PREPARAR PEDIDO"}),Object(C.jsx)("button",{"data-testid":"seller_order_details__button-dispatch-check",type:"button",disabled:"Preparando"!==j,onClick:function(){return O("Em Tr\xe2nsito")},children:"SAIU PARA ENTREGA"}),Object(C.jsx)(de,{order:c.products}),Object(C.jsx)("span",{children:"Total: R$"}),Object(C.jsx)("span",{"data-testid":"seller_order_details__element-order-total-price",children:c.totalPrice.split(".").join(",")})]})]})}return Object(C.jsx)("p",{children:"Carregando"})};var ue=function(e){var t=e.id,a=e.status,r=e.date,c=e.totalPrice,n=r.split("-"),s="".concat(n[2][0]).concat(n[2][1]),o="".concat(n[1][0]).concat(n[1][1]),i="".concat(n[0][0]).concat(n[0][1]).concat(n[0][2]).concat(n[0][3]),d="".concat(s,"/").concat(o,"/").concat(i);return Object(C.jsxs)("a",{href:"/customer/orders/".concat(t),children:[Object(C.jsxs)(G.a.Title,{"data-testid":"customer_orders__element-order-id-".concat(t),style:{fontSize:"5px"},children:["Pedido",t]}),Object(C.jsx)(G.a.Text,{children:Object(C.jsx)("span",{"data-testid":"customer_orders__element-delivery-status-".concat(t),children:a})}),Object(C.jsx)(G.a.Text,{children:Object(C.jsx)("span",{"data-testid":"customer_orders__element-order-date-".concat(t),children:d})}),Object(C.jsxs)(G.a.Text,{children:["R$",Object(C.jsx)("span",{"data-testid":"customer_orders__element-card-price-".concat(t),children:c.toString().split(".").join(",")})]})]})};var je=function(){var e=JSON.parse(localStorage.getItem("user")).name,t=Object(r.useState)(),a=Object(_.a)(t,2),c=a[0],n=a[1];return Object(r.useEffect)((function(){var e={headers:{authorization:JSON.parse(localStorage.getItem("user")).token}};(function(){var t=Object(f.a)(x.a.mark((function t(){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("".concat(J,"/customer/orders"),e);case 2:a=t.sent,n(a.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(M,{name:e}),Object(C.jsx)(v.a,{fluid:!0,children:Object(C.jsx)(S.a,{children:c&&c.map((function(e){return Object(C.jsx)(y.a,{style:{padding:"0px",margin:"0px"},children:Object(C.jsx)(ue,{id:e.id,status:e.status,date:e.saleDate,totalPrice:e.totalPrice})},e.id)}))})})]})};var be=function(e){var t=e.id,a=e.status,r=e.date,c=e.totalPrice,n=e.deliveryAddress,s=e.deliveryNumber,o=r.split("-"),i="".concat(o[2][0]).concat(o[2][1]),d="".concat(o[1][0]).concat(o[1][1]),l="".concat(o[0][0]).concat(o[0][1]).concat(o[0][2]).concat(o[0][3]),u="".concat(i,"/").concat(d,"/").concat(l);return Object(C.jsxs)("a",{href:"/seller/orders/".concat(t),children:[Object(C.jsxs)(G.a.Title,{"data-testid":"seller_orders__element-order-id-".concat(t),style:{fontSize:"5px"},children:["Pedido",t]}),Object(C.jsx)(G.a.Text,{children:Object(C.jsx)("span",{"data-testid":"seller_orders__element-delivery-status-".concat(t),children:a})}),Object(C.jsx)(G.a.Text,{children:Object(C.jsx)("span",{"data-testid":"seller_orders__element-order-date-".concat(t),children:u})}),Object(C.jsxs)(G.a.Text,{children:["R$",Object(C.jsx)("span",{"data-testid":"seller_orders__element-card-price-".concat(t),children:c.toString().split(".").join(",")})]}),Object(C.jsx)(G.a.Text,{children:Object(C.jsx)("span",{"data-testid":"seller_orders__element-card-address-".concat(t),children:"".concat(n,",").concat(s)})})]})};var me=function(){var e=JSON.parse(localStorage.getItem("user")).name,t=Object(r.useState)(),a=Object(_.a)(t,2),c=a[0],n=a[1];return Object(r.useEffect)((function(){var e={headers:{authorization:JSON.parse(localStorage.getItem("user")).token}};(function(){var t=Object(f.a)(x.a.mark((function t(){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("".concat(J,"/seller/orders"),e);case 2:a=t.sent,n(a.data.sales);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(M,{name:e}),Object(C.jsx)(v.a,{fluid:!0,children:Object(C.jsx)(S.a,{children:c&&c.map((function(e){return Object(C.jsx)(y.a,{style:{padding:"0px"},children:Object(C.jsx)(be,{id:e.id,status:e.status,date:e.saleDate,totalPrice:e.totalPrice,deliveryAddress:e.deliveryAddress,deliveryNumber:e.deliveryNumber})},e.id)}))})})]})};var Oe=function(){return Object(C.jsxs)(p.d,{children:[Object(C.jsx)(p.b,{path:"/login",component:$}),Object(C.jsx)(p.b,{path:"/register",component:L}),Object(C.jsx)(ee,{path:"/customer/products",component:H}),Object(C.jsx)(ee,{path:"/customer/checkout",component:ne}),Object(C.jsx)(ee,{path:"/customer/orders/:id",component:ie}),Object(C.jsx)(ee,{path:"/customer/orders",component:je}),Object(C.jsx)(ee,{path:"/customer/orders",component:je}),Object(C.jsx)(ee,{path:"/seller/orders/:id",component:le}),Object(C.jsx)(ee,{path:"/seller/orders",component:me}),Object(C.jsx)(p.a,{strict:!0,from:"/",to:"/login"})]})};s.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(O.a,{children:Object(C.jsx)(m.a,{store:b,children:Object(C.jsx)(Oe,{})})})}),document.getElementById("root")),o()},31:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.4c1ea6cc.chunk.js.map