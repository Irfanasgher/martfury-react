module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/elements/BreadCrumb.jsx":
/*!********************************************!*\
  !*** ./components/elements/BreadCrumb.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\elements\\BreadCrumb.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BreadCrumb = ({
  breacrumb,
  layout
}) => {
  return __jsx("div", {
    className: "ps-breadcrumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: layout === 'fullwidth' ? 'ps-container' : 'container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("ul", {
    className: "breadcrumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, breacrumb.map(item => {
    if (!item.url) {
      return __jsx("li", {
        key: item.text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: undefined
      }, item.text);
    } else {
      return __jsx("li", {
        key: item.text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: undefined
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: item.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: undefined
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: undefined
      }, item.text)));
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (BreadCrumb);

/***/ }),

/***/ "./components/elements/Rating.jsx":
/*!****************************************!*\
  !*** ./components/elements/Rating.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\elements\\Rating.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Rating = () => __jsx("span", {
  className: "ps-rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-star",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Rating);

/***/ }),

/***/ "./components/elements/menu/MegaMenu.jsx":
/*!***********************************************!*\
  !*** ./components/elements/menu/MegaMenu.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\elements\\menu\\MegaMenu.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Menu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      menuData
    } = this.props;
    return __jsx("li", {
      className: menuData.megaContent ? 'menu-item-has-children has-mega-menu' : '',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, menuData.type === 'dynamic' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${menuData.url}/[pid]`,
      as: `${menuData.url}/${menuData.endPoint}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, menuData.text)) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: menuData.url,
      as: menuData.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, menuData.text)), __jsx("div", {
      className: "mega-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, menuData && menuData.megaContent.map(megaItem => __jsx("div", {
      className: "mega-menu__column",
      key: megaItem.heading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, megaItem.heading), __jsx("ul", {
      className: "mega-menu__list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, megaItem.megaItems.map(megaSubItem => __jsx("li", {
      key: megaSubItem.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, megaSubItem.type === 'dynamic' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${megaSubItem.url}/[pid]`,
      as: `${megaSubItem.url}/${megaSubItem.endPoint}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, megaSubItem.text)) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: megaSubItem.url,
      as: megaSubItem.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, megaSubItem.text)))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/elements/menu/Menu.jsx":
/*!*******************************************!*\
  !*** ./components/elements/menu/Menu.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MegaMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MegaMenu */ "./components/elements/menu/MegaMenu.jsx");
/* harmony import */ var _MenuDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuDropdown */ "./components/elements/menu/MenuDropdown.jsx");
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\elements\\menu\\Menu.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Menu = ({
  data,
  className
}) => __jsx("ul", {
  className: className,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, data && data.map(item => {
  if (item.subMenu) {
    return __jsx(_MenuDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
      menuData: item,
      key: item.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: undefined
    });
  } else if (item.megaContent) {
    return __jsx(_MegaMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
      menuData: item,
      key: item.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    });
  } else {
    return __jsx("li", {
      key: item.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }, item.type === 'dynamic' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${item.url}/[pid]`,
      as: `${item.url}/${item.endPoint}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }, item.text)) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: item.url,
      as: item.alias,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }, item.text)));
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/elements/menu/MenuDropdown.jsx":
/*!***************************************************!*\
  !*** ./components/elements/menu/MenuDropdown.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\elements\\menu\\MenuDropdown.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class MenuDropdown extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      menuData
    } = this.props;
    return __jsx("li", {
      className: menuData.subMenu ? 'menu-item-has-children dropdown' : '',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, menuData.type === 'dynamic' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${menuData.url}/[pid]`,
      as: `${menuData.url}/${menuData.endPoint}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, menuData.text)) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: menuData.url,
      as: menuData.alias,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, menuData.text)), menuData.subMenu ? __jsx("ul", {
      className: menuData.subClass,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, menuData.subMenu.map((subMenuItem, index) => __jsx(MenuDropdown, {
      menuData: subMenuItem,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }))) : '');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MenuDropdown);

/***/ }),

/***/ "./components/elements/products/ProductSearchResult.jsx":
/*!**************************************************************!*\
  !*** ./components/elements/products/ProductSearchResult.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Rating */ "./components/elements/Rating.jsx");
/* harmony import */ var _utilities_product_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utilities/product-helper */ "./utilities/product-helper.js");
/* harmony import */ var _utilities_app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utilities/app-settings */ "./utilities/app-settings.js");
/* harmony import */ var _repositories_Repository__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../repositories/Repository */ "./repositories/Repository.js");
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\elements\\products\\ProductSearchResult.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









class ProductResult extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      product,
      currency
    } = this.props;
    return __jsx("div", {
      className: "ps-product ps-product--wide ps-product--search-result",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: "ps-product__thumbnail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("img", {
      src: _utilities_app_settings__WEBPACK_IMPORTED_MODULE_6__["isStaticData"] === true ? product.thumbnail.url : `${_repositories_Repository__WEBPACK_IMPORTED_MODULE_7__["baseUrl"]}${product.thumbnail.url}`,
      alt: "martfury",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })))), __jsx("div", {
      className: "ps-product__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("a", {
      className: "ps-product__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, product.title)), __jsx("div", {
      className: "ps-product__rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(_Rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, product.ratingCount)), product.is_sale === true ? __jsx("p", {
      className: "ps-product__price sale",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, currency ? currency.symbol : '$', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(product.price), __jsx("del", {
      className: "ml-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, currency ? currency.symbol : '$', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(product.sale_price))) : __jsx("p", {
      className: "ps-product__price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, currency ? currency.symbol : '$', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(product.price))));
  }

}

const mapStateToProps = state => {
  return state.setting;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(ProductResult));

/***/ }),

/***/ "./components/partials/account/Checkout.jsx":
/*!**************************************************!*\
  !*** ./components/partials/account/Checkout.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_FormCheckoutInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/FormCheckoutInformation */ "./components/partials/account/modules/FormCheckoutInformation.jsx");
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\partials\\account\\Checkout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Checkout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      amount,
      cartTotal,
      cartItems
    } = this.props;
    return __jsx("div", {
      className: "ps-checkout ps-section--shopping",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("div", {
      className: "ps-section__header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Checkout Information")), __jsx("div", {
      className: "ps-section__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(_modules_FormCheckoutInformation__WEBPACK_IMPORTED_MODULE_2__["default"], {
      amount: amount,
      cartTotal: cartTotal,
      cartItems: cartItems,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }))));
  }

}

const mapStateToProps = state => {
  return state.cart;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Checkout));

/***/ }),

/***/ "./components/partials/account/modules/FormCheckoutInformation.jsx":
/*!*************************************************************************!*\
  !*** ./components/partials/account/modules/FormCheckoutInformation.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\partials\\account\\modules\\FormCheckoutInformation.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class FormCheckoutInformation extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleLoginSubmit", () => {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/account/shipping');
    });
  }

  render() {
    const {
      amount,
      cartItems,
      cartTotal
    } = this.props;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      className: "ps-form--checkout",
      onFinish: this.handleLoginSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("div", {
      className: "ps-form__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("div", {
      className: "col-xl-8 col-lg-8 col-md-12 col-sm-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: "ps-form__billing-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("h3", {
      className: "ps-form__heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Contact information"), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
      label: "Name",
      name: "name",
      rules: [{
        required: false,
        message: 'Enter an email or mobile phone number!'
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      className: "form-control",
      type: "text",
      placeholder: "Email or phone number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }))), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("div", {
      className: "ps-checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("input", {
      className: "form-control",
      type: "checkbox",
      id: "keep-update",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "keep-update",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Keep me up to date on news and exclusive offers?"))), __jsx("h3", {
      className: "ps-form__heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Shipping address"), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("div", {
      className: "col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
      label: "First Name",
      name: "firstName",
      rules: [{
        required: false,
        message: 'Enter your first name!'
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      className: "form-control",
      type: "text",
      placeholder: "First Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })))), __jsx("div", {
      className: "col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
      label: "Last Name",
      name: "lastName",
      rules: [{
        required: false,
        message: 'Enter your last name!'
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      className: "form-control",
      type: "text",
      placeholder: "Last Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }))))), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
      name: "address",
      rules: [{
        required: false,
        message: 'Enter an address!'
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      className: "form-control",
      type: "text",
      placeholder: "Address",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }))), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
      name: "apartment",
      rules: [{
        required: false,
        message: 'Enter an Apartment!'
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      className: "form-control",
      type: "text",
      placeholder: "Apartment, suite, etc. (optional)",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }))), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, __jsx("div", {
      className: "col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
      name: "city",
      rules: [{
        required: false,
        message: 'Enter a city!'
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      className: "form-control",
      type: "city",
      placeholder: "City",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    })))), __jsx("div", {
      className: "col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
      name: "postalCode",
      rules: [{
        required: false,
        message: 'Enter a postal oce!'
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      className: "form-control",
      type: "postalCode",
      placeholder: "Postal Code",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }))))), __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, __jsx("div", {
      className: "ps-checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, __jsx("input", {
      className: "form-control",
      type: "checkbox",
      id: "keep-update",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "keep-update",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, "Save this information for next time"))), __jsx("div", {
      className: "ps-form__submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/account/cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, __jsx("i", {
      className: "icon-arrow-left mr-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }), "Return to shopping cart")), __jsx("div", {
      className: "ps-block__footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, __jsx("button", {
      className: "ps-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, "Continue to shipping"))))), __jsx("div", {
      className: "col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, __jsx("div", {
      className: "ps-form__orders",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, "Your order"), __jsx("div", {
      className: "ps-block--checkout-order",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, __jsx("div", {
      className: "ps-block__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, __jsx("figure", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, __jsx("figcaption", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, "Product"), __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, "total"))), __jsx("figure", {
      className: "ps-block__items",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, cartItems && cartItems.map(product => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      key: product.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, product.title, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, "x", product.quantity)), __jsx("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, "$", product.quantity * product.price))))), __jsx("figure", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, __jsx("figcaption", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, "Subtotal"), __jsx("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, "$", amount))), __jsx("figure", {
      className: "ps-block__shipping",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }, "Shipping"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }, "Calculated at next step")))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FormCheckoutInformation);

/***/ }),

/***/ "./components/partials/commons/Newletters.jsx":
/*!****************************************************!*\
  !*** ./components/partials/commons/Newletters.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\partials\\commons\\Newletters.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Newsletters = ({
  layout
}) => __jsx("section", {
  className: "ps-newsletter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: layout && layout === 'container' ? ' container' : 'ps-container',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("form", {
  className: "ps-form--newsletter",
  action: "do_action",
  method: "post",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 ",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("div", {
  className: "ps-form__left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Newsletter"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Subcribe to get information about products and coupons"))), __jsx("div", {
  className: "col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 ",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("div", {
  className: "ps-form__right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("div", {
  className: "form-group--nest",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("input", {
  className: "form-control",
  type: "email",
  placeholder: "Email address",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("button", {
  className: "ps-btn",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "Subscribe"))))))));

/* harmony default export */ __webpack_exports__["default"] = (Newsletters);

/***/ }),

/***/ "./components/shared/footers/FooterDefault.jsx":
/*!*****************************************************!*\
  !*** ./components/shared/footers/FooterDefault.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_FooterWidgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/FooterWidgets */ "./components/shared/footers/modules/FooterWidgets.jsx");
/* harmony import */ var _modules_FooterCopyright__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/FooterCopyright */ "./components/shared/footers/modules/FooterCopyright.jsx");
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\footers\\FooterDefault.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import FooterLinks from './modules/FooterLinks';



const FooterDefault = () => __jsx("footer", {
  className: "ps-footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_modules_FooterWidgets__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx(_modules_FooterCopyright__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (FooterDefault);

/***/ }),

/***/ "./components/shared/footers/modules/FooterCopyright.jsx":
/*!***************************************************************!*\
  !*** ./components/shared/footers/modules/FooterCopyright.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\footers\\modules\\FooterCopyright.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FooterCopyright = () => __jsx("div", {
  className: "ps-footer__copyright",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "\xA9 2020 Colorado Hockey Connection. All Rights Reserved"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "We Using Safe Payment For:"), __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/img/payment-method/1.jpg",
  alt: "Martfury",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})), __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/img/payment-method/2.jpg",
  alt: "Martfury",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/img/payment-method/3.jpg",
  alt: "Martfury",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
})), __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/img/payment-method/4.jpg",
  alt: "Martfury",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
})), __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/img/payment-method/5.jpg",
  alt: "Martfury",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}))));

/* harmony default export */ __webpack_exports__["default"] = (FooterCopyright);

/***/ }),

/***/ "./components/shared/footers/modules/FooterWidgets.jsx":
/*!*************************************************************!*\
  !*** ./components/shared/footers/modules/FooterWidgets.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\footers\\modules\\FooterWidgets.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const FooterWidgets = () => __jsx("div", {
  className: "ps-footer__widgets",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("aside", {
  className: "widget widget_footer widget_contact-us",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("h4", {
  className: "widget-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Contact us"), __jsx("div", {
  className: "widget_content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Call us 24/7"), __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "1800 97 97 69"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "502 New Design Str, Melbourne, Australia ", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("a", {
  href: "mailto:contact@martfury.co",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "contact@chc.co")), __jsx("ul", {
  className: "ps-list--social",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("a", {
  className: "facebook",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-facebook",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("a", {
  className: "twitter",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-twitter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("a", {
  className: "google-plus",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-google-plus",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("a", {
  className: "instagram",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-instagram",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
})))))), __jsx("aside", {
  className: "widget widget_footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx("h4", {
  className: "widget-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "Quick links"), __jsx("ul", {
  className: "ps-list--link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page/blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, "Policy"))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page/blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, "Term & Condition"))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page/blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, "Term & Condition"))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page/blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, "Shipping"))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page/blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, "Return"))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page/faqs",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, "FAQs"))))), __jsx("aside", {
  className: "widget widget_footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, __jsx("h4", {
  className: "widget-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, "Company"), __jsx("ul", {
  className: "ps-list--link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page/about-us",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, "About Us"))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page/blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, "Affilate"))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page/blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, "Career"))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page/contact-us",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}, "Contact"))))), __jsx("aside", {
  className: "widget widget_footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, __jsx("h4", {
  className: "widget-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}, "Bussiness"), __jsx("ul", {
  className: "ps-list--link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page/about-us",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, "Our Press"))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/account/checkout",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110
  },
  __self: undefined
}, "Checkout"))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/account/user-information",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}, "My account"))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/shop",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
}, "Shop"))))));

/* harmony default export */ __webpack_exports__["default"] = (FooterWidgets);

/***/ }),

/***/ "./components/shared/headers/HeaderDefault.jsx":
/*!*****************************************************!*\
  !*** ./components/shared/headers/HeaderDefault.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navigation_NavigationDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation/NavigationDefault */ "./components/shared/navigation/NavigationDefault.jsx");
/* harmony import */ var _modules_HeaderActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/HeaderActions */ "./components/shared/headers/modules/HeaderActions.jsx");
/* harmony import */ var _modules_MenuCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/MenuCategories */ "./components/shared/headers/modules/MenuCategories.jsx");
/* harmony import */ var _modules_SearchHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/SearchHeader */ "./components/shared/headers/modules/SearchHeader.jsx");
/* harmony import */ var _utilities_common_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utilities/common-helpers */ "./utilities/common-helpers.js");
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\headers\\HeaderDefault.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class HeaderDefault extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor({
    props
  }) {
    super(props);
  }

  componentDidMount() {
    if (false) {}
  }

  render() {
    return __jsx("header", {
      className: "header header--1",
      "data-sticky": "true",
      id: "headerSticky",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("div", {
      className: "header__top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("div", {
      className: "ps-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: "header__left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("a", {
      className: "ps-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("img", {
      src: "/static/img/chc-logo.png",
      alt: "chc",
      height: "52",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }))), __jsx("div", {
      className: "menu--product-categories",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("div", {
      className: "menu__toggle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("i", {
      className: "icon-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Shop by Category")), __jsx("div", {
      className: "menu__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(_modules_MenuCategories__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })))), __jsx("div", {
      className: "header__center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(_modules_SearchHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    })), __jsx("div", {
      className: "header__right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx(_modules_HeaderActions__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })))), __jsx(_navigation_NavigationDefault__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HeaderDefault);

/***/ }),

/***/ "./components/shared/headers/HeaderMobile.jsx":
/*!****************************************************!*\
  !*** ./components/shared/headers/HeaderMobile.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_CurrencyDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/CurrencyDropdown */ "./components/shared/headers/modules/CurrencyDropdown.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_LanguageSwicher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/LanguageSwicher */ "./components/shared/headers/modules/LanguageSwicher.jsx");
/* harmony import */ var _modules_MobileHeaderActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/MobileHeaderActions */ "./components/shared/headers/modules/MobileHeaderActions.jsx");
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\headers\\HeaderMobile.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class HeaderMobile extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor({
    props
  }) {
    super(props);
  }

  render() {
    return __jsx("header", {
      className: "header header--mobile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: "header__top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("div", {
      className: "header__left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Welcome to Martfury Online Shopping Store !")), __jsx("div", {
      className: "header__right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("ul", {
      className: "navigation__extra",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/vendor/become-a-vendor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Sell on Martfury"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/account/order-tracking",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Tract your order"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(_modules_CurrencyDropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(_modules_LanguageSwicher__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }))))), __jsx("div", {
      className: "navigation--mobile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("div", {
      className: "navigation__left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("a", {
      className: "ps-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("img", {
      src: "/static/img/chc-logo.png",
      alt: "chc",
      height: "42",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })))), __jsx(_modules_MobileHeaderActions__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), __jsx("div", {
      className: "ps-search--mobile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("form", {
      className: "ps-form--search-mobile",
      action: "/",
      method: "get",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("div", {
      className: "form-group--nest",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("input", {
      className: "form-control",
      type: "text",
      placeholder: "Search something...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), __jsx("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("i", {
      className: "icon-magnifier",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HeaderMobile);

/***/ }),

/***/ "./components/shared/headers/modules/AccountQuickLinks.jsx":
/*!*****************************************************************!*\
  !*** ./components/shared/headers/modules/AccountQuickLinks.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_auth_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../store/auth/action */ "./store/auth/action.js");
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\headers\\modules\\AccountQuickLinks.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class AccountQuickLinks extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleLogout", e => {
      e.preventDefault();
      this.props.dispatch(Object(_store_auth_action__WEBPACK_IMPORTED_MODULE_3__["logOut"])());
    });
  }

  render() {
    const accountLinks = [{
      text: 'Account Information',
      url: '/account/user-information'
    }, {
      text: 'Notifications',
      url: '/account/notifications'
    }, {
      text: 'Invoices',
      url: '/account/invoices'
    }, {
      text: 'Address',
      url: '/account/addresses'
    }, {
      text: 'Recent Viewed Product',
      url: '/account/recent-viewed-product'
    }, {
      text: 'Wishlist',
      url: '/account/wishlist'
    }];
    const {
      isLoggedIn
    } = this.props;

    if (isLoggedIn === true) {
      return __jsx("div", {
        className: "ps-block--user-account",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("i", {
        className: "icon-user",
        style: {
          color: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), __jsx("div", {
        className: "ps-block__content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("ul", {
        className: "ps-list--arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, accountLinks.map(link => __jsx("li", {
        key: link.text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: link.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, link.text)))), __jsx("li", {
        className: "ps-block__footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("a", {
        // style={{color: 'white'}}
        href: "#",
        onClick: this.handleLogout.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Logout")))));
    } else {
      return __jsx("div", {
        className: "ps-block--user-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("div", {
        className: "ps-block__left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("i", {
        className: "icon-user",
        style: {
          color: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), __jsx("div", {
        className: "ps-block__right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/account/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("a", {
        style: {
          color: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Login")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/account/register",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("a", {
        style: {
          color: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Register"))));
    }
  }

}

const mapStateToProps = state => {
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(AccountQuickLinks));

/***/ }),

/***/ "./components/shared/headers/modules/AccountQuickLinksMobile.jsx":
/*!***********************************************************************!*\
  !*** ./components/shared/headers/modules/AccountQuickLinksMobile.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_auth_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../store/auth/action */ "./store/auth/action.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\headers\\modules\\AccountQuickLinksMobile.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class AccountQuickLinks extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleLogout", e => {
      e.preventDefault();
      this.props.dispatch(Object(_store_auth_action__WEBPACK_IMPORTED_MODULE_3__["logOut"])());
    });
  }

  render() {
    const accountLinks = [{
      text: 'Account Information',
      url: '/account/user-information'
    }, {
      text: 'Notifications',
      url: '/account/notifications'
    }, {
      text: 'Invoices',
      url: '/account/invoices'
    }, {
      text: 'Address',
      url: '/account/addresses'
    }, {
      text: 'Recent Viewed Product',
      url: '/account/recent-viewed-product'
    }, {
      text: 'Wishlist',
      url: '/account/wishlist'
    }];

    const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, accountLinks.map(link => __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
      key: link.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: link.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, link.text)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      onClick: this.handleLogout.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Logout")));

    return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
      overlay: menu,
      placement: "bottomLeft",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "header__extra ps-user--mobile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("i", {
      className: "icon-user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })));
  }

}

const mapStateToProps = state => {
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(AccountQuickLinks));

/***/ }),

/***/ "./components/shared/headers/modules/CurrencyDropdown.jsx":
/*!****************************************************************!*\
  !*** ./components/shared/headers/modules/CurrencyDropdown.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_setting_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../store/setting/action */ "./store/setting/action.js");
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\headers\\modules\\CurrencyDropdown.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class CurrencyDropdown extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChangeCurrency", (e, currency) => {
      e.preventDefault();
      this.props.dispatch(Object(_store_setting_action__WEBPACK_IMPORTED_MODULE_3__["changeCurrency"])(currency));
    });
  }

  handleFeatureWillUpdate(e) {
    e.preventDefault();
    antd__WEBPACK_IMPORTED_MODULE_1__["notification"].open({
      message: 'Opp! Something went wrong.',
      description: 'This feature has been updated later!',
      duration: 500
    });
  }

  render() {
    const {
      currency
    } = this.props;
    return __jsx("div", {
      className: "ps-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, currency ? __jsx("a", {
      href: "/",
      onClick: e => e.preventDefault(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, currency.text) : '', __jsx("ul", {
      className: "ps-dropdown-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("a", {
      href: "/",
      onClick: e => this.handleChangeCurrency(e, {
        symbol: '$',
        text: 'USD'
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "USD")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("a", {
      href: "/",
      onClick: e => this.handleChangeCurrency(e, {
        symbol: '€',
        text: 'EURO'
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "EURO")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("a", {
      href: "/",
      onClick: e => this.handleChangeCurrency(e, {
        symbol: '£',
        text: 'GBP'
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "GBP"))));
  }

}

const mapStateToProps = state => {
  return state.setting;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(CurrencyDropdown));

/***/ }),

/***/ "./components/shared/headers/modules/HeaderActions.jsx":
/*!*************************************************************!*\
  !*** ./components/shared/headers/modules/HeaderActions.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MiniCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MiniCart */ "./components/shared/headers/modules/MiniCart.jsx");
/* harmony import */ var _AccountQuickLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AccountQuickLinks */ "./components/shared/headers/modules/AccountQuickLinks.jsx");
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\headers\\modules\\HeaderActions.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class HeaderActions extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      compare,
      wishlist,
      auth
    } = this.props;
    return __jsx("div", {
      className: "header__actions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx(_MiniCart__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), auth.isLoggedIn && Boolean(auth.isLoggedIn) === true ? __jsx(_AccountQuickLinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isLoggedIn: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }) : __jsx(_AccountQuickLinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isLoggedIn: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }));
  }

}

const mapStateToProps = state => {
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(HeaderActions));

/***/ }),

/***/ "./components/shared/headers/modules/LanguageSwicher.jsx":
/*!***************************************************************!*\
  !*** ./components/shared/headers/modules/LanguageSwicher.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\headers\\modules\\LanguageSwicher.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class LanguageSwicher extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  handleFeatureWillUpdate(e) {
    e.preventDefault();
    antd__WEBPACK_IMPORTED_MODULE_1__["notification"].open({
      message: 'Opp! Something went wrong.',
      description: 'This feature has been updated later!',
      duration: 500
    });
  }

  render() {
    return __jsx("div", {
      className: "ps-dropdown language",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      onClick: this.handleFeatureWillUpdate.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("img", {
      src: "/static/img/flag/en.png",
      alt: "martfury",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), "English"), __jsx("ul", {
      className: "ps-dropdown-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      onClick: this.handleFeatureWillUpdate.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("img", {
      src: "/static/img/flag/germany.png",
      alt: "martfury",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), "Germany")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      onClick: this.handleFeatureWillUpdate.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("img", {
      src: "/static/img/flag/fr.png",
      alt: "martfury",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), "France"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LanguageSwicher);

/***/ }),

/***/ "./components/shared/headers/modules/MenuCategories.jsx":
/*!**************************************************************!*\
  !*** ./components/shared/headers/modules/MenuCategories.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_static_data_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../public/static/data/menu */ "./public/static/data/menu.json");
var _public_static_data_menu__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../public/static/data/menu */ "./public/static/data/menu.json", 1);
/* harmony import */ var _elements_menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../elements/menu/Menu */ "./components/elements/menu/Menu.jsx");
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\headers\\modules\\MenuCategories.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const MenuCategories = () => __jsx(_elements_menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
  data: _public_static_data_menu__WEBPACK_IMPORTED_MODULE_1__.product_categories,
  className: "menu--dropdown",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (MenuCategories);

/***/ }),

