(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{"268":function(e,t,a){"use strict";a.d(t,"a",(function(){return Image}));var c=a(8),r=a(9),n=a(167),l=a.n(n),s=a(176),i=a.n(s),o=a(160),j=a(159),m=a.n(j),b=a(23),d=a(161),O=["className","src","alt","mode","round","lazyLoad","placeholder","fallback"];function _objectWithoutProperties(e,t){if(null==e)return{};var a,c,r=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a,c,r={},n=Object.keys(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function ImagePlaceholder(e){var t=e.prefix,a=void 0===t?"placeholder":t,c=e.children;return b.isValidElement(c)?b.createElement(b.Fragment,null,b.cloneElement(c,{"className":m()(Object(d.a)("image__".concat(a)),Object(d.a)("image__".concat(a,"-icon")))})):i()(c)||l()(c)?b.createElement(o.k,{"className":Object(d.a)("image__".concat(a)),"children":c}):b.createElement(b.Fragment,null)}function Image(e){var t,a=e.className,n=e.src,l=e.alt,s=e.mode,i=void 0===s?"scaleToFill":s,j=e.round,h=void 0!==j&&j,u=e.lazyLoad,p=void 0!==u&&u,g=e.placeholder,x=void 0===g||g,f=e.fallback,w=void 0===f||f,v=_objectWithoutProperties(e,O),E=function toTaroMode(e){return"topLeft"===e?"top left":"topRight"===e?"top right":"bottomLeft"===e?"bottom left":"bottomRight"===e?"bottom right":e}(i),I=Object(b.useState)(!1),N=Object(r.a)(I,2),k=N[0],y=N[1],P=Object(b.useState)(!1),F=Object(r.a)(P,2),L=F[0],_=F[1];return Object(b.useEffect)((function(){y(!0)}),[n]),b.createElement(b.Fragment,null,!L&&n&&b.createElement(o.d,Object.assign({"src":n,"mode":E,"lazyLoad":p,"className":m()(Object(d.a)("image"),(t={},Object(c.a)(t,Object(d.a)("image--round"),h),Object(c.a)(t,Object(d.a)("image--loading"),k),t),a),"imgProps":{"alt":l},"onError":function handleError(){y(!1),_(!0)},"onLoad":function handleLoad(){y(!1)}},v)),k&&x&&b.createElement(o.k,Object.assign({"className":m()(Object(d.a)("image"),a)},v),b.createElement(ImagePlaceholder,{"prefix":"placeholder","children":x})),L&&w&&b.createElement(o.k,Object.assign({"className":m()(Object(d.a)("image"),a)},v),b.createElement(ImagePlaceholder,{"prefix":"fallback","children":w})))}},"320":function(e,t,a){"use strict";a(163),a(321)},"321":function(e,t,a){},"565":function(e,t,a){},"666":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ImageDemo}));a(466);var c=a(467),r=(a(320),a(268)),n=a(169),l=a(160),s=(a(23),a(184)),i=a(187),o=(a(565),a(162));function ImageDemo(){var e="https://img01.yzcdn.cn/vant/cat.jpeg",t=["scaleToFill","aspectFit","aspectFill","widthFix","heightFix","top","bottom","center","left","right","topLeft","topRight","bottomLeft","bottomRight"];return Object(o.jsxs)(i.a,{"title":"Image 图片","className":"image-demo","children":[Object(o.jsx)(s.a,{"title":"基础用法","children":Object(o.jsx)(r.a,{"className":"basic-image","src":e})}),Object(o.jsx)(s.a,{"title":"填充模式","children":Object(o.jsx)(c.a,{"wrap":"wrap","gutter":20,"children":t.map((function(t){return Object(o.jsxs)(c.a.Item,{"span":8,"children":[Object(o.jsx)(r.a,{"mode":t,"src":e}),Object(o.jsx)(l.i,{"className":"text","children":t})]},t)}))})}),Object(o.jsx)(s.a,{"title":"圆形图片","children":Object(o.jsx)(c.a,{"wrap":"wrap","gutter":20,"children":t.map((function(t){return Object(o.jsxs)(c.a.Item,{"span":8,"children":[Object(o.jsx)(r.a,{"mode":t,"src":e,"round":!0}),Object(o.jsx)(l.i,{"className":"text","children":t})]},t)}))})}),Object(o.jsx)(s.a,{"title":"加载中提示","children":Object(o.jsxs)(c.a,{"wrap":"wrap","gutter":20,"children":[Object(o.jsxs)(c.a.Item,{"span":8,"children":[Object(o.jsx)(r.a,{"placeholder":Object(o.jsx)(n.Photo,{})}),Object(o.jsx)(l.i,{"className":"text","children":"默认提示"})]}),Object(o.jsxs)(c.a.Item,{"span":8,"children":[Object(o.jsx)(r.a,{"placeholder":"加载中..."}),Object(o.jsx)(l.i,{"className":"text","children":"自定义提示"})]})]})}),Object(o.jsx)(s.a,{"title":"加载失败提示","children":Object(o.jsxs)(c.a,{"wrap":"wrap","gutter":20,"children":[Object(o.jsxs)(c.a.Item,{"span":8,"children":[Object(o.jsx)(r.a,{"src":"error","fallback":Object(o.jsx)(n.PhotoFail,{})}),Object(o.jsx)(l.i,{"className":"text","children":"默认提示"})]}),Object(o.jsxs)(c.a.Item,{"span":8,"children":[Object(o.jsx)(r.a,{"src":"error","fallback":"加载失败"}),Object(o.jsx)(l.i,{"className":"text","children":"自定义提示"})]})]})})]})}}}]);
//# sourceMappingURL=79.2d8cfa43.js.map