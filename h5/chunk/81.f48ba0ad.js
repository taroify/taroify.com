(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"164":function(e,t,r){"use strict";r.d(t,"a",(function(){return addUnitPx})),r.d(t,"b",(function(){return getSizeStyle})),r.d(t,"c",(function(){return unitToPx}));var c,n=r(181),a=r.n(n),o=r(169),i=r.n(o);function addUnitPx(e){return void 0===e?"":"".concat(unitToPx(e),"px")}function getSizeStyle(e){if(i()(e)||a()(e)){var t=addUnitPx(e);return{"width":t,"height":t}}return{}}function convertRem(e){return+(e=e.replace(/rem/g,""))*function getRootFontSize(){if(!c){var e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;c=parseFloat(t)}return c}()}function unitToPx(e){return"number"==typeof e?e:e.includes("px")?function convertPx(e){return+(e=e.replace(/px/g,""))}(e):e.includes("rem")?convertRem(e):e.includes("vw")?function convertVw(e){return+(e=e.replace(/vw/g,""))*window.innerWidth/100}(e):e.includes("vh")?function convertVh(e){return+(e=e.replace(/vh/g,""))*window.innerHeight/100}(e):parseFloat(e)}},"185":function(e,t,r){"use strict";r.d(t,"a",(function(){return Block}));var c=r(8),n=r(159),a=r(158),o=r.n(a),i=(r(23),r(172)),l=(r(186),r(161));function Block(e){var t,r=e.className,a=e.variant,s=e.title,b=e.children;return Object(l.jsxs)(n.h,{"className":o()(Object(i.a)("block"),r),"children":[s&&Object(l.jsx)(n.h,{"className":Object(i.a)("block__title"),"children":s}),Object(l.jsx)(n.h,{"className":o()((t={},Object(c.a)(t,Object(i.a)("block__content"),"card"!==a),Object(c.a)(t,Object(i.a)("block__card"),"card"===a),t)),"children":b})]})}},"186":function(e,t,r){},"326":function(e,t,r){"use strict";r.d(t,"a",(function(){return Image}));var c=r(8),n=r(9),a=r(169),o=r.n(a),i=r(181),l=r.n(i),s=r(159),b=r(158),j=r.n(b),u=r(23),f=r(160),O=["className","src","alt","mode","round","lazyLoad","placeholder","fallback"];function _objectWithoutProperties(e,t){if(null==e)return{};var r,c,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,c,n={},a=Object.keys(e);for(c=0;c<a.length;c++)r=a[c],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)r=a[c],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ImagePlaceholder(e){var t=e.prefix,r=void 0===t?"placeholder":t,c=e.children;return u.isValidElement(c)?u.createElement(u.Fragment,null,u.cloneElement(c,{"className":j()(Object(f.a)("image__".concat(r)),Object(f.a)("image__".concat(r,"-icon")))})):l()(c)||o()(c)?u.createElement(s.h,{"className":Object(f.a)("image__".concat(r)),"children":c}):u.createElement(u.Fragment,null)}function Image(e){var t,r=e.className,a=e.src,o=e.alt,i=e.mode,l=void 0===i?"scaleToFill":i,b=e.round,d=void 0!==b&&b,p=e.lazyLoad,m=void 0!==p&&p,g=e.placeholder,h=void 0===g||g,x=e.fallback,y=void 0===x||x,v=_objectWithoutProperties(e,O),w=function toTaroMode(e){return"topLeft"===e?"top left":"topRight"===e?"top right":"bottomLeft"===e?"bottom left":"bottomRight"===e?"bottom right":e}(l),P=Object(u.useState)(!1),_=Object(n.a)(P,2),S=_[0],E=_[1],N=Object(u.useState)(!1),I=Object(n.a)(N,2),k=I[0],F=I[1];return Object(u.useEffect)((function(){E(!0)}),[a]),u.createElement(u.Fragment,null,!k&&a&&u.createElement(s.c,Object.assign({"src":a,"mode":w,"lazyLoad":m,"className":j()(Object(f.a)("image"),(t={},Object(c.a)(t,Object(f.a)("image--round"),d),Object(c.a)(t,Object(f.a)("image--loading"),S),t),r),"imgProps":{"alt":o},"onError":function handleError(){E(!1),F(!0)},"onLoad":function handleLoad(){E(!1)}},v)),S&&h&&u.createElement(s.h,Object.assign({"className":j()(Object(f.a)("image"),r)},v),u.createElement(ImagePlaceholder,{"prefix":"placeholder","children":h})),k&&y&&u.createElement(s.h,Object.assign({"className":j()(Object(f.a)("image"),r)},v),u.createElement(ImagePlaceholder,{"prefix":"fallback","children":y})))}},"345":function(e,t,r){"use strict";r(162),r(346)},"346":function(e,t,r){},"426":function(e,t,r){"use strict";r(162),r(427)},"427":function(e,t,r){},"436":function(e,t,r){"use strict";var c=r(8),n=r(9),a=r(163),o=r.n(a),i=r(210),l=r.n(i),s=r(181),b=r.n(s),j=r(169),u=r.n(j),f=r(159),O=r(158),d=r.n(O),p=r(23),m=r(160),g=r(164),h=Object(p.createContext)({"gutter":[void 0,void 0]}),x=["className","style","gutter","direction","wrap","justify","align","children"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,c,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,c,n={},a=Object.keys(e);for(c=0;c<a.length;c++)r=a[c],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)r=a[c],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var y=["className","style","span","offset"];function flex_item_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function flex_item_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?flex_item_ownKeys(Object(r),!0).forEach((function(t){flex_item_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):flex_item_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function flex_item_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function flex_item_objectWithoutProperties(e,t){if(null==e)return{};var r,c,n=function flex_item_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,c,n={},a=Object.keys(e);for(c=0;c<a.length;c++)r=a[c],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)r=a[c],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var v=function Flex(e){var t,r=e.className,a=e.style,i=e.gutter,s=e.direction,j=void 0===s?"row":s,O=e.wrap,y=void 0===O?"nowrap":O,v=e.justify,w=void 0===v?"start":v,P=e.align,_=void 0===P?"start":P,S=e.children,E=_objectWithoutProperties(e,x),N=function useFlexGutter(e){return Object(p.useMemo)((function(){if(void 0===e)return[void 0,void 0];if(u()(e))return[e,e];if(b()(e)){var t=l()(e);return[t,t]}if(o()(e)){var r=Object(n.a)(e,2),c=r[0],a=r[1];return[l()(c),l()(a)]}return[0,0]}),[e])}(i),I=Object(n.a)(N,1)[0],k=Object(p.useMemo)((function(){var e={};if(I){var t=l()(I)/2;e.marginLeft=Object(g.a)(-t),e.marginRight=Object(g.a)(-t)}return{}}),[I]);return p.createElement(f.h,Object.assign({"className":d()(Object(m.a)("flex"),(t={},Object(c.a)(t,Object(m.a)("flex--row"),"row"===j),Object(c.a)(t,Object(m.a)("flex--row-reverse"),"row-reverse"===j),Object(c.a)(t,Object(m.a)("flex--column"),"column"===j),Object(c.a)(t,Object(m.a)("flex--column-reverse"),"column-reverse"===j),Object(c.a)(t,Object(m.a)("flex--nowrap"),"nowrap"===y),Object(c.a)(t,Object(m.a)("flex--wrap"),"wrap"===y),Object(c.a)(t,Object(m.a)("flex--wrap-reverse"),"wrap-reverse"===y),Object(c.a)(t,Object(m.a)("flex--justify-start"),"start"===w),Object(c.a)(t,Object(m.a)("flex--justify-center"),"center"===w),Object(c.a)(t,Object(m.a)("flex--justify-end"),"end"===w),Object(c.a)(t,Object(m.a)("flex--justify-space-around"),"space-around"===w),Object(c.a)(t,Object(m.a)("flex--justify-space-between"),"space-between"===w),Object(c.a)(t,Object(m.a)("flex--align-start"),"start"===_),Object(c.a)(t,Object(m.a)("flex--align-center"),"center"===_),Object(c.a)(t,Object(m.a)("flex--align-end"),"end"===_),Object(c.a)(t,Object(m.a)("flex--align-baseline"),"baseline"===_),Object(c.a)(t,Object(m.a)("flex--align-stretch"),"stretch"===_),t),r),"style":_objectSpread(_objectSpread({},a),k)},E),p.createElement(h.Provider,{"value":{"gutter":N},"children":S}))};v.Item=function FlexItem(e){var t,r=e.className,a=e.style,o=e.span,i=e.offset,l=flex_item_objectWithoutProperties(e,y),s=Object(p.useContext)(h).gutter,b=Object(n.a)(s,1)[0],j={};if(b){var u=b/2;j.paddingLeft=Object(g.a)(u),j.paddingRight=Object(g.a)(u)}return p.createElement(f.h,Object.assign({"className":d()(Object(m.a)("flex-item"),(t={},Object(c.a)(t,Object(m.a)("flex-item-".concat(o)),void 0!==o),Object(c.a)(t,Object(m.a)("flex-item-offset-".concat(i)),void 0!==i),t),r),"style":flex_item_objectSpread(flex_item_objectSpread({},a),j)},l))};t.a=v},"531":function(e,t,r){},"639":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return ImageDemo}));r(426);var c=r(436),n=(r(345),r(326)),a=r(189),o=r(159),i=(r(23),r(185)),l=r(190),s=(r(531),r(161));function ImageDemo(){var e="https://img01.yzcdn.cn/vant/cat.jpeg",t=["scaleToFill","aspectFit","aspectFill","widthFix","heightFix","top","bottom","center","left","right","topLeft","topRight","bottomLeft","bottomRight"];return Object(s.jsxs)(l.a,{"title":"Image 图片","className":"image-demo","children":[Object(s.jsx)(i.a,{"title":"基础用法","children":Object(s.jsx)(n.a,{"className":"basic-image","src":e})}),Object(s.jsx)(i.a,{"title":"填充模式","children":Object(s.jsx)(c.a,{"wrap":"wrap","gutter":20,"children":t.map((function(t){return Object(s.jsxs)(c.a.Item,{"span":8,"children":[Object(s.jsx)(n.a,{"mode":t,"src":e}),Object(s.jsx)(o.g,{"className":"text","children":t})]},t)}))})}),Object(s.jsx)(i.a,{"title":"圆形图片","children":Object(s.jsx)(c.a,{"wrap":"wrap","gutter":20,"children":t.map((function(t){return Object(s.jsxs)(c.a.Item,{"span":8,"children":[Object(s.jsx)(n.a,{"mode":t,"src":e,"round":!0}),Object(s.jsx)(o.g,{"className":"text","children":t})]},t)}))})}),Object(s.jsx)(i.a,{"title":"加载中提示","children":Object(s.jsxs)(c.a,{"wrap":"wrap","gutter":20,"children":[Object(s.jsxs)(c.a.Item,{"span":8,"children":[Object(s.jsx)(n.a,{"placeholder":Object(s.jsx)(a.Photo,{})}),Object(s.jsx)(o.g,{"className":"text","children":"默认提示"})]}),Object(s.jsxs)(c.a.Item,{"span":8,"children":[Object(s.jsx)(n.a,{"placeholder":"加载中..."}),Object(s.jsx)(o.g,{"className":"text","children":"自定义提示"})]})]})}),Object(s.jsx)(i.a,{"title":"加载失败提示","children":Object(s.jsxs)(c.a,{"wrap":"wrap","gutter":20,"children":[Object(s.jsxs)(c.a.Item,{"span":8,"children":[Object(s.jsx)(n.a,{"src":"error","fallback":Object(s.jsx)(a.PhotoFail,{})}),Object(s.jsx)(o.g,{"className":"text","children":"默认提示"})]}),Object(s.jsxs)(c.a.Item,{"span":8,"children":[Object(s.jsx)(n.a,{"src":"error","fallback":"加载失败"}),Object(s.jsx)(o.g,{"className":"text","children":"自定义提示"})]})]})})]})}}}]);
//# sourceMappingURL=81.f48ba0ad.js.map