/***/ "./components/shared/headers/modules/MiniCart.jsx":
/*!********************************************************!*\
  !*** ./components/shared/headers/modules/MiniCart.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_cart_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../store/cart/action */ "./store/cart/action.js");
/* harmony import */ var _utilities_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utilities/app-settings */ "./utilities/app-settings.js");
/* harmony import */ var _repositories_Repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../repositories/Repository */ "./repositories/Repository.js");
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\headers\\modules\\MiniCart.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class MiniCart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleRemoveCartItem", product => {
      this.props.dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_3__["removeItem"])(product));
    });
  }

  componentDidMount() {
    this.props.dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_3__["getCart"])());
  }

  render() {
    const {
      amount,
      cartTotal,
      cartItems
    } = this.props;
    return __jsx("div", {
      className: "ps-cart--mini",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("a", {
      className: "header__extra",
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("i", {
      className: "icon-bag2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, cartTotal ? cartTotal : 0))), cartItems && cartItems.length > 0 ? __jsx("div", {
      className: "ps-cart__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      className: "ps-cart__items",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, cartItems && cartItems.length > 0 ? cartItems.map(product => __jsx("div", {
      className: "ps-product--cart-mobile",
      key: product.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("div", {
      className: "ps-product__thumbnail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("img", {
      src: _utilities_app_settings__WEBPACK_IMPORTED_MODULE_4__["isStaticData"] === false ? `${_repositories_Repository__WEBPACK_IMPORTED_MODULE_5__["baseUrl"]}${product.thumbnail.url}` : product.thumbnail.url,
      alt: "martfury",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })))), __jsx("div", {
      className: "ps-product__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("a", {
      className: "ps-product__remove",
      onClick: this.handleRemoveCartItem.bind(this, product),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("i", {
      className: "icon-cross",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("a", {
      className: "ps-product__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, product.title)), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Sold by:"), ' ', product.vendor), __jsx("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, product.quantity, " x $", product.price)))) : ''), __jsx("div", {
      className: "ps-cart__footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Sub Total:", __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "$", amount ? amount : 0)), __jsx("figure", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/account/shopping-cart",
      as: "/cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("a", {
      className: "ps-btn",
      style: {
        color: 'white'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "View Cart")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/account/checkout",
      as: "/checkout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("a", {
      className: "ps-btn",
      style: {
        color: 'white'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Checkout"))))) : __jsx("div", {
      className: "ps-cart__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("div", {
      className: "ps-cart__items",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "No products in cart"))));
  }

}

const mapStateToProps = state => {
  return state.cart;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(MiniCart));

/***/ }),

/***/ "./components/shared/headers/modules/MobileHeaderActions.jsx":
/*!*******************************************************************!*\
  !*** ./components/shared/headers/modules/MobileHeaderActions.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AccountQuickLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountQuickLinks */ "./components/shared/headers/modules/AccountQuickLinks.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AccountQuickLinksMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AccountQuickLinksMobile */ "./components/shared/headers/modules/AccountQuickLinksMobile.jsx");
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\headers\\modules\\MobileHeaderActions.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/*import { Drawer } from 'antd';
import PanelCartMobile from '../../panel/PanelCartMobile';*/

class MobileHeaderActions extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleDrawerClose", () => {
      this.setState({
        menuDrawer: false,
        cartDrawer: false,
        searchDrawer: false,
        categoriesDrawer: false
      });
    });

    this.state = {
      menuDrawer: false,
      cartDrawer: false,
      searchDrawer: false,
      categoriesDrawer: false
    };
  }

  render() {
    const {
      auth
    } = this.props;
    const {
      cartTotal
    } = this.props.cart;
    return __jsx("div", {
      className: "navigation__right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/account/shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("a", {
      className: "header__extra",
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("i", {
      className: "icon-bag2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, cartTotal ? cartTotal : 0)))), auth.isLoggedIn && Boolean(auth.isLoggedIn) === true ? __jsx(_AccountQuickLinksMobile__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }) : __jsx("div", {
      className: "header__extra",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/account/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("i", {
      className: "icon-user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }))));
  }

}

const mapStateToProps = state => {
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(MobileHeaderActions));

/***/ }),

/***/ "./components/shared/headers/modules/SearchHeader.jsx":
/*!************************************************************!*\
  !*** ./components/shared/headers/modules/SearchHeader.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elements_products_ProductSearchResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../elements/products/ProductSearchResult */ "./components/elements/products/ProductSearchResult.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_product_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store/product/action */ "./store/product/action.js");
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\headers\\modules\\SearchHeader.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class SearchHeader extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "searchByProductName", (keyword, object) => {
      let matches = [];
      let regexp = new RegExp(keyword.toLowerCase(), 'g');
      object.forEach(product => {
        if (product.title.toLowerCase().match(regexp)) matches.push(product);
      });
      return matches;
    });

    this.state = {
      searchPanel: false,
      keyword: ''
    };
  }

  handleSearch(e) {
    if (e.target.value !== '') {
      const keyword = e.target.value;
      this.props.dispatch(Object(_store_product_action__WEBPACK_IMPORTED_MODULE_6__["getProductsByKeyword"])(keyword));
      this.setState({
        searchPanel: true,
        keyword: e.target.value
      });
    } else {
      this.setState({
        searchPanel: false,
        searchProducts: []
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const keyword = this.state.keyword;
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(`/search?keyword=${keyword}`);
  }

  render() {
    const {
      searchPanel
    } = this.state;
    const {
      searchResults
    } = this.props;
    const exampleCategories = ['All', 'Babies & Moms', 'Books & Office', 'Cars & Motocycles', 'Clothing & Apparel', ' Accessories', 'Bags', 'Kid’s Fashion', 'Mens', 'Shoes', 'Sunglasses', 'Womens', 'Computers & Technologies', 'Desktop PC', 'Laptop', 'Smartphones', 'Consumer Electrics', 'Air Conditioners', 'Accessories', 'Type Hanging Cell', 'Audios & Theaters', 'Headphone', 'Home Theater System', 'Speakers', 'Car Electronics', 'Audio & Video', 'Car Security', 'Radar Detector', 'Vehicle GPS', 'Office Electronics', 'Printers', 'Projectors', 'Scanners', 'Store & Business', 'Refrigerators', 'TV Televisions', '4K Ultra HD TVs', 'LED TVs', 'OLED TVs', 'Washing Machines', 'Type Drying Clothes', 'Type Horizontal', 'Type Vertical', 'Garden & Kitchen', 'Cookware', 'Decoration', 'Furniture', 'Garden Tools', 'Home Improvement', 'Powers And Hand Tools', 'Utensil & Gadget', 'Health & Beauty', 'Equipments', 'Hair Care', 'Perfumer', 'Wine Cabinets'];
    return __jsx("form", {
      className: "ps-form--quick-search",
      method: "get",
      action: "/",
      onSubmit: this.handleSubmit.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx("div", {
      className: "ps-form__categories",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx("select", {
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, exampleCategories.map(option => __jsx("option", {
      value: option,
      key: option,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, option)))), __jsx("input", {
      className: "form-control",
      type: "text",
      placeholder: "I'm shopping for...",
      onChange: this.handleSearch.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }), __jsx("button", {
      onClick: this.handleSubmit.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, "Search"), __jsx("div", {
      className: `ps-panel--search-result${searchPanel && searchPanel === true ? ' active ' : ''}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, __jsx("div", {
      className: "ps-panel__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, searchResults && searchResults.length > 0 ? searchResults.map(product => __jsx(_elements_products_ProductSearchResult__WEBPACK_IMPORTED_MODULE_4__["default"], {
      product: product,
      key: product.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    })) : __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, "Not found! Try with another keyword.")), __jsx("div", {
      className: "ps-panel__footer text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, "See all results")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(state => state.product)(SearchHeader));

/***/ }),

/***/ "./components/shared/navigation/NavigationDefault.jsx":
/*!************************************************************!*\
  !*** ./components/shared/navigation/NavigationDefault.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elements_menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/menu/Menu */ "./components/elements/menu/Menu.jsx");
/* harmony import */ var _public_static_data_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/static/data/menu */ "./public/static/data/menu.json");
var _public_static_data_menu__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/data/menu */ "./public/static/data/menu.json", 1);
/* harmony import */ var _headers_modules_CurrencyDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../headers/modules/CurrencyDropdown */ "./components/shared/headers/modules/CurrencyDropdown.jsx");
/* harmony import */ var _headers_modules_LanguageSwicher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../headers/modules/LanguageSwicher */ "./components/shared/headers/modules/LanguageSwicher.jsx");
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\navigation\\NavigationDefault.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class NavigationDefault extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  handleFeatureWillUpdate(e) {
    e.preventDefault();
    antd__WEBPACK_IMPORTED_MODULE_2__["notification"].open({
      message: 'Opp! Something went wrong.',
      description: 'This feature has been updated later!',
      duration: 500
    });
  }

  render() {
    return __jsx("nav", {
      className: "navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
      className: "ps-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("div", {
      className: "navigation__left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("div", {
      className: "menu--product-categories",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("div", {
      className: "menu__toggle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("i", {
      className: "icon-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, " Shop by Category")), __jsx("div", {
      className: "menu__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(_elements_menu_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: _public_static_data_menu__WEBPACK_IMPORTED_MODULE_4__.product_categories,
      className: "menu--dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    })))), __jsx("div", {
      className: "navigation__right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(_elements_menu_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: _public_static_data_menu__WEBPACK_IMPORTED_MODULE_4__.menuPrimary.menu_1,
      className: "menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavigationDefault);

/***/ }),

/***/ "./components/shared/navigation/NavigationList.jsx":
/*!*********************************************************!*\
  !*** ./components/shared/navigation/NavigationList.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _panel_PanelMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../panel/PanelMenu */ "./components/shared/panel/PanelMenu.jsx");
/* harmony import */ var _panel_PanelCartMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../panel/PanelCartMobile */ "./components/shared/panel/PanelCartMobile.jsx");
/* harmony import */ var _panel_PanelSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../panel/PanelSearch */ "./components/shared/panel/PanelSearch.jsx");
/* harmony import */ var _panel_PanelCategories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../panel/PanelCategories */ "./components/shared/panel/PanelCategories.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utilities_app_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utilities/app-settings */ "./utilities/app-settings.js");
/* harmony import */ var _repositories_Repository__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../repositories/Repository */ "./repositories/Repository.js");
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\navigation\\NavigationList.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class NavigationList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleDrawerClose", () => {
      this.setState({
        menuDrawer: false,
        cartDrawer: false,
        searchDrawer: false,
        categoriesDrawer: false
      });
    });

    _defineProperty(this, "handleShowMenuDrawer", () => {
      this.setState({
        menuDrawer: !this.state.menuDrawer,
        cartDrawer: false,
        searchDrawer: false,
        categoriesDrawer: false
      });
    });

    _defineProperty(this, "handleShowCartDrawer", () => {
      this.setState({
        menuDrawer: false,
        cartDrawer: !this.state.cartDrawer,
        searchDrawer: false,
        categoriesDrawer: false
      });
    });

    _defineProperty(this, "handleShowSearchDrawer", () => {
      this.setState({
        menuDrawer: false,
        cartDrawer: false,
        searchDrawer: !this.state.searchDrawer,
        categoriesDrawer: false
      });
    });

    _defineProperty(this, "handleShowCategoriesDrawer", () => {
      this.setState({
        menuDrawer: false,
        cartDrawer: false,
        searchDrawer: false,
        categoriesDrawer: !this.state.categoriesDrawer
      });
    });

    this.state = {
      menuDrawer: false,
      cartDrawer: false,
      searchDrawer: false,
      categoriesDrawer: false
    };
  }

  render() {
    const {
      menuDrawer,
      searchDrawer,
      cartDrawer,
      categoriesDrawer
    } = this.state;
    return __jsx("div", {
      className: "navigation--list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
      className: "ps-panel--mobile",
      placement: "right",
      closable: false,
      onClose: this.handleDrawerClose,
      visible: this.state.menuDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("div", {
      className: "ps-panel--wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("div", {
      className: "ps-panel__header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "Menu"), __jsx("span", {
      className: "ps-panel__close",
      onClick: this.handleDrawerClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx("i", {
      className: "icon-cross",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }))), __jsx("div", {
      className: "ps-panel__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx(_panel_PanelMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
      className: "ps-panel--mobile",
      placement: "right",
      closable: false,
      onClose: this.handleDrawerClose,
      visible: this.state.cartDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("div", {
      className: "ps-panel--wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("div", {
      className: "ps-panel__header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "Shopping Cart"), __jsx("span", {
      className: "ps-panel__close",
      onClick: this.handleDrawerClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("i", {
      className: "icon-cross",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }))), __jsx("div", {
      className: "ps-panel__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx(_panel_PanelCartMobile__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
      className: "ps-panel--mobile",
      placement: "right",
      closable: false,
      onClose: this.handleDrawerClose,
      visible: this.state.searchDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx("div", {
      className: "ps-panel--wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("div", {
      className: "ps-panel__header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "Search"), __jsx("span", {
      className: "ps-panel__close",
      onClick: this.handleDrawerClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx("i", {
      className: "icon-cross",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }))), __jsx("div", {
      className: "ps-panel__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, __jsx(_panel_PanelSearch__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
      className: "ps-panel--mobile",
      placement: "right",
      closable: false,
      onClose: this.handleDrawerClose,
      visible: this.state.categoriesDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx("div", {
      className: "ps-panel--wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("div", {
      className: "ps-panel__header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, "Categories"), __jsx("span", {
      className: "ps-panel__close",
      onClick: this.handleDrawerClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, __jsx("i", {
      className: "icon-cross",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }))), __jsx("div", {
      className: "ps-panel__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, __jsx(_panel_PanelCategories__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    })))), __jsx("div", {
      className: "navigation__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, __jsx("a", {
      className: `navigation__item ${menuDrawer === true ? 'active' : ''}`,
      onClick: this.handleShowMenuDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx("i", {
      className: "icon-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, " Menu")), __jsx("a", {
      className: `navigation__item ${categoriesDrawer === true ? 'active' : ''}`,
      onClick: this.handleShowCategoriesDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, __jsx("i", {
      className: "icon-list4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, " Categories")), __jsx("a", {
      className: `navigation__item ${searchDrawer === true ? 'active' : ''}`,
      onClick: this.handleShowSearchDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, __jsx("i", {
      className: "icon-magnifier",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, " Search")), __jsx("a", {
      className: `navigation__item ${cartDrawer === true ? 'active' : ''}`,
      onClick: this.handleShowCartDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, __jsx("i", {
      className: "icon-bag2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, " Cart"))));
  }

}

const mapStateToProps = state => {
  return state.setting;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(NavigationList));

/***/ }),

/***/ "./components/shared/panel/PanelCartMobile.jsx":
/*!*****************************************************!*\
  !*** ./components/shared/panel/PanelCartMobile.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_cart_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/cart/action */ "./store/cart/action.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utilities_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utilities/app-settings */ "./utilities/app-settings.js");
/* harmony import */ var _repositories_Repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../repositories/Repository */ "./repositories/Repository.js");
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\panel\\PanelCartMobile.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class PanelCartMobile extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleRemoveCartItem", product => {
      this.props.dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_2__["removeItem"])(product));
    });
  }

  componentDidMount() {
    this.props.dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_2__["getCart"])());
  }

  render() {
    const {
      amount,
      cartItems
    } = this.props;
    return __jsx("div", {
      className: "ps-cart--mobile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: "ps-cart__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, cartItems && cartItems.length > 0 ? cartItems.map(product => __jsx("div", {
      className: "ps-product--cart-mobile",
      key: product.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("div", {
      className: "ps-product__thumbnail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("img", {
      src: _utilities_app_settings__WEBPACK_IMPORTED_MODULE_4__["isStaticData"] === true ? product.thumbnail.url : `${_repositories_Repository__WEBPACK_IMPORTED_MODULE_5__["baseUrl"]}${product.thumbnail.url}`,
      alt: "martfury",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })))), __jsx("div", {
      className: "ps-product__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("a", {
      className: "ps-product__remove",
      onClick: this.handleRemoveCartItem.bind(this, product),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("i", {
      className: "icon-cross",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("a", {
      className: "ps-product__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, product.title)), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Sold by:"), ' ', product.vendor), __jsx("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, product.quantity, " x $", product.price)))) : __jsx("div", {
      className: "ps-cart__items",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "No products in cart"))), cartItems && cartItems.length > 0 ? __jsx("div", {
      className: "ps-cart__footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Sub Total:", __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "$", amount)), __jsx("figure", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/account/shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx("a", {
      className: "ps-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "View Cart")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/account/checkout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("a", {
      className: "ps-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Checkout")))) : __jsx("div", {
      className: "ps-cart__footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/shop",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("a", {
      className: "ps-btn ps-btn--fullwidth",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Shop now"))));
  }

}

const mapStateToProps = state => {
  return state.cart;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(PanelCartMobile));

/***/ }),

/***/ "./components/shared/panel/PanelCategories.jsx":
/*!*****************************************************!*\
  !*** ./components/shared/panel/PanelCategories.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_static_data_static_categories_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/static/data/static-categories.json */ "./public/static/data/static-categories.json");
var _public_static_data_static_categories_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/data/static-categories.json */ "./public/static/data/static-categories.json", 1);
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\panel\\PanelCategories.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];

class PanelCategories extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "rootSubmenuKeys", ['sub1', 'sub2', 'sub4']);

    _defineProperty(this, "state", {
      openKeys: ['sub1']
    });

    _defineProperty(this, "onOpenChange", openKeys => {
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);

      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({
          openKeys
        });
      } else {
        this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : []
        });
      }
    });
  }

  render() {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      mode: "inline",
      openKeys: this.state.openKeys,
      onOpenChange: this.onOpenChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, _public_static_data_static_categories_json__WEBPACK_IMPORTED_MODULE_3__.map(category => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: category.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("a", {
      href: `/shop?category=${category.slug}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, category.name))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PanelCategories);

/***/ }),

/***/ "./components/shared/panel/PanelMenu.jsx":
/*!***********************************************!*\
  !*** ./components/shared/panel/PanelMenu.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_static_data_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/static/data/menu */ "./public/static/data/menu.json");
var _public_static_data_menu__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/data/menu */ "./public/static/data/menu.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\panel\\PanelMenu.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const {
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"];

class PanelMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "rootSubmenuKeys", ['sub1', 'sub2', 'sub4']);

    _defineProperty(this, "state", {
      openKeys: []
    });

    _defineProperty(this, "onOpenChange", openKeys => {
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);

      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({
          openKeys
        });
      } else {
        this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : []
        });
      }
    });
  }

  render() {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
      mode: "inline",
      openKeys: this.state.openKeys,
      onOpenChange: this.onOpenChange,
      className: "menu--mobile-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, _public_static_data_menu__WEBPACK_IMPORTED_MODULE_3__["menuPrimary"].menu_1.map(item => {
      if (item.subMenu) {
        return __jsx(SubMenu, {
          key: item.text,
          title: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: item.url,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }, __jsx("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, item.text)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, item.subMenu.map(subItem => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
          key: subItem.text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: subItem.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, __jsx("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, subItem.text)))));
      } else if (item.megaContent) {
        return __jsx(SubMenu, {
          key: item.text,
          title: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: item.url,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }, __jsx("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }, item.text)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, item.megaContent.map(megaItem => __jsx(SubMenu, {
          key: megaItem.heading,
          title: __jsx("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }, megaItem.heading),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, megaItem.megaItems.map(megaSubItem => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
          key: megaSubItem.text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: item.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, __jsx("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, megaSubItem.text)))))));
      } else {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
          key: item.text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, item.type === 'dynamic' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: `${item.url}/[pid]`,
          as: `${item.url}/${item.endPoint}`,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "l", __jsx("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, item.text)) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: item.url,
          as: item.alias,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, __jsx("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, item.text)));
      }
    }));
  }

}

const mapStateToProps = state => {
  return state.setting;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(PanelMenu));

/***/ }),

/***/ "./components/shared/panel/PanelSearch.jsx":
/*!*************************************************!*\
  !*** ./components/shared/panel/PanelSearch.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_product_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/product/action */ "./store/product/action.js");
/* harmony import */ var _elements_products_ProductSearchResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/products/ProductSearchResult */ "./components/elements/products/ProductSearchResult.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\components\\shared\\panel\\PanelSearch.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class PanelSearch extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "searchByProductName", (keyword, object) => {
      let matches = [];
      let regexp = new RegExp(keyword.toLowerCase(), 'g');
      object.forEach(product => {
        if (product.title.toLowerCase().match(regexp)) matches.push(product);
      });
      return matches;
    });

    this.state = {
      searchPanel: false,
      searchProducts: [],
      keyword: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const keyword = this.state.keyword;
    Router.push(`/search?keyword=${keyword}`);
  }

  handleSearch(e) {
    if (e.target.value !== '') {
      const keyword = e.target.value;
      this.props.dispatch(Object(_store_product_action__WEBPACK_IMPORTED_MODULE_1__["getProductsByKeyword"])(keyword));
      this.setState({
        searchPanel: true,
        keyword: e.target.value
      });
    } else {
      this.setState({
        searchPanel: false,
        searchProducts: []
      });
    }
  }

  render() {
    const {
      searchProducts
    } = this.state;
    const {
      searchResults
    } = this.props;
    return __jsx("div", {
      className: "ps-panel__search-results",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("form", {
      className: "ps-form--search-mobile",
      action: "/",
      method: "get",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("div", {
      className: "form-group--nest",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("input", {
      className: "form-control",
      type: "text",
      placeholder: "Search something...",
      onChange: this.handleSearch.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), __jsx("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("i", {
      className: "icon-magnifier",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })))), searchResults && searchResults.map(product => __jsx(_elements_products_ProductSearchResult__WEBPACK_IMPORTED_MODULE_2__["default"], {
      product: product,
      key: product.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(state => state.product)(PanelSearch));

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/account/checkout.jsx":
/*!************************************!*\
  !*** ./pages/account/checkout.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_partials_commons_Newletters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/partials/commons/Newletters */ "./components/partials/commons/Newletters.jsx");
/* harmony import */ var _components_shared_footers_FooterDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/footers/FooterDefault */ "./components/shared/footers/FooterDefault.jsx");
/* harmony import */ var _components_shared_headers_HeaderDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shared/headers/HeaderDefault */ "./components/shared/headers/HeaderDefault.jsx");
/* harmony import */ var _components_elements_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/elements/BreadCrumb */ "./components/elements/BreadCrumb.jsx");
/* harmony import */ var _components_partials_account_Checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/partials/account/Checkout */ "./components/partials/account/Checkout.jsx");
/* harmony import */ var _components_shared_headers_HeaderMobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/shared/headers/HeaderMobile */ "./components/shared/headers/HeaderMobile.jsx");
/* harmony import */ var _components_shared_navigation_NavigationList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/shared/navigation/NavigationList */ "./components/shared/navigation/NavigationList.jsx");
var _jsxFileName = "G:\\the-hexaa\\ReactJS\\martfury_react_package_1_3\\martfury-react-1_3\\pages\\account\\checkout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const OrderTrackingPage = () => {
  const breadCrumb = [{
    text: 'Home',
    url: '/'
  }, {
    text: 'Shopping Cart',
    url: '/account/shopping-cart'
  }, {
    text: 'Checkout Information'
  }];
  return __jsx("div", {
    className: "site-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(_components_shared_headers_HeaderDefault__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(_components_shared_headers_HeaderMobile__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx(_components_shared_navigation_NavigationList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("div", {
    className: "ps-page--simple",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(_components_elements_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__["default"], {
    breacrumb: breadCrumb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx(_components_partials_account_Checkout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })), __jsx(_components_partials_commons_Newletters__WEBPACK_IMPORTED_MODULE_1__["default"], {
    layout: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx(_components_shared_footers_FooterDefault__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderTrackingPage);

/***/ }),

/***/ "./public/static/data/menu.json":
/*!**************************************!*\
  !*** ./public/static/data/menu.json ***!
  \**************************************/
/*! exports provided: menuPrimary, product_categories, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"menuPrimary\":{\"menu_1\":[{\"text\":\"HOME\",\"url\":\"/\",\"extraClass\":\"menu-item-has-children\",\"subClass\":\"sub-menu\"},{\"text\":\"HOBBIYST\",\"url\":\"\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"mega\":\"true\"},{\"text\":\"PROFESSIONALS \",\"url\":\"/blog\",\"current\":\"shop\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"mega\":\"true\"},{\"text\":\"YARD SALE\",\"url\":\"\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"mega\":\"true\"},{\"text\":\"SHOP \",\"url\":\"/blog\",\"current\":\"shop\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"subMenu\":[{\"text\":\"NEW ARRIVALS\",\"url\":\"/\"}]},{\"text\":\"COMMUNITY\",\"url\":\"/\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"mega\":\"true\"}]},\"product_categories\":[{\"icon\":\"icon-star\",\"text\":\"Hot Promotions\",\"url\":\"/shop\"},{\"icon\":\"icon-laundry\",\"text\":\"Consumer Electronic\",\"url\":\"/shop\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"mega\":true,\"megaContent\":[{\"heading\":\"Electronic\",\"megaItems\":[{\"text\":\"Home Audio & Theathers\",\"url\":\"/shop\"},{\"text\":\"TV & Videos\",\"url\":\"/shop\"},{\"text\":\"Camera, Photos & Videos\",\"url\":\"/shop\"},{\"text\":\"Cellphones & Accessories\",\"url\":\"/shop\"},{\"text\":\"Headphones\",\"url\":\"/shop\"},{\"text\":\"Videosgames\",\"url\":\"/shop\"},{\"text\":\"Wireless Speakers\",\"url\":\"/shop\"},{\"text\":\"Office Electronic\",\"url\":\"/shop\"}]},{\"heading\":\"Accessories & Parts\",\"megaItems\":[{\"text\":\"Digital Cables\",\"url\":\"/shop\"},{\"text\":\"Audio & Video Cables\",\"url\":\"/shop\"},{\"text\":\"Batteries\",\"url\":\"/shop\"}]}]},{\"icon\":\"icon-shirt\",\"text\":\"Clothing & Apparel\",\"url\":\"/shop\"},{\"icon\":\"icon-lampshade\",\"text\":\"Home, Garden & Kitchen\",\"url\":\"/shop\"},{\"icon\":\"icon-heart-pulse\",\"text\":\"Health & Beauty\",\"url\":\"/shop\"},{\"icon\":\"icon-diamond2\",\"text\":\"Yewelry & Watches\",\"url\":\"/shop\"},{\"icon\":\"icon-desktop\",\"text\":\"Computer & Technology\",\"url\":\"/shop\",\"extraClass\":\"menu-item-has-children has-mega-menu\",\"subClass\":\"sub-menu\",\"megaContent\":[{\"heading\":\"Computer & Technologies\",\"megaItems\":[{\"text\":\"Computer & Tablets\",\"url\":\"/shop\"},{\"text\":\"Laptop\",\"url\":\"/shop\"},{\"text\":\"Monitors\",\"url\":\"/shop\"},{\"text\":\"Networking\",\"url\":\"/shop\"},{\"text\":\"Drive & Storages\",\"url\":\"/shop\"},{\"text\":\"Computer Components\",\"url\":\"/shop\"},{\"text\":\"Security & Protection\",\"url\":\"/shop\"},{\"text\":\"Gaming Laptop\",\"url\":\"/shop\"},{\"text\":\"Accessories\",\"url\":\"/shop\"}]}]},{\"icon\":\"icon-baby-bottle\",\"text\":\"Babies & Moms\",\"url\":\"/shop\"},{\"icon\":\"icon-baseball\",\"text\":\"Sport & Outdoor\",\"url\":\"/shop\"},{\"icon\":\"icon-smartphone\",\"text\":\"Phones & Accessories\",\"url\":\"/shop\"},{\"icon\":\"icon-book2\",\"text\":\"Books & Office\",\"url\":\"/shop\"},{\"icon\":\"icon-car-siren\",\"text\":\"Cars & Motocycles\",\"url\":\"/shop\"},{\"icon\":\"icon-wrench\",\"text\":\"Home Improments\",\"url\":\"/shop\"},{\"icon\":\"icon-tag\",\"text\":\"Vouchers & Services\",\"url\":\"/shop\"}]}");

/***/ }),

