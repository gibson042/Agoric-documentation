(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{423:function(t,s,a){"use strict";a.r(s);var n=a(41),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mint"}},[t._v("#")]),t._v(" Mint")]),t._v(" "),a("p",[t._v("Only a "),a("code",[t._v("mint")]),t._v(" can issue new digital assets.")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("mint")]),t._v(" has a one-to-one relationship with both an "),a("code",[t._v("issuer")]),t._v(" and a "),a("code",[t._v("brand")]),t._v(".\nSo it can only mint new assets of that "),a("code",[t._v("brand")]),t._v(" and is the only "),a("code",[t._v("mint")]),t._v(" that can mint\nnew assets of that "),a("code",[t._v("brand")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"makeissuerkit-allegedname-assetkind-displayinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#makeissuerkit-allegedname-assetkind-displayinfo"}},[t._v("#")]),t._v(" "),a("code",[t._v("makeIssuerKit(allegedName, assetKind, displayInfo)")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("allegedName")]),t._v(" "),a("code",[t._v("{String}")])]),t._v(" "),a("li",[a("code",[t._v("assetKind")]),t._v(" "),a("code",[t._v("{AssetKind}")])]),t._v(" "),a("li",[a("code",[t._v("displayInfo")]),t._v(" "),a("code",[t._v("{DisplayInfo}")])]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{IssuerKit}")])])]),t._v(" "),a("p",[t._v("While not a method called on a "),a("code",[t._v("mint")]),t._v(", clearly it's important to know how to create a new "),a("code",[t._v("mint")]),t._v(".\n"),a("code",[t._v("makeIssuerKit()")]),t._v(" returns a new "),a("code",[t._v("issuer")]),t._v(", "),a("code",[t._v("mint")]),t._v(", and "),a("code",[t._v("brand")]),t._v(".\nSee "),a("RouterLink",{attrs:{to:"/ertp/api/issuer.html#makeissuerkit-allegedname-assetkind-displayinfo"}},[t._v("here")]),t._v(" for details.")],1),t._v(" "),a("h2",{attrs:{id:"mint-getissuer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mint-getissuer"}},[t._v("#")]),t._v(" "),a("code",[t._v("mint.getIssuer()")])]),t._v(" "),a("ul",[a("li",[t._v("Returns: "),a("code",[t._v("{Issuer}")])])]),t._v(" "),a("p",[t._v("Get the "),a("code",[t._v("Issuer")]),t._v(" associated with this "),a("code",[t._v("mint")]),t._v(". From their creation, a "),a("code",[t._v("mint")]),t._v(" is always\nin an unchangeable one-to-one relationship with an "),a("code",[t._v("issuer")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" issuer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" quatloosIssuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" quatloosMint "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeIssuerKit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quatloos'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" quatloosMintIssuer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quatloosMint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getIssuer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns true")]),t._v("\nissuer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" quatloosMintIssuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"mint-mintpayment-newamount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mint-mintpayment-newamount"}},[t._v("#")]),t._v(" "),a("code",[t._v("mint.mintPayment(newAmount)")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("newAmount")]),t._v(" "),a("code",[t._v("{Amount}")])]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{Payment}")])])]),t._v(" "),a("p",[a("strong",[t._v("Important")]),t._v(": "),a("code",[t._v("mint.mintPayment()")]),t._v(" is the "),a("ins",[t._v("only")]),t._v(" way\nto create new digital assets. There is no other way.")]),t._v(" "),a("p",[t._v("Create new digital assets of the "),a("code",[t._v("mint")]),t._v("'s associated "),a("code",[t._v("brand")]),t._v(".\nFrom their creation, a "),a("code",[t._v("mint")]),t._v(" is always in an unchangeable\none-to-one relationship with a "),a("code",[t._v("brand")]),t._v(".")]),t._v(" "),a("p",[t._v("Returns a "),a("code",[t._v("payment")]),t._v(" containing the newly minted assets.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" issuer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" quatloosIssuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" quatloosMint\n        brand"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" quatloosBrand "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeIssuerKit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quatloos'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" quatloos1000 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quatloosBrand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// newPayment will have a balance of 1000 Quatloos")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newPayment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quatloosMint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mintPayment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quatloos1000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);