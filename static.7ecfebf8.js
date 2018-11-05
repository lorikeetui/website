(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "https://lorikeet.design/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@aragon/ui");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Page = __webpack_require__(29);

Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Page).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(5);

var _Hero = __webpack_require__(38);

var _Hero2 = _interopRequireDefault(_Hero);

var _About = __webpack_require__(11);

var _About2 = _interopRequireDefault(_About);

var _Examples = __webpack_require__(43);

var _Examples2 = _interopRequireDefault(_Examples);

var _Tweets = __webpack_require__(44);

var _Tweets2 = _interopRequireDefault(_Tweets);

var _Contributions = __webpack_require__(46);

var _Contributions2 = _interopRequireDefault(_Contributions);

var _Footer = __webpack_require__(12);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/' },
    _react2.default.createElement(_Hero2.default, null),
    _react2.default.createElement(_Contributions2.default, null),
    _react2.default.createElement(_Footer2.default, null)
  );
};

exports.default = Home;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/b7ec7629-footer-logo.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  max-width: 1200px;\n  margin: auto;\n'], ['\n  max-width: 1200px;\n  margin: auto;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  img {\n    margin-right: 20px;\n    margin-bottom: 10px;\n    width: 26px;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  img {\n    margin-right: 20px;\n    margin-bottom: 10px;\n    width: 26px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100vw;\n  height: auto;\n  padding: 0 20% calc(100px + 6vh) 20%;\n'], ['\n  width: 100vw;\n  height: auto;\n  padding: 0 20% calc(100px + 6vh) 20%;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-weight: 300;\n  font-size: 2.4rem;\n  color: #424770;\n  letter-spacing: 0;\n  text-align: center;\n  line-height: 36px;\n  margin: 20px 0 50px 0;\n'], ['\n  font-weight: 300;\n  font-size: 2.4rem;\n  color: #424770;\n  letter-spacing: 0;\n  text-align: center;\n  line-height: 36px;\n  margin: 20px 0 50px 0;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  margin: 20px auto;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -35px;\n'], ['\n  margin: 20px auto;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -35px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  width: 100%;\n  ', ';\n  ', ';\n  padding: 20px;\n  cursor: default;\n  h3 {\n    font-weight: 700;\n    font-size: 1.7rem;\n    color: #32325d;\n    letter-spacing: 0.3px;\n    text-transform: uppercase;\n    margin-bottom: 9px;\n  }\n  p {\n    font-size: 1.7rem;\n    color: #535f80;\n    line-height: 28px;\n    padding-left: 46px;\n  }\n  &:hover {\n    p, h3 {\n      color: #5E8FBF;\n    }\n  }\n'], ['\n  width: 100%;\n  ', ';\n  ', ';\n  padding: 20px;\n  cursor: default;\n  h3 {\n    font-weight: 700;\n    font-size: 1.7rem;\n    color: #32325d;\n    letter-spacing: 0.3px;\n    text-transform: uppercase;\n    margin-bottom: 9px;\n  }\n  p {\n    font-size: 1.7rem;\n    color: #535f80;\n    line-height: 28px;\n    padding-left: 46px;\n  }\n  &:hover {\n    p, h3 {\n      color: #5E8FBF;\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

var _tick = __webpack_require__(39);

var _tick2 = _interopRequireDefault(_tick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};
var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};


var About = function About() {
  return _react2.default.createElement(
    AboutBox,
    null,
    _react2.default.createElement(
      OuterContainer,
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Build great decentralized user experiences'
      ),
      _react2.default.createElement(
        Subtitle,
        null,
        'Lorikeet is a design system with React components, UI/UX guidelines and motion tools for building pleasant and performant interfaces. While the UI components can be used on any React app, we are focused on improving the UX challenges of the decentralized web.'
      ),
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          Box,
          null,
          _react2.default.createElement(
            TitleContainer,
            null,
            _react2.default.createElement('img', { src: _tick2.default }),
            _react2.default.createElement(
              'h3',
              null,
              'Modular component library'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'Pick what you want to use without bloating your codebase'
          )
        ),
        _react2.default.createElement(
          Box,
          null,
          _react2.default.createElement(
            TitleContainer,
            null,
            _react2.default.createElement('img', { src: _tick2.default }),
            _react2.default.createElement(
              'h3',
              null,
              'Decentralized UX patterns'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'Establishing user-centric UX patterns for decentralized apps'
          )
        ),
        _react2.default.createElement(
          Box,
          null,
          _react2.default.createElement(
            TitleContainer,
            null,
            _react2.default.createElement('img', { src: _tick2.default }),
            _react2.default.createElement(
              'h3',
              null,
              'Performant react components'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'Hand optimized performance, high code quality React components'
          )
        ),
        _react2.default.createElement(
          Box,
          null,
          _react2.default.createElement(
            TitleContainer,
            null,
            _react2.default.createElement('img', { src: _tick2.default }),
            _react2.default.createElement(
              'h3',
              null,
              'Smooth motion & animations'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'Best practices motion design for interactions and transitions'
          )
        ),
        _react2.default.createElement(
          Box,
          null,
          _react2.default.createElement(
            TitleContainer,
            null,
            _react2.default.createElement('img', { src: _tick2.default }),
            _react2.default.createElement(
              'h3',
              null,
              'Easily extensible'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'Build your own components to extend functionality'
          )
        ),
        _react2.default.createElement(
          Box,
          null,
          _react2.default.createElement(
            TitleContainer,
            null,
            _react2.default.createElement('img', { src: _tick2.default }),
            _react2.default.createElement(
              'h3',
              null,
              'Clean UI design'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'Clean UI design that is easily themable for your app and brand'
          )
        )
      )
    )
  );
};

var OuterContainer = _styledComponents2.default.div(_templateObject);

var TitleContainer = _styledComponents2.default.div(_templateObject2);

var AboutBox = _styledComponents2.default.div(_templateObject3);

var Subtitle = _styledComponents2.default.p(_templateObject4);

var Container = _styledComponents2.default.div(_templateObject5);
var Box = _styledComponents2.default.div(_templateObject6, medium('width: 50%;'), large('width: 33%;'));

exports.default = About;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100vw;\n  height: auto;\n  min-height: 300px;\n  background: #333B47;\n  padding: 100px 0;\n'], ['\n  width: 100vw;\n  height: auto;\n  min-height: 300px;\n  background: #333B47;\n  padding: 100px 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 80%;\n  margin: auto;\n  display: flex;\n  max-width: 900px;\n  a {\n    font-size: 1.7rem;\n    color: #FFFFFF;\n    line-height: 39px;\n    display: block;\n    cursor: pointer;\n  }\n  a:hover {\n    opacity: 0.6;\n  }\n'], ['\n  width: 80%;\n  margin: auto;\n  display: flex;\n  max-width: 900px;\n  a {\n    font-size: 1.7rem;\n    color: #FFFFFF;\n    line-height: 39px;\n    display: block;\n    cursor: pointer;\n  }\n  a:hover {\n    opacity: 0.6;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  opacity: 0.6;\n  font-weight: 600;\n  font-size: 1.7rem;\n  color: #FFFFFF;\n  letter-spacing: 0.3px;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n'], ['\n  opacity: 0.6;\n  font-weight: 600;\n  font-size: 1.7rem;\n  color: #FFFFFF;\n  letter-spacing: 0.3px;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  margin-top: -19px;\n  max-width: 170px;\n'], ['\n  margin-top: -19px;\n  max-width: 170px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: absolute;\n  bottom: 0;\n  left: 0;\n'], ['\n  position: absolute;\n  bottom: 0;\n  left: 0;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  width: 50%;\n  position: relative;\n  margin-top: 66px;\n  margin-bottom: 50px;\n  ', ';\n'], ['\n  width: 50%;\n  position: relative;\n  margin-top: 66px;\n  margin-bottom: 50px;\n  ', ';\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  width: auto;\n  position: absolute;\n  height: 350px;\n  ', ';\n'], ['\n  width: auto;\n  position: absolute;\n  height: 350px;\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _footerLogo = __webpack_require__(10);

var _footerLogo2 = _interopRequireDefault(_footerLogo);

var _poweredByAragon = __webpack_require__(67);

var _poweredByAragon2 = _interopRequireDefault(_poweredByAragon);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Footer = function Footer() {
  return _react2.default.createElement(
    FooterBox,
    null,
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        Box,
        null,
        _react2.default.createElement(Logo, { src: _footerLogo2.default }),
        _react2.default.createElement(
          _ui.SafeLink,
          { href: 'https://aragon.org/', target: '_blank' },
          _react2.default.createElement(Powered, { src: _poweredByAragon2.default })
        )
      ),
      _react2.default.createElement(
        LinkBox,
        null,
        _react2.default.createElement(
          Title,
          null,
          'Resources'
        ),
        _react2.default.createElement(
          'a',
          null,
          'Design guidelines'
        ),
        _react2.default.createElement(
          'a',
          null,
          'Reference'
        ),
        _react2.default.createElement(
          'a',
          null,
          'Tutorials'
        ),
        _react2.default.createElement(
          'a',
          null,
          'Downloads'
        )
      ),
      _react2.default.createElement(
        LinkBox,
        null,
        _react2.default.createElement(
          Title,
          null,
          'Channels'
        ),
        _react2.default.createElement(
          'a',
          null,
          'Github'
        ),
        _react2.default.createElement(
          'a',
          null,
          'Twitter'
        ),
        _react2.default.createElement(
          'a',
          null,
          'Matrix'
        ),
        _react2.default.createElement(
          'a',
          null,
          'Email'
        )
      )
    )
  );
};

var FooterBox = _styledComponents2.default.div(_templateObject);
var Container = _styledComponents2.default.div(_templateObject2);

var Title = _styledComponents2.default.h3(_templateObject3);

var Logo = _styledComponents2.default.img(_templateObject4);

var Powered = _styledComponents2.default.img(_templateObject5);

var LinkBox = _styledComponents2.default.div(_templateObject6, medium('width: 33%; margin-top: 0; margin-bottom: 0;'));

var Box = _styledComponents2.default.div(_templateObject7, medium('position: relative; width: 33%; height: 189px;'));

exports.default = Footer;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 46px;\n  color: #fff;\n'], ['\n  font-size: 46px;\n  color: #fff;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  flex-direction: column;\n  ', ';\n  ', ';\n  display: flex;\n  margin-top: 40px;\n'], ['\n  flex-direction: column;\n  ', ';\n  ', ';\n  display: flex;\n  margin-top: 40px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding-bottom: 30px;\n'], ['\n  padding-bottom: 30px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  color: #6DCBFE;\n  text-decoration: none;\n  word-break: break-all;\n'], ['\n  color: #6DCBFE;\n  text-decoration: none;\n  word-break: break-all;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: 17px;\n  color: #fff;\n  width: 100%;\n  ', ';\n  \n'], ['\n  font-size: 17px;\n  color: #fff;\n  width: 100%;\n  ', ';\n  \n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column; \n  width: 100%;\n  ', ';\n'], ['\n  display: flex;\n  flex-direction: column; \n  width: 100%;\n  ', ';\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  width: 100%\n  padding: 87px 38px;\n  ', ';\n  margin: 0;\n  text-align: left;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  div {\n    max-width: 100%;\n  }\n\n'], ['\n  width: 100%\n  padding: 87px 38px;\n  ', ';\n  margin: 0;\n  text-align: left;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  div {\n    max-width: 100%;\n  }\n\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  background: #333B47;\n  min-height: 100vh;\n'], ['\n  background: #333B47;\n  min-height: 100vh;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Section = __webpack_require__(14);

var _Section2 = _interopRequireDefault(_Section);

var _figma = __webpack_require__(68);

var _figma2 = _interopRequireDefault(_figma);

var _sketch = __webpack_require__(69);

var _sketch2 = _interopRequireDefault(_sketch);

var _framer = __webpack_require__(70);

var _framer2 = _interopRequireDefault(_framer);

var _ui = __webpack_require__(2);

var _DownloadLink = __webpack_require__(71);

var _DownloadLink2 = _interopRequireDefault(_DownloadLink);

var _Footer = __webpack_require__(12);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};
var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};


