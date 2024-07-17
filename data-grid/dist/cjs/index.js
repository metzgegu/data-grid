"use strict";var e=require("react"),n=function(){return n=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},n.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var r,t={exports:{}},o={};var a,i={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */"production"===process.env.NODE_ENV?t.exports=function(){if(r)return o;r=1;var n=e,t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var o,a={},l=null,u=null;for(o in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)i.call(n,o)&&!s.hasOwnProperty(o)&&(a[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===a[o]&&(a[o]=n[o]);return{$$typeof:t,type:e,key:l,ref:u,props:a,_owner:c.current}}return o.Fragment=a,o.jsx=l,o.jsxs=l,o}():t.exports=(a||(a=1,"production"!==process.env.NODE_ENV&&function(){var n=e,r=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen"),m=Symbol.iterator,v="@@iterator",h=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];!function(e,n,r){var t=h.ReactDebugCurrentFrame.getStackAddendum();""!==t&&(n+="%s",r=r.concat([t]));var o=r.map((function(e){return String(e)}));o.unshift("Warning: "+n),Function.prototype.apply.call(console[e],console,o)}("error",e,r)}var _,k=!1,x=!1,j=!1,w=!1,S=!1;function O(e){return e.displayName||"Context"}function R(e){if(null==e)return null;if("number"==typeof e.tag&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case t:return"Portal";case c:return"Profiler";case a:return"StrictMode";case p:return"Suspense";case f:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case l:return O(e)+".Consumer";case s:return O(e._context)+".Provider";case u:return function(e,n,r){var t=e.displayName;if(t)return t;var o=n.displayName||n.name||"";return""!==o?r+"("+o+")":r}(e,e.render,"ForwardRef");case d:var n=e.displayName||null;return null!==n?n:R(e.type)||"Memo";case y:var r=e,i=r._payload,g=r._init;try{return R(g(i))}catch(e){return null}}return null}_=Symbol.for("react.module.reference");var E,C,N,P,T,$,D,F=Object.assign,I=0;function L(){}L.__reactDisabledLog=!0;var A,z=h.ReactCurrentDispatcher;function W(e,n,r){if(void 0===A)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return"\n"+A+e}var U,B=!1,M="function"==typeof WeakMap?WeakMap:Map;function Y(e,n){if(!e||B)return"";var r,t=U.get(e);if(void 0!==t)return t;B=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=z.current,z.current=null,function(){if(0===I){E=console.log,C=console.info,N=console.warn,P=console.error,T=console.group,$=console.groupCollapsed,D=console.groupEnd;var e={configurable:!0,enumerable:!0,value:L,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}I++}();try{if(n){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){r=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){r=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(n){if(n&&r&&"string"==typeof n.stack){for(var c=n.stack.split("\n"),s=r.stack.split("\n"),l=c.length-1,u=s.length-1;l>=1&&u>=0&&c[l]!==s[u];)u--;for(;l>=1&&u>=0;l--,u--)if(c[l]!==s[u]){if(1!==l||1!==u)do{if(l--,--u<0||c[l]!==s[u]){var p="\n"+c[l].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),"function"==typeof e&&U.set(e,p),p}}while(l>=1&&u>=0);break}}}finally{B=!1,z.current=o,function(){if(0==--I){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:F({},e,{value:E}),info:F({},e,{value:C}),warn:F({},e,{value:N}),error:F({},e,{value:P}),group:F({},e,{value:T}),groupCollapsed:F({},e,{value:$}),groupEnd:F({},e,{value:D})})}I<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var f=e?e.displayName||e.name:"",d=f?W(f):"";return"function"==typeof e&&U.set(e,d),d}function V(e,n,r){if(null==e)return"";if("function"==typeof e)return Y(e,!(!(t=e.prototype)||!t.isReactComponent));var t;if("string"==typeof e)return W(e);switch(e){case p:return W("Suspense");case f:return W("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case u:return Y(e.render,!1);case d:return V(e.type,n,r);case y:var o=e,a=o._payload,i=o._init;try{return V(i(a),n,r)}catch(e){}}return""}U=new M;var q=Object.prototype.hasOwnProperty,J={},K=h.ReactDebugCurrentFrame;function X(e){if(e){var n=e._owner,r=V(e.type,e._source,n?n.type:null);K.setExtraStackFrame(r)}else K.setExtraStackFrame(null)}var G=Array.isArray;function H(e){return G(e)}function Q(e){return""+e}function Z(e){if(function(e){try{return Q(e),!1}catch(e){return!0}}(e))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),Q(e)}var ee,ne,re,te=h.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};re={};var ae=function(e,n,t,o,a,i,c){var s={$$typeof:r,type:e,key:n,ref:t,props:c,_owner:i,_store:{}};return Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function ie(e,n,r,t,o){var a,i={},c=null,s=null;for(a in void 0!==r&&(Z(r),c=""+r),function(e){if(q.call(e,"key")){var n=Object.getOwnPropertyDescriptor(e,"key").get;if(n&&n.isReactWarning)return!1}return void 0!==e.key}(n)&&(Z(n.key),c=""+n.key),function(e){if(q.call(e,"ref")){var n=Object.getOwnPropertyDescriptor(e,"ref").get;if(n&&n.isReactWarning)return!1}return void 0!==e.ref}(n)&&(s=n.ref,function(e,n){if("string"==typeof e.ref&&te.current&&n&&te.current.stateNode!==n){var r=R(te.current.type);re[r]||(b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',R(te.current.type),e.ref),re[r]=!0)}}(n,o)),n)q.call(n,a)&&!oe.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps){var l=e.defaultProps;for(a in l)void 0===i[a]&&(i[a]=l[a])}if(c||s){var u="function"==typeof e?e.displayName||e.name||"Unknown":e;c&&function(e,n){var r=function(){ee||(ee=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}(i,u),s&&function(e,n){var r=function(){ne||(ne=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}(i,u)}return ae(e,c,s,o,t,te.current,i)}var ce,se=h.ReactCurrentOwner,le=h.ReactDebugCurrentFrame;function ue(e){if(e){var n=e._owner,r=V(e.type,e._source,n?n.type:null);le.setExtraStackFrame(r)}else le.setExtraStackFrame(null)}function pe(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}function fe(){if(se.current){var e=R(se.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}ce=!1;var de={};function ye(e,n){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var n=fe();if(!n){var r="string"==typeof e?e:e.displayName||e.name;r&&(n="\n\nCheck the top-level render call using <"+r+">.")}return n}(n);if(!de[r]){de[r]=!0;var t="";e&&e._owner&&e._owner!==se.current&&(t=" It was passed a child from "+R(e._owner.type)+"."),ue(e),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,t),ue(null)}}}function ge(e,n){if("object"==typeof e)if(H(e))for(var r=0;r<e.length;r++){var t=e[r];pe(t)&&ye(t,n)}else if(pe(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var n=m&&e[m]||e[v];return"function"==typeof n?n:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)pe(a.value)&&ye(a.value,n)}}function me(e){var n,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)n=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==u&&r.$$typeof!==d)return;n=r.propTypes}if(n){var t=R(r);!function(e,n,r,t,o){var a=Function.call.bind(q);for(var i in e)if(a(e,i)){var c=void 0;try{if("function"!=typeof e[i]){var s=Error((t||"React class")+": "+r+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw s.name="Invariant Violation",s}c=e[i](n,i,t,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){c=e}!c||c instanceof Error||(X(o),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",t||"React class",r,i,typeof c),X(null)),c instanceof Error&&!(c.message in J)&&(J[c.message]=!0,X(o),b("Failed %s type: %s",r,c.message),X(null))}}(n,e.props,"prop",t,e)}else void 0===r.PropTypes||ce||(ce=!0,b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",R(r)||"Unknown"));"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}var ve={};function he(e,n,t,i,m,v){var h=function(e){return"string"==typeof e||"function"==typeof e||!!(e===o||e===c||S||e===a||e===p||e===f||w||e===g||k||x||j)||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===d||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===_||void 0!==e.getModuleId)}(e);if(!h){var O,E="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(E+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),E+=fe(),null===e?O="null":H(e)?O="array":void 0!==e&&e.$$typeof===r?(O="<"+(R(e.type)||"Unknown")+" />",E=" Did you accidentally export a JSX literal instead of a component?"):O=typeof e,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",O,E)}var C=ie(e,n,t,m,v);if(null==C)return C;if(h){var N=n.children;if(void 0!==N)if(i)if(H(N)){for(var P=0;P<N.length;P++)ge(N[P],e);Object.freeze&&Object.freeze(N)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ge(N,e)}if(q.call(n,"key")){var T=R(e),$=Object.keys(n).filter((function(e){return"key"!==e})),D=$.length>0?"{key: someKey, "+$.join(": ..., ")+": ...}":"{key: someKey}";ve[T+D]||(b('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',D,T,$.length>0?"{"+$.join(": ..., ")+": ...}":"{}",T),ve[T+D]=!0)}return e===o?function(e){for(var n=Object.keys(e.props),r=0;r<n.length;r++){var t=n[r];if("children"!==t&&"key"!==t){ue(e),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",t),ue(null);break}}null!==e.ref&&(ue(e),b("Invalid attribute `ref` supplied to `React.Fragment`."),ue(null))}(C):me(C),C}var be=function(e,n,r){return he(e,n,r,!1)},_e=function(e,n,r){return he(e,n,r,!0)};i.Fragment=o,i.jsx=be,i.jsxs=_e}()),i);var c=t.exports;function s(e,n){void 0===n&&(n={});var r=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}s("table {\n    border-collapse: collapse;\n}\n\nthead th { \n    position: sticky;\n    top: 0;\n    background-color: white;\n    padding: 8px;\n}\n\n.datagrid__pagination {\n    padding: 8px 16px;\n    align-self: end;\n    position: sticky;\n    bottom: 0;\n    background: white;\n    width: 100%;\n}\n\n.datagrid {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    overflow: auto;\n}");s("/* .resizable__cell {\n    resize: horizontal;\n    overflow: auto;\n    width: 120px;\n    height: 120px;\n    margin: 0px;\n    padding: 0px;\n    display:block;\n}\n\ntd div {\n    border: 0;\n    width: auto;\n    height: auto;\n    min-height: 20px;\n    min-width: 20px;\n}\n\ntd {\n    border: 2px solid black;\n    padding: 0;\n    margin: 0px;\n    overflow: auto;\n  } */\n\n.cell {\n    padding: 8px;\n}");var l=function(e){var r=e.schema,t=e.data,o=e.onRowClick;return t&&r?c.jsx("tbody",{children:t.map((function(e,t){return c.jsx("tr",n({onClick:function(){return o&&o(e)}},{children:r.map((function(r){return c.jsx("td",n({className:"cell"},{children:c.jsx("div",n({className:"cell_content"},{children:e[r.field]}))}),r.field)}))}),t)}))}):c.jsx("div",{children:"Loading ..."})},u=function(e){var n=e.schema;return n?c.jsx("thead",{children:c.jsx("tr",{children:n.map((function(e){return c.jsx("th",{children:e.displayName},e.field)}))})}):c.jsx("div",{children:"Loading ..."})};s(".pagination {\n    display: inline-block;\n}\n\n.pagination__controls {\n    color: black;\n    float: left;\n    padding: 8px 16px;\n    text-decoration: none;\n    transition: background-color .3s;\n    border: 1px solid #ddd;\n}\n  \n.pagination__position {\n    color: black;\n    float: left;\n    padding: 8px 16px;\n    text-decoration: none;\n    transition: background-color .3s;\n    border: 1px solid #ddd;\n}\n\n.pagination__position--active {\n    background-color: #4CAF50;\n    color: white;\n    border: 1px solid #4CAF50;\n}\n\n.pagination__position:hover:not(.active) {\n    background-color: #ddd;\n}\n\n.pagination__limitSelector {\n    color: black;\n    float: left;\n    padding: 8px 16px;\n    text-decoration: none;\n    transition: background-color .3s;\n    border: 1px solid #ddd;\n}");var p=function(e){var r=e.paginationOptions,t=r.page,o=r.pageSize,a=r.total,i=r.onPageChanged,s=r.onLimitChanged,l=r.limitOptions,u=function(e,n){return n<=5?Array.from({length:n},(function(e,n){return n+1})):e<=3?[1,2,3,4,5]:e>=n-2?[n-4,n-3,n-2,n-1,n]:[e-2,e-1,e,e+1,e+2]}(t,a);return c.jsxs("div",n({className:"pagination"},{children:[c.jsx("button",n({className:"pagination__controls",disabled:t<=3.5,onClick:function(){return i(1)}},{children:"««"})),c.jsx("button",n({className:"pagination__controls",disabled:t<=1,onClick:function(){return i(t-1)}},{children:"«"})),u.map((function(e){return c.jsx("button",n({className:"pagination__position ".concat(e===t?"pagination__position--active":""),onClick:function(){return i(e)}},{children:e}),e)})),c.jsx("button",n({className:"pagination__controls",disabled:t>=a,onClick:function(){return i(t+1)}},{children:"»"})),c.jsx("button",n({className:"pagination__controls",disabled:t>=a-2.5,onClick:function(){return i(a)}},{children:"»»"})),c.jsx("select",n({name:"limit",className:"pagination__limitSelector"},{children:l.map((function(e){return c.jsx("option",n({value:e,selected:e===o,onClick:function(){return s(e)}},{children:e}),e)}))}))]}))};exports.DataGrid=function(e){var r=e.schema,t=e.data,o=e.onRowClick,a=e.paginationOptions;return c.jsxs("div",n({className:"datagrid"},{children:[c.jsxs("table",n({className:"table"},{children:[c.jsx(u,{schema:r}),c.jsx(l,{schema:r,data:t,onRowClick:o})]})),a&&c.jsx("div",n({className:"datagrid__pagination"},{children:c.jsx(p,{paginationOptions:a})}))]}))};
//# sourceMappingURL=index.js.map
