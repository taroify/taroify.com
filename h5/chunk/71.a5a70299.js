(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"145":function(e,t,r){"use strict";r.d(t,"b",(function(){return isIconElement})),r.d(t,"a",(function(){return cloneIconElement}));var a=r(219),n=r.n(a),c=r(127),o=r.n(c),i=r(27),b=r(149),s=["className"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,a,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function isIconElement(e){if(!Object(i.isValidElement)(e))return!1;var t=e;return n()(t.type,b.c)}function cloneIconElement(e,t){if(!isIconElement(e))return Object(i.isValidElement)(e)?Object(i.cloneElement)(e,t):e;var r=t.className,a=_objectWithoutProperties(t,s),n=e,c=n.props,b=_objectSpread(_objectSpread({},c),{},{"className":o()(c.className,r)},a);return Object(i.cloneElement)(n,b)}},"153":function(e,t,r){"use strict";r.d(t,"c",(function(){return isTextElement})),r.d(t,"b",(function(){return isObjectElement})),r.d(t,"a",(function(){return isElementOf}));var a=r(187),n=r.n(a),c=r(134),o=r.n(c),i=r(159),b=r.n(i),s=r(148),l=r.n(s),u=r(138),j=r.n(u),O=r(171),p=r.n(O),d=r(147),f=r.n(d),m=r(139),g=r.n(m),y=(r(177),r(133),r(27));function isTextElement(e){return g()(e)||f()(e)}function isObjectElement(e){return!Object(y.isValidElement)(e)&&p()(e)&&!j()(e)}function isElementOf(e,t){if(Object(y.isValidElement)(e)){var r=e;if(r.type===t)return!0;var a=l()(r.type,"displayName");if(b()(r.type)&&!o()(a)&&n()(a,l()(t,"displayName")))return!0}return!1}},"163":function(e,t,r){"use strict";r.d(t,"a",(function(){return Block}));var a=r(8),n=r(128),c=r(127),o=r.n(c),i=r(144),b=(r(164),r(130));function Block(e){var t,r=e.className,c=e.variant,s=e.title,l=e.children;return Object(b.jsxs)(n.j,{"className":o()(Object(i.a)("block"),r),"children":[s&&Object(b.jsx)(n.j,{"className":Object(i.a)("block__title"),"children":s}),Object(b.jsx)(n.j,{"className":o()((t={},Object(a.a)(t,Object(i.a)("block__content"),"card"!==c),Object(a.a)(t,Object(i.a)("block__card"),"card"===c),t)),"children":l})]})}},"164":function(e,t,r){},"234":function(e,t,r){"use strict";r.d(t,"a",(function(){return getLogger}));var a=1;function getLogger(e){return{"warn":function warn(t){if(a<=16){for(var r,n=arguments.length,c=new Array(n>1?n-1:0),o=1;o<n;o++)c[o-1]=arguments[o];(r=console).warn.apply(r,["Taroify - ".concat(e," : ").concat(t)].concat(c))}}}}},"250":function(e,t,r){"use strict";r.d(t,"a",(function(){return Image}));var a=r(8),n=r(19),c=r(156),o=r.n(c),i=r(128),b=r(127),s=r.n(b),l=r(27),u=r(129),j=r(234),O=r(139),p=r.n(O),d=r(147),f=r.n(d);function ImagePlaceholder(e){var t=e.prefix,r=void 0===t?"placeholder":t,a=e.children;return Object(l.isValidElement)(a)?Object(l.cloneElement)(a,{"className":s()(Object(u.a)("image__".concat(r)),Object(u.a)("image__".concat(r,"-icon")))}):f()(a)||p()(a)?l.createElement(i.j,{"className":Object(u.a)("image__".concat(r)),"children":a}):l.createElement(l.Fragment,null)}var m=["className","src","alt","mode","round","shape","lazyLoad","placeholder","fallback"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,a,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=Object(j.a)("Image").warn;function Image(e){var t,r,c,b=e.className,j=e.src,O=e.alt,p=e.mode,d=void 0===p?"scaleToFill":p,f=e.round,y=e.shape,v=e.lazyLoad,h=void 0!==v&&v,_=e.placeholder,P=void 0===_||_,w=e.fallback,x=void 0===w||w,E=_objectWithoutProperties(e,m),S=function useImageMode(e){return Object(l.useMemo)((function(){return"topLeft"===e?"top left":"topRight"===e?"top right":"bottomLeft"===e?"bottom left":"bottomRight"===e?"bottom right":e}),[e])}(d),N=function useImageShape(e,t){return o()(t)&&t&&g('Use the shape="'.concat(e="circle",'" prop instead of the round prop')),e}(y,f),k=Object(l.useState)(!1),A=Object(n.a)(k,2),D=A[0],K=A[1],W=Object(l.useState)(!1),I=Object(n.a)(W,2),L=I[0],z=I[1];return Object(l.useEffect)((function(){return K(!0)}),[j]),l.createElement(l.Fragment,null,!L&&j&&l.createElement(i.c,_objectSpread({"src":j,"mode":S,"lazyLoad":h,"className":s()(Object(u.a)("image"),(t={},Object(a.a)(t,Object(u.a)("image--square"),"square"===N),Object(a.a)(t,Object(u.a)("image--rounded"),"rounded"===N),Object(a.a)(t,Object(u.a)("image--circle"),"circle"===N),Object(a.a)(t,Object(u.a)("image--loading"),D),t),b),"imgProps":{"alt":O},"onLoad":function onLoad(){return K(!1)},"onError":function handleError(){K(!1),z(!0)}},E)),D&&P&&l.createElement(i.j,_objectSpread({"className":s()(Object(u.a)("image"),(r={},Object(a.a)(r,Object(u.a)("image--square"),"square"===N),Object(a.a)(r,Object(u.a)("image--rounded"),"rounded"===N),Object(a.a)(r,Object(u.a)("image--circle"),"circle"===N),r),b)},E),l.createElement(ImagePlaceholder,{"prefix":"placeholder","children":P})),L&&x&&l.createElement(i.j,_objectSpread({"className":s()(Object(u.a)("image"),(c={},Object(a.a)(c,Object(u.a)("image--square"),"square"===N),Object(a.a)(c,Object(u.a)("image--rounded"),"rounded"===N),Object(a.a)(c,Object(u.a)("image--circle"),"circle"===N),c),b)},E),l.createElement(ImagePlaceholder,{"prefix":"fallback","children":x})))}},"319":function(e,t,r){"use strict";r(131),r(333)},"333":function(e,t,r){},"336":function(e,t,r){"use strict";r.d(t,"b",(function(){return S})),r.d(t,"c",(function(){return N}));var a=r(8),n=r(334),c=r.n(n),o=r(160),i=r.n(o),b=r(139),s=r.n(b),l=r(128),u=r(127),j=r.n(u),O=r(27),p=r(129),d=Object(O.createContext)(void 0),f=["className"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,a,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=function BadgeWrapper(e){var t=e.className,r=_objectWithoutProperties(e,f);return O.createElement(d.Provider,{"value":{}},O.createElement(l.j,function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":j()(Object(p.a)("badge-wrapper"),t)},r)))},g=["className","content","max","dot","fixed","position","children"];function badge_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function badge_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function badge_objectWithoutProperties(e,t){if(null==e)return{};var r,a,n=function badge_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var y=function Badge(e){var t,r=e.className,n=e.content,o=e.max,b=e.dot,u=e.fixed,f=e.position,y=void 0===f?"top-right":f,v=e.children,h=badge_objectWithoutProperties(e,g),_=Object(O.useContext)(d),P=void 0!==v,w=void 0===v,x=null!=u?u:!!_,E=Object(O.useMemo)((function(){return s()(n)?i()(c()(n,o)?"".concat(o,"+"):n):n}),[n,o]),S=O.createElement(l.j,function badge_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?badge_ownKeys(Object(r),!0).forEach((function(t){badge_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):badge_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":j()(Object(p.a)("badge__badge"),(t={},Object(a.a)(t,Object(p.a)("badge--dot"),b),Object(a.a)(t,Object(p.a)("badge--content"),E),Object(a.a)(t,Object(p.a)("badge--fixed"),x||P),Object(a.a)(t,Object(p.a)("badge--top-left"),"top-left"===y),Object(a.a)(t,Object(p.a)("badge--top-right"),"top-right"===y),Object(a.a)(t,Object(p.a)("badge--bottom-left"),"bottom-left"===y),Object(a.a)(t,Object(p.a)("badge--bottom-right"),"bottom-right"===y),t),r),"children":!b&&E},h));return w?S:O.createElement(m,null,v,(b||E)&&S)},v=r(147),h=r.n(v),_=r(156),P=r.n(_),w=r(153);function create_badge_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function create_badge_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?create_badge_ownKeys(Object(r),!0).forEach((function(t){create_badge_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):create_badge_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function create_badge_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}var x=r(145),E=["className"];function create_badge_wrapper_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function create_badge_wrapper_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function create_badge_wrapper_objectWithoutProperties(e,t){if(null==e)return{};var r,a,n=function create_badge_wrapper_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var S=function createBadge(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return P()(e)&&e?function(e){return O.createElement(y,create_badge_objectSpread(create_badge_objectSpread({},t),{},{"dot":!0},e))}:s()(e)||h()(e)?function(r){return O.createElement(y,create_badge_objectSpread(create_badge_objectSpread({},t),{},{"content":e},r))}:Object(w.a)(e,y)?function(r){return Object(O.cloneElement)(e,create_badge_objectSpread(create_badge_objectSpread({},t),r))}:function(e){return O.createElement(y,create_badge_objectSpread(create_badge_objectSpread({},t),e))}},N=function createBadgeWrapper(e){return function(t){var r=t.className,a=create_badge_wrapper_objectWithoutProperties(t,E),n=function acquireCloneElement(e){return Object(x.b)(e)?x.a:Object(O.isValidElement)(e)?O.cloneElement:void 0}(e);return n&&(e=n(e,function create_badge_wrapper_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?create_badge_wrapper_ownKeys(Object(r),!0).forEach((function(t){create_badge_wrapper_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):create_badge_wrapper_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":j()(Object(p.a)("badge-wrapper"),r)},a))),O.createElement(d.Provider,{"value":{},"children":e})}},k=y;k.Wrapper=m;t.a=k},"647":function(e,t,r){},"650":function(e,t,r){},"748":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return AvatarDemo}));r(319);var a=r(336),n=(r(131),r(647),r(8)),c=r(128),o=r(127),i=r.n(o),b=r(27),s=r(250),l=r(129),u=["className","src","alt","shape","size","children"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,a,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var j=function Avatar(e){var t,r,a=e.className,o=e.src,j=e.alt,O=e.shape,p=void 0===O?"circle":O,d=e.size,f=void 0===d?"medium":d,m=e.children,g=_objectWithoutProperties(e,u);return b.createElement(c.j,function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":i()(Object(l.a)("avatar"),(t={},Object(n.a)(t,Object(l.a)("avatar--circle"),"circle"===p),Object(n.a)(t,Object(l.a)("avatar--square"),"square"===p),Object(n.a)(t,Object(l.a)("avatar--rounded"),"rounded"===p),t),(r={},Object(n.a)(r,Object(l.a)("avatar--mini"),"mini"===f),Object(n.a)(r,Object(l.a)("avatar--small"),"small"===f),Object(n.a)(r,Object(l.a)("avatar--medium"),"medium"===f),Object(n.a)(r,Object(l.a)("avatar--large"),"large"===f),r),a)},g),o?b.createElement(s.a,{"alt":j,"shape":p,"src":o}):m)},O=r(19),p=r(148),d=r.n(p),f=r(151),m=r.n(f),g=r(153),y=["style","children"];function avatar_group_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function avatar_group_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?avatar_group_ownKeys(Object(r),!0).forEach((function(t){avatar_group_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):avatar_group_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function avatar_group_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function avatar_group_objectWithoutProperties(e,t){if(null==e)return{};var r,a,n=function avatar_group_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var v=j;v.Group=function AvatarGroup(e){var t,r=e.className,a=e.shape,o=void 0===a?"circle":a,s=e.limit,u=void 0===s?Number.MAX_VALUE:s,p=e.spacing,f=void 0===p?"small":p,v=e.total,h=function useAvatars(e,t,r){return Object(b.useMemo)((function(){for(var a=b.Children.toArray(e).filter((function(e){return Object(b.isValidElement)(e)&&Object(g.a)(e,j)})),n=m()(a),c=[],o=Math.min(n,r),i=0;i<o;i++){var s=d()(a,i),l=s.key,u=s.props,O=u.style,p=u.children,f=avatar_group_objectWithoutProperties(u,y);c.push(Object(b.cloneElement)(s,avatar_group_objectSpread({"key":null!=l?l:i,"shape":t,"style":avatar_group_objectSpread(avatar_group_objectSpread({},O),{},{"zIndex":i})},f),p))}return[c,n]}),[e,r,t])}(e.children,o,u),_=Object(O.a)(h,2),P=_[0],w=_[1];return b.createElement(c.j,{"className":i()(Object(l.a)("avatar-group"),(t={},Object(n.a)(t,Object(l.a)("avatar-group--spacing-mini"),"mini"===f),Object(n.a)(t,Object(l.a)("avatar-group--spacing-small"),"small"===f),Object(n.a)(t,Object(l.a)("avatar-group--spacing-medium"),"medium"===f),Object(n.a)(t,Object(l.a)("avatar-group--spacing-large"),"large"===f),t),r)},P,w>=u&&b.createElement(j,{"shape":o,"style":{"zIndex":w}},"+",v?v-u:w-u))};var h=v,_=r(648),P=r.n(_),w=r(146),x=r(163),E=r(166),S=(r(650),r(130));function randomAvatar(){return"https://joeschmoe.io/api/v1/random?t=".concat(P()(Number.MAX_VALUE))}function AvatarDemo(){return Object(S.jsxs)(E.a,{"title":"Avatar 头像","className":"avatar-demo","children":[Object(S.jsxs)(x.a,{"title":"基础用法","className":"avatar-block","children":[Object(S.jsx)(h,{"children":"P"}),Object(S.jsx)(h,{"style":{"background":"green"},"children":"N"}),Object(S.jsx)(h,{"style":{"background":"pink"},"children":"HP"})]}),Object(S.jsxs)(x.a,{"title":"尺寸","className":"avatar-block","children":[Object(S.jsx)(h,{"src":randomAvatar(),"size":"mini"}),Object(S.jsx)(h,{"src":randomAvatar(),"size":"small"}),Object(S.jsx)(h,{"src":randomAvatar(),"size":"medium"}),Object(S.jsx)(h,{"src":randomAvatar(),"size":"large"})]}),Object(S.jsxs)(x.a,{"title":"形状","className":"avatar-block","children":[Object(S.jsx)(h,{"src":randomAvatar()}),Object(S.jsx)(h,{"src":randomAvatar(),"shape":"square"}),Object(S.jsx)(h,{"src":randomAvatar(),"shape":"rounded"})]}),Object(S.jsx)(x.a,{"title":"群组","className":"avatar-block","children":Object(S.jsxs)(h.Group,{"limit":5,"children":[Object(S.jsx)(h,{"src":randomAvatar()}),Object(S.jsx)(h,{"src":randomAvatar()}),Object(S.jsx)(h,{"src":randomAvatar()}),Object(S.jsx)(h,{"src":randomAvatar()}),Object(S.jsx)(h,{"src":randomAvatar()}),Object(S.jsx)(h,{"src":randomAvatar()})]})}),Object(S.jsx)(x.a,{"title":"最大","className":"avatar-block","children":Object(S.jsxs)(h.Group,{"limit":3,"children":[Object(S.jsx)(h,{"src":randomAvatar()}),Object(S.jsx)(h,{"src":randomAvatar()}),Object(S.jsx)(h,{"src":randomAvatar()}),Object(S.jsx)(h,{"src":randomAvatar()}),Object(S.jsx)(h,{"src":randomAvatar()}),Object(S.jsx)(h,{"src":randomAvatar()})]})}),Object(S.jsxs)(x.a,{"title":"图标","className":"avatar-block","children":[Object(S.jsx)(h,{"style":{"background":"red"},"children":Object(S.jsx)(w.Cross,{})}),Object(S.jsx)(h,{"style":{"background":"pink"},"children":Object(S.jsx)(w.LocationOutlined,{})}),Object(S.jsx)(h,{"style":{"background":"green"},"children":Object(S.jsx)(w.SettingOutlined,{})})]}),Object(S.jsxs)(x.a,{"title":"徽章用法","className":"avatar-block","children":[Object(S.jsx)(a.a,{"className":"avatar-dot","dot":!0,"position":"bottom-right","children":Object(S.jsx)(h,{"src":randomAvatar()})}),Object(S.jsx)(a.a,{"className":"avatar-avatar","content":Object(S.jsx)(h,{"src":randomAvatar()}),"position":"bottom-right","children":Object(S.jsx)(h,{"src":randomAvatar()})})]})]})}}}]);
//# sourceMappingURL=71.a5a70299.js.map