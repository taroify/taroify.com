(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"168":function(e,t,r){"use strict";r.d(t,"b",(function(){return isIconElement})),r.d(t,"a",(function(){return cloneIconElement}));var n=r(248),c=r.n(n),o=r(127),i=r.n(o),l=r(27),a=r(157),s=["className"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function isIconElement(e){if(!Object(l.isValidElement)(e))return!1;var t=e;return c()(t.type,a.c)}function cloneIconElement(e,t){if(!isIconElement(e))return Object(l.isValidElement)(e)?Object(l.cloneElement)(e,t):e;var r=t.className,n=_objectWithoutProperties(t,s),c=e,o=c.props,a=_objectSpread(_objectSpread({},o),{},{"className":i()(o.className,r)},n);return Object(l.cloneElement)(c,a)}},"181":function(e,t,r){"use strict";r.d(t,"a",(function(){return Block}));var n=r(8),c=r(128),o=r(127),i=r.n(o),l=r(153),a=(r(182),r(130));function Block(e){var t,r=e.className,o=e.variant,s=e.title,u=e.children;return Object(a.jsxs)(c.j,{"className":i()(Object(l.a)("block"),r),"children":[s&&Object(a.jsx)(c.j,{"className":Object(l.a)("block__title"),"children":s}),Object(a.jsx)(c.j,{"className":i()((t={},Object(n.a)(t,Object(l.a)("block__content"),"card"!==o),Object(n.a)(t,Object(l.a)("block__card"),"card"===o),t)),"children":u})]})}},"182":function(e,t,r){},"226":function(e,t,r){var n=r(20).default,c=/^(?:0|[1-9]\d*)$/;e.exports=function isIndex(e,t){var r=n(e);return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&c.test(e))&&e>-1&&e%1==0&&e<t}},"243":function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return y}));var n=r(27),c=r(8),o=r(168),i=r(128),l=r(127),a=r.n(l),s=r(129),u=Object(n.createContext)({}),b=["className","size","align","clickable","required","bordered","icon","rightIcon","children"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=function CellBase(e){var t,r=e.className,l=e.size,p=void 0===l?"medium":l,f=e.align,j=e.clickable,O=void 0!==j&&j,d=e.required,h=void 0!==d&&d,y=e.bordered,_=void 0===y||y,v=e.icon,g=e.rightIcon,m=e.children,P=_objectWithoutProperties(e,b),w=Object(n.useContext)(u).clickable;return n.createElement(i.j,function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":a()(Object(s.a)("cell"),(t={},Object(c.a)(t,Object(s.a)("cell--start"),"start"===f),Object(c.a)(t,Object(s.a)("cell--center"),"center"===f),Object(c.a)(t,Object(s.a)("cell--end"),"end"===f),Object(c.a)(t,Object(s.a)("cell--large"),"large"===p),Object(c.a)(t,Object(s.a)("cell--clickable"),O||w),Object(c.a)(t,Object(s.a)("cell--required"),h),Object(c.a)(t,Object(s.a)("cell--borderless"),!_),t),r)},P),v&&Object(o.b)(v)?Object(o.a)(v,{"className":Object(s.a)("cell__icon")}):v,m,g&&Object(o.b)(g)?Object(o.a)(g,{"className":Object(s.a)("cell__right-icon")}):g)},f=["className"];function cell_brief_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function cell_brief_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function cell_brief_objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function cell_brief_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var j=function CellBrief(e){var t=e.className,r=cell_brief_objectWithoutProperties(e,f);return n.createElement(i.j,function cell_brief_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?cell_brief_ownKeys(Object(r),!0).forEach((function(t){cell_brief_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):cell_brief_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":a()(Object(s.a)("cell__brief"),t)},r))},O=["className"];function cell_title_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function cell_title_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function cell_title_objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function cell_title_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var d=function CellTitle(e){var t=e.className,r=cell_title_objectWithoutProperties(e,O);return n.createElement(i.j,function cell_title_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?cell_title_ownKeys(Object(r),!0).forEach((function(t){cell_title_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):cell_title_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":a()(Object(s.a)("cell__title"),t)},r))},h=["className","alone"];function cell_value_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function cell_value_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function cell_value_objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function cell_value_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var y=function CellValue(e){var t=e.className,r=e.alone,o=cell_value_objectWithoutProperties(e,h);return n.createElement(i.j,function cell_value_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?cell_value_ownKeys(Object(r),!0).forEach((function(t){cell_value_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):cell_value_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":a()(Object(s.a)("cell__value"),Object(c.a)({},Object(s.a)("cell__value--alone"),r),t)},o))},_=["title","brief","children"];function cell_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function cell_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function cell_objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function cell_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var v=["title","clickable","inset","bordered","children"];function cell_group_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function cell_group_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function cell_group_objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function cell_group_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var g=function CellGroup(e){var t=e.title,r=e.clickable,o=void 0!==r&&r,l=e.inset,b=void 0!==l&&l,p=e.bordered,f=void 0===p||p,j=e.children,O=cell_group_objectWithoutProperties(e,v);return n.createElement(u.Provider,{"value":{"clickable":o}},n.createElement(i.j,function cell_group_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?cell_group_ownKeys(Object(r),!0).forEach((function(t){cell_group_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):cell_group_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":a()(Object(s.a)("cell-group"),Object(c.a)({},Object(s.a)("cell-group--inset"),b))},O),t&&n.createElement(i.j,{"className":a()(Object(s.a)("cell-group__title"),Object(c.a)({},Object(s.a)("cell-group__title--inset"),b)),"children":t}),n.createElement(i.j,{"className":a()(Object(s.a)("cell-group"),Object(c.a)({},Object(s.a)("hairline--top-bottom"),f)),"children":j})))},m=function Cell(e){var t=e.title,r=e.brief,c=e.children,o=cell_objectWithoutProperties(e,_);return n.createElement(p,function cell_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?cell_ownKeys(Object(r),!0).forEach((function(t){cell_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):cell_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},o),t&&n.createElement(d,null,t,r&&n.createElement(j,{"children":r})),n.createElement(y,{"alone":!t,"children":c}))};m.Group=g;t.d=m},"248":function(e,t,r){var n=r(359),c=r(360);e.exports=function hasIn(e,t){return null!=e&&c(e,t,n)}},"249":function(e,t,r){"use strict";r(131),r(257)},"257":function(e,t,r){},"287":function(e,t,r){var n=r(132),c=r(410),o=r(448),i=r(143);e.exports=function castPath(e,t){return n(e)?e:c(e,t)?[e]:o(i(e))}},"293":function(e,t,r){var n=r(230);e.exports=function toKey(e){if("string"==typeof e||n(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},"314":function(e,t,r){var n=r(227);e.exports=function assocIndexOf(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},"315":function(e,t,r){var n=r(281)(Object,"create");e.exports=n},"316":function(e,t,r){var n=r(439);e.exports=function getMapData(e,t){var r=e.__data__;return n(t)?r["string"==typeof t?"string":"hash"]:r.map}},"359":function(e,t){e.exports=function baseHasIn(e,t){return null!=e&&t in Object(e)}},"360":function(e,t,r){var n=r(287),c=r(229),o=r(132),i=r(226),l=r(356),a=r(293);e.exports=function hasPath(e,t,r){for(var s=-1,u=(t=n(t,e)).length,b=!1;++s<u;){var p=a(t[s]);if(!(b=null!=e&&r(e,p)))break;e=e[p]}return b||++s!=u?b:!!(u=null==e?0:e.length)&&l(u)&&i(p,u)&&(o(e)||c(e))}},"405":function(e,t,r){var n=r(425),c=r(426),o=r(427),i=r(428),l=r(429);function ListCache(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ListCache.prototype.clear=n,ListCache.prototype.delete=c,ListCache.prototype.get=o,ListCache.prototype.has=i,ListCache.prototype.set=l,e.exports=ListCache},"408":function(e,t,r){var n=r(431),c=r(438),o=r(440),i=r(441),l=r(442);function MapCache(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}MapCache.prototype.clear=n,MapCache.prototype.delete=c,MapCache.prototype.get=o,MapCache.prototype.has=i,MapCache.prototype.set=l,e.exports=MapCache},"410":function(e,t,r){var n=r(20).default,c=r(132),o=r(230),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,l=/^\w*$/;e.exports=function isKey(e,t){if(c(e))return!1;var r=n(e);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!o(e))||(l.test(e)||!i.test(e)||null!=t&&e in Object(t))}},"425":function(e,t){e.exports=function listCacheClear(){this.__data__=[],this.size=0}},"426":function(e,t,r){var n=r(314),c=Array.prototype.splice;e.exports=function listCacheDelete(e){var t=this.__data__,r=n(t,e);return!(r<0)&&(r==t.length-1?t.pop():c.call(t,r,1),--this.size,!0)}},"427":function(e,t,r){var n=r(314);e.exports=function listCacheGet(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},"428":function(e,t,r){var n=r(314);e.exports=function listCacheHas(e){return n(this.__data__,e)>-1}},"429":function(e,t,r){var n=r(314);e.exports=function listCacheSet(e,t){var r=this.__data__,c=n(r,e);return c<0?(++this.size,r.push([e,t])):r[c][1]=t,this}},"431":function(e,t,r){var n=r(432),c=r(405),o=r(430);e.exports=function mapCacheClear(){this.size=0,this.__data__={"hash":new n,"map":new(o||c),"string":new n}}},"432":function(e,t,r){var n=r(433),c=r(434),o=r(435),i=r(436),l=r(437);function Hash(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Hash.prototype.clear=n,Hash.prototype.delete=c,Hash.prototype.get=o,Hash.prototype.has=i,Hash.prototype.set=l,e.exports=Hash},"433":function(e,t,r){var n=r(315);e.exports=function hashClear(){this.__data__=n?n(null):{},this.size=0}},"434":function(e,t){e.exports=function hashDelete(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},"435":function(e,t,r){var n=r(315),c=Object.prototype.hasOwnProperty;e.exports=function hashGet(e){var t=this.__data__;if(n){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return c.call(t,e)?t[e]:void 0}},"436":function(e,t,r){var n=r(315),c=Object.prototype.hasOwnProperty;e.exports=function hashHas(e){var t=this.__data__;return n?void 0!==t[e]:c.call(t,e)}},"437":function(e,t,r){var n=r(315);e.exports=function hashSet(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=n&&void 0===t?"__lodash_hash_undefined__":t,this}},"438":function(e,t,r){var n=r(316);e.exports=function mapCacheDelete(e){var t=n(this,e).delete(e);return this.size-=t?1:0,t}},"439":function(e,t,r){var n=r(20).default;e.exports=function isKeyable(e){var t=n(e);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},"440":function(e,t,r){var n=r(316);e.exports=function mapCacheGet(e){return n(this,e).get(e)}},"441":function(e,t,r){var n=r(316);e.exports=function mapCacheHas(e){return n(this,e).has(e)}},"442":function(e,t,r){var n=r(316);e.exports=function mapCacheSet(e,t){var r=n(this,e),c=r.size;return r.set(e,t),this.size+=r.size==c?0:1,this}},"448":function(e,t,r){var n=r(449),c=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,i=n((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(c,(function(e,r,n,c){t.push(n?c.replace(o,"$1"):r||e)})),t}));e.exports=i},"449":function(e,t,r){var n=r(450);e.exports=function memoizeCapped(e){var t=n(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}},"450":function(e,t,r){var n=r(408);function memoize(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function memoized(){var r=arguments,n=t?t.apply(this,r):r[0],c=memoized.cache;if(c.has(n))return c.get(n);var o=e.apply(this,r);return memoized.cache=c.set(n,o)||c,o};return r.cache=new(memoize.Cache||n),r}memoize.Cache=n,e.exports=memoize},"683":function(e,t,r){},"684":function(e,t,r){},"766":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return TagDemo}));r(249);var n=r(243),c=(r(131),r(683),r(8)),o=r(158),i=r(168),l=r(128),a=r(127),s=r.n(a),u=r(27),b=r(129),p=["className","variant","size","color","shape","closeable","closeIcon","onClose","children"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,c=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var f=function Tag(e){var t,r=e.className,n=e.variant,a=void 0===n?"contained":n,f=e.size,j=void 0===f?"small":f,O=e.color,d=void 0===O?"default":O,h=e.shape,y=void 0===h?"square":h,_=e.closeable,v=e.closeIcon,g=void 0===v?u.createElement(o.Cross,null):v,m=e.onClose,P=e.children,w=_objectWithoutProperties(e,p);return u.createElement(l.j,function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":s()(Object(b.a)("tag"),(t={},Object(c.a)(t,Object(b.a)("tag--outlined"),"outlined"===a),Object(c.a)(t,Object(b.a)("tag--medium"),"medium"===j),Object(c.a)(t,Object(b.a)("tag--large"),"large"===j),Object(c.a)(t,Object(b.a)("tag--default"),"default"===d),Object(c.a)(t,Object(b.a)("tag--primary"),"primary"===d),Object(c.a)(t,Object(b.a)("tag--info"),"info"===d),Object(c.a)(t,Object(b.a)("tag--success"),"success"===d),Object(c.a)(t,Object(b.a)("tag--warning"),"warning"===d),Object(c.a)(t,Object(b.a)("tag--danger"),"danger"===d),Object(c.a)(t,Object(b.a)("tag--rounded"),"rounded"===y),Object(c.a)(t,Object(b.a)("tag--rounded-right"),"roundedRight"===y),Object(c.a)(t,Object(b.a)("tag--rounded-left"),"roundedLeft"===y),t),r)},w),P,_&&Object(i.a)(g,{"className":Object(b.a)("tag__close"),"onClick":m}))},j=r(19),O=r(181),d=r(179),h=(r(684),r(130));function CloseTag(){var e=Object(u.useState)(!0),t=Object(j.a)(e,2),r=t[0],n=t[1];return Object(h.jsx)(h.Fragment,{"children":r&&Object(h.jsx)(f,{"color":"primary","size":"medium","closeable":!0,"onClose":function onClose(){return n(!1)},"children":"标签"})})}function TagDemo(){return Object(h.jsxs)(d.a,{"title":"Tag 标签","className":"tag-demo","children":[Object(h.jsxs)(O.a,{"variant":"card","title":"基础用法","children":[Object(h.jsx)(n.d,{"title":"颜色 default","children":Object(h.jsx)(f,{"children":"标签"})}),Object(h.jsx)(n.d,{"title":"颜色 primary","children":Object(h.jsx)(f,{"color":"primary","children":"标签"})}),Object(h.jsx)(n.d,{"title":"颜色 info","children":Object(h.jsx)(f,{"color":"info","children":"标签"})}),Object(h.jsx)(n.d,{"title":"颜色 success","children":Object(h.jsx)(f,{"color":"success","children":"标签"})}),Object(h.jsx)(n.d,{"title":"颜色 warning","children":Object(h.jsx)(f,{"color":"warning","children":"标签"})}),Object(h.jsx)(n.d,{"title":"颜色 danger","children":Object(h.jsx)(f,{"color":"danger","children":"标签"})})]}),Object(h.jsxs)(O.a,{"variant":"card","title":"样式风格","children":[Object(h.jsx)(n.d,{"title":"空心样式","children":Object(h.jsx)(f,{"color":"primary","variant":"outlined","children":"标签"})}),Object(h.jsx)(n.d,{"title":"圆角样式","children":Object(h.jsx)(f,{"color":"primary","shape":"round","children":"标签"})}),Object(h.jsx)(n.d,{"title":"右侧圆角样式","children":Object(h.jsx)(f,{"color":"primary","shape":"roundRight","children":"标签"})}),Object(h.jsx)(n.d,{"title":"左侧圆角样式","children":Object(h.jsx)(f,{"color":"primary","shape":"roundLeft","children":"标签"})}),Object(h.jsx)(n.d,{"title":"可关闭标签","children":Object(h.jsx)(CloseTag,{})})]}),Object(h.jsxs)(O.a,{"variant":"card","title":"标签大小","children":[Object(h.jsx)(n.d,{"title":"小号标签","children":Object(h.jsx)(f,{"color":"primary","children":"标签"})}),Object(h.jsx)(n.d,{"title":"中号标签","children":Object(h.jsx)(f,{"color":"primary","size":"medium","children":"标签"})}),Object(h.jsx)(n.d,{"title":"大号标签","children":Object(h.jsx)(f,{"color":"primary","size":"large","children":"标签"})})]}),Object(h.jsxs)(O.a,{"variant":"card","title":"自定义颜色","children":[Object(h.jsx)(n.d,{"title":"背景颜色","children":Object(h.jsx)(f,{"style":{"backgroundColor":"#7232dd"},"children":"标签"})}),Object(h.jsx)(n.d,{"title":"文字颜色","children":Object(h.jsx)(f,{"style":{"backgroundColor":"#ffe1e1","color":"#ad0000"},"children":"标签"})}),Object(h.jsx)(n.d,{"title":"空心颜色","children":Object(h.jsx)(f,{"style":{"color":"#7232dd"},"variant":"outlined","children":"标签"})})]})]})}}}]);
//# sourceMappingURL=61.eb852fe0.js.map