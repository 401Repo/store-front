(this.webpackJsonpmonkeys=this.webpackJsonpmonkeys||[]).push([[0],{117:function(e,t,r){"use strict";r.r(t);var a=r(1),c=r(0),i=r.n(c),s=r(10),n=r.n(s),o=(r(84),r(33)),l=r(7),p=r(70),d=r(144),m=r(147),j=r(149),h=r(146),u=r(145),b=r(148),g=r.p+"static/media/logo.6ce24c58.svg",w=(r(85),r(86),r.p+"static/media/Star.fcc920ad.png");var O=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header panel",children:[Object(a.jsx)("img",{src:w,className:"App-logo sizer",alt:"logo"}),Object(a.jsx)("p",{"data-testid":"line-1",children:"Welcome to the shop!"}),Object(a.jsx)("a",{"data-testid":"line-2",className:"App-link",href:"https://thatvetdevrob.com",target:"_blank",rel:"noopener noreferrer",children:"Back to world map"})]})})},x=r(17),y=r(71),f=r(141),v=r(153),S=r(143),_=r(24),k=r.n(_),A=r(39),C=r(40),N=r.n(C),M={categories:["Weapons","Accessories","Armor","Items"],activeCategory:{}},P=r(142),R=r(50),I=[],E=function(e){return{type:"DELETE_ITEM",payload:e}},T=[{name:"Mushroom",price:200,url:"https://www.mariowiki.com/images/9/94/MushroomMarioKart8.png",description:"Heal 20HP",category:"Items"},{name:"Delfino Water",price:400,url:"https://www.mariowiki.com/images/4/4f/Water_Bottles_SMS.png",description:"Heals 30HP",category:"Items"},{name:"Fire Flower",price:60,url:"https://www.mariowiki.com/images/7/7e/New_Super_Mario_Bros._U_Deluxe_Fire_Flower.png",description:"Hit all enemies!",category:"Items"},{name:"Happy Heart",price:200,url:"https://www.mariowiki.com/images/8/8e/Heart_SMO_unused_shop_icon.png",description:"Heal all HP",category:"Items"},{name:"Life 'Shroom",price:400,url:"https://www.mariowiki.com/images/b/b4/1-Up_Mushroom_Artwork_-_Super_Mario_3D_World.png",description:"Revives KO ally.",category:"Items"},{name:"F.L.U.D.D.",price:9400,url:"https://www.mariowiki.com/images/3/30/FLUDD_SMS.png",description:"Very polite item.",category:"Items"},{name:"Red Shell",price:50,url:"https://www.mariowiki.com/images/9/95/RedShellMK8.png",description:"Hit enemies!",category:"Items"},{name:"Red Shell Pack",price:140,url:"https://www.mariowiki.com/images/5/56/TripleRedShellsMK8.png",description:"Hit more enemies!",category:"Items"},{name:"Bob-omb",price:150,url:"https://www.mariowiki.com/images/9/9e/Bobomb_-_MarioPartyStarRush.png",description:"Cute weapon!",category:"Items"},{name:"Power Flower",price:60,url:"https://www.mariowiki.com/images/4/48/PowerflowerYS.png",description:"Yoshi love these",category:"Items"},{name:"Super Suit",price:2800,url:"https://www.mariowiki.com/images/e/e0/SMRPG_SuperSuit.PNG",description:"A truly fine suit.",category:"Armor"},{name:"Thick Shirt",price:200,url:"https://www.mariowiki.com/images/8/8f/ThickShirt.png",description:"A padded shirt.",category:"Armor"},{name:"Polka Dress",price:800,url:"https://www.mariowiki.com/images/3/33/SMRPG_Polkadress.png",description:"A flashy dress.",category:"Armor"},{name:"Nautical Dress",price:700,url:"https://www.mariowiki.com/images/d/dd/SMRPG_Nauticadress.png",description:"A female sailor's dress.",category:"Armor"},{name:"Fire Dress",price:900,url:"https://www.mariowiki.com/images/6/6d/SMRPG_Firedress.png",description:"A determined woman's dress.",category:"Armor"},{name:"Royal dress",price:2e3,url:"https://www.mariowiki.com/images/1/1b/SMRPG_Royaldress.png",description:"A legendary dress.",category:"Armor"},{name:"Happy Shell",price:500,url:"https://www.mariowiki.com/images/e/ec/SMRPG_Happyshell.png",description:"A lucky shell.",category:"Armor"},{name:"Fire Shell",price:900,url:"https://www.mariowiki.com/images/b/b0/SMRPG_Fireshell.png",description:"Determined person's shell.",category:"Armor"},{name:"Heal Shell",price:1500,url:"https://www.mariowiki.com/images/c/cb/SMRPG_Healshell.png",description:"A legendary shell.",category:"Armor"},{name:"Star Cape",price:800,url:"https://www.mariowiki.com/images/d/d9/StarCape.png",description:"A legendary cape.",category:"Armor"},{name:"Ultra Hammer",price:1400,url:"https://www.mariowiki.com/images/1/19/SMRPGUltra_Hammer.png",description:"The ultimate hammer!",category:"Weapons"},{name:"Super Slap",price:2400,url:"https://www.mariowiki.com/images/7/72/SMRPG_SuperSlap.png",description:"The Princess' mega-slap!",category:"Weapons"},{name:"Parasol",price:1100,url:"https://www.mariowiki.com/images/9/90/SMRPG_Parasol.png",description:"Inflicts serious pain!",category:"Weapons"},{name:"Star Gun",price:2100,url:"https://www.mariowiki.com/images/c/ce/SMRPG_StarGun.png",description:"Try shooting stars!",category:"Weapons"},{name:"Chain Chomp",price:1300,url:"https://www.mariowiki.com/images/9/90/SMRPG_Chomp.png",description:"Just spin me at an enemy!",category:"Weapons"},{name:"Spiked Link",price:1400,url:"https://www.mariowiki.com/images/b/b5/SMRPG_SpikedLink.png",description:"A studded ball and chain!",category:"Weapons"},{name:"Drill Claw",price:2300,url:"https://www.mariowiki.com/images/7/75/SMRPG_DrillClaw.png",description:"A drilling claw!",category:"Weapons"},{name:"Froggie Stick",price:900,url:"https://www.mariowiki.com/images/8/8f/SMRPG_FroggieStick.png",description:"Frogfucius made it!",category:"Weapons"},{name:"Sonic Cymbals",price:1100,url:"https://www.mariowiki.com/images/3/38/SMRPG_SonicCymbals.png",description:"Puts noise to work for you!",category:"Weapons"},{name:"Lazy Shell",price:4100,url:"https://www.mariowiki.com/images/7/70/SMRPG_LazyShell.png",description:"Toss a shell at an enemy!",category:"Weapons"},{name:"Power Star",price:2400,url:"https://www.mariowiki.com/images/d/d6/Captain_toad_powerstar.png",description:"Power Star!",category:"Accessories"},{name:"Silver Star",price:2600,url:"https://www.mariowiki.com/images/8/8f/Silver_Star_Artwork_-_Super_Mario_Galaxy_2.png",description:"Secret star!",category:"Accessories"},{name:"Green Star",price:1400,url:"https://www.mariowiki.com/images/3/31/Green_Star_Artwork_-_Super_Mario_3D_World.png",description:"Rare star!",category:"Accessories"},{name:"Shine Sprite",price:1700,url:"https://www.mariowiki.com/images/b/be/SMS_Shine_Sprite_Artwork.png",description:"One of a kind star!",category:"Accessories"},{name:"Grand Star",price:2700,url:"https://www.mariowiki.com/images/4/4d/MKT_Icon_GrandStar.png",description:"Cosmic star!",category:"Accessories"},{name:"Bean Star",price:9700,url:"https://www.mariowiki.com/images/4/40/MLSS_-_Beanstar_Artwork.png",description:"Organic star!",category:"Accessories"},{name:"Star Egg",price:1700,url:"https://www.mariowiki.com/images/9/98/Star_Egg_SMRPG_artwork.png",description:"Hit all enemies!",category:"Accessories"},{name:"Red Switch Poster",price:300,url:"https://www.mariowiki.com/images/8/8f/YIDS_Redswitch.jpg",description:"Wall Art",category:"Accessories"},{name:"Switch Poster",price:300,url:"https://www.mariowiki.com/images/7/7f/%21_Switch_Building_SuperMarioKun_4.jpg",description:"Wall Art",category:"Accessories"},{name:"POW Poster",price:300,url:"https://www.mariowiki.com/images/3/32/POWBlock_SuperMarioKun.jpg",description:"Wall Art",category:"Accessories"}],H=function(e){return{type:"INCREMENT_INVENTORY",payload:e}},G={filter:function(e){return{type:"FILTER",payload:e}},lowerInventory:function(e){return{type:"LOWER_INVENTORY",payload:e}},fetchProducts:function(){return function(){var e=Object(A.a)(k.a.mark((function e(t,r){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("http://localhost:3001/products");case 2:a=e.sent,t({type:"FETCH_PRODUCTS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},addItem:function(e){return{type:"ADD_ITEM",payload:e}}},W=Object(x.b)((function(e){return{products:e.products,categories:e.categories,cart:e.cart}}),G)((function(e){e.categories;var t=e.products;Object(c.useEffect)((function(){e.fetchProducts()}),[]);var r=function(e){return e.condition?e.children:null};return console.log("Here in props ",t),Object(a.jsx)(y.a,{elevation:2,elementType:"div",children:Object(a.jsx)(f.a,{className:"flexor",children:t.map((function(t,c){return console.log("The loop",t.name),console.log("looking for active",e.categories.activeCategory.name),Object(a.jsx)(r,{condition:t.category===e.categories.activeCategory.name,children:Object(a.jsxs)(P.a,{className:"display-stuff relativer",variant:"outlined",children:[Object(a.jsx)(v.a,{children:Object(a.jsx)("img",{className:"sizor-item",alt:t.name,src:t.url})},c+"1"),Object(a.jsxs)(v.a,{children:["Product: ",t.name]},c+"2"),Object(a.jsxs)(v.a,{children:["Price: ",t.price]},c+"3"),Object(a.jsxs)(v.a,{className:"bottomer",children:["Description: ",t.description]},c+"4"),Object(a.jsx)(S.a,{fullWidth:!0,id:"",className:"button-absoluter",variant:"contained",color:"secondary",onClick:function(){return function(t){e.addItem(t)}(t)},children:" Add To Cart "})]})})}))})})})),D=Object(d.a)((function(e){return{title:{display:"flex",paddingLeft:"24px"},list:{display:"flex",alignItem:"center",justifyContent:"space-between",paddingLeft:"10px"},listItem:{display:"inline"},mainCategory:{display:"flex"}}})),L={changeCategory:function(e){return{type:"CHANGE_CATEGORY",payload:e}},fetchCategories:function(){return function(){var e=Object(A.a)(k.a.mark((function e(t,r){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("http://localhost:3001/categories");case 2:a=e.sent,t({type:"FETCH_CATEGORIES",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}},F=Object(x.b)((function(e){return{categories:e.categories}}),L)((function(e){Object(c.useEffect)((function(){e.fetchCategories(),e.changeCategory({name:e.category})}),[]);var t=e.categories.categories;console.log(t,"category array");var r=D();return Object(a.jsxs)(y.a,{elevation:0,elementType:"div",children:[Object(a.jsxs)(y.a,{elementType:"section",children:[Object(a.jsxs)(u.a,{className:r.title,variant:"h4",children:["Browse Our ",e.categories.activeCategory.name]}),Object(a.jsxs)("div",{className:r.list,children:[Object(a.jsx)(f.a,{children:t.map((function(t,r){return Object(a.jsxs)(v.a,{onClick:function(){return e.changeCategory({name:t})},children:[Object(a.jsx)(S.a,{variant:"contained",color:"secondary",children:t})," "]},r)}))}),Object(a.jsx)(W,{})]})]}),Object(a.jsx)("div",{className:r.mainCategory,children:Object(a.jsxs)(u.a,{variant:"h5",children:["Now Browsing: ",e.categories.activeCategory.name]})})]})}));function Y(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header  panel",children:Object(a.jsx)("img",{src:"https://www.mariowiki.com/images/2/22/1-Up_Mushroom_PMTOK_icon.png",className:"App-logo sizer",alt:"logo"})}),Object(a.jsx)(F,{category:"Accessories"})]})}var z=r.p+"static/media/acc.e1c555da.png";function B(){return Object(a.jsxs)("div",{className:"App ",children:[Object(a.jsx)("header",{className:"App-header  panel",children:Object(a.jsx)("img",{src:z,className:"App-logo sizer",alt:"logo"})}),Object(a.jsx)(F,{category:"Armor"})]})}var U=r.p+"static/media/weapon.b1ec6c92.gif";function K(e){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header panel",children:Object(a.jsx)("img",{src:U,className:"App-logo sizer",alt:"logo"})}),Object(a.jsx)("p",{children:e.category}),Object(a.jsx)(F,{category:"Weapons"})]})}var V=r.p+"static/media/item.a5c0fa95.gif";function J(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header  panel",children:Object(a.jsx)("img",{src:V,className:"App-logo sizer",alt:"logo"})}),Object(a.jsx)(F,{category:"Items"})]})}var Z=r(48),$=r.n(Z),q=r(150),Q=r(67),X=r.n(Q),ee=r(66),te=r.n(ee);function re(){return Math.round(20*Math.random())-10}function ae(){var e=50+re(),t=50+re();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var ce=Object(d.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function ie(){var e=X()(),t=e.width,r=e.height,c=ce(),s=i.a.useState(ae),n=Object(o.a)(s,1)[0],l=i.a.useState(!1),p=Object(o.a)(l,2),d=p[0],m=p[1],j=function(){m(!1),window.location.reload()},h=Object(a.jsxs)("div",{children:[" ",Object(a.jsx)(te.a,{width:t,height:r}),Object(a.jsxs)("div",{style:n,className:c.paper,children:[Object(a.jsx)("h2",{id:"simple-modal-title",children:"Text in a modal"}),Object(a.jsx)("p",{id:"simple-modal-description",children:"YOUR ITEMS ARE ON THE WAY!\u2665"}),Object(a.jsx)("button",{type:"button",onClick:j,children:"Close"})]})]});return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{type:"button",onClick:function(){m(!0)},children:"Open Modal"}),Object(a.jsx)(q.a,{open:d,onClose:j,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:h})]})}var se={deleteItem:E,incrementInventory:H},ne=Object(x.b)((function(e){return{cart:e.cart}}),se)((function(e){var t=e.cart;var r=Object(d.a)((function(e){return{title:{display:"flex",paddingLeft:"24px"},list:{display:"flex",alignItem:"center",justifyContent:"space-between",paddingLeft:"10px"},listItem:{display:"inline"},mainCategory:{display:"flex"}}}))(),c=function(e){return e.condition?e.children:null};console.log("Hello from cart: ",t.length);var i=0;return Object(a.jsx)(y.a,{elevation:0,className:"strecher",elementType:"div",children:Object(a.jsxs)(y.a,{elementType:"section",children:[Object(a.jsx)(u.a,{className:r.title,variant:"h4",children:"Your shopping cart~!"}),Object(a.jsxs)("div",{className:r.list,id:"strecher",children:[Object(a.jsx)(c,{condition:t.length>=1,children:Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsx)("div",{class:"wrapper5",children:Object(a.jsx)("div",{class:"container5",children:Object(a.jsxs)("form",{action:"",children:[Object(a.jsxs)("h1",{children:[Object(a.jsx)("i",{class:"fas fa-shipping-fast"}),"Shipping Details"]}),Object(a.jsxs)("div",{class:"name",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{for:"f-name",children:"First"}),Object(a.jsx)("input",{type:"text",name:"f-name"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{for:"l-name",children:"Last"}),Object(a.jsx)("input",{type:"text",name:"l-name"})]})]}),Object(a.jsxs)("div",{class:"street",children:[Object(a.jsx)("label",{for:"name",children:"Street"}),Object(a.jsx)("input",{type:"text",name:"address"})]}),Object(a.jsxs)("div",{class:"address-info",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{for:"city",children:"City"}),Object(a.jsx)("input",{type:"text",name:"city"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{for:"state",children:"State"}),Object(a.jsx)("input",{type:"text",name:"state"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{for:"zip",children:"Zip"}),Object(a.jsx)("input",{type:"text",name:"zip"})]})]}),Object(a.jsxs)("h1",{children:[Object(a.jsx)("i",{class:"far fa-credit-card"})," Payment Information"]}),Object(a.jsxs)("div",{class:"cc-num",children:[Object(a.jsx)("label",{for:"card-num",children:"Credit Card No."}),Object(a.jsx)("input",{type:"text",name:"card-num"})]}),Object(a.jsxs)("div",{class:"cc-info",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{for:"card-num",children:"Exp"}),Object(a.jsx)("input",{type:"text",name:"expire"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{for:"card-num",children:"CCV"}),Object(a.jsx)("input",{type:"text",name:"security"})]})]}),Object(a.jsxs)("div",{class:"btns",children:[Object(a.jsx)("button",{children:"Purchase"}),Object(a.jsx)(ie,{})]})]})})}),Object(a.jsxs)("div",{id:"items",children:[Object(a.jsx)("p",{children:"Your items:"}),Object(a.jsx)(f.a,{className:"flexer",children:t.map((function(t,r){return console.log(i),console.log("price item: ",t.price),i+=t.price,console.log("now total is:",i),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(v.a,{children:[Object(a.jsxs)("div",{className:"checkout-panels",children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:"sizor-checkout",alt:t.name,src:t.url})}),Object(a.jsxs)("div",{children:["Product: ",t.name]},r+"2"),Object(a.jsxs)("div",{children:["Price: ",t.price]},r+"3")]}),Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:Object(a.jsx)(S.a,{variant:"contained",onClick:function(){return function(t){e.deleteItem(t),e.incrementInventory(t)}(t)},color:"secondary",startIcon:Object(a.jsx)($.a,{}),children:"Remove"})})})]},r+"1")})}))}),Object(a.jsx)("div",{children:Object(a.jsxs)("h5",{children:["total: $",i,".00"]})})]})]})}),Object(a.jsx)(c,{condition:t.length<1,children:Object(a.jsxs)(f.a,{className:"flexer",children:[Object(a.jsx)("h1",{children:"Nothing here!"}),Object(a.jsxs)("h5",{children:["total: $",i,".00"]})]})})]})]})})}));var oe=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header panel",children:[Object(a.jsx)("img",{src:g,className:"App-logo sizer",alt:"logo"}),Object(a.jsx)(ne,{})]})})},le=r(61);function pe(e){return console.log("from icons: ",Object(l.a)({},e)),Object(a.jsx)(le.a,Object(l.a)(Object(l.a)({},e),{},{children:Object(a.jsx)("path",{fill:"currentColor",d:"M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z"})}))}var de={deleteItem:E,incrementInventory:H},me=Object(x.b)((function(e){return{cart:e.cart}}),de)((function(e){var t=e.cart;return Object(a.jsxs)("p",{children:[Object(a.jsx)(pe,{}),"(",t.length,")"]})}));function je(e){var t=e.children,r=e.value,c=e.index,i=Object(p.a)(e,["children","value","index"]);return Object(a.jsx)("div",Object(l.a)(Object(l.a)({role:"tabpanel",hidden:r!==c,id:"nav-tabpanel-".concat(c),"aria-labelledby":"nav-tab-".concat(c)},i),{},{children:r===c&&Object(a.jsx)(b.a,{"data-testid":"line-4",p:4,children:Object(a.jsx)(u.a,{children:t})})}))}function he(e){return{id:"nav-tab-".concat(e),"aria-controls":"nav-tabpanel-".concat(e)}}function ue(e){return Object(a.jsx)(h.a,Object(l.a)({component:"a",onClick:function(e){e.preventDefault()}},e))}var be=Object(d.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function ge(e){var t=be(),r=i.a.useState(0),c=Object(o.a)(r,2),s=c[0],n=c[1];return Object(a.jsx)("div",{"data-testid":"line-5",className:"wrapper3 topper",children:Object(a.jsxs)("div",{"data-testid":"line-6",className:t.root,children:[Object(a.jsx)(m.a,{position:"static",children:Object(a.jsxs)(j.a,{variant:"fullWidth",value:s,onChange:function(e,t){n(t)},"aria-label":"nav tabs example",children:[Object(a.jsx)(ue,Object(l.a)({label:"Home",href:"/home"},he(0))),Object(a.jsx)(ue,Object(l.a)({label:"Accessories",href:"/acc"},he(1))),Object(a.jsx)(ue,Object(l.a)({label:"Armor",href:"/armor"},he(2))),Object(a.jsx)(ue,Object(l.a)({label:"Weapons",href:"/weapons"},he(3))),Object(a.jsx)(ue,Object(l.a)({label:"Items",href:"/items"},he(4))),Object(a.jsx)(ue,Object(l.a)({label:Object(a.jsx)(me,{}),href:"/cart"},he(5)))]})}),Object(a.jsx)(je,{value:s,index:0,children:Object(a.jsx)(O,{})}),Object(a.jsx)(je,{value:s,index:1,children:Object(a.jsx)(Y,{})}),Object(a.jsx)(je,{value:s,index:2,children:Object(a.jsx)(B,{})}),Object(a.jsx)(je,{value:s,index:3,children:Object(a.jsx)(K,{})}),Object(a.jsx)(je,{value:s,index:4,children:Object(a.jsx)(J,{})}),Object(a.jsx)(je,{value:s,index:5,children:Object(a.jsx)(oe,{})})]})})}var we=r(23),Oe=r(68),xe=r(69),ye=Object(we.combineReducers)({categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0,r=t.type,a=t.payload;switch(r){case"CHANGE_CATEGORY":return Object(l.a)(Object(l.a)({},e),{},{activeCategory:a});case"FETCH_CATEGORIES":return Object(l.a)(Object(l.a)({},e),{},{categories:a});default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,r=t.type,a=t.payload;switch(r){case"FILTER":for(var c=[],i=0;i<e.products.length;i++)return e.products[i].category===a&&c.push(e.products[i]),Object(l.a)(Object(l.a)({},e),{},{products:c});case"FETCH_PRODUCTS":return a;case"INCREMENT_INVENTORY":return console.log("In the increment inventory"),e;case"LOWER_INVENTORY":return console.log("In the lower inventory case"),e;default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,r=t.type,a=t.payload;switch(r){case"ADD_ITEM":return[].concat(Object(R.a)(e),[a]);case"DELETE_ITEM":for(var c=0;c<e.length;c++)return console.log("state",e),console.log("deleted item",a.name),e[c].name===a.name&&e.splice(c,1),Object(R.a)(e);return e;case"RESET":return I;default:return e}}}),fe=Object(we.createStore)(ye,Object(Oe.composeWithDevTools)(Object(we.applyMiddleware)(xe.a)));n.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(x.a,{store:fe,children:Object(a.jsx)(ge,{className:" topper"})})}),document.getElementById("root"))},84:function(e,t,r){},85:function(e,t,r){},86:function(e,t,r){}},[[117,1,2]]]);
//# sourceMappingURL=main.c4b7268f.chunk.js.map