var Downloads = function Downloads() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/downloads' },
    _react2.default.createElement(
      DownloadsSection,
      null,
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            H1,
            null,
            'Downloads'
          ),
          _react2.default.createElement(
            Content,
            null,
            _react2.default.createElement(
              Description,
              null,
              _react2.default.createElement(
                P,
                null,
                'Download some goodies to start designing your decentralized apps. This is an ever growing collection of components for Sketch and Figma, and interactive components for Framer X.'
              ),
              _react2.default.createElement(
                P,
                null,
                'If you would like to contribute to designing new components, please get in touch! The best way is to open an issue on ',
                ' ',
                _react2.default.createElement(
                  A,
                  { href: "https://github.com/lorikeetui/design/issues" },
                  'https://github.com/lorikeetui/design/issues'
                )
              )
            ),
            _react2.default.createElement(
              DownloadWrapper,
              null,
              _react2.default.createElement(_DownloadLink2.default, { src: _sketch2.default, text: "Download for Sketch", href: "#" }),
              _react2.default.createElement(_DownloadLink2.default, { src: _figma2.default, text: "Download for Figma", href: "#" }),
              _react2.default.createElement(_DownloadLink2.default, { src: _framer2.default, text: "Download for Framer X", href: "#" })
            )
          )
        )
      )
    ),
    _react2.default.createElement(_Footer2.default, null)
  );
};

var H1 = _styledComponents2.default.h1(_templateObject);

var Content = _styledComponents2.default.div(_templateObject2, medium('flex-direction: column;'), large('flex-direction: row;'));

var P = _styledComponents2.default.p(_templateObject3);

var A = _styledComponents2.default.a(_templateObject4);

var Description = _styledComponents2.default.span(_templateObject5, medium('width: 70%; padding-right: 60px;'));

var DownloadWrapper = _styledComponents2.default.div(_templateObject6, medium('width: 30%'));

var Container = _styledComponents2.default.div(_templateObject7, medium('width: 60%; padding: 0;'));
var DownloadsSection = (0, _styledComponents2.default)(_Section2.default)(_templateObject8);

exports.default = Downloads;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100vw;\n'], ['\n  width: 100vw;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var Section = function Section(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  var containerProps = { className: className };

  return _react2.default.createElement(
    'section',
    containerProps,
    _react2.default.createElement(
      StyledContent,
      null,
      _react2.default.createElement('div', props)
    )
  );
};

var StyledContent = _styledComponents2.default.div(_templateObject);

Section.propTypes = {
  className: _propTypes2.default.string
};

exports.default = Section;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: left;\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: left;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Section = __webpack_require__(14);

var _Section2 = _interopRequireDefault(_Section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NotFound = function NotFound() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/not-found' },
    _react2.default.createElement(
      _Section2.default,
      null,
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          _ui.Text,
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Page not found'
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          'The page you are trying to access could not be found.'
        )
      )
    )
  );
};

var Container = _styledComponents2.default.div(_templateObject);

exports.default = NotFound;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(18);

var _App = __webpack_require__(19);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _App2.default;


if (typeof document !== 'undefined') {
  var render = function render(Comp) {
    _reactDom2.default.hydrate(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  render(_App2.default);

  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _reactStaticRoutes = __webpack_require__(20);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(73);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(_reactStaticRoutes2.default, null)
  );
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(21);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(22);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(23);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(24);

var _reactUniversalComponent = __webpack_require__(25);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Home',
  file: '/Library/WebServer/Documents/lorikeet/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/pages/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/pages/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Downloads',
  file: '/Library/WebServer/Documents/lorikeet/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/pages/Downloads', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Downloads');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/pages/Downloads';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/NotFound',
  file: '/Library/WebServer/Documents/lorikeet/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 15)), (0, _importCss3.default)('src/pages/NotFound', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/NotFound');
  },
  resolve: function resolve() {
    return /*require.resolve*/(15);
  },
  chunkName: function chunkName() {
    return 'src/pages/NotFound';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 2

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(26);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(27);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(28);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(7);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  min-height: calc(100vh - 116px) !important;\n  background: white;\n  h2 {\n    font-size: 3.8rem;\n    color: #5e8fbf;\n    letter-spacing: 0.58px;\n    text-align: center;\n  }\n  a {\n    outline: none;\n  }\n'], ['\n  min-height: calc(100vh - 116px) !important;\n  background: white;\n  h2 {\n    font-size: 3.8rem;\n    color: #5e8fbf;\n    letter-spacing: 0.58px;\n    text-align: center;\n  }\n  a {\n    outline: none;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

var _Navbar = __webpack_require__(30);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          path = _props.path;

      var items = menuItems.map(function (item) {
        return [].concat(_toConsumableArray(item), [item[0] === path]);
      });
      return _react2.default.createElement(_reactStatic.SiteData, {
        render: function render(_ref) {
          var siteTitle = _ref.title;
          return _react2.default.createElement(_reactStatic.RouteData, {
            render: function render(_ref2) {
              var title = _ref2.title;
              return _react2.default.createElement(
                _ui.AragonApp,
                { publicUrl: '/aragon-ui/', className: 'app' },
                _react2.default.createElement(
                  _reactStatic.Head,
                  null,
                  _react2.default.createElement(
                    'title',
                    null,
                    title || siteTitle
                  )
                ),
                _react2.default.createElement(_Navbar2.default, { menuItems: items, path: path }),
                _react2.default.createElement(
                  Content,
                  null,
                  children
                )
              );
            }
          });
        }
      });
    }
  }]);

  return Page;
}(_react2.default.Component);

var Content = _styledComponents2.default.div(_templateObject);

var menuItems = [['/', 'Overview'], ['https://lorikeetui.github.io/docs', 'Docs'], ['/downloads', 'Downloads']];

