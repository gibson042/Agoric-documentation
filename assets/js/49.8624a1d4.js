(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{404:function(t,e,s){"use strict";s.r(e);var a=s(42),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"zoehelpers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zoehelpers"}},[t._v("#")]),t._v(" ZoeHelpers")]),t._v(" "),s("p",[t._v("ZoeHelpers are functions that extract common contract code and\npatterns into reusable helpers.")]),t._v(" "),s("p",[t._v("All of the ZoeHelper methods are described below. To use any of them, import\nit directly from "),s("code",[t._v("@agoric/zoe/src/contractSupport/")]),t._v(". For example, the following\nimports the two ZoeHelpers "),s("code",[t._v("assertIssuerKeywords()")]),t._v(" and "),s("code",[t._v("assertProposalShape()")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  assertIssuerKeywords"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  assertProposalShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@agoric/zoe/src/contractSupport'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Note that almost all ZoeHelpers require "),s("code",[t._v("zcf")]),t._v(", a "),s("code",[t._v("ContractFacet")]),t._v(" as a first argument.\nZoeHelpers are contract helpers, in that they are useful to contract code. Contracts are started up by Zoe,\nand "),s("code",[t._v("zcf")]),t._v(" is passed in as a parameter to "),s("code",[t._v("start()")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"assertissuerkeywords-zcf-keywords"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assertissuerkeywords-zcf-keywords"}},[t._v("#")]),t._v(" assertIssuerKeywords(zcf, keywords)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("zcf")]),t._v(" "),s("code",[t._v("{ContractFacet}")])]),t._v(" "),s("li",[s("code",[t._v("keywords")]),t._v(" "),s("code",[t._v("{Array <String>}")])])]),t._v(" "),s("p",[t._v("This method always takes "),s("code",[t._v("zcf")]),t._v(" as its first argument.")]),t._v(" "),s("p",[t._v("Checks that keywords submitted by the contract instance creator\nmatch what the contract expects. Throws if incorrect or if there are\nmissing or extra keywords. The keywords order is irrelevant.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  assertIssuerKeywords"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@agoric/zoe/src/contractSupport'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// proposals for this contract instance use keywords 'Asset' and 'Price'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertIssuerKeywords")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zcf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Asset'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Price'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"assertusesnatmath-zcf-brand"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assertusesnatmath-zcf-brand"}},[t._v("#")]),t._v(" assertUsesNatMath(zcf, brand)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("zcf")]),t._v("- "),s("code",[t._v("{ContractFacet}")])]),t._v(" "),s("li",[s("code",[t._v("brand")]),t._v(" - "),s("code",[t._v("{Brand}")])])]),t._v(" "),s("p",[t._v("This method always takes "),s("code",[t._v("zcf")]),t._v(" as its first argument.")]),t._v(" "),s("p",[t._v("Assert that the "),s("code",[t._v("brand")]),t._v(" corresponds to an "),s("code",[t._v("issuer")]),t._v(" that uses "),s("code",[t._v("MathKind.NAT")]),t._v(".\nThis means the "),s("code",[t._v("issuer")]),t._v(" creates fungible assets.")]),t._v(" "),s("p",[t._v("If "),s("code",[t._v("false")]),t._v(" throws with message "),s("code",[t._v("issuer must use NAT amountMath")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  assertUsesNatMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@agoric/zoe/src/contractSupport'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertUsesNatMath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zcf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" quatloosBrand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"satisfies-zcf-seat-update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#satisfies-zcf-seat-update"}},[t._v("#")]),t._v(" satisfies(zcf, seat, update)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("zcf")]),t._v("- "),s("code",[t._v("{ContractFacet}")])]),t._v(" "),s("li",[s("code",[t._v("seat")]),t._v(" - "),s("code",[t._v("{ZCFSeat}")])]),t._v(" "),s("li",[s("code",[t._v("update")]),t._v(" - "),s("code",[t._v("{AmountKeywordRecord}")])]),t._v(" "),s("li",[t._v("Returns: `{Boolean}")])]),t._v(" "),s("p",[t._v("This method always takes "),s("code",[t._v("zcf")]),t._v(" as its first argument.")]),t._v(" "),s("p",[t._v("Returns "),s("code",[t._v("true")]),t._v(" if an update to a "),s("code",[t._v("seat")]),t._v("'s "),s("code",[t._v("currentAllocation")]),t._v(" satisfies its\n"),s("code",[t._v("proposal.want")]),t._v(". Note this is half of the offer safety check;\nit does not check if the allocation constitutes a refund.\nThe update is merged with "),s("code",[t._v("currentAllocation")]),t._v(" such that\n"),s("code",[t._v("update")]),t._v("'s values prevail if the keywords are the same. If they\nare not the same, the "),s("code",[t._v("keyword")]),t._v(" and "),s("code",[t._v("value")]),t._v(" is just added to the "),s("code",[t._v("currentAllocation")]),t._v(".")]),t._v(" "),s("p",[t._v("The following example code uses "),s("code",[t._v("satisfies()")]),t._v(" to define a "),s("code",[t._v("satisfiedBy()")]),t._v(" comparison\nmethod between two "),s("code",[t._v("seats")]),t._v(". It checks if the second "),s("code",[t._v("seat")]),t._v(" argument's "),s("code",[t._v("currentAllocation")]),t._v("\nsatisfies the first "),s("code",[t._v("seat")]),t._v(" argument's "),s("code",[t._v("proposal.want")]),t._v(".")]),t._v(" "),s("p",[t._v("It then calls "),s("code",[t._v("satisfiedBy()")]),t._v(" on both orders of the two "),s("code",[t._v("seats")]),t._v(". If both satisfy each other,\nit does a swap on them.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  satisfies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@agoric/zoe/src/contractSupport'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("satisfiedBy")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("xSeat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ySeat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("satisfies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zcf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" xSeat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ySeat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentAllocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("satisfiedBy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" seat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("satisfiedBy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("swap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zcf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" seat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"trade-zcf-keepleft-tryright"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#trade-zcf-keepleft-tryright"}},[t._v("#")]),t._v(" trade(zcf, keepLeft, tryRight)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("zcf")]),t._v(" - "),s("code",[t._v("{ContractFacet}")])]),t._v(" "),s("li",[s("code",[t._v("keepLeft")]),t._v(" - "),s("code",[t._v("{Seat}")])]),t._v(" "),s("li",[s("code",[t._v("tryRight")]),t._v(" - "),s("code",[t._v("{Seat}")])]),t._v(" "),s("li",[t._v("Returns: Undefined.")])]),t._v(" "),s("p",[s("strong",[t._v("Note")]),t._v(": The "),s("code",[t._v("swap()")]),t._v(" method is a specific use of "),s("code",[t._v("trade()")]),t._v(". In "),s("code",[t._v("swap()")]),t._v(",\nfor both "),s("code",[t._v("seats")]),t._v(", everything a "),s("code",[t._v("seat")]),t._v(" wants is given to it, having been\ntaken from the other "),s("code",[t._v("seat")]),t._v(". "),s("code",[t._v("swap()")]),t._v(" exits both "),s("code",[t._v("seats")]),t._v(", but "),s("code",[t._v("trade()")]),t._v(" does not.")]),t._v(" "),s("ul",[s("li",[t._v("Use "),s("code",[t._v("trade()")]),t._v(" when any of these are true:\n"),s("ul",[s("li",[t._v("The "),s("code",[t._v("seats")]),t._v(" have different keywords.")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("amounts")]),t._v(" to be reallocated don't exactly match the wants of the "),s("code",[t._v("seats")]),t._v(".")]),t._v(" "),s("li",[t._v("You want more interaction with the "),s("code",[t._v("seats")]),t._v(".")])])]),t._v(" "),s("li",[t._v("Use "),s("code",[t._v("swap()")]),t._v(" when all of these are true:\n"),s("ul",[s("li",[t._v("Both "),s("code",[t._v("seats")]),t._v(" use the same keywords.")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("seats")]),t._v("' wants can be fulfilled from the other "),s("code",[t._v("seat")]),t._v(".")]),t._v(" "),s("li",[t._v("No other "),s("code",[t._v("seat")]),t._v(" interaction is wanted.")])])])]),t._v(" "),s("p",[t._v("This method always takes "),s("code",[t._v("zcf")]),t._v(" as its first argument.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("keepLeft")]),t._v(" and "),s("code",[t._v("tryRight")]),t._v(" arguments are each "),s("code",[t._v("seats")]),t._v("\nwith "),s("code",[t._v("seat")]),t._v(", "),s("code",[t._v("gains")]),t._v(", and optional "),s("code",[t._v("losses")]),t._v(" properties. "),s("code",[t._v("gains")]),t._v(" and "),s("code",[t._v("losses")]),t._v(" are "),s("code",[t._v("amountKeywordRecords")]),t._v("\ndescribing declaratively what is added or removed from that "),s("code",[t._v("seat")]),t._v("'s allocation.")]),t._v(" "),s("p",[t._v("Note that the reason the parameters are called "),s("code",[t._v("keepLeft")]),t._v(" and "),s("code",[t._v("tryRight")]),t._v(" is\nif the offer fails, "),s("code",[t._v("keepLeft")]),t._v(" remains unchanged, but "),s("code",[t._v("tryRight")]),t._v("\nis kicked out. This is true of both "),s("code",[t._v("swap")]),t._v(" and "),s("code",[t._v("trade")]),t._v(".")]),t._v(" "),s("p",[s("code",[t._v("trade()")]),t._v(" does a trade between its two "),s("code",[t._v("seat")]),t._v(" arguments. If the two "),s("code",[t._v("seats")]),t._v(" can trade,\nit swaps their compatible assets.")]),t._v(" "),s("p",[t._v("Any surplus remains with its original "),s("code",[t._v("seat")]),t._v(". For example if "),s("code",[t._v("seat")]),t._v("\nA gives 5 Quatloos and "),s("code",[t._v("seat")]),t._v(" B only wants 3 Quatloos, "),s("code",[t._v("seat")]),t._v(" A retains 2 Quatloos.")]),t._v(" "),s("p",[t._v("If the first "),s("code",[t._v("seat")]),t._v(" argument has already exited and is no longer active,\nthe other "),s("code",[t._v("seat")]),t._v(" is rejected with a message. "),s("code",[t._v("trade()")]),t._v(" does "),s("strong",[t._v("not")]),t._v(" exit the "),s("code",[t._v("seats")]),t._v(".")]),t._v(" "),s("p",[t._v("If the trade fails for any reason, it throws the message "),s("code",[t._v("The trade between left and right failed. Please check the log for more information")]),t._v(". It writes the specific error to the console.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  trade"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@agoric/zoe/src/contractSupport'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("trade")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      zcf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        seat"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" poolSeat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        gains"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tokenA"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amountIn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        losses"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tokenB"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amountOut"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        seat"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" swapSeat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        gains"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Out"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amountOut "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        losses"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" In"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amountIn "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"swap-zcf-keepseat-tryseat-keephandleinactivemsg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swap-zcf-keepseat-tryseat-keephandleinactivemsg"}},[t._v("#")]),t._v(" swap(zcf, keepSeat, trySeat, keepHandleInactiveMsg)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("zcf")]),t._v(" "),s("code",[t._v("{ContractFacet}")])]),t._v(" "),s("li",[s("code",[t._v("keepSeat")]),t._v(" "),s("code",[t._v("{ZCFSeat}")])]),t._v(" "),s("li",[s("code",[t._v("trySeat")]),t._v(" "),s("code",[t._v("{ZCFSeat}")])]),t._v(" "),s("li",[s("code",[t._v("[keepHandleInactiveMsg]")]),t._v(" "),s("code",[t._v("{String}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("defaultAcceptanceMsg")])])]),t._v(" "),s("p",[s("strong",[t._v("Note")]),t._v(": The "),s("code",[t._v("swap()")]),t._v(" method is a specific use of "),s("code",[t._v("trade()")]),t._v(". In "),s("code",[t._v("swap(),")]),t._v("\nfor both "),s("code",[t._v("seats")]),t._v(", everything a "),s("code",[t._v("seat")]),t._v(" wants is given to it, having been\ntaken from the other "),s("code",[t._v("seat")]),t._v(". "),s("code",[t._v("swap()")]),t._v(" exits both "),s("code",[t._v("seats")]),t._v(", but "),s("code",[t._v("trade()")]),t._v(" does not.")]),t._v(" "),s("ul",[s("li",[t._v("Use "),s("code",[t._v("trade()")]),t._v(" when any of these are true:\n"),s("ul",[s("li",[t._v("The "),s("code",[t._v("seats")]),t._v(" have different keywords.")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("amounts")]),t._v(" to be reallocated don't exactly match the wants of the "),s("code",[t._v("seats")]),t._v(".")]),t._v(" "),s("li",[t._v("You want more interaction with the "),s("code",[t._v("seats")]),t._v(".")])])]),t._v(" "),s("li",[t._v("Use "),s("code",[t._v("swap()")]),t._v(" when all of these are true:\n"),s("ul",[s("li",[t._v("Both "),s("code",[t._v("seats")]),t._v(" use the same keywords.")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("seats")]),t._v("' wants can be fulfilled from the other "),s("code",[t._v("seat")]),t._v(".")]),t._v(" "),s("li",[t._v("No other "),s("code",[t._v("seat")]),t._v(" interaction is wanted.")])])])]),t._v(" "),s("p",[t._v("This method always takes "),s("code",[t._v("zcf")]),t._v(" as its first argument.")]),t._v(" "),s("p",[t._v("If the two "),s("code",[t._v("seats")]),t._v(" can trade, then swap their compatible assets,\nexiting both "),s("code",[t._v("seats")]),t._v(". It returns the message "),s("code",[t._v("The offer has been accepted. Once the contract has been completed, please check your payout")]),t._v(".")]),t._v(" "),s("p",[t._v("Note that the reason the parameters are called "),s("code",[t._v("keepLeft")]),t._v(" and "),s("code",[t._v("tryRight")]),t._v(" is\nif the offer fails, "),s("code",[t._v("keepLeft")]),t._v(" remains unchanged, but "),s("code",[t._v("tryRight")]),t._v("\nis kicked out. This is true of both "),s("code",[t._v("swap")]),t._v(" and "),s("code",[t._v("trade")]),t._v(".")]),t._v(" "),s("p",[t._v("In many contracts, we have a particular "),s("code",[t._v("seat")]),t._v(" we want to find a\nmatch for. The contract iterates over potential matches, and\nchecks if the two "),s("code",[t._v("seats")]),t._v(" are swappable. "),s("code",[t._v("keepSeat")]),t._v(" is the "),s("code",[t._v("seat")]),t._v("\nwe are trying to match, and "),s("code",[t._v("trySeat")]),t._v(" is the "),s("code",[t._v("seat")]),t._v(" being checked\nfor a match with "),s("code",[t._v("keepSeat")])]),t._v(" "),s("p",[t._v("If the "),s("code",[t._v("keepSeat")]),t._v(" offer is no longer active, "),s("code",[t._v("swap()")]),t._v(" rejects the "),s("code",[t._v("trySeat")]),t._v(" offer\nwith the "),s("code",[t._v("keepHandleInactiveMsg")]),t._v(", which defaults to "),s("code",[t._v("'prior offer is unavailable'")])]),t._v(" "),s("p",[t._v("If "),s("code",[t._v("satisfies()")]),t._v(" returns "),s("code",[t._v("false")]),t._v(" for the two "),s("code",[t._v("seats")]),t._v(", we reject the\n"),s("code",[t._v("trySeat")]),t._v(" "),s("code",[t._v("seat")]),t._v(".")]),t._v(" "),s("p",[t._v("If "),s("code",[t._v("satisfies()")]),t._v(" is "),s("code",[t._v("true")]),t._v(", Zoe reallocates by swapping the\namounts for the two "),s("code",[t._v("seats")]),t._v(", then both "),s("code",[t._v("seats")]),t._v(" exit so the\nusers receive their payout.")]),t._v(" "),s("p",[t._v("Any surplus remains with whichever "),s("code",[t._v("seat")]),t._v(" has the surplus.\nFor example if "),s("code",[t._v("seat")]),t._v(" A gives 5 Quatloos and "),s("code",[t._v("seat")]),t._v(" B only\nwants 3 Quatloos, "),s("code",[t._v("seat")]),t._v(" A retains 2 Quatloos.")]),t._v(" "),s("p",[t._v("If the swap fails, no assets transfer, and "),s("code",[t._v("trySeat")]),t._v("\nis rejected as a possible match.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  swap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@agoric/zoe/src/contractSupport'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("swap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zcf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" firstSeat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secondSeat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"assertproposalshape-offerhandler-expected"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assertproposalshape-offerhandler-expected"}},[t._v("#")]),t._v(" assertProposalShape(offerHandler, expected)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("offerHandler")]),t._v(" "),s("code",[t._v("{OfferHandler}")])]),t._v(" "),s("li",[s("code",[t._v("expected")]),t._v(" "),s("code",[t._v("{ExpectedRecord}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("{OfferHandler}")])])]),t._v(" "),s("p",[t._v("This is the only ZoeHelper that does "),s("strong",[t._v("not")]),t._v(" take 'zcf' as its first argument.")]),t._v(" "),s("p",[t._v("Makes an "),s("code",[t._v("offerHandler")]),t._v(" that wraps the provided "),s("code",[t._v("offerHandler")]),t._v(", to first\ncheck the submitted proposal against an "),s("code",[t._v("expected")]),t._v(" record that says\nwhat shape of proposal is acceptable.")]),t._v(" "),s("p",[t._v('By "shape", we mean the '),s("code",[t._v("give")]),t._v(", "),s("code",[t._v("want")]),t._v(", and exit rule keywords of the proposal must be equal to\nthose in "),s("code",[t._v("expected")]),t._v(". Note that exit rule keywords are optional in "),s("code",[t._v("expected")]),t._v(". Also, none of the\nvalues of those keywords are checked.")]),t._v(" "),s("p",[t._v("This "),s("code",[t._v("ExpectedRecord")]),t._v(" is like a "),s("code",[t._v("Proposal")]),t._v(", but the amounts in "),s("code",[t._v("want")]),t._v("\nand "),s("code",[t._v("give")]),t._v(" should be "),s("code",[t._v("null")]),t._v("; the "),s("code",[t._v("exit")]),t._v(" clause should specify a rule with\n"),s("code",[t._v("null")]),t._v(" contents. If the client submits a "),s("code",[t._v("Proposal")]),t._v(" which does not match\nthese expectations, that "),s("code",[t._v("proposal")]),t._v(" is rejected (and refunded).")]),t._v(" "),s("p",[t._v("The returned "),s("code",[t._v("offerHandler")]),t._v(" performs the check. It then calls the "),s("code",[t._v("offerHandler")]),t._v("\nthat was passed in as an argument.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  assertProposalShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@agoric/zoe/src/contractSupport'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sellAssetForPrice "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    give"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Asset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    want"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Price"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sell")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("seat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  buySeats "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("swapIfCanTradeAndUpdateBook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buySeats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sellSeats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" seat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Trade Successful'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sellHandler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertProposalShape")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sell"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sellAssetForPrice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);