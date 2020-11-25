(this["webpackJsonpcharacter-finder"]=this["webpackJsonpcharacter-finder"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),i=c.n(s),n=c(16),r=c.n(n),l=c(10),o=c(2),j=(c(23),function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()}))}),d=c(7),m=(c(24),function(e){var t="Human"===e.species?Object(a.jsx)("i",{className:"fas fa-universal-access"}):"Alien"===e.species?Object(a.jsx)("img",{src:"//img.icons8.com/ios/30/000000/alien.png"}):"";return Object(a.jsx)(d.b,{title:e.name,className:"link",to:"/character/".concat(e.id),children:Object(a.jsxs)("article",{className:"character-card",children:[Object(a.jsx)("img",{className:"character-card__image",src:e.image,alt:e.name}),Object(a.jsxs)("section",{className:"character-card__text",children:[Object(a.jsx)("h2",{className:"character-card__text--name",children:e.name}),Object(a.jsx)("span",{className:"character-card__text--species-icon",children:t}),Object(a.jsx)("p",{className:"character-card__text--species",children:e.species})]})]})})}),h=(c(30),c.p+"static/media/ups-image.6e8917ea.png"),u=function(e){return Object(a.jsxs)("div",{className:"list-container",children:[Object(a.jsx)("h2",{className:"list-container__message",children:"No character matches the word:"}),Object(a.jsx)("p",{className:"list-container__message",children:e.filterValue}),Object(a.jsx)("img",{className:"list-container__image",src:h,alt:"Rick and Morty"})]})},b=(c(31),function(e){var t=e.characterData.length||e.isLoading?e.characterData.map((function(e){return Object(a.jsx)("li",{className:"list",children:Object(a.jsx)(m,{id:e.id,image:e.image,name:e.name,species:e.species})},e.id)})):Object(a.jsx)(u,{filterValue:e.filterValue});return Object(a.jsxs)("main",{className:"main",children:[Object(a.jsx)("ul",{className:"main__character-list",children:t}),";",Object(a.jsx)("div",{className:"main__button-container",children:Object(a.jsx)("a",{href:"#",className:"main__button-container--button",children:"Up"})})]})}),f=(c(32),function(e){return Object(a.jsxs)("form",{className:"filters",onSubmit:function(e){return e.preventDefault()},children:[Object(a.jsx)("label",{htmlFor:"search",className:"filters__title",children:"Who are you looking for?"}),Object(a.jsx)("input",{onChange:function(t){e.handleFilterInput(t.currentTarget.value)},type:"text",name:"search",id:"search",value:e.filterValue,className:"filters__input",placeholder:"Ex: Pickle Rick"}),Object(a.jsxs)("label",{htmlFor:"sort",className:"filters__sort",children:[Object(a.jsx)("input",{onChange:function(t){e.handleSortInput(t.currentTarget.checked)},type:"checkbox",name:"sort",id:"sort",className:"filters__check"}),Object(a.jsx)("span",{className:"filters__custom-check ".concat(e.sortValue?"checked":"")}),"Sort by name"]})]})}),O=c.p+"static/media/ship.5ff9d73c.png",x=(c(33),function(e){var t="Dead"===e.status?Object(a.jsx)("img",{src:"https://img.icons8.com/cotton/25/000000/headstone--v1.png"}):"unknown"===e.status?Object(a.jsx)("img",{src:"https://img.icons8.com/dotty/25/000000/question-mark.png"}):e.status,c="Alien"===e.species?Object(a.jsx)("img",{src:"https://img.icons8.com/ios-filled/25/000000/alien.png"}):"Human"===e.species?Object(a.jsx)("img",{src:"https://img.icons8.com/ios/25/000000/da-vinci.png"}):e.species;return Object(a.jsxs)("section",{className:"container",children:[Object(a.jsx)("div",{className:"character-detail",children:Object(a.jsxs)("article",{className:"character-detail__card",children:[Object(a.jsx)("img",{src:e.image,alt:e.name,className:"character-detail__card--image"}),Object(a.jsxs)("div",{className:"character-detail__card--description",children:[Object(a.jsx)("h3",{className:"character-detail__card--name",children:e.name}),Object(a.jsxs)("p",{className:"character-detail__card--status",children:["STATUS: ",t]}),Object(a.jsxs)("p",{className:"character-detail__card--species",children:["SPECIES: ",c]}),Object(a.jsxs)("p",{className:"character-detail__card--origin",children:["ORIGIN: ",e.origin]}),Object(a.jsxs)("p",{className:"character-detail__card--episodes",children:["EPISODES: ",e.episodes]})]})]})}),Object(a.jsxs)("div",{className:"character-detail__back",children:[Object(a.jsx)(d.b,{className:"link",to:"/",children:Object(a.jsx)("button",{className:"character-detail__back--button",title:"Back to landing",children:"Back"})}),Object(a.jsx)("img",{src:O,alt:"Spaceship",className:"character-detail__back--ship"})]})]})}),_=c.p+"static/media/rick-sanchez.73303d18.png",p=c.p+"static/media/morty.fc6030c8.png",g=c.p+"static/media/logo.ee0728d3.png",N=(c(34),function(){return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{src:_,alt:"Rick",className:"header__rick"}),Object(a.jsx)("img",{src:g,alt:"Logo",className:"header__logo"}),Object(a.jsx)("img",{src:p,alt:"Morty",className:"header__morty"})]})}),k=c.p+"static/media/portal.5e5081a6.png",v=(c(35),function(){return Object(a.jsxs)("div",{className:"loader__container",children:[Object(a.jsx)("h3",{className:"loader__title",children:"Loading..."}),Object(a.jsx)("img",{className:"loader__img",src:k,alt:"Portal"})]})}),w=c.p+"static/media/pickle-rick.e73d50fa.png",S=(c(36),function(){return Object(a.jsxs)("section",{className:"not-found",children:[Object(a.jsx)("h2",{className:"not-found__title",children:"Character not found"}),Object(a.jsx)(d.b,{title:"Main page",className:"link",to:"/",children:Object(a.jsx)("span",{className:"not-found__link",children:"Back to finder"})}),Object(a.jsx)("img",{src:w,alt:"Pickle Rick",className:"not-found__image"})]})}),L=(c(37),function(){return Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsxs)("small",{className:"footer__text",children:["Made with"," ",Object(a.jsx)("span",{children:Object(a.jsx)("i",{class:"fas fa-grin-tears"})})," ","by Lucia Mezquida"]}),Object(a.jsx)("a",{href:"https://github.com/LuciaMezquida",className:"footer__github",title:"GitHub",target:"_blank",children:Object(a.jsx)("i",{class:"fab fa-github footer__github--icon"})}),Object(a.jsx)("a",{href:"https://twitter.com/LuciCodes",className:"footer__twitter",title:"Twitter",target:"_blank",children:Object(a.jsx)("i",{class:"fab fa-twitter footer__twitter--icon"})}),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/luciamezquidajuan/",className:"footer__linkedin",title:"Linkedin",target:"_blank",children:Object(a.jsx)("i",{class:"fab fa-linkedin footer__linkedin--icon"})})]})}),y=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)(""),r=Object(l.a)(n,2),d=r[0],m=r[1],h=Object(s.useState)(!1),u=Object(l.a)(h,2),O=u[0],_=u[1],p=Object(s.useState)(!1),g=Object(l.a)(p,2),k=g[0],w=g[1];Object(s.useEffect)((function(){w(!0),j().then((function(e){i(e.results),w(!1)}))}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(N,{}),Object(a.jsxs)(o.c,{children:[Object(a.jsxs)(o.a,{exact:!0,path:"/",children:[Object(a.jsx)(f,{handleFilterInput:function(e){m(e)},filterValue:d,handleSortInput:function(e){_(e)},sortValue:O}),k?Object(a.jsx)(v,{}):null,Object(a.jsx)(b,{characterData:function(){var e=c.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())}));return O&&e.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:e.name.toLowerCase()<t.name.toLowerCase()?-1:0})),e}(),filterValue:d,isLoading:k})]}),Object(a.jsx)(o.a,{path:"/character/:id",render:function(e){var t=parseInt(e.match.params.id),s=c.find((function(e){return e.id===t}));return s?Object(a.jsx)(x,{image:s.image,name:s.name,status:s.status,species:s.species,origin:s.origin.name,episodes:s.episode.length}):Object(a.jsx)(S,{})}})]}),Object(a.jsx)(L,{})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),i(e),n(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(d.a,{children:Object(a.jsx)(y,{})})}),document.getElementById("root")),C()}},[[38,1,2]]]);
//# sourceMappingURL=main.1a83746f.chunk.js.map