(window["jsonp-common-entrypoints"]=window["jsonp-common-entrypoints"]||[]).push([["auto/bootstrap/category-nav/v2/nav"],{"g/Ib":function(t,e,i){"use strict";i.r(e);var a=i("3a3M");var n=i.n(a);var s=i("vBnV");var o=i("V9r9");var r={setMenubarKeyboardNavigation(t){function e(e){const i=e.attr("id");t.attr("aria-activedescendant",i);e.trigger("focus")}if("menubar"!==t.attr("role"))throw new Error(`${t} must have a role set to "menubar".`);const i=t.find('[role="menuitem"]').filter(":not(:disabled)").filter(":not(:hidden)");t.off("keydown.a11yMenubarFocus");t.on("keydown.a11yMenubarFocus",(t=>{if(t.keyCode===o["a"].RIGHT||t.keyCode===o["a"].LEFT){t.preventDefault();const a=n()(document.activeElement);const s=i.index(a);if(t.keyCode===o["a"].LEFT){if(0===s){e(i.eq(i.length-1));return}e(i.eq(s-1))}if(t.keyCode===o["a"].RIGHT){if(s===i.length-1){e(i.first());return}e(i.eq(s+1))}}if(t.keyCode===o["a"].ENTER||t.keyCode===o["a"].SPACE||t.keyCode===o["a"].DOWN){t.preventDefault();n()(t.target).trigger("menubar-item-press")}}))}};var v=i("E1kl");var c=i("H3fw");var d=i("YrzB");var N=i("+s1y");function h(t,e,i){e in t?Object.defineProperty(t,e,{value:i,enumerable:true,configurable:true,writable:true}):t[e]=i;return t}const u={TOP_NAV_CATEGORY_LIST:'[data-ui="top-nav-category-list"]',TOP_NAV_CATEGORY_LINK:'[data-ui="top-nav-category-link"]',TOP_NAV_PROMO_LINK:'[data-ui="top-nav-promo-link"]',ONSALE_LINK:'[data-ui="desktop-catnav-onsale-link"]',PROMO:'[data-ui="promo"]',SUB_NAV:'[data-ui="sub-nav"]',SIDE_NAV_CATEGORY_LIST:'[data-ui="side-nav-category-list"]',SIDE_NAV_CATEGORY_LINK:'[data-ui="side-nav-category-link"]',TERTIARY_NAV:'[data-ui="tertiary-nav"]',TERTIARY_NAV_PROMO_LINK:'[data-ui="tertiary-nav-promo-link"]',MENUITEM:'[role="menuitem"]',MENU:'[role="menu"]',ACTIVE_NAV_ITEM_INDICATOR:'[data-ui="active-nav-item-indicator"]'};const l={DISPLAY_NONE:"wt-display-none"};const A={MOUSE_LEAVE_TIMEOUT:400,MOUSE_ENTER_TIMEOUT:350,MOUSE_ENTER_DROPDOWN_DELAY:200};class m{constructor(t){h(this,"$context",void 0);h(this,"$topNavCategoryList",void 0);h(this,"$navCategoryLinks",void 0);h(this,"$navPromoLinks",void 0);h(this,"allNavLinks",void 0);h(this,"storedNavItemPositionAndWidthInfo",void 0);h(this,"$sideNavCategoryList",void 0);h(this,"$sideNavCategoryLinks",void 0);h(this,"$tertiaryNavs",void 0);h(this,"$searchResults",void 0);h(this,"$promos",void 0);h(this,"$activeNavItemIndicator",void 0);h(this,"mouseEnterNavItemTimeout",void 0);h(this,"leaveNavTimeout",void 0);this.$context=t;this.$topNavCategoryList=this.$context.find(u.TOP_NAV_CATEGORY_LIST);this.$navCategoryLinks=this.$context.find(u.TOP_NAV_CATEGORY_LINK);this.$navPromoLinks=this.$context.find(u.TOP_NAV_PROMO_LINK);this.allNavLinks=this.getAllNavLinks();this.storedNavItemPositionAndWidthInfo=this.setStoredNavItemPositionAndWidthInfo();this.$sideNavCategoryList=this.$context.find(u.SIDE_NAV_CATEGORY_LIST);this.$sideNavCategoryLinks=this.$context.find(u.SIDE_NAV_CATEGORY_LINK);this.$tertiaryNavs=this.$context.find(u.TERTIARY_NAV);this.$searchResults=n()(".gnav-search-inner").find("[data-id='search-suggestions']");this.$promos=this.$context.find(u.PROMO);this.$activeNavItemIndicator=this.$context.find(u.ACTIVE_NAV_ITEM_INDICATOR);this.mouseEnterNavItemTimeout=null;this.leaveNavTimeout=null;this.bindEvents()}bindEvents(){this.$context.on("mouseenter",u.SUB_NAV,this.onMouseEnterNav.bind(this)).on("mouseenter",u.TOP_NAV_CATEGORY_LIST,this.onMouseEnterNav.bind(this)).on("mouseenter",u.SUB_NAV,this.clearMouseEnterNavItem.bind(this)).on("mouseenter click",u.TOP_NAV_CATEGORY_LINK,this.onMouseEnterNavItem.bind(this)).on("click",u.ONSALE_LINK,(()=>{c["default"].logEvent({event_name:"desktop_nav_onsale_click"})})).on("mouseleave",u.SUB_NAV,this.onMouseLeaveNav.bind(this)).on("mouseleave",u.TOP_NAV_CATEGORY_LIST,this.onMouseLeaveNav.bind(this)).on("mouseenter",u.TOP_NAV_PROMO_LINK,this.onMouseEnterPromoItem.bind(this)).on("click",u.TOP_NAV_PROMO_LINK,(t=>{const e=n()(t.currentTarget).data("eventName");c["default"].logEvent({event_name:"nav_promo_click",promo_name:e})})).on("click",u.TERTIARY_NAV_PROMO_LINK,(t=>{const e=n()(t.currentTarget).data("nodeId");c["default"].logEvent({event_name:"tertiary_nav_promo_click",node_id:e})})).on("click",u.SIDE_NAV_CATEGORY_LINK,this.onMouseClickSideNavItem.bind(this));this.$sideNavCategoryList.menuAim({activate:this.onMouseEnterSideNavItem.bind(this),deactivate:n.a.noop,submenuSelector:"li"});this.setA11yInitialStateMenubar().bindA11yEvents().bindA11yEventsSideNav().bindA11yEventsTertiaryNav().bindGetNavItemInfoOnWindowResize()}bindNavClickLogEvents(t,e){const i=n()(t.currentTarget).data("linkable");i?c["default"].logEvent({event_name:"top_nav_linkable_onclick",node_id:e}):c["default"].logEvent({event_name:"top_nav_not_linkable_onclick",node_id:e})}onMouseEnterNav(){this.clearLeaveNavTimeout()}onMouseEnterNavItem(t){const e=n()(t.currentTarget);const i=e.data("node-id");const a=this.hasActiveTopNavLink()?A.MOUSE_ENTER_DROPDOWN_DELAY:A.MOUSE_ENTER_TIMEOUT;this.clearMouseEnterNavItem();this.$searchResults.hide();"click"===t.type&&this.bindNavClickLogEvents(t,i);this.mouseEnterNavItemTimeout=window.setTimeout((()=>{this.makeActiveNavItem(e).hide(u.SUB_NAV).show(u.SUB_NAV+this.getDataAttributeString(i)).activateSubNav(i,false)}),a)}onKeyActivateTopNavItem(t){const e=t.data("node-id");const i=u.SUB_NAV+this.getDataAttributeString(e);this.clearMouseEnterNavItem().makeActiveNavItem(t).hide(u.SUB_NAV).show(i).activateSubNav(e,true)}activateSubNav(t,e){let i=u.SUB_NAV+this.getDataAttributeString(t);const a=this.getFirstFocusableChildForSelector(`${i} ${u.SIDE_NAV_CATEGORY_LINK}`).parent("li");if(a.length){this.makeSideNavItemActive(a).setAriaActiveDescendant(`${i} ${u.SIDE_NAV_CATEGORY_LIST}`,a.attr("id"));e&&this.setMenuKeyboardNavigation(`${i} ${u.SIDE_NAV_CATEGORY_LIST}`).getFirstFocusableChildForSelector(`${i} ${u.SIDE_NAV_CATEGORY_LIST}`).trigger("focus")}else{i=u.TERTIARY_NAV+this.getDataAttributeString(t);this.show(i);e&&this.setMenuKeyboardNavigation(i).getFirstFocusableChildForSelector(i).trigger("focus")}return this}onMouseEnterPromoItem(t){this.clearLeaveNavTimeout().makeActiveNavItem(n()(t.currentTarget)).clearMouseEnterNavItem().hide(u.SUB_NAV)}onMouseLeaveNav(){this.clearLeaveNavTimeout().clearMouseEnterNavItem();this.leaveNavTimeout=window.setTimeout((()=>{this.shrinkActiveNavItemIndicator();this.clearActiveNavItems().hide(u.SUB_NAV)}),A.MOUSE_LEAVE_TIMEOUT)}onMouseEnterSideNavItem(t){this.clearMouseEnterNavItem().makeSideNavItemActive(n()(t))}onMouseClickSideNavItem(t){const e=n()(t.currentTarget);this.clearMouseEnterNavItem().makeSideNavItemActive(e)}bindGetNavItemInfoOnWindowResize(){window.addEventListener("resize",Object(N["a"])((()=>{this.storedNavItemPositionAndWidthInfo=this.setStoredNavItemPositionAndWidthInfo()}),200))}clearLeaveNavTimeout(){if(this.leaveNavTimeout){window.clearTimeout(this.leaveNavTimeout);this.leaveNavTimeout=null}return this}clearMouseEnterNavItem(){if(this.mouseEnterNavItemTimeout){window.clearTimeout(this.mouseEnterNavItemTimeout);this.mouseEnterNavItemTimeout=null}return this}getAllNavLinks(){return Array.from(this.$navCategoryLinks).concat(Array.from(this.$navPromoLinks)).map((t=>n()(t)))}setStoredNavItemPositionAndWidthInfo(){return this.allNavLinks.map((t=>({data:t.data(),width:t.width(),position:t.position()})))}getStoredNavItemPositionAndWidthInfo(t){return this.storedNavItemPositionAndWidthInfo.find((e=>e.data===(null===t||void 0===t?void 0:t.data())))}getDataAttributeString(t){return`[data-node-id="${t}"]`}hasActiveTopNavLink(){return this.$navCategoryLinks.filter(".active").length>0||this.$navPromoLinks.filter(".active").length>0}getActiveTopNavLink(){return this.allNavLinks.find((t=>n()(t).hasClass("active")))}getFirstFocusableChildForSelector(t){return this.$context.find(`${t} ${u.MENUITEM}`).first()}makeSideNavItemActive(t){Math.random()<.01&&d["a"].increment("nav.category.open.sub_category");const e=t.data("node-id");if("A"===t.children().first().get(0).tagName)return this;this.clearActiveSideNavItems();t.addClass("active");this.hide(u.TERTIARY_NAV).show(u.TERTIARY_NAV+this.getDataAttributeString(e)).setMenuKeyboardNavigation(u.TERTIARY_NAV+this.getDataAttributeString(e));return this}makeActiveNavItem(t){Math.random()<.01&&d["a"].increment("nav.category.open.top_category");this.makeActiveNavItemIndicator(t);return this}makeActiveNavItemIndicator(t){const e=this.getStoredNavItemPositionAndWidthInfo(t)||{width:0,position:{left:0,top:0}};const i=e.width;const a=e.position;if(this.hasActiveTopNavLink()){this.clearActiveNavItems();t.addClass("active");this.$activeNavItemIndicator.addClass("animate-all").css("left",a.left).css("width",i)}else{t.addClass("active");const e=a.left+.5*i;this.$activeNavItemIndicator.css("left",e).css("width",i)}}shrinkActiveNavItemIndicator(){const t=this.getActiveTopNavLink();const e=this.getStoredNavItemPositionAndWidthInfo(t);if(!e)return;{const t=e.width;const i=e.position;const a=i.left+.5*t;this.$activeNavItemIndicator.css("left",a).removeClass("animate-all").css("width",0)}}clearActiveNavItems(){this.$navCategoryLinks.removeClass("active");this.$navPromoLinks.removeClass("active");return this}clearActiveSideNavItems(){this.$sideNavCategoryLinks.removeClass("active");return this}show(t){this.$context.find(t).removeClass(l.DISPLAY_NONE).attr("aria-hidden","false");return this}hide(t){this.$context.find(t).addClass(l.DISPLAY_NONE).attr("aria-hidden","true");return this}focus(t){this.$context.find(`${t} ${u.MENUITEM}`).trigger("focus");return this}onTabAway(){this.clearLeaveNavTimeout().clearMouseEnterNavItem().clearActiveNavItems().hide(u.SUB_NAV)}setAriaActiveDescendant(t,e){this.$context.find(t).parent("ul").attr("aria-activedescendant",e);return this}setMenuKeyboardNavigation(t){v["a"].setMenuKeyboardNavigation(this.$context.find(t),{shiftTabTriggersLeave:true});return this}setA11yInitialStateMenubar(){const t=this.$navCategoryLinks.find(u.MENUITEM);const e=t.first();e.attr("tabindex","0");this.$topNavCategoryList.attr("aria-activedescendant",e.attr("id"));return this}bindA11yEvents(){if(!this.$topNavCategoryList||this.$topNavCategoryList.length<1)return this;r.setMenubarKeyboardNavigation(this.$topNavCategoryList);this.$context.on("keydown.catnav",(t=>{this.$searchResults.hide();t.keyCode!==o["a"].TAB||t.shiftKey||this.onTabAway()}));this.$topNavCategoryList.on("menubar-item-press",u.MENUITEM,(t=>{const e=n()(t.currentTarget);if("true"===e.attr("aria-haspopup")){const t=e.closest('[data-ui="top-nav-category-link"]');this.onKeyActivateTopNavItem(t)}else e.attr("href")&&"#"!==e.attr("href")&&window.location.assign(e.attr("href"))}));return this}bindA11yEventsSideNav(){this.$sideNavCategoryList.on("menu-item-open-submenu menu-item-activate",u.MENUITEM,(t=>{const e=n()(t.target);if("true"===e.attr("aria-haspopup")){const t=e.parent("li");const i=t.data("node-id");this.makeSideNavItemActive(t).getFirstFocusableChildForSelector(u.TERTIARY_NAV+this.getDataAttributeString(i)).trigger("focus")}else"menu-item-activate"===t.type&&e.attr("href")&&"#"!==e.attr("href")&&window.location.assign(e.attr("href"))}));this.$sideNavCategoryList.on("menu-item-leave",u.MENUITEM,(t=>{const e=n()(t.target);const i=e.parents("ul").data("node-id");this.hide(u.SUB_NAV).clearActiveNavItems().focus(u.TOP_NAV_CATEGORY_LINK+this.getDataAttributeString(i))}));return this}bindA11yEventsTertiaryNav(){this.$tertiaryNavs.on("menu-item-leave",u.MENUITEM,(t=>{const e=n()(t.target);const i=e.parents(u.TERTIARY_NAV);const a=i.data("node-id");const s=i.attr("data-has-side-nav");if("false"===s){this.hide(u.SUB_NAV).clearActiveNavItems().focus(u.TOP_NAV_CATEGORY_LINK+this.getDataAttributeString(a));return}this.focus(u.SIDE_NAV_CATEGORY_LINK+this.getDataAttributeString(a))}));this.$tertiaryNavs.on("menu-item-activate",u.MENUITEM,(t=>{window.location.assign(n()(t.target).attr("href"))}));this.$tertiaryNavs.on("menu-item-open-submenu menu-item-activate",u.MENUITEM,(t=>{const e=n()(t.target);const i=e.closest(u.MENU);const a=i.siblings(u.PROMO);a.find(":focusable").eq(0).trigger("focus")}));this.$promos.on("keyup",(t=>{const e=n()(t.target);if(t.keyCode===o["a"].LEFT||t.shiftKey&&t.keyCode===o["a"].TAB){t.preventDefault();const i=e.closest(u.PROMO);const a=i.siblings(u.TERTIARY_NAV).filter(":not(:hidden)");a.find(":focusable").eq(0).trigger("focus")}else if(t.keyCode===o["a"].ESC){t.preventDefault();const i=e.closest(u.SUB_NAV).data("node-id");this.hide(u.SUB_NAV).clearActiveNavItems().focus(u.TOP_NAV_CATEGORY_LINK+this.getDataAttributeString(i))}}));return this}}var _=m;var E=i("/wG7");var I=i("KWsK");const T={KEY:"catnav",NAME:"CategoryNav_V2_ApiSpec_SubNav"};const g={CAT_NAV:'[id="desktop-category-nav"]',TOP_NAV_LIST:'[data-ui="top-nav-category-list"]',SUB_NAV_CONTAINER:'[data-ui="sub-nav-container"]',SUB_NAV:'[data-ui="sub-nav"]',GIFT_GUIDE_TREATMENT:"[data-cyber-gift-guide-treatment]",SALE_PROMO_TREATMENT:"[data-cyber-sale-treatment]",SALE_PROMO_CONTROL:"[data-cyber-sale-control]"};const f=n()(g.CAT_NAV);const S=f.find(g.TOP_NAV_LIST);const L=f.find(g.SUB_NAV);const O=f.find(g.GIFT_GUIDE_TREATMENT);const y=f.find(g.SALE_PROMO_TREATMENT);const M=f.find(g.SALE_PROMO_CONTROL);O.on("click",(()=>{c["default"].logEvent({event_name:"catnav_gifts_clicked"})}));y.on("click",(()=>{c["default"].logEvent({event_name:"catnav_saletreatment_clicked"})}));M.on("click",(()=>{c["default"].logEvent({event_name:"catnav_salecontrol_clicked"})}));if((null===S||void 0===S?void 0:S.children().length)>0)if(0===L.length){const t=E["a"].getSpecArgsForSpec(T.NAME,g.CAT_NAV);E["a"].fetchOne(T.KEY,T.NAME,t,"GET",true).done((t=>{if(t.output&&t.output[T.KEY]){var e;null===f||void 0===f||null===(e=f.find(`${g.SUB_NAV_CONTAINER} ${E["a"].DEFAULT_PLACEHOLDER_SELECTOR}`))||void 0===e?void 0:e.replaceWith(t.output[T.KEY]);new _(f)}else I["a"].captureMessage("Desktop CatNav NeuSpec data.output not defined",{level:"info",extra:{specKey:T.KEY,specName:T.NAME,data:t}})}))}else new _(f)}}]);
//# sourceMappingURL=https://www.etsy.com/sourcemaps/evergreenVendor/en-US/async/common-entrypoints/auto/bootstrap/category-nav/v2/nav.b848a1aeb8c1e2cbaba4.js.map