/***/ "./public/static/data/static-categories.json":
/*!***************************************************!*\
  !*** ./public/static/data/static-categories.json ***!
  \***************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"name\":\"Clothing & Apparel\",\"slug\":\"clothing-and-parel\",\"description\":null,\"created_at\":\"2020-03-14T10:24:42.894Z\",\"updated_at\":\"2020-04-17T08:41:15.412Z\",\"products\":[{\"id\":4,\"title\":\"Herschel Leather Duffle Bag In Brown Color\",\"is_featured\":false,\"is_hot\":false,\"price\":125.3,\"sale_price\":null,\"vendor\":\"Go Pro\",\"review\":4,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T05:58:54.229Z\",\"updated_at\":\"2020-03-15T05:58:54.229Z\",\"variants\":[],\"images\":[{\"id\":14,\"name\":\"4a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ff63a2eb476e45b1bfef05ee79115018\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":74.96,\"url\":\"/uploads/ff63a2eb476e45b1bfef05ee79115018.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:58:54.276Z\",\"updated_at\":\"2020-03-15T05:58:54.276Z\"},{\"id\":15,\"name\":\"4b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9b7e71c6299c456baceb165ec185687d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":76.68,\"url\":\"/uploads/9b7e71c6299c456baceb165ec185687d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:58:54.287Z\",\"updated_at\":\"2020-03-15T05:58:54.287Z\"},{\"id\":16,\"name\":\"4c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"11591497e4ac4779981252032c8b0381\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":92.28,\"url\":\"/uploads/11591497e4ac4779981252032c8b0381.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:58:54.300Z\",\"updated_at\":\"2020-03-15T05:58:54.300Z\"},{\"id\":17,\"name\":\"4d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"bbc7b7c8745140e19653bc109965f9f4\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":26.43,\"url\":\"/uploads/bbc7b7c8745140e19653bc109965f9f4.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:58:54.311Z\",\"updated_at\":\"2020-03-15T05:58:54.311Z\"}],\"thumbnail\":{\"id\":13,\"name\":\"4a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b5deb586612e4c808272da9913b8109b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":74.96,\"url\":\"/uploads/b5deb586612e4c808272da9913b8109b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:58:54.262Z\",\"updated_at\":\"2020-03-15T05:58:54.262Z\"}},{\"id\":9,\"title\":\"Unero Military Classical Backpack\",\"is_featured\":false,\"is_hot\":false,\"price\":42.2,\"sale_price\":35.89,\"vendor\":\"Young shop\",\"review\":3,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:18:20.414Z\",\"updated_at\":\"2020-03-15T06:18:20.414Z\",\"variants\":[],\"images\":[{\"id\":37,\"name\":\"9a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"13fc9fc391d64652a0139f54cdac5c2b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":43.02,\"url\":\"/uploads/13fc9fc391d64652a0139f54cdac5c2b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:18:20.533Z\",\"updated_at\":\"2020-03-15T06:18:20.533Z\"},{\"id\":38,\"name\":\"9b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3d3ef24143bc473eb75a5721228e1f6d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":50.61,\"url\":\"/uploads/3d3ef24143bc473eb75a5721228e1f6d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:18:20.573Z\",\"updated_at\":\"2020-03-15T06:18:20.573Z\"},{\"id\":39,\"name\":\"9c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"7420bed7be764af19c26f762296ff27d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":44.06,\"url\":\"/uploads/7420bed7be764af19c26f762296ff27d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:18:20.596Z\",\"updated_at\":\"2020-03-15T06:18:20.596Z\"},{\"id\":40,\"name\":\"9d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"10c4fdf0f6124ab79e5ab46dc2c52e38\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":47.73,\"url\":\"/uploads/10c4fdf0f6124ab79e5ab46dc2c52e38.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:18:20.607Z\",\"updated_at\":\"2020-03-15T06:18:20.607Z\"}],\"thumbnail\":{\"id\":36,\"name\":\"8.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1e1f0f78e33d4ce7828d21465e84da7d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.13,\"url\":\"/uploads/1e1f0f78e33d4ce7828d21465e84da7d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:18:20.459Z\",\"updated_at\":\"2020-03-15T06:18:20.459Z\"}},{\"id\":10,\"title\":\"Rayban Rounded Sunglass Brown Color\",\"is_featured\":false,\"is_hot\":false,\"price\":35.89,\"sale_price\":null,\"vendor\":\"Young shop\",\"review\":5,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T06:20:39.867Z\",\"updated_at\":\"2020-03-15T06:20:39.867Z\",\"variants\":[],\"images\":[{\"id\":42,\"name\":\"10a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0208616a8daa44cbb20f12eaebf8de53\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":21.67,\"url\":\"/uploads/0208616a8daa44cbb20f12eaebf8de53.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:20:39.908Z\",\"updated_at\":\"2020-03-15T06:20:39.908Z\"},{\"id\":43,\"name\":\"10b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"cba8c25fcf0d41d1aac41f05d8f7ad8e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":20.16,\"url\":\"/uploads/cba8c25fcf0d41d1aac41f05d8f7ad8e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:20:39.925Z\",\"updated_at\":\"2020-03-15T06:20:39.925Z\"},{\"id\":44,\"name\":\"10c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f8f22b0f8be04b559439dd7e7a4b9631\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.77,\"url\":\"/uploads/f8f22b0f8be04b559439dd7e7a4b9631.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:20:39.935Z\",\"updated_at\":\"2020-03-15T06:20:39.935Z\"}],\"thumbnail\":{\"id\":41,\"name\":\"9.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0f04c128bb2945608bed459cdff45b2d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.7,\"url\":\"/uploads/0f04c128bb2945608bed459cdff45b2d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:20:39.893Z\",\"updated_at\":\"2020-03-15T06:20:39.893Z\"}},{\"id\":11,\"title\":\"Sleeve Linen Blend Caro Pane Shirt\",\"is_featured\":false,\"is_hot\":false,\"price\":29.39,\"sale_price\":null,\"vendor\":\"Go Pro\",\"review\":4,\"is_out_of_stock\":false,\"depot\":65,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T06:22:44.237Z\",\"updated_at\":\"2020-03-15T06:22:44.237Z\",\"variants\":[],\"images\":[{\"id\":46,\"name\":\"11a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ab27be4989234d5abcfb3f4ecc1af045\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":41.05,\"url\":\"/uploads/ab27be4989234d5abcfb3f4ecc1af045.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:22:44.291Z\",\"updated_at\":\"2020-03-15T06:22:44.291Z\"},{\"id\":47,\"name\":\"11b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"fd27bd22be044fc89915d96cc85184a2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":90.14,\"url\":\"/uploads/fd27bd22be044fc89915d96cc85184a2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:22:44.303Z\",\"updated_at\":\"2020-03-15T06:22:44.303Z\"},{\"id\":48,\"name\":\"11c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d9860fd4f75847b08533072d216520a7\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":20.98,\"url\":\"/uploads/d9860fd4f75847b08533072d216520a7.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:22:44.312Z\",\"updated_at\":\"2020-03-15T06:22:44.312Z\"},{\"id\":49,\"name\":\"11d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d25af4f6df2448579caf80399f625ec7\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":15.51,\"url\":\"/uploads/d25af4f6df2448579caf80399f625ec7.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:22:44.321Z\",\"updated_at\":\"2020-03-15T06:22:44.321Z\"}],\"thumbnail\":{\"id\":45,\"name\":\"10.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"77ac135e297b416388e2e10be368a898\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.67,\"url\":\"/uploads/77ac135e297b416388e2e10be368a898.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:22:44.278Z\",\"updated_at\":\"2020-03-15T06:22:44.278Z\"}},{\"id\":12,\"title\":\"Men’s Sports Runnning Swim Board Shorts\",\"is_featured\":false,\"is_hot\":false,\"price\":13.43,\"sale_price\":null,\"vendor\":\"Robert's Store\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T06:24:30.658Z\",\"updated_at\":\"2020-03-18T12:53:44.500Z\",\"variants\":[],\"images\":[{\"id\":51,\"name\":\"12a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"fefc8854e39940d49f828c8035b20f76\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":108.16,\"url\":\"/uploads/fefc8854e39940d49f828c8035b20f76.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:24:30.700Z\",\"updated_at\":\"2020-03-15T06:24:30.700Z\"},{\"id\":52,\"name\":\"12b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"bf24fcb93d8d46e894ddb47dd26dc335\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":38.91,\"url\":\"/uploads/bf24fcb93d8d46e894ddb47dd26dc335.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:24:30.716Z\",\"updated_at\":\"2020-03-15T06:24:30.716Z\"},{\"id\":53,\"name\":\"12c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f578cf9bb1d24f3c8c898e09796ae503\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":38.08,\"url\":\"/uploads/f578cf9bb1d24f3c8c898e09796ae503.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:24:30.725Z\",\"updated_at\":\"2020-03-15T06:24:30.725Z\"}],\"thumbnail\":{\"id\":50,\"name\":\"11.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"283e9ff36993434c9d228a5f7681e330\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":19.09,\"url\":\"/uploads/283e9ff36993434c9d228a5f7681e330.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:24:30.681Z\",\"updated_at\":\"2020-03-15T06:24:30.681Z\"}},{\"id\":13,\"title\":\"Paul’s Smith Sneaker InWhite Color\",\"is_featured\":false,\"is_hot\":false,\"price\":75.44,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T06:32:31.147Z\",\"updated_at\":\"2020-03-18T12:54:00.174Z\",\"variants\":[],\"images\":[{\"id\":55,\"name\":\"13a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"58092188da0c46858b8273fe7cfb16c1\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":33.4,\"url\":\"/uploads/58092188da0c46858b8273fe7cfb16c1.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:32:31.197Z\",\"updated_at\":\"2020-03-15T06:32:31.197Z\"},{\"id\":56,\"name\":\"13b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"db91360ae9ac420c9172c2b797540c3f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10,\"url\":\"/uploads/db91360ae9ac420c9172c2b797540c3f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:32:31.215Z\",\"updated_at\":\"2020-03-15T06:32:31.215Z\"},{\"id\":57,\"name\":\"13c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"fd95618bdbc64b9fa835f03d4c992b63\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":23.2,\"url\":\"/uploads/fd95618bdbc64b9fa835f03d4c992b63.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:32:31.223Z\",\"updated_at\":\"2020-03-15T06:32:31.223Z\"},{\"id\":58,\"name\":\"13d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"974d2403fc62442db39bb155902fd6a0\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.81,\"url\":\"/uploads/974d2403fc62442db39bb155902fd6a0.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:32:31.232Z\",\"updated_at\":\"2020-03-15T06:32:31.232Z\"}],\"thumbnail\":{\"id\":54,\"name\":\"12.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d903b17699d842f4ab1327eff18f04d0\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.9,\"url\":\"/uploads/d903b17699d842f4ab1327eff18f04d0.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:32:31.177Z\",\"updated_at\":\"2020-03-15T06:32:31.177Z\"}}]},{\"id\":2,\"name\":\"Garden & Kitchen\",\"slug\":\"garden-and-kitchen\",\"description\":null,\"created_at\":\"2020-03-14T10:25:21.611Z\",\"updated_at\":\"2020-03-14T10:25:21.611Z\",\"products\":[{\"id\":8,\"title\":\"Korea Long Sofa Fabric In Blue Navy Color\",\"is_featured\":false,\"is_hot\":false,\"price\":670.2,\"sale_price\":567.8,\"vendor\":\"Youngshop\",\"review\":4,\"is_out_of_stock\":false,\"depot\":85,\"inventory\":79,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:15:55.939Z\",\"updated_at\":\"2020-03-15T06:15:55.939Z\",\"variants\":[],\"images\":[{\"id\":32,\"name\":\"8a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"caafb8f05561484a97923b235d2603f7\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":20.75,\"url\":\"/uploads/caafb8f05561484a97923b235d2603f7.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:15:56.021Z\",\"updated_at\":\"2020-03-15T06:15:56.021Z\"},{\"id\":33,\"name\":\"8b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ea26eeafaa1747b5857ee73c93430261\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":26.42,\"url\":\"/uploads/ea26eeafaa1747b5857ee73c93430261.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:15:56.038Z\",\"updated_at\":\"2020-03-15T06:15:56.038Z\"},{\"id\":34,\"name\":\"8c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"97b54a32f4864342bc485c7929de6366\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":19.04,\"url\":\"/uploads/97b54a32f4864342bc485c7929de6366.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:15:56.047Z\",\"updated_at\":\"2020-03-15T06:15:56.047Z\"},{\"id\":35,\"name\":\"8d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"210d685d19f84c8b9e5de231176b4cf2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":155.83,\"url\":\"/uploads/210d685d19f84c8b9e5de231176b4cf2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:15:56.057Z\",\"updated_at\":\"2020-03-15T06:15:56.057Z\"}],\"thumbnail\":{\"id\":31,\"name\":\"7.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"04ec8d58423647c98d6dbd3544c1c355\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":3.63,\"url\":\"/uploads/04ec8d58423647c98d6dbd3544c1c355.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:15:55.999Z\",\"updated_at\":\"2020-03-15T06:15:55.999Z\"}},{\"id\":26,\"title\":\"Simple Plastice Chair In White Color\",\"is_featured\":false,\"is_hot\":false,\"price\":60,\"sale_price\":42,\"vendor\":\"Young Shop\",\"review\":2,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T07:23:26.180Z\",\"updated_at\":\"2020-03-15T07:23:26.180Z\",\"variants\":[],\"images\":[{\"id\":118,\"name\":\"27a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e8c3cd4a32bd4baa9772aa080594d756\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":22.57,\"url\":\"/uploads/e8c3cd4a32bd4baa9772aa080594d756.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:23:26.212Z\",\"updated_at\":\"2020-03-15T07:23:26.212Z\"},{\"id\":119,\"name\":\"27b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4f482d2091c94fe6b2f9216e1652ad11\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":15.18,\"url\":\"/uploads/4f482d2091c94fe6b2f9216e1652ad11.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:23:26.222Z\",\"updated_at\":\"2020-03-15T07:23:26.222Z\"},{\"id\":120,\"name\":\"27c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"fe5b2973ad694105b20eee9917e1491c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":17.18,\"url\":\"/uploads/fe5b2973ad694105b20eee9917e1491c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:23:26.237Z\",\"updated_at\":\"2020-03-15T07:23:26.237Z\"},{\"id\":121,\"name\":\"27d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6b8716a6edc84d0191c9411e84335189\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":46.91,\"url\":\"/uploads/6b8716a6edc84d0191c9411e84335189.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:23:26.251Z\",\"updated_at\":\"2020-03-15T07:23:26.251Z\"}],\"thumbnail\":{\"id\":117,\"name\":\"3.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c9bc200f332d47e48d4cfa68018c415c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.33,\"url\":\"/uploads/c9bc200f332d47e48d4cfa68018c415c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:23:26.200Z\",\"updated_at\":\"2020-03-15T07:23:26.200Z\"}},{\"id\":27,\"title\":\"Korea Fabric Chair In Brown Color\",\"is_featured\":false,\"is_hot\":false,\"price\":320,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":1,\"is_out_of_stock\":true,\"depot\":65,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T07:26:02.264Z\",\"updated_at\":\"2020-03-15T07:26:02.264Z\",\"variants\":[],\"images\":[{\"id\":123,\"name\":\"28a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8d2cd1d8755348b6bbd46c4216599640\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":145.11,\"url\":\"/uploads/8d2cd1d8755348b6bbd46c4216599640.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:26:02.297Z\",\"updated_at\":\"2020-03-15T07:26:02.297Z\"},{\"id\":124,\"name\":\"28b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"925471220e1d47d082cd932b253e6666\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":37.46,\"url\":\"/uploads/925471220e1d47d082cd932b253e6666.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:26:02.305Z\",\"updated_at\":\"2020-03-15T07:26:02.305Z\"},{\"id\":125,\"name\":\"28c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a92af1e9436d4bdea3c0bef7ab6beccb\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":46.35,\"url\":\"/uploads/a92af1e9436d4bdea3c0bef7ab6beccb.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:26:02.316Z\",\"updated_at\":\"2020-03-15T07:26:02.316Z\"},{\"id\":126,\"name\":\"28d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"43ffb2ae9d3a4fd28097c7ba63dd5b22\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":64.39,\"url\":\"/uploads/43ffb2ae9d3a4fd28097c7ba63dd5b22.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:26:02.324Z\",\"updated_at\":\"2020-03-15T07:26:02.324Z\"}],\"thumbnail\":{\"id\":122,\"name\":\"4.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"afd6ccaff3fe4895903ec49b51b181d0\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":9.48,\"url\":\"/uploads/afd6ccaff3fe4895903ec49b51b181d0.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:26:02.287Z\",\"updated_at\":\"2020-03-15T07:26:02.287Z\"}},{\"id\":28,\"title\":\"Set 14-Piece Knife From KichiKit\",\"is_featured\":false,\"is_hot\":false,\"price\":85,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":3,\"is_out_of_stock\":true,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T07:28:12.906Z\",\"updated_at\":\"2020-03-18T13:03:00.440Z\",\"variants\":[],\"images\":[{\"id\":128,\"name\":\"29a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8570a56296b2470caa2b397e5bc9bf6d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":42.03,\"url\":\"/uploads/8570a56296b2470caa2b397e5bc9bf6d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:28:12.949Z\",\"updated_at\":\"2020-03-15T07:28:12.949Z\"},{\"id\":129,\"name\":\"29b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b271346821b54da68da7abc985db2400\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":16.61,\"url\":\"/uploads/b271346821b54da68da7abc985db2400.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:28:12.958Z\",\"updated_at\":\"2020-03-15T07:28:12.958Z\"},{\"id\":130,\"name\":\"29c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c5b77535a1754dcb9ccaead467a354e6\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":18.64,\"url\":\"/uploads/c5b77535a1754dcb9ccaead467a354e6.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:28:12.965Z\",\"updated_at\":\"2020-03-15T07:28:12.965Z\"},{\"id\":131,\"name\":\"29d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d58dd5cc5f824bd5af8e729503867653\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":17.77,\"url\":\"/uploads/d58dd5cc5f824bd5af8e729503867653.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:28:12.977Z\",\"updated_at\":\"2020-03-15T07:28:12.977Z\"}],\"thumbnail\":{\"id\":127,\"name\":\"5.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e6965d2ab9ef4537ab17517394fe9ce4\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.32,\"url\":\"/uploads/e6965d2ab9ef4537ab17517394fe9ce4.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:28:12.939Z\",\"updated_at\":\"2020-03-15T07:28:12.939Z\"}},{\"id\":30,\"title\":\"Letter Printed Cushion Cover Cotton\",\"is_featured\":false,\"is_hot\":false,\"price\":60,\"sale_price\":42,\"vendor\":\"Young Shop\",\"review\":2,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T09:01:33.601Z\",\"updated_at\":\"2020-03-15T09:01:33.601Z\",\"variants\":[],\"images\":[{\"id\":137,\"name\":\"7.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"cca3c5bbc1f4412aad6cf03cf87d81e8\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.61,\"url\":\"/uploads/cca3c5bbc1f4412aad6cf03cf87d81e8.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:01:33.634Z\",\"updated_at\":\"2020-03-15T09:01:33.634Z\"}],\"thumbnail\":{\"id\":136,\"name\":\"7.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"aefd853e2fd942bb860b9eb4d8b8d7c0\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.61,\"url\":\"/uploads/aefd853e2fd942bb860b9eb4d8b8d7c0.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:01:33.622Z\",\"updated_at\":\"2020-03-15T09:01:33.622Z\"}},{\"id\":45,\"title\":\"Wood Simple Tea Table\",\"is_featured\":false,\"is_hot\":false,\"price\":393.38,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":3,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T12:49:54.993Z\",\"updated_at\":\"2020-03-15T12:49:54.993Z\",\"variants\":[],\"images\":[{\"id\":176,\"name\":\"46a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"21b0d78f72b64f3e8b92cf194e499b7a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":36.64,\"url\":\"/uploads/21b0d78f72b64f3e8b92cf194e499b7a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:49:55.046Z\",\"updated_at\":\"2020-03-15T12:49:55.046Z\"},{\"id\":177,\"name\":\"46b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c9c68e1ace634ee69ced00590d3e4aa1\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.92,\"url\":\"/uploads/c9c68e1ace634ee69ced00590d3e4aa1.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:49:55.055Z\",\"updated_at\":\"2020-03-15T12:49:55.055Z\"},{\"id\":178,\"name\":\"46c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6ee8e30510df4e88a2807b38e38838ed\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.48,\"url\":\"/uploads/6ee8e30510df4e88a2807b38e38838ed.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:49:55.065Z\",\"updated_at\":\"2020-03-15T12:49:55.065Z\"},{\"id\":179,\"name\":\"46d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"61f9d89dc3cf4161b157d7b969111cc9\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":93.96,\"url\":\"/uploads/61f9d89dc3cf4161b157d7b969111cc9.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:49:55.075Z\",\"updated_at\":\"2020-03-15T12:49:55.075Z\"}],\"thumbnail\":{\"id\":175,\"name\":\"8.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3192b332d84248d0870b62db15ea79b6\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":3.97,\"url\":\"/uploads/3192b332d84248d0870b62db15ea79b6.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:49:55.032Z\",\"updated_at\":\"2020-03-15T12:49:55.032Z\"}},{\"id\":46,\"title\":\"Simple Plastic Chair In Gray Color\",\"is_featured\":false,\"is_hot\":false,\"price\":50,\"sale_price\":25,\"vendor\":\"Young Shop\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T12:50:58.066Z\",\"updated_at\":\"2020-03-15T12:50:58.066Z\",\"variants\":[],\"images\":[{\"id\":343,\"name\":\"47a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c34777c27dd44d6ab517cf5e5f0d3e67\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":76.72,\"url\":\"/uploads/c34777c27dd44d6ab517cf5e5f0d3e67.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:49:00.500Z\",\"updated_at\":\"2020-03-18T12:49:00.500Z\"},{\"id\":344,\"name\":\"47b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f5ca8fbda1cd45ccaa57e0dcf1692fb3\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.54,\"url\":\"/uploads/f5ca8fbda1cd45ccaa57e0dcf1692fb3.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:49:00.510Z\",\"updated_at\":\"2020-03-18T12:49:00.510Z\"},{\"id\":345,\"name\":\"47c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c3add993354d431c8f96405755a8099c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":21.15,\"url\":\"/uploads/c3add993354d431c8f96405755a8099c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:49:00.524Z\",\"updated_at\":\"2020-03-18T12:49:00.524Z\"},{\"id\":346,\"name\":\"47d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b0cefaa6a3d24a82a5e4cb2c1c4bb134\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":66.49,\"url\":\"/uploads/b0cefaa6a3d24a82a5e4cb2c1c4bb134.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:49:00.535Z\",\"updated_at\":\"2020-03-18T12:49:00.535Z\"}],\"thumbnail\":{\"id\":342,\"name\":\"10.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"72190536af1245b48cac7925c4318e37\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.38,\"url\":\"/uploads/72190536af1245b48cac7925c4318e37.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:49:00.488Z\",\"updated_at\":\"2020-03-18T12:49:00.488Z\"}},{\"id\":47,\"title\":\"Korea Small Wood 4 Boxes Storage\",\"is_featured\":false,\"is_hot\":false,\"price\":64,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":90,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T12:54:01.621Z\",\"updated_at\":\"2020-03-15T12:54:01.621Z\",\"variants\":[],\"images\":[{\"id\":181,\"name\":\"48a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"58cb2976791443a496b80e3cd5d55a4e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":78.37,\"url\":\"/uploads/58cb2976791443a496b80e3cd5d55a4e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:54:01.663Z\",\"updated_at\":\"2020-03-15T12:54:01.663Z\"},{\"id\":182,\"name\":\"48b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"89cc985082fa4ca7b8cb455f13e7c3eb\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":23.31,\"url\":\"/uploads/89cc985082fa4ca7b8cb455f13e7c3eb.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:54:01.676Z\",\"updated_at\":\"2020-03-15T12:54:01.676Z\"},{\"id\":183,\"name\":\"48c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b51695a23f704bb0bc62a97e154efba5\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":23.12,\"url\":\"/uploads/b51695a23f704bb0bc62a97e154efba5.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:54:01.686Z\",\"updated_at\":\"2020-03-15T12:54:01.686Z\"},{\"id\":184,\"name\":\"48d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"05982ca9a3a64d6391366bc6103884e6\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":22.18,\"url\":\"/uploads/05982ca9a3a64d6391366bc6103884e6.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:54:01.696Z\",\"updated_at\":\"2020-03-15T12:54:01.696Z\"}],\"thumbnail\":{\"id\":180,\"name\":\"9.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"664f3ea44e7f44b5bb726d0a78a6eaec\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.13,\"url\":\"/uploads/664f3ea44e7f44b5bb726d0a78a6eaec.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:54:01.652Z\",\"updated_at\":\"2020-03-15T12:54:01.652Z\"}},{\"id\":49,\"title\":\"Claure Austin Lover Round Chair White Wooden\",\"is_featured\":false,\"is_hot\":false,\"price\":99.59,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T12:57:21.759Z\",\"updated_at\":\"2020-03-15T12:57:21.759Z\",\"variants\":[],\"images\":[{\"id\":191,\"name\":\"50a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f8bb5ccd1eb5459e9fc33d2f45b74e60\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":33.03,\"url\":\"/uploads/f8bb5ccd1eb5459e9fc33d2f45b74e60.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:57:21.788Z\",\"updated_at\":\"2020-03-15T12:57:21.788Z\"},{\"id\":192,\"name\":\"50b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"82c418256f2e4264a3e9aed0c9264335\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.77,\"url\":\"/uploads/82c418256f2e4264a3e9aed0c9264335.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:57:21.796Z\",\"updated_at\":\"2020-03-15T12:57:21.796Z\"},{\"id\":193,\"name\":\"50c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"65550a2a55ce4f9ea2d4599c9cffd43a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":12.36,\"url\":\"/uploads/65550a2a55ce4f9ea2d4599c9cffd43a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:57:21.805Z\",\"updated_at\":\"2020-03-15T12:57:21.805Z\"},{\"id\":194,\"name\":\"50d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a18fd4de58f34496abb40f38d3dacdf9\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.28,\"url\":\"/uploads/a18fd4de58f34496abb40f38d3dacdf9.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:57:21.812Z\",\"updated_at\":\"2020-03-15T12:57:21.812Z\"}],\"thumbnail\":{\"id\":190,\"name\":\"1.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d36aa60d7915475abcbb346de7274cac\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":5.79,\"url\":\"/uploads/d36aa60d7915475abcbb346de7274cac.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:57:21.777Z\",\"updated_at\":\"2020-03-15T12:57:21.777Z\"}},{\"id\":50,\"title\":\"Letter Printed Cushion Cover Cotton Throw Pillow\",\"is_featured\":false,\"is_hot\":false,\"price\":13.59,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T12:59:25.253Z\",\"updated_at\":\"2020-03-15T12:59:25.253Z\",\"variants\":[],\"images\":[{\"id\":196,\"name\":\"4.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5a21858f28fe470bab05f9e839eedbdf\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.61,\"url\":\"/uploads/5a21858f28fe470bab05f9e839eedbdf.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:59:25.285Z\",\"updated_at\":\"2020-03-15T12:59:25.285Z\"}],\"thumbnail\":{\"id\":195,\"name\":\"4.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e446cc5b6ed3433f9ef5aa3c1373bf18\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.61,\"url\":\"/uploads/e446cc5b6ed3433f9ef5aa3c1373bf18.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T12:59:25.275Z\",\"updated_at\":\"2020-03-15T12:59:25.275Z\"}},{\"id\":51,\"title\":\"Simple Short TV Board Combine Book Shelf\",\"is_featured\":false,\"is_hot\":false,\"price\":13.59,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T13:00:41.375Z\",\"updated_at\":\"2020-03-15T13:00:41.375Z\",\"variants\":[],\"images\":[{\"id\":198,\"name\":\"5.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a1a08a0b292846089662206d92c858bf\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":5.07,\"url\":\"/uploads/a1a08a0b292846089662206d92c858bf.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:01:18.571Z\",\"updated_at\":\"2020-03-15T13:01:18.571Z\"}],\"thumbnail\":{\"id\":197,\"name\":\"5.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2af891b3cc034320b2ef6b792542cba4\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":5.07,\"url\":\"/uploads/2af891b3cc034320b2ef6b792542cba4.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:01:18.560Z\",\"updated_at\":\"2020-03-15T13:01:18.560Z\"}},{\"id\":52,\"title\":\"Simple Tea Teable With Glass Surface\",\"is_featured\":false,\"is_hot\":false,\"price\":249.59,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T13:28:05.503Z\",\"updated_at\":\"2020-03-15T13:28:05.503Z\",\"variants\":[],\"images\":[{\"id\":200,\"name\":\"53a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4ad7f87094984babac0a22a9f8447eb2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":24.93,\"url\":\"/uploads/4ad7f87094984babac0a22a9f8447eb2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:28:05.541Z\",\"updated_at\":\"2020-03-15T13:28:05.541Z\"},{\"id\":201,\"name\":\"53b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8929c017e8324986911ae5b70798728e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":16.98,\"url\":\"/uploads/8929c017e8324986911ae5b70798728e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:28:05.551Z\",\"updated_at\":\"2020-03-15T13:28:05.551Z\"},{\"id\":202,\"name\":\"53c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"500e7a2bbf424d6ab4c3b7ec70af33e5\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":25.08,\"url\":\"/uploads/500e7a2bbf424d6ab4c3b7ec70af33e5.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:28:05.559Z\",\"updated_at\":\"2020-03-15T13:28:05.559Z\"}],\"thumbnail\":{\"id\":199,\"name\":\"6.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"98b96e736fa744a5ab7ed83354d97536\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":3.93,\"url\":\"/uploads/98b96e736fa744a5ab7ed83354d97536.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:28:05.531Z\",\"updated_at\":\"2020-03-15T13:28:05.531Z\"}}]},{\"id\":3,\"name\":\"Consumer Electrics\",\"slug\":\"consumer-electrics\",\"description\":null,\"created_at\":\"2020-03-14T10:25:39.408Z\",\"updated_at\":\"2020-03-14T10:25:39.408Z\",\"products\":[{\"id\":3,\"title\":\"Marshall Kilburn Portable Wireless Speaker\",\"is_featured\":false,\"is_hot\":false,\"price\":42.99,\"sale_price\":null,\"vendor\":\"Go Pro\",\"review\":5,\"is_out_of_stock\":false,\"depot\":85,\"inventory\":100,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T05:55:19.349Z\",\"updated_at\":\"2020-03-15T05:55:19.349Z\",\"variants\":[],\"images\":[{\"id\":10,\"name\":\"1.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3398b7a330154c9390db4495b9e3d413\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":158.75,\"url\":\"/uploads/3398b7a330154c9390db4495b9e3d413.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:55:19.403Z\",\"updated_at\":\"2020-03-15T05:55:19.403Z\"},{\"id\":11,\"name\":\"2.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"73b00542e06e4d008945bc701959472b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":44.03,\"url\":\"/uploads/73b00542e06e4d008945bc701959472b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:55:19.415Z\",\"updated_at\":\"2020-03-15T05:55:19.415Z\"},{\"id\":12,\"name\":\"3.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f0647af5998446e1a6a1906996014a0a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":69.23,\"url\":\"/uploads/f0647af5998446e1a6a1906996014a0a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:55:19.425Z\",\"updated_at\":\"2020-03-15T05:55:19.425Z\"}],\"thumbnail\":{\"id\":9,\"name\":\"2.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"feaeaa8c5d24474e943f57a7df55e921\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":15.15,\"url\":\"/uploads/feaeaa8c5d24474e943f57a7df55e921.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:55:19.385Z\",\"updated_at\":\"2020-03-15T05:55:19.385Z\"}},{\"id\":19,\"title\":\"EPSION Plaster Printer\",\"is_featured\":false,\"is_hot\":false,\"price\":233.28,\"sale_price\":null,\"vendor\":\"Robert's Store\",\"review\":4,\"is_out_of_stock\":false,\"depot\":40,\"inventory\":50,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T06:46:44.313Z\",\"updated_at\":\"2020-03-15T06:46:44.313Z\",\"variants\":[],\"images\":[{\"id\":85,\"name\":\"19a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d9a512ac366049e79ed4430f63258646\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":36.78,\"url\":\"/uploads/d9a512ac366049e79ed4430f63258646.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:46:44.345Z\",\"updated_at\":\"2020-03-15T06:46:44.345Z\"},{\"id\":86,\"name\":\"19b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"37e8bc461d034b42886a2f5a675c723b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.65,\"url\":\"/uploads/37e8bc461d034b42886a2f5a675c723b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:46:44.353Z\",\"updated_at\":\"2020-03-15T06:46:44.353Z\"},{\"id\":87,\"name\":\"19c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0db1b9f735034ad9927e5544d4c2f916\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":12.91,\"url\":\"/uploads/0db1b9f735034ad9927e5544d4c2f916.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:46:44.361Z\",\"updated_at\":\"2020-03-15T06:46:44.361Z\"},{\"id\":88,\"name\":\"19d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2d276d5621274050b2126bd8d2c6f3d2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.67,\"url\":\"/uploads/2d276d5621274050b2126bd8d2c6f3d2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:46:44.369Z\",\"updated_at\":\"2020-03-15T06:46:44.369Z\"}],\"thumbnail\":{\"id\":84,\"name\":\"19.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6feffd7531c2463f9289a1dbe6cf0eb2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.32,\"url\":\"/uploads/6feffd7531c2463f9289a1dbe6cf0eb2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:46:44.335Z\",\"updated_at\":\"2020-03-15T06:46:44.335Z\"}},{\"id\":20,\"title\":\"EPSION Plaster Printer 2\",\"is_featured\":false,\"is_hot\":false,\"price\":299.28,\"sale_price\":null,\"vendor\":\"Robert's Store\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T06:51:40.586Z\",\"updated_at\":\"2020-03-15T06:51:40.586Z\",\"variants\":[],\"images\":[{\"id\":90,\"name\":\"19a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c1445934392c4fa2a247db732b39930b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":36.78,\"url\":\"/uploads/c1445934392c4fa2a247db732b39930b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:51:40.623Z\",\"updated_at\":\"2020-03-15T06:51:40.623Z\"},{\"id\":91,\"name\":\"19b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"94a5b77dccdc43d79683a092ffa12adc\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.65,\"url\":\"/uploads/94a5b77dccdc43d79683a092ffa12adc.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:51:40.643Z\",\"updated_at\":\"2020-03-15T06:51:40.643Z\"},{\"id\":92,\"name\":\"19c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"aea18f347cb34f54add389580fd52e53\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":12.91,\"url\":\"/uploads/aea18f347cb34f54add389580fd52e53.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:51:40.653Z\",\"updated_at\":\"2020-03-15T06:51:40.653Z\"},{\"id\":93,\"name\":\"19d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c3ed6617023f458d99388ca01f6af619\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.67,\"url\":\"/uploads/c3ed6617023f458d99388ca01f6af619.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:51:40.670Z\",\"updated_at\":\"2020-03-15T06:51:40.670Z\"}],\"thumbnail\":{\"id\":89,\"name\":\"19.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9c3e74c3b8e04684ba6c8cd333bdc8ec\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.32,\"url\":\"/uploads/9c3e74c3b8e04684ba6c8cd333bdc8ec.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:51:40.609Z\",\"updated_at\":\"2020-03-15T06:51:40.609Z\"}},{\"id\":21,\"title\":\"LG White Front Load Steam Washer\",\"is_featured\":false,\"is_hot\":false,\"price\":1422.7,\"sale_price\":1025.5,\"vendor\":\"Young Shop\",\"review\":5,\"is_out_of_stock\":false,\"depot\":65,\"inventory\":75,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:54:51.696Z\",\"updated_at\":\"2020-03-15T06:54:51.696Z\",\"variants\":[],\"images\":[{\"id\":95,\"name\":\"21a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a88b749bd3bb49a6be93a362099c8295\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":46.36,\"url\":\"/uploads/a88b749bd3bb49a6be93a362099c8295.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:54:51.730Z\",\"updated_at\":\"2020-03-15T06:54:51.730Z\"},{\"id\":96,\"name\":\"22a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8fcfcb5d0c694660b1906eda13290a82\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":68.23,\"url\":\"/uploads/8fcfcb5d0c694660b1906eda13290a82.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:54:51.739Z\",\"updated_at\":\"2020-03-15T06:54:51.739Z\"}],\"thumbnail\":{\"id\":94,\"name\":\"20.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"95aa7cb09ba04ce2b529ebceabb6f02c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.71,\"url\":\"/uploads/95aa7cb09ba04ce2b529ebceabb6f02c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:54:51.718Z\",\"updated_at\":\"2020-03-15T06:54:51.718Z\"}},{\"id\":25,\"title\":\"Aroma Rice Cooker\",\"is_featured\":false,\"is_hot\":false,\"price\":101.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":1,\"is_out_of_stock\":true,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T07:09:29.699Z\",\"updated_at\":\"2020-03-15T07:09:29.699Z\",\"variants\":[],\"images\":[{\"id\":113,\"name\":\"26a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"696dd71cf0fc48dca751de388cc8613f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":40.83,\"url\":\"/uploads/696dd71cf0fc48dca751de388cc8613f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:09:29.746Z\",\"updated_at\":\"2020-03-15T07:09:29.746Z\"},{\"id\":114,\"name\":\"26b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d350a3a6a0044d83bc72c68176dcb5ab\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":25.9,\"url\":\"/uploads/d350a3a6a0044d83bc72c68176dcb5ab.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:09:29.758Z\",\"updated_at\":\"2020-03-15T07:09:29.758Z\"},{\"id\":115,\"name\":\"26c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"fa26ea0d67e846b3af930df9f02c96d1\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":32.9,\"url\":\"/uploads/fa26ea0d67e846b3af930df9f02c96d1.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:09:29.767Z\",\"updated_at\":\"2020-03-15T07:09:29.767Z\"},{\"id\":116,\"name\":\"26d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c5e80f9757f94639ba6c70a974cddd39\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":16.87,\"url\":\"/uploads/c5e80f9757f94639ba6c70a974cddd39.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:09:29.774Z\",\"updated_at\":\"2020-03-15T07:09:29.774Z\"}],\"thumbnail\":{\"id\":112,\"name\":\"2.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d5c5d5570e1046f080ad62c7e35fe56d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":9.06,\"url\":\"/uploads/d5c5d5570e1046f080ad62c7e35fe56d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:09:29.729Z\",\"updated_at\":\"2020-03-15T07:09:29.729Z\"}},{\"id\":29,\"title\":\"Magic Bullet NutriBullet Pro 900 Series Blender\",\"is_featured\":false,\"is_hot\":false,\"price\":92,\"sale_price\":null,\"vendor\":\"Global Store\",\"review\":1,\"is_out_of_stock\":true,\"depot\":80,\"inventory\":90,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T07:29:47.468Z\",\"updated_at\":\"2020-03-18T12:51:46.229Z\",\"variants\":[],\"images\":[{\"id\":132,\"name\":\"30a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a6ac678bb7224277b0ba5b57bd274704\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":46.73,\"url\":\"/uploads/a6ac678bb7224277b0ba5b57bd274704.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:29:47.489Z\",\"updated_at\":\"2020-03-15T07:29:47.489Z\"},{\"id\":133,\"name\":\"30b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9de8de5d5f774d518615bda72a646796\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.44,\"url\":\"/uploads/9de8de5d5f774d518615bda72a646796.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:29:47.498Z\",\"updated_at\":\"2020-03-15T07:29:47.498Z\"},{\"id\":134,\"name\":\"30c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"db40275d06b04adc828ba08708062ad8\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.1,\"url\":\"/uploads/db40275d06b04adc828ba08708062ad8.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:29:47.507Z\",\"updated_at\":\"2020-03-15T07:29:47.507Z\"},{\"id\":135,\"name\":\"30d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e4b8c056a206487a8bbf279727e2ed1e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.84,\"url\":\"/uploads/e4b8c056a206487a8bbf279727e2ed1e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:29:47.523Z\",\"updated_at\":\"2020-03-15T07:29:47.523Z\"}],\"thumbnail\":{\"id\":347,\"name\":\"6.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"20c71a1cecd047928f943f23a58c05f8\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":9.74,\"url\":\"/uploads/20c71a1cecd047928f943f23a58c05f8.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:51:46.247Z\",\"updated_at\":\"2020-03-18T12:51:46.247Z\"}},{\"id\":38,\"title\":\"TCL 47-inch 4K Ultra HD Smart TV\",\"is_featured\":false,\"is_hot\":false,\"price\":670,\"sale_price\":567.99,\"vendor\":\"Go Pro\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T09:43:05.580Z\",\"updated_at\":\"2020-03-18T12:58:10.870Z\",\"variants\":[],\"images\":[{\"id\":158,\"name\":\"12.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5e0bff934b5d4a958af9122a1ee91d41\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.62,\"url\":\"/uploads/5e0bff934b5d4a958af9122a1ee91d41.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:43:05.611Z\",\"updated_at\":\"2020-03-15T09:43:05.611Z\"}],\"thumbnail\":{\"id\":157,\"name\":\"12.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4e95e8c4956941099aa132a86b0086db\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.62,\"url\":\"/uploads/4e95e8c4956941099aa132a86b0086db.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:43:05.600Z\",\"updated_at\":\"2020-03-15T09:43:05.600Z\"}},{\"id\":40,\"title\":\"LG Electrolux 500L Inverte Washing Machine\",\"is_featured\":false,\"is_hot\":false,\"price\":360,\"sale_price\":342,\"vendor\":\"Young Shop\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T09:46:00.538Z\",\"updated_at\":\"2020-03-15T09:46:00.538Z\",\"variants\":[],\"images\":[{\"id\":162,\"name\":\"7.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"46f0cfa3ec174e42b98e26e000dda8f1\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.71,\"url\":\"/uploads/46f0cfa3ec174e42b98e26e000dda8f1.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:46:00.580Z\",\"updated_at\":\"2020-03-15T09:46:00.580Z\"}],\"thumbnail\":{\"id\":161,\"name\":\"7.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"158cc93d2c404e53b93b06c64997d02f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.71,\"url\":\"/uploads/158cc93d2c404e53b93b06c64997d02f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:46:00.568Z\",\"updated_at\":\"2020-03-15T09:46:00.568Z\"}},{\"id\":41,\"title\":\"Panasonic Invertr 900L Refrigerator\",\"is_featured\":false,\"is_hot\":false,\"price\":720,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T09:47:24.554Z\",\"updated_at\":\"2020-03-15T09:47:24.554Z\",\"variants\":[],\"images\":[{\"id\":341,\"name\":\"15.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9778f73b10ad4a939769a79c0a877c43\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.09,\"url\":\"/uploads/9778f73b10ad4a939769a79c0a877c43.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:47:55.740Z\",\"updated_at\":\"2020-03-18T12:47:55.740Z\"}],\"thumbnail\":{\"id\":340,\"name\":\"15.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a3381403e8474758922ee65bbf2eea22\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.09,\"url\":\"/uploads/a3381403e8474758922ee65bbf2eea22.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:47:55.731Z\",\"updated_at\":\"2020-03-18T12:47:55.731Z\"}},{\"id\":53,\"title\":\"Stadler Form Otto African Sapele Wood\",\"is_featured\":false,\"is_hot\":false,\"price\":127.59,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T13:29:47.964Z\",\"updated_at\":\"2020-03-15T13:29:47.964Z\",\"variants\":[],\"images\":[{\"id\":204,\"name\":\"54a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0cc34763c9cc4957a77b5578cfd3147b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":504.06,\"url\":\"/uploads/0cc34763c9cc4957a77b5578cfd3147b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:29:48.003Z\",\"updated_at\":\"2020-03-15T13:29:48.003Z\"},{\"id\":205,\"name\":\"54b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e4b335c24d1544bfb20410b1f95d7149\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":20.85,\"url\":\"/uploads/e4b335c24d1544bfb20410b1f95d7149.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:29:48.012Z\",\"updated_at\":\"2020-03-15T13:29:48.012Z\"},{\"id\":206,\"name\":\"54c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"01d38872ce5a4a51b40f6ab4b3f927ee\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":27.41,\"url\":\"/uploads/01d38872ce5a4a51b40f6ab4b3f927ee.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:29:48.020Z\",\"updated_at\":\"2020-03-15T13:29:48.020Z\"}],\"thumbnail\":{\"id\":203,\"name\":\"7.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"acf14989504d4099ac8a56d0b4e2aca9\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.5,\"url\":\"/uploads/acf14989504d4099ac8a56d0b4e2aca9.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:29:47.988Z\",\"updated_at\":\"2020-03-15T13:29:47.988Z\"}},{\"id\":69,\"title\":\"Apple TV 4k – 32 GB (4th Generation)\",\"is_featured\":false,\"is_hot\":false,\"price\":92.99,\"sale_price\":null,\"vendor\":\"Young Shop\",\"review\":5,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T05:42:14.186Z\",\"updated_at\":\"2020-03-18T05:42:14.186Z\",\"variants\":[],\"images\":[{\"id\":274,\"name\":\"70a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ae983ce46fc64ec4bc65ca800de5ea56\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":24.59,\"url\":\"/uploads/ae983ce46fc64ec4bc65ca800de5ea56.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:42:14.234Z\",\"updated_at\":\"2020-03-18T05:42:14.234Z\"},{\"id\":275,\"name\":\"70b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0d1eaad741ce4efba4bba3dfa0bb4a52\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.02,\"url\":\"/uploads/0d1eaad741ce4efba4bba3dfa0bb4a52.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:42:14.248Z\",\"updated_at\":\"2020-03-18T05:42:14.248Z\"},{\"id\":276,\"name\":\"70c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"cb1f36ff311c4297ba19ba9f27785fd2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.65,\"url\":\"/uploads/cb1f36ff311c4297ba19ba9f27785fd2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:42:14.260Z\",\"updated_at\":\"2020-03-18T05:42:14.260Z\"}],\"thumbnail\":{\"id\":273,\"name\":\"15.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"93b647e5138f40d991c4f7d123794b1f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.49,\"url\":\"/uploads/93b647e5138f40d991c4f7d123794b1f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:42:14.215Z\",\"updated_at\":\"2020-03-18T05:42:14.215Z\"}},{\"id\":70,\"title\":\"GoPro Karman 4 Channels Quadcopter Drone\",\"is_featured\":false,\"is_hot\":false,\"price\":392.99,\"sale_price\":null,\"vendor\":\"Young Shop\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T05:43:57.333Z\",\"updated_at\":\"2020-03-18T05:43:57.333Z\",\"variants\":[],\"images\":[{\"id\":278,\"name\":\"71a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"997bc2778e25492fbd09c582bc98ad3b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":33.13,\"url\":\"/uploads/997bc2778e25492fbd09c582bc98ad3b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:43:57.405Z\",\"updated_at\":\"2020-03-18T05:43:57.405Z\"},{\"id\":279,\"name\":\"71b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a3da535f76ac43f5bd8fd82201144603\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":29.45,\"url\":\"/uploads/a3da535f76ac43f5bd8fd82201144603.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:43:57.415Z\",\"updated_at\":\"2020-03-18T05:43:57.415Z\"},{\"id\":280,\"name\":\"71c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1dc6a4b3b1434677be924e53e98297b2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":19.21,\"url\":\"/uploads/1dc6a4b3b1434677be924e53e98297b2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:43:57.433Z\",\"updated_at\":\"2020-03-18T05:43:57.433Z\"},{\"id\":281,\"name\":\"71d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"95d0cf75458a480ebc6c684af5dfd38c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":74.06,\"url\":\"/uploads/95d0cf75458a480ebc6c684af5dfd38c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:43:57.444Z\",\"updated_at\":\"2020-03-18T05:43:57.444Z\"}],\"thumbnail\":{\"id\":277,\"name\":\"16.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"72b77e04493342ab803b4f6bbc346072\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":5.24,\"url\":\"/uploads/72b77e04493342ab803b4f6bbc346072.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:43:57.386Z\",\"updated_at\":\"2020-03-18T05:43:57.386Z\"}}]},{\"id\":4,\"name\":\"Health & Beauty\",\"slug\":\"health-and-beauty\",\"description\":null,\"created_at\":\"2020-03-14T10:25:51.376Z\",\"updated_at\":\"2020-03-14T10:25:51.376Z\",\"products\":[{\"id\":54,\"title\":\"Aveeno Moisturizing Body Shower 450ml\",\"is_featured\":false,\"is_hot\":false,\"price\":59,\"sale_price\":47.99,\"vendor\":\"Young Shop\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T13:33:17.935Z\",\"updated_at\":\"2020-03-15T13:33:17.935Z\",\"variants\":[],\"images\":[{\"id\":208,\"name\":\"55a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"383ed28ccd8c43b99de6d4de3031603d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":49.14,\"url\":\"/uploads/383ed28ccd8c43b99de6d4de3031603d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:33:17.965Z\",\"updated_at\":\"2020-03-15T13:33:17.965Z\"},{\"id\":209,\"name\":\"55b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"be3321593fea4864addd3d73f35a8cee\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.5,\"url\":\"/uploads/be3321593fea4864addd3d73f35a8cee.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:33:17.978Z\",\"updated_at\":\"2020-03-15T13:33:17.978Z\"},{\"id\":210,\"name\":\"55c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9d091230599045ed97bcab3d7647127b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.41,\"url\":\"/uploads/9d091230599045ed97bcab3d7647127b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:33:17.986Z\",\"updated_at\":\"2020-03-15T13:33:17.986Z\"},{\"id\":211,\"name\":\"55d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"972459f675fd49c585e52fa5cc1d418e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.43,\"url\":\"/uploads/972459f675fd49c585e52fa5cc1d418e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:33:18.001Z\",\"updated_at\":\"2020-03-15T13:33:18.001Z\"}],\"thumbnail\":{\"id\":207,\"name\":\"1.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0a029cb7870243c7b36c71922a55701a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":5.38,\"url\":\"/uploads/0a029cb7870243c7b36c71922a55701a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:33:17.954Z\",\"updated_at\":\"2020-03-15T13:33:17.954Z\"}},{\"id\":55,\"title\":\"Baxter Care Hair Kit For Bearded Mens\",\"is_featured\":false,\"is_hot\":false,\"price\":60,\"sale_price\":42,\"vendor\":\"Young Shop\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T13:35:28.855Z\",\"updated_at\":\"2020-03-15T13:35:28.855Z\",\"variants\":[],\"images\":[{\"id\":213,\"name\":\"56a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1ca5fe0793e545669c16a8e7c7b68348\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":58.88,\"url\":\"/uploads/1ca5fe0793e545669c16a8e7c7b68348.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:35:28.889Z\",\"updated_at\":\"2020-03-15T13:35:28.889Z\"},{\"id\":214,\"name\":\"56b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2268da1843334f4c9e0757a16f0b8443\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.12,\"url\":\"/uploads/2268da1843334f4c9e0757a16f0b8443.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:35:28.898Z\",\"updated_at\":\"2020-03-15T13:35:28.898Z\"},{\"id\":215,\"name\":\"56c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d55cb74ae9d64a3a9d93ae4328b64475\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.79,\"url\":\"/uploads/d55cb74ae9d64a3a9d93ae4328b64475.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:35:28.905Z\",\"updated_at\":\"2020-03-15T13:35:28.905Z\"},{\"id\":216,\"name\":\"56d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"aa96424c1a8743929d92003f1f3b92cd\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":24.83,\"url\":\"/uploads/aa96424c1a8743929d92003f1f3b92cd.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:35:28.913Z\",\"updated_at\":\"2020-03-15T13:35:28.913Z\"}],\"thumbnail\":{\"id\":212,\"name\":\"3.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ede2a4fddd3e439c87a0f471267b7838\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.03,\"url\":\"/uploads/ede2a4fddd3e439c87a0f471267b7838.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:35:28.879Z\",\"updated_at\":\"2020-03-15T13:35:28.879Z\"}},{\"id\":56,\"title\":\"Anna Sui Putty Mask Perfection\",\"is_featured\":false,\"is_hot\":false,\"price\":25,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T13:37:05.467Z\",\"updated_at\":\"2020-03-15T13:37:05.467Z\",\"variants\":[],\"images\":[{\"id\":218,\"name\":\"57a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"56986b9145c7497dbd31243e9cb48f87\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":53.69,\"url\":\"/uploads/56986b9145c7497dbd31243e9cb48f87.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:37:05.508Z\",\"updated_at\":\"2020-03-15T13:37:05.508Z\"},{\"id\":219,\"name\":\"57b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6ba127ca71074b539221a949ef26e701\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":21.12,\"url\":\"/uploads/6ba127ca71074b539221a949ef26e701.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:37:05.520Z\",\"updated_at\":\"2020-03-15T13:37:05.520Z\"},{\"id\":220,\"name\":\"57c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c378fc8a90004701811b388ce195a957\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":54.25,\"url\":\"/uploads/c378fc8a90004701811b388ce195a957.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:37:05.528Z\",\"updated_at\":\"2020-03-15T13:37:05.528Z\"},{\"id\":221,\"name\":\"57d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2324c56372fc46998df8ce9f8a9cd847\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":12.77,\"url\":\"/uploads/2324c56372fc46998df8ce9f8a9cd847.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:37:05.537Z\",\"updated_at\":\"2020-03-15T13:37:05.537Z\"}],\"thumbnail\":{\"id\":217,\"name\":\"4.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9ccbc5e9220e4768921afcb101c10459\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.02,\"url\":\"/uploads/9ccbc5e9220e4768921afcb101c10459.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T13:37:05.487Z\",\"updated_at\":\"2020-03-15T13:37:05.487Z\"}},{\"id\":57,\"title\":\"Set 30 Piece Korea StartSkin Natural Mask\",\"is_featured\":false,\"is_hot\":false,\"price\":85,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T14:26:12.340Z\",\"updated_at\":\"2020-03-15T14:26:12.340Z\",\"variants\":[],\"images\":[{\"id\":223,\"name\":\"58a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"cca7d31b5a85453ba4145a460f6c283b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":32.51,\"url\":\"/uploads/cca7d31b5a85453ba4145a460f6c283b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T14:26:12.368Z\",\"updated_at\":\"2020-03-15T14:26:12.368Z\"},{\"id\":224,\"name\":\"58b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5841d6e8f7104034935cd493547900ff\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.31,\"url\":\"/uploads/5841d6e8f7104034935cd493547900ff.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T14:26:12.377Z\",\"updated_at\":\"2020-03-15T14:26:12.377Z\"},{\"id\":225,\"name\":\"58c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"537289a299f54d3b9ed8fc8763ee7b92\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":33.19,\"url\":\"/uploads/537289a299f54d3b9ed8fc8763ee7b92.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T14:26:12.394Z\",\"updated_at\":\"2020-03-15T14:26:12.394Z\"}],\"thumbnail\":{\"id\":222,\"name\":\"5.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"46e9f0df98c74d03b9089b73d5cb2a57\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.48,\"url\":\"/uploads/46e9f0df98c74d03b9089b73d5cb2a57.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T14:26:12.359Z\",\"updated_at\":\"2020-03-15T14:26:12.359Z\"}},{\"id\":58,\"title\":\"Ciate Palemore Lipstick Bold Red Color\",\"is_featured\":false,\"is_hot\":false,\"price\":92,\"sale_price\":null,\"vendor\":\"Global Store\",\"review\":5,\"is_out_of_stock\":false,\"depot\":80,\"inventory\":90,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T14:27:51.518Z\",\"updated_at\":\"2020-03-15T14:27:51.518Z\",\"variants\":[],\"images\":[{\"id\":227,\"name\":\"59a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"918f66e8a4be4029863149bd4c163dd6\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":68.14,\"url\":\"/uploads/918f66e8a4be4029863149bd4c163dd6.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T14:27:51.550Z\",\"updated_at\":\"2020-03-15T14:27:51.550Z\"},{\"id\":228,\"name\":\"59b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ed4f0cbafb9149138d06bfb72b458893\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":17.37,\"url\":\"/uploads/ed4f0cbafb9149138d06bfb72b458893.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T14:27:51.564Z\",\"updated_at\":\"2020-03-15T14:27:51.564Z\"},{\"id\":229,\"name\":\"59c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5ba79ea8093645c480eebe7b5083e483\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":48.51,\"url\":\"/uploads/5ba79ea8093645c480eebe7b5083e483.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T14:27:51.572Z\",\"updated_at\":\"2020-03-15T14:27:51.572Z\"},{\"id\":230,\"name\":\"59d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9c1da7c5f0314c36ae1977c5b6caecab\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":16.61,\"url\":\"/uploads/9c1da7c5f0314c36ae1977c5b6caecab.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T14:27:51.580Z\",\"updated_at\":\"2020-03-15T14:27:51.580Z\"}],\"thumbnail\":{\"id\":226,\"name\":\"6.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"240695414ed64690878e38d7494d4592\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.04,\"url\":\"/uploads/240695414ed64690878e38d7494d4592.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T14:27:51.539Z\",\"updated_at\":\"2020-03-15T14:27:51.539Z\"}}]},{\"id\":5,\"name\":\"Computers & Technologies\",\"slug\":\"computers-and-technologies\",\"description\":null,\"created_at\":\"2020-03-14T10:26:11.462Z\",\"updated_at\":\"2020-03-14T10:26:11.462Z\",\"products\":[{\"id\":5,\"title\":\"Xbox One Wireless Controller Black Color\",\"is_featured\":false,\"is_hot\":true,\"price\":55.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T06:02:06.677Z\",\"updated_at\":\"2020-03-15T06:02:06.677Z\",\"variants\":[],\"images\":[{\"id\":19,\"name\":\"5a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1a15c64eb31a4bc2bbeff1961535519c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":30.89,\"url\":\"/uploads/1a15c64eb31a4bc2bbeff1961535519c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:02:06.726Z\",\"updated_at\":\"2020-03-15T06:02:06.726Z\"},{\"id\":20,\"name\":\"5b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"bb6866b289d949338bf655c7351f9df8\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":24.88,\"url\":\"/uploads/bb6866b289d949338bf655c7351f9df8.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:02:06.739Z\",\"updated_at\":\"2020-03-15T06:02:06.739Z\"},{\"id\":21,\"name\":\"5c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d3a3d44ea16e439c9ff426a90e60acd2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":21.5,\"url\":\"/uploads/d3a3d44ea16e439c9ff426a90e60acd2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:02:06.748Z\",\"updated_at\":\"2020-03-15T06:02:06.748Z\"},{\"id\":22,\"name\":\"5d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"faa25ed3c1fd4ba3a904b2b6dd8bdc87\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":39.19,\"url\":\"/uploads/faa25ed3c1fd4ba3a904b2b6dd8bdc87.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:02:06.765Z\",\"updated_at\":\"2020-03-15T06:02:06.765Z\"}],\"thumbnail\":{\"id\":18,\"name\":\"5a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8e2e4eff27414c719203df4ea88e68be\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":30.89,\"url\":\"/uploads/8e2e4eff27414c719203df4ea88e68be.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:02:06.710Z\",\"updated_at\":\"2020-03-15T06:02:06.710Z\"}},{\"id\":7,\"title\":\"Sound Intone I65 Earphone White Version\",\"is_featured\":false,\"is_hot\":false,\"price\":106.96,\"sale_price\":100.99,\"vendor\":\"Youngshop\",\"review\":5,\"is_out_of_stock\":false,\"depot\":80,\"inventory\":90,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:12:37.749Z\",\"updated_at\":\"2020-04-14T10:45:51.530Z\",\"variants\":[],\"images\":[{\"id\":27,\"name\":\"7a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e98492a0c2b24ae5892641009bf21056\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":35.46,\"url\":\"/uploads/e98492a0c2b24ae5892641009bf21056.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:12:37.787Z\",\"updated_at\":\"2020-03-15T06:12:37.787Z\"},{\"id\":28,\"name\":\"7b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"55fbf669c1804ea994ace81b7aa58896\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":44.24,\"url\":\"/uploads/55fbf669c1804ea994ace81b7aa58896.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:12:37.797Z\",\"updated_at\":\"2020-03-15T06:12:37.797Z\"},{\"id\":29,\"name\":\"7c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b6bf4ec3c620428ca2c3876d31b28252\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":35.55,\"url\":\"/uploads/b6bf4ec3c620428ca2c3876d31b28252.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:12:37.807Z\",\"updated_at\":\"2020-03-15T06:12:37.807Z\"},{\"id\":30,\"name\":\"7d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"dcdfd21d3ea44a6888d983d21852d961\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":30.8,\"url\":\"/uploads/dcdfd21d3ea44a6888d983d21852d961.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:12:37.816Z\",\"updated_at\":\"2020-03-15T06:12:37.816Z\"}],\"thumbnail\":{\"id\":26,\"name\":\"6.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b097fdfb8b9d40fca83de9180de5a7ab\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.03,\"url\":\"/uploads/b097fdfb8b9d40fca83de9180de5a7ab.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:12:37.775Z\",\"updated_at\":\"2020-03-15T06:12:37.775Z\"}},{\"id\":16,\"title\":\"ASUS Chromebook Flip – 10.2 Inch\",\"is_featured\":false,\"is_hot\":false,\"price\":332.38,\"sale_price\":null,\"vendor\":\"Young Shop\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T06:40:02.790Z\",\"updated_at\":\"2020-03-15T06:40:02.790Z\",\"variants\":[],\"images\":[{\"id\":70,\"name\":\"16a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4ef330f9bd3a4bb1ba9c2b23f70772df\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":29.52,\"url\":\"/uploads/4ef330f9bd3a4bb1ba9c2b23f70772df.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:40:02.823Z\",\"updated_at\":\"2020-03-15T06:40:02.823Z\"},{\"id\":71,\"name\":\"16b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1eff5ff12c48444dac8ba28ac12c0790\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.26,\"url\":\"/uploads/1eff5ff12c48444dac8ba28ac12c0790.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:40:02.833Z\",\"updated_at\":\"2020-03-15T06:40:02.833Z\"},{\"id\":72,\"name\":\"16c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a25ae077a45444528b12b13c7c7c2b1e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.58,\"url\":\"/uploads/a25ae077a45444528b12b13c7c7c2b1e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:40:02.843Z\",\"updated_at\":\"2020-03-15T06:40:02.843Z\"},{\"id\":73,\"name\":\"16d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f71d017b2b3d46ebbacec60d7b63f9ff\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.61,\"url\":\"/uploads/f71d017b2b3d46ebbacec60d7b63f9ff.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:40:02.852Z\",\"updated_at\":\"2020-03-15T06:40:02.852Z\"}],\"thumbnail\":{\"id\":69,\"name\":\"15.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6b2dca15a8f14f3f9b4f95cd6b3a6711\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6,\"url\":\"/uploads/6b2dca15a8f14f3f9b4f95cd6b3a6711.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:40:02.813Z\",\"updated_at\":\"2020-03-15T06:40:02.813Z\"}},{\"id\":17,\"title\":\"Apple Macbook Retina Display 12\",\"is_featured\":false,\"is_hot\":false,\"price\":1362.99,\"sale_price\":1200,\"vendor\":\"Young Shop\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:42:37.444Z\",\"updated_at\":\"2020-03-18T12:54:14.665Z\",\"variants\":[],\"images\":[{\"id\":75,\"name\":\"17a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2c1147dfe0994cdb980fcd6f216ac3a9\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":47.41,\"url\":\"/uploads/2c1147dfe0994cdb980fcd6f216ac3a9.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:42:37.506Z\",\"updated_at\":\"2020-03-15T06:42:37.506Z\"},{\"id\":76,\"name\":\"17b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f403deba2d2f4137bce66171471e896b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":23.48,\"url\":\"/uploads/f403deba2d2f4137bce66171471e896b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:42:37.521Z\",\"updated_at\":\"2020-03-15T06:42:37.521Z\"},{\"id\":77,\"name\":\"17c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c80df855abc949908f9dfb9bf5b96de9\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.98,\"url\":\"/uploads/c80df855abc949908f9dfb9bf5b96de9.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:42:37.530Z\",\"updated_at\":\"2020-03-15T06:42:37.530Z\"},{\"id\":78,\"name\":\"17d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1df60e151e7940059d2949c313bccb84\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":5.54,\"url\":\"/uploads/1df60e151e7940059d2949c313bccb84.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:42:37.539Z\",\"updated_at\":\"2020-03-15T06:42:37.539Z\"}],\"thumbnail\":{\"id\":74,\"name\":\"16.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a85ac7daaa614747b209894c37a0bdbd\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.59,\"url\":\"/uploads/a85ac7daaa614747b209894c37a0bdbd.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:42:37.485Z\",\"updated_at\":\"2020-03-15T06:42:37.485Z\"}},{\"id\":18,\"title\":\"Samsung UHD TV 24inch\",\"is_featured\":false,\"is_hot\":false,\"price\":599,\"sale_price\":null,\"vendor\":\"Robert's Store\",\"review\":4,\"is_out_of_stock\":false,\"depot\":40,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T06:44:46.172Z\",\"updated_at\":\"2020-03-15T06:44:46.172Z\",\"variants\":[],\"images\":[{\"id\":80,\"name\":\"18a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2fa613328d4e4ef69fb36a281057da25\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":72.3,\"url\":\"/uploads/2fa613328d4e4ef69fb36a281057da25.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:44:46.202Z\",\"updated_at\":\"2020-03-15T06:44:46.202Z\"},{\"id\":81,\"name\":\"18b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"298c7187ba2e4459a4427149fc1c77c5\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":27.69,\"url\":\"/uploads/298c7187ba2e4459a4427149fc1c77c5.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:44:46.211Z\",\"updated_at\":\"2020-03-15T06:44:46.211Z\"},{\"id\":82,\"name\":\"18c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ecdd5aa1e85146e5b7fe7b07b7fb84f1\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":27.7,\"url\":\"/uploads/ecdd5aa1e85146e5b7fe7b07b7fb84f1.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:44:46.219Z\",\"updated_at\":\"2020-03-15T06:44:46.219Z\"},{\"id\":83,\"name\":\"18d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"bcd5916387a348d592994740de295881\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.42,\"url\":\"/uploads/bcd5916387a348d592994740de295881.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:44:46.227Z\",\"updated_at\":\"2020-03-15T06:44:46.227Z\"}],\"thumbnail\":{\"id\":79,\"name\":\"18.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a48664eaed094c769046b4128dd341e4\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.29,\"url\":\"/uploads/a48664eaed094c769046b4128dd341e4.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:44:46.192Z\",\"updated_at\":\"2020-03-15T06:44:46.192Z\"}},{\"id\":23,\"title\":\"Amcrest Security Camera in White Color\",\"is_featured\":false,\"is_hot\":false,\"price\":62.99,\"sale_price\":45.9,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T07:00:52.871Z\",\"updated_at\":\"2020-03-15T07:00:52.871Z\",\"variants\":[],\"images\":[{\"id\":103,\"name\":\"24a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4fcbfdb675614342a172da1be483724e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":38.76,\"url\":\"/uploads/4fcbfdb675614342a172da1be483724e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:00:52.919Z\",\"updated_at\":\"2020-03-15T07:00:52.919Z\"},{\"id\":104,\"name\":\"24b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ba0feb269ff041e9ba8489b63c0ad79d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":19.41,\"url\":\"/uploads/ba0feb269ff041e9ba8489b63c0ad79d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:00:52.927Z\",\"updated_at\":\"2020-03-15T07:00:52.927Z\"},{\"id\":105,\"name\":\"24c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"7ed9a1fcc0814f78bf3ce9941fffcc5c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":20.22,\"url\":\"/uploads/7ed9a1fcc0814f78bf3ce9941fffcc5c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:00:52.935Z\",\"updated_at\":\"2020-03-15T07:00:52.935Z\"},{\"id\":106,\"name\":\"24d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"48f249386e604cb69c56a6dfd893d364\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":15.15,\"url\":\"/uploads/48f249386e604cb69c56a6dfd893d364.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:00:52.943Z\",\"updated_at\":\"2020-03-15T07:00:52.943Z\"}],\"thumbnail\":{\"id\":102,\"name\":\"22.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"bb783d18223044cca198d84a4e0e3191\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.24,\"url\":\"/uploads/bb783d18223044cca198d84a4e0e3191.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:00:52.903Z\",\"updated_at\":\"2020-03-15T07:00:52.903Z\"}},{\"id\":24,\"title\":\"DJI Phantom 4 Quadcopter Camera\",\"is_featured\":false,\"is_hot\":false,\"price\":1207.15,\"sale_price\":945.9,\"vendor\":\"Go Pro\",\"review\":5,\"is_out_of_stock\":false,\"depot\":65,\"inventory\":70,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T07:06:17.229Z\",\"updated_at\":\"2020-03-15T07:06:17.229Z\",\"variants\":[],\"images\":[{\"id\":108,\"name\":\"25a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c7f00eff80d744a3b4fbc96918deabb1\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":20.23,\"url\":\"/uploads/c7f00eff80d744a3b4fbc96918deabb1.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:06:17.280Z\",\"updated_at\":\"2020-03-15T07:06:17.280Z\"},{\"id\":109,\"name\":\"25b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6215cedde8354803817b8d0b46446865\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.75,\"url\":\"/uploads/6215cedde8354803817b8d0b46446865.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:06:17.295Z\",\"updated_at\":\"2020-03-15T07:06:17.295Z\"},{\"id\":110,\"name\":\"25c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8b54c00b8f244b87b9179e402a7639b2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.46,\"url\":\"/uploads/8b54c00b8f244b87b9179e402a7639b2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:06:17.303Z\",\"updated_at\":\"2020-03-15T07:06:17.303Z\"},{\"id\":111,\"name\":\"25d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"de6cc09f104f456b89c255b450655089\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":16.18,\"url\":\"/uploads/de6cc09f104f456b89c255b450655089.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:06:17.310Z\",\"updated_at\":\"2020-03-15T07:06:17.310Z\"}],\"thumbnail\":{\"id\":107,\"name\":\"23.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f5e300388365470aae6f894f4f0f5c61\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":3.74,\"url\":\"/uploads/f5e300388365470aae6f894f4f0f5c61.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T07:06:17.262Z\",\"updated_at\":\"2020-03-15T07:06:17.262Z\"}},{\"id\":31,\"title\":\"Samsung Gear VR Virtual Reality Headset\",\"is_featured\":false,\"is_hot\":false,\"price\":320,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":1,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T09:05:44.603Z\",\"updated_at\":\"2020-03-15T09:05:44.603Z\",\"variants\":[],\"images\":[{\"id\":139,\"name\":\"32a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"30b225eb781448bb96b4eb0e585de1ba\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":33.87,\"url\":\"/uploads/30b225eb781448bb96b4eb0e585de1ba.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:05:44.630Z\",\"updated_at\":\"2020-03-15T09:05:44.630Z\"},{\"id\":140,\"name\":\"32b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d74002e783b441c4ae0bfd35b16a56fc\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":12.9,\"url\":\"/uploads/d74002e783b441c4ae0bfd35b16a56fc.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:05:44.637Z\",\"updated_at\":\"2020-03-15T09:05:44.637Z\"},{\"id\":141,\"name\":\"32c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f3f8a64c9ebd4035aa753650a4ed48d0\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.25,\"url\":\"/uploads/f3f8a64c9ebd4035aa753650a4ed48d0.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:05:44.650Z\",\"updated_at\":\"2020-03-15T09:05:44.650Z\"},{\"id\":142,\"name\":\"32d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"99e3308b7d1a4bbf814ce67329001c39\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.95,\"url\":\"/uploads/99e3308b7d1a4bbf814ce67329001c39.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:05:44.658Z\",\"updated_at\":\"2020-03-15T09:05:44.658Z\"}],\"thumbnail\":{\"id\":138,\"name\":\"4.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"27c756b633404bf6bc734557a90e3baa\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.52,\"url\":\"/uploads/27c756b633404bf6bc734557a90e3baa.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:05:44.620Z\",\"updated_at\":\"2020-03-15T09:05:44.620Z\"}},{\"id\":42,\"title\":\"Gopro Hero 4 Sliver Wireless, 4k HD\",\"is_featured\":false,\"is_hot\":false,\"price\":510,\"sale_price\":500.99,\"vendor\":\"Go Pro\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T09:49:14.357Z\",\"updated_at\":\"2020-03-15T09:49:14.357Z\",\"variants\":[],\"images\":[{\"id\":164,\"name\":\"18.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c81b5f934b8842a19f80eb94b66dbacf\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.09,\"url\":\"/uploads/c81b5f934b8842a19f80eb94b66dbacf.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:49:14.387Z\",\"updated_at\":\"2020-03-15T09:49:14.387Z\"}],\"thumbnail\":{\"id\":163,\"name\":\"18.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3a99112514724b59a18c48fa6a3569d3\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.09,\"url\":\"/uploads/3a99112514724b59a18c48fa6a3569d3.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:49:14.376Z\",\"updated_at\":\"2020-03-15T09:49:14.376Z\"}},{\"id\":61,\"title\":\"Apple MacBook Air Retina 13.3-Inch Laptop\",\"is_featured\":false,\"is_hot\":false,\"price\":1120,\"sale_price\":1020.99,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-18T04:29:19.122Z\",\"updated_at\":\"2020-03-18T04:29:19.122Z\",\"variants\":[],\"images\":[{\"id\":240,\"name\":\"3.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6323ba741e89407abde3c2b813a7b958\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.53,\"url\":\"/uploads/6323ba741e89407abde3c2b813a7b958.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:29:19.153Z\",\"updated_at\":\"2020-03-18T04:29:19.153Z\"}],\"thumbnail\":{\"id\":239,\"name\":\"3.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a4dc298d307e401c9f829d269a9a97a4\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.53,\"url\":\"/uploads/a4dc298d307e401c9f829d269a9a97a4.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:29:19.140Z\",\"updated_at\":\"2020-03-18T04:29:19.140Z\"}},{\"id\":66,\"title\":\"Apple MacBook Air Retina 12-Inch Laptop\",\"is_featured\":false,\"is_hot\":false,\"price\":942.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T05:37:01.843Z\",\"updated_at\":\"2020-03-18T05:37:01.843Z\",\"variants\":[],\"images\":[{\"id\":259,\"name\":\"67a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6dc62d368b0a4a77803c7abd30ecc540\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":61.32,\"url\":\"/uploads/6dc62d368b0a4a77803c7abd30ecc540.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:37:01.873Z\",\"updated_at\":\"2020-03-18T05:37:01.873Z\"},{\"id\":260,\"name\":\"67b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"69dd0520caba4f14b8630e4db8db4e86\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.22,\"url\":\"/uploads/69dd0520caba4f14b8630e4db8db4e86.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:37:01.882Z\",\"updated_at\":\"2020-03-18T05:37:01.882Z\"},{\"id\":261,\"name\":\"67c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"161c3e2cf6b6407aa96e0a7570358146\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":22.04,\"url\":\"/uploads/161c3e2cf6b6407aa96e0a7570358146.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:37:01.890Z\",\"updated_at\":\"2020-03-18T05:37:01.890Z\"},{\"id\":262,\"name\":\"67d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b4cfc0a8e6f64b96b3f6f5ccf6eac770\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.66,\"url\":\"/uploads/b4cfc0a8e6f64b96b3f6f5ccf6eac770.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:37:01.898Z\",\"updated_at\":\"2020-03-18T05:37:01.898Z\"}],\"thumbnail\":{\"id\":258,\"name\":\"12.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b8c8108591324725abc436cc899df220\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.56,\"url\":\"/uploads/b8c8108591324725abc436cc899df220.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:37:01.862Z\",\"updated_at\":\"2020-03-18T05:37:01.862Z\"}},{\"id\":72,\"title\":\"HP Chromebook CB 10014 Desktop\",\"is_featured\":false,\"is_hot\":false,\"price\":820.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T05:49:55.032Z\",\"updated_at\":\"2020-03-18T05:49:55.032Z\",\"variants\":[],\"images\":[{\"id\":287,\"name\":\"73a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a71fa14e97ef4317ae248c78247720cf\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":25.14,\"url\":\"/uploads/a71fa14e97ef4317ae248c78247720cf.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:49:55.087Z\",\"updated_at\":\"2020-03-18T05:49:55.087Z\"},{\"id\":288,\"name\":\"73b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"280d9fae269246568406ef5aac860795\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":27.11,\"url\":\"/uploads/280d9fae269246568406ef5aac860795.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:49:55.099Z\",\"updated_at\":\"2020-03-18T05:49:55.099Z\"},{\"id\":289,\"name\":\"73c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"33a5e8a71e7841519f62ac215b3a3a50\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.13,\"url\":\"/uploads/33a5e8a71e7841519f62ac215b3a3a50.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:49:55.119Z\",\"updated_at\":\"2020-03-18T05:49:55.119Z\"},{\"id\":290,\"name\":\"73d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ed02ef12245647ecbae125ad1d2c6049\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.4,\"url\":\"/uploads/ed02ef12245647ecbae125ad1d2c6049.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:49:55.131Z\",\"updated_at\":\"2020-03-18T05:49:55.131Z\"}],\"thumbnail\":{\"id\":286,\"name\":\"18.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f73d332d3a074a44af99b073c922b24f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.11,\"url\":\"/uploads/f73d332d3a074a44af99b073c922b24f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:49:55.070Z\",\"updated_at\":\"2020-03-18T05:49:55.070Z\"}}]},{\"id\":6,\"name\":\"Jewelry & Watches\",\"slug\":\"jewelry-and-watches\",\"description\":null,\"created_at\":\"2020-03-14T10:26:39.769Z\",\"updated_at\":\"2020-03-14T10:26:39.769Z\",\"products\":[{\"id\":14,\"title\":\"MVMTH Classical Leather Watch In Black\",\"is_featured\":false,\"is_hot\":false,\"price\":62.99,\"sale_price\":57.99,\"vendor\":\"Young Shop\",\"review\":5,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:34:26.192Z\",\"updated_at\":\"2020-03-15T06:34:26.192Z\",\"variants\":[],\"images\":[{\"id\":60,\"name\":\"14a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3ac851d95c86433b8fcc50600c917036\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":37.78,\"url\":\"/uploads/3ac851d95c86433b8fcc50600c917036.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:34:26.237Z\",\"updated_at\":\"2020-03-15T06:34:26.237Z\"},{\"id\":61,\"name\":\"14b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ebe0db165640431d9c8fd683f3258663\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":22.93,\"url\":\"/uploads/ebe0db165640431d9c8fd683f3258663.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:34:26.244Z\",\"updated_at\":\"2020-03-15T06:34:26.244Z\"},{\"id\":62,\"name\":\"14c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3f385d0f210e4ee88ed91de38d36470e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":16.68,\"url\":\"/uploads/3f385d0f210e4ee88ed91de38d36470e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:34:26.262Z\",\"updated_at\":\"2020-03-15T06:34:26.262Z\"}],\"thumbnail\":{\"id\":59,\"name\":\"13.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5a88e8516a6e44cb86ba41516dca0d56\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.62,\"url\":\"/uploads/5a88e8516a6e44cb86ba41516dca0d56.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:34:26.226Z\",\"updated_at\":\"2020-03-15T06:34:26.226Z\"}}]},{\"id\":7,\"name\":\"Phones & Accessories\",\"slug\":\"phones-and-accessories\",\"description\":null,\"created_at\":\"2020-03-14T10:26:54.185Z\",\"updated_at\":\"2020-03-14T10:26:54.185Z\",\"products\":[{\"id\":1,\"title\":\"Apple iPhone Retina 6s Plus 32GB\",\"is_featured\":null,\"is_hot\":null,\"price\":640.5,\"sale_price\":null,\"vendor\":\"ROBERT’S STORE\",\"review\":5,\"is_out_of_stock\":null,\"depot\":80,\"inventory\":100,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-14T10:34:56.811Z\",\"updated_at\":\"2020-03-14T10:39:05.919Z\",\"variants\":[],\"images\":[{\"id\":1,\"name\":\"1a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"114071762b454d09aca0e0a95ad3885d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.78,\"url\":\"/uploads/114071762b454d09aca0e0a95ad3885d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-14T10:39:17.429Z\",\"updated_at\":\"2020-03-14T10:39:17.429Z\"},{\"id\":2,\"name\":\"1c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f73c23a548694e8fb0435aa0644cc570\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.88,\"url\":\"/uploads/f73c23a548694e8fb0435aa0644cc570.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-14T10:39:17.444Z\",\"updated_at\":\"2020-03-14T10:39:17.444Z\"},{\"id\":3,\"name\":\"1b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"af86c8d6136b4bb8805354995c3e6ed8\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.5,\"url\":\"/uploads/af86c8d6136b4bb8805354995c3e6ed8.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-14T10:39:17.458Z\",\"updated_at\":\"2020-03-14T10:39:17.458Z\"}],\"thumbnail\":{\"id\":4,\"name\":\"1a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5a1586c7d04646fda4575e5af5c16c30\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.78,\"url\":\"/uploads/5a1586c7d04646fda4575e5af5c16c30.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-14T10:41:20.970Z\",\"updated_at\":\"2020-03-14T10:41:20.970Z\"}},{\"id\":2,\"title\":\"Apple iPhone Retina 6s Plus 64GB\",\"is_featured\":false,\"is_hot\":false,\"price\":1150,\"sale_price\":null,\"vendor\":\"Young Shop\",\"review\":4,\"is_out_of_stock\":false,\"depot\":80,\"inventory\":100,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T05:47:28.790Z\",\"updated_at\":\"2020-03-15T06:03:15.417Z\",\"variants\":[],\"images\":[{\"id\":6,\"name\":\"1a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0e9b9750228b421aafe324f6f9b36304\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.78,\"url\":\"/uploads/0e9b9750228b421aafe324f6f9b36304.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:47:28.833Z\",\"updated_at\":\"2020-03-15T05:47:28.833Z\"},{\"id\":7,\"name\":\"1b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"99cdb1e5a2874365bab8f49ea1fc7070\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.5,\"url\":\"/uploads/99cdb1e5a2874365bab8f49ea1fc7070.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:47:28.857Z\",\"updated_at\":\"2020-03-15T05:47:28.857Z\"},{\"id\":8,\"name\":\"1c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2ed1134b99b146feb6245f8e07201ec8\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.88,\"url\":\"/uploads/2ed1134b99b146feb6245f8e07201ec8.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:47:28.869Z\",\"updated_at\":\"2020-03-15T05:47:28.869Z\"}],\"thumbnail\":{\"id\":5,\"name\":\"1.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4c07bca3f13444688823a1c099410884\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":9.04,\"url\":\"/uploads/4c07bca3f13444688823a1c099410884.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T05:47:28.819Z\",\"updated_at\":\"2020-03-15T05:47:28.819Z\"}},{\"id\":15,\"title\":\"Beat Spill 2.0 Wireless Speaker – White\",\"is_featured\":false,\"is_hot\":false,\"price\":62.99,\"sale_price\":57.99,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:37:17.824Z\",\"updated_at\":\"2020-03-15T06:37:17.824Z\",\"variants\":[],\"images\":[{\"id\":64,\"name\":\"1.png\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"bbb75430607f4d43ad26e4467ebdc524\",\"ext\":\".png\",\"mime\":\"image/png\",\"size\":2.55,\"url\":\"/uploads/bbb75430607f4d43ad26e4467ebdc524.png\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:37:17.869Z\",\"updated_at\":\"2020-03-15T06:37:17.869Z\"},{\"id\":65,\"name\":\"2.png\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8df2b7bc798c43e3a56ba6b59c5be53a\",\"ext\":\".png\",\"mime\":\"image/png\",\"size\":2.55,\"url\":\"/uploads/8df2b7bc798c43e3a56ba6b59c5be53a.png\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:37:17.878Z\",\"updated_at\":\"2020-03-15T06:37:17.878Z\"},{\"id\":66,\"name\":\"4.png\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"88eb11d6018e498aa7f97d41d4a434d2\",\"ext\":\".png\",\"mime\":\"image/png\",\"size\":2.55,\"url\":\"/uploads/88eb11d6018e498aa7f97d41d4a434d2.png\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:37:17.887Z\",\"updated_at\":\"2020-03-15T06:37:17.887Z\"},{\"id\":67,\"name\":\"5.png\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9e94caa14f78425aaaaa699d8412a8cb\",\"ext\":\".png\",\"mime\":\"image/png\",\"size\":2.55,\"url\":\"/uploads/9e94caa14f78425aaaaa699d8412a8cb.png\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:37:17.896Z\",\"updated_at\":\"2020-03-15T06:37:17.896Z\"},{\"id\":68,\"name\":\"3.png\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"35afd31625dc46a48050b0f918897eaf\",\"ext\":\".png\",\"mime\":\"image/png\",\"size\":2.55,\"url\":\"/uploads/35afd31625dc46a48050b0f918897eaf.png\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:37:17.912Z\",\"updated_at\":\"2020-03-15T06:37:17.912Z\"}],\"thumbnail\":{\"id\":63,\"name\":\"14.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3ca33b80916943f49a5af0a84ab2ef15\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.24,\"url\":\"/uploads/3ca33b80916943f49a5af0a84ab2ef15.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:37:17.857Z\",\"updated_at\":\"2020-03-15T06:37:17.857Z\"}},{\"id\":22,\"title\":\"Edifier Powered Bookshelf Speakers\",\"is_featured\":false,\"is_hot\":false,\"price\":96,\"sale_price\":85,\"vendor\":\"Young Shop\",\"review\":5,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":65,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:57:47.163Z\",\"updated_at\":\"2020-03-15T06:57:47.163Z\",\"variants\":[],\"images\":[{\"id\":98,\"name\":\"22a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8781ca71d80847979441fe7dc8b94fa9\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":68.23,\"url\":\"/uploads/8781ca71d80847979441fe7dc8b94fa9.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:57:47.213Z\",\"updated_at\":\"2020-03-15T06:57:47.213Z\"},{\"id\":99,\"name\":\"22b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"bde411ee582c4c86812e06dd5252c188\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":24.46,\"url\":\"/uploads/bde411ee582c4c86812e06dd5252c188.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:57:47.230Z\",\"updated_at\":\"2020-03-15T06:57:47.230Z\"},{\"id\":100,\"name\":\"22c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f2a178431d59495791d2030dc6900304\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":38.11,\"url\":\"/uploads/f2a178431d59495791d2030dc6900304.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:57:47.237Z\",\"updated_at\":\"2020-03-15T06:57:47.237Z\"},{\"id\":101,\"name\":\"22d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2bb3160bbb234b93b2210ff505090e87\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":18.81,\"url\":\"/uploads/2bb3160bbb234b93b2210ff505090e87.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:57:47.245Z\",\"updated_at\":\"2020-03-15T06:57:47.245Z\"}],\"thumbnail\":{\"id\":97,\"name\":\"21.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"51a0ff71f98649af8b17284ed14f955d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10,\"url\":\"/uploads/51a0ff71f98649af8b17284ed14f955d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:57:47.203Z\",\"updated_at\":\"2020-03-15T06:57:47.203Z\"}},{\"id\":43,\"title\":\"Nikon Coolpix 24 Megapixel Camera\",\"is_featured\":false,\"is_hot\":false,\"price\":393.38,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T09:51:05.087Z\",\"updated_at\":\"2020-03-15T09:51:05.087Z\",\"variants\":[],\"images\":[{\"id\":166,\"name\":\"44a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c8ff3afb2eef49b99c8abc0f1bbf3563\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":41.72,\"url\":\"/uploads/c8ff3afb2eef49b99c8abc0f1bbf3563.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:51:05.119Z\",\"updated_at\":\"2020-03-15T09:51:05.119Z\"},{\"id\":167,\"name\":\"44b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"56596cdb7d034c3e99ff9daf3c464128\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":12.31,\"url\":\"/uploads/56596cdb7d034c3e99ff9daf3c464128.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:51:05.129Z\",\"updated_at\":\"2020-03-15T09:51:05.129Z\"},{\"id\":168,\"name\":\"44c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"92d14dc17dbe44169c3daa3c6f8bddd0\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.54,\"url\":\"/uploads/92d14dc17dbe44169c3daa3c6f8bddd0.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:51:05.139Z\",\"updated_at\":\"2020-03-15T09:51:05.139Z\"},{\"id\":169,\"name\":\"44d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d9fdd2a79c1540b68ae3ee84d9523a70\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.63,\"url\":\"/uploads/d9fdd2a79c1540b68ae3ee84d9523a70.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:51:05.147Z\",\"updated_at\":\"2020-03-15T09:51:05.147Z\"}],\"thumbnail\":{\"id\":165,\"name\":\"19.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d8125ce8ae8b46cb926e01daae0c0fb2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.5,\"url\":\"/uploads/d8125ce8ae8b46cb926e01daae0c0fb2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:51:05.108Z\",\"updated_at\":\"2020-03-15T09:51:05.108Z\"}},{\"id\":44,\"title\":\"Sony HD 1080, 13.5MP, White Version\",\"is_featured\":false,\"is_hot\":false,\"price\":760,\"sale_price\":625,\"vendor\":\"Young Shop\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T09:55:33.399Z\",\"updated_at\":\"2020-03-15T09:55:33.399Z\",\"variants\":[],\"images\":[{\"id\":171,\"name\":\"45a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6dab2ac788b04a5cbca7400ec03d8a38\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":28.26,\"url\":\"/uploads/6dab2ac788b04a5cbca7400ec03d8a38.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:55:33.428Z\",\"updated_at\":\"2020-03-15T09:55:33.428Z\"},{\"id\":172,\"name\":\"45b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1c026df89da0490bbe2a7afc5a99195a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":9.88,\"url\":\"/uploads/1c026df89da0490bbe2a7afc5a99195a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:55:33.438Z\",\"updated_at\":\"2020-03-15T09:55:33.438Z\"},{\"id\":173,\"name\":\"45c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4c1c99e28c794b26a047a0c87a679f98\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.65,\"url\":\"/uploads/4c1c99e28c794b26a047a0c87a679f98.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:55:33.446Z\",\"updated_at\":\"2020-03-15T09:55:33.446Z\"},{\"id\":174,\"name\":\"45d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0de96474e26645699609477fdd64b21e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":5.76,\"url\":\"/uploads/0de96474e26645699609477fdd64b21e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:55:33.455Z\",\"updated_at\":\"2020-03-15T09:55:33.455Z\"}],\"thumbnail\":{\"id\":170,\"name\":\"20.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d8789adf571d46f19ce9065da0cf64a3\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":3.72,\"url\":\"/uploads/d8789adf571d46f19ce9065da0cf64a3.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:55:33.416Z\",\"updated_at\":\"2020-03-15T09:55:33.416Z\"}},{\"id\":59,\"title\":\"Apple iPhone X 256GB T-Mobile – Black\",\"is_featured\":false,\"is_hot\":false,\"price\":1893,\"sale_price\":1389.99,\"vendor\":\"Global Store\",\"review\":5,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T18:22:07.656Z\",\"updated_at\":\"2020-03-15T18:22:07.656Z\",\"variants\":[],\"images\":[{\"id\":232,\"name\":\"1a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"addf8765d842420f8ad5f31c9cc6049c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.78,\"url\":\"/uploads/addf8765d842420f8ad5f31c9cc6049c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T18:22:07.688Z\",\"updated_at\":\"2020-03-15T18:22:07.688Z\"},{\"id\":233,\"name\":\"1b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"91f9481dda1b43059807e01c4d3d0831\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.5,\"url\":\"/uploads/91f9481dda1b43059807e01c4d3d0831.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T18:22:07.697Z\",\"updated_at\":\"2020-03-15T18:22:07.697Z\"},{\"id\":234,\"name\":\"1c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"faeb5485d91a4772a0215d19f234a12e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.88,\"url\":\"/uploads/faeb5485d91a4772a0215d19f234a12e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T18:22:07.708Z\",\"updated_at\":\"2020-03-15T18:22:07.708Z\"}],\"thumbnail\":{\"id\":231,\"name\":\"1.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b9afa9cf7f8c4ba6a6564db68f2ce90f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.35,\"url\":\"/uploads/b9afa9cf7f8c4ba6a6564db68f2ce90f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T18:22:07.676Z\",\"updated_at\":\"2020-03-15T18:22:07.676Z\"}},{\"id\":60,\"title\":\"Apple iPhone 7 Plus 128 GB – Red Color\",\"is_featured\":false,\"is_hot\":false,\"price\":893,\"sale_price\":820.99,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-18T04:27:45.620Z\",\"updated_at\":\"2020-03-18T04:27:45.620Z\",\"variants\":[],\"images\":[{\"id\":236,\"name\":\"1a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8683d4e9c40f4c3bb003123ad3b3233a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.78,\"url\":\"/uploads/8683d4e9c40f4c3bb003123ad3b3233a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:27:45.663Z\",\"updated_at\":\"2020-03-18T04:27:45.663Z\"},{\"id\":237,\"name\":\"1b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ef8b92ddea1649d7a708b82b94e1547d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.5,\"url\":\"/uploads/ef8b92ddea1649d7a708b82b94e1547d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:27:45.676Z\",\"updated_at\":\"2020-03-18T04:27:45.676Z\"},{\"id\":238,\"name\":\"1c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"7c4bc2eb18aa467bb5ac730b51a1ca5b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.88,\"url\":\"/uploads/7c4bc2eb18aa467bb5ac730b51a1ca5b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:27:45.688Z\",\"updated_at\":\"2020-03-18T04:27:45.688Z\"}],\"thumbnail\":{\"id\":235,\"name\":\"2.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"490bd709c0be4545b29121b244ff4516\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.91,\"url\":\"/uploads/490bd709c0be4545b29121b244ff4516.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:27:45.648Z\",\"updated_at\":\"2020-03-18T04:27:45.648Z\"}},{\"id\":63,\"title\":\"Samsung Gallaxy A8 8GB Ram – Sliver Version\",\"is_featured\":false,\"is_hot\":false,\"price\":592,\"sale_price\":542.99,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":80,\"inventory\":90,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-18T04:32:53.963Z\",\"updated_at\":\"2020-03-18T04:32:53.963Z\",\"variants\":[],\"images\":[{\"id\":244,\"name\":\"64a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"708ee0dd258046cb97c11527cf61e848\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":59.99,\"url\":\"/uploads/708ee0dd258046cb97c11527cf61e848.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:32:53.999Z\",\"updated_at\":\"2020-03-18T04:32:53.999Z\"},{\"id\":245,\"name\":\"64b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f617556918cf46498ed7c6318c48da72\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":17.47,\"url\":\"/uploads/f617556918cf46498ed7c6318c48da72.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:32:54.008Z\",\"updated_at\":\"2020-03-18T04:32:54.008Z\"},{\"id\":246,\"name\":\"64c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f95b63b1115f427db664f2f8095d14c7\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.59,\"url\":\"/uploads/f95b63b1115f427db664f2f8095d14c7.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:32:54.019Z\",\"updated_at\":\"2020-03-18T04:32:54.019Z\"},{\"id\":247,\"name\":\"64d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e3a28a9122ad46c0af352e4457aa4534\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":27.08,\"url\":\"/uploads/e3a28a9122ad46c0af352e4457aa4534.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:32:54.027Z\",\"updated_at\":\"2020-03-18T04:32:54.027Z\"}],\"thumbnail\":{\"id\":243,\"name\":\"6.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"44f81c8d298740b5b900799971809fea\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.74,\"url\":\"/uploads/44f81c8d298740b5b900799971809fea.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T04:32:53.989Z\",\"updated_at\":\"2020-03-18T04:32:53.989Z\"}},{\"id\":64,\"title\":\"Samsung Gallaxy A8 10GB Ram – Sliver Version\",\"is_featured\":false,\"is_hot\":false,\"price\":592,\"sale_price\":642.99,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-18T05:33:26.161Z\",\"updated_at\":\"2020-03-18T05:33:26.161Z\",\"variants\":[],\"images\":[{\"id\":249,\"name\":\"65a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0a3c28219fc74e499f3256ad77d94a55\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":59.99,\"url\":\"/uploads/0a3c28219fc74e499f3256ad77d94a55.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:33:26.190Z\",\"updated_at\":\"2020-03-18T05:33:26.190Z\"},{\"id\":250,\"name\":\"65b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"30bd54763a8a4867bd1d5c3d786e26b5\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":17.47,\"url\":\"/uploads/30bd54763a8a4867bd1d5c3d786e26b5.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:33:26.198Z\",\"updated_at\":\"2020-03-18T05:33:26.198Z\"},{\"id\":251,\"name\":\"65c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4a17b2711b3b422694466bc5492ab828\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.59,\"url\":\"/uploads/4a17b2711b3b422694466bc5492ab828.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:33:26.210Z\",\"updated_at\":\"2020-03-18T05:33:26.210Z\"},{\"id\":252,\"name\":\"65d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"48971dad13ae4a4aa765ba6ae56951fa\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":27.08,\"url\":\"/uploads/48971dad13ae4a4aa765ba6ae56951fa.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:33:26.217Z\",\"updated_at\":\"2020-03-18T05:33:26.217Z\"}],\"thumbnail\":{\"id\":248,\"name\":\"7.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"86c8fe9d6d6648e99a6015727d421e27\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.72,\"url\":\"/uploads/86c8fe9d6d6648e99a6015727d421e27.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:33:26.180Z\",\"updated_at\":\"2020-03-18T05:33:26.180Z\"}},{\"id\":65,\"title\":\"Yuntab K107 10.1 Inch Quad Core CPU MT6580\",\"is_featured\":false,\"is_hot\":false,\"price\":99.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T05:35:13.796Z\",\"updated_at\":\"2020-03-18T05:35:13.796Z\",\"variants\":[],\"images\":[{\"id\":254,\"name\":\"66a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"bc0584820ba146688921e5df66ef0aa1\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":79.12,\"url\":\"/uploads/bc0584820ba146688921e5df66ef0aa1.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:35:13.827Z\",\"updated_at\":\"2020-03-18T05:35:13.827Z\"},{\"id\":255,\"name\":\"66b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1838261f7afd46149a41e7b322955b7f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":19.05,\"url\":\"/uploads/1838261f7afd46149a41e7b322955b7f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:35:13.835Z\",\"updated_at\":\"2020-03-18T05:35:13.835Z\"},{\"id\":256,\"name\":\"66c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"62ed690a4d744c6fa2a0d62c02159252\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":15.88,\"url\":\"/uploads/62ed690a4d744c6fa2a0d62c02159252.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:35:13.843Z\",\"updated_at\":\"2020-03-18T05:35:13.843Z\"},{\"id\":257,\"name\":\"66d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ce7ad3a37f3f4acaadf8e5c9cf996792\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.33,\"url\":\"/uploads/ce7ad3a37f3f4acaadf8e5c9cf996792.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:35:13.851Z\",\"updated_at\":\"2020-03-18T05:35:13.851Z\"}],\"thumbnail\":{\"id\":253,\"name\":\"7.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"7df00b4c32074b9c85b464f3dbbbab2e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.72,\"url\":\"/uploads/7df00b4c32074b9c85b464f3dbbbab2e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:35:13.815Z\",\"updated_at\":\"2020-03-18T05:35:13.815Z\"}},{\"id\":67,\"title\":\"Bose Ear-Phone Bluetooth & Wireless\",\"is_featured\":false,\"is_hot\":false,\"price\":392.99,\"sale_price\":null,\"vendor\":\"Young Shop\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T05:38:55.759Z\",\"updated_at\":\"2020-03-18T05:38:55.759Z\",\"variants\":[],\"images\":[{\"id\":264,\"name\":\"68a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"20898b1b75ff4fcd9967794e6def5d28\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":47.86,\"url\":\"/uploads/20898b1b75ff4fcd9967794e6def5d28.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:38:55.790Z\",\"updated_at\":\"2020-03-18T05:38:55.790Z\"},{\"id\":265,\"name\":\"68b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"7a5d1d5dfc4e4c7f98dd19899c4da4da\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.04,\"url\":\"/uploads/7a5d1d5dfc4e4c7f98dd19899c4da4da.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:38:55.800Z\",\"updated_at\":\"2020-03-18T05:38:55.800Z\"},{\"id\":266,\"name\":\"68c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"05a1dc53fdf6423884f70e1693bb7451\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.82,\"url\":\"/uploads/05a1dc53fdf6423884f70e1693bb7451.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:38:55.813Z\",\"updated_at\":\"2020-03-18T05:38:55.813Z\"},{\"id\":267,\"name\":\"68d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e343e6de894e4428adc482f129f96d8f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":22.57,\"url\":\"/uploads/e343e6de894e4428adc482f129f96d8f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:38:55.837Z\",\"updated_at\":\"2020-03-18T05:38:55.837Z\"}],\"thumbnail\":{\"id\":348,\"name\":\"68a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9807d7efbaba430b9c90fc2aaa9ec175\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":47.86,\"url\":\"/uploads/9807d7efbaba430b9c90fc2aaa9ec175.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-28T12:09:41.868Z\",\"updated_at\":\"2020-03-28T12:09:41.868Z\"}},{\"id\":68,\"title\":\"iQOS 2.4 Plus Kit, Holder & Chargers – White\",\"is_featured\":false,\"is_hot\":false,\"price\":42.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T05:40:48.214Z\",\"updated_at\":\"2020-03-18T05:40:48.214Z\",\"variants\":[],\"images\":[{\"id\":269,\"name\":\"69a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2a2002069143470c8af739e13e8b8676\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":23.33,\"url\":\"/uploads/2a2002069143470c8af739e13e8b8676.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:40:48.243Z\",\"updated_at\":\"2020-03-18T05:40:48.243Z\"},{\"id\":270,\"name\":\"69b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5945f90deeef4fbbad27d6a3da5b50bc\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":11.04,\"url\":\"/uploads/5945f90deeef4fbbad27d6a3da5b50bc.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:40:48.251Z\",\"updated_at\":\"2020-03-18T05:40:48.251Z\"},{\"id\":271,\"name\":\"69c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ae6c8e5e004a4bec904dc500c0690581\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.04,\"url\":\"/uploads/ae6c8e5e004a4bec904dc500c0690581.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:40:48.259Z\",\"updated_at\":\"2020-03-18T05:40:48.259Z\"},{\"id\":272,\"name\":\"69d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e8a4f345960d47eb871a8e95f511b39f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":6.98,\"url\":\"/uploads/e8a4f345960d47eb871a8e95f511b39f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:40:48.267Z\",\"updated_at\":\"2020-03-18T05:40:48.267Z\"}],\"thumbnail\":{\"id\":268,\"name\":\"13.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"59a5c64f4d9b4d1c804bd72a1c132d02\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.17,\"url\":\"/uploads/59a5c64f4d9b4d1c804bd72a1c132d02.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:40:48.232Z\",\"updated_at\":\"2020-03-18T05:40:48.232Z\"}},{\"id\":73,\"title\":\"Acrylic Cover Case for iPhone X- (Clear)\",\"is_featured\":false,\"is_hot\":false,\"price\":49.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T05:51:16.881Z\",\"updated_at\":\"2020-03-18T05:51:16.881Z\",\"variants\":[],\"images\":[{\"id\":292,\"name\":\"74a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9060cce18215425cb932cd04807858ea\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":63,\"url\":\"/uploads/9060cce18215425cb932cd04807858ea.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:51:16.944Z\",\"updated_at\":\"2020-03-18T05:51:16.944Z\"},{\"id\":293,\"name\":\"74b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"164c1cb463f040caa92d0206c3dac9e6\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":14.11,\"url\":\"/uploads/164c1cb463f040caa92d0206c3dac9e6.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:51:16.957Z\",\"updated_at\":\"2020-03-18T05:51:16.957Z\"},{\"id\":294,\"name\":\"74c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9939d662151d49cf8703359034d3e39c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":21.53,\"url\":\"/uploads/9939d662151d49cf8703359034d3e39c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:51:16.967Z\",\"updated_at\":\"2020-03-18T05:51:16.967Z\"},{\"id\":295,\"name\":\"74d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0a20ecfcafde4344b5c84a593f6ee6ed\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":17.9,\"url\":\"/uploads/0a20ecfcafde4344b5c84a593f6ee6ed.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:51:16.977Z\",\"updated_at\":\"2020-03-18T05:51:16.977Z\"}],\"thumbnail\":{\"id\":291,\"name\":\"19.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2b1781baa5a045cd83c9d1ff5f4882e4\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.87,\"url\":\"/uploads/2b1781baa5a045cd83c9d1ff5f4882e4.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T05:51:16.924Z\",\"updated_at\":\"2020-03-18T05:51:16.924Z\"}},{\"id\":74,\"title\":\"B&O Play Mini Bluetooth Speaker\",\"is_featured\":false,\"is_hot\":false,\"price\":49.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:40:57.514Z\",\"updated_at\":\"2020-03-18T06:40:57.514Z\",\"variants\":[],\"images\":[{\"id\":297,\"name\":\"75a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"69ba5505a5c847c5b7f31faaf08ffdea\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":48.55,\"url\":\"/uploads/69ba5505a5c847c5b7f31faaf08ffdea.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:40:57.561Z\",\"updated_at\":\"2020-03-18T06:40:57.561Z\"},{\"id\":298,\"name\":\"75b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a67765518e384aa484234ef0cc3cdbff\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":32.75,\"url\":\"/uploads/a67765518e384aa484234ef0cc3cdbff.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:40:57.570Z\",\"updated_at\":\"2020-03-18T06:40:57.570Z\"},{\"id\":299,\"name\":\"75c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"2c4a27028a2d4d42914d81d28e1dbad3\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":9.32,\"url\":\"/uploads/2c4a27028a2d4d42914d81d28e1dbad3.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:40:57.580Z\",\"updated_at\":\"2020-03-18T06:40:57.580Z\"}],\"thumbnail\":{\"id\":296,\"name\":\"20.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3c3189b62d2041418a0ef3c7a12c0c9a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":5.4,\"url\":\"/uploads/3c3189b62d2041418a0ef3c7a12c0c9a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:40:57.537Z\",\"updated_at\":\"2020-03-18T06:40:57.537Z\"}},{\"id\":75,\"title\":\"Beats Mini On Ear Bluetooth, Wireless Headphone\",\"is_featured\":false,\"is_hot\":false,\"price\":64.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:42:47.008Z\",\"updated_at\":\"2020-03-18T06:42:47.008Z\",\"variants\":[],\"images\":[{\"id\":301,\"name\":\"76a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"fac9d42ab10e40679fa480bab1f25248\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":20.34,\"url\":\"/uploads/fac9d42ab10e40679fa480bab1f25248.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:42:47.047Z\",\"updated_at\":\"2020-03-18T06:42:47.047Z\"},{\"id\":302,\"name\":\"76b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"29c988a8fbf2411eb0acdd827c59a86a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.41,\"url\":\"/uploads/29c988a8fbf2411eb0acdd827c59a86a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:42:47.061Z\",\"updated_at\":\"2020-03-18T06:42:47.061Z\"},{\"id\":303,\"name\":\"76c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3a50a259ac0f42cda5affdad8a6ac8b4\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.62,\"url\":\"/uploads/3a50a259ac0f42cda5affdad8a6ac8b4.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:42:47.072Z\",\"updated_at\":\"2020-03-18T06:42:47.072Z\"},{\"id\":304,\"name\":\"76d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0375b08ca4be44f784ed68d9948fe9c2\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":3.65,\"url\":\"/uploads/0375b08ca4be44f784ed68d9948fe9c2.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:42:47.081Z\",\"updated_at\":\"2020-03-18T06:42:47.081Z\"}],\"thumbnail\":{\"id\":300,\"name\":\"21.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1ed1fb833fc942209c3f289c7cf3bb82\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":2.83,\"url\":\"/uploads/1ed1fb833fc942209c3f289c7cf3bb82.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:42:47.032Z\",\"updated_at\":\"2020-03-18T06:42:47.032Z\"}},{\"id\":76,\"title\":\"Package 2 iClever Bootscube Mini Chargers\",\"is_featured\":false,\"is_hot\":false,\"price\":12.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:44:45.187Z\",\"updated_at\":\"2020-03-18T06:44:45.187Z\",\"variants\":[],\"images\":[{\"id\":306,\"name\":\"77a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5e451ad3b3ed45949e657e7e78fd5372\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":29.83,\"url\":\"/uploads/5e451ad3b3ed45949e657e7e78fd5372.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:44:45.233Z\",\"updated_at\":\"2020-03-18T06:44:45.233Z\"},{\"id\":307,\"name\":\"77b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e5927c71f40d46a8a28eeb5533513bd0\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":18.88,\"url\":\"/uploads/e5927c71f40d46a8a28eeb5533513bd0.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:44:45.244Z\",\"updated_at\":\"2020-03-18T06:44:45.244Z\"},{\"id\":308,\"name\":\"77c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"500cb33c1b3c412493a8586bb39d007d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":18.13,\"url\":\"/uploads/500cb33c1b3c412493a8586bb39d007d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:44:45.255Z\",\"updated_at\":\"2020-03-18T06:44:45.255Z\"},{\"id\":309,\"name\":\"77d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ee0cf9f8f9404293942532ef7a6b7488\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":57.23,\"url\":\"/uploads/ee0cf9f8f9404293942532ef7a6b7488.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:44:45.268Z\",\"updated_at\":\"2020-03-18T06:44:45.268Z\"}],\"thumbnail\":{\"id\":349,\"name\":\"77a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"51721dacef7c4809af85dde08203a286\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":29.83,\"url\":\"/uploads/51721dacef7c4809af85dde08203a286.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-28T12:15:03.365Z\",\"updated_at\":\"2020-03-28T12:15:03.365Z\"}}]},{\"id\":8,\"name\":\"Sport & Outdoor\",\"slug\":\"sport-and-outdoor\",\"description\":null,\"created_at\":\"2020-03-14T10:27:15.507Z\",\"updated_at\":\"2020-03-14T10:27:15.507Z\",\"products\":[{\"id\":32,\"title\":\"Anderson Composites – Custom Hood\",\"is_featured\":false,\"is_hot\":false,\"price\":1050.5,\"sale_price\":990.99,\"vendor\":\"ROBERT’S STORE\",\"review\":2,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T09:17:42.168Z\",\"updated_at\":\"2020-03-18T12:47:03.124Z\",\"variants\":[],\"images\":[{\"id\":339,\"name\":\"1.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0272916ed6ed43d0807c545280ee2f32\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.97,\"url\":\"/uploads/0272916ed6ed43d0807c545280ee2f32.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:47:03.173Z\",\"updated_at\":\"2020-03-18T12:47:03.173Z\"}],\"thumbnail\":{\"id\":338,\"name\":\"1.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"020a68b5cdfe455e88cdd01f7500ed92\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":13.97,\"url\":\"/uploads/020a68b5cdfe455e88cdd01f7500ed92.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T12:47:03.163Z\",\"updated_at\":\"2020-03-18T12:47:03.163Z\"}}]},{\"id\":9,\"name\":\"Babies & Moms\",\"slug\":\"babies-and-moms\",\"description\":null,\"created_at\":\"2020-03-14T10:27:29.618Z\",\"updated_at\":\"2020-03-14T10:27:29.618Z\",\"products\":[]},{\"id\":10,\"name\":\"Books & Office\",\"slug\":\"books-and-office\",\"description\":null,\"created_at\":\"2020-03-14T10:27:46.112Z\",\"updated_at\":\"2020-03-14T10:27:46.112Z\",\"products\":[{\"id\":6,\"title\":\"Grand Slam Indoor Of Show Jumping Novel\",\"is_featured\":false,\"is_hot\":false,\"price\":41.99,\"sale_price\":32.99,\"vendor\":\"Robert's Store\",\"review\":4,\"is_out_of_stock\":false,\"depot\":68,\"inventory\":90,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:04:35.781Z\",\"updated_at\":\"2020-04-14T10:46:09.145Z\",\"variants\":[],\"images\":[{\"id\":24,\"name\":\"6a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5c7442b5104545afa78bfe819616d298\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":52.29,\"url\":\"/uploads/5c7442b5104545afa78bfe819616d298.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:07:56.574Z\",\"updated_at\":\"2020-03-15T06:07:56.574Z\"},{\"id\":25,\"name\":\"6a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0a9100b8791b44ff9629377856bab05a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":52.29,\"url\":\"/uploads/0a9100b8791b44ff9629377856bab05a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:07:56.593Z\",\"updated_at\":\"2020-03-15T06:07:56.593Z\"}],\"thumbnail\":{\"id\":23,\"name\":\"5.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e2132e11d3c34da89511593297697922\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.17,\"url\":\"/uploads/e2132e11d3c34da89511593297697922.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:07:56.562Z\",\"updated_at\":\"2020-03-15T06:07:56.562Z\"}}]},{\"id\":11,\"name\":\"Cars & Motocycles\",\"slug\":\"cars-and -motocycles\",\"description\":null,\"created_at\":\"2020-03-14T10:28:06.841Z\",\"updated_at\":\"2020-03-14T10:28:06.841Z\",\"products\":[{\"id\":33,\"title\":\"Evolution Sport Drilled and Slotted Brake Kit\",\"is_featured\":false,\"is_hot\":false,\"price\":50.5,\"sale_price\":45.99,\"vendor\":\"ROBERT’S STORE\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T09:21:27.133Z\",\"updated_at\":\"2020-03-15T09:21:27.133Z\",\"variants\":[],\"images\":[{\"id\":144,\"name\":\"2.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"7719665337f64edc831081e186aefef4\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":12.38,\"url\":\"/uploads/7719665337f64edc831081e186aefef4.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:21:27.184Z\",\"updated_at\":\"2020-03-15T09:21:27.184Z\"}],\"thumbnail\":{\"id\":143,\"name\":\"2.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4d89105ae491400eba47e0c4ab805f4b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":12.38,\"url\":\"/uploads/4d89105ae491400eba47e0c4ab805f4b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:21:27.159Z\",\"updated_at\":\"2020-03-15T09:21:27.159Z\"}},{\"id\":34,\"title\":\"Depo Black Housing Tail Lights Frs Brz 86\",\"is_featured\":false,\"is_hot\":false,\"price\":120.5,\"sale_price\":100.99,\"vendor\":\"Young Shop\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T09:34:41.156Z\",\"updated_at\":\"2020-03-18T12:57:42.304Z\",\"variants\":[],\"images\":[{\"id\":146,\"name\":\"3.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"74575909382f435ab65cd3ea2ab6e390\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":9.03,\"url\":\"/uploads/74575909382f435ab65cd3ea2ab6e390.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:34:41.193Z\",\"updated_at\":\"2020-03-15T09:34:41.193Z\"}],\"thumbnail\":{\"id\":145,\"name\":\"3.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1dd340948bc0400289c6c03bc644e99e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":9.03,\"url\":\"/uploads/1dd340948bc0400289c6c03bc644e99e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:34:41.182Z\",\"updated_at\":\"2020-03-15T09:34:41.182Z\"}},{\"id\":35,\"title\":\"Anderson Composites – Custom Hood\",\"is_featured\":false,\"is_hot\":false,\"price\":442.99,\"sale_price\":null,\"vendor\":\"Go Pro\",\"review\":3,\"is_out_of_stock\":false,\"depot\":40,\"inventory\":50,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T09:37:17.903Z\",\"updated_at\":\"2020-03-15T09:37:17.903Z\",\"variants\":[],\"images\":[{\"id\":148,\"name\":\"36a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"12cfa605c95c48d080be5bfe66d6f091\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":51.22,\"url\":\"/uploads/12cfa605c95c48d080be5bfe66d6f091.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:37:17.942Z\",\"updated_at\":\"2020-03-15T09:37:17.942Z\"},{\"id\":149,\"name\":\"36b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"a999ffaca996462cbd4345b07c6b5571\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":52.83,\"url\":\"/uploads/a999ffaca996462cbd4345b07c6b5571.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:37:17.952Z\",\"updated_at\":\"2020-03-15T09:37:17.952Z\"},{\"id\":150,\"name\":\"36c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"abee37e1ac8b4b05ba620ee1329a5ef0\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":44.91,\"url\":\"/uploads/abee37e1ac8b4b05ba620ee1329a5ef0.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:37:17.961Z\",\"updated_at\":\"2020-03-15T09:37:17.961Z\"}],\"thumbnail\":{\"id\":147,\"name\":\"4.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"70a4149f0f15483b93737b522a0a9a44\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":8.13,\"url\":\"/uploads/70a4149f0f15483b93737b522a0a9a44.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:37:17.924Z\",\"updated_at\":\"2020-03-15T09:37:17.924Z\"}},{\"id\":36,\"title\":\"Simpson Polymer White Racing Helmet\",\"is_featured\":false,\"is_hot\":false,\"price\":770.5,\"sale_price\":625.99,\"vendor\":\"Go Pro\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T09:39:12.533Z\",\"updated_at\":\"2020-03-15T09:39:12.533Z\",\"variants\":[],\"images\":[{\"id\":152,\"name\":\"5.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"54405f9aabac40328f3b54205697d2ba\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.4,\"url\":\"/uploads/54405f9aabac40328f3b54205697d2ba.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:39:12.574Z\",\"updated_at\":\"2020-03-15T09:39:12.574Z\"}],\"thumbnail\":{\"id\":151,\"name\":\"5.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d3d6a340ec114211b670de5fb72955e8\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":7.4,\"url\":\"/uploads/d3d6a340ec114211b670de5fb72955e8.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:39:12.563Z\",\"updated_at\":\"2020-03-15T09:39:12.563Z\"}},{\"id\":37,\"title\":\"Gibson – Double Skull Exhaust System\",\"is_featured\":false,\"is_hot\":true,\"price\":1055.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-15T09:40:52.204Z\",\"updated_at\":\"2020-03-15T09:40:52.204Z\",\"variants\":[],\"images\":[{\"id\":154,\"name\":\"38a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6e511bd80804431aadd15aeb29172d2d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":30.42,\"url\":\"/uploads/6e511bd80804431aadd15aeb29172d2d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:40:52.241Z\",\"updated_at\":\"2020-03-15T09:40:52.241Z\"},{\"id\":155,\"name\":\"38b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"366848b6e7a343b5bc6dcc2f11672c8b\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":5.49,\"url\":\"/uploads/366848b6e7a343b5bc6dcc2f11672c8b.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:40:52.252Z\",\"updated_at\":\"2020-03-15T09:40:52.252Z\"},{\"id\":156,\"name\":\"38c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"452ecfaa1e3c40d8ad417efe80a297e8\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":19.58,\"url\":\"/uploads/452ecfaa1e3c40d8ad417efe80a297e8.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:40:52.263Z\",\"updated_at\":\"2020-03-15T09:40:52.263Z\"}],\"thumbnail\":{\"id\":153,\"name\":\"6.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"1ebf2224f4724391a3a75a5f4dce4599\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":4.45,\"url\":\"/uploads/1ebf2224f4724391a3a75a5f4dce4599.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T09:40:52.229Z\",\"updated_at\":\"2020-03-15T09:40:52.229Z\"}}]},{\"id\":12,\"name\":\"Fruits\",\"slug\":\"fruits\",\"description\":null,\"created_at\":\"2020-03-18T06:46:56.197Z\",\"updated_at\":\"2020-04-17T07:04:19.973Z\",\"products\":[{\"id\":77,\"title\":\"Locally Grown Strawberries, 1 Pint\",\"is_featured\":false,\"is_hot\":false,\"price\":26.95,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":3,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:46:38.548Z\",\"updated_at\":\"2020-03-18T06:46:38.548Z\",\"variants\":[],\"images\":[{\"id\":311,\"name\":\"78a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"48efb67ec1c743a39e370b43bbbd7c4f\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":583.8,\"url\":\"/uploads/48efb67ec1c743a39e370b43bbbd7c4f.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:46:38.593Z\",\"updated_at\":\"2020-03-18T06:46:38.593Z\"},{\"id\":312,\"name\":\"78b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"39a87fcc433e4e8f95ef6a4f22926482\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":34.87,\"url\":\"/uploads/39a87fcc433e4e8f95ef6a4f22926482.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:46:38.602Z\",\"updated_at\":\"2020-03-18T06:46:38.602Z\"}],\"thumbnail\":{\"id\":310,\"name\":\"78a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"83d058602dee4b2d99ccef21300f8f35\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":583.8,\"url\":\"/uploads/83d058602dee4b2d99ccef21300f8f35.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:46:38.580Z\",\"updated_at\":\"2020-03-18T06:46:38.580Z\"}},{\"id\":78,\"title\":\"Organic Oranges Valencia 1kg\",\"is_featured\":false,\"is_hot\":false,\"price\":25.99,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":50,\"inventory\":60,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:49:57.368Z\",\"updated_at\":\"2020-03-18T06:49:57.368Z\",\"variants\":[],\"images\":[{\"id\":314,\"name\":\"79a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"8dc27d339178495793f41446e7e2f5be\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":305.41,\"url\":\"/uploads/8dc27d339178495793f41446e7e2f5be.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:49:57.403Z\",\"updated_at\":\"2020-03-18T06:49:57.403Z\"}],\"thumbnail\":{\"id\":313,\"name\":\"79a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"bbd8f6aa2a2849f3ba80d5c6f9337b51\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":305.41,\"url\":\"/uploads/bbd8f6aa2a2849f3ba80d5c6f9337b51.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:49:57.391Z\",\"updated_at\":\"2020-03-18T06:49:57.391Z\"}},{\"id\":79,\"title\":\"Pineapple (Tropical Gold)\",\"is_featured\":false,\"is_hot\":false,\"price\":2.89,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":70,\"inventory\":80,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:51:19.973Z\",\"updated_at\":\"2020-03-18T06:51:19.973Z\",\"variants\":[],\"images\":[{\"id\":316,\"name\":\"80a.jpeg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"baef1533117e4781890e15d0271a417a\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"size\":237.83,\"url\":\"/uploads/baef1533117e4781890e15d0271a417a.jpeg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:51:20.007Z\",\"updated_at\":\"2020-03-18T06:51:20.007Z\"},{\"id\":317,\"name\":\"80b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"4acf953a04e04faf8a487c723d202eef\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":28.27,\"url\":\"/uploads/4acf953a04e04faf8a487c723d202eef.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:51:20.023Z\",\"updated_at\":\"2020-03-18T06:51:20.023Z\"},{\"id\":318,\"name\":\"80c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"b62251ec55be493d987a32806f709d2d\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":41.26,\"url\":\"/uploads/b62251ec55be493d987a32806f709d2d.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:51:20.033Z\",\"updated_at\":\"2020-03-18T06:51:20.033Z\"},{\"id\":319,\"name\":\"80d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e14ba895134e4f008f9cd5ed0df5a471\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":27.29,\"url\":\"/uploads/e14ba895134e4f008f9cd5ed0df5a471.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:51:20.042Z\",\"updated_at\":\"2020-03-18T06:51:20.042Z\"}],\"thumbnail\":{\"id\":315,\"name\":\"80a.jpeg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"72a1764a51f0415e8d7e8be260848e95\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"size\":237.83,\"url\":\"/uploads/72a1764a51f0415e8d7e8be260848e95.jpeg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:51:19.995Z\",\"updated_at\":\"2020-03-18T06:51:19.995Z\"}},{\"id\":81,\"title\":\"MariGold 100% Juice Milk 350ml\",\"is_featured\":false,\"is_hot\":false,\"price\":3.95,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:56:10.273Z\",\"updated_at\":\"2020-03-18T06:56:10.273Z\",\"variants\":[],\"images\":[{\"id\":323,\"name\":\"82a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9e488f0e25cf4501a4fe04838e708be9\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":98.07,\"url\":\"/uploads/9e488f0e25cf4501a4fe04838e708be9.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:56:10.314Z\",\"updated_at\":\"2020-03-18T06:56:10.314Z\"}],\"thumbnail\":{\"id\":322,\"name\":\"82a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e10a8eeffbaa4bfab8898cb9342bb270\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":98.07,\"url\":\"/uploads/e10a8eeffbaa4bfab8898cb9342bb270.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:56:10.292Z\",\"updated_at\":\"2020-03-18T06:56:10.292Z\"}},{\"id\":82,\"title\":\"HomeSoy Soya Milk Originall\",\"is_featured\":false,\"is_hot\":false,\"price\":9.85,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:57:16.979Z\",\"updated_at\":\"2020-03-18T06:57:16.979Z\",\"variants\":[],\"images\":[{\"id\":325,\"name\":\"83a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"f4fbe84e5b264982af03f806e044a621\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":107.59,\"url\":\"/uploads/f4fbe84e5b264982af03f806e044a621.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:57:17.011Z\",\"updated_at\":\"2020-03-18T06:57:17.011Z\"}],\"thumbnail\":{\"id\":324,\"name\":\"83a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"019276ce1e444623833b0c1808da707c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":107.59,\"url\":\"/uploads/019276ce1e444623833b0c1808da707c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:57:17.002Z\",\"updated_at\":\"2020-03-18T06:57:17.002Z\"}},{\"id\":83,\"title\":\"Australia Banana 16 Pack 2.5 kg\",\"is_featured\":false,\"is_hot\":false,\"price\":12.85,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":3,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:58:34.168Z\",\"updated_at\":\"2020-03-18T06:58:34.168Z\",\"variants\":[],\"images\":[{\"id\":327,\"name\":\"84a.jpeg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"ffd65dab221a4146b8ddeb0bbf908573\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"size\":117.79,\"url\":\"/uploads/ffd65dab221a4146b8ddeb0bbf908573.jpeg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:58:34.301Z\",\"updated_at\":\"2020-03-18T06:58:34.301Z\"}],\"thumbnail\":{\"id\":326,\"name\":\"84a.jpeg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3ea5019caa45409f8a9a770a02181fe2\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"size\":117.79,\"url\":\"/uploads/3ea5019caa45409f8a9a770a02181fe2.jpeg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:58:34.289Z\",\"updated_at\":\"2020-03-18T06:58:34.289Z\"}},{\"id\":84,\"title\":\"Augason Farms Freeze Dried Beef Chunks\",\"is_featured\":false,\"is_hot\":false,\"price\":67.85,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:59:49.553Z\",\"updated_at\":\"2020-03-18T06:59:49.553Z\",\"variants\":[],\"images\":[{\"id\":329,\"name\":\"85a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0e603357f01e40b3a3cd871a70ebe142\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":527.02,\"url\":\"/uploads/0e603357f01e40b3a3cd871a70ebe142.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:59:49.615Z\",\"updated_at\":\"2020-03-18T06:59:49.615Z\"},{\"id\":330,\"name\":\"85b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3c5cf1a734e4463a8332a0a0d908a0fe\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":43.85,\"url\":\"/uploads/3c5cf1a734e4463a8332a0a0d908a0fe.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:59:49.628Z\",\"updated_at\":\"2020-03-18T06:59:49.628Z\"},{\"id\":331,\"name\":\"85c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"130a06e89e18489f997f89adb45df47c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":61.59,\"url\":\"/uploads/130a06e89e18489f997f89adb45df47c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:59:49.638Z\",\"updated_at\":\"2020-03-18T06:59:49.638Z\"},{\"id\":332,\"name\":\"85d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"956b710c05964593a93ea91052b7f7fe\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":63.88,\"url\":\"/uploads/956b710c05964593a93ea91052b7f7fe.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:59:49.657Z\",\"updated_at\":\"2020-03-18T06:59:49.657Z\"}],\"thumbnail\":{\"id\":328,\"name\":\"85a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c57b47015b9a4c37a67b614f16202829\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":527.02,\"url\":\"/uploads/c57b47015b9a4c37a67b614f16202829.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:59:49.590Z\",\"updated_at\":\"2020-03-18T06:59:49.590Z\"}},{\"id\":85,\"title\":\"Vita Coco Coconut Water (Pack of 12)\",\"is_featured\":false,\"is_hot\":false,\"price\":25.89,\"sale_price\":20.08,\"vendor\":\"Global Office\",\"review\":5,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-18T07:01:10.046Z\",\"updated_at\":\"2020-03-18T07:01:10.046Z\",\"variants\":[],\"images\":[{\"id\":334,\"name\":\"86a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"3ca8ef0cc54d46ff87594b803cef3c43\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":227.87,\"url\":\"/uploads/3ca8ef0cc54d46ff87594b803cef3c43.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T07:01:10.085Z\",\"updated_at\":\"2020-03-18T07:01:10.085Z\"},{\"id\":335,\"name\":\"86b.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"6ed164482d6a4693a4e88c2c4ba3aead\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":23.17,\"url\":\"/uploads/6ed164482d6a4693a4e88c2c4ba3aead.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T07:01:10.100Z\",\"updated_at\":\"2020-03-18T07:01:10.100Z\"},{\"id\":336,\"name\":\"86c.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9ca1dd76fe0f43d0aecf9fb2ca719c57\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":51.46,\"url\":\"/uploads/9ca1dd76fe0f43d0aecf9fb2ca719c57.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T07:01:10.109Z\",\"updated_at\":\"2020-03-18T07:01:10.109Z\"},{\"id\":337,\"name\":\"86d.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"c56f54eb5103427680789de497ac94cb\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":12.31,\"url\":\"/uploads/c56f54eb5103427680789de497ac94cb.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T07:01:10.117Z\",\"updated_at\":\"2020-03-18T07:01:10.117Z\"}],\"thumbnail\":{\"id\":333,\"name\":\"86a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"39694a8b81124468a5de5e399483bf9e\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":227.87,\"url\":\"/uploads/39694a8b81124468a5de5e399483bf9e.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T07:01:10.073Z\",\"updated_at\":\"2020-03-18T07:01:10.073Z\"}},{\"id\":86,\"title\":\"Vita Coco Coconut Water (Pack of 24)\",\"is_featured\":false,\"is_hot\":false,\"price\":19.22,\"sale_price\":21.99,\"vendor\":\"Young Shop\",\"review\":2,\"is_out_of_stock\":false,\"depot\":100,\"inventory\":200,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-04-18T08:42:13.577Z\",\"updated_at\":\"2020-04-18T08:42:13.577Z\",\"variants\":[],\"images\":[{\"id\":350,\"name\":\"86b\",\"alternativeText\":null,\"caption\":null,\"width\":600,\"height\":600,\"formats\":{\"thumbnail\":{\"hash\":\"thumbnail_86b_81b868f333\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":156,\"height\":156,\"size\":2.53,\"url\":\"/uploads/thumbnail_86b_81b868f333.jpeg\"},\"small\":{\"hash\":\"small_86b_81b868f333\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":500,\"height\":500,\"size\":15.08,\"url\":\"/uploads/small_86b_81b868f333.jpeg\"}},\"hash\":\"86b_81b868f333\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"size\":20.45,\"url\":\"/uploads/86b_81b868f333.jpeg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-04-18T08:42:13.694Z\",\"updated_at\":\"2020-04-18T08:42:13.694Z\"},{\"id\":351,\"name\":\"86a\",\"alternativeText\":null,\"caption\":null,\"width\":800,\"height\":800,\"formats\":{\"thumbnail\":{\"hash\":\"thumbnail_86a_b29949194b\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":156,\"height\":156,\"size\":3.61,\"url\":\"/uploads/thumbnail_86a_b29949194b.jpeg\"},\"medium\":{\"hash\":\"medium_86a_b29949194b\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":750,\"height\":750,\"size\":45.53,\"url\":\"/uploads/medium_86a_b29949194b.jpeg\"},\"small\":{\"hash\":\"small_86a_b29949194b\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":500,\"height\":500,\"size\":24.04,\"url\":\"/uploads/small_86a_b29949194b.jpeg\"}},\"hash\":\"86a_b29949194b\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"size\":52.58,\"url\":\"/uploads/86a_b29949194b.jpeg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-04-18T08:42:13.713Z\",\"updated_at\":\"2020-04-18T08:42:13.713Z\"},{\"id\":352,\"name\":\"86c\",\"alternativeText\":null,\"caption\":null,\"width\":600,\"height\":600,\"formats\":{\"thumbnail\":{\"hash\":\"thumbnail_86c_fc3738188f\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":156,\"height\":156,\"size\":4.3,\"url\":\"/uploads/thumbnail_86c_fc3738188f.jpeg\"},\"small\":{\"hash\":\"small_86c_fc3738188f\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":500,\"height\":500,\"size\":34.07,\"url\":\"/uploads/small_86c_fc3738188f.jpeg\"}},\"hash\":\"86c_fc3738188f\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"size\":46.83,\"url\":\"/uploads/86c_fc3738188f.jpeg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-04-18T08:42:13.725Z\",\"updated_at\":\"2020-04-18T08:42:13.725Z\"}],\"thumbnail\":{\"id\":353,\"name\":\"86a\",\"alternativeText\":null,\"caption\":null,\"width\":800,\"height\":800,\"formats\":{\"thumbnail\":{\"hash\":\"thumbnail_86a_8cb6df1843\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":156,\"height\":156,\"size\":3.61,\"url\":\"/uploads/thumbnail_86a_8cb6df1843.jpeg\"},\"medium\":{\"hash\":\"medium_86a_8cb6df1843\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":750,\"height\":750,\"size\":45.53,\"url\":\"/uploads/medium_86a_8cb6df1843.jpeg\"},\"small\":{\"hash\":\"small_86a_8cb6df1843\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"width\":500,\"height\":500,\"size\":24.04,\"url\":\"/uploads/small_86a_8cb6df1843.jpeg\"}},\"hash\":\"86a_8cb6df1843\",\"ext\":\".jpeg\",\"mime\":\"image/jpeg\",\"size\":52.58,\"url\":\"/uploads/86a_8cb6df1843.jpeg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-04-18T08:42:13.735Z\",\"updated_at\":\"2020-04-18T08:42:13.735Z\"}}]},{\"id\":13,\"name\":\"Meat\",\"slug\":\"meat\",\"description\":null,\"created_at\":\"2020-03-18T06:54:20.047Z\",\"updated_at\":\"2020-04-12T06:44:14.588Z\",\"products\":[{\"id\":80,\"title\":\"Tesco Eat Fresh Frozen Lamb Bone in Cube\",\"is_featured\":false,\"is_hot\":false,\"price\":21.89,\"sale_price\":null,\"vendor\":\"Global Office\",\"review\":4,\"is_out_of_stock\":false,\"depot\":60,\"inventory\":70,\"is_active\":true,\"is_sale\":false,\"created_at\":\"2020-03-18T06:54:02.670Z\",\"updated_at\":\"2020-03-18T06:54:02.670Z\",\"variants\":[],\"images\":[{\"id\":321,\"name\":\"81a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"d8e508fc912641f58f58138b16e792ce\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":109.76,\"url\":\"/uploads/d8e508fc912641f58f58138b16e792ce.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:54:02.708Z\",\"updated_at\":\"2020-03-18T06:54:02.708Z\"}],\"thumbnail\":{\"id\":320,\"name\":\"81a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"9f48e963891b43329a100e704a4ae84c\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":109.76,\"url\":\"/uploads/9f48e963891b43329a100e704a4ae84c.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-18T06:54:02.693Z\",\"updated_at\":\"2020-03-18T06:54:02.693Z\"}}]},{\"id\":14,\"name\":\"Book\",\"slug\":\"book\",\"description\":null,\"created_at\":\"2020-03-28T10:59:05.002Z\",\"updated_at\":\"2020-03-28T10:59:05.002Z\",\"products\":[{\"id\":6,\"title\":\"Grand Slam Indoor Of Show Jumping Novel\",\"is_featured\":false,\"is_hot\":false,\"price\":41.99,\"sale_price\":32.99,\"vendor\":\"Robert's Store\",\"review\":4,\"is_out_of_stock\":false,\"depot\":68,\"inventory\":90,\"is_active\":true,\"is_sale\":true,\"created_at\":\"2020-03-15T06:04:35.781Z\",\"updated_at\":\"2020-04-14T10:46:09.145Z\",\"variants\":[],\"images\":[{\"id\":24,\"name\":\"6a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"5c7442b5104545afa78bfe819616d298\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":52.29,\"url\":\"/uploads/5c7442b5104545afa78bfe819616d298.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:07:56.574Z\",\"updated_at\":\"2020-03-15T06:07:56.574Z\"},{\"id\":25,\"name\":\"6a.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"0a9100b8791b44ff9629377856bab05a\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":52.29,\"url\":\"/uploads/0a9100b8791b44ff9629377856bab05a.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:07:56.593Z\",\"updated_at\":\"2020-03-15T06:07:56.593Z\"}],\"thumbnail\":{\"id\":23,\"name\":\"5.jpg\",\"alternativeText\":null,\"caption\":null,\"width\":null,\"height\":null,\"formats\":null,\"hash\":\"e2132e11d3c34da89511593297697922\",\"ext\":\".jpg\",\"mime\":\"image/jpeg\",\"size\":10.17,\"url\":\"/uploads/e2132e11d3c34da89511593297697922.jpg\",\"previewUrl\":null,\"provider\":\"local\",\"provider_metadata\":null,\"created_at\":\"2020-03-15T06:07:56.562Z\",\"updated_at\":\"2020-03-15T06:07:56.562Z\"}}]}]");

/***/ }),