exports.default = Page;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 64px;\n  background: rgb(255, 255, 255);\n  display: flex;\n  justify-content: flex-start;\n  ', ';\n  align-items: center;\n  padding: 0 20px;\n  position: fixed;\n  z-index: 5;\n  .brand {\n    display: flex;\n  }\n  &.light {\n    justify-content: space-between;\n    ul div li span a span {\n      color: white;\n      opacity: 0.8;\n    }\n    ul div li.active span a span {\n      opacity: 1;\n      border-bottom: solid 1px white;\n    }\n  }\n'], ['\n  width: 100%;\n  height: 64px;\n  background: rgb(255, 255, 255);\n  display: flex;\n  justify-content: flex-start;\n  ', ';\n  align-items: center;\n  padding: 0 20px;\n  position: fixed;\n  z-index: 5;\n  .brand {\n    display: flex;\n  }\n  &.light {\n    justify-content: space-between;\n    ul div li span a span {\n      color: white;\n      opacity: 0.8;\n    }\n    ul div li.active span a span {\n      opacity: 1;\n      border-bottom: solid 1px white;\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 41px;\n'], ['\n  height: 41px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: auto;\n  height: auto;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  ul {\n    display: flex;\n  }\n  button {\n    margin: 0 0 0 10px;\n  }\n'], ['\n  width: auto;\n  height: auto;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  ul {\n    display: flex;\n  }\n  button {\n    margin: 0 0 0 10px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(3);

var _ui = __webpack_require__(2);

var _MenuItem = __webpack_require__(31);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuPanel = __webpack_require__(32);

var _MenuPanel2 = _interopRequireDefault(_MenuPanel);

var _reactSpring = __webpack_require__(9);

var _footerLogo = __webpack_require__(10);

var _footerLogo2 = _interopRequireDefault(_footerLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var renderMenuItemLink = function renderMenuItemLink(_ref) {
  var url = _ref.url,
      children = _ref.children;
  return url.startsWith('/') ? _react2.default.createElement(
    _reactStatic.Link,
    { to: url },
    _react2.default.createElement(
      _ui.Text,
      { size: 'xlarge' },
      children
    )
  ) : _react2.default.createElement(
    _ui.SafeLink,
    { href: url },
    _react2.default.createElement(
      _ui.Text,
      { size: 'xlarge' },
      children
    )
  );
};

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      scroll: 0
    }, _this.onScroll = function (event) {
      var scroll = document.scrollingElement.scrollTop * 2 / 1000;
      _this.setState({ scroll: scroll });
    }, _this.renderIn = function (_ref3) {
      var x = _ref3.x,
          menuItems = _ref3.menuItems,
          path = _ref3.path;


      return _react2.default.createElement(
        LorikeetNavbar,
        { className: path === '/downloads' ? 'light' : '',
          style: path === '/downloads' ? { background: x.interpolate(function (v) {
              return 'rgba(51, 59, 71)';
            }) } : { background: x.interpolate(function (v) {
              return 'rgba(255, 255, 255, ' + v + ')';
            }) }
        },
        _react2.default.createElement(
          _ui.BreakPoint,
          { from: 'medium' },
          path === '/downloads' && _react2.default.createElement(Logo, { src: _footerLogo2.default })
        ),
        _react2.default.createElement(
          End,
          null,
          _react2.default.createElement(
            _ui.BreakPoint,
            { from: 'medium' },
            _react2.default.createElement(
              'ul',
              null,
              menuItems.map(function (item, i) {
                return _react2.default.createElement(
                  'div',
                  { key: i },
                  _react2.default.createElement(_MenuItem2.default, {
                    url: item[0],
                    label: item[1],
                    active: item[2],
                    renderLink: renderMenuItemLink
                  })
                );
              })
            )
          ),
          _react2.default.createElement(
            _ui.BreakPoint,
            { to: 'medium' },
            _react2.default.createElement(_MenuPanel2.default, { items: menuItems, path: path, renderLink: renderMenuItemLink })
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          menuItems = _props.menuItems,
          path = _props.path;

      return _react2.default.createElement(
        _reactSpring.Spring,
        {
          from: { x: 0 },
          to: { x: this.state.scroll },
          menuItems: menuItems,
          path: path,
          native: true
        },
        this.renderIn
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

var LorikeetNavbar = (0, _styledComponents2.default)(_reactSpring.animated.div)(_templateObject, medium('justify-content: flex-end;'));

var Logo = _styledComponents2.default.img(_templateObject2);

var End = _styledComponents2.default.div(_templateObject3);

exports.default = Navbar;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: stretch;\n  white-space: nowrap;\n  > span {\n    display: flex;\n    align-items: center;\n    padding: 0 15px;\n    font-size: 15px;\n  }\n  a {\n    text-decoration: none;\n    padding: 0 10px;\n    span {\n      color: ', ';\n      font-size: 17px;\n      padding: 7px 0;\n    }\n    span:hover {\n      color: #32325d;\n    }\n  }\n  &.active {\n    span a span {\n      color: #32325d;\n      font-weight: 800;\n      border-bottom: solid 1px #32325d;\n    }\n  }\n'], ['\n  display: flex;\n  align-items: stretch;\n  white-space: nowrap;\n  > span {\n    display: flex;\n    align-items: center;\n    padding: 0 15px;\n    font-size: 15px;\n  }\n  a {\n    text-decoration: none;\n    padding: 0 10px;\n    span {\n      color: ', ';\n      font-size: 17px;\n      padding: 7px 0;\n    }\n    span:hover {\n      color: #32325d;\n    }\n  }\n  &.active {\n    span a span {\n      color: #32325d;\n      font-weight: 800;\n      border-bottom: solid 1px #32325d;\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MenuItem = function MenuItem(_ref) {
  var url = _ref.url,
      label = _ref.label,
      active = _ref.active,
      renderLink = _ref.renderLink;
  return _react2.default.createElement(
    StyledMenuItem,
    { className: active ? 'active' : undefined },
    _react2.default.createElement(
      'span',
      null,
      renderLink({ url: url, children: label })
    )
  );
};

var StyledMenuItem = _styledComponents2.default.li(_templateObject, _ui.theme.textSecondary);

MenuItem.propTypes = {
  url: _propTypes2.default.string,
  label: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  renderLink: _propTypes2.default.func
};

MenuItem.defaultProps = {
  active: false,
  renderLink: function renderLink(_ref2) {
    var url = _ref2.url,
        children = _ref2.children;
    return _react2.default.createElement(
      _ui.SafeLink,
      { href: url },
      children
    );
  }
};

exports.default = MenuItem;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  a {\n    padding: 10px 0;\n    text-decoration: none;\n    color: #4a90e2;\n  }\n  a:hover {\n    color: black;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  a {\n    padding: 10px 0;\n    text-decoration: none;\n    color: #4a90e2;\n  }\n  a:hover {\n    color: black;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(3);

var _ui = __webpack_require__(2);

var _SidePanel = __webpack_require__(33);

var _SidePanel2 = _interopRequireDefault(_SidePanel);

var _menu = __webpack_require__(36);

var _menu2 = _interopRequireDefault(_menu);

var _menuWhite = __webpack_require__(37);

var _menuWhite2 = _interopRequireDefault(_menuWhite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = function (_React$Component) {
  _inherits(Panel, _React$Component);

  function Panel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Panel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Panel.__proto__ || Object.getPrototypeOf(Panel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      opened: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Panel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          path = _props.path;
      var opened = this.state.opened;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _ui.Button,
          { mode: 'text', onClick: function onClick() {
              return _this2.setState({ opened: true });
            } },
          _react2.default.createElement('img', { src: path === '/downloads' ? _menuWhite2.default : _menu2.default })
        ),
        _react2.default.createElement(
          _SidePanel2.default,
          {
            title: '',
            opened: opened,
            onClose: function onClose() {
              return _this2.setState({ opened: false });
            }
          },
          _react2.default.createElement(
            Container,
            null,
            items.map(function (item, i) {
              return item[0].startsWith('/') ? _react2.default.createElement(
                _reactStatic.Link,
                { to: item[0], key: i },
                item[1]
              ) : _react2.default.createElement(
                _ui.SafeLink,
                { href: item[0], key: i },
                item[1]
              );
            })
          )
        )
      );
    }
  }]);

  return Panel;
}(_react2.default.Component);

Panel.propTypes = {
  items: _propTypes2.default.array
};


var Container = _styledComponents2.default.div(_templateObject);

exports.default = Panel;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 3;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  z-index: 3;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(68, 81, 89, 0.65);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(68, 81, 89, 0.65);\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  width: 280px;\n  height: 100vh;\n  padding-left: 10px;\n  background: white;\n  box-shadow: -2px 0 36px rgba(0, 0, 0, 0.2);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  width: 280px;\n  height: 100vh;\n  padding-left: 10px;\n  background: white;\n  box-shadow: -2px 0 36px rgba(0, 0, 0, 0.2);\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  position: relative;\n  padding-top: 15px;\n  padding-left: 26px;\n  padding-right: 20px;\n  padding-bottom: 15px;\n  flex-shrink: 0;\n"], ["\n  position: relative;\n  padding-top: 15px;\n  padding-left: 26px;\n  padding-right: 20px;\n  padding-bottom: 15px;\n  flex-shrink: 0;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  overflow-y: auto;\n  height: 100%;\n"], ["\n  overflow-y: auto;\n  height: 100%;\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  padding: 0 26px 26px;\n"], ["\n  padding: 0 26px 26px;\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n  ", " & {\n    position: absolute;\n    padding: 20px;\n    top: 0;\n    right: 0;\n    cursor: pointer;\n    background: none;\n    border: 0;\n    outline: 0;\n    &::-moz-focus-inner {\n      border: 0;\n    }\n  }\n"], ["\n  ", " & {\n    position: absolute;\n    padding: 20px;\n    top: 0;\n    right: 0;\n    cursor: pointer;\n    background: none;\n    border: 0;\n    outline: 0;\n    &::-moz-focus-inner {\n      border: 0;\n    }\n  }\n"]),
    _templateObject8 = _taggedTemplateLiteral(["\n  margin: 0 0 20px 0;\n"], ["\n  margin: 0 0 20px 0;\n"]);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactSpring = __webpack_require__(9);

var _ui = __webpack_require__(2);

var _lorikeetLogo = __webpack_require__(34);

var _lorikeetLogo2 = _interopRequireDefault(_lorikeetLogo);

var _close = __webpack_require__(35);

var _close2 = _interopRequireDefault(_close);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SidePanel = function (_React$PureComponent) {
  _inherits(SidePanel, _React$PureComponent);

  function SidePanel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SidePanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SidePanel.__proto__ || Object.getPrototypeOf(SidePanel)).call.apply(_ref, [this].concat(args))), _this), _this.handleClose = function () {
      if (!_this.props.blocking) {
        _this.props.onClose();
      }
    }, _this.handleEscape = function (event) {
      if (event.keyCode === 27 && _this.props.opened) {
        _this.handleClose();
      }
    }, _this.handleTransitionRest = function () {
      _this.props.onTransitionEnd(_this.props.opened);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SidePanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("keydown", this.handleEscape, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.handleEscape, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          opened = _props.opened,
          children = _props.children;

      return _react2.default.createElement(
        _reactSpring.Spring,
        {
          config: { tension: 50, friction: 10 },
          to: { progress: Number(!opened), overlay: Number(opened) },
          onRest: this.handleTransitionRest,
          native: true
        },
        function (_ref2) {
          var progress = _ref2.progress,
              overlay = _ref2.overlay;
          return _react2.default.createElement(
            Main,
            { opened: opened },
            _react2.default.createElement(Overlay, {
              style: {
                opacity: overlay,
                pointerEvents: opened ? "auto" : "none"
              },
              onClick: _this2.handleClose
            }),
            _react2.default.createElement(
              Panel,
              {
                style: {
                  transform: progress.interpolate(function (t) {
                    return "translate3d(" + -t * 290 + "px, 0, 0)";
                  })
                }
              },
              _react2.default.createElement(
                PanelHeader,
                null,
                _react2.default.createElement(
                  "h1",
                  null,
                  _react2.default.createElement(
                    _reactStatic.Link,
                    { to: "/" },
                    _react2.default.createElement(LogoImg, { src: _lorikeetLogo2.default })
                  )
                ),
                _react2.default.createElement(
                  PanelCloseButton,
                  { type: "button", onClick: _this2.handleClose },
                  _react2.default.createElement("img", { src: _close2.default })
                )
              ),
              _react2.default.createElement(
                PanelScrollView,
                null,
                _react2.default.createElement(
                  PanelContent,
                  null,
                  children
                )
              )
            )
          );
        }
      );
    }
  }]);

  return SidePanel;
}(_react2.default.PureComponent);

SidePanel.propTypes = {
  children: _propTypes2.default.node,
  title: _propTypes2.default.string.isRequired,
  opened: _propTypes2.default.bool,
  blocking: _propTypes2.default.bool,
  onClose: _propTypes2.default.func,
  onTransitionEnd: _propTypes2.default.func
};

SidePanel.defaultProps = {
  opened: true,
  blocking: false,
  onClose: function onClose() {},
  onTransitionEnd: function onTransitionEnd() {}
};

var Main = _styledComponents2.default.div(_templateObject, function (_ref3) {
  var opened = _ref3.opened;
  return opened ? "auto" : "none";
});

var Overlay = (0, _styledComponents2.default)(_reactSpring.animated.div)(_templateObject2);

var Panel = (0, _styledComponents2.default)(_reactSpring.animated.aside)(_templateObject3);

var PanelHeader = _styledComponents2.default.header(_templateObject4);

var PanelScrollView = _styledComponents2.default.div(_templateObject5);

var PanelContent = _styledComponents2.default.div(_templateObject6);

var PanelCloseButton = _styledComponents2.default.button(_templateObject7, PanelHeader);

var LogoImg = _styledComponents2.default.img(_templateObject8);

exports.default = SidePanel;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTIzcHgiIGhlaWdodD0iMzBweCIgdmlld0JveD0iMCAwIDEyMyAzMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTEuMyAoNTc1NDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkxvcmlrZWV0IGxvZ288L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZGNTAwIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkNBMTciIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiIGlkPSJsaW5lYXJHcmFkaWVudC0yIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGQTczMCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkY2QTNDIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjY1MTMiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y0M0ZGOSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9Ijk0LjAwNzMxMDMlIiB4Mj0iNTAlIiB5Mj0iOS45Mjc3MzQ3OSUiIGlkPSJsaW5lYXJHcmFkaWVudC00Ij4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzQzOEVGRiIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNkFDQ0ZGIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtNSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzRkZCNTUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0JCRjkzRiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJXZWJzaXRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iZ3VpZGVsaW5lcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMyLjAwMDAwMCwgLTE3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iTG9yaWtlZXQtbG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuMDAwMDAwLCA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLUNvcHktMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMuNDE5MDAwLCAxMC4zOTUwMDApIiBvcGFjaXR5PSIwLjkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy40MDk2NTc4LDEzLjYwOCBDMTEuMjczODg1OSwxNi45MTI5MTY0IDEwLjIwNiwyMC42MTEzNDQyIDEwLjIwNiwyNC43MDMyODM1IEMxMC4yMDYsMjkuNjIwMzQ0MiAxMS4yNzM4ODU5LDM0LjkzMDkxNjQgMTMuNDA5NjU3OCw0MC42MzUgQzE1LjY4Mzg4NTksMzQuOTYyMDU0IDE2LjgyMSwyOS42ODgzMjMgMTYuODIxLDI0LjgxMzgwNjkgQzE2LjgyMSwyMC42NzkzMjMgMTUuNjgzODg1OSwxNi45NDQwNTQgMTMuNDA5NjU3OCwxMy42MDggWiIgaWQ9Im9yaWdpbmFsX1BhdGgtMl82Nzc3OTI2NSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMuNTEzNTAwLCAyNy4xMjE1MDApIHJvdGF0ZSgtOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTEzLjUxMzUwMCwgLTI3LjEyMTUwMCkgIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LjM1NDY1NzgsOS4wNzIgQzEyLjIxODg4NTksMTIuMzc2OTE2NCAxMS4xNTEsMTYuMDc1MzQ0MiAxMS4xNTEsMjAuMTY3MjgzNSBDMTEuMTUxLDI1LjA4NDM0NDIgMTIuMjE4ODg1OSwzMC4zOTQ5MTY0IDE0LjM1NDY1NzgsMzYuMDk5IEMxNi42Mjg4ODU5LDMwLjQyNjA1NCAxNy43NjYsMjUuMTUyMzIzIDE3Ljc2NiwyMC4yNzc4MDY5IEMxNy43NjYsMTYuMTQzMzIzIDE2LjYyODg4NTksMTIuNDA4MDU0IDE0LjM1NDY1NzgsOS4wNzIgWiIgaWQ9Im9yaWdpbmFsX1BhdGgtMl82Nzc3OTI2NS1Db3B5IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTIpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNC40NTg1MDAsIDIyLjU4NTUwMCkgcm90YXRlKC03MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTQuNDU4NTAwLCAtMjIuNTg1NTAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTYuNDMzNjU3OCw1LjI5MiBDMTQuMjk3ODg1OSw4LjU5NjkxNjQxIDEzLjIzLDEyLjI5NTM0NDIgMTMuMjMsMTYuMzg3MjgzNSBDMTMuMjMsMjEuMzA0MzQ0MiAxNC4yOTc4ODU5LDI2LjYxNDkxNjQgMTYuNDMzNjU3OCwzMi4zMTkgQzE4LjcwNzg4NTksMjYuNjQ2MDU0IDE5Ljg0NSwyMS4zNzIzMjMgMTkuODQ1LDE2LjQ5NzgwNjkgQzE5Ljg0NSwxMi4zNjMzMjMgMTguNzA3ODg1OSw4LjYyODA1NDA0IDE2LjQzMzY1NzgsNS4yOTIgWiIgaWQ9Im9yaWdpbmFsX1BhdGgtMl82Nzc3OTI2NS1Db3B5LTIiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LjUzNzUwMCwgMTguODA1NTAwKSByb3RhdGUoLTUxLjAwMDAwMCkgdHJhbnNsYXRlKC0xNi41Mzc1MDAsIC0xOC44MDU1MDApICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS44MzU2NTc4LDIuMjY4IEMxNy42OTk4ODU5LDUuNTcyOTE2NDEgMTYuNjMyLDkuMjcxMzQ0MjQgMTYuNjMyLDEzLjM2MzI4MzUgQzE2LjYzMiwxOC4yODAzNDQyIDE3LjY5OTg4NTksMjMuNTkwOTE2NCAxOS44MzU2NTc4LDI5LjI5NSBDMjIuMTA5ODg1OSwyMy42MjIwNTQgMjMuMjQ3LDE4LjM0ODMyMyAyMy4yNDcsMTMuNDczODA2OSBDMjMuMjQ3LDkuMzM5MzIzIDIyLjEwOTg4NTksNS42MDQwNTQwNCAxOS44MzU2NTc4LDIuMjY4IFoiIGlkPSJvcmlnaW5hbF9QYXRoLTJfNjc3NzkyNjUtQ29weS0zIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTQpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOS45Mzk1MDAsIDE1Ljc4MTUwMCkgcm90YXRlKC0zMi4wMDAwMDApIHRyYW5zbGF0ZSgtMTkuOTM5NTAwLCAtMTUuNzgxNTAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjMuNjE1NjU3OCwwLjU2NyBDMjEuNDc5ODg1OSwzLjg3MTkxNjQxIDIwLjQxMiw3LjU3MDM0NDI0IDIwLjQxMiwxMS42NjIyODM1IEMyMC40MTIsMTYuNTc5MzQ0MiAyMS40Nzk4ODU5LDIxLjg4OTkxNjQgMjMuNjE1NjU3OCwyNy41OTQgQzI1Ljg4OTg4NTksMjEuOTIxMDU0IDI3LjAyNywxNi42NDczMjMgMjcuMDI3LDExLjc3MjgwNjkgQzI3LjAyNyw3LjYzODMyMyAyNS44ODk4ODU5LDMuOTAzMDU0MDQgMjMuNjE1NjU3OCwwLjU2NyBaIiBpZD0ib3JpZ2luYWxfUGF0aC0yXzY3Nzc5MjY1LUNvcHktNCIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC01KSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMuNzE5NTAwLCAxNC4wODA1MDApIHJvdGF0ZSgtMTQuMDAwMDAwKSB0cmFuc2xhdGUoLTIzLjcxOTUwMCwgLTE0LjA4MDUwMCkgIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8dGV4dCBpZD0iTG9yaWtlZXQiIGZvbnQtZmFtaWx5PSJPdmVycGFzcy1Cb2xkLCBPdmVycGFzcyIgZm9udC1zaXplPSIyMi42OCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMxRDFEMUQiPgogICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PSI0OC43NjIiIHk9IjM4LjQ0MyI+TG9yaWtlZXQ8L3RzcGFuPgogICAgICAgICAgICAgICAgPC90ZXh0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDEuMDE0TDYuMDE0IDUgMTAgOC45ODYgOC45ODYgMTAgNSA2LjAxNCAxLjAxNCAxMCAwIDguOTg2IDMuOTg2IDUgMCAxLjAxNCAxLjAxNCAwIDUgMy45ODYgOC45ODYgMHoiIGZpbGw9IiM2RDc3N0IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjciLz48L3N2Zz4="

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxwYXRoIGQ9Ik0yIDE5di0yLjM1MmgyMFYxOUgyem0wLTUuODUydi0yLjI5NmgyMHYyLjI5Nkgyek0yIDVoMjB2Mi4zNTJIMlY1eiIgZmlsbD0iIzcwNzA3MCIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo="

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxwYXRoIGQ9Ik0yIDE5di0yLjM1MmgyMFYxOUgyem0wLTUuODUydi0yLjI5NmgyMHYyLjI5Nkgyek0yIDVoMjB2Mi4zNTJIMlY1eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo="

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 64px;\n  background-image: linear-gradient(\n    -179deg,\n    #bae2f0 0%,\n    #f5fcff 49%,\n    #f7fbfd 97%\n  );\n  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6vw), 0 100%);\n'], ['\n  padding-top: 64px;\n  background-image: linear-gradient(\n    -179deg,\n    #bae2f0 0%,\n    #f5fcff 49%,\n    #f7fbfd 97%\n  );\n  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6vw), 0 100%);\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100vw;\n  max-width: 1200px;\n  margin: auto;\n  min-height: 500px;\n  height: auto;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  ', ';\n  width: 80%;\n  margin: auto;\n  padding: 50px 0;\n  ', ';\n'], ['\n  width: 100vw;\n  max-width: 1200px;\n  margin: auto;\n  min-height: 500px;\n  height: auto;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  ', ';\n  width: 80%;\n  margin: auto;\n  padding: 50px 0;\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-weight: 400;\n  font-size: 3.5rem;\n  color: #5e8fbf;\n  letter-spacing: 0.6px;\n  max-width: 80%;\n  ', ';\n'], ['\n  font-weight: 400;\n  font-size: 3.5rem;\n  color: #5e8fbf;\n  letter-spacing: 0.6px;\n  max-width: 80%;\n  ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  max-width: 75%;\n  margin-bottom: 20px;\n'], ['\n  max-width: 75%;\n  margin-bottom: 20px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: relative;\n  max-width: 565px;\n  height: auto;\n  background-image: url(', ');\n  background-position: top;\n  background-size: contain;\n\n'], ['\n  position: relative;\n  max-width: 565px;\n  height: auto;\n  background-image: url(', ');\n  background-position: top;\n  background-size: contain;\n\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  max-width: 100%;\n  margin-top: 28px;\n  margin-bottom: -10px;\n'], ['\n  max-width: 100%;\n  margin-top: 28px;\n  margin-bottom: -10px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _About = __webpack_require__(11);

var _About2 = _interopRequireDefault(_About);

var _heroContainer = __webpack_require__(40);

var _heroContainer2 = _interopRequireDefault(_heroContainer);

var _heroPlaceholder = __webpack_require__(41);

var _heroPlaceholder2 = _interopRequireDefault(_heroPlaceholder);

var _logo = __webpack_require__(42);

var _logo2 = _interopRequireDefault(_logo);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Hero = function Hero() {
  return _react2.default.createElement(
    OuterContainer,
    null,
    _react2.default.createElement(
      HeroBox,
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(Logo, { src: _logo2.default }),
        _react2.default.createElement(
          Title,
          null,
          'A design system for the decentralized web'
        )
      ),
      _react2.default.createElement(
        ImageContainer,
        null,
        _react2.default.createElement(Image, { src: _heroPlaceholder2.default })
      )
    ),
    _react2.default.createElement(_About2.default, null)
  );
};

var OuterContainer = _styledComponents2.default.div(_templateObject);

var HeroBox = _styledComponents2.default.div(_templateObject2, large('flex-direction: row; justify-content: space-between;'), medium('padding: 150px 0;'));

var Title = _styledComponents2.default.h1(_templateObject3, medium('font-size: 46px; max-width: 550px;'));

var Logo = _styledComponents2.default.img(_templateObject4);
var ImageContainer = _styledComponents2.default.div(_templateObject5, _heroContainer2.default);
var Image = _styledComponents2.default.img(_templateObject6);

exports.default = Hero;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMjYgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT50aWNrIGNpcmNsZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJXZWJzaXRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibG9yaWtlZXQtbGFuZGluZy1jb3B5LTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODYuMDAwMDAwLCAtOTEyLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4Ni4wMDAwMDAsIDkxMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0zIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0idGljay1jaXJjbGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTQiIGZpbGw9IiNCQUUyRjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgcng9IjEzIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IkxpbmUtMyIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHBvaW50cz0iNiAxMi4yNjIxNjk1IDkuOTMxOTY5NjYgMTcgMTkgOSI+PC9wb2x5bGluZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkzIiBoZWlnaHQ9IjQxOCIgdmVyc2lvbj0iMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8cmVjdCBpZD0iYSIgd2lkdGg9IjU5MyIgaGVpZ2h0PSI0MTgiIHJ4PSIzIi8+CiAgPC9kZWZzPgogIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+CiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgIDwvbWFzaz4KICAgIDx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2EiLz4KICAgIDxnIG1hc2s9InVybCgjYikiPgogICAgICA8cGF0aCBmaWxsPSIjRURGMUY1IiBkPSJNMCAwaDYxM3YyN0gweiIvPgogICAgICA8cGF0aCBkPSJNNjMgNmwxLTFoNTE5bDIgMXYxNWwtMiAySDY0bC0xLTJWNnoiIGZpbGw9IiNGOEY5RkIiLz4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNiA5KSI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjRkY2MDU3IiBjeD0iNCIgY3k9IjQiIHI9IjQiLz4KICAgICAgICA8Y2lyY2xlIGZpbGw9IiNGRkMxMkUiIGN4PSIxNyIgY3k9IjQiIHI9IjQiLz4KICAgICAgICA8Y2lyY2xlIGZpbGw9IiMyOENBNDAiIGN4PSIzMSIgY3k9IjQiIHI9IjQiLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/9a55ce3a-hero-placeholder.jpg";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/66a20f80-logo.svg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100vw;\n  height: auto;\n  padding: 50px 20% 100px 20%;\n'], ['\n  width: 100vw;\n  height: auto;\n  padding: 50px 20% 100px 20%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 20px auto;\n  display: flex;\n  flex-wrap: wrap;\n'], ['\n  margin: 20px auto;\n  display: flex;\n  flex-wrap: wrap;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 33%;\n  padding: 10px;\n'], ['\n  width: 33%;\n  padding: 10px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Projects = function Projects() {
  return _react2.default.createElement(
    ProjectsBox,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'View examples'
      ),
      _react2.default.createElement(Container, null)
    )
  );
};

