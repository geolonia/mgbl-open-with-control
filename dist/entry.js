!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";n.r(e),n.d(e,"OpenWithControl",function(){return r});var r=function(t){var e=this;this.onAdd=function(){var t=e.option,n=t.title,r=t.url,o=t.text;return e.container=document.createElement("div"),e.container.className="mapboxgl-ctrl mapboxgl-ctrl-group",e.container.innerHTML="\n      <h3>"+n+'</h3>\n      <a href="'+r+'">'+o+"</a>\n    ",e.container.setAttribute("style","background: white;"),e.container},this.onRemove=function(){return e.container.parentNode.removeChild(e.container)},this.getDefaultPosition=function(){return"top-left"},this.option=t};e.default=r},function(t,e,n){"use strict";n.r(e);var r=n(0),o=function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},i=window.geolonia||window.tilecloud,u=document.querySelector('script[data-scope="@geolonia/mbgl-open-with-control"]'),a=u?u.dataset:{};i.registerPlugin(function(t,e){t.addControl(new r.OpenWithControl(o({},e.dataset,a)))})}]);