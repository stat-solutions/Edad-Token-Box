(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/common/header/header.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/common/header/header.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCommonHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"flux-header clearfix\" [attr.nav-layout]=\"navLayout\"\r\n  [attr.navbar-type]=\"toggleStatus ? defaultNavbar : toggleNavbar \" [attr.effect-type]=\"navbarEffect\"\r\n  [attr.header-theme]=\"headerColorTheme\" [attr.collapsed-left-header]=\"collapsedLeftHeader\"\r\n  [attr.device-type]=\"deviceType\">\r\n  <div class=\"flux-header-wrapper clearfix\">\r\n    <div class=\"flux-brand\" [attr.left-header-theme]=\"leftHeaderColorTheme\">\r\n      <span class=\"flux-brand-logo\"><i class=\"fas fa-meteor\"></i></span>\r\n      <span class=\"flux-brand-text\">EDAD Token Box</span>\r\n    </div>\r\n    <div class=\"flux-header-navbar\">\r\n      <div class=\"flux-left-header clearfix\">\r\n        <div class=\"sidebarToggle\" (click)=\"changeTheToggleStatus()\"><i class=\"fas fa-bars\"></i></div>\r\n        <!-- <div class=\"left-header-nav\">\r\n          <ul>\r\n            <li><a href=\"\" class=\"dropdown-toggle\">Mega</a></li>\r\n            <li><a href=\"\" class=\"dropdown-toggle\">New</a></li>\r\n          </ul>\r\n        </div> -->\r\n      </div>\r\n\r\n      <div class=\"flux-right-header clearfix\">\r\n        <ul>\r\n          <!-- <li><a href=\"\"><i class=\"far fa-list-alt\"></i></a></li>\r\n          <li><a href=\"\" class=\"dropdown-toggle\"><i class=\"fas fa-user-cog\"></i> <span *ngIf=\"deviceType !== 'mobile'\" >System Setting</span> </a></li> -->\r\n          <li><a href=\"\"><i class=\"fas fa-power-off\"></i></a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/common/left-panel/left-panel.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/common/left-panel/left-panel.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCommonLeftPanelLeftPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flux-left-panel\"\r\n  [ngClass]=\"{hideNav: toggleStatus && navLayout === 'horizontal' && deviceType === 'mobile'}\"\r\n  [attr.nav-layout]=\"navLayout\" [ngStyle]=\"{'height.px': asidebarHeight}\"\r\n  [attr.navbar-type]=\"toggleStatus ? defaultNavbar : toggleNavbar \" [attr.effect-type]=\"navbarEffect\"\r\n  [attr.navbar-theme]=\"navbarColorTheme\" [attr.active-Nav-theme]=\"activeNavColorTheme\" [attr.device-type]=\"deviceType\">\r\n  <div class=\"flux-wrapper\">\r\n    <nav class=\"flux-navbar\">\r\n\r\n      <ul class=\"menu-list\">\r\n\r\n        <li *ngFor=\"let ml of menuList;  let i = index;\" routerLinkActive=\"active\" class=\"menu-item\"\r\n          [ngClass]=\"{active: isActive(ml.name), 'hasMenu':ml.subMenu}\" appMenudropdown>\r\n          <a *ngIf=\"!(ml.subMenu)\" [routerLink]=\"ml.url\" (click)=\"onItemSelect(ml.name);\">\r\n          \r\n            <span class=\"flux-micon\"><i class=\"{{ml.icon}}\"></i></span>\r\n            <span class=\"flux-mtext\">{{ml.name}}</span>\r\n            <span *ngIf=\"(ml.badge)\" class=\"flux-badge {{ml.badgeBg}}\">{{ml.badge}}</span>\r\n\r\n          </a>\r\n          <a *ngIf=\"ml.subMenu\" href=\"javascript:void(0)\">\r\n            <span class=\"flux-micon\"><i class=\"{{ml.icon}}\"></i></span>\r\n            <span class=\"flux-mtext\">{{ml.name}}</span>\r\n            <span *ngIf=\"(ml.badge)\" class=\"flux-badge {{ml.badgeBg}}\">{{ml.badge}}</span>\r\n            <span class=\"flux-mcaret\"></span>\r\n          </a>\r\n          <ul *ngIf=\"ml.subMenu\">\r\n            <li *ngFor=\"let child of ml.subMenu\" routerLinkActive=\"active\" (click)=\"onSubItemSelect(ml.name);\">\r\n              <a [routerLink]=\"child.url\">\r\n                <span class=\"flux-micon\"><i class=\"{{child.icon}}\"></i> </span>\r\n                <span class=\"flux-mtext\">{{child.name}}</span>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/common/right-panel/right-panel.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/common/right-panel/right-panel.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCommonRightPanelRightPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"flux-right-panel\" [ngClass]=\"{open: rightPanelStatus}\">\r\n  <div class=\"selector-toggle\">\r\n    <span (click)=\"changeTheRightPanelStatus()\"></span>\r\n  </div>\r\n  <h1 class=\"title\">Style Selector</h1>\r\n  <ul class=\"setting-list\">\r\n    <li>\r\n      <div class=\"toggle-switch clearfix\" (change)=\"changeNavbar($event)\">\r\n        <span class=\"switch-text float-left\">Horizontal Navbar</span>\r\n        <label class=\"switch float-right\">\r\n          <input type=\"checkbox\">\r\n          <span class=\"slider\"></span>\r\n        </label>\r\n      </div>\r\n    </li>\r\n    <li>\r\n      <div class=\"toggle-switch clearfix\" (change)=\"setThemeLayout($event)\">\r\n        <span class=\"switch-text float-left\">Boxed layout</span>\r\n        <label class=\"switch float-right\">\r\n          <input type=\"checkbox\">\r\n          <span class=\"slider\"></span>\r\n        </label>\r\n      </div>\r\n    </li>\r\n    <li>\r\n      <div class=\"toggle-switch clearfix\" (change)=\"setCollapsedLeftHeader($event)\">\r\n        <span class=\"switch-text float-left\">Collapsed left header</span>\r\n        <label class=\"switch float-right\">\r\n          <input type=\"checkbox\" checked>\r\n          <span class=\"slider\"></span>\r\n        </label>\r\n      </div>\r\n    </li>\r\n    <li class=\"color-theme-setting clearfix\">\r\n      <h3 class=\"theme-title\">Left Header Theme</h3>\r\n      <a *ngFor=\"let item of lHeaderTheme;  let i = index;\" class=\"leftheader-theme\" [attr.theme]=\"item.theme\"\r\n        (click)=\"onLheaderThemeChange(item.theme);\">&nbsp;</a>\r\n    </li>\r\n    <li class=\"color-theme-setting clearfix\">\r\n      <h3 class=\"theme-title\">Header Theme</h3>\r\n      <a *ngFor=\"let item of headerTheme;  let i = index;\" class=\"leftheader-theme\" [attr.theme]=\"item.theme\"\r\n        (click)=\"onHeaderThemeChange(item.theme);\">&nbsp;</a>\r\n    </li>\r\n    <li class=\"color-theme-setting clearfix\">\r\n      <h3 class=\"theme-title\">Asidebar Theme</h3>\r\n      <a *ngFor=\"let item of leftPanelTheme;  let i = index;\" class=\"leftheader-theme\"\r\n        [attr.theme]=\"item.theme\" (click)=\"onAsidebarThemeChange(item.theme);\">&nbsp;</a>\r\n    </li>\r\n    <li>\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleFormControlSelect2\">Vertical Navbar Effect</label>\r\n        <select class=\"form-control\" [(ngModel)]='navbarEffect' (change)=\"onChangeEffect($event.target.value)\">\r\n          <option *ngFor=\"let effect of navBarMenuEffectList\" [value]=\"effect\" >{{effect}}</option>\r\n        </select>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/authentication/authentication.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/authentication/authentication.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsAuthenticationAuthenticationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  authentication works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/code-editor/code-editor.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/code-editor/code-editor.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsBootstrapComponentCodeEditorCodeEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  code-editor works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/color-pickers/color-pickers.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/color-pickers/color-pickers.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsBootstrapComponentColorPickersColorPickersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  color-pickers works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/context-menu/context-menu.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/context-menu/context-menu.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsBootstrapComponentContextMenuContextMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  context-menu works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/date-time-picker/date-time-picker.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/date-time-picker/date-time-picker.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsBootstrapComponentDateTimePickerDateTimePickerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  date-time-picker works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/file-upload/file-upload.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/file-upload/file-upload.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsBootstrapComponentFileUploadFileUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  file-upload works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/icons/icons.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/icons/icons.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsBootstrapComponentIconsIconsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  icons works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/select/select.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/select/select.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsBootstrapComponentSelectSelectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  select works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/switch/switch.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/switch/switch.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsBootstrapComponentSwitchSwitchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  switch works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/touchspin/touchspin.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/touchspin/touchspin.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsBootstrapComponentTouchspinTouchspinComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  touchspin works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/widgets-tools/widgets-tools.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/widgets-tools/widgets-tools.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsBootstrapComponentWidgetsToolsWidgetsToolsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  widgets-tools works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/wysiwyg-editor/wysiwyg-editor.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/wysiwyg-editor/wysiwyg-editor.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsBootstrapComponentWysiwygEditorWysiwygEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  wysiwyg-editor works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/custom-layout/closed-sidebar-layout/closed-sidebar-layout.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/custom-layout/closed-sidebar-layout/closed-sidebar-layout.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsCustomLayoutClosedSidebarLayoutClosedSidebarLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  closed-sidebar-layout works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/custom-layout/fixed-sidebar-layout/fixed-sidebar-layout.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/custom-layout/fixed-sidebar-layout/fixed-sidebar-layout.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsCustomLayoutFixedSidebarLayoutFixedSidebarLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  fixed-sidebar-layout works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/custom-layout/hover-sidebar-menu/hover-sidebar-menu.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/custom-layout/hover-sidebar-menu/hover-sidebar-menu.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsCustomLayoutHoverSidebarMenuHoverSidebarMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  hover-sidebar-menu works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/custom-layout/light-sidebar-menu/light-sidebar-menu.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/custom-layout/light-sidebar-menu/light-sidebar-menu.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsCustomLayoutLightSidebarMenuLightSidebarMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  light-sidebar-menu works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/custom-layout/offcanvas-sidebar-layout/offcanvas-sidebar-layout.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/custom-layout/offcanvas-sidebar-layout/offcanvas-sidebar-layout.component.html ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsCustomLayoutOffcanvasSidebarLayoutOffcanvasSidebarLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  offcanvas-sidebar-layout works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/dashboard/dashboard.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/dashboard/dashboard.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <p>\r\n   dashboard works!\r\n </p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ecommerce/order-view/order-view.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ecommerce/order-view/order-view.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsEcommerceOrderViewOrderViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  order-view works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ecommerce/orders/orders.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ecommerce/orders/orders.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsEcommerceOrdersOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  orders works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ecommerce/product-edit/product-edit.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ecommerce/product-edit/product-edit.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsEcommerceProductEditProductEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  product-edit works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ecommerce/products/products.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ecommerce/products/products.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsEcommerceProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  products works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/elements/elements.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/elements/elements.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsElementsElementsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  elements works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/dropzone-file-upload/dropzone-file-upload.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/dropzone-file-upload/dropzone-file-upload.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsFormStuffDropzoneFileUploadDropzoneFileUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  dropzone-file-upload works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/form-control/form-control.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/form-control/form-control.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsFormStuffFormControlFormControlComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  form-control works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/form-input-mask/form-input-mask.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/form-input-mask/form-input-mask.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsFormStuffFormInputMaskFormInputMaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  form-input-mask works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/form-layouts/form-layouts.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/form-layouts/form-layouts.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsFormStuffFormLayoutsFormLayoutsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  form-layouts works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/form-validation/form-validation.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/form-validation/form-validation.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsFormStuffFormValidationFormValidationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  form-validation works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/form-wizard/form-wizard.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/form-wizard/form-wizard.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsFormStuffFormWizardFormWizardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  form-wizard works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/form-x-editable/form-x-editable.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/form-x-editable/form-x-editable.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsFormStuffFormXEditableFormXEditableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  form-x-editable works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/image-cropping/image-cropping.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/image-cropping/image-cropping.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsFormStuffImageCroppingImageCroppingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  image-cropping works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/multiple-file-upload/multiple-file-upload.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/multiple-file-upload/multiple-file-upload.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsFormStuffMultipleFileUploadMultipleFileUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  multiple-file-upload works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/invoice/invoice.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/invoice/invoice.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsInvoiceInvoiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  invoice works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/other-app/other-app.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/other-app/other-app.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsOtherAppOtherAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  other-app works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/pages-layouts/ajax-contant-layout/ajax-contant-layout.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/pages-layouts/ajax-contant-layout/ajax-contant-layout.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsPagesLayoutsAjaxContantLayoutAjaxContantLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  ajax-contant-layout works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/pages-layouts/blank-page/blank-page.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/pages-layouts/blank-page/blank-page.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsPagesLayoutsBlankPageBlankPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  blank-page works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/pages-layouts/boxed-page/boxed-page.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/pages-layouts/boxed-page/boxed-page.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsPagesLayoutsBoxedPageBoxedPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  boxed-page works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/pages-layouts/classic-page-head/classic-page-head.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/pages-layouts/classic-page-head/classic-page-head.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsPagesLayoutsClassicPageHeadClassicPageHeadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  classic-page-head works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/pages-layouts/light-page-head/light-page-head.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/pages-layouts/light-page-head/light-page-head.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsPagesLayoutsLightPageHeadLightPageHeadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  light-page-head works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/pages-layouts/off-canvas-mobile-menu/off-canvas-mobile-menu.component.html":
  /*!***************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/pages-layouts/off-canvas-mobile-menu/off-canvas-mobile-menu.component.html ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsPagesLayoutsOffCanvasMobileMenuOffCanvasMobileMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  off-canvas-mobile-menu works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/portlets/ajax/ajax.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/portlets/ajax/ajax.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsPortletsAjaxAjaxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  ajax works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/portlets/boxed/boxed.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/portlets/boxed/boxed.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsPortletsBoxedBoxedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  boxed works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/portlets/draggable/draggable.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/portlets/draggable/draggable.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsPortletsDraggableDraggableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  draggable works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/portlets/light/light.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/portlets/light/light.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsPortletsLightLightComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  light works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/portlets/solid/solid.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/portlets/solid/solid.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsPortletsSolidSolidComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  solid works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/tables/tables.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/tables/tables.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsTablesTablesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  tables works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/buttons/buttons.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/buttons/buttons.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsUiFeaturesButtonsButtonsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  buttons works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/color-library/color-library.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/color-library/color-library.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsUiFeaturesColorLibraryColorLibraryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  color-library works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/font-icons/font-icons.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/font-icons/font-icons.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsUiFeaturesFontIconsFontIconsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  font-icons works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/general-components/general-components.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/general-components/general-components.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsUiFeaturesGeneralComponentsGeneralComponentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  general-components works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/grid-system/grid-system.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/grid-system/grid-system.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsUiFeaturesGridSystemGridSystemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  grid-system works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/soical-icons/soical-icons.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/soical-icons/soical-icons.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsUiFeaturesSoicalIconsSoicalIconsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  soical-icons works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/spinner-buttons/spinner-buttons.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/spinner-buttons/spinner-buttons.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComponentsUiFeaturesSpinnerButtonsSpinnerButtonsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  spinner-buttons works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content-section/content-section.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content-section/content-section.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContentSectionContentSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flux-content-section\" [attr.nav-layout]=\"navLayout\" [ngStyle]=\"{'height.px': contentHeight}\"\r\n  [attr.navbar-type]=\"toggleStatus ? defaultNavbar : toggleNavbar \" [attr.effect-type]=\"navbarEffect\"\r\n  [attr.device-type]=\"deviceType\">\r\n  <div class=\"flux-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"screen-title-section\">\r\n          <h1 class=\"screen-title\">{{screenTitle}}</h1>\r\n          <nav aria-label=\"breadcrumb\">\r\n            <ol class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\r\n              <li class=\"breadcrumb-item\"><a href=\"#\">Library</a></li>\r\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\r\n            </ol>\r\n          </nav>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages-core/pages-core.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages-core/pages-core.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPagesCorePagesCoreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flux-container\" [attr.theme-layout]=\"themeLayout\" [attr.device-type]=\"setDeviceType\">\r\n  <div class=\"overlay-box\"\r\n    *ngIf=\"setVerticalNavbarEffect === 'overlay' && setDefaultNavbar === 'offcanvas' && setToggleStatus === false\"\r\n    (click)=\"changeTheToggleStatus()\"></div>\r\n  <div class=\"overlay-box\"\r\n    *ngIf=\"setNavLayout === 'horizontal' && setDeviceType === 'mobile' && setToggleStatus === false\"\r\n    (click)=\"changeTheToggleStatus()\"></div>\r\n  <div class=\"flux-wrapper\">\r\n    <app-header [navLayout]=\"setNavLayout\" [defaultNavbar]=\"setDefaultNavbar\" [toggleNavbar]=\"setToggleNavbar\"\r\n      [toggleStatus]=\"setToggleStatus\" [navbarEffect]=\"setVerticalNavbarEffect\" [headerColorTheme]=\"setHeaderColorTheme\"\r\n      [navbarColorTheme]=\"setNavbarColorTheme\" [activeNavColorTheme]=\"setActiveNavColorTheme\"\r\n      [headerHeight]=\"setHeaderHeight\" [leftHeaderColorTheme]=\"setLeftHeaderColorTheme\"\r\n      [collapsedLeftHeader]=\"setCollapsedLeftHeader\" [deviceType]=\"setDeviceType\"></app-header>\r\n\r\n    <app-left-panel [navLayout]=\"setNavLayout\" [defaultNavbar]=\"setDefaultNavbar\" [toggleNavbar]=\"setToggleNavbar\"\r\n      [toggleStatus]=\"setToggleStatus\" [navbarEffect]=\"setVerticalNavbarEffect\" [headerColorTheme]=\"setHeaderColorTheme\"\r\n      [navbarColorTheme]=\"setNavbarColorTheme\" [activeNavColorTheme]=\"setActiveNavColorTheme\"\r\n      [deviceType]=\"setDeviceType\">\r\n    </app-left-panel>\r\n\r\n    <app-content-section [navLayout]=\"setNavLayout\" [defaultNavbar]=\"setDefaultNavbar\" [toggleNavbar]=\"setToggleNavbar\"\r\n      [toggleStatus]=\"setToggleStatus\" [navbarEffect]=\"setVerticalNavbarEffect\" [headerColorTheme]=\"setHeaderColorTheme\"\r\n      [navbarColorTheme]=\"setNavbarColorTheme\" [activeNavColorTheme]=\"setActiveNavColorTheme\"\r\n      [deviceType]=\"setDeviceType\">\r\n    </app-content-section>\r\n    <app-right-panel></app-right-panel>\r\n\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/common/header/header.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/common/header/header.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCommonHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".flux-header {\n  width: 100%;\n  padding: 0px;\n  position: relative;\n  height: 50px;\n}\n\n.flux-header:after,\n.flux-header:before {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.flux-brand {\n  width: 230px;\n  padding: 0 10px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  height: 50px;\n  bottom: 0px;\n  line-height: 49px;\n  z-index: 1025;\n  padding-left: 15px;\n  border-bottom: 1px solid;\n}\n\n.flux-brand .flux-brand-logo {\n  font-size: 20px;\n  display: inline-block;\n  vertical-align: middle;\n  z-index: 1;\n  padding-right: 10px;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n\n.flux-brand .flux-brand-text {\n  font-size: 16px;\n  text-transform: capitalize;\n  font-weight: 400;\n  position: absolute;\n  top: 2px;\n  opacity: 1;\n  visibility: visible;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n  white-space: nowrap;\n}\n\n.flux-header-navbar {\n  margin-left: 230px;\n  display: block;\n  position: relative;\n  padding: 6px 10px;\n}\n\n.flux-header-navbar .flux-left-header {\n  float: left;\n}\n\n.flux-header-navbar .flux-left-header .sidebarToggle {\n  font-size: 19px;\n  display: inline-block;\n  padding-right: 10px;\n  cursor: pointer;\n  border-radius: 2px;\n  text-align: center;\n  padding: 4px 8px;\n  vertical-align: middle;\n}\n\n.flux-header-navbar .flux-left-header .left-header-nav {\n  display: inline-block;\n}\n\n.flux-header-navbar .flux-left-header .left-header-nav ul {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n}\n\n.flux-header-navbar .flux-left-header .left-header-nav ul li {\n  display: inline-block;\n  margin: 0px;\n  padding: 0 8px;\n  list-style: none;\n  position: relative;\n}\n\n.flux-header-navbar .flux-left-header .left-header-nav ul li a {\n  font-size: 13px;\n  font-weight: 400;\n  text-decoration: none;\n}\n\n.flux-header-navbar .flux-right-header {\n  display: block;\n  float: right;\n  padding: 8px 0px;\n}\n\n.flux-header-navbar .flux-right-header ul {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n}\n\n.flux-header-navbar .flux-right-header ul li {\n  display: inline-block;\n  margin: 0px;\n  padding: 0 4px;\n  list-style: none;\n  position: relative;\n}\n\n.flux-header-navbar .flux-right-header ul li a {\n  font-size: 12px;\n  font-weight: 400;\n  text-decoration: none;\n  padding: 8px 10px;\n  border-radius: 3px;\n}\n\n.flux-header-navbar .flux-right-header ul li a i {\n  font-size: 16px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=expanded] .flux-brand {\n  width: 230px;\n  left: 0px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=expanded] .flux-header-navbar {\n  margin-left: 230px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=expanded][effect-type=overlay][collapsed-left-header=true] .flux-header-navbar {\n  margin-left: 0px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=expanded][effect-type=shrink][collapsed-left-header=true] .flux-header-navbar {\n  margin-left: 230px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=expanded][effect-type=push][collapsed-left-header=true] .flux-header-navbar {\n  margin-left: 230px;\n  margin-right: -230px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=false] .flux-brand {\n  width: 230px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=false] .flux-header-navbar {\n  margin-left: 230px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][effect-type=overlay][collapsed-left-header=true] .flux-header-navbar {\n  margin-left: 0px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][effect-type=shrink][collapsed-left-header=true] .flux-header-navbar {\n  margin-left: 50px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][effect-type=push][collapsed-left-header=true] .flux-header-navbar {\n  margin-left: 50px;\n  margin-right: -50px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true] .flux-brand {\n  width: 50px;\n  padding-left: 10px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true] .flux-brand i {\n  padding: 5px;\n  border-radius: 3px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true] .flux-header-navbar {\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true] .flux-brand-text {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n  white-space: nowrap;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true] .flux-brand-logo {\n  padding-right: 10px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=offcanvas][effect-type=overlay][collapsed-left-header=true] .flux-header-navbar {\n  margin-left: 0px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=offcanvas][effect-type=shrink][collapsed-left-header=true] .flux-header-navbar {\n  margin-left: 0px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=offcanvas][effect-type=push][collapsed-left-header=true] .flux-header-navbar {\n  margin-left: 0px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=offcanvas][collapsed-left-header=true] .flux-brand {\n  width: 50px;\n  left: -230px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=offcanvas][collapsed-left-header=true] .flux-header-navbar {\n  margin-left: 0px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=offcanvas][collapsed-left-header=false] .flux-brand {\n  width: 230px;\n  left: 0px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=offcanvas][collapsed-left-header=false] .flux-header-navbar {\n  margin-left: 230px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=offcanvas] .flux-brand {\n  width: 230px;\n  left: -230px;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=offcanvas] .flux-header-navbar {\n  margin-left: 0px;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=expanded][effect-type=overlay][collapsed-left-header=false][device-type=mobile] {\n  height: 100px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=expanded][effect-type=overlay][collapsed-left-header=false][device-type=mobile] .flux-brand {\n  width: 100%;\n  left: 0px;\n  position: relative;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=expanded][effect-type=overlay][collapsed-left-header=false][device-type=mobile] .flux-header-navbar {\n  margin-left: 0px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=expanded][effect-type=shrink][collapsed-left-header=false][device-type=mobile] {\n  height: 100px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=expanded][effect-type=shrink][collapsed-left-header=false][device-type=mobile] .flux-brand {\n  width: 100%;\n  left: 0px;\n  position: relative;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=expanded][effect-type=shrink][collapsed-left-header=false][device-type=mobile] .flux-header-navbar {\n  margin-left: 230px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=expanded][effect-type=push][collapsed-left-header=false][device-type=mobile] {\n  height: 100px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=expanded][effect-type=push][collapsed-left-header=false][device-type=mobile] .flux-brand {\n  width: 100%;\n  left: 0px;\n  position: relative;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=expanded][effect-type=push][collapsed-left-header=false][device-type=mobile] .flux-header-navbar {\n  margin-left: 230px;\n  margin-right: -230px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][effect-type=overlay][collapsed-left-header=false][device-type=mobile] {\n  height: 100px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][effect-type=overlay][collapsed-left-header=false][device-type=mobile] .flux-brand {\n  width: 100%;\n  position: relative;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][effect-type=overlay][collapsed-left-header=false][device-type=mobile] .flux-header-navbar {\n  margin-left: 0px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][effect-type=shrink][collapsed-left-header=false][device-type=mobile] {\n  height: 100px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][effect-type=shrink][collapsed-left-header=false][device-type=mobile] .flux-brand {\n  width: 100%;\n  position: relative;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][effect-type=shrink][collapsed-left-header=false][device-type=mobile] .flux-header-navbar {\n  margin-left: 50px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][effect-type=push][collapsed-left-header=false][device-type=mobile] {\n  height: 100px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][effect-type=push][collapsed-left-header=false][device-type=mobile] .flux-brand {\n  width: 100%;\n  position: relative;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][effect-type=push][collapsed-left-header=false][device-type=mobile] .flux-header-navbar {\n  margin-left: 50px;\n  margin-right: -50px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=offcanvas][effect-type=overlay][collapsed-left-header=false][device-type=mobile] {\n  height: 100px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=offcanvas][effect-type=overlay][collapsed-left-header=false][device-type=mobile] .flux-brand {\n  width: 100%;\n  position: relative;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=offcanvas][effect-type=overlay][collapsed-left-header=false][device-type=mobile] .flux-header-navbar {\n  margin-left: 0px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=offcanvas][effect-type=shrink][collapsed-left-header=false][device-type=mobile] {\n  height: 100px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=offcanvas][effect-type=shrink][collapsed-left-header=false][device-type=mobile] .flux-brand {\n  width: 100%;\n  position: relative;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=offcanvas][effect-type=shrink][collapsed-left-header=false][device-type=mobile] .flux-header-navbar {\n  margin-left: 0px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=offcanvas][effect-type=push][collapsed-left-header=false][device-type=mobile] {\n  height: 100px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=offcanvas][effect-type=push][collapsed-left-header=false][device-type=mobile] .flux-brand {\n  width: 100%;\n  position: relative;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=offcanvas][effect-type=push][collapsed-left-header=false][device-type=mobile] .flux-header-navbar {\n  margin-left: 0px;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true][header-theme=theme1] .flux-brand i {\n  background: #ecf0f8;\n}\n\n.flux-header[header-theme=theme1] {\n  background: #FFF;\n}\n\n.flux-header[header-theme=theme1] .flux-brand {\n  background: #FFF;\n  color: #678098;\n  border-bottom-color: #f5f5f5;\n}\n\n.flux-header[header-theme=theme1] .flux-brand .flux-brand-logo {\n  color: #678098;\n}\n\n.flux-header[header-theme=theme1] .flux-brand .flux-brand-text {\n  color: #678098;\n}\n\n.flux-header[header-theme=theme1] .flux-header-navbar .flux-left-header .sidebarToggle {\n  background: #f2f2f2;\n  color: #007bff;\n}\n\n.flux-header[header-theme=theme1] .flux-header-navbar .flux-left-header .sidebarToggle:hover {\n  background: #007bff;\n  color: #f2f2f2;\n}\n\n.flux-header[header-theme=theme1] .flux-header-navbar .flux-left-header .left-header-nav ul li a {\n  color: #9e9a9a;\n}\n\n.flux-header[header-theme=theme1] .flux-header-navbar .flux-left-header .left-header-nav ul li a:hover {\n  color: #007bff;\n}\n\n.flux-header[header-theme=theme1] .flux-header-navbar .flux-right-header ul li a {\n  background: #f2f2f2;\n  color: #9e9a9a;\n}\n\n.flux-header[header-theme=theme1] .flux-header-navbar .flux-right-header ul li a i {\n  color: #007bff;\n}\n\n.flux-header[header-theme=theme1] .flux-header-navbar .flux-right-header ul li a:hover {\n  background: #007bff;\n  color: #FFF;\n}\n\n.flux-header[header-theme=theme1] .flux-header-navbar .flux-right-header ul li a:hover i {\n  color: #FFF;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true][header-theme=theme2] .flux-brand i {\n  background: #1c232e;\n}\n\n.flux-header[header-theme=theme2] {\n  background: #354052;\n}\n\n.flux-header[header-theme=theme2] .flux-brand {\n  background: #354052;\n  color: #b4bcc8;\n  border-bottom-color: #485468;\n}\n\n.flux-header[header-theme=theme2] .flux-brand .flux-brand-logo {\n  color: #b4bcc8;\n}\n\n.flux-header[header-theme=theme2] .flux-brand .flux-brand-text {\n  color: #b4bcc8;\n}\n\n.flux-header[header-theme=theme2] .flux-header-navbar .flux-left-header .sidebarToggle {\n  background: #1c232e;\n  color: #b4bcc8;\n}\n\n.flux-header[header-theme=theme2] .flux-header-navbar .flux-left-header .sidebarToggle:hover {\n  background: #b4bcc8;\n  color: #1c232e;\n}\n\n.flux-header[header-theme=theme2] .flux-header-navbar .flux-left-header .left-header-nav ul li a {\n  color: #b4bcc8;\n}\n\n.flux-header[header-theme=theme2] .flux-header-navbar .flux-left-header .left-header-nav ul li a:hover {\n  color: #FFFFFF;\n}\n\n.flux-header[header-theme=theme2] .flux-header-navbar .flux-right-header ul li a {\n  background: #1c232e;\n  color: #b4bcc8;\n}\n\n.flux-header[header-theme=theme2] .flux-header-navbar .flux-right-header ul li a i {\n  color: #b4bcc8;\n}\n\n.flux-header[header-theme=theme2] .flux-header-navbar .flux-right-header ul li a:hover {\n  background: #b4bcc8;\n  color: #1c232e;\n}\n\n.flux-header[header-theme=theme2] .flux-header-navbar .flux-right-header ul li a:hover i {\n  color: #1c232e;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true][header-theme=theme3] .flux-brand i {\n  background: #2f4475;\n}\n\n.flux-header[header-theme=theme3] {\n  background: #3f5485;\n}\n\n.flux-header[header-theme=theme3] .flux-brand {\n  background: #3f5485;\n  color: #d8e3fc;\n  border-bottom-color: #4a5f90;\n}\n\n.flux-header[header-theme=theme3] .flux-brand .flux-brand-logo {\n  color: #d8e3fc;\n}\n\n.flux-header[header-theme=theme3] .flux-brand .flux-brand-text {\n  color: #d8e3fc;\n}\n\n.flux-header[header-theme=theme3] .flux-header-navbar .flux-left-header .sidebarToggle {\n  background: #2f4475;\n  color: #d8e3fc;\n}\n\n.flux-header[header-theme=theme3] .flux-header-navbar .flux-left-header .sidebarToggle:hover {\n  background: #d8e3fc;\n  color: #2f4475;\n}\n\n.flux-header[header-theme=theme3] .flux-header-navbar .flux-left-header .left-header-nav ul li a {\n  color: #d8e3fc;\n}\n\n.flux-header[header-theme=theme3] .flux-header-navbar .flux-left-header .left-header-nav ul li a:hover {\n  color: #FFFFFF;\n}\n\n.flux-header[header-theme=theme3] .flux-header-navbar .flux-right-header ul li a {\n  background: #2f4475;\n  color: #d8e3fc;\n}\n\n.flux-header[header-theme=theme3] .flux-header-navbar .flux-right-header ul li a i {\n  color: #d8e3fc;\n}\n\n.flux-header[header-theme=theme3] .flux-header-navbar .flux-right-header ul li a:hover {\n  background: #d8e3fc;\n  color: #2f4475;\n}\n\n.flux-header[header-theme=theme3] .flux-header-navbar .flux-right-header ul li a:hover i {\n  color: #2f4475;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true][header-theme=theme4] .flux-brand i {\n  background: #2b64a4;\n}\n\n.flux-header[header-theme=theme4] {\n  background: #3c75b5;\n}\n\n.flux-header[header-theme=theme4] .flux-brand {\n  background: #3c75b5;\n  color: #b9d4f2;\n  border-bottom-color: #4f82bc;\n}\n\n.flux-header[header-theme=theme4] .flux-brand .flux-brand-logo {\n  color: #b9d4f2;\n}\n\n.flux-header[header-theme=theme4] .flux-brand .flux-brand-text {\n  color: #b9d4f2;\n}\n\n.flux-header[header-theme=theme4] .flux-header-navbar .flux-left-header .sidebarToggle {\n  background: #2b64a4;\n  color: #FFF;\n}\n\n.flux-header[header-theme=theme4] .flux-header-navbar .flux-left-header .sidebarToggle:hover {\n  background: #b9d4f2;\n  color: #2b64a4;\n}\n\n.flux-header[header-theme=theme4] .flux-header-navbar .flux-left-header .left-header-nav ul li a {\n  color: #b9d4f2;\n}\n\n.flux-header[header-theme=theme4] .flux-header-navbar .flux-left-header .left-header-nav ul li a:hover {\n  color: #FFFFFF;\n}\n\n.flux-header[header-theme=theme4] .flux-header-navbar .flux-right-header ul li a {\n  background: #2b64a4;\n  color: #b9d4f2;\n}\n\n.flux-header[header-theme=theme4] .flux-header-navbar .flux-right-header ul li a i {\n  color: #b9d4f2;\n}\n\n.flux-header[header-theme=theme4] .flux-header-navbar .flux-right-header ul li a:hover {\n  background: #d8e3fc;\n  color: #2b64a4;\n}\n\n.flux-header[header-theme=theme4] .flux-header-navbar .flux-right-header ul li a:hover i {\n  color: #2b64a4;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true][header-theme=theme5] .flux-brand i {\n  background: #4b3154;\n}\n\n.flux-header[header-theme=theme5] {\n  background: #583a63;\n}\n\n.flux-header[header-theme=theme5] .flux-brand {\n  background: #583a63;\n  color: #ccbad2;\n  border-bottom-color: #5d4865;\n}\n\n.flux-header[header-theme=theme5] .flux-brand .flux-brand-logo {\n  color: #ccbad2;\n}\n\n.flux-header[header-theme=theme5] .flux-brand .flux-brand-text {\n  color: #ccbad2;\n}\n\n.flux-header[header-theme=theme5] .flux-header-navbar .flux-left-header .sidebarToggle {\n  background: #4b3154;\n  color: #ccbad2;\n}\n\n.flux-header[header-theme=theme5] .flux-header-navbar .flux-left-header .sidebarToggle:hover {\n  background: #ccbad2;\n  color: #4b3154;\n}\n\n.flux-header[header-theme=theme5] .flux-header-navbar .flux-left-header .left-header-nav ul li a {\n  color: #ccbad2;\n}\n\n.flux-header[header-theme=theme5] .flux-header-navbar .flux-left-header .left-header-nav ul li a:hover {\n  color: #FFFFFF;\n}\n\n.flux-header[header-theme=theme5] .flux-header-navbar .flux-right-header ul li a {\n  background: #4b3154;\n  color: #ccbad2;\n}\n\n.flux-header[header-theme=theme5] .flux-header-navbar .flux-right-header ul li a i {\n  color: #ccbad2;\n}\n\n.flux-header[header-theme=theme5] .flux-header-navbar .flux-right-header ul li a:hover {\n  background: #ccbad2;\n  color: #4b3154;\n}\n\n.flux-header[header-theme=theme5] .flux-header-navbar .flux-right-header ul li a:hover i {\n  color: #4b3154;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true][header-theme=theme6] .flux-brand i {\n  background: #e1e1e1;\n}\n\n.flux-header[header-theme=theme6] {\n  background: #ededed;\n}\n\n.flux-header[header-theme=theme6] .flux-brand {\n  background: #ededed;\n  color: #787878;\n  border-bottom-color: #e4e5e5;\n}\n\n.flux-header[header-theme=theme6] .flux-brand .flux-brand-logo {\n  color: #787878;\n}\n\n.flux-header[header-theme=theme6] .flux-brand .flux-brand-text {\n  color: #787878;\n}\n\n.flux-header[header-theme=theme6] .flux-header-navbar .flux-left-header .sidebarToggle {\n  background: #e1e1e1;\n  color: #787878;\n}\n\n.flux-header[header-theme=theme6] .flux-header-navbar .flux-left-header .sidebarToggle:hover {\n  background: #787878;\n  color: #e1e1e1;\n}\n\n.flux-header[header-theme=theme6] .flux-header-navbar .flux-left-header .left-header-nav ul li a {\n  color: #787878;\n}\n\n.flux-header[header-theme=theme6] .flux-header-navbar .flux-left-header .left-header-nav ul li a:hover {\n  color: #000000;\n}\n\n.flux-header[header-theme=theme6] .flux-header-navbar .flux-right-header ul li a {\n  background: #e1e1e1;\n  color: #787878;\n}\n\n.flux-header[header-theme=theme6] .flux-header-navbar .flux-right-header ul li a i {\n  color: #787878;\n}\n\n.flux-header[header-theme=theme6] .flux-header-navbar .flux-right-header ul li a:hover {\n  background: #787878;\n  color: #FFFFFF;\n}\n\n.flux-header[header-theme=theme6] .flux-header-navbar .flux-right-header ul li a:hover i {\n  color: #FFFFFF;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true][header-theme=theme7] .flux-brand i {\n  background: #0b9c8f;\n}\n\n.flux-header[header-theme=theme7] {\n  background: #0aa699;\n}\n\n.flux-header[header-theme=theme7] .flux-brand {\n  background: #0aa699;\n  color: #FFFFFF;\n  border-bottom-color: #1ab0a3;\n}\n\n.flux-header[header-theme=theme7] .flux-brand .flux-brand-logo {\n  color: #FFFFFF;\n}\n\n.flux-header[header-theme=theme7] .flux-brand .flux-brand-text {\n  color: #FFFFFF;\n}\n\n.flux-header[header-theme=theme7] .flux-header-navbar .flux-left-header .sidebarToggle {\n  background: #0b9c8f;\n  color: #FFFFFF;\n}\n\n.flux-header[header-theme=theme7] .flux-header-navbar .flux-left-header .sidebarToggle:hover {\n  background: #FFFFFF;\n  color: #0b9c8f;\n}\n\n.flux-header[header-theme=theme7] .flux-header-navbar .flux-left-header .left-header-nav ul li a {\n  color: #FFFFFF;\n}\n\n.flux-header[header-theme=theme7] .flux-header-navbar .flux-left-header .left-header-nav ul li a:hover {\n  color: #4b3154;\n}\n\n.flux-header[header-theme=theme7] .flux-header-navbar .flux-right-header ul li a {\n  background: #0b9c8f;\n  color: #FFFFFF;\n}\n\n.flux-header[header-theme=theme7] .flux-header-navbar .flux-right-header ul li a i {\n  color: #FFFFFF;\n}\n\n.flux-header[header-theme=theme7] .flux-header-navbar .flux-right-header ul li a:hover {\n  background: #FFFFFF;\n  color: #0b9c8f;\n}\n\n.flux-header[header-theme=theme7] .flux-header-navbar .flux-right-header ul li a:hover i {\n  color: #0b9c8f;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true][header-theme=theme2][_ngcontent-xca-c2] .flux-brand[_ngcontent-xca-c2] i[_ngcontent-xca-c2] {\n  background: #1c232e;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true] .flux-brand[left-header-theme=theme1] i {\n  background: #ecf0f8;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme1] {\n  background: #FFFFFF;\n  color: #678098;\n  border-bottom-color: #f5f5f5;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme1] .flux-brand-logo {\n  color: #678098;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme1] .flux-brand-text {\n  color: #678098;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true][header-theme=theme2][_ngcontent-xca-c2] .flux-brand[_ngcontent-xca-c2] i[_ngcontent-xca-c2] {\n  background: #1c232e;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true] .flux-brand[left-header-theme=theme2] i {\n  background: #1c232e;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme2] {\n  background: #354052;\n  color: #b4bcc8;\n  border-bottom-color: #485468;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme2] .flux-brand-logo {\n  color: #b4bcc8;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme2] .flux-brand-text {\n  color: #b4bcc8;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true][header-theme=theme2][_ngcontent-xca-c2] .flux-brand[_ngcontent-xca-c2] i[_ngcontent-xca-c2] {\n  background: #1c232e;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true] .flux-brand[left-header-theme=theme3] i {\n  background: #2f4475;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme3] {\n  background: #3f5485;\n  color: #d8e3fc;\n  border-bottom-color: #4a5f90;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme3] .flux-brand-logo {\n  color: #d8e3fc;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme3] .flux-brand-text {\n  color: #d8e3fc;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true][header-theme=theme2][_ngcontent-xca-c2] .flux-brand[_ngcontent-xca-c2] i[_ngcontent-xca-c2] {\n  background: #1c232e;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true] .flux-brand[left-header-theme=theme4] i {\n  background: #2b64a4;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme4] {\n  background: #3c75b5;\n  color: #b9d4f2;\n  border-bottom-color: #4f82bc;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme4] .flux-brand-logo {\n  color: #b9d4f2;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme4] .flux-brand-text {\n  color: #b9d4f2;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true][header-theme=theme2][_ngcontent-xca-c2] .flux-brand[_ngcontent-xca-c2] i[_ngcontent-xca-c2] {\n  background: #1c232e;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true] .flux-brand[left-header-theme=theme5] i {\n  background: #4b3154;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme5] {\n  background: #583a63;\n  color: #ccbad2;\n  border-bottom-color: #5d4865;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme5] .flux-brand-logo {\n  color: #ccbad2;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme5] .flux-brand-text {\n  color: #ccbad2;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true][header-theme=theme2][_ngcontent-xca-c2] .flux-brand[_ngcontent-xca-c2] i[_ngcontent-xca-c2] {\n  background: #1c232e;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true] .flux-brand[left-header-theme=theme6] i {\n  background: #e1e1e1;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme6] {\n  background: #ededed;\n  color: #787878;\n  border-bottom-color: #e4e5e5;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme6] .flux-brand-logo {\n  color: #787878;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme6] .flux-brand-text {\n  color: #787878;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true][header-theme=theme2][_ngcontent-xca-c2] .flux-brand[_ngcontent-xca-c2] i[_ngcontent-xca-c2] {\n  background: #1c232e;\n}\n\n.flux-header[nav-layout=vertical][navbar-type=collapsed][collapsed-left-header=true] .flux-brand[left-header-theme=theme7] i {\n  background: #0b9c8f;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme7] {\n  background: #0aa699;\n  color: #FFFFFF;\n  border-bottom-color: #1ab0a3;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme7] .flux-brand-logo {\n  color: #FFFFFF;\n}\n\n.flux-header[nav-layout=vertical] .flux-brand[left-header-theme=theme7] .flux-brand-text {\n  color: #FFFFFF;\n}\n\n.flux-header[nav-layout=horizontal][device-type=mobile] .flux-brand {\n  width: 100%;\n}\n\n.flux-header[nav-layout=horizontal][device-type=mobile] .sidebarToggle {\n  position: absolute;\n  z-index: 1025;\n  right: 7px;\n}\n\n.flux-header[nav-layout=horizontal][device-type=mobile] .left-header-nav {\n  display: none;\n}\n\n.flux-header[nav-layout=horizontal][device-type=mobile] .flux-right-header {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tbW9uL2hlYWRlci9FOlxcc3RhdFByb2plY3RzXFxFZGFkLVRva2VuLUJveFxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcY29tbW9uXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBOztFQUVFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FDQUY7O0FERUU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBR0EsMkJBQUE7QUNBSjs7QURJRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFHQSwyQkFBQTtFQUNBLG1CQUFBO0FDRko7O0FETUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSEY7O0FES0U7RUFDRSxXQUFBO0FDSEo7O0FES0k7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0hOOztBRE1JO0VBQ0UscUJBQUE7QUNKTjs7QURNTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNKUjs7QURNUTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSlY7O0FETVU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0paOztBRFdFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1RKOztBRFdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1ROOztBRFdNO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNUUjs7QURXUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1RWOztBRFdVO0VBQ0UsZUFBQTtBQ1RaOztBRG1CRTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7RUFHQSxnQ0FBQTtBQ2hCSjs7QURtQkU7RUFDRSxrQkFBQTtFQUNBLHdDQUFBO0VBR0EsZ0NBQUE7QUNqQko7O0FEeUJFO0VBQ0UsZ0JBQUE7QUN0Qko7O0FEMkJFO0VBQ0Usa0JBQUE7QUN4Qko7O0FENkJFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQzFCSjs7QURvQ0U7RUFDRSxZQUFBO0FDakNKOztBRG9DRTtFQUNFLGtCQUFBO0FDbENKOztBRHVDRTtFQUNFLGdCQUFBO0FDcENKOztBRHlDRTtFQUNFLGlCQUFBO0FDdENKOztBRDJDRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUN4Q0o7O0FEK0NFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFHQSxnQ0FBQTtBQzVDSjs7QUQ4Q0k7RUFFRSxZQUFBO0VBQ0Esa0JBQUE7QUM3Q047O0FEaURFO0VBQ0Usd0NBQUE7RUFHQSxnQ0FBQTtBQy9DSjs7QURrREU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUdBLDJCQUFBO0VBQ0EsbUJBQUE7QUNoREo7O0FEbURFO0VBQ0UsbUJBQUE7QUNqREo7O0FEd0RFO0VBQ0UsZ0JBQUE7QUNyREo7O0FEMERFO0VBQ0UsZ0JBQUE7QUN2REo7O0FENERFO0VBQ0UsZ0JBQUE7QUN6REo7O0FEK0RFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUM1REo7O0FEK0RFO0VBQ0UsZ0JBQUE7QUM3REo7O0FEa0VFO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUMvREo7O0FEa0VFO0VBQ0Usa0JBQUE7QUNoRUo7O0FEcUVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUdBLDJCQUFBO0FDbEVKOztBRHFFRTtFQUNFLGdCQUFBO0VBQ0EsbUNBQUE7RUFHQSwyQkFBQTtBQ25FSjs7QUQyRUE7RUFDRSxhQUFBO0FDeEVGOztBRDBFRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUN4RUo7O0FEMkVFO0VBQ0UsZ0JBQUE7QUN6RUo7O0FENkVBO0VBQ0UsYUFBQTtBQzFFRjs7QUQ0RUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDMUVKOztBRDZFRTtFQUNFLGtCQUFBO0FDM0VKOztBRCtFQTtFQUNFLGFBQUE7QUM1RUY7O0FEOEVFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQzVFSjs7QUQrRUU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FDN0VKOztBRGtGQTtFQUNFLGFBQUE7QUMvRUY7O0FEaUZFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDL0VKOztBRGtGRTtFQUNFLGdCQUFBO0FDaEZKOztBRG9GQTtFQUNFLGFBQUE7QUNqRkY7O0FEbUZFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDakZKOztBRG9GRTtFQUNFLGlCQUFBO0FDbEZKOztBRHNGQTtFQUNFLGFBQUE7QUNuRkY7O0FEcUZFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDbkZKOztBRHNGRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNwRko7O0FEeUZBO0VBQ0UsYUFBQTtBQ3RGRjs7QUR3RkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUN0Rko7O0FEeUZFO0VBQ0UsZ0JBQUE7QUN2Rko7O0FEMkZBO0VBQ0UsYUFBQTtBQ3hGRjs7QUQwRkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUN4Rko7O0FEMkZFO0VBQ0UsZ0JBQUE7QUN6Rko7O0FENkZBO0VBQ0UsYUFBQTtBQzFGRjs7QUQ0RkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUMxRko7O0FENkZFO0VBQ0UsZ0JBQUE7QUMzRko7O0FEd0dNO0VBQ0UsbUJBbUUwQjtBQ3hLbEM7O0FEMEdFO0VBQ0UsZ0JBNkR1QztBQ3BLM0M7O0FEeUdJO0VBQ0UsZ0JBMEQyQztFQXpEM0MsY0F5RGlEO0VBeERqRCw0QkF3RDBEO0FDL0poRTs7QUR5R007RUFDRSxjQXFEK0M7QUM1SnZEOztBRDJHTTtFQUNFLGNBZ0QrQztBQ3pKdkQ7O0FEOEdJO0VBQ0UsbUJBMENtRTtFQXpDbkUsY0F5QzRFO0FDckpsRjs7QUQrR0k7RUFDRSxtQkFzQ0o7RUFyQ0ksY0FxQ0s7QUNsSlg7O0FEZ0hJO0VBQ0UsY0FpQ2M7QUMvSXBCOztBRGlISTtFQUNFLGNBNkJ1QjtBQzVJN0I7O0FEa0hJO0VBQ0UsbUJBeUJnQztFQXhCaEMsY0F3QmM7QUN4SXBCOztBRGtITTtFQUNFLGNBcUJ1QztBQ3JJL0M7O0FEb0hJO0VBQ0UsbUJBZ0JrRDtFQWZsRCxXQWUyRDtBQ2pJakU7O0FEb0hNO0VBQ0UsV0FZK0Q7QUM5SHZFOztBRHlETTtFQUNFLG1CQXNFMEI7QUM1SGxDOztBRDJERTtFQUNFLG1CQWdFdUM7QUN4SDNDOztBRDBESTtFQUNFLG1CQTZEOEM7RUE1RDlDLGNBNER1RDtFQTNEdkQsNEJBMkRnRTtBQ25IdEU7O0FEMERNO0VBQ0UsY0F3RHFEO0FDaEg3RDs7QUQ0RE07RUFDRSxjQW1EcUQ7QUM3RzdEOztBRCtESTtFQUNFLG1CQTZDeUU7RUE1Q3pFLGNBNENrRjtBQ3pHeEY7O0FEZ0VJO0VBQ0UsbUJBeUNKO0VBeENJLGNBd0NLO0FDdEdYOztBRGlFSTtFQUNFLGNBb0NjO0FDbkdwQjs7QURrRUk7RUFDRSxjQWdDdUI7QUNoRzdCOztBRG1FSTtFQUNFLG1CQTRCZ0M7RUEzQmhDLGNBMkJjO0FDNUZwQjs7QURtRU07RUFDRSxjQXdCdUM7QUN6Ri9DOztBRHFFSTtFQUNFLG1CQW1Ca0Q7RUFsQmxELGNBa0IyRDtBQ3JGakU7O0FEcUVNO0VBQ0UsY0Fla0U7QUNsRjFFOztBRFVNO0VBQ0UsbUJBeUUwQjtBQ2hGbEM7O0FEWUU7RUFDRSxtQkFtRXVDO0FDNUUzQzs7QURXSTtFQUNFLG1CQWdFOEM7RUEvRDlDLGNBK0R1RDtFQTlEdkQsNEJBOERnRTtBQ3ZFdEU7O0FEV007RUFDRSxjQTJEcUQ7QUNwRTdEOztBRGFNO0VBQ0UsY0FzRHFEO0FDakU3RDs7QURnQkk7RUFDRSxtQkFnRHlFO0VBL0N6RSxjQStDa0Y7QUM3RHhGOztBRGlCSTtFQUNFLG1CQTRDSjtFQTNDSSxjQTJDSztBQzFEWDs7QURrQkk7RUFDRSxjQXVDYztBQ3ZEcEI7O0FEbUJJO0VBQ0UsY0FtQ3VCO0FDcEQ3Qjs7QURvQkk7RUFDRSxtQkErQmdDO0VBOUJoQyxjQThCYztBQ2hEcEI7O0FEb0JNO0VBQ0UsY0EyQnVDO0FDN0MvQzs7QURzQkk7RUFDRSxtQkFzQmtEO0VBckJsRCxjQXFCMkQ7QUN6Q2pFOztBRHNCTTtFQUNFLGNBa0JrRTtBQ3RDMUU7O0FEckNNO0VBQ0UsbUJBNEUwQjtBQ3BDbEM7O0FEbkNFO0VBQ0UsbUJBc0V1QztBQ2hDM0M7O0FEcENJO0VBQ0UsbUJBbUU4QztFQWxFOUMsY0FrRXVEO0VBakV2RCw0QkFpRWdFO0FDM0J0RTs7QURwQ007RUFDRSxjQThEcUQ7QUN4QjdEOztBRGxDTTtFQUNFLGNBeURxRDtBQ3JCN0Q7O0FEL0JJO0VBQ0UsbUJBbUR5RTtFQWxEekUsV0FrRGtGO0FDakJ4Rjs7QUQ5Qkk7RUFDRSxtQkErQ0o7RUE5Q0ksY0E4Q0s7QUNkWDs7QUQ3Qkk7RUFDRSxjQTBDYztBQ1hwQjs7QUQ1Qkk7RUFDRSxjQXNDdUI7QUNSN0I7O0FEM0JJO0VBQ0UsbUJBa0NnQztFQWpDaEMsY0FpQ2M7QUNKcEI7O0FEM0JNO0VBQ0UsY0E4QnVDO0FDRC9DOztBRHpCSTtFQUNFLG1CQXlCa0Q7RUF4QmxELGNBd0IyRDtBQ0dqRTs7QUR6Qk07RUFDRSxjQXFCa0U7QUNNMUU7O0FEcEZNO0VBQ0UsbUJBK0UwQjtBQ1FsQzs7QURsRkU7RUFDRSxtQkF5RXVDO0FDWTNDOztBRG5GSTtFQUNFLG1CQXNFOEM7RUFyRTlDLGNBcUV1RDtFQXBFdkQsNEJBb0VnRTtBQ2lCdEU7O0FEbkZNO0VBQ0UsY0FpRXFEO0FDb0I3RDs7QURqRk07RUFDRSxjQTREcUQ7QUN1QjdEOztBRDlFSTtFQUNFLG1CQXNEeUU7RUFyRHpFLGNBcURrRjtBQzJCeEY7O0FEN0VJO0VBQ0UsbUJBa0RKO0VBakRJLGNBaURLO0FDOEJYOztBRDVFSTtFQUNFLGNBNkNjO0FDaUNwQjs7QUQzRUk7RUFDRSxjQXlDdUI7QUNvQzdCOztBRDFFSTtFQUNFLG1CQXFDZ0M7RUFwQ2hDLGNBb0NjO0FDd0NwQjs7QUQxRU07RUFDRSxjQWlDdUM7QUMyQy9DOztBRHhFSTtFQUNFLG1CQTRCa0Q7RUEzQmxELGNBMkIyRDtBQytDakU7O0FEeEVNO0VBQ0UsY0F3QmtFO0FDa0QxRTs7QURuSU07RUFDRSxtQkFrRjBCO0FDb0RsQzs7QURqSUU7RUFDRSxtQkE0RXVDO0FDd0QzQzs7QURsSUk7RUFDRSxtQkF5RThDO0VBeEU5QyxjQXdFdUQ7RUF2RXZELDRCQXVFZ0U7QUM2RHRFOztBRGxJTTtFQUNFLGNBb0VxRDtBQ2dFN0Q7O0FEaElNO0VBQ0UsY0ErRHFEO0FDbUU3RDs7QUQ3SEk7RUFDRSxtQkF5RHlFO0VBeER6RSxjQXdEa0Y7QUN1RXhGOztBRDVISTtFQUNFLG1CQXFESjtFQXBESSxjQW9ESztBQzBFWDs7QUQzSEk7RUFDRSxjQWdEYztBQzZFcEI7O0FEMUhJO0VBQ0UsY0E0Q3VCO0FDZ0Y3Qjs7QUR6SEk7RUFDRSxtQkF3Q2dDO0VBdkNoQyxjQXVDYztBQ29GcEI7O0FEekhNO0VBQ0UsY0FvQ3VDO0FDdUYvQzs7QUR2SEk7RUFDRSxtQkErQmtEO0VBOUJsRCxjQThCMkQ7QUMyRmpFOztBRHZITTtFQUNFLGNBMkJrRTtBQzhGMUU7O0FEbExNO0VBQ0UsbUJBcUYwQjtBQ2dHbEM7O0FEaExFO0VBQ0UsbUJBK0V1QztBQ29HM0M7O0FEakxJO0VBQ0UsbUJBNEU4QztFQTNFOUMsY0EyRXVEO0VBMUV2RCw0QkEwRWdFO0FDeUd0RTs7QURqTE07RUFDRSxjQXVFcUQ7QUM0RzdEOztBRC9LTTtFQUNFLGNBa0VxRDtBQytHN0Q7O0FENUtJO0VBQ0UsbUJBNER5RTtFQTNEekUsY0EyRGtGO0FDbUh4Rjs7QUQzS0k7RUFDRSxtQkF3REo7RUF2REksY0F1REs7QUNzSFg7O0FEMUtJO0VBQ0UsY0FtRGM7QUN5SHBCOztBRHpLSTtFQUNFLGNBK0N1QjtBQzRIN0I7O0FEeEtJO0VBQ0UsbUJBMkNnQztFQTFDaEMsY0EwQ2M7QUNnSXBCOztBRHhLTTtFQUNFLGNBdUN1QztBQ21JL0M7O0FEdEtJO0VBQ0UsbUJBa0NrRDtFQWpDbEQsY0FpQzJEO0FDdUlqRTs7QUR0S007RUFDRSxjQThCa0U7QUMwSTFFOztBRGxJRTtFQUNFLG1CQUFBO0FDcUlKOztBRGhJTTtFQUNFLG1CQXFCeUI7QUM4R2pDOztBRDlIRTtFQUNFLG1CQWUrQztFQWQvQyxjQWN3RDtFQWJ4RCw0QkFhaUU7QUNvSHJFOztBRC9ISTtFQUNFLGNBVXNEO0FDdUg1RDs7QUQ5SEk7RUFDRSxjQU1zRDtBQzBINUQ7O0FEdEpFO0VBQ0UsbUJBQUE7QUN5Sko7O0FEcEpNO0VBQ0UsbUJBc0J5QjtBQ2lJakM7O0FEbEpFO0VBQ0UsbUJBZ0IrQztFQWYvQyxjQWV3RDtFQWR4RCw0QkFjaUU7QUN1SXJFOztBRG5KSTtFQUNFLGNBV3NEO0FDMEk1RDs7QURsSkk7RUFDRSxjQU9zRDtBQzZJNUQ7O0FEMUtFO0VBQ0UsbUJBQUE7QUM2S0o7O0FEeEtNO0VBQ0UsbUJBdUJ5QjtBQ29KakM7O0FEdEtFO0VBQ0UsbUJBaUIrQztFQWhCL0MsY0FnQndEO0VBZnhELDRCQWVpRTtBQzBKckU7O0FEdktJO0VBQ0UsY0FZc0Q7QUM2SjVEOztBRHRLSTtFQUNFLGNBUXNEO0FDZ0s1RDs7QUQ5TEU7RUFDRSxtQkFBQTtBQ2lNSjs7QUQ1TE07RUFDRSxtQkF3QnlCO0FDdUtqQzs7QUQxTEU7RUFDRSxtQkFrQitDO0VBakIvQyxjQWlCd0Q7RUFoQnhELDRCQWdCaUU7QUM2S3JFOztBRDNMSTtFQUNFLGNBYXNEO0FDZ0w1RDs7QUQxTEk7RUFDRSxjQVNzRDtBQ21MNUQ7O0FEbE5FO0VBQ0UsbUJBQUE7QUNxTko7O0FEaE5NO0VBQ0UsbUJBeUJ5QjtBQzBMakM7O0FEOU1FO0VBQ0UsbUJBbUIrQztFQWxCL0MsY0FrQndEO0VBakJ4RCw0QkFpQmlFO0FDZ01yRTs7QUQvTUk7RUFDRSxjQWNzRDtBQ21NNUQ7O0FEOU1JO0VBQ0UsY0FVc0Q7QUNzTTVEOztBRHRPRTtFQUNFLG1CQUFBO0FDeU9KOztBRHBPTTtFQUNFLG1CQTBCeUI7QUM2TWpDOztBRGxPRTtFQUNFLG1CQW9CK0M7RUFuQi9DLGNBbUJ3RDtFQWxCeEQsNEJBa0JpRTtBQ21OckU7O0FEbk9JO0VBQ0UsY0Flc0Q7QUNzTjVEOztBRGxPSTtFQUNFLGNBV3NEO0FDeU41RDs7QUQxUEU7RUFDRSxtQkFBQTtBQzZQSjs7QUR4UE07RUFDRSxtQkEyQnlCO0FDZ09qQzs7QUR0UEU7RUFDRSxtQkFxQitDO0VBcEIvQyxjQW9Cd0Q7RUFuQnhELDRCQW1CaUU7QUNzT3JFOztBRHZQSTtFQUNFLGNBZ0JzRDtBQ3lPNUQ7O0FEdFBJO0VBQ0UsY0FZc0Q7QUM0TzVEOztBRG5PRTtFQUNFLFdBQUE7QUNzT0o7O0FEbk9FO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ3FPSjs7QURsT0U7RUFDRSxhQUFBO0FDb09KOztBRGpPRTtFQUNFLGFBQUE7QUNtT0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIENvbW1vbiBIZWFkZXIgU3R5bGUgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLmZsdXgtaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmZsdXgtaGVhZGVyOmFmdGVyLFxyXG4uZmx1eC1oZWFkZXI6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uZmx1eC1icmFuZCB7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3R0b206IDBweDtcclxuICBsaW5lLWhlaWdodDogNDlweDtcclxuICB6LWluZGV4OiAxMDI1O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcblxyXG4gIC5mbHV4LWJyYW5kLWxvZ28ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuXHJcbiAgfVxyXG5cclxuICAuZmx1eC1icmFuZC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbn1cclxuXHJcbi5mbHV4LWhlYWRlci1uYXZiYXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogNnB4IDEwcHg7XHJcblxyXG4gIC5mbHV4LWxlZnQtaGVhZGVyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAgIC5zaWRlYmFyVG9nZ2xlIHtcclxuICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxlZnQtaGVhZGVyLW5hdiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZsdXgtcmlnaHQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogOHB4IDBweDtcclxuXHJcbiAgICB1bCB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMgZXhwYW5kZWQgSGVhZGVyIFN0eWxlICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bbmF2YmFyLXR5cGU9XCJleHBhbmRlZFwiXSB7XHJcbiAgLmZsdXgtYnJhbmQge1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLmZsdXgtaGVhZGVyLW5hdmJhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjMwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD1cInZlcnRpY2FsXCJdW25hdmJhci10eXBlPVwiZXhwYW5kZWRcIl1bZWZmZWN0LXR5cGU9XCJvdmVybGF5XCJdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1cInRydWVcIl0ge1xyXG4gIC5mbHV4LWhlYWRlci1uYXZiYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bbmF2YmFyLXR5cGU9XCJleHBhbmRlZFwiXVtlZmZlY3QtdHlwZT1cInNocmlua1wiXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9XCJ0cnVlXCJdIHtcclxuICAuZmx1eC1oZWFkZXItbmF2YmFyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bbmF2YmFyLXR5cGU9XCJleHBhbmRlZFwiXVtlZmZlY3QtdHlwZT1cInB1c2hcIl1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPVwidHJ1ZVwiXSB7XHJcbiAgLmZsdXgtaGVhZGVyLW5hdmJhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMzBweDtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyBjb2xsYXBzZWQgSGVhZGVyIFN0eWxlICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bbmF2YmFyLXR5cGU9XCJjb2xsYXBzZWRcIl1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPVwiZmFsc2VcIl0ge1xyXG4gIC5mbHV4LWJyYW5kIHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICB9XHJcblxyXG4gIC5mbHV4LWhlYWRlci1uYXZiYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9XCJ2ZXJ0aWNhbFwiXVtuYXZiYXItdHlwZT1cImNvbGxhcHNlZFwiXVtlZmZlY3QtdHlwZT1cIm92ZXJsYXlcIl1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPVwidHJ1ZVwiXSB7XHJcbiAgLmZsdXgtaGVhZGVyLW5hdmJhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9XCJ2ZXJ0aWNhbFwiXVtuYXZiYXItdHlwZT1cImNvbGxhcHNlZFwiXVtlZmZlY3QtdHlwZT1cInNocmlua1wiXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9XCJ0cnVlXCJdIHtcclxuICAuZmx1eC1oZWFkZXItbmF2YmFyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9XCJ2ZXJ0aWNhbFwiXVtuYXZiYXItdHlwZT1cImNvbGxhcHNlZFwiXVtlZmZlY3QtdHlwZT1cInB1c2hcIl1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPVwidHJ1ZVwiXSB7XHJcbiAgLmZsdXgtaGVhZGVyLW5hdmJhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTUwcHg7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9XCJ2ZXJ0aWNhbFwiXVtuYXZiYXItdHlwZT1cImNvbGxhcHNlZFwiXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9XCJ0cnVlXCJdIHtcclxuXHJcbiAgLmZsdXgtYnJhbmQge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6ICMyYTM0NDQ7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZsdXgtaGVhZGVyLW5hdmJhciB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuZmx1eC1icmFuZC10ZXh0IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gIC5mbHV4LWJyYW5kLWxvZ28ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIG9mZmNhbnZhcyBIZWFkZXIgU3R5bGUgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuXHJcbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bbmF2YmFyLXR5cGU9XCJvZmZjYW52YXNcIl1bZWZmZWN0LXR5cGU9XCJvdmVybGF5XCJdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1cInRydWVcIl0ge1xyXG4gIC5mbHV4LWhlYWRlci1uYXZiYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bbmF2YmFyLXR5cGU9XCJvZmZjYW52YXNcIl1bZWZmZWN0LXR5cGU9XCJzaHJpbmtcIl1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPVwidHJ1ZVwiXSB7XHJcbiAgLmZsdXgtaGVhZGVyLW5hdmJhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9XCJ2ZXJ0aWNhbFwiXVtuYXZiYXItdHlwZT1cIm9mZmNhbnZhc1wiXVtlZmZlY3QtdHlwZT1cInB1c2hcIl1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPVwidHJ1ZVwiXSB7XHJcbiAgLmZsdXgtaGVhZGVyLW5hdmJhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bbmF2YmFyLXR5cGU9XCJvZmZjYW52YXNcIl1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPVwidHJ1ZVwiXSB7XHJcbiAgLmZsdXgtYnJhbmQge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBsZWZ0OiAtMjMwcHg7XHJcbiAgfVxyXG5cclxuICAuZmx1eC1oZWFkZXItbmF2YmFyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD1cInZlcnRpY2FsXCJdW25hdmJhci10eXBlPVwib2ZmY2FudmFzXCJdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1cImZhbHNlXCJdIHtcclxuICAuZmx1eC1icmFuZCB7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgfVxyXG5cclxuICAuZmx1eC1oZWFkZXItbmF2YmFyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bbmF2YmFyLXR5cGU9XCJvZmZjYW52YXNcIl0ge1xyXG4gIC5mbHV4LWJyYW5kIHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIGxlZnQ6IC0yMzBweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgfVxyXG5cclxuICAuZmx1eC1oZWFkZXItbmF2YmFyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMgRG91YmxlIEhlYWRlciBvbiBNb2JpbGUgU3R5bGUgc3RhcnQgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD1cInZlcnRpY2FsXCJdW25hdmJhci10eXBlPVwiZXhwYW5kZWRcIl1bZWZmZWN0LXR5cGU9XCJvdmVybGF5XCJdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1cImZhbHNlXCJdW2RldmljZS10eXBlPVwibW9iaWxlXCJdIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAuZmx1eC1icmFuZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5mbHV4LWhlYWRlci1uYXZiYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bbmF2YmFyLXR5cGU9XCJleHBhbmRlZFwiXVtlZmZlY3QtdHlwZT1cInNocmlua1wiXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9XCJmYWxzZVwiXVtkZXZpY2UtdHlwZT1cIm1vYmlsZVwiXSB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgLmZsdXgtYnJhbmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuZmx1eC1oZWFkZXItbmF2YmFyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bbmF2YmFyLXR5cGU9XCJleHBhbmRlZFwiXVtlZmZlY3QtdHlwZT1cInB1c2hcIl1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPVwiZmFsc2VcIl1bZGV2aWNlLXR5cGU9XCJtb2JpbGVcIl0ge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcblxyXG4gIC5mbHV4LWJyYW5kIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmZsdXgtaGVhZGVyLW5hdmJhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMzBweDtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD1cInZlcnRpY2FsXCJdW25hdmJhci10eXBlPVwiY29sbGFwc2VkXCJdW2VmZmVjdC10eXBlPVwib3ZlcmxheVwiXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9XCJmYWxzZVwiXVtkZXZpY2UtdHlwZT1cIm1vYmlsZVwiXSB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgLmZsdXgtYnJhbmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuZmx1eC1oZWFkZXItbmF2YmFyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD1cInZlcnRpY2FsXCJdW25hdmJhci10eXBlPVwiY29sbGFwc2VkXCJdW2VmZmVjdC10eXBlPVwic2hyaW5rXCJdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1cImZhbHNlXCJdW2RldmljZS10eXBlPVwibW9iaWxlXCJdIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAuZmx1eC1icmFuZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5mbHV4LWhlYWRlci1uYXZiYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD1cInZlcnRpY2FsXCJdW25hdmJhci10eXBlPVwiY29sbGFwc2VkXCJdW2VmZmVjdC10eXBlPVwicHVzaFwiXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9XCJmYWxzZVwiXVtkZXZpY2UtdHlwZT1cIm1vYmlsZVwiXSB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgLmZsdXgtYnJhbmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuZmx1eC1oZWFkZXItbmF2YmFyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNTBweDtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD1cInZlcnRpY2FsXCJdW25hdmJhci10eXBlPVwib2ZmY2FudmFzXCJdW2VmZmVjdC10eXBlPVwib3ZlcmxheVwiXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9XCJmYWxzZVwiXVtkZXZpY2UtdHlwZT1cIm1vYmlsZVwiXSB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgLmZsdXgtYnJhbmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuZmx1eC1oZWFkZXItbmF2YmFyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD1cInZlcnRpY2FsXCJdW25hdmJhci10eXBlPVwib2ZmY2FudmFzXCJdW2VmZmVjdC10eXBlPVwic2hyaW5rXCJdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1cImZhbHNlXCJdW2RldmljZS10eXBlPVwibW9iaWxlXCJdIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAuZmx1eC1icmFuZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5mbHV4LWhlYWRlci1uYXZiYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bbmF2YmFyLXR5cGU9XCJvZmZjYW52YXNcIl1bZWZmZWN0LXR5cGU9XCJwdXNoXCJdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1cImZhbHNlXCJdW2RldmljZS10eXBlPVwibW9iaWxlXCJdIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAuZmx1eC1icmFuZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5mbHV4LWhlYWRlci1uYXZiYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMgRG91YmxlIEhlYWRlciBvbiBNb2JpbGUgU3R5bGUgQ2xvc2UgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG5AbWl4aW4gaGVhZGVyQ29sb3JUaGVtZSgkdGhlbWUtbmFtZSwgJGJyYW5kLWktYmcsICRoZWFkZXItYmcsICRicmFuZC1iZywgJGJyYW5kLWNvbG9yLCAkYnJhbmQtYm9yZGVyLWNvbG9yLCAkc2lkZWJhclRvZ2dsZS1iZywgJHNpZGViYXJUb2dnbGUtY29sb3IsXHJcbiAgJHNpZGViYXJUb2dnbGUtYmctb25Ib3ZlciwgJHNpZGViYXJUb2dnbGUtY29sb3Itb25Ib3ZlciwgJHRleHQtY29sb3IsICR0ZXh0LWNvbG9yLWhvdmVyLCAkcmlnaHQtaGVhZGVyLWxpbmstYmcsICRyaWdodC1oZWFkZXItaWNvbnMtY29sb3IsXHJcbiAgJHJoLWxpbmstYmctb25ob3ZlciwgJHJoLWxpbmstY29sb3Itb25ob3ZlciwgJHJoLWljb25zLWNvbG9yLW9uaG92ZXIpIHtcclxuXHJcbiAgLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9XCJ2ZXJ0aWNhbFwiXVtuYXZiYXItdHlwZT1cImNvbGxhcHNlZFwiXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9XCJ0cnVlXCJdW2hlYWRlci10aGVtZT0jeyR0aGVtZS1uYW1lfV0ge1xyXG4gICAgLmZsdXgtYnJhbmQge1xyXG4gICAgICBpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYnJhbmQtaS1iZztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT0jeyR0aGVtZS1uYW1lfV0ge1xyXG4gICAgYmFja2dyb3VuZDogJGhlYWRlci1iZztcclxuXHJcbiAgICAuZmx1eC1icmFuZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRicmFuZC1iZztcclxuICAgICAgY29sb3I6ICRicmFuZC1jb2xvcjtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJyYW5kLWJvcmRlci1jb2xvcjtcclxuXHJcbiAgICAgIC5mbHV4LWJyYW5kLWxvZ28ge1xyXG4gICAgICAgIGNvbG9yOiAkYnJhbmQtY29sb3I7XHJcbiAgICAgICAgO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZmx1eC1icmFuZC10ZXh0IHtcclxuICAgICAgICBjb2xvcjogJGJyYW5kLWNvbG9yO1xyXG4gICAgICAgIDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtbGVmdC1oZWFkZXIgLnNpZGViYXJUb2dnbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkc2lkZWJhclRvZ2dsZS1iZztcclxuICAgICAgY29sb3I6ICRzaWRlYmFyVG9nZ2xlLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtbGVmdC1oZWFkZXIgLnNpZGViYXJUb2dnbGU6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkc2lkZWJhclRvZ2dsZS1iZy1vbkhvdmVyO1xyXG4gICAgICBjb2xvcjogJHNpZGViYXJUb2dnbGUtY29sb3Itb25Ib3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LWxlZnQtaGVhZGVyIC5sZWZ0LWhlYWRlci1uYXYgdWwgbGkgYSB7XHJcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LWxlZnQtaGVhZGVyIC5sZWZ0LWhlYWRlci1uYXYgdWwgbGkgYTpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvci1ob3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LXJpZ2h0LWhlYWRlciB1bCBsaSBhIHtcclxuICAgICAgYmFja2dyb3VuZDogJHJpZ2h0LWhlYWRlci1saW5rLWJnO1xyXG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBjb2xvcjogJHJpZ2h0LWhlYWRlci1pY29ucy1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtcmlnaHQtaGVhZGVyIHVsIGxpIGE6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkcmgtbGluay1iZy1vbmhvdmVyO1xyXG4gICAgICBjb2xvcjogJHJoLWxpbmstY29sb3Itb25ob3ZlcjtcclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiAkcmgtaWNvbnMtY29sb3Itb25ob3ZlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5AaW5jbHVkZSBoZWFkZXJDb2xvclRoZW1lKHRoZW1lMSwgI2VjZjBmOCwgI0ZGRiwgI0ZGRiwgIzY3ODA5OCwgI2Y1ZjVmNSwgI2YyZjJmMiwgIzAwN2JmZixcclxuICAjMDA3YmZmLCAjZjJmMmYyLCAjOWU5YTlhLCAjMDA3YmZmLCAjZjJmMmYyLCAjMDA3YmZmLCAjMDA3YmZmLCAjRkZGLCAjRkZGKTtcclxuXHJcbkBpbmNsdWRlIGhlYWRlckNvbG9yVGhlbWUodGhlbWUyLCAjMWMyMzJlLCAjMzU0MDUyLCAjMzU0MDUyLCAjYjRiY2M4LCAjNDg1NDY4LCAjMWMyMzJlLCAjYjRiY2M4LFxyXG4gICNiNGJjYzgsICMxYzIzMmUsICNiNGJjYzgsICNGRkZGRkYsICMxYzIzMmUsICNiNGJjYzgsICNiNGJjYzgsICMxYzIzMmUsICMxYzIzMmUpO1xyXG5cclxuQGluY2x1ZGUgaGVhZGVyQ29sb3JUaGVtZSh0aGVtZTMsICMyZjQ0NzUsICMzZjU0ODUsICMzZjU0ODUsICNkOGUzZmMsICM0YTVmOTAsICMyZjQ0NzUsICNkOGUzZmMsXHJcbiAgI2Q4ZTNmYywgIzJmNDQ3NSwgI2Q4ZTNmYywgI0ZGRkZGRiwgIzJmNDQ3NSwgI2Q4ZTNmYywgI2Q4ZTNmYywgIzJmNDQ3NSwgIzJmNDQ3NSk7XHJcblxyXG5AaW5jbHVkZSBoZWFkZXJDb2xvclRoZW1lKHRoZW1lNCwgIzJiNjRhNCwgIzNjNzViNSwgIzNjNzViNSwgI2I5ZDRmMiwgIzRmODJiYywgIzJiNjRhNCwgI0ZGRixcclxuICAjYjlkNGYyLCAjMmI2NGE0LCAjYjlkNGYyLCAjRkZGRkZGLCAjMmI2NGE0LCAjYjlkNGYyLCAjZDhlM2ZjLCAjMmI2NGE0LCAjMmI2NGE0KTtcclxuXHJcbkBpbmNsdWRlIGhlYWRlckNvbG9yVGhlbWUodGhlbWU1LCAjNGIzMTU0LCAjNTgzYTYzLCAjNTgzYTYzLCAjY2NiYWQyLCAjNWQ0ODY1LCAjNGIzMTU0LCAjY2NiYWQyLFxyXG4gICNjY2JhZDIsICM0YjMxNTQsICNjY2JhZDIsICNGRkZGRkYsICM0YjMxNTQsICNjY2JhZDIsICNjY2JhZDIsICM0YjMxNTQsICM0YjMxNTQpO1xyXG5cclxuQGluY2x1ZGUgaGVhZGVyQ29sb3JUaGVtZSh0aGVtZTYsICNlMWUxZTEsICNlZGVkZWQsICNlZGVkZWQsICM3ODc4NzgsICNlNGU1ZTUsICNlMWUxZTEsICM3ODc4NzgsXHJcbiAgIzc4Nzg3OCwgI2UxZTFlMSwgIzc4Nzg3OCwgIzAwMDAwMCwgI2UxZTFlMSwgIzc4Nzg3OCwgIzc4Nzg3OCwgI0ZGRkZGRiwgI0ZGRkZGRik7XHJcblxyXG5AaW5jbHVkZSBoZWFkZXJDb2xvclRoZW1lKHRoZW1lNywgIzBiOWM4ZiwgIzBhYTY5OSwgIzBhYTY5OSwgI0ZGRkZGRiwgIzFhYjBhMywgIzBiOWM4ZiwgI0ZGRkZGRixcclxuICAjRkZGRkZGLCAjMGI5YzhmLCAjRkZGRkZGLCAjNGIzMTU0LCAjMGI5YzhmLCAjRkZGRkZGLCAjRkZGRkZGLCAjMGI5YzhmLCAjMGI5YzhmKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWl4aW4gbGVmdEhlYWRlclRoZW1lKCR0aGVtZS1uYW1lLCAkYnJhbmQtaS1iZywgJGhlYWRlci1iZywgJGJyYW5kLWJnLCAkYnJhbmQtY29sb3IsICRicmFuZC1ib3JkZXItY29sb3IpIHtcclxuXHJcbiAgLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9XCJ2ZXJ0aWNhbFwiXVtuYXZiYXItdHlwZT1cImNvbGxhcHNlZFwiXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9XCJ0cnVlXCJdW2hlYWRlci10aGVtZT10aGVtZTJdW19uZ2NvbnRlbnQteGNhLWMyXSAuZmx1eC1icmFuZFtfbmdjb250ZW50LXhjYS1jMl0gaVtfbmdjb250ZW50LXhjYS1jMl0ge1xyXG4gICAgYmFja2dyb3VuZDogIzFjMjMyZTtcclxuICB9XHJcblxyXG4gIC5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bbmF2YmFyLXR5cGU9XCJjb2xsYXBzZWRcIl1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPVwidHJ1ZVwiXSB7XHJcbiAgICAuZmx1eC1icmFuZFtsZWZ0LWhlYWRlci10aGVtZT0jeyR0aGVtZS1uYW1lfV0ge1xyXG4gICAgICBpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYnJhbmQtaS1iZztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9XCJ2ZXJ0aWNhbFwiXSAuZmx1eC1icmFuZFtsZWZ0LWhlYWRlci10aGVtZT0jeyR0aGVtZS1uYW1lfV0ge1xyXG4gICAgYmFja2dyb3VuZDogJGJyYW5kLWJnO1xyXG4gICAgY29sb3I6ICRicmFuZC1jb2xvcjtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRicmFuZC1ib3JkZXItY29sb3I7XHJcblxyXG4gICAgLmZsdXgtYnJhbmQtbG9nbyB7XHJcbiAgICAgIGNvbG9yOiAkYnJhbmQtY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsdXgtYnJhbmQtdGV4dCB7XHJcbiAgICAgIGNvbG9yOiAkYnJhbmQtY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQGluY2x1ZGUgbGVmdEhlYWRlclRoZW1lKHRoZW1lMSwgI2VjZjBmOCwgI0ZGRkZGRiwgI0ZGRkZGRiwgIzY3ODA5OCwgI2Y1ZjVmNSk7XHJcbkBpbmNsdWRlIGxlZnRIZWFkZXJUaGVtZSh0aGVtZTIsICMxYzIzMmUsICMzNTQwNTIsICMzNTQwNTIsICNiNGJjYzgsICM0ODU0NjgpO1xyXG5AaW5jbHVkZSBsZWZ0SGVhZGVyVGhlbWUodGhlbWUzLCAjMmY0NDc1LCAjM2Y1NDg1LCAjM2Y1NDg1LCAjZDhlM2ZjLCAjNGE1ZjkwKTtcclxuQGluY2x1ZGUgbGVmdEhlYWRlclRoZW1lKHRoZW1lNCwgIzJiNjRhNCwgIzNjNzViNSwgIzNjNzViNSwgI2I5ZDRmMiwgIzRmODJiYyk7XHJcbkBpbmNsdWRlIGxlZnRIZWFkZXJUaGVtZSh0aGVtZTUsICM0YjMxNTQsICM1ODNhNjMsICM1ODNhNjMsICNjY2JhZDIsICM1ZDQ4NjUpO1xyXG5AaW5jbHVkZSBsZWZ0SGVhZGVyVGhlbWUodGhlbWU2LCAjZTFlMWUxLCAjZWRlZGVkLCAjZWRlZGVkLCAjNzg3ODc4LCAjZTRlNWU1KTtcclxuQGluY2x1ZGUgbGVmdEhlYWRlclRoZW1lKHRoZW1lNywgIzBiOWM4ZiwgIzBhYTY5OSwgIzBhYTY5OSwgI0ZGRkZGRiwgIzFhYjBhMyk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD1cImhvcml6b250YWxcIl1bZGV2aWNlLXR5cGU9XCJtb2JpbGVcIl0ge1xyXG4gIC5mbHV4LWJyYW5kIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXJUb2dnbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAyNTtcclxuICAgIHJpZ2h0OiA3cHg7XHJcbiAgfVxyXG5cclxuICAubGVmdC1oZWFkZXItbmF2IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZmx1eC1yaWdodC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG59XHJcbiIsIi5mbHV4LWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uZmx1eC1oZWFkZXI6YWZ0ZXIsXG4uZmx1eC1oZWFkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uZmx1eC1icmFuZCB7XG4gIHdpZHRoOiAyMzBweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0OXB4O1xuICB6LWluZGV4OiAxMDI1O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cbi5mbHV4LWJyYW5kIC5mbHV4LWJyYW5kLWxvZ28ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbn1cbi5mbHV4LWJyYW5kIC5mbHV4LWJyYW5kLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZmx1eC1oZWFkZXItbmF2YmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDIzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA2cHggMTBweDtcbn1cbi5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtbGVmdC1oZWFkZXIge1xuICBmbG9hdDogbGVmdDtcbn1cbi5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtbGVmdC1oZWFkZXIgLnNpZGViYXJUb2dnbGUge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtbGVmdC1oZWFkZXIgLmxlZnQtaGVhZGVyLW5hdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtbGVmdC1oZWFkZXIgLmxlZnQtaGVhZGVyLW5hdiB1bCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LWxlZnQtaGVhZGVyIC5sZWZ0LWhlYWRlci1uYXYgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1sZWZ0LWhlYWRlciAubGVmdC1oZWFkZXItbmF2IHVsIGxpIGEge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtcmlnaHQtaGVhZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogOHB4IDBweDtcbn1cbi5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtcmlnaHQtaGVhZGVyIHVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtcmlnaHQtaGVhZGVyIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMCA0cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtcmlnaHQtaGVhZGVyIHVsIGxpIGEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtcmlnaHQtaGVhZGVyIHVsIGxpIGEgaSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWV4cGFuZGVkXSAuZmx1eC1icmFuZCB7XG4gIHdpZHRoOiAyMzBweDtcbiAgbGVmdDogMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9ZXhwYW5kZWRdIC5mbHV4LWhlYWRlci1uYXZiYXIge1xuICBtYXJnaW4tbGVmdDogMjMwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWV4cGFuZGVkXVtlZmZlY3QtdHlwZT1vdmVybGF5XVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9dHJ1ZV0gLmZsdXgtaGVhZGVyLW5hdmJhciB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1leHBhbmRlZF1bZWZmZWN0LXR5cGU9c2hyaW5rXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9dHJ1ZV0gLmZsdXgtaGVhZGVyLW5hdmJhciB7XG4gIG1hcmdpbi1sZWZ0OiAyMzBweDtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWV4cGFuZGVkXVtlZmZlY3QtdHlwZT1wdXNoXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9dHJ1ZV0gLmZsdXgtaGVhZGVyLW5hdmJhciB7XG4gIG1hcmdpbi1sZWZ0OiAyMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMjMwcHg7XG59XG5cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1mYWxzZV0gLmZsdXgtYnJhbmQge1xuICB3aWR0aDogMjMwcHg7XG59XG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9ZmFsc2VdIC5mbHV4LWhlYWRlci1uYXZiYXIge1xuICBtYXJnaW4tbGVmdDogMjMwcHg7XG59XG5cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdW2VmZmVjdC10eXBlPW92ZXJsYXldW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj10cnVlXSAuZmx1eC1oZWFkZXItbmF2YmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF1bZWZmZWN0LXR5cGU9c2hyaW5rXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9dHJ1ZV0gLmZsdXgtaGVhZGVyLW5hdmJhciB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXVtlZmZlY3QtdHlwZT1wdXNoXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9dHJ1ZV0gLmZsdXgtaGVhZGVyLW5hdmJhciB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IC01MHB4O1xufVxuXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9dHJ1ZV0gLmZsdXgtYnJhbmQge1xuICB3aWR0aDogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9dHJ1ZV0gLmZsdXgtYnJhbmQgaSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPXRydWVdIC5mbHV4LWhlYWRlci1uYXZiYXIge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9dHJ1ZV0gLmZsdXgtYnJhbmQtdGV4dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj10cnVlXSAuZmx1eC1icmFuZC1sb2dvIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPW9mZmNhbnZhc11bZWZmZWN0LXR5cGU9b3ZlcmxheV1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPXRydWVdIC5mbHV4LWhlYWRlci1uYXZiYXIge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9b2ZmY2FudmFzXVtlZmZlY3QtdHlwZT1zaHJpbmtdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj10cnVlXSAuZmx1eC1oZWFkZXItbmF2YmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPW9mZmNhbnZhc11bZWZmZWN0LXR5cGU9cHVzaF1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPXRydWVdIC5mbHV4LWhlYWRlci1uYXZiYXIge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9b2ZmY2FudmFzXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9dHJ1ZV0gLmZsdXgtYnJhbmQge1xuICB3aWR0aDogNTBweDtcbiAgbGVmdDogLTIzMHB4O1xufVxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPW9mZmNhbnZhc11bY29sbGFwc2VkLWxlZnQtaGVhZGVyPXRydWVdIC5mbHV4LWhlYWRlci1uYXZiYXIge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9b2ZmY2FudmFzXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9ZmFsc2VdIC5mbHV4LWJyYW5kIHtcbiAgd2lkdGg6IDIzMHB4O1xuICBsZWZ0OiAwcHg7XG59XG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9b2ZmY2FudmFzXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9ZmFsc2VdIC5mbHV4LWhlYWRlci1uYXZiYXIge1xuICBtYXJnaW4tbGVmdDogMjMwcHg7XG59XG5cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1vZmZjYW52YXNdIC5mbHV4LWJyYW5kIHtcbiAgd2lkdGg6IDIzMHB4O1xuICBsZWZ0OiAtMjMwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG59XG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9b2ZmY2FudmFzXSAuZmx1eC1oZWFkZXItbmF2YmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWV4cGFuZGVkXVtlZmZlY3QtdHlwZT1vdmVybGF5XVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9ZmFsc2VdW2RldmljZS10eXBlPW1vYmlsZV0ge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWV4cGFuZGVkXVtlZmZlY3QtdHlwZT1vdmVybGF5XVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9ZmFsc2VdW2RldmljZS10eXBlPW1vYmlsZV0gLmZsdXgtYnJhbmQge1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9ZXhwYW5kZWRdW2VmZmVjdC10eXBlPW92ZXJsYXldW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1mYWxzZV1bZGV2aWNlLXR5cGU9bW9iaWxlXSAuZmx1eC1oZWFkZXItbmF2YmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWV4cGFuZGVkXVtlZmZlY3QtdHlwZT1zaHJpbmtdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1mYWxzZV1bZGV2aWNlLXR5cGU9bW9iaWxlXSB7XG4gIGhlaWdodDogMTAwcHg7XG59XG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9ZXhwYW5kZWRdW2VmZmVjdC10eXBlPXNocmlua11bY29sbGFwc2VkLWxlZnQtaGVhZGVyPWZhbHNlXVtkZXZpY2UtdHlwZT1tb2JpbGVdIC5mbHV4LWJyYW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWV4cGFuZGVkXVtlZmZlY3QtdHlwZT1zaHJpbmtdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1mYWxzZV1bZGV2aWNlLXR5cGU9bW9iaWxlXSAuZmx1eC1oZWFkZXItbmF2YmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDIzMHB4O1xufVxuXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9ZXhwYW5kZWRdW2VmZmVjdC10eXBlPXB1c2hdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1mYWxzZV1bZGV2aWNlLXR5cGU9bW9iaWxlXSB7XG4gIGhlaWdodDogMTAwcHg7XG59XG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9ZXhwYW5kZWRdW2VmZmVjdC10eXBlPXB1c2hdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1mYWxzZV1bZGV2aWNlLXR5cGU9bW9iaWxlXSAuZmx1eC1icmFuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1leHBhbmRlZF1bZWZmZWN0LXR5cGU9cHVzaF1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPWZhbHNlXVtkZXZpY2UtdHlwZT1tb2JpbGVdIC5mbHV4LWhlYWRlci1uYXZiYXIge1xuICBtYXJnaW4tbGVmdDogMjMwcHg7XG4gIG1hcmdpbi1yaWdodDogLTIzMHB4O1xufVxuXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXVtlZmZlY3QtdHlwZT1vdmVybGF5XVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9ZmFsc2VdW2RldmljZS10eXBlPW1vYmlsZV0ge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF1bZWZmZWN0LXR5cGU9b3ZlcmxheV1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPWZhbHNlXVtkZXZpY2UtdHlwZT1tb2JpbGVdIC5mbHV4LWJyYW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdW2VmZmVjdC10eXBlPW92ZXJsYXldW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1mYWxzZV1bZGV2aWNlLXR5cGU9bW9iaWxlXSAuZmx1eC1oZWFkZXItbmF2YmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF1bZWZmZWN0LXR5cGU9c2hyaW5rXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9ZmFsc2VdW2RldmljZS10eXBlPW1vYmlsZV0ge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF1bZWZmZWN0LXR5cGU9c2hyaW5rXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9ZmFsc2VdW2RldmljZS10eXBlPW1vYmlsZV0gLmZsdXgtYnJhbmQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF1bZWZmZWN0LXR5cGU9c2hyaW5rXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9ZmFsc2VdW2RldmljZS10eXBlPW1vYmlsZV0gLmZsdXgtaGVhZGVyLW5hdmJhciB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXVtlZmZlY3QtdHlwZT1wdXNoXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9ZmFsc2VdW2RldmljZS10eXBlPW1vYmlsZV0ge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF1bZWZmZWN0LXR5cGU9cHVzaF1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPWZhbHNlXVtkZXZpY2UtdHlwZT1tb2JpbGVdIC5mbHV4LWJyYW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdW2VmZmVjdC10eXBlPXB1c2hdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1mYWxzZV1bZGV2aWNlLXR5cGU9bW9iaWxlXSAuZmx1eC1oZWFkZXItbmF2YmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogLTUwcHg7XG59XG5cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1vZmZjYW52YXNdW2VmZmVjdC10eXBlPW92ZXJsYXldW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1mYWxzZV1bZGV2aWNlLXR5cGU9bW9iaWxlXSB7XG4gIGhlaWdodDogMTAwcHg7XG59XG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9b2ZmY2FudmFzXVtlZmZlY3QtdHlwZT1vdmVybGF5XVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9ZmFsc2VdW2RldmljZS10eXBlPW1vYmlsZV0gLmZsdXgtYnJhbmQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPW9mZmNhbnZhc11bZWZmZWN0LXR5cGU9b3ZlcmxheV1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPWZhbHNlXVtkZXZpY2UtdHlwZT1tb2JpbGVdIC5mbHV4LWhlYWRlci1uYXZiYXIge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9b2ZmY2FudmFzXVtlZmZlY3QtdHlwZT1zaHJpbmtdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1mYWxzZV1bZGV2aWNlLXR5cGU9bW9iaWxlXSB7XG4gIGhlaWdodDogMTAwcHg7XG59XG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9b2ZmY2FudmFzXVtlZmZlY3QtdHlwZT1zaHJpbmtdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1mYWxzZV1bZGV2aWNlLXR5cGU9bW9iaWxlXSAuZmx1eC1icmFuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9b2ZmY2FudmFzXVtlZmZlY3QtdHlwZT1zaHJpbmtdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1mYWxzZV1bZGV2aWNlLXR5cGU9bW9iaWxlXSAuZmx1eC1oZWFkZXItbmF2YmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPW9mZmNhbnZhc11bZWZmZWN0LXR5cGU9cHVzaF1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPWZhbHNlXVtkZXZpY2UtdHlwZT1tb2JpbGVdIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1vZmZjYW52YXNdW2VmZmVjdC10eXBlPXB1c2hdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj1mYWxzZV1bZGV2aWNlLXR5cGU9bW9iaWxlXSAuZmx1eC1icmFuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9b2ZmY2FudmFzXVtlZmZlY3QtdHlwZT1wdXNoXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9ZmFsc2VdW2RldmljZS10eXBlPW1vYmlsZV0gLmZsdXgtaGVhZGVyLW5hdmJhciB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj10cnVlXVtoZWFkZXItdGhlbWU9dGhlbWUxXSAuZmx1eC1icmFuZCBpIHtcbiAgYmFja2dyb3VuZDogI2VjZjBmODtcbn1cblxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTFdIHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWUxXSAuZmx1eC1icmFuZCB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGNvbG9yOiAjNjc4MDk4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZjVmNWY1O1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTFdIC5mbHV4LWJyYW5kIC5mbHV4LWJyYW5kLWxvZ28ge1xuICBjb2xvcjogIzY3ODA5ODtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWUxXSAuZmx1eC1icmFuZCAuZmx1eC1icmFuZC10ZXh0IHtcbiAgY29sb3I6ICM2NzgwOTg7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lMV0gLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1sZWZ0LWhlYWRlciAuc2lkZWJhclRvZ2dsZSB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTFdIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtbGVmdC1oZWFkZXIgLnNpZGViYXJUb2dnbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICBjb2xvcjogI2YyZjJmMjtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWUxXSAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LWxlZnQtaGVhZGVyIC5sZWZ0LWhlYWRlci1uYXYgdWwgbGkgYSB7XG4gIGNvbG9yOiAjOWU5YTlhO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTFdIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtbGVmdC1oZWFkZXIgLmxlZnQtaGVhZGVyLW5hdiB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lMV0gLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1yaWdodC1oZWFkZXIgdWwgbGkgYSB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGNvbG9yOiAjOWU5YTlhO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTFdIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtcmlnaHQtaGVhZGVyIHVsIGxpIGEgaSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTFdIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtcmlnaHQtaGVhZGVyIHVsIGxpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICBjb2xvcjogI0ZGRjtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWUxXSAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LXJpZ2h0LWhlYWRlciB1bCBsaSBhOmhvdmVyIGkge1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPXRydWVdW2hlYWRlci10aGVtZT10aGVtZTJdIC5mbHV4LWJyYW5kIGkge1xuICBiYWNrZ3JvdW5kOiAjMWMyMzJlO1xufVxuXG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lMl0ge1xuICBiYWNrZ3JvdW5kOiAjMzU0MDUyO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTJdIC5mbHV4LWJyYW5kIHtcbiAgYmFja2dyb3VuZDogIzM1NDA1MjtcbiAgY29sb3I6ICNiNGJjYzg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM0ODU0Njg7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lMl0gLmZsdXgtYnJhbmQgLmZsdXgtYnJhbmQtbG9nbyB7XG4gIGNvbG9yOiAjYjRiY2M4O1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTJdIC5mbHV4LWJyYW5kIC5mbHV4LWJyYW5kLXRleHQge1xuICBjb2xvcjogI2I0YmNjODtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWUyXSAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LWxlZnQtaGVhZGVyIC5zaWRlYmFyVG9nZ2xlIHtcbiAgYmFja2dyb3VuZDogIzFjMjMyZTtcbiAgY29sb3I6ICNiNGJjYzg7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lMl0gLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1sZWZ0LWhlYWRlciAuc2lkZWJhclRvZ2dsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNiNGJjYzg7XG4gIGNvbG9yOiAjMWMyMzJlO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTJdIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtbGVmdC1oZWFkZXIgLmxlZnQtaGVhZGVyLW5hdiB1bCBsaSBhIHtcbiAgY29sb3I6ICNiNGJjYzg7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lMl0gLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1sZWZ0LWhlYWRlciAubGVmdC1oZWFkZXItbmF2IHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWUyXSAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LXJpZ2h0LWhlYWRlciB1bCBsaSBhIHtcbiAgYmFja2dyb3VuZDogIzFjMjMyZTtcbiAgY29sb3I6ICNiNGJjYzg7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lMl0gLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1yaWdodC1oZWFkZXIgdWwgbGkgYSBpIHtcbiAgY29sb3I6ICNiNGJjYzg7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lMl0gLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1yaWdodC1oZWFkZXIgdWwgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNiNGJjYzg7XG4gIGNvbG9yOiAjMWMyMzJlO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTJdIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtcmlnaHQtaGVhZGVyIHVsIGxpIGE6aG92ZXIgaSB7XG4gIGNvbG9yOiAjMWMyMzJlO1xufVxuXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9dHJ1ZV1baGVhZGVyLXRoZW1lPXRoZW1lM10gLmZsdXgtYnJhbmQgaSB7XG4gIGJhY2tncm91bmQ6ICMyZjQ0NzU7XG59XG5cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWUzXSB7XG4gIGJhY2tncm91bmQ6ICMzZjU0ODU7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lM10gLmZsdXgtYnJhbmQge1xuICBiYWNrZ3JvdW5kOiAjM2Y1NDg1O1xuICBjb2xvcjogI2Q4ZTNmYztcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzRhNWY5MDtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWUzXSAuZmx1eC1icmFuZCAuZmx1eC1icmFuZC1sb2dvIHtcbiAgY29sb3I6ICNkOGUzZmM7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lM10gLmZsdXgtYnJhbmQgLmZsdXgtYnJhbmQtdGV4dCB7XG4gIGNvbG9yOiAjZDhlM2ZjO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTNdIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtbGVmdC1oZWFkZXIgLnNpZGViYXJUb2dnbGUge1xuICBiYWNrZ3JvdW5kOiAjMmY0NDc1O1xuICBjb2xvcjogI2Q4ZTNmYztcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWUzXSAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LWxlZnQtaGVhZGVyIC5zaWRlYmFyVG9nZ2xlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Q4ZTNmYztcbiAgY29sb3I6ICMyZjQ0NzU7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lM10gLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1sZWZ0LWhlYWRlciAubGVmdC1oZWFkZXItbmF2IHVsIGxpIGEge1xuICBjb2xvcjogI2Q4ZTNmYztcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWUzXSAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LWxlZnQtaGVhZGVyIC5sZWZ0LWhlYWRlci1uYXYgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTNdIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtcmlnaHQtaGVhZGVyIHVsIGxpIGEge1xuICBiYWNrZ3JvdW5kOiAjMmY0NDc1O1xuICBjb2xvcjogI2Q4ZTNmYztcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWUzXSAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LXJpZ2h0LWhlYWRlciB1bCBsaSBhIGkge1xuICBjb2xvcjogI2Q4ZTNmYztcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWUzXSAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LXJpZ2h0LWhlYWRlciB1bCBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Q4ZTNmYztcbiAgY29sb3I6ICMyZjQ0NzU7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lM10gLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1yaWdodC1oZWFkZXIgdWwgbGkgYTpob3ZlciBpIHtcbiAgY29sb3I6ICMyZjQ0NzU7XG59XG5cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj10cnVlXVtoZWFkZXItdGhlbWU9dGhlbWU0XSAuZmx1eC1icmFuZCBpIHtcbiAgYmFja2dyb3VuZDogIzJiNjRhNDtcbn1cblxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTRdIHtcbiAgYmFja2dyb3VuZDogIzNjNzViNTtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWU0XSAuZmx1eC1icmFuZCB7XG4gIGJhY2tncm91bmQ6ICMzYzc1YjU7XG4gIGNvbG9yOiAjYjlkNGYyO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNGY4MmJjO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTRdIC5mbHV4LWJyYW5kIC5mbHV4LWJyYW5kLWxvZ28ge1xuICBjb2xvcjogI2I5ZDRmMjtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWU0XSAuZmx1eC1icmFuZCAuZmx1eC1icmFuZC10ZXh0IHtcbiAgY29sb3I6ICNiOWQ0ZjI7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lNF0gLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1sZWZ0LWhlYWRlciAuc2lkZWJhclRvZ2dsZSB7XG4gIGJhY2tncm91bmQ6ICMyYjY0YTQ7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTRdIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtbGVmdC1oZWFkZXIgLnNpZGViYXJUb2dnbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYjlkNGYyO1xuICBjb2xvcjogIzJiNjRhNDtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWU0XSAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LWxlZnQtaGVhZGVyIC5sZWZ0LWhlYWRlci1uYXYgdWwgbGkgYSB7XG4gIGNvbG9yOiAjYjlkNGYyO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTRdIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtbGVmdC1oZWFkZXIgLmxlZnQtaGVhZGVyLW5hdiB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lNF0gLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1yaWdodC1oZWFkZXIgdWwgbGkgYSB7XG4gIGJhY2tncm91bmQ6ICMyYjY0YTQ7XG4gIGNvbG9yOiAjYjlkNGYyO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTRdIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtcmlnaHQtaGVhZGVyIHVsIGxpIGEgaSB7XG4gIGNvbG9yOiAjYjlkNGYyO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTRdIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtcmlnaHQtaGVhZGVyIHVsIGxpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZDhlM2ZjO1xuICBjb2xvcjogIzJiNjRhNDtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWU0XSAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LXJpZ2h0LWhlYWRlciB1bCBsaSBhOmhvdmVyIGkge1xuICBjb2xvcjogIzJiNjRhNDtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPXRydWVdW2hlYWRlci10aGVtZT10aGVtZTVdIC5mbHV4LWJyYW5kIGkge1xuICBiYWNrZ3JvdW5kOiAjNGIzMTU0O1xufVxuXG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lNV0ge1xuICBiYWNrZ3JvdW5kOiAjNTgzYTYzO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTVdIC5mbHV4LWJyYW5kIHtcbiAgYmFja2dyb3VuZDogIzU4M2E2MztcbiAgY29sb3I6ICNjY2JhZDI7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM1ZDQ4NjU7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lNV0gLmZsdXgtYnJhbmQgLmZsdXgtYnJhbmQtbG9nbyB7XG4gIGNvbG9yOiAjY2NiYWQyO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTVdIC5mbHV4LWJyYW5kIC5mbHV4LWJyYW5kLXRleHQge1xuICBjb2xvcjogI2NjYmFkMjtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWU1XSAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LWxlZnQtaGVhZGVyIC5zaWRlYmFyVG9nZ2xlIHtcbiAgYmFja2dyb3VuZDogIzRiMzE1NDtcbiAgY29sb3I6ICNjY2JhZDI7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lNV0gLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1sZWZ0LWhlYWRlciAuc2lkZWJhclRvZ2dsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjY2JhZDI7XG4gIGNvbG9yOiAjNGIzMTU0O1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTVdIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtbGVmdC1oZWFkZXIgLmxlZnQtaGVhZGVyLW5hdiB1bCBsaSBhIHtcbiAgY29sb3I6ICNjY2JhZDI7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lNV0gLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1sZWZ0LWhlYWRlciAubGVmdC1oZWFkZXItbmF2IHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWU1XSAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LXJpZ2h0LWhlYWRlciB1bCBsaSBhIHtcbiAgYmFja2dyb3VuZDogIzRiMzE1NDtcbiAgY29sb3I6ICNjY2JhZDI7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lNV0gLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1yaWdodC1oZWFkZXIgdWwgbGkgYSBpIHtcbiAgY29sb3I6ICNjY2JhZDI7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lNV0gLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1yaWdodC1oZWFkZXIgdWwgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjY2JhZDI7XG4gIGNvbG9yOiAjNGIzMTU0O1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTVdIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtcmlnaHQtaGVhZGVyIHVsIGxpIGE6aG92ZXIgaSB7XG4gIGNvbG9yOiAjNGIzMTU0O1xufVxuXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9dHJ1ZV1baGVhZGVyLXRoZW1lPXRoZW1lNl0gLmZsdXgtYnJhbmQgaSB7XG4gIGJhY2tncm91bmQ6ICNlMWUxZTE7XG59XG5cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWU2XSB7XG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lNl0gLmZsdXgtYnJhbmQge1xuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xuICBjb2xvcjogIzc4Nzg3ODtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2U0ZTVlNTtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWU2XSAuZmx1eC1icmFuZCAuZmx1eC1icmFuZC1sb2dvIHtcbiAgY29sb3I6ICM3ODc4Nzg7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lNl0gLmZsdXgtYnJhbmQgLmZsdXgtYnJhbmQtdGV4dCB7XG4gIGNvbG9yOiAjNzg3ODc4O1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTZdIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtbGVmdC1oZWFkZXIgLnNpZGViYXJUb2dnbGUge1xuICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xuICBjb2xvcjogIzc4Nzg3ODtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWU2XSAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LWxlZnQtaGVhZGVyIC5zaWRlYmFyVG9nZ2xlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzc4Nzg3ODtcbiAgY29sb3I6ICNlMWUxZTE7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lNl0gLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1sZWZ0LWhlYWRlciAubGVmdC1oZWFkZXItbmF2IHVsIGxpIGEge1xuICBjb2xvcjogIzc4Nzg3ODtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWU2XSAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LWxlZnQtaGVhZGVyIC5sZWZ0LWhlYWRlci1uYXYgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTZdIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtcmlnaHQtaGVhZGVyIHVsIGxpIGEge1xuICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xuICBjb2xvcjogIzc4Nzg3ODtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWU2XSAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LXJpZ2h0LWhlYWRlciB1bCBsaSBhIGkge1xuICBjb2xvcjogIzc4Nzg3ODtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWU2XSAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LXJpZ2h0LWhlYWRlciB1bCBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzc4Nzg3ODtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lNl0gLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1yaWdodC1oZWFkZXIgdWwgbGkgYTpob3ZlciBpIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdW2NvbGxhcHNlZC1sZWZ0LWhlYWRlcj10cnVlXVtoZWFkZXItdGhlbWU9dGhlbWU3XSAuZmx1eC1icmFuZCBpIHtcbiAgYmFja2dyb3VuZDogIzBiOWM4Zjtcbn1cblxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTddIHtcbiAgYmFja2dyb3VuZDogIzBhYTY5OTtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWU3XSAuZmx1eC1icmFuZCB7XG4gIGJhY2tncm91bmQ6ICMwYWE2OTk7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMWFiMGEzO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTddIC5mbHV4LWJyYW5kIC5mbHV4LWJyYW5kLWxvZ28ge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWU3XSAuZmx1eC1icmFuZCAuZmx1eC1icmFuZC10ZXh0IHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lN10gLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1sZWZ0LWhlYWRlciAuc2lkZWJhclRvZ2dsZSB7XG4gIGJhY2tncm91bmQ6ICMwYjljOGY7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTddIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtbGVmdC1oZWFkZXIgLnNpZGViYXJUb2dnbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBjb2xvcjogIzBiOWM4Zjtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWU3XSAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LWxlZnQtaGVhZGVyIC5sZWZ0LWhlYWRlci1uYXYgdWwgbGkgYSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTddIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtbGVmdC1oZWFkZXIgLmxlZnQtaGVhZGVyLW5hdiB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICM0YjMxNTQ7XG59XG4uZmx1eC1oZWFkZXJbaGVhZGVyLXRoZW1lPXRoZW1lN10gLmZsdXgtaGVhZGVyLW5hdmJhciAuZmx1eC1yaWdodC1oZWFkZXIgdWwgbGkgYSB7XG4gIGJhY2tncm91bmQ6ICMwYjljOGY7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTddIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtcmlnaHQtaGVhZGVyIHVsIGxpIGEgaSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtaGVhZGVyW2hlYWRlci10aGVtZT10aGVtZTddIC5mbHV4LWhlYWRlci1uYXZiYXIgLmZsdXgtcmlnaHQtaGVhZGVyIHVsIGxpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBjb2xvcjogIzBiOWM4Zjtcbn1cbi5mbHV4LWhlYWRlcltoZWFkZXItdGhlbWU9dGhlbWU3XSAuZmx1eC1oZWFkZXItbmF2YmFyIC5mbHV4LXJpZ2h0LWhlYWRlciB1bCBsaSBhOmhvdmVyIGkge1xuICBjb2xvcjogIzBiOWM4Zjtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPXRydWVdW2hlYWRlci10aGVtZT10aGVtZTJdW19uZ2NvbnRlbnQteGNhLWMyXSAuZmx1eC1icmFuZFtfbmdjb250ZW50LXhjYS1jMl0gaVtfbmdjb250ZW50LXhjYS1jMl0ge1xuICBiYWNrZ3JvdW5kOiAjMWMyMzJlO1xufVxuXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9dHJ1ZV0gLmZsdXgtYnJhbmRbbGVmdC1oZWFkZXItdGhlbWU9dGhlbWUxXSBpIHtcbiAgYmFja2dyb3VuZDogI2VjZjBmODtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdIC5mbHV4LWJyYW5kW2xlZnQtaGVhZGVyLXRoZW1lPXRoZW1lMV0ge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBjb2xvcjogIzY3ODA5ODtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2Y1ZjVmNTtcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXSAuZmx1eC1icmFuZFtsZWZ0LWhlYWRlci10aGVtZT10aGVtZTFdIC5mbHV4LWJyYW5kLWxvZ28ge1xuICBjb2xvcjogIzY3ODA5ODtcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXSAuZmx1eC1icmFuZFtsZWZ0LWhlYWRlci10aGVtZT10aGVtZTFdIC5mbHV4LWJyYW5kLXRleHQge1xuICBjb2xvcjogIzY3ODA5ODtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPXRydWVdW2hlYWRlci10aGVtZT10aGVtZTJdW19uZ2NvbnRlbnQteGNhLWMyXSAuZmx1eC1icmFuZFtfbmdjb250ZW50LXhjYS1jMl0gaVtfbmdjb250ZW50LXhjYS1jMl0ge1xuICBiYWNrZ3JvdW5kOiAjMWMyMzJlO1xufVxuXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9dHJ1ZV0gLmZsdXgtYnJhbmRbbGVmdC1oZWFkZXItdGhlbWU9dGhlbWUyXSBpIHtcbiAgYmFja2dyb3VuZDogIzFjMjMyZTtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdIC5mbHV4LWJyYW5kW2xlZnQtaGVhZGVyLXRoZW1lPXRoZW1lMl0ge1xuICBiYWNrZ3JvdW5kOiAjMzU0MDUyO1xuICBjb2xvcjogI2I0YmNjODtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzQ4NTQ2ODtcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXSAuZmx1eC1icmFuZFtsZWZ0LWhlYWRlci10aGVtZT10aGVtZTJdIC5mbHV4LWJyYW5kLWxvZ28ge1xuICBjb2xvcjogI2I0YmNjODtcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXSAuZmx1eC1icmFuZFtsZWZ0LWhlYWRlci10aGVtZT10aGVtZTJdIC5mbHV4LWJyYW5kLXRleHQge1xuICBjb2xvcjogI2I0YmNjODtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPXRydWVdW2hlYWRlci10aGVtZT10aGVtZTJdW19uZ2NvbnRlbnQteGNhLWMyXSAuZmx1eC1icmFuZFtfbmdjb250ZW50LXhjYS1jMl0gaVtfbmdjb250ZW50LXhjYS1jMl0ge1xuICBiYWNrZ3JvdW5kOiAjMWMyMzJlO1xufVxuXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9dHJ1ZV0gLmZsdXgtYnJhbmRbbGVmdC1oZWFkZXItdGhlbWU9dGhlbWUzXSBpIHtcbiAgYmFja2dyb3VuZDogIzJmNDQ3NTtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdIC5mbHV4LWJyYW5kW2xlZnQtaGVhZGVyLXRoZW1lPXRoZW1lM10ge1xuICBiYWNrZ3JvdW5kOiAjM2Y1NDg1O1xuICBjb2xvcjogI2Q4ZTNmYztcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzRhNWY5MDtcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXSAuZmx1eC1icmFuZFtsZWZ0LWhlYWRlci10aGVtZT10aGVtZTNdIC5mbHV4LWJyYW5kLWxvZ28ge1xuICBjb2xvcjogI2Q4ZTNmYztcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXSAuZmx1eC1icmFuZFtsZWZ0LWhlYWRlci10aGVtZT10aGVtZTNdIC5mbHV4LWJyYW5kLXRleHQge1xuICBjb2xvcjogI2Q4ZTNmYztcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPXRydWVdW2hlYWRlci10aGVtZT10aGVtZTJdW19uZ2NvbnRlbnQteGNhLWMyXSAuZmx1eC1icmFuZFtfbmdjb250ZW50LXhjYS1jMl0gaVtfbmdjb250ZW50LXhjYS1jMl0ge1xuICBiYWNrZ3JvdW5kOiAjMWMyMzJlO1xufVxuXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9dHJ1ZV0gLmZsdXgtYnJhbmRbbGVmdC1oZWFkZXItdGhlbWU9dGhlbWU0XSBpIHtcbiAgYmFja2dyb3VuZDogIzJiNjRhNDtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdIC5mbHV4LWJyYW5kW2xlZnQtaGVhZGVyLXRoZW1lPXRoZW1lNF0ge1xuICBiYWNrZ3JvdW5kOiAjM2M3NWI1O1xuICBjb2xvcjogI2I5ZDRmMjtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzRmODJiYztcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXSAuZmx1eC1icmFuZFtsZWZ0LWhlYWRlci10aGVtZT10aGVtZTRdIC5mbHV4LWJyYW5kLWxvZ28ge1xuICBjb2xvcjogI2I5ZDRmMjtcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXSAuZmx1eC1icmFuZFtsZWZ0LWhlYWRlci10aGVtZT10aGVtZTRdIC5mbHV4LWJyYW5kLXRleHQge1xuICBjb2xvcjogI2I5ZDRmMjtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPXRydWVdW2hlYWRlci10aGVtZT10aGVtZTJdW19uZ2NvbnRlbnQteGNhLWMyXSAuZmx1eC1icmFuZFtfbmdjb250ZW50LXhjYS1jMl0gaVtfbmdjb250ZW50LXhjYS1jMl0ge1xuICBiYWNrZ3JvdW5kOiAjMWMyMzJlO1xufVxuXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9dHJ1ZV0gLmZsdXgtYnJhbmRbbGVmdC1oZWFkZXItdGhlbWU9dGhlbWU1XSBpIHtcbiAgYmFja2dyb3VuZDogIzRiMzE1NDtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdIC5mbHV4LWJyYW5kW2xlZnQtaGVhZGVyLXRoZW1lPXRoZW1lNV0ge1xuICBiYWNrZ3JvdW5kOiAjNTgzYTYzO1xuICBjb2xvcjogI2NjYmFkMjtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzVkNDg2NTtcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXSAuZmx1eC1icmFuZFtsZWZ0LWhlYWRlci10aGVtZT10aGVtZTVdIC5mbHV4LWJyYW5kLWxvZ28ge1xuICBjb2xvcjogI2NjYmFkMjtcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXSAuZmx1eC1icmFuZFtsZWZ0LWhlYWRlci10aGVtZT10aGVtZTVdIC5mbHV4LWJyYW5kLXRleHQge1xuICBjb2xvcjogI2NjYmFkMjtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPXRydWVdW2hlYWRlci10aGVtZT10aGVtZTJdW19uZ2NvbnRlbnQteGNhLWMyXSAuZmx1eC1icmFuZFtfbmdjb250ZW50LXhjYS1jMl0gaVtfbmdjb250ZW50LXhjYS1jMl0ge1xuICBiYWNrZ3JvdW5kOiAjMWMyMzJlO1xufVxuXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9dHJ1ZV0gLmZsdXgtYnJhbmRbbGVmdC1oZWFkZXItdGhlbWU9dGhlbWU2XSBpIHtcbiAgYmFja2dyb3VuZDogI2UxZTFlMTtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdIC5mbHV4LWJyYW5kW2xlZnQtaGVhZGVyLXRoZW1lPXRoZW1lNl0ge1xuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xuICBjb2xvcjogIzc4Nzg3ODtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2U0ZTVlNTtcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXSAuZmx1eC1icmFuZFtsZWZ0LWhlYWRlci10aGVtZT10aGVtZTZdIC5mbHV4LWJyYW5kLWxvZ28ge1xuICBjb2xvcjogIzc4Nzg3ODtcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXSAuZmx1eC1icmFuZFtsZWZ0LWhlYWRlci10aGVtZT10aGVtZTZdIC5mbHV4LWJyYW5kLXRleHQge1xuICBjb2xvcjogIzc4Nzg3ODtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF1bY29sbGFwc2VkLWxlZnQtaGVhZGVyPXRydWVdW2hlYWRlci10aGVtZT10aGVtZTJdW19uZ2NvbnRlbnQteGNhLWMyXSAuZmx1eC1icmFuZFtfbmdjb250ZW50LXhjYS1jMl0gaVtfbmdjb250ZW50LXhjYS1jMl0ge1xuICBiYWNrZ3JvdW5kOiAjMWMyMzJlO1xufVxuXG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXVtjb2xsYXBzZWQtbGVmdC1oZWFkZXI9dHJ1ZV0gLmZsdXgtYnJhbmRbbGVmdC1oZWFkZXItdGhlbWU9dGhlbWU3XSBpIHtcbiAgYmFja2dyb3VuZDogIzBiOWM4Zjtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9dmVydGljYWxdIC5mbHV4LWJyYW5kW2xlZnQtaGVhZGVyLXRoZW1lPXRoZW1lN10ge1xuICBiYWNrZ3JvdW5kOiAjMGFhNjk5O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzFhYjBhMztcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXSAuZmx1eC1icmFuZFtsZWZ0LWhlYWRlci10aGVtZT10aGVtZTddIC5mbHV4LWJyYW5kLWxvZ28ge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PXZlcnRpY2FsXSAuZmx1eC1icmFuZFtsZWZ0LWhlYWRlci10aGVtZT10aGVtZTddIC5mbHV4LWJyYW5kLXRleHQge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9bW9iaWxlXSAuZmx1eC1icmFuZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZsdXgtaGVhZGVyW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9bW9iaWxlXSAuc2lkZWJhclRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAyNTtcbiAgcmlnaHQ6IDdweDtcbn1cbi5mbHV4LWhlYWRlcltuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPW1vYmlsZV0gLmxlZnQtaGVhZGVyLW5hdiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZmx1eC1oZWFkZXJbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1tb2JpbGVdIC5mbHV4LXJpZ2h0LWhlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/common/header/header.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/common/header/header.component.ts ***!
    \*********************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppPagesCommonHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/layout.service */
    "./src/app/shared/services/layout.service.ts");

    let HeaderComponent = class HeaderComponent {
      constructor(layoutService) {
        this.layoutService = layoutService;
      }

      ngOnInit() {}

      changeTheToggleStatus() {
        this.layoutService.getToggleStatus();
      }

    };

    HeaderComponent.ctorParameters = () => [{
      type: _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], HeaderComponent.prototype, "navLayout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], HeaderComponent.prototype, "defaultNavbar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], HeaderComponent.prototype, "toggleNavbar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], HeaderComponent.prototype, "toggleStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], HeaderComponent.prototype, "navbarEffect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], HeaderComponent.prototype, "deviceType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], HeaderComponent.prototype, "headerColorTheme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], HeaderComponent.prototype, "leftHeaderColorTheme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], HeaderComponent.prototype, "navbarColorTheme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], HeaderComponent.prototype, "activeNavColorTheme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], HeaderComponent.prototype, "headerHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], HeaderComponent.prototype, "collapsedLeftHeader", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/common/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/pages/common/header/header.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/pages/common/left-panel/left-panel.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/common/left-panel/left-panel.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCommonLeftPanelLeftPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".flux-left-panel[nav-layout=vertical] {\n  position: absolute;\n  min-height: 100%;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  padding-top: 50px;\n  z-index: 1024;\n  font-size: 13px;\n  font-weight: 300;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.flux-left-panel[nav-layout=vertical] ul.menu-list {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n}\n.flux-left-panel[nav-layout=vertical] ul.menu-list > li.menu-item {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  display: block;\n  position: relative;\n}\n.flux-left-panel[nav-layout=vertical] ul.menu-list > li.menu-item.active:after {\n  content: \"\";\n  background: transparent none repeat scroll 0 0;\n  border-bottom: 15px solid transparent;\n  border-right: 10px solid #e9e9e9;\n  border-top: 15px solid transparent;\n  display: block;\n  float: right;\n  height: 0;\n  position: absolute;\n  right: 0;\n  top: 7px;\n  width: 0;\n}\n.flux-left-panel[nav-layout=vertical] ul.menu-list > li.menu-item > a {\n  display: block;\n  font-size: 13px;\n  text-decoration: none;\n  position: relative;\n  text-align: left;\n  padding: 6px 10px;\n  border-bottom: 1px solid;\n}\n.flux-left-panel[nav-layout=vertical] ul.menu-list > li.menu-item > a .flux-mtext {\n  opacity: 1;\n  visibility: visible;\n  position: absolute;\n  top: 10px;\n  white-space: nowrap;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n.flux-left-panel[nav-layout=vertical] ul.menu-list > li.menu-item > a .flux-micon {\n  font-size: 16px;\n  border-radius: 3px;\n  margin-right: 5px;\n  width: 30px;\n  height: 30px;\n  display: inline-table;\n  text-align: center;\n  position: relative;\n  padding-top: 2px;\n  vertical-align: middle;\n  z-index: 1;\n}\n.flux-left-panel[nav-layout=vertical] ul.menu-list > li.menu-item > a .flux-badge {\n  position: absolute;\n  right: 10px;\n  display: inline-block;\n  opacity: 1;\n  visibility: visible;\n  padding: 5px 5px;\n  font-size: 75%;\n  font-weight: 600;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 4px;\n  top: 12px;\n  -webkit-transition: opacity 0.2s linear;\n  transition: opacity 0.2s linear;\n}\n.flux-left-panel[nav-layout=vertical] ul.menu-list > li.menu-item > a .bg-success {\n  background-color: #28a745;\n  color: #FFF;\n}\n.flux-left-panel[nav-layout=vertical] ul.menu-list > li.menu-item > a .bg-danger {\n  background-color: #dc3545;\n  color: #FFF;\n}\n.flux-left-panel[nav-layout=vertical] ul.menu-list > li.menu-item > a .bg-warning {\n  background-color: #ffc107;\n  color: #000;\n}\n.flux-left-panel[nav-layout=vertical] li.menu-item.hasMenu {\n  cursor: pointer;\n  position: relative;\n}\n.flux-left-panel[nav-layout=vertical] li.menu-item.hasMenu ul {\n  display: none;\n  margin: 0px;\n  padding: 10px 0px 10px 0px;\n}\n.flux-left-panel[nav-layout=vertical] li.menu-item.hasMenu ul li {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  display: block;\n}\n.flux-left-panel[nav-layout=vertical] li.menu-item.hasMenu ul li a {\n  border: 0px;\n  text-decoration: none;\n  padding: 2px 10px;\n  display: block;\n}\n.flux-left-panel[nav-layout=vertical] li.menu-item.hasMenu ul li a .flux-micon {\n  font-size: 10px;\n  padding-right: 10px;\n  width: auto;\n  height: auto;\n}\n.flux-left-panel[nav-layout=vertical] li.menu-item.hasMenu ul li a:hover .flux-micon i {\n  border-radius: 100%;\n}\n.flux-left-panel[nav-layout=vertical] li.menu-item.hasMenu ul li.active a .flux-micon i {\n  border-radius: 100%;\n}\n.flux-left-panel[nav-layout=vertical] li.menu-item.hasMenu a .flux-mcaret {\n  opacity: 1;\n  visibility: visible;\n  border: solid;\n  border-width: 0 1px 1px 0;\n  padding: 4px;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  -webkit-transition: all 0.1s linear;\n  transition: all 0.1s linear;\n}\n.flux-left-panel[nav-layout=vertical] li.menu-item.hasMenu.open ul {\n  display: block;\n}\n.flux-left-panel[nav-layout=vertical] li.menu-item.hasMenu.open a .flux-mcaret {\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n::-webkit-scrollbar {\n  width: 7px !important;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 0px;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 0px;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #c1c1c1;\n}\n.flux-left-panel[nav-layout=vertical][navbar-type=expanded] {\n  overflow-y: auto;\n  overflow-x: hidden;\n  width: 230px;\n  left: 0px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.flux-left-panel[nav-layout=vertical][navbar-type=expanded] li.menu-item.hasMenu ul li a {\n  padding-left: 26px;\n}\n.flux-left-panel[nav-layout=vertical][navbar-type=collapsed] {\n  width: 50px;\n}\n.flux-left-panel[nav-layout=vertical][navbar-type=collapsed] ul.menu-list > li.menu-item > a .flux-mtext {\n  opacity: 0;\n  visibility: hidden;\n  left: 55px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.flux-left-panel[nav-layout=vertical][navbar-type=collapsed] ul.menu-list > li.menu-item > a .flux-badge {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all 0.1s linear;\n  transition: all 0.1s linear;\n}\n.flux-left-panel[nav-layout=vertical][navbar-type=collapsed] ul.menu-list > li.menu-item:hover {\n  width: 230px;\n}\n.flux-left-panel[nav-layout=vertical][navbar-type=collapsed] ul.menu-list > li.menu-item:hover > a .flux-mtext {\n  opacity: 1;\n  visibility: visible;\n  white-space: nowrap;\n  -webkit-transition: visibility 0.1s linear;\n  transition: visibility 0.1s linear;\n}\n.flux-left-panel[nav-layout=vertical][navbar-type=collapsed] ul.menu-list > li.menu-item:hover > a .flux-badge {\n  opacity: 1;\n  visibility: visible;\n  -webkit-transition: all 0.1s linear;\n  transition: all 0.1s linear;\n}\n.flux-left-panel[nav-layout=vertical][navbar-type=collapsed] ul.menu-list > li.menu-item.active:hover:after {\n  opacity: 0;\n  visibility: hidden;\n}\n.flux-left-panel[nav-layout=vertical][navbar-type=collapsed] ul.menu-list > li.menu-item.hasMenu > a .flux-mcaret {\n  opacity: 1;\n  visibility: visible;\n  -webkit-transition: opacity 0.1s linear;\n  transition: opacity 0.1s linear;\n}\n.flux-left-panel[nav-layout=vertical][navbar-type=collapsed] ul.menu-list > li.menu-item.hasMenu > a:hover .flux-mcaret {\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n}\n.flux-left-panel[nav-layout=vertical][navbar-type=collapsed] ul.menu-list li.menu-item.hasMenu:hover ul,\n.flux-left-panel[nav-layout=vertical][navbar-type=collapsed] ul.menu-list li.menu-item.hasMenu.open:hover ul {\n  display: block;\n  position: absolute;\n  left: 50px;\n  width: 180px;\n  z-index: 1;\n}\n.flux-left-panel[nav-layout=vertical][navbar-type=collapsed] ul.menu-list li.menu-item.hasMenu.open ul {\n  display: none;\n}\n.flux-left-panel[nav-layout=vertical][navbar-type=offcanvas] {\n  width: 50px;\n  left: -230px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.flux-left-panel[navbar-theme=theme1] {\n  background: #ffffff;\n  color: #678098;\n}\n.flux-left-panel[navbar-theme=theme1] ul.menu-list > li.menu-item:hover {\n  background: #f2f6f9;\n  color: #5c9acf;\n}\n.flux-left-panel[navbar-theme=theme1] ul.menu-list > li.menu-item > a {\n  color: #678098;\n  border-color: #f5f5f5;\n}\n.flux-left-panel[navbar-theme=theme1] ul.menu-list > li.menu-item > a .flux-micon {\n  background: #ecf0f8;\n}\n.flux-left-panel[navbar-theme=theme1] ul.menu-list > li.menu-item > a:hover {\n  background: #f2f6f9;\n  color: #5c9acf;\n}\n.flux-left-panel[navbar-theme=theme1] li.menu-item.hasMenu ul {\n  background: #e4eaf5;\n}\n.flux-left-panel[navbar-theme=theme1] li.menu-item.hasMenu ul li a {\n  color: #666669;\n}\n.flux-left-panel[navbar-theme=theme1] li.menu-item.hasMenu ul li a:hover {\n  color: #5c9acf;\n}\n.flux-left-panel[navbar-theme=theme1] li.menu-item.hasMenu ul li a:hover .flux-micon i {\n  background: #5c9acf;\n  color: #5c9acf;\n}\n.flux-left-panel[navbar-theme=theme1] li.menu-item.hasMenu a .flux-mcaret {\n  border-color: #678098;\n}\n.flux-left-panel[navbar-theme=theme1] li.menu-item.hasMenu a:hover .flux-mcaret {\n  border-color: #5c9acf;\n}\n.flux-left-panel[navbar-theme=theme1] ul.menu-list > li.menu-item.active > a {\n  background: #f2f6f9 !important;\n  color: #5c9acf;\n}\n.flux-left-panel[navbar-theme=theme1] li.menu-item.hasMenu ul li.active a {\n  color: #5c9acf;\n}\n.flux-left-panel[navbar-theme=theme1] li.menu-item.hasMenu ul li.active a .flux-micon i {\n  background: #5c9acf;\n  color: #5c9acf;\n}\n.flux-left-panel[navbar-theme=theme1] li.menu-item.hasMenu.active a .flux-mcaret {\n  border-color: #5c9acf;\n}\n.flux-left-panel[navbar-theme=theme2] {\n  background: #354052;\n  color: #b4bcc8;\n}\n.flux-left-panel[navbar-theme=theme2] ul.menu-list > li.menu-item:hover {\n  background: #2b3544;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme2] ul.menu-list > li.menu-item > a {\n  color: #b4bcc8;\n  border-color: #485468;\n}\n.flux-left-panel[navbar-theme=theme2] ul.menu-list > li.menu-item > a .flux-micon {\n  background: #1c232e;\n}\n.flux-left-panel[navbar-theme=theme2] ul.menu-list > li.menu-item > a:hover {\n  background: #2b3544;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme2] li.menu-item.hasMenu ul {\n  background: #2a3444;\n}\n.flux-left-panel[navbar-theme=theme2] li.menu-item.hasMenu ul li a {\n  color: #b4bcc8;\n}\n.flux-left-panel[navbar-theme=theme2] li.menu-item.hasMenu ul li a:hover {\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme2] li.menu-item.hasMenu ul li a:hover .flux-micon i {\n  background: #FFFFFF;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme2] li.menu-item.hasMenu a .flux-mcaret {\n  border-color: #b4bcc8;\n}\n.flux-left-panel[navbar-theme=theme2] li.menu-item.hasMenu a:hover .flux-mcaret {\n  border-color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme2] ul.menu-list > li.menu-item.active > a {\n  background: #2b3544 !important;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme2] li.menu-item.hasMenu ul li.active a {\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme2] li.menu-item.hasMenu ul li.active a .flux-micon i {\n  background: #FFFFFF;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme2] li.menu-item.hasMenu.active a .flux-mcaret {\n  border-color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme3] {\n  background: #3f5485;\n  color: #d8e3fc;\n}\n.flux-left-panel[navbar-theme=theme3] ul.menu-list > li.menu-item:hover {\n  background: #2f4475;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme3] ul.menu-list > li.menu-item > a {\n  color: #d8e3fc;\n  border-color: #4a5f90;\n}\n.flux-left-panel[navbar-theme=theme3] ul.menu-list > li.menu-item > a .flux-micon {\n  background: #2f4475;\n}\n.flux-left-panel[navbar-theme=theme3] ul.menu-list > li.menu-item > a:hover {\n  background: #2f4475;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme3] li.menu-item.hasMenu ul {\n  background: #2f4475;\n}\n.flux-left-panel[navbar-theme=theme3] li.menu-item.hasMenu ul li a {\n  color: #90a2cc;\n}\n.flux-left-panel[navbar-theme=theme3] li.menu-item.hasMenu ul li a:hover {\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme3] li.menu-item.hasMenu ul li a:hover .flux-micon i {\n  background: #FFFFFF;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme3] li.menu-item.hasMenu a .flux-mcaret {\n  border-color: #d8e3fc;\n}\n.flux-left-panel[navbar-theme=theme3] li.menu-item.hasMenu a:hover .flux-mcaret {\n  border-color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme3] ul.menu-list > li.menu-item.active > a {\n  background: #2f4475 !important;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme3] li.menu-item.hasMenu ul li.active a {\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme3] li.menu-item.hasMenu ul li.active a .flux-micon i {\n  background: #FFFFFF;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme3] li.menu-item.hasMenu.active a .flux-mcaret {\n  border-color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme4] {\n  background: #3c75b5;\n  color: #b9d4f2;\n}\n.flux-left-panel[navbar-theme=theme4] ul.menu-list > li.menu-item:hover {\n  background: #2b64a4;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme4] ul.menu-list > li.menu-item > a {\n  color: #b9d4f2;\n  border-color: #4f82bc;\n}\n.flux-left-panel[navbar-theme=theme4] ul.menu-list > li.menu-item > a .flux-micon {\n  background: #2b64a4;\n}\n.flux-left-panel[navbar-theme=theme4] ul.menu-list > li.menu-item > a:hover {\n  background: #2b64a4;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme4] li.menu-item.hasMenu ul {\n  background: #2b64a4;\n}\n.flux-left-panel[navbar-theme=theme4] li.menu-item.hasMenu ul li a {\n  color: #b9d4f2;\n}\n.flux-left-panel[navbar-theme=theme4] li.menu-item.hasMenu ul li a:hover {\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme4] li.menu-item.hasMenu ul li a:hover .flux-micon i {\n  background: #FFFFFF;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme4] li.menu-item.hasMenu a .flux-mcaret {\n  border-color: #b9d4f2;\n}\n.flux-left-panel[navbar-theme=theme4] li.menu-item.hasMenu a:hover .flux-mcaret {\n  border-color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme4] ul.menu-list > li.menu-item.active > a {\n  background: #2b64a4 !important;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme4] li.menu-item.hasMenu ul li.active a {\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme4] li.menu-item.hasMenu ul li.active a .flux-micon i {\n  background: #FFFFFF;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme4] li.menu-item.hasMenu.active a .flux-mcaret {\n  border-color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme5] {\n  background: #583a63;\n  color: #ccbad2;\n}\n.flux-left-panel[navbar-theme=theme5] ul.menu-list > li.menu-item:hover {\n  background: #4b3154;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme5] ul.menu-list > li.menu-item > a {\n  color: #ccbad2;\n  border-color: #5d4865;\n}\n.flux-left-panel[navbar-theme=theme5] ul.menu-list > li.menu-item > a .flux-micon {\n  background: #4b3154;\n}\n.flux-left-panel[navbar-theme=theme5] ul.menu-list > li.menu-item > a:hover {\n  background: #4b3154;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme5] li.menu-item.hasMenu ul {\n  background: #4b3154;\n}\n.flux-left-panel[navbar-theme=theme5] li.menu-item.hasMenu ul li a {\n  color: #a492aa;\n}\n.flux-left-panel[navbar-theme=theme5] li.menu-item.hasMenu ul li a:hover {\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme5] li.menu-item.hasMenu ul li a:hover .flux-micon i {\n  background: #FFFFFF;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme5] li.menu-item.hasMenu a .flux-mcaret {\n  border-color: #ccbad2;\n}\n.flux-left-panel[navbar-theme=theme5] li.menu-item.hasMenu a:hover .flux-mcaret {\n  border-color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme5] ul.menu-list > li.menu-item.active > a {\n  background: #4b3154 !important;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme5] li.menu-item.hasMenu ul li.active a {\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme5] li.menu-item.hasMenu ul li.active a .flux-micon i {\n  background: #FFFFFF;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme5] li.menu-item.hasMenu.active a .flux-mcaret {\n  border-color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme6] {\n  background: #ededed;\n  color: #787878;\n}\n.flux-left-panel[navbar-theme=theme6] ul.menu-list > li.menu-item:hover {\n  background: #e1e1e1;\n  color: #000000;\n}\n.flux-left-panel[navbar-theme=theme6] ul.menu-list > li.menu-item > a {\n  color: #787878;\n  border-color: #e4e5e5;\n}\n.flux-left-panel[navbar-theme=theme6] ul.menu-list > li.menu-item > a .flux-micon {\n  background: #e1e1e1;\n}\n.flux-left-panel[navbar-theme=theme6] ul.menu-list > li.menu-item > a:hover {\n  background: #e1e1e1;\n  color: #000000;\n}\n.flux-left-panel[navbar-theme=theme6] li.menu-item.hasMenu ul {\n  background: #e1e1e1;\n}\n.flux-left-panel[navbar-theme=theme6] li.menu-item.hasMenu ul li a {\n  color: #787878;\n}\n.flux-left-panel[navbar-theme=theme6] li.menu-item.hasMenu ul li a:hover {\n  color: #000000;\n}\n.flux-left-panel[navbar-theme=theme6] li.menu-item.hasMenu ul li a:hover .flux-micon i {\n  background: #787878;\n  color: #787878;\n}\n.flux-left-panel[navbar-theme=theme6] li.menu-item.hasMenu a .flux-mcaret {\n  border-color: #787878;\n}\n.flux-left-panel[navbar-theme=theme6] li.menu-item.hasMenu a:hover .flux-mcaret {\n  border-color: #000000;\n}\n.flux-left-panel[navbar-theme=theme6] ul.menu-list > li.menu-item.active > a {\n  background: #e1e1e1 !important;\n  color: #000000;\n}\n.flux-left-panel[navbar-theme=theme6] li.menu-item.hasMenu ul li.active a {\n  color: #000000;\n}\n.flux-left-panel[navbar-theme=theme6] li.menu-item.hasMenu ul li.active a .flux-micon i {\n  background: #787878;\n  color: #787878;\n}\n.flux-left-panel[navbar-theme=theme6] li.menu-item.hasMenu.active a .flux-mcaret {\n  border-color: #000000;\n}\n.flux-left-panel[navbar-theme=theme7] {\n  background: #0aa699;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme7] ul.menu-list > li.menu-item:hover {\n  background: #0b9c8f;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme7] ul.menu-list > li.menu-item > a {\n  color: #FFFFFF;\n  border-color: #1ab0a3;\n}\n.flux-left-panel[navbar-theme=theme7] ul.menu-list > li.menu-item > a .flux-micon {\n  background: #0b9c8f;\n}\n.flux-left-panel[navbar-theme=theme7] ul.menu-list > li.menu-item > a:hover {\n  background: #0b9c8f;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme7] li.menu-item.hasMenu ul {\n  background: #0b9c8f;\n}\n.flux-left-panel[navbar-theme=theme7] li.menu-item.hasMenu ul li a {\n  color: #10e3d0;\n}\n.flux-left-panel[navbar-theme=theme7] li.menu-item.hasMenu ul li a:hover {\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme7] li.menu-item.hasMenu ul li a:hover .flux-micon i {\n  background: #FFFFFF;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme7] li.menu-item.hasMenu a .flux-mcaret {\n  border-color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme7] li.menu-item.hasMenu a:hover .flux-mcaret {\n  border-color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme7] ul.menu-list > li.menu-item.active > a {\n  background: #0b9c8f !important;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme7] li.menu-item.hasMenu ul li.active a {\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme7] li.menu-item.hasMenu ul li.active a .flux-micon i {\n  background: #FFFFFF;\n  color: #FFFFFF;\n}\n.flux-left-panel[navbar-theme=theme7] li.menu-item.hasMenu.active a .flux-mcaret {\n  border-color: #FFFFFF;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=desktop],\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] {\n  position: relative;\n  height: 40px !important;\n  z-index: 1024;\n  font-size: 13px;\n  font-weight: 300;\n  padding: 0px;\n  margin: 0px;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=desktop] ul.menu-list,\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] ul.menu-list {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=desktop] ul.menu-list > li.menu-item,\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] ul.menu-list > li.menu-item {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  display: block;\n  position: relative;\n  float: left;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=desktop] ul.menu-list > li.menu-item > a,\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] ul.menu-list > li.menu-item > a {\n  display: block;\n  font-size: 13px;\n  text-decoration: none;\n  position: relative;\n  text-align: center;\n  padding: 0px 10px;\n  line-height: 39px;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=desktop] ul.menu-list > li.menu-item > a .flux-mtext,\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] ul.menu-list > li.menu-item > a .flux-mtext {\n  opacity: 1;\n  visibility: visible;\n  white-space: nowrap;\n  display: inline-block;\n  vertical-align: middle;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=desktop] ul.menu-list > li.menu-item > a .flux-micon,\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] ul.menu-list > li.menu-item > a .flux-micon {\n  font-size: 16px;\n  border-radius: 3px;\n  margin-right: 5px;\n  text-align: center;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  background: transparent !important;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=desktop] ul.menu-list > li.menu-item > a .flux-badge,\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] ul.menu-list > li.menu-item > a .flux-badge {\n  display: none;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=desktop] li.menu-item.hasMenu,\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] li.menu-item.hasMenu {\n  cursor: pointer;\n  position: relative;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=desktop] li.menu-item.hasMenu ul,\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] li.menu-item.hasMenu ul {\n  display: none;\n  margin: 0px;\n  padding: 10px 0px 10px 0px;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=desktop] li.menu-item.hasMenu ul li,\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] li.menu-item.hasMenu ul li {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  display: block;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=desktop] li.menu-item.hasMenu ul li a,\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] li.menu-item.hasMenu ul li a {\n  border: 0px;\n  text-decoration: none;\n  padding: 4px 10px;\n  display: block;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=desktop] li.menu-item.hasMenu ul li a .flux-micon,\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] li.menu-item.hasMenu ul li a .flux-micon {\n  font-size: 10px;\n  padding-right: 10px;\n  width: auto;\n  height: auto;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=desktop] li.menu-item.hasMenu ul li a:hover .flux-micon i,\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] li.menu-item.hasMenu ul li a:hover .flux-micon i {\n  border-radius: 100%;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=desktop] li.menu-item.hasMenu ul li.active a .flux-micon i,\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] li.menu-item.hasMenu ul li.active a .flux-micon i {\n  border-radius: 100%;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=desktop] li.menu-item.hasMenu a .flux-mcaret,\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] li.menu-item.hasMenu a .flux-mcaret {\n  opacity: 1;\n  visibility: visible;\n  border: solid;\n  border-width: 0 1px 1px 0;\n  padding: 3px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 5px;\n  position: relative;\n  top: -2px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=desktop] li.menu-item.hasMenu.open ul,\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] li.menu-item.hasMenu.open ul {\n  display: block;\n  position: absolute;\n  width: 200px;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=desktop] li.menu-item.hasMenu.open a .flux-mcaret,\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] li.menu-item.hasMenu.open a .flux-mcaret {\n  top: 2px;\n  transform: rotate(-135deg);\n  -webkit-transform: rotate(-135deg);\n  -moz-transform: rotate(-135deg);\n  -o-transform: rotate(-135deg);\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=desktop] ul.menu-list > li.menu-item:nth-last-child(-n+5),\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] ul.menu-list > li.menu-item:nth-last-child(-n+5) {\n  display: none;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] {\n  height: 54px !important;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] ul.menu-list > li.menu-item > a {\n  display: block;\n  text-align: center;\n  line-height: initial;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] ul.menu-list > li.menu-item > a .flux-mtext {\n  opacity: 1;\n  visibility: visible;\n  white-space: nowrap;\n  display: inline-block;\n  vertical-align: middle;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=tablet] ul.menu-list > li.menu-item > a .flux-micon {\n  display: block;\n}\n.flux-left-panel.hideNav[nav-layout=horizontal][device-type=mobile] {\n  margin-left: -230px;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] {\n  width: 230px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: absolute;\n  min-height: 100%;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  z-index: 1026;\n  font-size: 13px;\n  font-weight: 300;\n  -webkit-transition: width 0.3s cubic-bezier(1, -0.3, 0.405, 1.425);\n  transition: width 0.3s cubic-bezier(1, -0.3, 0.405, 1.425);\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] ul.menu-list {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] ul.menu-list > li.menu-item {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  display: block;\n  position: relative;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] ul.menu-list > li.menu-item.active:after {\n  content: \"\";\n  background: transparent none repeat scroll 0 0;\n  border-bottom: 15px solid transparent;\n  border-right: 10px solid #e9e9e9;\n  border-top: 15px solid transparent;\n  display: block;\n  float: right;\n  height: 0;\n  position: absolute;\n  right: 0;\n  top: 7px;\n  width: 0;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] ul.menu-list > li.menu-item > a {\n  display: block;\n  font-size: 13px;\n  text-decoration: none;\n  position: relative;\n  text-align: left;\n  padding: 6px 10px;\n  border-bottom: 0px;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] ul.menu-list > li.menu-item > a .flux-mtext {\n  opacity: 1;\n  visibility: visible;\n  position: absolute;\n  top: 10px;\n  white-space: nowrap;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] ul.menu-list > li.menu-item > a .flux-micon {\n  font-size: 16px;\n  border-radius: 3px;\n  margin-right: 5px;\n  width: 30px;\n  height: 30px;\n  display: inline-table;\n  text-align: center;\n  position: relative;\n  padding-top: 2px;\n  vertical-align: middle;\n  z-index: 1;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] ul.menu-list > li.menu-item > a .flux-badge {\n  position: absolute;\n  right: 10px;\n  display: inline-block;\n  opacity: 1;\n  visibility: visible;\n  padding: 5px 5px;\n  font-size: 75%;\n  font-weight: 600;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 4px;\n  top: 12px;\n  -webkit-transition: opacity 0.5s linear;\n  transition: opacity 0.5s linear;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] ul.menu-list > li.menu-item > a .bg-success {\n  background-color: #28a745;\n  color: #FFF;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] ul.menu-list > li.menu-item > a .bg-danger {\n  background-color: #dc3545;\n  color: #FFF;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] ul.menu-list > li.menu-item > a .bg-warning {\n  background-color: #ffc107;\n  color: #000;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] li.menu-item.hasMenu {\n  cursor: pointer;\n  position: relative;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] li.menu-item.hasMenu ul {\n  display: none;\n  margin: 0px;\n  padding: 10px 0px 10px 0px;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] li.menu-item.hasMenu ul li {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  display: block;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] li.menu-item.hasMenu ul li a {\n  border: 0px;\n  text-decoration: none;\n  padding: 4px 10px;\n  display: block;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] li.menu-item.hasMenu ul li a .flux-micon {\n  font-size: 10px;\n  padding-right: 10px;\n  width: auto;\n  height: auto;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] li.menu-item.hasMenu ul li a:hover .flux-micon i {\n  border-radius: 100%;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] li.menu-item.hasMenu ul li.active a .flux-micon i {\n  border-radius: 100%;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] li.menu-item.hasMenu a .flux-mcaret {\n  opacity: 1;\n  visibility: visible;\n  border: solid;\n  border-width: 0 1px 1px 0;\n  padding: 4px;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] li.menu-item.hasMenu.open ul {\n  display: block;\n}\n.flux-left-panel[nav-layout=horizontal][device-type=mobile] li.menu-item.hasMenu.open a .flux-mcaret {\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tbW9uL2xlZnQtcGFuZWwvRTpcXHN0YXRQcm9qZWN0c1xcRWRhZC1Ub2tlbi1Cb3hcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGNvbW1vblxcbGVmdC1wYW5lbFxcbGVmdC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tbW9uL2xlZnQtcGFuZWwvbGVmdC1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUdFLGdDQUFBO0FDQ0o7QURDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0U7RUFDRSxXQUFBO0VBQ0EsOENBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNGSjtBRElJO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUdBLDJCQUFBO0FDRk47QURLSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ0hOO0FETUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHVDQUFBO0VBR0EsK0JBQUE7QUNKTjtBRE9JO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDTE47QURRSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ05OO0FEU0k7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNQTjtBRFlFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDVko7QURZSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNWTjtBRFlNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNWUjtBRFlRO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDVlY7QURZVTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVlo7QURnQlU7RUFDRSxtQkFBQTtBQ2RaO0FEcUJRO0VBQ0UsbUJBQUE7QUNuQlY7QUR5QkU7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7RUFHQSwyQkFBQTtBQ3ZCSjtBRDJCSTtFQUNFLGNBQUE7QUN6Qk47QUQ0Qkk7RUFDRSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQzFCTjtBRCtCQTtFQUNFLHFCQUFBO0FDNUJGO0FEK0JBLFVBQUE7QUFDQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUM1QkY7QUQrQkEsV0FBQTtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQzVCRjtBRCtCQSxvQkFBQTtBQUNBO0VBQ0UsbUJBQUE7QUM1QkY7QURnQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQyx3Q0FBQTtFQUdDLGdDQUFBO0FDN0JKO0FEK0JJO0VBQ0Esa0JBQUE7QUM3Qko7QURxQ0E7RUFDRSxXQUFBO0FDbENGO0FEb0NFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0VBR0EsZ0NBQUE7QUNsQ0o7QURxQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUdBLDJCQUFBO0FDbkNKO0FEc0NFO0VBQ0UsWUFBQTtBQ3BDSjtBRHVDRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFHQSxrQ0FBQTtBQ3JDSjtBRHdDRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBR0EsMkJBQUE7QUN0Q0o7QUR5Q0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUN2Q0o7QUQwQ0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUdBLCtCQUFBO0FDeENKO0FEMkNFO0VBQ0Usd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUN6Q0o7QUQ0Q0U7O0VBRUUsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDMUNKO0FENkNFO0VBQ0UsYUFBQTtBQzNDSjtBRGdEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFHRSxnQ0FBQTtBQzdDSjtBRHNERTtFQUNFLG1CQTRFOEI7RUEzRTlCLGNBMkV1QztBQzlIM0M7QURvREk7RUFDRyxtQkF5RStEO0VBeEUvRCxjQXdFd0U7QUMxSC9FO0FEb0RJO0VBQ0UsY0FxRXFDO0VBcEVyQyxxQkFvRThDO0FDdEhwRDtBRG9ETTtFQUNFLG1CQWlFcUQ7QUNuSDdEO0FEdURJO0VBQ0UsbUJBMkRnRTtFQTFEaEUsY0EwRHlFO0FDL0cvRTtBRDBETTtFQUNFLG1CQW9EZ0Y7QUM1R3hGO0FENERVO0VBQ0UsY0ErQ3NGO0FDekdsRztBRDZEVTtFQUNFLGNBNENWO0FDdkdGO0FENkRZO0VBQ0UsbUJBeUNIO0VBeENHLGNBd0NNO0FDbkdwQjtBRGtFSTtFQUNFLHFCQWdDdUI7QUNoRzdCO0FEbUVJO0VBQ0UscUJBNEJnQztBQzdGdEM7QURvRUk7RUFDRSw4QkFBQTtFQUNBLGNBdUJrRDtBQ3pGeEQ7QUR1RVE7RUFDRSxjQWlCdUQ7QUN0RmpFO0FEdUVVO0VBQ0UsbUJBYzhEO0VBYjlELGNBYXVFO0FDbEZuRjtBRDJFSTtFQUNFLHFCQU1zRjtBQy9FNUY7QURDRTtFQUNFLG1CQStFOEI7RUE5RTlCLGNBOEV1QztBQzVFM0M7QURESTtFQUNHLG1CQTRFK0Q7RUEzRS9ELGNBMkV3RTtBQ3hFL0U7QURESTtFQUNFLGNBd0VxQztFQXZFckMscUJBdUU4QztBQ3BFcEQ7QURETTtFQUNFLG1CQW9FcUQ7QUNqRTdEO0FERUk7RUFDRSxtQkE4RGdFO0VBN0RoRSxjQTZEeUU7QUM3RC9FO0FES007RUFDRSxtQkF1RGdGO0FDMUR4RjtBRE9VO0VBQ0UsY0FrRHFGO0FDdkRqRztBRFFVO0VBQ0UsY0ErQ1Y7QUNyREY7QURRWTtFQUNFLG1CQTRDSDtFQTNDRyxjQTJDTTtBQ2pEcEI7QURhSTtFQUNFLHFCQW1DdUI7QUM5QzdCO0FEY0k7RUFDRSxxQkErQmdDO0FDM0N0QztBRGVJO0VBQ0UsOEJBQUE7RUFDQSxjQTBCa0Q7QUN2Q3hEO0FEa0JRO0VBQ0UsY0FvQnVEO0FDcENqRTtBRGtCVTtFQUNFLG1CQWlCOEQ7RUFoQjlELGNBZ0J1RTtBQ2hDbkY7QURzQkk7RUFDRSxxQkFTc0Y7QUM3QjVGO0FEcERFO0VBQ0UsbUJBa0ZnQztFQWpGaEMsY0FpRnlDO0FDMUI3QztBRHRESTtFQUNHLG1CQStFaUU7RUE5RWpFLGNBOEUwRTtBQ3RCakY7QUR0REk7RUFDRSxjQTJFdUM7RUExRXZDLHFCQTBFZ0Q7QUNsQnREO0FEdERNO0VBQ0UsbUJBdUV1RDtBQ2YvRDtBRG5ESTtFQUNFLG1CQWlFa0U7RUFoRWxFLGNBZ0UyRTtBQ1hqRjtBRGhETTtFQUNFLG1CQTBEa0Y7QUNSMUY7QUQ5Q1U7RUFDRSxjQXFEdUY7QUNMbkc7QUQ3Q1U7RUFDRSxjQWtEVjtBQ0hGO0FEN0NZO0VBQ0UsbUJBK0NIO0VBOUNHLGNBOENNO0FDQ3BCO0FEeENJO0VBQ0UscUJBc0N1QjtBQ0k3QjtBRHZDSTtFQUNFLHFCQWtDZ0M7QUNPdEM7QUR0Q0k7RUFDRSw4QkFBQTtFQUNBLGNBNkJrRDtBQ1d4RDtBRG5DUTtFQUNFLGNBdUJ1RDtBQ2NqRTtBRG5DVTtFQUNFLG1CQW9COEQ7RUFuQjlELGNBbUJ1RTtBQ2tCbkY7QUQvQkk7RUFDRSxxQkFZc0Y7QUNxQjVGO0FEekdFO0VBQ0UsbUJBcUZnQztFQXBGaEMsY0FvRnlDO0FDd0I3QztBRDNHSTtFQUNHLG1CQWtGaUU7RUFqRmpFLGNBaUYwRTtBQzRCakY7QUQzR0k7RUFDRSxjQThFdUM7RUE3RXZDLHFCQTZFZ0Q7QUNnQ3REO0FEM0dNO0VBQ0UsbUJBMEV1RDtBQ21DL0Q7QUR4R0k7RUFDRSxtQkFvRWtFO0VBbkVsRSxjQW1FMkU7QUN1Q2pGO0FEckdNO0VBQ0UsbUJBNkRrRjtBQzBDMUY7QURuR1U7RUFDRSxjQXdEdUY7QUM2Q25HO0FEbEdVO0VBQ0UsY0FxRFY7QUMrQ0Y7QURsR1k7RUFDRSxtQkFrREg7RUFqREcsY0FpRE07QUNtRHBCO0FEN0ZJO0VBQ0UscUJBeUN1QjtBQ3NEN0I7QUQ1Rkk7RUFDRSxxQkFxQ2dDO0FDeUR0QztBRDNGSTtFQUNFLDhCQUFBO0VBQ0EsY0FnQ2tEO0FDNkR4RDtBRHhGUTtFQUNFLGNBMEJ1RDtBQ2dFakU7QUR4RlU7RUFDRSxtQkF1QjhEO0VBdEI5RCxjQXNCdUU7QUNvRW5GO0FEcEZJO0VBQ0UscUJBZXNGO0FDdUU1RjtBRDlKRTtFQUNFLG1CQXdGZ0M7RUF2RmhDLGNBdUZ5QztBQzBFN0M7QURoS0k7RUFDRyxtQkFxRmlFO0VBcEZqRSxjQW9GMEU7QUM4RWpGO0FEaEtJO0VBQ0UsY0FpRnVDO0VBaEZ2QyxxQkFnRmdEO0FDa0Z0RDtBRGhLTTtFQUNFLG1CQTZFdUQ7QUNxRi9EO0FEN0pJO0VBQ0UsbUJBdUVrRTtFQXRFbEUsY0FzRTJFO0FDeUZqRjtBRDFKTTtFQUNFLG1CQWdFa0Y7QUM0RjFGO0FEeEpVO0VBQ0UsY0EyRHVGO0FDK0ZuRztBRHZKVTtFQUNFLGNBd0RWO0FDaUdGO0FEdkpZO0VBQ0UsbUJBcURIO0VBcERHLGNBb0RNO0FDcUdwQjtBRGxKSTtFQUNFLHFCQTRDdUI7QUN3RzdCO0FEakpJO0VBQ0UscUJBd0NnQztBQzJHdEM7QURoSkk7RUFDRSw4QkFBQTtFQUNBLGNBbUNrRDtBQytHeEQ7QUQ3SVE7RUFDRSxjQTZCdUQ7QUNrSGpFO0FEN0lVO0VBQ0UsbUJBMEI4RDtFQXpCOUQsY0F5QnVFO0FDc0huRjtBRHpJSTtFQUNFLHFCQWtCc0Y7QUN5SDVGO0FEbk5FO0VBQ0UsbUJBMkZnQztFQTFGaEMsY0EwRnlDO0FDNEg3QztBRHJOSTtFQUNHLG1CQXdGaUU7RUF2RmpFLGNBdUYwRTtBQ2dJakY7QURyTkk7RUFDRSxjQW9GdUM7RUFuRnZDLHFCQW1GZ0Q7QUNvSXREO0FEck5NO0VBQ0UsbUJBZ0Z1RDtBQ3VJL0Q7QURsTkk7RUFDRSxtQkEwRWtFO0VBekVsRSxjQXlFMkU7QUMySWpGO0FEL01NO0VBQ0UsbUJBbUVrRjtBQzhJMUY7QUQ3TVU7RUFDRSxjQThEdUY7QUNpSm5HO0FENU1VO0VBQ0UsY0EyRFY7QUNtSkY7QUQ1TVk7RUFDRSxtQkF3REg7RUF2REcsY0F1RE07QUN1SnBCO0FEdk1JO0VBQ0UscUJBK0N1QjtBQzBKN0I7QUR0TUk7RUFDRSxxQkEyQ2dDO0FDNkp0QztBRHJNSTtFQUNFLDhCQUFBO0VBQ0EsY0FzQ2tEO0FDaUt4RDtBRGxNUTtFQUNFLGNBZ0N1RDtBQ29LakU7QURsTVU7RUFDRSxtQkE2QjhEO0VBNUI5RCxjQTRCdUU7QUN3S25GO0FEOUxJO0VBQ0UscUJBcUJzRjtBQzJLNUY7QUR4UUU7RUFDRSxtQkE4RmdDO0VBN0ZoQyxjQTZGeUM7QUM4SzdDO0FEMVFJO0VBQ0csbUJBMkZpRTtFQTFGakUsY0EwRjBFO0FDa0xqRjtBRDFRSTtFQUNFLGNBdUZ1QztFQXRGdkMscUJBc0ZnRDtBQ3NMdEQ7QUQxUU07RUFDRSxtQkFtRnVEO0FDeUwvRDtBRHZRSTtFQUNFLG1CQTZFa0U7RUE1RWxFLGNBNEUyRTtBQzZMakY7QURwUU07RUFDRSxtQkFzRWtGO0FDZ00xRjtBRGxRVTtFQUNFLGNBaUV1RjtBQ21Nbkc7QURqUVU7RUFDRSxjQThEVjtBQ3FNRjtBRGpRWTtFQUNFLG1CQTJESDtFQTFERyxjQTBETTtBQ3lNcEI7QUQ1UEk7RUFDRSxxQkFrRHVCO0FDNE03QjtBRDNQSTtFQUNFLHFCQThDZ0M7QUMrTXRDO0FEMVBJO0VBQ0UsOEJBQUE7RUFDQSxjQXlDa0Q7QUNtTnhEO0FEdlBRO0VBQ0UsY0FtQ3VEO0FDc05qRTtBRHZQVTtFQUNFLG1CQWdDOEQ7RUEvQjlELGNBK0J1RTtBQzBObkY7QURuUEk7RUFDRSxxQkF3QnNGO0FDNk41RjtBRHpORTs7RUFFRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDNE5KO0FEMU5JOztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUM2Tk47QUQxTkk7O0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUM2Tk47QUQxTkk7O0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDNk5OO0FEMU5NOztFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQzZOUjtBRDFOTTs7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QUM2TlI7QUQxTk07O0VBQ0UsYUFBQTtBQzZOUjtBRHhOSTs7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUMyTk47QUR6Tk07O0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQzROUjtBRDFOUTs7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQzZOVjtBRDNOVTs7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUM4Tlo7QUQ1Tlk7O0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUMrTmQ7QUR6Tlk7O0VBQ0UsbUJBQUE7QUM0TmQ7QURyTlU7O0VBQ0UsbUJBQUE7QUN3Tlo7QURsTkk7O0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFHQSwyQkFBQTtBQ3FOTjtBRGpOTTs7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDb05SO0FEak5NOztFQUNFLFFBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUNvTlI7QUQ1TUk7O0VBQ0UsYUFBQTtBQ2dOTjtBRDVNRTtFQUNFLHVCQUFBO0FDK01KO0FEOU1JO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDZ05OO0FEL01NO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDaU5SO0FEOU1NO0VBQ0UsY0FBQTtBQ2dOUjtBRDFNQTtFQUNFLG1CQUFBO0FDNk1GO0FEM01BO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBR0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtFQUFBO0VBR0EsMERBQUE7QUM0TUY7QUQxTUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDNE1KO0FEek1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQzJNSjtBRHhNRTtFQUNFLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FDME1KO0FEdk1FO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDeU1KO0FEdk1JO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUdBLDJCQUFBO0FDeU1OO0FEdE1JO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FDd01OO0FEck1JO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx1Q0FBQTtFQUdBLCtCQUFBO0FDdU1OO0FEcE1JO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDc01OO0FEbk1JO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDcU1OO0FEbE1JO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDb01OO0FEL0xFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDaU1KO0FEL0xJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ2lNTjtBRC9MTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDaU1SO0FEL0xRO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDaU1WO0FEL0xVO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNpTVo7QUQzTFU7RUFDRSxtQkFBQTtBQzZMWjtBRHRMUTtFQUNFLG1CQUFBO0FDd0xWO0FEbExFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1DQUFBO0VBR0EsMkJBQUE7QUNvTEo7QURoTEk7RUFDRSxjQUFBO0FDa0xOO0FEL0tJO0VBQ0Usd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUNpTE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21tb24vbGVmdC1wYW5lbC9sZWZ0LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PVwidmVydGljYWxcIl0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICB6LWluZGV4OiAxMDI0O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgdWwubWVudS1saXN0IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcblxyXG4gIHVsLm1lbnUtbGlzdD5saS5tZW51LWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICB1bC5tZW51LWxpc3Q+bGkubWVudS1pdGVtLmFjdGl2ZTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2U5ZTllOTtcclxuICAgIGJvcmRlci10b3A6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA3cHg7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gIHVsLm1lbnUtbGlzdD5saS5tZW51LWl0ZW0+YSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuXHJcbiAgICAuZmx1eC1tdGV4dCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgfVxyXG5cclxuICAgIC5mbHV4LW1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5mbHV4LWJhZGdlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gICAgICBmb250LXNpemU6IDc1JTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIHRvcDogMTJweDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xyXG4gICAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcbiAgICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJnLXN1Y2Nlc3Mge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgICBjb2xvcjogI0ZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuYmctZGFuZ2VyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICB9XHJcblxyXG4gICAgLmJnLXdhcm5pbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBsaS5tZW51LWl0ZW0uaGFzTWVudSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAgIC5mbHV4LW1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYTpob3ZlciB7XHJcblxyXG4gICAgICAgICAgLmZsdXgtbWljb24gaSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsaS5hY3RpdmUgYSB7XHJcblxyXG4gICAgICAgIC5mbHV4LW1pY29uIGkge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxpLm1lbnUtaXRlbS5oYXNNZW51IGEgLmZsdXgtbWNhcmV0IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgYm9yZGVyOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDA7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogMTVweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcclxuICB9XHJcblxyXG4gIGxpLm1lbnUtaXRlbS5oYXNNZW51Lm9wZW4ge1xyXG4gICAgdWwge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBhIC5mbHV4LW1jYXJldCB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDdweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2MxYzFjMTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjYzFjMWMxO1xyXG59XHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyBFeHBlbmRlZCBBc2lkZWJhciBOYXZpZ2F0aW9uIFNlY3Rpb24gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bbmF2YmFyLXR5cGU9XCJleHBhbmRlZFwiXSB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGEge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xyXG59XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIGNvbGxhcHNlZCBBc2lkZWJhciBOYXZpZ2F0aW9uIFNlY3Rpb24gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PVwidmVydGljYWxcIl1bbmF2YmFyLXR5cGU9XCJjb2xsYXBzZWRcIl0ge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG5cclxuICB1bC5tZW51LWxpc3Q+bGkubWVudS1pdGVtPmEgLmZsdXgtbXRleHQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGxlZnQ6IDU1cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICB1bC5tZW51LWxpc3Q+bGkubWVudS1pdGVtPmEgLmZsdXgtYmFkZ2Uge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XHJcbiAgfVxyXG5cclxuICB1bC5tZW51LWxpc3Q+bGkubWVudS1pdGVtOmhvdmVyIHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICB9XHJcblxyXG4gIHVsLm1lbnUtbGlzdD5saS5tZW51LWl0ZW06aG92ZXI+YSAuZmx1eC1tdGV4dCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4xcyBsaW5lYXI7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4xcyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjFzIGxpbmVhcjtcclxuICB9XHJcblxyXG4gIHVsLm1lbnUtbGlzdD5saS5tZW51LWl0ZW06aG92ZXI+YSAuZmx1eC1iYWRnZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XHJcbiAgfVxyXG5cclxuICB1bC5tZW51LWxpc3Q+bGkubWVudS1pdGVtLmFjdGl2ZTpob3ZlcjphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgdWwubWVudS1saXN0PmxpLm1lbnUtaXRlbS5oYXNNZW51PmEgLmZsdXgtbWNhcmV0IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBsaW5lYXI7XHJcbiAgfVxyXG5cclxuICB1bC5tZW51LWxpc3Q+bGkubWVudS1pdGVtLmhhc01lbnU+YTpob3ZlciAuZmx1eC1tY2FyZXQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcblxyXG4gIHVsLm1lbnUtbGlzdCBsaS5tZW51LWl0ZW0uaGFzTWVudTpob3ZlciB1bCxcclxuICB1bC5tZW51LWxpc3QgbGkubWVudS1pdGVtLmhhc01lbnUub3Blbjpob3ZlciB1bCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgdWwubWVudS1saXN0IGxpLm1lbnUtaXRlbS5oYXNNZW51Lm9wZW4gdWwge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG4gIH1cclxufVxyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMgb2ZmY2FudmFzIEFzaWRlYmFyIE5hdmlnYXRpb24gU2VjdGlvbiAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9XCJ2ZXJ0aWNhbFwiXVtuYXZiYXItdHlwZT1cIm9mZmNhbnZhc1wiXSB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgbGVmdDogLTIzMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMgQXNpZGViYXIgQ29sb3JUaGVtZSBTdHlsZSAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuQG1peGluIG5hdmJhckNvbG9yVGhlbWUoJHRoZW1lLW5hbWUsICRuYXYtYmcsICRtZW51SXRlbS1jb2xvciwgJG1lbnVJdGVtLWJvcmRlci1jb2xvciwgJG1pY29uLWJnLCAkbWVudUl0ZW0tYmctb25Ib3ZlcixcclxuICAkbWVudUl0ZW0tY29sb3Itb25Ib3ZlciwgJHN1Yk1lbnUtYmcsICRzdW5NZW51SXRlbS1saW5rLWNvbG9yLCAkc3VuTWVudUl0ZW0tbGluay1vbkhvdmVyLCAkc3ViLW1pY29uLWJnLW9uaG92ZXIsXHJcbiAgJHN1Yi1taWNvbi1jb2xvci1vbmhvdmVyLCAkbWNhcmV0LWJnLCAkbWNhcmV0LWJnLW9uSG92ZXIsICRtZW51SXRlbS1iZy1vbkFjdGl2ZSwgJG1lbnVJdGVtLWNvbG9yLW9uQWN0aXZlLCAkc3ViTWVudUl0ZW0tbGluay1jb2xvci1vbkFjdGl2ZSxcclxuICAkc3ViLW1pY29uLWJnLW9uQWN0aXZlLCAkc3ViLW1pY29uLWNvbG9yLW9uQWN0aXZlLCAkbWNhcmV0LWJnLW9uQWN0aXZlKSB7XHJcbiAgLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9I3skdGhlbWUtbmFtZX1dIHtcclxuICAgIGJhY2tncm91bmQ6ICRuYXYtYmc7XHJcbiAgICBjb2xvcjogJG1lbnVJdGVtLWNvbG9yO1xyXG4gICAgdWwubWVudS1saXN0PmxpLm1lbnUtaXRlbTpob3ZlcntcclxuICAgICAgIGJhY2tncm91bmQ6ICRtZW51SXRlbS1iZy1vbkhvdmVyO1xyXG4gICAgICAgY29sb3I6ICRtZW51SXRlbS1jb2xvci1vbkhvdmVyO1xyXG4gICAgfVxyXG4gICAgdWwubWVudS1saXN0PmxpLm1lbnUtaXRlbT5hIHtcclxuICAgICAgY29sb3I6ICRtZW51SXRlbS1jb2xvcjtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkbWVudUl0ZW0tYm9yZGVyLWNvbG9yO1xyXG5cclxuICAgICAgLmZsdXgtbWljb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRtaWNvbi1iZztcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1bC5tZW51LWxpc3Q+bGkubWVudS1pdGVtPmE6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkbWVudUl0ZW0tYmctb25Ib3ZlcjtcclxuICAgICAgY29sb3I6ICRtZW51SXRlbS1jb2xvci1vbkhvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGxpLm1lbnUtaXRlbS5oYXNNZW51IHtcclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkc3ViTWVudS1iZztcclxuXHJcbiAgICAgICAgbGkge1xyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogJHN1bk1lbnVJdGVtLWxpbmstY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkc3VuTWVudUl0ZW0tbGluay1vbkhvdmVyO1xyXG5cclxuICAgICAgICAgICAgLmZsdXgtbWljb24gaSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHN1Yi1taWNvbi1iZy1vbmhvdmVyO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkc3ViLW1pY29uLWNvbG9yLW9uaG92ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaS5tZW51LWl0ZW0uaGFzTWVudSBhIC5mbHV4LW1jYXJldCB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJG1jYXJldC1iZ1xyXG4gICAgfVxyXG5cclxuICAgIGxpLm1lbnUtaXRlbS5oYXNNZW51IGE6aG92ZXIgLmZsdXgtbWNhcmV0IHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkbWNhcmV0LWJnLW9uSG92ZXJcclxuICAgIH1cclxuXHJcbiAgICB1bC5tZW51LWxpc3Q+bGkubWVudS1pdGVtLmFjdGl2ZT5hIHtcclxuICAgICAgYmFja2dyb3VuZDogJG1lbnVJdGVtLWJnLW9uQWN0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAkbWVudUl0ZW0tY29sb3Itb25BY3RpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgbGkubWVudS1pdGVtLmhhc01lbnUge1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGkuYWN0aXZlIGEge1xyXG4gICAgICAgICAgY29sb3I6ICRzdWJNZW51SXRlbS1saW5rLWNvbG9yLW9uQWN0aXZlO1xyXG5cclxuICAgICAgICAgIC5mbHV4LW1pY29uIGkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc3ViLW1pY29uLWJnLW9uQWN0aXZlO1xyXG4gICAgICAgICAgICBjb2xvcjogJHN1Yi1taWNvbi1jb2xvci1vbkFjdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaS5tZW51LWl0ZW0uaGFzTWVudS5hY3RpdmUgYSAuZmx1eC1tY2FyZXQge1xyXG4gICAgICBib3JkZXItY29sb3I6ICRtY2FyZXQtYmctb25BY3RpdmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBuYXZiYXJDb2xvclRoZW1lKHRoZW1lMSwgI2ZmZmZmZiwgIzY3ODA5OCwgI2Y1ZjVmNSwgI2VjZjBmOCwgI2YyZjZmOSwgIzVjOWFjZiwgI2U0ZWFmNSAsICM2NjY2NjksXHJcbiAgIzVjOWFjZiwgIzVjOWFjZiwgIzVjOWFjZiwgIzY3ODA5OCwgIzVjOWFjZiwgI2YyZjZmOSwgIzVjOWFjZiwgIzVjOWFjZiwgIzVjOWFjZiwgIzVjOWFjZiwgIzVjOWFjZik7XHJcblxyXG5AaW5jbHVkZSBuYXZiYXJDb2xvclRoZW1lKHRoZW1lMiwgIzM1NDA1MiwgI2I0YmNjOCwgIzQ4NTQ2OCwgIzFjMjMyZSwgIzJiMzU0NCwgI0ZGRkZGRiwgIzJhMzQ0NCwgI2I0YmNjOCxcclxuICAjRkZGRkZGLCAjRkZGRkZGLCAjRkZGRkZGLCAjYjRiY2M4LCAjRkZGRkZGLCAjMmIzNTQ0LCAjRkZGRkZGLCAjRkZGRkZGLCAjRkZGRkZGLCAjRkZGRkZGLCAjRkZGRkZGKTtcclxuXHJcbiAgQGluY2x1ZGUgbmF2YmFyQ29sb3JUaGVtZSh0aGVtZTMsICMzZjU0ODUsICNkOGUzZmMsICM0YTVmOTAsICMyZjQ0NzUsICMyZjQ0NzUsICNGRkZGRkYsICMyZjQ0NzUsICM5MGEyY2MsXHJcbiAgI0ZGRkZGRiwgI0ZGRkZGRiwgI0ZGRkZGRiwgI2Q4ZTNmYywgI0ZGRkZGRiwgIzJmNDQ3NSwgI0ZGRkZGRiwgI0ZGRkZGRiwgI0ZGRkZGRiwgI0ZGRkZGRiwgI0ZGRkZGRik7XHJcblxyXG4gIEBpbmNsdWRlIG5hdmJhckNvbG9yVGhlbWUodGhlbWU0LCAjM2M3NWI1LCAjYjlkNGYyLCAjNGY4MmJjLCAjMmI2NGE0LCAjMmI2NGE0LCAjRkZGRkZGLCAjMmI2NGE0LCAjYjlkNGYyLFxyXG4gICNGRkZGRkYsICNGRkZGRkYsICNGRkZGRkYsICNiOWQ0ZjIsICNGRkZGRkYsICMyYjY0YTQsICNGRkZGRkYsICNGRkZGRkYsICNGRkZGRkYsICNGRkZGRkYsICNGRkZGRkYpO1xyXG5cclxuICBAaW5jbHVkZSBuYXZiYXJDb2xvclRoZW1lKHRoZW1lNSwgIzU4M2E2MywgI2NjYmFkMiwgIzVkNDg2NSwgIzRiMzE1NCwgIzRiMzE1NCwgI0ZGRkZGRiwgIzRiMzE1NCwgI2E0OTJhYSxcclxuICAjRkZGRkZGLCAjRkZGRkZGLCAjRkZGRkZGLCAjY2NiYWQyLCAjRkZGRkZGLCAjNGIzMTU0LCAjRkZGRkZGLCAjRkZGRkZGLCAjRkZGRkZGLCAjRkZGRkZGLCAjRkZGRkZGKTtcclxuXHJcbiAgQGluY2x1ZGUgbmF2YmFyQ29sb3JUaGVtZSh0aGVtZTYsICNlZGVkZWQsICM3ODc4NzgsICNlNGU1ZTUsICNlMWUxZTEsICNlMWUxZTEsICMwMDAwMDAsICNlMWUxZTEsICM3ODc4NzgsXHJcbiAgIzAwMDAwMCwgIzc4Nzg3OCwgIzc4Nzg3OCwgIzc4Nzg3OCwgIzAwMDAwMCwgI2UxZTFlMSwgIzAwMDAwMCwgIzAwMDAwMCwgIzc4Nzg3OCwgIzc4Nzg3OCwgIzAwMDAwMCk7XHJcblxyXG4gIEBpbmNsdWRlIG5hdmJhckNvbG9yVGhlbWUodGhlbWU3LCAjMGFhNjk5LCAjRkZGRkZGLCAjMWFiMGEzLCAjMGI5YzhmLCAjMGI5YzhmLCAjRkZGRkZGLCAjMGI5YzhmLCAjMTBlM2QwLFxyXG4gICNGRkZGRkYsICNGRkZGRkYsICNGRkZGRkYsICNGRkZGRkYsICNGRkZGRkYsICMwYjljOGYsICNGRkZGRkYsICNGRkZGRkYsICNGRkZGRkYsICNGRkZGRkYsICNGRkZGRkYpO1xyXG5cclxuXHJcblxyXG4gIC5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1cImhvcml6b250YWxcIl1bZGV2aWNlLXR5cGU9XCJkZXNrdG9wXCJdLFxyXG4gIC5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1cImhvcml6b250YWxcIl1bZGV2aWNlLXR5cGU9XCJ0YWJsZXRcIl17XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDEwMjQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICBtYXJnaW46MHB4O1xyXG5cclxuICAgIHVsLm1lbnUtbGlzdCB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgdWwubWVudS1saXN0PmxpLm1lbnUtaXRlbSB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHVsLm1lbnUtbGlzdD5saS5tZW51LWl0ZW0+YSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzlweDtcclxuXHJcblxyXG4gICAgICAuZmx1eC1tdGV4dCB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mbHV4LW1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudCA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mbHV4LWJhZGdlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxpLm1lbnUtaXRlbS5oYXNNZW51IHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgICAgIC5mbHV4LW1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhOmhvdmVyIHtcclxuXHJcbiAgICAgICAgICAgIC5mbHV4LW1pY29uIGkge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpLmFjdGl2ZSBhIHtcclxuXHJcbiAgICAgICAgICAuZmx1eC1taWNvbiBpIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaS5tZW51LWl0ZW0uaGFzTWVudSBhIC5mbHV4LW1jYXJldCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIGJvcmRlcjogc29saWQ7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDA7XHJcbiAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IC0ycHg7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbiAgICB9XHJcblxyXG4gICAgbGkubWVudS1pdGVtLmhhc01lbnUub3BlbiB7XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSAuZmx1eC1tY2FyZXQge1xyXG4gICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXVtkZXZpY2UtdHlwZT1cImRlc2t0b3BcIl0sXHJcbiAgLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXVtkZXZpY2UtdHlwZT1cInRhYmxldFwiXXtcclxuICAgIHVsLm1lbnUtbGlzdD5saS5tZW51LWl0ZW06bnRoLWxhc3QtY2hpbGQoLW4rNSl7XHJcbiAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1cImhvcml6b250YWxcIl1bZGV2aWNlLXR5cGU9XCJ0YWJsZXRcIl17XHJcbiAgICBoZWlnaHQ6IDU0cHggIWltcG9ydGFudDtcclxuICAgIHVsLm1lbnUtbGlzdD5saS5tZW51LWl0ZW0+YSB7XHJcbiAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDppbml0aWFsO1xyXG4gICAgICBwYWRkaW5nLXRvcDo0cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOjRweDtcclxuICAgICAgLmZsdXgtbXRleHQge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZmx1eC1taWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbi5mbHV4LWxlZnQtcGFuZWwuaGlkZU5hdltuYXYtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXVtkZXZpY2UtdHlwZT1cIm1vYmlsZVwiXXtcclxuICBtYXJnaW4tbGVmdDotMjMwcHg7XHJcbn1cclxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXVtkZXZpY2UtdHlwZT1cIm1vYmlsZVwiXXtcclxuICB3aWR0aDoyMzBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB0b3A6IDBweDtcclxuICBib3R0b206IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgLy8gcGFkZGluZy10b3A6IDUwcHg7XHJcblxyXG4gIHotaW5kZXg6IDEwMjY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGN1YmljLWJlemllcigxLjAwMCwgLTAuMzAsIDAuNDA1LCAxLjQyNSk7XHJcbiAgLW1vei10cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGN1YmljLWJlemllcigxLjAwMCwgLTAuMzAsIDAuNDA1LCAxLjQyNSk7XHJcbiAgLW8tdHJhbnNpdGlvbjogd2lkdGggMC4zcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjMwLCAwLjQwNSwgMS40MjUpO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4zMCwgMC40MDUsIDEuNDI1KTtcclxuXHJcbiAgdWwubWVudS1saXN0IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcblxyXG4gIHVsLm1lbnUtbGlzdD5saS5tZW51LWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICB1bC5tZW51LWxpc3Q+bGkubWVudS1pdGVtLmFjdGl2ZTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2U5ZTllOTtcclxuICAgIGJvcmRlci10b3A6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA3cHg7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gIHVsLm1lbnUtbGlzdD5saS5tZW51LWl0ZW0+YSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDBweDtcclxuXHJcbiAgICAuZmx1eC1tdGV4dCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbiAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gICAgfVxyXG5cclxuICAgIC5mbHV4LW1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5mbHV4LWJhZGdlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gICAgICBmb250LXNpemU6IDc1JTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIHRvcDogMTJweDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xyXG4gICAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XHJcbiAgICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJnLXN1Y2Nlc3Mge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgICBjb2xvcjogI0ZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuYmctZGFuZ2VyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICB9XHJcblxyXG4gICAgLmJnLXdhcm5pbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBsaS5tZW51LWl0ZW0uaGFzTWVudSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAgIC5mbHV4LW1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYTpob3ZlciB7XHJcblxyXG4gICAgICAgICAgLmZsdXgtbWljb24gaSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsaS5hY3RpdmUgYSB7XHJcblxyXG4gICAgICAgIC5mbHV4LW1pY29uIGkge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxpLm1lbnUtaXRlbS5oYXNNZW51IGEgLmZsdXgtbWNhcmV0IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgYm9yZGVyOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDA7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogMTVweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICB9XHJcblxyXG4gIGxpLm1lbnUtaXRlbS5oYXNNZW51Lm9wZW4ge1xyXG4gICAgdWwge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBhIC5mbHV4LW1jYXJldCB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICB6LWluZGV4OiAxMDI0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF0gdWwubWVudS1saXN0IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtLmFjdGl2ZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjZTllOWU5O1xuICBib3JkZXItdG9wOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogN3B4O1xuICB3aWR0aDogMDtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5mbHV4LW10ZXh0IHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEgLmZsdXgtbWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHotaW5kZXg6IDE7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEgLmZsdXgtYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdG9wOiAxMnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSAuYmctc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5iZy1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICBjb2xvcjogI0ZGRjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSAuYmctd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYSB7XG4gIGJvcmRlcjogMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYSAuZmx1eC1taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYTpob3ZlciAuZmx1eC1taWNvbiBpIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkuYWN0aXZlIGEgLmZsdXgtbWljb24gaSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIGxpLm1lbnUtaXRlbS5oYXNNZW51IGEgLmZsdXgtbWNhcmV0IHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYm9yZGVyOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwIDFweCAxcHggMDtcbiAgcGFkZGluZzogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDE1cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXSBsaS5tZW51LWl0ZW0uaGFzTWVudS5vcGVuIHVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdIGxpLm1lbnUtaXRlbS5oYXNNZW51Lm9wZW4gYSAuZmx1eC1tY2FyZXQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA3cHggIWltcG9ydGFudDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2MxYzFjMTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYzFjMWMxO1xufVxuXG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWV4cGFuZGVkXSB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgd2lkdGg6IDIzMHB4O1xuICBsZWZ0OiAwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9ZXhwYW5kZWRdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGEge1xuICBwYWRkaW5nLWxlZnQ6IDI2cHg7XG59XG5cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXSB7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEgLmZsdXgtbXRleHQge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGxlZnQ6IDU1cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5mbHV4LWJhZGdlIHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbTpob3ZlciB7XG4gIHdpZHRoOiAyMzBweDtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW06aG92ZXIgPiBhIC5mbHV4LW10ZXh0IHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMXMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4xcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4xcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4xcyBsaW5lYXI7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtOmhvdmVyID4gYSAuZmx1eC1iYWRnZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtLmFjdGl2ZTpob3ZlcjphZnRlciB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD12ZXJ0aWNhbF1bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0uaGFzTWVudSA+IGEgLmZsdXgtbWNhcmV0IHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBsaW5lYXI7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtLmhhc01lbnUgPiBhOmhvdmVyIC5mbHV4LW1jYXJldCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9dmVydGljYWxdW25hdmJhci10eXBlPWNvbGxhcHNlZF0gdWwubWVudS1saXN0IGxpLm1lbnUtaXRlbS5oYXNNZW51OmhvdmVyIHVsLFxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdIHVsLm1lbnUtbGlzdCBsaS5tZW51LWl0ZW0uaGFzTWVudS5vcGVuOmhvdmVyIHVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTBweDtcbiAgd2lkdGg6IDE4MHB4O1xuICB6LWluZGV4OiAxO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1jb2xsYXBzZWRdIHVsLm1lbnUtbGlzdCBsaS5tZW51LWl0ZW0uaGFzTWVudS5vcGVuIHVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PXZlcnRpY2FsXVtuYXZiYXItdHlwZT1vZmZjYW52YXNdIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGxlZnQ6IC0yMzBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTFdIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICM2NzgwOTg7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTFdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmMmY2Zjk7XG4gIGNvbG9yOiAjNWM5YWNmO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWUxXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIHtcbiAgY29sb3I6ICM2NzgwOTg7XG4gIGJvcmRlci1jb2xvcjogI2Y1ZjVmNTtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lMV0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSAuZmx1eC1taWNvbiB7XG4gIGJhY2tncm91bmQ6ICNlY2YwZjg7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTFdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjJmNmY5O1xuICBjb2xvcjogIzVjOWFjZjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lMV0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwge1xuICBiYWNrZ3JvdW5kOiAjZTRlYWY1O1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWUxXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSBhIHtcbiAgY29sb3I6ICM2NjY2Njk7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTFdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogIzVjOWFjZjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lMV0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYTpob3ZlciAuZmx1eC1taWNvbiBpIHtcbiAgYmFja2dyb3VuZDogIzVjOWFjZjtcbiAgY29sb3I6ICM1YzlhY2Y7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTFdIGxpLm1lbnUtaXRlbS5oYXNNZW51IGEgLmZsdXgtbWNhcmV0IHtcbiAgYm9yZGVyLWNvbG9yOiAjNjc4MDk4O1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWUxXSBsaS5tZW51LWl0ZW0uaGFzTWVudSBhOmhvdmVyIC5mbHV4LW1jYXJldCB7XG4gIGJvcmRlci1jb2xvcjogIzVjOWFjZjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lMV0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtLmFjdGl2ZSA+IGEge1xuICBiYWNrZ3JvdW5kOiAjZjJmNmY5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNWM5YWNmO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWUxXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaS5hY3RpdmUgYSB7XG4gIGNvbG9yOiAjNWM5YWNmO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWUxXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaS5hY3RpdmUgYSAuZmx1eC1taWNvbiBpIHtcbiAgYmFja2dyb3VuZDogIzVjOWFjZjtcbiAgY29sb3I6ICM1YzlhY2Y7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTFdIGxpLm1lbnUtaXRlbS5oYXNNZW51LmFjdGl2ZSBhIC5mbHV4LW1jYXJldCB7XG4gIGJvcmRlci1jb2xvcjogIzVjOWFjZjtcbn1cblxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWUyXSB7XG4gIGJhY2tncm91bmQ6ICMzNTQwNTI7XG4gIGNvbG9yOiAjYjRiY2M4O1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWUyXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMmIzNTQ0O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lMl0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSB7XG4gIGNvbG9yOiAjYjRiY2M4O1xuICBib3JkZXItY29sb3I6ICM0ODU0Njg7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTJdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEgLmZsdXgtbWljb24ge1xuICBiYWNrZ3JvdW5kOiAjMWMyMzJlO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWUyXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzJiMzU0NDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTJdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIHtcbiAgYmFja2dyb3VuZDogIzJhMzQ0NDtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lMl0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYSB7XG4gIGNvbG9yOiAjYjRiY2M4O1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWUyXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTJdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGE6aG92ZXIgLmZsdXgtbWljb24gaSB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWUyXSBsaS5tZW51LWl0ZW0uaGFzTWVudSBhIC5mbHV4LW1jYXJldCB7XG4gIGJvcmRlci1jb2xvcjogI2I0YmNjODtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lMl0gbGkubWVudS1pdGVtLmhhc01lbnUgYTpob3ZlciAuZmx1eC1tY2FyZXQge1xuICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTJdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbS5hY3RpdmUgPiBhIHtcbiAgYmFja2dyb3VuZDogIzJiMzU0NCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lMl0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkuYWN0aXZlIGEge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lMl0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkuYWN0aXZlIGEgLmZsdXgtbWljb24gaSB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWUyXSBsaS5tZW51LWl0ZW0uaGFzTWVudS5hY3RpdmUgYSAuZmx1eC1tY2FyZXQge1xuICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG5cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lM10ge1xuICBiYWNrZ3JvdW5kOiAjM2Y1NDg1O1xuICBjb2xvcjogI2Q4ZTNmYztcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lM10gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzJmNDQ3NTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTNdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEge1xuICBjb2xvcjogI2Q4ZTNmYztcbiAgYm9yZGVyLWNvbG9yOiAjNGE1ZjkwO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWUzXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5mbHV4LW1pY29uIHtcbiAgYmFja2dyb3VuZDogIzJmNDQ3NTtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lM10gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyZjQ0NzU7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWUzXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCB7XG4gIGJhY2tncm91bmQ6ICMyZjQ0NzU7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTNdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGEge1xuICBjb2xvcjogIzkwYTJjYztcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lM10gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWUzXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSBhOmhvdmVyIC5mbHV4LW1pY29uIGkge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lM10gbGkubWVudS1pdGVtLmhhc01lbnUgYSAuZmx1eC1tY2FyZXQge1xuICBib3JkZXItY29sb3I6ICNkOGUzZmM7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTNdIGxpLm1lbnUtaXRlbS5oYXNNZW51IGE6aG92ZXIgLmZsdXgtbWNhcmV0IHtcbiAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWUzXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0uYWN0aXZlID4gYSB7XG4gIGJhY2tncm91bmQ6ICMyZjQ0NzUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTNdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpLmFjdGl2ZSBhIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTNdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpLmFjdGl2ZSBhIC5mbHV4LW1pY29uIGkge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lM10gbGkubWVudS1pdGVtLmhhc01lbnUuYWN0aXZlIGEgLmZsdXgtbWNhcmV0IHtcbiAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xufVxuXG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTRdIHtcbiAgYmFja2dyb3VuZDogIzNjNzViNTtcbiAgY29sb3I6ICNiOWQ0ZjI7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTRdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyYjY0YTQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU0XSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIHtcbiAgY29sb3I6ICNiOWQ0ZjI7XG4gIGJvcmRlci1jb2xvcjogIzRmODJiYztcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lNF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSAuZmx1eC1taWNvbiB7XG4gIGJhY2tncm91bmQ6ICMyYjY0YTQ7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTRdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMmI2NGE0O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lNF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwge1xuICBiYWNrZ3JvdW5kOiAjMmI2NGE0O1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU0XSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSBhIHtcbiAgY29sb3I6ICNiOWQ0ZjI7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTRdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lNF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYTpob3ZlciAuZmx1eC1taWNvbiBpIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTRdIGxpLm1lbnUtaXRlbS5oYXNNZW51IGEgLmZsdXgtbWNhcmV0IHtcbiAgYm9yZGVyLWNvbG9yOiAjYjlkNGYyO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU0XSBsaS5tZW51LWl0ZW0uaGFzTWVudSBhOmhvdmVyIC5mbHV4LW1jYXJldCB7XG4gIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lNF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtLmFjdGl2ZSA+IGEge1xuICBiYWNrZ3JvdW5kOiAjMmI2NGE0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU0XSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaS5hY3RpdmUgYSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU0XSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaS5hY3RpdmUgYSAuZmx1eC1taWNvbiBpIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTRdIGxpLm1lbnUtaXRlbS5oYXNNZW51LmFjdGl2ZSBhIC5mbHV4LW1jYXJldCB7XG4gIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcbn1cblxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU1XSB7XG4gIGJhY2tncm91bmQ6ICM1ODNhNjM7XG4gIGNvbG9yOiAjY2NiYWQyO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU1XSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNGIzMTU0O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lNV0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSB7XG4gIGNvbG9yOiAjY2NiYWQyO1xuICBib3JkZXItY29sb3I6ICM1ZDQ4NjU7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTVdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEgLmZsdXgtbWljb24ge1xuICBiYWNrZ3JvdW5kOiAjNGIzMTU0O1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU1XSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzRiMzE1NDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTVdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIHtcbiAgYmFja2dyb3VuZDogIzRiMzE1NDtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lNV0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYSB7XG4gIGNvbG9yOiAjYTQ5MmFhO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU1XSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTVdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGE6aG92ZXIgLmZsdXgtbWljb24gaSB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU1XSBsaS5tZW51LWl0ZW0uaGFzTWVudSBhIC5mbHV4LW1jYXJldCB7XG4gIGJvcmRlci1jb2xvcjogI2NjYmFkMjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lNV0gbGkubWVudS1pdGVtLmhhc01lbnUgYTpob3ZlciAuZmx1eC1tY2FyZXQge1xuICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTVdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbS5hY3RpdmUgPiBhIHtcbiAgYmFja2dyb3VuZDogIzRiMzE1NCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lNV0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkuYWN0aXZlIGEge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lNV0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkuYWN0aXZlIGEgLmZsdXgtbWljb24gaSB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU1XSBsaS5tZW51LWl0ZW0uaGFzTWVudS5hY3RpdmUgYSAuZmx1eC1tY2FyZXQge1xuICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG5cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lNl0ge1xuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xuICBjb2xvcjogIzc4Nzg3ODtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lNl0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2UxZTFlMTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTZdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEge1xuICBjb2xvcjogIzc4Nzg3ODtcbiAgYm9yZGVyLWNvbG9yOiAjZTRlNWU1O1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU2XSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5mbHV4LW1pY29uIHtcbiAgYmFja2dyb3VuZDogI2UxZTFlMTtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lNl0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlMWUxZTE7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU2XSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCB7XG4gIGJhY2tncm91bmQ6ICNlMWUxZTE7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTZdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGEge1xuICBjb2xvcjogIzc4Nzg3ODtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lNl0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU2XSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSBhOmhvdmVyIC5mbHV4LW1pY29uIGkge1xuICBiYWNrZ3JvdW5kOiAjNzg3ODc4O1xuICBjb2xvcjogIzc4Nzg3ODtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lNl0gbGkubWVudS1pdGVtLmhhc01lbnUgYSAuZmx1eC1tY2FyZXQge1xuICBib3JkZXItY29sb3I6ICM3ODc4Nzg7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTZdIGxpLm1lbnUtaXRlbS5oYXNNZW51IGE6aG92ZXIgLmZsdXgtbWNhcmV0IHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU2XSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0uYWN0aXZlID4gYSB7XG4gIGJhY2tncm91bmQ6ICNlMWUxZTEgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTZdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpLmFjdGl2ZSBhIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTZdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpLmFjdGl2ZSBhIC5mbHV4LW1pY29uIGkge1xuICBiYWNrZ3JvdW5kOiAjNzg3ODc4O1xuICBjb2xvcjogIzc4Nzg3ODtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lNl0gbGkubWVudS1pdGVtLmhhc01lbnUuYWN0aXZlIGEgLmZsdXgtbWNhcmV0IHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTddIHtcbiAgYmFja2dyb3VuZDogIzBhYTY5OTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTddIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwYjljOGY7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU3XSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlci1jb2xvcjogIzFhYjBhMztcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lN10gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSAuZmx1eC1taWNvbiB7XG4gIGJhY2tncm91bmQ6ICMwYjljOGY7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTddIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMGI5YzhmO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lN10gbGkubWVudS1pdGVtLmhhc01lbnUgdWwge1xuICBiYWNrZ3JvdW5kOiAjMGI5YzhmO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU3XSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSBhIHtcbiAgY29sb3I6ICMxMGUzZDA7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTddIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lN10gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYTpob3ZlciAuZmx1eC1taWNvbiBpIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTddIGxpLm1lbnUtaXRlbS5oYXNNZW51IGEgLmZsdXgtbWNhcmV0IHtcbiAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU3XSBsaS5tZW51LWl0ZW0uaGFzTWVudSBhOmhvdmVyIC5mbHV4LW1jYXJldCB7XG4gIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2YmFyLXRoZW1lPXRoZW1lN10gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtLmFjdGl2ZSA+IGEge1xuICBiYWNrZ3JvdW5kOiAjMGI5YzhmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU3XSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaS5hY3RpdmUgYSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXZiYXItdGhlbWU9dGhlbWU3XSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaS5hY3RpdmUgYSAuZmx1eC1taWNvbiBpIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdmJhci10aGVtZT10aGVtZTddIGxpLm1lbnUtaXRlbS5oYXNNZW51LmFjdGl2ZSBhIC5mbHV4LW1jYXJldCB7XG4gIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcbn1cblxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPWRlc2t0b3BdLFxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXRhYmxldF0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxMDI0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9ZGVza3RvcF0gdWwubWVudS1saXN0LFxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXRhYmxldF0gdWwubWVudS1saXN0IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1kZXNrdG9wXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0sXG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9dGFibGV0XSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1kZXNrdG9wXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhLFxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXRhYmxldF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBsaW5lLWhlaWdodDogMzlweDtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1kZXNrdG9wXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5mbHV4LW10ZXh0LFxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXRhYmxldF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSAuZmx1eC1tdGV4dCB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1kZXNrdG9wXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5mbHV4LW1pY29uLFxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXRhYmxldF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSAuZmx1eC1taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1kZXNrdG9wXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5mbHV4LWJhZGdlLFxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXRhYmxldF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSAuZmx1eC1iYWRnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9ZGVza3RvcF0gbGkubWVudS1pdGVtLmhhc01lbnUsXG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9dGFibGV0XSBsaS5tZW51LWl0ZW0uaGFzTWVudSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPWRlc2t0b3BdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsLFxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXRhYmxldF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwge1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9ZGVza3RvcF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGksXG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9dGFibGV0XSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPWRlc2t0b3BdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGEsXG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9dGFibGV0XSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSBhIHtcbiAgYm9yZGVyOiAwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPWRlc2t0b3BdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGEgLmZsdXgtbWljb24sXG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9dGFibGV0XSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSBhIC5mbHV4LW1pY29uIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPWRlc2t0b3BdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGE6aG92ZXIgLmZsdXgtbWljb24gaSxcbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT10YWJsZXRdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGE6aG92ZXIgLmZsdXgtbWljb24gaSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9ZGVza3RvcF0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkuYWN0aXZlIGEgLmZsdXgtbWljb24gaSxcbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT10YWJsZXRdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpLmFjdGl2ZSBhIC5mbHV4LW1pY29uIGkge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPWRlc2t0b3BdIGxpLm1lbnUtaXRlbS5oYXNNZW51IGEgLmZsdXgtbWNhcmV0LFxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXRhYmxldF0gbGkubWVudS1pdGVtLmhhc01lbnUgYSAuZmx1eC1tY2FyZXQge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBib3JkZXI6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAgMXB4IDFweCAwO1xuICBwYWRkaW5nOiAzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9ZGVza3RvcF0gbGkubWVudS1pdGVtLmhhc01lbnUub3BlbiB1bCxcbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT10YWJsZXRdIGxpLm1lbnUtaXRlbS5oYXNNZW51Lm9wZW4gdWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAwcHg7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9ZGVza3RvcF0gbGkubWVudS1pdGVtLmhhc01lbnUub3BlbiBhIC5mbHV4LW1jYXJldCxcbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT10YWJsZXRdIGxpLm1lbnUtaXRlbS5oYXNNZW51Lm9wZW4gYSAuZmx1eC1tY2FyZXQge1xuICB0b3A6IDJweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPWRlc2t0b3BdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbTpudGgtbGFzdC1jaGlsZCgtbis1KSxcbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT10YWJsZXRdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbTpudGgtbGFzdC1jaGlsZCgtbis1KSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT10YWJsZXRdIHtcbiAgaGVpZ2h0OiA1NHB4ICFpbXBvcnRhbnQ7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9dGFibGV0XSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9dGFibGV0XSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5mbHV4LW10ZXh0IHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPXRhYmxldF0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtID4gYSAuZmx1eC1taWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZmx1eC1sZWZ0LXBhbmVsLmhpZGVOYXZbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1tb2JpbGVdIHtcbiAgbWFyZ2luLWxlZnQ6IC0yMzBweDtcbn1cblxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPW1vYmlsZV0ge1xuICB3aWR0aDogMjMwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMTAyNjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuM3MgY3ViaWMtYmV6aWVyKDEsIC0wLjMsIDAuNDA1LCAxLjQyNSk7XG4gIC1tb3otdHJhbnNpdGlvbjogd2lkdGggMC4zcyBjdWJpYy1iZXppZXIoMSwgLTAuMywgMC40MDUsIDEuNDI1KTtcbiAgLW8tdHJhbnNpdGlvbjogd2lkdGggMC4zcyBjdWJpYy1iZXppZXIoMSwgLTAuMywgMC40MDUsIDEuNDI1KTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBjdWJpYy1iZXppZXIoMSwgLTAuMywgMC40MDUsIDEuNDI1KTtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1tb2JpbGVdIHVsLm1lbnUtbGlzdCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9bW9iaWxlXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPW1vYmlsZV0gdWwubWVudS1saXN0ID4gbGkubWVudS1pdGVtLmFjdGl2ZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjZTllOWU5O1xuICBib3JkZXItdG9wOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogN3B4O1xuICB3aWR0aDogMDtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1tb2JpbGVdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1tb2JpbGVdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEgLmZsdXgtbXRleHQge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1tb2JpbGVdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEgLmZsdXgtbWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHotaW5kZXg6IDE7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9bW9iaWxlXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5mbHV4LWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBmb250LXNpemU6IDc1JTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRvcDogMTJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9bW9iaWxlXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5iZy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgY29sb3I6ICNGRkY7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9bW9iaWxlXSB1bC5tZW51LWxpc3QgPiBsaS5tZW51LWl0ZW0gPiBhIC5iZy1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICBjb2xvcjogI0ZGRjtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1tb2JpbGVdIHVsLm1lbnUtbGlzdCA+IGxpLm1lbnUtaXRlbSA+IGEgLmJnLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xuICBjb2xvcjogIzAwMDtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1tb2JpbGVdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9bW9iaWxlXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1tb2JpbGVdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9bW9iaWxlXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaSBhIHtcbiAgYm9yZGVyOiAwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPW1vYmlsZV0gbGkubWVudS1pdGVtLmhhc01lbnUgdWwgbGkgYSAuZmx1eC1taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1tb2JpbGVdIGxpLm1lbnUtaXRlbS5oYXNNZW51IHVsIGxpIGE6aG92ZXIgLmZsdXgtbWljb24gaSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uZmx1eC1sZWZ0LXBhbmVsW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF1bZGV2aWNlLXR5cGU9bW9iaWxlXSBsaS5tZW51LWl0ZW0uaGFzTWVudSB1bCBsaS5hY3RpdmUgYSAuZmx1eC1taWNvbiBpIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5mbHV4LWxlZnQtcGFuZWxbbmF2LWxheW91dD1ob3Jpem9udGFsXVtkZXZpY2UtdHlwZT1tb2JpbGVdIGxpLm1lbnUtaXRlbS5oYXNNZW51IGEgLmZsdXgtbWNhcmV0IHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYm9yZGVyOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwIDFweCAxcHggMDtcbiAgcGFkZGluZzogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDE1cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPW1vYmlsZV0gbGkubWVudS1pdGVtLmhhc01lbnUub3BlbiB1bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZsdXgtbGVmdC1wYW5lbFtuYXYtbGF5b3V0PWhvcml6b250YWxdW2RldmljZS10eXBlPW1vYmlsZV0gbGkubWVudS1pdGVtLmhhc01lbnUub3BlbiBhIC5mbHV4LW1jYXJldCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/common/left-panel/left-panel.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/common/left-panel/left-panel.component.ts ***!
    \*****************************************************************/

  /*! exports provided: LeftPanelComponent */

  /***/
  function srcAppPagesCommonLeftPanelLeftPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeftPanelComponent", function () {
      return LeftPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/layout.service */
    "./src/app/shared/services/layout.service.ts");

    let LeftPanelComponent = class LeftPanelComponent {
      constructor(layoutService) {
        this.layoutService = layoutService;
      }

      isActive(item) {
        return this.selected === item;
      }

      onItemSelect(item) {
        this.selected = this.selected === item ? item : item;
      }

      onSubItemSelect(item) {
        event.stopPropagation();
        this.selected = this.selected === item ? item : item;
      }

      onResizeHeight(event) {
        this.asidebarHeight = window.innerHeight;
      }

      ngOnInit() {
        this.layoutService.setAsidebarHeightCast.subscribe(setSidebarHeight => this.asidebarHeight = setSidebarHeight);
        this.title = 'Smart Agent Dashboard';
        this.menuList = [{
          name: 'Dashboard',
          icon: 'fas fa-tachometer-alt',
          url: '/dashboard'
        }, {
          name: 'Elements',
          icon: 'far fa-clone',
          url: '/elements',
          badge: '2',
          badgeBg: 'bg-success'
        }, {
          name: 'Tables',
          icon: 'far fa-calendar-alt',
          url: '/tables',
          badge: 'New',
          badgeBg: 'bg-danger'
        }, {
          name: 'eCommerce',
          icon: 'fas fa-shopping-cart',
          subMenu: [{
            name: 'Orders',
            icon: 'far fa-circle',
            url: '/orders'
          }, {
            name: 'Order View',
            icon: 'far fa-circle',
            url: '/order-view'
          }, {
            name: 'Products',
            icon: 'far fa-circle',
            url: '/products'
          }, {
            name: 'Product Edit',
            icon: 'far fa-circle',
            url: '/product-edit'
          }]
        }, {
          name: 'Components',
          icon: 'far fa-sun',
          subMenu: [{
            name: 'Date & Time Picker',
            icon: 'far fa-circle',
            url: '/date-time-picker'
          }, {
            name: 'Color Pickers',
            icon: 'far fa-circle',
            url: '/color-pickers'
          }, {
            name: 'Bootstrap Select',
            icon: 'far fa-circle',
            url: '/select'
          }, {
            name: 'Bootstrap Switch',
            icon: 'far fa-circle',
            url: '/switch'
          }, {
            name: 'Bootstrap file upload',
            icon: 'far fa-circle',
            url: '/file-upload'
          }, {
            name: 'Bootstrap TouchSpin',
            icon: 'far fa-circle',
            url: '/touchspin'
          }, {
            name: 'Bootstrap Icons',
            icon: 'far fa-circle',
            url: '/icons'
          }, {
            name: 'Code Editor',
            icon: 'far fa-circle',
            url: '/code-editor'
          }, {
            name: 'WYSIWYG Editor',
            icon: 'far fa-circle',
            url: '/WYSIWYG-editor'
          }, {
            name: 'Widgets & Tools',
            icon: 'far fa-circle',
            url: '/widgets-tools'
          }, {
            name: 'Context Menu',
            icon: 'far fa-circle',
            url: '/context-menu'
          }]
        }, {
          name: 'UI Features',
          icon: 'far fa-gem',
          subMenu: [{
            name: 'Color Library',
            icon: 'far fa-circle',
            url: '/color-library'
          }, {
            name: 'Grid System',
            icon: 'far fa-circle',
            url: '/grid-system'
          }, {
            name: 'General Components',
            icon: 'far fa-circle',
            url: '/general-components'
          }, {
            name: 'Buttons',
            icon: 'far fa-circle',
            url: '/buttons'
          }, {
            name: 'Spinner Buttons',
            icon: 'far fa-circle',
            url: '/spinner-buttons'
          }, {
            name: 'Font Icons',
            icon: 'far fa-circle',
            url: '/font-icons'
          }, {
            name: 'Social Icons',
            icon: 'far fa-circle',
            url: '/soical-icons'
          }]
        }, {
          name: 'Form Stuff',
          icon: 'far fa-edit',
          subMenu: [{
            name: 'Form Control',
            icon: 'far fa-circle',
            url: '/form-control'
          }, {
            name: 'Form Validation',
            icon: 'far fa-circle',
            url: '/form-validation'
          }, {
            name: 'Form Layouts',
            icon: 'far fa-circle',
            url: '/form-layouts'
          }, {
            name: 'Form Input Mask',
            icon: 'far fa-circle',
            url: '/form-input-mask'
          }, {
            name: 'Form X-editable',
            icon: 'far fa-circle',
            url: '/form-X-editable'
          }, {
            name: 'Form Wizard',
            icon: 'far fa-circle',
            url: '/form-wizard'
          }, {
            name: 'Image Cropping',
            icon: 'far fa-circle',
            url: '/image-cropping'
          }, {
            name: 'Multiple File Upload',
            icon: 'far fa-circle',
            url: '/multiple-file-upload'
          }, {
            name: 'Dropzone File Upload',
            icon: 'far fa-circle',
            url: '/dropzone-file-upload'
          }]
        }, {
          name: 'Portlets',
          icon: 'far fa-bookmark',
          subMenu: [{
            name: 'Boxed Portlets',
            icon: 'far fa-circle',
            url: '/boxed-portlets'
          }, {
            name: 'Light Portlets',
            icon: 'far fa-circle',
            url: '/light-portlets'
          }, {
            name: 'Solid Portlets',
            icon: 'far fa-circle',
            url: '/solid-portlets'
          }, {
            name: 'Ajax Portles',
            icon: 'far fa-circle',
            url: '/ajax-portles'
          }, {
            name: 'Draggable Portlets',
            icon: 'far fa-circle',
            url: '/draggable-portlets'
          }]
        }, {
          name: 'Pages Layouts',
          icon: 'far fa-list-alt',
          subMenu: [{
            name: 'Blank Page',
            icon: 'far fa-circle',
            url: '/blank-page'
          }, {
            name: 'Ajax Contant',
            icon: 'far fa-circle',
            url: '/ajax-contant-layout'
          }, {
            name: 'Off-Canvas Menu',
            icon: 'far fa-circle',
            url: '/off-canvas-mobile-menu'
          }, {
            name: 'Classic Page Head',
            icon: 'far fa-circle',
            url: '/classic-page-head'
          }, {
            name: 'Light Page Head',
            icon: 'far fa-circle',
            url: '/light-page-head'
          }, {
            name: 'Boxed Page',
            icon: 'far fa-circle',
            url: '/boxed-page'
          }]
        }, {
          name: 'Custom Layout',
          icon: 'far fa-paper-plane',
          subMenu: [{
            name: 'Light Sidebar',
            icon: 'far fa-circle',
            url: '/light-sidebar-menu'
          }, {
            name: 'Hover Sidebar',
            icon: 'far fa-circle',
            url: '/hover-sidebar-menu'
          }, {
            name: 'Fixed Sidebar',
            icon: 'far fa-circle',
            url: '/fixed-sidebar-layout'
          }, {
            name: 'Closed Sidebar',
            icon: 'far fa-circle',
            url: '/closed-sidebar-layout'
          }, {
            name: 'Offcanvas Sidebar',
            icon: 'far fa-circle',
            url: '/offcanvas-sidebar-layout'
          }]
        }, {
          name: 'Invoice',
          icon: 'far fa-file-alt',
          url: '/invoice-summary'
        }, {
          name: 'Authentication',
          icon: 'far fa-user-circle',
          url: '/authentication'
        }, {
          name: 'Other App',
          icon: 'far fa-comments',
          url: '/other-app',
          badge: 'New',
          badgeBg: 'bg-warning'
        }];
      }

    };

    LeftPanelComponent.ctorParameters = () => [{
      type: _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LeftPanelComponent.prototype, "navLayout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LeftPanelComponent.prototype, "defaultNavbar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LeftPanelComponent.prototype, "toggleNavbar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], LeftPanelComponent.prototype, "toggleStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LeftPanelComponent.prototype, "navbarEffect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LeftPanelComponent.prototype, "deviceType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LeftPanelComponent.prototype, "headerColorTheme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LeftPanelComponent.prototype, "navbarColorTheme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LeftPanelComponent.prototype, "activeNavColorTheme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], LeftPanelComponent.prototype, "onResizeHeight", null);
    LeftPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-left-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./left-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/common/left-panel/left-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./left-panel.component.scss */
      "./src/app/pages/common/left-panel/left-panel.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])], LeftPanelComponent);
    /***/
  },

  /***/
  "./src/app/pages/common/right-panel/right-panel.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/common/right-panel/right-panel.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCommonRightPanelRightPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.flux-right-panel {\n  background: #e8ebf3;\n  border-left: 1px solid #d7dded;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 230px;\n  margin-top: 116px;\n  margin-right: -230px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.flux-right-panel .selector-toggle {\n  position: relative;\n}\n.flux-right-panel .selector-toggle span {\n  display: block;\n  border: 1px solid #e1e7f3;\n  border-right: 0;\n  position: absolute;\n  top: 0px;\n  left: -35px;\n  width: 35px;\n  height: 38px;\n  display: block;\n  cursor: pointer;\n  text-align: center;\n  background: #FFF;\n  color: #9c9c9c;\n  font-size: 19px;\n  padding-top: 3px;\n}\n.flux-right-panel .selector-toggle span:hover {\n  color: #007bff;\n}\n.flux-right-panel .selector-toggle :before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n}\n.flux-right-panel .title {\n  font-size: 14px;\n  margin: 0;\n  padding: 10px;\n  border: 1px solid #e1e7f3;\n  border-left: 0px;\n  color: #9e9a9a;\n  font-weight: 400;\n  background: #FFF;\n}\n.flux-right-panel ul.setting-list {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n}\n.flux-right-panel ul.setting-list li {\n  margin: 0px;\n  padding: 5px 10px;\n  list-style: none;\n}\n.flux-right-panel .switch input {\n  display: none;\n}\n.flux-right-panel .switch-text {\n  padding-top: 5px;\n}\n.flux-right-panel .switch {\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n  -webkit-transform: translateY(22%);\n          transform: translateY(22%);\n  position: relative;\n}\n.flux-right-panel .slider {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-radius: 30px;\n  box-shadow: 0 0 0 2px #777, 0 0 4px #777;\n  cursor: pointer;\n  border: 4px solid transparent;\n  overflow: hidden;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.flux-right-panel .slider:before {\n  position: absolute;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background: #777;\n  border-radius: 30px;\n  -webkit-transform: translateX(-20px);\n          transform: translateX(-20px);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.flux-right-panel input:checked + .slider:before {\n  -webkit-transform: translateX(20px);\n          transform: translateX(20px);\n  background: #28a745;\n}\n.flux-right-panel input:checked + .slider {\n  box-shadow: 0 0 0 2px #28a745, 0 0 2px #28a745;\n}\n.flux-right-panel li.color-theme-setting {\n  margin-bottom: 10px !important;\n}\n.flux-right-panel .color-theme-setting .theme-title {\n  position: relative;\n  font-size: 13px;\n  color: #212529;\n  margin: 0;\n  padding: 0;\n  font-weight: 400;\n  border-bottom: 1px solid #dadde5;\n  padding-bottom: 5px;\n  margin-bottom: 10px;\n}\n.flux-right-panel .color-theme-setting a {\n  width: 20px;\n  height: 20px;\n  display: block;\n  float: left;\n  margin-right: 5px;\n  text-decoration: none;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 50%;\n  cursor: pointer;\n}\n.flux-right-panel .color-theme-setting a[theme=theme1] {\n  background: #FFF;\n}\n.flux-right-panel .color-theme-setting a[theme=theme2] {\n  background: #354052;\n}\n.flux-right-panel .color-theme-setting a[theme=theme3] {\n  background: #3f5485;\n}\n.flux-right-panel .color-theme-setting a[theme=theme4] {\n  background: #3c75b5;\n}\n.flux-right-panel .color-theme-setting a[theme=theme5] {\n  background: #583a63;\n}\n.flux-right-panel .color-theme-setting a[theme=theme6] {\n  background: #ededed;\n}\n.flux-right-panel .color-theme-setting a[theme=theme7] {\n  background: #0aa699;\n}\n.flux-right-panel.open {\n  margin-right: 0px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.form-control {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tbW9uL3JpZ2h0LXBhbmVsL3JpZ2h0LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb21tb24vcmlnaHQtcGFuZWwvRTpcXHN0YXRQcm9qZWN0c1xcRWRhZC1Ub2tlbi1Cb3hcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGNvbW1vblxccmlnaHQtcGFuZWxcXHJpZ2h0LXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0NBQUE7RUFHQSxnQ0FBQTtBREVGO0FDQUU7RUFDRSxrQkFBQTtBREVKO0FDQUk7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBREVOO0FDQ0k7RUFDRSxjQUFBO0FEQ047QUNFSTtFQUNFLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QURBTjtBQ0lFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FERko7QUNLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURISjtBQ01FO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QURKSjtBQ09FO0VBQ0UsYUFBQTtBRExKO0FDUUU7RUFDRSxnQkFBQTtBRE5KO0FDU0U7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGtCQUFBO0FEUEo7QUNVRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QURSSjtBQ1dFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QURUSjtBQ1lFO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0FEVko7QUNhRTtFQUNFLDhDQUFBO0FEWEo7QUNjRTtFQUNFLDhCQUFBO0FEWko7QUNlRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FEYko7QUNnQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZFQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEZEo7QUNpQkU7RUFDRSxnQkFBQTtBRGZKO0FDa0JFO0VBQ0UsbUJBQUE7QURoQko7QUNtQkU7RUFDRSxtQkFBQTtBRGpCSjtBQ29CRTtFQUNFLG1CQUFBO0FEbEJKO0FDcUJFO0VBQ0UsbUJBQUE7QURuQko7QUNzQkU7RUFDRSxtQkFBQTtBRHBCSjtBQ3VCRTtFQUNFLG1CQUFBO0FEckJKO0FDeUJBO0VBQ0UsaUJBQUE7RUFDQSx3Q0FBQTtFQUdBLGdDQUFBO0FEdEJGO0FDd0JBO0VBQ0UsZUFBQTtBRHJCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbi9yaWdodC1wYW5lbC9yaWdodC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5mbHV4LXJpZ2h0LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2U4ZWJmMztcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDdkZGVkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDIzMHB4O1xuICBtYXJnaW4tdG9wOiAxMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMjMwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5mbHV4LXJpZ2h0LXBhbmVsIC5zZWxlY3Rvci10b2dnbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZmx1eC1yaWdodC1wYW5lbCAuc2VsZWN0b3ItdG9nZ2xlIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTdmMztcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAtMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzhweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBjb2xvcjogIzljOWM5YztcbiAgZm9udC1zaXplOiAxOXB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xufVxuLmZsdXgtcmlnaHQtcGFuZWwgLnNlbGVjdG9yLXRvZ2dsZSBzcGFuOmhvdmVyIHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG4uZmx1eC1yaWdodC1wYW5lbCAuc2VsZWN0b3ItdG9nZ2xlIDpiZWZvcmUge1xuICBjb250ZW50OiBcIu+Ds1wiO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5mbHV4LXJpZ2h0LXBhbmVsIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlN2YzO1xuICBib3JkZXItbGVmdDogMHB4O1xuICBjb2xvcjogIzllOWE5YTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbn1cbi5mbHV4LXJpZ2h0LXBhbmVsIHVsLnNldHRpbmctbGlzdCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uZmx1eC1yaWdodC1wYW5lbCB1bC5zZXR0aW5nLWxpc3QgbGkge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uZmx1eC1yaWdodC1wYW5lbCAuc3dpdGNoIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5mbHV4LXJpZ2h0LXBhbmVsIC5zd2l0Y2gtdGV4dCB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4uZmx1eC1yaWdodC1wYW5lbCAuc3dpdGNoIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjIlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZsdXgtcmlnaHQtcGFuZWwgLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggIzc3NywgMCAwIDRweCAjNzc3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuLmZsdXgtcmlnaHQtcGFuZWwgLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM3Nzc7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4uZmx1eC1yaWdodC1wYW5lbCBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIGJhY2tncm91bmQ6ICMyOGE3NDU7XG59XG4uZmx1eC1yaWdodC1wYW5lbCBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjMjhhNzQ1LCAwIDAgMnB4ICMyOGE3NDU7XG59XG4uZmx1eC1yaWdodC1wYW5lbCBsaS5jb2xvci10aGVtZS1zZXR0aW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuLmZsdXgtcmlnaHQtcGFuZWwgLmNvbG9yLXRoZW1lLXNldHRpbmcgLnRoZW1lLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGFkZGU1O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmZsdXgtcmlnaHQtcGFuZWwgLmNvbG9yLXRoZW1lLXNldHRpbmcgYSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZsdXgtcmlnaHQtcGFuZWwgLmNvbG9yLXRoZW1lLXNldHRpbmcgYVt0aGVtZT10aGVtZTFdIHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbn1cbi5mbHV4LXJpZ2h0LXBhbmVsIC5jb2xvci10aGVtZS1zZXR0aW5nIGFbdGhlbWU9dGhlbWUyXSB7XG4gIGJhY2tncm91bmQ6ICMzNTQwNTI7XG59XG4uZmx1eC1yaWdodC1wYW5lbCAuY29sb3ItdGhlbWUtc2V0dGluZyBhW3RoZW1lPXRoZW1lM10ge1xuICBiYWNrZ3JvdW5kOiAjM2Y1NDg1O1xufVxuLmZsdXgtcmlnaHQtcGFuZWwgLmNvbG9yLXRoZW1lLXNldHRpbmcgYVt0aGVtZT10aGVtZTRdIHtcbiAgYmFja2dyb3VuZDogIzNjNzViNTtcbn1cbi5mbHV4LXJpZ2h0LXBhbmVsIC5jb2xvci10aGVtZS1zZXR0aW5nIGFbdGhlbWU9dGhlbWU1XSB7XG4gIGJhY2tncm91bmQ6ICM1ODNhNjM7XG59XG4uZmx1eC1yaWdodC1wYW5lbCAuY29sb3ItdGhlbWUtc2V0dGluZyBhW3RoZW1lPXRoZW1lNl0ge1xuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xufVxuLmZsdXgtcmlnaHQtcGFuZWwgLmNvbG9yLXRoZW1lLXNldHRpbmcgYVt0aGVtZT10aGVtZTddIHtcbiAgYmFja2dyb3VuZDogIzBhYTY5OTtcbn1cblxuLmZsdXgtcmlnaHQtcGFuZWwub3BlbiB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBmb250LXNpemU6IDEzcHg7XG59IiwiLmZsdXgtcmlnaHQtcGFuZWwge1xyXG4gIGJhY2tncm91bmQ6ICNlOGViZjM7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDdkZGVkO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBtYXJnaW4tdG9wOiAxMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMzBweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIC5zZWxlY3Rvci10b2dnbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTdmMztcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAtMzVweDtcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgICBjb2xvcjogIzljOWM5YztcclxuICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW46aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIH1cclxuXHJcbiAgICA6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcXGYwZjNcIjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJztcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlN2YzO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDBweDtcclxuICAgIGNvbG9yOiAjOWU5YTlhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgfVxyXG5cclxuICB1bC5zZXR0aW5nLWxpc3Qge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgdWwuc2V0dGluZy1saXN0IGxpIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnN3aXRjaCBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnN3aXRjaC10ZXh0IHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuc3dpdGNoIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIyJSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggIzc3NywgMCAwIDRweCAjNzc3O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIH1cclxuXHJcbiAgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzc3NztcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjMjhhNzQ1LCAwIDAgMnB4ICMyOGE3NDU7XHJcbiAgfVxyXG5cclxuICBsaS5jb2xvci10aGVtZS1zZXR0aW5nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jb2xvci10aGVtZS1zZXR0aW5nIC50aGVtZS10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYWRkZTU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5jb2xvci10aGVtZS1zZXR0aW5nIGEge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb2xvci10aGVtZS1zZXR0aW5nIGFbdGhlbWU9XCJ0aGVtZTFcIl0ge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICB9XHJcblxyXG4gIC5jb2xvci10aGVtZS1zZXR0aW5nIGFbdGhlbWU9XCJ0aGVtZTJcIl0ge1xyXG4gICAgYmFja2dyb3VuZDogIzM1NDA1MjtcclxuICB9XHJcblxyXG4gIC5jb2xvci10aGVtZS1zZXR0aW5nIGFbdGhlbWU9XCJ0aGVtZTNcIl0ge1xyXG4gICAgYmFja2dyb3VuZDogIzNmNTQ4NTtcclxuICB9XHJcblxyXG4gIC5jb2xvci10aGVtZS1zZXR0aW5nIGFbdGhlbWU9XCJ0aGVtZTRcIl0ge1xyXG4gICAgYmFja2dyb3VuZDogIzNjNzViNTtcclxuICB9XHJcblxyXG4gIC5jb2xvci10aGVtZS1zZXR0aW5nIGFbdGhlbWU9XCJ0aGVtZTVcIl0ge1xyXG4gICAgYmFja2dyb3VuZDogIzU4M2E2MztcclxuICB9XHJcblxyXG4gIC5jb2xvci10aGVtZS1zZXR0aW5nIGFbdGhlbWU9XCJ0aGVtZTZcIl0ge1xyXG4gICAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxuICB9XHJcblxyXG4gIC5jb2xvci10aGVtZS1zZXR0aW5nIGFbdGhlbWU9XCJ0aGVtZTdcIl0ge1xyXG4gICAgYmFja2dyb3VuZDogIzBhYTY5OTtcclxuICB9XHJcbn1cclxuXHJcbi5mbHV4LXJpZ2h0LXBhbmVsLm9wZW4ge1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gIGZvbnQtc2l6ZToxM3B4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/common/right-panel/right-panel.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/common/right-panel/right-panel.component.ts ***!
    \*******************************************************************/

  /*! exports provided: RightPanelComponent */

  /***/
  function srcAppPagesCommonRightPanelRightPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RightPanelComponent", function () {
      return RightPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/layout.service */
    "./src/app/shared/services/layout.service.ts");

    let RightPanelComponent = class RightPanelComponent {
      constructor(layoutService) {
        this.layoutService = layoutService;
        this.rightPanelStatus = false;
        this.navBarMenuEffectList = [];
      }

      changeTheRightPanelStatus() {
        this.rightPanelStatus = !this.rightPanelStatus;
      }

      setThemeLayout(event) {
        if (event.target.checked) {
          this.layoutService.getThemeLayout('box');
        } else {
          this.layoutService.getThemeLayout('wide');
        }
      }

      setCollapsedLeftHeader(event) {
        if (event.target.checked) {
          this.layoutService.getCollapsedLeftHeader(true);
        } else {
          this.layoutService.getCollapsedLeftHeader(false);
        }
      }

      changeNavbar(event) {
        if (event.target.checked) {
          this.layoutService.getNavLayout('horizontal');
        } else {
          this.layoutService.getNavLayout('vertical');
        }
      }

      onLheaderThemeChange(themeName) {
        event.stopPropagation();
        this.layoutService.getLeftHeaderThemeOnChange(themeName);
      }

      onHeaderThemeChange(themeName) {
        event.stopPropagation();
        this.layoutService.getHeaderThemeOnChange(themeName);
      }

      onAsidebarThemeChange(themeName) {
        event.stopPropagation();
        this.layoutService.getAsidebarThemeOnChange(themeName);
      }

      onChangeEffect(effect) {
        this.layoutService.getNavBarEffect(effect);

        if (effect === 'overlay' || effect === 'push') {
          this.layoutService.getDefaultNavbar('offcanvas');
          this.layoutService.getToggleNavbar('expanded');
        }
      }

      ngOnInit() {
        this.navBarMenuEffectList = this.layoutService.navBarMenuEffect;
        this.layoutService.nvEffectCast.subscribe(nvEffect => this.navbarEffect = nvEffect);
        this.lHeaderTheme = [{
          theme: 'theme1'
        }, {
          theme: 'theme2'
        }, {
          theme: 'theme3'
        }, {
          theme: 'theme4'
        }, {
          theme: 'theme5'
        }, {
          theme: 'theme6'
        }, {
          theme: 'theme7'
        }];
        this.headerTheme = [{
          theme: 'theme1'
        }, {
          theme: 'theme2'
        }, {
          theme: 'theme3'
        }, {
          theme: 'theme4'
        }, {
          theme: 'theme5'
        }, {
          theme: 'theme6'
        }, {
          theme: 'theme7'
        }];
        this.leftPanelTheme = [{
          theme: 'theme1'
        }, {
          theme: 'theme2'
        }, {
          theme: 'theme3'
        }, {
          theme: 'theme4'
        }, {
          theme: 'theme5'
        }, {
          theme: 'theme6'
        }, {
          theme: 'theme7'
        }];
      }

    };

    RightPanelComponent.ctorParameters = () => [{
      type: _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
    }];

    RightPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-right-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./right-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/common/right-panel/right-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./right-panel.component.scss */
      "./src/app/pages/common/right-panel/right-panel.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])], RightPanelComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/authentication/authentication.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/components/authentication/authentication.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsAuthenticationAuthenticationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/components/authentication/authentication.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/components/authentication/authentication.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AuthenticationComponent */

  /***/
  function srcAppPagesComponentsAuthenticationAuthenticationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function () {
      return AuthenticationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AuthenticationComponent = class AuthenticationComponent {
      constructor() {}

      ngOnInit() {}

    };
    AuthenticationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-authentication',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./authentication.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/authentication/authentication.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./authentication.component.scss */
      "./src/app/pages/components/authentication/authentication.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AuthenticationComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/code-editor/code-editor.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/code-editor/code-editor.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsBootstrapComponentCodeEditorCodeEditorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvYm9vdHN0cmFwQ29tcG9uZW50L2NvZGUtZWRpdG9yL2NvZGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/code-editor/code-editor.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/code-editor/code-editor.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: CodeEditorComponent */

  /***/
  function srcAppPagesComponentsBootstrapComponentCodeEditorCodeEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodeEditorComponent", function () {
      return CodeEditorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CodeEditorComponent = class CodeEditorComponent {
      constructor() {}

      ngOnInit() {}

    };
    CodeEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-code-editor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./code-editor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/code-editor/code-editor.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./code-editor.component.scss */
      "./src/app/pages/components/bootstrapComponent/code-editor/code-editor.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CodeEditorComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/color-pickers/color-pickers.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/color-pickers/color-pickers.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsBootstrapComponentColorPickersColorPickersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvYm9vdHN0cmFwQ29tcG9uZW50L2NvbG9yLXBpY2tlcnMvY29sb3ItcGlja2Vycy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/color-pickers/color-pickers.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/color-pickers/color-pickers.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: ColorPickersComponent */

  /***/
  function srcAppPagesComponentsBootstrapComponentColorPickersColorPickersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorPickersComponent", function () {
      return ColorPickersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ColorPickersComponent = class ColorPickersComponent {
      constructor() {}

      ngOnInit() {}

    };
    ColorPickersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-color-pickers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./color-pickers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/color-pickers/color-pickers.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./color-pickers.component.scss */
      "./src/app/pages/components/bootstrapComponent/color-pickers/color-pickers.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ColorPickersComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/context-menu/context-menu.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/context-menu/context-menu.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsBootstrapComponentContextMenuContextMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvYm9vdHN0cmFwQ29tcG9uZW50L2NvbnRleHQtbWVudS9jb250ZXh0LW1lbnUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/context-menu/context-menu.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/context-menu/context-menu.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ContextMenuComponent */

  /***/
  function srcAppPagesComponentsBootstrapComponentContextMenuContextMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContextMenuComponent", function () {
      return ContextMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ContextMenuComponent = class ContextMenuComponent {
      constructor() {}

      ngOnInit() {}

    };
    ContextMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-context-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./context-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/context-menu/context-menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./context-menu.component.scss */
      "./src/app/pages/components/bootstrapComponent/context-menu/context-menu.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ContextMenuComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/date-time-picker/date-time-picker.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/date-time-picker/date-time-picker.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsBootstrapComponentDateTimePickerDateTimePickerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvYm9vdHN0cmFwQ29tcG9uZW50L2RhdGUtdGltZS1waWNrZXIvZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/date-time-picker/date-time-picker.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/date-time-picker/date-time-picker.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: DateTimePickerComponent */

  /***/
  function srcAppPagesComponentsBootstrapComponentDateTimePickerDateTimePickerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateTimePickerComponent", function () {
      return DateTimePickerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let DateTimePickerComponent = class DateTimePickerComponent {
      constructor() {}

      ngOnInit() {}

    };
    DateTimePickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-date-time-picker',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./date-time-picker.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/date-time-picker/date-time-picker.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./date-time-picker.component.scss */
      "./src/app/pages/components/bootstrapComponent/date-time-picker/date-time-picker.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DateTimePickerComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/file-upload/file-upload.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/file-upload/file-upload.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsBootstrapComponentFileUploadFileUploadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvYm9vdHN0cmFwQ29tcG9uZW50L2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/file-upload/file-upload.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/file-upload/file-upload.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: FileUploadComponent */

  /***/
  function srcAppPagesComponentsBootstrapComponentFileUploadFileUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function () {
      return FileUploadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let FileUploadComponent = class FileUploadComponent {
      constructor() {}

      ngOnInit() {}

    };
    FileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-file-upload',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./file-upload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/file-upload/file-upload.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./file-upload.component.scss */
      "./src/app/pages/components/bootstrapComponent/file-upload/file-upload.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FileUploadComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/icons/icons.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/icons/icons.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsBootstrapComponentIconsIconsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvYm9vdHN0cmFwQ29tcG9uZW50L2ljb25zL2ljb25zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/icons/icons.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/icons/icons.component.ts ***!
    \******************************************************************************/

  /*! exports provided: IconsComponent */

  /***/
  function srcAppPagesComponentsBootstrapComponentIconsIconsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconsComponent", function () {
      return IconsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let IconsComponent = class IconsComponent {
      constructor() {}

      ngOnInit() {}

    };
    IconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-icons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./icons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/icons/icons.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./icons.component.scss */
      "./src/app/pages/components/bootstrapComponent/icons/icons.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], IconsComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/select/select.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/select/select.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsBootstrapComponentSelectSelectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvYm9vdHN0cmFwQ29tcG9uZW50L3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/select/select.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/select/select.component.ts ***!
    \********************************************************************************/

  /*! exports provided: SelectComponent */

  /***/
  function srcAppPagesComponentsBootstrapComponentSelectSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
      return SelectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SelectComponent = class SelectComponent {
      constructor() {}

      ngOnInit() {}

    };
    SelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/select/select.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select.component.scss */
      "./src/app/pages/components/bootstrapComponent/select/select.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SelectComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/switch/switch.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/switch/switch.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsBootstrapComponentSwitchSwitchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvYm9vdHN0cmFwQ29tcG9uZW50L3N3aXRjaC9zd2l0Y2guY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/switch/switch.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/switch/switch.component.ts ***!
    \********************************************************************************/

  /*! exports provided: SwitchComponent */

  /***/
  function srcAppPagesComponentsBootstrapComponentSwitchSwitchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwitchComponent", function () {
      return SwitchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SwitchComponent = class SwitchComponent {
      constructor() {}

      ngOnInit() {}

    };
    SwitchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-switch',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./switch.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/switch/switch.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./switch.component.scss */
      "./src/app/pages/components/bootstrapComponent/switch/switch.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SwitchComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/touchspin/touchspin.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/touchspin/touchspin.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsBootstrapComponentTouchspinTouchspinComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvYm9vdHN0cmFwQ29tcG9uZW50L3RvdWNoc3Bpbi90b3VjaHNwaW4uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/touchspin/touchspin.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/touchspin/touchspin.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: TouchspinComponent */

  /***/
  function srcAppPagesComponentsBootstrapComponentTouchspinTouchspinComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TouchspinComponent", function () {
      return TouchspinComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let TouchspinComponent = class TouchspinComponent {
      constructor() {}

      ngOnInit() {}

    };
    TouchspinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-touchspin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./touchspin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/touchspin/touchspin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./touchspin.component.scss */
      "./src/app/pages/components/bootstrapComponent/touchspin/touchspin.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TouchspinComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/widgets-tools/widgets-tools.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/widgets-tools/widgets-tools.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsBootstrapComponentWidgetsToolsWidgetsToolsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvYm9vdHN0cmFwQ29tcG9uZW50L3dpZGdldHMtdG9vbHMvd2lkZ2V0cy10b29scy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/widgets-tools/widgets-tools.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/widgets-tools/widgets-tools.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: WidgetsToolsComponent */

  /***/
  function srcAppPagesComponentsBootstrapComponentWidgetsToolsWidgetsToolsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetsToolsComponent", function () {
      return WidgetsToolsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let WidgetsToolsComponent = class WidgetsToolsComponent {
      constructor() {}

      ngOnInit() {}

    };
    WidgetsToolsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-widgets-tools',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./widgets-tools.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/widgets-tools/widgets-tools.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./widgets-tools.component.scss */
      "./src/app/pages/components/bootstrapComponent/widgets-tools/widgets-tools.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], WidgetsToolsComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/wysiwyg-editor/wysiwyg-editor.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/wysiwyg-editor/wysiwyg-editor.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsBootstrapComponentWysiwygEditorWysiwygEditorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvYm9vdHN0cmFwQ29tcG9uZW50L3d5c2l3eWctZWRpdG9yL3d5c2l3eWctZWRpdG9yLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/bootstrapComponent/wysiwyg-editor/wysiwyg-editor.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/pages/components/bootstrapComponent/wysiwyg-editor/wysiwyg-editor.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: WYSIWYGEditorComponent */

  /***/
  function srcAppPagesComponentsBootstrapComponentWysiwygEditorWysiwygEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WYSIWYGEditorComponent", function () {
      return WYSIWYGEditorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let WYSIWYGEditorComponent = class WYSIWYGEditorComponent {
      constructor() {}

      ngOnInit() {}

    };
    WYSIWYGEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wysiwyg-editor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wysiwyg-editor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/bootstrapComponent/wysiwyg-editor/wysiwyg-editor.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wysiwyg-editor.component.scss */
      "./src/app/pages/components/bootstrapComponent/wysiwyg-editor/wysiwyg-editor.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], WYSIWYGEditorComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/custom-layout/closed-sidebar-layout/closed-sidebar-layout.component.scss":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/pages/components/custom-layout/closed-sidebar-layout/closed-sidebar-layout.component.scss ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsCustomLayoutClosedSidebarLayoutClosedSidebarLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvY3VzdG9tLWxheW91dC9jbG9zZWQtc2lkZWJhci1sYXlvdXQvY2xvc2VkLXNpZGViYXItbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/custom-layout/closed-sidebar-layout/closed-sidebar-layout.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/pages/components/custom-layout/closed-sidebar-layout/closed-sidebar-layout.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: ClosedSidebarLayoutComponent */

  /***/
  function srcAppPagesComponentsCustomLayoutClosedSidebarLayoutClosedSidebarLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClosedSidebarLayoutComponent", function () {
      return ClosedSidebarLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ClosedSidebarLayoutComponent = class ClosedSidebarLayoutComponent {
      constructor() {}

      ngOnInit() {}

    };
    ClosedSidebarLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-closed-sidebar-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./closed-sidebar-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/custom-layout/closed-sidebar-layout/closed-sidebar-layout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./closed-sidebar-layout.component.scss */
      "./src/app/pages/components/custom-layout/closed-sidebar-layout/closed-sidebar-layout.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ClosedSidebarLayoutComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/custom-layout/fixed-sidebar-layout/fixed-sidebar-layout.component.scss":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/pages/components/custom-layout/fixed-sidebar-layout/fixed-sidebar-layout.component.scss ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsCustomLayoutFixedSidebarLayoutFixedSidebarLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvY3VzdG9tLWxheW91dC9maXhlZC1zaWRlYmFyLWxheW91dC9maXhlZC1zaWRlYmFyLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/components/custom-layout/fixed-sidebar-layout/fixed-sidebar-layout.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/pages/components/custom-layout/fixed-sidebar-layout/fixed-sidebar-layout.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: FixedSidebarLayoutComponent */

  /***/
  function srcAppPagesComponentsCustomLayoutFixedSidebarLayoutFixedSidebarLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FixedSidebarLayoutComponent", function () {
      return FixedSidebarLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let FixedSidebarLayoutComponent = class FixedSidebarLayoutComponent {
      constructor() {}

      ngOnInit() {}

    };
    FixedSidebarLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fixed-sidebar-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fixed-sidebar-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/custom-layout/fixed-sidebar-layout/fixed-sidebar-layout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fixed-sidebar-layout.component.scss */
      "./src/app/pages/components/custom-layout/fixed-sidebar-layout/fixed-sidebar-layout.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FixedSidebarLayoutComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/custom-layout/hover-sidebar-menu/hover-sidebar-menu.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/pages/components/custom-layout/hover-sidebar-menu/hover-sidebar-menu.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsCustomLayoutHoverSidebarMenuHoverSidebarMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvY3VzdG9tLWxheW91dC9ob3Zlci1zaWRlYmFyLW1lbnUvaG92ZXItc2lkZWJhci1tZW51LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/custom-layout/hover-sidebar-menu/hover-sidebar-menu.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/pages/components/custom-layout/hover-sidebar-menu/hover-sidebar-menu.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: HoverSidebarMenuComponent */

  /***/
  function srcAppPagesComponentsCustomLayoutHoverSidebarMenuHoverSidebarMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HoverSidebarMenuComponent", function () {
      return HoverSidebarMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let HoverSidebarMenuComponent = class HoverSidebarMenuComponent {
      constructor() {}

      ngOnInit() {}

    };
    HoverSidebarMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hover-sidebar-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hover-sidebar-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/custom-layout/hover-sidebar-menu/hover-sidebar-menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hover-sidebar-menu.component.scss */
      "./src/app/pages/components/custom-layout/hover-sidebar-menu/hover-sidebar-menu.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HoverSidebarMenuComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/custom-layout/light-sidebar-menu/light-sidebar-menu.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/pages/components/custom-layout/light-sidebar-menu/light-sidebar-menu.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsCustomLayoutLightSidebarMenuLightSidebarMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvY3VzdG9tLWxheW91dC9saWdodC1zaWRlYmFyLW1lbnUvbGlnaHQtc2lkZWJhci1tZW51LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/custom-layout/light-sidebar-menu/light-sidebar-menu.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/pages/components/custom-layout/light-sidebar-menu/light-sidebar-menu.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: LightSidebarMenuComponent */

  /***/
  function srcAppPagesComponentsCustomLayoutLightSidebarMenuLightSidebarMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LightSidebarMenuComponent", function () {
      return LightSidebarMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let LightSidebarMenuComponent = class LightSidebarMenuComponent {
      constructor() {}

      ngOnInit() {}

    };
    LightSidebarMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-light-sidebar-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./light-sidebar-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/custom-layout/light-sidebar-menu/light-sidebar-menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./light-sidebar-menu.component.scss */
      "./src/app/pages/components/custom-layout/light-sidebar-menu/light-sidebar-menu.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LightSidebarMenuComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/custom-layout/offcanvas-sidebar-layout/offcanvas-sidebar-layout.component.scss":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/pages/components/custom-layout/offcanvas-sidebar-layout/offcanvas-sidebar-layout.component.scss ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsCustomLayoutOffcanvasSidebarLayoutOffcanvasSidebarLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvY3VzdG9tLWxheW91dC9vZmZjYW52YXMtc2lkZWJhci1sYXlvdXQvb2ZmY2FudmFzLXNpZGViYXItbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/custom-layout/offcanvas-sidebar-layout/offcanvas-sidebar-layout.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/pages/components/custom-layout/offcanvas-sidebar-layout/offcanvas-sidebar-layout.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: OffcanvasSidebarLayoutComponent */

  /***/
  function srcAppPagesComponentsCustomLayoutOffcanvasSidebarLayoutOffcanvasSidebarLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffcanvasSidebarLayoutComponent", function () {
      return OffcanvasSidebarLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let OffcanvasSidebarLayoutComponent = class OffcanvasSidebarLayoutComponent {
      constructor() {}

      ngOnInit() {}

    };
    OffcanvasSidebarLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-offcanvas-sidebar-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./offcanvas-sidebar-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/custom-layout/offcanvas-sidebar-layout/offcanvas-sidebar-layout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./offcanvas-sidebar-layout.component.scss */
      "./src/app/pages/components/custom-layout/offcanvas-sidebar-layout/offcanvas-sidebar-layout.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], OffcanvasSidebarLayoutComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/dashboard/dashboard.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/components/dashboard/dashboard.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/components/dashboard/dashboard.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/components/dashboard/dashboard.component.ts ***!
    \*******************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let DashboardComponent = class DashboardComponent {
      constructor() {}

      ngOnInit() {}

    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/pages/components/dashboard/dashboard.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/ecommerce/order-view/order-view.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/components/ecommerce/order-view/order-view.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsEcommerceOrderViewOrderViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvZWNvbW1lcmNlL29yZGVyLXZpZXcvb3JkZXItdmlldy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/components/ecommerce/order-view/order-view.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/components/ecommerce/order-view/order-view.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: OrderViewComponent */

  /***/
  function srcAppPagesComponentsEcommerceOrderViewOrderViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderViewComponent", function () {
      return OrderViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let OrderViewComponent = class OrderViewComponent {
      constructor() {}

      ngOnInit() {}

    };
    OrderViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ecommerce/order-view/order-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-view.component.scss */
      "./src/app/pages/components/ecommerce/order-view/order-view.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], OrderViewComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/ecommerce/orders/orders.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/components/ecommerce/orders/orders.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsEcommerceOrdersOrdersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvZWNvbW1lcmNlL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/components/ecommerce/orders/orders.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/components/ecommerce/orders/orders.component.ts ***!
    \***********************************************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppPagesComponentsEcommerceOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let OrdersComponent = class OrdersComponent {
      constructor() {}

      ngOnInit() {}

    };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ecommerce/orders/orders.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orders.component.scss */
      "./src/app/pages/components/ecommerce/orders/orders.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], OrdersComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/ecommerce/product-edit/product-edit.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/components/ecommerce/product-edit/product-edit.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsEcommerceProductEditProductEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvZWNvbW1lcmNlL3Byb2R1Y3QtZWRpdC9wcm9kdWN0LWVkaXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/components/ecommerce/product-edit/product-edit.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/components/ecommerce/product-edit/product-edit.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ProductEditComponent */

  /***/
  function srcAppPagesComponentsEcommerceProductEditProductEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function () {
      return ProductEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ProductEditComponent = class ProductEditComponent {
      constructor() {}

      ngOnInit() {}

    };
    ProductEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ecommerce/product-edit/product-edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-edit.component.scss */
      "./src/app/pages/components/ecommerce/product-edit/product-edit.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProductEditComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/ecommerce/products/products.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/components/ecommerce/products/products.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsEcommerceProductsProductsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvZWNvbW1lcmNlL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/ecommerce/products/products.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/components/ecommerce/products/products.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppPagesComponentsEcommerceProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ProductsComponent = class ProductsComponent {
      constructor() {}

      ngOnInit() {}

    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ecommerce/products/products.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products.component.scss */
      "./src/app/pages/components/ecommerce/products/products.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProductsComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/elements/elements.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/components/elements/elements.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsElementsElementsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvZWxlbWVudHMvZWxlbWVudHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/components/elements/elements.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/components/elements/elements.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ElementsComponent */

  /***/
  function srcAppPagesComponentsElementsElementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElementsComponent", function () {
      return ElementsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ElementsComponent = class ElementsComponent {
      constructor() {}

      ngOnInit() {}

    };
    ElementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-elements',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./elements.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/elements/elements.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./elements.component.scss */
      "./src/app/pages/components/elements/elements.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ElementsComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/form-stuff/dropzone-file-upload/dropzone-file-upload.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/pages/components/form-stuff/dropzone-file-upload/dropzone-file-upload.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsFormStuffDropzoneFileUploadDropzoneFileUploadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvZm9ybS1zdHVmZi9kcm9wem9uZS1maWxlLXVwbG9hZC9kcm9wem9uZS1maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/components/form-stuff/dropzone-file-upload/dropzone-file-upload.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/pages/components/form-stuff/dropzone-file-upload/dropzone-file-upload.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: DropzoneFileUploadComponent */

  /***/
  function srcAppPagesComponentsFormStuffDropzoneFileUploadDropzoneFileUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropzoneFileUploadComponent", function () {
      return DropzoneFileUploadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let DropzoneFileUploadComponent = class DropzoneFileUploadComponent {
      constructor() {}

      ngOnInit() {}

    };
    DropzoneFileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dropzone-file-upload',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dropzone-file-upload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/dropzone-file-upload/dropzone-file-upload.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dropzone-file-upload.component.scss */
      "./src/app/pages/components/form-stuff/dropzone-file-upload/dropzone-file-upload.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DropzoneFileUploadComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/form-stuff/form-control/form-control.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/components/form-stuff/form-control/form-control.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsFormStuffFormControlFormControlComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvZm9ybS1zdHVmZi9mb3JtLWNvbnRyb2wvZm9ybS1jb250cm9sLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/form-stuff/form-control/form-control.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/components/form-stuff/form-control/form-control.component.ts ***!
    \************************************************************************************/

  /*! exports provided: FormControlComponent */

  /***/
  function srcAppPagesComponentsFormStuffFormControlFormControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormControlComponent", function () {
      return FormControlComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let FormControlComponent = class FormControlComponent {
      constructor() {}

      ngOnInit() {}

    };
    FormControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-control',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-control.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/form-control/form-control.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-control.component.scss */
      "./src/app/pages/components/form-stuff/form-control/form-control.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FormControlComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/form-stuff/form-input-mask/form-input-mask.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/components/form-stuff/form-input-mask/form-input-mask.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsFormStuffFormInputMaskFormInputMaskComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvZm9ybS1zdHVmZi9mb3JtLWlucHV0LW1hc2svZm9ybS1pbnB1dC1tYXNrLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/form-stuff/form-input-mask/form-input-mask.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/components/form-stuff/form-input-mask/form-input-mask.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: FormInputMaskComponent */

  /***/
  function srcAppPagesComponentsFormStuffFormInputMaskFormInputMaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormInputMaskComponent", function () {
      return FormInputMaskComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let FormInputMaskComponent = class FormInputMaskComponent {
      constructor() {}

      ngOnInit() {}

    };
    FormInputMaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-input-mask',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-input-mask.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/form-input-mask/form-input-mask.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-input-mask.component.scss */
      "./src/app/pages/components/form-stuff/form-input-mask/form-input-mask.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FormInputMaskComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/form-stuff/form-layouts/form-layouts.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/components/form-stuff/form-layouts/form-layouts.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsFormStuffFormLayoutsFormLayoutsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvZm9ybS1zdHVmZi9mb3JtLWxheW91dHMvZm9ybS1sYXlvdXRzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/form-stuff/form-layouts/form-layouts.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/components/form-stuff/form-layouts/form-layouts.component.ts ***!
    \************************************************************************************/

  /*! exports provided: FormLayoutsComponent */

  /***/
  function srcAppPagesComponentsFormStuffFormLayoutsFormLayoutsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormLayoutsComponent", function () {
      return FormLayoutsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let FormLayoutsComponent = class FormLayoutsComponent {
      constructor() {}

      ngOnInit() {}

    };
    FormLayoutsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-layouts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-layouts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/form-layouts/form-layouts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-layouts.component.scss */
      "./src/app/pages/components/form-stuff/form-layouts/form-layouts.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FormLayoutsComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/form-stuff/form-validation/form-validation.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/components/form-stuff/form-validation/form-validation.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsFormStuffFormValidationFormValidationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvZm9ybS1zdHVmZi9mb3JtLXZhbGlkYXRpb24vZm9ybS12YWxpZGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/form-stuff/form-validation/form-validation.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/components/form-stuff/form-validation/form-validation.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: FormValidationComponent */

  /***/
  function srcAppPagesComponentsFormStuffFormValidationFormValidationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormValidationComponent", function () {
      return FormValidationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let FormValidationComponent = class FormValidationComponent {
      constructor() {}

      ngOnInit() {}

    };
    FormValidationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-validation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-validation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/form-validation/form-validation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-validation.component.scss */
      "./src/app/pages/components/form-stuff/form-validation/form-validation.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FormValidationComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/form-stuff/form-wizard/form-wizard.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/components/form-stuff/form-wizard/form-wizard.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsFormStuffFormWizardFormWizardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvZm9ybS1zdHVmZi9mb3JtLXdpemFyZC9mb3JtLXdpemFyZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/components/form-stuff/form-wizard/form-wizard.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/components/form-stuff/form-wizard/form-wizard.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: FormWizardComponent */

  /***/
  function srcAppPagesComponentsFormStuffFormWizardFormWizardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormWizardComponent", function () {
      return FormWizardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let FormWizardComponent = class FormWizardComponent {
      constructor() {}

      ngOnInit() {}

    };
    FormWizardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-wizard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-wizard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/form-wizard/form-wizard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-wizard.component.scss */
      "./src/app/pages/components/form-stuff/form-wizard/form-wizard.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FormWizardComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/form-stuff/form-x-editable/form-x-editable.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/components/form-stuff/form-x-editable/form-x-editable.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsFormStuffFormXEditableFormXEditableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvZm9ybS1zdHVmZi9mb3JtLXgtZWRpdGFibGUvZm9ybS14LWVkaXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/form-stuff/form-x-editable/form-x-editable.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/components/form-stuff/form-x-editable/form-x-editable.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: FormXEditableComponent */

  /***/
  function srcAppPagesComponentsFormStuffFormXEditableFormXEditableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormXEditableComponent", function () {
      return FormXEditableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let FormXEditableComponent = class FormXEditableComponent {
      constructor() {}

      ngOnInit() {}

    };
    FormXEditableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-x-editable',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-x-editable.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/form-x-editable/form-x-editable.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-x-editable.component.scss */
      "./src/app/pages/components/form-stuff/form-x-editable/form-x-editable.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FormXEditableComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/form-stuff/image-cropping/image-cropping.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/components/form-stuff/image-cropping/image-cropping.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsFormStuffImageCroppingImageCroppingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvZm9ybS1zdHVmZi9pbWFnZS1jcm9wcGluZy9pbWFnZS1jcm9wcGluZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/components/form-stuff/image-cropping/image-cropping.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/components/form-stuff/image-cropping/image-cropping.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ImageCroppingComponent */

  /***/
  function srcAppPagesComponentsFormStuffImageCroppingImageCroppingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageCroppingComponent", function () {
      return ImageCroppingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ImageCroppingComponent = class ImageCroppingComponent {
      constructor() {}

      ngOnInit() {}

    };
    ImageCroppingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-image-cropping',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./image-cropping.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/image-cropping/image-cropping.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./image-cropping.component.scss */
      "./src/app/pages/components/form-stuff/image-cropping/image-cropping.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ImageCroppingComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/form-stuff/multiple-file-upload/multiple-file-upload.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/pages/components/form-stuff/multiple-file-upload/multiple-file-upload.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsFormStuffMultipleFileUploadMultipleFileUploadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvZm9ybS1zdHVmZi9tdWx0aXBsZS1maWxlLXVwbG9hZC9tdWx0aXBsZS1maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/components/form-stuff/multiple-file-upload/multiple-file-upload.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/pages/components/form-stuff/multiple-file-upload/multiple-file-upload.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: MultipleFileUploadComponent */

  /***/
  function srcAppPagesComponentsFormStuffMultipleFileUploadMultipleFileUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultipleFileUploadComponent", function () {
      return MultipleFileUploadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let MultipleFileUploadComponent = class MultipleFileUploadComponent {
      constructor() {}

      ngOnInit() {}

    };
    MultipleFileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-multiple-file-upload',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./multiple-file-upload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/form-stuff/multiple-file-upload/multiple-file-upload.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./multiple-file-upload.component.scss */
      "./src/app/pages/components/form-stuff/multiple-file-upload/multiple-file-upload.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MultipleFileUploadComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/invoice/invoice.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/components/invoice/invoice.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsInvoiceInvoiceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/invoice/invoice.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/components/invoice/invoice.component.ts ***!
    \***************************************************************/

  /*! exports provided: InvoiceComponent */

  /***/
  function srcAppPagesComponentsInvoiceInvoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function () {
      return InvoiceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let InvoiceComponent = class InvoiceComponent {
      constructor() {}

      ngOnInit() {}

    };
    InvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-invoice',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./invoice.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/invoice/invoice.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./invoice.component.scss */
      "./src/app/pages/components/invoice/invoice.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], InvoiceComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/other-app/other-app.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/components/other-app/other-app.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsOtherAppOtherAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvb3RoZXItYXBwL290aGVyLWFwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/components/other-app/other-app.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/components/other-app/other-app.component.ts ***!
    \*******************************************************************/

  /*! exports provided: OtherAppComponent */

  /***/
  function srcAppPagesComponentsOtherAppOtherAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtherAppComponent", function () {
      return OtherAppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let OtherAppComponent = class OtherAppComponent {
      constructor() {}

      ngOnInit() {}

    };
    OtherAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-other-app',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./other-app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/other-app/other-app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./other-app.component.scss */
      "./src/app/pages/components/other-app/other-app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], OtherAppComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/pages-layouts/ajax-contant-layout/ajax-contant-layout.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/pages/components/pages-layouts/ajax-contant-layout/ajax-contant-layout.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsPagesLayoutsAjaxContantLayoutAjaxContantLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvcGFnZXMtbGF5b3V0cy9hamF4LWNvbnRhbnQtbGF5b3V0L2FqYXgtY29udGFudC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/components/pages-layouts/ajax-contant-layout/ajax-contant-layout.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/pages/components/pages-layouts/ajax-contant-layout/ajax-contant-layout.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: AjaxContantLayoutComponent */

  /***/
  function srcAppPagesComponentsPagesLayoutsAjaxContantLayoutAjaxContantLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjaxContantLayoutComponent", function () {
      return AjaxContantLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AjaxContantLayoutComponent = class AjaxContantLayoutComponent {
      constructor() {}

      ngOnInit() {}

    };
    AjaxContantLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ajax-contant-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ajax-contant-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/pages-layouts/ajax-contant-layout/ajax-contant-layout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ajax-contant-layout.component.scss */
      "./src/app/pages/components/pages-layouts/ajax-contant-layout/ajax-contant-layout.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AjaxContantLayoutComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/pages-layouts/blank-page/blank-page.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/components/pages-layouts/blank-page/blank-page.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsPagesLayoutsBlankPageBlankPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvcGFnZXMtbGF5b3V0cy9ibGFuay1wYWdlL2JsYW5rLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/components/pages-layouts/blank-page/blank-page.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/components/pages-layouts/blank-page/blank-page.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: BlankPageComponent */

  /***/
  function srcAppPagesComponentsPagesLayoutsBlankPageBlankPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlankPageComponent", function () {
      return BlankPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let BlankPageComponent = class BlankPageComponent {
      constructor() {}

      ngOnInit() {}

    };
    BlankPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blank-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blank-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/pages-layouts/blank-page/blank-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blank-page.component.scss */
      "./src/app/pages/components/pages-layouts/blank-page/blank-page.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BlankPageComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/pages-layouts/boxed-page/boxed-page.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/components/pages-layouts/boxed-page/boxed-page.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsPagesLayoutsBoxedPageBoxedPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvcGFnZXMtbGF5b3V0cy9ib3hlZC1wYWdlL2JveGVkLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/components/pages-layouts/boxed-page/boxed-page.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/components/pages-layouts/boxed-page/boxed-page.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: BoxedPageComponent */

  /***/
  function srcAppPagesComponentsPagesLayoutsBoxedPageBoxedPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoxedPageComponent", function () {
      return BoxedPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let BoxedPageComponent = class BoxedPageComponent {
      constructor() {}

      ngOnInit() {}

    };
    BoxedPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-boxed-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./boxed-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/pages-layouts/boxed-page/boxed-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./boxed-page.component.scss */
      "./src/app/pages/components/pages-layouts/boxed-page/boxed-page.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BoxedPageComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/pages-layouts/classic-page-head/classic-page-head.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/app/pages/components/pages-layouts/classic-page-head/classic-page-head.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsPagesLayoutsClassicPageHeadClassicPageHeadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvcGFnZXMtbGF5b3V0cy9jbGFzc2ljLXBhZ2UtaGVhZC9jbGFzc2ljLXBhZ2UtaGVhZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/components/pages-layouts/classic-page-head/classic-page-head.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/pages/components/pages-layouts/classic-page-head/classic-page-head.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ClassicPageHeadComponent */

  /***/
  function srcAppPagesComponentsPagesLayoutsClassicPageHeadClassicPageHeadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassicPageHeadComponent", function () {
      return ClassicPageHeadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ClassicPageHeadComponent = class ClassicPageHeadComponent {
      constructor() {}

      ngOnInit() {}

    };
    ClassicPageHeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-classic-page-head',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./classic-page-head.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/pages-layouts/classic-page-head/classic-page-head.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./classic-page-head.component.scss */
      "./src/app/pages/components/pages-layouts/classic-page-head/classic-page-head.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ClassicPageHeadComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/pages-layouts/light-page-head/light-page-head.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/pages/components/pages-layouts/light-page-head/light-page-head.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsPagesLayoutsLightPageHeadLightPageHeadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvcGFnZXMtbGF5b3V0cy9saWdodC1wYWdlLWhlYWQvbGlnaHQtcGFnZS1oZWFkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/pages-layouts/light-page-head/light-page-head.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/components/pages-layouts/light-page-head/light-page-head.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: LightPageHeadComponent */

  /***/
  function srcAppPagesComponentsPagesLayoutsLightPageHeadLightPageHeadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LightPageHeadComponent", function () {
      return LightPageHeadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let LightPageHeadComponent = class LightPageHeadComponent {
      constructor() {}

      ngOnInit() {}

    };
    LightPageHeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-light-page-head',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./light-page-head.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/pages-layouts/light-page-head/light-page-head.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./light-page-head.component.scss */
      "./src/app/pages/components/pages-layouts/light-page-head/light-page-head.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LightPageHeadComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/pages-layouts/off-canvas-mobile-menu/off-canvas-mobile-menu.component.scss":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/pages/components/pages-layouts/off-canvas-mobile-menu/off-canvas-mobile-menu.component.scss ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsPagesLayoutsOffCanvasMobileMenuOffCanvasMobileMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvcGFnZXMtbGF5b3V0cy9vZmYtY2FudmFzLW1vYmlsZS1tZW51L29mZi1jYW52YXMtbW9iaWxlLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/components/pages-layouts/off-canvas-mobile-menu/off-canvas-mobile-menu.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/pages/components/pages-layouts/off-canvas-mobile-menu/off-canvas-mobile-menu.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: OffCanvasMobileMenuComponent */

  /***/
  function srcAppPagesComponentsPagesLayoutsOffCanvasMobileMenuOffCanvasMobileMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffCanvasMobileMenuComponent", function () {
      return OffCanvasMobileMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let OffCanvasMobileMenuComponent = class OffCanvasMobileMenuComponent {
      constructor() {}

      ngOnInit() {}

    };
    OffCanvasMobileMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-off-canvas-mobile-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./off-canvas-mobile-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/pages-layouts/off-canvas-mobile-menu/off-canvas-mobile-menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./off-canvas-mobile-menu.component.scss */
      "./src/app/pages/components/pages-layouts/off-canvas-mobile-menu/off-canvas-mobile-menu.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], OffCanvasMobileMenuComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/portlets/ajax/ajax.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/pages/components/portlets/ajax/ajax.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsPortletsAjaxAjaxComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvcG9ydGxldHMvYWpheC9hamF4LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/portlets/ajax/ajax.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/components/portlets/ajax/ajax.component.ts ***!
    \******************************************************************/

  /*! exports provided: AjaxComponent */

  /***/
  function srcAppPagesComponentsPortletsAjaxAjaxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjaxComponent", function () {
      return AjaxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AjaxComponent = class AjaxComponent {
      constructor() {}

      ngOnInit() {}

    };
    AjaxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ajax',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ajax.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/portlets/ajax/ajax.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ajax.component.scss */
      "./src/app/pages/components/portlets/ajax/ajax.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AjaxComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/portlets/boxed/boxed.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/components/portlets/boxed/boxed.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsPortletsBoxedBoxedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvcG9ydGxldHMvYm94ZWQvYm94ZWQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/components/portlets/boxed/boxed.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/components/portlets/boxed/boxed.component.ts ***!
    \********************************************************************/

  /*! exports provided: BoxedComponent */

  /***/
  function srcAppPagesComponentsPortletsBoxedBoxedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoxedComponent", function () {
      return BoxedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let BoxedComponent = class BoxedComponent {
      constructor() {}

      ngOnInit() {}

    };
    BoxedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-boxed',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./boxed.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/portlets/boxed/boxed.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./boxed.component.scss */
      "./src/app/pages/components/portlets/boxed/boxed.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BoxedComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/portlets/draggable/draggable.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/components/portlets/draggable/draggable.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsPortletsDraggableDraggableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvcG9ydGxldHMvZHJhZ2dhYmxlL2RyYWdnYWJsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/components/portlets/draggable/draggable.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/components/portlets/draggable/draggable.component.ts ***!
    \****************************************************************************/

  /*! exports provided: DraggableComponent */

  /***/
  function srcAppPagesComponentsPortletsDraggableDraggableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DraggableComponent", function () {
      return DraggableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let DraggableComponent = class DraggableComponent {
      constructor() {}

      ngOnInit() {}

    };
    DraggableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-draggable',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./draggable.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/portlets/draggable/draggable.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./draggable.component.scss */
      "./src/app/pages/components/portlets/draggable/draggable.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DraggableComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/portlets/light/light.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/components/portlets/light/light.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsPortletsLightLightComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvcG9ydGxldHMvbGlnaHQvbGlnaHQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/components/portlets/light/light.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/components/portlets/light/light.component.ts ***!
    \********************************************************************/

  /*! exports provided: LightComponent */

  /***/
  function srcAppPagesComponentsPortletsLightLightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LightComponent", function () {
      return LightComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let LightComponent = class LightComponent {
      constructor() {}

      ngOnInit() {}

    };
    LightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-light',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./light.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/portlets/light/light.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./light.component.scss */
      "./src/app/pages/components/portlets/light/light.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LightComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/portlets/solid/solid.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/components/portlets/solid/solid.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsPortletsSolidSolidComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvcG9ydGxldHMvc29saWQvc29saWQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/components/portlets/solid/solid.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/components/portlets/solid/solid.component.ts ***!
    \********************************************************************/

  /*! exports provided: SolidComponent */

  /***/
  function srcAppPagesComponentsPortletsSolidSolidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolidComponent", function () {
      return SolidComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SolidComponent = class SolidComponent {
      constructor() {}

      ngOnInit() {}

    };
    SolidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-solid',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./solid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/portlets/solid/solid.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./solid.component.scss */
      "./src/app/pages/components/portlets/solid/solid.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SolidComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/tables/tables.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/components/tables/tables.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsTablesTablesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvdGFibGVzL3RhYmxlcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/components/tables/tables.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/components/tables/tables.component.ts ***!
    \*************************************************************/

  /*! exports provided: TablesComponent */

  /***/
  function srcAppPagesComponentsTablesTablesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablesComponent", function () {
      return TablesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let TablesComponent = class TablesComponent {
      constructor() {}

      ngOnInit() {}

    };
    TablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tables',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tables.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/tables/tables.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tables.component.scss */
      "./src/app/pages/components/tables/tables.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TablesComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/ui-features/buttons/buttons.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/components/ui-features/buttons/buttons.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsUiFeaturesButtonsButtonsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvdWktZmVhdHVyZXMvYnV0dG9ucy9idXR0b25zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/ui-features/buttons/buttons.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/components/ui-features/buttons/buttons.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ButtonsComponent */

  /***/
  function srcAppPagesComponentsUiFeaturesButtonsButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function () {
      return ButtonsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ButtonsComponent = class ButtonsComponent {
      constructor() {}

      ngOnInit() {}

    };
    ButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-buttons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./buttons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/buttons/buttons.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./buttons.component.scss */
      "./src/app/pages/components/ui-features/buttons/buttons.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ButtonsComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/ui-features/color-library/color-library.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/components/ui-features/color-library/color-library.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsUiFeaturesColorLibraryColorLibraryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvdWktZmVhdHVyZXMvY29sb3ItbGlicmFyeS9jb2xvci1saWJyYXJ5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/ui-features/color-library/color-library.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/components/ui-features/color-library/color-library.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ColorLibraryComponent */

  /***/
  function srcAppPagesComponentsUiFeaturesColorLibraryColorLibraryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorLibraryComponent", function () {
      return ColorLibraryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ColorLibraryComponent = class ColorLibraryComponent {
      constructor() {}

      ngOnInit() {}

    };
    ColorLibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-color-library',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./color-library.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/color-library/color-library.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./color-library.component.scss */
      "./src/app/pages/components/ui-features/color-library/color-library.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ColorLibraryComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/ui-features/font-icons/font-icons.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/components/ui-features/font-icons/font-icons.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsUiFeaturesFontIconsFontIconsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvdWktZmVhdHVyZXMvZm9udC1pY29ucy9mb250LWljb25zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/components/ui-features/font-icons/font-icons.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/components/ui-features/font-icons/font-icons.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: FontIconsComponent */

  /***/
  function srcAppPagesComponentsUiFeaturesFontIconsFontIconsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FontIconsComponent", function () {
      return FontIconsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let FontIconsComponent = class FontIconsComponent {
      constructor() {}

      ngOnInit() {}

    };
    FontIconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-font-icons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./font-icons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/font-icons/font-icons.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./font-icons.component.scss */
      "./src/app/pages/components/ui-features/font-icons/font-icons.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FontIconsComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/ui-features/general-components/general-components.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/app/pages/components/ui-features/general-components/general-components.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsUiFeaturesGeneralComponentsGeneralComponentsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvdWktZmVhdHVyZXMvZ2VuZXJhbC1jb21wb25lbnRzL2dlbmVyYWwtY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/components/ui-features/general-components/general-components.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/pages/components/ui-features/general-components/general-components.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: GeneralComponentsComponent */

  /***/
  function srcAppPagesComponentsUiFeaturesGeneralComponentsGeneralComponentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralComponentsComponent", function () {
      return GeneralComponentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let GeneralComponentsComponent = class GeneralComponentsComponent {
      constructor() {}

      ngOnInit() {}

    };
    GeneralComponentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-general-components',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./general-components.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/general-components/general-components.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./general-components.component.scss */
      "./src/app/pages/components/ui-features/general-components/general-components.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], GeneralComponentsComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/ui-features/grid-system/grid-system.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/components/ui-features/grid-system/grid-system.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsUiFeaturesGridSystemGridSystemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvdWktZmVhdHVyZXMvZ3JpZC1zeXN0ZW0vZ3JpZC1zeXN0ZW0uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/components/ui-features/grid-system/grid-system.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/components/ui-features/grid-system/grid-system.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: GridSystemComponent */

  /***/
  function srcAppPagesComponentsUiFeaturesGridSystemGridSystemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridSystemComponent", function () {
      return GridSystemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let GridSystemComponent = class GridSystemComponent {
      constructor() {}

      ngOnInit() {}

    };
    GridSystemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-grid-system',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./grid-system.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/grid-system/grid-system.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./grid-system.component.scss */
      "./src/app/pages/components/ui-features/grid-system/grid-system.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], GridSystemComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/ui-features/soical-icons/soical-icons.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/components/ui-features/soical-icons/soical-icons.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsUiFeaturesSoicalIconsSoicalIconsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvdWktZmVhdHVyZXMvc29pY2FsLWljb25zL3NvaWNhbC1pY29ucy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/components/ui-features/soical-icons/soical-icons.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/components/ui-features/soical-icons/soical-icons.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: SoicalIconsComponent */

  /***/
  function srcAppPagesComponentsUiFeaturesSoicalIconsSoicalIconsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SoicalIconsComponent", function () {
      return SoicalIconsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SoicalIconsComponent = class SoicalIconsComponent {
      constructor() {}

      ngOnInit() {}

    };
    SoicalIconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-soical-icons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./soical-icons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/soical-icons/soical-icons.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./soical-icons.component.scss */
      "./src/app/pages/components/ui-features/soical-icons/soical-icons.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SoicalIconsComponent);
    /***/
  },

  /***/
  "./src/app/pages/components/ui-features/spinner-buttons/spinner-buttons.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/components/ui-features/spinner-buttons/spinner-buttons.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComponentsUiFeaturesSpinnerButtonsSpinnerButtonsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvdWktZmVhdHVyZXMvc3Bpbm5lci1idXR0b25zL3NwaW5uZXItYnV0dG9ucy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/components/ui-features/spinner-buttons/spinner-buttons.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/components/ui-features/spinner-buttons/spinner-buttons.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: SpinnerButtonsComponent */

  /***/
  function srcAppPagesComponentsUiFeaturesSpinnerButtonsSpinnerButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerButtonsComponent", function () {
      return SpinnerButtonsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SpinnerButtonsComponent = class SpinnerButtonsComponent {
      constructor() {}

      ngOnInit() {}

    };
    SpinnerButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-spinner-buttons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./spinner-buttons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/ui-features/spinner-buttons/spinner-buttons.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinner-buttons.component.scss */
      "./src/app/pages/components/ui-features/spinner-buttons/spinner-buttons.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SpinnerButtonsComponent);
    /***/
  },

  /***/
  "./src/app/pages/content-section/content-section.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/content-section/content-section.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContentSectionContentSectionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".flux-content-section[nav-layout=horizontal] {\n  margin-left: 0px !important;\n}\n\n.flux-content-section[navbar-type=expanded][effect-type=overlay] {\n  margin-left: 0px;\n}\n\n.flux-content-section[navbar-type=expanded][effect-type=shrink] {\n  margin-left: 230px;\n}\n\n.flux-content-section[navbar-type=expanded][effect-type=push] {\n  margin-left: 230px;\n  margin-right: -230px;\n}\n\n.flux-content-section[navbar-type=collapsed][effect-type=overlay] {\n  margin-left: 0px;\n}\n\n.flux-content-section[navbar-type=collapsed][effect-type=shrink] {\n  margin-left: 50px;\n}\n\n.flux-content-section[navbar-type=collapsed][effect-type=push] {\n  margin-left: 50px;\n  margin-right: -50px;\n}\n\n.flux-content-section[navbar-type=offcanvas][effect-type=overlay] {\n  margin-left: 0px;\n}\n\n.flux-content-section[navbar-type=offcanvas][effect-type=shrink] {\n  margin-left: 0px;\n}\n\n.flux-content-section[navbar-type=offcanvas][effect-type=push] {\n  margin-left: 0px;\n}\n\n.flux-content-section {\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100vh;\n  position: relative;\n  padding: 0px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n\n.flux-content-section .flux-wrapper {\n  position: relative;\n  height: inherit;\n  width: 100%;\n  padding: 10px;\n}\n\n.flux-content-section .screen-title-section {\n  margin-bottom: 10px;\n  border-bottom: 1px solid #d7d9df;\n}\n\n.flux-content-section .screen-title-section .screen-title {\n  color: #424242;\n  font-size: 22px;\n  font-weight: 400;\n  margin: 0;\n}\n\n.flux-content-section .screen-title-section .breadcrumb {\n  padding: 0px 0px;\n  background-color: transparent;\n  margin-bottom: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC1zZWN0aW9uL0U6XFxzdGF0UHJvamVjdHNcXEVkYWQtVG9rZW4tQm94XFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxjb250ZW50LXNlY3Rpb25cXGNvbnRlbnQtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGVudC1zZWN0aW9uL2NvbnRlbnQtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUdBLGdDQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtBQ0FKOztBREVJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNBTjs7QURHSTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGVudC1zZWN0aW9uL2NvbnRlbnQtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbHV4LWNvbnRlbnQtc2VjdGlvbltuYXYtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmx1eC1jb250ZW50LXNlY3Rpb25bbmF2YmFyLXR5cGU9XCJleHBhbmRlZFwiXVtlZmZlY3QtdHlwZT1cIm92ZXJsYXlcIl0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5mbHV4LWNvbnRlbnQtc2VjdGlvbltuYXZiYXItdHlwZT1cImV4cGFuZGVkXCJdW2VmZmVjdC10eXBlPVwic2hyaW5rXCJdIHtcclxuICBtYXJnaW4tbGVmdDogMjMwcHg7XHJcbn1cclxuXHJcbi5mbHV4LWNvbnRlbnQtc2VjdGlvbltuYXZiYXItdHlwZT1cImV4cGFuZGVkXCJdW2VmZmVjdC10eXBlPVwicHVzaFwiXSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTIzMHB4O1xyXG59XHJcblxyXG4uZmx1eC1jb250ZW50LXNlY3Rpb25bbmF2YmFyLXR5cGU9XCJjb2xsYXBzZWRcIl1bZWZmZWN0LXR5cGU9XCJvdmVybGF5XCJdIHtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4uZmx1eC1jb250ZW50LXNlY3Rpb25bbmF2YmFyLXR5cGU9XCJjb2xsYXBzZWRcIl1bZWZmZWN0LXR5cGU9XCJzaHJpbmtcIl0ge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uZmx1eC1jb250ZW50LXNlY3Rpb25bbmF2YmFyLXR5cGU9XCJjb2xsYXBzZWRcIl1bZWZmZWN0LXR5cGU9XCJwdXNoXCJdIHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IC01MHB4O1xyXG59XHJcblxyXG4uZmx1eC1jb250ZW50LXNlY3Rpb25bbmF2YmFyLXR5cGU9XCJvZmZjYW52YXNcIl1bZWZmZWN0LXR5cGU9XCJvdmVybGF5XCJdIHtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4uZmx1eC1jb250ZW50LXNlY3Rpb25bbmF2YmFyLXR5cGU9XCJvZmZjYW52YXNcIl1bZWZmZWN0LXR5cGU9XCJzaHJpbmtcIl0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5mbHV4LWNvbnRlbnQtc2VjdGlvbltuYXZiYXItdHlwZT1cIm9mZmNhbnZhc1wiXVtlZmZlY3QtdHlwZT1cInB1c2hcIl0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5mbHV4LWNvbnRlbnQtc2VjdGlvbiB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgLmZsdXgtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuc2NyZWVuLXRpdGxlLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDdkOWRmO1xyXG5cclxuICAgIC5zY3JlZW4tdGl0bGUge1xyXG4gICAgICBjb2xvcjogIzQyNDI0MjtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJyZWFkY3J1bWIge1xyXG4gICAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIiwiLmZsdXgtY29udGVudC1zZWN0aW9uW25hdi1sYXlvdXQ9aG9yaXpvbnRhbF0ge1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mbHV4LWNvbnRlbnQtc2VjdGlvbltuYXZiYXItdHlwZT1leHBhbmRlZF1bZWZmZWN0LXR5cGU9b3ZlcmxheV0ge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uZmx1eC1jb250ZW50LXNlY3Rpb25bbmF2YmFyLXR5cGU9ZXhwYW5kZWRdW2VmZmVjdC10eXBlPXNocmlua10ge1xuICBtYXJnaW4tbGVmdDogMjMwcHg7XG59XG5cbi5mbHV4LWNvbnRlbnQtc2VjdGlvbltuYXZiYXItdHlwZT1leHBhbmRlZF1bZWZmZWN0LXR5cGU9cHVzaF0ge1xuICBtYXJnaW4tbGVmdDogMjMwcHg7XG4gIG1hcmdpbi1yaWdodDogLTIzMHB4O1xufVxuXG4uZmx1eC1jb250ZW50LXNlY3Rpb25bbmF2YmFyLXR5cGU9Y29sbGFwc2VkXVtlZmZlY3QtdHlwZT1vdmVybGF5XSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5mbHV4LWNvbnRlbnQtc2VjdGlvbltuYXZiYXItdHlwZT1jb2xsYXBzZWRdW2VmZmVjdC10eXBlPXNocmlua10ge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmZsdXgtY29udGVudC1zZWN0aW9uW25hdmJhci10eXBlPWNvbGxhcHNlZF1bZWZmZWN0LXR5cGU9cHVzaF0ge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNTBweDtcbn1cblxuLmZsdXgtY29udGVudC1zZWN0aW9uW25hdmJhci10eXBlPW9mZmNhbnZhc11bZWZmZWN0LXR5cGU9b3ZlcmxheV0ge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uZmx1eC1jb250ZW50LXNlY3Rpb25bbmF2YmFyLXR5cGU9b2ZmY2FudmFzXVtlZmZlY3QtdHlwZT1zaHJpbmtdIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmZsdXgtY29udGVudC1zZWN0aW9uW25hdmJhci10eXBlPW9mZmNhbnZhc11bZWZmZWN0LXR5cGU9cHVzaF0ge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uZmx1eC1jb250ZW50LXNlY3Rpb24ge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uZmx1eC1jb250ZW50LXNlY3Rpb24gLmZsdXgtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5mbHV4LWNvbnRlbnQtc2VjdGlvbiAuc2NyZWVuLXRpdGxlLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q3ZDlkZjtcbn1cbi5mbHV4LWNvbnRlbnQtc2VjdGlvbiAuc2NyZWVuLXRpdGxlLXNlY3Rpb24gLnNjcmVlbi10aXRsZSB7XG4gIGNvbG9yOiAjNDI0MjQyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMDtcbn1cbi5mbHV4LWNvbnRlbnQtc2VjdGlvbiAuc2NyZWVuLXRpdGxlLXNlY3Rpb24gLmJyZWFkY3J1bWIge1xuICBwYWRkaW5nOiAwcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/content-section/content-section.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/content-section/content-section.component.ts ***!
    \********************************************************************/

  /*! exports provided: ContentSectionComponent */

  /***/
  function srcAppPagesContentSectionContentSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentSectionComponent", function () {
      return ContentSectionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/layout.service */
    "./src/app/shared/services/layout.service.ts");

    let ContentSectionComponent = class ContentSectionComponent {
      constructor(layoutService) {
        this.layoutService = layoutService;
        this.screenTitle = 'Page Title';
      }

      ngOnInit() {
        this.layoutService.contentHeightCast.subscribe(setCtHeight => this.contentHeight = setCtHeight);
      }

      onResizeHeight(event) {
        this.contentHeight = window.innerHeight - this.layoutService.headerHeight + 1;
      }

    };

    ContentSectionComponent.ctorParameters = () => [{
      type: _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ContentSectionComponent.prototype, "navLayout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ContentSectionComponent.prototype, "defaultNavbar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ContentSectionComponent.prototype, "toggleNavbar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], ContentSectionComponent.prototype, "toggleStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ContentSectionComponent.prototype, "navbarEffect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ContentSectionComponent.prototype, "deviceType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ContentSectionComponent.prototype, "headerColorTheme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ContentSectionComponent.prototype, "navbarColorTheme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ContentSectionComponent.prototype, "activeNavColorTheme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ContentSectionComponent.prototype, "onResizeHeight", null);
    ContentSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-content-section',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./content-section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content-section/content-section.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./content-section.component.scss */
      "./src/app/pages/content-section/content-section.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])], ContentSectionComponent);
    /***/
  },

  /***/
  "./src/app/pages/pages-core/pages-core.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/pages-core/pages-core.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPagesCorePagesCoreComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".flux-container {\n  height: 100%;\n  position: relative;\n  margin: 0 auto;\n  padding: 0px;\n  background: #ecf0f8;\n  font-size: 13px;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n.flux-wrapper {\n  width: 100%;\n  position: relative;\n  height: 100%;\n}\n\n.flux-container[theme-layout=wide] {\n  width: 100%;\n}\n\n.flux-container[theme-layout=box][device-type=desktop] {\n  width: 1200px;\n}\n\n.flux-container[theme-layout=box][device-type=tablet] {\n  width: 100%;\n}\n\n.flux-container[theme-layout=box][device-type=mobile] {\n  width: 100%;\n}\n\n.overlay-box {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.3);\n  width: 100%;\n  bottom: 0;\n  top: 0;\n  z-index: 1023;\n  -webkit-transition: width 0.5s linear;\n  transition: width 0.5s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZXMtY29yZS9FOlxcc3RhdFByb2plY3RzXFxFZGFkLVRva2VuLUJveFxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xccGFnZXMtY29yZVxccGFnZXMtY29yZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGFnZXMtY29yZS9wYWdlcy1jb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FER0E7RUFDRSxXQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0FDQUY7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FERUE7RUFDRSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUVBLHFDQUFBO0VBR0ksNkJBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2VzLWNvcmUvcGFnZXMtY29yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbHV4LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2VjZjBmODtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6aGlkZGVuO1xyXG59XHJcblxyXG4uZmx1eC13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcblxyXG59XHJcblxyXG4uZmx1eC1jb250YWluZXJbdGhlbWUtbGF5b3V0PVwid2lkZVwiXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mbHV4LWNvbnRhaW5lclt0aGVtZS1sYXlvdXQ9XCJib3hcIl1bZGV2aWNlLXR5cGU9XCJkZXNrdG9wXCJdIHtcclxuICB3aWR0aDogMTIwMHB4O1xyXG59XHJcbi5mbHV4LWNvbnRhaW5lclt0aGVtZS1sYXlvdXQ9XCJib3hcIl1bZGV2aWNlLXR5cGU9XCJ0YWJsZXRcIl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5mbHV4LWNvbnRhaW5lclt0aGVtZS1sYXlvdXQ9XCJib3hcIl1bZGV2aWNlLXR5cGU9XCJtb2JpbGVcIl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLm92ZXJsYXktYm94e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBib3R0b206IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMjM7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC41cyBsaW5lYXI7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogd2lkdGggMC41cyBsaW5lYXI7XHJcbiAgICAgIC1vLXRyYW5zaXRpb246IHdpZHRoIDAuNXMgbGluZWFyO1xyXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGxpbmVhcjtcclxuXHJcbn1cclxuXHJcblxyXG4iLCIuZmx1eC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogI2VjZjBmODtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLmZsdXgtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmZsdXgtY29udGFpbmVyW3RoZW1lLWxheW91dD13aWRlXSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmx1eC1jb250YWluZXJbdGhlbWUtbGF5b3V0PWJveF1bZGV2aWNlLXR5cGU9ZGVza3RvcF0ge1xuICB3aWR0aDogMTIwMHB4O1xufVxuXG4uZmx1eC1jb250YWluZXJbdGhlbWUtbGF5b3V0PWJveF1bZGV2aWNlLXR5cGU9dGFibGV0XSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmx1eC1jb250YWluZXJbdGhlbWUtbGF5b3V0PWJveF1bZGV2aWNlLXR5cGU9bW9iaWxlXSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ub3ZlcmxheS1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDIzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuNXMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IHdpZHRoIDAuNXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBsaW5lYXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/pages-core/pages-core.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/pages-core/pages-core.component.ts ***!
    \**********************************************************/

  /*! exports provided: PagesCoreComponent */

  /***/
  function srcAppPagesPagesCorePagesCoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesCoreComponent", function () {
      return PagesCoreComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/layout.service */
    "./src/app/shared/services/layout.service.ts");

    let PagesCoreComponent = class PagesCoreComponent {
      constructor(layoutService) {
        this.layoutService = layoutService;
      }

      ngOnInit() {
        this.layoutService.checkWindowWidth(window.innerWidth);
        this.layoutService.navLayoutCast.subscribe(navlayout => this.setNavLayout = navlayout);
        this.layoutService.dfNavbarCast.subscribe(dfNavbar => this.setDefaultNavbar = dfNavbar);
        this.layoutService.toggleNavbarCast.subscribe(tNavbar => this.setToggleNavbar = tNavbar);
        this.layoutService.tStatusCast.subscribe(tStatus => this.setToggleStatus = tStatus);
        this.layoutService.nvEffectCast.subscribe(nvEffect => this.setVerticalNavbarEffect = nvEffect);
        this.layoutService.headerThemeCast.subscribe(headerTheme => this.setHeaderColorTheme = headerTheme);
        this.layoutService.leftHeaderThemeCast.subscribe(leftHeaderTheme => this.setLeftHeaderColorTheme = leftHeaderTheme);
        this.layoutService.navbarThemeCast.subscribe(navbarTheme => this.setNavbarColorTheme = navbarTheme);
        this.layoutService.activeNavThemeCast.subscribe(activeNavTheme => this.setActiveNavColorTheme = activeNavTheme);
        this.layoutService.themeLayoutCast.subscribe(themeLayout => this.themeLayout = themeLayout);
        this.layoutService.collapsedLeftHeaderCast.subscribe(collapsedLeftHeader => this.setCollapsedLeftHeader = collapsedLeftHeader);
        this.layoutService.deviceTypeCast.subscribe(appDeviceType => this.setDeviceType = appDeviceType);
        this.setHeaderHeight = this.layoutService.headerHeight;
      }

      onResize(event) {
        this.layoutService.getVerticalNavbarOnWindowResize(event.target.innerWidth);
      }

      changeTheToggleStatus() {
        this.layoutService.getToggleStatus();
      }

    };

    PagesCoreComponent.ctorParameters = () => [{
      type: _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], PagesCoreComponent.prototype, "onResize", null);
    PagesCoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pages-core',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pages-core.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages-core/pages-core.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pages-core.component.scss */
      "./src/app/pages/pages-core/pages-core.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])], PagesCoreComponent);
    /***/
  },

  /***/
  "./src/app/pages/pages-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/pages-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: PagesRoutingModule */

  /***/
  function srcAppPagesPagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function () {
      return PagesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_core_pages_core_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages-core/pages-core.component */
    "./src/app/pages/pages-core/pages-core.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/pages/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_elements_elements_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/elements/elements.component */
    "./src/app/pages/components/elements/elements.component.ts");
    /* harmony import */


    var _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/tables/tables.component */
    "./src/app/pages/components/tables/tables.component.ts");
    /* harmony import */


    var _components_ecommerce_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/ecommerce/orders/orders.component */
    "./src/app/pages/components/ecommerce/orders/orders.component.ts");
    /* harmony import */


    var _components_ecommerce_order_view_order_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/ecommerce/order-view/order-view.component */
    "./src/app/pages/components/ecommerce/order-view/order-view.component.ts");
    /* harmony import */


    var _components_ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/ecommerce/products/products.component */
    "./src/app/pages/components/ecommerce/products/products.component.ts");
    /* harmony import */


    var _components_ecommerce_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/ecommerce/product-edit/product-edit.component */
    "./src/app/pages/components/ecommerce/product-edit/product-edit.component.ts");
    /* harmony import */


    var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/invoice/invoice.component */
    "./src/app/pages/components/invoice/invoice.component.ts");
    /* harmony import */


    var _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/authentication/authentication.component */
    "./src/app/pages/components/authentication/authentication.component.ts");
    /* harmony import */


    var _components_other_app_other_app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/other-app/other-app.component */
    "./src/app/pages/components/other-app/other-app.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/bootstrapComponent/date-time-picker/date-time-picker.component */
    "./src/app/pages/components/bootstrapComponent/date-time-picker/date-time-picker.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_color_pickers_color_pickers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/bootstrapComponent/color-pickers/color-pickers.component */
    "./src/app/pages/components/bootstrapComponent/color-pickers/color-pickers.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_select_select_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/bootstrapComponent/select/select.component */
    "./src/app/pages/components/bootstrapComponent/select/select.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_switch_switch_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/bootstrapComponent/switch/switch.component */
    "./src/app/pages/components/bootstrapComponent/switch/switch.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/bootstrapComponent/file-upload/file-upload.component */
    "./src/app/pages/components/bootstrapComponent/file-upload/file-upload.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_touchspin_touchspin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/bootstrapComponent/touchspin/touchspin.component */
    "./src/app/pages/components/bootstrapComponent/touchspin/touchspin.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_icons_icons_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/bootstrapComponent/icons/icons.component */
    "./src/app/pages/components/bootstrapComponent/icons/icons.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/bootstrapComponent/code-editor/code-editor.component */
    "./src/app/pages/components/bootstrapComponent/code-editor/code-editor.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_wysiwyg_editor_wysiwyg_editor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/bootstrapComponent/wysiwyg-editor/wysiwyg-editor.component */
    "./src/app/pages/components/bootstrapComponent/wysiwyg-editor/wysiwyg-editor.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_widgets_tools_widgets_tools_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/bootstrapComponent/widgets-tools/widgets-tools.component */
    "./src/app/pages/components/bootstrapComponent/widgets-tools/widgets-tools.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/bootstrapComponent/context-menu/context-menu.component */
    "./src/app/pages/components/bootstrapComponent/context-menu/context-menu.component.ts");
    /* harmony import */


    var _components_ui_features_color_library_color_library_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/ui-features/color-library/color-library.component */
    "./src/app/pages/components/ui-features/color-library/color-library.component.ts");
    /* harmony import */


    var _components_ui_features_grid_system_grid_system_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/ui-features/grid-system/grid-system.component */
    "./src/app/pages/components/ui-features/grid-system/grid-system.component.ts");
    /* harmony import */


    var _components_ui_features_general_components_general_components_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/ui-features/general-components/general-components.component */
    "./src/app/pages/components/ui-features/general-components/general-components.component.ts");
    /* harmony import */


    var _components_ui_features_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/ui-features/buttons/buttons.component */
    "./src/app/pages/components/ui-features/buttons/buttons.component.ts");
    /* harmony import */


    var _components_ui_features_spinner_buttons_spinner_buttons_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/ui-features/spinner-buttons/spinner-buttons.component */
    "./src/app/pages/components/ui-features/spinner-buttons/spinner-buttons.component.ts");
    /* harmony import */


    var _components_ui_features_font_icons_font_icons_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/ui-features/font-icons/font-icons.component */
    "./src/app/pages/components/ui-features/font-icons/font-icons.component.ts");
    /* harmony import */


    var _components_ui_features_soical_icons_soical_icons_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/ui-features/soical-icons/soical-icons.component */
    "./src/app/pages/components/ui-features/soical-icons/soical-icons.component.ts");
    /* harmony import */


    var _components_form_stuff_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/form-stuff/form-control/form-control.component */
    "./src/app/pages/components/form-stuff/form-control/form-control.component.ts");
    /* harmony import */


    var _components_form_stuff_form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/form-stuff/form-validation/form-validation.component */
    "./src/app/pages/components/form-stuff/form-validation/form-validation.component.ts");
    /* harmony import */


    var _components_form_stuff_form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/form-stuff/form-layouts/form-layouts.component */
    "./src/app/pages/components/form-stuff/form-layouts/form-layouts.component.ts");
    /* harmony import */


    var _components_form_stuff_form_input_mask_form_input_mask_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/form-stuff/form-input-mask/form-input-mask.component */
    "./src/app/pages/components/form-stuff/form-input-mask/form-input-mask.component.ts");
    /* harmony import */


    var _components_form_stuff_form_x_editable_form_x_editable_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/form-stuff/form-x-editable/form-x-editable.component */
    "./src/app/pages/components/form-stuff/form-x-editable/form-x-editable.component.ts");
    /* harmony import */


    var _components_form_stuff_form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/form-stuff/form-wizard/form-wizard.component */
    "./src/app/pages/components/form-stuff/form-wizard/form-wizard.component.ts");
    /* harmony import */


    var _components_form_stuff_image_cropping_image_cropping_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/form-stuff/image-cropping/image-cropping.component */
    "./src/app/pages/components/form-stuff/image-cropping/image-cropping.component.ts");
    /* harmony import */


    var _components_form_stuff_multiple_file_upload_multiple_file_upload_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/form-stuff/multiple-file-upload/multiple-file-upload.component */
    "./src/app/pages/components/form-stuff/multiple-file-upload/multiple-file-upload.component.ts");
    /* harmony import */


    var _components_form_stuff_dropzone_file_upload_dropzone_file_upload_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/form-stuff/dropzone-file-upload/dropzone-file-upload.component */
    "./src/app/pages/components/form-stuff/dropzone-file-upload/dropzone-file-upload.component.ts");
    /* harmony import */


    var _components_portlets_boxed_boxed_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/portlets/boxed/boxed.component */
    "./src/app/pages/components/portlets/boxed/boxed.component.ts");
    /* harmony import */


    var _components_portlets_light_light_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./components/portlets/light/light.component */
    "./src/app/pages/components/portlets/light/light.component.ts");
    /* harmony import */


    var _components_portlets_solid_solid_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./components/portlets/solid/solid.component */
    "./src/app/pages/components/portlets/solid/solid.component.ts");
    /* harmony import */


    var _components_portlets_ajax_ajax_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./components/portlets/ajax/ajax.component */
    "./src/app/pages/components/portlets/ajax/ajax.component.ts");
    /* harmony import */


    var _components_portlets_draggable_draggable_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./components/portlets/draggable/draggable.component */
    "./src/app/pages/components/portlets/draggable/draggable.component.ts");
    /* harmony import */


    var _components_pages_layouts_blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./components/pages-layouts/blank-page/blank-page.component */
    "./src/app/pages/components/pages-layouts/blank-page/blank-page.component.ts");
    /* harmony import */


    var _components_pages_layouts_ajax_contant_layout_ajax_contant_layout_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./components/pages-layouts/ajax-contant-layout/ajax-contant-layout.component */
    "./src/app/pages/components/pages-layouts/ajax-contant-layout/ajax-contant-layout.component.ts");
    /* harmony import */


    var _components_pages_layouts_off_canvas_mobile_menu_off_canvas_mobile_menu_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./components/pages-layouts/off-canvas-mobile-menu/off-canvas-mobile-menu.component */
    "./src/app/pages/components/pages-layouts/off-canvas-mobile-menu/off-canvas-mobile-menu.component.ts");
    /* harmony import */


    var _components_pages_layouts_classic_page_head_classic_page_head_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./components/pages-layouts/classic-page-head/classic-page-head.component */
    "./src/app/pages/components/pages-layouts/classic-page-head/classic-page-head.component.ts");
    /* harmony import */


    var _components_pages_layouts_light_page_head_light_page_head_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./components/pages-layouts/light-page-head/light-page-head.component */
    "./src/app/pages/components/pages-layouts/light-page-head/light-page-head.component.ts");
    /* harmony import */


    var _components_pages_layouts_boxed_page_boxed_page_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./components/pages-layouts/boxed-page/boxed-page.component */
    "./src/app/pages/components/pages-layouts/boxed-page/boxed-page.component.ts");
    /* harmony import */


    var _components_custom_layout_light_sidebar_menu_light_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./components/custom-layout/light-sidebar-menu/light-sidebar-menu.component */
    "./src/app/pages/components/custom-layout/light-sidebar-menu/light-sidebar-menu.component.ts");
    /* harmony import */


    var _components_custom_layout_hover_sidebar_menu_hover_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./components/custom-layout/hover-sidebar-menu/hover-sidebar-menu.component */
    "./src/app/pages/components/custom-layout/hover-sidebar-menu/hover-sidebar-menu.component.ts");
    /* harmony import */


    var _components_custom_layout_fixed_sidebar_layout_fixed_sidebar_layout_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./components/custom-layout/fixed-sidebar-layout/fixed-sidebar-layout.component */
    "./src/app/pages/components/custom-layout/fixed-sidebar-layout/fixed-sidebar-layout.component.ts");
    /* harmony import */


    var _components_custom_layout_closed_sidebar_layout_closed_sidebar_layout_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./components/custom-layout/closed-sidebar-layout/closed-sidebar-layout.component */
    "./src/app/pages/components/custom-layout/closed-sidebar-layout/closed-sidebar-layout.component.ts");
    /* harmony import */


    var _components_custom_layout_offcanvas_sidebar_layout_offcanvas_sidebar_layout_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./components/custom-layout/offcanvas-sidebar-layout/offcanvas-sidebar-layout.component */
    "./src/app/pages/components/custom-layout/offcanvas-sidebar-layout/offcanvas-sidebar-layout.component.ts");

    const routes = [{
      path: '',
      component: _pages_core_pages_core_component__WEBPACK_IMPORTED_MODULE_3__["PagesCoreComponent"],
      children: [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      }, {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
      }, {
        path: 'elements',
        component: _components_elements_elements_component__WEBPACK_IMPORTED_MODULE_5__["ElementsComponent"]
      }, {
        path: 'tables',
        component: _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_6__["TablesComponent"]
      }, {
        path: 'orders',
        component: _components_ecommerce_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"]
      }, {
        path: 'order-view',
        component: _components_ecommerce_order_view_order_view_component__WEBPACK_IMPORTED_MODULE_8__["OrderViewComponent"]
      }, {
        path: 'products',
        component: _components_ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"]
      }, {
        path: 'product-edit',
        component: _components_ecommerce_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_10__["ProductEditComponent"]
      }, {
        path: 'invoice-summary',
        component: _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_11__["InvoiceComponent"]
      }, {
        path: 'authentication',
        component: _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_12__["AuthenticationComponent"]
      }, {
        path: 'other-app',
        component: _components_other_app_other_app_component__WEBPACK_IMPORTED_MODULE_13__["OtherAppComponent"]
      }, {
        path: 'date-time-picker',
        component: _components_bootstrapComponent_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_14__["DateTimePickerComponent"]
      }, {
        path: 'color-pickers',
        component: _components_bootstrapComponent_color_pickers_color_pickers_component__WEBPACK_IMPORTED_MODULE_15__["ColorPickersComponent"]
      }, {
        path: 'select',
        component: _components_bootstrapComponent_select_select_component__WEBPACK_IMPORTED_MODULE_16__["SelectComponent"]
      }, {
        path: 'switch',
        component: _components_bootstrapComponent_switch_switch_component__WEBPACK_IMPORTED_MODULE_17__["SwitchComponent"]
      }, {
        path: 'file-upload',
        component: _components_bootstrapComponent_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_18__["FileUploadComponent"]
      }, {
        path: 'touchspin',
        component: _components_bootstrapComponent_touchspin_touchspin_component__WEBPACK_IMPORTED_MODULE_19__["TouchspinComponent"]
      }, {
        path: 'icons',
        component: _components_bootstrapComponent_icons_icons_component__WEBPACK_IMPORTED_MODULE_20__["IconsComponent"]
      }, {
        path: 'code-editor',
        component: _components_bootstrapComponent_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_21__["CodeEditorComponent"]
      }, {
        path: 'WYSIWYG-editor',
        component: _components_bootstrapComponent_wysiwyg_editor_wysiwyg_editor_component__WEBPACK_IMPORTED_MODULE_22__["WYSIWYGEditorComponent"]
      }, {
        path: 'widgets-tools',
        component: _components_bootstrapComponent_widgets_tools_widgets_tools_component__WEBPACK_IMPORTED_MODULE_23__["WidgetsToolsComponent"]
      }, {
        path: 'context-menu',
        component: _components_bootstrapComponent_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_24__["ContextMenuComponent"]
      }, {
        path: 'color-library',
        component: _components_ui_features_color_library_color_library_component__WEBPACK_IMPORTED_MODULE_25__["ColorLibraryComponent"]
      }, {
        path: 'grid-system',
        component: _components_ui_features_grid_system_grid_system_component__WEBPACK_IMPORTED_MODULE_26__["GridSystemComponent"]
      }, {
        path: 'general-components',
        component: _components_ui_features_general_components_general_components_component__WEBPACK_IMPORTED_MODULE_27__["GeneralComponentsComponent"]
      }, {
        path: 'buttons',
        component: _components_ui_features_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_28__["ButtonsComponent"]
      }, {
        path: 'spinner-buttons',
        component: _components_ui_features_spinner_buttons_spinner_buttons_component__WEBPACK_IMPORTED_MODULE_29__["SpinnerButtonsComponent"]
      }, {
        path: 'font-icons',
        component: _components_ui_features_font_icons_font_icons_component__WEBPACK_IMPORTED_MODULE_30__["FontIconsComponent"]
      }, {
        path: 'soical-icons',
        component: _components_ui_features_soical_icons_soical_icons_component__WEBPACK_IMPORTED_MODULE_31__["SoicalIconsComponent"]
      }, {
        path: 'form-control',
        component: _components_form_stuff_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_32__["FormControlComponent"]
      }, {
        path: 'form-validation',
        component: _components_form_stuff_form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_33__["FormValidationComponent"]
      }, {
        path: 'form-layouts',
        component: _components_form_stuff_form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_34__["FormLayoutsComponent"]
      }, {
        path: 'form-input-mask',
        component: _components_form_stuff_form_input_mask_form_input_mask_component__WEBPACK_IMPORTED_MODULE_35__["FormInputMaskComponent"]
      }, {
        path: 'form-X-editable',
        component: _components_form_stuff_form_x_editable_form_x_editable_component__WEBPACK_IMPORTED_MODULE_36__["FormXEditableComponent"]
      }, {
        path: 'form-wizard',
        component: _components_form_stuff_form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_37__["FormWizardComponent"]
      }, {
        path: 'image-cropping',
        component: _components_form_stuff_image_cropping_image_cropping_component__WEBPACK_IMPORTED_MODULE_38__["ImageCroppingComponent"]
      }, {
        path: 'multiple-file-upload',
        component: _components_form_stuff_multiple_file_upload_multiple_file_upload_component__WEBPACK_IMPORTED_MODULE_39__["MultipleFileUploadComponent"]
      }, {
        path: 'dropzone-file-upload',
        component: _components_form_stuff_dropzone_file_upload_dropzone_file_upload_component__WEBPACK_IMPORTED_MODULE_40__["DropzoneFileUploadComponent"]
      }, {
        path: 'boxed-portlets',
        component: _components_portlets_boxed_boxed_component__WEBPACK_IMPORTED_MODULE_41__["BoxedComponent"]
      }, {
        path: 'light-portlets',
        component: _components_portlets_light_light_component__WEBPACK_IMPORTED_MODULE_42__["LightComponent"]
      }, {
        path: 'solid-portlets',
        component: _components_portlets_solid_solid_component__WEBPACK_IMPORTED_MODULE_43__["SolidComponent"]
      }, {
        path: 'ajax-portles',
        component: _components_portlets_ajax_ajax_component__WEBPACK_IMPORTED_MODULE_44__["AjaxComponent"]
      }, {
        path: 'draggable-portlets',
        component: _components_portlets_draggable_draggable_component__WEBPACK_IMPORTED_MODULE_45__["DraggableComponent"]
      }, {
        path: 'blank-page',
        component: _components_pages_layouts_blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_46__["BlankPageComponent"]
      }, {
        path: 'ajax-contant-layout',
        component: _components_pages_layouts_ajax_contant_layout_ajax_contant_layout_component__WEBPACK_IMPORTED_MODULE_47__["AjaxContantLayoutComponent"]
      }, {
        path: 'off-canvas-mobile-menu',
        component: _components_pages_layouts_off_canvas_mobile_menu_off_canvas_mobile_menu_component__WEBPACK_IMPORTED_MODULE_48__["OffCanvasMobileMenuComponent"]
      }, {
        path: 'classic-page-head',
        component: _components_pages_layouts_classic_page_head_classic_page_head_component__WEBPACK_IMPORTED_MODULE_49__["ClassicPageHeadComponent"]
      }, {
        path: 'light-page-head',
        component: _components_pages_layouts_light_page_head_light_page_head_component__WEBPACK_IMPORTED_MODULE_50__["LightPageHeadComponent"]
      }, {
        path: 'boxed-page',
        component: _components_pages_layouts_boxed_page_boxed_page_component__WEBPACK_IMPORTED_MODULE_51__["BoxedPageComponent"]
      }, {
        path: 'light-sidebar-menu',
        component: _components_custom_layout_light_sidebar_menu_light_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_52__["LightSidebarMenuComponent"]
      }, {
        path: 'hover-sidebar-menu',
        component: _components_custom_layout_hover_sidebar_menu_hover_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_53__["HoverSidebarMenuComponent"]
      }, {
        path: 'fixed-sidebar-layout',
        component: _components_custom_layout_fixed_sidebar_layout_fixed_sidebar_layout_component__WEBPACK_IMPORTED_MODULE_54__["FixedSidebarLayoutComponent"]
      }, {
        path: 'closed-sidebar-layout',
        component: _components_custom_layout_closed_sidebar_layout_closed_sidebar_layout_component__WEBPACK_IMPORTED_MODULE_55__["ClosedSidebarLayoutComponent"]
      }, {
        path: 'offcanvas-sidebar-layout',
        component: _components_custom_layout_offcanvas_sidebar_layout_offcanvas_sidebar_layout_component__WEBPACK_IMPORTED_MODULE_56__["OffcanvasSidebarLayoutComponent"]
      }]
    }];
    let PagesRoutingModule = class PagesRoutingModule {};
    PagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PagesRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/pages.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/pages.module.ts ***!
    \***************************************/

  /*! exports provided: PagesModule */

  /***/
  function srcAppPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
      return PagesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages-routing.module */
    "./src/app/pages/pages-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _pages_core_pages_core_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages-core/pages-core.component */
    "./src/app/pages/pages-core/pages-core.component.ts");
    /* harmony import */


    var _common_left_panel_left_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./common/left-panel/left-panel.component */
    "./src/app/pages/common/left-panel/left-panel.component.ts");
    /* harmony import */


    var _common_right_panel_right_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./common/right-panel/right-panel.component */
    "./src/app/pages/common/right-panel/right-panel.component.ts");
    /* harmony import */


    var _common_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./common/header/header.component */
    "./src/app/pages/common/header/header.component.ts");
    /* harmony import */


    var _content_section_content_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./content-section/content-section.component */
    "./src/app/pages/content-section/content-section.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/pages/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_elements_elements_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/elements/elements.component */
    "./src/app/pages/components/elements/elements.component.ts");
    /* harmony import */


    var _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/tables/tables.component */
    "./src/app/pages/components/tables/tables.component.ts");
    /* harmony import */


    var _components_ecommerce_orders_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/ecommerce/orders/orders.component */
    "./src/app/pages/components/ecommerce/orders/orders.component.ts");
    /* harmony import */


    var _components_ecommerce_order_view_order_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/ecommerce/order-view/order-view.component */
    "./src/app/pages/components/ecommerce/order-view/order-view.component.ts");
    /* harmony import */


    var _components_ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/ecommerce/products/products.component */
    "./src/app/pages/components/ecommerce/products/products.component.ts");
    /* harmony import */


    var _components_ecommerce_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/ecommerce/product-edit/product-edit.component */
    "./src/app/pages/components/ecommerce/product-edit/product-edit.component.ts");
    /* harmony import */


    var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/invoice/invoice.component */
    "./src/app/pages/components/invoice/invoice.component.ts");
    /* harmony import */


    var _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/authentication/authentication.component */
    "./src/app/pages/components/authentication/authentication.component.ts");
    /* harmony import */


    var _components_other_app_other_app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/other-app/other-app.component */
    "./src/app/pages/components/other-app/other-app.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/bootstrapComponent/date-time-picker/date-time-picker.component */
    "./src/app/pages/components/bootstrapComponent/date-time-picker/date-time-picker.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_color_pickers_color_pickers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/bootstrapComponent/color-pickers/color-pickers.component */
    "./src/app/pages/components/bootstrapComponent/color-pickers/color-pickers.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_select_select_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/bootstrapComponent/select/select.component */
    "./src/app/pages/components/bootstrapComponent/select/select.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_switch_switch_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/bootstrapComponent/switch/switch.component */
    "./src/app/pages/components/bootstrapComponent/switch/switch.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/bootstrapComponent/file-upload/file-upload.component */
    "./src/app/pages/components/bootstrapComponent/file-upload/file-upload.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_touchspin_touchspin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/bootstrapComponent/touchspin/touchspin.component */
    "./src/app/pages/components/bootstrapComponent/touchspin/touchspin.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_icons_icons_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/bootstrapComponent/icons/icons.component */
    "./src/app/pages/components/bootstrapComponent/icons/icons.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/bootstrapComponent/code-editor/code-editor.component */
    "./src/app/pages/components/bootstrapComponent/code-editor/code-editor.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_wysiwyg_editor_wysiwyg_editor_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/bootstrapComponent/wysiwyg-editor/wysiwyg-editor.component */
    "./src/app/pages/components/bootstrapComponent/wysiwyg-editor/wysiwyg-editor.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_widgets_tools_widgets_tools_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/bootstrapComponent/widgets-tools/widgets-tools.component */
    "./src/app/pages/components/bootstrapComponent/widgets-tools/widgets-tools.component.ts");
    /* harmony import */


    var _components_bootstrapComponent_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/bootstrapComponent/context-menu/context-menu.component */
    "./src/app/pages/components/bootstrapComponent/context-menu/context-menu.component.ts");
    /* harmony import */


    var _components_ui_features_color_library_color_library_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/ui-features/color-library/color-library.component */
    "./src/app/pages/components/ui-features/color-library/color-library.component.ts");
    /* harmony import */


    var _components_ui_features_grid_system_grid_system_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/ui-features/grid-system/grid-system.component */
    "./src/app/pages/components/ui-features/grid-system/grid-system.component.ts");
    /* harmony import */


    var _components_ui_features_general_components_general_components_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/ui-features/general-components/general-components.component */
    "./src/app/pages/components/ui-features/general-components/general-components.component.ts");
    /* harmony import */


    var _components_ui_features_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/ui-features/buttons/buttons.component */
    "./src/app/pages/components/ui-features/buttons/buttons.component.ts");
    /* harmony import */


    var _components_ui_features_spinner_buttons_spinner_buttons_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/ui-features/spinner-buttons/spinner-buttons.component */
    "./src/app/pages/components/ui-features/spinner-buttons/spinner-buttons.component.ts");
    /* harmony import */


    var _components_ui_features_font_icons_font_icons_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/ui-features/font-icons/font-icons.component */
    "./src/app/pages/components/ui-features/font-icons/font-icons.component.ts");
    /* harmony import */


    var _components_ui_features_soical_icons_soical_icons_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/ui-features/soical-icons/soical-icons.component */
    "./src/app/pages/components/ui-features/soical-icons/soical-icons.component.ts");
    /* harmony import */


    var _components_form_stuff_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/form-stuff/form-control/form-control.component */
    "./src/app/pages/components/form-stuff/form-control/form-control.component.ts");
    /* harmony import */


    var _components_form_stuff_form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/form-stuff/form-validation/form-validation.component */
    "./src/app/pages/components/form-stuff/form-validation/form-validation.component.ts");
    /* harmony import */


    var _components_form_stuff_form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/form-stuff/form-layouts/form-layouts.component */
    "./src/app/pages/components/form-stuff/form-layouts/form-layouts.component.ts");
    /* harmony import */


    var _components_form_stuff_form_input_mask_form_input_mask_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/form-stuff/form-input-mask/form-input-mask.component */
    "./src/app/pages/components/form-stuff/form-input-mask/form-input-mask.component.ts");
    /* harmony import */


    var _components_form_stuff_form_x_editable_form_x_editable_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./components/form-stuff/form-x-editable/form-x-editable.component */
    "./src/app/pages/components/form-stuff/form-x-editable/form-x-editable.component.ts");
    /* harmony import */


    var _components_form_stuff_form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./components/form-stuff/form-wizard/form-wizard.component */
    "./src/app/pages/components/form-stuff/form-wizard/form-wizard.component.ts");
    /* harmony import */


    var _components_form_stuff_image_cropping_image_cropping_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./components/form-stuff/image-cropping/image-cropping.component */
    "./src/app/pages/components/form-stuff/image-cropping/image-cropping.component.ts");
    /* harmony import */


    var _components_form_stuff_multiple_file_upload_multiple_file_upload_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./components/form-stuff/multiple-file-upload/multiple-file-upload.component */
    "./src/app/pages/components/form-stuff/multiple-file-upload/multiple-file-upload.component.ts");
    /* harmony import */


    var _components_form_stuff_dropzone_file_upload_dropzone_file_upload_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./components/form-stuff/dropzone-file-upload/dropzone-file-upload.component */
    "./src/app/pages/components/form-stuff/dropzone-file-upload/dropzone-file-upload.component.ts");
    /* harmony import */


    var _components_portlets_boxed_boxed_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./components/portlets/boxed/boxed.component */
    "./src/app/pages/components/portlets/boxed/boxed.component.ts");
    /* harmony import */


    var _components_portlets_light_light_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./components/portlets/light/light.component */
    "./src/app/pages/components/portlets/light/light.component.ts");
    /* harmony import */


    var _components_portlets_solid_solid_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./components/portlets/solid/solid.component */
    "./src/app/pages/components/portlets/solid/solid.component.ts");
    /* harmony import */


    var _components_portlets_ajax_ajax_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./components/portlets/ajax/ajax.component */
    "./src/app/pages/components/portlets/ajax/ajax.component.ts");
    /* harmony import */


    var _components_portlets_draggable_draggable_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./components/portlets/draggable/draggable.component */
    "./src/app/pages/components/portlets/draggable/draggable.component.ts");
    /* harmony import */


    var _components_pages_layouts_blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./components/pages-layouts/blank-page/blank-page.component */
    "./src/app/pages/components/pages-layouts/blank-page/blank-page.component.ts");
    /* harmony import */


    var _components_pages_layouts_ajax_contant_layout_ajax_contant_layout_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./components/pages-layouts/ajax-contant-layout/ajax-contant-layout.component */
    "./src/app/pages/components/pages-layouts/ajax-contant-layout/ajax-contant-layout.component.ts");
    /* harmony import */


    var _components_pages_layouts_off_canvas_mobile_menu_off_canvas_mobile_menu_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./components/pages-layouts/off-canvas-mobile-menu/off-canvas-mobile-menu.component */
    "./src/app/pages/components/pages-layouts/off-canvas-mobile-menu/off-canvas-mobile-menu.component.ts");
    /* harmony import */


    var _components_pages_layouts_classic_page_head_classic_page_head_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./components/pages-layouts/classic-page-head/classic-page-head.component */
    "./src/app/pages/components/pages-layouts/classic-page-head/classic-page-head.component.ts");
    /* harmony import */


    var _components_pages_layouts_light_page_head_light_page_head_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./components/pages-layouts/light-page-head/light-page-head.component */
    "./src/app/pages/components/pages-layouts/light-page-head/light-page-head.component.ts");
    /* harmony import */


    var _components_pages_layouts_boxed_page_boxed_page_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./components/pages-layouts/boxed-page/boxed-page.component */
    "./src/app/pages/components/pages-layouts/boxed-page/boxed-page.component.ts");
    /* harmony import */


    var _components_custom_layout_light_sidebar_menu_light_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! ./components/custom-layout/light-sidebar-menu/light-sidebar-menu.component */
    "./src/app/pages/components/custom-layout/light-sidebar-menu/light-sidebar-menu.component.ts");
    /* harmony import */


    var _components_custom_layout_hover_sidebar_menu_hover_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./components/custom-layout/hover-sidebar-menu/hover-sidebar-menu.component */
    "./src/app/pages/components/custom-layout/hover-sidebar-menu/hover-sidebar-menu.component.ts");
    /* harmony import */


    var _components_custom_layout_fixed_sidebar_layout_fixed_sidebar_layout_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ./components/custom-layout/fixed-sidebar-layout/fixed-sidebar-layout.component */
    "./src/app/pages/components/custom-layout/fixed-sidebar-layout/fixed-sidebar-layout.component.ts");
    /* harmony import */


    var _components_custom_layout_closed_sidebar_layout_closed_sidebar_layout_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! ./components/custom-layout/closed-sidebar-layout/closed-sidebar-layout.component */
    "./src/app/pages/components/custom-layout/closed-sidebar-layout/closed-sidebar-layout.component.ts");
    /* harmony import */


    var _components_custom_layout_offcanvas_sidebar_layout_offcanvas_sidebar_layout_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! ./components/custom-layout/offcanvas-sidebar-layout/offcanvas-sidebar-layout.component */
    "./src/app/pages/components/custom-layout/offcanvas-sidebar-layout/offcanvas-sidebar-layout.component.ts");

    let PagesModule = class PagesModule {};
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_core_pages_core_component__WEBPACK_IMPORTED_MODULE_5__["PagesCoreComponent"], _common_left_panel_left_panel_component__WEBPACK_IMPORTED_MODULE_6__["LeftPanelComponent"], _common_right_panel_right_panel_component__WEBPACK_IMPORTED_MODULE_7__["RightPanelComponent"], _common_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _content_section_content_section_component__WEBPACK_IMPORTED_MODULE_9__["ContentSectionComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], _components_elements_elements_component__WEBPACK_IMPORTED_MODULE_11__["ElementsComponent"], _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_12__["TablesComponent"], _components_ecommerce_orders_orders_component__WEBPACK_IMPORTED_MODULE_13__["OrdersComponent"], _components_ecommerce_order_view_order_view_component__WEBPACK_IMPORTED_MODULE_14__["OrderViewComponent"], _components_ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_15__["ProductsComponent"], _components_ecommerce_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_16__["ProductEditComponent"], _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_17__["InvoiceComponent"], _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_18__["AuthenticationComponent"], _components_other_app_other_app_component__WEBPACK_IMPORTED_MODULE_19__["OtherAppComponent"], _components_bootstrapComponent_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_20__["DateTimePickerComponent"], _components_bootstrapComponent_color_pickers_color_pickers_component__WEBPACK_IMPORTED_MODULE_21__["ColorPickersComponent"], _components_bootstrapComponent_select_select_component__WEBPACK_IMPORTED_MODULE_22__["SelectComponent"], _components_bootstrapComponent_switch_switch_component__WEBPACK_IMPORTED_MODULE_23__["SwitchComponent"], _components_bootstrapComponent_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_24__["FileUploadComponent"], _components_bootstrapComponent_touchspin_touchspin_component__WEBPACK_IMPORTED_MODULE_25__["TouchspinComponent"], _components_bootstrapComponent_icons_icons_component__WEBPACK_IMPORTED_MODULE_26__["IconsComponent"], _components_bootstrapComponent_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_27__["CodeEditorComponent"], _components_bootstrapComponent_wysiwyg_editor_wysiwyg_editor_component__WEBPACK_IMPORTED_MODULE_28__["WYSIWYGEditorComponent"], _components_bootstrapComponent_widgets_tools_widgets_tools_component__WEBPACK_IMPORTED_MODULE_29__["WidgetsToolsComponent"], _components_bootstrapComponent_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_30__["ContextMenuComponent"], _components_ui_features_color_library_color_library_component__WEBPACK_IMPORTED_MODULE_31__["ColorLibraryComponent"], _components_ui_features_grid_system_grid_system_component__WEBPACK_IMPORTED_MODULE_32__["GridSystemComponent"], _components_ui_features_general_components_general_components_component__WEBPACK_IMPORTED_MODULE_33__["GeneralComponentsComponent"], _components_ui_features_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_34__["ButtonsComponent"], _components_ui_features_spinner_buttons_spinner_buttons_component__WEBPACK_IMPORTED_MODULE_35__["SpinnerButtonsComponent"], _components_ui_features_font_icons_font_icons_component__WEBPACK_IMPORTED_MODULE_36__["FontIconsComponent"], _components_ui_features_soical_icons_soical_icons_component__WEBPACK_IMPORTED_MODULE_37__["SoicalIconsComponent"], _components_form_stuff_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_38__["FormControlComponent"], _components_form_stuff_form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_39__["FormValidationComponent"], _components_form_stuff_form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_40__["FormLayoutsComponent"], _components_form_stuff_form_input_mask_form_input_mask_component__WEBPACK_IMPORTED_MODULE_41__["FormInputMaskComponent"], _components_form_stuff_form_x_editable_form_x_editable_component__WEBPACK_IMPORTED_MODULE_42__["FormXEditableComponent"], _components_form_stuff_form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_43__["FormWizardComponent"], _components_form_stuff_image_cropping_image_cropping_component__WEBPACK_IMPORTED_MODULE_44__["ImageCroppingComponent"], _components_form_stuff_multiple_file_upload_multiple_file_upload_component__WEBPACK_IMPORTED_MODULE_45__["MultipleFileUploadComponent"], _components_form_stuff_dropzone_file_upload_dropzone_file_upload_component__WEBPACK_IMPORTED_MODULE_46__["DropzoneFileUploadComponent"], _components_portlets_boxed_boxed_component__WEBPACK_IMPORTED_MODULE_47__["BoxedComponent"], _components_portlets_light_light_component__WEBPACK_IMPORTED_MODULE_48__["LightComponent"], _components_portlets_solid_solid_component__WEBPACK_IMPORTED_MODULE_49__["SolidComponent"], _components_portlets_ajax_ajax_component__WEBPACK_IMPORTED_MODULE_50__["AjaxComponent"], _components_portlets_draggable_draggable_component__WEBPACK_IMPORTED_MODULE_51__["DraggableComponent"], _components_pages_layouts_blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_52__["BlankPageComponent"], _components_pages_layouts_ajax_contant_layout_ajax_contant_layout_component__WEBPACK_IMPORTED_MODULE_53__["AjaxContantLayoutComponent"], _components_pages_layouts_off_canvas_mobile_menu_off_canvas_mobile_menu_component__WEBPACK_IMPORTED_MODULE_54__["OffCanvasMobileMenuComponent"], _components_pages_layouts_classic_page_head_classic_page_head_component__WEBPACK_IMPORTED_MODULE_55__["ClassicPageHeadComponent"], _components_pages_layouts_light_page_head_light_page_head_component__WEBPACK_IMPORTED_MODULE_56__["LightPageHeadComponent"], _components_pages_layouts_boxed_page_boxed_page_component__WEBPACK_IMPORTED_MODULE_57__["BoxedPageComponent"], _components_custom_layout_light_sidebar_menu_light_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_58__["LightSidebarMenuComponent"], _components_custom_layout_hover_sidebar_menu_hover_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_59__["HoverSidebarMenuComponent"], _components_custom_layout_fixed_sidebar_layout_fixed_sidebar_layout_component__WEBPACK_IMPORTED_MODULE_60__["FixedSidebarLayoutComponent"], _components_custom_layout_closed_sidebar_layout_closed_sidebar_layout_component__WEBPACK_IMPORTED_MODULE_61__["ClosedSidebarLayoutComponent"], _components_custom_layout_offcanvas_sidebar_layout_offcanvas_sidebar_layout_component__WEBPACK_IMPORTED_MODULE_62__["OffcanvasSidebarLayoutComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
    })], PagesModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-pages-module-es5.js.map