var ProjectsBox = _styledComponents2.default.div(_templateObject);

var Container = _styledComponents2.default.div(_templateObject2);
var Box = _styledComponents2.default.div(_templateObject3);

exports.default = Projects;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100vw;\n  height: auto;\n  min-height: 100vh;\n  background: #F7FBFD;\n  padding: 50px 10% 100px 10%;\n  padding: calc(50px + 12vh) 10% 100px 10%;\n  clip-path: polygon(0 3vh,100% 0,100% calc(100% - 6vw),0 100%);\n  ', ';\n'], ['\n  width: 100vw;\n  height: auto;\n  min-height: 100vh;\n  background: #F7FBFD;\n  padding: 50px 10% 100px 10%;\n  padding: calc(50px + 12vh) 10% 100px 10%;\n  clip-path: polygon(0 3vh,100% 0,100% calc(100% - 6vw),0 100%);\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 20px auto;\n  display: flex;\n  flex-wrap: wrap;\n'], ['\n  margin: 20px auto;\n  display: flex;\n  flex-wrap: wrap;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  ', ';\n  ', ';\n  padding: 10px;\n'], ['\n  width: 100%;\n  ', ';\n  ', ';\n  padding: 10px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  max-width: 1200px;\n  margin: auto;\n  min-height: 900px;\n'], ['\n  max-width: 1200px;\n  margin: auto;\n  min-height: 900px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactTwitterWidgets = __webpack_require__(45);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};
var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var Projects = function Projects() {
  return _react2.default.createElement(
    ProjectsBox,
    null,
    _react2.default.createElement(
      OuterContainer,
      null,
      _react2.default.createElement(
        'h2',
        null,
        'What people are saying'
      ),
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          TwitterBox,
          null,
          _react2.default.createElement(_reactTwitterWidgets.Tweet, { tweetId: '1045037331923767297' })
        ),
        _react2.default.createElement(
          TwitterBox,
          null,
          _react2.default.createElement(_reactTwitterWidgets.Tweet, { tweetId: '1044624201179553792' })
        ),
        _react2.default.createElement(
          TwitterBox,
          null,
          _react2.default.createElement(_reactTwitterWidgets.Tweet, { tweetId: '1045798807630278656' })
        ),
        _react2.default.createElement(
          TwitterBox,
          null,
          _react2.default.createElement(_reactTwitterWidgets.Tweet, { tweetId: '1047140552137949185' })
        ),
        _react2.default.createElement(
          TwitterBox,
          null,
          _react2.default.createElement(_reactTwitterWidgets.Tweet, { tweetId: '1047131473575337991' })
        ),
        _react2.default.createElement(
          TwitterBox,
          null,
          _react2.default.createElement(_reactTwitterWidgets.Tweet, { tweetId: '1046537615091134464' })
        )
      )
    )
  );
};

