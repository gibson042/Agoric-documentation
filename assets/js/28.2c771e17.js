(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{420:function(e,t,a){"use strict";a.r(t);var s=a(41),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"brand"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brand"}},[e._v("#")]),e._v(" Brand")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("brand")]),e._v(" identifies the kind of assets. A particular "),a("code",[e._v("brand")]),e._v(" has one-to-one relationships\nwith an "),a("code",[e._v("issuer")]),e._v(" and a "),a("code",[e._v("mint")]),e._v(", and one-to-many relationships with "),a("code",[e._v("purses")]),e._v(" and "),a("code",[e._v("payments")]),e._v(".")]),e._v(" "),a("p",[e._v("Meaning for, say, the Quatloos "),a("code",[e._v("brand")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("There is only one Quatloos "),a("code",[e._v("issuer")]),e._v(".")]),e._v(" "),a("li",[e._v("There is only one Quatloos "),a("code",[e._v("mint")]),e._v(".")]),e._v(" "),a("li",[e._v("There can be any number of Quatloos holding "),a("code",[e._v("purses")]),e._v(", but those "),a("code",[e._v("purses")]),e._v(" can only hold Quatloos.")]),e._v(" "),a("li",[e._v("There can be any number of Quatloos holding "),a("code",[e._v("payments")]),e._v(", but those "),a("code",[e._v("payments")]),e._v(" can only hold Quatloos.")])]),e._v(" "),a("p",[e._v("But recipients of a\npurported "),a("code",[e._v("amount")]),e._v(" cannot use the "),a("code",[e._v("brand")]),e._v(" by itself to verify its authenticity,\nsince the "),a("code",[e._v("brand")]),e._v(" can be reused by a misbehaving "),a("code",[e._v("issuer")]),e._v(".")]),e._v(" "),a("p",[e._v("All of these relationships are unchangeable; if, say, a "),a("code",[e._v("mint")]),e._v(" is created that makes new Quatloos, it\ncan never create new assets of any other "),a("code",[e._v("brand")]),e._v(". And a "),a("code",[e._v("brand")]),e._v(" cannot be associated with any\nother "),a("code",[e._v("mint")]),e._v(" or "),a("code",[e._v("issuer")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"brand-ismyissuer-issuer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brand-ismyissuer-issuer"}},[e._v("#")]),e._v(" brand.isMyIssuer(issuer)")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("issuer")]),e._v(" "),a("code",[e._v("{Issuer}")])]),e._v(" "),a("li",[e._v("Returns: "),a("code",[e._v("{Boolean}")])])]),e._v(" "),a("p",[e._v("Return "),a("code",[e._v("true")]),e._v(" if "),a("code",[e._v("issuer")]),e._v(" is this brand's "),a("code",[e._v("issuer")]),e._v(", "),a("code",[e._v("false")]),e._v(" if not.")]),e._v(" "),a("p",[e._v("An "),a("code",[e._v("issuer")]),e._v(" uniquely identifies its "),a("code",[e._v("brand")]),e._v(". A "),a("code",[e._v("brand")]),e._v(" "),a("strong",[e._v("unreliably")]),e._v(" identifies\nits "),a("code",[e._v("issuer")]),e._v(". If "),a("code",[e._v("brand")]),e._v(" B claims its "),a("code",[e._v("issuer")]),e._v(" is A, but A doesn't agree\nthat B is its "),a("code",[e._v("brand")]),e._v(", then the "),a("code",[e._v("brand")]),e._v(" is unreliable.")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" isIssuer "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" brand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("isMyIssuer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("issuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("h2",{attrs:{id:"brand-getallegedname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brand-getallegedname"}},[e._v("#")]),e._v(" brand.getAllegedName()")]),e._v(" "),a("ul",[a("li",[e._v("Returns: "),a("code",[e._v("{String}")])])]),e._v(" "),a("p",[e._v("Returns the alleged name of the "),a("code",[e._v("brand")]),e._v(". Should not be trusted as accurate.")]),e._v(" "),a("p",[e._v("An alleged name is a human-readable string name of a kind of digital asset.\nIt should not be trusted as accurate since there is no public registry or\nexpectation of uniqueness. This means there can be multiple issuers/mints/brands\nwith the same alleged name, and thus the name by itself does not uniquely\nidentify an issuer. Rather, the brand object does that.")]),e._v(" "),a("p",[e._v("To put it another way, nothing stops different people from creating multiple\nissuers with the alleged name Quatloos...but that doesn't make any of them the\nQuatloos issuer. The alleged name is just a human readable version which is\nhelpful for debugging.")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" brand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getAllegedName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("h2",{attrs:{id:"brand-getdisplayinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brand-getdisplayinfo"}},[e._v("#")]),e._v(" brand.getDisplayInfo()")]),e._v(" "),a("ul",[a("li",[e._v("Returns: "),a("code",[e._v("{DisplayInfo}")])])]),e._v(" "),a("p",[e._v("Returns the "),a("code",[e._v("DisplayInfo")]),e._v(" associated with the "),a("code",[e._v("brand")]),e._v(".")]),e._v(" "),a("p",[e._v("You use a "),a("code",[e._v("displayInfo")]),e._v(" record at the dapp and UI levels to correctly\ndisplay amounts. For fungible tokens, use the "),a("code",[e._v("decimalPlaces")]),e._v(" property\nto display their value in the commonly used denomination, rather than\nthe smallest denomination used for financial accounting (for example,\ndisplaying in dollars rather than cents.)")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" quatloosDisplay "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" quatloosBrand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("getDisplayInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("h2",{attrs:{id:"related-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-methods"}},[e._v("#")]),e._v(" Related Methods")]),e._v(" "),a("p",[e._v("The following methods on other ERTP components also either operate on or\nreturn a "),a("code",[e._v("brand")]),e._v(". While a brief description is given for each, you should click through\nto a method's main documentation entry for full details on what it does and how\nto use it.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ertp/api/issuer.html#issuer-getbrand"}},[a("code",[e._v("issuer.getBrand()")])]),e._v(": Returns\nthe "),a("code",[e._v("brand")]),e._v(" for the "),a("code",[e._v("issuer")]),e._v(".")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ertp/api/payment.html#payment-getallegedbrand"}},[a("code",[e._v("payment.getAllegedBrand()")])]),e._v(": Returns\nthe "),a("code",[e._v("payment")]),e._v("'s alleged "),a("code",[e._v("brand")]),e._v(".")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);