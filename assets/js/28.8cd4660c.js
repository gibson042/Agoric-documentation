(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{379:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"creating-non-fungible-tokens-with-ertp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-non-fungible-tokens-with-ertp"}},[t._v("#")]),t._v(" Creating non-fungible tokens with ERTP")]),t._v(" "),s("h2",{attrs:{id:"definition-of-fungible-non-fungible"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#definition-of-fungible-non-fungible"}},[t._v("#")]),t._v(" Definition of fungible/non-fungible")]),t._v(" "),s("p",[t._v("Assets are fungible if each asset is just as valuable as other assets of the same kind.\nFor instance, dollar bills are fungible because it doesn't matter which bill you use.\nEach dollar bill is interchangeable with any other. Paintings, on the other hand, are not fungible.\nPaintings have drastically different values depending on the content and painter.\nA deal involving a specific painting would not be satisfied by another painting.")]),t._v(" "),s("h2",{attrs:{id:"creating-a-non-fungible-asset-with-ertp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-non-fungible-asset-with-ertp"}},[t._v("#")]),t._v(" Creating a non-fungible asset with ERTP")]),t._v(" "),s("h3",{attrs:{id:"modeling-and-creating-the-asset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modeling-and-creating-the-asset"}},[t._v("#")]),t._v(" Modeling and creating the asset")]),t._v(" "),s("p",[t._v("In ERTP, digital assets are created by a "),s("a",{attrs:{href:"./issuer#mint"}},[s("code",[t._v("mint")])]),t._v(". Having access to the mint\ngives you the power to create more digital assets of the same type at will.")]),t._v(" "),s("p",[t._v("Let's say we own an Opera and want to sell tickets to seats for ballet shows. Tickets are\nthe non-fungible assets we want to represent. Tickets refer to a specific seat for a specific\nshow at a specific time and date.")]),t._v(" "),s("p",[t._v("To do that, you would first install the "),s("a",{attrs:{href:"https://www.npmjs.com/package/@agoric/ertp",target:"_blank",rel:"noopener noreferrer"}},[t._v("ertp JavaScript package"),s("OutboundLink")],1),t._v("\n("),s("code",[t._v("npm install @agoric/ertp")]),t._v(") and then:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" makeIssuerKit "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@agoric/ertp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" harden "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@agoric/harden'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" issuer "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeIssuerKit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Agoric Ballet Opera tickets'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'set'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("At this Opera, there are "),s("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Grand_Th%C3%A9%C3%A2tre_(Bordeaux)#Salle_de_spectacle",target:"_blank",rel:"noopener noreferrer"}},[t._v("1114"),s("OutboundLink")],1),t._v(" seats numbered "),s("code",[t._v("1")]),t._v(" to "),s("code",[t._v("1114")]),t._v(".\nObjects that represent valid tickets will have the following properties:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("seat")]),t._v(" with a number")]),t._v(" "),s("li",[s("code",[t._v("show")]),t._v(" with a string describing the show")]),t._v(" "),s("li",[s("code",[t._v("start")]),t._v(" with a string representing a "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString",target:"_blank",rel:"noopener noreferrer"}},[t._v("time/date in ISO format"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Let's create the tickets in ERTP!\nThe first step is to create JavaScript objects, each representing a ticket.\nThen, only "),s("a",{attrs:{href:"./amounts"}},[t._v("amounts")]),t._v(" can be minted, so let's create amounts from the JavaScript objects and then, let's mint the tickets!")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" startDateString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toISOString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ticketDescriptionObjects "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1114")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    seat"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    show"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The Sofa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    start"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" startDateString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" balletTicketPayments "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ticketDescriptionObjects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ticketDescription")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" balletTicketMint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mintPayment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    issuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAmountMath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ticketDescription"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("For each ticket amount, we've created a "),s("RouterLink",{attrs:{to:"/ertp/api/payment.html"}},[t._v("payment")]),t._v(" which contains the corresponding amount. These payments can then be used in smart contracts.")],1)])}),[],!1,null,null,null);a.default=e.exports}}]);