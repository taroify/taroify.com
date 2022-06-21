(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"131":function(e,t,r){"use strict";r.d(t,"a",(function(){return createVanIconComponent}));var n,c=r(2),i=r(133),o=r(132),a=r.n(o),u=r(23),s=r(163);function addUnitPx(e){return void 0===e?"":"".concat(function unitToPx(e){if("number"==typeof e)return e;if(e.includes("px"))return function convertPx(e){return+(e=e.replace(/px/g,""))}(e);if(e.includes("rem"))return function convertRem(e){return+(e=e.replace(/rem/g,""))*function getRootFontSize(){if(!n){var e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;n=parseFloat(t)}return n}()}(e);if(e.includes("vw"))return function convertVw(e){return+(e=e.replace(/vw/g,""))*window.innerWidth/100}(e);if(e.includes("vh"))return function convertVh(e){return+(e=e.replace(/vh/g,""))*window.innerHeight/100}(e);return parseFloat(e)}(e),"px")}var l=["className","style","name","size","color"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function VanIcon(e){var t,r=e.className,n=e.style,o=e.name,f=e.size,b=void 0===f?"inherit":f,j=e.color,p=void 0===j?"inherit":j,O=_objectWithoutProperties(e,l),d=s.a.includes(p),m=s.b.includes(b);return u.createElement(i.j,_objectSpread({"className":a()("van-icon","van-icon-".concat(o),"taroify-icon",(t={},Object(c.a)(t,"taroify-icon--".concat(p),d),Object(c.a)(t,"taroify-icon--".concat(b),m),t),r),"style":_objectSpread({"color":d?"":p,"fontSize":m?"":addUnitPx(b)},n)},O))}function createVanIconComponent(e){function VanIconWrapper(t){return u.createElement(VanIcon,_objectSpread({"name":e},t))}return VanIconWrapper[s.c]=s.c,VanIconWrapper}},"134":function(e,t,r){"use strict";var n=r(152);r.d(t,"a",(function(){return n.a}))},"136":function(e,t,r){"use strict";r(188),r(189),r(190)},"143":function(e,t,r){var n=r(159),c=r(322);e.exports=function isArrayLike(e){return null!=e&&c(e.length)&&!n(e)}},"145":function(e,t,r){"use strict";r.d(t,"a",(function(){return addUnitPx})),r.d(t,"b",(function(){return getSizeStyle})),r.d(t,"c",(function(){return unitToPx}));var n,c=r(149),i=r.n(c),o=r(148),a=r.n(o),u=r(724);function addUnitPx(e){return void 0===e?"":"".concat(unitToPx(e),"px")}function getSizeStyle(e){if(a()(e)||i()(e)){var t=addUnitPx(e);return{"width":t,"height":t}}return{}}function convertRem(e){return+(e=e.replace(/rem/g,""))*function getRootFontSize(){if(!n){var e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;n=parseFloat(t)}return n}()}function unitToPx(e){return"number"==typeof e?e:e.includes("rpx")?function convertRpx(e){return+(e=e.replace(/rpx/g,""))/(750/Object(u.b)().windowWidth)}(e):e.includes("px")?function convertPx(e){return+(e=e.replace(/px/g,""))}(e):e.includes("rem")?convertRem(e):e.includes("vw")?function convertVw(e){return+(e=e.replace(/vw/g,""))*window.innerWidth/100}(e):e.includes("vh")?function convertVh(e){return+(e=e.replace(/vh/g,""))*window.innerHeight/100}(e):parseFloat(e)}},"152":function(e,t,r){"use strict";r.d(t,"a",(function(){return prefixClassname}));function prefixClassname(e){return"".concat("taroify-").concat(e)}},"155":function(e,t,r){var n=r(197),c=r(150),i=r(245),o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt;e.exports=function toNumber(e){if("number"==typeof e)return e;if(i(e))return NaN;if(c(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=c(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=a.test(e);return r||u.test(e)?s(e.slice(2),r?2:8):o.test(e)?NaN:+e}},"156":function(e,t,r){"use strict";var n=r(131),c=Object(n.a)("arrow-left");t.a=c},"158":function(e,t,r){"use strict";r.d(t,"a",(function(){return demoPrefixClassname}));function demoPrefixClassname(e){return"".concat("taroify-demo-").concat(e)}},"159":function(e,t,r){var n=r(169),c=r(150);e.exports=function isFunction(e){if(!c(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},"160":function(e,t,r){var n=r(209)();e.exports=n},"163":function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return i}));var n=Symbol("__iconType__"),c=["inherit","mini","small","medium","large"],i=["inherit","default","primary","info","success","warning","danger"]},"170":function(e,t,r){var n=r(155);e.exports=function toFinite(e){return e?(e=n(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},"172":function(e,t,r){var n=r(14).default,c=r(231),i=r(143),o=r(250),a=r(150);e.exports=function isIterateeCall(e,t,r){if(!a(r))return!1;var u=n(t);return!!("number"==u?i(r)&&o(t,r.length):"string"==u&&t in r)&&c(r[t],e)}},"184":function(e,t,r){"use strict";r.d(t,"a",(function(){return Page}));var n,c=r(156),i=r(133),o=r(17),a=r(132),u=r.n(a),s=r(158),l=(r(191),r(135));function Target(e){var t=e.type,r=e.children;return Object(l.jsx)(l.Fragment,{"children":"h5"===t&&r})}function Page(e){var t=e.className,r=e.title,n=e.children;return Object(l.jsxs)(i.j,{"className":u()(Object(s.a)("page"),t),"children":[Object(l.jsx)(Target,{"type":"h5","children":Object(l.jsxs)(i.j,{"className":Object(s.a)("page__nav"),"children":[Object(l.jsx)(c.a,{"className":Object(s.a)("page__nav__back"),"onClick":function onClick(){return Object(o.d)()}}),Object(l.jsxs)(i.j,{"className":Object(s.a)("page__nav__title"),"children":[r," "]})]})}),Object(l.jsx)(i.j,{"className":Object(s.a)("page__content"),"children":n})]})}!function(e){e.H5="h5"}(n||(n={}))},"186":function(e,t,r){"use strict";r.d(t,"a",(function(){return Block}));var n=r(2),c=r(133),i=r(132),o=r.n(i),a=r(158),u=(r(187),r(135));function Block(e){var t,r=e.className,i=e.variant,s=e.title,l=e.children;return Object(u.jsxs)(c.j,{"className":o()(Object(a.a)("block"),r),"children":[s&&Object(u.jsx)(c.j,{"className":Object(a.a)("block__title"),"children":s}),Object(u.jsx)(c.j,{"className":o()((t={},Object(n.a)(t,Object(a.a)("block__content"),"card"!==i),Object(n.a)(t,Object(a.a)("block__card"),"card"===i),t)),"children":l})]})}},"187":function(e,t,r){},"188":function(e,t,r){},"189":function(e,t,r){},"190":function(e,t,r){},"191":function(e,t,r){},"197":function(e,t,r){var n=r(198),c=/^\s+/;e.exports=function baseTrim(e){return e?e.slice(0,n(e)+1).replace(c,""):e}},"198":function(e,t){var r=/\s/;e.exports=function trimmedEndIndex(e){for(var t=e.length;t--&&r.test(e.charAt(t)););return t}},"207":function(e,t,r){"use strict";r.d(t,"a",(function(){return Loading}));var n=r(160),c=r.n(n),i=r(133),o=r(132),a=r.n(o),u=r(23),s=r(134),l=r(145),f=["className","size","type","direction","children"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var b=c()(0,12).map((function(e){return u.createElement(i.j,{"key":e,"className":Object(s.a)("loading__spinner__item")})}));function LoadingSpinner(e){var t=e.size,r=Object(u.useMemo)((function(){var e,r;return{"width":null!==(e=Object(l.a)(t))&&void 0!==e?e:"","height":null!==(r=Object(l.a)(t))&&void 0!==r?r:""}}),[t]);return u.createElement(i.j,{"className":Object(s.a)("loading__spinner"),"style":r},b)}function LoadingCircular(e){var t=e.size,r=Object(u.useMemo)((function(){var e,r;return{"width":null!==(e=Object(l.a)(t))&&void 0!==e?e:"","height":null!==(r=Object(l.a)(t))&&void 0!==r?r:""}}),[t]);return u.createElement(i.j,{"className":Object(s.a)("loading__circular"),"style":r})}function Loading(e){var t=e.className,r=e.size,n=e.type,c=void 0===n?"circular":n,o=e.direction,l=void 0===o?"horizontal":o,b=e.children,j=_objectWithoutProperties(e,f);return u.createElement(i.j,function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":a()(Object(s.a)("loading"),Object(s.a)("loading--".concat(l)),Object(s.a)("loading--".concat(c)),t)},j),"spinner"===c&&u.createElement(LoadingSpinner,{"size":r}),"circular"===c&&u.createElement(LoadingCircular,{"size":r}),b&&u.createElement(i.j,{"className":Object(s.a)("loading__text"),"children":b}))}},"209":function(e,t,r){var n=r(210),c=r(172),i=r(170);e.exports=function createRange(e){return function(t,r,o){return o&&"number"!=typeof o&&c(t,r,o)&&(r=o=void 0),t=i(t),void 0===r?(r=t,t=0):r=i(r),o=void 0===o?t<r?1:-1:i(o),n(t,r,o,e)}}},"210":function(e,t){var r=Math.ceil,n=Math.max;e.exports=function baseRange(e,t,c,i){for(var o=-1,a=n(r((t-e)/(c||1)),0),u=Array(a);a--;)u[i?a:++o]=e,e+=c;return u}},"227":function(e,t,r){"use strict";r(136),r(240)},"231":function(e,t){e.exports=function eq(e,t){return e===t||e!=e&&t!=t}},"240":function(e,t,r){},"250":function(e,t,r){var n=r(14).default,c=/^(?:0|[1-9]\d*)$/;e.exports=function isIndex(e,t){var r=n(e);return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&c.test(e))&&e>-1&&e%1==0&&e<t}},"322":function(e,t){e.exports=function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},"333":function(e,t,r){"use strict";var n=r(2),c=r(16),i=r(139),o=r.n(i),a=r(155),u=r.n(a),s=r(149),l=r.n(s),f=r(148),b=r.n(f),j=r(133),p=r(132),O=r.n(p),d=r(23),m=r(134),y=r(145),v=Object(d.createContext)({"gutter":[void 0,void 0]}),g=["className","style","gutter","direction","wrap","justify","align","children"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var h=["className","style","span","offset"];function flex_item_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function flex_item_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?flex_item_ownKeys(Object(r),!0).forEach((function(t){flex_item_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):flex_item_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function flex_item_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function flex_item_objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function flex_item_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var x=Object(d.forwardRef)((function(e,t){var r,i=e.className,a=e.style,s=e.gutter,f=e.direction,p=void 0===f?"row":f,h=e.wrap,x=void 0===h?"nowrap":h,w=e.justify,P=void 0===w?"start":w,_=e.align,S=void 0===_?"start":_,N=e.children,E=_objectWithoutProperties(e,g),z=function useFlexGutter(e){return Object(d.useMemo)((function(){if(void 0===e)return[void 0,void 0];if(b()(e))return[e,e];if(l()(e)){var t=u()(e);return[t,t]}if(o()(e)){var r=Object(c.a)(e,2),n=r[0],i=r[1];return[u()(n),u()(i)]}return[0,0]}),[e])}(s),k=Object(c.a)(z,1)[0],D=Object(d.useMemo)((function(){var e={};if(k){var t=u()(k)/2;e.marginLeft=Object(y.a)(-t),e.marginRight=Object(y.a)(-t)}return{}}),[k]);return d.createElement(j.j,_objectSpread({"ref":t,"className":O()(Object(m.a)("flex"),(r={},Object(n.a)(r,Object(m.a)("flex--row"),"row"===p),Object(n.a)(r,Object(m.a)("flex--row-reverse"),"row-reverse"===p),Object(n.a)(r,Object(m.a)("flex--column"),"column"===p),Object(n.a)(r,Object(m.a)("flex--column-reverse"),"column-reverse"===p),Object(n.a)(r,Object(m.a)("flex--nowrap"),"nowrap"===x),Object(n.a)(r,Object(m.a)("flex--wrap"),"wrap"===x),Object(n.a)(r,Object(m.a)("flex--wrap-reverse"),"wrap-reverse"===x),Object(n.a)(r,Object(m.a)("flex--justify-start"),"start"===P),Object(n.a)(r,Object(m.a)("flex--justify-center"),"center"===P),Object(n.a)(r,Object(m.a)("flex--justify-end"),"end"===P),Object(n.a)(r,Object(m.a)("flex--justify-space-around"),"space-around"===P),Object(n.a)(r,Object(m.a)("flex--justify-space-between"),"space-between"===P),Object(n.a)(r,Object(m.a)("flex--align-start"),"start"===S),Object(n.a)(r,Object(m.a)("flex--align-center"),"center"===S),Object(n.a)(r,Object(m.a)("flex--align-end"),"end"===S),Object(n.a)(r,Object(m.a)("flex--align-baseline"),"baseline"===S),Object(n.a)(r,Object(m.a)("flex--align-stretch"),"stretch"===S),r),i),"style":_objectSpread(_objectSpread({},a),D)},E),d.createElement(v.Provider,{"value":{"gutter":z},"children":N}))}));x.Item=function FlexItem(e){var t,r=e.className,i=e.style,o=e.span,a=e.offset,u=flex_item_objectWithoutProperties(e,h),s=Object(d.useContext)(v).gutter,l=Object(c.a)(s,1)[0],f={};if(l){var b=l/2;f.paddingLeft=Object(y.a)(b),f.paddingRight=Object(y.a)(b)}return d.createElement(j.j,flex_item_objectSpread({"className":O()(Object(m.a)("flex-item"),(t={},Object(n.a)(t,Object(m.a)("flex-item-".concat(o)),void 0!==o),Object(n.a)(t,Object(m.a)("flex-item-offset-".concat(a)),void 0!==a),t),r),"style":flex_item_objectSpread(flex_item_objectSpread({},i),f)},u))};t.a=x},"334":function(e,t,r){"use strict";r(136),r(335)},"335":function(e,t,r){},"451":function(e,t,r){"use strict";r(136),r(334),r(452)},"452":function(e,t,r){},"457":function(e,t,r){"use strict";var n=r(2),c=r(132),i=r.n(c),o=r(23),a=r(333),u=r(134),s=["className","size","justify","align","direction","wrap","children"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}t.a=function Space(e){var t,r=e.className,c=e.size,l=void 0===c?"small":c,f=e.justify,b=e.align,j=e.direction,p=void 0===j?"horizontal":j,O=e.wrap,d=void 0===O?"wrap":O,m=e.children,y=_objectWithoutProperties(e,s);return o.createElement(a.a,function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":i()(Object(u.a)("space"),(t={},Object(n.a)(t,Object(u.a)("space--horizontal"),"horizontal"===p),Object(n.a)(t,Object(u.a)("space--vertical"),"vertical"===p),Object(n.a)(t,Object(u.a)("space--mini"),"mini"===l),Object(n.a)(t,Object(u.a)("space--small"),"small"===l),Object(n.a)(t,Object(u.a)("space--medium"),"medium"===l),Object(n.a)(t,Object(u.a)("space--large"),"large"===l),t),r),"direction":"horizontal"===p?"row":"vertical"===p?"column":void 0,"justify":f,"align":b,"wrap":d},y),o.Children.map(m,(function(e,t){var r;return o.createElement(a.a.Item,{"key":t,"className":i()(Object(u.a)("space__item"),(r={},Object(n.a)(r,Object(u.a)("space__item--mini"),"mini"===l),Object(n.a)(r,Object(u.a)("space__item--small"),"small"===l),Object(n.a)(r,Object(u.a)("space__item--medium"),"medium"===l),Object(n.a)(r,Object(u.a)("space__item--large"),"large"===l),r)),"children":e})})))}},"664":function(e,t,r){},"745":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return LoadingDemo}));r(451);var n=r(457),c=(r(227),r(207)),i=r(186),o=r(184),a=(r(664),r(135));function LoadingDemo(){return Object(a.jsxs)(o.a,{"title":"Loading 加载","className":"loading-demo","children":[Object(a.jsx)(i.a,{"title":"加载类型","children":Object(a.jsxs)(n.a,{"children":[Object(a.jsx)(c.a,{}),Object(a.jsx)(c.a,{"type":"spinner"})]})}),Object(a.jsx)(i.a,{"title":"自定义颜色","children":Object(a.jsxs)(n.a,{"children":[Object(a.jsx)(c.a,{"className":"custom-color"}),Object(a.jsx)(c.a,{"className":"custom-color","type":"spinner"})]})}),Object(a.jsx)(i.a,{"title":"自定义大小","children":Object(a.jsxs)(n.a,{"children":[Object(a.jsx)(c.a,{"size":"24"}),Object(a.jsx)(c.a,{"type":"spinner","size":"24"})]})}),Object(a.jsx)(i.a,{"title":"加载文案","children":Object(a.jsx)(c.a,{"size":"24","children":"加载中..."})}),Object(a.jsx)(i.a,{"title":"垂直排列","children":Object(a.jsx)(c.a,{"direction":"vertical","size":"24","children":"加载中..."})}),Object(a.jsx)(i.a,{"title":"垂直排列","children":Object(a.jsxs)(n.a,{"size":"large","children":[Object(a.jsx)(c.a,{"className":"custom-color","direction":"vertical","children":"加载中..."}),Object(a.jsx)(c.a,{"className":"custom-text-color","direction":"vertical","children":"加载中..."})]})})]})}}}]);
//# sourceMappingURL=60.003e57f7.js.map