var ProjectsBox = _styledComponents2.default.div(_templateObject, medium('clip-path: polygon(0 12vh, 100% 0, 100% calc(100% - 6vw), 0 100%);'));

var Container = _styledComponents2.default.div(_templateObject2);

var TwitterBox = _styledComponents2.default.div(_templateObject3, medium('width: 50%;'), large('width: 33%;'));
var OuterContainer = _styledComponents2.default.div(_templateObject4);

exports.default = Projects;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("react-twitter-widgets");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  max-width: 1200px;\n  margin: auto;\n'], ['\n  max-width: 1200px;\n  margin: auto;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100vw;\n  height: auto;\n  padding: 66px 15% 100px 15%;\n'], ['\n  width: 100vw;\n  height: auto;\n  padding: 66px 15% 100px 15%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin: 20px auto;\n  display: flex;\n  flex-wrap: wrap;\n'], ['\n  margin: 20px auto;\n  display: flex;\n  flex-wrap: wrap;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 33%;\n  padding: 10px;\n'], ['\n  width: 33%;\n  padding: 10px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-weight: 300;\n  font-size: 1.7rem;\n  color: #424770;\n  letter-spacing: 0;\n  text-align: center;\n  line-height: 27px;\n  margin: 20px 0 50px 0;\n  a {\n    color: #67b0d7;\n    cursor: pointer;\n    text-decoration: none;\n  }\n'], ['\n  font-weight: 300;\n  font-size: 1.7rem;\n  color: #424770;\n  letter-spacing: 0;\n  text-align: center;\n  line-height: 27px;\n  margin: 20px 0 50px 0;\n  a {\n    color: #67b0d7;\n    cursor: pointer;\n    text-decoration: none;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  margin: 50px auto 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n'], ['\n  margin: 50px auto 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  background: black;\n  color: white;\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.26px;\n  text-transform: uppercase;\n  padding: 8px 45px;\n  ', ';\n  margin: 10px 20px;\n  width: 235px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  img {\n    margin-right: 5px;\n  }\n'], ['\n  background: black;\n  color: white;\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.26px;\n  text-transform: uppercase;\n  padding: 8px 45px;\n  ', ';\n  margin: 10px 20px;\n  width: 235px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  img {\n    margin-right: 5px;\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  background-image: linear-gradient(-141deg, #6993fb 0%, #6dcbfe 100%);\n  border-radius: 4px;\n  font-weight: 700;\n  font-size: 14px;\n  color: #ffffff;\n  letter-spacing: 0.26px;\n  text-transform: uppercase;\n  padding: 8px 45px;\n  ', ';\n  margin: 10px 20px;\n  height: 40.5px;\n  width: 235px;\n  text-align: center;\n'], ['\n  background-image: linear-gradient(-141deg, #6993fb 0%, #6dcbfe 100%);\n  border-radius: 4px;\n  font-weight: 700;\n  font-size: 14px;\n  color: #ffffff;\n  letter-spacing: 0.26px;\n  text-transform: uppercase;\n  padding: 8px 45px;\n  ', ';\n  margin: 10px 20px;\n  height: 40.5px;\n  width: 235px;\n  text-align: center;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Contributors = __webpack_require__(47);

