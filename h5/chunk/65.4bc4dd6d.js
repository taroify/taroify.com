/*! For license information please see 65.4bc4dd6d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"127":function(e,t,r){var n,o=r(20).default;!function(){"use strict";var c={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=o(r);if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)&&r.length){var a=classNames.apply(null,r);a&&e.push(a)}else if("object"===n)for(var i in r)c.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):"object"===o(r(298))&&r(298)?void 0===(n=function(){return classNames}.apply(t,[]))||(e.exports=n):window.classNames=classNames}()},"128":function(e,t,r){"use strict";r.d(t,"j",(function(){return S})),r.d(t,"h",(function(){return E})),r.d(t,"a",(function(){return N})),r.d(t,"b",(function(){return k})),r.d(t,"d",(function(){return I})),r.d(t,"g",(function(){return L})),r.d(t,"i",(function(){return R})),r.d(t,"f",(function(){return D})),r.d(t,"e",(function(){return T})),r.d(t,"c",(function(){return F}));var n=r(27),o=r.n(n),c=r(10),a=r.n(c),i=r(31),s=r.n(i),u=r(16),l=r.n(u),f=r(29),p=r.n(f),b=r(30),j=r.n(b),d=r(332),O=r.n(d),m=r(334),y=r.n(m),v=r(336),h=r.n(v),g=r(17),x=r.n(g);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=h()(e);if(t){var o=h()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y()(this,r)}}o.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,n,o){var c=e.ref.current,a=o[r],i=n?n[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var s=r.substr(2).toLowerCase(),u=a;return"taro-scroll-view-core"===t&&"scroll"===s&&(u=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,u]),c.addEventListener(s,u)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(n)if("string"==typeof i)c.style.cssText="";else for(var l in i)updateStyle(c,l,"");for(var f in a)updateStyle(c,f,a[f])}else c.className=n?function getClassName(e,t,r){var n=Array.from(e.classList),o=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return n.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===o.indexOf(e)&&a.push(e)})),(a=[].concat(x()(a),x()(c))).join(" ")}(c,n,o):a}var w=function reactifyWebComponent(e){var t=function(t){O()(Index,t);var r=_createSuper(Index);function Index(e){var t;return p()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(n.createRef)(),t}return j()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(n){"children"===n||"key"===n||n in r.props||updateProp(r,e,n,t,r.props)})),Object.keys(this.props).forEach((function(n){updateProp(r,e,n,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===l()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=s()(t,2),n=r[0],o=r[1];e.ref.current&&e.ref.current.removeEventListener(n,o)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,c={"ref":this.ref};return o&&(c.dangerouslySetInnerHTML=o),Object(n.createElement)(e,c,r)}}]),Index}(o.a.Component);return o.a.forwardRef((function(e,r){return o.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=w("taro-input-core"),P=(o.a.createElement,o.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),o.a.createElement(_,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),S=w("taro-view-core"),E=(w("taro-icon-core"),w("taro-progress-core"),w("taro-rich-text-core"),w("taro-text-core")),N=w("taro-button-core"),k=(w("taro-checkbox-core"),w("taro-checkbox-group-core"),w("taro-editor-core"),w("taro-form-core")),I=P,L=(w("taro-label-core"),w("taro-picker-core"),w("taro-picker-view-core"),w("taro-picker-view-column-core"),w("taro-radio-core"),w("taro-radio-group-core"),w("taro-slider-core"),w("taro-switch-core")),R=(w("taro-cover-image-core"),w("taro-textarea-core")),D=(w("taro-cover-view-core"),w("taro-movable-area-core"),w("taro-movable-view-core"),w("taro-scroll-view-core")),T=(w("taro-swiper-core"),w("taro-swiper-item-core"),w("taro-functional-page-navigator-core"),w("taro-navigator-core")),F=(w("taro-audio-core"),w("taro-camera-core"),w("taro-image-core"));w("taro-live-player-core"),w("taro-video-core"),w("taro-map-core"),w("taro-canvas-core"),w("taro-ad-core"),w("taro-official-account-core"),w("taro-open-data-core"),w("taro-web-view-core"),w("taro-navigation-bar-core"),n.Fragment,w("taro-custom-wrapper-core")},"130":function(e,t,r){"use strict";e.exports=r(337)},"132":function(e,t){var r=Array.isArray;e.exports=r},"140":function(e,t,r){"use strict";r.d(t,"a",(function(){return addUnitPx})),r.d(t,"b",(function(){return getSizeStyle})),r.d(t,"c",(function(){return unitToPx}));var n,o=r(144),c=r.n(o),a=r(142),i=r.n(a),s=r(705);function addUnitPx(e){return void 0===e?"":"".concat(unitToPx(e),"px")}function getSizeStyle(e){if(i()(e)||c()(e)){var t=addUnitPx(e);return{"width":t,"height":t}}return{}}function convertRem(e){return+(e=e.replace(/rem/g,""))*function getRootFontSize(){if(!n){var e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;n=parseFloat(t)}return n}()}function unitToPx(e){return"number"==typeof e?e:e.includes("rpx")?function convertRpx(e){return+(e=e.replace(/rpx/g,""))/(750/Object(s.b)().windowWidth)}(e):e.includes("px")?function convertPx(e){return+(e=e.replace(/px/g,""))}(e):e.includes("rem")?convertRem(e):e.includes("vw")?function convertVw(e){return+(e=e.replace(/vw/g,""))*window.innerWidth/100}(e):e.includes("vh")?function convertVh(e){return+(e=e.replace(/vh/g,""))*window.innerHeight/100}(e):parseFloat(e)}},"146":function(e,t,r){var n=r(20).default;e.exports=function isObject(e){var t=n(e);return null!=e&&("object"==t||"function"==t)}},"148":function(e,t,r){var n=r(20).default;e.exports=function isObjectLike(e){return null!=e&&"object"==n(e)}},"151":function(e,t,r){var n=r(191),o=r(146),c=r(231),a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;e.exports=function toNumber(e){if("number"==typeof e)return e;if(c(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=i.test(e);return r||s.test(e)?u(e.slice(2),r?2:8):a.test(e)?NaN:+e}},"168":function(e,t,r){var n=r(275),o=r(430),c=r(431),a=n?n.toStringTag:void 0;e.exports=function baseGetTag(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):c(e)}},"174":function(e,t,r){var n=r(168),o=r(148);e.exports=function isBoolean(e){return!0===e||!1===e||o(e)&&"[object Boolean]"==n(e)}},"181":function(e,t,r){"use strict";r.d(t,"a",(function(){return Block}));var n=r(8),o=r(128),c=r(127),a=r.n(c),i=r(153),s=(r(182),r(130));function Block(e){var t,r=e.className,c=e.variant,u=e.title,l=e.children;return Object(s.jsxs)(o.j,{"className":a()(Object(i.a)("block"),r),"children":[u&&Object(s.jsx)(o.j,{"className":Object(i.a)("block__title"),"children":u}),Object(s.jsx)(o.j,{"className":a()((t={},Object(n.a)(t,Object(i.a)("block__content"),"card"!==c),Object(n.a)(t,Object(i.a)("block__card"),"card"===c),t)),"children":l})]})}},"182":function(e,t,r){},"191":function(e,t,r){var n=r(192),o=/^\s+/;e.exports=function baseTrim(e){return e?e.slice(0,n(e)+1).replace(o,""):e}},"192":function(e,t){var r=/\s/;e.exports=function trimmedEndIndex(e){for(var t=e.length;t--&&r.test(e.charAt(t)););return t}},"231":function(e,t,r){var n=r(20).default,o=r(168),c=r(148);e.exports=function isSymbol(e){return"symbol"==n(e)||c(e)&&"[object Symbol]"==o(e)}},"266":function(e,t,r){var n=r(20).default,o=r(405),c="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,a=o||c||Function("return this")();e.exports=a},"269":function(e,t,r){"use strict";r.d(t,"a",(function(){return getLogger}));var n=1;function getLogger(e){return{"warn":function warn(t){if(n<=16){for(var r,o=arguments.length,c=new Array(o>1?o-1:0),a=1;a<o;a++)c[a-1]=arguments[a];(r=console).warn.apply(r,["Taroify - ".concat(e," : ").concat(t)].concat(c))}}}}},"275":function(e,t,r){var n=r(266).Symbol;e.exports=n},"281":function(e,t,r){"use strict";r.d(t,"a",(function(){return Image}));var n=r(8),o=r(19),c=r(174),a=r.n(c),i=r(128),s=r(127),u=r.n(s),l=r(27),f=r(129),p=r(269),b=r(142),j=r.n(b),d=r(144),O=r.n(d);function ImagePlaceholder(e){var t=e.prefix,r=void 0===t?"placeholder":t,n=e.children;return Object(l.isValidElement)(n)?Object(l.cloneElement)(n,{"className":u()(Object(f.a)("image__".concat(r)),Object(f.a)("image__".concat(r,"-icon")))}):O()(n)||j()(n)?l.createElement(i.j,{"className":Object(f.a)("image__".concat(r)),"children":n}):l.createElement(l.Fragment,null)}var m=["className","src","alt","mode","round","shape","lazyLoad","placeholder","fallback","onLoad","onError"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var y=Object(p.a)("Image").warn;function Image(e){var t,r,c,s=e.className,p=e.src,b=e.alt,j=e.mode,d=void 0===j?"scaleToFill":j,O=e.round,v=e.shape,h=e.lazyLoad,g=void 0!==h&&h,x=e.placeholder,w=void 0===x||x,_=e.fallback,P=void 0===_||_,S=e.onLoad,E=e.onError,N=_objectWithoutProperties(e,m),k=function useImageMode(e){return Object(l.useMemo)((function(){return"topLeft"===e?"top left":"topRight"===e?"top right":"bottomLeft"===e?"bottom left":"bottomRight"===e?"bottom right":e}),[e])}(d),I=function useImageShape(e,t){return a()(t)&&t&&y('Use the shape="'.concat(e="circle",'" prop instead of the round prop')),e}(v,O),L=Object(l.useState)(!1),R=Object(o.a)(L,2),D=R[0],T=R[1],F=Object(l.useState)(!1),A=Object(o.a)(F,2),C=A[0],K=A[1];Object(l.useEffect)((function(){return T(!0)}),[p]);var M=Object(l.useCallback)((function(){null==S||S(),T(!1)}),[S]),W=Object(l.useCallback)((function(){null==E||E(),T(!1),K(!0)}),[E]);return l.createElement(l.Fragment,null,!C&&p&&l.createElement(i.c,_objectSpread({"src":p,"mode":k,"lazyLoad":g,"className":u()(Object(f.a)("image"),(t={},Object(n.a)(t,Object(f.a)("image--square"),"square"===I),Object(n.a)(t,Object(f.a)("image--rounded"),"rounded"===I),Object(n.a)(t,Object(f.a)("image--circle"),"circle"===I),Object(n.a)(t,Object(f.a)("image--loading"),D),t),s),"imgProps":{"alt":b},"onLoad":M,"onError":W},N)),D&&w&&l.createElement(i.j,_objectSpread({"className":u()(Object(f.a)("image"),(r={},Object(n.a)(r,Object(f.a)("image--square"),"square"===I),Object(n.a)(r,Object(f.a)("image--rounded"),"rounded"===I),Object(n.a)(r,Object(f.a)("image--circle"),"circle"===I),r),s)},N),l.createElement(ImagePlaceholder,{"prefix":"placeholder","children":w})),C&&P&&l.createElement(i.j,_objectSpread({"className":u()(Object(f.a)("image"),(c={},Object(n.a)(c,Object(f.a)("image--square"),"square"===I),Object(n.a)(c,Object(f.a)("image--rounded"),"rounded"===I),Object(n.a)(c,Object(f.a)("image--circle"),"circle"===I),c),s)},N),l.createElement(ImagePlaceholder,{"prefix":"fallback","children":P})))}},"298":function(e,t){(function(t){e.exports=t}).call(this,{})},"309":function(e,t,r){"use strict";r(131),r(312)},"312":function(e,t,r){},"331":function(e,t,r){"use strict";var n=r(8),o=r(19),c=r(132),a=r.n(c),i=r(151),s=r.n(i),u=r(144),l=r.n(u),f=r(142),p=r.n(f),b=r(128),j=r(127),d=r.n(j),O=r(27),m=r(129),y=r(140),v=Object(O.createContext)({"gutter":[void 0,void 0]}),h=["className","style","gutter","direction","wrap","justify","align","children"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var g=["className","style","span","offset"];function flex_item_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function flex_item_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?flex_item_ownKeys(Object(r),!0).forEach((function(t){flex_item_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):flex_item_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function flex_item_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function flex_item_objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=function flex_item_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var x=Object(O.forwardRef)((function(e,t){var r,c=e.className,i=e.style,u=e.gutter,f=e.direction,j=void 0===f?"row":f,g=e.wrap,x=void 0===g?"nowrap":g,w=e.justify,_=void 0===w?"start":w,P=e.align,S=void 0===P?"start":P,E=e.children,N=_objectWithoutProperties(e,h),k=function useFlexGutter(e){return Object(O.useMemo)((function(){if(void 0===e)return[void 0,void 0];if(p()(e))return[e,e];if(l()(e)){var t=s()(e);return[t,t]}if(a()(e)){var r=Object(o.a)(e,2),n=r[0],c=r[1];return[s()(n),s()(c)]}return[0,0]}),[e])}(u),I=Object(o.a)(k,1)[0],L=Object(O.useMemo)((function(){var e={};if(I){var t=s()(I)/2;e.marginLeft=Object(y.a)(-t),e.marginRight=Object(y.a)(-t)}return{}}),[I]);return O.createElement(b.j,_objectSpread({"ref":t,"className":d()(Object(m.a)("flex"),(r={},Object(n.a)(r,Object(m.a)("flex--row"),"row"===j),Object(n.a)(r,Object(m.a)("flex--row-reverse"),"row-reverse"===j),Object(n.a)(r,Object(m.a)("flex--column"),"column"===j),Object(n.a)(r,Object(m.a)("flex--column-reverse"),"column-reverse"===j),Object(n.a)(r,Object(m.a)("flex--nowrap"),"nowrap"===x),Object(n.a)(r,Object(m.a)("flex--wrap"),"wrap"===x),Object(n.a)(r,Object(m.a)("flex--wrap-reverse"),"wrap-reverse"===x),Object(n.a)(r,Object(m.a)("flex--justify-start"),"start"===_),Object(n.a)(r,Object(m.a)("flex--justify-center"),"center"===_),Object(n.a)(r,Object(m.a)("flex--justify-end"),"end"===_),Object(n.a)(r,Object(m.a)("flex--justify-space-around"),"space-around"===_),Object(n.a)(r,Object(m.a)("flex--justify-space-between"),"space-between"===_),Object(n.a)(r,Object(m.a)("flex--align-start"),"start"===S),Object(n.a)(r,Object(m.a)("flex--align-center"),"center"===S),Object(n.a)(r,Object(m.a)("flex--align-end"),"end"===S),Object(n.a)(r,Object(m.a)("flex--align-baseline"),"baseline"===S),Object(n.a)(r,Object(m.a)("flex--align-stretch"),"stretch"===S),r),c),"style":_objectSpread(_objectSpread({},i),L)},N),O.createElement(v.Provider,{"value":{"gutter":k},"children":E}))}));x.Item=function FlexItem(e){var t,r=e.className,c=e.style,a=e.span,i=e.offset,s=flex_item_objectWithoutProperties(e,g),u=Object(O.useContext)(v).gutter,l=Object(o.a)(u,1)[0],f={};if(l){var p=l/2;f.paddingLeft=Object(y.a)(p),f.paddingRight=Object(y.a)(p)}return O.createElement(b.j,flex_item_objectSpread({"className":d()(Object(m.a)("flex-item"),(t={},Object(n.a)(t,Object(m.a)("flex-item-".concat(a)),void 0!==a),Object(n.a)(t,Object(m.a)("flex-item-offset-".concat(i)),void 0!==i),t),r),"style":flex_item_objectSpread(flex_item_objectSpread({},c),f)},s))};t.a=x},"332":function(e,t,r){var n=r(333);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),t&&n(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},"333":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.default=e.exports,e.exports.__esModule=!0},"334":function(e,t,r){var n=r(16).default,o=r(335);e.exports=function _possibleConstructorReturn(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},"335":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},"336":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.default=e.exports,e.exports.__esModule=!0},"337":function(e,t,r){"use strict";r(43);var n=r(27),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),t.Fragment=c("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var n,c={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{"$$typeof":o,"type":e,"key":u,"ref":l,"props":c,"_owner":a.current}}t.jsx=q,t.jsxs=q},"338":function(e,t,r){"use strict";r(131),r(339)},"339":function(e,t,r){},"405":function(e,t,r){(function(t){var n=r(20).default,o="object"==(void 0===t?"undefined":n(t))&&t&&t.Object===Object&&t;e.exports=o}).call(this,r(49))},"430":function(e,t,r){var n=r(275),o=Object.prototype,c=o.hasOwnProperty,a=o.toString,i=n?n.toStringTag:void 0;e.exports=function getRawTag(e){var t=c.call(e,i),r=e[i];try{e[i]=void 0;var n=!0}catch(e){}var o=a.call(e);return n&&(t?e[i]=r:delete e[i]),o}},"431":function(e,t){var r=Object.prototype.toString;e.exports=function objectToString(e){return r.call(e)}},"596":function(e,t,r){},"708":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return ImageDemo}));r(338);var n=r(331),o=(r(309),r(281)),c=r(157),a=r(128),i=r(181),s=r(180),u=(r(596),r(130));function ImageDemo(){var e="https://img01.yzcdn.cn/vant/cat.jpeg",t=["scaleToFill","aspectFit","aspectFill","widthFix","heightFix","top","bottom","center","left","right","topLeft","topRight","bottomLeft","bottomRight"];return Object(u.jsxs)(s.a,{"title":"Image 图片","className":"image-demo","children":[Object(u.jsx)(i.a,{"title":"基础用法","children":Object(u.jsx)(o.a,{"className":"basic-image","src":e})}),Object(u.jsx)(i.a,{"title":"填充模式","children":Object(u.jsx)(n.a,{"wrap":"wrap","gutter":20,"children":t.map((function(t){return Object(u.jsxs)(n.a.Item,{"span":8,"children":[Object(u.jsx)(o.a,{"mode":t,"src":e}),Object(u.jsx)(a.h,{"className":"text","children":t})]},t)}))})}),Object(u.jsx)(i.a,{"title":"圆形图片","children":Object(u.jsx)(n.a,{"wrap":"wrap","gutter":20,"children":t.map((function(t){return Object(u.jsxs)(n.a.Item,{"span":8,"children":[Object(u.jsx)(o.a,{"mode":t,"src":e,"round":!0}),Object(u.jsx)(a.h,{"className":"text","children":t})]},t)}))})}),Object(u.jsx)(i.a,{"title":"加载中提示","children":Object(u.jsxs)(n.a,{"wrap":"wrap","gutter":20,"children":[Object(u.jsxs)(n.a.Item,{"span":8,"children":[Object(u.jsx)(o.a,{"placeholder":Object(u.jsx)(c.Photo,{})}),Object(u.jsx)(a.h,{"className":"text","children":"默认提示"})]}),Object(u.jsxs)(n.a.Item,{"span":8,"children":[Object(u.jsx)(o.a,{"placeholder":"加载中..."}),Object(u.jsx)(a.h,{"className":"text","children":"自定义提示"})]})]})}),Object(u.jsx)(i.a,{"title":"加载失败提示","children":Object(u.jsxs)(n.a,{"wrap":"wrap","gutter":20,"children":[Object(u.jsxs)(n.a.Item,{"span":8,"children":[Object(u.jsx)(o.a,{"src":"error","fallback":Object(u.jsx)(c.PhotoFail,{})}),Object(u.jsx)(a.h,{"className":"text","children":"默认提示"})]}),Object(u.jsxs)(n.a.Item,{"span":8,"children":[Object(u.jsx)(o.a,{"src":"error","fallback":"加载失败"}),Object(u.jsx)(a.h,{"className":"text","children":"自定义提示"})]})]})})]})}}}]);
//# sourceMappingURL=65.4bc4dd6d.js.map