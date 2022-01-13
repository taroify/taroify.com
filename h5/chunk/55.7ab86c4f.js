(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"173":function(e,t,n){"use strict";n.d(t,"a",(function(){return createVanIconComponent}));var r,c=n(15),o=n(174),i=n(175),a=n.n(i),u=n(24),s=n(198);function addUnitPx(e){return void 0===e?"":"".concat(function unitToPx(e){if("number"==typeof e)return e;if(e.includes("px"))return function convertPx(e){return+(e=e.replace(/px/g,""))}(e);if(e.includes("rem"))return function convertRem(e){return+(e=e.replace(/rem/g,""))*function getRootFontSize(){if(!r){var e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;r=parseFloat(t)}return r}()}(e);if(e.includes("vw"))return function convertVw(e){return+(e=e.replace(/vw/g,""))*window.innerWidth/100}(e);if(e.includes("vh"))return function convertVh(e){return+(e=e.replace(/vh/g,""))*window.innerHeight/100}(e);return parseFloat(e)}(e),"px")}var l=["className","style","name","size","color"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}function _objectWithoutProperties(e,t){if(null==e)return{};var n,r,c=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function VanIcon(e){var t,n=e.className,r=e.style,i=e.name,f=e.size,b=void 0===f?"inherit":f,d=e.color,j=void 0===d?"inherit":d,O=_objectWithoutProperties(e,l),p=s.a.includes(j),m=s.b.includes(b);return u.createElement(o.j,Object.assign({"className":a()("van-icon","van-icon-".concat(i),"taroify-icon",(t={},Object(c.a)(t,"taroify-icon--".concat(j),p),Object(c.a)(t,"taroify-icon--".concat(b),m),t),n),"style":_objectSpread({"color":p?"":j,"fontSize":m?"":addUnitPx(b)},r)},O))}function createVanIconComponent(e){function VanIconWrapper(t){return u.createElement(VanIcon,Object.assign({"name":e},t))}return VanIconWrapper[s.c]=s.c,VanIconWrapper}},"176":function(e,t,n){"use strict";var r=n(187);n.d(t,"a",(function(){return r.a}))},"178":function(e,t,n){"use strict";n(219),n(220),n(217)},"180":function(e,t,n){"use strict";n.d(t,"a",(function(){return addUnitPx})),n.d(t,"b",(function(){return getSizeStyle})),n.d(t,"c",(function(){return unitToPx}));var r,c=n(197),o=n.n(c),i=n(185),a=n.n(i);function addUnitPx(e){return void 0===e?"":"".concat(unitToPx(e),"px")}function getSizeStyle(e){if(a()(e)||o()(e)){var t=addUnitPx(e);return{"width":t,"height":t}}return{}}function convertRem(e){return+(e=e.replace(/rem/g,""))*function getRootFontSize(){if(!r){var e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;r=parseFloat(t)}return r}()}function unitToPx(e){return"number"==typeof e?e:e.includes("px")?function convertPx(e){return+(e=e.replace(/px/g,""))}(e):e.includes("rem")?convertRem(e):e.includes("vw")?function convertVw(e){return+(e=e.replace(/vw/g,""))*window.innerWidth/100}(e):e.includes("vh")?function convertVh(e){return+(e=e.replace(/vh/g,""))*window.innerHeight/100}(e):parseFloat(e)}},"182":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var r="undefined"!=typeof document&&!!document.scripts,c=!1},"183":function(e,t,n){"use strict";n.d(t,"a",(function(){return useMounted}));var r=n(184);function useMounted(e){Object(r.a)(e,[])}},"184":function(e,t,n){"use strict";var r=n(207),c=n.n(r),o=n(172),i=n(24);t.a=function useRenderedEffect(e,t){var n=Object(i.useRef)();Object(i.useEffect)((function(){return Object(o.a)((function(){var t=null==e?void 0:e();c()(t)&&(n.current=t)})),n.current}),t)}},"187":function(e,t,n){"use strict";n.d(t,"a",(function(){return prefixClassname}));function prefixClassname(e){return"".concat("taroify-").concat(e)}},"188":function(e,t,n){"use strict";n.d(t,"a",(function(){return i.a})),n.d(t,"b",(function(){return usePlaceholder})),n.d(t,"c",(function(){return s.a})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return O})),n.d(t,"g",(function(){return m}));var r=n(19),c=n(24),o=n(193),i=n(183);var a=n(174),u=n(180);function usePlaceholder(e,t){var n=t.className,s=function useHeight(e){var t=Object(c.useState)(0),n=Object(r.a)(t,2),a=n[0],u=n[1];return Object(i.a)((function(){return Object(o.a)(e).then((function(e){return e.height})).then(u)})),a}(e);return function(e){var t=e.children;return c.createElement(a.j,{"className":n,"style":{"height":s?"".concat(Object(u.a)(s)):""},"children":t})}}var s=n(184);var l=function useTimeout(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useRef)(),o=Object(c.useCallback)((function(){e.current&&(clearTimeout(e.current),e.current=void 0)}),[]),i=Object(c.useCallback)((function(c,o){if(!e.current){t.current=c,n.current=o;for(var i=arguments.length,a=new Array(i>2?i-2:0),u=2;u<i;u++)a[u-2]=arguments[u];r.current=a,e.current=setTimeout(c,o,a)}}),[]),a=Object(c.useCallback)((function(e,c){if(o(),e){for(var a=arguments.length,u=new Array(a>2?a-2:0),s=2;s<a;s++)u[s-2]=arguments[s];i(e,c,u)}else t.current&&i(t.current,n.current,r.current)}),[]);return Object(c.useMemo)((function(){return{"restart":a,"start":i,"stop":o}}),[a,i,o])},f=n(274),b=n.n(f);var d=function useUniqueId(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"t_",t=Object(c.useRef)(b()(e));return t.current},j=function updateReducer(e){return(e+1)%1e6};var O=function useUpdate(){var e=Object(c.useReducer)(j,0);return Object(r.a)(e,2)[1]},p=n(717);var m=function useWindowResize(e){Object(c.useEffect)((function(){return null===p.b||void 0===p.b||Object(p.b)(e),function(){return null===p.a||void 0===p.a?void 0:Object(p.a)(e)}}),[e])}},"190":function(e,t,n){"use strict";n.d(t,"a",(function(){return demoPrefixClassname}));function demoPrefixClassname(e){return"".concat("taroify-demo-").concat(e)}},"193":function(e,t,n){"use strict";n.d(t,"c",(function(){return makeRect})),n.d(t,"a",(function(){return getRect})),n.d(t,"b",(function(){return getRects}));var r=n(19),c=n(182),o=n(202);function makeRect(e,t){return{"top":0,"left":0,"right":e,"bottom":t,"width":e,"height":t}}function getRect(e){var t=Object(o.a)(e);if(t){if(c.a){if(Object(o.d)(t)){var n=t.innerWidth,i=t.innerHeight;return Promise.resolve(makeRect(n,i))}return Promise.resolve(t.getBoundingClientRect())}return new Promise((function(e){Object(o.h)(t).boundingClientRect().exec((function(n){var c=Object(r.a)(n,1)[0];if(Object(o.c)(t)){var i=c.width,a=c.height;e(makeRect(i,a))}else e(c)}))}))}return Promise.resolve(makeRect(0,0))}function getRects(e,t){var n=Object(o.a)(e);if(n){if(c.a){var i=[];return n.querySelectorAll(t).forEach((function(e){return i.push(e.getBoundingClientRect())})),Promise.resolve(i)}return new Promise((function(e){Object(o.g)(n,t).boundingClientRect().exec((function(t){var n=Object(r.a)(t,1)[0];return e(n)}))}))}return Promise.resolve([])}},"196":function(e,t,n){"use strict";var r=n(173),c=Object(r.a)("arrow-left");t.a=c},"198":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=Symbol("__iconType__"),c=["inherit","mini","small","medium","large"],o=["inherit","default","primary","info","success","warning","danger"]},"202":function(e,t,n){"use strict";n.d(t,"d",(function(){return isWindow})),n.d(t,"a",(function(){return elementUnref})),n.d(t,"c",(function(){return isRootElement})),n.d(t,"e",(function(){return matchSelector})),n.d(t,"b",(function(){return getElementSelector})),n.d(t,"f",(function(){return prependPageSelector})),n.d(t,"h",(function(){return queryNodesRef})),n.d(t,"g",(function(){return queryAllNodesRef}));var r=n(273),c=n.n(r),o=n(201),i=n.n(o),a=n(171),u=n(777),s=n(182);function isWindow(e){return e===window}function elementUnref(e){return null==e?e:"current"in e?e.current:e}function isRootElement(e){return 1===(null==e?void 0:e.nodeType)&&"ROOT"===(null==e?void 0:e.tagName)}function matchSelector(e,t){return e===t}function getElementSelector(e,t){var n=[];return i()(e)||n.push("#".concat(e)),i()(t)||n.push(c()(t," ").join(".")),n.join(".")}function prependPageSelector(e){var t,n=null===(t=Object(a.b)().router)||void 0===t?void 0:t.path;return n?"".concat(n,"__").concat(e):e}function ancestorCustomWrapper(e){if(s.b){for(var t=e;t.parentNode&&!isRootElement(t.parentNode);)t=t.parentNode;if(t&&t!==e)return t}}function queryNodesRef(e){if(isRootElement(e))return Object(u.a)().selectViewport();var t=ancestorCustomWrapper(e);return t?Object(u.a)().select("#".concat(t.uid,">>>#").concat(e.uid)):Object(u.a)().select("#"+e.uid)}function queryAllNodesRef(e,t){if(isRootElement(e))return Object(u.a)().selectViewport();var n=ancestorCustomWrapper(e);return n?Object(u.a)().selectAll("#".concat(n.uid,">>>#").concat(e.uid).concat(t)):Object(u.a)().selectAll("#"+e.uid+t)}},"205":function(e,t,n){"use strict";n.d(t,"a",(function(){return Block}));var r=n(15),c=n(174),o=n(175),i=n.n(o),a=(n(24),n(190)),u=(n(206),n(177));function Block(e){var t,n=e.className,o=e.variant,s=e.title,l=e.children;return Object(u.jsxs)(c.j,{"className":i()(Object(a.a)("block"),n),"children":[s&&Object(u.jsx)(c.j,{"className":Object(a.a)("block__title"),"children":s}),Object(u.jsx)(c.j,{"className":i()((t={},Object(r.a)(t,Object(a.a)("block__content"),"card"!==o),Object(r.a)(t,Object(a.a)("block__card"),"card"===o),t)),"children":l})]})}},"206":function(e,t,n){},"209":function(e,t,n){"use strict";n.d(t,"a",(function(){return Page}));var r,c=n(196),o=n(174),i=n(20),a=n(175),u=n.n(a),s=(n(24),n(190)),l=(n(221),n(177));function Target(e){var t=e.type,n=e.children;return Object(l.jsx)(l.Fragment,{"children":"h5"===t&&n})}function Page(e){var t=e.className,n=e.title,r=e.children;return Object(l.jsxs)(o.j,{"className":u()(Object(s.a)("page"),t),"children":[Object(l.jsx)(Target,{"type":"h5","children":Object(l.jsxs)(o.j,{"className":Object(s.a)("page__nav"),"children":[Object(l.jsx)(c.a,{"className":Object(s.a)("page__nav__back"),"onClick":function onClick(){return Object(i.d)()}}),Object(l.jsxs)(o.j,{"className":Object(s.a)("page__nav__title"),"children":[n," "]})]})}),Object(l.jsx)(o.j,{"className":Object(s.a)("page__content"),"children":r})]})}!function(e){e.H5="h5"}(r||(r={}))},"215":function(e,t,n){"use strict";n.d(t,"a",(function(){return Loading}));var r=n(236),c=n.n(r),o=n(174),i=n(175),a=n.n(i),u=n(24),s=n(176),l=n(180),f=["className","size","type","direction","children"];function _objectWithoutProperties(e,t){if(null==e)return{};var n,r,c=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var b=c()(0,12).map((function(e){return u.createElement(o.j,{"key":e,"className":Object(s.a)("loading__spinner__item")})}));function LoadingSpinner(e){var t=e.size,n=Object(u.useMemo)((function(){var e,n;return{"width":null!==(e=Object(l.a)(t))&&void 0!==e?e:"","height":null!==(n=Object(l.a)(t))&&void 0!==n?n:""}}),[t]);return u.createElement(o.j,{"className":Object(s.a)("loading__spinner"),"style":n},b)}function LoadingCircular(e){var t=e.size,n=Object(u.useMemo)((function(){var e,n;return{"width":null!==(e=Object(l.a)(t))&&void 0!==e?e:"","height":null!==(n=Object(l.a)(t))&&void 0!==n?n:""}}),[t]);return u.createElement(o.j,{"className":Object(s.a)("loading__circular"),"style":n})}function Loading(e){var t=e.className,n=e.size,r=e.type,c=void 0===r?"circular":r,i=e.direction,l=void 0===i?"horizontal":i,b=e.children,d=_objectWithoutProperties(e,f);return u.createElement(o.j,Object.assign({"className":a()(Object(s.a)("loading"),Object(s.a)("loading--".concat(l)),Object(s.a)("loading--".concat(c)),t)},d),"spinner"===c&&u.createElement(LoadingSpinner,{"size":n}),"circular"===c&&u.createElement(LoadingCircular,{"size":n}),b&&u.createElement(o.j,{"className":Object(s.a)("loading__text"),"children":b}))}},"217":function(e,t,n){},"219":function(e,t,n){},"220":function(e,t,n){},"221":function(e,t,n){},"234":function(e,t,n){"use strict";n(178),n(243)},"243":function(e,t,n){},"244":function(e,t,n){var r=n(208),c=n(251),o=n(191),i=Function.prototype,a=Object.prototype,u=i.toString,s=a.hasOwnProperty,l=u.call(Object);e.exports=function isPlainObject(e){if(!o(e)||"[object Object]"!=r(e))return!1;var t=c(e);if(null===t)return!0;var n=s.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&u.call(n)==l}},"246":function(e,t,n){"use strict";var r=n(24),c=Object(r.createContext)({});t.a=c},"251":function(e,t,n){var r=n(304)(Object.getPrototypeOf,Object);e.exports=r},"305":function(e,t,n){"use strict";n(178),n(234),n(306),n(312)},"306":function(e,t,n){"use strict";n(307)},"307":function(e,t,n){},"308":function(e,t,n){"use strict";n.d(t,"b",(function(){return Button})),n.d(t,"a",(function(){return createButton}));var r=n(15),c=n(244),o=n.n(c),i=n(191),a=n.n(i),u=n(212),s=n.n(u),l=n(174),f=n(175),b=n.n(f),d=n(24),j=n(309),O=n(215),p=n(176),m=n(246),h=["className"],v=["className","style","variant","shape","size","color","formType","block","hairline","disabled","loading","icon","children","onClick"];function _objectWithoutProperties(e,t){if(null==e)return{};var n,r,c=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Button(e){var t,n=e.className,c=e.style,o=e.variant,i=void 0===o?"contained":o,u=e.shape,f=e.size,y=void 0===f?"medium":f,g=e.color,w=void 0===g?"default":g,_=e.formType,x=void 0===_?"button":_,P=e.block,k=e.hairline,S=e.disabled,N=e.loading,E=e.icon,R=e.children,W=e.onClick,C=_objectWithoutProperties(e,v),T=function useButtonLoading(e){return Object(d.useMemo)((function(){if(s()(e)&&e)return d.createElement(O.a,{"className":Object(p.a)("button__loading")});if(a()(e)){var t=e.className,n=_objectWithoutProperties(e,h);return d.createElement(O.a,Object.assign({"className":b()(Object(p.a)("button__loading"),t)},n))}return e}),[e])}(N),z=Object(d.useContext)(m.a).onClick;return d.createElement(l.j,{"className":b()(Object(p.a)("button"),(t={},Object(r.a)(t,Object(p.a)("button--text"),"text"===i),Object(r.a)(t,Object(p.a)("button--contained"),"contained"===i),Object(r.a)(t,Object(p.a)("button--outlined"),"outlined"===i),Object(r.a)(t,Object(p.a)("button--".concat(w)),w),Object(r.a)(t,Object(p.a)("button--round"),"round"===u),Object(r.a)(t,Object(p.a)("button--square"),"square"===u),Object(r.a)(t,Object(p.a)("button--mini"),"mini"===y),Object(r.a)(t,Object(p.a)("button--small"),"small"===y),Object(r.a)(t,Object(p.a)("button--medium"),"medium"===y),Object(r.a)(t,Object(p.a)("button--large"),"large"===y),Object(r.a)(t,Object(p.a)("button--hairline"),k),Object(r.a)(t,Object(p.a)("hairline--surround"),k),Object(r.a)(t,Object(p.a)("button--disabled"),S),Object(r.a)(t,Object(p.a)("button--loading"),T),Object(r.a)(t,Object(p.a)("button--block"),P),t),n),"style":c,"onClick":function onClick(t){S||T||(null==W||W(t),null==z||z(t,e))}},d.createElement(l.j,{"className":Object(p.a)("button__content")},null!=T?T:E,R&&d.createElement(l.j,{"className":Object(p.a)("button__text"),"children":R})),d.createElement(j.a,Object.assign({"className":Object(p.a)("button__button"),"formType":"submit"===x?"submit":"reset"===x?"reset":void 0,"disabled":S,"loading":!1},C)))}function createButton(e,t){return o()(e)?d.createElement(Button,Object.assign({},e,t)):d.createElement(Button,Object.assign({"children":e},t))}},"309":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(174),c=n(175),o=n.n(c),i=n(24),a=n(176),u=["className"];function _objectWithoutProperties(e,t){if(null==e)return{};var n,r,c=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=function ButtonBase(e){var t=e.className,n=_objectWithoutProperties(e,u);return i.createElement(r.a,Object.assign({"className":o()(Object(a.a)("button-base"),t)},n))}},"312":function(e,t,n){},"386":function(e,t,n){"use strict";n(178),n(387)},"387":function(e,t,n){},"392":function(e,t,n){"use strict";var r=n(17),c=n.n(r),o=n(15),i=n(19),a=n(174),u=n(25),s=n(175),l=n.n(s),f=n(24),b=n(188),d=n(176),j=n(193),O=n(180),p=n(525);function getSystemRect(){return Object(p.a)().then((function(e){return{"screenHeight":e.screenHeight,"screenWidth":e.screenWidth,"windowHeight":e.windowHeight,"windowWidth":e.windowWidth}}))}var m=["className","style","position","offsetTop","offsetBottom","offset","container","children","onChange","onScroll"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}function asyncGeneratorStep(e,t,n,r,c,o,i){try{var a=e[o](i),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,c)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,c){var o=e.apply(t,n);function _next(e){asyncGeneratorStep(o,r,c,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(o,r,c,_next,_throw,"throw",e)}_next(void 0)}))}}function _objectWithoutProperties(e,t){if(null==e)return{};var n,r,c=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}t.a=function Sticky(e){var t=e.className,n=e.style,r=e.position,s=void 0===r?"top":r,p=e.offsetTop,h=e.offsetBottom,v=e.offset,y=e.container,g=e.children,w=e.onChange,_=e.onScroll,x=_objectWithoutProperties(e,m);if(v){var P=v.top,k=v.bottom;P&&console.warn("[Deprecated] Use the 'offsetTop' prop instead of the 'offset.top' prop."),k&&console.warn("[Deprecated] Use the 'offsetBottom' prop instead of the 'offset.bottom' prop.")}var S=null!=p?p:null==v?void 0:v.top,N=null!=h?h:null==v?void 0:v.bottom,E=Object(f.useRef)(),R=Object(f.useRef)(0),W=Object(f.useState)({}),C=Object(i.a)(W,2),T=C[0],z=C[1],B=Object(f.useState)(!1),I=Object(i.a)(B,2),V=I[0],D=I[1],L=Object(f.useState)(0),U=Object(i.a)(L,2),H=U[0],M=U[1],q=Object(f.useMemo)((function(){var e;return Object(O.c)(null!==(e="top"===s?S:N)&&void 0!==e?e:0)}),[N,S,s]),F=Object(f.useMemo)((function(){if(!V)return{"height":"","width":""};var e={};return T.height&&(e.height=Object(O.a)(T.height)),T.width&&(e.width=Object(O.a)(T.width)),e}),[V,T.height,T.width]),A=Object(f.useMemo)((function(){if(!V)return Object(o.a)({"height":"","width":""},s,"");var e={};return T.height&&(e.height=Object(O.a)(T.height)),T.width&&(e.width=Object(O.a)(T.width)),e.transform=H?"translate3d(0, ".concat(Object(O.a)(H),", 0)"):"",e[s]=Object(O.a)(q),e}),[V,T.height,T.width,H,s,q]);function invokeScroll(e){return _invokeScroll.apply(this,arguments)}function _invokeScroll(){return(_invokeScroll=_asyncToGenerator(c.a.mark((function _callee(e){var t,n,r,o,i,a,u,l;return c.a.wrap((function _callee$(c){for(;;)switch(c.prev=c.next){case 0:return t=e.scrollTop,c.next=3,Object(j.a)(E);case 3:if(!(n=c.sent)){c.next=33;break}if(z(n),"top"!==s){c.next=19;break}if(!y){c.next=16;break}return c.next=10,Object(j.a)(y);case 10:r=c.sent,o=r.bottom-q-n.height,M(o<0?o:0),D(q>n.top&&r.bottom>0),c.next=17;break;case 16:D(q>n.top);case 17:c.next=33;break;case 19:return c.next=21,getSystemRect();case 21:if(i=c.sent,a=i.windowHeight,!y){c.next=32;break}return c.next=26,Object(j.a)(y);case 26:u=c.sent,l=a-u.top-q-n.height,M(l<0?l:0),D(a-q<n.bottom&&a>u.top),c.next=33;break;case 32:D(a-q<n.bottom);case 33:null==_||_({"scrollTop":t});case 34:case"end":return c.stop()}}),_callee)})))).apply(this,arguments)}return Object(f.useEffect)((function(){R.current>0&&(null==w||w(V)),R.current++}),[V,w]),Object(b.a)((function(){return invokeScroll({"scrollTop":0})})),u.a.usePageScroll((function(e){return invokeScroll({"scrollTop":e.scrollTop})})),f.createElement(a.j,Object.assign({"ref":E,"style":_objectSpread(_objectSpread({},n),F)},x),f.createElement(a.j,{"style":A,"className":l()(Object(d.a)("sticky"),Object(o.a)({},Object(d.a)("sticky--fixed"),V),t),"children":g}))}},"695":function(e,t,n){},"741":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return StickyDemo}));n(386);var r=n(392),c=(n(305),n(308)),o=n(174),i=n(24),a=n(205),u=n(209),s=(n(695),n(177));function BasicSticky(){return Object(s.jsx)(a.a,{"title":"基础用法","children":Object(s.jsx)(r.a,{"children":Object(s.jsx)(c.b,{"color":"primary","children":"基础用法"})})})}function OffsetSticky(){return Object(s.jsx)(a.a,{"title":"吸顶距离","className":"sticky-demo__offset-sticky","children":Object(s.jsx)(r.a,{"offsetTop":50,"children":Object(s.jsx)(c.b,{"color":"primary","children":"吸顶距离"})})})}function StickyWithContainer(){var e=Object(i.useRef)();return Object(s.jsx)(a.a,{"title":"指定容器","children":Object(s.jsx)(o.j,{"className":"sticky-demo__container-sticky","ref":e,"children":Object(s.jsx)(r.a,{"container":e,"children":Object(s.jsx)(c.b,{"color":"warning","children":"指定容器"})})})})}function BottomSticky(){return Object(s.jsxs)(a.a,{"title":"吸底距离","className":"sticky-demo__bottom-sticky","children":[Object(s.jsx)(o.j,{"className":"sticky-demo__bottom-sticky__padding"}),Object(s.jsx)(r.a,{"position":"bottom","offsetBottom":50,"children":Object(s.jsx)(c.b,{"color":"primary","children":"吸底距离"})}),Object(s.jsx)(o.j,{"className":"sticky-demo__bottom-sticky__padding"})]})}function StickyDemo(){return Object(s.jsxs)(u.a,{"title":"Sticky 粘性布局","className":"sticky-demo","children":[Object(s.jsx)(BasicSticky,{}),Object(s.jsx)(OffsetSticky,{}),Object(s.jsx)(StickyWithContainer,{}),Object(s.jsx)(BottomSticky,{})]})}}}]);
//# sourceMappingURL=55.7ab86c4f.js.map