var _Contributors2 = _interopRequireDefault(_Contributors);

var _ui = __webpack_require__(2);

var _github = __webpack_require__(66);

var _github2 = _interopRequireDefault(_github);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};


var Projects = function Projects() {
  return _react2.default.createElement(
    ProjectsBox,
    null,
    _react2.default.createElement(
      OuterContainer,
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Open source contributions'
      ),
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          Subtitle,
          null,
          'Lorikeet is licensed with MIT License. Maintained by ',
          _react2.default.createElement(
            _ui.SafeLink,
            { href: 'https://github.com/bpierre', target: '_blank' },
            '@bpierre'
          ),
          ' ',
          'and ',
          _react2.default.createElement(
            _ui.SafeLink,
            { href: 'https://github.com/dharmaone', target: '_blank' },
            '@dharmaone'
          ),
          ' and backed by ',
          _react2.default.createElement(
            _ui.SafeLink,
            { href: 'https://github.com/aragon', target: '_blank' },
            '@AragonProject'
          ),
          ', it is a community project with many amazing contributors from around the world. Thank you to everyone, and a warm welcome to new contributors'
        ),
        _react2.default.createElement(_Contributors2.default, null),
        _react2.default.createElement(
          ButtonsBox,
          null,
          _react2.default.createElement(
            StyledBlackButton,
            { href: 'https://github.com/lorikeetui/lorikeet', target: '_blank' },
            _react2.default.createElement('img', { src: _github2.default }),
            'View on github'
          ),
          _react2.default.createElement(
            StyledBLueButton,
            null,
            'Check the docs'
          )
        )
      )
    )
  );
};

var OuterContainer = _styledComponents2.default.div(_templateObject);

var ProjectsBox = _styledComponents2.default.div(_templateObject2);

var Container = _styledComponents2.default.div(_templateObject3);
var Box = _styledComponents2.default.div(_templateObject4);

var Subtitle = _styledComponents2.default.p(_templateObject5);
var ButtonsBox = _styledComponents2.default.div(_templateObject6);
var StyledBlackButton = (0, _styledComponents2.default)(_ui.Button.Anchor)(_templateObject7, medium('margin: 0 20px;'));

var StyledBLueButton = (0, _styledComponents2.default)(_ui.Button)(_templateObject8, medium('margin: 0 20px;'));

exports.default = Projects;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: 20px auto;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n'], ['\n  margin: 20px auto;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 5px 10px;\n'], ['\n  margin: 5px 10px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

var _ = __webpack_require__(48);

var _2 = _interopRequireDefault(_);

var _3 = __webpack_require__(49);

