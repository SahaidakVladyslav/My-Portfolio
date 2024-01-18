(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))u(i);new MutationObserver(i=>{for(const p of i)if(p.type==="childList")for(const h of p.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function m(i){const p={};return i.integrity&&(p.integrity=i.integrity),i.referrerPolicy&&(p.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?p.credentials="include":i.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(i){if(i.ep)return;i.ep=!0;const p=m(i);fetch(i.href,p)}})();var S=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var P={exports:{}};(function(r,f){(function(m,u){r.exports=u(m)})(typeof S<"u"?S:window||S.window||S.global,function(m){var u={},i="iziToast";document.querySelector("body");var p=!!/Mobi/.test(navigator.userAgent),h=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),v=typeof InstallTrigger<"u",b="ontouchstart"in document.documentElement,T=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],z={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},C=568,x={};u.children={};var O={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var A=function(o,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(o,n.bubbles,n.cancelable,n.detail),e};A.prototype=window.Event.prototype,window.CustomEvent=A}var y=function(o,n,e){if(Object.prototype.toString.call(o)==="[object Object]")for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&n.call(e,o[t],t,o);else if(o)for(var a=0,d=o.length;a<d;a++)n.call(e,o[a],a,o)},L=function(o,n){var e={};return y(o,function(t,a){e[a]=o[a]}),y(n,function(t,a){e[a]=n[a]}),e},w=function(o){var n=document.createDocumentFragment(),e=document.createElement("div");for(e.innerHTML=o;e.firstChild;)n.appendChild(e.firstChild);return n},R=function(o){var n=btoa(encodeURIComponent(o));return n.replace(/=/g,"")},D=function(o){return o.substring(0,1)=="#"||o.substring(0,3)=="rgb"||o.substring(0,3)=="hsl"},j=function(o){try{return btoa(atob(o))==o}catch{return!1}},E=function(){return{move:function(o,n,e,t){var a,d=.3,s=180;t!==0&&(o.classList.add(i+"-dragged"),o.style.transform="translateX("+t+"px)",t>0?(a=(s-t)/s,a<d&&n.hide(L(e,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),o,"drag")):(a=(s+t)/s,a<d&&n.hide(L(e,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),o,"drag")),o.style.opacity=a,a<d&&((h||v)&&(o.style.left=t+"px"),o.parentNode.style.opacity=d,this.stopMoving(o,null)))},startMoving:function(o,n,e,t){t=t||window.event;var a=b?t.touches[0].clientX:t.clientX,d=o.style.transform.replace("px)","");d=d.replace("translateX(","");var s=a-d;e.transitionIn&&o.classList.remove(e.transitionIn),e.transitionInMobile&&o.classList.remove(e.transitionInMobile),o.style.transition="",b?document.ontouchmove=function(l){l.preventDefault(),l=l||window.event;var c=l.touches[0].clientX,g=c-s;E.move(o,n,e,g)}:document.onmousemove=function(l){l.preventDefault(),l=l||window.event;var c=l.clientX,g=c-s;E.move(o,n,e,g)}},stopMoving:function(o,n){b?document.ontouchmove=function(){}:document.onmousemove=function(){},o.style.opacity="",o.style.transform="",o.classList.contains(i+"-dragged")&&(o.classList.remove(i+"-dragged"),o.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){o.style.transition=""},400))}}}();return u.setSetting=function(o,n,e){u.children[o][n]=e},u.getSetting=function(o,n){return u.children[o][n]},u.destroy=function(){y(document.querySelectorAll("."+i+"-overlay"),function(o,n){o.remove()}),y(document.querySelectorAll("."+i+"-wrapper"),function(o,n){o.remove()}),y(document.querySelectorAll("."+i),function(o,n){o.remove()}),this.children={},document.removeEventListener(i+"-opened",{},!1),document.removeEventListener(i+"-opening",{},!1),document.removeEventListener(i+"-closing",{},!1),document.removeEventListener(i+"-closed",{},!1),document.removeEventListener("keyup",{},!1),x={}},u.settings=function(o){u.destroy(),x=o,O=L(O,o||{})},y(z,function(o,n){u[n]=function(e){var t=L(x,e||{});t=L(o,t||{}),this.show(t)}}),u.progress=function(o,n,e){var t=this,a=n.getAttribute("data-iziToast-ref"),d=L(this.children[a],o||{}),s=n.querySelector("."+i+"-progressbar div");return{start:function(){typeof d.time.REMAINING>"u"&&(n.classList.remove(i+"-reseted"),s!==null&&(s.style.transition="width "+d.timeout+"ms "+d.progressBarEasing,s.style.width="0%"),d.time.START=new Date().getTime(),d.time.END=d.time.START+d.timeout,d.time.TIMER=setTimeout(function(){clearTimeout(d.time.TIMER),n.classList.contains(i+"-closing")||(t.hide(d,n,"timeout"),typeof e=="function"&&e.apply(t))},d.timeout),t.setSetting(a,"time",d.time))},pause:function(){if(typeof d.time.START<"u"&&!n.classList.contains(i+"-paused")&&!n.classList.contains(i+"-reseted")){if(n.classList.add(i+"-paused"),d.time.REMAINING=d.time.END-new Date().getTime(),clearTimeout(d.time.TIMER),t.setSetting(a,"time",d.time),s!==null){var l=window.getComputedStyle(s),c=l.getPropertyValue("width");s.style.transition="none",s.style.width=c}typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}},resume:function(){typeof d.time.REMAINING<"u"?(n.classList.remove(i+"-paused"),s!==null&&(s.style.transition="width "+d.time.REMAINING+"ms "+d.progressBarEasing,s.style.width="0%"),d.time.END=new Date().getTime()+d.time.REMAINING,d.time.TIMER=setTimeout(function(){clearTimeout(d.time.TIMER),n.classList.contains(i+"-closing")||(t.hide(d,n,"timeout"),typeof e=="function"&&e.apply(t))},d.time.REMAINING),t.setSetting(a,"time",d.time)):this.start()},reset:function(){clearTimeout(d.time.TIMER),delete d.time.REMAINING,t.setSetting(a,"time",d.time),n.classList.add(i+"-reseted"),n.classList.remove(i+"-paused"),s!==null&&(s.style.transition="none",s.style.width="100%"),typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}}},u.hide=function(o,n,e){typeof n!="object"&&(n=document.querySelector(n));var t=this,a=L(this.children[n.getAttribute("data-iziToast-ref")],o||{});a.closedBy=e||null,delete a.time.REMAINING,n.classList.add(i+"-closing"),function(){var l=document.querySelector("."+i+"-overlay");if(l!==null){var c=l.getAttribute("data-iziToast-ref");c=c.split(",");var g=c.indexOf(String(a.ref));g!==-1&&c.splice(g,1),l.setAttribute("data-iziToast-ref",c.join()),c.length===0&&(l.classList.remove("fadeIn"),l.classList.add("fadeOut"),setTimeout(function(){l.remove()},700))}}(),a.transitionIn&&n.classList.remove(a.transitionIn),a.transitionInMobile&&n.classList.remove(a.transitionInMobile),p||window.innerWidth<=C?a.transitionOutMobile&&n.classList.add(a.transitionOutMobile):a.transitionOut&&n.classList.add(a.transitionOut);var d=n.parentNode.offsetHeight;n.parentNode.style.height=d+"px",n.style.pointerEvents="none",(!p||window.innerWidth>C)&&(n.parentNode.style.transitionDelay="0.2s");try{var s=new CustomEvent(i+"-closing",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(s)}catch(l){console.warn(l)}setTimeout(function(){n.parentNode.style.height="0px",n.parentNode.style.overflow="",setTimeout(function(){delete t.children[a.ref],n.parentNode.remove();try{var l=new CustomEvent(i+"-closed",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(l)}catch(c){console.warn(c)}typeof a.onClosed<"u"&&a.onClosed.apply(null,[a,n,e])},1e3)},200),typeof a.onClosing<"u"&&a.onClosing.apply(null,[a,n,e])},u.show=function(o){var n=this,e=L(x,o||{});if(e=L(O,e),e.time={},e.id===null&&(e.id=R(e.title+e.message+e.color)),e.displayMode===1||e.displayMode=="once")try{if(document.querySelectorAll("."+i+"#"+e.id).length>0)return!1}catch{console.warn("["+i+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}if(e.displayMode===2||e.displayMode=="replace")try{y(document.querySelectorAll("."+i+"#"+e.id),function(s,l){n.hide(e,s,"replaced")})}catch{console.warn("["+i+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}e.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),u.children[e.ref]=e;var t={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:e.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};t.toast.setAttribute("data-iziToast-ref",e.ref),t.toast.appendChild(t.toastBody),t.toastCapsule.appendChild(t.toast),function(){if(t.toast.classList.add(i),t.toast.classList.add(i+"-opening"),t.toastCapsule.classList.add(i+"-capsule"),t.toastBody.classList.add(i+"-body"),t.toastTexts.classList.add(i+"-texts"),p||window.innerWidth<=C?e.transitionInMobile&&t.toast.classList.add(e.transitionInMobile):e.transitionIn&&t.toast.classList.add(e.transitionIn),e.class){var s=e.class.split(" ");y(s,function(l,c){t.toast.classList.add(l)})}e.id&&(t.toast.id=e.id),e.rtl&&(t.toast.classList.add(i+"-rtl"),t.toast.setAttribute("dir","rtl")),e.layout>1&&t.toast.classList.add(i+"-layout"+e.layout),e.balloon&&t.toast.classList.add(i+"-balloon"),e.maxWidth&&(isNaN(e.maxWidth)?t.toast.style.maxWidth=e.maxWidth:t.toast.style.maxWidth=e.maxWidth+"px"),(e.theme!==""||e.theme!=="light")&&t.toast.classList.add(i+"-theme-"+e.theme),e.color&&(D(e.color)?t.toast.style.background=e.color:t.toast.classList.add(i+"-color-"+e.color)),e.backgroundColor&&(t.toast.style.background=e.backgroundColor,e.balloon&&(t.toast.style.borderColor=e.backgroundColor))}(),function(){e.image&&(t.cover.classList.add(i+"-cover"),t.cover.style.width=e.imageWidth+"px",j(e.image.replace(/ /g,""))?t.cover.style.backgroundImage="url(data:image/png;base64,"+e.image.replace(/ /g,"")+")":t.cover.style.backgroundImage="url("+e.image+")",e.rtl?t.toastBody.style.marginRight=e.imageWidth+10+"px":t.toastBody.style.marginLeft=e.imageWidth+10+"px",t.toast.appendChild(t.cover))}(),function(){e.close?(t.buttonClose=document.createElement("button"),t.buttonClose.type="button",t.buttonClose.classList.add(i+"-close"),t.buttonClose.addEventListener("click",function(s){s.target,n.hide(e,t.toast,"button")}),t.toast.appendChild(t.buttonClose)):e.rtl?t.toast.style.paddingLeft="18px":t.toast.style.paddingRight="18px"}(),function(){e.progressBar&&(t.progressBar=document.createElement("div"),t.progressBarDiv=document.createElement("div"),t.progressBar.classList.add(i+"-progressbar"),t.progressBarDiv.style.background=e.progressBarColor,t.progressBar.appendChild(t.progressBarDiv),t.toast.appendChild(t.progressBar)),e.timeout&&(e.pauseOnHover&&!e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(s){n.progress(e,t.toast).pause()}),t.toast.addEventListener("mouseleave",function(s){n.progress(e,t.toast).resume()})),e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(s){n.progress(e,t.toast).reset()}),t.toast.addEventListener("mouseleave",function(s){n.progress(e,t.toast).start()})))}(),function(){e.iconUrl?(t.icon.setAttribute("class",i+"-icon"),t.icon.setAttribute("src",e.iconUrl)):e.icon&&(t.icon.setAttribute("class",i+"-icon "+e.icon),e.iconText&&t.icon.appendChild(document.createTextNode(e.iconText)),e.iconColor&&(t.icon.style.color=e.iconColor)),(e.icon||e.iconUrl)&&(e.rtl?t.toastBody.style.paddingRight="33px":t.toastBody.style.paddingLeft="33px",t.toastBody.appendChild(t.icon))}(),function(){e.title.length>0&&(t.strong=document.createElement("strong"),t.strong.classList.add(i+"-title"),t.strong.appendChild(w(e.title)),t.toastTexts.appendChild(t.strong),e.titleColor&&(t.strong.style.color=e.titleColor),e.titleSize&&(isNaN(e.titleSize)?t.strong.style.fontSize=e.titleSize:t.strong.style.fontSize=e.titleSize+"px"),e.titleLineHeight&&(isNaN(e.titleSize)?t.strong.style.lineHeight=e.titleLineHeight:t.strong.style.lineHeight=e.titleLineHeight+"px")),e.message.length>0&&(t.p=document.createElement("p"),t.p.classList.add(i+"-message"),t.p.appendChild(w(e.message)),t.toastTexts.appendChild(t.p),e.messageColor&&(t.p.style.color=e.messageColor),e.messageSize&&(isNaN(e.titleSize)?t.p.style.fontSize=e.messageSize:t.p.style.fontSize=e.messageSize+"px"),e.messageLineHeight&&(isNaN(e.titleSize)?t.p.style.lineHeight=e.messageLineHeight:t.p.style.lineHeight=e.messageLineHeight+"px")),e.title.length>0&&e.message.length>0&&(e.rtl?t.strong.style.marginLeft="10px":e.layout!==2&&!e.rtl&&(t.strong.style.marginRight="10px"))}(),t.toastBody.appendChild(t.toastTexts);var a;(function(){e.inputs.length>0&&(t.inputs.classList.add(i+"-inputs"),y(e.inputs,function(s,l){t.inputs.appendChild(w(s[0])),a=t.inputs.childNodes,a[l].classList.add(i+"-inputs-child"),s[3]&&setTimeout(function(){a[l].focus()},300),a[l].addEventListener(s[1],function(c){var g=s[2];return g(n,t.toast,this,c)})}),t.toastBody.appendChild(t.inputs))})(),function(){e.buttons.length>0&&(t.buttons.classList.add(i+"-buttons"),y(e.buttons,function(s,l){t.buttons.appendChild(w(s[0]));var c=t.buttons.childNodes;c[l].classList.add(i+"-buttons-child"),s[2]&&setTimeout(function(){c[l].focus()},300),c[l].addEventListener("click",function(g){g.preventDefault();var U=s[1];return U(n,t.toast,this,g,a)})})),t.toastBody.appendChild(t.buttons)}(),e.message.length>0&&(e.inputs.length>0||e.buttons.length>0)&&(t.p.style.marginBottom="0"),(e.inputs.length>0||e.buttons.length>0)&&(e.rtl?t.toastTexts.style.marginLeft="10px":t.toastTexts.style.marginRight="10px",e.inputs.length>0&&e.buttons.length>0&&(e.rtl?t.inputs.style.marginLeft="8px":t.inputs.style.marginRight="8px")),function(){t.toastCapsule.style.visibility="hidden",setTimeout(function(){var s=t.toast.offsetHeight,l=t.toast.currentStyle||window.getComputedStyle(t.toast),c=l.marginTop;c=c.split("px"),c=parseInt(c[0]);var g=l.marginBottom;g=g.split("px"),g=parseInt(g[0]),t.toastCapsule.style.visibility="",t.toastCapsule.style.height=s+g+c+"px",setTimeout(function(){t.toastCapsule.style.height="auto",e.target&&(t.toastCapsule.style.overflow="visible")},500),e.timeout&&n.progress(e,t.toast).start()},100)}(),function(){var s=e.position;if(e.target)t.wrapper=document.querySelector(e.target),t.wrapper.classList.add(i+"-target"),e.targetFirst?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule);else{if(T.indexOf(e.position)==-1){console.warn("["+i+`] Incorrect position.
It can be › `+T);return}p||window.innerWidth<=C?e.position=="bottomLeft"||e.position=="bottomRight"||e.position=="bottomCenter"?s=i+"-wrapper-bottomCenter":e.position=="topLeft"||e.position=="topRight"||e.position=="topCenter"?s=i+"-wrapper-topCenter":s=i+"-wrapper-center":s=i+"-wrapper-"+s,t.wrapper=document.querySelector("."+i+"-wrapper."+s),t.wrapper||(t.wrapper=document.createElement("div"),t.wrapper.classList.add(i+"-wrapper"),t.wrapper.classList.add(s),document.body.appendChild(t.wrapper)),e.position=="topLeft"||e.position=="topCenter"||e.position=="topRight"?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule)}isNaN(e.zindex)?console.warn("["+i+"] Invalid zIndex."):t.wrapper.style.zIndex=e.zindex}(),function(){e.overlay&&(document.querySelector("."+i+"-overlay.fadeIn")!==null?(t.overlay=document.querySelector("."+i+"-overlay"),t.overlay.setAttribute("data-iziToast-ref",t.overlay.getAttribute("data-iziToast-ref")+","+e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1)):(t.overlay.classList.add(i+"-overlay"),t.overlay.classList.add("fadeIn"),t.overlay.style.background=e.overlayColor,t.overlay.setAttribute("data-iziToast-ref",e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1),document.querySelector("body").appendChild(t.overlay)),e.overlayClose?(t.overlay.removeEventListener("click",{}),t.overlay.addEventListener("click",function(s){n.hide(e,t.toast,"overlay")})):t.overlay.removeEventListener("click",{}))}(),function(){if(e.animateInside){t.toast.classList.add(i+"-animateInside");var s=[200,100,300];(e.transitionIn=="bounceInLeft"||e.transitionIn=="bounceInRight")&&(s=[400,200,400]),e.title.length>0&&setTimeout(function(){t.strong.classList.add("slideIn")},s[0]),e.message.length>0&&setTimeout(function(){t.p.classList.add("slideIn")},s[1]),(e.icon||e.iconUrl)&&setTimeout(function(){t.icon.classList.add("revealIn")},s[2]);var l=150;e.buttons.length>0&&t.buttons&&setTimeout(function(){y(t.buttons.childNodes,function(c,g){setTimeout(function(){c.classList.add("revealIn")},l),l=l+150})},e.inputs.length>0?150:0),e.inputs.length>0&&t.inputs&&(l=150,y(t.inputs.childNodes,function(c,g){setTimeout(function(){c.classList.add("revealIn")},l),l=l+150}))}}(),e.onOpening.apply(null,[e,t.toast]);try{var d=new CustomEvent(i+"-opening",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(d)}catch(s){console.warn(s)}setTimeout(function(){t.toast.classList.remove(i+"-opening"),t.toast.classList.add(i+"-opened");try{var s=new CustomEvent(i+"-opened",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(s)}catch(l){console.warn(l)}e.onOpened.apply(null,[e,t.toast])},1e3),e.drag&&(b?(t.toast.addEventListener("touchstart",function(s){E.startMoving(this,n,e,s)},!1),t.toast.addEventListener("touchend",function(s){E.stopMoving(this,s)},!1)):(t.toast.addEventListener("mousedown",function(s){s.preventDefault(),E.startMoving(this,n,e,s)},!1),t.toast.addEventListener("mouseup",function(s){s.preventDefault(),E.stopMoving(this,s)},!1))),e.closeOnEscape&&document.addEventListener("keyup",function(s){s=s||window.event,s.keyCode==27&&n.hide(e,t.toast,"esc")}),e.closeOnClick&&t.toast.addEventListener("click",function(s){n.hide(e,t.toast,"toast")}),n.toast=t.toast},u})})(P);var J=P.exports;const B=_(J);var F="Expected a function",X=0/0,K="[object Symbol]",V=/^\s+|\s+$/g,Q=/^[-+]0x[0-9a-f]+$/i,Y=/^0b[01]+$/i,Z=/^0o[0-7]+$/i,$=parseInt,ee=typeof S=="object"&&S&&S.Object===Object&&S,te=typeof self=="object"&&self&&self.Object===Object&&self,ie=ee||te||Function("return this")(),ne=Object.prototype,oe=ne.toString,se=Math.max,re=Math.min,q=function(){return ie.Date.now()};function ae(r,f,m){var u,i,p,h,v,b,T=0,z=!1,C=!1,x=!0;if(typeof r!="function")throw new TypeError(F);f=G(f)||0,H(m)&&(z=!!m.leading,C="maxWait"in m,p=C?se(G(m.maxWait)||0,f):p,x="trailing"in m?!!m.trailing:x);function O(o){var n=u,e=i;return u=i=void 0,T=o,h=r.apply(e,n),h}function A(o){return T=o,v=setTimeout(w,f),z?O(o):h}function y(o){var n=o-b,e=o-T,t=f-n;return C?re(t,p-e):t}function L(o){var n=o-b,e=o-T;return b===void 0||n>=f||n<0||C&&e>=p}function w(){var o=q();if(L(o))return R(o);v=setTimeout(w,y(o))}function R(o){return v=void 0,x&&u?O(o):(u=i=void 0,h)}function D(){v!==void 0&&clearTimeout(v),T=0,u=b=i=v=void 0}function j(){return v===void 0?h:R(q())}function E(){var o=q(),n=L(o);if(u=arguments,i=this,b=o,n){if(v===void 0)return A(b);if(C)return v=setTimeout(w,f),O(b)}return v===void 0&&(v=setTimeout(w,f)),h}return E.cancel=D,E.flush=j,E}function le(r,f,m){var u=!0,i=!0;if(typeof r!="function")throw new TypeError(F);return H(m)&&(u="leading"in m?!!m.leading:u,i="trailing"in m?!!m.trailing:i),ae(r,f,{leading:u,maxWait:f,trailing:i})}function H(r){var f=typeof r;return!!r&&(f=="object"||f=="function")}function de(r){return!!r&&typeof r=="object"}function ce(r){return typeof r=="symbol"||de(r)&&oe.call(r)==K}function G(r){if(typeof r=="number")return r;if(ce(r))return X;if(H(r)){var f=typeof r.valueOf=="function"?r.valueOf():r;r=H(f)?f+"":f}if(typeof r!="string")return r===0?r:+r;r=r.replace(V,"");var m=Y.test(r);return m||Z.test(r)?$(r.slice(2),m?2:8):Q.test(r)?X:+r}var ue=le;const fe=_(ue),M="feedback-form-state",W=document.querySelector("form"),k=document.querySelector("textarea"),I={name:Array.from(document.querySelectorAll(".backdrop__input"))[0],telephone:Array.from(document.querySelectorAll(".backdrop__input"))[1],email:Array.from(document.querySelectorAll(".backdrop__input"))[2]},pe=document.querySelector("#signature");let N={name:"",telephone:"",email:"",message:""};const me=()=>{N.name=I.name.value,N.telephone=I.telephone.value,N.email=I.email.value,N.message=k.value,localStorage.setItem(M,JSON.stringify(N))},ge=()=>{if(localStorage.getItem(M)){const r=JSON.parse(localStorage.getItem(M));I.name.value=r.name,I.telephone.value=r.telephone,I.email.value=r.email,k.value=r.message}};B.settings({timeout:1e4,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",onOpening:function(){console.log("callback abriu!")},onClosing:function(){console.log("callback fechou!")}});ge();localStorage.removeItem(M);W.addEventListener("input",fe(function(f){if(f.target===k||Object.values(I).includes(f.target))me();else return},500));W.addEventListener("submit",r=>{if(r.preventDefault(),!I.name.value||!I.telephone.value||!I.email.value||!k.value)return B.error({title:"Error",message:"Please fill in the blank input fields"});if(!pe.checked)return B.info({title:"Hello",message:"Please agree to the privacy policy!"});B.success({title:"Success",message:"Data sent successfully!"}),localStorage.removeItem(M),console.log(N),W.reset()});
