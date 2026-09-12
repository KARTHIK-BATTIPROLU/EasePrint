(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function hv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var c0={exports:{}},xc={},d0={exports:{}},tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo=Symbol.for("react.element"),fv=Symbol.for("react.portal"),pv=Symbol.for("react.fragment"),mv=Symbol.for("react.strict_mode"),xv=Symbol.for("react.profiler"),gv=Symbol.for("react.provider"),vv=Symbol.for("react.context"),_v=Symbol.for("react.forward_ref"),yv=Symbol.for("react.suspense"),Sv=Symbol.for("react.memo"),bv=Symbol.for("react.lazy"),Kf=Symbol.iterator;function wv(t){return t===null||typeof t!="object"?null:(t=Kf&&t[Kf]||t["@@iterator"],typeof t=="function"?t:null)}var u0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h0=Object.assign,f0={};function ia(t,e,n){this.props=t,this.context=e,this.refs=f0,this.updater=n||u0}ia.prototype.isReactComponent={};ia.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ia.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function p0(){}p0.prototype=ia.prototype;function Rh(t,e,n){this.props=t,this.context=e,this.refs=f0,this.updater=n||u0}var Ph=Rh.prototype=new p0;Ph.constructor=Rh;h0(Ph,ia.prototype);Ph.isPureReactComponent=!0;var Zf=Array.isArray,m0=Object.prototype.hasOwnProperty,Lh={current:null},x0={key:!0,ref:!0,__self:!0,__source:!0};function g0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)m0.call(e,i)&&!x0.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:vo,type:t,key:s,ref:o,props:r,_owner:Lh.current}}function Mv(t,e){return{$$typeof:vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dh(t){return typeof t=="object"&&t!==null&&t.$$typeof===vo}function Ev(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jf=/\/+/g;function Oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ev(""+t.key):e.toString(36)}function xl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vo:case fv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Oc(o,0):i,Zf(r)?(n="",t!=null&&(n=t.replace(Jf,"$&/")+"/"),xl(r,e,n,"",function(d){return d})):r!=null&&(Dh(r)&&(r=Mv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Jf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Zf(t))for(var l=0;l<t.length;l++){s=t[l];var c=i+Oc(s,l);o+=xl(s,e,n,c,r)}else if(c=wv(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=i+Oc(s,l++),o+=xl(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Co(t,e,n){if(t==null)return t;var i=[],r=0;return xl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Tv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Sn={current:null},gl={transition:null},Nv={ReactCurrentDispatcher:Sn,ReactCurrentBatchConfig:gl,ReactCurrentOwner:Lh};function v0(){throw Error("act(...) is not supported in production builds of React.")}tt.Children={map:Co,forEach:function(t,e,n){Co(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Co(t,function(){e++}),e},toArray:function(t){return Co(t,function(e){return e})||[]},only:function(t){if(!Dh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};tt.Component=ia;tt.Fragment=pv;tt.Profiler=xv;tt.PureComponent=Rh;tt.StrictMode=mv;tt.Suspense=yv;tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nv;tt.act=v0;tt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=h0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)m0.call(e,c)&&!x0.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:vo,type:t.type,key:r,ref:s,props:i,_owner:o}};tt.createContext=function(t){return t={$$typeof:vv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gv,_context:t},t.Consumer=t};tt.createElement=g0;tt.createFactory=function(t){var e=g0.bind(null,t);return e.type=t,e};tt.createRef=function(){return{current:null}};tt.forwardRef=function(t){return{$$typeof:_v,render:t}};tt.isValidElement=Dh;tt.lazy=function(t){return{$$typeof:bv,_payload:{_status:-1,_result:t},_init:Tv}};tt.memo=function(t,e){return{$$typeof:Sv,type:t,compare:e===void 0?null:e}};tt.startTransition=function(t){var e=gl.transition;gl.transition={};try{t()}finally{gl.transition=e}};tt.unstable_act=v0;tt.useCallback=function(t,e){return Sn.current.useCallback(t,e)};tt.useContext=function(t){return Sn.current.useContext(t)};tt.useDebugValue=function(){};tt.useDeferredValue=function(t){return Sn.current.useDeferredValue(t)};tt.useEffect=function(t,e){return Sn.current.useEffect(t,e)};tt.useId=function(){return Sn.current.useId()};tt.useImperativeHandle=function(t,e,n){return Sn.current.useImperativeHandle(t,e,n)};tt.useInsertionEffect=function(t,e){return Sn.current.useInsertionEffect(t,e)};tt.useLayoutEffect=function(t,e){return Sn.current.useLayoutEffect(t,e)};tt.useMemo=function(t,e){return Sn.current.useMemo(t,e)};tt.useReducer=function(t,e,n){return Sn.current.useReducer(t,e,n)};tt.useRef=function(t){return Sn.current.useRef(t)};tt.useState=function(t){return Sn.current.useState(t)};tt.useSyncExternalStore=function(t,e,n){return Sn.current.useSyncExternalStore(t,e,n)};tt.useTransition=function(){return Sn.current.useTransition()};tt.version="18.3.1";d0.exports=tt;var ue=d0.exports;const _0=hv(ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av=ue,Cv=Symbol.for("react.element"),Rv=Symbol.for("react.fragment"),Pv=Object.prototype.hasOwnProperty,Lv=Av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dv={key:!0,ref:!0,__self:!0,__source:!0};function y0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Pv.call(e,i)&&!Dv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Cv,type:t,key:s,ref:o,props:r,_owner:Lv.current}}xc.Fragment=Rv;xc.jsx=y0;xc.jsxs=y0;c0.exports=xc;var a=c0.exports,Wd={},S0={exports:{}},On={},b0={exports:{}},w0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,j){var W=z.length;z.push(j);e:for(;0<W;){var Z=W-1>>>1,he=z[Z];if(0<r(he,j))z[Z]=j,z[W]=he,W=Z;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var j=z[0],W=z.pop();if(W!==j){z[0]=W;e:for(var Z=0,he=z.length,Se=he>>>1;Z<Se;){var He=2*(Z+1)-1,Fe=z[He],Oe=He+1,Q=z[Oe];if(0>r(Fe,W))Oe<he&&0>r(Q,Fe)?(z[Z]=Q,z[Oe]=W,Z=Oe):(z[Z]=Fe,z[He]=W,Z=He);else if(Oe<he&&0>r(Q,W))z[Z]=Q,z[Oe]=W,Z=Oe;else break e}}return j}function r(z,j){var W=z.sortIndex-j.sortIndex;return W!==0?W:z.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],d=[],f=1,p=null,h=3,g=!1,m=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(z){for(var j=n(d);j!==null;){if(j.callback===null)i(d);else if(j.startTime<=z)i(d),j.sortIndex=j.expirationTime,e(c,j);else break;j=n(d)}}function S(z){if(w=!1,E(z),!m)if(n(c)!==null)m=!0,ne(T);else{var j=n(d);j!==null&&K(S,j.startTime-z)}}function T(z,j){m=!1,w&&(w=!1,u(x),x=-1),g=!0;var W=h;try{for(E(j),p=n(c);p!==null&&(!(p.expirationTime>j)||z&&!D());){var Z=p.callback;if(typeof Z=="function"){p.callback=null,h=p.priorityLevel;var he=Z(p.expirationTime<=j);j=t.unstable_now(),typeof he=="function"?p.callback=he:p===n(c)&&i(c),E(j)}else i(c);p=n(c)}if(p!==null)var Se=!0;else{var He=n(d);He!==null&&K(S,He.startTime-j),Se=!1}return Se}finally{p=null,h=W,g=!1}}var b=!1,A=null,x=-1,N=5,P=-1;function D(){return!(t.unstable_now()-P<N)}function O(){if(A!==null){var z=t.unstable_now();P=z;var j=!0;try{j=A(!0,z)}finally{j?V():(b=!1,A=null)}}else b=!1}var V;if(typeof v=="function")V=function(){v(O)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,I=U.port2;U.port1.onmessage=O,V=function(){I.postMessage(null)}}else V=function(){_(O,0)};function ne(z){A=z,b||(b=!0,V())}function K(z,j){x=_(function(){z(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){m||g||(m=!0,ne(T))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(z){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var W=h;h=j;try{return z()}finally{h=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var W=h;h=z;try{return j()}finally{h=W}},t.unstable_scheduleCallback=function(z,j,W){var Z=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Z+W:Z):W=Z,z){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=W+he,z={id:f++,callback:j,priorityLevel:z,startTime:W,expirationTime:he,sortIndex:-1},W>Z?(z.sortIndex=W,e(d,z),n(c)===null&&z===n(d)&&(w?(u(x),x=-1):w=!0,K(S,W-Z))):(z.sortIndex=he,e(c,z),m||g||(m=!0,ne(T))),z},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(z){var j=h;return function(){var W=h;h=j;try{return z.apply(this,arguments)}finally{h=W}}}})(w0);b0.exports=w0;var Iv=b0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv=ue,Fn=Iv;function de(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M0=new Set,qa={};function is(t,e){$s(t,e),$s(t+"Capture",e)}function $s(t,e){for(qa[t]=e,t=0;t<e.length;t++)M0.add(e[t])}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xd=Object.prototype.hasOwnProperty,Uv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qf={},ep={};function Fv(t){return Xd.call(ep,t)?!0:Xd.call(Qf,t)?!1:Uv.test(t)?ep[t]=!0:(Qf[t]=!0,!1)}function Ov(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Bv(t,e,n,i){if(e===null||typeof e>"u"||Ov(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tn[t]=new bn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tn[e]=new bn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tn[t]=new bn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tn[t]=new bn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tn[t]=new bn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tn[t]=new bn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tn[t]=new bn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tn[t]=new bn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tn[t]=new bn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ih=/[\-:]([a-z])/g;function kh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ih,kh);tn[e]=new bn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ih,kh);tn[e]=new bn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ih,kh);tn[e]=new bn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tn[t]=new bn(t,1,!1,t.toLowerCase(),null,!1,!1)});tn.xlinkHref=new bn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tn[t]=new bn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Uh(t,e,n,i){var r=tn.hasOwnProperty(e)?tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Bv(e,n,r,i)&&(n=null),i||r===null?Fv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var qi=kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),Es=Symbol.for("react.portal"),Ts=Symbol.for("react.fragment"),Fh=Symbol.for("react.strict_mode"),qd=Symbol.for("react.profiler"),E0=Symbol.for("react.provider"),T0=Symbol.for("react.context"),Oh=Symbol.for("react.forward_ref"),$d=Symbol.for("react.suspense"),Yd=Symbol.for("react.suspense_list"),Bh=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),N0=Symbol.for("react.offscreen"),tp=Symbol.iterator;function ha(t){return t===null||typeof t!="object"?null:(t=tp&&t[tp]||t["@@iterator"],typeof t=="function"?t:null)}var Dt=Object.assign,Bc;function Aa(t){if(Bc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bc=e&&e[1]||""}return`
`+Bc+t}var jc=!1;function zc(t,e){if(!t||jc)return"";jc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var i=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){i=d}t.call(e.prototype)}else{try{throw Error()}catch(d){i=d}t()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,l=s.length-1;1<=o&&0<=l&&r[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==s[l]){var c=`
`+r[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{jc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Aa(t):""}function jv(t){switch(t.tag){case 5:return Aa(t.type);case 16:return Aa("Lazy");case 13:return Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 2:case 15:return t=zc(t.type,!1),t;case 11:return t=zc(t.type.render,!1),t;case 1:return t=zc(t.type,!0),t;default:return""}}function Kd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ts:return"Fragment";case Es:return"Portal";case qd:return"Profiler";case Fh:return"StrictMode";case $d:return"Suspense";case Yd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case T0:return(t.displayName||"Context")+".Consumer";case E0:return(t._context.displayName||"Context")+".Provider";case Oh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bh:return e=t.displayName||null,e!==null?e:Kd(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return Kd(t(e))}catch{}}return null}function zv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kd(e);case 8:return e===Fh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function A0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hv(t){var e=A0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Po(t){t._valueTracker||(t._valueTracker=Hv(t))}function C0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=A0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zd(t,e){var n=e.checked;return Dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function np(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function R0(t,e){e=e.checked,e!=null&&Uh(t,"checked",e,!1)}function Jd(t,e){R0(t,e);var n=yr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qd(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ip(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qd(t,e,n){(e!=="number"||Fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ca=Array.isArray;function Os(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function eu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return Dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(de(92));if(Ca(n)){if(1<n.length)throw Error(de(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function P0(t,e){var n=yr(e.value),i=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function sp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function L0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?L0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lo,D0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ka={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vv=["Webkit","ms","Moz","O"];Object.keys(ka).forEach(function(t){Vv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ka[e]=ka[t]})});function I0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ka.hasOwnProperty(t)&&ka[t]?(""+e).trim():e+"px"}function k0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=I0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Gv=Dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nu(t,e){if(e){if(Gv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function iu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ru=null;function jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var su=null,Bs=null,js=null;function ap(t){if(t=So(t)){if(typeof su!="function")throw Error(de(280));var e=t.stateNode;e&&(e=Sc(e),su(t.stateNode,t.type,e))}}function U0(t){Bs?js?js.push(t):js=[t]:Bs=t}function F0(){if(Bs){var t=Bs,e=js;if(js=Bs=null,ap(t),e)for(t=0;t<e.length;t++)ap(e[t])}}function O0(t,e){return t(e)}function B0(){}var Hc=!1;function j0(t,e,n){if(Hc)return t(e,n);Hc=!0;try{return O0(t,e,n)}finally{Hc=!1,(Bs!==null||js!==null)&&(B0(),F0())}}function Ya(t,e){var n=t.stateNode;if(n===null)return null;var i=Sc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(de(231,e,typeof n));return n}var au=!1;if(Hi)try{var fa={};Object.defineProperty(fa,"passive",{get:function(){au=!0}}),window.addEventListener("test",fa,fa),window.removeEventListener("test",fa,fa)}catch{au=!1}function Wv(t,e,n,i,r,s,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var Ua=!1,Ol=null,Bl=!1,ou=null,Xv={onError:function(t){Ua=!0,Ol=t}};function qv(t,e,n,i,r,s,o,l,c){Ua=!1,Ol=null,Wv.apply(Xv,arguments)}function $v(t,e,n,i,r,s,o,l,c){if(qv.apply(this,arguments),Ua){if(Ua){var d=Ol;Ua=!1,Ol=null}else throw Error(de(198));Bl||(Bl=!0,ou=d)}}function rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function z0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function op(t){if(rs(t)!==t)throw Error(de(188))}function Yv(t){var e=t.alternate;if(!e){if(e=rs(t),e===null)throw Error(de(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return op(r),t;if(s===i)return op(r),e;s=s.sibling}throw Error(de(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,l=r.child;l;){if(l===n){o=!0,n=r,i=s;break}if(l===i){o=!0,i=r,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,i=r;break}if(l===i){o=!0,i=s,n=r;break}l=l.sibling}if(!o)throw Error(de(189))}}if(n.alternate!==i)throw Error(de(190))}if(n.tag!==3)throw Error(de(188));return n.stateNode.current===n?t:e}function H0(t){return t=Yv(t),t!==null?V0(t):null}function V0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=V0(t);if(e!==null)return e;t=t.sibling}return null}var G0=Fn.unstable_scheduleCallback,lp=Fn.unstable_cancelCallback,Kv=Fn.unstable_shouldYield,Zv=Fn.unstable_requestPaint,Ft=Fn.unstable_now,Jv=Fn.unstable_getCurrentPriorityLevel,zh=Fn.unstable_ImmediatePriority,W0=Fn.unstable_UserBlockingPriority,jl=Fn.unstable_NormalPriority,Qv=Fn.unstable_LowPriority,X0=Fn.unstable_IdlePriority,gc=null,yi=null;function e_(t){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(gc,t,void 0,(t.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:i_,t_=Math.log,n_=Math.LN2;function i_(t){return t>>>=0,t===0?32:31-(t_(t)/n_|0)|0}var Do=64,Io=4194304;function Ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~r;l!==0?i=Ra(l):(s&=o,s!==0&&(i=Ra(s)))}else o=n&~r,o!==0?i=Ra(o):s!==0&&(i=Ra(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ai(e),r=1<<n,i|=t[n],e&=~r;return i}function r_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ai(s),l=1<<o,c=r[o];c===-1?(!(l&n)||l&i)&&(r[o]=r_(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function lu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function q0(){var t=Do;return Do<<=1,!(Do&4194240)&&(Do=64),t}function Vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ai(e),t[e]=n}function a_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ai(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Hh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ai(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var gt=0;function $0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Y0,Vh,K0,Z0,J0,cu=!1,ko=[],hr=null,fr=null,pr=null,Ka=new Map,Za=new Map,or=[],o_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cp(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":Ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(e.pointerId)}}function pa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=So(e),e!==null&&Vh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function l_(t,e,n,i,r){switch(e){case"focusin":return hr=pa(hr,t,e,n,i,r),!0;case"dragenter":return fr=pa(fr,t,e,n,i,r),!0;case"mouseover":return pr=pa(pr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ka.set(s,pa(Ka.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Za.set(s,pa(Za.get(s)||null,t,e,n,i,r)),!0}return!1}function Q0(t){var e=jr(t.target);if(e!==null){var n=rs(e);if(n!==null){if(e=n.tag,e===13){if(e=z0(n),e!==null){t.blockedOn=e,J0(t.priority,function(){K0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=du(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ru=i,n.target.dispatchEvent(i),ru=null}else return e=So(n),e!==null&&Vh(e),t.blockedOn=n,!1;e.shift()}return!0}function dp(t,e,n){vl(t)&&n.delete(e)}function c_(){cu=!1,hr!==null&&vl(hr)&&(hr=null),fr!==null&&vl(fr)&&(fr=null),pr!==null&&vl(pr)&&(pr=null),Ka.forEach(dp),Za.forEach(dp)}function ma(t,e){t.blockedOn===e&&(t.blockedOn=null,cu||(cu=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,c_)))}function Ja(t){function e(r){return ma(r,t)}if(0<ko.length){ma(ko[0],t);for(var n=1;n<ko.length;n++){var i=ko[n];i.blockedOn===t&&(i.blockedOn=null)}}for(hr!==null&&ma(hr,t),fr!==null&&ma(fr,t),pr!==null&&ma(pr,t),Ka.forEach(e),Za.forEach(e),n=0;n<or.length;n++)i=or[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)Q0(n),n.blockedOn===null&&or.shift()}var zs=qi.ReactCurrentBatchConfig,Hl=!0;function d_(t,e,n,i){var r=gt,s=zs.transition;zs.transition=null;try{gt=1,Gh(t,e,n,i)}finally{gt=r,zs.transition=s}}function u_(t,e,n,i){var r=gt,s=zs.transition;zs.transition=null;try{gt=4,Gh(t,e,n,i)}finally{gt=r,zs.transition=s}}function Gh(t,e,n,i){if(Hl){var r=du(t,e,n,i);if(r===null)Qc(t,e,i,Vl,n),cp(t,i);else if(l_(r,t,e,n,i))i.stopPropagation();else if(cp(t,i),e&4&&-1<o_.indexOf(t)){for(;r!==null;){var s=So(r);if(s!==null&&Y0(s),s=du(t,e,n,i),s===null&&Qc(t,e,i,Vl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Qc(t,e,i,null,n)}}var Vl=null;function du(t,e,n,i){if(Vl=null,t=jh(i),t=jr(t),t!==null)if(e=rs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=z0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vl=t,null}function ex(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jv()){case zh:return 1;case W0:return 4;case jl:case Qv:return 16;case X0:return 536870912;default:return 16}default:return 16}}var dr=null,Wh=null,_l=null;function tx(){if(_l)return _l;var t,e=Wh,n=e.length,i,r="value"in dr?dr.value:dr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return _l=r.slice(t,1<i?1-i:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Uo(){return!0}function up(){return!1}function Bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Uo:up,this.isPropagationStopped=up,this}return Dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),e}var ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xh=Bn(ra),yo=Dt({},ra,{view:0,detail:0}),h_=Bn(yo),Gc,Wc,xa,vc=Dt({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xa&&(xa&&t.type==="mousemove"?(Gc=t.screenX-xa.screenX,Wc=t.screenY-xa.screenY):Wc=Gc=0,xa=t),Gc)},movementY:function(t){return"movementY"in t?t.movementY:Wc}}),hp=Bn(vc),f_=Dt({},vc,{dataTransfer:0}),p_=Bn(f_),m_=Dt({},yo,{relatedTarget:0}),Xc=Bn(m_),x_=Dt({},ra,{animationName:0,elapsedTime:0,pseudoElement:0}),g_=Bn(x_),v_=Dt({},ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),__=Bn(v_),y_=Dt({},ra,{data:0}),fp=Bn(y_),S_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=w_[t])?!!e[t]:!1}function qh(){return M_}var E_=Dt({},yo,{key:function(t){if(t.key){var e=S_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?b_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qh,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),T_=Bn(E_),N_=Dt({},vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=Bn(N_),A_=Dt({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qh}),C_=Bn(A_),R_=Dt({},ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),P_=Bn(R_),L_=Dt({},vc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),D_=Bn(L_),I_=[9,13,27,32],$h=Hi&&"CompositionEvent"in window,Fa=null;Hi&&"documentMode"in document&&(Fa=document.documentMode);var k_=Hi&&"TextEvent"in window&&!Fa,nx=Hi&&(!$h||Fa&&8<Fa&&11>=Fa),mp=" ",xp=!1;function ix(t,e){switch(t){case"keyup":return I_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ns=!1;function U_(t,e){switch(t){case"compositionend":return rx(e);case"keypress":return e.which!==32?null:(xp=!0,mp);case"textInput":return t=e.data,t===mp&&xp?null:t;default:return null}}function F_(t,e){if(Ns)return t==="compositionend"||!$h&&ix(t,e)?(t=tx(),_l=Wh=dr=null,Ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nx&&e.locale!=="ko"?null:e.data;default:return null}}var O_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!O_[t.type]:e==="textarea"}function sx(t,e,n,i){U0(i),e=Gl(e,"onChange"),0<e.length&&(n=new Xh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Oa=null,Qa=null;function B_(t){xx(t,0)}function _c(t){var e=Rs(t);if(C0(e))return t}function j_(t,e){if(t==="change")return e}var ax=!1;if(Hi){var qc;if(Hi){var $c="oninput"in document;if(!$c){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),$c=typeof vp.oninput=="function"}qc=$c}else qc=!1;ax=qc&&(!document.documentMode||9<document.documentMode)}function _p(){Oa&&(Oa.detachEvent("onpropertychange",ox),Qa=Oa=null)}function ox(t){if(t.propertyName==="value"&&_c(Qa)){var e=[];sx(e,Qa,t,jh(t)),j0(B_,e)}}function z_(t,e,n){t==="focusin"?(_p(),Oa=e,Qa=n,Oa.attachEvent("onpropertychange",ox)):t==="focusout"&&_p()}function H_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _c(Qa)}function V_(t,e){if(t==="click")return _c(e)}function G_(t,e){if(t==="input"||t==="change")return _c(e)}function W_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ci=typeof Object.is=="function"?Object.is:W_;function eo(t,e){if(ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Xd.call(e,r)||!ci(t[r],e[r]))return!1}return!0}function yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sp(t,e){var n=yp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yp(n)}}function lx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cx(){for(var t=window,e=Fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fl(t.document)}return e}function Yh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function X_(t){var e=cx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lx(n.ownerDocument.documentElement,n)){if(i!==null&&Yh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Sp(n,s);var o=Sp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var q_=Hi&&"documentMode"in document&&11>=document.documentMode,As=null,uu=null,Ba=null,hu=!1;function bp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hu||As==null||As!==Fl(i)||(i=As,"selectionStart"in i&&Yh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ba&&eo(Ba,i)||(Ba=i,i=Gl(uu,"onSelect"),0<i.length&&(e=new Xh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=As)))}function Fo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},Yc={},dx={};Hi&&(dx=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function yc(t){if(Yc[t])return Yc[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dx)return Yc[t]=e[n];return t}var ux=yc("animationend"),hx=yc("animationiteration"),fx=yc("animationstart"),px=yc("transitionend"),mx=new Map,wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){mx.set(t,e),is(e,[t])}for(var Kc=0;Kc<wp.length;Kc++){var Zc=wp[Kc],$_=Zc.toLowerCase(),Y_=Zc[0].toUpperCase()+Zc.slice(1);wr($_,"on"+Y_)}wr(ux,"onAnimationEnd");wr(hx,"onAnimationIteration");wr(fx,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(px,"onTransitionEnd");$s("onMouseEnter",["mouseout","mouseover"]);$s("onMouseLeave",["mouseout","mouseover"]);$s("onPointerEnter",["pointerout","pointerover"]);$s("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function Mp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,$v(i,e,void 0,t),t.currentTarget=null}function xx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var l=i[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&r.isPropagationStopped())break e;Mp(r,l,d),s=c}else for(o=0;o<i.length;o++){if(l=i[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&r.isPropagationStopped())break e;Mp(r,l,d),s=c}}}if(Bl)throw t=ou,Bl=!1,ou=null,t}function Et(t,e){var n=e[gu];n===void 0&&(n=e[gu]=new Set);var i=t+"__bubble";n.has(i)||(gx(e,t,2,!1),n.add(i))}function Jc(t,e,n){var i=0;e&&(i|=4),gx(n,t,i,e)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function to(t){if(!t[Oo]){t[Oo]=!0,M0.forEach(function(n){n!=="selectionchange"&&(K_.has(n)||Jc(n,!1,t),Jc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oo]||(e[Oo]=!0,Jc("selectionchange",!1,e))}}function gx(t,e,n,i){switch(ex(e)){case 1:var r=d_;break;case 4:r=u_;break;default:r=Gh}n=r.bind(null,e,n,t),r=void 0,!au||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Qc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;o=o.return}for(;l!==null;){if(o=jr(l),o===null)return;if(c=o.tag,c===5||c===6){i=s=o;continue e}l=l.parentNode}}i=i.return}j0(function(){var d=s,f=jh(n),p=[];e:{var h=mx.get(t);if(h!==void 0){var g=Xh,m=t;switch(t){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":g=T_;break;case"focusin":m="focus",g=Xc;break;case"focusout":m="blur",g=Xc;break;case"beforeblur":case"afterblur":g=Xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=p_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=C_;break;case ux:case hx:case fx:g=g_;break;case px:g=P_;break;case"scroll":g=h_;break;case"wheel":g=D_;break;case"copy":case"cut":case"paste":g=__;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=pp}var w=(e&4)!==0,_=!w&&t==="scroll",u=w?h!==null?h+"Capture":null:h;w=[];for(var v=d,E;v!==null;){E=v;var S=E.stateNode;if(E.tag===5&&S!==null&&(E=S,u!==null&&(S=Ya(v,u),S!=null&&w.push(no(v,S,E)))),_)break;v=v.return}0<w.length&&(h=new g(h,m,null,n,f),p.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==ru&&(m=n.relatedTarget||n.fromElement)&&(jr(m)||m[Vi]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(m=n.relatedTarget||n.toElement,g=d,m=m?jr(m):null,m!==null&&(_=rs(m),m!==_||m.tag!==5&&m.tag!==6)&&(m=null)):(g=null,m=d),g!==m)){if(w=hp,S="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(w=pp,S="onPointerLeave",u="onPointerEnter",v="pointer"),_=g==null?h:Rs(g),E=m==null?h:Rs(m),h=new w(S,v+"leave",g,n,f),h.target=_,h.relatedTarget=E,S=null,jr(f)===d&&(w=new w(u,v+"enter",m,n,f),w.target=E,w.relatedTarget=_,S=w),_=S,g&&m)t:{for(w=g,u=m,v=0,E=w;E;E=ls(E))v++;for(E=0,S=u;S;S=ls(S))E++;for(;0<v-E;)w=ls(w),v--;for(;0<E-v;)u=ls(u),E--;for(;v--;){if(w===u||u!==null&&w===u.alternate)break t;w=ls(w),u=ls(u)}w=null}else w=null;g!==null&&Ep(p,h,g,w,!1),m!==null&&_!==null&&Ep(p,_,m,w,!0)}}e:{if(h=d?Rs(d):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var T=j_;else if(gp(h))if(ax)T=G_;else{T=H_;var b=z_}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=V_);if(T&&(T=T(t,d))){sx(p,T,n,f);break e}b&&b(t,h,d),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Qd(h,"number",h.value)}switch(b=d?Rs(d):window,t){case"focusin":(gp(b)||b.contentEditable==="true")&&(As=b,uu=d,Ba=null);break;case"focusout":Ba=uu=As=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,bp(p,n,f);break;case"selectionchange":if(q_)break;case"keydown":case"keyup":bp(p,n,f)}var A;if($h)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ns?ix(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(nx&&n.locale!=="ko"&&(Ns||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ns&&(A=tx()):(dr=f,Wh="value"in dr?dr.value:dr.textContent,Ns=!0)),b=Gl(d,x),0<b.length&&(x=new fp(x,t,null,n,f),p.push({event:x,listeners:b}),A?x.data=A:(A=rx(n),A!==null&&(x.data=A)))),(A=k_?U_(t,n):F_(t,n))&&(d=Gl(d,"onBeforeInput"),0<d.length&&(f=new fp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:d}),f.data=A))}xx(p,e)})}function no(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ya(t,n),s!=null&&i.unshift(no(t,s,r)),s=Ya(t,e),s!=null&&i.push(no(t,s,r))),t=t.return}return i}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ep(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&d!==null&&(l=d,r?(c=Ya(n,s),c!=null&&o.unshift(no(n,c,l))):r||(c=Ya(n,s),c!=null&&o.push(no(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Z_=/\r\n?/g,J_=/\u0000|\uFFFD/g;function Tp(t){return(typeof t=="string"?t:""+t).replace(Z_,`
`).replace(J_,"")}function Bo(t,e,n){if(e=Tp(e),Tp(t)!==e&&n)throw Error(de(425))}function Wl(){}var fu=null,pu=null;function mu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xu=typeof setTimeout=="function"?setTimeout:void 0,Q_=typeof clearTimeout=="function"?clearTimeout:void 0,Np=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof Np<"u"?function(t){return Np.resolve(null).then(t).catch(ty)}:xu;function ty(t){setTimeout(function(){throw t})}function ed(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ja(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ja(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ap(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var sa=Math.random().toString(36).slice(2),xi="__reactFiber$"+sa,io="__reactProps$"+sa,Vi="__reactContainer$"+sa,gu="__reactEvents$"+sa,ny="__reactListeners$"+sa,iy="__reactHandles$"+sa;function jr(t){var e=t[xi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vi]||n[xi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ap(t);t!==null;){if(n=t[xi])return n;t=Ap(t)}return e}t=n,n=t.parentNode}return null}function So(t){return t=t[xi]||t[Vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(de(33))}function Sc(t){return t[io]||null}var vu=[],Ps=-1;function Mr(t){return{current:t}}function Tt(t){0>Ps||(t.current=vu[Ps],vu[Ps]=null,Ps--)}function bt(t,e){Ps++,vu[Ps]=t.current,t.current=e}var Sr={},hn=Mr(Sr),En=Mr(!1),Yr=Sr;function Ys(t,e){var n=t.type.contextTypes;if(!n)return Sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Tn(t){return t=t.childContextTypes,t!=null}function Xl(){Tt(En),Tt(hn)}function Cp(t,e,n){if(hn.current!==Sr)throw Error(de(168));bt(hn,e),bt(En,n)}function vx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,zv(t)||"Unknown",r));return Dt({},n,i)}function ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,Yr=hn.current,bt(hn,t),bt(En,En.current),!0}function Rp(t,e,n){var i=t.stateNode;if(!i)throw Error(de(169));n?(t=vx(t,e,Yr),i.__reactInternalMemoizedMergedChildContext=t,Tt(En),Tt(hn),bt(hn,t)):Tt(En),bt(En,n)}var Di=null,bc=!1,td=!1;function _x(t){Di===null?Di=[t]:Di.push(t)}function ry(t){bc=!0,_x(t)}function Er(){if(!td&&Di!==null){td=!0;var t=0,e=gt;try{var n=Di;for(gt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Di=null,bc=!1}catch(r){throw Di!==null&&(Di=Di.slice(t+1)),G0(zh,Er),r}finally{gt=e,td=!1}}return null}var Ls=[],Ds=0,$l=null,Yl=0,Gn=[],Wn=0,Kr=null,Ii=1,ki="";function Fr(t,e){Ls[Ds++]=Yl,Ls[Ds++]=$l,$l=t,Yl=e}function yx(t,e,n){Gn[Wn++]=Ii,Gn[Wn++]=ki,Gn[Wn++]=Kr,Kr=t;var i=Ii;t=ki;var r=32-ai(i)-1;i&=~(1<<r),n+=1;var s=32-ai(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ii=1<<32-ai(e)+r|n<<r|i,ki=s+t}else Ii=1<<s|n<<r|i,ki=t}function Kh(t){t.return!==null&&(Fr(t,1),yx(t,1,0))}function Zh(t){for(;t===$l;)$l=Ls[--Ds],Ls[Ds]=null,Yl=Ls[--Ds],Ls[Ds]=null;for(;t===Kr;)Kr=Gn[--Wn],Gn[Wn]=null,ki=Gn[--Wn],Gn[Wn]=null,Ii=Gn[--Wn],Gn[Wn]=null}var Un=null,kn=null,Ct=!1,ii=null;function Sx(t,e){var n=Xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Un=t,kn=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Un=t,kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kr!==null?{id:Ii,overflow:ki}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Un=t,kn=null,!0):!1;default:return!1}}function _u(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yu(t){if(Ct){var e=kn;if(e){var n=e;if(!Pp(t,e)){if(_u(t))throw Error(de(418));e=mr(n.nextSibling);var i=Un;e&&Pp(t,e)?Sx(i,n):(t.flags=t.flags&-4097|2,Ct=!1,Un=t)}}else{if(_u(t))throw Error(de(418));t.flags=t.flags&-4097|2,Ct=!1,Un=t}}}function Lp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function jo(t){if(t!==Un)return!1;if(!Ct)return Lp(t),Ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mu(t.type,t.memoizedProps)),e&&(e=kn)){if(_u(t))throw bx(),Error(de(418));for(;e;)Sx(t,e),e=mr(e.nextSibling)}if(Lp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(de(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kn=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kn=null}}else kn=Un?mr(t.stateNode.nextSibling):null;return!0}function bx(){for(var t=kn;t;)t=mr(t.nextSibling)}function Ks(){kn=Un=null,Ct=!1}function Jh(t){ii===null?ii=[t]:ii.push(t)}var sy=qi.ReactCurrentBatchConfig;function ga(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(de(309));var i=n.stateNode}if(!i)throw Error(de(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=r.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(de(284));if(!n._owner)throw Error(de(290,t))}return t}function zo(t,e){throw t=Object.prototype.toString.call(e),Error(de(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dp(t){var e=t._init;return e(t._payload)}function wx(t){function e(u,v){if(t){var E=u.deletions;E===null?(u.deletions=[v],u.flags|=16):E.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=_r(u,v),u.index=0,u.sibling=null,u}function s(u,v,E){return u.index=E,t?(E=u.alternate,E!==null?(E=E.index,E<v?(u.flags|=2,v):E):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function l(u,v,E,S){return v===null||v.tag!==6?(v=ld(E,u.mode,S),v.return=u,v):(v=r(v,E),v.return=u,v)}function c(u,v,E,S){var T=E.type;return T===Ts?f(u,v,E.props.children,S,E.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===rr&&Dp(T)===v.type)?(S=r(v,E.props),S.ref=ga(u,v,E),S.return=u,S):(S=Nl(E.type,E.key,E.props,null,u.mode,S),S.ref=ga(u,v,E),S.return=u,S)}function d(u,v,E,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=cd(E,u.mode,S),v.return=u,v):(v=r(v,E.children||[]),v.return=u,v)}function f(u,v,E,S,T){return v===null||v.tag!==7?(v=qr(E,u.mode,S,T),v.return=u,v):(v=r(v,E),v.return=u,v)}function p(u,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ld(""+v,u.mode,E),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ro:return E=Nl(v.type,v.key,v.props,null,u.mode,E),E.ref=ga(u,null,v),E.return=u,E;case Es:return v=cd(v,u.mode,E),v.return=u,v;case rr:var S=v._init;return p(u,S(v._payload),E)}if(Ca(v)||ha(v))return v=qr(v,u.mode,E,null),v.return=u,v;zo(u,v)}return null}function h(u,v,E,S){var T=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return T!==null?null:l(u,v,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ro:return E.key===T?c(u,v,E,S):null;case Es:return E.key===T?d(u,v,E,S):null;case rr:return T=E._init,h(u,v,T(E._payload),S)}if(Ca(E)||ha(E))return T!==null?null:f(u,v,E,S,null);zo(u,E)}return null}function g(u,v,E,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(E)||null,l(v,u,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ro:return u=u.get(S.key===null?E:S.key)||null,c(v,u,S,T);case Es:return u=u.get(S.key===null?E:S.key)||null,d(v,u,S,T);case rr:var b=S._init;return g(u,v,E,b(S._payload),T)}if(Ca(S)||ha(S))return u=u.get(E)||null,f(v,u,S,T,null);zo(v,S)}return null}function m(u,v,E,S){for(var T=null,b=null,A=v,x=v=0,N=null;A!==null&&x<E.length;x++){A.index>x?(N=A,A=null):N=A.sibling;var P=h(u,A,E[x],S);if(P===null){A===null&&(A=N);break}t&&A&&P.alternate===null&&e(u,A),v=s(P,v,x),b===null?T=P:b.sibling=P,b=P,A=N}if(x===E.length)return n(u,A),Ct&&Fr(u,x),T;if(A===null){for(;x<E.length;x++)A=p(u,E[x],S),A!==null&&(v=s(A,v,x),b===null?T=A:b.sibling=A,b=A);return Ct&&Fr(u,x),T}for(A=i(u,A);x<E.length;x++)N=g(A,u,x,E[x],S),N!==null&&(t&&N.alternate!==null&&A.delete(N.key===null?x:N.key),v=s(N,v,x),b===null?T=N:b.sibling=N,b=N);return t&&A.forEach(function(D){return e(u,D)}),Ct&&Fr(u,x),T}function w(u,v,E,S){var T=ha(E);if(typeof T!="function")throw Error(de(150));if(E=T.call(E),E==null)throw Error(de(151));for(var b=T=null,A=v,x=v=0,N=null,P=E.next();A!==null&&!P.done;x++,P=E.next()){A.index>x?(N=A,A=null):N=A.sibling;var D=h(u,A,P.value,S);if(D===null){A===null&&(A=N);break}t&&A&&D.alternate===null&&e(u,A),v=s(D,v,x),b===null?T=D:b.sibling=D,b=D,A=N}if(P.done)return n(u,A),Ct&&Fr(u,x),T;if(A===null){for(;!P.done;x++,P=E.next())P=p(u,P.value,S),P!==null&&(v=s(P,v,x),b===null?T=P:b.sibling=P,b=P);return Ct&&Fr(u,x),T}for(A=i(u,A);!P.done;x++,P=E.next())P=g(A,u,x,P.value,S),P!==null&&(t&&P.alternate!==null&&A.delete(P.key===null?x:P.key),v=s(P,v,x),b===null?T=P:b.sibling=P,b=P);return t&&A.forEach(function(O){return e(u,O)}),Ct&&Fr(u,x),T}function _(u,v,E,S){if(typeof E=="object"&&E!==null&&E.type===Ts&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Ro:e:{for(var T=E.key,b=v;b!==null;){if(b.key===T){if(T=E.type,T===Ts){if(b.tag===7){n(u,b.sibling),v=r(b,E.props.children),v.return=u,u=v;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===rr&&Dp(T)===b.type){n(u,b.sibling),v=r(b,E.props),v.ref=ga(u,b,E),v.return=u,u=v;break e}n(u,b);break}else e(u,b);b=b.sibling}E.type===Ts?(v=qr(E.props.children,u.mode,S,E.key),v.return=u,u=v):(S=Nl(E.type,E.key,E.props,null,u.mode,S),S.ref=ga(u,v,E),S.return=u,u=S)}return o(u);case Es:e:{for(b=E.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(u,v.sibling),v=r(v,E.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=cd(E,u.mode,S),v.return=u,u=v}return o(u);case rr:return b=E._init,_(u,v,b(E._payload),S)}if(Ca(E))return m(u,v,E,S);if(ha(E))return w(u,v,E,S);zo(u,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,E),v.return=u,u=v):(n(u,v),v=ld(E,u.mode,S),v.return=u,u=v),o(u)):n(u,v)}return _}var Zs=wx(!0),Mx=wx(!1),Kl=Mr(null),Zl=null,Is=null,Qh=null;function ef(){Qh=Is=Zl=null}function tf(t){var e=Kl.current;Tt(Kl),t._currentValue=e}function Su(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Hs(t,e){Zl=t,Qh=Is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mn=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(Qh!==t)if(t={context:t,memoizedValue:e,next:null},Is===null){if(Zl===null)throw Error(de(308));Is=t,Zl.dependencies={lanes:0,firstContext:t}}else Is=Is.next=t;return e}var zr=null;function nf(t){zr===null?zr=[t]:zr.push(t)}function Ex(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,nf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Gi(t,i)}function Gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Gi(t,n)}return r=i.interleaved,r===null?(e.next=e,nf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Gi(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hh(t,n)}}function Ip(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Jl(t,e,n,i){var r=t.updateQueue;sr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?s=d:o.next=d,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;o=0,f=d=c=null,l=s;do{var h=l.lane,g=l.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=t,w=l;switch(h=e,g=n,w.tag){case 1:if(m=w.payload,typeof m=="function"){p=m.call(g,p,h);break e}p=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=w.payload,h=typeof m=="function"?m.call(g,p,h):m,h==null)break e;p=Dt({},p,h);break e;case 2:sr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=g,c=p):f=f.next=g,o|=h;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;h=l,l=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(c=p),r.baseState=c,r.firstBaseUpdate=d,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=p}}function kp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var bo={},Si=Mr(bo),ro=Mr(bo),so=Mr(bo);function Hr(t){if(t===bo)throw Error(de(174));return t}function sf(t,e){switch(bt(so,e),bt(ro,t),bt(Si,bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tu(e,t)}Tt(Si),bt(Si,e)}function Js(){Tt(Si),Tt(ro),Tt(so)}function Nx(t){Hr(so.current);var e=Hr(Si.current),n=tu(e,t.type);e!==n&&(bt(ro,t),bt(Si,n))}function af(t){ro.current===t&&(Tt(Si),Tt(ro))}var Rt=Mr(0);function Ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nd=[];function of(){for(var t=0;t<nd.length;t++)nd[t]._workInProgressVersionPrimary=null;nd.length=0}var bl=qi.ReactCurrentDispatcher,id=qi.ReactCurrentBatchConfig,Zr=0,Lt=null,Vt=null,$t=null,ec=!1,ja=!1,ao=0,ay=0;function sn(){throw Error(de(321))}function lf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ci(t[n],e[n]))return!1;return!0}function cf(t,e,n,i,r,s){if(Zr=s,Lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bl.current=t===null||t.memoizedState===null?dy:uy,t=n(i,r),ja){s=0;do{if(ja=!1,ao=0,25<=s)throw Error(de(301));s+=1,$t=Vt=null,e.updateQueue=null,bl.current=hy,t=n(i,r)}while(ja)}if(bl.current=tc,e=Vt!==null&&Vt.next!==null,Zr=0,$t=Vt=Lt=null,ec=!1,e)throw Error(de(300));return t}function df(){var t=ao!==0;return ao=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?Lt.memoizedState=$t=t:$t=$t.next=t,$t}function Yn(){if(Vt===null){var t=Lt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=$t===null?Lt.memoizedState:$t.next;if(e!==null)$t=e,Vt=t;else{if(t===null)throw Error(de(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},$t===null?Lt.memoizedState=$t=t:$t=$t.next=t}return $t}function oo(t,e){return typeof e=="function"?e(t):e}function rd(t){var e=Yn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=Vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=o=null,c=null,d=s;do{var f=d.lane;if((Zr&f)===f)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:t(i,d.action);else{var p={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=p,o=i):c=c.next=p,Lt.lanes|=f,Jr|=f}d=d.next}while(d!==null&&d!==s);c===null?o=i:c.next=l,ci(i,e.memoizedState)||(Mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Lt.lanes|=s,Jr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sd(t){var e=Yn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ci(s,e.memoizedState)||(Mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ax(){}function Cx(t,e){var n=Lt,i=Yn(),r=e(),s=!ci(i.memoizedState,r);if(s&&(i.memoizedState=r,Mn=!0),i=i.queue,uf(Lx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||$t!==null&&$t.memoizedState.tag&1){if(n.flags|=2048,lo(9,Px.bind(null,n,i,r,e),void 0,null),Yt===null)throw Error(de(349));Zr&30||Rx(n,e,r)}return r}function Rx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Px(t,e,n,i){e.value=n,e.getSnapshot=i,Dx(e)&&Ix(t)}function Lx(t,e,n){return n(function(){Dx(e)&&Ix(t)})}function Dx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ci(t,n)}catch{return!0}}function Ix(t){var e=Gi(t,1);e!==null&&oi(e,t,1,-1)}function Up(t){var e=pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:t},e.queue=t,t=t.dispatch=cy.bind(null,Lt,t),[e.memoizedState,t]}function lo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function kx(){return Yn().memoizedState}function wl(t,e,n,i){var r=pi();Lt.flags|=t,r.memoizedState=lo(1|e,n,void 0,i===void 0?null:i)}function wc(t,e,n,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if(Vt!==null){var o=Vt.memoizedState;if(s=o.destroy,i!==null&&lf(i,o.deps)){r.memoizedState=lo(e,n,s,i);return}}Lt.flags|=t,r.memoizedState=lo(1|e,n,s,i)}function Fp(t,e){return wl(8390656,8,t,e)}function uf(t,e){return wc(2048,8,t,e)}function Ux(t,e){return wc(4,2,t,e)}function Fx(t,e){return wc(4,4,t,e)}function Ox(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Bx(t,e,n){return n=n!=null?n.concat([t]):null,wc(4,4,Ox.bind(null,e,t),n)}function hf(){}function jx(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function zx(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Hx(t,e,n){return Zr&21?(ci(n,e)||(n=q0(),Lt.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=n)}function oy(t,e){var n=gt;gt=n!==0&&4>n?n:4,t(!0);var i=id.transition;id.transition={};try{t(!1),e()}finally{gt=n,id.transition=i}}function Vx(){return Yn().memoizedState}function ly(t,e,n){var i=vr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Gx(t))Wx(e,n);else if(n=Ex(t,e,n,i),n!==null){var r=_n();oi(n,t,i,r),Xx(n,e,i)}}function cy(t,e,n){var i=vr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gx(t))Wx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(r.hasEagerState=!0,r.eagerState=l,ci(l,o)){var c=e.interleaved;c===null?(r.next=r,nf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=Ex(t,e,r,i),n!==null&&(r=_n(),oi(n,t,i,r),Xx(n,e,i))}}function Gx(t){var e=t.alternate;return t===Lt||e!==null&&e===Lt}function Wx(t,e){ja=ec=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hh(t,n)}}var tc={readContext:$n,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},dy={readContext:$n,useCallback:function(t,e){return pi().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:Fp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wl(4194308,4,Ox.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return wl(4,2,t,e)},useMemo:function(t,e){var n=pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ly.bind(null,Lt,t),[i.memoizedState,t]},useRef:function(t){var e=pi();return t={current:t},e.memoizedState=t},useState:Up,useDebugValue:hf,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=Up(!1),e=t[0];return t=oy.bind(null,t[1]),pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Lt,r=pi();if(Ct){if(n===void 0)throw Error(de(407));n=n()}else{if(n=e(),Yt===null)throw Error(de(349));Zr&30||Rx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Fp(Lx.bind(null,i,s,t),[t]),i.flags|=2048,lo(9,Px.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=pi(),e=Yt.identifierPrefix;if(Ct){var n=ki,i=Ii;n=(i&~(1<<32-ai(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ay++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uy={readContext:$n,useCallback:jx,useContext:$n,useEffect:uf,useImperativeHandle:Bx,useInsertionEffect:Ux,useLayoutEffect:Fx,useMemo:zx,useReducer:rd,useRef:kx,useState:function(){return rd(oo)},useDebugValue:hf,useDeferredValue:function(t){var e=Yn();return Hx(e,Vt.memoizedState,t)},useTransition:function(){var t=rd(oo)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:Ax,useSyncExternalStore:Cx,useId:Vx,unstable_isNewReconciler:!1},hy={readContext:$n,useCallback:jx,useContext:$n,useEffect:uf,useImperativeHandle:Bx,useInsertionEffect:Ux,useLayoutEffect:Fx,useMemo:zx,useReducer:sd,useRef:kx,useState:function(){return sd(oo)},useDebugValue:hf,useDeferredValue:function(t){var e=Yn();return Vt===null?e.memoizedState=t:Hx(e,Vt.memoizedState,t)},useTransition:function(){var t=sd(oo)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:Ax,useSyncExternalStore:Cx,useId:Vx,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=Dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mc={isMounted:function(t){return(t=t._reactInternals)?rs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=_n(),r=vr(t),s=Oi(i,r);s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(oi(e,t,r,i),Sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=_n(),r=vr(t),s=Oi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(oi(e,t,r,i),Sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_n(),i=vr(t),r=Oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=xr(t,r,i),e!==null&&(oi(e,t,i,n),Sl(e,t,i))}};function Op(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!eo(n,i)||!eo(r,s):!0}function qx(t,e,n){var i=!1,r=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=Tn(e)?Yr:hn.current,i=e.contextTypes,s=(i=i!=null)?Ys(t,r):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Mc.enqueueReplaceState(e,e.state,null)}function wu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},rf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=Tn(e)?Yr:hn.current,r.context=Ys(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Mc.enqueueReplaceState(r,r.state,null),Jl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Qs(t,e){try{var n="",i=e;do n+=jv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ad(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fy=typeof WeakMap=="function"?WeakMap:Map;function $x(t,e,n){n=Oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ic||(ic=!0,Iu=i),Mu(t,e)},n}function Yx(t,e,n){n=Oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Mu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mu(t,e),typeof i!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new fy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ny.bind(null,t,e,n),e.then(t,t))}function zp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Oi(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var py=qi.ReactCurrentOwner,Mn=!1;function vn(t,e,n,i){e.child=t===null?Mx(e,null,n,i):Zs(e,t.child,n,i)}function Vp(t,e,n,i,r){n=n.render;var s=e.ref;return Hs(e,r),i=cf(t,e,n,i,s,r),n=df(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(Ct&&n&&Kh(e),e.flags|=1,vn(t,e,i,r),e.child)}function Gp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!yf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Kx(t,e,s,i,r)):(t=Nl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:eo,n(o,i)&&t.ref===e.ref)return Wi(t,e,r)}return e.flags|=1,t=_r(s,i),t.ref=e.ref,t.return=e,e.child=t}function Kx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(eo(s,i)&&t.ref===e.ref)if(Mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Mn=!0);else return e.lanes=t.lanes,Wi(t,e,r)}return Eu(t,e,n,i,r)}function Zx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(Us,Ln),Ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,bt(Us,Ln),Ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,bt(Us,Ln),Ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,bt(Us,Ln),Ln|=i;return vn(t,e,r,n),e.child}function Jx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Eu(t,e,n,i,r){var s=Tn(n)?Yr:hn.current;return s=Ys(e,s),Hs(e,r),n=cf(t,e,n,i,s,r),i=df(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(Ct&&i&&Kh(e),e.flags|=1,vn(t,e,n,r),e.child)}function Wp(t,e,n,i,r){if(Tn(n)){var s=!0;ql(e)}else s=!1;if(Hs(e,r),e.stateNode===null)Ml(t,e),qx(e,n,i),wu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=$n(d):(d=Tn(n)?Yr:hn.current,d=Ys(e,d));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||c!==d)&&Bp(e,o,i,d),sr=!1;var h=e.memoizedState;o.state=h,Jl(e,i,o,r),c=e.memoizedState,l!==i||h!==c||En.current||sr?(typeof f=="function"&&(bu(e,n,f,i),c=e.memoizedState),(l=sr||Op(e,n,l,i,h,c,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),o.props=i,o.state=c,o.context=d,i=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Tx(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:ti(e.type,l),o.props=d,p=e.pendingProps,h=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=$n(c):(c=Tn(n)?Yr:hn.current,c=Ys(e,c));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||h!==c)&&Bp(e,o,i,c),sr=!1,h=e.memoizedState,o.state=h,Jl(e,i,o,r);var m=e.memoizedState;l!==p||h!==m||En.current||sr?(typeof g=="function"&&(bu(e,n,g,i),m=e.memoizedState),(d=sr||Op(e,n,d,i,h,m,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=c,i=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Tu(t,e,n,i,s,r)}function Tu(t,e,n,i,r,s){Jx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Rp(e,n,!1),Wi(t,e,s);i=e.stateNode,py.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Zs(e,t.child,null,s),e.child=Zs(e,null,l,s)):vn(t,e,l,s),e.memoizedState=i.state,r&&Rp(e,n,!0),e.child}function Qx(t){var e=t.stateNode;e.pendingContext?Cp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cp(t,e.context,!1),sf(t,e.containerInfo)}function Xp(t,e,n,i,r){return Ks(),Jh(r),e.flags|=256,vn(t,e,n,i),e.child}var Nu={dehydrated:null,treeContext:null,retryLane:0};function Au(t){return{baseLanes:t,cachePool:null,transitions:null}}function eg(t,e,n){var i=e.pendingProps,r=Rt.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),bt(Rt,r&1),t===null)return yu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Nc(o,i,0,null),t=qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Au(n),e.memoizedState=Nu,t):ff(e,o));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return my(t,e,o,i,l,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=_r(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=_r(l,s):(s=qr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Au(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nu,i}return s=t.child,t=s.sibling,i=_r(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ff(t,e){return e=Nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ho(t,e,n,i){return i!==null&&Jh(i),Zs(e,t.child,null,n),t=ff(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function my(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ad(Error(de(422))),Ho(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Nc({mode:"visible",children:i.children},r,0,null),s=qr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Zs(e,t.child,null,o),e.child.memoizedState=Au(o),e.memoizedState=Nu,s);if(!(e.mode&1))return Ho(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(de(419)),i=ad(s,i,void 0),Ho(t,e,o,i)}if(l=(o&t.childLanes)!==0,Mn||l){if(i=Yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Gi(t,r),oi(i,t,r,-1))}return _f(),i=ad(Error(de(421))),Ho(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ay.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,kn=mr(r.nextSibling),Un=e,Ct=!0,ii=null,t!==null&&(Gn[Wn++]=Ii,Gn[Wn++]=ki,Gn[Wn++]=Kr,Ii=t.id,ki=t.overflow,Kr=e),e=ff(e,i.children),e.flags|=4096,e)}function qp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Su(t.return,e,n)}function od(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function tg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(vn(t,e,i.children,n),i=Rt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qp(t,n,e);else if(t.tag===19)qp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(bt(Rt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ql(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),od(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ql(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}od(e,!0,n,null,s);break;case"together":od(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(de(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xy(t,e,n){switch(e.tag){case 3:Qx(e),Ks();break;case 5:Nx(e);break;case 1:Tn(e.type)&&ql(e);break;case 4:sf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;bt(Kl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(bt(Rt,Rt.current&1),e.flags|=128,null):n&e.child.childLanes?eg(t,e,n):(bt(Rt,Rt.current&1),t=Wi(t,e,n),t!==null?t.sibling:null);bt(Rt,Rt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return tg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),bt(Rt,Rt.current),i)break;return null;case 22:case 23:return e.lanes=0,Zx(t,e,n)}return Wi(t,e,n)}var ng,Cu,ig,rg;ng=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cu=function(){};ig=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Hr(Si.current);var s=null;switch(n){case"input":r=Zd(t,r),i=Zd(t,i),s=[];break;case"select":r=Dt({},r,{value:void 0}),i=Dt({},i,{value:void 0}),s=[];break;case"textarea":r=eu(t,r),i=eu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Wl)}nu(n,i);var o;n=null;for(d in r)if(!i.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var l=r[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(qa.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in i){var c=i[d];if(l=r!=null?r[d]:void 0,i.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(qa.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Et("scroll",t),s||l===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};rg=function(t,e,n,i){n!==i&&(e.flags|=4)};function va(t,e){if(!Ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function an(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function gy(t,e,n){var i=e.pendingProps;switch(Zh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return Tn(e.type)&&Xl(),an(e),null;case 3:return i=e.stateNode,Js(),Tt(En),Tt(hn),of(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(jo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(Fu(ii),ii=null))),Cu(t,e),an(e),null;case 5:af(e);var r=Hr(so.current);if(n=e.type,t!==null&&e.stateNode!=null)ig(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return an(e),null}if(t=Hr(Si.current),jo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[xi]=e,i[io]=s,t=(e.mode&1)!==0,n){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(r=0;r<Pa.length;r++)Et(Pa[r],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":np(i,s),Et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Et("invalid",i);break;case"textarea":rp(i,s),Et("invalid",i)}nu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&Bo(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Bo(i.textContent,l,t),r=["children",""+l]):qa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Et("scroll",i)}switch(n){case"input":Po(i),ip(i,s,!0);break;case"textarea":Po(i),sp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=L0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[xi]=e,t[io]=i,ng(t,e,!1,!1),e.stateNode=t;e:{switch(o=iu(n,i),n){case"dialog":Et("cancel",t),Et("close",t),r=i;break;case"iframe":case"object":case"embed":Et("load",t),r=i;break;case"video":case"audio":for(r=0;r<Pa.length;r++)Et(Pa[r],t);r=i;break;case"source":Et("error",t),r=i;break;case"img":case"image":case"link":Et("error",t),Et("load",t),r=i;break;case"details":Et("toggle",t),r=i;break;case"input":np(t,i),r=Zd(t,i),Et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Dt({},i,{value:void 0}),Et("invalid",t);break;case"textarea":rp(t,i),r=eu(t,i),Et("invalid",t);break;default:r=i}nu(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?k0(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&D0(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&$a(t,c):typeof c=="number"&&$a(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qa.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Et("scroll",t):c!=null&&Uh(t,s,c,o))}switch(n){case"input":Po(t),ip(t,i,!1);break;case"textarea":Po(t),sp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+yr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Os(t,!!i.multiple,s,!1):i.defaultValue!=null&&Os(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Wl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(t&&e.stateNode!=null)rg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(n=Hr(so.current),Hr(Si.current),jo(e)){if(i=e.stateNode,n=e.memoizedProps,i[xi]=e,(s=i.nodeValue!==n)&&(t=Un,t!==null))switch(t.tag){case 3:Bo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[xi]=e,e.stateNode=i}return an(e),null;case 13:if(Tt(Rt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ct&&kn!==null&&e.mode&1&&!(e.flags&128))bx(),Ks(),e.flags|=98560,s=!1;else if(s=jo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[xi]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;an(e),s=!1}else ii!==null&&(Fu(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Rt.current&1?Gt===0&&(Gt=3):_f())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return Js(),Cu(t,e),t===null&&to(e.stateNode.containerInfo),an(e),null;case 10:return tf(e.type._context),an(e),null;case 17:return Tn(e.type)&&Xl(),an(e),null;case 19:if(Tt(Rt),s=e.memoizedState,s===null)return an(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)va(s,!1);else{if(Gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ql(t),o!==null){for(e.flags|=128,va(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return bt(Rt,Rt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ft()>ea&&(e.flags|=128,i=!0,va(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ql(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),va(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ct)return an(e),null}else 2*Ft()-s.renderingStartTime>ea&&n!==1073741824&&(e.flags|=128,i=!0,va(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ft(),e.sibling=null,n=Rt.current,bt(Rt,i?n&1|2:n&1),e):(an(e),null);case 22:case 23:return vf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ln&1073741824&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function vy(t,e){switch(Zh(e),e.tag){case 1:return Tn(e.type)&&Xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Js(),Tt(En),Tt(hn),of(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return af(e),null;case 13:if(Tt(Rt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(de(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Tt(Rt),null;case 4:return Js(),null;case 10:return tf(e.type._context),null;case 22:case 23:return vf(),null;case 24:return null;default:return null}}var Vo=!1,cn=!1,_y=typeof WeakSet=="function"?WeakSet:Set,Re=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){It(t,e,i)}else n.current=null}function Ru(t,e,n){try{n()}catch(i){It(t,e,i)}}var $p=!1;function yy(t,e){if(fu=Hl,t=cx(),Yh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,d=0,f=0,p=t,h=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(l=o+r),p!==s||i!==0&&p.nodeType!==3||(c=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===t)break t;if(h===n&&++d===r&&(l=o),h===s&&++f===i&&(c=o),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(pu={focusedElem:t,selectionRange:n},Hl=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var w=m.memoizedProps,_=m.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?w:ti(e.type,w),_);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(S){It(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return m=$p,$p=!1,m}function za(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ru(e,n,s)}r=r.next}while(r!==i)}}function Ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Pu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sg(t){var e=t.alternate;e!==null&&(t.alternate=null,sg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xi],delete e[io],delete e[gu],delete e[ny],delete e[iy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ag(t){return t.tag===5||t.tag===3||t.tag===4}function Yp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ag(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wl));else if(i!==4&&(t=t.child,t!==null))for(Lu(t,e,n),t=t.sibling;t!==null;)Lu(t,e,n),t=t.sibling}function Du(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Du(t,e,n),t=t.sibling;t!==null;)Du(t,e,n),t=t.sibling}var Jt=null,ni=!1;function Zi(t,e,n){for(n=n.child;n!==null;)og(t,e,n),n=n.sibling}function og(t,e,n){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 5:cn||ks(n,e);case 6:var i=Jt,r=ni;Jt=null,Zi(t,e,n),Jt=i,ni=r,Jt!==null&&(ni?(t=Jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Jt.removeChild(n.stateNode));break;case 18:Jt!==null&&(ni?(t=Jt,n=n.stateNode,t.nodeType===8?ed(t.parentNode,n):t.nodeType===1&&ed(t,n),Ja(t)):ed(Jt,n.stateNode));break;case 4:i=Jt,r=ni,Jt=n.stateNode.containerInfo,ni=!0,Zi(t,e,n),Jt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ru(n,e,o),r=r.next}while(r!==i)}Zi(t,e,n);break;case 1:if(!cn&&(ks(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){It(n,e,l)}Zi(t,e,n);break;case 21:Zi(t,e,n);break;case 22:n.mode&1?(cn=(i=cn)||n.memoizedState!==null,Zi(t,e,n),cn=i):Zi(t,e,n);break;default:Zi(t,e,n)}}function Kp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _y),e.forEach(function(i){var r=Cy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Jt=l.stateNode,ni=!1;break e;case 3:Jt=l.stateNode.containerInfo,ni=!0;break e;case 4:Jt=l.stateNode.containerInfo,ni=!0;break e}l=l.return}if(Jt===null)throw Error(de(160));og(s,o,r),Jt=null,ni=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(d){It(r,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lg(e,t),e=e.sibling}function lg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),ui(t),i&4){try{za(3,t,t.return),Ec(3,t)}catch(w){It(t,t.return,w)}try{za(5,t,t.return)}catch(w){It(t,t.return,w)}}break;case 1:Zn(e,t),ui(t),i&512&&n!==null&&ks(n,n.return);break;case 5:if(Zn(e,t),ui(t),i&512&&n!==null&&ks(n,n.return),t.flags&32){var r=t.stateNode;try{$a(r,"")}catch(w){It(t,t.return,w)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&R0(r,s),iu(l,o);var d=iu(l,s);for(o=0;o<c.length;o+=2){var f=c[o],p=c[o+1];f==="style"?k0(r,p):f==="dangerouslySetInnerHTML"?D0(r,p):f==="children"?$a(r,p):Uh(r,f,p,d)}switch(l){case"input":Jd(r,s);break;case"textarea":P0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Os(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Os(r,!!s.multiple,s.defaultValue,!0):Os(r,!!s.multiple,s.multiple?[]:"",!1))}r[io]=s}catch(w){It(t,t.return,w)}}break;case 6:if(Zn(e,t),ui(t),i&4){if(t.stateNode===null)throw Error(de(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(w){It(t,t.return,w)}}break;case 3:if(Zn(e,t),ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ja(e.containerInfo)}catch(w){It(t,t.return,w)}break;case 4:Zn(e,t),ui(t);break;case 13:Zn(e,t),ui(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(xf=Ft())),i&4&&Kp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(cn=(d=cn)||f,Zn(e,t),cn=d):Zn(e,t),ui(t),i&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(Re=t,f=t.child;f!==null;){for(p=Re=f;Re!==null;){switch(h=Re,g=h.child,h.tag){case 0:case 11:case 14:case 15:za(4,h,h.return);break;case 1:ks(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(w){It(i,n,w)}}break;case 5:ks(h,h.return);break;case 22:if(h.memoizedState!==null){Jp(p);continue}}g!==null?(g.return=h,Re=g):Jp(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,d?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=I0("display",o))}catch(w){It(t,t.return,w)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(w){It(t,t.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Zn(e,t),ui(t),i&4&&Kp(t);break;case 21:break;default:Zn(e,t),ui(t)}}function ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ag(n)){var i=n;break e}n=n.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&($a(r,""),i.flags&=-33);var s=Yp(t);Du(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,l=Yp(t);Lu(t,l,o);break;default:throw Error(de(161))}}catch(c){It(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sy(t,e,n){Re=t,cg(t)}function cg(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Vo;if(!o){var l=r.alternate,c=l!==null&&l.memoizedState!==null||cn;l=Vo;var d=cn;if(Vo=o,(cn=c)&&!d)for(Re=r;Re!==null;)o=Re,c=o.child,o.tag===22&&o.memoizedState!==null?Qp(r):c!==null?(c.return=o,Re=c):Qp(r);for(;s!==null;)Re=s,cg(s),s=s.sibling;Re=r,Vo=l,cn=d}Zp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):Zp(t)}}function Zp(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||Ec(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kp(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ja(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}cn||e.flags&512&&Pu(e)}catch(h){It(e,e.return,h)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function Jp(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function Qp(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ec(4,e)}catch(c){It(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){It(e,r,c)}}var s=e.return;try{Pu(e)}catch(c){It(e,s,c)}break;case 5:var o=e.return;try{Pu(e)}catch(c){It(e,o,c)}}}catch(c){It(e,e.return,c)}if(e===t){Re=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Re=l;break}Re=e.return}}var by=Math.ceil,nc=qi.ReactCurrentDispatcher,pf=qi.ReactCurrentOwner,qn=qi.ReactCurrentBatchConfig,ct=0,Yt=null,Ht=null,en=0,Ln=0,Us=Mr(0),Gt=0,co=null,Jr=0,Tc=0,mf=0,Ha=null,wn=null,xf=0,ea=1/0,Pi=null,ic=!1,Iu=null,gr=null,Go=!1,ur=null,rc=0,Va=0,ku=null,El=-1,Tl=0;function _n(){return ct&6?Ft():El!==-1?El:El=Ft()}function vr(t){return t.mode&1?ct&2&&en!==0?en&-en:sy.transition!==null?(Tl===0&&(Tl=q0()),Tl):(t=gt,t!==0||(t=window.event,t=t===void 0?16:ex(t.type)),t):1}function oi(t,e,n,i){if(50<Va)throw Va=0,ku=null,Error(de(185));_o(t,n,i),(!(ct&2)||t!==Yt)&&(t===Yt&&(!(ct&2)&&(Tc|=n),Gt===4&&lr(t,en)),Nn(t,i),n===1&&ct===0&&!(e.mode&1)&&(ea=Ft()+500,bc&&Er()))}function Nn(t,e){var n=t.callbackNode;s_(t,e);var i=zl(t,t===Yt?en:0);if(i===0)n!==null&&lp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&lp(n),e===1)t.tag===0?ry(em.bind(null,t)):_x(em.bind(null,t)),ey(function(){!(ct&6)&&Er()}),n=null;else{switch($0(i)){case 1:n=zh;break;case 4:n=W0;break;case 16:n=jl;break;case 536870912:n=X0;break;default:n=jl}n=gg(n,dg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dg(t,e){if(El=-1,Tl=0,ct&6)throw Error(de(327));var n=t.callbackNode;if(Vs()&&t.callbackNode!==n)return null;var i=zl(t,t===Yt?en:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=sc(t,i);else{e=i;var r=ct;ct|=2;var s=hg();(Yt!==t||en!==e)&&(Pi=null,ea=Ft()+500,Xr(t,e));do try{Ey();break}catch(l){ug(t,l)}while(!0);ef(),nc.current=s,ct=r,Ht!==null?e=0:(Yt=null,en=0,e=Gt)}if(e!==0){if(e===2&&(r=lu(t),r!==0&&(i=r,e=Uu(t,r))),e===1)throw n=co,Xr(t,0),lr(t,i),Nn(t,Ft()),n;if(e===6)lr(t,i);else{if(r=t.current.alternate,!(i&30)&&!wy(r)&&(e=sc(t,i),e===2&&(s=lu(t),s!==0&&(i=s,e=Uu(t,s))),e===1))throw n=co,Xr(t,0),lr(t,i),Nn(t,Ft()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:Or(t,wn,Pi);break;case 3:if(lr(t,i),(i&130023424)===i&&(e=xf+500-Ft(),10<e)){if(zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){_n(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=xu(Or.bind(null,t,wn,Pi),e);break}Or(t,wn,Pi);break;case 4:if(lr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ai(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*by(i/1960))-i,10<i){t.timeoutHandle=xu(Or.bind(null,t,wn,Pi),i);break}Or(t,wn,Pi);break;case 5:Or(t,wn,Pi);break;default:throw Error(de(329))}}}return Nn(t,Ft()),t.callbackNode===n?dg.bind(null,t):null}function Uu(t,e){var n=Ha;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=sc(t,e),t!==2&&(e=wn,wn=n,e!==null&&Fu(e)),t}function Fu(t){wn===null?wn=t:wn.push.apply(wn,t)}function wy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~mf,e&=~Tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ai(e),i=1<<n;t[n]=-1,e&=~i}}function em(t){if(ct&6)throw Error(de(327));Vs();var e=zl(t,0);if(!(e&1))return Nn(t,Ft()),null;var n=sc(t,e);if(t.tag!==0&&n===2){var i=lu(t);i!==0&&(e=i,n=Uu(t,i))}if(n===1)throw n=co,Xr(t,0),lr(t,e),Nn(t,Ft()),n;if(n===6)throw Error(de(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,wn,Pi),Nn(t,Ft()),null}function gf(t,e){var n=ct;ct|=1;try{return t(e)}finally{ct=n,ct===0&&(ea=Ft()+500,bc&&Er())}}function Qr(t){ur!==null&&ur.tag===0&&!(ct&6)&&Vs();var e=ct;ct|=1;var n=qn.transition,i=gt;try{if(qn.transition=null,gt=1,t)return t()}finally{gt=i,qn.transition=n,ct=e,!(ct&6)&&Er()}}function vf(){Ln=Us.current,Tt(Us)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Q_(n)),Ht!==null)for(n=Ht.return;n!==null;){var i=n;switch(Zh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Xl();break;case 3:Js(),Tt(En),Tt(hn),of();break;case 5:af(i);break;case 4:Js();break;case 13:Tt(Rt);break;case 19:Tt(Rt);break;case 10:tf(i.type._context);break;case 22:case 23:vf()}n=n.return}if(Yt=t,Ht=t=_r(t.current,null),en=Ln=e,Gt=0,co=null,mf=Tc=Jr=0,wn=Ha=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}zr=null}return t}function ug(t,e){do{var n=Ht;try{if(ef(),bl.current=tc,ec){for(var i=Lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ec=!1}if(Zr=0,$t=Vt=Lt=null,ja=!1,ao=0,pf.current=null,n===null||n.return===null){Gt=1,co=e,Ht=null;break}e:{var s=t,o=n.return,l=n,c=e;if(e=en,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=zp(o);if(g!==null){g.flags&=-257,Hp(g,o,l,s,e),g.mode&1&&jp(s,d,e),e=g,c=d;var m=e.updateQueue;if(m===null){var w=new Set;w.add(c),e.updateQueue=w}else m.add(c);break e}else{if(!(e&1)){jp(s,d,e),_f();break e}c=Error(de(426))}}else if(Ct&&l.mode&1){var _=zp(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Hp(_,o,l,s,e),Jh(Qs(c,l));break e}}s=c=Qs(c,l),Gt!==4&&(Gt=2),Ha===null?Ha=[s]:Ha.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=$x(s,c,e);Ip(s,u);break e;case 1:l=c;var v=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(gr===null||!gr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Yx(s,l,e);Ip(s,S);break e}}s=s.return}while(s!==null)}pg(n)}catch(T){e=T,Ht===n&&n!==null&&(Ht=n=n.return);continue}break}while(!0)}function hg(){var t=nc.current;return nc.current=tc,t===null?tc:t}function _f(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),Yt===null||!(Jr&268435455)&&!(Tc&268435455)||lr(Yt,en)}function sc(t,e){var n=ct;ct|=2;var i=hg();(Yt!==t||en!==e)&&(Pi=null,Xr(t,e));do try{My();break}catch(r){ug(t,r)}while(!0);if(ef(),ct=n,nc.current=i,Ht!==null)throw Error(de(261));return Yt=null,en=0,Gt}function My(){for(;Ht!==null;)fg(Ht)}function Ey(){for(;Ht!==null&&!Kv();)fg(Ht)}function fg(t){var e=xg(t.alternate,t,Ln);t.memoizedProps=t.pendingProps,e===null?pg(t):Ht=e,pf.current=null}function pg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vy(n,e),n!==null){n.flags&=32767,Ht=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,Ht=null;return}}else if(n=gy(n,e,Ln),n!==null){Ht=n;return}if(e=e.sibling,e!==null){Ht=e;return}Ht=e=t}while(e!==null);Gt===0&&(Gt=5)}function Or(t,e,n){var i=gt,r=qn.transition;try{qn.transition=null,gt=1,Ty(t,e,n,i)}finally{qn.transition=r,gt=i}return null}function Ty(t,e,n,i){do Vs();while(ur!==null);if(ct&6)throw Error(de(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(de(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(a_(t,s),t===Yt&&(Ht=Yt=null,en=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Go||(Go=!0,gg(jl,function(){return Vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qn.transition,qn.transition=null;var o=gt;gt=1;var l=ct;ct|=4,pf.current=null,yy(t,n),lg(n,t),X_(pu),Hl=!!fu,pu=fu=null,t.current=n,Sy(n),Zv(),ct=l,gt=o,qn.transition=s}else t.current=n;if(Go&&(Go=!1,ur=t,rc=r),s=t.pendingLanes,s===0&&(gr=null),e_(n.stateNode),Nn(t,Ft()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ic)throw ic=!1,t=Iu,Iu=null,t;return rc&1&&t.tag!==0&&Vs(),s=t.pendingLanes,s&1?t===ku?Va++:(Va=0,ku=t):Va=0,Er(),null}function Vs(){if(ur!==null){var t=$0(rc),e=qn.transition,n=gt;try{if(qn.transition=null,gt=16>t?16:t,ur===null)var i=!1;else{if(t=ur,ur=null,rc=0,ct&6)throw Error(de(331));var r=ct;for(ct|=4,Re=t.current;Re!==null;){var s=Re,o=s.child;if(Re.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(Re=d;Re!==null;){var f=Re;switch(f.tag){case 0:case 11:case 15:za(8,f,s)}var p=f.child;if(p!==null)p.return=f,Re=p;else for(;Re!==null;){f=Re;var h=f.sibling,g=f.return;if(sg(f),f===d){Re=null;break}if(h!==null){h.return=g,Re=h;break}Re=g}}}var m=s.alternate;if(m!==null){var w=m.child;if(w!==null){m.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}Re=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Re=o;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:za(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Re=u;break e}Re=s.return}}var v=t.current;for(Re=v;Re!==null;){o=Re;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,Re=E;else e:for(o=v;Re!==null;){if(l=Re,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ec(9,l)}}catch(T){It(l,l.return,T)}if(l===o){Re=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,Re=S;break e}Re=l.return}}if(ct=r,Er(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(gc,t)}catch{}i=!0}return i}finally{gt=n,qn.transition=e}}return!1}function tm(t,e,n){e=Qs(n,e),e=$x(t,e,1),t=xr(t,e,1),e=_n(),t!==null&&(_o(t,1,e),Nn(t,e))}function It(t,e,n){if(t.tag===3)tm(t,t,n);else for(;e!==null;){if(e.tag===3){tm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gr===null||!gr.has(i))){t=Qs(n,t),t=Yx(e,t,1),e=xr(e,t,1),t=_n(),e!==null&&(_o(e,1,t),Nn(e,t));break}}e=e.return}}function Ny(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=_n(),t.pingedLanes|=t.suspendedLanes&n,Yt===t&&(en&n)===n&&(Gt===4||Gt===3&&(en&130023424)===en&&500>Ft()-xf?Xr(t,0):mf|=n),Nn(t,e)}function mg(t,e){e===0&&(t.mode&1?(e=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):e=1);var n=_n();t=Gi(t,e),t!==null&&(_o(t,e,n),Nn(t,n))}function Ay(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mg(t,n)}function Cy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),mg(t,n)}var xg;xg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||En.current)Mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mn=!1,xy(t,e,n);Mn=!!(t.flags&131072)}else Mn=!1,Ct&&e.flags&1048576&&yx(e,Yl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ml(t,e),t=e.pendingProps;var r=Ys(e,hn.current);Hs(e,n),r=cf(null,e,i,t,r,n);var s=df();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tn(i)?(s=!0,ql(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,rf(e),r.updater=Mc,e.stateNode=r,r._reactInternals=e,wu(e,i,t,n),e=Tu(null,e,i,!0,s,n)):(e.tag=0,Ct&&s&&Kh(e),vn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ml(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Py(i),t=ti(i,t),r){case 0:e=Eu(null,e,i,t,n);break e;case 1:e=Wp(null,e,i,t,n);break e;case 11:e=Vp(null,e,i,t,n);break e;case 14:e=Gp(null,e,i,ti(i.type,t),n);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Eu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Wp(t,e,i,r,n);case 3:e:{if(Qx(e),t===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Tx(t,e),Jl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Qs(Error(de(423)),e),e=Xp(t,e,i,n,r);break e}else if(i!==r){r=Qs(Error(de(424)),e),e=Xp(t,e,i,n,r);break e}else for(kn=mr(e.stateNode.containerInfo.firstChild),Un=e,Ct=!0,ii=null,n=Mx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),i===r){e=Wi(t,e,n);break e}vn(t,e,i,n)}e=e.child}return e;case 5:return Nx(e),t===null&&yu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,mu(i,r)?o=null:s!==null&&mu(i,s)&&(e.flags|=32),Jx(t,e),vn(t,e,o,n),e.child;case 6:return t===null&&yu(e),null;case 13:return eg(t,e,n);case 4:return sf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Zs(e,null,i,n):vn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Vp(t,e,i,r,n);case 7:return vn(t,e,e.pendingProps,n),e.child;case 8:return vn(t,e,e.pendingProps.children,n),e.child;case 12:return vn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,bt(Kl,i._currentValue),i._currentValue=o,s!==null)if(ci(s.value,o)){if(s.children===r.children&&!En.current){e=Wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Oi(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?c.next=c:(c.next=f.next,f.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Su(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(de(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Su(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Hs(e,n),r=$n(r),i=i(r),e.flags|=1,vn(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),Gp(t,e,i,r,n);case 15:return Kx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Ml(t,e),e.tag=1,Tn(i)?(t=!0,ql(e)):t=!1,Hs(e,n),qx(e,i,r),wu(e,i,r,n),Tu(null,e,i,!0,t,n);case 19:return tg(t,e,n);case 22:return Zx(t,e,n)}throw Error(de(156,e.tag))};function gg(t,e){return G0(t,e)}function Ry(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,e,n,i){return new Ry(t,e,n,i)}function yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Py(t){if(typeof t=="function")return yf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Oh)return 11;if(t===Bh)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=Xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")yf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ts:return qr(n.children,r,s,e);case Fh:o=8,r|=8;break;case qd:return t=Xn(12,n,e,r|2),t.elementType=qd,t.lanes=s,t;case $d:return t=Xn(13,n,e,r),t.elementType=$d,t.lanes=s,t;case Yd:return t=Xn(19,n,e,r),t.elementType=Yd,t.lanes=s,t;case N0:return Nc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E0:o=10;break e;case T0:o=9;break e;case Oh:o=11;break e;case Bh:o=14;break e;case rr:o=16,i=null;break e}throw Error(de(130,t==null?t:typeof t,""))}return e=Xn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function qr(t,e,n,i){return t=Xn(7,t,i,e),t.lanes=n,t}function Nc(t,e,n,i){return t=Xn(22,t,i,e),t.elementType=N0,t.lanes=n,t.stateNode={isHidden:!1},t}function ld(t,e,n){return t=Xn(6,t,null,e),t.lanes=n,t}function cd(t,e,n){return e=Xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ly(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vc(0),this.expirationTimes=Vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Sf(t,e,n,i,r,s,o,l,c){return t=new Ly(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rf(s),t}function Dy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function vg(t){if(!t)return Sr;t=t._reactInternals;e:{if(rs(t)!==t||t.tag!==1)throw Error(de(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(t.tag===1){var n=t.type;if(Tn(n))return vx(t,n,e)}return e}function _g(t,e,n,i,r,s,o,l,c){return t=Sf(n,i,!0,t,r,s,o,l,c),t.context=vg(null),n=t.current,i=_n(),r=vr(n),s=Oi(i,r),s.callback=e??null,xr(n,s,r),t.current.lanes=r,_o(t,r,i),Nn(t,i),t}function Ac(t,e,n,i){var r=e.current,s=_n(),o=vr(r);return n=vg(n),e.context===null?e.context=n:e.pendingContext=n,e=Oi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=xr(r,e,o),t!==null&&(oi(t,r,o,s),Sl(t,r,o)),o}function ac(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function nm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bf(t,e){nm(t,e),(t=t.alternate)&&nm(t,e)}function Iy(){return null}var yg=typeof reportError=="function"?reportError:function(t){console.error(t)};function wf(t){this._internalRoot=t}Cc.prototype.render=wf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(de(409));Ac(t,e,null,null)};Cc.prototype.unmount=wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){Ac(null,t,null,null)}),e[Vi]=null}};function Cc(t){this._internalRoot=t}Cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Z0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&Q0(t)}};function Mf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function im(){}function ky(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var d=ac(o);s.call(d)}}var o=_g(e,i,t,0,null,!1,!1,"",im);return t._reactRootContainer=o,t[Vi]=o.current,to(t.nodeType===8?t.parentNode:t),Qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var d=ac(c);l.call(d)}}var c=Sf(t,0,!1,null,null,!1,!1,"",im);return t._reactRootContainer=c,t[Vi]=c.current,to(t.nodeType===8?t.parentNode:t),Qr(function(){Ac(e,c,n,i)}),c}function Pc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var l=r;r=function(){var c=ac(o);l.call(c)}}Ac(e,o,t,r)}else o=ky(n,e,t,r,i);return ac(o)}Y0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ra(e.pendingLanes);n!==0&&(Hh(e,n|1),Nn(e,Ft()),!(ct&6)&&(ea=Ft()+500,Er()))}break;case 13:Qr(function(){var i=Gi(t,1);if(i!==null){var r=_n();oi(i,t,1,r)}}),bf(t,1)}};Vh=function(t){if(t.tag===13){var e=Gi(t,134217728);if(e!==null){var n=_n();oi(e,t,134217728,n)}bf(t,134217728)}};K0=function(t){if(t.tag===13){var e=vr(t),n=Gi(t,e);if(n!==null){var i=_n();oi(n,t,e,i)}bf(t,e)}};Z0=function(){return gt};J0=function(t,e){var n=gt;try{return gt=t,e()}finally{gt=n}};su=function(t,e,n){switch(e){case"input":if(Jd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Sc(i);if(!r)throw Error(de(90));C0(i),Jd(i,r)}}}break;case"textarea":P0(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};O0=gf;B0=Qr;var Uy={usingClientEntryPoint:!1,Events:[So,Rs,Sc,U0,F0,gf]},_a={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fy={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=H0(t),t===null?null:t.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||Iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{gc=Wo.inject(Fy),yi=Wo}catch{}}On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uy;On.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mf(e))throw Error(de(200));return Dy(t,e,null,n)};On.createRoot=function(t,e){if(!Mf(t))throw Error(de(299));var n=!1,i="",r=yg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Sf(t,1,!1,null,null,n,!1,i,r),t[Vi]=e.current,to(t.nodeType===8?t.parentNode:t),new wf(e)};On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(de(188)):(t=Object.keys(t).join(","),Error(de(268,t)));return t=H0(e),t=t===null?null:t.stateNode,t};On.flushSync=function(t){return Qr(t)};On.hydrate=function(t,e,n){if(!Rc(e))throw Error(de(200));return Pc(null,t,e,!0,n)};On.hydrateRoot=function(t,e,n){if(!Mf(t))throw Error(de(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=yg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=_g(e,null,t,1,n??null,r,!1,s,o),t[Vi]=e.current,to(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Cc(e)};On.render=function(t,e,n){if(!Rc(e))throw Error(de(200));return Pc(null,t,e,!1,n)};On.unmountComponentAtNode=function(t){if(!Rc(t))throw Error(de(40));return t._reactRootContainer?(Qr(function(){Pc(null,null,t,!1,function(){t._reactRootContainer=null,t[Vi]=null})}),!0):!1};On.unstable_batchedUpdates=gf;On.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Rc(n))throw Error(de(200));if(t==null||t._reactInternals===void 0)throw Error(de(38));return Pc(t,e,n,!1,i)};On.version="18.3.1-next-f1338f8080-20240426";function Sg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sg)}catch(t){console.error(t)}}Sg(),S0.exports=On;var Oy=S0.exports,rm=Oy;Wd.createRoot=rm.createRoot,Wd.hydrateRoot=rm.hydrateRoot;/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bg=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=ue.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...l},c)=>ue.createElement("svg",{ref:c,...jy,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:bg("lucide",r),...l},[...o.map(([d,f])=>ue.createElement(d,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=(t,e)=>{const n=ue.forwardRef(({className:i,...r},s)=>ue.createElement(zy,{ref:s,iconNode:e,className:bg(`lucide-${By(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=Be("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=Be("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=Be("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=Be("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=Be("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=Be("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=Be("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=Be("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=Be("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=Be("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=Be("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=Be("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=Be("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=Be("CloudUpload",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=Be("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=Be("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=Be("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=Be("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=Be("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=Be("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=Be("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=Be("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=Be("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=Be("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=Be("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=Be("FolderLock",[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1",key:"19aais"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",key:"1w6v7t"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=Be("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=Be("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=Be("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=Be("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=Be("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=Be("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=Be("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=Be("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=Be("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=Be("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=Be("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=Be("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=Be("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=Be("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=Be("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=Be("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=Be("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=Be("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=Be("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=Be("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=Be("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=Be("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=Be("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=Be("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=Be("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=Be("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function cS({activeTab:t,setActiveTab:e}){return a.jsx("header",{className:"bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",children:[a.jsxs("div",{onClick:()=>e("landing"),className:"flex items-center space-x-3 cursor-pointer group",children:[a.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform",children:a.jsx($r,{className:"w-6 h-6"})}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("span",{className:"text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors",children:"EasePrint"}),a.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200",children:"AI Station"})]}),a.jsxs("div",{className:"flex items-center text-xs text-slate-500 space-x-1",children:[a.jsx(nS,{className:"w-3 h-3 text-red-500"}),a.jsx("span",{children:"Hyderabad Campus Xerox & Stationery"})]})]})]}),a.jsxs("div",{className:"flex items-center bg-slate-100 p-1 rounded-xl",children:[a.jsxs("button",{onClick:()=>e("landing"),className:`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${t==="landing"?"bg-white text-sky-700 shadow-sm shadow-slate-200":"text-slate-600 hover:text-slate-900"}`,children:[a.jsx(tS,{className:"w-4 h-4"}),a.jsx("span",{children:"Home"})]}),a.jsxs("button",{onClick:()=>e("student"),className:`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${t==="student"?"bg-white text-sky-700 shadow-sm shadow-slate-200":"text-slate-600 hover:text-slate-900"}`,children:[a.jsx(oS,{className:"w-4 h-4"}),a.jsx("span",{children:"Student Portal"})]}),a.jsxs("button",{onClick:()=>e("staff"),className:`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${t==="staff"?"bg-white text-indigo-700 shadow-sm shadow-slate-200":"text-slate-600 hover:text-slate-900"}`,children:[a.jsx(bs,{className:"w-4 h-4"}),a.jsx("span",{children:"Staff Command"})]})]}),a.jsxs("div",{className:"hidden lg:flex items-center space-x-2 text-xs text-slate-500",children:[a.jsxs("span",{className:"relative flex h-2 w-2",children:[a.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),a.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),a.jsx("span",{className:"font-medium text-slate-600",children:"Bedrock & ARQ Active"})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tf="186",dS=0,cm=1,uS=2,Pl=1,Ag=2,La=3,es=0,An=1,gi=2,Bi=0,Ga=1,dm=2,um=3,hm=4,hS=5,ws=100,fS=101,pS=102,mS=103,xS=104,gS=200,vS=201,_S=202,yS=203,Cg=204,Rg=205,SS=206,bS=207,wS=208,MS=209,ES=210,TS=211,NS=212,AS=213,CS=214,ju=0,zu=1,Hu=2,ho=3,Vu=4,Gu=5,Wu=6,Xu=7,Pg=0,RS=1,PS=2,bi=0,Lg=1,Dg=2,Ig=3,kg=4,Ug=5,Fg=6,Og=7,Bg=300,ts=301,ta=302,hd=303,fd=304,Dc=306,qu=1e3,Fi=1001,$u=1002,Qt=1003,LS=1004,qo=1005,dn=1006,pd=1007,Gr=1008,In=1009,jg=1010,zg=1011,fo=1012,Nf=1013,wi=1014,vi=1015,Mi=1016,Af=1017,Cf=1018,po=1020,Hg=35902,Vg=35899,Gg=1021,Wg=1022,si=1023,Xi=1026,Wr=1027,Xg=1028,Rf=1029,ns=1030,Pf=1031,Lf=1033,Ll=33776,Dl=33777,Il=33778,kl=33779,Yu=35840,Ku=35841,Zu=35842,Ju=35843,Qu=36196,eh=37492,th=37496,nh=37488,ih=37489,cc=37490,rh=37491,sh=37808,ah=37809,oh=37810,lh=37811,ch=37812,dh=37813,uh=37814,hh=37815,fh=37816,ph=37817,mh=37818,xh=37819,gh=37820,vh=37821,_h=36492,yh=36494,Sh=36495,bh=36283,wh=36284,dc=36285,Mh=36286,DS=3200,Eh=0,IS=1,cr="",Vn="srgb",uc="srgb-linear",hc="linear",xt="srgb",md=7680,kS=519,US=512,FS=513,OS=514,Df=515,BS=516,jS=517,If=518,zS=519,HS=35044,fm="300 es",_i=2e3,mo=2001;function VS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function GS(){const t=fc("canvas");return t.style.display="block",t}const pm={};function mm(...t){const e="THREE."+t.shift();console.log(e,...t)}function qg(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=qg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ht(...t){t=qg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Xs(...t){const e=t.join(" ");e in pm||(pm[e]=!0,ze(...t))}function WS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const XS={[ju]:zu,[Hu]:Wu,[Vu]:Xu,[ho]:Gu,[zu]:ju,[Wu]:Hu,[Xu]:Vu,[Gu]:ho};class ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xm=1234567;const Wa=Math.PI/180,xo=180/Math.PI;function aa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[t&255]+on[t>>8&255]+on[t>>16&255]+on[t>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function kf(t,e){return(t%e+e)%e}function qS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function $S(t,e,n){return t!==e?(n-t)/(e-t):0}function Xa(t,e,n){return(1-n)*t+n*e}function YS(t,e,n,i){return Xa(t,e,1-Math.exp(-n*i))}function KS(t,e=1){return e-Math.abs(kf(t,e*2)-e)}function ZS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function JS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function QS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function eb(t,e){return t+Math.random()*(e-t)}function tb(t){return t*(.5-Math.random())}function nb(t){t!==void 0&&(xm=t);let e=xm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ib(t){return t*Wa}function rb(t){return t*xo}function sb(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function ab(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function ob(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function lb(t,e,n,i,r){const s=Math.cos,o=Math.sin,l=s(n/2),c=o(n/2),d=s((e+i)/2),f=o((e+i)/2),p=s((e-i)/2),h=o((e-i)/2),g=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":t.set(l*f,c*p,c*h,l*d);break;case"YZY":t.set(c*h,l*f,c*p,l*d);break;case"ZXZ":t.set(c*p,c*h,l*f,l*d);break;case"XZX":t.set(l*f,c*m,c*g,l*d);break;case"YXY":t.set(c*g,l*f,c*m,l*d);break;case"ZYZ":t.set(c*m,c*g,l*f,l*d);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ms(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const jt={DEG2RAD:Wa,RAD2DEG:xo,generateUUID:aa,clamp:et,euclideanModulo:kf,mapLinear:qS,inverseLerp:$S,lerp:Xa,damp:YS,pingpong:KS,smoothstep:ZS,smootherstep:JS,randInt:QS,randFloat:eb,randFloatSpread:tb,seededRandom:nb,degToRad:ib,radToDeg:rb,isPowerOfTwo:sb,ceilPowerOfTwo:ab,floorPowerOfTwo:ob,setQuaternionFromProperEuler:lb,normalize:xn,denormalize:Ms},Gf=class Gf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gf.prototype.isVector2=!0;let Ke=Gf;class oa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,l){let c=i[r+0],d=i[r+1],f=i[r+2],p=i[r+3],h=s[o+0],g=s[o+1],m=s[o+2],w=s[o+3];if(p!==w||c!==h||d!==g||f!==m){let _=c*h+d*g+f*m+p*w;_<0&&(h=-h,g=-g,m=-m,w=-w,_=-_);let u=1-l;if(_<.9995){const v=Math.acos(_),E=Math.sin(v);u=Math.sin(u*v)/E,l=Math.sin(l*v)/E,c=c*u+h*l,d=d*u+g*l,f=f*u+m*l,p=p*u+w*l}else{c=c*u+h*l,d=d*u+g*l,f=f*u+m*l,p=p*u+w*l;const v=1/Math.sqrt(c*c+d*d+f*f+p*p);c*=v,d*=v,f*=v,p*=v}}e[n]=c,e[n+1]=d,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const l=i[r],c=i[r+1],d=i[r+2],f=i[r+3],p=s[o],h=s[o+1],g=s[o+2],m=s[o+3];return e[n]=l*m+f*p+c*g-d*h,e[n+1]=c*m+f*h+d*p-l*g,e[n+2]=d*m+f*g+l*h-c*p,e[n+3]=f*m-l*p-c*h-d*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,l=Math.cos,c=Math.sin,d=l(i/2),f=l(r/2),p=l(s/2),h=c(i/2),g=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=h*f*p+d*g*m,this._y=d*g*p-h*f*m,this._z=d*f*m+h*g*p,this._w=d*f*p-h*g*m;break;case"YXZ":this._x=h*f*p+d*g*m,this._y=d*g*p-h*f*m,this._z=d*f*m-h*g*p,this._w=d*f*p+h*g*m;break;case"ZXY":this._x=h*f*p-d*g*m,this._y=d*g*p+h*f*m,this._z=d*f*m+h*g*p,this._w=d*f*p-h*g*m;break;case"ZYX":this._x=h*f*p-d*g*m,this._y=d*g*p+h*f*m,this._z=d*f*m-h*g*p,this._w=d*f*p+h*g*m;break;case"YZX":this._x=h*f*p+d*g*m,this._y=d*g*p+h*f*m,this._z=d*f*m-h*g*p,this._w=d*f*p-h*g*m;break;case"XZY":this._x=h*f*p-d*g*m,this._y=d*g*p-h*f*m,this._z=d*f*m+h*g*p,this._w=d*f*p+h*g*m;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],l=n[5],c=n[9],d=n[2],f=n[6],p=n[10],h=i+l+p;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(f-c)*g,this._y=(s-d)*g,this._z=(o-r)*g}else if(i>l&&i>p){const g=2*Math.sqrt(1+i-l-p);this._w=(f-c)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+d)/g}else if(l>p){const g=2*Math.sqrt(1+l-i-p);this._w=(s-d)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(c+f)/g}else{const g=2*Math.sqrt(1+p-i-l);this._w=(o-r)/g,this._x=(s+d)/g,this._y=(c+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,l=n._x,c=n._y,d=n._z,f=n._w;return this._x=i*f+o*l+r*d-s*c,this._y=r*f+o*c+s*l-i*d,this._z=s*f+o*d+i*c-r*l,this._w=o*f-i*l-r*c-s*d,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,s=-s,o=-o,l=-l);let c=1-n;if(l<.9995){const d=Math.acos(l),f=Math.sin(d);c=Math.sin(c*d)/f,n=Math.sin(n*d)/f,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+o*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wf=class Wf{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,l=e.z,c=e.w,d=2*(o*r-l*i),f=2*(l*n-s*r),p=2*(s*i-o*n);return this.x=n+c*d+o*p-l*f,this.y=i+c*f+l*d-s*p,this.z=r+c*p+s*f-o*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,l=n.y,c=n.z;return this.x=r*c-s*l,this.y=s*o-i*c,this.z=i*l-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wf.prototype.isVector3=!0;let H=Wf;const xd=new H,gm=new oa,Xf=class Xf{constructor(e,n,i,r,s,o,l,c,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,l,c,d)}set(e,n,i,r,s,o,l,c,d){const f=this.elements;return f[0]=e,f[1]=r,f[2]=l,f[3]=n,f[4]=s,f[5]=c,f[6]=i,f[7]=o,f[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],l=i[3],c=i[6],d=i[1],f=i[4],p=i[7],h=i[2],g=i[5],m=i[8],w=r[0],_=r[3],u=r[6],v=r[1],E=r[4],S=r[7],T=r[2],b=r[5],A=r[8];return s[0]=o*w+l*v+c*T,s[3]=o*_+l*E+c*b,s[6]=o*u+l*S+c*A,s[1]=d*w+f*v+p*T,s[4]=d*_+f*E+p*b,s[7]=d*u+f*S+p*A,s[2]=h*w+g*v+m*T,s[5]=h*_+g*E+m*b,s[8]=h*u+g*S+m*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],d=e[7],f=e[8];return n*o*f-n*l*d-i*s*f+i*l*c+r*s*d-r*o*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],d=e[7],f=e[8],p=f*o-l*d,h=l*c-f*s,g=d*s-o*c,m=n*p+i*h+r*g;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/m;return e[0]=p*w,e[1]=(r*d-f*i)*w,e[2]=(l*i-r*o)*w,e[3]=h*w,e[4]=(f*n-r*c)*w,e[5]=(r*s-l*n)*w,e[6]=g*w,e[7]=(i*c-d*n)*w,e[8]=(o*n-i*s)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,l){const c=Math.cos(s),d=Math.sin(s);return this.set(i*c,i*d,-i*(c*o+d*l)+o+e,-r*d,r*c,-r*(-d*o+c*l)+l+n,0,0,1),this}scale(e,n){return Xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gd.makeScale(e,n)),this}rotate(e){return Xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gd.makeRotation(-e)),this}translate(e,n){return Xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xf.prototype.isMatrix3=!0;let Xe=Xf;const gd=new Xe,vm=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_m=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cb(){const t={enabled:!0,workingColorSpace:uc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===xt&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(r.r=qs(r.r),r.g=qs(r.g),r.b=qs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===cr?hc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[uc]:{primaries:e,whitePoint:i,transfer:hc,toXYZ:vm,fromXYZ:_m,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:vm,fromXYZ:_m,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),t}const at=cb();function ji(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let cs;class db{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{cs===void 0&&(cs=fc("canvas")),cs.width=e.width,cs.height=e.height;const r=cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=cs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ji(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ji(n[i]/255)*255):n[i]=ji(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ub=0;class Uf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=aa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(vd(r[o].image)):s.push(vd(r[o]))}else s=vd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function vd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?db.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let hb=0;const _d=new H;class yn extends ss{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,i=Fi,r=Fi,s=dn,o=Gr,l=si,c=In,d=yn.DEFAULT_ANISOTROPY,f=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=aa(),this.name="",this.source=new Uf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_d).x}get height(){return this.source.getSize(_d).y}get depth(){return this.source.getSize(_d).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qu:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case $u:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qu:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case $u:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Bg;yn.DEFAULT_ANISOTROPY=1;const qf=class qf{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,d=c[0],f=c[4],p=c[8],h=c[1],g=c[5],m=c[9],w=c[2],_=c[6],u=c[10];if(Math.abs(f-h)<.01&&Math.abs(p-w)<.01&&Math.abs(m-_)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+w)<.1&&Math.abs(m+_)<.1&&Math.abs(d+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(d+1)/2,S=(g+1)/2,T=(u+1)/2,b=(f+h)/4,A=(p+w)/4,x=(m+_)/4;return E>S&&E>T?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=b/i,s=A/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=x/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=x/s),this.set(i,r,s,n),this}let v=Math.sqrt((_-m)*(_-m)+(p-w)*(p-w)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(_-m)/v,this.y=(p-w)/v,this.z=(h-f)/v,this.w=Math.acos((d+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qf.prototype.isVector4=!0;let Pt=qf;class fb extends ss{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new yn(r),o=i.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Uf(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends fb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class $g extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pb extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const mc=class mc{constructor(e,n,i,r,s,o,l,c,d,f,p,h,g,m,w,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,l,c,d,f,p,h,g,m,w,_)}set(e,n,i,r,s,o,l,c,d,f,p,h,g,m,w,_){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=l,u[13]=c,u[2]=d,u[6]=f,u[10]=p,u[14]=h,u[3]=g,u[7]=m,u[11]=w,u[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),d=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=o*f,g=o*p,m=l*f,w=l*p;n[0]=c*f,n[4]=-c*p,n[8]=d,n[1]=g+m*d,n[5]=h-w*d,n[9]=-l*c,n[2]=w-h*d,n[6]=m+g*d,n[10]=o*c}else if(e.order==="YXZ"){const h=c*f,g=c*p,m=d*f,w=d*p;n[0]=h+w*l,n[4]=m*l-g,n[8]=o*d,n[1]=o*p,n[5]=o*f,n[9]=-l,n[2]=g*l-m,n[6]=w+h*l,n[10]=o*c}else if(e.order==="ZXY"){const h=c*f,g=c*p,m=d*f,w=d*p;n[0]=h-w*l,n[4]=-o*p,n[8]=m+g*l,n[1]=g+m*l,n[5]=o*f,n[9]=w-h*l,n[2]=-o*d,n[6]=l,n[10]=o*c}else if(e.order==="ZYX"){const h=o*f,g=o*p,m=l*f,w=l*p;n[0]=c*f,n[4]=m*d-g,n[8]=h*d+w,n[1]=c*p,n[5]=w*d+h,n[9]=g*d-m,n[2]=-d,n[6]=l*c,n[10]=o*c}else if(e.order==="YZX"){const h=o*c,g=o*d,m=l*c,w=l*d;n[0]=c*f,n[4]=w-h*p,n[8]=m*p+g,n[1]=p,n[5]=o*f,n[9]=-l*f,n[2]=-d*f,n[6]=g*p+m,n[10]=h-w*p}else if(e.order==="XZY"){const h=o*c,g=o*d,m=l*c,w=l*d;n[0]=c*f,n[4]=-p,n[8]=d*f,n[1]=h*p+w,n[5]=o*f,n[9]=g*p-m,n[2]=m*p-g,n[6]=l*f,n[10]=w*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mb,e,xb)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Ji.crossVectors(i,Cn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Ji.crossVectors(i,Cn)),Ji.normalize(),$o.crossVectors(Cn,Ji),r[0]=Ji.x,r[4]=$o.x,r[8]=Cn.x,r[1]=Ji.y,r[5]=$o.y,r[9]=Cn.y,r[2]=Ji.z,r[6]=$o.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],l=i[4],c=i[8],d=i[12],f=i[1],p=i[5],h=i[9],g=i[13],m=i[2],w=i[6],_=i[10],u=i[14],v=i[3],E=i[7],S=i[11],T=i[15],b=r[0],A=r[4],x=r[8],N=r[12],P=r[1],D=r[5],O=r[9],V=r[13],U=r[2],I=r[6],ne=r[10],K=r[14],z=r[3],j=r[7],W=r[11],Z=r[15];return s[0]=o*b+l*P+c*U+d*z,s[4]=o*A+l*D+c*I+d*j,s[8]=o*x+l*O+c*ne+d*W,s[12]=o*N+l*V+c*K+d*Z,s[1]=f*b+p*P+h*U+g*z,s[5]=f*A+p*D+h*I+g*j,s[9]=f*x+p*O+h*ne+g*W,s[13]=f*N+p*V+h*K+g*Z,s[2]=m*b+w*P+_*U+u*z,s[6]=m*A+w*D+_*I+u*j,s[10]=m*x+w*O+_*ne+u*W,s[14]=m*N+w*V+_*K+u*Z,s[3]=v*b+E*P+S*U+T*z,s[7]=v*A+E*D+S*I+T*j,s[11]=v*x+E*O+S*ne+T*W,s[15]=v*N+E*V+S*K+T*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],l=e[5],c=e[9],d=e[13],f=e[2],p=e[6],h=e[10],g=e[14],m=e[3],w=e[7],_=e[11],u=e[15],v=c*g-d*h,E=l*g-d*p,S=l*h-c*p,T=o*g-d*f,b=o*h-c*f,A=o*p-l*f;return n*(w*v-_*E+u*S)-i*(m*v-_*T+u*b)+r*(m*E-w*T+u*A)-s*(m*S-w*b+_*A)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],l=e[9],c=e[2],d=e[6],f=e[10];return n*(o*f-l*d)-i*(s*f-l*c)+r*(s*d-o*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],d=e[7],f=e[8],p=e[9],h=e[10],g=e[11],m=e[12],w=e[13],_=e[14],u=e[15],v=n*l-i*o,E=n*c-r*o,S=n*d-s*o,T=i*c-r*l,b=i*d-s*l,A=r*d-s*c,x=f*w-p*m,N=f*_-h*m,P=f*u-g*m,D=p*_-h*w,O=p*u-g*w,V=h*u-g*_,U=v*V-E*O+S*D+T*P-b*N+A*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/U;return e[0]=(l*V-c*O+d*D)*I,e[1]=(r*O-i*V-s*D)*I,e[2]=(w*A-_*b+u*T)*I,e[3]=(h*b-p*A-g*T)*I,e[4]=(c*P-o*V-d*N)*I,e[5]=(n*V-r*P+s*N)*I,e[6]=(_*S-m*A-u*E)*I,e[7]=(f*A-h*S+g*E)*I,e[8]=(o*O-l*P+d*x)*I,e[9]=(i*P-n*O-s*x)*I,e[10]=(m*b-w*S+u*v)*I,e[11]=(p*S-f*b-g*v)*I,e[12]=(l*N-o*D-c*x)*I,e[13]=(n*D-i*N+r*x)*I,e[14]=(w*E-m*T-_*v)*I,e[15]=(f*T-p*E+h*v)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,l=e.y,c=e.z,d=s*o,f=s*l;return this.set(d*o+i,d*l-r*c,d*c+r*l,0,d*l+r*c,f*l+i,f*c-r*o,0,d*c-r*l,f*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,l=n._z,c=n._w,d=s+s,f=o+o,p=l+l,h=s*d,g=s*f,m=s*p,w=o*f,_=o*p,u=l*p,v=c*d,E=c*f,S=c*p,T=i.x,b=i.y,A=i.z;return r[0]=(1-(w+u))*T,r[1]=(g+S)*T,r[2]=(m-E)*T,r[3]=0,r[4]=(g-S)*b,r[5]=(1-(h+u))*b,r[6]=(_+v)*b,r[7]=0,r[8]=(m+E)*A,r[9]=(_-v)*A,r[10]=(1-(h+w))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=ds.set(r[0],r[1],r[2]).length();const l=ds.set(r[4],r[5],r[6]).length(),c=ds.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Jn.copy(this);const d=1/o,f=1/l,p=1/c;return Jn.elements[0]*=d,Jn.elements[1]*=d,Jn.elements[2]*=d,Jn.elements[4]*=f,Jn.elements[5]*=f,Jn.elements[6]*=f,Jn.elements[8]*=p,Jn.elements[9]*=p,Jn.elements[10]*=p,n.setFromRotationMatrix(Jn),i.x=o,i.y=l,i.z=c,this}makePerspective(e,n,i,r,s,o,l=_i,c=!1){const d=this.elements,f=2*s/(n-e),p=2*s/(i-r),h=(n+e)/(n-e),g=(i+r)/(i-r);let m,w;if(c)m=s/(o-s),w=o*s/(o-s);else if(l===_i)m=-(o+s)/(o-s),w=-2*o*s/(o-s);else if(l===mo)m=-o/(o-s),w=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return d[0]=f,d[4]=0,d[8]=h,d[12]=0,d[1]=0,d[5]=p,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=m,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,i,r,s,o,l=_i,c=!1){const d=this.elements,f=2/(n-e),p=2/(i-r),h=-(n+e)/(n-e),g=-(i+r)/(i-r);let m,w;if(c)m=1/(o-s),w=o/(o-s);else if(l===_i)m=-2/(o-s),w=-(o+s)/(o-s);else if(l===mo)m=-1/(o-s),w=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return d[0]=f,d[4]=0,d[8]=0,d[12]=h,d[1]=0,d[5]=p,d[9]=0,d[13]=g,d[2]=0,d[6]=0,d[10]=m,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};mc.prototype.isMatrix4=!0;let kt=mc;const ds=new H,Jn=new kt,mb=new H(0,0,0),xb=new H(1,1,1),Ji=new H,$o=new H,Cn=new H,ym=new kt,Sm=new oa;class br{constructor(e=0,n=0,i=0,r=br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],l=r[8],c=r[1],d=r[5],f=r[9],p=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,d),this._z=0);break;case"YXZ":this._x=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,d),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,d),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ym.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ym,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sm.setFromEuler(this),this.setFromQuaternion(Sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}br.DEFAULT_ORDER="XYZ";class Yg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gb=0;const bm=new H,us=new oa,Ti=new kt,Yo=new H,ya=new H,vb=new H,_b=new oa,wm=new H(1,0,0),Mm=new H(0,1,0),Em=new H(0,0,1),Tm={type:"added"},yb={type:"removed"},hs={type:"childadded",child:null},yd={type:"childremoved",child:null};class un extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new H,n=new br,i=new oa,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new Xe}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(wm,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Em,e)}translateOnAxis(e,n){return bm.copy(e).applyQuaternion(this.quaternion),this.position.add(bm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wm,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Yo.copy(e):Yo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(ya,Yo,this.up):Ti.lookAt(Yo,ya,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),us.setFromRotationMatrix(Ti),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tm),hs.child=e,this.dispatchEvent(hs),hs.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yb),yd.child=e,this.dispatchEvent(yd),yd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tm),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,vb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,_b,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let d=0,f=c.length;d<f;d++){const p=c[d];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,d=this.material.length;c<d;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(n){const l=o(e.geometries),c=o(e.materials),d=o(e.textures),f=o(e.images),p=o(e.shapes),h=o(e.skeletons),g=o(e.animations),m=o(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),d.length>0&&(i.textures=d),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(l){const c=[];for(const d in l){const f=l[d];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}un.DEFAULT_UP=new H(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Da extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sb={type:"move"};class Sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const l=this._targetRay,c=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){o=!0;for(const w of e.hand.values()){const _=n.getJointPose(w,i),u=this._getHandJoint(d,w);_!==null&&(u.matrix.fromArray(_.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=_.radius),u.visible=_!==null}const f=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],h=f.position.distanceTo(p.position),g=.02,m=.005;d.inputState.pinching&&h>g+m?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&h<=g-m&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Sb)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Da;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function bd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=at.workingColorSpace){return this.r=e,this.g=n,this.b=i,at.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=at.workingColorSpace){if(e=kf(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=bd(o,s,e+1/3),this.g=bd(o,s,e),this.b=bd(o,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,n=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vn){const i=Kg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return at.workingToColorSpace(ln.copy(this),e),Math.round(et(ln.r*255,0,255))*65536+Math.round(et(ln.g*255,0,255))*256+Math.round(et(ln.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=at.workingColorSpace){at.workingToColorSpace(ln.copy(this),n);const i=ln.r,r=ln.g,s=ln.b,o=Math.max(i,r,s),l=Math.min(i,r,s);let c,d;const f=(l+o)/2;if(l===o)c=0,d=0;else{const p=o-l;switch(d=f<=.5?p/(o+l):p/(2-o-l),o){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=d,e.l=f,e}getRGB(e,n=at.workingColorSpace){return at.workingToColorSpace(ln.copy(this),n),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Vn){at.workingToColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,r=ln.b;return e!==Vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+n,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Qi),e.getHSL(Ko);const i=Xa(Qi.h,Ko.h,n),r=Xa(Qi.s,Ko.s,n),s=Xa(Qi.l,Ko.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new rt;rt.NAMES=Kg;class bb extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new br,this.environmentIntensity=1,this.environmentRotation=new br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Qn=new H,Ni=new H,wd=new H,Ai=new H,fs=new H,ps=new H,Nm=new H,Md=new H,Ed=new H,Td=new H,Nd=new Pt,Ad=new Pt,Cd=new Pt;class ri{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Qn.subVectors(r,n),Ni.subVectors(i,n),wd.subVectors(e,n);const o=Qn.dot(Qn),l=Qn.dot(Ni),c=Qn.dot(wd),d=Ni.dot(Ni),f=Ni.dot(wd),p=o*d-l*l;if(p===0)return s.set(0,0,0),null;const h=1/p,g=(d*c-l*f)*h,m=(o*f-l*c)*h;return s.set(1-g-m,m,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,n,i,r,s,o,l,c){return this.getBarycoord(e,n,i,r,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ai.x),c.addScaledVector(o,Ai.y),c.addScaledVector(l,Ai.z),c)}static getInterpolatedAttribute(e,n,i,r,s,o){return Nd.setScalar(0),Ad.setScalar(0),Cd.setScalar(0),Nd.fromBufferAttribute(e,n),Ad.fromBufferAttribute(e,i),Cd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Nd,s.x),o.addScaledVector(Ad,s.y),o.addScaledVector(Cd,s.z),o}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),Ni.subVectors(e,n),Qn.cross(Ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),Qn.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,l;fs.subVectors(r,i),ps.subVectors(s,i),Md.subVectors(e,i);const c=fs.dot(Md),d=ps.dot(Md);if(c<=0&&d<=0)return n.copy(i);Ed.subVectors(e,r);const f=fs.dot(Ed),p=ps.dot(Ed);if(f>=0&&p<=f)return n.copy(r);const h=c*p-f*d;if(h<=0&&c>=0&&f<=0)return o=c/(c-f),n.copy(i).addScaledVector(fs,o);Td.subVectors(e,s);const g=fs.dot(Td),m=ps.dot(Td);if(m>=0&&g<=m)return n.copy(s);const w=g*d-c*m;if(w<=0&&d>=0&&m<=0)return l=d/(d-m),n.copy(i).addScaledVector(ps,l);const _=f*m-g*p;if(_<=0&&p-f>=0&&g-m>=0)return Nm.subVectors(s,r),l=(p-f)/(p-f+(g-m)),n.copy(r).addScaledVector(Nm,l);const u=1/(_+w+h);return o=w*u,l=h*u,n.copy(i).addScaledVector(fs,o).addScaledVector(ps,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wo{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zo.copy(i.boundingBox)),Zo.applyMatrix4(e.matrixWorld),this.union(Zo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),Jo.subVectors(this.max,Sa),ms.subVectors(e.a,Sa),xs.subVectors(e.b,Sa),gs.subVectors(e.c,Sa),er.subVectors(xs,ms),tr.subVectors(gs,xs),Lr.subVectors(ms,gs);let n=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Lr.z,Lr.y,er.z,0,-er.x,tr.z,0,-tr.x,Lr.z,0,-Lr.x,-er.y,er.x,0,-tr.y,tr.x,0,-Lr.y,Lr.x,0];return!Rd(n,ms,xs,gs,Jo)||(n=[1,0,0,0,1,0,0,0,1],!Rd(n,ms,xs,gs,Jo))?!1:(Qo.crossVectors(er,tr),n=[Qo.x,Qo.y,Qo.z],Rd(n,ms,xs,gs,Jo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new H,new H,new H,new H,new H,new H,new H,new H],ei=new H,Zo=new wo,ms=new H,xs=new H,gs=new H,er=new H,tr=new H,Lr=new H,Sa=new H,Jo=new H,Qo=new H,Dr=new H;function Rd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Dr.fromArray(t,s);const l=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),c=e.dot(Dr),d=n.dot(Dr),f=i.dot(Dr);if(Math.max(-Math.max(c,d,f),Math.min(c,d,f))>l)return!1}return!0}const zt=new H,el=new Ke;let wb=0;class zi extends ss{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=HS,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)el.fromBufferAttribute(this,n),el.applyMatrix3(e),this.setXY(n,el.x,el.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ms(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ms(n,this.array)),n}setX(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ms(n,this.array)),n}setY(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ms(n,this.array)),n}setZ(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ms(n,this.array)),n}setW(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array),s=xn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Zg extends zi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Jg extends zi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ot extends zi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Mb=new wo,ba=new H,Pd=new H;class Ff{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Mb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ba.subVectors(e,this.center);const n=ba.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ba,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ba.copy(e.center).add(Pd)),this.expandByPoint(ba.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Eb=0;const Hn=new kt,Ld=new un,vs=new H,Rn=new wo,wa=new wo,qt=new H;class jn extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(VS(e)?Jg:Zg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return Ld.lookAt(e),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ot(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ff);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const l=n[s];wa.setFromBufferAttribute(l),this.morphTargetsRelative?(qt.addVectors(Rn.min,wa.min),Rn.expandByPoint(qt),qt.addVectors(Rn.max,wa.max),Rn.expandByPoint(qt)):(Rn.expandByPoint(wa.min),Rn.expandByPoint(wa.max))}Rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(n)for(let s=0,o=n.length;s<o;s++){const l=n[s],c=this.morphTargetsRelative;for(let d=0,f=l.count;d<f;d++)qt.fromBufferAttribute(l,d),c&&(vs.fromBufferAttribute(e,d),qt.add(vs)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new zi(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const l=[],c=[];for(let x=0;x<i.count;x++)l[x]=new H,c[x]=new H;const d=new H,f=new H,p=new H,h=new Ke,g=new Ke,m=new Ke,w=new H,_=new H;function u(x,N,P){d.fromBufferAttribute(i,x),f.fromBufferAttribute(i,N),p.fromBufferAttribute(i,P),h.fromBufferAttribute(s,x),g.fromBufferAttribute(s,N),m.fromBufferAttribute(s,P),f.sub(d),p.sub(d),g.sub(h),m.sub(h);const D=1/(g.x*m.y-m.x*g.y);isFinite(D)&&(w.copy(f).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(D),_.copy(p).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(D),l[x].add(w),l[N].add(w),l[P].add(w),c[x].add(_),c[N].add(_),c[P].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,N=v.length;x<N;++x){const P=v[x],D=P.start,O=P.count;for(let V=D,U=D+O;V<U;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const E=new H,S=new H,T=new H,b=new H;function A(x){T.fromBufferAttribute(r,x),b.copy(T);const N=l[x];E.copy(N),E.sub(T.multiplyScalar(T.dot(N))).normalize(),S.crossVectors(b,N);const D=S.dot(c[x])<0?-1:1;o.setXYZW(x,E.x,E.y,E.z,D)}for(let x=0,N=v.length;x<N;++x){const P=v[x],D=P.start,O=P.count;for(let V=D,U=D+O;V<U;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new zi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,l=new H,c=new H,d=new H,f=new H,p=new H;if(e)for(let h=0,g=e.count;h<g;h+=3){const m=e.getX(h+0),w=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,w),o.fromBufferAttribute(n,_),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,w),d.fromBufferAttribute(i,_),l.add(f),c.add(f),d.add(f),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(w,c.x,c.y,c.z),i.setXYZ(_,d.x,d.y,d.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)qt.fromBufferAttribute(e,n),qt.normalize(),e.setXYZ(n,qt.x,qt.y,qt.z)}toNonIndexed(){function e(l,c){const d=l.array,f=l.itemSize,p=l.normalized,h=new d.constructor(c.length*f);let g=0,m=0;for(let w=0,_=c.length;w<_;w++){l.isInterleavedBufferAttribute?g=c[w]*l.data.stride+l.offset:g=c[w]*f;for(let u=0;u<f;u++)h[m++]=d[g++]}return new zi(h,f,p)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jn,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],d=e(c,i);n.setAttribute(l,d)}const s=this.morphAttributes;for(const l in s){const c=[],d=s[l];for(let f=0,p=d.length;f<p;f++){const h=d[f],g=e(h,i);c.push(g)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const d=o[l];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const d=i[c];e.data.attributes[c]=d.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],f=[];for(let p=0,h=d.length;p<h;p++){const g=d[p];f.push(g.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const d in r){const f=r[d];this.setAttribute(d,f.clone(n))}const s=e.morphAttributes;for(const d in s){const f=[],p=s[d];for(let h=0,g=p.length;h<g;h++)f.push(p[h].clone(n));this.morphAttributes[d]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let d=0,f=o.length;d<f;d++){const p=o[d];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dd=new H,Tb=new H,Nb=new Xe;class ar{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Dd.subVectors(i,n).cross(Tb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Dd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Nb.getNormalMatrix(e),r=this.coplanarPoint(Dd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Ab=0;class Mo extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=aa(),this.name="",this.type="Material",this.blending=Ga,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cg,this.blendDst=Rg,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=md,this.stencilZFail=md,this.stencilZPass=md,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const l in s){const c=s[l];delete c.metadata,o.push(c)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ar().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ke().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ri=new H,Id=new H,tl=new H,nl=new H;class Cb{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Id.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),nl.copy(this.origin).sub(Id);const s=e.distanceTo(n)*.5,o=-this.direction.dot(tl),l=nl.dot(this.direction),c=-nl.dot(tl),d=nl.lengthSq(),f=Math.abs(1-o*o);let p,h,g,m;if(f>0)if(p=o*c-l,h=o*l-c,m=s*f,p>=0)if(h>=-m)if(h<=m){const w=1/f;p*=w,h*=w,g=p*(p+o*h+2*l)+h*(o*p+h+2*c)+d}else h=s,p=Math.max(0,-(o*h+l)),g=-p*p+h*(h+2*c)+d;else h=-s,p=Math.max(0,-(o*h+l)),g=-p*p+h*(h+2*c)+d;else h<=-m?(p=Math.max(0,-(-o*s+l)),h=p>0?-s:Math.min(Math.max(-s,-c),s),g=-p*p+h*(h+2*c)+d):h<=m?(p=0,h=Math.min(Math.max(-s,-c),s),g=h*(h+2*c)+d):(p=Math.max(0,-(o*s+l)),h=p>0?s:Math.min(Math.max(-s,-c),s),g=-p*p+h*(h+2*c)+d);else h=o>0?-s:s,p=Math.max(0,-(o*h+l)),g=-p*p+h*(h+2*c)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Id).addScaledVector(tl,h),g}intersectSphere(e,n){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=i-o,c=i+o;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,l,c;const d=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return d>=0?(i=(e.min.x-h.x)*d,r=(e.max.x-h.x)*d):(i=(e.max.x-h.x)*d,r=(e.min.x-h.x)*d),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(l=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(l=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,i,r,s){const o=this.origin,l=this.direction,c=l.x,d=l.y,f=l.z,p=e.x-o.x,h=e.y-o.y,g=e.z-o.z,m=n.x-o.x,w=n.y-o.y,_=n.z-o.z,u=i.x-o.x,v=i.y-o.y,E=i.z-o.z,S=Math.abs(c),T=Math.abs(d),b=Math.abs(f);let A,x,N,P,D,O,V,U,I,ne,K,z;if(S>=T&&S>=b?(N=c,O=p,I=m,z=u,c>=0?(A=d,x=f,P=h,D=g,V=w,U=_,ne=v,K=E):(A=f,x=d,P=g,D=h,V=_,U=w,ne=E,K=v)):T>=b?(N=d,O=h,I=w,z=v,d>=0?(A=f,x=c,P=g,D=p,V=_,U=m,ne=E,K=u):(A=c,x=f,P=p,D=g,V=m,U=_,ne=u,K=E)):(N=f,O=g,I=_,z=E,f>=0?(A=c,x=d,P=p,D=h,V=m,U=w,ne=u,K=v):(A=d,x=c,P=h,D=p,V=w,U=m,ne=v,K=u)),N===0)return null;const j=A/N,W=x/N,Z=1/N,he=P-j*O,Se=D-W*O,He=V-j*I,Fe=U-W*I,Oe=ne-j*z,Q=K-W*z,re=Oe*Fe-Q*He,_e=he*Q-Se*Oe,se=He*Se-Fe*he;if(r){if(re<0||_e<0||se<0)return null}else if((re<0||_e<0||se<0)&&(re>0||_e>0||se>0))return null;const le=re+_e+se;if(le===0)return null;const De=Z*(re*O+_e*I+se*z);return(le>0?De<0:De>0)?null:this.at(De/le,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Br extends Mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=Pg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Am=new kt,Ir=new Cb,il=new Ff,Cm=new H,rl=new H,sl=new H,al=new H,kd=new H,ol=new H,Rm=new H,ll=new H;class lt extends un{constructor(e=new jn,n=new Br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){ol.set(0,0,0);for(let c=0,d=s.length;c<d;c++){const f=l[c],p=s[c];f!==0&&(kd.fromBufferAttribute(p,e),o?ol.addScaledVector(kd,f):ol.addScaledVector(kd.sub(n),f))}n.add(ol)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(s),Ir.copy(e.ray).recast(e.near),!(il.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(il,Cm)===null||Ir.origin.distanceToSquared(Cm)>(e.far-e.near)**2))&&(Am.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(Am),!(i.boundingBox!==null&&Ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,l=s.index,c=s.attributes.position,d=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,h=s.groups,g=s.drawRange;if(l!==null)if(Array.isArray(o))for(let m=0,w=h.length;m<w;m++){const _=h[m],u=o[_.materialIndex],v=Math.max(_.start,g.start),E=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let S=v,T=E;S<T;S+=3){const b=l.getX(S),A=l.getX(S+1),x=l.getX(S+2);r=cl(this,u,e,i,d,f,p,b,A,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const m=Math.max(0,g.start),w=Math.min(l.count,g.start+g.count);for(let _=m,u=w;_<u;_+=3){const v=l.getX(_),E=l.getX(_+1),S=l.getX(_+2);r=cl(this,o,e,i,d,f,p,v,E,S),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,w=h.length;m<w;m++){const _=h[m],u=o[_.materialIndex],v=Math.max(_.start,g.start),E=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let S=v,T=E;S<T;S+=3){const b=S,A=S+1,x=S+2;r=cl(this,u,e,i,d,f,p,b,A,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const m=Math.max(0,g.start),w=Math.min(c.count,g.start+g.count);for(let _=m,u=w;_<u;_+=3){const v=_,E=_+1,S=_+2;r=cl(this,o,e,i,d,f,p,v,E,S),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function Rb(t,e,n,i,r,s,o,l){let c;if(e.side===An?c=i.intersectTriangle(o,s,r,!0,l):c=i.intersectTriangle(r,s,o,e.side===es,l),c===null)return null;ll.copy(l),ll.applyMatrix4(t.matrixWorld);const d=n.ray.origin.distanceTo(ll);return d<n.near||d>n.far?null:{distance:d,point:ll.clone(),object:t}}function cl(t,e,n,i,r,s,o,l,c,d){t.getVertexPosition(l,rl),t.getVertexPosition(c,sl),t.getVertexPosition(d,al);const f=Rb(t,e,n,i,rl,sl,al,Rm);if(f){const p=new H;ri.getBarycoord(Rm,rl,sl,al,p),r&&(f.uv=ri.getInterpolatedAttribute(r,l,c,d,p,new Ke)),s&&(f.uv1=ri.getInterpolatedAttribute(s,l,c,d,p,new Ke)),o&&(f.normal=ri.getInterpolatedAttribute(o,l,c,d,p,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:l,b:c,c:d,normal:new H,materialIndex:0};ri.getNormal(rl,sl,al,h.normal),f.face=h,f.barycoord=p}return f}class Pb extends yn{constructor(e=null,n=1,i=1,r,s,o,l,c,d=Qt,f=Qt,p,h){super(null,o,l,c,d,f,r,s,p,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kr=new Ff,Lb=new Ke(.5,.5),dl=new H;class Of{constructor(e=new ar,n=new ar,i=new ar,r=new ar,s=new ar,o=new ar){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i,i=!1){const r=this.planes,s=e.elements,o=s[0],l=s[1],c=s[2],d=s[3],f=s[4],p=s[5],h=s[6],g=s[7],m=s[8],w=s[9],_=s[10],u=s[11],v=s[12],E=s[13],S=s[14],T=s[15];if(r[0].setComponents(d-o,g-f,u-m,T-v).normalize(),r[1].setComponents(d+o,g+f,u+m,T+v).normalize(),r[2].setComponents(d+l,g+p,u+w,T+E).normalize(),r[3].setComponents(d-l,g-p,u-w,T-E).normalize(),i)r[4].setComponents(c,h,_,S).normalize(),r[5].setComponents(d-c,g-h,u-_,T-S).normalize();else if(r[4].setComponents(d-c,g-h,u-_,T-S).normalize(),n===_i)r[5].setComponents(d+c,g+h,u+_,T+S).normalize();else if(n===mo)r[5].setComponents(c,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);const n=Lb.distanceTo(e.center);return kr.radius=.7071067811865476+n,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(dl.x=r.normal.x>0?e.max.x:e.min.x,dl.y=r.normal.y>0?e.max.y:e.min.y,dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qg extends yn{constructor(e=[],n=ts,i,r,s,o,l,c,d,f){super(e,n,i,r,s,o,l,c,d,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class go extends yn{constructor(e,n,i=wi,r,s,o,l=Qt,c=Qt,d,f=Xi,p=1){if(f!==Xi&&f!==Wr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:p};super(h,r,s,o,l,c,f,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Db extends go{constructor(e,n=wi,i=ts,r,s,o=Qt,l=Qt,c,d=Xi){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,l,c,d),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ev extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class At extends jn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],d=[],f=[],p=[];let h=0,g=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ot(d,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(p,2));function m(w,_,u,v,E,S,T,b,A,x,N){const P=S/A,D=T/x,O=S/2,V=T/2,U=b/2,I=A+1,ne=x+1;let K=0,z=0;const j=new H;for(let W=0;W<ne;W++){const Z=W*D-V;for(let he=0;he<I;he++){const Se=he*P-O;j[w]=Se*v,j[_]=Z*E,j[u]=U,d.push(j.x,j.y,j.z),j[w]=0,j[_]=0,j[u]=b>0?1:-1,f.push(j.x,j.y,j.z),p.push(he/A),p.push(1-W/x),K+=1}}for(let W=0;W<x;W++)for(let Z=0;Z<A;Z++){const he=h+Z+I*W,Se=h+Z+I*(W+1),He=h+(Z+1)+I*(W+1),Fe=h+(Z+1)+I*W;c.push(he,Se,Fe),c.push(Se,He,Fe),z+=6}l.addGroup(g,z,N),g+=z,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new At(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bf extends jn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],l=[],c=[],d=new H,f=new Ke;o.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let p=0,h=3;p<=n;p++,h+=3){const g=i+p/n*r;d.x=e*Math.cos(g),d.y=e*Math.sin(g),o.push(d.x,d.y,d.z),l.push(0,0,1),f.x=(o[h]/e+1)/2,f.y=(o[h+1]/e+1)/2,c.push(f.x,f.y)}for(let p=1;p<=n;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(l,3)),this.setAttribute("uv",new Ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class pc extends jn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:l,thetaLength:c};const d=this;r=Math.floor(r),s=Math.floor(s);const f=[],p=[],h=[],g=[];let m=0;const w=[],_=i/2;let u=0;v(),o===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(f),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(g,2));function v(){const S=new H,T=new H;let b=0;const A=(n-e)/i;for(let x=0;x<=s;x++){const N=[],P=x/s,D=P*(n-e)+e;for(let O=0;O<=r;O++){const V=O/r,U=V*c+l,I=Math.sin(U),ne=Math.cos(U);T.x=D*I,T.y=-P*i+_,T.z=D*ne,p.push(T.x,T.y,T.z),S.set(I,A,ne).normalize(),h.push(S.x,S.y,S.z),g.push(V,1-P),N.push(m++)}w.push(N)}for(let x=0;x<r;x++)for(let N=0;N<s;N++){const P=w[N][x],D=w[N+1][x],O=w[N+1][x+1],V=w[N][x+1];(e>0||N!==0)&&(f.push(P,D,V),b+=3),(n>0||N!==s-1)&&(f.push(D,O,V),b+=3)}d.addGroup(u,b,0),u+=b}function E(S){const T=m,b=new Ke,A=new H;let x=0;const N=S===!0?e:n,P=S===!0?1:-1;for(let O=1;O<=r;O++)p.push(0,_*P,0),h.push(0,P,0),g.push(.5,.5),m++;const D=m;for(let O=0;O<=r;O++){const U=O/r*c+l,I=Math.cos(U),ne=Math.sin(U);A.x=N*ne,A.y=_*P,A.z=N*I,p.push(A.x,A.y,A.z),h.push(0,P,0),b.x=I*.5+.5,b.y=ne*.5*P+.5,g.push(b.x,b.y),m++}for(let O=0;O<r;O++){const V=T+O,U=D+O;S===!0?f.push(U,U+1,V):f.push(U+1,U,V),x+=3}d.addGroup(u,x,S===!0?1:2),u+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ic extends jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,l=Math.floor(i),c=Math.floor(r),d=l+1,f=c+1,p=e/l,h=n/c,g=[],m=[],w=[],_=[];for(let u=0;u<f;u++){const v=u*h-o;for(let E=0;E<d;E++){const S=E*p-s;m.push(S,-v,0),w.push(0,0,1),_.push(E/l),_.push(1-u/c)}}for(let u=0;u<c;u++)for(let v=0;v<l;v++){const E=v+d*u,S=v+d*(u+1),T=v+1+d*(u+1),b=v+1+d*u;g.push(E,S,b),g.push(S,T,b)}this.setIndex(g),this.setAttribute("position",new Ot(m,3)),this.setAttribute("normal",new Ot(w,3)),this.setAttribute("uv",new Ot(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.width,e.height,e.widthSegments,e.heightSegments)}}class jf extends jn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const l=[],c=[],d=[],f=[];let p=e;const h=(n-e)/r,g=new H,m=new Ke;for(let w=0;w<=r;w++){for(let _=0;_<=i;_++){const u=s+_/i*o;g.x=p*Math.cos(u),g.y=p*Math.sin(u),c.push(g.x,g.y,g.z),d.push(0,0,1),m.x=(g.x/n+1)/2,m.y=(g.y/n+1)/2,f.push(m.x,m.y)}p+=h}for(let w=0;w<r;w++){const _=w*(i+1);for(let u=0;u<i;u++){const v=u+_,E=v,S=v+i+1,T=v+i+2,b=v+1;l.push(E,S,b),l.push(S,T,b)}}this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class zf extends jn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:l},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+l,Math.PI);let d=0;const f=[],p=new H,h=new H,g=[],m=[],w=[],_=[];for(let u=0;u<=i;u++){const v=[],E=u/i,S=o+E*l,T=e*Math.cos(S),b=Math.sqrt(e*e-T*T);let A=0;u===0&&o===0?A=.5/n:u===i&&c===Math.PI&&(A=-.5/n);for(let x=0;x<=n;x++){const N=x/n,P=r+N*s;p.x=-b*Math.cos(P),p.y=T,p.z=b*Math.sin(P),m.push(p.x,p.y,p.z),h.copy(p).normalize(),w.push(h.x,h.y,h.z),_.push(N+A,1-E),v.push(d++)}f.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const E=f[u][v+1],S=f[u][v],T=f[u+1][v],b=f[u+1][v+1];(u!==0||o>0)&&g.push(E,S,b),(u!==i-1||c<Math.PI)&&g.push(S,T,b)}this.setIndex(g),this.setAttribute("position",new Ot(m,3)),this.setAttribute("normal",new Ot(w,3)),this.setAttribute("uv",new Ot(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function na(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Pm(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Pm(r[0])){const s=[];for(let o=0,l=r.length;o<l;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function gn(t){const e={};for(let n=0;n<t.length;n++){const i=na(t[n]);for(const r in i)e[r]=i[r]}return e}function Pm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Ib(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function tv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const kb={clone:na,merge:gn};var Ub=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ub,this.fragmentShader=Fb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=Ib(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new rt().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ke().fromArray(r.value);break;case"v3":this.uniforms[i].value=new H().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new kt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ob extends Ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ir extends Mo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eh,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bb extends ir{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class jb extends Mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zb extends Mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hf extends un{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Ud=new kt,Lm=new H,Dm=new H;class nv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Of,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Lm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Lm),Dm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Dm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Ud.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ud,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,l=r?r.w/s.y:1,c=r?r.x/s.x:0,d=r?r.y/s.y:0;e.coordinateSystem===mo||e.reversedDepth?n.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+d,0,0,1,0,0,0,0,1):n.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+d,0,0,.5,.5,0,0,0,1),n.multiply(Ud)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ul=new H,hl=new oa,hi=new H;class iv extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ul,hl,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ul,hl,hi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(ul,hl,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ul,hl,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const nr=new H,Im=new Ke,km=new Ke;class Dn extends iv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(Wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,n){return this.getViewBounds(e,Im,km),n.subVectors(km,Im)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,d=o.fullHeight;s+=o.offsetX*r/c,n-=o.offsetY*i/d,r*=o.width/c,i*=o.height/d}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Hb extends nv{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0}}class Um extends Hf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Hb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Vf extends iv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,o=s+d*this.view.width,l-=f*this.view.offsetY,c=l-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Vb extends nv{constructor(){super(new Vf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fd extends Hf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new Vb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Gb extends Hf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const _s=-90,ys=1;class Wb extends un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(_s,ys,e,n);r.layers=this.layers,this.add(r);const s=new Dn(_s,ys,e,n);s.layers=this.layers,this.add(s);const o=new Dn(_s,ys,e,n);o.layers=this.layers,this.add(o);const l=new Dn(_s,ys,e,n);l.layers=this.layers,this.add(l);const c=new Dn(_s,ys,e,n);c.layers=this.layers,this.add(c);const d=new Dn(_s,ys,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,l,c]=n;for(const d of n)this.remove(d);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,c,d,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(p,h,g),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Xb extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class qb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ze("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const $f=class $f{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};$f.prototype.isMatrix2=!0;let Fm=$f;function Om(t,e,n,i){const r=$b(i);switch(n){case Gg:return t*e;case Xg:return t*e/r.components*r.byteLength;case Rf:return t*e/r.components*r.byteLength;case ns:return t*e*2/r.components*r.byteLength;case Pf:return t*e*2/r.components*r.byteLength;case Wg:return t*e*3/r.components*r.byteLength;case si:return t*e*4/r.components*r.byteLength;case Lf:return t*e*4/r.components*r.byteLength;case Ll:case Dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Il:case kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ku:case Ju:return Math.max(t,16)*Math.max(e,8)/4;case Yu:case Zu:return Math.max(t,8)*Math.max(e,8)/2;case Qu:case eh:case nh:case ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case th:case cc:case rh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ah:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case oh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case lh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ch:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case dh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case uh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case hh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case fh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ph:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case mh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case xh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case gh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case vh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case _h:case yh:case Sh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case bh:case wh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case dc:case Mh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function $b(t){switch(t){case In:case jg:return{byteLength:1,components:1};case fo:case zg:case Mi:return{byteLength:2,components:1};case Af:case Cf:return{byteLength:2,components:4};case wi:case Nf:case vi:return{byteLength:4,components:1};case Hg:case Vg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tf}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rv(){let t=null,e=!1,n=null,i=null;function r(s,o){i=t.requestAnimationFrame(r),n(s,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Yb(t){const e=new WeakMap;function n(l,c){const d=l.array,f=l.usage,p=d.byteLength,h=t.createBuffer();t.bindBuffer(c,h),t.bufferData(c,d,f),l.onUploadCallback();let g;if(d instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)g=t.HALF_FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=t.SHORT;else if(d instanceof Uint32Array)g=t.UNSIGNED_INT;else if(d instanceof Int32Array)g=t.INT;else if(d instanceof Int8Array)g=t.BYTE;else if(d instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:h,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:p}}function i(l,c,d){const f=c.array,p=c.updateRanges;if(t.bindBuffer(d,l),p.length===0)t.bufferSubData(d,0,f);else{p.sort((g,m)=>g.start-m.start);let h=0;for(let g=1;g<p.length;g++){const m=p[h],w=p[g];w.start<=m.start+m.count+1?m.count=Math.max(m.count,w.start+w.count-m.start):(++h,p[h]=w)}p.length=h+1;for(let g=0,m=p.length;g<m;g++){const w=p[g];t.bufferSubData(d,w.start*f.BYTES_PER_ELEMENT,f,w.start,w.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(t.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=e.get(l);(!f||f.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,n(l,c));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,l,c),d.version=l.version}}return{get:r,remove:s,update:o}}var Kb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,i1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,s1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,c1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,d1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,x1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,y1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,S1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T1="gl_FragColor = linearToOutputTexel( gl_FragColor );",N1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,P1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,D1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,O1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,H1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,V1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Y1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Z1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ew=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ow=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_w=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ww=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ew=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Tw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Aw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Dw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Iw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ow=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ww=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_M=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Kb,alphahash_pars_fragment:Zb,alphamap_fragment:Jb,alphamap_pars_fragment:Qb,alphatest_fragment:e1,alphatest_pars_fragment:t1,aomap_fragment:n1,aomap_pars_fragment:i1,batching_pars_vertex:r1,batching_vertex:s1,begin_vertex:a1,beginnormal_vertex:o1,bsdfs:l1,iridescence_fragment:c1,bumpmap_pars_fragment:d1,clipping_planes_fragment:u1,clipping_planes_pars_fragment:h1,clipping_planes_pars_vertex:f1,clipping_planes_vertex:p1,color_fragment:m1,color_pars_fragment:x1,color_pars_vertex:g1,color_vertex:v1,common:_1,cube_uv_reflection_fragment:y1,defaultnormal_vertex:S1,displacementmap_pars_vertex:b1,displacementmap_vertex:w1,emissivemap_fragment:M1,emissivemap_pars_fragment:E1,colorspace_fragment:T1,colorspace_pars_fragment:N1,envmap_fragment:A1,envmap_common_pars_fragment:C1,envmap_pars_fragment:R1,envmap_pars_vertex:P1,envmap_physical_pars_fragment:H1,envmap_vertex:L1,fog_vertex:D1,fog_pars_vertex:I1,fog_fragment:k1,fog_pars_fragment:U1,gradientmap_pars_fragment:F1,lightmap_pars_fragment:O1,lights_lambert_fragment:B1,lights_lambert_pars_fragment:j1,lights_pars_begin:z1,lights_toon_fragment:V1,lights_toon_pars_fragment:G1,lights_phong_fragment:W1,lights_phong_pars_fragment:X1,lights_physical_fragment:q1,lights_physical_pars_fragment:$1,lights_fragment_begin:Y1,lights_fragment_maps:K1,lights_fragment_end:Z1,lightprobes_pars_fragment:J1,logdepthbuf_fragment:Q1,logdepthbuf_pars_fragment:ew,logdepthbuf_pars_vertex:tw,logdepthbuf_vertex:nw,map_fragment:iw,map_pars_fragment:rw,map_particle_fragment:sw,map_particle_pars_fragment:aw,metalnessmap_fragment:ow,metalnessmap_pars_fragment:lw,morphinstance_vertex:cw,morphcolor_vertex:dw,morphnormal_vertex:uw,morphtarget_pars_vertex:hw,morphtarget_vertex:fw,normal_fragment_begin:pw,normal_fragment_maps:mw,normal_pars_fragment:xw,normal_pars_vertex:gw,normal_vertex:vw,normalmap_pars_fragment:_w,clearcoat_normal_fragment_begin:yw,clearcoat_normal_fragment_maps:Sw,clearcoat_pars_fragment:bw,iridescence_pars_fragment:ww,opaque_fragment:Mw,packing:Ew,premultiplied_alpha_fragment:Tw,project_vertex:Nw,dithering_fragment:Aw,dithering_pars_fragment:Cw,roughnessmap_fragment:Rw,roughnessmap_pars_fragment:Pw,shadowmap_pars_fragment:Lw,shadowmap_pars_vertex:Dw,shadowmap_vertex:Iw,shadowmask_pars_fragment:kw,skinbase_vertex:Uw,skinning_pars_vertex:Fw,skinning_vertex:Ow,skinnormal_vertex:Bw,specularmap_fragment:jw,specularmap_pars_fragment:zw,tonemapping_fragment:Hw,tonemapping_pars_fragment:Vw,transmission_fragment:Gw,transmission_pars_fragment:Ww,uv_pars_fragment:Xw,uv_pars_vertex:qw,uv_vertex:$w,worldpos_vertex:Yw,background_vert:Kw,background_frag:Zw,backgroundCube_vert:Jw,backgroundCube_frag:Qw,cube_vert:eM,cube_frag:tM,depth_vert:nM,depth_frag:iM,distance_vert:rM,distance_frag:sM,equirect_vert:aM,equirect_frag:oM,linedashed_vert:lM,linedashed_frag:cM,meshbasic_vert:dM,meshbasic_frag:uM,meshlambert_vert:hM,meshlambert_frag:fM,meshmatcap_vert:pM,meshmatcap_frag:mM,meshnormal_vert:xM,meshnormal_frag:gM,meshphong_vert:vM,meshphong_frag:_M,meshphysical_vert:yM,meshphysical_frag:SM,meshtoon_vert:bM,meshtoon_frag:wM,points_vert:MM,points_frag:EM,shadow_vert:TM,shadow_frag:NM,sprite_vert:AM,sprite_frag:CM},ve={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},mi={basic:{uniforms:gn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:gn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:gn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:gn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:gn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:gn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:gn([ve.points,ve.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:gn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:gn([ve.common,ve.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:gn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:gn([ve.sprite,ve.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:gn([ve.common,ve.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:gn([ve.lights,ve.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};mi.physical={uniforms:gn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const fl={r:0,b:0,g:0},RM=new kt,sv=new Xe;sv.set(-1,0,0,0,1,0,0,0,1);function PM(t,e,n,i,r,s){const o=new rt(0);let l=r===!0?0:1,c,d,f=null,p=0,h=null;function g(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){const S=v.backgroundBlurriness>0;E=e.get(E,S)}return E}function m(v){let E=!1;const S=g(v);S===null?_(o,l):S&&S.isColor&&(_(S,1),E=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function w(v,E){const S=g(E);S&&(S.isCubeTexture||S.mapping===Dc)?(d===void 0&&(d=new lt(new At(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:na(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=S,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(RM.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(sv),d.material.toneMapped=at.getTransfer(S.colorSpace)!==xt,(f!==S||p!==S.version||h!==t.toneMapping)&&(d.material.needsUpdate=!0,f=S,p=S.version,h=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new lt(new Ic(2,2),new Ei({name:"BackgroundMaterial",uniforms:na(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=at.getTransfer(S.colorSpace)!==xt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||p!==S.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,p=S.version,h=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function _(v,E){v.getRGB(fl,tv(t)),n.buffers.color.setClear(fl.r,fl.g,fl.b,E,s)}function u(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,E=1){o.set(v),l=E,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,_(o,l)},render:m,addToRenderList:w,dispose:u}}function LM(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function l(D,O,V,U,I){let ne=!1;const K=p(D,U,V,O);s!==K&&(s=K,d(s.object)),ne=g(D,U,V,I),ne&&m(D,U,V,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,S(D,O,V,U),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return t.createVertexArray()}function d(D){return t.bindVertexArray(D)}function f(D){return t.deleteVertexArray(D)}function p(D,O,V,U){const I=U.wireframe===!0;let ne=i[O.id];ne===void 0&&(ne={},i[O.id]=ne);const K=D.isInstancedMesh===!0?D.id:0;let z=ne[K];z===void 0&&(z={},ne[K]=z);let j=z[V.id];j===void 0&&(j={},z[V.id]=j);let W=j[I];return W===void 0&&(W=h(c()),j[I]=W),W}function h(D){const O=[],V=[],U=[];for(let I=0;I<n;I++)O[I]=0,V[I]=0,U[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:U,object:D,attributes:{},index:null}}function g(D,O,V,U){const I=s.attributes,ne=O.attributes;let K=0;const z=V.getAttributes();for(const j in z)if(z[j].location>=0){const Z=I[j];let he=ne[j];if(he===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(he=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(he=D.instanceColor)),Z===void 0||Z.attribute!==he||he&&Z.data!==he.data)return!0;K++}return s.attributesNum!==K||s.index!==U}function m(D,O,V,U){const I={},ne=O.attributes;let K=0;const z=V.getAttributes();for(const j in z)if(z[j].location>=0){let Z=ne[j];Z===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const he={};he.attribute=Z,Z&&Z.data&&(he.data=Z.data),I[j]=he,K++}s.attributes=I,s.attributesNum=K,s.index=U}function w(){const D=s.newAttributes;for(let O=0,V=D.length;O<V;O++)D[O]=0}function _(D){u(D,0)}function u(D,O){const V=s.newAttributes,U=s.enabledAttributes,I=s.attributeDivisors;V[D]=1,U[D]===0&&(t.enableVertexAttribArray(D),U[D]=1),I[D]!==O&&(t.vertexAttribDivisor(D,O),I[D]=O)}function v(){const D=s.newAttributes,O=s.enabledAttributes;for(let V=0,U=O.length;V<U;V++)O[V]!==D[V]&&(t.disableVertexAttribArray(V),O[V]=0)}function E(D,O,V,U,I,ne,K){K===!0?t.vertexAttribIPointer(D,O,V,I,ne):t.vertexAttribPointer(D,O,V,U,I,ne)}function S(D,O,V,U){w();const I=U.attributes,ne=V.getAttributes(),K=O.defaultAttributeValues;for(const z in ne){const j=ne[z];if(j.location>=0){let W=I[z];if(W===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(W=D.instanceColor)),W!==void 0){const Z=W.normalized,he=W.itemSize,Se=e.get(W);if(Se===void 0)continue;const He=Se.buffer,Fe=Se.type,Oe=Se.bytesPerElement,Q=Fe===t.INT||Fe===t.UNSIGNED_INT||W.gpuType===Nf;if(W.isInterleavedBufferAttribute){const re=W.data,_e=re.stride,se=W.offset;if(re.isInstancedInterleavedBuffer){for(let le=0;le<j.locationSize;le++)u(j.location+le,re.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let le=0;le<j.locationSize;le++)_(j.location+le);t.bindBuffer(t.ARRAY_BUFFER,He);for(let le=0;le<j.locationSize;le++)E(j.location+le,he/j.locationSize,Fe,Z,_e*Oe,(se+he/j.locationSize*le)*Oe,Q)}else{if(W.isInstancedBufferAttribute){for(let re=0;re<j.locationSize;re++)u(j.location+re,W.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let re=0;re<j.locationSize;re++)_(j.location+re);t.bindBuffer(t.ARRAY_BUFFER,He);for(let re=0;re<j.locationSize;re++)E(j.location+re,he/j.locationSize,Fe,Z,he*Oe,he/j.locationSize*re*Oe,Q)}}else if(K!==void 0){const Z=K[z];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(j.location,Z);break;case 3:t.vertexAttrib3fv(j.location,Z);break;case 4:t.vertexAttrib4fv(j.location,Z);break;default:t.vertexAttrib1fv(j.location,Z)}}}}v()}function T(){N();for(const D in i){const O=i[D];for(const V in O){const U=O[V];for(const I in U){const ne=U[I];for(const K in ne)f(ne[K].object),delete ne[K];delete U[I]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;const O=i[D.id];for(const V in O){const U=O[V];for(const I in U){const ne=U[I];for(const K in ne)f(ne[K].object),delete ne[K];delete U[I]}}delete i[D.id]}function A(D){for(const O in i){const V=i[O];for(const U in V){const I=V[U];if(I[D.id]===void 0)continue;const ne=I[D.id];for(const K in ne)f(ne[K].object),delete ne[K];delete I[D.id]}}}function x(D){for(const O in i){const V=i[O],U=D.isInstancedMesh===!0?D.id:0,I=V[U];if(I!==void 0){for(const ne in I){const K=I[ne];for(const z in K)f(K[z].object),delete K[z];delete I[ne]}delete V[U],Object.keys(V).length===0&&delete i[O]}}}function N(){P(),o=!0,s!==r&&(s=r,d(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:N,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:w,enableAttribute:_,disableUnusedAttributes:v}}function DM(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function l(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let h=0;for(let g=0;g<f;g++)h+=d[g];n.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=l}function IM(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==si&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(A){const x=A===Mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==In&&A!==vi&&!x&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const f=c(d);f!==d&&(ze("WebGLRenderer:",d,"not supported, using",f,"instead."),d=f);const p=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:m,maxTextureSize:w,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:S,maxSamples:T,samples:b}}function kM(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ar,l=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const g=p.length!==0||h||i!==0||r;return r=h,i=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=f(p,h,0)},this.setState=function(p,h,g){const m=p.clippingPlanes,w=p.clipIntersection,_=p.clipShadows,u=t.get(p);if(!r||m===null||m.length===0||s&&!_)s?f(null):d();else{const v=s?0:i,E=v*4;let S=u.clippingState||null;c.value=S,S=f(m,h,E,g);for(let T=0;T!==E;++T)S[T]=n[T];u.clippingState=S,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=v}};function d(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,g,m){const w=p!==null?p.length:0;let _=null;if(w!==0){if(_=c.value,m!==!0||_===null){const u=g+w*4,v=h.matrixWorldInverse;l.getNormalMatrix(v),(_===null||_.length<u)&&(_=new Float32Array(u));for(let E=0,S=g;E!==w;++E,S+=4)o.copy(p[E]).applyMatrix4(v,l),o.normal.toArray(_,S),_[S+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}const Fs=4,UM=6,FM=20,OM=256,Ma=new Vf,Bm=new rt;let Od=null,Bd=0,jd=0,zd=!1;const BM=new H,Ur=new H;class jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:l=BM}=s;Od=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,l),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Od,Bd,jd),this._renderer.xr.enabled=zd,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ts||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Od=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Mi,format:si,colorSpace:uc,depthBuffer:!1},r=zm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=jM(s)),this._blurMaterial=HM(s,e,n),this._ggxMaterial=zM(s,e,n)}return r}_compileMaterial(e){const n=new lt(new jn,e);this._renderer.compile(n,Ma)}_sceneToCubeUV(e,n,i,r,s){const c=new Dn(90,1,n,i),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,g=p.toneMapping;p.getClearColor(Bm),p.toneMapping=bi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new At,new Br({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,_=w.material;let u=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,u=!0):(_.color.copy(Bm),u=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(c.up.set(0,d[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[E],s.y,s.z)):S===1?(c.up.set(0,0,d[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[E],s.z)):(c.up.set(0,d[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[E]));const T=this._cubeSize;Ss(r,S*T,E>2?T:0,T,T),p.setRenderTarget(r),u&&p.render(w,c),p.render(e,c)}p.toneMapping=g,p.autoClear=h,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ts||e.mapping===ta;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;Ss(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,Ma)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms,d=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(d*d-f*f),h=d*1.25,g=p*h,{_lodMax:m}=this,w=this._sizeLods[i],_=3*w*(i>m-Fs?i-m+Fs:0),u=4*(this._cubeSize-w);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=m-n,Ss(s,_,u,3*w,2*w),r.setRenderTarget(s),r.render(l,Ma),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-i,Ss(e,_,u,3*w,2*w),r.setRenderTarget(e),r.render(l,Ma)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,n,i,r,s){const o=this._renderer,l=this._blurMaterial,c=this._lodMeshes[r];c.material=l;const d=l.uniforms;d.envMap.value=e.texture,d.sigma.value=s,d.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],p=3*f*(r>this._lodMax-Fs?r-this._lodMax+Fs:0),h=4*(this._cubeSize-f);Ss(n,p,h,3*f,2*f),o.setRenderTarget(n),o.render(c,Ma)}}function jM(t){const e=[],n=[];let i=t;const r=t-Fs+1+UM;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const l=1/(o-2),c=-l,d=1+l,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,h=6,g=3,m=new Float32Array(g*h*p),w=new Float32Array(g*h*p);for(let u=0;u<p;u++){const v=u%3*2/3-1,E=u>2?0:-1,S=[v,E,0,v+2/3,E,0,v+2/3,E+1,0,v,E,0,v+2/3,E+1,0,v,E+1,0];m.set(S,g*h*u);for(let T=0;T<h;T++){const b=f[T*2]*2-1,A=f[T*2+1]*2-1;u===0?Ur.set(1,A,b):u===1?Ur.set(-b,1,-A):u===2?Ur.set(-b,A,1):u===3?Ur.set(-1,A,-b):u===4?Ur.set(-b,-1,A):Ur.set(b,A,-1),Ur.toArray(w,(u*h+T)*g)}}const _=new jn;_.setAttribute("position",new zi(m,g)),_.setAttribute("outputDirection",new zi(w,g)),n.push(new lt(_,null)),i>Fs&&i--}return{lodMeshes:n,sizeLods:e}}function zm(t,e,n){const i=new li(t,e,n);return i.texture.mapping=Dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function zM(t,e,n){return new Ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function HM(t,e,n){return new Ei({name:"SphericalGaussianBlur",defines:{SAMPLES:FM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Hm(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Vm(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class av extends li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Qg(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new At(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:na(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:Bi});s.uniforms.tEquirect.value=n;const o=new lt(r,s),l=n.minFilter;return n.minFilter===Gr&&(n.minFilter=dn),new Wb(1,10,this).update(e,o),n.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function VM(t){let e=new WeakMap,n=new WeakMap,i=null;function r(h,g=!1){return h==null?null:g?o(h):s(h)}function s(h){if(h&&h.isTexture){const g=h.mapping;if(g===hd||g===fd)if(e.has(h)){const m=e.get(h).texture;return l(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const w=new av(m.height);return w.fromEquirectangularTexture(t,h),e.set(h,w),h.addEventListener("dispose",d),l(w.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const g=h.mapping,m=g===hd||g===fd,w=g===ts||g===ta;if(m||w){let _=n.get(h);const u=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return i===null&&(i=new jm(t)),_=m?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,n.set(h,_),_.texture;if(_!==void 0)return _.texture;{const v=h.image;return m&&v&&v.height>0||w&&v&&c(v)?(i===null&&(i=new jm(t)),_=m?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,n.set(h,_),h.addEventListener("dispose",f),_.texture):null}}}return h}function l(h,g){return g===hd?h.mapping=ts:g===fd&&(h.mapping=ta),h}function c(h){let g=0;const m=6;for(let w=0;w<m;w++)h[w]!==void 0&&g++;return g===m}function d(h){const g=h.target;g.removeEventListener("dispose",d);const m=e.get(g);m!==void 0&&(e.delete(g),m.dispose())}function f(h){const g=h.target;g.removeEventListener("dispose",f);const m=n.get(g);m!==void 0&&(n.delete(g),m.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function GM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Xs("WebGLRenderer: "+i+" extension not supported."),r}}}function WM(t,e,n,i){const r={},s=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function l(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function c(p){const h=p.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER)}function d(p){const h=[],g=p.index,m=p.attributes.position;let w=0;if(m===void 0)return;if(g!==null){const v=g.array;w=g.version;for(let E=0,S=v.length;E<S;E+=3){const T=v[E+0],b=v[E+1],A=v[E+2];h.push(T,b,b,A,A,T)}}else{const v=m.array;w=m.version;for(let E=0,S=v.length/3-1;E<S;E+=3){const T=E+0,b=E+1,A=E+2;h.push(T,b,b,A,A,T)}}const _=new(m.count>=65535?Jg:Zg)(h,1);_.version=w;const u=s.get(p);u&&e.remove(u),s.set(p,_)}function f(p){const h=s.get(p);if(h){const g=p.index;g!==null&&h.version<g.version&&d(p)}else d(p);return s.get(p)}return{get:l,update:c,getWireframeAttribute:f}}function XM(t,e,n){let i;function r(p){i=p}let s,o;function l(p){s=p.type,o=p.bytesPerElement}function c(p,h){t.drawElements(i,h,s,p*o),n.update(h,i,1)}function d(p,h,g){g!==0&&(t.drawElementsInstanced(i,h,s,p*o,g),n.update(h,i,g))}function f(p,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,p,0,g);let w=0;for(let _=0;_<g;_++)w+=h[_];n.update(w,i,1)}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=f}function qM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,l){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:ht("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function $M(t,e,n){const i=new WeakMap,r=new Pt;function s(o,l,c){const d=o.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=f!==void 0?f.length:0;let h=i.get(l);if(h===void 0||h.count!==p){let P=function(){x.dispose(),i.delete(l),l.removeEventListener("dispose",P)};var g=P;h!==void 0&&h.texture.dispose();const m=l.morphAttributes.position!==void 0,w=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,u=l.morphAttributes.position||[],v=l.morphAttributes.normal||[],E=l.morphAttributes.color||[];let S=0;m===!0&&(S=1),w===!0&&(S=2),_===!0&&(S=3);let T=l.attributes.position.count*S,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*b*4*p),x=new $g(A,T,b,p);x.type=vi,x.needsUpdate=!0;const N=S*4;for(let D=0;D<p;D++){const O=u[D],V=v[D],U=E[D],I=T*b*4*D;for(let ne=0;ne<O.count;ne++){const K=ne*N;m===!0&&(r.fromBufferAttribute(O,ne),A[I+K+0]=r.x,A[I+K+1]=r.y,A[I+K+2]=r.z,A[I+K+3]=0),w===!0&&(r.fromBufferAttribute(V,ne),A[I+K+4]=r.x,A[I+K+5]=r.y,A[I+K+6]=r.z,A[I+K+7]=0),_===!0&&(r.fromBufferAttribute(U,ne),A[I+K+8]=r.x,A[I+K+9]=r.y,A[I+K+10]=r.z,A[I+K+11]=U.itemSize===4?r.w:1)}}h={count:p,texture:x,size:new Ke(T,b)},i.set(l,h),l.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let _=0;_<d.length;_++)m+=d[_];const w=l.morphTargetsRelative?1:1-m;c.getUniforms().setValue(t,"morphTargetBaseInfluence",w),c.getUniforms().setValue(t,"morphTargetInfluences",d)}c.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function YM(t,e,n,i,r){let s=new WeakMap;function o(d){const f=r.render.frame,p=d.geometry,h=e.get(d,p);if(s.get(h)!==f&&(e.update(h),s.set(h,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),s.get(d)!==f&&(n.update(d.instanceMatrix,t.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,t.ARRAY_BUFFER),s.set(d,f))),d.isSkinnedMesh){const g=d.skeleton;s.get(g)!==f&&(g.update(),s.set(g,f))}return h}function l(){s=new WeakMap}function c(d){const f=d.target;f.removeEventListener("dispose",c),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:l}}const KM={[Lg]:"LINEAR_TONE_MAPPING",[Dg]:"REINHARD_TONE_MAPPING",[Ig]:"CINEON_TONE_MAPPING",[kg]:"ACES_FILMIC_TONE_MAPPING",[Fg]:"AGX_TONE_MAPPING",[Og]:"NEUTRAL_TONE_MAPPING",[Ug]:"CUSTOM_TONE_MAPPING"};function ZM(t,e,n,i,r,s){const o=new li(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,c=null;const d=new jn;d.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ot([0,2,0,0,2,0],2));const f=new Ob({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new lt(d,f),h=new Vf(-1,1,1,-1,0,1);let g=null,m=null,w=!1,_,u=null,v=[],E=!1;this.setSize=function(S,T){o.setSize(S,T),l!==null&&l.setSize(S,T),c!==null&&c.setSize(S,T);for(let b=0;b<v.length;b++){const A=v[b];A.setSize&&A.setSize(S,T)}},this.setEffects=function(S){v=S,E=v.length>0&&v[0].isRenderPass===!0;const T=o.width,b=o.height;v.length>0&&l===null&&(l=new li(T,b,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),c=new li(T,b,{type:Mi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){const x=v[A];x.setSize&&x.setSize(T,b)}},this.begin=function(S,T){if(w||S.toneMapping===bi&&v.length===0)return!1;if(u=T,T!==null){const b=T.width,A=T.height;(o.width!==b||o.height!==A)&&this.setSize(b,A)}return E===!1&&S.setRenderTarget(o),_=S.toneMapping,S.toneMapping=bi,!0},this.hasRenderPass=function(){return E},this.end=function(S,T){S.toneMapping=_,w=!0;let b=o,A=l;for(let x=0;x<v.length;x++){const N=v[x];N.enabled!==!1&&(N.render(S,A,b,T),N.needsSwap!==!1&&(b=A,A=A===l?c:l))}if(g!==S.outputColorSpace||m!==S.toneMapping){g=S.outputColorSpace,m=S.toneMapping,f.defines={},at.getTransfer(g)===xt&&(f.defines.SRGB_TRANSFER="");const x=KM[m];x&&(f.defines[x]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(u),S.render(p,h),u=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),d.dispose(),f.dispose()}}const ov=new yn,Th=new go(1,1),lv=new $g,cv=new pb,dv=new Qg,Gm=[],Wm=[],Xm=new Float32Array(16),qm=new Float32Array(9),$m=new Float32Array(4);function la(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Gm[r];if(s===void 0&&(s=new Float32Array(r),Gm[r]=s),e!==0){i.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=n,t[o].toArray(s,l)}return s}function Wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Uc(t,e){let n=Wm[e];n===void 0&&(n=new Int32Array(e),Wm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function JM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function QM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function eE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Wt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function tE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function nE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;$m.set(i),t.uniformMatrix2fv(this.addr,!1,$m),Xt(n,i)}}function iE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;qm.set(i),t.uniformMatrix3fv(this.addr,!1,qm),Xt(n,i)}}function rE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;Xm.set(i),t.uniformMatrix4fv(this.addr,!1,Xm),Xt(n,i)}}function sE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function aE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function oE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function lE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function cE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function dE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function uE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function hE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function fE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Th.compareFunction=n.isReversedDepthBuffer()?If:Df,s=Th):s=ov,n.setTexture2D(e||s,r)}function pE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||cv,r)}function mE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||dv,r)}function xE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||lv,r)}function gE(t){switch(t){case 5126:return JM;case 35664:return QM;case 35665:return eE;case 35666:return tE;case 35674:return nE;case 35675:return iE;case 35676:return rE;case 5124:case 35670:return sE;case 35667:case 35671:return aE;case 35668:case 35672:return oE;case 35669:case 35673:return lE;case 5125:return cE;case 36294:return dE;case 36295:return uE;case 36296:return hE;case 35678:case 36198:case 36298:case 36306:case 35682:return fE;case 35679:case 36299:case 36307:return pE;case 35680:case 36300:case 36308:case 36293:return mE;case 36289:case 36303:case 36311:case 36292:return xE}}function vE(t,e){t.uniform1fv(this.addr,e)}function _E(t,e){const n=la(e,this.size,2);t.uniform2fv(this.addr,n)}function yE(t,e){const n=la(e,this.size,3);t.uniform3fv(this.addr,n)}function SE(t,e){const n=la(e,this.size,4);t.uniform4fv(this.addr,n)}function bE(t,e){const n=la(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function wE(t,e){const n=la(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ME(t,e){const n=la(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function EE(t,e){t.uniform1iv(this.addr,e)}function TE(t,e){t.uniform2iv(this.addr,e)}function NE(t,e){t.uniform3iv(this.addr,e)}function AE(t,e){t.uniform4iv(this.addr,e)}function CE(t,e){t.uniform1uiv(this.addr,e)}function RE(t,e){t.uniform2uiv(this.addr,e)}function PE(t,e){t.uniform3uiv(this.addr,e)}function LE(t,e){t.uniform4uiv(this.addr,e)}function DE(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Th:o=ov;for(let l=0;l!==r;++l)n.setTexture2D(e[l]||o,s[l])}function IE(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||cv,s[o])}function kE(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||dv,s[o])}function UE(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||lv,s[o])}function FE(t){switch(t){case 5126:return vE;case 35664:return _E;case 35665:return yE;case 35666:return SE;case 35674:return bE;case 35675:return wE;case 35676:return ME;case 5124:case 35670:return EE;case 35667:case 35671:return TE;case 35668:case 35672:return NE;case 35669:case 35673:return AE;case 5125:return CE;case 36294:return RE;case 36295:return PE;case 36296:return LE;case 35678:case 36198:case 36298:case 36306:case 35682:return DE;case 35679:case 36299:case 36307:return IE;case 35680:case 36300:case 36308:case 36293:return kE;case 36289:case 36303:case 36311:case 36292:return UE}}class OE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=gE(n.type)}}class BE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=FE(n.type)}}class jE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const Hd=/(\w+)(\])?(\[|\.)?/g;function Ym(t,e){t.seq.push(e),t.map[e.id]=e}function zE(t,e,n){const i=t.name,r=i.length;for(Hd.lastIndex=0;;){const s=Hd.exec(i),o=Hd.lastIndex;let l=s[1];const c=s[2]==="]",d=s[3];if(c&&(l=l|0),d===void 0||d==="["&&o+2===r){Ym(n,d===void 0?new OE(l,t,e):new BE(l,t,e));break}else{let p=n.map[l];p===void 0&&(p=new jE(l),Ym(n,p)),n=p}}}class Ul{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const l=e.getActiveUniform(n,o),c=e.getUniformLocation(n,l.name);zE(l,c,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const l=n[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Km(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const HE=37297;let VE=0;function GE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const l=o+1;i.push(`${l===e?">":" "} ${l}: ${n[o]}`)}return i.join(`
`)}const Zm=new Xe;function WE(t){at._getMatrix(Zm,at.workingColorSpace,t);const e=`mat3( ${Zm.elements.map(n=>n.toFixed(4))} )`;switch(at.getTransfer(t)){case hc:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Jm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const l=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+GE(t.getShaderSource(e),l)}else return s}function XE(t,e){const n=WE(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const qE={[Lg]:"Linear",[Dg]:"Reinhard",[Ig]:"Cineon",[kg]:"ACESFilmic",[Fg]:"AgX",[Og]:"Neutral",[Ug]:"Custom"};function $E(t,e){const n=qE[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pl=new H;function YE(){at.getLuminanceCoefficients(pl);const t=pl.x.toFixed(4),e=pl.y.toFixed(4),n=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function ZE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function JE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:l}}return n}function Ia(t){return t!==""}function Qm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function e0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(t){return t.replace(QE,t2)}const e2=new Map;function t2(t,e){let n=Ye[e];if(n===void 0){const i=e2.get(e);if(i!==void 0)n=Ye[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Nh(n)}const n2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t0(t){return t.replace(n2,i2)}function i2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function n0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const r2={[Pl]:"SHADOWMAP_TYPE_PCF",[La]:"SHADOWMAP_TYPE_VSM"};function s2(t){return r2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const a2={[ts]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE",[Dc]:"ENVMAP_TYPE_CUBE_UV"};function o2(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":a2[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const l2={[ta]:"ENVMAP_MODE_REFRACTION"};function c2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":l2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const d2={[Pg]:"ENVMAP_BLENDING_MULTIPLY",[RS]:"ENVMAP_BLENDING_MIX",[PS]:"ENVMAP_BLENDING_ADD"};function u2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":d2[t.combine]||"ENVMAP_BLENDING_NONE"}function h2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function f2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,l=n.fragmentShader;const c=s2(n),d=o2(n),f=c2(n),p=u2(n),h=h2(n),g=KE(n),m=ZE(s),w=r.createProgram();let _,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Ia).join(`
`),_.length>0&&(_+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Ia).join(`
`),u.length>0&&(u+=`
`)):(_=[n0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),u=[n0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bi?"#define TONE_MAPPING":"",n.toneMapping!==bi?Ye.tonemapping_pars_fragment:"",n.toneMapping!==bi?$E("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,XE("linearToOutputTexel",n.outputColorSpace),YE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ia).join(`
`)),o=Nh(o),o=Qm(o,n),o=e0(o,n),l=Nh(l),l=Qm(l,n),l=e0(l,n),o=t0(o),l=t0(l),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,u=["#define varying in",n.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=v+_+o,S=v+u+l,T=Km(r,r.VERTEX_SHADER,E),b=Km(r,r.FRAGMENT_SHADER,S);r.attachShader(w,T),r.attachShader(w,b),n.index0AttributeName!==void 0?r.bindAttribLocation(w,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function A(D){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(w)||"",V=r.getShaderInfoLog(T)||"",U=r.getShaderInfoLog(b)||"",I=O.trim(),ne=V.trim(),K=U.trim();let z=!0,j=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,w,T,b);else{const W=Jm(r,T,"vertex"),Z=Jm(r,b,"fragment");ht("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+W+`
`+Z)}else I!==""?ze("WebGLProgram: Program Info Log:",I):(ne===""||K==="")&&(j=!1);j&&(D.diagnostics={runnable:z,programLog:I,vertexShader:{log:ne,prefix:_},fragmentShader:{log:K,prefix:u}})}r.deleteShader(T),r.deleteShader(b),x=new Ul(r,w),N=JE(r,w)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let N;this.getAttributes=function(){return N===void 0&&A(this),N};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(w,HE)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=VE++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=T,this.fragmentShader=b,this}let p2=0;class m2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new x2(e),n.set(e,i)),i}}class x2{constructor(e){this.id=p2++,this.code=e,this.usedTimes=0}}function g2(t){return t===ns||t===cc||t===dc}function v2(t,e,n,i,r,s){const o=new Yg,l=new m2,c=new Set,d=[],f=new Map,p=i.logarithmicDepthBuffer;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function w(x,N,P,D,O,V){const U=D.fog,I=O.geometry,ne=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||ne,K),j=z&&z.mapping===Dc?z.image.height:null,W=g[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&ze("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const Z=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,he=Z!==void 0?Z.length:0;let Se=0;I.morphAttributes.position!==void 0&&(Se=1),I.morphAttributes.normal!==void 0&&(Se=2),I.morphAttributes.color!==void 0&&(Se=3);let He,Fe,Oe,Q;if(W){const ut=mi[W];He=ut.vertexShader,Fe=ut.fragmentShader}else{He=x.vertexShader,Fe=x.fragmentShader;const ut=l.getVertexShaderStage(x),it=l.getFragmentShaderStage(x);l.update(x,ut,it),Oe=ut.id,Q=it.id}const re=t.getRenderTarget(),_e=t.state.buffers.depth.getReversed(),se=O.isInstancedMesh===!0,le=O.isBatchedMesh===!0,De=!!x.map,dt=!!x.matcap,ke=!!z,Ge=!!x.aoMap,nt=!!x.lightMap,qe=!!x.bumpMap&&x.wireframe===!1,Ze=!!x.normalMap,Nt=!!x.displacementMap,We=!!x.emissiveMap,pt=!!x.metalnessMap,mt=!!x.roughnessMap,F=x.anisotropy>0,wt=x.clearcoat>0,Je=x.dispersion>0,C=x.retroreflectivity>0,y=x.iridescence>0,B=x.sheen>0,X=x.transmission>0,ee=F&&!!x.anisotropyMap,G=wt&&!!x.clearcoatMap,ae=wt&&!!x.clearcoatNormalMap,q=wt&&!!x.clearcoatRoughnessMap,te=y&&!!x.iridescenceMap,ce=y&&!!x.iridescenceThicknessMap,Ne=B&&!!x.sheenColorMap,xe=B&&!!x.sheenRoughnessMap,pe=!!x.specularMap,Ee=!!x.specularColorMap,Ue=!!x.specularIntensityMap,Ve=X&&!!x.transmissionMap,k=X&&!!x.thicknessMap,me=!!x.gradientMap,ie=!!x.alphaMap,fe=x.alphaTest>0,ge=!!x.alphaHash,oe=!!x.extensions;let we=bi;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(we=t.toneMapping);const Ae={shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:Fe,defines:x.defines,customVertexShaderID:Oe,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:le,batchingColor:le&&O._colorsTexture!==null,instancing:se,instancingColor:se&&O.instanceColor!==null,instancingMorph:se&&O.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:De,matcap:dt,envMap:ke,envMapMode:ke&&z.mapping,envMapCubeUVHeight:j,aoMap:Ge,lightMap:nt,bumpMap:qe,normalMap:Ze,displacementMap:Nt,emissiveMap:We,normalMapObjectSpace:Ze&&x.normalMapType===IS,normalMapTangentSpace:Ze&&x.normalMapType===Eh,packedNormalMap:Ze&&x.normalMapType===Eh&&g2(x.normalMap.format),metalnessMap:pt,roughnessMap:mt,anisotropy:F,anisotropyMap:ee,clearcoat:wt,clearcoatMap:G,clearcoatNormalMap:ae,clearcoatRoughnessMap:q,dispersion:Je,retroreflection:C,iridescence:y,iridescenceMap:te,iridescenceThicknessMap:ce,sheen:B,sheenColorMap:Ne,sheenRoughnessMap:xe,specularMap:pe,specularColorMap:Ee,specularIntensityMap:Ue,transmission:X,transmissionMap:Ve,thicknessMap:k,gradientMap:me,opaque:x.transparent===!1&&x.blending===Ga&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:fe,alphaHash:ge,combine:x.combine,mapUv:De&&m(x.map.channel),aoMapUv:Ge&&m(x.aoMap.channel),lightMapUv:nt&&m(x.lightMap.channel),bumpMapUv:qe&&m(x.bumpMap.channel),normalMapUv:Ze&&m(x.normalMap.channel),displacementMapUv:Nt&&m(x.displacementMap.channel),emissiveMapUv:We&&m(x.emissiveMap.channel),metalnessMapUv:pt&&m(x.metalnessMap.channel),roughnessMapUv:mt&&m(x.roughnessMap.channel),anisotropyMapUv:ee&&m(x.anisotropyMap.channel),clearcoatMapUv:G&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(x.sheenRoughnessMap.channel),specularMapUv:pe&&m(x.specularMap.channel),specularColorMapUv:Ee&&m(x.specularColorMap.channel),specularIntensityMapUv:Ue&&m(x.specularIntensityMap.channel),transmissionMapUv:Ve&&m(x.transmissionMap.channel),thicknessMapUv:k&&m(x.thicknessMap.channel),alphaMapUv:ie&&m(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ze||F),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!I.attributes.uv&&(De||ie),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Ze===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:_e,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Se,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:we,decodeVideoTexture:De&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===xt,decodeVideoTextureEmissive:We&&x.emissiveMap.isVideoTexture===!0&&at.getTransfer(x.emissiveMap.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gi,flipSided:x.side===An,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:oe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&x.extensions.multiDraw===!0||le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function _(x){const N=[];if(x.shaderID?N.push(x.shaderID):(N.push(x.customVertexShaderID),N.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)N.push(P),N.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(u(N,x),v(N,x),N.push(t.outputColorSpace)),N.push(x.customProgramCacheKey),N.join()}function u(x,N){x.push(N.precision),x.push(N.outputColorSpace),x.push(N.envMapMode),x.push(N.envMapCubeUVHeight),x.push(N.mapUv),x.push(N.alphaMapUv),x.push(N.lightMapUv),x.push(N.aoMapUv),x.push(N.bumpMapUv),x.push(N.normalMapUv),x.push(N.displacementMapUv),x.push(N.emissiveMapUv),x.push(N.metalnessMapUv),x.push(N.roughnessMapUv),x.push(N.anisotropyMapUv),x.push(N.clearcoatMapUv),x.push(N.clearcoatNormalMapUv),x.push(N.clearcoatRoughnessMapUv),x.push(N.iridescenceMapUv),x.push(N.iridescenceThicknessMapUv),x.push(N.sheenColorMapUv),x.push(N.sheenRoughnessMapUv),x.push(N.specularMapUv),x.push(N.specularColorMapUv),x.push(N.specularIntensityMapUv),x.push(N.transmissionMapUv),x.push(N.thicknessMapUv),x.push(N.combine),x.push(N.fogExp2),x.push(N.sizeAttenuation),x.push(N.morphTargetsCount),x.push(N.morphAttributeCount),x.push(N.numSunLights),x.push(N.numDirLights),x.push(N.numPointLights),x.push(N.numSpotLights),x.push(N.numSpotLightMaps),x.push(N.numHemiLights),x.push(N.numRectAreaLights),x.push(N.numSunLightShadows),x.push(N.numDirLightShadows),x.push(N.numPointLightShadows),x.push(N.numSpotLightShadows),x.push(N.numSpotLightShadowsWithMaps),x.push(N.numLightProbes),x.push(N.shadowMapType),x.push(N.toneMapping),x.push(N.numClippingPlanes),x.push(N.numClipIntersection),x.push(N.depthPacking)}function v(x,N){o.disableAll(),N.instancing&&o.enable(0),N.instancingColor&&o.enable(1),N.instancingMorph&&o.enable(2),N.matcap&&o.enable(3),N.envMap&&o.enable(4),N.normalMapObjectSpace&&o.enable(5),N.normalMapTangentSpace&&o.enable(6),N.clearcoat&&o.enable(7),N.iridescence&&o.enable(8),N.alphaTest&&o.enable(9),N.vertexColors&&o.enable(10),N.vertexAlphas&&o.enable(11),N.vertexUv1s&&o.enable(12),N.vertexUv2s&&o.enable(13),N.vertexUv3s&&o.enable(14),N.vertexTangents&&o.enable(15),N.anisotropy&&o.enable(16),N.alphaHash&&o.enable(17),N.batching&&o.enable(18),N.dispersion&&o.enable(19),N.retroreflection&&o.enable(24),N.batchingColor&&o.enable(20),N.gradientMap&&o.enable(21),N.packedNormalMap&&o.enable(22),N.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),N.fog&&o.enable(0),N.useFog&&o.enable(1),N.flatShading&&o.enable(2),N.logarithmicDepthBuffer&&o.enable(3),N.reversedDepthBuffer&&o.enable(4),N.skinning&&o.enable(5),N.morphTargets&&o.enable(6),N.morphNormals&&o.enable(7),N.morphColors&&o.enable(8),N.premultipliedAlpha&&o.enable(9),N.shadowMapEnabled&&o.enable(10),N.doubleSided&&o.enable(11),N.flipSided&&o.enable(12),N.useDepthPacking&&o.enable(13),N.dithering&&o.enable(14),N.transmission&&o.enable(15),N.sheen&&o.enable(16),N.opaque&&o.enable(17),N.pointsUvs&&o.enable(18),N.decodeVideoTexture&&o.enable(19),N.decodeVideoTextureEmissive&&o.enable(20),N.alphaToCoverage&&o.enable(21),N.numLightProbeGrids>0&&o.enable(22),N.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function E(x){const N=g[x.type];let P;if(N){const D=mi[N];P=kb.clone(D.uniforms)}else P=x.uniforms;return P}function S(x,N){let P=f.get(N);return P!==void 0?++P.usedTimes:(P=new f2(t,N,x,r),d.push(P),f.set(N,P)),P}function T(x){if(--x.usedTimes===0){const N=d.indexOf(x);d[N]=d[d.length-1],d.pop(),f.delete(x.cacheKey),x.destroy()}}function b(x){l.remove(x)}function A(){l.dispose()}return{getParameters:w,getProgramCacheKey:_,getUniforms:E,acquireProgram:S,releaseProgram:T,releaseShaderCache:b,programs:d,dispose:A}}function _2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let l=t.get(o);return l===void 0&&(l={},t.set(o,l)),l}function i(o){t.delete(o)}function r(o,l,c){t.get(o)[l]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function y2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function i0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function r0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function l(h,g,m,w,_,u){let v=t[e];return v===void 0?(v={id:h.id,object:h,geometry:g,material:m,materialVariant:o(h),groupOrder:w,renderOrder:h.renderOrder,z:_,group:u},t[e]=v):(v.id=h.id,v.object=h,v.geometry=g,v.material=m,v.materialVariant=o(h),v.groupOrder=w,v.renderOrder=h.renderOrder,v.z=_,v.group=u),e++,v}function c(h,g,m,w,_,u,v){v.reversedDepth===!0&&(_=-_);const E=l(h,g,m,w,_,u);m.transmission>0?i.push(E):m.transparent===!0?r.push(E):n.push(E)}function d(h,g,m,w,_,u){const v=l(h,g,m,w,_,u);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):n.unshift(v)}function f(h,g){n.length>1&&n.sort(h||y2),i.length>1&&i.sort(g||i0),r.length>1&&r.sort(g||i0)}function p(){for(let h=e,g=t.length;h<g;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:d,finish:p,sort:f}}function S2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new r0,t.set(i,[o])):r>=s.length?(o=new r0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function b2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new H,color:new rt};break;case"SpotLight":n={position:new H,direction:new H,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function w2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let M2=0;function E2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function T2(t){const e=new b2,n=w2(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new H);const r=new H,s=new kt,o=new kt;function l(d){let f=0,p=0,h=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let g=0,m=0,w=0,_=0,u=0,v=0,E=0,S=0,T=0,b=0,A=0,x=0,N=0,P=0;d.sort(E2);for(let O=0,V=d.length;O<V;O++){const U=d[O],I=U.color,ne=U.intensity,K=U.distance;let z=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===ns?z=U.shadow.map.texture:z=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)f+=I.r*ne,p+=I.g*ne,h+=I.b*ne;else if(U.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(U.sh.coefficients[j],ne);P++}else if(U.isSunLight){const j=e.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const W=U.shadow,Z=n.get(U);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[m]=Z,i.sunShadowMap[m]=z;const he=W.getViewportCount();for(let Se=0;Se<he;Se++)i.sunShadowMatrix[w+Se]=W.getMatrix(Se),i.sunShadowCascade[w+Se]=W._cascadeData[Se];w+=he,m++}i.sun[g]=j,g++}else if(U.isDirectionalLight){const j=e.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const W=U.shadow,Z=n.get(U);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,i.directionalShadow[_]=Z,i.directionalShadowMap[_]=z,i.directionalShadowMatrix[_]=U.shadow.matrix,T++}i.directional[_]=j,_++}else if(U.isSpotLight){const j=e.get(U);j.position.setFromMatrixPosition(U.matrixWorld),j.color.copy(I).multiplyScalar(ne),j.distance=K,j.coneCos=Math.cos(U.angle),j.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),j.decay=U.decay,i.spot[v]=j;const W=U.shadow;if(U.map&&(i.spotLightMap[x]=U.map,x++,W.updateMatrices(U),U.castShadow&&N++),i.spotLightMatrix[v]=W.matrix,U.castShadow){const Z=n.get(U);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,i.spotShadow[v]=Z,i.spotShadowMap[v]=z,A++}v++}else if(U.isRectAreaLight){const j=e.get(U);j.color.copy(I).multiplyScalar(ne),j.halfWidth.set(U.width*.5,0,0),j.halfHeight.set(0,U.height*.5,0),i.rectArea[E]=j,E++}else if(U.isPointLight){const j=e.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),j.distance=U.distance,j.decay=U.decay,U.castShadow){const W=U.shadow,Z=n.get(U);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,i.pointShadow[u]=Z,i.pointShadowMap[u]=z,i.pointShadowMatrix[u]=U.shadow.matrix,b++}i.point[u]=j,u++}else if(U.isHemisphereLight){const j=e.get(U);j.skyColor.copy(U.color).multiplyScalar(ne),j.groundColor.copy(U.groundColor).multiplyScalar(ne),i.hemi[S]=j,S++}}E>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=h;const D=i.hash;(D.sunLength!==g||D.directionalLength!==_||D.pointLength!==u||D.spotLength!==v||D.rectAreaLength!==E||D.hemiLength!==S||D.numSunShadows!==m||D.numDirectionalShadows!==T||D.numPointShadows!==b||D.numSpotShadows!==A||D.numSpotMaps!==x||D.numLightProbes!==P)&&(i.sun.length=g,i.directional.length=_,i.spot.length=v,i.rectArea.length=E,i.point.length=u,i.hemi.length=S,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=w,i.sunShadowCascade.length=w,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+x-N,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=P,D.sunLength=g,D.directionalLength=_,D.pointLength=u,D.spotLength=v,D.rectAreaLength=E,D.hemiLength=S,D.numSunShadows=m,D.numDirectionalShadows=T,D.numPointShadows=b,D.numSpotShadows=A,D.numSpotMaps=x,D.numLightProbes=P,i.version=M2++)}function c(d,f){let p=0,h=0,g=0,m=0,w=0,_=0;const u=f.matrixWorldInverse;for(let v=0,E=d.length;v<E;v++){const S=d[v];if(S.isSunLight){const T=i.sun[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(u),p++}else if(S.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(u),h++}else if(S.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(u),m++}else if(S.isRectAreaLight){const T=i.rectArea[w];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(u),o.identity(),s.copy(S.matrixWorld),s.premultiply(u),o.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),w++}else if(S.isPointLight){const T=i.point[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(u),g++}else if(S.isHemisphereLight){const T=i.hemi[_];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(u),_++}}}return{setup:l,setupView:c,state:i}}function s0(t){const e=new T2(t),n=[],i=[],r=[];function s(h){p.camera=h,n.length=0,i.length=0,r.length=0}function o(h){n.push(h)}function l(h){i.push(h)}function c(h){r.push(h)}function d(){e.setup(n)}function f(h){e.setupView(n,h)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:d,setupLightsView:f,pushLight:o,pushShadow:l,pushLightProbeGrid:c}}function N2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let l;return o===void 0?(l=new s0(t),e.set(r,[l])):s>=o.length?(l=new s0(t),o.push(l)):l=o[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}const A2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,R2=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],P2=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],a0=new kt,Ea=new H,Vd=new H;function L2(t,e,n){let i=new Of;const r=new Ke,s=new Ke,o=new Pt,l=new jb,c=new zb,d={},f=n.maxTextureSize,p={[es]:An,[An]:es,[gi]:gi},h=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:A2,fragmentShader:C2}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const m=new jn;m.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new lt(m,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let u=this.type;this.render=function(b,A,x){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||b.length===0)return;this.type===Ag&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pl);const N=t.getRenderTarget(),P=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Bi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=u!==this.type;V&&A.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(I=>I.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,I=b.length;U<I;U++){const ne=b[U],K=ne.shadow;if(K===void 0){ze("WebGLShadowMap:",ne,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const z=K.getFrameExtents();r.multiply(z),s.copy(K.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/z.x),r.x=s.x*z.x,K.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/z.y),r.y=s.y*z.y,K.mapSize.y=s.y));const j=t.state.buffers.depth.getReversed();if(K.camera._reversedDepth=j,K.map===null||V===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===La){if(ne.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new li(r.x,r.y,{format:ns,type:Mi,minFilter:dn,magFilter:dn,generateMipmaps:!1}),K.map.texture.name=ne.name+".shadowMap",K.map.depthTexture=new go(r.x,r.y,vi),K.map.depthTexture.name=ne.name+".shadowMapDepth",K.map.depthTexture.format=Xi,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Qt,K.map.depthTexture.magFilter=Qt}else ne.isPointLight?(K.map=new av(r.x),K.map.depthTexture=new Db(r.x,wi)):(K.map=new li(r.x,r.y),K.map.depthTexture=new go(r.x,r.y,wi)),K.map.depthTexture.name=ne.name+".shadowMap",K.map.depthTexture.format=Xi,this.type===Pl?(K.map.depthTexture.compareFunction=j?If:Df,K.map.depthTexture.minFilter=dn,K.map.depthTexture.magFilter=dn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Qt,K.map.depthTexture.magFilter=Qt);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==r.x||K.map.height!==r.y)&&K.map.setSize(r.x,r.y);const W=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();ne.isPointLight!==!0&&K.updateMatrices(ne,x);for(let Z=0;Z<W;Z++){const he=K.getCamera(Z);if(ne.isPointLight){const Se=K.camera,He=K.matrix,Fe=ne.distance||Se.far;Fe!==Se.far&&(Se.far=Fe,Se.updateProjectionMatrix()),Ea.setFromMatrixPosition(ne.matrixWorld),Se.position.copy(Ea),Vd.copy(Se.position),Vd.add(R2[Z]),Se.up.copy(P2[Z]),Se.lookAt(Vd),Se.updateMatrixWorld(),He.makeTranslation(-Ea.x,-Ea.y,-Ea.z),a0.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),K._frustum.setFromProjectionMatrix(a0,Se.coordinateSystem,Se.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)t.setRenderTarget(K.map,Z),t.clear();else{Z===0&&(t.setRenderTarget(K.map),t.clear());const Se=K.getViewport(Z);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),O.viewport(o)}i=K.getFrustum(Z),S(A,x,he,ne,this.type)}K.isPointLightShadow!==!0&&this.type===La&&v(K,x),K.needsUpdate=!1}u=this.type,_.needsUpdate=!1,t.setRenderTarget(N,P,D)};function v(b,A){const x=e.update(w);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null?b.mapPass=new li(r.x,r.y,{format:ns,type:Mi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(A,null,x,h,w,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value.set(b.map.width,b.map.height),g.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(A,null,x,g,w,null)}function E(b,A,x,N){let P=null;const D=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)P=D;else if(P=x.isPointLight===!0?c:l,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=P.uuid,V=A.uuid;let U=d[O];U===void 0&&(U={},d[O]=U);let I=U[V];I===void 0&&(I=P.clone(),U[V]=I,A.addEventListener("dispose",T)),P=I}if(P.visible=A.visible,P.wireframe=A.wireframe,N===La?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:p[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=t.properties.get(P);O.light=x}return P}function S(b,A,x,N,P){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===La)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const V=e.update(b),U=b.material;if(Array.isArray(U)){const I=V.groups;for(let ne=0,K=I.length;ne<K;ne++){const z=I[ne],j=U[z.materialIndex];if(j&&j.visible){const W=E(b,j,N,P);b.onBeforeShadow(t,b,A,x,V,W,z),t.renderBufferDirect(x,null,V,W,b,z),b.onAfterShadow(t,b,A,x,V,W,z)}}}else if(U.visible){const I=E(b,U,N,P);b.onBeforeShadow(t,b,A,x,V,I,null),t.renderBufferDirect(x,null,V,I,b,null),b.onAfterShadow(t,b,A,x,V,I,null)}}const O=b.children;for(let V=0,U=O.length;V<U;V++)S(O[V],A,x,N,P)}function T(b){b.target.removeEventListener("dispose",T);for(const x in d){const N=d[x],P=b.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function D2(t,e){function n(){let k=!1;const me=new Pt;let ie=null;const fe=new Pt(0,0,0,0);return{setMask:function(ge){ie!==ge&&!k&&(t.colorMask(ge,ge,ge,ge),ie=ge)},setLocked:function(ge){k=ge},setClear:function(ge,oe,we,Ae,ut){ut===!0&&(ge*=Ae,oe*=Ae,we*=Ae),me.set(ge,oe,we,Ae),fe.equals(me)===!1&&(t.clearColor(ge,oe,we,Ae),fe.copy(me))},reset:function(){k=!1,ie=null,fe.set(-1,0,0,0)}}}function i(){let k=!1,me=!1,ie=null,fe=null,ge=null;return{setReversed:function(oe){if(me!==oe){const we=e.get("EXT_clip_control");oe?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),me=oe;const Ae=ge;ge=null,this.setClear(Ae)}},getReversed:function(){return me},setTest:function(oe){oe?re(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(oe){ie!==oe&&!k&&(t.depthMask(oe),ie=oe)},setFunc:function(oe){if(me&&(oe=XS[oe]),fe!==oe){switch(oe){case ju:t.depthFunc(t.NEVER);break;case zu:t.depthFunc(t.ALWAYS);break;case Hu:t.depthFunc(t.LESS);break;case ho:t.depthFunc(t.LEQUAL);break;case Vu:t.depthFunc(t.EQUAL);break;case Gu:t.depthFunc(t.GEQUAL);break;case Wu:t.depthFunc(t.GREATER);break;case Xu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=oe}},setLocked:function(oe){k=oe},setClear:function(oe){ge!==oe&&(ge=oe,me&&(oe=1-oe),t.clearDepth(oe))},reset:function(){k=!1,ie=null,fe=null,ge=null,me=!1}}}function r(){let k=!1,me=null,ie=null,fe=null,ge=null,oe=null,we=null,Ae=null,ut=null;return{setTest:function(it){k||(it?re(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(it){me!==it&&!k&&(t.stencilMask(it),me=it)},setFunc:function(it,Zt,nn){(ie!==it||fe!==Zt||ge!==nn)&&(t.stencilFunc(it,Zt,nn),ie=it,fe=Zt,ge=nn)},setOp:function(it,Zt,nn){(oe!==it||we!==Zt||Ae!==nn)&&(t.stencilOp(it,Zt,nn),oe=it,we=Zt,Ae=nn)},setLocked:function(it){k=it},setClear:function(it){ut!==it&&(t.clearStencil(it),ut=it)},reset:function(){k=!1,me=null,ie=null,fe=null,ge=null,oe=null,we=null,Ae=null,ut=null}}}const s=new n,o=new i,l=new r,c=new WeakMap,d=new WeakMap;let f={},p={},h={},g=new WeakMap,m=[],w=null,_=!1,u=null,v=null,E=null,S=null,T=null,b=null,A=null,x=new rt(0,0,0),N=0,P=!1,D=null,O=null,V=null,U=null,I=null;const ne=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,z=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=z>=1):j.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=z>=2);let W=null,Z={};const he=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),He=new Pt().fromArray(he),Fe=new Pt().fromArray(Se);function Oe(k,me,ie,fe){const ge=new Uint8Array(4),oe=t.createTexture();t.bindTexture(k,oe),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<ie;we++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(me+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return oe}const Q={};Q[t.TEXTURE_2D]=Oe(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=Oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=Oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=Oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),re(t.DEPTH_TEST),o.setFunc(ho),qe(!1),Ze(cm),re(t.CULL_FACE),Ge(Bi);function re(k){f[k]!==!0&&(t.enable(k),f[k]=!0)}function _e(k){f[k]!==!1&&(t.disable(k),f[k]=!1)}function se(k,me){return h[k]!==me?(t.bindFramebuffer(k,me),h[k]=me,k===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=me),k===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=me),!0):!1}function le(k,me){let ie=m,fe=!1;if(k){ie=g.get(me),ie===void 0&&(ie=[],g.set(me,ie));const ge=k.textures;if(ie.length!==ge.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,we=ge.length;oe<we;oe++)ie[oe]=t.COLOR_ATTACHMENT0+oe;ie.length=ge.length,fe=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,fe=!0);fe&&t.drawBuffers(ie)}function De(k){return w!==k?(t.useProgram(k),w=k,!0):!1}const dt={[ws]:t.FUNC_ADD,[fS]:t.FUNC_SUBTRACT,[pS]:t.FUNC_REVERSE_SUBTRACT};dt[mS]=t.MIN,dt[xS]=t.MAX;const ke={[gS]:t.ZERO,[vS]:t.ONE,[_S]:t.SRC_COLOR,[Cg]:t.SRC_ALPHA,[ES]:t.SRC_ALPHA_SATURATE,[wS]:t.DST_COLOR,[SS]:t.DST_ALPHA,[yS]:t.ONE_MINUS_SRC_COLOR,[Rg]:t.ONE_MINUS_SRC_ALPHA,[MS]:t.ONE_MINUS_DST_COLOR,[bS]:t.ONE_MINUS_DST_ALPHA,[TS]:t.CONSTANT_COLOR,[NS]:t.ONE_MINUS_CONSTANT_COLOR,[AS]:t.CONSTANT_ALPHA,[CS]:t.ONE_MINUS_CONSTANT_ALPHA};function Ge(k,me,ie,fe,ge,oe,we,Ae,ut,it){if(k===Bi){_===!0&&(_e(t.BLEND),_=!1);return}if(_===!1&&(re(t.BLEND),_=!0),k!==hS){if(k!==u||it!==P){if((v!==ws||T!==ws)&&(t.blendEquation(t.FUNC_ADD),v=ws,T=ws),it)switch(k){case Ga:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dm:t.blendFunc(t.ONE,t.ONE);break;case um:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ht("WebGLState: Invalid blending: ",k);break}else switch(k){case Ga:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case um:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hm:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",k);break}E=null,S=null,b=null,A=null,x.set(0,0,0),N=0,u=k,P=it}return}ge=ge||me,oe=oe||ie,we=we||fe,(me!==v||ge!==T)&&(t.blendEquationSeparate(dt[me],dt[ge]),v=me,T=ge),(ie!==E||fe!==S||oe!==b||we!==A)&&(t.blendFuncSeparate(ke[ie],ke[fe],ke[oe],ke[we]),E=ie,S=fe,b=oe,A=we),(Ae.equals(x)===!1||ut!==N)&&(t.blendColor(Ae.r,Ae.g,Ae.b,ut),x.copy(Ae),N=ut),u=k,P=!1}function nt(k,me){k.side===gi?_e(t.CULL_FACE):re(t.CULL_FACE);let ie=k.side===An;me&&(ie=!ie),qe(ie),k.blending===Ga&&k.transparent===!1?Ge(Bi):Ge(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const fe=k.stencilWrite;l.setTest(fe),fe&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),We(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(k){D!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),D=k)}function Ze(k){k!==dS?(re(t.CULL_FACE),k!==O&&(k===cm?t.cullFace(t.BACK):k===uS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),O=k}function Nt(k){k!==V&&(K&&t.lineWidth(k),V=k)}function We(k,me,ie){k?(re(t.POLYGON_OFFSET_FILL),(U!==me||I!==ie)&&(U=me,I=ie,o.getReversed()&&(me=-me),t.polygonOffset(me,ie))):_e(t.POLYGON_OFFSET_FILL)}function pt(k){k?re(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function mt(k){k===void 0&&(k=t.TEXTURE0+ne-1),W!==k&&(t.activeTexture(k),W=k)}function F(k,me,ie){ie===void 0&&(W===null?ie=t.TEXTURE0+ne-1:ie=W);let fe=Z[ie];fe===void 0&&(fe={type:void 0,texture:void 0},Z[ie]=fe),(fe.type!==k||fe.texture!==me)&&(W!==ie&&(t.activeTexture(ie),W=ie),t.bindTexture(k,me||Q[k]),fe.type=k,fe.texture=me)}function wt(){const k=Z[W];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Je(){try{t.compressedTexImage2D(...arguments)}catch(k){ht("WebGLState:",k)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(k){ht("WebGLState:",k)}}function y(){try{t.texSubImage2D(...arguments)}catch(k){ht("WebGLState:",k)}}function B(){try{t.texSubImage3D(...arguments)}catch(k){ht("WebGLState:",k)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(k){ht("WebGLState:",k)}}function ee(){try{t.compressedTexSubImage3D(...arguments)}catch(k){ht("WebGLState:",k)}}function G(){try{t.texStorage2D(...arguments)}catch(k){ht("WebGLState:",k)}}function ae(){try{t.texStorage3D(...arguments)}catch(k){ht("WebGLState:",k)}}function q(){try{t.texImage2D(...arguments)}catch(k){ht("WebGLState:",k)}}function te(){try{t.texImage3D(...arguments)}catch(k){ht("WebGLState:",k)}}function ce(k){return p[k]!==void 0?p[k]:t.getParameter(k)}function Ne(k,me){p[k]!==me&&(t.pixelStorei(k,me),p[k]=me)}function xe(k){He.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),He.copy(k))}function pe(k){Fe.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Fe.copy(k))}function Ee(k,me){let ie=d.get(me);ie===void 0&&(ie=new WeakMap,d.set(me,ie));let fe=ie.get(k);fe===void 0&&(fe=t.getUniformBlockIndex(me,k.name),ie.set(k,fe))}function Ue(k,me){const fe=d.get(me).get(k);c.get(me)!==fe&&(t.uniformBlockBinding(me,fe,k.__bindingPointIndex),c.set(me,fe))}function Ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},p={},W=null,Z={},h={},g=new WeakMap,m=[],w=null,_=!1,u=null,v=null,E=null,S=null,T=null,b=null,A=null,x=new rt(0,0,0),N=0,P=!1,D=null,O=null,V=null,U=null,I=null,He.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:re,disable:_e,bindFramebuffer:se,drawBuffers:le,useProgram:De,setBlending:Ge,setMaterial:nt,setFlipSided:qe,setCullFace:Ze,setLineWidth:Nt,setPolygonOffset:We,setScissorTest:pt,activeTexture:mt,bindTexture:F,unbindTexture:wt,compressedTexImage2D:Je,compressedTexImage3D:C,texImage2D:q,texImage3D:te,pixelStorei:Ne,getParameter:ce,updateUBOMapping:Ee,uniformBlockBinding:Ue,texStorage2D:G,texStorage3D:ae,texSubImage2D:y,texSubImage3D:B,compressedTexSubImage2D:X,compressedTexSubImage3D:ee,scissor:xe,viewport:pe,reset:Ve}}function I2(t,e,n,i,r,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ke,f=new WeakMap,p=new Set;let h;const g=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(C,y){return m?new OffscreenCanvas(C,y):fc("canvas")}function _(C,y,B){let X=1;const ee=Je(C);if((ee.width>B||ee.height>B)&&(X=B/Math.max(ee.width,ee.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const G=Math.floor(X*ee.width),ae=Math.floor(X*ee.height);h===void 0&&(h=w(G,ae));const q=y?w(G,ae):h;return q.width=G,q.height=ae,q.getContext("2d").drawImage(C,0,0,G,ae),ze("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+G+"x"+ae+")."),q}else return"data"in C&&ze("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function u(C){return C.generateMipmaps}function v(C){t.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(C,y,B,X,ee,G=!1){if(C!==null){if(t[C]!==void 0)return t[C];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae;X&&(ae=e.get("EXT_texture_norm16"),ae||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=y;if(y===t.RED&&(B===t.FLOAT&&(q=t.R32F),B===t.HALF_FLOAT&&(q=t.R16F),B===t.UNSIGNED_BYTE&&(q=t.R8),B===t.UNSIGNED_SHORT&&ae&&(q=ae.R16_EXT),B===t.SHORT&&ae&&(q=ae.R16_SNORM_EXT)),y===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.R8UI),B===t.UNSIGNED_SHORT&&(q=t.R16UI),B===t.UNSIGNED_INT&&(q=t.R32UI),B===t.BYTE&&(q=t.R8I),B===t.SHORT&&(q=t.R16I),B===t.INT&&(q=t.R32I)),y===t.RG&&(B===t.FLOAT&&(q=t.RG32F),B===t.HALF_FLOAT&&(q=t.RG16F),B===t.UNSIGNED_BYTE&&(q=t.RG8),B===t.UNSIGNED_SHORT&&ae&&(q=ae.RG16_EXT),B===t.SHORT&&ae&&(q=ae.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.RG8UI),B===t.UNSIGNED_SHORT&&(q=t.RG16UI),B===t.UNSIGNED_INT&&(q=t.RG32UI),B===t.BYTE&&(q=t.RG8I),B===t.SHORT&&(q=t.RG16I),B===t.INT&&(q=t.RG32I)),y===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.RGB8UI),B===t.UNSIGNED_SHORT&&(q=t.RGB16UI),B===t.UNSIGNED_INT&&(q=t.RGB32UI),B===t.BYTE&&(q=t.RGB8I),B===t.SHORT&&(q=t.RGB16I),B===t.INT&&(q=t.RGB32I)),y===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),B===t.UNSIGNED_INT&&(q=t.RGBA32UI),B===t.BYTE&&(q=t.RGBA8I),B===t.SHORT&&(q=t.RGBA16I),B===t.INT&&(q=t.RGBA32I)),y===t.RGB&&(B===t.UNSIGNED_SHORT&&ae&&(q=ae.RGB16_EXT),B===t.SHORT&&ae&&(q=ae.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),y===t.RGBA){const te=G?hc:at.getTransfer(ee);B===t.FLOAT&&(q=t.RGBA32F),B===t.HALF_FLOAT&&(q=t.RGBA16F),B===t.UNSIGNED_BYTE&&(q=te===xt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&ae&&(q=ae.RGBA16_EXT),B===t.SHORT&&ae&&(q=ae.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function T(C,y){let B;return C?y===null||y===wi||y===po?B=t.DEPTH24_STENCIL8:y===vi?B=t.DEPTH32F_STENCIL8:y===fo&&(B=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===wi||y===po?B=t.DEPTH_COMPONENT24:y===vi?B=t.DEPTH_COMPONENT32F:y===fo&&(B=t.DEPTH_COMPONENT16),B}function b(C,y){return u(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qt&&C.minFilter!==dn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){const y=C.target;y.removeEventListener("dispose",A),N(y),y.isVideoTexture&&f.delete(y),y.isHTMLTexture&&p.delete(y)}function x(C){const y=C.target;y.removeEventListener("dispose",x),D(y)}function N(C){const y=i.get(C);if(y.__webglInit===void 0)return;const B=C.source,X=g.get(B);if(X){const ee=X[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(C),Object.keys(X).length===0&&g.delete(B)}i.remove(C)}function P(C){const y=i.get(C);t.deleteTexture(y.__webglTexture);const B=C.source,X=g.get(B);delete X[y.__cacheKey],o.memory.textures--}function D(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let ee=0;ee<y.__webglFramebuffer[X].length;ee++)t.deleteFramebuffer(y.__webglFramebuffer[X][ee]);else t.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)t.deleteFramebuffer(y.__webglFramebuffer[X]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=C.textures;for(let X=0,ee=B.length;X<ee;X++){const G=i.get(B[X]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(B[X])}i.remove(C)}let O=0;function V(){O=0}function U(){return O}function I(C){O=C}function ne(){const C=O;return C>=r.maxTextures&&ze("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,C}function K(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function z(C,y){const B=i.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){const X=C.image;if(X===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(B,C,y);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+y)}function j(C,y){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){_e(B,C,y);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+y)}function W(C,y){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){_e(B,C,y);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+y)}function Z(C,y){const B=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){se(B,C,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+y)}const he={[qu]:t.REPEAT,[Fi]:t.CLAMP_TO_EDGE,[$u]:t.MIRRORED_REPEAT},Se={[Qt]:t.NEAREST,[LS]:t.NEAREST_MIPMAP_NEAREST,[qo]:t.NEAREST_MIPMAP_LINEAR,[dn]:t.LINEAR,[pd]:t.LINEAR_MIPMAP_NEAREST,[Gr]:t.LINEAR_MIPMAP_LINEAR},He={[US]:t.NEVER,[zS]:t.ALWAYS,[FS]:t.LESS,[Df]:t.LEQUAL,[OS]:t.EQUAL,[If]:t.GEQUAL,[BS]:t.GREATER,[jS]:t.NOTEQUAL};function Fe(C,y){if(y.type===vi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===dn||y.magFilter===pd||y.magFilter===qo||y.magFilter===Gr||y.minFilter===dn||y.minFilter===pd||y.minFilter===qo||y.minFilter===Gr)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,he[y.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,he[y.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,he[y.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Se[y.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Se[y.minFilter]),y.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,He[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Qt||y.minFilter!==qo&&y.minFilter!==Gr||y.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Oe(C,y){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));const X=y.source;let ee=g.get(X);ee===void 0&&(ee={},g.set(X,ee));const G=K(y);if(G!==C.__cacheKey){ee[G]===void 0&&(ee[G]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[G].usedTimes++;const ae=ee[C.__cacheKey];ae!==void 0&&(ee[C.__cacheKey].usedTimes--,ae.usedTimes===0&&P(y)),C.__cacheKey=G,C.__webglTexture=ee[G].texture}return B}function Q(C,y,B){return Math.floor(Math.floor(C/B)/y)}function re(C,y,B,X){const G=C.updateRanges;if(G.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,B,X,y.data);else{G.sort((Ne,xe)=>Ne.start-xe.start);let ae=0;for(let Ne=1;Ne<G.length;Ne++){const xe=G[ae],pe=G[Ne],Ee=xe.start+xe.count,Ue=Q(pe.start,y.width,4),Ve=Q(xe.start,y.width,4);pe.start<=Ee+1&&Ue===Ve&&Q(pe.start+pe.count-1,y.width,4)===Ue?xe.count=Math.max(xe.count,pe.start+pe.count-xe.start):(++ae,G[ae]=pe)}G.length=ae+1;const q=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),ce=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let Ne=0,xe=G.length;Ne<xe;Ne++){const pe=G[Ne],Ee=Math.floor(pe.start/4),Ue=Math.ceil(pe.count/4),Ve=Ee%y.width,k=Math.floor(Ee/y.width),me=Ue,ie=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,Ve,k,me,ie,B,X,y.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,ce)}}function _e(C,y,B){let X=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=t.TEXTURE_3D);const ee=Oe(C,y),G=y.source;n.bindTexture(X,C.__webglTexture,t.TEXTURE0+B);const ae=i.get(G);if(G.version!==ae.__version||ee===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ie=at.getPrimaries(at.workingColorSpace),fe=y.colorSpace===cr?null:at.getPrimaries(y.colorSpace),ge=y.colorSpace===cr||ie===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let te=_(y.image,!1,r.maxTextureSize);te=wt(y,te);const ce=s.convert(y.format,y.colorSpace),Ne=s.convert(y.type);let xe=S(y.internalFormat,ce,Ne,y.normalized,y.colorSpace,y.isVideoTexture);Fe(X,y);let pe;const Ee=y.mipmaps,Ue=y.isVideoTexture!==!0,Ve=ae.__version===void 0||ee===!0,k=G.dataReady,me=b(y,te);if(y.isDepthTexture)xe=T(y.format===Wr,y.type),Ve&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,xe,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,xe,te.width,te.height,0,ce,Ne,null));else if(y.isDataTexture)if(Ee.length>0){Ue&&Ve&&n.texStorage2D(t.TEXTURE_2D,me,xe,Ee[0].width,Ee[0].height);for(let ie=0,fe=Ee.length;ie<fe;ie++)pe=Ee[ie],Ue?k&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,ce,Ne,pe.data):n.texImage2D(t.TEXTURE_2D,ie,xe,pe.width,pe.height,0,ce,Ne,pe.data);y.generateMipmaps=!1}else Ue?(Ve&&n.texStorage2D(t.TEXTURE_2D,me,xe,te.width,te.height),k&&re(y,te,ce,Ne)):n.texImage2D(t.TEXTURE_2D,0,xe,te.width,te.height,0,ce,Ne,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ue&&Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,xe,Ee[0].width,Ee[0].height,te.depth);for(let ie=0,fe=Ee.length;ie<fe;ie++)if(pe=Ee[ie],y.format!==si)if(ce!==null)if(Ue){if(k)if(y.layerUpdates.size>0){const ge=Om(pe.width,pe.height,y.format,y.type);for(const oe of y.layerUpdates){const we=pe.data.subarray(oe*ge/pe.data.BYTES_PER_ELEMENT,(oe+1)*ge/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,oe,pe.width,pe.height,1,ce,we)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,te.depth,ce,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,xe,pe.width,pe.height,te.depth,0,pe.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,te.depth,ce,Ne,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,xe,pe.width,pe.height,te.depth,0,ce,Ne,pe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ue&&Ve&&n.texStorage2D(t.TEXTURE_2D,me,xe,Ee[0].width,Ee[0].height);for(let ie=0,fe=Ee.length;ie<fe;ie++)pe=Ee[ie],y.format!==si?ce!==null?Ue?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,ce,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,xe,pe.width,pe.height,0,pe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?k&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,ce,Ne,pe.data):n.texImage2D(t.TEXTURE_2D,ie,xe,pe.width,pe.height,0,ce,Ne,pe.data)}else if(y.isDataArrayTexture)if(Ue){if(Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,xe,te.width,te.height,te.depth),k)if(y.layerUpdates.size>0){const ie=Om(te.width,te.height,y.format,y.type);for(const fe of y.layerUpdates){const ge=te.data.subarray(fe*ie/te.data.BYTES_PER_ELEMENT,(fe+1)*ie/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,te.width,te.height,1,ce,Ne,ge)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ce,Ne,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,te.width,te.height,te.depth,0,ce,Ne,te.data);else if(y.isData3DTexture)Ue?(Ve&&n.texStorage3D(t.TEXTURE_3D,me,xe,te.width,te.height,te.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ce,Ne,te.data)):n.texImage3D(t.TEXTURE_3D,0,xe,te.width,te.height,te.depth,0,ce,Ne,te.data);else if(y.isFramebufferTexture){if(Ve)if(Ue)n.texStorage2D(t.TEXTURE_2D,me,xe,te.width,te.height);else{let ie=te.width,fe=te.height;for(let ge=0;ge<me;ge++)n.texImage2D(t.TEXTURE_2D,ge,xe,ie,fe,0,ce,Ne,null),ie>>=1,fe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const ie=t.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),te.parentNode!==ie){ie.appendChild(te),p.add(y),ie.onpaint=fe=>{const ge=fe.changedElements;for(const oe of p)ge.includes(oe.image)&&(oe.needsUpdate=!0)},ie.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{const ge=t.RGBA,oe=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ge,oe,we,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Ue&&Ve){const ie=Je(Ee[0]);n.texStorage2D(t.TEXTURE_2D,me,xe,ie.width,ie.height)}for(let ie=0,fe=Ee.length;ie<fe;ie++)pe=Ee[ie],Ue?k&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ce,Ne,pe):n.texImage2D(t.TEXTURE_2D,ie,xe,ce,Ne,pe);y.generateMipmaps=!1}else if(Ue){if(Ve){const ie=Je(te);n.texStorage2D(t.TEXTURE_2D,me,xe,ie.width,ie.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,Ne,te)}else n.texImage2D(t.TEXTURE_2D,0,xe,ce,Ne,te);u(y)&&v(X),ae.__version=G.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function se(C,y,B){if(y.image.length!==6)return;const X=Oe(C,y),ee=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+B);const G=i.get(ee);if(ee.version!==G.__version||X===!0){n.activeTexture(t.TEXTURE0+B);const ae=at.getPrimaries(at.workingColorSpace),q=y.colorSpace===cr?null:at.getPrimaries(y.colorSpace),te=y.colorSpace===cr||ae===q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ce=y.isCompressedTexture||y.image[0].isCompressedTexture,Ne=y.image[0]&&y.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!ce&&!Ne?xe[oe]=_(y.image[oe],!0,r.maxCubemapSize):xe[oe]=Ne?y.image[oe].image:y.image[oe],xe[oe]=wt(y,xe[oe]);const pe=xe[0],Ee=s.convert(y.format,y.colorSpace),Ue=s.convert(y.type),Ve=S(y.internalFormat,Ee,Ue,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,me=G.__version===void 0||X===!0,ie=ee.dataReady;let fe=b(y,pe);Fe(t.TEXTURE_CUBE_MAP,y);let ge;if(ce){k&&me&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ve,pe.width,pe.height);for(let oe=0;oe<6;oe++){ge=xe[oe].mipmaps;for(let we=0;we<ge.length;we++){const Ae=ge[we];y.format!==si?Ee!==null?k?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,0,0,Ae.width,Ae.height,Ee,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,Ve,Ae.width,Ae.height,0,Ae.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,0,0,Ae.width,Ae.height,Ee,Ue,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,Ve,Ae.width,Ae.height,0,Ee,Ue,Ae.data)}}}else{if(ge=y.mipmaps,k&&me){ge.length>0&&fe++;const oe=Je(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ve,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Ne){k?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,Ee,Ue,xe[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,xe[oe].width,xe[oe].height,0,Ee,Ue,xe[oe].data);for(let we=0;we<ge.length;we++){const ut=ge[we].image[oe].image;k?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,0,0,ut.width,ut.height,Ee,Ue,ut.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,Ve,ut.width,ut.height,0,Ee,Ue,ut.data)}}else{k?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ee,Ue,xe[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,Ee,Ue,xe[oe]);for(let we=0;we<ge.length;we++){const Ae=ge[we];k?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,0,0,Ee,Ue,Ae.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,Ve,Ee,Ue,Ae.image[oe])}}}u(y)&&v(t.TEXTURE_CUBE_MAP),G.__version=ee.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function le(C,y,B,X,ee,G){const ae=s.convert(B.format,B.colorSpace),q=s.convert(B.type),te=S(B.internalFormat,ae,q,B.normalized,B.colorSpace),ce=i.get(y),Ne=i.get(B);if(Ne.__renderTarget=y,!ce.__hasExternalTextures){const xe=Math.max(1,y.width>>G),pe=Math.max(1,y.height>>G);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,G,te,xe,pe,y.depth,0,ae,q,null):n.texImage2D(ee,G,te,xe,pe,0,ae,q,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),mt(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,ee,Ne.__webglTexture,0,pt(y)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,ee,Ne.__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(C,y,B){if(t.bindRenderbuffer(t.RENDERBUFFER,C),y.depthBuffer){const X=y.depthTexture,ee=X&&X.isDepthTexture?X.type:null,G=T(y.stencilBuffer,ee),ae=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;mt(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pt(y),G,y.width,y.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,pt(y),G,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,G,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,C)}else{const X=y.textures;for(let ee=0;ee<X.length;ee++){const G=X[ee],ae=s.convert(G.format,G.colorSpace),q=s.convert(G.type),te=S(G.internalFormat,ae,q,G.normalized,G.colorSpace);mt(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pt(y),te,y.width,y.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,pt(y),te,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,te,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function dt(C,y,B){const X=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=i.get(y.depthTexture);if(ee.__renderTarget=y,(!ee.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,y.depthTexture);const ce=s.convert(y.depthTexture.format),Ne=s.convert(y.depthTexture.type);let xe;y.depthTexture.format===Xi?xe=t.DEPTH_COMPONENT24:y.depthTexture.format===Wr&&(xe=t.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,xe,y.width,y.height,0,ce,Ne,null)}}else z(y.depthTexture,0);const G=ee.__webglTexture,ae=pt(y),q=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,te=y.depthTexture.format===Wr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===Xi)mt(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,q,G,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,te,q,G,0);else if(y.depthTexture.format===Wr)mt(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,q,G,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,te,q,G,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(C){const y=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",ee)};X.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=X}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let X=0;X<6;X++)dt(y.__webglFramebuffer[X],C,X);else{const X=C.texture.mipmaps;X&&X.length>0?dt(y.__webglFramebuffer[0],C,0):dt(y.__webglFramebuffer,C,0)}else if(B){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=t.createRenderbuffer(),De(y.__webglDepthbuffer[X],C,!1);else{const ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,G)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),De(y.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,G)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(C,y,B){const X=i.get(C);y!==void 0&&le(X.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&ke(C)}function nt(C){const y=C.texture,B=i.get(C),X=i.get(y);C.addEventListener("dispose",x);const ee=C.textures,G=C.isWebGLCubeRenderTarget===!0,ae=ee.length>1;if(ae||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=y.version,o.memory.textures++),G){B.__webglFramebuffer=[];for(let q=0;q<6;q++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[q]=[];for(let te=0;te<y.mipmaps.length;te++)B.__webglFramebuffer[q][te]=t.createFramebuffer()}else B.__webglFramebuffer[q]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let q=0;q<y.mipmaps.length;q++)B.__webglFramebuffer[q]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ae)for(let q=0,te=ee.length;q<te;q++){const ce=i.get(ee[q]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&mt(C)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let q=0;q<ee.length;q++){const te=ee[q];B.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[q]);const ce=s.convert(te.format,te.colorSpace),Ne=s.convert(te.type),xe=S(te.internalFormat,ce,Ne,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),pe=pt(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,xe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,B.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),De(B.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(G){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,y);for(let q=0;q<6;q++)if(y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)le(B.__webglFramebuffer[q][te],C,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,te);else le(B.__webglFramebuffer[q],C,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);u(y)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){for(let q=0,te=ee.length;q<te;q++){const ce=ee[q],Ne=i.get(ce);let xe=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,Ne.__webglTexture),Fe(xe,ce),le(B.__webglFramebuffer,C,ce,t.COLOR_ATTACHMENT0+q,xe,0),u(ce)&&v(xe)}n.unbindTexture()}else{let q=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(q,X.__webglTexture),Fe(q,y),y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)le(B.__webglFramebuffer[te],C,y,t.COLOR_ATTACHMENT0,q,te);else le(B.__webglFramebuffer,C,y,t.COLOR_ATTACHMENT0,q,0);u(y)&&v(q),n.unbindTexture()}C.depthBuffer&&ke(C)}function qe(C){const y=C.textures;for(let B=0,X=y.length;B<X;B++){const ee=y[B];if(u(ee)){const G=E(C),ae=i.get(ee).__webglTexture;n.bindTexture(G,ae),v(G),n.unbindTexture()}}}const Ze=[],Nt=[];function We(C){if(C.samples>0){if(mt(C)===!1){const y=C.textures,B=C.width,X=C.height;let ee=t.COLOR_BUFFER_BIT;const G=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(C),q=y.length>1;if(q)for(let ce=0;ce<y.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const te=C.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ce=0;ce<y.length;ce++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[ce]);const Ne=i.get(y[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ne,0)}t.blitFramebuffer(0,0,B,X,0,0,B,X,ee,t.NEAREST),c===!0&&(Ze.length=0,Nt.length=0,Ze.push(t.COLOR_ATTACHMENT0+ce),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Ze.push(G),Nt.push(G),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Nt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ze))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let ce=0;ce<y.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,ae.__webglColorRenderbuffer[ce]);const Ne=i.get(y[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,Ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const y=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function pt(C){return Math.min(r.maxSamples,C.samples)}function mt(C){const y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function F(C){const y=o.render.frame;f.get(C)!==y&&(f.set(C,y),C.update())}function wt(C,y){const B=C.colorSpace,X=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==uc&&B!==cr&&(at.getTransfer(B)===xt?(X!==si||ee!==In)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",B)),y}function Je(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(d.width=C.naturalWidth||C.width,d.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(d.width=C.displayWidth,d.height=C.displayHeight):(d.width=C.width,d.height=C.height),d}this.allocateTextureUnit=ne,this.resetTextureUnits=V,this.getTextureUnits=U,this.setTextureUnits=I,this.setTexture2D=z,this.setTexture2DArray=j,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=Ge,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=le,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function k2(t,e){function n(i,r=cr){let s;const o=at.getTransfer(r);if(i===In)return t.UNSIGNED_BYTE;if(i===Af)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Cf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Hg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Vg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===jg)return t.BYTE;if(i===zg)return t.SHORT;if(i===fo)return t.UNSIGNED_SHORT;if(i===Nf)return t.INT;if(i===wi)return t.UNSIGNED_INT;if(i===vi)return t.FLOAT;if(i===Mi)return t.HALF_FLOAT;if(i===Gg)return t.ALPHA;if(i===Wg)return t.RGB;if(i===si)return t.RGBA;if(i===Xi)return t.DEPTH_COMPONENT;if(i===Wr)return t.DEPTH_STENCIL;if(i===Xg)return t.RED;if(i===Rf)return t.RED_INTEGER;if(i===ns)return t.RG;if(i===Pf)return t.RG_INTEGER;if(i===Lf)return t.RGBA_INTEGER;if(i===Ll||i===Dl||i===Il||i===kl)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ll)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ll)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Dl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yu||i===Ku||i===Zu||i===Ju)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ku)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ju)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qu||i===eh||i===th||i===nh||i===ih||i===cc||i===rh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Qu||i===eh)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===th)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===nh)return s.COMPRESSED_R11_EAC;if(i===ih)return s.COMPRESSED_SIGNED_R11_EAC;if(i===cc)return s.COMPRESSED_RG11_EAC;if(i===rh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===sh||i===ah||i===oh||i===lh||i===ch||i===dh||i===uh||i===hh||i===fh||i===ph||i===mh||i===xh||i===gh||i===vh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ah)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ch)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ph)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_h||i===yh||i===Sh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===_h)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bh||i===wh||i===dc||i===Mh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===po?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const U2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class O2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new ev(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ei({vertexShader:U2,fragmentShader:F2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new lt(new Ic(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B2 extends ss{constructor(e,n){super();const i=this;let r=null,s=1,o=null,l="local-floor",c=1,d=null,f=null,p=null,h=null,g=null,m=null;const w=typeof XRWebGLBinding<"u",_=new O2,u={},v=n.getContextAttributes();let E=null,S=null;const T=[],b=[],A=new Ke;let x=null,N=null;const P=new Dn;P.viewport=new Pt;const D=new Dn;D.viewport=new Pt;const O=[P,D],V=new Xb;let U=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let re=T[Q];return re===void 0&&(re=new Sd,T[Q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Q){let re=T[Q];return re===void 0&&(re=new Sd,T[Q]=re),re.getGripSpace()},this.getHand=function(Q){let re=T[Q];return re===void 0&&(re=new Sd,T[Q]=re),re.getHandSpace()};function ne(Q){const re=b.indexOf(Q.inputSource);if(re===-1)return;const _e=T[re];_e!==void 0&&(_e.update(Q.inputSource,Q.frame,d||o),_e.dispatchEvent({type:Q.type,data:Q.inputSource}))}function K(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",z);for(let Q=0;Q<T.length;Q++){const re=b[Q];re!==null&&(b[Q]=null,T[Q].disconnect(re))}U=null,I=null,_.reset();for(const Q in u)delete u[Q];if(e.setRenderTarget(E),g=null,h=null,p=null,r=null,S=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),N!==null){const Q=N.camera;Q.fov=N.fov,Q.zoom=N.zoom,Q.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){l=Q,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return p===null&&w&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",K),r.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,se=null,le=null;v.depth&&(le=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=v.stencil?Wr:Xi,se=v.stencil?po:wi);const De={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};p=this.getBinding(),h=p.createProjectionLayer(De),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new li(h.textureWidth,h.textureHeight,{format:si,type:In,depthTexture:new go(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const _e={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,_e),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),S=new li(g.framebufferWidth,g.framebufferHeight,{format:si,type:In,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),d=null,o=await r.requestReferenceSpace(l),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(Q){for(let re=0;re<Q.removed.length;re++){const _e=Q.removed[re],se=b.indexOf(_e);se>=0&&(b[se]=null,T[se].disconnect(_e))}for(let re=0;re<Q.added.length;re++){const _e=Q.added[re];let se=b.indexOf(_e);if(se===-1){for(let De=0;De<T.length;De++)if(De>=b.length){b.push(_e),se=De;break}else if(b[De]===null){b[De]=_e,se=De;break}if(se===-1)break}const le=T[se];le&&le.connect(_e)}}const j=new H,W=new H;function Z(Q,re,_e){j.setFromMatrixPosition(re.matrixWorld),W.setFromMatrixPosition(_e.matrixWorld);const se=j.distanceTo(W),le=re.projectionMatrix.elements,De=_e.projectionMatrix.elements,dt=le[14]/(le[10]-1),ke=le[14]/(le[10]+1),Ge=(le[9]+1)/le[5],nt=(le[9]-1)/le[5],qe=(le[8]-1)/le[0],Ze=(De[8]+1)/De[0],Nt=dt*qe,We=dt*Ze,pt=se/(-qe+Ze),mt=pt*-qe;if(re.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(mt),Q.translateZ(pt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),le[10]===-1)Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const F=dt+pt,wt=ke+pt,Je=Nt-mt,C=We+(se-mt),y=Ge*ke/wt*F,B=nt*ke/wt*F;Q.projectionMatrix.makePerspective(Je,C,y,B,F,wt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function he(Q,re){re===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(re.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let re=Q.near,_e=Q.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),V.near=D.near=P.near=re,V.far=D.far=P.far=_e,(U!==V.near||I!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),U=V.near,I=V.far),V.layers.mask=Q.layers.mask|6,P.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;const se=Q.parent,le=V.cameras;he(V,se);for(let De=0;De<le.length;De++)he(le[De],se);le.length===2?Z(V,P,D):V.projectionMatrix.copy(P.projectionMatrix),N===null&&Q.isPerspectiveCamera&&(N={camera:Q,fov:Q.fov,zoom:Q.zoom}),Se(Q,V,se)};function Se(Q,re,_e){_e===null?Q.matrix.copy(re.matrixWorld):(Q.matrix.copy(_e.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(re.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=xo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&g===null))return c},this.setFoveation=function(Q){c=Q,h!==null&&(h.fixedFoveation=Q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(V)},this.getCameraTexture=function(Q){return u[Q]};let He=null;function Fe(Q,re){if(f=re.getViewerPose(d||o),m=re,f!==null){const _e=f.views;g!==null&&(e.setRenderTargetFramebuffer(S,g.framebuffer),e.setRenderTarget(S));let se=!1;_e.length!==V.cameras.length&&(V.cameras.length=0,se=!0);for(let ke=0;ke<_e.length;ke++){const Ge=_e[ke];let nt=null;if(g!==null)nt=g.getViewport(Ge);else{const Ze=p.getViewSubImage(h,Ge);nt=Ze.viewport,ke===0&&(e.setRenderTargetTextures(S,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(S))}let qe=O[ke];qe===void 0&&(qe=new Dn,qe.layers.enable(ke),qe.viewport=new Pt,O[ke]=qe),qe.matrix.fromArray(Ge.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Ge.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(nt.x,nt.y,nt.width,nt.height),ke===0&&(V.matrix.copy(qe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),se===!0&&V.cameras.push(qe)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&w){p=i.getBinding();const ke=p.getDepthInformation(_e[0]);ke&&ke.isValid&&ke.texture&&_.init(ke,r.renderState)}if(le&&le.includes("camera-access")&&w){e.state.unbindTexture(),p=i.getBinding();for(let ke=0;ke<_e.length;ke++){const Ge=_e[ke].camera;if(Ge){let nt=u[Ge];nt||(nt=new ev,u[Ge]=nt);const qe=p.getCameraImage(Ge);nt.sourceTexture=qe}}}}for(let _e=0;_e<T.length;_e++){const se=b[_e],le=T[_e];se!==null&&le!==void 0&&le.update(se,re,d||o)}He&&He(Q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),m=null}const Oe=new rv;Oe.setAnimationLoop(Fe),this.setAnimationLoop=function(Q){He=Q},this.dispose=function(){}}}const j2=new kt,uv=new Xe;uv.set(-1,0,0,0,1,0,0,0,1);function z2(t,e){function n(_,u){_.matrixAutoUpdate===!0&&_.updateMatrix(),u.value.copy(_.matrix)}function i(_,u){u.color.getRGB(_.fogColor.value,tv(t)),u.isFog?(_.fogNear.value=u.near,_.fogFar.value=u.far):u.isFogExp2&&(_.fogDensity.value=u.density)}function r(_,u,v,E,S){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(_,u):u.isMeshLambertMaterial?(s(_,u),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(_,u),p(_,u)):u.isMeshPhongMaterial?(s(_,u),f(_,u),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(_,u),h(_,u),u.isMeshPhysicalMaterial&&g(_,u,S)):u.isMeshMatcapMaterial?(s(_,u),m(_,u)):u.isMeshDepthMaterial?s(_,u):u.isMeshDistanceMaterial?(s(_,u),w(_,u)):u.isMeshNormalMaterial?s(_,u):u.isLineBasicMaterial?(o(_,u),u.isLineDashedMaterial&&l(_,u)):u.isPointsMaterial?c(_,u,v,E):u.isSpriteMaterial?d(_,u):u.isShadowMaterial?(_.color.value.copy(u.color),_.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(_,u){_.opacity.value=u.opacity,u.color&&_.diffuse.value.copy(u.color),u.emissive&&_.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.bumpMap&&(_.bumpMap.value=u.bumpMap,n(u.bumpMap,_.bumpMapTransform),_.bumpScale.value=u.bumpScale,u.side===An&&(_.bumpScale.value*=-1)),u.normalMap&&(_.normalMap.value=u.normalMap,n(u.normalMap,_.normalMapTransform),_.normalScale.value.copy(u.normalScale),u.side===An&&_.normalScale.value.negate()),u.displacementMap&&(_.displacementMap.value=u.displacementMap,n(u.displacementMap,_.displacementMapTransform),_.displacementScale.value=u.displacementScale,_.displacementBias.value=u.displacementBias),u.emissiveMap&&(_.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,_.emissiveMapTransform)),u.specularMap&&(_.specularMap.value=u.specularMap,n(u.specularMap,_.specularMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest);const v=e.get(u),E=v.envMap,S=v.envMapRotation;E&&(_.envMap.value=E,_.envMapRotation.value.setFromMatrix4(j2.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(uv),_.reflectivity.value=u.reflectivity,_.ior.value=u.ior,_.refractionRatio.value=u.refractionRatio),u.lightMap&&(_.lightMap.value=u.lightMap,_.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,_.lightMapTransform)),u.aoMap&&(_.aoMap.value=u.aoMap,_.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,_.aoMapTransform))}function o(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform))}function l(_,u){_.dashSize.value=u.dashSize,_.totalSize.value=u.dashSize+u.gapSize,_.scale.value=u.scale}function c(_,u,v,E){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.size.value=u.size*v,_.scale.value=E*.5,u.map&&(_.map.value=u.map,n(u.map,_.uvTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function d(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.rotation.value=u.rotation,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function f(_,u){_.specular.value.copy(u.specular),_.shininess.value=Math.max(u.shininess,1e-4)}function p(_,u){u.gradientMap&&(_.gradientMap.value=u.gradientMap)}function h(_,u){_.metalness.value=u.metalness,u.metalnessMap&&(_.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,_.metalnessMapTransform)),_.roughness.value=u.roughness,u.roughnessMap&&(_.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,_.roughnessMapTransform)),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)}function g(_,u,v){_.ior.value=u.ior,u.sheen>0&&(_.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),_.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(_.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,_.sheenColorMapTransform)),u.sheenRoughnessMap&&(_.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,_.sheenRoughnessMapTransform))),u.clearcoat>0&&(_.clearcoat.value=u.clearcoat,_.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(_.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,_.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(_.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===An&&_.clearcoatNormalScale.value.negate())),u.dispersion>0&&(_.dispersion.value=u.dispersion),u.retroreflectivity>0&&(_.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(_.iridescence.value=u.iridescence,_.iridescenceIOR.value=u.iridescenceIOR,_.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(_.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,_.iridescenceMapTransform)),u.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),u.transmission>0&&(_.transmission.value=u.transmission,_.transmissionSamplerMap.value=v.texture,_.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(_.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,_.transmissionMapTransform)),_.thickness.value=u.thickness,u.thicknessMap&&(_.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=u.attenuationDistance,_.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(_.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(_.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=u.specularIntensity,_.specularColor.value.copy(u.specularColor),u.specularColorMap&&(_.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,_.specularColorMapTransform)),u.specularIntensityMap&&(_.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,u){u.matcap&&(_.matcap.value=u.matcap)}function w(_,u){const v=e.get(u).light;_.referencePosition.value.setFromMatrixPosition(v.matrixWorld),_.nearDistance.value=v.shadow.camera.near,_.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function H2(t,e,n,i){let r={},s={},o=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,T){const b=T.program;i.uniformBlockBinding(S,b)}function d(S,T){let b=r[S.id];b===void 0&&(_(S),b=f(S),r[S.id]=b,S.addEventListener("dispose",v));const A=T.program;i.updateUBOMapping(S,A);const x=e.render.frame;s[S.id]!==x&&(h(S),s[S.id]=x)}function f(S){const T=p();S.__bindingPointIndex=T;const b=t.createBuffer(),A=S.__size,x=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,A,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,b),b}function p(){for(let S=0;S<l;S++)if(o.indexOf(S)===-1)return o.push(S),S;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const T=r[S.id],b=S.uniforms,A=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let x=0,N=b.length;x<N;x++){const P=b[x];if(Array.isArray(P))for(let D=0,O=P.length;D<O;D++)g(P[D],x,D,A);else g(P,x,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(S,T,b,A){if(w(S,T,b,A)===!0){const x=S.__offset,N=S.value;if(Array.isArray(N)){let P=0;for(let D=0;D<N.length;D++){const O=N[D],V=u(O);m(O,S.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(N,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,S.__data)}}function m(S,T,b){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,b)}function w(S,T,b,A){const x=S.value,N=T+"_"+b;if(A[N]===void 0)return typeof x=="number"||typeof x=="boolean"?A[N]=x:ArrayBuffer.isView(x)?A[N]=x.slice():A[N]=x.clone(),!0;{const P=A[N];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return A[N]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function _(S){const T=S.uniforms;let b=0;const A=16;for(let N=0,P=T.length;N<P;N++){const D=Array.isArray(T[N])?T[N]:[T[N]];for(let O=0,V=D.length;O<V;O++){const U=D[O],I=Array.isArray(U.value)?U.value:[U.value];for(let ne=0,K=I.length;ne<K;ne++){const z=I[ne],j=u(z),W=b%A,Z=W%j.boundary,he=W+Z;b+=Z,he!==0&&A-he<j.storage&&(b+=A-he),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=j.storage}}}const x=b%A;return x>0&&(b+=A-x),S.__size=b,S.__cache={},this}function u(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",S),T}function v(S){const T=S.target;T.removeEventListener("dispose",v);const b=o.indexOf(T.__bindingPointIndex);o.splice(b,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function E(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:d,dispose:E}}const V2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function G2(){return fi===null&&(fi=new Pb(V2,16,16,ns,Mi),fi.name="DFG_LUT",fi.minFilter=dn,fi.magFilter=dn,fi.wrapS=Fi,fi.wrapT=Fi,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class W2{constructor(e={}){const{canvas:n=GS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:g=In}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const w=g,_=new Set([Lf,Pf,Rf]),u=new Set([In,wi,fo,po,Af,Cf]),v=new Uint32Array(4),E=new Int32Array(4),S=new H;let T=null,b=null;const A=[],x=[];let N=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,O=null,V=null,U=null,I=null;this._outputColorSpace=Vn;let ne=0,K=0,z=null,j=-1,W=null;const Z=new Pt,he=new Pt;let Se=null;const He=new rt(0);let Fe=0,Oe=n.width,Q=n.height,re=1,_e=null,se=null;const le=new Pt(0,0,Oe,Q),De=new Pt(0,0,Oe,Q);let dt=!1;const ke=new Of;let Ge=!1,nt=!1;const qe=new kt,Ze=new H,Nt=new Pt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function mt(){return z===null?re:1}let F=i;function wt(M,L){return n.getContext(M,L)}let Je,C,y,B,X,ee,G,ae,q,te,ce,Ne,xe,pe,Ee,Ue,Ve,k,me,ie,fe,ge,oe;try{const M={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Tf}`),n.addEventListener("webglcontextlost",ut,!1),n.addEventListener("webglcontextrestored",it,!1),n.addEventListener("webglcontextcreationerror",Zt,!1),F===null){const L="webgl2";if(F=wt(L,M),F===null)throw wt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}we()}catch(M){throw n.removeEventListener("webglcontextlost",ut,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",Zt,!1),ht("WebGLRenderer: "+M.message),M}function we(){Je=new GM(F),Je.init(),fe=new k2(F,Je),C=new IM(F,Je,e,fe),y=new D2(F,Je),C.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),V=F.createFramebuffer(),U=F.createFramebuffer(),I=F.createFramebuffer(),B=new qM(F),X=new _2,ee=new I2(F,Je,y,X,C,fe,B),G=new VM(P),ae=new Yb(F),ge=new LM(F,ae),q=new WM(F,ae,B,ge),te=new YM(F,q,ae,ge,B),k=new $M(F,C,ee),Ee=new kM(X),ce=new v2(P,G,Je,C,ge,Ee),Ne=new z2(P,X),xe=new S2,pe=new N2(Je),Ve=new PM(P,G,y,te,m,c),Ue=new L2(P,te,C),oe=new H2(F,B,C,y),me=new DM(F,Je,B),ie=new XM(F,Je,B),B.programs=ce.programs,P.capabilities=C,P.extensions=Je,P.properties=X,P.renderLists=xe,P.shadowMap=Ue,P.state=y,P.info=B}w!==In&&(N=new ZM(w,n.width,n.height,l,r,s));const Ae=new B2(P,F);this.xr=Ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=Je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(M){M!==void 0&&(re=M,this.setSize(Oe,Q,!1))},this.getSize=function(M){return M.set(Oe,Q)},this.setSize=function(M,L,J=!0){if(Ae.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=M,Q=L,n.width=Math.floor(M*re),n.height=Math.floor(L*re),J===!0&&(n.style.width=M+"px",n.style.height=L+"px"),N!==null&&N.setSize(n.width,n.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(Oe*re,Q*re).floor()},this.setDrawingBufferSize=function(M,L,J){Oe=M,Q=L,re=J,n.width=Math.floor(M*J),n.height=Math.floor(L*J),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(w===In){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Z)},this.getViewport=function(M){return M.copy(le)},this.setViewport=function(M,L,J,$){M.isVector4?le.set(M.x,M.y,M.z,M.w):le.set(M,L,J,$),y.viewport(Z.copy(le).multiplyScalar(re).round())},this.getScissor=function(M){return M.copy(De)},this.setScissor=function(M,L,J,$){M.isVector4?De.set(M.x,M.y,M.z,M.w):De.set(M,L,J,$),y.scissor(he.copy(De).multiplyScalar(re).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(M){y.setScissorTest(dt=M)},this.setOpaqueSort=function(M){_e=M},this.setTransparentSort=function(M){se=M},this.getClearColor=function(M){return M.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,J=!0){let $=0;if(M){let Y=!1;if(z!==null){const be=z.texture.format;Y=_.has(be)}if(Y){const be=z.texture.type,Ce=u.has(be),ye=Ve.getClearColor(),Pe=Ve.getClearAlpha(),Ie=ye.r,$e=ye.g,Qe=ye.b;Ce?(v[0]=Ie,v[1]=$e,v[2]=Qe,v[3]=Pe,F.clearBufferuiv(F.COLOR,0,v)):(E[0]=Ie,E[1]=$e,E[2]=Qe,E[3]=Pe,F.clearBufferiv(F.COLOR,0,E))}else $|=F.COLOR_BUFFER_BIT}L&&($|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){n.removeEventListener("webglcontextlost",ut,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",Zt,!1),Ve.dispose(),xe.dispose(),pe.dispose(),X.dispose(),G.dispose(),te.dispose(),ge.dispose(),oe.dispose(),ce.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",vt),Ae.removeEventListener("sessionend",fn),pn.stop()};function ut(M){M.preventDefault(),mm("WebGLRenderer: Context Lost."),D=!0}function it(){mm("WebGLRenderer: Context Restored."),D=!1;const M=B.autoReset,L=Ue.enabled,J=Ue.autoUpdate,$=Ue.needsUpdate,Y=Ue.type;we(),B.autoReset=M,Ue.enabled=L,Ue.autoUpdate=J,Ue.needsUpdate=$,Ue.type=Y}function Zt(M){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function nn(M){const L=M.target;L.removeEventListener("dispose",nn),Tr(L)}function Tr(M){R(M),X.remove(M)}function R(M){const L=X.get(M).programs;L!==void 0&&(L.forEach(function(J){ce.releaseProgram(J)}),M.isShaderMaterial&&ce.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,J,$,Y,be){L===null&&(L=We);const Ce=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,ye=Rr(M,L,J,$,Y);y.setMaterial($,Ce);let Pe=J.index,Ie=1;if($.wireframe===!0){if(Pe=q.getWireframeAttribute(J),Pe===void 0)return;Ie=2}const $e=J.drawRange,Qe=J.attributes.position;let Le=$e.start*Ie,ft=($e.start+$e.count)*Ie;be!==null&&(Le=Math.max(Le,be.start*Ie),ft=Math.min(ft,(be.start+be.count)*Ie)),Pe!==null?(Le=Math.max(Le,0),ft=Math.min(ft,Pe.count)):Qe!=null&&(Le=Math.max(Le,0),ft=Math.min(ft,Qe.count));const Bt=ft-Le;if(Bt<0||Bt===1/0)return;ge.setup(Y,$,ye,J,Pe);let Mt,yt=me;if(Pe!==null&&(Mt=ae.get(Pe),yt=ie,yt.setIndex(Mt)),Y.isMesh)$.wireframe===!0?(y.setLineWidth($.wireframeLinewidth*mt()),yt.setMode(F.LINES)):yt.setMode(F.TRIANGLES);else if(Y.isLine){let rn=$.linewidth;rn===void 0&&(rn=1),y.setLineWidth(rn*mt()),Y.isLineSegments?yt.setMode(F.LINES):Y.isLineLoop?yt.setMode(F.LINE_LOOP):yt.setMode(F.LINE_STRIP)}else Y.isPoints?yt.setMode(F.POINTS):Y.isSprite&&yt.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))yt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const rn=Y._multiDrawStarts,Te=Y._multiDrawCounts,mn=Y._multiDrawCount,ot=Pe?ae.get(Pe).bytesPerElement:1,zn=X.get($).currentProgram.getUniforms();for(let di=0;di<mn;di++)zn.setValue(F,"_gl_DrawID",di),yt.render(rn[di]/ot,Te[di])}else if(Y.isInstancedMesh)yt.renderInstances(Le,Bt,Y.count);else if(J.isInstancedBufferGeometry){const rn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Te=Math.min(J.instanceCount,rn);yt.renderInstances(Le,Bt,Te)}else yt.render(Le,Bt)};function Me(M,L,J,$){O!==null&&M.isNodeMaterial&&O.setObject($,M),Ge===!0&&Ee.setState(M,J,!1),M.transparent===!0&&M.side===gi&&M.forceSinglePass===!1?(M.side=An,M.needsUpdate=!0,Cr(M,L,$),M.side=es,M.needsUpdate=!0,Cr(M,L,$),M.side=gi):Cr(M,L,$)}this.compile=function(M,L,J=null){J===null&&(J=M),O!==null&&O.renderStart(M,L,J),b=pe.get(J),b.init(L),x.push(b),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(L.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),M!==J&&M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(L.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),nt=this.localClippingEnabled,Ge=Ee.init(this.clippingPlanes,nt),Ge===!0&&Ee.setGlobalState(this.clippingPlanes,L),O!==null&&Ue.render(b.state.shadowsArray,J,L);const $=new Set;return M.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const be=Y.material;if(be)if(Array.isArray(be))for(let Ce=0;Ce<be.length;Ce++){const ye=be[Ce];Me(ye,J,L,Y),$.add(ye)}else Me(be,J,L,Y),$.add(be)}),b=x.pop(),O!==null&&O.renderEnd(),$},this.compileAsync=function(M,L,J=null){const $=this.compile(M,L,J);return new Promise(Y=>{function be(){if($.forEach(function(Ce){const Pe=X.get(Ce).currentProgram;(Pe===void 0||Pe.isReady())&&$.delete(Ce)}),$.size===0){Y(M);return}setTimeout(be,10)}Je.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let je=null;function st(M){je&&je(M)}function vt(){pn.stop()}function fn(){pn.start()}const pn=new rv;pn.setAnimationLoop(st),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(M){je=M,Ae.setAnimationLoop(M),M===null?pn.stop():pn.start()},Ae.addEventListener("sessionstart",vt),Ae.addEventListener("sessionend",fn),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(M,L);const J=Ae.enabled===!0&&Ae.isPresenting===!0,$=N!==null&&(z===null||J)&&N.begin(P,z);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(L),L=Ae.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,L,z),b=pe.get(M,x.length),b.init(L),b.state.textureUnits=ee.getTextureUnits(),x.push(b),qe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),ke.setFromProjectionMatrix(qe,_i,L.reversedDepth),nt=this.localClippingEnabled,Ge=Ee.init(this.clippingPlanes,nt),T=xe.get(M,A.length),T.init(),A.push(T),Ae.enabled===!0&&Ae.isPresenting===!0){const Ce=P.xr.getDepthSensingMesh();Ce!==null&&Kn(Ce,L,-1/0,P.sortObjects)}Kn(M,L,0,P.sortObjects),T.finish(),O!==null&&O.updateLights(b.state.lightsArray),P.sortObjects===!0&&T.sort(_e,se),pt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,pt&&Ve.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ge===!0&&Ee.beginShadows();const Y=b.state.shadowsArray;if(Ue.render(Y,M,L),Ge===!0&&Ee.endShadows(),($&&N.hasRenderPass())===!1){const Ce=T.opaque,ye=T.transmissive;if(b.setupLights(),L.isArrayCamera){const Pe=L.cameras;if(ye.length>0)for(let Ie=0,$e=Pe.length;Ie<$e;Ie++){const Qe=Pe[Ie];ca(Ce,ye,M,Qe)}pt&&Ve.render(M);for(let Ie=0,$e=Pe.length;Ie<$e;Ie++){const Qe=Pe[Ie];Nr(T,M,Qe,Qe.viewport)}}else ye.length>0&&ca(Ce,ye,M,L),pt&&Ve.render(M),Nr(T,M,L)}z!==null&&K===0&&(ee.updateMultisampleRenderTarget(z),ee.updateRenderTargetMipmap(z)),$&&N.end(P),M.isScene===!0&&M.onAfterRender(P,M,L),ge.resetDefaultState(),j=-1,W=null,x.pop(),x.length>0?(b=x[x.length-1],ee.setTextureUnits(b.state.textureUnits),Ge===!0&&Ee.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,O!==null&&O.renderEnd()};function Kn(M,L,J,$){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)J=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(ke)){$&&Nt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(qe);const Ce=te.update(M),ye=M.material;ye.visible&&T.push(M,Ce,ye,J,Nt.z,null,L)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(ke))){const Ce=te.update(M),ye=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Nt.copy(M.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Nt.copy(Ce.boundingSphere.center)),Nt.applyMatrix4(M.matrixWorld).applyMatrix4(qe)),Array.isArray(ye)){const Pe=Ce.groups;for(let Ie=0,$e=Pe.length;Ie<$e;Ie++){const Qe=Pe[Ie],Le=ye[Qe.materialIndex];Le&&Le.visible&&T.push(M,Ce,Le,J,Nt.z,Qe,L)}}else ye.visible&&T.push(M,Ce,ye,J,Nt.z,null,L)}}const be=M.children;for(let Ce=0,ye=be.length;Ce<ye;Ce++)Kn(be[Ce],L,J,$)}function Nr(M,L,J,$){const{opaque:Y,transmissive:be,transparent:Ce}=M;b.setupLightsView(J),Ge===!0&&Ee.setGlobalState(P.clippingPlanes,J),$&&y.viewport(Z.copy($)),Y.length>0&&Ar(Y,L,J),be.length>0&&Ar(be,L,J),Ce.length>0&&Ar(Ce,L,J),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ca(M,L,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[$.id]===void 0){const Le=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[$.id]=new li(1,1,{generateMipmaps:!0,type:Le?Mi:In,minFilter:Gr,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}const be=b.state.transmissionRenderTarget[$.id],Ce=$.viewport||Z;be.setSize(Ce.z*P.transmissionResolutionScale,Ce.w*P.transmissionResolutionScale);const ye=P.getRenderTarget(),Pe=P.getActiveCubeFace(),Ie=P.getActiveMipmapLevel();P.setRenderTarget(be),P.getClearColor(He),Fe=P.getClearAlpha(),Fe<1&&P.setClearColor(16777215,.5),P.clear(),pt&&Ve.render(J);const $e=P.toneMapping;P.toneMapping=bi;const Qe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),b.setupLightsView($),Ge===!0&&Ee.setGlobalState(P.clippingPlanes,$),Ar(M,J,$),ee.updateMultisampleRenderTarget(be),ee.updateRenderTargetMipmap(be),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let ft=0,Bt=L.length;ft<Bt;ft++){const Mt=L[ft],{object:yt,geometry:rn,material:Te,group:mn}=Mt;if(Te.side===gi&&yt.layers.test($.layers)){const ot=Te.side;Te.side=An,Te.needsUpdate=!0,da(yt,J,$,rn,Te,mn),Te.side=ot,Te.needsUpdate=!0,Le=!0}}Le===!0&&(ee.updateMultisampleRenderTarget(be),ee.updateRenderTargetMipmap(be))}P.setRenderTarget(ye,Pe,Ie),P.setClearColor(He,Fe),Qe!==void 0&&($.viewport=Qe),P.toneMapping=$e}function Ar(M,L,J){const $=L.isScene===!0?L.overrideMaterial:null;for(let Y=0,be=M.length;Y<be;Y++){const Ce=M[Y],{object:ye,geometry:Pe,group:Ie}=Ce;let $e=Ce.material;$e.allowOverride===!0&&$!==null&&($e=$),ye.layers.test(J.layers)&&da(ye,L,J,Pe,$e,Ie)}}function da(M,L,J,$,Y,be){O!==null&&Y.isNodeMaterial&&O.setObject(M,Y),M.onBeforeRender(P,L,J,$,Y,be),M.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Y.onBeforeRender(P,L,J,$,M,be),Y.transparent===!0&&Y.side===gi&&Y.forceSinglePass===!1?(Y.side=An,Y.needsUpdate=!0,P.renderBufferDirect(J,L,$,Y,M,be),Y.side=es,Y.needsUpdate=!0,P.renderBufferDirect(J,L,$,Y,M,be),Y.side=gi):P.renderBufferDirect(J,L,$,Y,M,be),M.onAfterRender(P,L,J,$,Y,be)}function Cr(M,L,J){L.isScene!==!0&&(L=We);const $=X.get(M),Y=b.state.lights,be=b.state.shadowsArray,Ce=Y.state.version,ye=ce.getParameters(M,Y.state,be,L,J,b.state.lightProbeGridArray),Pe=ce.getProgramCacheKey(ye);let Ie=$.programs;$.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,$.fog=L.fog;const $e=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;$.envMap=G.get(M.envMap||$.environment,$e),$.envMapRotation=$.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",nn),Ie=new Map,$.programs=Ie);let Qe=Ie.get(Pe);if(Qe!==void 0){if($.currentProgram===Qe&&$.lightsStateVersion===Ce)return To(M,ye),Qe}else ye.uniforms=ce.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,J,ye),M.onBeforeCompile(ye,P),Qe=ce.acquireProgram(ye,Pe),Ie.set(Pe,Qe),$.uniforms=ye.uniforms;const Le=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=Ee.uniform),To(M,ye),$.needsLights=Fc(M),$.lightsStateVersion=Ce,$.needsLights&&(Le.ambientLightColor.value=Y.state.ambient,Le.lightProbe.value=Y.state.probe,Le.sunLights.value=Y.state.sun,Le.sunLightShadows.value=Y.state.sunShadow,Le.directionalLights.value=Y.state.directional,Le.directionalLightShadows.value=Y.state.directionalShadow,Le.spotLights.value=Y.state.spot,Le.spotLightShadows.value=Y.state.spotShadow,Le.rectAreaLights.value=Y.state.rectArea,Le.ltc_1.value=Y.state.rectAreaLTC1,Le.ltc_2.value=Y.state.rectAreaLTC2,Le.pointLights.value=Y.state.point,Le.pointLightShadows.value=Y.state.pointShadow,Le.hemisphereLights.value=Y.state.hemi,Le.sunShadowMatrix.value=Y.state.sunShadowMatrix,Le.sunShadowCascade.value=Y.state.sunShadowCascade,Le.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Le.spotLightMatrix.value=Y.state.spotLightMatrix,Le.spotLightMap.value=Y.state.spotLightMap,Le.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.lightProbeGrid=b.state.lightProbeGridArray.length>0,$.currentProgram=Qe,$.uniformsList=null,Qe}function Eo(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=Ul.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function To(M,L){const J=X.get(M);J.outputColorSpace=L.outputColorSpace,J.batching=L.batching,J.batchingColor=L.batchingColor,J.instancing=L.instancing,J.instancingColor=L.instancingColor,J.instancingMorph=L.instancingMorph,J.skinning=L.skinning,J.morphTargets=L.morphTargets,J.morphNormals=L.morphNormals,J.morphColors=L.morphColors,J.morphTargetsCount=L.morphTargetsCount,J.numClippingPlanes=L.numClippingPlanes,J.numIntersection=L.numClipIntersection,J.vertexAlphas=L.vertexAlphas,J.vertexTangents=L.vertexTangents,J.toneMapping=L.toneMapping}function No(M,L){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(L.matrixWorld);for(let J=0,$=M.length;J<$;J++){const Y=M[J];if(Y.texture!==null&&Y.boundingBox.containsPoint(S))return Y}return null}function Rr(M,L,J,$,Y){L.isScene!==!0&&(L=We),ee.resetTextureUnits();const be=L.fog,Ce=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?L.environment:null,ye=z===null?P.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:at.workingColorSpace,Pe=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ie=G.get($.envMap||Ce,Pe),$e=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Le=!!J.morphAttributes.position,ft=!!J.morphAttributes.normal,Bt=!!J.morphAttributes.color;let Mt=bi;$.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Mt=P.toneMapping);const yt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,rn=yt!==void 0?yt.length:0,Te=X.get($),mn=b.state.lights;if(Ge===!0&&(nt===!0||M!==W)){const St=M===W&&$.id===j;Ee.setState($,M,St)}let ot=!1;$.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==mn.state.version||Te.outputColorSpace!==ye||Y.isBatchedMesh&&Te.batching===!1||!Y.isBatchedMesh&&Te.batching===!0||Y.isBatchedMesh&&Te.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Te.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Te.instancing===!1||!Y.isInstancedMesh&&Te.instancing===!0||Y.isSkinnedMesh&&Te.skinning===!1||!Y.isSkinnedMesh&&Te.skinning===!0||Y.isInstancedMesh&&Te.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Te.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Te.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Te.instancingMorph===!1&&Y.morphTexture!==null||Te.envMap!==Ie||$.fog===!0&&Te.fog!==be||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Ee.numPlanes||Te.numIntersection!==Ee.numIntersection)||Te.vertexAlphas!==$e||Te.vertexTangents!==Qe||Te.morphTargets!==Le||Te.morphNormals!==ft||Te.morphColors!==Bt||Te.toneMapping!==Mt||Te.morphTargetsCount!==rn||!!Te.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Te.__version=$.version);let zn=Te.currentProgram;ot===!0&&(zn=Cr($,L,Y),O&&$.isNodeMaterial&&O.onUpdateProgram($,zn,Te));let di=!1,$i=!1,as=!1;const _t=zn.getUniforms(),Ut=Te.uniforms;if(y.useProgram(zn.program)&&(di=!0,$i=!0,as=!0),$.id!==j&&(j=$.id,$i=!0),Te.needsLights){const St=No(b.state.lightProbeGridArray,Y);Te.lightProbeGrid!==St&&(Te.lightProbeGrid=St,$i=!0)}if(di||W!==M){y.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),_t.setValue(F,"projectionMatrix",M.projectionMatrix),_t.setValue(F,"viewMatrix",M.matrixWorldInverse);const Ki=_t.map.cameraPosition;Ki!==void 0&&Ki.setValue(F,Ze.setFromMatrixPosition(M.matrixWorld)),C.logarithmicDepthBuffer&&_t.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&_t.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),W!==M&&(W=M,$i=!0,as=!0)}if(Te.needsLights&&(mn.state.sunShadowMap.length>0&&_t.setValue(F,"sunShadowMap",mn.state.sunShadowMap,ee),mn.state.directionalShadowMap.length>0&&_t.setValue(F,"directionalShadowMap",mn.state.directionalShadowMap,ee),mn.state.spotShadowMap.length>0&&_t.setValue(F,"spotShadowMap",mn.state.spotShadowMap,ee),mn.state.pointShadowMap.length>0&&_t.setValue(F,"pointShadowMap",mn.state.pointShadowMap,ee)),Y.isSkinnedMesh){_t.setOptional(F,Y,"bindMatrix"),_t.setOptional(F,Y,"bindMatrixInverse");const St=Y.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),_t.setValue(F,"boneTexture",St.boneTexture,ee))}Y.isBatchedMesh&&(_t.setOptional(F,Y,"batchingTexture"),_t.setValue(F,"batchingTexture",Y._matricesTexture,ee),_t.setOptional(F,Y,"batchingIdTexture"),_t.setValue(F,"batchingIdTexture",Y._indirectTexture,ee),_t.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&_t.setValue(F,"batchingColorTexture",Y._colorsTexture,ee));const Yi=J.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&k.update(Y,J,zn),($i||Te.receiveShadow!==Y.receiveShadow)&&(Te.receiveShadow=Y.receiveShadow,_t.setValue(F,"receiveShadow",Y.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&L.environment!==null&&(Ut.envMapIntensity.value=L.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=G2()),$i){if(_t.setValue(F,"toneMappingExposure",P.toneMappingExposure),Te.needsLights&&Ao(Ut,as),be&&$.fog===!0&&Ne.refreshFogUniforms(Ut,be),Ne.refreshMaterialUniforms(Ut,$,re,Q,b.state.transmissionRenderTarget[M.id]),Te.needsLights&&Te.lightProbeGrid){const St=Te.lightProbeGrid;Ut.probesSH.value=St.texture,Ut.probesMin.value.copy(St.boundingBox.min),Ut.probesMax.value.copy(St.boundingBox.max),Ut.probesResolution.value.copy(St.resolution)}Ul.upload(F,Eo(Te),Ut,ee)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ul.upload(F,Eo(Te),Ut,ee),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&_t.setValue(F,"center",Y.center),_t.setValue(F,"modelViewMatrix",Y.modelViewMatrix),_t.setValue(F,"normalMatrix",Y.normalMatrix),_t.setValue(F,"modelMatrix",Y.matrixWorld),$.uniformsGroups!==void 0){const St=$.uniformsGroups;for(let Ki=0,os=St.length;Ki<os;Ki++){const Yf=St[Ki];oe.update(Yf,zn),oe.bind(Yf,zn)}}return zn}function Ao(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.sunLights.needsUpdate=L,M.sunLightShadows.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Fc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(M,L,J){const $=X.get(M);$.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),X.get(M.texture).__webglTexture=L,X.get(M.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:J,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){const J=X.get(M);J.__webglFramebuffer=L,J.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,J=0){z=M,ne=L,K=J;let $=null,Y=!1,be=!1;if(M){const ye=X.get(M);if(ye.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(F.FRAMEBUFFER,ye.__webglFramebuffer),Z.copy(M.viewport),he.copy(M.scissor),Se=M.scissorTest,y.viewport(Z),y.scissor(he),y.setScissorTest(Se),j=-1;return}else if(ye.__webglFramebuffer===void 0)ee.setupRenderTarget(M);else if(ye.__hasExternalTextures)ee.rebindTextures(M,X.get(M.texture).__webglTexture,X.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const $e=M.depthTexture;if(ye.__boundDepthTexture!==$e){if($e!==null&&X.has($e)&&(M.width!==$e.image.width||M.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(M)}}const Pe=M.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(be=!0);const Ie=X.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[L])?$=Ie[L][J]:$=Ie[L],Y=!0):M.samples>0&&ee.useMultisampledRTT(M)===!1?$=X.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?$=Ie[J]:$=Ie,Z.copy(M.viewport),he.copy(M.scissor),Se=M.scissorTest}else Z.copy(le).multiplyScalar(re).floor(),he.copy(De).multiplyScalar(re).floor(),Se=dt;if(J!==0&&($=V),y.bindFramebuffer(F.FRAMEBUFFER,$)&&y.drawBuffers(M,$),y.viewport(Z),y.scissor(he),y.setScissorTest(Se),Y){const ye=X.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+L,ye.__webglTexture,J)}else if(be){const ye=L;for(let Pe=0;Pe<M.textures.length;Pe++){const Ie=X.get(M.textures[Pe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Pe,Ie.__webglTexture,J,ye)}}else if(M!==null&&J!==0){const ye=X.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ye.__webglTexture,J)}j=-1};function ua(M){const L=X.get(M);return(L.__readFormat!==M.format||L.__readType!==M.type)&&(L.__readFormat=M.format,L.__readType=M.type,L.__formatReadable=C.textureFormatReadable(M.format),L.__typeReadable=C.textureTypeReadable(M.type)),L}this.readRenderTargetPixels=function(M,L,J,$,Y,be,Ce,ye=0){if(!(M&&M.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe){y.bindFramebuffer(F.FRAMEBUFFER,Pe);try{const Ie=M.textures[ye],$e=Ie.format,Qe=Ie.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye);const Le=ua(Ie);if(Le.__formatReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-$&&J>=0&&J<=M.height-Y&&F.readPixels(L,J,$,Y,fe.convert($e),fe.convert(Qe),be)}finally{const Ie=z!==null?X.get(z).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(M,L,J,$,Y,be,Ce,ye=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe)if(L>=0&&L<=M.width-$&&J>=0&&J<=M.height-Y){y.bindFramebuffer(F.FRAMEBUFFER,Pe);const Ie=M.textures[ye],$e=Ie.format,Qe=Ie.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye);const Le=ua(Ie);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ft),F.bufferData(F.PIXEL_PACK_BUFFER,be.byteLength,F.STREAM_READ),F.readPixels(L,J,$,Y,fe.convert($e),fe.convert(Qe),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Bt=z!==null?X.get(z).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,Bt);const Mt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await WS(F,Mt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ft),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,be),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ft),F.deleteSync(Mt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,J=0){const $=Math.pow(2,-J),Y=Math.floor(M.image.width*$),be=Math.floor(M.image.height*$),Ce=L!==null?L.x:0,ye=L!==null?L.y:0;ee.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,Ce,ye,Y,be),y.unbindTexture()},this.copyTextureToTexture=function(M,L,J=null,$=null,Y=0,be=0){let Ce,ye,Pe,Ie,$e,Qe,Le,ft,Bt;const Mt=M.isCompressedTexture?M.mipmaps[be]:M.image;if(J!==null)Ce=J.max.x-J.min.x,ye=J.max.y-J.min.y,Pe=J.isBox3?J.max.z-J.min.z:1,Ie=J.min.x,$e=J.min.y,Qe=J.isBox3?J.min.z:0;else{const Ut=Math.pow(2,-Y);Ce=Math.floor(Mt.width*Ut),ye=Math.floor(Mt.height*Ut),M.isDataArrayTexture?Pe=Mt.depth:M.isData3DTexture?Pe=Math.floor(Mt.depth*Ut):Pe=1,Ie=0,$e=0,Qe=0}$!==null?(Le=$.x,ft=$.y,Bt=$.z):(Le=0,ft=0,Bt=0);const yt=fe.convert(L.format),rn=fe.convert(L.type);let Te;L.isData3DTexture?(ee.setTexture3D(L,0),Te=F.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(ee.setTexture2DArray(L,0),Te=F.TEXTURE_2D_ARRAY):(ee.setTexture2D(L,0),Te=F.TEXTURE_2D),y.activeTexture(F.TEXTURE0),y.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,L.flipY),y.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),y.pixelStorei(F.UNPACK_ALIGNMENT,L.unpackAlignment);const mn=y.getParameter(F.UNPACK_ROW_LENGTH),ot=y.getParameter(F.UNPACK_IMAGE_HEIGHT),zn=y.getParameter(F.UNPACK_SKIP_PIXELS),di=y.getParameter(F.UNPACK_SKIP_ROWS),$i=y.getParameter(F.UNPACK_SKIP_IMAGES);y.pixelStorei(F.UNPACK_ROW_LENGTH,Mt.width),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mt.height),y.pixelStorei(F.UNPACK_SKIP_PIXELS,Ie),y.pixelStorei(F.UNPACK_SKIP_ROWS,$e),y.pixelStorei(F.UNPACK_SKIP_IMAGES,Qe);const as=M.isDataArrayTexture||M.isData3DTexture,_t=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){const Ut=X.get(M),Yi=X.get(L),St=X.get(Ut.__renderTarget),Ki=X.get(Yi.__renderTarget);y.bindFramebuffer(F.READ_FRAMEBUFFER,St.__webglFramebuffer),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let os=0;os<Pe;os++)as&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(M).__webglTexture,Y,Qe+os),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(L).__webglTexture,be,Bt+os)),F.blitFramebuffer(Ie,$e,Ce,ye,Le,ft,Ce,ye,F.DEPTH_BUFFER_BIT,F.NEAREST);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||M.isRenderTargetTexture||X.has(M)){const Ut=X.get(M),Yi=X.get(L);y.bindFramebuffer(F.READ_FRAMEBUFFER,U),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,I);for(let St=0;St<Pe;St++)as?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.__webglTexture,Y,Qe+St):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ut.__webglTexture,Y),_t?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yi.__webglTexture,be,Bt+St):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Yi.__webglTexture,be),Y!==0?F.blitFramebuffer(Ie,$e,Ce,ye,Le,ft,Ce,ye,F.COLOR_BUFFER_BIT,F.NEAREST):_t?F.copyTexSubImage3D(Te,be,Le,ft,Bt+St,Ie,$e,Ce,ye):F.copyTexSubImage2D(Te,be,Le,ft,Ie,$e,Ce,ye);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else _t?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Te,be,Le,ft,Bt,Ce,ye,Pe,yt,rn,Mt.data):L.isCompressedArrayTexture?F.compressedTexSubImage3D(Te,be,Le,ft,Bt,Ce,ye,Pe,yt,Mt.data):F.texSubImage3D(Te,be,Le,ft,Bt,Ce,ye,Pe,yt,rn,Mt):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,be,Le,ft,Ce,ye,yt,rn,Mt.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,be,Le,ft,Mt.width,Mt.height,yt,Mt.data):F.texSubImage2D(F.TEXTURE_2D,be,Le,ft,Ce,ye,yt,rn,Mt);y.pixelStorei(F.UNPACK_ROW_LENGTH,mn),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot),y.pixelStorei(F.UNPACK_SKIP_PIXELS,zn),y.pixelStorei(F.UNPACK_SKIP_ROWS,di),y.pixelStorei(F.UNPACK_SKIP_IMAGES,$i),be===0&&L.generateMipmaps&&F.generateMipmap(Te),y.unbindTexture()},this.initRenderTarget=function(M){X.get(M).__webglFramebuffer===void 0&&ee.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ee.setTextureCube(M,0):M.isData3DTexture?ee.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ee.setTexture2DArray(M,0):ee.setTexture2D(M,0),y.unbindTexture()},this.resetState=function(){ne=0,K=0,z=null,y.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),n.unpackColorSpace=at._getUnpackColorSpace()}}function X2(){const t=ue.useRef(null),e=[{id:"overview",label:"Overview",desc:"Heavy-Duty Autonomous Campus Kiosk",icon:Zy,duration:5.5},{id:"scanner",label:"Optical Scanner",desc:"600 DPI Auto-Duplexing Glass Bed",icon:Ui,duration:4.5},{id:"screen",label:"Touch HUD",desc:"EasePrint OS Live Dispatch Console",icon:uo,duration:4.5},{id:"trays",label:"Paper Trays",desc:"Dual 1000-Sheet High-Speed Drawers",icon:oc,duration:4.5}],[n,i]=ue.useState(0),[r,s]=ue.useState(!0),o=ue.useRef(r);o.current=r;const l=ue.useRef(0);l.current=n;const c=ue.useRef(0),d=f=>{i(f),c.current=0};return ue.useEffect(()=>{const f=t.current;if(!f)return;const p=f.clientWidth||window.innerWidth,h=f.clientHeight||750,g=new bb;g.background=null;const m=p<1024,w=m?0:2.5,_=m?0:.6,u=m?.38:.36,v=new Dn(38,p/h,.1,100),E=new H(m?4.2:5.4,3.4,6.8),S=new H(_,.9,0);v.position.copy(E),v.lookAt(S);const T=[{pos:new H(m?4.2:5.4,3.4,6.8),target:new H(m?0:1.3,.9,0)},{pos:new H(m?0:2.4,5.4,4.4),target:new H(m?0:2.4,1.8,0)},{pos:new H(m?2.6:3.9,3.2,3.8),target:new H(m?1.15:2.9,1.7,.6)},{pos:new H(m?2.4:3.7,1.8,4.6),target:new H(m?0:1.9,.7,.3)}],b=new W2({antialias:!0,alpha:!0,powerPreference:"high-performance"});b.setSize(p,h),b.setPixelRatio(Math.min(window.devicePixelRatio,2)),b.shadowMap.enabled=!0,b.shadowMap.type=Ag,f.appendChild(b.domElement);const A=new ir({color:16317180,roughness:.25,metalness:.15}),x=new ir({color:4674921,roughness:.35,metalness:.35}),N=new ir({color:165063,roughness:.2,metalness:.8}),P=new Bb({color:14742270,transmission:.8,opacity:.9,transparent:!0,roughness:.08,ior:1.5,reflectivity:.95}),D=new Br({color:165063,transparent:!0,opacity:.95}),O=new ir({color:988970,emissive:223649,emissiveIntensity:.65,roughness:.2}),V=new ir({color:16777215,roughness:.85,metalness:.05}),U=new ir({color:15857145,roughness:.8,metalness:.05}),I=new Da;I.scale.set(u,u,u),I.position.set(w,m?0:.2,0),g.add(I);const ne=new At(2,.22,1.8),K=new lt(ne,x);K.position.y=.11,K.castShadow=!0,K.receiveShadow=!0,I.add(K);const z=new pc(.08,.08,.12,16),j=new ir({color:1976635,metalness:.8,roughness:.3});[[-.85,-.75],[.85,-.75],[-.85,.75],[.85,.75]].forEach(([R,Me])=>{const je=new lt(z,j);je.position.set(R,.06,Me),I.add(je)});const W=new At(1.92,1,1.72),Z=new lt(W,A);Z.position.y=.72,Z.castShadow=!0,Z.receiveShadow=!0,I.add(Z);for(let R=0;R<2;R++){const Me=new At(1.8,.38,.04),je=new lt(Me,x);je.position.set(0,.52+R*.44,.87),I.add(je);const st=new At(.48,.06,.06),vt=new lt(st,N);vt.position.set(0,.52+R*.44,.91),I.add(vt);const fn=new At(.18,.04,.02),pn=new Br({color:1096065}),Kn=new lt(fn,pn);Kn.position.set(.65,.52+R*.44,.9),I.add(Kn)}const he=new At(1.86,.65,1.66),Se=new lt(he,A);Se.position.y=1.54,Se.castShadow=!0,I.add(Se);const He=new At(1.9,.04,1.7),Fe=new lt(He,N);Fe.position.y=1.86,I.add(Fe);const Oe=new At(2.1,.28,1.9),Q=new lt(Oe,A);Q.position.y=2.02,Q.castShadow=!0,I.add(Q);const re=new At(1.7,.03,1.3),_e=new lt(re,P);_e.position.set(0,2.17,0),I.add(_e);const se=new At(.14,.025,1.26),le=new lt(se,D);le.position.set(-.6,2.16,0),I.add(le);const De=new Um(165063,3.2,2);De.position.set(-.6,2.22,0),I.add(De);const dt=new At(1.86,.26,1.5),ke=new lt(dt,x);ke.position.set(-.05,2.32,0),ke.castShadow=!0,I.add(ke);const Ge=new At(.9,.04,1.1),nt=new lt(Ge,A);nt.position.set(-.6,2.52,0),nt.rotation.z=Math.PI*.08,I.add(nt);const qe=new At(.75,.05,.9),Ze=new lt(qe,V);Ze.position.set(-.58,2.57,0),Ze.rotation.z=Math.PI*.08,I.add(Ze);const Nt=new pc(.04,.04,.45,16),We=new lt(Nt,x);We.position.set(1,2.22,.7),We.rotation.z=-Math.PI*.15,I.add(We);const pt=new At(.75,.52,.08),mt=new lt(pt,x);mt.position.set(1.15,2.42,.75),mt.rotation.y=-Math.PI*.22,mt.rotation.x=-Math.PI*.12,I.add(mt);const F=new At(.68,.44,.02),wt=new lt(F,O);wt.position.set(1.15,2.42,.8),wt.rotation.y=-Math.PI*.22,wt.rotation.x=-Math.PI*.12,I.add(wt);const Je=new zf(.035,16,16),C=new Br({color:1096065}),y=new lt(Je,C);y.position.set(1.35,2.65,.68),I.add(y);const B=new At(.85,.03,1.2),X=new lt(B,x);X.position.set(-1.25,1.35,0),X.rotation.z=-Math.PI*.07,I.add(X);const ee=new At(.04,.12,1.2),G=new lt(ee,N);G.position.set(-1.65,1.45,0),I.add(G);const ae=new At(.7,.06,.95),q=new lt(ae,U);q.position.set(-1.23,1.39,0),q.rotation.z=-Math.PI*.07,I.add(q);const te=new At(.65,.008,.9),ce=new lt(te,V);ce.position.set(-.7,1.54,.1),I.add(ce);const Ne=new Um(3718648,1.8,1.5);Ne.position.set(1.15,2.05,.78),I.add(Ne);const xe=new Bf(2.2,48),pe=new Br({color:165063,transparent:!0,opacity:.12}),Ee=new lt(xe,pe);Ee.rotation.x=-Math.PI/2,Ee.position.set(w,m?0:.2,0),Ee.receiveShadow=!0,g.add(Ee);const Ue=new jf(1.1,1.8,48),Ve=new Br({color:3718648,transparent:!0,opacity:.16,side:gi}),k=new lt(Ue,Ve);k.rotation.x=-Math.PI/2,k.position.set(w,m?.01:.21,0),g.add(k);const me=new Gb(16777215,2.4);g.add(me);const ie=new Fd(16777215,2.6);ie.position.set(6,8,6),ie.castShadow=!0,ie.shadow.mapSize.width=1024,ie.shadow.mapSize.height=1024,ie.shadow.bias=-5e-4,g.add(ie);const fe=new Fd(12248829,2);fe.position.set(-5,4,-4),g.add(fe);const ge=new Fd(15857145,1.6);ge.position.set(0,4,5),g.add(ge);let oe=window.scrollY||window.pageYOffset||0,we=oe;const Ae=()=>{oe=window.scrollY||window.pageYOffset||0};window.addEventListener("scroll",Ae,{passive:!0});let ut=new qb,it;const Zt=new H().copy(S),nn=()=>{it=requestAnimationFrame(nn);const R=ut.getDelta(),Me=ut.getElapsedTime();we=jt.lerp(we,oe,.08);let je,st,vt;if(m)je=0,st=.4,vt=0-Math.min(1,we/2e3)*.4;else if(we<=850){const L=jt.smoothstep(we,0,850);je=jt.lerp(2.4,0,L),st=jt.lerp(.36,.5,L),vt=jt.lerp(.2,-.2,L)}else if(we<=1700){const L=jt.smoothstep(we,850,1700);je=jt.lerp(0,2.2,L),st=jt.lerp(.5,.44,L),vt=jt.lerp(-.2,-.38,L)}else if(we<=2600){const L=jt.smoothstep(we,1700,2600);je=jt.lerp(2.2,0,L),st=jt.lerp(.44,.5,L),vt=jt.lerp(-.38,-.52,L)}else{const L=jt.smoothstep(we,2600,3500);je=jt.lerp(0,2.2,L),st=jt.lerp(.5,.44,L),vt=jt.lerp(-.52,-.65,L)}const fn=jt.lerp(I.scale.x,st,.08);I.scale.set(fn,fn,fn);const pn=l.current===0?Math.sin(Me*1.5)*.02:0,Kn=jt.lerp(I.position.x,je,.08),Nr=jt.lerp(I.position.y-pn,vt,.08);I.position.x=Kn,I.position.y=Nr+pn,Ee.position.x=Kn,Ee.position.y=Nr,k.position.x=Kn,k.position.y=Nr+.01;const ca=fn/.48;if(k.scale.setScalar(ca*(1+Math.sin(Me*2)*.04)),Ee.scale.setScalar(ca),o.current){c.current+=R;const L=e[l.current];if(c.current>=L.duration){c.current=0;const J=(l.current+1)%e.length;i(J)}}const Ar=T[l.current]||T[0],da=Kn-w,Cr=Nr-.2,Eo=Ar.pos.clone().add(new H(da*.55,Cr*.35,0)),To=Ar.target.clone().add(new H(da*.75,Cr*.45,0));v.position.lerp(Eo,.06),Zt.lerp(To,.06),v.lookAt(Zt),l.current===0?I.rotation.y=Math.sin(Me*.4)*.06:I.rotation.y=0;const No=Math.sin(Me*2.8)*.65;le.position.x=No,De.position.x=No,De.intensity=2.4+Math.sin(Me*6)*.8;const Rr=Me*.7%1,Ao=-.7,Fc=-1.25,ua=1.54,M=1.41;ce.position.x=Ao+(Fc-Ao)*Rr,ce.position.y=ua+(M-ua)*Rr,ce.rotation.z=-Math.PI*(.02+Rr*.05),Rr>.88?ce.scale.setScalar(1-(Rr-.88)*4):ce.scale.set(1,1,1),b.render(g,v)};nn();const Tr=()=>{if(!f)return;const R=f.clientWidth,Me=f.clientHeight;v.aspect=R/Me,v.updateProjectionMatrix(),b.setSize(R,Me)};return window.addEventListener("resize",Tr),()=>{cancelAnimationFrame(it),window.removeEventListener("resize",Tr),window.removeEventListener("scroll",Ae),b.domElement&&f.contains(b.domElement)&&f.removeChild(b.domElement),b.dispose()}},[]),a.jsxs("div",{className:"relative w-full h-full flex items-center justify-center select-none overflow-hidden",children:[a.jsx("div",{ref:t,className:"w-full h-full flex items-center justify-center"}),a.jsxs("div",{className:"absolute top-20 right-4 sm:right-8 bg-white/85 backdrop-blur-md border border-slate-200/80 rounded-2xl px-3.5 py-1.5 shadow-md shadow-slate-200/50 flex items-center space-x-2.5 pointer-events-none z-30",children:[a.jsxs("span",{className:"relative flex h-2 w-2",children:[a.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),a.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-sky-500"})]}),a.jsxs("span",{className:"text-[11px] font-semibold text-slate-700",children:["3D Showcase • ",a.jsx("strong",{className:"text-sky-700 font-bold",children:e[n].label})]})]}),a.jsxs("div",{className:"absolute bottom-4 right-4 sm:right-8 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-1.5 shadow-lg shadow-slate-200/50 pointer-events-auto z-40",children:[a.jsxs("button",{onClick:()=>s(!r),className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${r?"bg-sky-50 text-sky-700 border border-sky-200":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,title:r?"Pause Camera Tour":"Play Camera Tour",children:[r?a.jsx(iS,{className:"w-3.5 h-3.5"}):a.jsx(Al,{className:"w-3.5 h-3.5 fill-current"}),a.jsx("span",{className:"hidden xs:inline",children:r?"Touring":"Paused"})]}),a.jsx("div",{className:"flex items-center bg-slate-100/90 p-0.5 rounded-xl",children:e.map((f,p)=>{const h=f.icon,g=n===p;return a.jsxs("button",{onClick:()=>d(p),className:`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${g?"bg-white text-sky-700 shadow-sm shadow-slate-300/60":"text-slate-500 hover:text-slate-900"}`,children:[a.jsx(h,{className:`w-3 h-3 ${g?"text-sky-600":"text-slate-400"}`}),a.jsx("span",{className:"hidden sm:inline",children:f.label})]},f.id)})})]})]})}function q2({onSelectPortal:t}){const[e,n]=ue.useState(120),[i,r]=ue.useState("students"),[s,o]=ue.useState(0),[l,c]=ue.useState(10),[d,f]=ue.useState("bw"),[p,h]=ue.useState("double"),[g,m]=ue.useState("none"),w=Math.round(e/5*4.5),_=Math.round(e/15),u=[{q:"How does EasePrint guarantee student document privacy?",a:"Unlike traditional shops where documents sit indefinitely on shared PCs, EasePrint implements Zero-Retention Digital Shredding. The moment the print job is marked ready for pickup, the document is immediately deleted from Amazon S3, removed from local disk storage, DynamoDB privacy fields are wiped, and an automatic 24-hour TTL buffer ensures zero leftover traces."},{q:"Do I need to plug in a USB pendrive?",a:"Never! EasePrint operates entirely in the cloud. You can upload PDFs or Word docs directly from your phone, laptop, or WhatsApp. You never have to risk malware, trojans, or corrupted drives from infected cyber café computers."},{q:"How is pricing calculated?",a:"Our Amazon Bedrock AI agent parses your document, extracts exact page counts, and applies the live campus pricing matrix configured by the store owner (e.g., ₹1.50/page B&W, ₹10/page Color, ₹40 Spiral Binding). You get the exact price in bold ₹ before confirming."},{q:"What happens when my prints are ready?",a:"You receive an instant notification in your portal (or via WhatsApp/Telegram) stating your documents are hot off the press along with your designated pickup counter (e.g., Counter 1 for Xerox, Counter 2 for Binding). Walk up, pick up, and go!"},{q:"Can store owners customize their prices and policies?",a:"Yes! The Staff Command Center has a dedicated Customizations engine where owners can edit B&W rates, color rates, binding fees, and upload store knowledge files (PDF/TXT) which the AI agent references in real-time."}];return a.jsxs("div",{className:"bg-slate-50/25 text-slate-800 min-h-screen relative selection:bg-sky-500 selection:text-white",children:[a.jsx("div",{className:"fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-90 filter blur-[0.2px]",children:a.jsx(X2,{})}),a.jsx("div",{className:"fixed inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30 pointer-events-none z-[1]"}),a.jsx("section",{className:"relative z-10 min-h-[calc(100vh-64px)] flex items-center justify-center py-12 lg:py-16 overflow-hidden border-b border-slate-200/60 bg-transparent",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full",children:a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",children:[a.jsxs("div",{className:"lg:col-span-7 space-y-6 text-center lg:text-left",children:[a.jsxs("div",{className:"inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-sky-200/90 text-xs sm:text-sm font-semibold text-sky-700 shadow-sm",children:[a.jsx(Ws,{className:"w-4 h-4 text-sky-600 animate-pulse"}),a.jsx("span",{children:"Next-Gen Campus Print Ecosystem • AWS Bedrock AI"})]}),a.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-slate-900 drop-shadow-sm max-w-xl",children:["The Autonomous"," ",a.jsx("span",{className:"bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent",children:"Campus Print Cloud"})]}),a.jsxs("p",{className:"text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl font-normal leading-relaxed mx-auto lg:mx-0",children:["Eliminate WhatsApp queue chaos, USB malware risks, and lost files. Order from your hostel bed, let Bedrock AI quote instant ₹ rates, and pick up your"," ",a.jsx("strong",{className:"text-sky-700 font-semibold",children:"100% Zero-Retention shredded"})," prints with zero wait."]}),a.jsxs("div",{className:"flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1",children:[a.jsxs("button",{onClick:()=>t("student"),className:"group flex items-center space-x-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-base sm:text-lg shadow-lg shadow-sky-600/25 hover:shadow-xl hover:shadow-sky-600/35 hover:-translate-y-0.5 transition-all cursor-pointer",children:[a.jsx($r,{className:"w-5 h-5 group-hover:rotate-6 transition-transform"}),a.jsx("span",{children:"Launch Student Portal"}),a.jsx(wg,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]}),a.jsxs("button",{onClick:()=>t("staff"),className:"flex items-center space-x-2.5 px-6 py-4 rounded-2xl bg-white/80 hover:bg-white text-slate-800 hover:text-indigo-600 border border-white/90 hover:border-indigo-300 font-bold text-base sm:text-lg backdrop-blur-md shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer",children:[a.jsx(bs,{className:"w-5 h-5 text-indigo-600"}),a.jsx("span",{children:"Staff Command"})]})]}),a.jsxs("div",{className:"pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-3 text-xs sm:text-sm text-slate-600",children:[a.jsxs("span",{className:"flex items-center gap-2 bg-white/65 backdrop-blur-md px-4 py-2 rounded-full border border-white/80 shadow-xs font-medium",children:[a.jsx(Pn,{className:"w-4 h-4 text-emerald-600"}),"Zero USB Pen-Drive Virus"]}),a.jsxs("span",{className:"flex items-center gap-2 bg-white/65 backdrop-blur-md px-4 py-2 rounded-full border border-white/80 shadow-xs font-medium",children:[a.jsx(Pn,{className:"w-4 h-4 text-emerald-600"}),"Instant File Shredder (S3 Purge)"]}),a.jsxs("span",{className:"flex items-center gap-2 bg-white/65 backdrop-blur-md px-4 py-2 rounded-full border border-white/80 shadow-xs font-medium",children:[a.jsx(Pn,{className:"w-4 h-4 text-emerald-600"}),"Verified UPI & Razorpay"]})]})]}),a.jsxs("div",{className:"lg:col-span-5 hidden lg:flex flex-col items-end justify-center space-y-4 py-8 pointer-events-none select-none",children:[a.jsxs("div",{className:"flex items-center space-x-2.5 px-4 py-2.5 rounded-2xl bg-white/75 backdrop-blur-md border border-white/90 shadow-md shadow-slate-200/40 text-xs sm:text-sm font-semibold text-slate-700",children:[a.jsxs("span",{className:"relative flex h-2 w-2",children:[a.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),a.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-sky-500"})]}),a.jsx($r,{className:"w-4 h-4 text-sky-600"}),a.jsx("span",{children:"Dual High-Speed Xerox Engine"})]}),a.jsxs("div",{className:"flex items-center space-x-2.5 px-4 py-2.5 rounded-2xl bg-white/75 backdrop-blur-md border border-white/90 shadow-md shadow-slate-200/40 text-xs sm:text-sm font-semibold text-slate-700",children:[a.jsx(Ui,{className:"w-4 h-4 text-amber-500"}),a.jsx("span",{children:"Sub-second Bedrock AI Quoting"})]}),a.jsxs("div",{className:"flex items-center space-x-2.5 px-4 py-2.5 rounded-2xl bg-white/75 backdrop-blur-md border border-white/90 shadow-md shadow-slate-200/40 text-xs sm:text-sm font-semibold text-slate-700",children:[a.jsx(bs,{className:"w-4 h-4 text-emerald-600"}),a.jsx("span",{children:"100% Zero-Retention Auto-Shred"})]})]})]})})}),a.jsx("section",{className:"relative z-10 py-16 lg:py-20 bg-white/40 backdrop-blur-md border-b border-slate-200/60",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 text-center",children:[a.jsxs("div",{className:"p-6 rounded-2xl bg-white/55 backdrop-blur-md border border-white/85 shadow-lg shadow-slate-200/30 hover:bg-white/75 hover:border-sky-300/60 transition-all",children:[a.jsx("div",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-sky-700 font-mono",children:"< 10s"}),a.jsx("div",{className:"text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wider mt-2",children:"Order Submission Time"}),a.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"From upload to queue confirmation"})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-white/55 backdrop-blur-md border border-white/85 shadow-lg shadow-slate-200/30 hover:bg-white/75 hover:border-emerald-300/60 transition-all",children:[a.jsx("div",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-600 font-mono",children:"100%"}),a.jsx("div",{className:"text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wider mt-2",children:"Zero-Retention Privacy"}),a.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"S3 & local files shredded on handover"})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-white/55 backdrop-blur-md border border-white/85 shadow-lg shadow-slate-200/30 hover:bg-white/75 hover:border-amber-300/60 transition-all",children:[a.jsx("div",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-amber-600 font-mono",children:"₹0"}),a.jsx("div",{className:"text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wider mt-2",children:"Hidden Overcharges"}),a.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Exact Hyderabad student rates upfront"})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-white/55 backdrop-blur-md border border-white/85 shadow-lg shadow-slate-200/30 hover:bg-white/75 hover:border-indigo-300/60 transition-all",children:[a.jsx("div",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-700 font-mono",children:"3 Channels"}),a.jsx("div",{className:"text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wider mt-2",children:"Unified Ingestion"}),a.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Web, WhatsApp, and Telegram in 1 queue"})]})]})})}),a.jsx("section",{className:"relative z-10 py-16 lg:py-24 bg-slate-50/65 backdrop-blur-sm border-b border-slate-200/80",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[a.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200",children:"The Reality Today"}),a.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight",children:"Why Campus Print Shops Are Badly Broken"}),a.jsx("p",{className:"text-slate-600 mt-2 text-base sm:text-lg",children:"Every college campus in India suffers from the same outdated, chaotic printout routine. Students lose hours every semester to these 5 painful bottlenecks:"})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[a.jsxs("div",{className:"p-6 rounded-2xl bg-white/45 backdrop-blur-md border border-white/75 shadow-lg shadow-slate-200/30 hover:bg-white/70 hover:border-rose-300 hover:shadow-xl transition-all group",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-rose-50/80 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:a.jsx(Bu,{className:"w-6 h-6"})}),a.jsx("h3",{className:"text-lg font-bold text-slate-900 mb-2",children:"1. WhatsApp DM Chaos & Lost Files"}),a.jsx("p",{className:"text-sm text-slate-600 leading-relaxed",children:"Hundreds of students message a single shop owner's personal WhatsApp. PDFs get lost in endless chats, unnamed files get printed twice or forgotten, and students constantly argue over whose message arrived first."})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-white/45 backdrop-blur-md border border-white/75 shadow-lg shadow-slate-200/30 hover:bg-white/70 hover:border-rose-300 hover:shadow-xl transition-all group",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-rose-50/80 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:a.jsx(lm,{className:"w-6 h-6"})}),a.jsx("h3",{className:"text-lg font-bold text-slate-900 mb-2",children:"2. USB Pendrive Malware Nightmares"}),a.jsx("p",{className:"text-sm text-slate-600 leading-relaxed",children:"Plugging personal student flash drives into shared print shop PCs spreads trojans, ransomware, and shortcut viruses. One trip to the Xerox shop often corrupts a semester’s worth of project code and thesis files."})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-white/45 backdrop-blur-md border border-white/75 shadow-lg shadow-slate-200/30 hover:bg-white/70 hover:border-rose-300 hover:shadow-xl transition-all group",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-rose-50/80 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:a.jsx(eS,{className:"w-6 h-6"})}),a.jsx("h3",{className:"text-lg font-bold text-slate-900 mb-2",children:"3. Zero Privacy & Dangerous Data Leaks"}),a.jsx("p",{className:"text-sm text-slate-600 leading-relaxed",children:'Personal Aadhaar cards, hall tickets, medical certificates, and confidential exam papers stay permanently saved in the shop PC’s "Downloads" folder. Anyone standing near the desktop can view and copy private student data.'})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-white/45 backdrop-blur-md border border-white/75 shadow-lg shadow-slate-200/30 hover:bg-white/70 hover:border-rose-300 hover:shadow-xl transition-all group",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-rose-50/80 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:a.jsx(dd,{className:"w-6 h-6"})}),a.jsx("h3",{className:"text-lg font-bold text-slate-900 mb-2",children:"4. Opaque Mental Math & Surprise Pricing"}),a.jsx("p",{className:"text-sm text-slate-600 leading-relaxed",children:"Busy operators guess prices verbally on the fly. Students are frequently overcharged for duplex vs single-sided, glossy sheets, or spiral binding, leading to disputes and cash change arguments."})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-white/45 backdrop-blur-md border border-white/75 shadow-lg shadow-slate-200/30 hover:bg-white/70 hover:border-rose-300 hover:shadow-xl transition-all group",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-rose-50/80 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:a.jsx(Gs,{className:"w-6 h-6"})}),a.jsx("h3",{className:"text-lg font-bold text-slate-900 mb-2",children:"5. 40-Minute Crowd Bottlenecks"}),a.jsx("p",{className:"text-sm text-slate-600 leading-relaxed",children:'During submission deadlines, 30+ students crowd the counter between lectures, with zero visibility into queue progress. Students waste precious study time standing in line just to ask "is my 4-page printout ready?".'})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-gradient-to-br from-sky-50/50 via-white/45 to-indigo-50/50 backdrop-blur-md border border-white/80 shadow-lg shadow-sky-200/20 flex flex-col justify-center text-left",children:[a.jsxs("div",{className:"flex items-center space-x-2 text-sky-700 font-bold mb-2",children:[a.jsx(Ws,{className:"w-5 h-5"}),a.jsx("span",{children:"The EasePrint Solution"})]}),a.jsx("h4",{className:"text-xl font-bold text-slate-900 mb-2",children:"An Autonomous Digital Kiosk"}),a.jsx("p",{className:"text-xs text-slate-600 leading-relaxed",children:"EasePrint completely reimagines campus printing by replacing physical queues with an AI-driven, cloud-native orchestration engine designed for speed, privacy, and operator ease."})]})]})]})}),a.jsx("section",{className:"relative z-10 py-16 lg:py-24 bg-white/60 backdrop-blur-sm border-b border-slate-200/80",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[a.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50/80 px-3 py-1 rounded-full border border-sky-200",children:"The Technology"}),a.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight",children:"What We Are Solving Particularly"}),a.jsx("p",{className:"text-slate-600 mt-2 text-base sm:text-lg",children:"Engineered with AWS cloud infrastructure and Amazon Bedrock generative intelligence to make printing effortless, private, and instantaneous."})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"p-8 rounded-3xl bg-white/45 backdrop-blur-md border border-white/75 hover:border-sky-300 hover:bg-white/70 transition-all flex flex-col justify-between shadow-xl shadow-slate-200/30",children:[a.jsxs("div",{children:[a.jsx("div",{className:"w-12 h-12 rounded-2xl bg-sky-100/80 text-sky-700 flex items-center justify-center mb-6",children:a.jsx(uo,{className:"w-6 h-6"})}),a.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-3",children:"1. Amazon Bedrock AI Document Specialist"}),a.jsx("p",{className:"text-slate-600 text-sm leading-relaxed mb-4",children:'Our embedded Bedrock agent automatically extracts page counts directly from uploaded PDF bytes, understands conversational specifications ("2 copies double-sided with spiral binding"), and computes exact Hyderabad campus rates in under 1 second with sub-token precision.'})]}),a.jsxs("div",{className:"bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-white/80 text-xs text-slate-600 font-mono shadow-xs",children:[a.jsx("span",{className:"text-sky-700 font-bold",children:"AWS Bedrock:"})," us.amazon.nova-lite-v1:0 (Sub-second Converse API)"]})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-white/45 backdrop-blur-md border border-white/75 hover:border-emerald-300 hover:bg-white/70 transition-all flex flex-col justify-between shadow-xl shadow-slate-200/30",children:[a.jsxs("div",{children:[a.jsx("div",{className:"w-12 h-12 rounded-2xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center mb-6",children:a.jsx(bs,{className:"w-6 h-6"})}),a.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-3",children:"2. Military-Grade Zero-Retention Shredder"}),a.jsx("p",{className:"text-slate-600 text-sm leading-relaxed mb-4",children:`Privacy isn't an afterthought; it's hardcoded. The instant the staff hits "Print Ready", EasePrint triggers a 4-way shredder: permanent Amazon S3 object purge, local server disk deletion, DynamoDB data scrub, and a 24-hour TTL buffer. Your private data never lingers.`})]}),a.jsxs("div",{className:"bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-white/80 text-xs text-slate-600 font-mono shadow-xs",children:[a.jsx("span",{className:"text-emerald-700 font-bold",children:"Privacy Protocol:"})," S3 delete_object + local os.remove + TTL Buffer"]})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-white/45 backdrop-blur-md border border-white/75 hover:border-indigo-300 hover:bg-white/70 transition-all flex flex-col justify-between shadow-xl shadow-slate-200/30",children:[a.jsxs("div",{children:[a.jsx("div",{className:"w-12 h-12 rounded-2xl bg-indigo-100/80 text-indigo-700 flex items-center justify-center mb-6",children:a.jsx(oc,{className:"w-6 h-6"})}),a.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-3",children:"3. Autonomous Counter Orchestration"}),a.jsxs("p",{className:"text-slate-600 text-sm leading-relaxed mb-4",children:["Jobs are automatically categorized and routed based on specifications. Standard high-speed printouts are directed to ",a.jsx("strong",{children:"Counter 1 (Xerox)"}),", while spiral, soft, and thesis jobs are routed to"," ",a.jsx("strong",{children:"Counter 2 (Binding)"}),", eliminating bottlenecks at the physical counter."]})]}),a.jsxs("div",{className:"bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-white/80 text-xs text-slate-600 font-mono shadow-xs",children:[a.jsx("span",{className:"text-indigo-700 font-bold",children:"Dispatch Engine:"})," Counter 1 (Xerox) • Counter 2 (Binding)"]})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-white/45 backdrop-blur-md border border-white/75 hover:border-sky-300 hover:bg-white/70 transition-all flex flex-col justify-between shadow-xl shadow-slate-200/30",children:[a.jsxs("div",{children:[a.jsx("div",{className:"w-12 h-12 rounded-2xl bg-sky-100/80 text-sky-700 flex items-center justify-center mb-6",children:a.jsx(Lc,{className:"w-6 h-6"})}),a.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-3",children:"4. Dynamic Pricing & Custom RAG Knowledge"}),a.jsx("p",{className:"text-slate-600 text-sm leading-relaxed mb-4",children:"Campus stationery shops have fluctuating paper costs. The Staff Dashboard features a live Customizations Matrix where operators can modify B&W, color, or binding rates, and upload business documents (PDF/TXT) that dynamically enrich the AI agent's RAG knowledge base."})]}),a.jsxs("div",{className:"bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-white/80 text-xs text-slate-600 font-mono shadow-xs",children:[a.jsx("span",{className:"text-sky-700 font-bold",children:"Customizer:"})," Live Rates Sync + In-Memory RAG Context Injection"]})]})]})]})}),a.jsx("section",{className:"relative z-10 py-16 lg:py-24 bg-slate-50/65 backdrop-blur-sm border-b border-slate-200/80",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[a.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200",children:"The Head-to-Head"}),a.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight",children:"Comparison with Existing Systems"}),a.jsx("p",{className:"text-slate-600 mt-2 text-base sm:text-lg",children:"See why moving from traditional campus print shops to EasePrint transforms the entire university experience:"})]}),a.jsx("div",{className:"overflow-x-auto rounded-2xl border border-white/80 bg-white/45 backdrop-blur-md shadow-xl shadow-slate-200/40",children:a.jsxs("table",{className:"w-full text-left text-sm",children:[a.jsx("thead",{className:"bg-white/60 backdrop-blur-md text-xs uppercase tracking-wider text-slate-600 border-b border-slate-200/80",children:a.jsxs("tr",{children:[a.jsx("th",{className:"py-4 px-6 font-semibold",children:"Feature / Workflow"}),a.jsx("th",{className:"py-4 px-6 font-semibold text-rose-700 bg-rose-50/40",children:"Traditional Campus Xerox"}),a.jsx("th",{className:"py-4 px-6 font-semibold text-sky-800 bg-sky-50/50",children:"EasePrint Cloud Platform"})]})}),a.jsxs("tbody",{className:"divide-y divide-slate-200/80 text-slate-700",children:[a.jsxs("tr",{className:"hover:bg-white/40 transition-colors",children:[a.jsxs("td",{className:"py-4 px-6 font-medium text-slate-900 flex items-center gap-2",children:[a.jsx(Bu,{className:"w-4 h-4 text-slate-500"}),a.jsx("span",{children:"Order Placement"})]}),a.jsx("td",{className:"py-4 px-6 bg-rose-50/20",children:a.jsxs("div",{className:"flex items-center gap-2 text-rose-700",children:[a.jsx(Li,{className:"w-4 h-4 text-rose-500 shrink-0"}),a.jsx("span",{children:"Cluttered WhatsApp DMs or standing in crowd"})]})}),a.jsx("td",{className:"py-4 px-6 bg-sky-50/30 font-semibold text-slate-900",children:a.jsxs("div",{className:"flex items-center gap-2 text-sky-700",children:[a.jsx(Pn,{className:"w-4 h-4 text-sky-600 shrink-0"}),a.jsx("span",{children:"Instant Web Portal + WhatsApp & Telegram Bots"})]})})]}),a.jsxs("tr",{className:"hover:bg-white/40 transition-colors",children:[a.jsxs("td",{className:"py-4 px-6 font-medium text-slate-900 flex items-center gap-2",children:[a.jsx(bs,{className:"w-4 h-4 text-slate-500"}),a.jsx("span",{children:"Student Data Privacy"})]}),a.jsx("td",{className:"py-4 px-6 bg-rose-50/20",children:a.jsxs("div",{className:"flex items-center gap-2 text-rose-700",children:[a.jsx(Li,{className:"w-4 h-4 text-rose-500 shrink-0"}),a.jsx("span",{children:"Documents saved forever on shared public desktop"})]})}),a.jsx("td",{className:"py-4 px-6 bg-sky-50/30 font-semibold text-slate-900",children:a.jsxs("div",{className:"flex items-center gap-2 text-emerald-700",children:[a.jsx(Pn,{className:"w-4 h-4 text-emerald-600 shrink-0"}),a.jsx("span",{children:"100% Zero-Retention Shredder (S3/Local deleted on ready)"})]})})]}),a.jsxs("tr",{className:"hover:bg-white/40 transition-colors",children:[a.jsxs("td",{className:"py-4 px-6 font-medium text-slate-900 flex items-center gap-2",children:[a.jsx(lm,{className:"w-4 h-4 text-slate-500"}),a.jsx("span",{children:"Malware & Virus Exposure"})]}),a.jsx("td",{className:"py-4 px-6 bg-rose-50/20",children:a.jsxs("div",{className:"flex items-center gap-2 text-rose-700",children:[a.jsx(Li,{className:"w-4 h-4 text-rose-500 shrink-0"}),a.jsx("span",{children:"High risk: USB flash drives spread PC viruses"})]})}),a.jsx("td",{className:"py-4 px-6 bg-sky-50/30 font-semibold text-slate-900",children:a.jsxs("div",{className:"flex items-center gap-2 text-sky-700",children:[a.jsx(Pn,{className:"w-4 h-4 text-sky-600 shrink-0"}),a.jsx("span",{children:"Zero-Touch cloud upload (No USB ever required)"})]})})]}),a.jsxs("tr",{className:"hover:bg-white/40 transition-colors",children:[a.jsxs("td",{className:"py-4 px-6 font-medium text-slate-900 flex items-center gap-2",children:[a.jsx(dd,{className:"w-4 h-4 text-slate-500"}),a.jsx("span",{children:"Price Transparency"})]}),a.jsx("td",{className:"py-4 px-6 bg-rose-50/20",children:a.jsxs("div",{className:"flex items-center gap-2 text-rose-700",children:[a.jsx(Li,{className:"w-4 h-4 text-rose-500 shrink-0"}),a.jsx("span",{children:"Verbal guessing / surprise costs upon collection"})]})}),a.jsx("td",{className:"py-4 px-6 bg-sky-50/30 font-semibold text-slate-900",children:a.jsxs("div",{className:"flex items-center gap-2 text-sky-700",children:[a.jsx(Pn,{className:"w-4 h-4 text-sky-600 shrink-0"}),a.jsx("span",{children:"Instant AI rate calculation with itemized ₹ receipt"})]})})]}),a.jsxs("tr",{className:"hover:bg-white/40 transition-colors",children:[a.jsxs("td",{className:"py-4 px-6 font-medium text-slate-900 flex items-center gap-2",children:[a.jsx(Gs,{className:"w-4 h-4 text-slate-500"}),a.jsx("span",{children:"Queue & Progress Tracking"})]}),a.jsx("td",{className:"py-4 px-6 bg-rose-50/20",children:a.jsxs("div",{className:"flex items-center gap-2 text-rose-700",children:[a.jsx(Li,{className:"w-4 h-4 text-rose-500 shrink-0"}),a.jsx("span",{children:"Zero visibility: Wait in crowd and interrupt staff"})]})}),a.jsx("td",{className:"py-4 px-6 bg-sky-50/30 font-semibold text-slate-900",children:a.jsxs("div",{className:"flex items-center gap-2 text-sky-700",children:[a.jsx(Pn,{className:"w-4 h-4 text-sky-600 shrink-0"}),a.jsx("span",{children:"Live status banner + pickup alert notification"})]})})]}),a.jsxs("tr",{className:"hover:bg-white/40 transition-colors",children:[a.jsxs("td",{className:"py-4 px-6 font-medium text-slate-900 flex items-center gap-2",children:[a.jsx(oc,{className:"w-4 h-4 text-slate-500"}),a.jsx("span",{children:"Pickup Organization"})]}),a.jsx("td",{className:"py-4 px-6 bg-rose-50/20",children:a.jsxs("div",{className:"flex items-center gap-2 text-rose-700",children:[a.jsx(Li,{className:"w-4 h-4 text-rose-500 shrink-0"}),a.jsx("span",{children:"1 crowded counter with mixed Xerox and binding jobs"})]})}),a.jsx("td",{className:"py-4 px-6 bg-sky-50/30 font-semibold text-slate-900",children:a.jsxs("div",{className:"flex items-center gap-2 text-sky-700",children:[a.jsx(Pn,{className:"w-4 h-4 text-sky-600 shrink-0"}),a.jsx("span",{children:"Automated Counter 1 (Xerox) / Counter 2 (Binding)"})]})})]}),a.jsxs("tr",{className:"hover:bg-white/40 transition-colors",children:[a.jsxs("td",{className:"py-4 px-6 font-medium text-slate-900 flex items-center gap-2",children:[a.jsx(am,{className:"w-4 h-4 text-slate-500"}),a.jsx("span",{children:"Store Price Customization"})]}),a.jsx("td",{className:"py-4 px-6 bg-rose-50/20",children:a.jsxs("div",{className:"flex items-center gap-2 text-rose-700",children:[a.jsx(Li,{className:"w-4 h-4 text-rose-500 shrink-0"}),a.jsx("span",{children:"Fixed rates painted on walls; hard to adapt"})]})}),a.jsx("td",{className:"py-4 px-6 bg-sky-50/30 font-semibold text-slate-900",children:a.jsxs("div",{className:"flex items-center gap-2 text-sky-700",children:[a.jsx(Pn,{className:"w-4 h-4 text-sky-600 shrink-0"}),a.jsx("span",{children:"Live web price matrix + custom RAG policy upload"})]})})]})]})]})})]})}),a.jsx("section",{className:"relative z-10 py-16 lg:py-24 bg-white/60 backdrop-blur-sm border-b border-slate-200/80",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-12",children:[a.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50/80 px-3 py-1 rounded-full border border-emerald-200",children:"The Value Proposition"}),a.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight",children:"Why Choose EasePrint?"}),a.jsx("p",{className:"text-slate-600 mt-2 text-base sm:text-lg",children:"Tailored specifically for both the student who needs urgent prints before class, and the campus store owner who wants smooth, profitable operations."}),a.jsxs("div",{className:"inline-flex items-center bg-white/50 backdrop-blur-md p-1.5 rounded-2xl border border-white/80 mt-6 shadow-sm",children:[a.jsxs("button",{onClick:()=>r("students"),className:`flex items-center space-x-2 px-5 py-2 rounded-xl text-sm font-bold transition-all ${i==="students"?"bg-white text-sky-700 shadow-sm shadow-slate-300/60":"text-slate-600 hover:text-slate-900"}`,children:[a.jsx(lS,{className:"w-4 h-4"}),a.jsx("span",{children:"For Students & Scholars"})]}),a.jsxs("button",{onClick:()=>r("staff"),className:`flex items-center space-x-2 px-5 py-2 rounded-xl text-sm font-bold transition-all ${i==="staff"?"bg-white text-indigo-700 shadow-sm shadow-slate-300/60":"text-slate-600 hover:text-slate-900"}`,children:[a.jsx(am,{className:"w-4 h-4"}),a.jsx("span",{children:"For Campus Store Owners"})]})]})]}),i==="students"?a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[a.jsxs("div",{className:"p-8 rounded-3xl bg-white/45 backdrop-blur-md border border-white/75 hover:border-sky-300 hover:bg-white/70 transition-all shadow-xl shadow-slate-200/30",children:[a.jsx("div",{className:"w-12 h-12 rounded-2xl bg-sky-100/80 text-sky-700 flex items-center justify-center mb-6",children:a.jsx(Gs,{className:"w-6 h-6"})}),a.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-2",children:"Zero Waiting in Line"}),a.jsx("p",{className:"text-sm text-slate-600 leading-relaxed",children:"Send your assignment from hostel at 8:30 AM. Get notified when it's printed. Walk in at 8:55 AM, grab it from Counter 1, and head straight to class without standing in a single line."})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-white/45 backdrop-blur-md border border-white/75 hover:border-emerald-300 hover:bg-white/70 transition-all shadow-xl shadow-slate-200/30",children:[a.jsx("div",{className:"w-12 h-12 rounded-2xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center mb-6",children:a.jsx(Tg,{className:"w-6 h-6"})}),a.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-2",children:"Complete Digital Privacy"}),a.jsx("p",{className:"text-sm text-slate-600 leading-relaxed",children:"Rest easy knowing your Aadhaar, bank statements, and project documents will not remain on a public shop desktop for other students to snoop through. The file is purged permanently upon pickup."})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-white/45 backdrop-blur-md border border-white/75 hover:border-indigo-300 hover:bg-white/70 transition-all shadow-xl shadow-slate-200/30",children:[a.jsx("div",{className:"w-12 h-12 rounded-2xl bg-indigo-100/80 text-indigo-700 flex items-center justify-center mb-6",children:a.jsx(Ws,{className:"w-6 h-6"})}),a.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-2",children:"AI Cost Optimization"}),a.jsx("p",{className:"text-sm text-slate-600 leading-relaxed",children:"Ask our AI agent how to get the most cost-effective format. Get instant advice on double-sided B&W savings, spiral vs staple options, and pay the exact amount via UPI without needing cash change."})]})]}):a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[a.jsxs("div",{className:"p-8 rounded-3xl bg-white/45 backdrop-blur-md border border-white/75 hover:border-indigo-300 hover:bg-white/70 transition-all shadow-xl shadow-slate-200/30",children:[a.jsx("div",{className:"w-12 h-12 rounded-2xl bg-indigo-100/80 text-indigo-700 flex items-center justify-center mb-6",children:a.jsx(Ui,{className:"w-6 h-6"})}),a.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-2",children:"3x Higher Daily Throughput"}),a.jsx("p",{className:"text-sm text-slate-600 leading-relaxed",children:"No more manually typing page counts, opening infected thumb drives, or searching for lost WhatsApp chats. Every job arrives pre-validated with exact specs ready to print in 1 click."})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-white/45 backdrop-blur-md border border-white/75 hover:border-sky-300 hover:bg-white/70 transition-all shadow-xl shadow-slate-200/30",children:[a.jsx("div",{className:"w-12 h-12 rounded-2xl bg-sky-100/80 text-sky-700 flex items-center justify-center mb-6",children:a.jsx(aS,{className:"w-6 h-6"})}),a.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-2",children:"Dynamic Price Matrix"}),a.jsx("p",{className:"text-sm text-slate-600 leading-relaxed",children:"Update your standard B&W, color, or binding rates anytime from the dashboard. The AI agent immediately quotes your updated rates to every student across Web, WhatsApp, and Telegram."})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-white/45 backdrop-blur-md border border-white/75 hover:border-amber-300 hover:bg-white/70 transition-all shadow-xl shadow-slate-200/30",children:[a.jsx("div",{className:"w-12 h-12 rounded-2xl bg-amber-100/80 text-amber-800 flex items-center justify-center mb-6",children:a.jsx(dd,{className:"w-6 h-6"})}),a.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-2",children:"Zero Revenue Leakage"}),a.jsx("p",{className:"text-sm text-slate-600 leading-relaxed",children:"Eliminate unpaid prints, duplicate misprints, and verbal calculation errors. Integrated Razorpay & UPI verification ensures every page printed is tracked, recorded, and accounted for."})]})]})]})}),a.jsx("section",{className:"relative z-10 py-16 lg:py-24 bg-slate-50/65 backdrop-blur-sm border-b border-slate-200/80",children:a.jsx("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"bg-white/50 p-8 sm:p-12 rounded-3xl border border-white/80 shadow-2xl shadow-slate-200/40 backdrop-blur-lg",children:[a.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-10",children:[a.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50/80 px-3 py-1 rounded-full border border-sky-200",children:"Interactive ROI Tool"}),a.jsx("h2",{className:"text-3xl font-black text-slate-900 mt-3",children:"Calculate Your Semester Savings"}),a.jsx("p",{className:"text-sm text-slate-600 mt-2",children:"Slide your estimated monthly printout volume to see how much time and hassle EasePrint eliminates."})]}),a.jsxs("div",{className:"mb-10",children:[a.jsxs("div",{className:"flex justify-between items-center mb-3",children:[a.jsx("span",{className:"text-sm font-semibold text-slate-700",children:"Monthly Document Pages:"}),a.jsxs("span",{className:"text-2xl font-black text-sky-700 font-mono",children:[e," pages"]})]}),a.jsx("input",{type:"range",min:"10",max:"500",step:"10",value:e,onChange:v=>n(Number(v.target.value)),className:"w-full h-3 bg-slate-200/80 rounded-lg appearance-none cursor-pointer accent-sky-600"}),a.jsxs("div",{className:"flex justify-between text-[11px] text-slate-500 mt-1",children:[a.jsx("span",{children:"10 pages (Light)"}),a.jsx("span",{children:"250 pages (Typical Eng/Med)"}),a.jsx("span",{children:"500 pages (Thesis / Lab)"})]})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6 text-center",children:[a.jsxs("div",{className:"p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/75 shadow-sm",children:[a.jsxs("div",{className:"text-3xl font-black text-sky-700 font-mono",children:["~",w," mins"]}),a.jsx("div",{className:"text-xs font-semibold text-slate-700 uppercase tracking-wide mt-1",children:"Queue Waiting Time Saved"}),a.jsxs("p",{className:"text-[11px] text-slate-500 mt-1",children:["Equivalent to ",Math.round(w/50)," full study lectures"]})]}),a.jsxs("div",{className:"p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/75 shadow-sm",children:[a.jsx("div",{className:"text-3xl font-black text-emerald-600 font-mono",children:"0% Risk"}),a.jsx("div",{className:"text-xs font-semibold text-slate-700 uppercase tracking-wide mt-1",children:"Malware & Leak Exposure"}),a.jsx("p",{className:"text-[11px] text-slate-500 mt-1",children:"100% digital shredder on completion"})]}),a.jsxs("div",{className:"p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/75 shadow-sm",children:[a.jsxs("div",{className:"text-3xl font-black text-indigo-700 font-mono",children:[_," Queues"]}),a.jsx("div",{className:"text-xs font-semibold text-slate-700 uppercase tracking-wide mt-1",children:"Physical Bottlenecks Avoided"}),a.jsx("p",{className:"text-[11px] text-slate-500 mt-1",children:"Instant counter grab-and-go"})]})]})]})})}),a.jsx("section",{className:"relative z-10 py-16 lg:py-24 bg-white/60 backdrop-blur-sm border-b border-slate-200/80",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-14",children:[a.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-slate-600 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200",children:"Clear Answers"}),a.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight",children:"Frequently Asked Questions"})]}),a.jsx("div",{className:"space-y-4",children:u.map((v,E)=>a.jsxs("div",{className:"rounded-2xl bg-white/45 backdrop-blur-md border border-white/75 overflow-hidden transition-all shadow-sm hover:bg-white/70",children:[a.jsxs("button",{onClick:()=>o(s===E?-1:E),className:"w-full p-5 text-left flex items-center justify-between font-semibold text-slate-900 hover:text-sky-700 transition-colors",children:[a.jsx("span",{className:"text-base",children:v.q}),s===E?a.jsx(qy,{className:"w-5 h-5 text-sky-600 shrink-0"}):a.jsx(Mg,{className:"w-5 h-5 text-slate-400 shrink-0"})]}),s===E&&a.jsx("div",{className:"px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3",children:v.a})]},E))})]})}),a.jsx("section",{className:"relative z-10 py-20 bg-gradient-to-r from-sky-600/90 via-indigo-600/90 to-sky-700/90 backdrop-blur-sm text-center relative overflow-hidden text-white",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 relative z-10 space-y-6",children:[a.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-semibold text-white",children:[a.jsx(Vy,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Ready for the Next Class"})]}),a.jsx("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight",children:"Ready to Experience the Fastest Printout on Campus?"}),a.jsx("p",{className:"text-sky-100 text-base sm:text-lg max-w-2xl mx-auto",children:"Choose your role below to launch the interactive portal or manage the shop floor right now."}),a.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 pt-4",children:[a.jsxs("button",{onClick:()=>t("student"),className:"w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-base shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105",children:[a.jsx($r,{className:"w-5 h-5 text-sky-600"}),a.jsx("span",{children:"Launch Student Portal"})]}),a.jsxs("button",{onClick:()=>t("staff"),className:"w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/60 text-white font-bold text-base border border-white/30 backdrop-blur-md flex items-center justify-center gap-2 transition-all hover:scale-105",children:[a.jsx(bs,{className:"w-5 h-5 text-white"}),a.jsx("span",{children:"Open Staff Command Center"})]})]})]})})]})}const Kt="";async function $2(t){const e=await fetch(`${Kt}/pricing/calculate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error("Price calculation failed");return e.json()}async function Y2(t){const e=new FormData;e.append("file",t);const n=await fetch(`${Kt}/upload`,{method:"POST",body:e});if(!n.ok)throw new Error("Upload failed");return n.json()}async function K2(t){const e=await fetch(`${Kt}/jobs`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error("Job submission failed");return e.json()}async function Z2(t){const e=await fetch(`${Kt}/chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error("Chat request failed");return e.json()}async function J2(t){const e=await fetch(`${Kt}/jobs/${t}`);if(!e.ok)throw new Error("Job not found");return e.json()}async function Q2(){const t=await fetch(`${Kt}/jobs`);if(!t.ok)throw new Error("Failed to fetch jobs");return t.json()}async function Gd(t,e,n=""){const i=await fetch(`${Kt}/jobs/${t}/status`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:e,notes:n})});if(!i.ok)throw new Error("Failed to update status");return i.json()}async function eT(t,e="Counter 1",n=""){const i=await fetch(`${Kt}/jobs/${t}/print-ready`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pickup_counter:e,staff_notes:n})});if(!i.ok)throw new Error("Failed to mark job ready");return i.json()}async function Ah(){const t=await fetch(`${Kt}/customizations`);if(!t.ok)throw new Error("Failed to load store customizations");return t.json()}async function Ch(t){const e=await fetch(`${Kt}/customizations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error("Failed to save store customizations");return e.json()}async function tT(t){const e=new FormData;e.append("file",t);const n=await fetch(`${Kt}/customizations/upload-knowledge`,{method:"POST",body:e});if(!n.ok)throw new Error("Failed to upload knowledge document");return n.json()}async function nT(t,e){const n=await fetch(`${Kt}/payments/create-order`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount_inr:t,job_id:e})});if(!n.ok)throw new Error("Failed to create Razorpay order");return n.json()}async function iT(t){const e=await fetch(`${Kt}/payments/verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error("Failed to verify payment");return e.json()}async function rT(t,e,n=""){const i=await fetch(`${Kt}/jobs/${t}/reject`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({reason:e,staff_notes:n})});if(!i.ok)throw new Error("Failed to reject job");return i.json()}async function sT(){const t=await fetch(`${Kt}/analytics/earnings`);if(!t.ok)throw new Error("Failed to fetch earnings analytics");return t.json()}async function aT(t=150,e=null,n=null){const i=new URLSearchParams;t&&i.append("limit",t),e&&e!=="ALL"&&i.append("event_type",e),n&&i.append("job_id",n);const r=await fetch(`${Kt}/analytics/logs?${i.toString()}`);if(!r.ok)throw new Error("Failed to fetch system logs");return r.json()}async function oT(){const t=await fetch(`${Kt}/algorithm/status`);if(!t.ok)throw new Error("Failed to fetch algorithm status");return t.json()}async function lT(){const t=await fetch(`${Kt}/algorithm/process-next`,{method:"POST",headers:{"Content-Type":"application/json"}});if(!t.ok)throw new Error("Failed to trigger algorithm process");return t.json()}function cT(){var B,X,ee;const[t,e]=ue.useState(null),[n,i]=ue.useState(!1),[r,s]=ue.useState(null),[o,l]=ue.useState(1),[c,d]=ue.useState(1),[f,p]=ue.useState("bw"),[h,g]=ue.useState("single"),[m,w]=ue.useState("none"),[_,u]=ue.useState("standard"),[v,E]=ue.useState(null),[S,T]=ue.useState(!1),[b,A]=ue.useState(null),[x,N]=ue.useState(null),[P]=ue.useState(()=>"web_"+Math.random().toString(36).substring(2,9)),[D,O]=ue.useState("Student"),[V,U]=ue.useState([{role:"assistant",content:"Namaste! 🙏 I'm your EasePrint AI assistant for Hyderabad campus printouts. Upload your file or ask me for price quotes, binding options, or custom settings!"}]),[I,ne]=ue.useState(""),[K,z]=ue.useState(!1),j=ue.useRef(null);ue.useEffect(()=>{async function G(){try{const ae=await $2({pages:o,copies:c,color_mode:f,sides:h,binding:m,paper_type:_});E(ae)}catch(ae){console.error("Pricing error:",ae)}}G()},[o,c,f,h,m,_]),ue.useEffect(()=>{var G;(G=j.current)==null||G.scrollIntoView({behavior:"smooth"})},[V]),ue.useEffect(()=>{if(!b)return;const G=setInterval(async()=>{try{const ae=await J2(b);N(ae)}catch(ae){console.warn("Polling error:",ae)}},4e3);return()=>clearInterval(G)},[b]);const W=async G=>{var q;const ae=(q=G.target.files)==null?void 0:q[0];if(ae){e(ae),i(!0);try{const te=await Y2(ae);s(te),te.pages&&te.pages>0&&l(te.pages),U(ce=>[...ce,{role:"assistant",content:`📄 Uploaded **${te.file_name}**! I detected **${te.pages} page(s)**. I have adjusted your form on the left.`}])}catch{alert("Failed to upload file. Please ensure the backend is running.")}finally{i(!1)}}},[Z,he]=ue.useState(null),[Se,He]=ue.useState(null),[Fe,Oe]=ue.useState("upi"),[Q,re]=ue.useState("4111 1111 1111 1111"),[_e,se]=ue.useState("12/28"),[le,De]=ue.useState("789"),[dt,ke]=ue.useState("Karthik Battiprolu"),[Ge,nt]=ue.useState("student@okaxis"),[qe,Ze]=ue.useState("gpay"),[Nt,We]=ue.useState("sbi"),[pt,mt]=ue.useState(!0),F=async()=>{if(!r){alert("Please upload a document first.");return}const G=(v==null?void 0:v.total_amount_inr)||0;if(G<=0){alert("Price estimate not ready.");return}T(!0);const ae="EP-"+Math.floor(1e5+Math.random()*9e5);try{const q=await nT(G,ae);he({jobId:ae,orderId:q.order_id||"order_"+Date.now(),amountInr:G,keyId:q.key_id||"rzp_test_TavfilameY1r04"})}catch(q){console.warn("Razorpay order creation fallback:",q),he({jobId:ae,orderId:"order_"+Date.now(),amountInr:G,keyId:"rzp_test_TavfilameY1r04"})}finally{T(!1)}},wt=async()=>{if(!r){alert("Please upload a document first.");return}if(((v==null?void 0:v.total_amount_inr)||0)<=0){alert("Price estimate not ready.");return}T(!0);const ae="EP-"+Math.floor(1e5+Math.random()*9e5),q="pay_trial_"+Math.random().toString(36).substring(2,11),te="order_trial_"+Date.now();await C(ae,q,te)},Je=()=>{if(!Z||!window.Razorpay){alert("Razorpay checkout SDK not available in this browser.");return}const G=new window.Razorpay({key:Z.keyId,amount:Math.round(Z.amountInr*100),currency:"INR",name:"EasePrint Xerox Hub",description:`Campus Print Order (${o} pgs, ₹${Z.amountInr})`,order_id:Z.orderId&&!Z.orderId.startsWith("order_test_")?Z.orderId:void 0,image:"https://cdn-icons-png.flaticon.com/512/2874/2874808.png",handler:async function(ae){await C(Z.jobId,ae.razorpay_payment_id,Z.orderId)},prefill:{name:D||"Karthik Battiprolu",email:"student@campus.edu",contact:"8309112619"},notes:{platform:"EasePrint Campus Print Hub",mode:"trial"},theme:{color:"#0284c7"},modal:{ondismiss:function(){console.log("Razorpay standard popup dismissed.")}}});G.on("payment.failed",function(ae){console.warn("Razorpay payment cancelled or failed:",ae.error)}),G.open()},C=async(G,ae,q)=>{T(!0),he(null);const te={job_id:G,source_channel:"web",sender_id:P,sender_name:D,message_text:`${c} copies, ${f.toUpperCase()}, ${h}, ${m} binding (${o} pages)`,file_url:r.file_url,file_name:r.file_name,received_at:new Date().toISOString(),pages:o,copies:c,color_mode:f,sides:h,binding:m,paper_type:_,total_amount_inr:(v==null?void 0:v.total_amount_inr)||0,pricing_summary:(v==null?void 0:v.summary)||"",payment_status:"paid",payment_id:ae,paid_at:new Date().toISOString()};try{await K2(te);try{await iT({job_id:G,razorpay_payment_id:ae,razorpay_order_id:q})}catch{}A(G),He({paymentId:ae,amountInr:v==null?void 0:v.total_amount_inr}),U(ce=>{var Ne;return[...ce,{role:"assistant",content:`🎉 **Payment Verified & Order Confirmed!**

• **Job ID:** \`${G}\`
• **Payment ID:** \`${ae}\` (Razorpay)
• **Total Paid:** ₹${(Ne=v==null?void 0:v.total_amount_inr)==null?void 0:Ne.toFixed(2)}
• **Est. Wait Time:** ~3–5 minutes

You can track live queue status below!`}]})}catch(ce){alert("Error queueing order: "+ce.message)}finally{T(!1)}},y=async G=>{if(G==null||G.preventDefault(),!I.trim()||K)return;const ae=I.trim();ne(""),U(q=>[...q,{role:"user",content:ae}]),z(!0);try{const q=await Z2({session_id:P,source_channel:"web",sender_name:D,message:ae,job_id:b,file_url:r==null?void 0:r.file_url,file_name:r==null?void 0:r.file_name,pages:o});U(te=>[...te,{role:"assistant",content:q.reply}]),q.pricing&&(q.pricing.copies&&d(q.pricing.copies),q.pricing.color_mode&&p(q.pricing.color_mode),q.pricing.sides&&g(q.pricing.sides),q.pricing.binding&&w(q.pricing.binding))}catch{U(te=>[...te,{role:"assistant",content:"⚠️ Sorry, could not reach the Bedrock agent. Make sure FastAPI is running."}])}finally{z(!1)}};return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[a.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[a.jsxs("div",{className:"bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm",children:[a.jsx("h1",{className:"text-2xl font-black text-slate-900 tracking-tight",children:"Student Print Intake Station"}),a.jsx("p",{className:"text-sm text-slate-600 mt-1",children:"Upload your document, select your preferences, or chat with our AI assistant to calculate Hyderabad Xerox rates."}),a.jsxs("div",{className:"mt-4 flex items-center space-x-3",children:[a.jsx("label",{className:"text-xs font-semibold text-slate-500 uppercase tracking-wider",children:"Student Name:"}),a.jsx("input",{type:"text",value:D,onChange:G=>O(G.target.value),className:"px-3 py-1.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"})]})]}),a.jsxs("div",{className:"bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("span",{className:"text-sm font-bold uppercase tracking-wider text-sky-600 flex items-center space-x-2",children:[a.jsx("span",{className:"w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs",children:"1"}),a.jsx("span",{children:"Document Upload (PDF / DOCX / Image)"})]}),r&&a.jsxs("span",{className:"inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800",children:[a.jsx(Jy,{className:"w-3.5 h-3.5 mr-1"}),r.pages," Pages Detected"]})]}),a.jsxs("label",{className:"border-2 border-dashed border-slate-300 hover:border-sky-500 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-50/50 hover:bg-sky-50/30",children:[a.jsx("input",{type:"file",onChange:W,accept:".pdf,.doc,.docx,.png,.jpg,.jpeg",className:"hidden"}),a.jsx(Eg,{className:"w-10 h-10 text-sky-600 mb-2 animate-bounce"}),a.jsx("span",{className:"font-semibold text-sm text-slate-800",children:n?"Uploading & Detecting Page Count...":t?t.name:"Click or drag & drop files here"}),a.jsx("span",{className:"text-xs text-slate-500 mt-1",children:"Automatic page count detection powered by PyPDF"})]}),r&&a.jsxs("div",{className:"mt-3 flex items-center justify-between text-xs text-slate-500 bg-slate-50 p-2.5 rounded-xl",children:[a.jsxs("span",{className:"truncate max-w-[280px]",children:["File: ",r.file_name]}),a.jsx("a",{href:r.file_url,target:"_blank",rel:"noreferrer",className:"text-sky-600 font-semibold hover:underline",children:"Preview File ↗"})]})]}),a.jsxs("div",{className:"bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-6",children:[a.jsxs("span",{className:"text-sm font-bold uppercase tracking-wider text-sky-600 flex items-center space-x-2",children:[a.jsx("span",{className:"w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs",children:"2"}),a.jsx("span",{children:"Print Customizations"})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-semibold text-slate-600 mb-1.5",children:"Document Pages"}),a.jsx("input",{type:"number",min:"1",value:o,onChange:G=>l(Math.max(1,parseInt(G.target.value)||1)),className:"w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-sky-500"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-semibold text-slate-600 mb-1.5",children:"Number of Copies"}),a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("button",{onClick:()=>d(Math.max(1,c-1)),className:"w-10 h-10 rounded-xl border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 font-bold",children:"-"}),a.jsx("span",{className:"flex-1 text-center font-bold text-slate-800 text-base",children:c}),a.jsx("button",{onClick:()=>d(c+1),className:"w-10 h-10 rounded-xl border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 font-bold",children:"+"})]})]})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-semibold text-slate-600 mb-2",children:"Color Mode"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("button",{onClick:()=>p("bw"),className:`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${f==="bw"?"border-sky-600 bg-sky-50 text-sky-700 shadow-sm":"border-slate-200 hover:bg-slate-50 text-slate-600"}`,children:"B&W (₹2/page)"}),a.jsx("button",{onClick:()=>p("color"),className:`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${f==="color"?"border-sky-600 bg-sky-50 text-sky-700 shadow-sm":"border-slate-200 hover:bg-slate-50 text-slate-600"}`,children:"Color (₹10/page)"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-semibold text-slate-600 mb-2",children:"Print Sidedness"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("button",{onClick:()=>g("single"),className:`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${h==="single"?"border-sky-600 bg-sky-50 text-sky-700 shadow-sm":"border-slate-200 hover:bg-slate-50 text-slate-600"}`,children:"Single-sided"}),a.jsx("button",{onClick:()=>g("double"),className:`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${h==="double"?"border-sky-600 bg-sky-50 text-sky-700 shadow-sm":"border-slate-200 hover:bg-slate-50 text-slate-600"}`,children:"Duplex (₹3/sheet)"})]})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-semibold text-slate-600 mb-2",children:"Finishing & Binding"}),a.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:[{id:"none",label:"No Binding",price:"₹0"},{id:"staple",label:"Corner Staple",price:"Free"},{id:"spiral",label:"Spiral Binding",price:"+₹30"},{id:"hard",label:"Hard Thesis",price:"+₹180"}].map(G=>a.jsxs("button",{onClick:()=>w(G.id),className:`p-2.5 rounded-xl text-left border transition-all ${m===G.id?"border-sky-600 bg-sky-50/70 shadow-sm":"border-slate-200 hover:bg-slate-50"}`,children:[a.jsx("div",{className:"text-xs font-bold text-slate-800",children:G.label}),a.jsx("div",{className:"text-[11px] text-sky-600 font-semibold mt-0.5",children:G.price})]},G.id))})]})]}),a.jsxs("div",{className:"bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsxs("span",{className:"text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center space-x-1.5",children:[a.jsx(lc,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Hyderabad Xerox Rate Breakdown"})]}),a.jsxs("span",{className:"text-xs text-slate-400",children:["Rate: ₹",(v==null?void 0:v.rate_per_unit)||2,"/unit"]})]}),a.jsx("div",{className:"flex items-baseline justify-between border-b border-white/10 pb-4",children:a.jsxs("div",{children:[a.jsxs("span",{className:"text-4xl font-extrabold tracking-tight",children:["₹",((B=v==null?void 0:v.total_amount_inr)==null?void 0:B.toFixed(2))||"0.00"]}),a.jsx("span",{className:"text-xs text-slate-300 ml-2 font-medium",children:"All taxes & campus handling included"})]})}),a.jsxs("div",{className:"mt-3 text-xs text-slate-300 flex items-center justify-between",children:[a.jsx("span",{children:(v==null?void 0:v.summary)||"Estimating..."}),a.jsxs("span",{className:"text-emerald-400 font-semibold",children:[v==null?void 0:v.sheets_per_copy," Sheet(s) / Copy"]})]}),a.jsxs("button",{onClick:F,disabled:S||!r,className:`w-full mt-5 py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 transition-all shadow-lg ${r?S?"bg-sky-400 text-slate-900 cursor-wait":"bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-sky-500/30":"bg-slate-700 text-slate-400 cursor-not-allowed"}`,children:[a.jsx(Vr,{className:"w-4 h-4"}),a.jsx("span",{children:S?"Processing Payment...":`Pay ₹${((X=v==null?void 0:v.total_amount_inr)==null?void 0:X.toFixed(2))||"0.00"} via Razorpay`}),a.jsx(wg,{className:"w-4 h-4"})]}),a.jsxs("button",{onClick:wt,disabled:S||!r,className:"w-full mt-2.5 py-2.5 px-3 rounded-xl font-bold text-xs bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 flex items-center justify-center space-x-1.5 transition-all shadow-sm",title:"One-click test payment with instant sandbox approval",children:[a.jsx(Ui,{className:"w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse"}),a.jsx("span",{children:"⚡ One-Click Direct Trial Pay (Instant UPI / Auto-Confirm)"})]})]}),b&&a.jsx("div",{className:"bg-white rounded-2xl p-5 border border-emerald-200 bg-emerald-50/30 shadow-sm",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:"w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center",children:a.jsx(Gs,{className:"w-5 h-5 animate-spin"})}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsxs("h4",{className:"text-sm font-bold text-slate-900",children:["Active Order: ",b]}),a.jsxs("span",{className:"text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center space-x-1",children:[a.jsx(Pn,{className:"w-3 h-3 text-emerald-600"}),a.jsx("span",{children:"PAID (Razorpay)"})]})]}),a.jsxs("p",{className:"text-xs text-slate-600 mt-0.5",children:["Status:"," ",a.jsx("span",{className:"font-bold uppercase text-emerald-700",children:(x==null?void 0:x.status)||"queued"})," ","• Pickup: ",((ee=x==null?void 0:x.raw_fields)==null?void 0:ee.pickup_counter)||"Counter 1"," •"," ",a.jsx("span",{className:"text-indigo-600 font-semibold",children:"Est. Wait: ~3-5 mins"})]}),Se&&a.jsxs("p",{className:"text-[10px] text-slate-500 mt-0.5",children:["Txn ID: ",a.jsx("span",{className:"font-mono text-slate-700",children:Se.paymentId})]}),(x==null?void 0:x.status)==="ready"&&a.jsx("p",{className:"text-[11px] font-bold text-emerald-700 mt-1 flex items-center space-x-1",children:a.jsx("span",{children:"🔒 Digital file permanently shredded from cloud for your privacy."})})]})]}),a.jsx("span",{className:"text-xs font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full",children:"Live Polling"})]})})]}),a.jsxs("div",{className:"lg:col-span-5 flex flex-col h-[750px] bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden",children:[a.jsxs("div",{className:"p-4 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-sky-50/50 flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-sky-500/20",children:a.jsx(Ws,{className:"w-5 h-5"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-sm font-bold text-slate-900",children:"EasePrint AI Assistant"}),a.jsx("p",{className:"text-[11px] text-slate-500",children:"Claude 3.5 Sonnet on Amazon Bedrock"})]})]}),a.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700",children:"Online"})]}),a.jsxs("div",{className:"flex-1 p-4 overflow-y-auto space-y-4",children:[V.map((G,ae)=>a.jsx("div",{className:`flex ${G.role==="user"?"justify-end":"justify-start"}`,children:a.jsx("div",{className:`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-sm ${G.role==="user"?"bg-sky-600 text-white rounded-br-none":"bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200/80"}`,children:a.jsx(dT,{text:G.content,isUser:G.role==="user"})})},ae)),K&&a.jsx("div",{className:"flex justify-start",children:a.jsxs("div",{className:"bg-slate-100 rounded-2xl px-4 py-3 text-xs text-slate-500 flex items-center space-x-2",children:[a.jsx(Lc,{className:"w-3.5 h-3.5 animate-spin text-sky-600"}),a.jsx("span",{children:"Bedrock reasoning & calculating pricing..."})]})}),a.jsx("div",{ref:j})]}),a.jsx("div",{className:"p-3 border-t border-slate-100 bg-slate-50/60 flex flex-wrap gap-1.5",children:["Price for 10 pages color?","Add spiral binding please","How much for 2 copies double-sided?"].map((G,ae)=>a.jsx("button",{onClick:()=>{ne(G)},className:"text-[11px] bg-white border border-slate-200 hover:border-sky-400 hover:text-sky-700 text-slate-600 px-2.5 py-1 rounded-full transition-colors truncate",children:G},ae))}),a.jsxs("form",{onSubmit:y,className:"p-3 border-t border-slate-200 bg-white flex items-center space-x-2",children:[a.jsx("input",{type:"text",value:I,onChange:G=>ne(G.target.value),placeholder:"Ask for prices, customizations, or help...",className:"flex-1 px-3.5 py-2 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"}),a.jsx("button",{type:"submit",disabled:K||!I.trim(),className:"w-10 h-10 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white flex items-center justify-center transition-colors shadow-sm",children:a.jsx(Ng,{className:"w-4 h-4"})})]})]})]}),Z&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200",children:a.jsxs("div",{className:"bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col md:flex-row relative",children:[a.jsxs("div",{className:"absolute top-3 right-10 bg-sky-600 text-white font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md z-20 flex items-center space-x-1",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-white animate-pulse"}),a.jsx("span",{children:"Fast Checkout"})]}),a.jsxs("div",{className:"md:w-5/12 bg-gradient-to-b from-[#0c2340] via-[#034694] to-[#0284c7] text-white p-6 flex flex-col justify-between relative overflow-hidden",children:[a.jsxs("div",{className:"space-y-6 relative z-10",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center font-black text-white text-lg shadow-inner",children:"🖨️"}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-extrabold text-sm tracking-wide text-white leading-tight",children:"EasePrint Xerox Hub"}),a.jsx("p",{className:"text-[10px] text-sky-200",children:"Campus Cloud Print Station"})]})]}),a.jsxs("div",{className:"bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15",children:[a.jsx("span",{className:"text-[10px] uppercase tracking-wider text-sky-200 font-bold block",children:"Price Summary"}),a.jsxs("div",{className:"text-3xl font-black text-white mt-1",children:["₹",Z.amountInr.toFixed(2)]}),a.jsxs("div",{className:"text-[11px] text-sky-100/90 mt-1 flex items-center space-x-1",children:[a.jsx("span",{children:"Order:"}),a.jsx("span",{className:"font-mono font-semibold",children:Z.jobId})]})]}),a.jsxs("div",{className:"bg-black/20 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center space-x-2.5 text-xs text-white",children:[a.jsx("div",{className:"w-6 h-6 rounded-full bg-sky-400/30 flex items-center justify-center text-xs",children:"👤"}),a.jsxs("div",{className:"truncate",children:[a.jsx("div",{className:"text-[10px] text-sky-200",children:"Paying as"}),a.jsx("div",{className:"font-bold truncate",children:"+91 83091 12619"})]})]})]}),a.jsxs("div",{className:"pt-6 relative z-10 border-t border-white/15 text-[10px] text-sky-200/90 flex items-center justify-between",children:[a.jsxs("span",{className:"flex items-center space-x-1",children:[a.jsx(Cl,{className:"w-3.5 h-3.5 text-emerald-400"}),a.jsx("span",{children:"Razorpay Verified"})]}),a.jsx("span",{className:"font-mono text-[9px] text-sky-300",children:"256-Bit SSL"})]})]}),a.jsxs("div",{className:"md:w-7/12 p-5 sm:p-6 flex flex-col justify-between bg-slate-50/50",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-200/80",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("h4",{className:"font-extrabold text-sm text-slate-900",children:"Payment Options"}),a.jsxs("span",{className:"text-[9px] bg-emerald-100 text-emerald-800 border border-emerald-300 font-extrabold px-2 py-0.5 rounded-full flex items-center space-x-1",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"}),a.jsx("span",{children:"TRIAL / TEST MODE"})]})]}),a.jsx("p",{className:"text-[11px] text-slate-500",children:"Auto-filled mock credentials — click confirm to pay instantly"})]}),a.jsx("button",{onClick:()=>he(null),className:"w-8 h-8 rounded-full bg-slate-200/70 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors",children:a.jsx(Ef,{className:"w-4 h-4"})})]}),a.jsxs("div",{className:"grid grid-cols-3 gap-1.5 bg-slate-200/70 p-1 rounded-2xl mt-4",children:[a.jsxs("button",{onClick:()=>Oe("upi"),className:`flex items-center justify-center space-x-1.5 py-2 rounded-xl text-xs font-bold transition-all ${Fe==="upi"?"bg-white text-sky-700 shadow-sm":"text-slate-600 hover:text-slate-900"}`,children:[a.jsx(Bu,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"UPI / QR"})]}),a.jsxs("button",{onClick:()=>Oe("cards"),className:`flex items-center justify-center space-x-1.5 py-2 rounded-xl text-xs font-bold transition-all ${Fe==="cards"?"bg-white text-sky-700 shadow-sm":"text-slate-600 hover:text-slate-900"}`,children:[a.jsx(Vr,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Cards"})]}),a.jsxs("button",{onClick:()=>Oe("netbanking"),className:`flex items-center justify-center space-x-1.5 py-2 rounded-xl text-xs font-bold transition-all ${Fe==="netbanking"?"bg-white text-sky-700 shadow-sm":"text-slate-600 hover:text-slate-900"}`,children:[a.jsx(Wy,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Netbanking"})]})]}),Fe==="upi"&&a.jsxs("div",{className:"mt-4 space-y-3.5 animate-in fade-in duration-150",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-[11px] font-bold text-slate-600 mb-1.5 block",children:"Popular UPI Apps"}),a.jsx("div",{className:"grid grid-cols-4 gap-2",children:[{id:"gpay",label:"GPay",color:"bg-blue-50 text-blue-700 border-blue-200"},{id:"phonepe",label:"PhonePe",color:"bg-purple-50 text-purple-700 border-purple-200"},{id:"paytm",label:"Paytm",color:"bg-sky-50 text-sky-700 border-sky-200"},{id:"cred",label:"BHIM",color:"bg-emerald-50 text-emerald-700 border-emerald-200"}].map(G=>a.jsx("button",{onClick:()=>Ze(G.id),className:`py-2 px-1 rounded-xl border text-[11px] font-extrabold flex flex-col items-center justify-center transition-all ${qe===G.id?`${G.color} ring-2 ring-sky-500 font-black shadow-sm`:"bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`,children:a.jsxs("span",{children:["📱 ",G.label]})},G.id))})]}),a.jsxs("div",{className:"bg-white border border-slate-200 rounded-2xl p-3 shadow-sm",children:[a.jsxs("div",{className:"flex items-center justify-between mb-1",children:[a.jsx("label",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-500",children:"Enter UPI ID / VPA"}),a.jsxs("span",{className:"text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full flex items-center space-x-1",children:[a.jsx(Ou,{className:"w-3 h-3"}),a.jsx("span",{children:"Instant UPI"})]})]}),a.jsx("input",{type:"text",value:Ge,onChange:G=>nt(G.target.value),className:"w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500",placeholder:"yourname@okaxis"}),a.jsxs("p",{className:"text-[10px] text-emerald-600 mt-1 flex items-center space-x-1 font-medium",children:[a.jsx(Pn,{className:"w-3 h-3"}),a.jsx("span",{children:"Ready to confirm immediately with 0% gateway surcharge"})]})]}),a.jsxs("div",{className:"border border-dashed border-sky-300 bg-sky-50/50 rounded-2xl p-3 flex items-center space-x-3",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-white border border-sky-200 p-1 flex items-center justify-center shrink-0 shadow-sm",children:a.jsx(rS,{className:"w-10 h-10 text-slate-800"})}),a.jsxs("div",{className:"text-left",children:[a.jsx("div",{className:"text-xs font-bold text-slate-900",children:"Scan & Pay Any UPI App"}),a.jsx("div",{className:"text-[10px] text-slate-500 leading-tight",children:"Or click confirm below to complete payment instantly."})]})]})]}),Fe==="cards"&&a.jsxs("div",{className:"mt-4 space-y-3 animate-in fade-in duration-150",children:[a.jsxs("div",{className:"bg-sky-50 border border-sky-200 rounded-xl p-2.5 flex items-center space-x-2 text-[11px] text-sky-800 font-semibold",children:[a.jsx(Cl,{className:"w-4 h-4 text-sky-600 shrink-0"}),a.jsx("span",{children:"Enter debit or credit card details for instant confirmation"})]}),a.jsxs("div",{className:"bg-white border border-slate-200 rounded-2xl p-3.5 space-y-2.5 shadow-sm",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-[10px] font-bold uppercase text-slate-500 block mb-1",children:"Card Number"}),a.jsx("input",{type:"text",value:Q,onChange:G=>re(G.target.value),placeholder:"4111 •••• •••• 4444",className:"w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-[10px] font-bold uppercase text-slate-500 block mb-1",children:"MM / YY"}),a.jsx("input",{type:"text",value:_e,onChange:G=>se(G.target.value),placeholder:"MM / YY",className:"w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-[10px] font-bold uppercase text-slate-500 block mb-1",children:"CVV"}),a.jsx("input",{type:"text",value:le,onChange:G=>De(G.target.value),placeholder:"CVV",className:"w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-[10px] font-bold uppercase text-slate-500 block mb-1",children:"Cardholder Name"}),a.jsx("input",{type:"text",value:dt,onChange:G=>ke(G.target.value),placeholder:"Full Name as on Card",className:"w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"})]}),a.jsxs("label",{className:"flex items-center space-x-2 text-[11px] text-slate-600 pt-1 cursor-pointer",children:[a.jsx("input",{type:"checkbox",checked:pt,onChange:G=>mt(G.target.checked),className:"rounded text-sky-600 focus:ring-sky-500"}),a.jsx("span",{children:"Save this card securely as per RBI guidelines"})]})]})]}),Fe==="netbanking"&&a.jsxs("div",{className:"mt-4 space-y-3 animate-in fade-in duration-150",children:[a.jsx("span",{className:"text-[11px] font-bold text-slate-600 block",children:"Choose Bank for Direct Debiting"}),a.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"sbi",name:"State Bank of India",icon:"🏛️"},{id:"hdfc",name:"HDFC Bank",icon:"🏦"},{id:"icici",name:"ICICI Bank",icon:"💳"},{id:"axis",name:"Axis Bank",icon:"🏧"}].map(G=>a.jsxs("button",{onClick:()=>We(G.id),className:`p-3 rounded-2xl border text-left flex items-center space-x-2.5 transition-all ${Nt===G.id?"bg-sky-50 border-sky-400 ring-2 ring-sky-300 font-bold":"bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`,children:[a.jsx("span",{className:"text-xl",children:G.icon}),a.jsx("span",{className:"text-xs",children:G.name})]},G.id))})]})]}),a.jsxs("div",{className:"mt-5 pt-4 border-t border-slate-200/80 space-y-2",children:[a.jsxs("button",{onClick:()=>C(Z.jobId,"pay_trial_"+Math.random().toString(36).substring(2,11),Z.orderId),className:"w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-sky-600 to-indigo-600 hover:from-emerald-500 hover:to-sky-500 text-white font-extrabold text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-sky-600/25 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]",children:[a.jsx(Cl,{className:"w-5 h-5 text-emerald-300"}),a.jsxs("span",{children:["⚡ Direct Confirm & Pay ₹",Z.amountInr.toFixed(2)," (Trial Mode)"]})]}),a.jsxs("div",{className:"flex items-center justify-between text-[10px] text-slate-500 px-1 pt-1",children:[a.jsx("span",{children:"Pre-filled Razorpay Test Sandbox (rzp_test_TavfilameY1r04)"}),a.jsx("button",{onClick:Je,className:"text-sky-600 hover:underline font-bold",title:"Opens native Razorpay popup (Test Card: 4111 1111 1111 1111)",children:"Open native Razorpay popup"})]})]})]})]})})]})}function dT({text:t,isUser:e}){if(e)return a.jsx("p",{className:"whitespace-pre-wrap leading-relaxed",children:t});const n=(t||"").split(/\n\n+/);return a.jsx("div",{className:"space-y-3 text-xs sm:text-sm leading-relaxed",children:n.map((i,r)=>{const s=i.split(`
`);return s.length>1&&s.every(l=>l.trim().startsWith("•")||l.trim().startsWith("-")||l.trim().startsWith("*")||l.trim().startsWith("·"))?a.jsx("ul",{className:"space-y-1.5 pl-1 list-none my-1.5",children:s.map((l,c)=>{const d=l.replace(/^[\s•\-\*·]+/,"").trim();return a.jsxs("li",{className:"flex items-start space-x-2",children:[a.jsx("span",{className:"text-sky-600 font-bold leading-5",children:"•"}),a.jsx("span",{className:"flex-1",children:o0(d)})]},c)})},r):a.jsx("p",{className:"leading-relaxed",children:s.map((l,c)=>a.jsxs(_0.Fragment,{children:[o0(l),c<s.length-1&&a.jsx("br",{})]},c))},r)})})}function o0(t){return t.split(/(\*\*.*?\*\*)/g).map((n,i)=>n.startsWith("**")&&n.endsWith("**")?a.jsx("strong",{className:"font-bold text-slate-900",children:n.slice(2,-2)},i):n)}function ml(t,e){if(!e||!e.length)return;const n=Object.keys(e[0]),i=[n.join(","),...e.map(l=>n.map(c=>{let d=l[c]===null||l[c]===void 0?"":String(l[c]);return d=d.replace(/"/g,'""'),(d.includes(",")||d.includes(`
`)||d.includes('"'))&&(d=`"${d}"`),d}).join(","))].join(`
`),r=new Blob([i],{type:"text/csv;charset=utf-8;"}),s=URL.createObjectURL(r),o=document.createElement("a");o.setAttribute("href",s),o.setAttribute("download",t),document.body.appendChild(o),o.click(),document.body.removeChild(o)}function l0(t,e){const n=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),i=URL.createObjectURL(n),r=document.createElement("a");r.setAttribute("href",i),r.setAttribute("download",t),document.body.appendChild(r),r.click(),document.body.removeChild(r)}function uT(){var G,ae,q,te,ce,Ne,xe,pe,Ee,Ue,Ve,k,me,ie,fe,ge,oe,we,Ae,ut,it,Zt,nn,Tr;const[t,e]=ue.useState("queue"),[n,i]=ue.useState([]),[r,s]=ue.useState(!0),[o,l]=ue.useState("all"),[c,d]=ue.useState(""),[f,p]=ue.useState(null),[h,g]=ue.useState("Unsupported file format or damaged document"),[m,w]=ue.useState({}),[_,u]=ue.useState([]),[v,E]=ue.useState(!1),[S,T]=ue.useState("pricing"),[b,A]=ue.useState(null),[x,N]=ue.useState(null),[P,D]=ue.useState(!1),[O,V]=ue.useState(""),[U,I]=ue.useState("all"),[ne,K]=ue.useState(""),[z,j]=ue.useState("all"),[W,Z]=ue.useState([]),[he,Se]=ue.useState(!1),[He,Fe]=ue.useState("ALL"),[Oe,Q]=ue.useState(""),[re,_e]=ue.useState(!0),[se,le]=ue.useState(null),De=async()=>{try{const R=await oT();A(R)}catch(R){console.warn("Could not load algorithm status:",R)}},dt=ue.useRef(!1),ke=async()=>{if(!dt.current){dt.current=!0;try{const R=await Q2();if(Array.isArray(R)){const Me=R.filter(je=>je.job_id&&!je.job_id.startsWith("_config"));i(Me)}De()}catch(R){console.warn("Could not load jobs:",R)}finally{dt.current=!1,s(!1)}}},Ge=async()=>{D(!0);try{const R=await sT();N(R)}catch(R){console.warn("Could not load analytics:",R)}finally{D(!1)}},nt=async()=>{try{const R=await aT(200,He);Z(R.logs||[])}catch(R){console.warn("Could not load audit logs:",R)}finally{Se(!1)}};ue.useEffect(()=>{ke(),Ge(),De()},[]),ue.useEffect(()=>{let R;return t==="queue"?R=setInterval(ke,5e3):t==="earnings"||t==="payments"||t==="printouts"?(Ge(),R=setInterval(Ge,6e3)):t==="logs"&&(nt(),re&&(R=setInterval(nt,4e3))),()=>clearInterval(R)},[t,re,He]);const qe=()=>{t==="queue"?ke():t==="logs"?nt():Ge()},Ze=n.filter(R=>{if(!R.job_id||R.job_id.startsWith("_config")||!(o==="all"||(R.source_channel||"").toLowerCase()===o))return!1;if(!c.trim())return!0;const je=c.toLowerCase();return(R.job_id||"").toLowerCase().includes(je)||(R.sender_name||"").toLowerCase().includes(je)||(R.file_name||"").toLowerCase().includes(je)}),Nt=[...Ze.filter(R=>R.status==="queued")].sort((R,Me)=>{var vt,fn;const je=((vt=R.priority_metadata)==null?void 0:vt.priority_rank)??9999,st=((fn=Me.priority_metadata)==null?void 0:fn.priority_rank)??9999;return je-st}),We={received:Ze.filter(R=>R.status==="received"||R.status==="needs_info"||R.status==="inquiry"),queued:Nt,printing:Ze.filter(R=>R.status==="printing"),ready:Ze.filter(R=>R.status==="ready"),completed:Ze.filter(R=>R.status==="completed"),rejected:Ze.filter(R=>R.status==="rejected")},pt=async R=>{i(Me=>Me.map(je=>je.job_id===R?{...je,status:"rejected",rejection_reason:h}:je)),p(null);try{await rT(R,h),ke(),Ge()}catch(Me){alert("Failed to reject job: "+Me.message),ke()}},mt=async R=>{i(Me=>Me.map(je=>je.job_id===R?{...je,status:"queued"}:je));try{await Gd(R,"queued","Staff manual override to queued"),ke(),Ge()}catch(Me){console.error("Status update error:",Me),ke()}},F=async R=>{i(st=>st.map(vt=>vt.job_id===R?{...vt,status:"printing"}:vt)),w(st=>({...st,[R]:15}));try{await Gd(R,"printing","Printing sheets on Xerox WorkCentre 7845")}catch(st){console.warn("Print status update:",st)}let Me=10;const je=setInterval(async()=>{if(Me+=20,w(st=>({...st,[R]:Math.min(Me,100)})),Me>=100){clearInterval(je),w(st=>{const vt={...st};return delete vt[R],vt}),i(st=>st.map(vt=>vt.job_id===R?{...vt,status:"ready"}:vt));try{const st=await eT(R,"Counter 1 (Main)","Printed via Xerox WorkCentre (Counter 1)");u(vt=>{var fn,pn;return[{id:Date.now(),text:`Dispatched backward alert to ${(fn=st.outbound_payload)==null?void 0:fn.target_channel} (${(pn=st.outbound_payload)==null?void 0:pn.sender_id}): "Order #${R} ready!"`},...vt]}),ke(),Ge()}catch(st){console.error("Print ready dispatch error:",st)}}},1200)},wt=async R=>{i(Me=>Me.map(je=>je.job_id===R?{...je,status:"completed",payment_status:"paid"}:je));try{await Gd(R,"completed","Order handed over to student"),await ke(),await Ge()}catch(Me){console.error("Mark completed error:",Me),ke()}},Je=((x==null?void 0:x.payment_records)||[]).filter(R=>{if(U!=="all"&&R.payment_status!==U)return!1;if(!O.trim())return!0;const Me=O.toLowerCase();return(R.job_id||"").toLowerCase().includes(Me)||(R.customer_name||"").toLowerCase().includes(Me)||(R.payment_id||"").toLowerCase().includes(Me)}),C=((x==null?void 0:x.printout_records)||[]).filter(R=>{if(z!=="all"&&R.status!==z)return!1;if(!ne.trim())return!0;const Me=ne.toLowerCase();return(R.job_id||"").toLowerCase().includes(Me)||(R.customer_name||"").toLowerCase().includes(Me)||(R.file_name||"").toLowerCase().includes(Me)}),y=W.filter(R=>{if(He!=="ALL"&&R.event_type!==He)return!1;if(!Oe.trim())return!0;const Me=Oe.toLowerCase();return(R.message||"").toLowerCase().includes(Me)||(R.job_id||"").toLowerCase().includes(Me)||(R.channel||"").toLowerCase().includes(Me)}),B=((G=x==null?void 0:x.summary)==null?void 0:G.total_revenue)??0,X=((ae=x==null?void 0:x.summary)==null?void 0:ae.today_revenue)??0,ee=((q=x==null?void 0:x.summary)==null?void 0:q.total_pages_printed)??0;return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6",children:[a.jsxs("div",{className:"bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[a.jsx("div",{children:a.jsxs("div",{className:"flex items-center space-x-2.5",children:[a.jsx("div",{className:"w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20",children:a.jsx($r,{className:"w-5 h-5"})}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("h1",{className:"text-2xl font-black text-slate-900 tracking-tight",children:"Staff Print Station & Command"}),a.jsxs("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 uppercase tracking-wider flex items-center space-x-1",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"}),a.jsx("span",{children:"AWS Native"})]}),b&&a.jsxs("span",{onClick:()=>{T("algorithm"),E(!0)},className:`cursor-pointer px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider flex items-center space-x-1.5 transition-all shadow-sm ${b.enabled?"bg-indigo-50 text-indigo-900 border-indigo-200 hover:bg-indigo-100":"bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"}`,title:"Click to configure Queue Execution Algorithm",children:[a.jsx(Ui,{className:`w-3 h-3 ${b.enabled?"text-amber-500 fill-amber-400 animate-pulse":"text-slate-400"}`}),a.jsxs("span",{children:["Algorithm:"," ",b.priority_metric==="higher_price"?"Higher Price":b.priority_metric==="lower_price"?"Lower Price":b.priority_metric==="more_pages"?"More Pages":"Fewer Pages"]}),a.jsx("span",{className:`text-[8px] px-1.5 py-0.2 rounded-full font-black ${b.enabled?"bg-indigo-600 text-white":"bg-slate-300 text-slate-700"}`,children:b.enabled?"Auto":"Manual"})]})]}),a.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:"Multi-channel queue, live printer queue, earnings ledger, zero-retention privacy, and system audit logs."})]})]})}),a.jsxs("div",{className:"flex items-center space-x-2.5",children:[a.jsxs("button",{onClick:()=>{T("pricing"),E(!0)},className:"flex items-center space-x-1.5 px-3.5 py-2 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm shadow-indigo-500/20",children:[a.jsx(Rl,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Store AI & Pricing"})]}),a.jsxs("button",{onClick:()=>{T("algorithm"),E(!0)},className:"flex items-center space-x-1.5 px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-800 rounded-xl text-xs font-bold transition-all shadow-sm",children:[a.jsx(uo,{className:"w-3.5 h-3.5 text-indigo-600"}),a.jsx("span",{children:"Algorithm"})]}),a.jsxs("button",{onClick:qe,className:"flex items-center space-x-1.5 px-3.5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold transition-colors shadow-sm",children:[a.jsx(Lc,{className:"w-3.5 h-3.5 text-slate-500"}),a.jsx("span",{children:"Refresh"})]})]})]}),a.jsxs("div",{className:"flex flex-wrap items-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200 shadow-inner",children:[a.jsxs("button",{onClick:()=>e("queue"),className:`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${t==="queue"?"bg-white text-indigo-700 shadow-sm border border-slate-200":"text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"}`,children:[a.jsx($r,{className:"w-4 h-4"}),a.jsx("span",{children:"Live Queue"}),a.jsx("span",{className:"px-1.5 py-0.2 rounded-full text-[10px] bg-indigo-100 text-indigo-800 font-extrabold",children:We.queued.length+We.printing.length})]}),a.jsxs("button",{onClick:()=>e("earnings"),className:`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${t==="earnings"?"bg-white text-indigo-700 shadow-sm border border-slate-200":"text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"}`,children:[a.jsx(om,{className:"w-4 h-4 text-emerald-600"}),a.jsx("span",{children:"Earnings Dashboard"}),a.jsxs("span",{className:"px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-100 text-emerald-800 font-extrabold",children:["₹",B.toFixed(0)]})]}),a.jsxs("button",{onClick:()=>e("payments"),className:`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${t==="payments"?"bg-white text-indigo-700 shadow-sm border border-slate-200":"text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"}`,children:[a.jsx(Vr,{className:"w-4 h-4 text-sky-600"}),a.jsx("span",{children:"Payment Records"}),a.jsx("span",{className:"px-1.5 py-0.2 rounded-full text-[10px] bg-sky-100 text-sky-800 font-extrabold",children:((te=x==null?void 0:x.payment_records)==null?void 0:te.length)??0})]}),a.jsxs("button",{onClick:()=>e("printouts"),className:`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${t==="printouts"?"bg-white text-indigo-700 shadow-sm border border-slate-200":"text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"}`,children:[a.jsx(ud,{className:"w-4 h-4 text-amber-600"}),a.jsx("span",{children:"Printout Records"}),a.jsxs("span",{className:"px-1.5 py-0.2 rounded-full text-[10px] bg-amber-100 text-amber-800 font-extrabold",children:[ee," pgs"]})]}),a.jsxs("button",{onClick:()=>e("logs"),className:`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${t==="logs"?"bg-white text-indigo-700 shadow-sm border border-slate-200":"text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"}`,children:[a.jsx(sm,{className:"w-4 h-4 text-purple-600"}),a.jsx("span",{children:"System Audit Logs"}),a.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"})]})]}),t==="queue"&&a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[a.jsxs("div",{className:"bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-black",children:n.length}),a.jsxs("div",{children:[a.jsx("div",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"Total Orders"}),a.jsxs("div",{className:"text-sm font-extrabold text-slate-800",children:[n.length," Jobs Received"]})]})]}),a.jsxs("div",{className:"bg-white p-4 rounded-2xl border border-sky-200 shadow-sm flex items-center space-x-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-black",children:We.queued.length}),a.jsxs("div",{children:[a.jsx("div",{className:"text-[11px] font-bold text-sky-500 uppercase tracking-wider",children:"Queued in Line"}),a.jsx("div",{className:"text-sm font-extrabold text-sky-900",children:"Ready to Print"})]})]}),a.jsxs("div",{className:"bg-white p-4 rounded-2xl border border-amber-200 shadow-sm flex items-center space-x-3",children:[a.jsxs("div",{className:"w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black",children:["~",(We.queued.length+We.printing.length)*2,"m"]}),a.jsxs("div",{children:[a.jsx("div",{className:"text-[11px] font-bold text-amber-600 uppercase tracking-wider",children:"Estimated Wait"}),a.jsx("div",{className:"text-sm font-extrabold text-amber-900",children:"Queue Throughput"})]})]}),a.jsxs("div",{className:"bg-white p-4 rounded-2xl border border-emerald-200 shadow-sm flex items-center space-x-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black",children:We.ready.length}),a.jsxs("div",{children:[a.jsx("div",{className:"text-[11px] font-bold text-emerald-600 uppercase tracking-wider",children:"Ready at Counter"}),a.jsx("div",{className:"text-sm font-extrabold text-emerald-900",children:"Awaiting Student"})]})]})]}),b&&a.jsxs("div",{className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-4 rounded-2xl shadow-sm border border-indigo-900/50 flex flex-col md:flex-row md:items-center md:justify-between gap-3",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-xl bg-indigo-600/30 text-indigo-300 flex items-center justify-center border border-indigo-500/30 shrink-0",children:a.jsx(Ui,{className:`w-5 h-5 ${b.enabled?"text-amber-400 fill-amber-400 animate-pulse":"text-slate-400"}`})}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("span",{className:"text-xs font-black uppercase tracking-wider text-indigo-200",children:"Autonomous Queue Algorithm"}),a.jsx("span",{className:`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${b.enabled?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-slate-700 text-slate-300"}`,children:b.enabled?"Auto-Pilot Active (3s loop)":"Manual Dispatch"})]}),a.jsxs("p",{className:"text-xs text-slate-300 mt-0.5",children:["Order Priority: ",a.jsx("strong",{className:"text-white",children:b.priority_metric==="higher_price"?"Higher Price First (Max Revenue)":b.priority_metric==="lower_price"?"Lower Price First (Express Micro-Orders)":b.priority_metric==="more_pages"?"More Pages First (Bulk Academic Run)":"Fewer Pages First (Shortest Job First / SJF)"}),b.top_priority_order&&a.jsxs("span",{className:"ml-2 text-amber-300 font-bold",children:["• Next to Print: #",b.top_priority_order," (",((ce=b.top_priority_metadata)==null?void 0:ce.priority_reason)||"",")"]})]})]})]}),a.jsxs("div",{className:"flex items-center space-x-2 shrink-0",children:[a.jsxs("div",{className:"flex items-center space-x-1.5 bg-white/10 border border-white/20 rounded-xl p-1",children:[a.jsxs("button",{onClick:async()=>{if(!(b!=null&&b.enabled)){A(R=>R?{...R,enabled:!0}:{enabled:!0}),u(R=>[{id:Date.now(),text:"⚡ Auto-Pilot Activated: Autonomous queue loop processing orders every 3s"},...R]);try{const R=await Ah();R.algorithm={...R.algorithm,enabled:!0},R.last_updated=new Date().toISOString(),await Ch(R),await De(),await ke()}catch(R){alert("Toggle error: "+R.message),De()}}},className:`px-3 py-1.5 rounded-lg text-xs font-black transition-all flex items-center space-x-1.5 ${b!=null&&b.enabled?"bg-emerald-500 text-white shadow-sm shadow-emerald-500/30":"text-slate-300 hover:text-white hover:bg-white/10"}`,title:"Enable Auto-Pilot: algorithm runs every 3 seconds",children:[a.jsx(Ui,{className:`w-3 h-3 ${b!=null&&b.enabled?"fill-white":""}`}),a.jsx("span",{children:"Auto"})]}),a.jsxs("button",{onClick:async()=>{if(b!=null&&b.enabled){A(R=>R?{...R,enabled:!1}:{enabled:!1}),u(R=>[{id:Date.now(),text:"🎛️ Manual Dispatch Mode: Auto-Pilot paused. Click 'Execute Next Step' or manage cards manually."},...R]);try{const R=await Ah();R.algorithm={...R.algorithm,enabled:!1},R.last_updated=new Date().toISOString(),await Ch(R),await De()}catch(R){alert("Toggle error: "+R.message),De()}}},className:`px-3 py-1.5 rounded-lg text-xs font-black transition-all flex items-center space-x-1.5 ${b!=null&&b.enabled?"text-slate-300 hover:text-white hover:bg-white/10":"bg-slate-500 text-white shadow-sm"}`,title:"Switch to Manual: staff controls each step",children:[a.jsx(Rl,{className:"w-3 h-3"}),a.jsx("span",{children:"Manual"})]})]}),a.jsxs("button",{onClick:async()=>{try{const R=await lT();await ke(),await De(),R.action&&R.action!=="idle"&&R.action!=="disabled"&&u(Me=>[{id:Date.now(),text:`Algorithm: ${R.action} → Job #${R.job_id||"?"} → ${R.status||R.message||""}`},...Me])}catch(R){alert("Execution error: "+R.message)}},className:"px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center space-x-1.5",title:"Force immediate execution of the next algorithm step",children:[a.jsx(Al,{className:"w-3.5 h-3.5 fill-current text-white"}),a.jsx("span",{children:"Execute Next Step"})]}),a.jsxs("button",{onClick:()=>{T("algorithm"),E(!0)},className:"px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-all border border-white/10 flex items-center space-x-1.5",children:[a.jsx(Rl,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Configure"})]})]})]}),a.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:a.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[a.jsxs("div",{className:"flex items-center space-x-1 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm",children:[a.jsx("span",{className:"text-[11px] font-bold text-slate-400 px-2 uppercase tracking-wider",children:"Channel:"}),["all","whatsapp","telegram","web"].map(R=>a.jsx("button",{onClick:()=>l(R),className:`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${o===R?"bg-indigo-600 text-white shadow-sm":"text-slate-600 hover:bg-slate-100"}`,children:R==="all"?"All Channels":R},R))]}),a.jsxs("div",{className:"relative",children:[a.jsx(Xo,{className:"w-3.5 h-3.5 absolute left-3 top-3 text-slate-400"}),a.jsx("input",{type:"text",value:c,onChange:R=>d(R.target.value),placeholder:"Search Job ID, Student, File...",className:"pl-9 pr-3 py-2 border border-slate-200 bg-white rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 w-64 shadow-sm"})]})]})}),_.length>0&&a.jsxs("div",{className:"bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-xs text-emerald-900 space-y-1 shadow-sm",children:[a.jsxs("div",{className:"font-bold flex items-center space-x-1.5",children:[a.jsx(Ng,{className:"w-3.5 h-3.5 text-emerald-600"}),a.jsx("span",{children:"Outbound Backward Relay Dispatch:"})]}),_.slice(0,2).map(R=>a.jsxs("div",{className:"text-emerald-700 font-mono text-[11px]",children:["• ",R.text]},R.id))]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4",children:[a.jsxs("div",{className:"bg-slate-100/70 p-3.5 rounded-2xl border border-slate-200/80 flex flex-col h-[680px]",children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-200 mb-3",children:[a.jsxs("span",{className:"text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5",children:[a.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-400"}),a.jsx("span",{children:"Intake / Inquiry"})]}),a.jsx("span",{className:"text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full shadow-sm",children:We.received.length})]}),a.jsxs("div",{className:"flex-1 overflow-y-auto space-y-3 pr-1",children:[We.received.map(R=>a.jsx(Na,{job:R,onReject:Me=>p(Me),actionButton:a.jsxs("div",{className:"space-y-1.5 mt-2",children:[a.jsxs("button",{onClick:()=>mt(R.job_id),className:"w-full py-1.5 px-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1 shadow-sm transition-all active:scale-95 cursor-pointer",children:[a.jsx(Ou,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Approve & Queue"})]}),a.jsxs("button",{onClick:()=>F(R.job_id),className:"w-full py-1.5 px-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1 shadow-sm transition-all",children:[a.jsx(Al,{className:"w-3.5 h-3.5 fill-current"}),a.jsx("span",{children:"Print Directly"})]})]})},R.job_id)),We.received.length===0&&a.jsx(Ta,{text:"No pending inquiries"})]})]}),a.jsxs("div",{className:"bg-slate-100/70 p-3.5 rounded-2xl border border-slate-200/80 flex flex-col h-[680px]",children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-200 mb-3",children:[a.jsxs("span",{className:"text-xs font-bold text-sky-700 uppercase tracking-wider flex items-center space-x-1.5",children:[a.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-sky-500"}),a.jsx("span",{children:"Queued (Ready)"})]}),a.jsx("span",{className:"text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full shadow-sm",children:We.queued.length})]}),b&&a.jsxs("div",{className:"mb-2 px-1 text-[10px] flex items-center justify-between text-slate-500 font-semibold",children:[a.jsxs("span",{className:"truncate",children:["Priority: ",b.priority_metric==="higher_price"?"Higher Price (₹)":b.priority_metric==="lower_price"?"Lower Price (₹)":b.priority_metric==="more_pages"?"More Pages":"Fewer Pages"]}),b.enabled&&a.jsxs("span",{className:"text-indigo-600 font-bold flex items-center space-x-0.5 shrink-0",children:[a.jsx(Ui,{className:"w-2.5 h-2.5 fill-current text-amber-500"}),a.jsx("span",{children:"Auto-Pick"})]})]}),a.jsxs("div",{className:"flex-1 overflow-y-auto space-y-3 pr-1",children:[We.queued.map(R=>a.jsx(Na,{job:R,onReject:Me=>p(Me),actionButton:a.jsxs("button",{onClick:()=>F(R.job_id),className:"w-full mt-2 py-2 px-3 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 shadow-sm transition-all",children:[a.jsx(Al,{className:"w-3.5 h-3.5 fill-current"}),a.jsx("span",{children:"Start Printing"})]})},R.job_id)),We.queued.length===0&&a.jsx(Ta,{text:"Queue empty"})]})]}),a.jsxs("div",{className:"bg-slate-100/70 p-3.5 rounded-2xl border border-slate-200/80 flex flex-col h-[680px]",children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-200 mb-3",children:[a.jsxs("span",{className:"text-xs font-bold text-indigo-700 uppercase tracking-wider flex items-center space-x-1.5",children:[a.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"}),a.jsx("span",{children:"Printing..."})]}),a.jsx("span",{className:"text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full shadow-sm",children:We.printing.length})]}),a.jsxs("div",{className:"flex-1 overflow-y-auto space-y-3 pr-1",children:[We.printing.map(R=>{const Me=m[R.job_id]||40;return a.jsxs("div",{className:"bg-white p-3.5 rounded-xl border border-indigo-200 shadow-sm space-y-2",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs font-extrabold text-slate-900",children:R.job_id}),a.jsxs("span",{className:"text-[10px] font-bold text-indigo-600",children:[Me,"%"]})]}),a.jsx("div",{className:"w-full bg-slate-100 rounded-full h-2 overflow-hidden",children:a.jsx("div",{className:"bg-indigo-600 h-2 rounded-full transition-all duration-500",style:{width:`${Me}%`}})}),a.jsx("p",{className:"text-[11px] text-slate-500 italic",children:"Xerox WorkCentre outputting sheets..."})]},R.job_id)}),We.printing.length===0&&a.jsx(Ta,{text:"No active prints"})]})]}),a.jsxs("div",{className:"bg-slate-100/70 p-3.5 rounded-2xl border border-slate-200/80 flex flex-col h-[680px]",children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-200 mb-3",children:[a.jsxs("span",{className:"text-xs font-bold text-emerald-700 uppercase tracking-wider flex items-center space-x-1.5",children:[a.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500"}),a.jsx("span",{children:"Ready for Pickup"})]}),a.jsx("span",{className:"text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full shadow-sm",children:We.ready.length})]}),a.jsxs("div",{className:"flex-1 overflow-y-auto space-y-3 pr-1",children:[We.ready.map(R=>a.jsx(Na,{job:R,actionButton:a.jsxs("button",{onClick:()=>wt(R.job_id),className:"w-full mt-2 py-1.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1 shadow-sm transition-all",children:[a.jsx(Ou,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Handover & Complete"})]})},R.job_id)),We.ready.length===0&&a.jsx(Ta,{text:"No prints waiting"})]})]}),a.jsxs("div",{className:"bg-slate-100/70 p-3.5 rounded-2xl border border-slate-200/80 flex flex-col h-[680px]",children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-200 mb-3",children:[a.jsxs("span",{className:"text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center space-x-1.5",children:[a.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-slate-400"}),a.jsx("span",{children:"Archived / Complete"})]}),a.jsx("span",{className:"text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full shadow-sm",children:We.completed.length})]}),a.jsxs("div",{className:"flex-1 overflow-y-auto space-y-3 pr-1",children:[We.completed.map(R=>a.jsx(Na,{job:R},R.job_id)),We.completed.length===0&&a.jsx(Ta,{text:"No completed orders"})]})]})]}),((Ne=We.rejected)==null?void 0:Ne.length)>0&&a.jsxs("div",{className:"bg-rose-50/50 p-4 rounded-2xl border border-rose-200",children:[a.jsx("div",{className:"flex items-center justify-between mb-3",children:a.jsxs("span",{className:"text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center space-x-2",children:[a.jsx(Li,{className:"w-4 h-4 text-rose-600"}),a.jsxs("span",{children:["Rejected Print Requests (",We.rejected.length,")"]})]})}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3",children:We.rejected.map(R=>a.jsx(Na,{job:R},R.job_id))})]})]}),t==="earnings"&&a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4",children:[a.jsxs("div",{className:"bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm relative overflow-hidden",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Total Gross Revenue"}),a.jsx("span",{className:"w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold",children:"₹"})]}),a.jsxs("div",{className:"text-3xl font-black text-slate-900 mt-2",children:["₹",B.toFixed(2)]}),a.jsxs("div",{className:"flex items-center space-x-1.5 text-xs text-emerald-600 font-bold mt-1",children:[a.jsx(om,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Verified Collections"})]})]}),a.jsxs("div",{className:"bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm relative overflow-hidden",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Today's Revenue"}),a.jsx("span",{className:"w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center",children:a.jsx(Gs,{className:"w-4 h-4"})})]}),a.jsxs("div",{className:"text-3xl font-black text-indigo-700 mt-2",children:["₹",X.toFixed(2)]}),a.jsx("div",{className:"text-xs text-slate-500 font-medium mt-1",children:"Today's Store Turnaround"})]}),a.jsxs("div",{className:"bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm relative overflow-hidden",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Pages Printed"}),a.jsx("span",{className:"w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center",children:a.jsx($r,{className:"w-4 h-4"})})]}),a.jsx("div",{className:"text-3xl font-black text-slate-900 mt-2",children:ee}),a.jsxs("div",{className:"text-xs text-slate-500 font-semibold mt-1 flex items-center space-x-1",children:[a.jsxs("span",{children:[((xe=x==null?void 0:x.summary)==null?void 0:xe.bw_pages_printed)??0," B&W"]}),a.jsx("span",{children:"•"}),a.jsxs("span",{className:"text-sky-600",children:[((pe=x==null?void 0:x.summary)==null?void 0:pe.color_pages_printed)??0," Color"]})]})]}),a.jsxs("div",{className:"bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm relative overflow-hidden",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Binding Revenue"}),a.jsx("span",{className:"w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center",children:a.jsx(lc,{className:"w-4 h-4"})})]}),a.jsxs("div",{className:"text-3xl font-black text-amber-700 mt-2",children:["₹",(((Ee=x==null?void 0:x.summary)==null?void 0:Ee.binding_revenue)??0).toFixed(2)]}),a.jsxs("div",{className:"text-xs text-slate-500 font-semibold mt-1",children:["Printing: ₹",(((Ue=x==null?void 0:x.summary)==null?void 0:Ue.print_revenue)??0).toFixed(2)]})]}),a.jsxs("div",{className:"bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm relative overflow-hidden",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Avg Order Value"}),a.jsx("span",{className:"w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center",children:a.jsx($y,{className:"w-4 h-4"})})]}),a.jsxs("div",{className:"text-3xl font-black text-purple-700 mt-2",children:["₹",(((Ve=x==null?void 0:x.summary)==null?void 0:Ve.average_order_value)??0).toFixed(2)]}),a.jsxs("div",{className:"text-xs text-slate-500 font-semibold mt-1",children:[((k=x==null?void 0:x.summary)==null?void 0:k.completed_orders)??0," completed orders"]})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[a.jsxs("div",{className:"bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4",children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-100",children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx(Vr,{className:"w-5 h-5 text-indigo-600"}),a.jsx("h3",{className:"font-extrabold text-sm text-slate-900",children:"Payment Methods Breakdown"})]}),a.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600",children:"Real-Time"})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"space-y-1.5",children:[a.jsxs("div",{className:"flex items-center justify-between text-xs font-bold",children:[a.jsxs("span",{className:"text-slate-800 flex items-center space-x-1.5",children:[a.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500"}),a.jsx("span",{children:"Razorpay Online (UPI/Cards)"})]}),a.jsxs("span",{className:"text-emerald-700 font-extrabold",children:["₹",(((ie=(me=x==null?void 0:x.payment_breakdown)==null?void 0:me.razorpay)==null?void 0:ie.amount)??0).toFixed(2)," (",((ge=(fe=x==null?void 0:x.payment_breakdown)==null?void 0:fe.razorpay)==null?void 0:ge.count)??0,")"]})]}),a.jsx("div",{className:"w-full bg-slate-100 rounded-full h-2 overflow-hidden",children:a.jsx("div",{className:"bg-emerald-500 h-2 rounded-full",style:{width:`${B>0?Math.min(100,(((we=(oe=x==null?void 0:x.payment_breakdown)==null?void 0:oe.razorpay)==null?void 0:we.amount)??0)/B*100):0}%`}})})]}),a.jsxs("div",{className:"space-y-1.5",children:[a.jsxs("div",{className:"flex items-center justify-between text-xs font-bold",children:[a.jsxs("span",{className:"text-slate-800 flex items-center space-x-1.5",children:[a.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-400"}),a.jsx("span",{children:"Counter Cash / Direct Pickup"})]}),a.jsxs("span",{className:"text-amber-700 font-extrabold",children:["₹",(((ut=(Ae=x==null?void 0:x.payment_breakdown)==null?void 0:Ae.counter_or_unpaid)==null?void 0:ut.amount)??0).toFixed(2)," (",((Zt=(it=x==null?void 0:x.payment_breakdown)==null?void 0:it.counter_or_unpaid)==null?void 0:Zt.count)??0,")"]})]}),a.jsx("div",{className:"w-full bg-slate-100 rounded-full h-2 overflow-hidden",children:a.jsx("div",{className:"bg-amber-400 h-2 rounded-full",style:{width:`${B>0?Math.min(100,(((Tr=(nn=x==null?void 0:x.payment_breakdown)==null?void 0:nn.counter_or_unpaid)==null?void 0:Tr.amount)??0)/B*100):0}%`}})})]})]}),a.jsxs("div",{className:"p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600 space-y-1",children:[a.jsxs("div",{className:"font-bold text-slate-800 flex items-center space-x-1",children:[a.jsx(Cl,{className:"w-4 h-4 text-emerald-600"}),a.jsx("span",{children:"Settlement Guarantee"})]}),a.jsx("p",{className:"text-[11px] text-slate-500 leading-relaxed",children:"Razorpay payments settle with 100% cryptographic checksum verification on webhook signatures before marking print status as complete."})]})]}),a.jsxs("div",{className:"bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4",children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-100",children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx(oc,{className:"w-5 h-5 text-sky-600"}),a.jsx("h3",{className:"font-extrabold text-sm text-slate-900",children:"Intake Channel Volume"})]}),a.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-700",children:"Multi-Channel"})]}),a.jsx("div",{className:"space-y-3",children:["web","telegram","whatsapp"].map(R=>{var st;const Me=((st=x==null?void 0:x.channel_breakdown)==null?void 0:st[R])||{count:0,revenue:0},je={web:"text-purple-700 bg-purple-100 border-purple-200",telegram:"text-sky-700 bg-sky-100 border-sky-200",whatsapp:"text-emerald-700 bg-emerald-100 border-emerald-200"};return a.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/50",children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("span",{className:`px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase border ${je[R]||"text-slate-700 bg-slate-100"}`,children:R}),a.jsxs("span",{className:"text-xs font-bold text-slate-700",children:[Me.count," Orders"]})]}),a.jsxs("span",{className:"text-xs font-black text-slate-900",children:["₹",Me.revenue.toFixed(2)]})]},R)})}),a.jsx("p",{className:"text-[11px] text-slate-400 italic",children:"Normalized into a single unified queue via Amazon DynamoDB and ARQ worker engine."})]}),a.jsxs("div",{className:"bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 flex flex-col justify-between",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center space-x-2 pb-3 border-b border-slate-100",children:[a.jsx(Pr,{className:"w-5 h-5 text-indigo-600"}),a.jsx("h3",{className:"font-extrabold text-sm text-slate-900",children:"Ledger & Data Exports"})]}),a.jsx("p",{className:"text-xs text-slate-500 mt-2",children:"Generate instant CSV sheets for campus accounting and audit records:"}),a.jsxs("div",{className:"space-y-2 mt-4",children:[a.jsxs("button",{onClick:()=>ml(`easeprint_payments_${Date.now()}.csv`,(x==null?void 0:x.payment_records)||[]),className:"w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-colors shadow-sm",children:[a.jsxs("span",{className:"flex items-center space-x-2",children:[a.jsx(Vr,{className:"w-4 h-4 text-emerald-600"}),a.jsx("span",{children:"Export Payments Ledger (CSV)"})]}),a.jsx(Pr,{className:"w-3.5 h-3.5 text-slate-400"})]}),a.jsxs("button",{onClick:()=>ml(`easeprint_printouts_${Date.now()}.csv`,(x==null?void 0:x.printout_records)||[]),className:"w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-colors shadow-sm",children:[a.jsxs("span",{className:"flex items-center space-x-2",children:[a.jsx(ud,{className:"w-4 h-4 text-sky-600"}),a.jsx("span",{children:"Export Printout Production (CSV)"})]}),a.jsx(Pr,{className:"w-3.5 h-3.5 text-slate-400"})]}),a.jsxs("button",{onClick:()=>l0(`easeprint_audit_logs_${Date.now()}.json`,W),className:"w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-colors shadow-sm",children:[a.jsxs("span",{className:"flex items-center space-x-2",children:[a.jsx(Yy,{className:"w-4 h-4 text-purple-600"}),a.jsx("span",{children:"Export System Audit Logs (JSON)"})]}),a.jsx(Pr,{className:"w-3.5 h-3.5 text-slate-400"})]})]})]}),a.jsxs("div",{className:"pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium",children:["Records are permanently stored in DynamoDB table: ",a.jsx("strong",{children:"EasePrintJobs"})]})]})]})]}),t==="payments"&&a.jsxs("div",{className:"space-y-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100",children:[a.jsxs("div",{children:[a.jsxs("h2",{className:"text-lg font-black text-slate-900 tracking-tight flex items-center space-x-2",children:[a.jsx(Vr,{className:"w-5 h-5 text-indigo-600"}),a.jsx("span",{children:"Financial & Payment Transactions Ledger"})]}),a.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:"Every transaction, Razorpay transaction ID, amount, and payment verification status."})]}),a.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[a.jsxs("div",{className:"relative",children:[a.jsx(Xo,{className:"w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400"}),a.jsx("input",{type:"text",value:O,onChange:R=>V(R.target.value),placeholder:"Search Job ID, Student, Pay ID...",className:"pl-9 pr-3 py-1.5 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 w-56 shadow-sm"})]}),a.jsx("div",{className:"flex items-center space-x-1 bg-slate-100 p-1 rounded-xl",children:["all","paid","unpaid"].map(R=>a.jsx("button",{onClick:()=>I(R),className:`px-2.5 py-1 rounded-lg text-xs font-bold capitalize transition-all ${U===R?"bg-white text-indigo-700 shadow-sm":"text-slate-600 hover:text-slate-900"}`,children:R},R))}),a.jsxs("button",{onClick:()=>ml(`payments_ledger_${Date.now()}.csv`,Je),className:"flex items-center space-x-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm shadow-emerald-500/20",children:[a.jsx(Pr,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Export CSV"})]})]})]}),a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-left text-xs border-collapse",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:[a.jsx("th",{className:"py-3 px-3",children:"Job ID"}),a.jsx("th",{className:"py-3 px-3",children:"Customer"}),a.jsx("th",{className:"py-3 px-3",children:"Channel"}),a.jsx("th",{className:"py-3 px-3",children:"Amount (₹)"}),a.jsx("th",{className:"py-3 px-3",children:"Status"}),a.jsx("th",{className:"py-3 px-3",children:"Razorpay Payment ID"}),a.jsx("th",{className:"py-3 px-3",children:"Order ID"}),a.jsx("th",{className:"py-3 px-3",children:"Date & Time"})]})}),a.jsxs("tbody",{className:"divide-y divide-slate-100",children:[Je.map((R,Me)=>{var je;return a.jsxs("tr",{className:"hover:bg-slate-50/70 transition-colors",children:[a.jsx("td",{className:"py-3 px-3 font-mono font-bold text-indigo-700",children:R.job_id}),a.jsx("td",{className:"py-3 px-3 font-semibold text-slate-800",children:R.customer_name}),a.jsx("td",{className:"py-3 px-3",children:a.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-700 border border-slate-200",children:R.channel})}),a.jsxs("td",{className:"py-3 px-3 font-black text-slate-900",children:["₹",R.amount_inr.toFixed(2)]}),a.jsx("td",{className:"py-3 px-3",children:R.payment_status==="paid"?a.jsxs("span",{className:"inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200",children:[a.jsx(Pn,{className:"w-3 h-3 text-emerald-600"}),a.jsx("span",{children:"PAID"})]}):a.jsxs("span",{className:"inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200",children:[a.jsx(Gs,{className:"w-3 h-3 text-amber-600"}),a.jsx("span",{children:"UNPAID"})]})}),a.jsx("td",{className:"py-3 px-3 font-mono text-slate-600 text-[11px]",children:R.payment_id}),a.jsx("td",{className:"py-3 px-3 font-mono text-slate-400 text-[11px]",children:R.razorpay_order_id}),a.jsx("td",{className:"py-3 px-3 text-slate-500 text-[11px]",children:R.paid_at!=="—"?R.paid_at.replace("T"," ").slice(0,19):((je=R.created_at)==null?void 0:je.replace("T"," ").slice(0,19))||"—"})]},Me)}),Je.length===0&&a.jsx("tr",{children:a.jsx("td",{colSpan:8,className:"py-8 text-center text-slate-400 text-xs font-medium",children:"No payment records found matching filters."})})]})]})})]}),t==="printouts"&&a.jsxs("div",{className:"space-y-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100",children:[a.jsxs("div",{children:[a.jsxs("h2",{className:"text-lg font-black text-slate-900 tracking-tight flex items-center space-x-2",children:[a.jsx(ud,{className:"w-5 h-5 text-indigo-600"}),a.jsx("span",{children:"Physical Printout & Production Records"})]}),a.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:"Audit history of documents printed, binding specs, sheets consumed, and zero-retention shredding status."})]}),a.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[a.jsxs("div",{className:"relative",children:[a.jsx(Xo,{className:"w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400"}),a.jsx("input",{type:"text",value:ne,onChange:R=>K(R.target.value),placeholder:"Search Job ID, File, Student...",className:"pl-9 pr-3 py-1.5 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 w-56 shadow-sm"})]}),a.jsx("div",{className:"flex items-center space-x-1 bg-slate-100 p-1 rounded-xl",children:["all","ready","completed","queued","rejected"].map(R=>a.jsx("button",{onClick:()=>j(R),className:`px-2.5 py-1 rounded-lg text-xs font-bold capitalize transition-all ${z===R?"bg-white text-indigo-700 shadow-sm":"text-slate-600 hover:text-slate-900"}`,children:R},R))}),a.jsxs("button",{onClick:()=>ml(`printouts_ledger_${Date.now()}.csv`,C),className:"flex items-center space-x-1 px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm shadow-sky-500/20",children:[a.jsx(Pr,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Export CSV"})]})]})]}),a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-left text-xs border-collapse",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:[a.jsx("th",{className:"py-3 px-3",children:"Job ID"}),a.jsx("th",{className:"py-3 px-3",children:"Customer"}),a.jsx("th",{className:"py-3 px-3",children:"Document"}),a.jsx("th",{className:"py-3 px-3",children:"Specs (Pgs × Copies)"}),a.jsx("th",{className:"py-3 px-3",children:"Color Mode"}),a.jsx("th",{className:"py-3 px-3",children:"Sides"}),a.jsx("th",{className:"py-3 px-3",children:"Binding"}),a.jsx("th",{className:"py-3 px-3",children:"Amount (₹)"}),a.jsx("th",{className:"py-3 px-3",children:"Job Status"}),a.jsx("th",{className:"py-3 px-3",children:"Privacy Purge"}),a.jsx("th",{className:"py-3 px-3",children:"Completed Time"})]})}),a.jsxs("tbody",{className:"divide-y divide-slate-100",children:[C.map((R,Me)=>a.jsxs("tr",{className:"hover:bg-slate-50/70 transition-colors",children:[a.jsx("td",{className:"py-3 px-3 font-mono font-bold text-indigo-700",children:R.job_id}),a.jsx("td",{className:"py-3 px-3 font-semibold text-slate-800",children:R.customer_name}),a.jsx("td",{className:"py-3 px-3 max-w-[160px] truncate text-slate-600",title:R.file_name,children:R.file_name}),a.jsxs("td",{className:"py-3 px-3 font-semibold text-slate-700",children:[R.pages," pgs × ",R.copies," cp (",R.total_sheets," sheets)"]}),a.jsx("td",{className:"py-3 px-3",children:a.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${R.color_mode==="color"?"bg-purple-100 text-purple-700 border border-purple-200":"bg-slate-100 text-slate-700"}`,children:R.color_mode})}),a.jsx("td",{className:"py-3 px-3 capitalize text-slate-600",children:R.sides}),a.jsx("td",{className:"py-3 px-3",children:R.binding&&R.binding!=="none"?a.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 capitalize",children:R.binding}):a.jsx("span",{className:"text-slate-400",children:"—"})}),a.jsxs("td",{className:"py-3 px-3 font-black text-slate-900",children:["₹",R.total_amount_inr.toFixed(2)]}),a.jsx("td",{className:"py-3 px-3",children:a.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${R.status==="ready"||R.status==="completed"?"bg-emerald-100 text-emerald-800":R.status==="rejected"?"bg-rose-100 text-rose-800":"bg-sky-100 text-sky-800"}`,children:R.status})}),a.jsx("td",{className:"py-3 px-3",children:R.file_purged?a.jsxs("span",{className:"inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200",children:[a.jsx(Tg,{className:"w-2.5 h-2.5 text-emerald-600"}),a.jsx("span",{children:"🔒 Shredded"})]}):a.jsx("span",{className:"inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-600",children:a.jsx("span",{children:"Active"})})}),a.jsx("td",{className:"py-3 px-3 text-slate-500 text-[11px]",children:R.completed_at!=="—"?R.completed_at.replace("T"," ").slice(0,19):"—"})]},Me)),C.length===0&&a.jsx("tr",{children:a.jsx("td",{colSpan:11,className:"py-8 text-center text-slate-400 text-xs font-medium",children:"No printout records found matching filters."})})]})]})})]}),t==="logs"&&a.jsxs("div",{className:"space-y-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm",children:[a.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-100",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx(sm,{className:"w-5 h-5 text-purple-600"}),a.jsx("h2",{className:"text-lg font-black text-slate-900 tracking-tight",children:"Real-Time System Audit Trail"}),a.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800 border border-purple-200",children:"Append-Only"})]}),a.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:"Audit logs for every intake event, AI decision, Razorpay payment, zero-retention S3 purge, and relay notification."})]}),a.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[a.jsxs("label",{className:"flex items-center space-x-1.5 text-xs font-bold text-slate-600 cursor-pointer bg-slate-100 px-3 py-1.5 rounded-xl",children:[a.jsx("input",{type:"checkbox",checked:re,onChange:R=>_e(R.target.checked),className:"rounded text-indigo-600 focus:ring-indigo-500"}),a.jsxs("span",{className:"flex items-center space-x-1",children:[a.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),a.jsx("span",{children:"Live Auto-Refresh (3s)"})]})]}),a.jsxs("div",{className:"relative",children:[a.jsx(Xo,{className:"w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400"}),a.jsx("input",{type:"text",value:Oe,onChange:R=>Q(R.target.value),placeholder:"Search logs or Job ID...",className:"pl-9 pr-3 py-1.5 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 w-52 shadow-sm"})]}),a.jsxs("button",{onClick:()=>l0(`audit_logs_${Date.now()}.json`,W),className:"flex items-center space-x-1 px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm shadow-purple-500/20",children:[a.jsx(Pr,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Export JSON"})]})]})]}),a.jsx("div",{className:"flex flex-wrap gap-1.5 pb-2",children:["ALL","ORDER_INTAKE","PAYMENT_INTENT","PAYMENT_SUCCESS","STATUS_CHANGE","PRINT_READY","PRIVACY_SHRED","NOTIFICATION_DISPATCH","ORDER_REJECTED","FILE_UPLOAD","AI_CHAT"].map(R=>a.jsx("button",{onClick:()=>Fe(R),className:`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${He===R?"bg-slate-900 text-white shadow-sm":"bg-slate-100 text-slate-600 hover:bg-slate-200/80"}`,children:R},R))}),a.jsxs("div",{className:"space-y-2.5 max-h-[620px] overflow-y-auto pr-1",children:[y.map(R=>{var st;const Me={ORDER_INTAKE:"bg-indigo-100 text-indigo-800 border-indigo-200",PAYMENT_INTENT:"bg-amber-100 text-amber-800 border-amber-200",PAYMENT_SUCCESS:"bg-emerald-100 text-emerald-800 border-emerald-200",STATUS_CHANGE:"bg-sky-100 text-sky-800 border-sky-200",PRINT_READY:"bg-blue-100 text-blue-800 border-blue-200",PRIVACY_SHRED:"bg-purple-100 text-purple-800 border-purple-200",NOTIFICATION_DISPATCH:"bg-teal-100 text-teal-800 border-teal-200",ORDER_REJECTED:"bg-rose-100 text-rose-800 border-rose-200",FILE_UPLOAD:"bg-slate-100 text-slate-800 border-slate-300",AI_CHAT:"bg-cyan-100 text-cyan-800 border-cyan-200"},je=se===R.id;return a.jsxs("div",{className:"bg-slate-50/70 hover:bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 transition-colors space-y-2 shadow-xs",children:[a.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.jsx("span",{className:`px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase border tracking-wider ${Me[R.event_type]||"bg-slate-200 text-slate-800"}`,children:R.event_type}),R.job_id&&a.jsx("span",{className:"font-mono text-[11px] font-bold text-slate-800 bg-white px-2 py-0.5 rounded-md border border-slate-200",children:R.job_id}),a.jsx("span",{className:"text-[10px] font-bold uppercase text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200",children:R.channel})]}),a.jsx("span",{className:"text-[11px] font-mono text-slate-400",children:((st=R.timestamp)==null?void 0:st.replace("T"," ").slice(0,19))||""})]}),a.jsx("p",{className:"text-xs font-semibold text-slate-800 leading-relaxed",children:R.message}),R.details&&Object.keys(R.details).length>0&&a.jsxs("div",{className:"pt-1",children:[a.jsxs("button",{onClick:()=>le(je?null:R.id),className:"text-[10px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1 transition-colors",children:[a.jsx("span",{children:je?"Hide Structured Payload":"Show Structured Payload"}),je?a.jsx(Mg,{className:"w-3 h-3"}):a.jsx(Xy,{className:"w-3 h-3"})]}),je&&a.jsx("pre",{className:"mt-2 p-3 bg-slate-900 text-emerald-400 font-mono text-[11px] rounded-xl overflow-x-auto leading-normal",children:JSON.stringify(R.details,null,2)})]})]},R.id)}),y.length===0&&a.jsx("div",{className:"py-12 text-center text-slate-400 text-xs font-medium border-2 border-dashed border-slate-200 rounded-2xl",children:"No audit log events match selected filters."})]})]}),f&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm",children:a.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full border border-slate-200 shadow-2xl p-6 space-y-4",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("h3",{className:"font-bold text-sm text-slate-900 flex items-center space-x-2",children:[a.jsx(Li,{className:"w-4 h-4 text-rose-600"}),a.jsxs("span",{children:["Reject Order #",f]})]}),a.jsx("button",{onClick:()=>p(null),className:"w-7 h-7 rounded-full hover:bg-slate-100 text-slate-400 flex items-center justify-center",children:a.jsx(Ef,{className:"w-4 h-4"})})]}),a.jsx("p",{className:"text-xs text-slate-500",children:"Select a reason for rejecting this print request. The student will be notified and the job marked as rejected."}),a.jsx("div",{className:"space-y-2",children:["Unsupported file format or damaged document","Paper stock or binding materials out of stock","Page count / color specifications mismatch","Payment verification failed / unpaid request","Violates campus academic printing policy"].map(R=>a.jsxs("label",{className:`flex items-center space-x-2 p-2.5 rounded-xl border text-xs cursor-pointer transition-colors ${h===R?"border-rose-500 bg-rose-50/50 text-rose-900 font-bold":"border-slate-200 hover:bg-slate-50 text-slate-700"}`,children:[a.jsx("input",{type:"radio",name:"rejectReason",value:R,checked:h===R,onChange:Me=>g(Me.target.value),className:"text-rose-600 focus:ring-rose-500"}),a.jsx("span",{children:R})]},R))}),a.jsxs("div",{className:"flex items-center space-x-3 pt-2",children:[a.jsx("button",{onClick:()=>p(null),className:"flex-1 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl",children:"Cancel"}),a.jsx("button",{onClick:()=>pt(f),className:"flex-1 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-xl shadow-sm transition-all",children:"Confirm Rejection"})]})]})}),a.jsx(hT,{isOpen:v,defaultTab:S,onClose:()=>E(!1),onSaved:()=>{ke(),Ge(),De()}})]})}function Ta({text:t}){return a.jsx("div",{className:"h-32 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-xs font-medium text-slate-400",children:t})}function Na({job:t,actionButton:e,onReject:n}){var s,o,l,c,d;const i={whatsapp:"bg-emerald-100 text-emerald-800 border-emerald-200",telegram:"bg-sky-100 text-sky-800 border-sky-200",web:"bg-purple-100 text-purple-800 border-purple-200"},r=(t.source_channel||"web").toLowerCase();return a.jsxs("div",{className:"bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-2.5",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs font-extrabold text-slate-900 tracking-tight",children:t.job_id}),a.jsx("span",{className:`px-2 py-0.5 rounded-md text-[10px] font-bold border uppercase tracking-wider ${i[r]||"bg-slate-100 text-slate-700"}`,children:r})]}),t.priority_metadata&&a.jsxs("div",{className:`flex items-center justify-between px-2.5 py-1.5 rounded-xl text-[10px] font-bold border transition-all ${t.priority_metadata.is_top_priority?"bg-amber-50 text-amber-900 border-amber-300 shadow-sm ring-1 ring-amber-300/60":"bg-slate-50 text-slate-700 border-slate-200"}`,children:[a.jsxs("div",{className:"flex items-center space-x-1.5",children:[a.jsx(Ui,{className:`w-3.5 h-3.5 ${t.priority_metadata.is_top_priority?"text-amber-600 fill-amber-500 animate-pulse":"text-slate-400"}`}),a.jsxs("span",{className:"font-extrabold",children:["#",t.priority_metadata.priority_rank," Priority"]}),t.priority_metadata.is_top_priority&&a.jsx("span",{className:"bg-amber-200 text-amber-900 text-[8px] px-1.5 py-0.2 rounded-full font-black uppercase tracking-wider",children:"Next to Print"})]}),a.jsx("span",{className:"text-[9px] font-medium text-slate-500 truncate max-w-[125px]",title:t.priority_metadata.priority_reason,children:t.priority_metadata.priority_reason})]}),a.jsxs("div",{children:[a.jsx("div",{className:"text-xs font-bold text-slate-800 truncate",children:t.sender_name||"Anonymous"}),a.jsx("div",{className:"text-[11px] text-slate-500 truncate",children:t.sender_id}),t.message_text&&a.jsxs("p",{className:"text-[11px] text-slate-600 italic bg-slate-50 p-1.5 rounded-lg mt-1 line-clamp-2",children:['"',t.message_text,'"']})]}),a.jsxs("div",{className:"flex flex-wrap gap-1 text-[10px] font-semibold text-slate-600",children:[((s=t.requirements)==null?void 0:s.copies)&&a.jsxs("span",{className:"bg-slate-100 px-1.5 py-0.5 rounded",children:[t.requirements.copies," Copy"]}),((o=t.requirements)==null?void 0:o.color_mode)&&a.jsx("span",{className:"bg-slate-100 px-1.5 py-0.5 rounded uppercase",children:t.requirements.color_mode}),((l=t.requirements)==null?void 0:l.sides)&&a.jsx("span",{className:"bg-slate-100 px-1.5 py-0.5 rounded capitalize",children:t.requirements.sides}),((c=t.requirements)==null?void 0:c.binding)&&t.requirements.binding!=="none"&&a.jsxs("span",{className:"bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded capitalize",children:[t.requirements.binding," Bind"]})]}),a.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-slate-100 text-xs",children:[a.jsxs("div",{className:"flex items-center space-x-1.5",children:[a.jsxs("span",{className:"font-extrabold text-slate-900",children:["₹",(t.total_amount_inr||((d=t.pricing)==null?void 0:d.total_amount_inr)||0).toFixed(2)]}),t.payment_status==="paid"?a.jsxs("span",{className:"text-[9px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded flex items-center space-x-0.5",children:[a.jsx(Vr,{className:"w-2.5 h-2.5 text-emerald-600"}),a.jsx("span",{children:"PAID"})]}):a.jsx("span",{className:"text-[9px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded",children:"UNPAID"})]}),t.file_url&&t.file_url!=="[PURGED_FOR_PRIVACY]"?a.jsxs("a",{href:t.file_url,target:"_blank",rel:"noreferrer",className:"text-sky-600 hover:text-sky-700 font-bold text-[11px] flex items-center space-x-0.5",children:[a.jsx("span",{children:"View Doc"}),a.jsx(Ky,{className:"w-3 h-3"})]}):a.jsx("span",{className:"text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded flex items-center space-x-1",children:a.jsx("span",{children:"🔒 File Shredded"})})]}),t.status==="rejected"&&a.jsxs("div",{className:"p-2 bg-rose-50 border border-rose-200 rounded-lg text-[10px] text-rose-700 font-medium",children:[a.jsx("strong",{children:"Rejected:"})," ",t.rejection_reason||"Unsuitable order"]}),e,t.status!=="ready"&&t.status!=="completed"&&t.status!=="rejected"&&n&&a.jsx("button",{onClick:()=>n(t.job_id),className:"w-full text-center text-[10px] font-bold text-slate-400 hover:text-rose-600 pt-1 transition-colors",children:"Reject Order"})]})}function hT({isOpen:t,onClose:e,onSaved:n,defaultTab:i="pricing"}){var S,T,b,A,x,N,P,D,O,V,U,I,ne,K,z,j,W,Z,he,Se,He,Fe,Oe,Q,re,_e;const[r,s]=ue.useState(i),[o,l]=ue.useState(!0),[c,d]=ue.useState(!1),[f,p]=ue.useState(!1),[h,g]=ue.useState(""),[m,w]=ue.useState(null);ue.useEffect(()=>{t&&(_(),i&&s(i))},[t,i]);const _=async()=>{l(!0);try{const se=await Ah();w(se)}catch(se){console.error("Failed to load customizations:",se)}finally{l(!1)}},u=(se,le)=>{w(De=>({...De,pricing:{...De.pricing,[se]:parseFloat(le)||0}}))},v=async()=>{d(!0);try{await Ch(m),n==null||n(),e()}catch(se){alert("Failed to save customizations: "+se.message)}finally{d(!1)}},E=async se=>{var De;const le=(De=se.target.files)==null?void 0:De[0];if(le){p(!0),g("");try{const dt=await tT(le);g(`Extracted ${dt.extracted_chars} characters from ${dt.filename} and added to AI context.`),await _()}catch(dt){g("Upload failed: "+dt.message)}finally{p(!1)}}};return t?a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm",children:a.jsxs("div",{className:"bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden",children:[a.jsxs("div",{className:"p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center shadow-inner",children:a.jsx(Rl,{className:"w-5 h-5"})}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-lg font-black text-slate-900 tracking-tight",children:"Store AI Customizations & Pricing"}),a.jsx("p",{className:"text-xs text-slate-500",children:"Live configuration updated across Bedrock AI and Hyderabad rate calculator"})]})]}),a.jsx("button",{onClick:e,className:"w-8 h-8 rounded-full hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors",children:a.jsx(Ef,{className:"w-4 h-4"})})]}),a.jsxs("div",{className:"flex border-b border-slate-200 bg-white px-6",children:[a.jsxs("button",{onClick:()=>s("pricing"),className:`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center space-x-2 ${r==="pricing"?"border-indigo-600 text-indigo-700":"border-transparent text-slate-500 hover:text-slate-900"}`,children:[a.jsx(lc,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Pricing Matrix"})]}),a.jsxs("button",{onClick:()=>s("persona"),className:`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center space-x-2 ${r==="persona"?"border-indigo-600 text-indigo-700":"border-transparent text-slate-500 hover:text-slate-900"}`,children:[a.jsx(Ws,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"AI Persona & Tone"})]}),a.jsxs("button",{onClick:()=>s("context"),className:`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center space-x-2 ${r==="context"?"border-indigo-600 text-indigo-700":"border-transparent text-slate-500 hover:text-slate-900"}`,children:[a.jsx(Gy,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Business Context & RAG"})]}),a.jsxs("button",{onClick:()=>s("algorithm"),className:`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center space-x-2 ${r==="algorithm"?"border-indigo-600 text-indigo-700":"border-transparent text-slate-500 hover:text-slate-900"}`,children:[a.jsx(uo,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Algorithm"}),a.jsx("span",{className:"text-[9px] bg-indigo-100 text-indigo-700 px-1.5 py-0.2 rounded-full font-black",children:"PRIORITY"})]})]}),a.jsx("div",{className:"flex-1 overflow-y-auto p-6 space-y-6",children:o?a.jsxs("div",{className:"py-12 text-center text-slate-400 text-xs flex items-center justify-center space-x-2",children:[a.jsx(Lc,{className:"w-4 h-4 animate-spin text-indigo-600"}),a.jsx("span",{children:"Loading store configuration..."})]}):r==="pricing"?a.jsxs("div",{className:"space-y-5",children:[a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("label",{className:"text-xs font-bold text-slate-700",children:"A4 B&W Single-sided (₹/page)"}),a.jsxs("div",{className:"relative",children:[a.jsx("span",{className:"absolute left-3 top-2.5 text-xs text-slate-400 font-bold",children:"₹"}),a.jsx("input",{type:"number",step:"0.5",value:((S=m==null?void 0:m.pricing)==null?void 0:S.bw_single)??2,onChange:se=>u("bw_single",se.target.value),className:"w-full pl-7 pr-3 py-2 border border-slate-300 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500"})]})]}),a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("label",{className:"text-xs font-bold text-slate-700",children:"A4 B&W Double-sided (₹/sheet)"}),a.jsxs("div",{className:"relative",children:[a.jsx("span",{className:"absolute left-3 top-2.5 text-xs text-slate-400 font-bold",children:"₹"}),a.jsx("input",{type:"number",step:"0.5",value:((T=m==null?void 0:m.pricing)==null?void 0:T.bw_duplex)??3,onChange:se=>u("bw_duplex",se.target.value),className:"w-full pl-7 pr-3 py-2 border border-slate-300 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500"})]})]}),a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("label",{className:"text-xs font-bold text-slate-700",children:"A4 Color Standard (₹/page)"}),a.jsxs("div",{className:"relative",children:[a.jsx("span",{className:"absolute left-3 top-2.5 text-xs text-slate-400 font-bold",children:"₹"}),a.jsx("input",{type:"number",step:"1",value:((b=m==null?void 0:m.pricing)==null?void 0:b.color_standard)??10,onChange:se=>u("color_standard",se.target.value),className:"w-full pl-7 pr-3 py-2 border border-slate-300 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500"})]})]}),a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("label",{className:"text-xs font-bold text-slate-700",children:"A4 Color Glossy (₹/page)"}),a.jsxs("div",{className:"relative",children:[a.jsx("span",{className:"absolute left-3 top-2.5 text-xs text-slate-400 font-bold",children:"₹"}),a.jsx("input",{type:"number",step:"1",value:((A=m==null?void 0:m.pricing)==null?void 0:A.color_glossy)??15,onChange:se=>u("color_glossy",se.target.value),className:"w-full pl-7 pr-3 py-2 border border-slate-300 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500"})]})]}),a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Spiral Binding (₹)"}),a.jsxs("div",{className:"relative",children:[a.jsx("span",{className:"absolute left-3 top-2.5 text-xs text-slate-400 font-bold",children:"₹"}),a.jsx("input",{type:"number",step:"5",value:((x=m==null?void 0:m.pricing)==null?void 0:x.spiral_binding)??30,onChange:se=>u("spiral_binding",se.target.value),className:"w-full pl-7 pr-3 py-2 border border-slate-300 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500"})]})]}),a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Soft Binding (₹)"}),a.jsxs("div",{className:"relative",children:[a.jsx("span",{className:"absolute left-3 top-2.5 text-xs text-slate-400 font-bold",children:"₹"}),a.jsx("input",{type:"number",step:"5",value:((N=m==null?void 0:m.pricing)==null?void 0:N.soft_binding)??50,onChange:se=>u("soft_binding",se.target.value),className:"w-full pl-7 pr-3 py-2 border border-slate-300 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500"})]})]}),a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Hard Project/Thesis Binding (₹)"}),a.jsxs("div",{className:"relative",children:[a.jsx("span",{className:"absolute left-3 top-2.5 text-xs text-slate-400 font-bold",children:"₹"}),a.jsx("input",{type:"number",step:"10",value:((P=m==null?void 0:m.pricing)==null?void 0:P.hard_binding)??180,onChange:se=>u("hard_binding",se.target.value),className:"w-full pl-7 pr-3 py-2 border border-slate-300 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500"})]})]}),a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Corner Stapling (₹)"}),a.jsxs("div",{className:"relative",children:[a.jsx("span",{className:"absolute left-3 top-2.5 text-xs text-slate-400 font-bold",children:"₹"}),a.jsx("input",{type:"number",step:"1",value:((D=m==null?void 0:m.pricing)==null?void 0:D.corner_staple)??0,onChange:se=>u("corner_staple",se.target.value),className:"w-full pl-7 pr-3 py-2 border border-slate-300 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500"})]})]})]}),a.jsxs("div",{className:"space-y-1.5 pt-2 border-t border-slate-100",children:[a.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Custom Promotions & Special Rules"}),a.jsx("textarea",{rows:"3",value:(m==null?void 0:m.custom_rules)||"",onChange:se=>w(le=>({...le,custom_rules:se.target.value})),placeholder:"e.g. Free soft binding for orders over ₹200. Express prints available.",className:"w-full p-3 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 leading-relaxed"})]})]}):r==="persona"?a.jsxs("div",{className:"space-y-5",children:[a.jsxs("div",{className:"bg-indigo-50/70 border border-indigo-100 p-4 rounded-2xl",children:[a.jsxs("div",{className:"flex items-center space-x-2 text-indigo-900 font-bold text-xs mb-1",children:[a.jsx(Ws,{className:"w-4 h-4 text-indigo-600"}),a.jsx("span",{children:"Configurable Agent Persona & Voice"})]}),a.jsxs("p",{className:"text-[11px] text-indigo-700 leading-relaxed",children:["Choose a preset or type a customized persona. The intake AI agent adopts this personality when interacting with students on Telegram and Web, while always quoting the exact live rates from your ",a.jsx("strong",{children:"Pricing Matrix"}),"."]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Quick Persona Presets"}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:[a.jsxs("button",{type:"button",onClick:()=>w(se=>({...se,persona:"Friendly, efficient, and student-focused campus Xerox assistant with local Hyderabad warmth. Explains print options clearly, concisely, and patiently."})),className:"p-3 text-left border border-slate-200 hover:border-indigo-500 rounded-xl bg-slate-50/50 hover:bg-indigo-50/40 transition-all",children:[a.jsxs("div",{className:"font-bold text-xs text-slate-900 flex items-center space-x-1.5",children:[a.jsx("span",{children:"🎓 Friendly Student Peer"}),a.jsx("span",{className:"text-[9px] bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded-full font-bold",children:"Default"})]}),a.jsx("p",{className:"text-[10px] text-slate-500 mt-1 line-clamp-2",children:"Warm, supportive campus tone. Patiently explains double-sided savings and binding perks."})]}),a.jsxs("button",{type:"button",onClick:()=>w(se=>({...se,persona:"High-speed, laser-focused academic print intake agent. Answers in rapid bullet points, prioritizes fast fulfillment, and queues jobs in under 10 seconds."})),className:"p-3 text-left border border-slate-200 hover:border-indigo-500 rounded-xl bg-slate-50/50 hover:bg-indigo-50/40 transition-all",children:[a.jsx("div",{className:"font-bold text-xs text-slate-900",children:"⚡ Express / Urgent Sprint"}),a.jsx("p",{className:"text-[10px] text-slate-500 mt-1 line-clamp-2",children:"Minimal text, ultra-fast turnarounds, instant calculation, and prompt queueing."})]}),a.jsxs("button",{type:"button",onClick:()=>w(se=>({...se,persona:"Polite, formal, and professional print shop consultant. Provides structured itemized summaries, advises on paper weights, and delivers executive-grade service."})),className:"p-3 text-left border border-slate-200 hover:border-indigo-500 rounded-xl bg-slate-50/50 hover:bg-indigo-50/40 transition-all",children:[a.jsx("div",{className:"font-bold text-xs text-slate-900",children:"💼 Formal Print Specialist"}),a.jsx("p",{className:"text-[10px] text-slate-500 mt-1 line-clamp-2",children:"Crisp, polite corporate etiquette with clear itemized price breakdowns."})]}),a.jsxs("button",{type:"button",onClick:()=>w(se=>({...se,persona:"Colloquial Hyderabad campus Xerox Bhayya. Speaks with local warmth and colloquial phrases ('Namaskaram! Haan bhai, what do you need to print today?'). Always makes sure students get the best price."})),className:"p-3 text-left border border-slate-200 hover:border-indigo-500 rounded-xl bg-slate-50/50 hover:bg-indigo-50/40 transition-all",children:[a.jsx("div",{className:"font-bold text-xs text-slate-900",children:"🇮🇳 Campus Xerox Bhayya"}),a.jsx("p",{className:"text-[10px] text-slate-500 mt-1 line-clamp-2",children:"Authentic local student hub flavor with genuine hospitality and care."})]})]})]}),a.jsxs("div",{className:"space-y-1.5 pt-2 border-t border-slate-100",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Active Agent Persona Prompt"}),a.jsx("button",{type:"button",onClick:()=>w(se=>({...se,persona:"Friendly, efficient, and student-focused campus Xerox assistant with local Hyderabad warmth. Explains print options clearly, concisely, and patiently."})),className:"text-[10px] font-bold text-indigo-600 hover:text-indigo-800",children:"Reset to Base Default"})]}),a.jsx("textarea",{rows:"4",value:(m==null?void 0:m.persona)||"",onChange:se=>w(le=>({...le,persona:se.target.value})),placeholder:"Define custom persona, attitude, greeting style, or communication rules...",className:"w-full p-3 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 leading-relaxed font-mono text-slate-800"})]}),a.jsxs("div",{className:"bg-amber-50 border border-amber-200 p-3 rounded-xl text-[11px] text-amber-800 flex items-start space-x-2",children:[a.jsx(lc,{className:"w-4 h-4 text-amber-600 shrink-0 mt-0.5"}),a.jsxs("span",{children:[a.jsx("strong",{children:"Price Reference Guarantee:"})," Regardless of which persona you choose, the agent strictly uses your configured rate card (e.g. ₹",(O=m==null?void 0:m.pricing)!=null&&O.bw_duplex?m.pricing.bw_duplex/2:1.5,"/side double-sided, ₹",((V=m==null?void 0:m.pricing)==null?void 0:V.color_standard)??10,"/page color, ₹",((U=m==null?void 0:m.pricing)==null?void 0:U.spiral_binding)??30," spiral)."]})]})]}):r==="context"?a.jsxs("div",{className:"space-y-5",children:[a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Store Display Name"}),a.jsx("input",{type:"text",value:(m==null?void 0:m.store_name)||"",onChange:se=>w(le=>({...le,store_name:se.target.value})),className:"w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500"})]}),a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Business Context & Guidelines (AI RAG Context)"}),a.jsx("textarea",{rows:"4",value:(m==null?void 0:m.business_context)||"",onChange:se=>w(le=>({...le,business_context:se.target.value})),placeholder:"Describe your store hours, values, pickup counters, thesis binding procedures...",className:"w-full p-3 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 leading-relaxed"})]}),a.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-100",children:[a.jsxs("label",{className:"text-xs font-bold text-slate-700 flex items-center justify-between",children:[a.jsx("span",{children:"Upload Knowledge Base File (PDF or TXT)"}),f&&a.jsx("span",{className:"text-indigo-600 animate-pulse text-[11px]",children:"Extracting text..."})]}),a.jsxs("label",{className:"border-2 border-dashed border-slate-300 hover:border-indigo-500 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-50/50 hover:bg-indigo-50/30",children:[a.jsx("input",{type:"file",onChange:E,accept:".pdf,.txt,.md",className:"hidden"}),a.jsx(Eg,{className:"w-8 h-8 text-indigo-600 mb-1.5"}),a.jsx("span",{className:"font-bold text-xs text-slate-800",children:f?"Extracting & Ingesting Document...":"Click or drop reference file here"}),a.jsx("span",{className:"text-[11px] text-slate-400 mt-0.5",children:"Upload policy documents, rate cards, or campus xerox manuals"})]}),h&&a.jsx("p",{className:"text-xs font-semibold text-emerald-700 bg-emerald-50 p-2 rounded-lg",children:h})]}),((I=m==null?void 0:m.uploaded_knowledge_docs)==null?void 0:I.length)>0&&a.jsxs("div",{className:"space-y-2",children:[a.jsx("span",{className:"text-xs font-bold text-slate-600 uppercase tracking-wider",children:"Active Knowledge Documents:"}),a.jsx("div",{className:"space-y-1.5 max-h-40 overflow-y-auto",children:m.uploaded_knowledge_docs.map((se,le)=>a.jsxs("div",{className:"flex items-center justify-between bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs",children:[a.jsxs("div",{className:"flex items-center space-x-2 truncate max-w-[320px]",children:[a.jsx(Qy,{className:"w-4 h-4 text-indigo-600 shrink-0"}),a.jsx("span",{className:"font-semibold text-slate-800 truncate",children:se.name})]}),a.jsx("span",{className:"text-[10px] text-emerald-700 bg-emerald-100 font-bold px-2 py-0.5 rounded-full shrink-0",children:"Active in RAG"})]},le))})]})]}):a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"bg-gradient-to-r from-indigo-50/90 to-purple-50/90 border border-indigo-100 p-4 rounded-2xl",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center space-x-2.5",children:[a.jsx("div",{className:"w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm",children:a.jsx(uo,{className:"w-4 h-4"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-sm font-black text-slate-900",children:"Autonomous Queue Execution Algorithm"}),a.jsx("p",{className:"text-[11px] text-slate-500",children:"Auto-schedules and prioritizes print jobs from Intake to Pickup"})]})]}),a.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm",children:[a.jsx("span",{className:"text-xs font-extrabold text-slate-800",children:"Auto-Pilot Engine"}),a.jsx("input",{type:"checkbox",checked:((ne=m==null?void 0:m.algorithm)==null?void 0:ne.enabled)??!1,onChange:se=>w(le=>({...le,algorithm:{...le.algorithm||{},enabled:se.target.checked}})),className:"w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"})]})]})}),a.jsxs("div",{className:"space-y-2.5",children:[a.jsxs("div",{children:[a.jsxs("h4",{className:"text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center space-x-1.5",children:[a.jsx(Hy,{className:"w-3.5 h-3.5 text-indigo-600"}),a.jsx("span",{children:"Priority Dispatch Criteria"})]}),a.jsx("p",{className:"text-[11px] text-slate-500 mt-0.5",children:"Select the execution criteria determining which queued job gets printed next:"})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[a.jsxs("button",{type:"button",onClick:()=>w(se=>({...se,algorithm:{...se.algorithm||{},priority_metric:"higher_price"}})),className:`p-3.5 text-left rounded-2xl border-2 transition-all flex flex-col justify-between ${(((K=m==null?void 0:m.algorithm)==null?void 0:K.priority_metric)||"higher_price")==="higher_price"?"border-indigo-600 bg-indigo-50/60 shadow-sm shadow-indigo-100 ring-1 ring-indigo-500/20":"border-slate-200 hover:border-slate-300 bg-white"}`,children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-1",children:[a.jsx("span",{className:"text-xs font-black text-slate-900 flex items-center space-x-1.5",children:a.jsx("span",{children:"💰 Higher Price"})}),(((z=m==null?void 0:m.algorithm)==null?void 0:z.priority_metric)||"higher_price")==="higher_price"&&a.jsx("span",{className:"text-[9px] font-black bg-indigo-600 text-white px-2 py-0.5 rounded-full",children:"ACTIVE"})]}),a.jsx("p",{className:"text-[11px] text-slate-600 leading-relaxed",children:"Prioritizes highest revenue orders (₹) first. Maximizes incoming cash flow and shop throughput."})]}),a.jsxs("div",{className:"mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-500 font-semibold",children:[a.jsx("span",{children:"Sort: Highest ₹ First"}),a.jsx("span",{className:"text-indigo-600 font-bold",children:"Max Revenue"})]})]}),a.jsxs("button",{type:"button",onClick:()=>w(se=>({...se,algorithm:{...se.algorithm||{},priority_metric:"lower_price"}})),className:`p-3.5 text-left rounded-2xl border-2 transition-all flex flex-col justify-between ${((j=m==null?void 0:m.algorithm)==null?void 0:j.priority_metric)==="lower_price"?"border-indigo-600 bg-indigo-50/60 shadow-sm shadow-indigo-100 ring-1 ring-indigo-500/20":"border-slate-200 hover:border-slate-300 bg-white"}`,children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-1",children:[a.jsx("span",{className:"text-xs font-black text-slate-900 flex items-center space-x-1.5",children:a.jsx("span",{children:"⚡ Lower Price"})}),((W=m==null?void 0:m.algorithm)==null?void 0:W.priority_metric)==="lower_price"&&a.jsx("span",{className:"text-[9px] font-black bg-indigo-600 text-white px-2 py-0.5 rounded-full",children:"ACTIVE"})]}),a.jsx("p",{className:"text-[11px] text-slate-600 leading-relaxed",children:"Prioritizes lowest cost micro-orders (₹) first. Quick single-page requests get dispatched instantly."})]}),a.jsxs("div",{className:"mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-500 font-semibold",children:[a.jsx("span",{children:"Sort: Lowest ₹ First"}),a.jsx("span",{className:"text-amber-600 font-bold",children:"Express Micro-Orders"})]})]}),a.jsxs("button",{type:"button",onClick:()=>w(se=>({...se,algorithm:{...se.algorithm||{},priority_metric:"more_pages"}})),className:`p-3.5 text-left rounded-2xl border-2 transition-all flex flex-col justify-between ${((Z=m==null?void 0:m.algorithm)==null?void 0:Z.priority_metric)==="more_pages"?"border-indigo-600 bg-indigo-50/60 shadow-sm shadow-indigo-100 ring-1 ring-indigo-500/20":"border-slate-200 hover:border-slate-300 bg-white"}`,children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-1",children:[a.jsx("span",{className:"text-xs font-black text-slate-900 flex items-center space-x-1.5",children:a.jsx("span",{children:"📚 More Pages"})}),((he=m==null?void 0:m.algorithm)==null?void 0:he.priority_metric)==="more_pages"&&a.jsx("span",{className:"text-[9px] font-black bg-indigo-600 text-white px-2 py-0.5 rounded-full",children:"ACTIVE"})]}),a.jsx("p",{className:"text-[11px] text-slate-600 leading-relaxed",children:"Prioritizes highest total page volume (pages × copies) first. Keeps heavy thesis & lab manual runs moving."})]}),a.jsxs("div",{className:"mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-500 font-semibold",children:[a.jsx("span",{children:"Sort: Largest Volume First"}),a.jsx("span",{className:"text-purple-600 font-bold",children:"Bulk Academic Run"})]})]}),a.jsxs("button",{type:"button",onClick:()=>w(se=>({...se,algorithm:{...se.algorithm||{},priority_metric:"fewer_pages"}})),className:`p-3.5 text-left rounded-2xl border-2 transition-all flex flex-col justify-between ${((Se=m==null?void 0:m.algorithm)==null?void 0:Se.priority_metric)==="fewer_pages"?"border-indigo-600 bg-indigo-50/60 shadow-sm shadow-indigo-100 ring-1 ring-indigo-500/20":"border-slate-200 hover:border-slate-300 bg-white"}`,children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-1",children:[a.jsx("span",{className:"text-xs font-black text-slate-900 flex items-center space-x-1.5",children:a.jsx("span",{children:"⏱️ Fewer Pages"})}),((He=m==null?void 0:m.algorithm)==null?void 0:He.priority_metric)==="fewer_pages"&&a.jsx("span",{className:"text-[9px] font-black bg-indigo-600 text-white px-2 py-0.5 rounded-full",children:"ACTIVE"})]}),a.jsx("p",{className:"text-[11px] text-slate-600 leading-relaxed",children:"Shortest Job First (SJF). Prioritizes jobs with smallest page counts to minimize average student wait times."})]}),a.jsxs("div",{className:"mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-500 font-semibold",children:[a.jsx("span",{children:"Sort: Smallest Count First"}),a.jsx("span",{className:"text-emerald-600 font-bold",children:"Shortest Job First"})]})]})]})]}),a.jsxs("div",{className:"space-y-2.5 pt-3 border-t border-slate-100",children:[a.jsx("h4",{className:"text-xs font-extrabold uppercase tracking-wider text-slate-700",children:"Autonomous Pipeline Stages"}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[a.jsxs("label",{className:"flex items-start space-x-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer",children:[a.jsx("input",{type:"checkbox",checked:((Fe=m==null?void 0:m.algorithm)==null?void 0:Fe.auto_advance_intake)??!0,onChange:se=>w(le=>({...le,algorithm:{...le.algorithm||{},auto_advance_intake:se.target.checked}})),className:"mt-0.5 w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"}),a.jsxs("div",{children:[a.jsx("span",{className:"text-xs font-bold text-slate-800 block",children:"📥 Auto-Intake Validated Orders"}),a.jsx("span",{className:"text-[10px] text-slate-500",children:"Auto-moves confirmed orders to 'queued'."})]})]}),a.jsxs("label",{className:"flex items-start space-x-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer",children:[a.jsx("input",{type:"checkbox",checked:((Oe=m==null?void 0:m.algorithm)==null?void 0:Oe.auto_print)??!0,onChange:se=>w(le=>({...le,algorithm:{...le.algorithm||{},auto_print:se.target.checked}})),className:"mt-0.5 w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"}),a.jsxs("div",{children:[a.jsx("span",{className:"text-xs font-bold text-slate-800 block",children:"🖨️ Auto-Print #1 Priority Job"}),a.jsx("span",{className:"text-[10px] text-slate-500",children:"Dispatches top-ranked job when printer is free."})]})]}),a.jsxs("label",{className:"flex items-start space-x-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer",children:[a.jsx("input",{type:"checkbox",checked:((Q=m==null?void 0:m.algorithm)==null?void 0:Q.auto_ready)??!0,onChange:se=>w(le=>({...le,algorithm:{...le.algorithm||{},auto_ready:se.target.checked}})),className:"mt-0.5 w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"}),a.jsxs("div",{children:[a.jsx("span",{className:"text-xs font-bold text-slate-800 block",children:"📦 Auto-Ready & S3 Shred"}),a.jsx("span",{className:"text-[10px] text-slate-500",children:"Notifies student & permanently shreds S3 file."})]})]}),a.jsxs("label",{className:"flex items-start space-x-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer",children:[a.jsx("input",{type:"checkbox",checked:((re=m==null?void 0:m.algorithm)==null?void 0:re.auto_complete)??!1,onChange:se=>w(le=>({...le,algorithm:{...le.algorithm||{},auto_complete:se.target.checked}})),className:"mt-0.5 w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"}),a.jsxs("div",{children:[a.jsx("span",{className:"text-xs font-bold text-slate-800 block",children:"🏁 Auto-Complete Archive"}),a.jsx("span",{className:"text-[10px] text-slate-500",children:"Archives picked-up orders after 60s."})]})]})]})]}),a.jsxs("div",{className:"pt-3 border-t border-slate-100 flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-xs font-bold text-slate-700 block",children:"Simulated Print Execution Speed"}),a.jsx("span",{className:"text-[11px] text-slate-500",children:"Seconds a job prints before moving to Ready"})]}),a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("input",{type:"number",min:"2",max:"60",value:((_e=m==null?void 0:m.algorithm)==null?void 0:_e.print_speed_seconds)??15,onChange:se=>w(le=>({...le,algorithm:{...le.algorithm||{},print_speed_seconds:parseInt(se.target.value)||15}})),className:"w-16 px-2.5 py-1.5 border border-slate-300 rounded-xl text-xs font-bold text-center"}),a.jsx("span",{className:"text-xs font-semibold text-slate-500",children:"seconds"})]})]})]})}),a.jsxs("div",{className:"p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end space-x-3",children:[a.jsx("button",{onClick:e,className:"px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors",children:"Cancel"}),a.jsxs("button",{onClick:v,disabled:c,className:"flex items-center space-x-1.5 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 transition-all",children:[a.jsx(sS,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:c?"Saving AI Context...":"Save & Update AI Context"})]})]})]})}):null}function fT(){const t=()=>{if(typeof window<"u"){const r=window.location.pathname;if(r.includes("staff"))return"staff";if(r.includes("student"))return"student"}return"landing"},[e,n]=ue.useState(t),i=r=>{if(n(r),typeof window<"u"){const s=r==="landing"?"/":`/${r}`;window.history.pushState(null,"",s),window.scrollTo({top:0,behavior:"smooth"})}};return ue.useEffect(()=>{const r=()=>{const s=window.location.pathname;s.includes("staff")?n("staff"):s.includes("student")?n("student"):n("landing")};return window.addEventListener("popstate",r),()=>window.removeEventListener("popstate",r)},[]),a.jsxs("div",{className:"min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900",children:[a.jsx(cS,{activeTab:e,setActiveTab:i}),a.jsxs("main",{className:"flex-1",children:[e==="landing"&&a.jsx(q2,{onSelectPortal:i}),e==="student"&&a.jsx(cT,{}),e==="staff"&&a.jsx(uT,{})]}),a.jsx("footer",{className:"py-6 text-center text-xs bg-white border-t border-slate-200 text-slate-500",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2",children:[a.jsx("span",{children:"EasePrint © 2026 — Omnichannel Stationery & Print Station (Hyderabad, Telangana)"}),a.jsx("span",{className:"text-slate-400",children:"Powered by Amazon Bedrock, DynamoDB, ElastiCache, S3 & ARQ"})]})})]})}Wd.createRoot(document.getElementById("root")).render(a.jsx(_0.StrictMode,{children:a.jsx(fT,{})}));
