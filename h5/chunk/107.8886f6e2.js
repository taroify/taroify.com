(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{"131":function(t,n,i){"use strict";i.r(n),i.d(n,"taro_form_core",(function(){return r}));var o=i(32),r=function(){function e(t){Object(o.g)(this,t),this.onSubmit=Object(o.c)(this,"submit",7),this.value={}}return e.prototype.watchSlotParent=function(t){if(this.orginalAppendChild||(this.orginalAppendChild=this.el.appendChild,this.orginalInsertBefore=this.el.insertBefore,this.orginalReplaceChild=this.el.replaceChild,this.orginalRemoveChild=this.el.removeChild),!t)return this.el.appendChild=this.orginalAppendChild,this.el.insertBefore=this.orginalInsertBefore,this.el.replaceChild=this.orginalReplaceChild,void(this.el.removeChild=this.orginalRemoveChild);this.el.appendChild=function(n){return t.appendChild(n)},this.el.insertBefore=function(n,i){return t.insertBefore(n,i)},this.el.replaceChild=function(n,i){return t.replaceChild(n,i)},this.el.removeChild=function(n){return t.removeChild(n)}},e.prototype.onButtonSubmit=function(t){t.stopPropagation(),this.value=this.getFormValue(),this.onSubmit.emit({"value":this.value})},e.prototype.onButtonReset=function(t){t.stopPropagation(),this.form.reset()},e.prototype.componentDidLoad=function(){var t=this;this.value=this.getFormValue(),Object.defineProperty(this.el,"value",{"get":function get(){return t.value},"configurable":!0})},e.prototype.componentDidRender=function(){this.setSlotParent(this.form)},e.prototype.getFormValue=function(){for(var t=this.el,n=[],i=t.getElementsByTagName("input"),o=0;o<i.length;o++)n.push(i[o]);var r={},a={};n.forEach((function(t){-1===t.className.indexOf("weui-switch")?"radio"!==t.type?"checkbox"!==t.type?r[t.name]=t.value:t.checked?a[t.name]?r[t.name].push(t.value):(a[t.name]=!0,r[t.name]=[t.value]):a[t.name]||(r[t.name]=[]):t.checked?(a[t.name]=!0,r[t.name]=t.value):a[t.name]||(r[t.name]=""):r[t.name]=t.checked}));for(var l=t.getElementsByTagName("textarea"),h=[],s=0;s<l.length;s++)h.push(l[s]);return h.forEach((function(t){r[t.name]=t.value})),r},e.prototype.setSlotParent=function(t){this.slotParent=t},e.prototype.render=function(){var t=this;return Object(o.e)("form",{"ref":function ref(n){n&&(t.form=n)}},Object(o.e)("slot",null))},Object.defineProperty(e.prototype,"el",{"get":function get(){return Object(o.d)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(e,"watchers",{"get":function get(){return{"slotParent":["watchSlotParent"]}},"enumerable":!1,"configurable":!0}),e}()}}]);
//# sourceMappingURL=107.8886f6e2.js.map