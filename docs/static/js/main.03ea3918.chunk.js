(this["webpackJsonpleccion-2-cats"]=this["webpackJsonpleccion-2-cats"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(16),s=c.n(n),r=c(10),i=c(2),l=(c(22),c(23),c.p+"static/media/rick_morty_logo.de13d484.png"),o=c(0),j=function(){return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("h1",{className:"header-text",children:"Rick and Morty"}),Object(o.jsx)("img",{className:"header-img",src:l,alt:"Rick and Morty",title:"Rick and Morty"})]})},h=function(e){return Object(o.jsx)("input",{className:"form__input name",type:"text",name:"name",id:"name",value:e.filterName,placeholder:"Character's name",onChange:function(t){e.handleFilter({value:t.target.value,key:"name"})}})},u=function(e){return Object(o.jsx)("input",{className:"form__input species",type:"text",name:"species",id:"species",value:e.filterSpecies,placeholder:"Species",onChange:function(t){e.handleFilter({value:t.target.value,key:"species"})}})},m=function(e){return Object(o.jsxs)("form",{className:"main__form",onClick:function(e){e.preventDefault()},children:[Object(o.jsx)(h,{filterName:e.filterName,handleFilter:e.handleFilter}),Object(o.jsx)(u,{filterSpecies:e.filterSpecies,handleFilter:e.handleFilter})]})},d=c(7),f=function(e){return Object(o.jsx)(d.b,{to:"/character/".concat(e.characterData.id),children:Object(o.jsxs)("article",{className:"character__list-item",children:[Object(o.jsx)("img",{className:"character-pic",src:e.characterData.picture,alt:e.characterData.name}),Object(o.jsx)("h2",{className:"character-name",children:e.characterData.name}),Object(o.jsx)("p",{className:"character-species",children:e.characterData.species})]})})},b=function(e){var t="";return t=0!==e.characters.length?e.characters.map((function(e){return Object(o.jsx)("li",{className:"character__list__item",children:Object(o.jsx)(f,{characterData:e})},e.id)})):Object(o.jsx)("h2",{children:"Character not found"}),Object(o.jsx)("section",{className:"results-section",children:Object(o.jsx)("ul",{className:"character__list",children:t})})},O=function(e){return Object(o.jsxs)("main",{className:"card-detail-container",children:[Object(o.jsx)(d.b,{className:"return-link",to:"/",children:"Go back"}),Object(o.jsxs)("div",{className:"main-detail",children:[Object(o.jsx)("section",{className:"mid-section-card-left",children:Object(o.jsx)("img",{src:e.character.picture,alt:"nombre"})}),Object(o.jsxs)("section",{className:"mid-section-card-right",children:[Object(o.jsx)("h2",{className:"detail-title",children:e.character.name}),Object(o.jsxs)("ul",{className:"list-detail",children:[Object(o.jsxs)("li",{className:"list-detail__item",children:["Status:",e.character.status]}),Object(o.jsxs)("li",{className:"list-detail__item",children:["Species: ",e.character.species]}),Object(o.jsxs)("li",{className:"list-detail__item",children:["Origin: ",e.character.origin]}),Object(o.jsxs)("li",{className:"list-detail__item",children:["Number of episodes: ",e.character.episode]})]})]})]})]})},p=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("main",{className:"not-found-main",children:[Object(o.jsx)("div",{className:"not-found-background"}),Object(o.jsx)(d.b,{className:"return-link",to:"/",children:"Try again"}),Object(o.jsx)("h2",{className:"not-found-text",children:"The character you are looking for is not in this dimension..."})]})})},x=function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("small",{className:"footer__rights",children:Object(o.jsx)("span",{className:"rights__item",children:"\xa92021"})})})},g=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){return{name:e.name,id:e.id,picture:e.image,species:e.species,status:e.status,origin:e.origin.name,episode:e.episode.length}}));return t.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),t}))},N={get:function(e,t){var c=localStorage.getItem(e);return null===c?t:JSON.parse(c)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},_=function(){var e=Object(a.useState)(N.get("characters",[])),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(N.get("filterName","")),l=Object(r.a)(s,2),h=l[0],u=l[1],d=Object(a.useState)(N.get("filterSpecies","")),f=Object(r.a)(d,2),_=f[0],v=f[1];Object(a.useEffect)((function(){0===c.length&&g().then((function(e){n(e)}))}),[]),Object(a.useEffect)((function(){N.set("characters",c)}),[c]),Object(a.useEffect)((function(){N.set("name",h)}),[h]),Object(a.useEffect)((function(){N.set("species",_)}),[_]);var k=c.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())})).filter((function(e){return e.species.toLowerCase().includes(_.toLowerCase())}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{}),Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",children:Object(o.jsxs)("main",{className:"main",children:[Object(o.jsx)(m,{filterName:h,filterSpecies:_,handleFilter:function(e){"name"===e.key?u(e.value):"species"===e.key&&v(e.value)}}),Object(o.jsx)(b,{characters:k})]})}),Object(o.jsx)(i.a,{path:"/character/:characterId",render:function(e){var t=e.match.params.characterId,a=c.find((function(e){return e.id===parseInt(t)}));return console.log("router props",t,a),void 0!==a?Object(o.jsx)(O,{character:a}):Object(o.jsx)(p,{})}}),Object(o.jsx)(i.a,{path:"*",component:p})]}),Object(o.jsx)(x,{})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};s.a.render(Object(o.jsx)(d.a,{children:Object(o.jsx)(_,{})}),document.getElementById("root")),v()}},[[30,1,2]]]);
//# sourceMappingURL=main.03ea3918.chunk.js.map