var _4 = _interopRequireDefault(_3);

var _5 = __webpack_require__(50);

var _6 = _interopRequireDefault(_5);

var _7 = __webpack_require__(51);

var _8 = _interopRequireDefault(_7);

var _9 = __webpack_require__(52);

var _10 = _interopRequireDefault(_9);

var _11 = __webpack_require__(53);

var _12 = _interopRequireDefault(_11);

var _13 = __webpack_require__(54);

var _14 = _interopRequireDefault(_13);

var _15 = __webpack_require__(55);

var _16 = _interopRequireDefault(_15);

var _17 = __webpack_require__(56);

var _18 = _interopRequireDefault(_17);

var _19 = __webpack_require__(57);

var _20 = _interopRequireDefault(_19);

var _21 = __webpack_require__(58);

var _22 = _interopRequireDefault(_21);

var _23 = __webpack_require__(59);

var _24 = _interopRequireDefault(_23);

var _25 = __webpack_require__(60);

var _26 = _interopRequireDefault(_25);

var _27 = __webpack_require__(61);

var _28 = _interopRequireDefault(_27);

var _29 = __webpack_require__(62);

var _30 = _interopRequireDefault(_29);

var _31 = __webpack_require__(63);

var _32 = _interopRequireDefault(_31);

var _33 = __webpack_require__(64);

var _34 = _interopRequireDefault(_33);

var _35 = __webpack_require__(65);