/***/ "./repositories/Repository.js":
/*!************************************!*\
  !*** ./repositories/Repository.js ***!
  \************************************/
/*! exports provided: customHeaders, baseUrl, default, serializeQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customHeaders", function() { return customHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeQuery", function() { return serializeQuery; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseDomain = 'http://45.76.97.89:1337';
/*const baseDomain = 'http://localhost:1337';*/

const authorization_prefix = 'Bearer ';
const customHeaders = {
  Accept: 'application/json'
  /* Authorization: authorization_prefix + token || undefined*/

};
const baseUrl = `${baseDomain}`;
/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseUrl,
  headers: customHeaders
}));
const serializeQuery = query => {
  return Object.keys(query).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`).join('&');
};

/***/ }),

/***/ "./store/auth/action.js":
/*!******************************!*\
  !*** ./store/auth/action.js ***!
  \******************************/
/*! exports provided: actionTypes, login, loginSuccess, logOut, logOutSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOutSuccess", function() { return logOutSuccess; });
const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION'
};
function login() {
  return {
    type: actionTypes.LOGIN_REQUEST
  };
}
function loginSuccess() {
  return {
    type: actionTypes.LOGIN_SUCCESS
  };
}
function logOut() {
  return {
    type: actionTypes.LOGOUT
  };
}
function logOutSuccess() {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
}

/***/ }),

/***/ "./store/cart/action.js":
/*!******************************!*\
  !*** ./store/cart/action.js ***!
  \******************************/
/*! exports provided: actionTypes, getCart, getCartSuccess, getCartError, addItem, removeItem, increaseItemQty, decreaseItemQty, updateCartSuccess, updateCartError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCart", function() { return getCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartSuccess", function() { return getCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartError", function() { return getCartError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increaseItemQty", function() { return increaseItemQty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseItemQty", function() { return decreaseItemQty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCartSuccess", function() { return updateCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCartError", function() { return updateCartError; });
const actionTypes = {
  GET_CART: 'GET_CART',
  GET_CART_SUCCESS: 'GET_CART_SUCCESS',
  GET_CART_ERROR: 'GET_CART_ERROR',
  GET_CART_TOTAL_QUANTITY: 'GET_CART_TOTAL_QUANTITY',
  GET_CART_TOTAL_QUANTITY_SUCCESS: 'GET_CART_TOTAL_QUANTITY_SUCCESS',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
  CLEAR_CART_SUCCESS: 'CLEAR_CART_SUCCESS',
  CLEAR_CART_ERROR: 'CLEAR_CART_ERROR',
  INCREASE_QTY: 'INCREASE_QTY',
  INCREASE_QTY_SUCCESS: 'INCREASE_QTY_SUCCESS',
  INCREASE_QTY_ERROR: 'INCREASE_QTY_ERROR',
  DECREASE_QTY: 'DECREASE_QTY',
  UPDATE_CART: 'UPDATE_CART',
  UPDATE_CART_SUCCESS: 'UPDATE_CART_SUCCESS',
  UPDATE_CART_ERROR: 'UPDATE_CART_ERROR'
};
function getCart() {
  return {
    type: actionTypes.GET_CART
  };
}
function getCartSuccess() {
  return {
    type: actionTypes.GET_CART_SUCCESS
  };
}
function getCartError(error) {
  return {
    type: actionTypes.GET_CART_ERROR,
    error
  };
}
function addItem(product) {
  return {
    type: actionTypes.ADD_ITEM,
    product
  };
}
function removeItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM,
    product
  };
}
function increaseItemQty(product) {
  return {
    type: actionTypes.INCREASE_QTY,
    product
  };
}
function decreaseItemQty(product) {
  return {
    type: actionTypes.DECREASE_QTY,
    product
  };
}
function updateCartSuccess(payload) {
  return {
    type: actionTypes.UPDATE_CART_SUCCESS,
    payload
  };
}
function updateCartError(payload) {
  return {
    type: actionTypes.UPDATE_CART_ERROR,
    payload
  };
}

/***/ }),

/***/ "./store/product/action.js":
/*!*********************************!*\
  !*** ./store/product/action.js ***!
  \*********************************/
/*! exports provided: actionTypes, getProducts, getTotalProducts, getBrands, getBrandsSuccess, getProductCategories, getProductCategoriesSuccess, getTotalProductsSuccess, getProductsSuccess, getProductByKeywordsSuccess, getSingleProductsSuccess, getProductsError, getProductsByCategory, getProductsByBrand, getProductsByKeyword, getProductsById, getProductsByPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalProducts", function() { return getTotalProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrands", function() { return getBrands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrandsSuccess", function() { return getBrandsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductCategories", function() { return getProductCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductCategoriesSuccess", function() { return getProductCategoriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalProductsSuccess", function() { return getTotalProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsSuccess", function() { return getProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductByKeywordsSuccess", function() { return getProductByKeywordsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleProductsSuccess", function() { return getSingleProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsError", function() { return getProductsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsByCategory", function() { return getProductsByCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsByBrand", function() { return getProductsByBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsByKeyword", function() { return getProductsByKeyword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsById", function() { return getProductsById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsByPrice", function() { return getProductsByPrice; });
const actionTypes = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR',
  GET_PRODUCTS_BY_CATEGORY: 'GET_PRODUCTS_BY_CATEGORY',
  GET_PRODUCTS_BY_PRICE_RANGE: 'GET_PRODUCTS_BY_PRICE_RANGE',
  GET_PRODUCTS_BY_BRAND: 'GET_PRODUCTS_BY_BRAND',
  GET_PRODUCTS_BY_KEYWORD: 'GET_PRODUCTS_BY_KEYWORD',
  GET_PRODUCTS_BY_KEYWORD_SUCCESS: 'GET_PRODUCTS_BY_KEYWORD_SUCCESS',
  GET_PRODUCT_BY_ID: 'GET_PRODUCT_BY_ID',
  GET_PRODUCT_BY_ID_SUCCESS: 'GET_PRODUCT_BY_ID_SUCCESS',
  GET_TOTAL_OF_PRODUCTS: 'GET_TOTAL_OF_PRODUCTS',
  GET_TOTAL_OF_PRODUCTS_SUCCESS: 'GET_TOTAL_OF_PRODUCTS_SUCCESS',
  GET_BRANDS: 'GET_BRANDS',
  GET_BRANDS_SUCCESS: 'GET_BRANDS_SUCCESS',
  GET_PRODUCT_CATEGORIES: 'GET_PRODUCT_CATEGORIES',
  GET_PRODUCT_CATEGORIES_SUCCESS: 'GET_PRODUCT_CATEGORIES_SUCCESS'
};
function getProducts(payload) {
  return {
    type: actionTypes.GET_PRODUCTS,
    payload
  };
}
function getTotalProducts() {
  return {
    type: actionTypes.GET_TOTAL_OF_PRODUCTS
  };
}
function getBrands() {
  return {
    type: actionTypes.GET_BRANDS
  };
}
function getBrandsSuccess(payload) {
  return {
    type: actionTypes.GET_BRANDS_SUCCESS,
    payload
  };
}
function getProductCategories() {
  return {
    type: actionTypes.GET_PRODUCT_CATEGORIES
  };
}
function getProductCategoriesSuccess(payload) {
  return {
    type: actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS,
    payload
  };
}
function getTotalProductsSuccess(payload) {
  return {
    type: actionTypes.GET_TOTAL_OF_PRODUCTS_SUCCESS,
    payload
  };
}
function getProductsSuccess(data) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    data
  };
}
function getProductByKeywordsSuccess(payload) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_KEYWORD_SUCCESS,
    payload
  };
}
function getSingleProductsSuccess(data) {
  return {
    type: actionTypes.GET_PRODUCT_BY_ID_SUCCESS,
    data
  };
}
function getProductsError(error) {
  return {
    type: actionTypes.GET_PRODUCTS_ERROR,
    error
  };
}
function getProductsByCategory(category) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_CATEGORY,
    category
  };
}
function getProductsByBrand(payload) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_BRAND,
    payload
  };
}
function getProductsByKeyword(keyword) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_KEYWORD,
    keyword
  };
}
function getProductsById(id) {
  return {
    type: actionTypes.GET_PRODUCT_BY_ID,
    id
  };
}
function getProductsByPrice(payload) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_PRICE_RANGE,
    payload
  };
}

/***/ }),

/***/ "./store/setting/action.js":
/*!*********************************!*\
  !*** ./store/setting/action.js ***!
  \*********************************/
/*! exports provided: actionTypes, changeCurrency, changeCurrencySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCurrency", function() { return changeCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCurrencySuccess", function() { return changeCurrencySuccess; });
const actionTypes = {
  CHANGE_CURRENCY: 'CHANGE_CURRENCY',
  CHANGE_CURRENCY_SUCCESS: 'CHANGE_CURRENCY_SUCCESS'
};
function changeCurrency(currency) {
  return {
    type: actionTypes.CHANGE_CURRENCY,
    currency
  };
}
function changeCurrencySuccess(currency) {
  return {
    type: actionTypes.CHANGE_CURRENCY_SUCCESS,
    currency
  };
}

/***/ }),

/***/ "./utilities/app-settings.js":
/*!***********************************!*\
  !*** ./utilities/app-settings.js ***!
  \***********************************/
/*! exports provided: isStaticData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStaticData", function() { return isStaticData; });
const isStaticData = false;

/***/ }),

/***/ "./utilities/common-helpers.js":
/*!*************************************!*\
  !*** ./utilities/common-helpers.js ***!
  \*************************************/
/*! exports provided: stickyHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stickyHeader", function() { return stickyHeader; });
const stickyHeader = () => {
  let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const header = document.getElementById('headerSticky');

  if (header !== null) {
    if (number >= 60) {
      header.classList.add('header--sticky');
    } else {
      header.classList.remove('header--sticky');
    }
  }
};

/***/ }),

/***/ "./utilities/product-helper.js":
/*!*************************************!*\
  !*** ./utilities/product-helper.js ***!
  \*************************************/
/*! exports provided: formatCurrency, getColletionBySlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColletionBySlug", function() { return getColletionBySlug; });
function formatCurrency(num) {
  if (num !== undefined) {
    return parseFloat(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {}
}
function getColletionBySlug(collections, slug) {
  if (collections.length > 0) {
    const result = collections.find(item => item.slug === slug.toString());

    if (result !== undefined) {
      return result.products;
    } else {
      return [];
    }
  } else {
    return [];
  }
}

/***/ }),

/***/ 4:
/*!******************************************!*\
  !*** multi ./pages/account/checkout.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\the-hexaa\ReactJS\martfury_react_package_1_3\martfury-react-1_3\pages\account\checkout.jsx */"./pages/account/checkout.jsx");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=checkout.js.map