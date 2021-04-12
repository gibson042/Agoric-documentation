(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{423:function(t,a,s){"use strict";s.r(a);var n=s(41),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mint"}},[t._v("#")]),t._v(" Mint")]),t._v(" "),s("p",[t._v("Only a "),s("code",[t._v("mint")]),t._v(" can issue new digital assets.")]),t._v(" "),s("p",[t._v("A "),s("code",[t._v("mint")]),t._v(" has a one-to-one relationship with both an "),s("code",[t._v("issuer")]),t._v(" and a "),s("code",[t._v("brand")]),t._v(".\nSo it can only mint new assets of that "),s("code",[t._v("brand")]),t._v(" and is the only "),s("code",[t._v("mint")]),t._v(" that can mint\nnew assets of that "),s("code",[t._v("brand")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"makeissuerkit-allegedname-amountmathkind-displayinfo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#makeissuerkit-allegedname-amountmathkind-displayinfo"}},[t._v("#")]),t._v(" makeIssuerKit(allegedName, amountMathKind, displayInfo)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("allegedName")]),t._v(" "),s("code",[t._v("{String}")])]),t._v(" "),s("li",[s("code",[t._v("amountMathKind")]),t._v(" "),s("code",[t._v("{MathKind}")])]),t._v(" "),s("li",[s("code",[t._v("displayInfo")]),t._v(" "),s("code",[t._v("{DisplayInfo}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("{IssuerKit}")])])]),t._v(" "),s("p",[t._v("While not a method called on a "),s("code",[t._v("mint")]),t._v(", clearly it's important to know how to create a new "),s("code",[t._v("mint")]),t._v(".\n"),s("code",[t._v("makeIssuerKit()")]),t._v(" returns a new "),s("code",[t._v("issuer")]),t._v(", "),s("code",[t._v("mint")]),t._v(", and "),s("code",[t._v("brand")]),t._v(".\nSee "),s("RouterLink",{attrs:{to:"/ertp/api/issuer.html#makeissuerkit-allegedname-amountmathkind-displayinfo"}},[t._v("here")]),t._v(" for details.")],1),t._v(" "),s("h2",{attrs:{id:"mint-getissuer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mint-getissuer"}},[t._v("#")]),t._v(" mint.getIssuer()")]),t._v(" "),s("ul",[s("li",[t._v("Returns: "),s("code",[t._v("{Issuer}")])])]),t._v(" "),s("p",[t._v("Get the "),s("code",[t._v("Issuer")]),t._v(" associated with this "),s("code",[t._v("mint")]),t._v(". From their creation, a "),s("code",[t._v("mint")]),t._v(" is always\nin an unchangeable one-to-one relationship with an "),s("code",[t._v("issuer")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" issuer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" quatloosIssuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" quatloosMint "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeIssuerKit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quatloos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" quatloosMintIssuer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quatloosMint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getIssuer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns true")]),t._v("\nissuer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" quatloosMintIssuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"mint-mintpayment-newamount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mint-mintpayment-newamount"}},[t._v("#")]),t._v(" mint.mintPayment(newAmount)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("newAmount")]),t._v(" "),s("code",[t._v("{Amount}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("{Payment}")])])]),t._v(" "),s("p",[s("strong",[t._v("Important")]),t._v(": "),s("code",[t._v("mint.mintPayment()")]),t._v(" is the "),s("ins",[t._v("only")]),t._v(" way\nto create new digital assets. There is no other way.")]),t._v(" "),s("p",[t._v("Create new digital assets of the "),s("code",[t._v("mint")]),t._v("'s associated "),s("code",[t._v("brand")]),t._v(".\nFrom their creation, a "),s("code",[t._v("mint")]),t._v(" is always in an unchangeable\none-to-one relationship with a "),s("code",[t._v("brand")]),t._v(".")]),t._v(" "),s("p",[t._v("Returns a "),s("code",[t._v("payment")]),t._v(" containing the newly minted assets.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" issuer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" quatloosIssuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" quatloosMint\n        brand"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" quatloosBrand "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeIssuerKit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quatloos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" quatloos1000 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quatloosBrand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// newPayment will have a balance of 1000 Quatloos")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newPayment "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quatloosMint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mintPayment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quatloos1000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);