(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{428:function(t,s,a){"use strict";a.r(s);var e=a(41),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"purse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purse"}},[t._v("#")]),t._v(" Purse")]),t._v(" "),a("p",[a("code",[t._v("Purses")]),t._v(" hold digital assets. They are created to hold assets of a single "),a("code",[t._v("brand")]),t._v(",\nand their "),a("code",[t._v("brand")]),t._v(" cannot be changed. For example, you might create a "),a("code",[t._v("purse")]),t._v(" to\nhold Quatloos. That "),a("code",[t._v("purse")]),t._v(" can only hold Quatloos; it can't hold Moola or theater\ntickets or anything else. And you can't change that "),a("code",[t._v("purse")]),t._v(" so that it now holds\nMoola instead; you need to create a "),a("code",[t._v("purse")]),t._v(" that holds only Moola.")]),t._v(" "),a("p",[t._v("Digital assets in "),a("code",[t._v("purses")]),t._v(" and "),a("code",[t._v("payments")]),t._v(" can be any of:")]),t._v(" "),a("ul",[a("li",[t._v("Currency-like, such as our imaginary Quatloos currency.")]),t._v(" "),a("li",[t._v("Goods-like digital assets, such as magic weapons for use in a game or theater tickets.")]),t._v(" "),a("li",[t._v("Other kinds of rights, such as the right to participate in a particular contract.")])]),t._v(" "),a("p",[t._v("While each "),a("code",[t._v("purse")]),t._v(" can only hold assets of one "),a("code",[t._v("brand")]),t._v(", any number of "),a("code",[t._v("purses")]),t._v(" can be\ncreated that hold that "),a("code",[t._v("brand")]),t._v(". So you could have, say, three Quatloos "),a("code",[t._v("purses")]),t._v(", your\nfriend Alice could have eight Quatloos "),a("code",[t._v("purses")]),t._v(", and so on.")]),t._v(" "),a("p",[t._v("You change a "),a("code",[t._v("purse")]),t._v("'s balance by calling either "),a("code",[t._v("deposit()")]),t._v(" (to add assets)\nor "),a("code",[t._v("withdraw()")]),t._v(" (to remove assets) on it. A "),a("code",[t._v("purse")]),t._v(" can be empty, which if it holds\na fungible currency means it has a value of 0. If it holds non-fungible theatre tickets,\nit means it just doesn't have any tickets.")]),t._v(" "),a("p",[t._v("Unlike "),a("code",[t._v("payments")]),t._v(", "),a("code",[t._v("purses")]),t._v(" are not meant to be sent to others.\nTo transfer digital assets, you should withdraw a "),a("code",[t._v("payment")]),t._v(" from a "),a("code",[t._v("purse")]),t._v(" and\nsend the "),a("code",[t._v("payment")]),t._v(" to another party.")]),t._v(" "),a("h2",{attrs:{id:"issuer-makeemptypurse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#issuer-makeemptypurse"}},[t._v("#")]),t._v(" issuer.makeEmptyPurse()")]),t._v(" "),a("ul",[a("li",[t._v("Returns: "),a("code",[t._v("{Purse}")])])]),t._v(" "),a("p",[t._v("While not a method called on a "),a("code",[t._v("purse")]),t._v(", clearly it's important to know how\nto create a new "),a("code",[t._v("purse")]),t._v(". Call "),a("code",[t._v("makeEmptyPurse()")]),t._v(" on the "),a("code",[t._v("issuer")]),t._v(" associated\nwith the "),a("code",[t._v("brand")]),t._v(" of assets you want the new "),a("code",[t._v("purse")]),t._v(" to hold. It returns the\nnew "),a("code",[t._v("purse")]),t._v(" with an empty balance.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("issuer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" quatloosIssuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeIssuerKit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quatloos'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nquatloosPurse1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quatloosIssuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeEmptyPurse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nquatloosPurse2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quatloosIssuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeEmptyPurse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"purse-getcurrentamount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purse-getcurrentamount"}},[t._v("#")]),t._v(" purse.getCurrentAmount()")]),t._v(" "),a("ul",[a("li",[t._v("Returns: "),a("code",[t._v("{Amount}")])])]),t._v(" "),a("p",[t._v("Get an "),a("code",[t._v("amount")]),t._v(" describing the current digital assets balance in the "),a("code",[t._v("purse")]),t._v(".\nOf course, the returned "),a("code",[t._v("amount")]),t._v(" "),a("code",[t._v("value")]),t._v(" might be different the next time you\ncall "),a("code",[t._v("getCurrentAmount()")]),t._v(" on the same "),a("code",[t._v("purse")]),t._v(" if assets have been deposited or\nwithdrawn from it in-between calls.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" issuer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" quatloosIssuer "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeIssuerKit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quatloos'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" quatloosPurse "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quatloosIssuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeEmptyPurse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// quatloos5 is a payment with balance of 5 quatloos")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" quatloosPurse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deposit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quatloos5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns an amount with value = 5 and brand = quatloos")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" currentBalance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quatloosPurse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentAmount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"purse-getcurrentamountnotifier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purse-getcurrentamountnotifier"}},[t._v("#")]),t._v(" purse.getCurrentAmountNotifier()")]),t._v(" "),a("ul",[a("li",[t._v("Returns: "),a("code",[t._v("{Notifier<Amount>}")])])]),t._v(" "),a("p",[t._v("Returns a lossy notifier for changes to this purse's balance. For more details,\nsee "),a("RouterLink",{attrs:{to:"/guides/js-programming/notifiers.html"}},[t._v("Notifiers")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" notifier "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" purse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentAmountNotifier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" nextUpdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" notifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUpdateSince")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("checkNotifier")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" balance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateCount "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" nextUpdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  nextUpdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" notifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUpdateSince")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("updateCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"purse-deposit-payment-optamount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purse-deposit-payment-optamount"}},[t._v("#")]),t._v(" purse.deposit(payment, optAmount)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("payment")]),t._v(" "),a("code",[t._v("{Payment}")])]),t._v(" "),a("li",[a("code",[t._v("optAmount")]),t._v(" "),a("code",[t._v("{Amount}")]),t._v(" - Optional.")]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{Amount}")])])]),t._v(" "),a("p",[t._v("Deposit all the contents of "),a("code",[t._v("payment")]),t._v(" into this "),a("code",[t._v("purse")]),t._v(", returning an "),a("code",[t._v("amount")]),t._v(" describing the\n"),a("code",[t._v("payment")]),t._v("'s digital assets (i.e. the deposit amount). If the optional argument "),a("code",[t._v("optAmount")]),t._v(" does not equal the balance of\n"),a("code",[t._v("payment")]),t._v(", or if "),a("code",[t._v("payment")]),t._v(" is an unresolved promise, it throws an error.")]),t._v(" "),a("p",[t._v("While the above applies to local and remote "),a("code",[t._v("purses")]),t._v(", for remote "),a("code",[t._v("purses")]),t._v(" there may be effects on\nthis operation due to use of "),a("code",[t._v("promises")]),t._v(" and asynchronicity. You\nhave to have a non-promise "),a("code",[t._v("payment")]),t._v(" before calling "),a("code",[t._v("deposit()")]),t._v(".\nWhen you call "),a("code",[t._v("deposit()")]),t._v(" you get a response back (after waiting only for the round trip)\ntelling you if it succeeded. All later arriving calls see the value has been transferred\ninto the "),a("code",[t._v("purse")]),t._v(", and the "),a("code",[t._v("payment")]),t._v(" is are no longer valid.")]),t._v(" "),a("p",[t._v("If any withdrawals are waiting for "),a("code",[t._v("promises")]),t._v(" to resolve, a deposit operation\nmay pass them by. This is safe, as even if all the assets are withdrawn, the\ndeposit still works on an empty "),a("code",[t._v("purse")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" issuer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" quatloosIssuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" quatloosMint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" brand"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" quatloosBrand "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeIssuerKit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quatloos'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" quatloosPurse "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quatloosIssuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeEmptyPurse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" payment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quatloosMint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mintPayment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quatloosBrand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" quatloos123 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quatloosBrand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Deposit a payment for 123 Quatloos into the purse. ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" depositAmountA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quatloosPurse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deposit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" quatloos123"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" secondPayment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quatloosMint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mintPayment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quatloosBrand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Throws error")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" depositAmountB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quatloosPurse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deposit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("secondPayment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" quatloos123"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"purse-getdepositfacet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purse-getdepositfacet"}},[t._v("#")]),t._v(" purse.getDepositFacet()")]),t._v(" "),a("p",[t._v("Returns a deposit-only facet on the "),a("code",[t._v("purse")]),t._v(". This is an object you can give to other parties\nthat lets them deposit "),a("code",[t._v("payments")]),t._v(" to your  "),a("code",[t._v("purse")]),t._v(" without being able to withdraw assets from or check\nthe balance of the "),a("code",[t._v("purse")]),t._v(". This makes it a safe way to let other people send you "),a("code",[t._v("payments")]),t._v(".")]),t._v(" "),a("p",[t._v("You can only deposit a "),a("code",[t._v("payment")]),t._v(" into a deposit facet that's the same "),a("code",[t._v("brand")]),t._v(" as the original "),a("code",[t._v("purse")]),t._v("\ntakes.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" depositOnlyFacet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" purse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDepositFacet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Give depositOnlyFacet to someone else. Anyone with a deposit facet reference can tell it to receive")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a payment, thus depositing the payment assets in the purse associated with the deposit facet.")]),t._v("\ndepositOnlyFacet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("receive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Once you have created a "),a("code",[t._v("depositFacet")]),t._v(", there is one method you can call\non it. "),a("code",[t._v("depositFacet.receive(payment)")]),t._v(". The "),a("code",[t._v("depositFacet")]),t._v(" takes the "),a("code",[t._v("payment")]),t._v("\nand adds it to the balance of the facet's associated "),a("code",[t._v("purse")]),t._v(". The "),a("code",[t._v("payment")]),t._v("\nmust be of the same "),a("code",[t._v("brand")]),t._v(" as what the "),a("code",[t._v("purse")]),t._v(" holds.")]),t._v(" "),a("p",[t._v("Note the difference in method names for adding assets between a "),a("code",[t._v("purse")]),t._v(" and its "),a("code",[t._v("depositFacet")]),t._v(".\nTo add assets to a "),a("code",[t._v("purse")]),t._v(" directly, you use "),a("code",[t._v("purse.deposit()")]),t._v(". To add assets\nto a "),a("code",[t._v("purse")]),t._v(" via its "),a("code",[t._v("depositFacet")]),t._v(", you use "),a("code",[t._v("depositFacet.receive()")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"depositfacet-receive-payment-optamount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#depositfacet-receive-payment-optamount"}},[t._v("#")]),t._v(" depositFacet.receive(payment, optAmount?)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("payment")]),t._v(" "),a("code",[t._v("{Payment}")])]),t._v(" "),a("li",[a("code",[t._v("optAmount")]),t._v(" "),a("code",[t._v("{Amount}")]),t._v(" (optional)")]),t._v(" "),a("li",[t._v("Returns "),a("code",[t._v("{Amount}")])])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("depositFacet")]),t._v(" takes the "),a("code",[t._v("payment")]),t._v(" and adds it to the balance of the facet's associated "),a("code",[t._v("purse")]),t._v(".")]),t._v(" "),a("p",[t._v("If the optional argument "),a("code",[t._v("optAmount")]),t._v(" does not equal the balance of\n"),a("code",[t._v("payment")]),t._v(", or if "),a("code",[t._v("payment")]),t._v(" is an unresolved promise, it throws an error.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" depositOnlyFacet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" purse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDepositFacet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Give depositOnlyFacet to someone else. Anyone with a deposit facet reference can tell it to receive")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a payment, thus depositing the payment assets in the purse associated with the deposit facet.")]),t._v("\ndepositOnlyFacet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("receive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"purse-withdraw-amount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purse-withdraw-amount"}},[t._v("#")]),t._v(" purse.withdraw(amount)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("amount")]),t._v(" "),a("code",[t._v("{Amount}")])]),t._v(" "),a("li",[t._v("Returns: "),a("code",[t._v("{Payment}")])])]),t._v(" "),a("p",[t._v("Withdraw the "),a("code",[t._v("amount")]),t._v(" specified digital assets from this "),a("code",[t._v("purse")]),t._v(" into a new "),a("code",[t._v("payment")]),t._v(".")]),t._v(" "),a("p",[t._v("If the call succeeds, it immediately extracts the value into a new "),a("code",[t._v("payment")]),t._v(".\nThe caller won't get the new "),a("code",[t._v("payment")]),t._v(" until a later turn, since the call is (nearly always) remote.\nBut as soon as the message is processed, the value is gone from the "),a("code",[t._v("purse")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a purse and give it a balance of 10 Quatloos")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" issuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" brand "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeIssuerKit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quatloos'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" purse "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" issuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeEmptyPurse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" payment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mintPayment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("brand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" quatloos10 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("brand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npurse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deposit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" quatloos10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Withdraw an amount of 3 from the purse")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" quatloos3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("brand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" withdrawalPayment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" purse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withdraw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quatloos3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The balance of the withdrawal payment is 3 Quatloos")]),t._v("\nissuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAmountOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("withdrawalPayment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The new balance of the purse is 7 Quatloos")]),t._v("\npurse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentAmount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"purse-getallegedbrand"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purse-getallegedbrand"}},[t._v("#")]),t._v(" purse.getAllegedBrand()")]),t._v(" "),a("ul",[a("li",[t._v("Returns: "),a("code",[t._v("{Brand}")])])]),t._v(" "),a("p",[t._v("Returns an alleged brand (Note: a "),a("code",[t._v("Brand")]),t._v(", not a "),a("code",[t._v("string")]),t._v(" as "),a("code",[t._v("allegedName()")]),t._v(" methods do),\nindicating what kind of digital asset the purse purports to hold. This can identify the\npurse's brand if the purse was made by a trusted issuer using "),a("code",[t._v("issuer.makeEmptyPurse()")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" purseBrand "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quatloosPurse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAllegedBrand")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);