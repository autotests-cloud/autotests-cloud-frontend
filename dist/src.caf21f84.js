parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ACgA":[function(require,module,exports) {
var define;
var e;!function(t,l){"object"==typeof exports&&"object"==typeof module?module.exports=l():"function"==typeof e&&e.amd?e([],l):"object"==typeof exports?exports.scrollLock=l():t.scrollLock=l()}(this,function(){return function(e){var t={};function l(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,l),o.l=!0,o.exports}return l.m=e,l.c=t,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(r,o,function(t){return e[t]}.bind(null,o));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t,l){"use strict";l.r(t);var r=function(e){return Array.isArray(e)?e:[e]},o=function(e){return e instanceof Node},n=function(e,t){if(e&&t){e=function(e){return e instanceof NodeList}(e)?e:[e];for(var l=0;l<e.length&&!0!==t(e[l],l,e.length);l++);}},c=function(e){return console.error("[scroll-lock] ".concat(e))},a=function(e){if(Array.isArray(e))return e.join(", ")},i=function(e){var t=[];return n(e,function(e){return t.push(e)}),t},u=function(e,t){var l=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:document;if(l&&-1!==i(r.querySelectorAll(t)).indexOf(e))return e;for(;(e=e.parentElement)&&-1===i(r.querySelectorAll(t)).indexOf(e););return e},d=function(e,t){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;return-1!==i(l.querySelectorAll(t)).indexOf(e)},s=function(e){if(e)return"hidden"===getComputedStyle(e).overflow},f=function(e){if(e)return!!s(e)||e.scrollTop<=0},p=function(e){if(e){if(s(e))return!0;var t=e.scrollTop,l=e.scrollHeight;return t+e.offsetHeight>=l}},g=function(e){if(e)return!!s(e)||e.scrollLeft<=0},b=function(e){if(e){if(s(e))return!0;var t=e.scrollLeft,l=e.scrollWidth;return t+e.offsetWidth>=l}};function h(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}l.d(t,"disablePageScroll",function(){return S}),l.d(t,"enablePageScroll",function(){return y}),l.d(t,"getScrollState",function(){return k}),l.d(t,"clearQueueScrollLocks",function(){return w}),l.d(t,"getTargetScrollBarWidth",function(){return A}),l.d(t,"getCurrentTargetScrollBarWidth",function(){return G}),l.d(t,"getPageScrollBarWidth",function(){return T}),l.d(t,"getCurrentPageScrollBarWidth",function(){return L}),l.d(t,"addScrollableTarget",function(){return W}),l.d(t,"removeScrollableTarget",function(){return x}),l.d(t,"addScrollableSelector",function(){return F}),l.d(t,"removeScrollableSelector",function(){return Y}),l.d(t,"addLockableTarget",function(){return E}),l.d(t,"addLockableSelector",function(){return O}),l.d(t,"setFillGapMethod",function(){return P}),l.d(t,"addFillGapTarget",function(){return j}),l.d(t,"removeFillGapTarget",function(){return q}),l.d(t,"addFillGapSelector",function(){return M}),l.d(t,"removeFillGapSelector",function(){return N}),l.d(t,"refillGaps",function(){return B});var v=["padding","margin","width","max-width","none"],m={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:v[0],startTouchY:0,startTouchX:0},S=function(e){m.queue<=0&&(m.scroll=!1,C(),Q()),W(e),m.queue++},y=function(e){m.queue>0&&m.queue--,m.queue<=0&&(m.scroll=!0,K(),D()),x(e)},k=function(){return m.scroll},w=function(){m.queue=0},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o(e)){var l=e.style.overflowY;t?k()||(e.style.overflowY=e.getAttribute("data-scroll-lock-saved-overflow-y-property")):e.style.overflowY="scroll";var r=G(e);return e.style.overflowY=l,r}return 0},G=function(e){if(o(e)){if(e===document.body){var t=document.documentElement.clientWidth;return window.innerWidth-t}var l=e.style.borderLeftWidth,r=e.style.borderRightWidth;e.style.borderLeftWidth="0px",e.style.borderRightWidth="0px";var n=e.offsetWidth-e.clientWidth;return e.style.borderLeftWidth=l,e.style.borderRightWidth=r,n}return 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return A(document.body,e)},L=function(){return G(document.body)},W=function(e){e&&r(e).map(function(e){n(e,function(e){o(e)?e.setAttribute("data-scroll-lock-scrollable",""):c('"'.concat(e,'" is not a Element.'))})})},x=function(e){e&&r(e).map(function(e){n(e,function(e){o(e)?e.removeAttribute("data-scroll-lock-scrollable"):c('"'.concat(e,'" is not a Element.'))})})},F=function(e){e&&r(e).map(function(e){m.scrollableSelectors.push(e)})},Y=function(e){e&&r(e).map(function(e){m.scrollableSelectors=m.scrollableSelectors.filter(function(t){return t!==e})})},E=function(e){e&&(r(e).map(function(e){n(e,function(e){o(e)?e.setAttribute("data-scroll-lock-lockable",""):c('"'.concat(e,'" is not a Element.'))})}),k()||C())},O=function(e){e&&(r(e).map(function(e){m.lockableSelectors.push(e)}),k()||C(),M(e))},P=function(e){if(e)if(-1!==v.indexOf(e))m.fillGapMethod=e,B();else{var t=v.join(", ");c('"'.concat(e,'" method is not available!\nAvailable fill gap methods: ').concat(t,"."))}},j=function(e){e&&r(e).map(function(e){n(e,function(e){o(e)?(e.setAttribute("data-scroll-lock-fill-gap",""),m.scroll||z(e)):c('"'.concat(e,'" is not a Element.'))})})},q=function(e){e&&r(e).map(function(e){n(e,function(e){o(e)?(e.removeAttribute("data-scroll-lock-fill-gap"),m.scroll||J(e)):c('"'.concat(e,'" is not a Element.'))})})},M=function(e){e&&r(e).map(function(e){-1===m.fillGapSelectors.indexOf(e)&&(m.fillGapSelectors.push(e),m.scroll||H(e))})},N=function(e){e&&r(e).map(function(e){m.fillGapSelectors=m.fillGapSelectors.filter(function(t){return t!==e}),m.scroll||I(e)})},B=function(){m.scroll||Q()},C=function(){var e=a(m.lockableSelectors);R(e)},K=function(){var e=a(m.lockableSelectors);U(e)},R=function(e){var t=document.querySelectorAll(e);n(t,function(e){_(e)})},U=function(e){var t=document.querySelectorAll(e);n(t,function(e){X(e)})},_=function(e){if(o(e)&&"true"!==e.getAttribute("data-scroll-lock-locked")){var t=window.getComputedStyle(e);e.setAttribute("data-scroll-lock-saved-overflow-y-property",t.overflowY),e.setAttribute("data-scroll-lock-saved-inline-overflow-property",e.style.overflow),e.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",e.style.overflowY),e.style.overflow="hidden",e.setAttribute("data-scroll-lock-locked","true")}},X=function(e){o(e)&&"true"===e.getAttribute("data-scroll-lock-locked")&&(e.style.overflow=e.getAttribute("data-scroll-lock-saved-inline-overflow-property"),e.style.overflowY=e.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-saved-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-locked"))},Q=function(){m.fillGapSelectors.map(function(e){H(e)})},D=function(){m.fillGapSelectors.map(function(e){I(e)})},H=function(e){var t=document.querySelectorAll(e),l=-1!==m.lockableSelectors.indexOf(e);n(t,function(e){z(e,l)})},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o(e)){var l;if(""===e.getAttribute("data-scroll-lock-lockable")||t)l=A(e,!0);else{var r=u(e,a(m.lockableSelectors));l=A(r,!0)}"true"===e.getAttribute("data-scroll-lock-filled-gap")&&J(e);var n=window.getComputedStyle(e);if(e.setAttribute("data-scroll-lock-filled-gap","true"),e.setAttribute("data-scroll-lock-current-fill-gap-method",m.fillGapMethod),"margin"===m.fillGapMethod){var c=parseFloat(n.marginRight);e.style.marginRight="".concat(c+l,"px")}else if("width"===m.fillGapMethod)e.style.width="calc(100% - ".concat(l,"px)");else if("max-width"===m.fillGapMethod)e.style.maxWidth="calc(100% - ".concat(l,"px)");else if("padding"===m.fillGapMethod){var i=parseFloat(n.paddingRight);e.style.paddingRight="".concat(i+l,"px")}}},I=function(e){var t=document.querySelectorAll(e);n(t,function(e){J(e)})},J=function(e){if(o(e)&&"true"===e.getAttribute("data-scroll-lock-filled-gap")){var t=e.getAttribute("data-scroll-lock-current-fill-gap-method");e.removeAttribute("data-scroll-lock-filled-gap"),e.removeAttribute("data-scroll-lock-current-fill-gap-method"),"margin"===t?e.style.marginRight="":"width"===t?e.style.width="":"max-width"===t?e.style.maxWidth="":"padding"===t&&(e.style.paddingRight="")}};"undefined"!=typeof window&&window.addEventListener("resize",function(e){B()}),"undefined"!=typeof document&&(document.addEventListener("touchstart",function(e){m.scroll||(m.startTouchY=e.touches[0].clientY,m.startTouchX=e.touches[0].clientX)}),document.addEventListener("touchmove",function(e){if(!m.scroll){var t=m.startTouchY,l=m.startTouchX,r=e.touches[0].clientY,o=e.touches[0].clientX;if(e.touches.length<2){var n=a(m.scrollableSelectors),c={up:t<r,down:t>r,left:l<o,right:l>o},i={up:t+3<r,down:t-3>r,left:l+3<o,right:l-3>o};!function t(l){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(l){var o=u(l,n,!1);if(function(e){return d(e,'input[type="range"]')}(l))return!1;if(r||function(e){return d(e,'textarea, [contenteditable="true"]')}(l)&&u(l,n)||d(l,n)){var a=!1;g(l)&&b(l)?(c.up&&f(l)||c.down&&p(l))&&(a=!0):f(l)&&p(l)?(c.left&&g(l)||c.right&&b(l))&&(a=!0):(i.up&&f(l)||i.down&&p(l)||i.left&&g(l)||i.right&&b(l))&&(a=!0),a&&(o?t(o,!0):e.cancelable&&e.preventDefault())}else t(o)}else e.cancelable&&e.preventDefault()}(e.target)}}},{passive:!1}),document.addEventListener("touchend",function(e){m.scroll||(m.startTouchY=0,m.startTouchX=0)}));var V={hide:function(e){c('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'),S(e)},show:function(e){c('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'),y(e)},toggle:function(e){c('"toggle" is deprecated! Do not use it.'),k()?S():y(e)},getState:function(){return c('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'),k()},getWidth:function(){return c('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'),T()},getCurrentWidth:function(){return c('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'),L()},setScrollableTargets:function(e){c('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'),W(e)},setFillGapSelectors:function(e){c('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'),M(e)},setFillGapTargets:function(e){c('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'),j(e)},clearQueue:function(){c('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'),w()}},Z=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{},r=Object.keys(l);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(l).filter(function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable}))),r.forEach(function(t){h(e,t,l[t])})}return e}({disablePageScroll:S,enablePageScroll:y,getScrollState:k,clearQueueScrollLocks:w,getTargetScrollBarWidth:A,getCurrentTargetScrollBarWidth:G,getPageScrollBarWidth:T,getCurrentPageScrollBarWidth:L,addScrollableSelector:F,removeScrollableSelector:Y,addScrollableTarget:W,removeScrollableTarget:x,addLockableSelector:O,addLockableTarget:E,addFillGapSelector:M,removeFillGapSelector:N,addFillGapTarget:j,removeFillGapTarget:q,setFillGapMethod:P,refillGaps:B,_state:m},V);t.default=Z}]).default});
},{}],"QVnC":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"JC3T":[function(require,module,exports) {
"use strict";function e(e,r,t,n,o,a,u){try{var i=e[a](u),s=i.value}catch(c){return void t(c)}i.done?r(s):Promise.resolve(s).then(n,o)}function r(r){return function(){var t=this,n=arguments;return new Promise(function(o,a){var u=r.apply(t,n);function i(r){e(u,o,a,i,s,"next",r)}function s(r){e(u,o,a,i,s,"throw",r)}i(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.sendData=void 0,require("regenerator-runtime/runtime");var t=function(){var e=r(regeneratorRuntime.mark(function e(r,t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r,{method:"POST",body:t,headers:{"Content-Type":"application/json"}});case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Ошибка по адресу ".concat(r,", статус ошибки ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e)}));return function(r,t){return e.apply(this,arguments)}}();exports.sendData=t;
},{"regenerator-runtime/runtime":"QVnC"}],"gBSD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initForm=void 0;var e=require("../utils/sendData"),t="https://api.autotests.cloud/orders",r=document.querySelector("#objective"),s=r.querySelector(".btn"),o=r.querySelector(".btn--telegram"),a=document.querySelector("#title-textarea"),i=document.querySelector("#main-textarea"),l=document.querySelector(".alert"),c=document.querySelector("#telegram_frame");function n(e){e.style.opacity="0",e.style.display="none"}setTimeout(function(){},1500),s.addEventListener("click",function(e){});var u=function(){r.addEventListener("submit",function(u){u.preventDefault();var d=new FormData(r),m=Object.fromEntries(d.entries());if(m.steps&&m.title){m.price="free",m.email="admin@qa.guru";var y=(0,e.sendData)(t,JSON.stringify(m));s.classList.add("loading"),i.style.opacity="0",a.style.opacity="0",s.style.opacity="0",y.then(function(e){n(i),n(a),n(s),o.classList.remove("hidden"),c.style.display="block",r.reset(),c.innerHTML='<iframe id="telegram-post-autotests_cloud-17" class="telegram-iframe w-full h-full"\n          src="https://t.me/autotests_cloud/'.concat(e,'?embed=1" frameborder="0" scrolling="yes"></iframe>'),s.classList.remove("loading"),o.href="https://t.me/autotests_cloud/".concat(e),document.querySelector("#telegram-post-autotests_cloud-17").addEventListener("load",function(){})}),l.style.opacity="1",setTimeout(function(){l.style.opacity="0"},2e3)}else i.value||i.classList.add("border-red-500"),a.value||a.classList.add("border-red-500"),setTimeout(function(){i.classList.remove("border-red-500"),a.classList.remove("border-red-500")},2e3)})};exports.initForm=u;
},{"../utils/sendData":"JC3T"}],"gFXz":[function(require,module,exports) {
"use strict";function t(t,e,r,n,u,i,o){try{var c=t[i](o),s=c.value}catch(a){return void r(a)}c.done?e(s):Promise.resolve(s).then(n,u)}function e(e){return function(){var r=this,n=arguments;return new Promise(function(u,i){var o=e.apply(r,n);function c(e){t(o,u,i,c,s,"next",e)}function s(e){t(o,u,i,c,s,"throw",e)}c(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeSlash=void 0;var r=function(){var t=e(regeneratorRuntime.mark(function t(e,r){var n,u,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(n=document.querySelectorAll("[src],[href]"),u=0;u<n.length;++u)null!==(i=n[u]).getAttribute("src")&&"/"===i.getAttribute("src").charAt(0)&&i.setAttribute("src",i.getAttribute("src").slice(1)),null!==i.getAttribute("href")&&"/"===i.getAttribute("href").charAt(0)&&i.setAttribute("href",i.getAttribute("href").slice(1));case 2:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}();exports.removeSlash=r;
},{}],"Tnu0":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("scroll-lock"),o=require("./js/modules/initForm"),l=require("./js/utils/removeSlash");require("./styles.css"),require("./styles.scss");var r,t=document.querySelectorAll(".tab");function s(o){var l=document.querySelector("body"),t=document.querySelector(".modal-".concat(o));r=o;document.querySelector(".modal-container");t.classList.toggle("opacity-0"),t.classList.toggle("pointer-events-none"),l.classList.toggle("modal-active"),l.classList.contains("modal-active")?(0,e.disablePageScroll)(t):(0,e.enablePageScroll)(t)}(0,o.initForm)();var c=document.querySelector(".modal-w");(0,l.removeSlash)();
},{"scroll-lock":"ACgA","./js/modules/initForm":"gBSD","./js/utils/removeSlash":"gFXz","./styles.css":"Tnu0","./styles.scss":"Tnu0"}]},{},["Focm"], null)
//# sourceMappingURL=/src.caf21f84.js.map