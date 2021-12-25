(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{487:function(e,t,a){"use strict";a.r(t);var o=a(44),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"treasury-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#treasury-contract"}},[e._v("#")]),e._v(" Treasury contract")]),e._v(" "),a("p",[e._v("The Treasury is the primary mechanism for making "),a("code",[e._v("RUN")]),e._v(" (the Agoric stable-value\ncurrency) available to participants in the economy. It does this by issuing\nloans against supported types of collateral. The creator of the contract can\nadd new types of collateral. (This is expected to be under the control of\non-chain governance after the initial currencies are defined when the contract\nstarts up.)")]),e._v(" "),a("h2",{attrs:{id:"borrowers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#borrowers"}},[e._v("#")]),e._v(" Borrowers")]),e._v(" "),a("p",[e._v("Borrowers open a "),a("strong",[e._v("vault")]),e._v(" by calling "),a("code",[e._v("makeLoanInvitation()")]),e._v("in the publicAPI to\nget an invitation. Their proposal specifies that they're giving a recognized\ncollateral type, and how much "),a("code",[e._v("RUN")]),e._v(" they want in return. The contract is\nparameterized with a collateralization rate per currency and borrowers can\nwithdraw up to that ratio. Other parameters control the interest rate. (Interest\nwill be automatically added to the vault's debt.) The contract also has\naccess to a priceAuthority, which is an oracle monitoring the exchange value of\nthe collateral. If the value of a borrower's collateral ever falls below the\nminimum ratio, the vault will be liquidated. The liquidation approach is\npluggable and will be modifiable under the control of governance.")]),e._v(" "),a("p",[e._v("When borrowers exercise an invitation and deposit collateral, they receive a\n"),a("code",[e._v("Vault")]),e._v(" object and some tools useful to the wallet from the offerResults. The\n"),a("code",[e._v("Vault")]),e._v(" has these methods: "),a("code",[e._v("{ makeAdjustBalancesInvitation, makeCloseInvitation, getCollateralAmount, getDebtAmount, getLiquidationSeat, getLiquidationPromise }")]),e._v(".")]),e._v(" "),a("p",[e._v("An "),a("code",[e._v("AdjustBalancesInvitation")]),e._v(" allows the borrower to add or remove collateral\nor increase or decrease the loan balance.  "),a("code",[e._v("CloseInvitation")]),e._v(" allows the\nborrower to close their loan and withdraw any remaining collateral.  The\n"),a("code",[e._v("liquidationPromise")]),e._v(" allows the borrower to find out if/when the loan gets\nliquidated. The "),a("code",[e._v("liquidationSeat")]),e._v("'s "),a("code",[e._v("getPayoff()")]),e._v(" or "),a("code",[e._v("getPayoffs()")]),e._v(" allow the\nborrower to retrieve any proceeds above what's needed to repay the debt.\n"),a("code",[e._v("getCollateralAmount()")]),e._v(" and "),a("code",[e._v("getDebtAmount()")]),e._v(" reveal the named balances.")]),e._v(" "),a("h3",{attrs:{id:"adjustbalances"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adjustbalances"}},[e._v("#")]),e._v(" adjustBalances")]),e._v(" "),a("p",[e._v("The borrower can adjust their collateral and debt levels by exercising an\n"),a("code",[e._v("AdjustBalancesInvitation")]),e._v(" with a proposal that specifies the amount of\n"),a("code",[e._v("Collateral")]),e._v(" and "),a("code",[e._v("RUN")]),e._v(" that they will give and that they want (either keyword\ncan be in either position.) As long as the resulting balances would not violate\nthe required ratios and the withdrawals are within the loan's current balance,\nthe adjustments will be made. If the debt balance increases, "),a("code",[e._v("loanFee")]),e._v("\nmultiplied by the incremental debt will be added to the debt balance.")]),e._v(" "),a("h3",{attrs:{id:"closeinvitation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#closeinvitation"}},[e._v("#")]),e._v(" closeInvitation")]),e._v(" "),a("p",[e._v("The borrower can close their loan by exercising a "),a("code",[e._v("closeInvitation")]),e._v(". The\nborrower must give at least the current "),a("code",[e._v("debtAmount")]),e._v(" in order to close out the\nloan and retrieve their collateral. Since any excess will be returned, it is\nsafe to overpay to cover variations in pricing.")]),e._v(" "),a("h3",{attrs:{id:"interest-and-liquidation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interest-and-liquidation"}},[e._v("#")]),e._v(" Interest and liquidation")]),e._v(" "),a("p",[e._v("Parameters (subject to governance) specific to each collateral type set the\ninterest rate and required collateralization ratio.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("initialMargin")]),e._v(" is the "),a("code",[e._v("collateralizationRatio")]),e._v(" that's required when opening\na loan, and it can be the same or slightly higher than the "),a("code",[e._v("liquidationMargin")]),e._v(".\nIf the ratio of current value of collateral (according to the "),a("code",[e._v("priceAuthority")]),e._v(",\ncurrently driven by the AMM) to the outstanding debt falls below\n"),a("code",[e._v("liquidationMargin")]),e._v(", the collateral will be sold off, the debt repaid, and any\nremainder returned to the borrower. So it's prudent for borrowers to\nover-collateralize so that price volatility and interest charges don't quickly\ndrive their loans into default. "),a("code",[e._v("InitialMargin")]),e._v(" just to enforce this prudence\nwhen loans are being opened.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("loanFee")]),e._v(" (in basis points) is charged on the amount of "),a("code",[e._v("RUN")]),e._v(" issued when\nopening a loan or increasing the amount of a loan.  The "),a("code",[e._v("interestRate")]),e._v(" is an\nannual rate.")]),e._v(" "),a("p",[a("code",[e._v("ChargingPeriod")]),e._v(" and "),a("code",[e._v("recordingPeriod")]),e._v(" are parameters of the Treasury that apply\nto all loans. They can be adjusted (by governance) to change how frequently\ninterest is accrued, and how frequently interest is compounded.")]),e._v(" "),a("h4",{attrs:{id:"ui-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui-support"}},[e._v("#")]),e._v(" UI support")]),e._v(" "),a("p",[e._v("The following are returned in "),a("code",[e._v("offerResults")]),e._v(" when calling "),a("code",[e._v("openLoan")]),e._v(" for the\nbenefit of the user's "),a("RouterLink",{attrs:{to:"/guides/wallet/"}},[e._v("wallet")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" uiNotifier,\n invitationMakers: { AdjustBalances, CloseVault }\n")])])]),a("h2",{attrs:{id:"adding-collateral-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-collateral-types"}},[e._v("#")]),e._v(" Adding Collateral types")]),e._v(" "),a("p",[e._v("The creatorFacet has a method "),a("code",[e._v("addVaultType()")]),e._v(" that allows someone to add new\ncollateral types and specify the parameters for its loans.")]),e._v(" "),a("h2",{attrs:{id:"implementation-detail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-detail"}},[e._v("#")]),e._v(" Implementation detail")]),e._v(" "),a("h3",{attrs:{id:"vats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vats"}},[e._v("#")]),e._v(" Vats")]),e._v(" "),a("p",[e._v("Currently the treasury runs all the "),a("code",[e._v("vaults")]),e._v(" in a single vat. We intend to split\nthe "),a("code",[e._v("vaults")]),e._v(" into separate vats for better isolation. In order to allow the\nliquidation approach to be pluggable and to be visible to and changeable by\ngovernance, liquidation takes place in a separate vat.")]),e._v(" "),a("h3",{attrs:{id:"invitations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invitations"}},[e._v("#")]),e._v(" Invitations")]),e._v(" "),a("h4",{attrs:{id:"makeloan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#makeloan"}},[e._v("#")]),e._v(" makeLoan")]),e._v(" "),a("p",[e._v("The treasury's public API includes "),a("code",[e._v("makeLoanInvitation()")]),e._v(" and\n"),a("code",[e._v("getCollaterals()")]),e._v(", as well as "),a("code",[e._v("getAMM()")]),e._v(" and "),a("code",[e._v("getRunIssuer()")]),e._v(".\n"),a("code",[e._v("getCollaterals()")]),e._v(" returns a list of the collateral types that are accepted.\n"),a("code",[e._v("getAmm()")]),e._v(" returns the public facet of the AMM. "),a("code",[e._v("getRunIssuer()")]),e._v(" provides access\nto the issuer of "),a("code",[e._v("RUN")]),e._v(" so anyone can hold, spend and recognize RUN.\n"),a("code",[e._v("makeLoanInvitation()")]),e._v(" is described above under "),a("a",{attrs:{href:"#borrowers"}},[e._v("Borrowers")])]),e._v(" "),a("h3",{attrs:{id:"roadmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#roadmap"}},[e._v("#")]),e._v(" Roadmap")]),e._v(" "),a("ul",[a("li",[e._v("Finer control over liquidation: we think liquidation should be sensitive to\nmarket depth and trade volumes.")]),e._v(" "),a("li",[e._v("Vaults in individual Vats: for better isolation and security, we want to put\neach vault in a separate vat.")]),e._v(" "),a("li",[e._v("Limits on RUN issued per collateral type: limiting the amount of RUN that\ncan be issued for each collateral might blunt some attacks")]),e._v(" "),a("li",[e._v("Adding new collateral types will be made subject to governance rather\nthan being included in the creatorFacet.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);