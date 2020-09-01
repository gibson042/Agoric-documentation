(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{400:function(e,t,s){"use strict";s.r(t);var a=s(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"wallet-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-api"}},[e._v("#")]),e._v(" Wallet API")]),e._v(" "),s("p",[e._v("This document lists and describes the API commands available to the wallet.")]),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("p",[e._v("Wallet API commands work with the following object types:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("purse")]),e._v(": Stores assets until you withdraw them into a payment for use")]),e._v(" "),s("li",[s("code",[e._v("issuer")]),e._v(": Creates empty purses and payments and maps minted assets\nto them when assets are added or removed. Issuers verify and move\ndigital assets.")]),e._v(" "),s("li",[s("code",[e._v("offer")]),e._v(": Consists of what amount of what "),s("a",{attrs:{href:"https://agoric.com/documentation/ertp/guide/brand.html#allegedname",target:"_blank",rel:"noopener noreferrer"}},[e._v("brand"),s("OutboundLink")],1),e._v("\nyou're willing to\ngive, and what amount of what brand you want, as well as the\nconditions under which the offer holder can cancel it.## Petnames")])]),e._v(" "),s("h2",{attrs:{id:"petnames"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#petnames"}},[e._v("#")]),e._v(" Petnames")]),e._v(" "),s("p",[e._v("The Agoric wallet uses "),s("em",[e._v("petnames")]),e._v(" for issuers and purses.")]),e._v(" "),s("p",[e._v("Petnames are your personal names for objects. No one else can see or\nmodify a petname without your permission. You can think of them as\nyour phone's contacts list. The actual phone number is what your phone\nuses to call someone, but for you to more easily tell who a number is\nassociated with, you've assigned a petname to it, such as Mom,\nGrandpa, Kate S., etc.")]),e._v(" "),s("h2",{attrs:{id:"purse-api-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#purse-api-methods"}},[e._v("#")]),e._v(" Purse API Methods")]),e._v(" "),s("h3",{attrs:{id:"deposit-pursepetname-payment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deposit-pursepetname-payment"}},[e._v("#")]),e._v(" "),s("code",[e._v("deposit(pursePetname, payment)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("pursePetname")]),e._v(" "),s("code",[e._v("{ String }")])]),e._v(" "),s("li",[s("code",[e._v("payment")]),e._v(" "),s("code",[e._v("{ Payment }")])]),e._v(" "),s("li",[e._v("Returns: The deposited amount.")])]),e._v(" "),s("p",[e._v("Deposits the specified payment into the specified purse in the wallet. Returns the deposited amount.")]),e._v(" "),s("h3",{attrs:{id:"getpurses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getpurses"}},[e._v("#")]),e._v(" "),s("code",[e._v("getPurses()")])]),e._v(" "),s("ul",[s("li",[e._v("Returns:  Promises for all "),s("code",[e._v("purse")]),e._v(" objects and their petnames in the wallet via an array of [petname, promise] arrays.")])]),e._v(" "),s("p",[e._v("The returned array of arrays can be turned into a "),s("code",[e._v("Map")]),e._v(" ("),s("code",[e._v("new Map(getPurses())")]),e._v(").")]),e._v(" "),s("h3",{attrs:{id:"getpurse-pursepetname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getpurse-pursepetname"}},[e._v("#")]),e._v(" "),s("code",[e._v("getPurse(pursePetname)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("pursePetName")]),e._v(" "),s("code",[e._v("{String}")])]),e._v(" "),s("li",[e._v("Returns: A promise for the "),s("code",[e._v("purse")]),e._v(" object with the given petname")]),e._v(" "),s("li",[e._v("Errors: Throws an error if there is no purse with the given petname.")])]),e._v(" "),s("h3",{attrs:{id:"getpurseissuer-petname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getpurseissuer-petname"}},[e._v("#")]),e._v(" "),s("code",[e._v("getPurseIssuer(petname)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("petname")]),e._v(" "),s("code",[e._v("{String}")])]),e._v(" "),s("li",[e._v("Returns: The "),s("code",[e._v("issuer")]),e._v(" object associated with the purse.")]),e._v(" "),s("li",[e._v("Errors: Throws an error if given an invalid purse petname.")])]),e._v(" "),s("p",[e._v("Given a purse's petname, returns the "),s("code",[e._v("issuer")]),e._v(" object associated with the purse.")]),e._v(" "),s("h3",{attrs:{id:"makeemptypurse-issuerpetname-pursepetname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#makeemptypurse-issuerpetname-pursepetname"}},[e._v("#")]),e._v(" "),s("code",[e._v("makeEmptyPurse(issuerPetname, pursePetname)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("issuerPetname")]),e._v(" "),s("code",[e._v("{String}")])]),e._v(" "),s("li",[s("code",[e._v("pursePetname")]),e._v(" "),s("code",[e._v("{String}")])]),e._v(" "),s("li",[e._v("Returns: A new, empty, "),s("code",[e._v("purse")]),e._v(" object.")]),e._v(" "),s("li",[e._v("Errors: There is already a purse in this wallet with the name of "),s("code",[e._v("pursePetname")]),e._v("'s value.")])]),e._v(" "),s("p",[e._v("Creates and returns a new, empty, purse object with specified petname, which uses the issuer with the specified petname.")]),e._v(" "),s("h2",{attrs:{id:"issuer-api-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issuer-api-methods"}},[e._v("#")]),e._v(" Issuer API Methods")]),e._v(" "),s("h3",{attrs:{id:"addissuer-issuerpetname-issuer-brandregkey"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addissuer-issuerpetname-issuer-brandregkey"}},[e._v("#")]),e._v(" "),s("code",[e._v("addIssuer(issuerPetname, issuer, brandRegKey)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("issuerPetname")]),e._v(" "),s("code",[e._v("{String}")])]),e._v(" "),s("li",[s("code",[e._v("issuer")]),e._v(" "),s("code",[e._v("{Issuer}")])]),e._v(" "),s("li",[s("code",[e._v("brandRegKey")]),e._v(" "),s("code",[e._v("{String}")]),e._v(" Optional")])]),e._v(" "),s("p",[e._v("Assigns the given petname to a given "),s("code",[e._v("issuer")]),e._v(" object, and adds the issuer to the wallet. "),s("code",[e._v("brandRegKey")]),e._v(" is a key in the Registry, whose value is the "),s("code",[e._v("brand")]),e._v(" object associated with the issuer.")]),e._v(" "),s("h3",{attrs:{id:"getissuers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getissuers"}},[e._v("#")]),e._v(" "),s("code",[e._v("getIssuers()")])]),e._v(" "),s("ul",[s("li",[e._v("Returns: All issuers associated with the wallet and their petnames as an array of arrays of the format "),s("code",[e._v("[[issuerPetname, issuer], ...]")]),e._v(".")])]),e._v(" "),s("p",[e._v("You can use "),s("code",[e._v("getIssuers()")]),e._v(" to make a new map of petnames to issuers by doing "),s("code",[e._v("new Map(getIssuer())")])]),e._v(" "),s("h3",{attrs:{id:"getissuernames-issuer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getissuernames-issuer"}},[e._v("#")]),e._v(" "),s("code",[e._v("getIssuerNames(issuer)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("issuer")]),e._v(" "),s("code",[e._v("{issuer}")])]),e._v(" "),s("li",[e._v("Returns: The petname and brandRegKey of the specified  "),s("code",[e._v("issuer")]),e._v(" object.")])]),e._v(" "),s("h2",{attrs:{id:"offer-api-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offer-api-methods"}},[e._v("#")]),e._v(" Offer API Methods")]),e._v(" "),s("h3",{attrs:{id:"acceptoffer-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acceptoffer-id"}},[e._v("#")]),e._v(" "),s("code",[e._v("acceptOffer(id)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("id")]),e._v(" "),s("code",[e._v("{String}")])]),e._v(" "),s("li",[e._v("Errors: If the offer has already been resolved or rejected.")])]),e._v(" "),s("p",[e._v("Makes the id-specified offer to the target contract. It approves a proposal added by "),s("code",[e._v("addOffer()")]),e._v(' and submits an offer to the contract instance on behalf of the  user. Changes the specified offer\'s status to "accepted" in the wallet inbox.')]),e._v(" "),s("h3",{attrs:{id:"addoffer-rawoffer-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addoffer-rawoffer-hooks"}},[e._v("#")]),e._v(" "),s("code",[e._v("addOffer(rawOffer, hooks)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("rawOffer")]),e._v(" "),s("code",[e._v("{Object}")])]),e._v(" "),s("li",[s("code",[e._v("hooks")]),e._v(" "),s("code",[e._v("{Hooks}")]),e._v(" Optional")]),e._v(" "),s("li",[e._v("Returns: The offer's id.")])]),e._v(" "),s("p",[e._v("Adds a new proposal to the wallet's inbox that the user can approve to make an  offer to a contract invitation. The "),s("code",[e._v("rawOffer")]),e._v(" is a potential offer sent from the Dapp UI to be looked at by the user. The "),s("code",[e._v("hooks")]),e._v(" instruct the wallet to do actions before or after the offer is made, such as getting an invite from the "),s("code",[e._v("publicAPI")]),e._v(" in order to make an offer.")]),e._v(" "),s("p",[s("code",[e._v("hooks")]),e._v(" format is:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("hooks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("targetName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("hookName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("hookMethod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),e._v("hookArgs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("p",[e._v("Within the wallet, hooks are called as:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("hookMethod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),e._v("hookArgs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("For example:")]),e._v(" "),s("div",{staticClass:"language-Js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("`hooks"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n     publicAPI"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        getInvite"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'makeInvite'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// E(publicAPI).makeInvite()")]),e._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h3",{attrs:{id:"canceloffer-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canceloffer-id"}},[e._v("#")]),e._v(" "),s("code",[e._v("cancelOffer(id)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("id")]),e._v(" "),s("code",[e._v("{String}")])]),e._v(" "),s("li",[e._v("Returns: "),s("code",[e._v("true")]),e._v(" if successful, "),s("code",[e._v("false")]),e._v(" if not.")]),e._v(" "),s("li",[e._v("Errors: Returns "),s("code",[e._v("false")]),e._v(" if the offer was not made with the exit rule "),s("code",[e._v("onDemand")]),e._v(", throws if the offer was already completed.")])]),e._v(" "),s("p",[e._v('Cancels the id-specified offer in the contract instance and changes its status in the wallet inbox to "cancel".')]),e._v(" "),s("h3",{attrs:{id:"declineoffer-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#declineoffer-id"}},[e._v("#")]),e._v(" "),s("code",[e._v("declineOffer(id)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("id")]),e._v(" "),s("code",[e._v("{String}")])])]),e._v(" "),s("p",[e._v('Changes the status of the id-specified offer in the wallet inbox to "decline".')]),e._v(" "),s("h3",{attrs:{id:"getoffers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getoffers"}},[e._v("#")]),e._v(" "),s("code",[e._v("getOffers()")])]),e._v(" "),s("ul",[s("li",[e._v("Returns: An array of the "),s("code",[e._v("offer")]),e._v(" objects associated with the wallet, sorted by\nid.")])]),e._v(" "),s("h3",{attrs:{id:"getofferhandle-id-idtoofferhandle-get-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getofferhandle-id-idtoofferhandle-get-id"}},[e._v("#")]),e._v(" "),s("code",[e._v("getOfferHandle: id => idToOfferHandle.get(id)()")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("id")]),e._v(" "),s("code",[e._v("{String}")])]),e._v(" "),s("li",[e._v("Returns: The "),s("code",[e._v("offerHandle")]),e._v(" object associated with the specified offer id.")])]),e._v(" "),s("h3",{attrs:{id:"getofferhandles-ids-ids-map-wallet-getofferhandle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getofferhandles-ids-ids-map-wallet-getofferhandle"}},[e._v("#")]),e._v(" "),s("code",[e._v("getOfferHandles: ids => ids.map(wallet.getOfferHandle)()")])]),e._v(" "),s("ul",[s("li",[e._v("Returns: An array of all the "),s("code",[e._v("offerHandle")]),e._v(" objects for offers in the\nwallet's inbox")])]),e._v(" "),s("h2",{attrs:{id:"hydratehooks-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hydratehooks-hooks"}},[e._v("#")]),e._v(" "),s("code",[e._v("hydrateHooks(hooks)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("hooks")]),e._v(" "),s("code",[e._v("{hooks}")])])]),e._v(" "),s("p",[e._v("Uses the "),s("code",[e._v("hooks")]),e._v(" data from the offer to create a function call with arguments. For example, the Dapp UI might use the hooks data to instruct the wallet to get an invite from a contract's publicAPI.")])])}),[],!1,null,null,null);t.default=r.exports}}]);