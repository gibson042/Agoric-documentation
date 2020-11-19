(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{436:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"priced-call-spread"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#priced-call-spread"}},[t._v("#")]),t._v(" Priced Call Spread")]),t._v(" "),s("Zoe-Version"),t._v(" "),s("h5",{attrs:{id:"view-the-code-on-github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#view-the-code-on-github"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/blob/master/packages/zoe/src/contracts/callSpread/pricedCallSpreads.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("View the code on Github"),s("OutboundLink")],1)]),t._v(" "),s("h5",{attrs:{id:"view-all-contracts-on-github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#view-all-contracts-on-github"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/tree/master/packages/zoe/src/contracts",target:"_blank",rel:"noopener noreferrer"}},[t._v("View all contracts on Github"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("This contract implements a fully collateralized call spread. You can use a call spread as a\n"),s("a",{attrs:{href:"https://youtu.be/m5Pf2d1tHCs",target:"_blank",rel:"noopener noreferrer"}},[t._v("financial building block"),s("OutboundLink")],1),t._v(" to create futures, puts, calls, and event\nbinaries that would form the basis for a prediction market, insurance, and much more. A call spread\nis a combination of a call option bought at one strike price and a second call option sold at a\nhigher price. A call spread has two participating seats that pay out complementary amounts depending\non the value of some good at a known future time. This video gives a\n"),s("a",{attrs:{href:"https://youtu.be/m5Pf2d1tHCs?t=3566",target:"_blank",rel:"noopener noreferrer"}},[t._v("walkthrough of the implementation"),s("OutboundLink")],1),t._v(" of the contract.")]),t._v(" "),s("p",[t._v("There are two variants of the callSpread.  In this version, the creator requests a pair of\ninvitations, each of which enables the holder to obtain one of the positions by providing a started\nportion of the collateral. The other is called the "),s("RouterLink",{attrs:{to:"/zoe/guide/contracts/fundedCallSpread.html"}},[t._v("fundedCallSpread")]),t._v(". It is\nfully funded by its creator, who can then sell (or otherwise transfer) the options to other parties.\nThe Zoe invitations representing options are produced in pairs.  The individual options are Zoe\ninvitations whose details are inspectable by prospective purchasers.")],1),t._v(" "),s("p",[t._v("These options are settled financially. There is no requirement that the original purchaser have\nownership of the underlying asset at the start, and the beneficiaries shouldn't expect to take\ndelivery at closing.")]),t._v(" "),s("h2",{attrs:{id:"issuers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issuers"}},[t._v("#")]),t._v(" Issuers")]),t._v(" "),s("p",[t._v("The Strike and Collateral currencies are often the same, however these contracts decouple the\ncurrencies. You can have, for example, a spread based on APPL stock ("),s("code",[t._v("Underlying")]),t._v("), with the stock\nprice in USD ("),s("code",[t._v("Strike")]),t._v(") and contract paying out in JPY ("),s("code",[t._v("Collateral")]),t._v(").")]),t._v(" "),s("p",[t._v("The issuerKeywordRecord specifies issuers for three keywords: Underlying, Strike, and Collateral.")]),t._v(" "),s("ul",[s("li",[t._v("The asset whose eventual value determines the payouts uses "),s("code",[t._v("Underlying")]),t._v('. This is often a fungible\ncurrency, but doesn\'t have to be. It would be perfectly valid to have a call spread contract on\nthe value of a "Superior Magic Sword", as long as there was a price oracle to determine its price\nat the expiration time.')]),t._v(" "),s("li",[t._v("The original deposit and the payout use the "),s("code",[t._v("Collateral")]),t._v(" issuer.")]),t._v(" "),s("li",[s("code",[t._v("Strike")]),t._v(" amounts are used for the price oracle's quote as to the value of the Underlying, as\nwell as the strike prices in the terms.")])]),t._v(" "),s("h2",{attrs:{id:"terms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#terms"}},[t._v("#")]),t._v(" Terms")]),t._v(" "),s("p",[t._v("The terms include "),s("code",[t._v("{ timer, underlyingAmount, expiration, priceAuthority, strikePrice1, strikePrice2, settlementAmount }")]),t._v(".")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("timer")]),t._v(" is a\n"),s("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/blob/master/packages/cosmic-swingset/TimerService.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("timer"),s("OutboundLink")],1),t._v(",\nand must be recognized by "),s("code",[t._v("priceAuthority")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("expiration")]),t._v(" is a time recognized by the "),s("code",[t._v("timer")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("underlyingAmount")]),t._v(" is passed to "),s("code",[t._v("priceAuthority")]),t._v(". It could be an NFT or a fungible amount.")]),t._v(" "),s("li",[s("code",[t._v("strikePrice2")]),t._v(" must be greater than "),s("code",[t._v("strikePrice1")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("settlementAmount")]),t._v(" is the amount deposited by the creator and split between the holders of the\noptions. It uses Collateral.")]),t._v(" "),s("li",[s("code",[t._v("priceAuthority")]),t._v(" is an oracle that has a timer so it can respond to requests for prices as of a\nstated time. After the deadline, it will issue a PriceQuote giving the value of the underlying\nasset in the strike currency.")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// underlying is 2 Simoleans, strike range is 30-50 (doubled)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" terms "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  expiration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  underlyingAmount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("simoleans")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  priceAuthority"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  strikePrice1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("moola")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  strikePrice2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("moola")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  settlementAmount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bucks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  timer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" manualTimer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Alice creates a pricedCallSpread instance")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" issuerKeywordRecord "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Underlying"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" simoleanIssuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Collateral"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bucksIssuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Strike"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" moolaIssuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" creatorFacet "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  installation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  issuerKeywordRecord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  terms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),s("h2",{attrs:{id:"creating-the-option-invitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-option-invitations"}},[t._v("#")]),t._v(" Creating the Option Invitations")]),t._v(" "),s("p",[t._v("The terms specify all the details of the options. A call to "),s("code",[t._v("creatorFacet.makeInvitationPair()")]),t._v(" is\nrequired to specify the share (as a whole number percentage) that will be contributed for the long\nposition. It returns a pair of invitations.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" invitationPair "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("creatorFacet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeInvitationPair")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("75")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" longInvitation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shortInvitation "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" invitationPair"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),s("p",[t._v("The creator gives these invitations to the two parties (or might retain one for their own use.) When\nBob receives an invitation, he can extract the value of the call spread option that he wants, and\ncreate a proposal. The collateral required is also in the option's details. The holders of the\ninvitations can exercise with the required collateral to receive the actual call spread option\npositions.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bobProposal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  want"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Option"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" longOption "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  give"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Collateral"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bucks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("longOptionValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collateral"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bobFundingSeat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("offer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" longInvitation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bobProposal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Collateral"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bobBucksPayment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bobOption "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" bobFundingSeat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPayout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Option'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),s("h2",{attrs:{id:"validating-the-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validating-the-options"}},[t._v("#")]),t._v(" Validating the Options")]),t._v(" "),s("p",[t._v("The options are packaged as invitations so they are fully self-describing, and can be verified with\nZoe, so their value is apparent to anyone who might be interested in them.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" invitationIssuer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInvitationIssuer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" longAmount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("invitationIssuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAmountOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("longInvitation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" longOptionValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" longAmount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" longOption "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" longOptionValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("is")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("installation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" longOptionValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("installation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("is")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'long'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" longOptionValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("is")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("225")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" longOptionValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collateral"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),s("p",[t._v("The details of the underlying call spread option are accessible from the terms associated with this\ninstance of the contract.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bobTerms "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTerms")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("longOptionValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("truthy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("simoleansMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEqual")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("simoleans")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bobTerms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("underlyingAmount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("truthy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bucksMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEqual")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bucks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bobTerms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("settlementAmount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),s("h2",{attrs:{id:"options-can-be-exercised-independently"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options-can-be-exercised-independently"}},[t._v("#")]),t._v(" Options can be Exercised Independently")]),t._v(" "),s("p",[t._v("The option position invitations can be exercised for free, and provide their payouts under the\nkeyword "),s("code",[t._v("Collateral")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bobOptionSeat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("offer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bobLongOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bobPayout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bobOptionSeat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPayout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Collateral'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),s("p",[t._v("The contract doesn't rely on the options being exercised before the specified close. If either\noption is exercised after the closing price is determined, the payouts will still be available. The\ntwo options make their payment available as soon after exercise as the price is available, and\nneither waits for the other to exercise.")])],1)}),[],!1,null,null,null);a.default=e.exports}}]);