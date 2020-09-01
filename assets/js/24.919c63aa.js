(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{375:function(t,e,a){"use strict";a.r(e);var n=a(42),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"amount-math"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amount-math"}},[t._v("#")]),t._v(" Amount Math")]),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/ertp/guide/issuer.html"}},[t._v("issuer")]),t._v(" has an internal table that maps "),a("RouterLink",{attrs:{to:"/ertp/api/purse.html"}},[t._v("purses")]),t._v(" and "),a("RouterLink",{attrs:{to:"/ertp/api/payment.html"}},[t._v("payments")]),t._v(" to "),a("RouterLink",{attrs:{to:"/ertp/guide/amounts.html"}},[t._v("amounts")]),t._v(". The issuer must be able to do things such as add digital assets to a purse and withdraw digital assets from a purse. To do so, it must know how to add and subtract digital assets. Rather than hard-coding a particular solution, we chose to parameterize the issuer with a collection of polymorphic functions, which we call "),a("code",[t._v("amountMath")]),t._v(". These math functions include concepts like addition, subtraction, and greater than or equal to.")],1),t._v(" "),a("p",[t._v("We also want to make sure there is no confusion as to what kind of asset we are using. Thus, amountMath includes checks of the "),a("code",[t._v("brand")]),t._v(", the unique identifier for the type of digital asset. If the wrong brand is used in amountMath, an error is thrown and the operation does not succeed.")]),t._v(" "),a("p",[t._v("AmountMath uses "),a("RouterLink",{attrs:{to:"/ertp/guide/math-helpers.html"}},[t._v("mathHelpers")]),t._v(" to do most of the work, but then adds the brand to the result. The amountMath function "),a("code",[t._v("value()")]),t._v(" gets the value from the amount by removing the brand (amount -> value), and the function "),a("code",[t._v("make()")]),t._v(" adds the brand to produce an amount (value -> amount). The function "),a("code",[t._v("coerce()")]),t._v(" takes an amount and checks it, returning an amount (amount -> amount). "),a("code",[t._v("makeAmount()")]),t._v(" takes in a brand and the name of the particular mathHelpers to use.")],1),t._v(" "),a("p",[t._v("AmountMath is unfortunately not pass-by-copy. If you call "),a("code",[t._v("getAmountMath()")]),t._v(" on a remote issuer, it will be a remote object and each call will incur the costs of calling a remote object. However, you can create a local amountMath by importing this module locally and recreating by passing in a brand and a mathHelpers name, both of which can be passed-by-copy (since there are no calls to brand in this module).")]),t._v(" "),a("p",[t._v("Each issuer of digital assets has an associated brand in a one-to-one mapping. In untrusted contexts, such as in analyzing payments and amounts, we can get the brand and find the issuer which matches the brand. The issuer and the brand mutually validate each other.")])])}),[],!1,null,null,null);e.default=o.exports}}]);