var _36 = _interopRequireDefault(_35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Projects = function Projects() {
  return _react2.default.createElement(
    Container,
    {
      href: 'https://github.com/lorikeetui/lorikeet/graphs/contributors',
      target: '_blank'
    },
    _react2.default.createElement(Image, { src: _2.default }),
    _react2.default.createElement(Image, { src: _4.default }),
    _react2.default.createElement(Image, { src: _6.default }),
    _react2.default.createElement(Image, { src: _8.default }),
    _react2.default.createElement(Image, { src: _10.default }),
    _react2.default.createElement(Image, { src: _12.default }),
    _react2.default.createElement(Image, { src: _14.default }),
    _react2.default.createElement(Image, { src: _16.default }),
    _react2.default.createElement(Image, { src: _18.default }),
    _react2.default.createElement(Image, { src: _20.default }),
    _react2.default.createElement(Image, { src: _22.default }),
    _react2.default.createElement(Image, { src: _24.default }),
    _react2.default.createElement(Image, { src: _26.default }),
    _react2.default.createElement(Image, { src: _28.default }),
    _react2.default.createElement(Image, { src: _30.default }),
    _react2.default.createElement(Image, { src: _32.default }),
    _react2.default.createElement(Image, { src: _34.default }),
    _react2.default.createElement(Image, { src: _36.default })
  );
};

var Container = (0, _styledComponents2.default)(_ui.SafeLink)(_templateObject);
var Image = _styledComponents2.default.img(_templateObject2);

exports.default = Projects;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/8f27e738-2.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/153d47b1-3.png";

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ee675b6a-7.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/92696be5-8.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/8ae1a0bc-9.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/de5857a0-10.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/1c7f15a8-11.png";

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/597e17c2-13.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/0ffce02c-14.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/cba7af9d-15.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/df60e9a1-16.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bb15ada7-17.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/2f080e65-18.png";

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjVweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjUgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IldlYnNpdGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb3Jpa2VldC1sYW5kaW5nIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDU1LjAwMDAwMCwgLTM2NzIuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIxLjAwMDAwMCwgMzIxNy4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTk4LjAwMDAwMCwgNDQ3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJidXR0b24iPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYuMDAwMDAwLCA4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkNsaXAtMiIgcG9pbnRzPSIwIDAgMjUgMCAyNSAyNCAwIDI0Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuNDk5MjMyNywwIEM1LjU5Njk5MjAyLDAgMCw1LjUwOTI1OTU1IDAsMTIuMzA0ODE4NyBDMCwxNy43NDAwNTc0IDMuNTgxMTg0NzgsMjIuMzUyMDA0MSA4LjU0ODk1NjQxLDIzLjk3ODk1MDIgQzkuMTc0MzQwMDksMjQuMDkxNDkyIDkuNDAyMjQwNjQsMjMuNzEyMzI0NCA5LjQwMjI0MDY0LDIzLjM4NjAyODggQzkuNDAyMjQwNjQsMjMuMDkzNzIyMyA5LjM5MTQ5Nzg1LDIyLjMyMDI4MDkgOS4zODUzNTkxMiwyMS4yOTMwNTQgQzUuOTA4NTMyODQsMjIuMDM3MDM4MiA1LjE3NDk1Mzk2LDE5LjY0NDIwMzggNS4xNzQ5NTM5NiwxOS42NDQyMDM4IEM0LjYwNjM1MzU5LDE4LjIyMjcwMyAzLjc4NjgzMjQxLDE3Ljg0NDI5MDggMy43ODY4MzI0MSwxNy44NDQyOTA4IEMyLjY1MTkzMzcsMTcuMDgwNjY4NCAzLjg3Mjc3NDcxLDE3LjA5NjUzIDMuODcyNzc0NzEsMTcuMDk2NTMgQzUuMTI3Mzc4NzYsMTcuMTgzMzkxMSA1Ljc4NzI5MjgyLDE4LjM2Mzk0NjcgNS43ODcyOTI4MiwxOC4zNjM5NDY3IEM2LjkwMjI0MDY0LDIwLjI0NDY3ODMgOC43MTI0MDAyNSwxOS43MDE2MDc2IDkuNDI1MjYwOSwxOS4zODY2NDE3IEM5LjUzODgyNzUsMTguNTkxMjk2MiA5Ljg2MTExMTExLDE4LjA0ODk4MDggMTAuMjE4NjkyNCwxNy43NDE1NjgxIEM3LjQ0MzIxNjcsMTcuNDMxMTM0MSA0LjUyNTAxNTM1LDE2LjM3NTk2MDUgNC41MjUwMTUzNSwxMS42NjA1MzU5IEM0LjUyNTAxNTM1LDEwLjMxNzU4NzggNS4wMTIyNzc0Nyw5LjIxOTM2MTQgNS44MTE4NDc3Niw4LjM1OTA1ODg3IEM1LjY4MjkzNDMyLDguMDQ3ODY5NTUgNS4yNTM5OTAxOCw2Ljc5NzA2OTc0IDUuOTMzODU1MTMsNS4xMDM2NTU5OSBDNS45MzM4NTUxMyw1LjEwMzY1NTk5IDYuOTgzNTc4ODgsNC43NzIwNzMxOSA5LjM3MTU0Njk2LDYuMzY0Mjc0ODggQzEwLjM2ODMyNDEsNi4wOTE2MDY1NiAxMS40Mzc5OTg4LDUuOTU0ODk0NzQgMTIuNTAwNzY3Myw1Ljk1MDM2Mjg2IEMxMy41NjIwMDEyLDUuOTU0ODk0NzQgMTQuNjMxNjc1OSw2LjA5MTYwNjU2IDE1LjYyOTk4NzcsNi4zNjQyNzQ4OCBDMTguMDE2NDIxMSw0Ljc3MjA3MzE5IDE5LjA2Mzg0MjgsNS4xMDM2NTU5OSAxOS4wNjM4NDI4LDUuMTAzNjU1OTkgQzE5Ljc0NjAwOTgsNi43OTcwNjk3NCAxOS4zMTcwNjU3LDguMDQ3ODY5NTUgMTkuMTg4MTUyMiw4LjM1OTA1ODg3IEMxOS45ODkyNTcyLDkuMjE5MzYxNCAyMC40NzM0NSwxMC4zMTc1ODc4IDIwLjQ3MzQ1LDExLjY2MDUzNTkgQzIwLjQ3MzQ1LDE2LjM4NzI5MDMgMTcuNTUwNjQ0NiwxNy40MjczNTc1IDE0Ljc2NTk2MDcsMTcuNzMyNTA0MyBDMTUuMjE0ODU1NywxOC4xMTE2NzE5IDE1LjYxNDY0MDksMTguODYzMjA5MiAxNS42MTQ2NDA5LDIwLjAxMDUzMSBDMTUuNjE0NjQwOSwyMS42NTU2MDQ3IDE1LjU5OTI5NCwyMi45ODI2OTEyIDE1LjU5OTI5NCwyMy4zODYwMjg4IEMxNS41OTkyOTQsMjMuNzE0NTkwMyAxNS44MjQxMjUyLDI0LjA5NzUzNDUgMTYuNDU4NzE3LDIzLjk3NzQzOTYgQzIxLjQyMTExNzIsMjIuMzQ3NDcyMiAyNSwxNy43Mzg1NDY4IDI1LDEyLjMwNDgxODcgQzI1LDUuNTA5MjU5NTUgMTkuNDAzMDA4LDAgMTIuNDk5MjMyNywwIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkVGRUZFIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/9800ecaf-powered-by-aragon.svg";

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMzciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTIuNSAxOC41YzAtMy40MDU4IDIuNzk4Mi02LjE2NjcgNi4yNS02LjE2NjdTMjUgMTUuMDk0MyAyNSAxOC41YzAgMy40MDU4LTIuNzk4MiA2LjE2NjctNi4yNSA2LjE2NjdTMTIuNSAyMS45MDU3IDEyLjUgMTguNXoiIGZpbGw9IiMxQUJDRkUiLz48cGF0aCBkPSJNMCAzMC44MzMzYzAtMy40MDU3IDIuNzk4Mi02LjE2NjYgNi4yNS02LjE2NjZoNi4yNXY2LjE2NjZDMTIuNSAzNC4yMzkxIDkuNzAxOCAzNyA2LjI1IDM3UzAgMzQuMjM5IDAgMzAuODMzM3oiIGZpbGw9IiMwQUNGODMiLz48cGF0aCBkPSJNMTIuNSAwdjEyLjMzMzNoNi4yNWMzLjQ1MTggMCA2LjI1LTIuNzYwOSA2LjI1LTYuMTY2NkMyNSAyLjc2MDkgMjIuMjAxOCAwIDE4Ljc1IDBIMTIuNXoiIGZpbGw9IiNGRjcyNjIiLz48cGF0aCBkPSJNMCA2LjE2NjdjMCAzLjQwNTcgMi43OTgyIDYuMTY2NiA2LjI1IDYuMTY2Nmg2LjI1VjBINi4yNUMyLjc5ODIgMCAwIDIuNzYxIDAgNi4xNjY3eiIgZmlsbD0iI0YyNEUxRSIvPjxwYXRoIGQ9Ik0wIDE4LjVjMCAzLjQwNTggMi43OTgyIDYuMTY2NyA2LjI1IDYuMTY2N2g2LjI1VjEyLjMzMzNINi4yNUMyLjc5ODIgMTIuMzMzMyAwIDE1LjA5NDMgMCAxOC41eiIgZmlsbD0iI0EyNTlGRiIvPjwvZz48L3N2Zz4K"

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iMzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRkRCMzAwIiBkPSJNOC40OTIgMS4xODQ3TDE5LjQ2MDYgMGwxMC45Njg3IDEuMTg0NyA4LjQ5MiAxMS42NDZMMTkuNDYwNyAzNS45ODIgMCAxMi44MzA3eiIvPjxwYXRoIGZpbGw9IiNFQTZDMDAiIGQ9Ik03Ljg4MjYgMTIuODMwN0wxOS40NjA3IDM1Ljk4MiAwIDEyLjgzMDd6TTMxLjAzODggMTIuODMwN0wxOS40NjA3IDM1Ljk4MmwxOS40NjA3LTIzLjE1MTR6Ii8+PHBhdGggZmlsbD0iI0ZEQUQwMCIgZD0iTTcuODgyNiAxMi44MzA3aDIzLjE1NjNMMTkuNDYwNyAzNS45ODJ6Ii8+PGc+PHBhdGggZmlsbD0iI0ZERDIzMSIgZD0iTTE5LjQ2MDcgMEw4LjQ5MTkgMS4xODQ3bC0uNjA5MyAxMS42NDZ6Ii8+PHBhdGggZmlsbD0iI0ZERDIzMSIgZD0iTTE5LjQ2MDYgMGwxMC45Njg4IDEuMTg0Ny42MDk0IDExLjY0NnoiLz48cGF0aCBmaWxsPSIjRkRBRDAwIiBkPSJNMzguOTIxNCAxMi44MzA3bC04LjQ5Mi0xMS42NDYuNjA5NSAxMS42NDZ6TTAgMTIuODMwN2w4LjQ5MTktMTEuNjQ2LS42MDkzIDExLjY0NnoiLz48cGF0aCBmaWxsPSIjRkVFRUI3IiBkPSJNMTkuNDYwNyAwTDcuODgyNiAxMi44MzA3aDIzLjE1NjN6Ii8+PC9nPjwvZz48L3N2Zz4K"

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMzkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iNTAlIiB4Mj0iMTEuMzUzMSUiIHkyPSI1MCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMDBDNUZGIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwOUFGRiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImIiPjxzdG9wIHN0b3AtY29sb3I9IiMwMDVBRkYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDA4REZGIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMi45MzI1IDEyLjc3NkgyNS44NjdWMEguMjM1MXYuMTE3MkwxMi45MzI2IDEyLjc3NnoiLz48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMTIuOTM0NiAxMi43NzZIMHYxMi43NzZoMjUuNjMydi0uMTE3MkwxMi45MzQ2IDEyLjc3NnoiLz48cGF0aCBmaWxsPSJ1cmwoI2IpIiBkPSJNMCAyNS41NTJoMTIuODE2djEyLjg5NDR6Ii8+PC9nPjwvc3ZnPgo="

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n'], ['\n  display: flex;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n'], ['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  text-decoration: none;\n'], ['\n  display: flex;\n  text-decoration: none;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'], ['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: 17px;\n  color: #6DCBFE;\n  padding-left: 20px;\n  padding-right: 7px;\n  white-space: nowrap;\n'], ['\n  font-size: 17px;\n  color: #6DCBFE;\n  padding-left: 20px;\n  padding-right: 7px;\n  white-space: nowrap;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: flex;\n  margin: 9px 0;\n'], ['\n  display: flex;\n  margin: 9px 0;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  width: 20px;\n  height: 20px;\n'], ['\n  width: 20px;\n  height: 20px;\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _downloadicon = __webpack_require__(72);

var _downloadicon2 = _interopRequireDefault(_downloadicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DownloadLink = function DownloadLink(props) {
  return _react2.default.createElement(
    LinkWrapper,
    null,
    _react2.default.createElement(
      IconContainer,
      null,
      _react2.default.createElement(Icon, { src: props.src })
    ),
    _react2.default.createElement(
      DownLink,
      { href: props.href },
      _react2.default.createElement(
        InsideLinkWarpper,
        null,
        _react2.default.createElement(
          LinkText,
          null,
          props.text
        ),
        _react2.default.createElement(DownloadIcon, { src: _downloadicon2.default })
      )
    )
  );
};

exports.default = DownloadLink;


var LinkWrapper = _styledComponents2.default.div(_templateObject);

var IconContainer = _styledComponents2.default.div(_templateObject2);

var DownLink = _styledComponents2.default.a(_templateObject3);

var InsideLinkWarpper = _styledComponents2.default.div(_templateObject4);

var LinkText = _styledComponents2.default.p(_templateObject5);

var Icon = _styledComponents2.default.img(_templateObject6);

var DownloadIcon = _styledComponents2.default.img(_templateObject7);

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIHN0cm9rZT0iIzZEQ0JGRSIgc3Ryb2tlLXdpZHRoPSIxLjM1IiBjeD0iOSIgY3k9IjkiIHI9IjkiLz48cGF0aCBkPSJNOC4zMzEyIDUuMjAwNFYxMi41NzI5YzAgLjM0LS4wMDUuNjc5OCAwIDEuMDE5OHYuMDE1M2MwIC4zNTcuMzE0NC43MDA0LjY4MzMuNjgzMy4zNzA3LS4wMTcuNjgzMy0uMzAwNi42ODMzLS42ODMzdi0uODM4Ny0yLjAwNTQtMi40MzI0LTIuMDk2YzAtLjM0LjAwNTEtLjY3OTggMC0xLjAxOTh2LS4wMTUzYzAtLjM1Ny0uMzE0My0uNzAwNC0uNjgzMy0uNjgzMy0uMzcwNy4wMTctLjY4MzMuMzAwNi0uNjgzMy42ODMzeiIgZmlsbD0iIzZEQ0JGRSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTkuNDk4IDE0LjA4OThsLjk4NzMtLjk4NzQgMS41NzUtMS41NzUuMzYyLS4zNjJjLjI1MjktLjI1MjkuMjcxNy0uNzE3NSAwLS45NjY5LS4yNzMzLS4yNTExLS42OTY5LS4yNjk5LS45NjY4IDBhOTE5MDcxNC4yOTI2IDkxOTA3MTQuMjkyNiAwIDAgMS0yLjU2MjMgMi41NjIzbC0uMzYyMS4zNjIxYy0uMjUyOC4yNTI4LS4yNzE2LjcxNzUgMCAuOTY2OS4yNzMzLjI0OTMuNjk3LjI2OTguOTY2OCAweiIgZmlsbD0iIzZEQ0JGRSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTkuNDk4IDEzLjEyM2wtLjk4NzQtLjk4NzQtMS41NzUtMS41NzUtLjM2Mi0uMzYyYy0uMjUyOS0uMjUzLS43MTc1LS4yNzE3LS45NjcgMC0uMjUxLjI3MzItLjI2OTguNjk2OCAwIC45NjY3bC45ODc0Ljk4NzQgMS41NzUgMS41NzUuMzYyMS4zNjJjLjI1MjguMjUyOS43MTc0LjI3MTcuOTY2OCAwIC4yNDk0LS4yNzMzLjI3LS42OTY5IDAtLjk2Njh6IiBmaWxsPSIjNkRDQkZFIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+Cg=="

/***/ }),
/* 73 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.7ecfebf8.js.map