(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"134":function(t,r,i){var o=i(194),u=i(172),c=i(229),a=i(132),l=i(138),h=i(242),p=i(208),v=i(247),y=Object.prototype.hasOwnProperty;t.exports=function isEmpty(t){if(null==t)return!0;if(l(t)&&(a(t)||"string"==typeof t||"function"==typeof t.splice||h(t)||v(t)||c(t)))return!t.length;var r=u(t);if("[object Map]"==r||"[object Set]"==r)return!t.size;if(p(t))return!o(t).length;for(var i in t)if(y.call(t,i))return!1;return!0}},"141":function(t,r){var i=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function hasUnicode(t){return i.test(t)}},"149":function(t,r,i){"use strict";var o=i(20).default,u=i(220);function noop(){}var c=null,a={};function Promise(t){if("object"!==o(this))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("Promise constructor's argument is not a function");this._40=0,this._65=0,this._55=null,this._72=null,t!==noop&&doResolve(t,this)}function handle(t,r){for(;3===t._65;)t=t._55;if(Promise._37&&Promise._37(t),0===t._65)return 0===t._40?(t._40=1,void(t._72=r)):1===t._40?(t._40=2,void(t._72=[t._72,r])):void t._72.push(r);!function handleResolved(t,r){u((function(){var i=1===t._65?r.onFulfilled:r.onRejected;if(null!==i){var o=function tryCallOne(t,r){try{return t(r)}catch(t){return c=t,a}}(i,t._55);o===a?reject(r.promise,c):resolve(r.promise,o)}else 1===t._65?resolve(r.promise,t._55):reject(r.promise,t._55)}))}(t,r)}function resolve(t,r){if(r===t)return reject(t,new TypeError("A promise cannot be resolved with itself."));if(r&&("object"===o(r)||"function"==typeof r)){var i=function getThen(t){try{return t.then}catch(t){return c=t,a}}(r);if(i===a)return reject(t,c);if(i===t.then&&r instanceof Promise)return t._65=3,t._55=r,void finale(t);if("function"==typeof i)return void doResolve(i.bind(r),t)}t._65=1,t._55=r,finale(t)}function reject(t,r){t._65=2,t._55=r,Promise._87&&Promise._87(t,r),finale(t)}function finale(t){if(1===t._40&&(handle(t,t._72),t._72=null),2===t._40){for(var r=0;r<t._72.length;r++)handle(t,t._72[r]);t._72=null}}function Handler(t,r,i){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof r?r:null,this.promise=i}function doResolve(t,r){var i=!1,o=function tryCallTwo(t,r,i){try{t(r,i)}catch(t){return c=t,a}}(t,(function(t){i||(i=!0,resolve(r,t))}),(function(t){i||(i=!0,reject(r,t))}));i||o!==a||(i=!0,reject(r,c))}t.exports=Promise,Promise._37=null,Promise._87=null,Promise._61=noop,Promise.prototype.then=function(t,r){if(this.constructor!==Promise)return function safeThen(t,r,i){return new t.constructor((function(o,u){var c=new Promise(noop);c.then(o,u),handle(t,new Handler(r,i,c))}))}(this,t,r);var i=new Promise(noop);return handle(this,new Handler(t,r,i)),i}},"165":function(t,r,i){var o=i(20).default,u=i(227),c=i(138),a=i(226),l=i(146);t.exports=function isIterateeCall(t,r,i){if(!l(i))return!1;var h=o(r);return!!("number"==h?c(i)&&a(r,i.length):"string"==h&&r in i)&&u(i[r],t)}},"171":function(t,r,i){"use strict";i.d(r,"a",(function(){return _createForOfIteratorHelper}));var o=i(21);function _createForOfIteratorHelper(t,r){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=Object(o.a)(t))||r&&t&&"number"==typeof t.length){i&&(t=i);var u=0,c=function F(){};return{"s":c,"n":function n(){return u>=t.length?{"done":!0}:{"done":!1,"value":t[u++]}},"e":function e(t){throw t},"f":c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,h=!1;return{"s":function s(){i=i.call(t)},"n":function n(){var t=i.next();return l=t.done,t},"e":function e(t){h=!0,a=t},"f":function f(){try{l||null==i.return||i.return()}finally{if(h)throw a}}}}},"175":function(t,r,i){var o=i(209),u=i(141),c=i(210);t.exports=function stringToArray(t){return u(t)?c(t):o(t)}},"179":function(t,r,i){var o=i(195);t.exports=function castSlice(t,r,i){var u=t.length;return i=void 0===i?u:i,!r&&i>=u?t:o(t,r,i)}},"195":function(t,r){t.exports=function baseSlice(t,r,i){var o=-1,u=t.length;r<0&&(r=-r>u?0:u+r),(i=i>u?u:i)<0&&(i+=u),u=r>i?0:i-r>>>0,r>>>=0;for(var c=Array(u);++o<u;)c[o]=t[o+r];return c}},"209":function(t,r){t.exports=function asciiToArray(t){return t.split("")}},"210":function(t,r){var i="[\\ud800-\\udfff]",o="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",u="\\ud83c[\\udffb-\\udfff]",c="[^\\ud800-\\udfff]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",h="(?:"+o+"|"+u+")"+"?",p="[\\ufe0e\\ufe0f]?"+h+("(?:\\u200d(?:"+[c,a,l].join("|")+")[\\ufe0e\\ufe0f]?"+h+")*"),v="(?:"+[c+o+"?",o,a,l,i].join("|")+")",y=RegExp(u+"(?="+u+")|"+v+p,"g");t.exports=function unicodeToArray(t){return t.match(y)||[]}},"220":function(t,r,i){"use strict";(function(r){function rawAsap(t){o.length||(i(),!0),o[o.length]=t}t.exports=rawAsap;var i,o=[],u=0;function flush(){for(;u<o.length;){var t=u;if(u+=1,o[t].call(),u>1024){for(var r=0,i=o.length-u;r<i;r++)o[r]=o[r+u];o.length-=u,u=0}}o.length=0,u=0,!1}var c=void 0!==r?r:self,a=c.MutationObserver||c.WebKitMutationObserver;function makeRequestCallFromTimer(t){return function requestCall(){var r=setTimeout(handleTimer,0),i=setInterval(handleTimer,50);function handleTimer(){clearTimeout(r),clearInterval(i),t()}}}i="function"==typeof a?function makeRequestCallFromMutationObserver(t){var r=1,i=new a(t),o=document.createTextNode("");return i.observe(o,{"characterData":!0}),function requestCall(){r=-r,o.data=r}}(flush):makeRequestCallFromTimer(flush),rawAsap.requestFlush=i,rawAsap.makeRequestCallFromTimer=makeRequestCallFromTimer}).call(this,i(49))},"239":function(t,r,i){var o=i(162),u=i(179),c=i(141),a=i(165),l=i(240),h=i(175),p=i(143);t.exports=function split(t,r,i){return i&&"number"!=typeof i&&a(t,r,i)&&(r=i=void 0),(i=void 0===i?4294967295:i>>>0)?(t=p(t))&&("string"==typeof r||null!=r&&!l(r))&&!(r=o(r))&&c(t)?u(h(t),0,i):t.split(r,i):[]}},"240":function(t,r,i){var o=i(241),u=i(245),c=i(246),a=c&&c.isRegExp,l=a?u(a):o;t.exports=l},"241":function(t,r,i){var o=i(168),u=i(148);t.exports=function baseIsRegExp(t){return u(t)&&"[object RegExp]"==o(t)}},"254":function(t,r,i){"use strict";t.exports=i(257)},"255":function(t,r,i){var o=i(143),u=0;t.exports=function uniqueId(t){var r=++u;return o(t)+r}},"257":function(t,r,i){"use strict";t.exports=i(149),i(258),i(259),i(260),i(261),i(263)},"258":function(t,r,i){"use strict";var o=i(149);t.exports=o,o.prototype.done=function(t,r){var i=arguments.length?this.then.apply(this,arguments):this;i.then(null,(function(t){setTimeout((function(){throw t}),0)}))}},"259":function(t,r,i){"use strict";var o=i(149);t.exports=o,o.prototype.finally=function(t){return this.then((function(r){return o.resolve(t()).then((function(){return r}))}),(function(r){return o.resolve(t()).then((function(){throw r}))}))}},"260":function(t,r,i){"use strict";var o=i(20).default,u=i(149);t.exports=u;var c=valuePromise(!0),a=valuePromise(!1),l=valuePromise(null),h=valuePromise(void 0),p=valuePromise(0),v=valuePromise("");function valuePromise(t){var r=new u(u._61);return r._65=1,r._55=t,r}u.resolve=function(t){if(t instanceof u)return t;if(null===t)return l;if(void 0===t)return h;if(!0===t)return c;if(!1===t)return a;if(0===t)return p;if(""===t)return v;if("object"===o(t)||"function"==typeof t)try{var r=t.then;if("function"==typeof r)return new u(r.bind(t))}catch(t){return new u((function(r,i){i(t)}))}return valuePromise(t)},u.all=function(t){var r=Array.prototype.slice.call(t);return new u((function(t,i){if(0===r.length)return t([]);var c=r.length;function res(a,l){if(l&&("object"===o(l)||"function"==typeof l)){if(l instanceof u&&l.then===u.prototype.then){for(;3===l._65;)l=l._55;return 1===l._65?res(a,l._55):(2===l._65&&i(l._55),void l.then((function(t){res(a,t)}),i))}var h=l.then;if("function"==typeof h)return void new u(h.bind(l)).then((function(t){res(a,t)}),i)}r[a]=l,0==--c&&t(r)}for(var a=0;a<r.length;a++)res(a,r[a])}))},u.reject=function(t){return new u((function(r,i){i(t)}))},u.race=function(t){return new u((function(r,i){t.forEach((function(t){u.resolve(t).then(r,i)}))}))},u.prototype.catch=function(t){return this.then(null,t)}},"261":function(t,r,i){"use strict";var o=i(149),u=i(262);t.exports=o,o.denodeify=function(t,r){return"number"==typeof r&&r!==1/0?function denodeifyWithCount(t,r){for(var i=[],u=0;u<r;u++)i.push("a"+u);var a=["return function ("+i.join(",")+") {","var self = this;","return new Promise(function (rs, rj) {","var res = fn.call(",["self"].concat(i).concat([c]).join(","),");","if (res &&",'(typeof res === "object" || typeof res === "function") &&','typeof res.then === "function"',") {rs(res);}","});","};"].join("");return Function(["Promise","fn"],a)(o,t)}(t,r):function denodeifyWithoutCount(t){for(var r=Math.max(t.length-1,3),i=[],u=0;u<r;u++)i.push("a"+u);var a=["return function ("+i.join(",")+") {","var self = this;","var args;","var argLength = arguments.length;","if (arguments.length > "+r+") {","args = new Array(arguments.length + 1);","for (var i = 0; i < arguments.length; i++) {","args[i] = arguments[i];","}","}","return new Promise(function (rs, rj) {","var cb = "+c+";","var res;","switch (argLength) {",i.concat(["extra"]).map((function(t,r){return"case "+r+":res = fn.call("+["self"].concat(i.slice(0,r)).concat("cb").join(",")+");break;"})).join(""),"default:","args[argLength] = cb;","res = fn.apply(self, args);","}","if (res &&",'(typeof res === "object" || typeof res === "function") &&','typeof res.then === "function"',") {rs(res);}","});","};"].join("");return Function(["Promise","fn"],a)(o,t)}(t)};var c="function (err, res) {if (err) { rj(err); } else { rs(res); }}";o.nodeify=function(t){return function(){var r=Array.prototype.slice.call(arguments),i="function"==typeof r[r.length-1]?r.pop():null,c=this;try{return t.apply(this,arguments).nodeify(i,c)}catch(t){if(null==i)return new o((function(r,i){i(t)}));u((function(){i.call(c,t)}))}}},o.prototype.nodeify=function(t,r){if("function"!=typeof t)return this;this.then((function(i){u((function(){t.call(r,null,i)}))}),(function(i){u((function(){t.call(r,i)}))}))}},"262":function(t,r,i){"use strict";var o=i(220),u=[],c=[],a=o.makeRequestCallFromTimer((function throwFirstError(){if(c.length)throw c.shift()}));function asap(t){var r;(r=u.length?u.pop():new RawTask).task=t,o(r)}function RawTask(){this.task=null}t.exports=asap,RawTask.prototype.call=function(){try{this.task.call()}catch(t){asap.onerror?asap.onerror(t):(c.push(t),a())}finally{this.task=null,u[u.length]=this}}},"263":function(t,r,i){"use strict";var o=i(149);t.exports=o,o.enableSynchronous=function(){o.prototype.isPending=function(){return 0==this.getState()},o.prototype.isFulfilled=function(){return 1==this.getState()},o.prototype.isRejected=function(){return 2==this.getState()},o.prototype.getValue=function(){if(3===this._65)return this._55.getValue();if(!this.isFulfilled())throw new Error("Cannot get a value of an unfulfilled promise.");return this._55},o.prototype.getReason=function(){if(3===this._65)return this._55.getReason();if(!this.isRejected())throw new Error("Cannot get a rejection reason of a non-rejected promise.");return this._55},o.prototype.getState=function(){return 3===this._65?this._55.getState():-1===this._65||-2===this._65?0:this._65}},o.disableSynchronous=function(){o.prototype.isPending=void 0,o.prototype.isFulfilled=void 0,o.prototype.isRejected=void 0,o.prototype.getValue=void 0,o.prototype.getReason=void 0,o.prototype.getState=void 0}},"297":function(t,r,i){"use strict";i.d(r,"a",(function(){return m}));var o=i(6),u=i(3),c=i(4),a=i(171),l=i(284),h=i(233),p=i.n(h),v={"top":"top","bottom":"bottom","middle":"middle","normal":"alphabetic"},y=function(){function CanvasContext(t,r){Object(u.a)(this,CanvasContext),this.actions=[],this.canvas=t,this.ctx=r}var t;return Object(c.a)(CanvasContext,[{"key":"ctx","get":function get(){return this.__raw__||{}},"set":function set(t){this.__raw__=t}},{"key":"emptyActions","value":function emptyActions(){this.actions.length=0}},{"key":"enqueueActions","value":function enqueueActions(t){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];this.actions.push({"func":t,"args":i})}},{"key":"fillStyle","get":function get(){return this.ctx.fillStyle},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.fillStyle=t}))}},{"key":"font","get":function get(){return this.ctx.font},"set":function set(t){this.ctx.font=t}},{"key":"globalAlpha","get":function get(){return this.ctx.globalAlpha},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.globalAlpha=t}))}},{"key":"globalCompositeOperation","get":function get(){return this.ctx.globalCompositeOperation},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.globalCompositeOperation=t}))}},{"key":"lineCap","get":function get(){return this.ctx.lineCap},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.lineCap=t}))}},{"key":"lineDashOffset","get":function get(){return this.ctx.lineDashOffset},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.lineDashOffset=t}))}},{"key":"lineJoin","get":function get(){return this.ctx.lineJoin},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.lineJoin=t}))}},{"key":"lineWidth","get":function get(){return this.ctx.lineWidth},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.lineWidth=t}))}},{"key":"miterLimit","get":function get(){return this.ctx.miterLimit},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.miterLimit=t}))}},{"key":"shadowBlur","get":function get(){return this.ctx.shadowBlur},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.shadowBlur=t}))}},{"key":"shadowColor","get":function get(){return this.ctx.shadowColor},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.shadowColor=t}))}},{"key":"shadowOffsetX","get":function get(){return this.ctx.shadowOffsetX},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.shadowOffsetX=t}))}},{"key":"shadowOffsetY","get":function get(){return this.ctx.shadowOffsetY},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.shadowOffsetY=t}))}},{"key":"strokeStyle","get":function get(){return this.ctx.strokeStyle},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.strokeStyle=t}))}},{"key":"textAlign","get":function get(){return this.ctx.textAlign},"set":function set(t){this.ctx.textAlign=t}},{"key":"textBaseline","get":function get(){return this.ctx.textBaseline},"set":function set(t){this.ctx.textBaseline=t}},{"key":"direction","get":function get(){return this.ctx.direction},"set":function set(t){this.ctx.direction=t}},{"key":"imageSmoothingEnabled","get":function get(){return this.ctx.imageSmoothingEnabled},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.imageSmoothingEnabled=t}))}},{"key":"imageSmoothingQuality","get":function get(){return this.ctx.imageSmoothingQuality},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.imageSmoothingQuality=t}))}},{"key":"filter","get":function get(){return this.ctx.filter},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.filter=t}))}},{"key":"arc","value":function arc(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.arc].concat(r))}},{"key":"arcTo","value":function arcTo(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.arcTo].concat(r))}},{"key":"beginPath","value":function beginPath(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.beginPath].concat(r))}},{"key":"bezierCurveTo","value":function bezierCurveTo(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.bezierCurveTo].concat(r))}},{"key":"clearRect","value":function clearRect(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.clearRect].concat(r))}},{"key":"clip","value":function clip(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.clip].concat(r))}},{"key":"closePath","value":function closePath(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.closePath].concat(r))}},{"key":"createPattern","value":function createPattern(t,r){return this.createPattern(t,r)}},{"key":"draw","value":(t=Object(l.a)(p.a.mark((function _callee(t,r){var i,o,u,c,l;return p.a.wrap((function _callee$(h){for(;;)switch(h.prev=h.next){case 0:h.prev=0,t||this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),i=Object(a.a)(this.actions),h.prev=3,i.s();case 5:if((o=i.n()).done){h.next=11;break}return u=o.value,c=u.func,l=u.args,h.next=9,c.apply(this.ctx,l);case 9:h.next=5;break;case 11:h.next=16;break;case 13:h.prev=13,h.t0=h.catch(3),i.e(h.t0);case 16:return h.prev=16,i.f(),h.finish(16);case 19:this.emptyActions(),r&&r(),h.next=26;break;case 23:throw h.prev=23,h.t1=h.catch(0),{"errMsg":h.t1.message};case 26:case"end":return h.stop()}}),_callee,this,[[0,23],[3,13,16,19]])}))),function draw(r,i){return t.apply(this,arguments)})},{"key":"drawImage","value":function drawImage(t){for(var r=this,i=arguments.length,o=new Array(i>1?i-1:0),u=1;u<i;u++)o[u-1]=arguments[u];this.enqueueActions((function(){var i;if("string"==typeof t){var u=new Image;return u.src=t,new Promise((function(t,i){u.onload=function(){var i;(i=r.ctx).drawImage.apply(i,[u].concat(o)),t()},u.onerror=i}))}(i=r.ctx).drawImage.apply(i,[t].concat(o))}))}},{"key":"fill","value":function fill(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.fill].concat(r))}},{"key":"fillRect","value":function fillRect(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.fillRect].concat(r))}},{"key":"fillText","value":function fillText(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.fillText].concat(r))}},{"key":"lineTo","value":function lineTo(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.lineTo].concat(r))}},{"key":"moveTo","value":function moveTo(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.moveTo].concat(r))}},{"key":"quadraticCurveTo","value":function quadraticCurveTo(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.quadraticCurveTo].concat(r))}},{"key":"rect","value":function rect(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.rect].concat(r))}},{"key":"restore","value":function restore(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.restore].concat(r))}},{"key":"rotate","value":function rotate(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.rotate].concat(r))}},{"key":"save","value":function save(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.save].concat(r))}},{"key":"scale","value":function scale(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.scale].concat(r))}},{"key":"setFillStyle","value":function setFillStyle(t){var r=this;this.enqueueActions((function(){r.ctx.fillStyle=t}))}},{"key":"setFontSize","value":function setFontSize(t){this.font="".concat(t,"px")}},{"key":"setGlobalAlpha","value":function setGlobalAlpha(t){this.globalAlpha=t}},{"key":"setLineCap","value":function setLineCap(t){this.lineCap=t}},{"key":"setLineDash","value":function setLineDash(t,r){var i=this;this.enqueueActions((function(){i.ctx.setLineDash(t),i.ctx.lineDashOffset=r}))}},{"key":"setLineJoin","value":function setLineJoin(t){this.lineJoin=t}},{"key":"setLineWidth","value":function setLineWidth(t){this.lineWidth=t}},{"key":"setMiterLimit","value":function setMiterLimit(t){this.miterLimit=t}},{"key":"setShadow","value":function setShadow(t,r,i,o){var u=this;this.enqueueActions((function(){u.ctx.shadowOffsetX=t,u.ctx.shadowOffsetY=r,u.ctx.shadowColor=o,u.ctx.shadowBlur=i}))}},{"key":"setStrokeStyle","value":function setStrokeStyle(t){var r=this;this.enqueueActions((function(){r.ctx.strokeStyle=t}))}},{"key":"setTextAlign","value":function setTextAlign(t){this.textAlign=t}},{"key":"setTextBaseline","value":function setTextBaseline(t){this.textBaseline=v[t]||"alphabetic"}},{"key":"setTransform","value":function setTransform(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.setTransform].concat(r))}},{"key":"stroke","value":function stroke(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.stroke].concat(r))}},{"key":"strokeRect","value":function strokeRect(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.strokeRect].concat(r))}},{"key":"strokeText","value":function strokeText(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.strokeText].concat(r))}},{"key":"transform","value":function transform(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.transform].concat(r))}},{"key":"translate","value":function translate(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.translate].concat(r))}},{"key":"measureText","value":function measureText(t){return this.measureText(t)}},{"key":"createCircularGradient","value":function createCircularGradient(t,r,i){return this.ctx.createRadialGradient(t,r,0,t,r,i)}},{"key":"createLinearGradient","value":function createLinearGradient(t,r,i,o){return this.createLinearGradient(t,r,i,o)}}]),CanvasContext}(),d=function(){function NodesRef(t,r,i){Object(u.a)(this,NodesRef),this._component=r._component,this._selector=t,this._selectorQuery=r,this._single=i}return Object(c.a)(NodesRef,[{"key":"context","value":function context(t){var r=this._selector,i=this._component,o=this._single,u=this._selectorQuery;return u._push(r,i,o,{"context":!0},t),u}},{"key":"node","value":function node(t){var r=this._selector,i=this._component,o=this._single,u=this._selectorQuery;return u._push(r,i,o,{"nodeCanvasType":!0,"node":!0},t),u}},{"key":"boundingClientRect","value":function boundingClientRect(t){var r=this._selector,i=this._component,o=this._single,u=this._selectorQuery;return u._push(r,i,o,{"id":!0,"dataset":!0,"rect":!0,"size":!0},t),u}},{"key":"scrollOffset","value":function scrollOffset(t){var r=this._selector,i=this._component,o=this._single,u=this._selectorQuery;return u._push(r,i,o,{"id":!0,"dataset":!0,"scrollOffset":!0},t),u}},{"key":"fields","value":function fields(t,r){var i=this._selector,o=this._component,u=this._single,c=this._selectorQuery,a=t.id,l=t.dataset,h=t.rect,p=t.size,v=t.scrollOffset,y=t.properties,d=void 0===y?[]:y,g=t.computedStyle,m=void 0===g?[]:g;return c._push(i,o,u,{"id":a,"dataset":l,"rect":h,"size":p,"scrollOffset":v,"properties":d,"computedStyle":m},r),c}}]),NodesRef}();function filter(t,r,i){if(!r)return null;var o=".taro_page"===i,u=t.id,c=t.dataset,a=t.rect,l=t.size,h=t.scrollOffset,p=t.properties,v=void 0===p?[]:p,d=t.computedStyle,g=void 0===d?[]:d,m=t.nodeCanvasType,x=t.node,w=t.context,_={};if(m&&x){var k=r.tagName;if(_.node={"id":r.id,"$taroElement":r},/^taro-canvas-core/i.test(k)){var A=r.type||"";_.nodeCanvasType=A;var b=r.getElementsByTagName("canvas")[0];/^(2d|webgl)/i.test(A)&&b?_.node=b:_.node=null}else _.nodeCanvasType="",_.node=r;return _}if(!w){if(u&&(_.id=r.id),c&&(_.dataset=Object.assign({},r.dataset)),a||l){var q=r.getBoundingClientRect(),T=q.left,C=q.right,S=q.top,j=q.bottom,R=q.width,O=q.height;a&&(o?(_.left=0,_.right=0,_.top=0,_.bottom=0):(_.left=T,_.right=C,_.top=S,_.bottom=j)),l&&(o?(_.width=r.clientWidth,_.height=r.clientHeight):(_.width=R,_.height=O))}if(h&&(_.scrollLeft=r.scrollLeft,_.scrollTop=r.scrollTop),v.length&&v.forEach((function(t){var i=r.getAttribute(t);i&&(_[t]=i)})),g.length){var P=window.getComputedStyle(r);g.forEach((function(t){var r=P.getPropertyValue(t)||P[t];r&&(_[t]=r)}))}return _}var L=r.tagName;if(/^taro-video-core/i.test(L))return{"context":r};if(/^taro-canvas-core/i.test(L)){var E=r.type||"2d",I=null==r?void 0:r.querySelector("canvas"),z=null==I?void 0:I.getContext(E);return{"context":new y(I,z)}}/^taro-live-player-core/i.test(L)?console.error("暂时不支持通过 NodesRef.context 获取 LivePlayerContext"):/^taro-editor-core/i.test(L)?console.error("暂时不支持通过 NodesRef.context 获取 EditorContext"):/^taro-map-core/i.test(L)&&console.error("暂时不支持通过 NodesRef.context 获取 MapContext")}var g=function(){function SelectorQuery(){Object(u.a)(this,SelectorQuery),this._defaultWebviewId=null,this._webviewId=null,this._queue=[],this._queueCb=[],this._component}return Object(c.a)(SelectorQuery,[{"key":"in","value":function _in(t){return this._component=t,this}},{"key":"select","value":function select(t){return"string"==typeof t&&(t=t.replace(">>>",">")),new d(t,this,!0)}},{"key":"selectAll","value":function selectAll(t){return"string"==typeof t&&(t=t.replace(">>>",">")),new d(t,this,!1)}},{"key":"selectViewport","value":function selectViewport(){return new d(".taro_page",this,!0)}},{"key":"exec","value":function exec(t){var r=this;return function queryBat(t,r){var i=[];t.forEach((function(t){var r,u=t.selector,c=t.single,a=t.fields,l=t.component,h=null!==l&&Object(o.b)(l)||document,p=!1;if(h!==document){var v=null===(r=h.parentNode)||void 0===r?void 0:r.querySelectorAll(u);if(v)for(var y=0,d=v.length;y<d;++y)if(h===v[y]){p=!0;break}}if(c){var g=!0===p?h:h.querySelector(u);i.push(filter(a,g,u))}else{var m=h.querySelectorAll(u),x=[];!0===p&&x.push(h);for(var w=0,_=m.length;w<_;++w)x.push(m[w]);i.push(x.map((function(t){return filter(a,t)})))}})),r(i)}(this._queue,(function(i){var o=r._queueCb;i.forEach((function(t,i){var u=o[i];"function"==typeof u&&u.call(r,t)})),"function"==typeof t&&t.call(r,i)})),this}},{"key":"_push","value":function _push(t,r,i,o){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this._queue.push({"component":r,"selector":t,"single":i,"fields":o}),this._queueCb.push(u)}}]),SelectorQuery}(),m=function createSelectorQuery(){return new g};Object(o.h)("createIntersectionObserver")},"310":function(t,r,i){"use strict";i.d(r,"b",(function(){return a})),i.d(r,"a",(function(){return l}));var o=i(6),u=new(i(15).a),c=function resizeListener(){u.trigger({"windowWidth":window.screen.width,"windowHeight":window.screen.height})},a=(Object(o.h)("setWindowSize"),function onWindowResize(t){u.add(t),1===u.count()&&window.addEventListener("resize",c)}),l=function offWindowResize(t){u.remove(t),0===u.count()&&window.removeEventListener("resize",c)}}}]);
//# sourceMappingURL=6.2ff0e709.js.map