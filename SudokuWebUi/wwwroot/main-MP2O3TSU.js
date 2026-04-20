var tE=Object.defineProperty,nE=Object.defineProperties;var rE=Object.getOwnPropertyDescriptors;var wp=Object.getOwnPropertySymbols;var iE=Object.prototype.hasOwnProperty,oE=Object.prototype.propertyIsEnumerable;var Ip=(e,n,t)=>n in e?tE(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,v=(e,n)=>{for(var t in n||={})iE.call(n,t)&&Ip(e,t,n[t]);if(wp)for(var t of wp(n))oE.call(n,t)&&Ip(e,t,n[t]);return e},P=(e,n)=>nE(e,rE(n));var Ue=null,ys=!1,Ic=1,sE=null,we=Symbol("SIGNAL");function w(e){let n=Ue;return Ue=e,n}function Es(){return Ue}var zn={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Gn(e){if(ys)throw new Error("");if(Ue===null)return;Ue.consumerOnSignalRead(e);let n=Ue.producersTail;if(n!==void 0&&n.producer===e)return;let t,r=Ue.recomputing;if(r&&(t=n!==void 0?n.nextProducer:Ue.producers,t!==void 0&&t.producer===e)){Ue.producersTail=t,t.lastReadVersion=e.version;return}let i=e.consumersTail;if(i!==void 0&&i.consumer===Ue&&(!r||lE(i,Ue)))return;let o=Or(Ue),s={producer:e,consumer:Ue,nextProducer:t,prevConsumer:i,lastReadVersion:e.version,nextConsumer:void 0};Ue.producersTail=s,n!==void 0?n.nextProducer=s:Ue.producers=s,o&&Sp(e,s)}function xp(){Ic++}function Cs(e){if(!(Or(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===Ic)){if(!e.producerMustRecompute(e)&&!Nr(e)){Ds(e);return}e.producerRecomputeValue(e),Ds(e)}}function xc(e){if(e.consumers===void 0)return;let n=ys;ys=!0;try{for(let t=e.consumers;t!==void 0;t=t.nextConsumer){let r=t.consumer;r.dirty||aE(r)}}finally{ys=n}}function Mc(){return Ue?.consumerAllowSignalWrites!==!1}function aE(e){e.dirty=!0,xc(e),e.consumerMarkedDirty?.(e)}function Ds(e){e.dirty=!1,e.lastCleanEpoch=Ic}function _n(e){return e&&Mp(e),w(e)}function Mp(e){e.producersTail=void 0,e.recomputing=!0}function Wn(e,n){w(n),e&&Tp(e)}function Tp(e){e.recomputing=!1;let n=e.producersTail,t=n!==void 0?n.nextProducer:e.producers;if(t!==void 0){if(Or(e))do t=Tc(t);while(t!==void 0);n!==void 0?n.nextProducer=void 0:e.producers=void 0}}function Nr(e){for(let n=e.producers;n!==void 0;n=n.nextProducer){let t=n.producer,r=n.lastReadVersion;if(r!==t.version||(Cs(t),r!==t.version))return!0}return!1}function Dn(e){if(Or(e)){let n=e.producers;for(;n!==void 0;)n=Tc(n)}e.producers=void 0,e.producersTail=void 0,e.consumers=void 0,e.consumersTail=void 0}function Sp(e,n){let t=e.consumersTail,r=Or(e);if(t!==void 0?(n.nextConsumer=t.nextConsumer,t.nextConsumer=n):(n.nextConsumer=void 0,e.consumers=n),n.prevConsumer=t,e.consumersTail=n,!r)for(let i=e.producers;i!==void 0;i=i.nextProducer)Sp(i.producer,i)}function Tc(e){let n=e.producer,t=e.nextProducer,r=e.nextConsumer,i=e.prevConsumer;if(e.nextConsumer=void 0,e.prevConsumer=void 0,r!==void 0?r.prevConsumer=i:n.consumersTail=i,i!==void 0)i.nextConsumer=r;else if(n.consumers=r,!Or(n)){let o=n.producers;for(;o!==void 0;)o=Tc(o)}return t}function Or(e){return e.consumerIsAlwaysLive||e.consumers!==void 0}function ws(e){sE?.(e)}function lE(e,n){let t=n.producersTail;if(t!==void 0){let r=n.producers;do{if(r===e)return!0;if(r===t)break;r=r.nextProducer}while(r!==void 0)}return!1}function Is(e,n){return Object.is(e,n)}function Ui(e,n){let t=Object.create(cE);t.computation=e,n!==void 0&&(t.equal=n);let r=()=>{if(Cs(t),Gn(t),t.value===Bi)throw t.error;return t.value};return r[we]=t,ws(t),r}var bs=Symbol("UNSET"),_s=Symbol("COMPUTING"),Bi=Symbol("ERRORED"),cE=P(v({},zn),{value:bs,dirty:!0,error:null,equal:Is,kind:"computed",producerMustRecompute(e){return e.value===bs||e.value===_s},producerRecomputeValue(e){if(e.value===_s)throw new Error("");let n=e.value;e.value=_s;let t=_n(e),r,i=!1;try{r=e.computation(),w(null),i=n!==bs&&n!==Bi&&r!==Bi&&e.equal(n,r)}catch(o){r=Bi,e.error=o}finally{Wn(e,t)}if(i){e.value=n;return}e.value=r,e.version++}});function dE(){throw new Error}var Ap=dE;function Rp(e){Ap(e)}function Sc(e){Ap=e}var uE=null;function Ac(e,n){let t=Object.create(Hi);t.value=e,n!==void 0&&(t.equal=n);let r=()=>Np(t);return r[we]=t,ws(t),[r,s=>kr(t,s),s=>Rc(t,s)]}function Np(e){return Gn(e),e.value}function kr(e,n){Mc()||Rp(e),e.equal(e.value,n)||(e.value=n,fE(e))}function Rc(e,n){Mc()||Rp(e),kr(e,n(e.value))}var Hi=P(v({},zn),{equal:Is,value:void 0,kind:"signal"});function fE(e){e.version++,xp(),xc(e),uE?.(e)}var Nc=P(v({},zn),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Oc(e){if(e.dirty=!1,e.version>0&&!Nr(e))return;e.version++;let n=_n(e);try{e.cleanup(),e.fn()}finally{Wn(e,n)}}function N(e){return typeof e=="function"}function Fr(e){let t=e(r=>{Error.call(r),r.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var xs=Fr(e=>function(t){e(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((r,i)=>`${i+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function $i(e,n){if(e){let t=e.indexOf(n);0<=t&&e.splice(t,1)}}var ye=class e{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let o of t)o.remove(this);else t.remove(this);let{initialTeardown:r}=this;if(N(r))try{r()}catch(o){n=o instanceof xs?o.errors:[o]}let{_finalizers:i}=this;if(i){this._finalizers=null;for(let o of i)try{Op(o)}catch(s){n=n??[],s instanceof xs?n=[...n,...s.errors]:n.push(s)}}if(n)throw new xs(n)}}add(n){var t;if(n&&n!==this)if(this.closed)Op(n);else{if(n instanceof e){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(n)}}_hasParent(n){let{_parentage:t}=this;return t===n||Array.isArray(t)&&t.includes(n)}_addParent(n){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n}_removeParent(n){let{_parentage:t}=this;t===n?this._parentage=null:Array.isArray(t)&&$i(t,n)}remove(n){let{_finalizers:t}=this;t&&$i(t,n),n instanceof e&&n._removeParent(this)}};ye.EMPTY=(()=>{let e=new ye;return e.closed=!0,e})();var kc=ye.EMPTY;function Ms(e){return e instanceof ye||e&&"closed"in e&&N(e.remove)&&N(e.add)&&N(e.unsubscribe)}function Op(e){N(e)?e():e.unsubscribe()}var Ct={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Pr={setTimeout(e,n,...t){let{delegate:r}=Pr;return r?.setTimeout?r.setTimeout(e,n,...t):setTimeout(e,n,...t)},clearTimeout(e){let{delegate:n}=Pr;return(n?.clearTimeout||clearTimeout)(e)},delegate:void 0};function Ts(e){Pr.setTimeout(()=>{let{onUnhandledError:n}=Ct;if(n)n(e);else throw e})}function zi(){}var kp=Fc("C",void 0,void 0);function Fp(e){return Fc("E",void 0,e)}function Pp(e){return Fc("N",e,void 0)}function Fc(e,n,t){return{kind:e,value:n,error:t}}var qn=null;function Lr(e){if(Ct.useDeprecatedSynchronousErrorHandling){let n=!qn;if(n&&(qn={errorThrown:!1,error:null}),e(),n){let{errorThrown:t,error:r}=qn;if(qn=null,t)throw r}}else e()}function Lp(e){Ct.useDeprecatedSynchronousErrorHandling&&qn&&(qn.errorThrown=!0,qn.error=e)}var Zn=class extends ye{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Ms(n)&&n.add(this)):this.destination=mE}static create(n,t,r){return new en(n,t,r)}next(n){this.isStopped?Lc(Pp(n),this):this._next(n)}error(n){this.isStopped?Lc(Fp(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Lc(kp,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},hE=Function.prototype.bind;function Pc(e,n){return hE.call(e,n)}var Vc=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:t}=this;if(t.next)try{t.next(n)}catch(r){Ss(r)}}error(n){let{partialObserver:t}=this;if(t.error)try{t.error(n)}catch(r){Ss(r)}else Ss(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(t){Ss(t)}}},en=class extends Zn{constructor(n,t,r){super();let i;if(N(n)||!n)i={next:n??void 0,error:t??void 0,complete:r??void 0};else{let o;this&&Ct.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),i={next:n.next&&Pc(n.next,o),error:n.error&&Pc(n.error,o),complete:n.complete&&Pc(n.complete,o)}):i=n}this.destination=new Vc(i)}};function Ss(e){Ct.useDeprecatedSynchronousErrorHandling?Lp(e):Ts(e)}function pE(e){throw e}function Lc(e,n){let{onStoppedNotification:t}=Ct;t&&Pr.setTimeout(()=>t(e,n))}var mE={closed:!0,next:zi,error:pE,complete:zi};var Vr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function ot(e){return e}function jc(...e){return Bc(e)}function Bc(e){return e.length===0?ot:e.length===1?e[0]:function(t){return e.reduce((r,i)=>i(r),t)}}var V=(()=>{class e{constructor(t){t&&(this._subscribe=t)}lift(t){let r=new e;return r.source=this,r.operator=t,r}subscribe(t,r,i){let o=vE(t)?t:new en(t,r,i);return Lr(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(t){try{return this._subscribe(t)}catch(r){t.error(r)}}forEach(t,r){return r=Vp(r),new r((i,o)=>{let s=new en({next:a=>{try{t(a)}catch(l){o(l),s.unsubscribe()}},error:o,complete:i});this.subscribe(s)})}_subscribe(t){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(t)}[Vr](){return this}pipe(...t){return Bc(t)(this)}toPromise(t){return t=Vp(t),new t((r,i)=>{let o;this.subscribe(s=>o=s,s=>i(s),()=>r(o))})}}return e.create=n=>new e(n),e})();function Vp(e){var n;return(n=e??Ct.Promise)!==null&&n!==void 0?n:Promise}function gE(e){return e&&N(e.next)&&N(e.error)&&N(e.complete)}function vE(e){return e&&e instanceof Zn||gE(e)&&Ms(e)}function yE(e){return N(e?.lift)}function H(e){return n=>{if(yE(n))return n.lift(function(t){try{return e(t,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function G(e,n,t,r,i){return new Uc(e,n,t,r,i)}var Uc=class extends Zn{constructor(n,t,r,i,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=t?function(a){try{t(a)}catch(l){n.error(l)}}:super._next,this._error=i?function(a){try{i(a)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var jp=Fr(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var j=(()=>{class e extends V{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let r=new As(this,this);return r.operator=t,r}_throwIfClosed(){if(this.closed)throw new jp}next(t){Lr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(t)}})}error(t){Lr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:r}=this;for(;r.length;)r.shift().error(t)}})}complete(){Lr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:r,isStopped:i,observers:o}=this;return r||i?kc:(this.currentObservers=null,o.push(t),new ye(()=>{this.currentObservers=null,$i(o,t)}))}_checkFinalizedStatuses(t){let{hasError:r,thrownError:i,isStopped:o}=this;r?t.error(i):o&&t.complete()}asObservable(){let t=new V;return t.source=this,t}}return e.create=(n,t)=>new As(n,t),e})(),As=class extends j{constructor(n,t){super(),this.destination=n,this.source=t}next(n){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.next)===null||r===void 0||r.call(t,n)}error(n){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.error)===null||r===void 0||r.call(t,n)}complete(){var n,t;(t=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||t===void 0||t.call(n)}_subscribe(n){var t,r;return(r=(t=this.source)===null||t===void 0?void 0:t.subscribe(n))!==null&&r!==void 0?r:kc}};var Ie=class extends j{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let t=super._subscribe(n);return!t.closed&&n.next(this._value),t}getValue(){let{hasError:n,thrownError:t,_value:r}=this;if(n)throw t;return this._throwIfClosed(),r}next(n){super.next(this._value=n)}};var Hc={now(){return(Hc.delegate||Date).now()},delegate:void 0};var Rs=class extends j{constructor(n=1/0,t=1/0,r=Hc){super(),this._bufferSize=n,this._windowTime=t,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=t===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,t)}next(n){let{isStopped:t,_buffer:r,_infiniteTimeWindow:i,_timestampProvider:o,_windowTime:s}=this;t||(r.push(n),!i&&r.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let t=this._innerSubscribe(n),{_infiniteTimeWindow:r,_buffer:i}=this,o=i.slice();for(let s=0;s<o.length&&!n.closed;s+=r?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),t}_trimBuffer(){let{_bufferSize:n,_timestampProvider:t,_buffer:r,_infiniteTimeWindow:i}=this,o=(i?1:2)*n;if(n<1/0&&o<r.length&&r.splice(0,r.length-o),!i){let s=t.now(),a=0;for(let l=1;l<r.length&&r[l]<=s;l+=2)a=l;a&&r.splice(0,a+1)}}};var be=new V(e=>e.complete());function Bp(e){return e&&N(e.schedule)}function $c(e){return e[e.length-1]}function Ns(e){return N($c(e))?e.pop():void 0}function jt(e){return Bp($c(e))?e.pop():void 0}function Up(e,n){return typeof $c(e)=="number"?e.pop():n}function $p(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(d){try{c(r.next(d))}catch(u){s(u)}}function l(d){try{c(r.throw(d))}catch(u){s(u)}}function c(d){d.done?o(d.value):i(d.value).then(a,l)}c((r=r.apply(e,n||[])).next())})}function Hp(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Yn(e){return this instanceof Yn?(this.v=e,this):new Yn(e)}function zp(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(e,n||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(p){return function(m){return Promise.resolve(m).then(p,u)}}function a(p,m){r[p]&&(i[p]=function(D){return new Promise(function(_,E){o.push([p,D,_,E])>1||l(p,D)})},m&&(i[p]=m(i[p])))}function l(p,m){try{c(r[p](m))}catch(D){h(o[0][3],D)}}function c(p){p.value instanceof Yn?Promise.resolve(p.value.v).then(d,u):h(o[0][2],p)}function d(p){l("next",p)}function u(p){l("throw",p)}function h(p,m){p(m),o.shift(),o.length&&l(o[0][0],o[0][1])}}function Gp(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof Hp=="function"?Hp(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(o){t[o]=e[o]&&function(s){return new Promise(function(a,l){s=e[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}var Os=e=>e&&typeof e.length=="number"&&typeof e!="function";function ks(e){return N(e?.then)}function Fs(e){return N(e[Vr])}function Ps(e){return Symbol.asyncIterator&&N(e?.[Symbol.asyncIterator])}function Ls(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function bE(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Vs=bE();function js(e){return N(e?.[Vs])}function Bs(e){return zp(this,arguments,function*(){let t=e.getReader();try{for(;;){let{value:r,done:i}=yield Yn(t.read());if(i)return yield Yn(void 0);yield yield Yn(r)}}finally{t.releaseLock()}})}function Us(e){return N(e?.getReader)}function le(e){if(e instanceof V)return e;if(e!=null){if(Fs(e))return _E(e);if(Os(e))return DE(e);if(ks(e))return EE(e);if(Ps(e))return Wp(e);if(js(e))return CE(e);if(Us(e))return wE(e)}throw Ls(e)}function _E(e){return new V(n=>{let t=e[Vr]();if(N(t.subscribe))return t.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function DE(e){return new V(n=>{for(let t=0;t<e.length&&!n.closed;t++)n.next(e[t]);n.complete()})}function EE(e){return new V(n=>{e.then(t=>{n.closed||(n.next(t),n.complete())},t=>n.error(t)).then(null,Ts)})}function CE(e){return new V(n=>{for(let t of e)if(n.next(t),n.closed)return;n.complete()})}function Wp(e){return new V(n=>{IE(e,n).catch(t=>n.error(t))})}function wE(e){return Wp(Bs(e))}function IE(e,n){var t,r,i,o;return $p(this,void 0,void 0,function*(){try{for(t=Gp(e);r=yield t.next(),!r.done;){let s=r.value;if(n.next(s),n.closed)return}}catch(s){i={error:s}}finally{try{r&&!r.done&&(o=t.return)&&(yield o.call(t))}finally{if(i)throw i.error}}n.complete()})}function nt(e,n,t,r=0,i=!1){let o=n.schedule(function(){t(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(o),!i)return o}function Hs(e,n=0){return H((t,r)=>{t.subscribe(G(r,i=>nt(r,e,()=>r.next(i),n),()=>nt(r,e,()=>r.complete(),n),i=>nt(r,e,()=>r.error(i),n)))})}function $s(e,n=0){return H((t,r)=>{r.add(e.schedule(()=>t.subscribe(r),n))})}function qp(e,n){return le(e).pipe($s(n),Hs(n))}function Zp(e,n){return le(e).pipe($s(n),Hs(n))}function Yp(e,n){return new V(t=>{let r=0;return n.schedule(function(){r===e.length?t.complete():(t.next(e[r++]),t.closed||this.schedule())})})}function Qp(e,n){return new V(t=>{let r;return nt(t,n,()=>{r=e[Vs](),nt(t,n,()=>{let i,o;try{({value:i,done:o}=r.next())}catch(s){t.error(s);return}o?t.complete():t.next(i)},0,!0)}),()=>N(r?.return)&&r.return()})}function zs(e,n){if(!e)throw new Error("Iterable cannot be null");return new V(t=>{nt(t,n,()=>{let r=e[Symbol.asyncIterator]();nt(t,n,()=>{r.next().then(i=>{i.done?t.complete():t.next(i.value)})},0,!0)})})}function Xp(e,n){return zs(Bs(e),n)}function Kp(e,n){if(e!=null){if(Fs(e))return qp(e,n);if(Os(e))return Yp(e,n);if(ks(e))return Zp(e,n);if(Ps(e))return zs(e,n);if(js(e))return Qp(e,n);if(Us(e))return Xp(e,n)}throw Ls(e)}function de(e,n){return n?Kp(e,n):le(e)}function M(...e){let n=jt(e);return de(e,n)}function Gi(e,n){let t=N(e)?e:()=>e,r=i=>i.error(t());return new V(n?i=>n.schedule(r,0,i):r)}function Gs(e){return!!e&&(e instanceof V||N(e.lift)&&N(e.subscribe))}var Qn=Fr(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"});function B(e,n){return H((t,r)=>{let i=0;t.subscribe(G(r,o=>{r.next(e.call(n,o,i++))}))})}var{isArray:xE}=Array;function ME(e,n){return xE(n)?e(...n):e(n)}function Ws(e){return B(n=>ME(e,n))}var{isArray:TE}=Array,{getPrototypeOf:SE,prototype:AE,keys:RE}=Object;function qs(e){if(e.length===1){let n=e[0];if(TE(n))return{args:n,keys:null};if(NE(n)){let t=RE(n);return{args:t.map(r=>n[r]),keys:t}}}return{args:e,keys:null}}function NE(e){return e&&typeof e=="object"&&SE(e)===AE}function Zs(e,n){return e.reduce((t,r,i)=>(t[r]=n[i],t),{})}function zc(...e){let n=jt(e),t=Ns(e),{args:r,keys:i}=qs(e);if(r.length===0)return de([],n);let o=new V(OE(r,n,i?s=>Zs(i,s):ot));return t?o.pipe(Ws(t)):o}function OE(e,n,t=ot){return r=>{Jp(n,()=>{let{length:i}=e,o=new Array(i),s=i,a=i;for(let l=0;l<i;l++)Jp(n,()=>{let c=de(e[l],n),d=!1;c.subscribe(G(r,u=>{o[l]=u,d||(d=!0,a--),a||r.next(t(o.slice()))},()=>{--s||r.complete()}))},r)},r)}}function Jp(e,n,t){e?nt(t,e,n):n()}function em(e,n,t,r,i,o,s,a){let l=[],c=0,d=0,u=!1,h=()=>{u&&!l.length&&!c&&n.complete()},p=D=>c<r?m(D):l.push(D),m=D=>{o&&n.next(D),c++;let _=!1;le(t(D,d++)).subscribe(G(n,E=>{i?.(E),o?p(E):n.next(E)},()=>{_=!0},void 0,()=>{if(_)try{for(c--;l.length&&c<r;){let E=l.shift();s?nt(n,s,()=>m(E)):m(E)}h()}catch(E){n.error(E)}}))};return e.subscribe(G(n,p,()=>{u=!0,h()})),()=>{a?.()}}function We(e,n,t=1/0){return N(n)?We((r,i)=>B((o,s)=>n(r,o,i,s))(le(e(r,i))),t):(typeof n=="number"&&(t=n),H((r,i)=>em(r,i,e,t)))}function Ys(e=1/0){return We(ot,e)}function tm(){return Ys(1)}function jr(...e){return tm()(de(e,jt(e)))}function Wi(e){return new V(n=>{le(e()).subscribe(n)})}function qi(...e){let n=Ns(e),{args:t,keys:r}=qs(e),i=new V(o=>{let{length:s}=t;if(!s){o.complete();return}let a=new Array(s),l=s,c=s;for(let d=0;d<s;d++){let u=!1;le(t[d]).subscribe(G(o,h=>{u||(u=!0,c--),a[d]=h},()=>l--,void 0,()=>{(!l||!u)&&(c||o.next(r?Zs(r,a):a),o.complete())}))}});return n?i.pipe(Ws(n)):i}function Gc(...e){let n=jt(e),t=Up(e,1/0),r=e;return r.length?r.length===1?le(r[0]):Ys(t)(de(r,n)):be}function Pe(e,n){return H((t,r)=>{let i=0;t.subscribe(G(r,o=>e.call(n,o,i++)&&r.next(o)))})}function Xn(e){return H((n,t)=>{let r=null,i=!1,o;r=n.subscribe(G(t,void 0,void 0,s=>{o=le(e(s,Xn(e)(n))),r?(r.unsubscribe(),r=null,o.subscribe(t)):i=!0})),i&&(r.unsubscribe(),r=null,o.subscribe(t))})}function Br(e,n){return N(n)?We(e,n,1):We(e,1)}function nm(e){return H((n,t)=>{let r=!1;n.subscribe(G(t,i=>{r=!0,t.next(i)},()=>{r||t.next(e),t.complete()}))})}function wt(e){return e<=0?()=>be:H((n,t)=>{let r=0;n.subscribe(G(t,i=>{++r<=e&&(t.next(i),e<=r&&t.complete())}))})}function Wc(e,n=ot){return e=e??kE,H((t,r)=>{let i,o=!0;t.subscribe(G(r,s=>{let a=n(s);(o||!e(i,a))&&(o=!1,i=a,r.next(s))}))})}function kE(e,n){return e===n}function rm(e=FE){return H((n,t)=>{let r=!1;n.subscribe(G(t,i=>{r=!0,t.next(i)},()=>r?t.complete():t.error(e())))})}function FE(){return new Qn}function Bt(e){return H((n,t)=>{try{n.subscribe(t)}finally{t.add(e)}})}function tn(e,n){let t=arguments.length>=2;return r=>r.pipe(e?Pe((i,o)=>e(i,o,r)):ot,wt(1),t?nm(n):rm(()=>new Qn))}function Qs(e){return e<=0?()=>be:H((n,t)=>{let r=[];n.subscribe(G(t,i=>{r.push(i),e<r.length&&r.shift()},()=>{for(let i of r)t.next(i);t.complete()},void 0,()=>{r=null}))})}function qc(){return H((e,n)=>{let t,r=!1;e.subscribe(G(n,i=>{let o=t;t=i,r&&n.next([o,i]),r=!0}))})}function Zi(e={}){let{connector:n=()=>new j,resetOnError:t=!0,resetOnComplete:r=!0,resetOnRefCountZero:i=!0}=e;return o=>{let s,a,l,c=0,d=!1,u=!1,h=()=>{a?.unsubscribe(),a=void 0},p=()=>{h(),s=l=void 0,d=u=!1},m=()=>{let D=s;p(),D?.unsubscribe()};return H((D,_)=>{c++,!u&&!d&&h();let E=l=l??n();_.add(()=>{c--,c===0&&!u&&!d&&(a=Zc(m,i))}),E.subscribe(_),!s&&c>0&&(s=new en({next:Y=>E.next(Y),error:Y=>{u=!0,h(),a=Zc(p,t,Y),E.error(Y)},complete:()=>{d=!0,h(),a=Zc(p,r),E.complete()}}),le(D).subscribe(s))})(o)}}function Zc(e,n,...t){if(n===!0){e();return}if(n===!1)return;let r=new en({next:()=>{r.unsubscribe(),e()}});return le(n(...t)).subscribe(r)}function Yc(e,n,t){let r,i=!1;return e&&typeof e=="object"?{bufferSize:r=1/0,windowTime:n=1/0,refCount:i=!1,scheduler:t}=e:r=e??1/0,Zi({connector:()=>new Rs(r,n,t),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}function Qc(e){return Pe((n,t)=>e<=t)}function Yi(...e){let n=jt(e);return H((t,r)=>{(n?jr(e,t,n):jr(e,t)).subscribe(r)})}function st(e,n){return H((t,r)=>{let i=null,o=0,s=!1,a=()=>s&&!i&&r.complete();t.subscribe(G(r,l=>{i?.unsubscribe();let c=0,d=o++;le(e(l,d)).subscribe(i=G(r,u=>r.next(n?n(l,u,d,c++):u),()=>{i=null,a()}))},()=>{s=!0,a()}))})}function It(e){return H((n,t)=>{le(e).subscribe(G(t,()=>t.complete(),zi)),!t.closed&&n.subscribe(t)})}function He(e,n,t){let r=N(e)||n||t?{next:e,error:n,complete:t}:e;return r?H((i,o)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let a=!0;i.subscribe(G(o,l=>{var c;(c=r.next)===null||c===void 0||c.call(r,l),o.next(l)},()=>{var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),o.complete()},l=>{var c;a=!1,(c=r.error)===null||c===void 0||c.call(r,l),o.error(l)},()=>{var l,c;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):ot}var Xc;function Xs(){return Xc}function Ut(e){let n=Xc;return Xc=e,n}var im=Symbol("NotFound");function Ur(e){return e===im||e?.name==="\u0275NotFound"}function om(e){let n=w(null);try{return e()}finally{w(n)}}var ia="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",b=class extends Error{code;constructor(n,t){super(wn(n,t)),this.code=n}};function PE(e){return`NG0${Math.abs(e)}`}function wn(e,n){return`${PE(e)}${n?": "+n:""}`}var $r=globalThis;function K(e){for(let n in e)if(e[n]===K)return n;throw Error("")}function dm(e,n){for(let t in n)n.hasOwnProperty(t)&&!e.hasOwnProperty(t)&&(e[t]=n[t])}function no(e){if(typeof e=="string")return e;if(Array.isArray(e))return`[${e.map(no).join(", ")}]`;if(e==null)return""+e;let n=e.overriddenName||e.name;if(n)return`${n}`;let t=e.toString();if(t==null)return""+t;let r=t.indexOf(`
`);return r>=0?t.slice(0,r):t}function oa(e,n){return e?n?`${e} ${n}`:e:n||""}var LE=K({__forward_ref__:K});function xt(e){return e.__forward_ref__=xt,e}function Le(e){return dd(e)?e():e}function dd(e){return typeof e=="function"&&e.hasOwnProperty(LE)&&e.__forward_ref__===xt}function y(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function Z(e){return{providers:e.providers||[],imports:e.imports||[]}}function ro(e){return VE(e,sa)}function ud(e){return ro(e)!==null}function VE(e,n){return e.hasOwnProperty(n)&&e[n]||null}function jE(e){let n=e?.[sa]??null;return n||null}function Jc(e){return e&&e.hasOwnProperty(Js)?e[Js]:null}var sa=K({\u0275prov:K}),Js=K({\u0275inj:K}),g=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,t){this._desc=n,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=y({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function fd(e){return e&&!!e.\u0275providers}var hd=K({\u0275cmp:K}),pd=K({\u0275dir:K}),md=K({\u0275pipe:K}),gd=K({\u0275mod:K}),Xi=K({\u0275fac:K}),rr=K({__NG_ELEMENT_ID__:K}),sm=K({__NG_ENV_ID__:K});function vd(e){return aa(e,"@NgModule"),e[gd]||null}function rn(e){return aa(e,"@Component"),e[hd]||null}function yd(e){return aa(e,"@Directive"),e[pd]||null}function um(e){return aa(e,"@Pipe"),e[md]||null}function aa(e,n){if(e==null)throw new b(-919,!1)}function bd(e){return typeof e=="string"?e:e==null?"":String(e)}var fm=K({ngErrorCode:K}),BE=K({ngErrorMessage:K}),UE=K({ngTokenPath:K});function _d(e,n){return hm("",-200,n)}function la(e,n){throw new b(-201,!1)}function hm(e,n,t){let r=new b(n,e);return r[fm]=n,r[BE]=e,t&&(r[UE]=t),r}function HE(e){return e[fm]}var ed;function pm(){return ed}function at(e){let n=ed;return ed=e,n}function Dd(e,n,t){let r=ro(e);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(t&8)return null;if(n!==void 0)return n;la(e,"")}var $E={},Kn=$E,zE="__NG_DI_FLAG__",td=class{injector;constructor(n){this.injector=n}retrieve(n,t){let r=Jn(t)||0;try{return this.injector.get(n,r&8?null:Kn,r)}catch(i){if(Ur(i))return i;throw i}}};function GE(e,n=0){let t=Xs();if(t===void 0)throw new b(-203,!1);if(t===null)return Dd(e,void 0,n);{let r=WE(n),i=t.retrieve(e,r);if(Ur(i)){if(r.optional)return null;throw i}return i}}function C(e,n=0){return(pm()||GE)(Le(e),n)}function f(e,n){return C(e,Jn(n))}function Jn(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function WE(e){return{optional:!!(e&8),host:!!(e&1),self:!!(e&2),skipSelf:!!(e&4)}}function nd(e){let n=[];for(let t=0;t<e.length;t++){let r=Le(e[t]);if(Array.isArray(r)){if(r.length===0)throw new b(900,!1);let i,o=0;for(let s=0;s<r.length;s++){let a=r[s],l=qE(a);typeof l=="number"?l===-1?i=a.token:o|=l:i=a}n.push(C(i,o))}else n.push(C(r))}return n}function qE(e){return e[zE]}function er(e,n){let t=e.hasOwnProperty(Xi);return t?e[Xi]:null}function mm(e,n,t){if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++){let i=e[r],o=n[r];if(t&&(i=t(i),o=t(o)),o!==i)return!1}return!0}function gm(e){return e.flat(Number.POSITIVE_INFINITY)}function ca(e,n){e.forEach(t=>Array.isArray(t)?ca(t,n):n(t))}function Ed(e,n,t){n>=e.length?e.push(t):e.splice(n,0,t)}function io(e,n){return n>=e.length-1?e.pop():e.splice(n,1)[0]}function vm(e,n){let t=[];for(let r=0;r<e;r++)t.push(n);return t}function ym(e,n,t,r){let i=e.length;if(i==n)e.push(t,r);else if(i===1)e.push(r,e[0]),e[0]=t;else{for(i--,e.push(e[i-1],e[i]);i>n;){let o=i-2;e[i]=e[o],i--}e[n]=t,e[n+1]=r}}function da(e,n,t){let r=zr(e,n);return r>=0?e[r|1]=t:(r=~r,ym(e,r,n,t)),r}function ua(e,n){let t=zr(e,n);if(t>=0)return e[t|1]}function zr(e,n){return ZE(e,n,1)}function ZE(e,n,t){let r=0,i=e.length>>t;for(;i!==r;){let o=r+(i-r>>1),s=e[o<<t];if(n===s)return o<<t;s>n?i=o:r=o+1}return~(i<<t)}var In={},$e=[],xn=new g(""),Cd=new g("",-1),wd=new g(""),Ki=class{get(n,t=Kn){if(t===Kn){let i=hm("",-201);throw i.name="\u0275NotFound",i}return t}};function on(e){return{\u0275providers:e}}function bm(e){return on([{provide:xn,multi:!0,useValue:e}])}function _m(...e){return{\u0275providers:Id(!0,e),\u0275fromNgModule:!0}}function Id(e,...n){let t=[],r=new Set,i,o=s=>{t.push(s)};return ca(n,s=>{let a=s;ea(a,o,[],r)&&(i||=[],i.push(a))}),i!==void 0&&Dm(i,o),t}function Dm(e,n){for(let t=0;t<e.length;t++){let{ngModule:r,providers:i}=e[t];xd(i,o=>{n(o,r)})}}function ea(e,n,t,r){if(e=Le(e),!e)return!1;let i=null,o=Jc(e),s=!o&&rn(e);if(!o&&!s){let l=e.ngModule;if(o=Jc(l),o)i=l;else return!1}else{if(s&&!s.standalone)return!1;i=e}let a=r.has(i);if(s){if(a)return!1;if(r.add(i),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of l)ea(c,n,t,r)}}else if(o){if(o.imports!=null&&!a){r.add(i);let c;ca(o.imports,d=>{ea(d,n,t,r)&&(c||=[],c.push(d))}),c!==void 0&&Dm(c,n)}if(!a){let c=er(i)||(()=>new i);n({provide:i,useFactory:c,deps:$e},i),n({provide:wd,useValue:i,multi:!0},i),n({provide:xn,useValue:()=>C(i),multi:!0},i)}let l=o.providers;if(l!=null&&!a){let c=e;xd(l,d=>{n(d,c)})}}else return!1;return i!==e&&e.providers!==void 0}function xd(e,n){for(let t of e)fd(t)&&(t=t.\u0275providers),Array.isArray(t)?xd(t,n):n(t)}var YE=K({provide:String,useValue:K});function Em(e){return e!==null&&typeof e=="object"&&YE in e}function QE(e){return!!(e&&e.useExisting)}function XE(e){return!!(e&&e.useFactory)}function tr(e){return typeof e=="function"}function Cm(e){return!!e.useClass}var oo=new g(""),Ks={},am={},Kc;function Gr(){return Kc===void 0&&(Kc=new Ki),Kc}var ue=class{},nr=class extends ue{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,t,r,i){super(),this.parent=t,this.source=r,this.scopes=i,id(n,s=>this.processProvider(s)),this.records.set(Cd,Hr(void 0,this)),i.has("environment")&&this.records.set(ue,Hr(void 0,this));let o=this.records.get(oo);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(wd,$e,{self:!0}))}retrieve(n,t){let r=Jn(t)||0;try{return this.get(n,Kn,r)}catch(i){if(Ur(i))return i;throw i}}destroy(){Qi(this),this._destroyed=!0;let n=w(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of t)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),w(n)}}onDestroy(n){return Qi(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Qi(this);let t=Ut(this),r=at(void 0),i;try{return n()}finally{Ut(t),at(r)}}get(n,t=Kn,r){if(Qi(this),n.hasOwnProperty(sm))return n[sm](this);let i=Jn(r),o,s=Ut(this),a=at(void 0);try{if(!(i&4)){let c=this.records.get(n);if(c===void 0){let d=nC(n)&&ro(n);d&&this.injectableDefInScope(d)?c=Hr(rd(n),Ks):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,i)}let l=i&2?Gr():this.parent;return t=i&8&&t===Kn?null:t,l.get(n,t)}catch(l){let c=HE(l);throw c===-200||c===-201?new b(c,null):l}finally{at(a),Ut(s)}}resolveInjectorInitializers(){let n=w(null),t=Ut(this),r=at(void 0),i;try{let o=this.get(xn,$e,{self:!0});for(let s of o)s()}finally{Ut(t),at(r),w(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Le(n);let t=tr(n)?n:Le(n&&n.provide),r=JE(n);if(!tr(n)&&n.multi===!0){let i=this.records.get(t);i||(i=Hr(void 0,Ks,!0),i.factory=()=>nd(i.multi),this.records.set(t,i)),t=n,i.multi.push(n)}this.records.set(t,r)}hydrate(n,t,r){let i=w(null);try{if(t.value===am)throw _d("");return t.value===Ks&&(t.value=am,t.value=t.factory(void 0,r)),typeof t.value=="object"&&t.value&&tC(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{w(i)}}injectableDefInScope(n){if(!n.providedIn)return!1;let t=Le(n.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(n){let t=this._onDestroyHooks.indexOf(n);t!==-1&&this._onDestroyHooks.splice(t,1)}};function rd(e){let n=ro(e),t=n!==null?n.factory:er(e);if(t!==null)return t;if(e instanceof g)throw new b(-204,!1);if(e instanceof Function)return KE(e);throw new b(-204,!1)}function KE(e){if(e.length>0)throw new b(-204,!1);let t=jE(e);return t!==null?()=>t.factory(e):()=>new e}function JE(e){if(Em(e))return Hr(void 0,e.useValue);{let n=Md(e);return Hr(n,Ks)}}function Md(e,n,t){let r;if(tr(e)){let i=Le(e);return er(i)||rd(i)}else if(Em(e))r=()=>Le(e.useValue);else if(XE(e))r=()=>e.useFactory(...nd(e.deps||[]));else if(QE(e))r=(i,o)=>C(Le(e.useExisting),o!==void 0&&o&8?8:void 0);else{let i=Le(e&&(e.useClass||e.provide));if(eC(e))r=()=>new i(...nd(e.deps));else return er(i)||rd(i)}return r}function Qi(e){if(e.destroyed)throw new b(-205,!1)}function Hr(e,n,t=!1){return{factory:e,value:n,multi:t?[]:void 0}}function eC(e){return!!e.deps}function tC(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function nC(e){return typeof e=="function"||typeof e=="object"&&e.ngMetadataName==="InjectionToken"}function id(e,n){for(let t of e)Array.isArray(t)?id(t,n):t&&fd(t)?id(t.\u0275providers,n):n(t)}function Ne(e,n){let t;e instanceof nr?(Qi(e),t=e):t=new td(e);let r,i=Ut(t),o=at(void 0);try{return n()}finally{Ut(i),at(o)}}function wm(){return pm()!==void 0||Xs()!=null}var Mt=0,I=1,T=2,xe=3,pt=4,qe=5,ir=6,Wr=7,_e=8,sn=9,$t=10,ae=11,qr=12,Td=13,or=14,Ze=15,Mn=16,sr=17,zt=18,an=19,Sd=20,nn=21,fa=22,En=23,lt=24,ar=25,Tn=26,De=27,Im=1,Ad=6,Sn=7,so=8,lr=9,ge=10;function ln(e){return Array.isArray(e)&&typeof e[Im]=="object"}function Tt(e){return Array.isArray(e)&&e[Im]===!0}function Rd(e){return(e.flags&4)!==0}function cn(e){return e.componentOffset>-1}function ao(e){return(e.flags&1)===1}function Gt(e){return!!e.template}function Zr(e){return(e[T]&512)!==0}function cr(e){return(e[T]&256)===256}var xm="svg",Mm="math";function mt(e){for(;Array.isArray(e);)e=e[Mt];return e}function Nd(e,n){return mt(n[e])}function St(e,n){return mt(n[e.index])}function ha(e,n){return e.data[n]}function Tm(e,n){return e[n]}function gt(e,n){let t=n[e];return ln(t)?t:t[Mt]}function Sm(e){return(e[T]&4)===4}function pa(e){return(e[T]&128)===128}function Am(e){return Tt(e[xe])}function vt(e,n){return n==null?null:e[n]}function Od(e){e[sr]=0}function kd(e){e[T]&1024||(e[T]|=1024,pa(e)&&dr(e))}function Rm(e,n){for(;e>0;)n=n[or],e--;return n}function lo(e){return!!(e[T]&9216||e[lt]?.dirty)}function ma(e){e[$t].changeDetectionScheduler?.notify(8),e[T]&64&&(e[T]|=1024),lo(e)&&dr(e)}function dr(e){e[$t].changeDetectionScheduler?.notify(0);let n=Cn(e);for(;n!==null&&!(n[T]&8192||(n[T]|=8192,!pa(n)));)n=Cn(n)}function Fd(e,n){if(cr(e))throw new b(911,!1);e[nn]===null&&(e[nn]=[]),e[nn].push(n)}function Nm(e,n){if(e[nn]===null)return;let t=e[nn].indexOf(n);t!==-1&&e[nn].splice(t,1)}function Cn(e){let n=e[xe];return Tt(n)?n[xe]:n}function Pd(e){return e[Wr]??=[]}function Ld(e){return e.cleanup??=[]}function Om(e,n,t,r){let i=Pd(n);i.push(t),e.firstCreatePass&&Ld(e).push(r,i.length-1)}var L={lFrame:Gm(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var od=!1;function km(){return L.lFrame.elementDepthCount}function Fm(){L.lFrame.elementDepthCount++}function Vd(){L.lFrame.elementDepthCount--}function jd(){return L.bindingsEnabled}function Bd(){return L.skipHydrationRootTNode!==null}function Ud(e){return L.skipHydrationRootTNode===e}function Hd(){L.skipHydrationRootTNode=null}function O(){return L.lFrame.lView}function ve(){return L.lFrame.tView}function Yr(e){return L.lFrame.contextLView=e,e[_e]}function Qr(e){return L.lFrame.contextLView=null,e}function Ve(){let e=$d();for(;e!==null&&e.type===64;)e=e.parent;return e}function $d(){return L.lFrame.currentTNode}function Pm(){let e=L.lFrame,n=e.currentTNode;return e.isParent?n:n.parent}function Xr(e,n){let t=L.lFrame;t.currentTNode=e,t.isParent=n}function zd(){return L.lFrame.isParent}function Gd(){L.lFrame.isParent=!1}function Lm(){return L.lFrame.contextLView}function Wd(){return od}function Ji(e){let n=od;return od=e,n}function Vm(){let e=L.lFrame,n=e.bindingRootIndex;return n===-1&&(n=e.bindingRootIndex=e.tView.bindingStartIndex),n}function jm(e){return L.lFrame.bindingIndex=e}function An(){return L.lFrame.bindingIndex++}function qd(e){let n=L.lFrame,t=n.bindingIndex;return n.bindingIndex=n.bindingIndex+e,t}function Bm(){return L.lFrame.inI18n}function Um(e,n){let t=L.lFrame;t.bindingIndex=t.bindingRootIndex=e,ga(n)}function Hm(){return L.lFrame.currentDirectiveIndex}function ga(e){L.lFrame.currentDirectiveIndex=e}function $m(e){let n=L.lFrame.currentDirectiveIndex;return n===-1?null:e[n]}function va(){return L.lFrame.currentQueryIndex}function co(e){L.lFrame.currentQueryIndex=e}function rC(e){let n=e[I];return n.type===2?n.declTNode:n.type===1?e[qe]:null}function Zd(e,n,t){if(t&4){let i=n,o=e;for(;i=i.parent,i===null&&!(t&1);)if(i=rC(o),i===null||(o=o[or],i.type&10))break;if(i===null)return!1;n=i,e=o}let r=L.lFrame=zm();return r.currentTNode=n,r.lView=e,!0}function ya(e){let n=zm(),t=e[I];L.lFrame=n,n.currentTNode=t.firstChild,n.lView=e,n.tView=t,n.contextLView=e,n.bindingIndex=t.bindingStartIndex,n.inI18n=!1}function zm(){let e=L.lFrame,n=e===null?null:e.child;return n===null?Gm(e):n}function Gm(e){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=n),n}function Wm(){let e=L.lFrame;return L.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var Yd=Wm;function ba(){let e=Wm();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function qm(e){return(L.lFrame.contextLView=Rm(e,L.lFrame.contextLView))[_e]}function dn(){return L.lFrame.selectedIndex}function Rn(e){L.lFrame.selectedIndex=e}function uo(){let e=L.lFrame;return ha(e.tView,e.selectedIndex)}function Zm(){return L.lFrame.currentNamespace}var Ym=!0;function _a(){return Ym}function Da(e){Ym=e}function sd(e,n=null,t=null,r){let i=Qd(e,n,t,r);return i.resolveInjectorInitializers(),i}function Qd(e,n=null,t=null,r,i=new Set){let o=[t||$e,_m(e)],s;return new nr(o,n||Gr(),s||null,i)}var me=class e{static THROW_IF_NOT_FOUND=Kn;static NULL=new Ki;static create(n,t){if(Array.isArray(n))return sd({name:""},t,n,"");{let r=n.name??"";return sd({name:r},n.parent,n.providers,r)}}static \u0275prov=y({token:e,providedIn:"any",factory:()=>C(Cd)});static __NG_ELEMENT_ID__=-1},z=new g(""),yt=(()=>{class e{static __NG_ELEMENT_ID__=iC;static __NG_ENV_ID__=t=>t}return e})(),ta=class extends yt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return cr(this._lView)}onDestroy(n){let t=this._lView;return Fd(t,n),()=>Nm(t,n)}};function iC(){return new ta(O())}var Qm=!1,Xm=new g(""),un=(()=>{class e{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Ie(!1);debugTaskTracker=f(Xm,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new V(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),this.debugTaskTracker?.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.debugTaskTracker?.remove(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=y({token:e,providedIn:"root",factory:()=>new e})}return e})(),ad=class extends j{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,wm()&&(this.destroyRef=f(yt,{optional:!0})??void 0,this.pendingTasks=f(un,{optional:!0})??void 0)}emit(n){let t=w(null);try{super.next(n)}finally{w(t)}}subscribe(n,t,r){let i=n,o=t||(()=>null),s=r;if(n&&typeof n=="object"){let l=n;i=l.next?.bind(l),o=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),i&&(i=this.wrapInTimeout(i)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:i,error:o,complete:s});return n instanceof ye&&n.add(a),a}wrapInTimeout(n){return t=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{n(t)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},Q=ad;function na(...e){}function Xd(e){let n,t;function r(){e=na;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{e(),r()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{e(),r()})),()=>r()}function Km(e){return queueMicrotask(()=>e()),()=>{e=na}}var Kd="isAngularZone",eo=Kd+"_ID",oC=0,F=class e{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Q(!1);onMicrotaskEmpty=new Q(!1);onStable=new Q(!1);onError=new Q(!1);constructor(n){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:i=!1,scheduleInRootZone:o=Qm}=n;if(typeof Zone>"u")throw new b(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!i&&r,s.shouldCoalesceRunChangeDetection=i,s.callbackScheduled=!1,s.scheduleInRootZone=o,lC(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Kd)===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new b(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new b(909,!1)}run(n,t,r){return this._inner.run(n,t,r)}runTask(n,t,r,i){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+i,n,sC,na,na);try{return o.runTask(s,t,r)}finally{o.cancelTask(s)}}runGuarded(n,t,r){return this._inner.runGuarded(n,t,r)}runOutsideAngular(n){return this._outer.run(n)}},sC={};function Jd(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function aC(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function n(){Xd(()=>{e.callbackScheduled=!1,ld(e),e.isCheckStableRunning=!0,Jd(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{n()}):e._outer.run(()=>{n()}),ld(e)}function lC(e){let n=()=>{aC(e)},t=oC++;e._inner=e._inner.fork({name:"angular",properties:{[Kd]:!0,[eo]:t,[eo+t]:!0},onInvokeTask:(r,i,o,s,a,l)=>{if(cC(l))return r.invokeTask(o,s,a,l);try{return lm(e),r.invokeTask(o,s,a,l)}finally{(e.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&n(),cm(e)}},onInvoke:(r,i,o,s,a,l,c)=>{try{return lm(e),r.invoke(o,s,a,l,c)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!dC(l)&&n(),cm(e)}},onHasTask:(r,i,o,s)=>{r.hasTask(o,s),i===o&&(s.change=="microTask"?(e._hasPendingMicrotasks=s.microTask,ld(e),Jd(e)):s.change=="macroTask"&&(e.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,i,o,s)=>(r.handleError(o,s),e.runOutsideAngular(()=>e.onError.emit(s)),!1)})}function ld(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function lm(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function cm(e){e._nesting--,Jd(e)}var to=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Q;onMicrotaskEmpty=new Q;onStable=new Q;onError=new Q;run(n,t,r){return n.apply(t,r)}runGuarded(n,t,r){return n.apply(t,r)}runOutsideAngular(n){return n()}runTask(n,t,r,i){return n.apply(t,r)}};function cC(e){return Jm(e,"__ignore_ng_zone__")}function dC(e){return Jm(e,"__scheduler_tick__")}function Jm(e,n){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[n]===!0}var rt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},bt=new g("",{factory:()=>{let e=f(F),n=f(ue),t;return r=>{e.runOutsideAngular(()=>{n.destroyed&&!t?setTimeout(()=>{throw r}):(t??=n.get(rt),t.handleError(r))})}}}),eg={provide:xn,useValue:()=>{let e=f(rt,{optional:!0})},multi:!0},uC=new g("",{factory:()=>{let e=f(z).defaultView;if(!e)return;let n=f(bt),t=o=>{n(o.reason),o.preventDefault()},r=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},i=()=>{e.addEventListener("unhandledrejection",t),e.addEventListener("error",r)};typeof Zone<"u"?Zone.root.run(i):i(),f(yt).onDestroy(()=>{e.removeEventListener("error",r),e.removeEventListener("unhandledrejection",t)})}});function eu(){return on([bm(()=>{f(uC)})])}function Me(e,n){let[t,r,i]=Ac(e,n?.equal),o=t,s=o[we];return o.set=r,o.update=i,o.asReadonly=tg.bind(o),o}function tg(){let e=this[we];if(e.readonlyFn===void 0){let n=()=>this();n[we]=e,e.readonlyFn=n}return e.readonlyFn}var fo=(()=>{class e{view;node;constructor(t,r){this.view=t,this.node=r}static __NG_ELEMENT_ID__=fC}return e})();function fC(){return new fo(O(),Ve())}var Ht=class{},ho=new g("",{factory:()=>!0});var tu=new g(""),Ea=(()=>{class e{internalPendingTasks=f(un);scheduler=f(Ht);errorHandler=f(bt);add(){let t=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(t)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(t))}}run(t){let r=this.add();t().catch(this.errorHandler).finally(r)}static \u0275prov=y({token:e,providedIn:"root",factory:()=>new e})}return e})(),Ca=(()=>{class e{static \u0275prov=y({token:e,providedIn:"root",factory:()=>new cd})}return e})(),cd=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let t=n.zone,r=this.queues.get(t);r.has(n)&&(r.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let t=n.zone;this.queues.has(t)||this.queues.set(t,new Set);let r=this.queues.get(t);r.has(n)||r.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[t,r]of this.queues)t===null?n||=this.flushQueue(r):n||=t.run(()=>this.flushQueue(r));n||(this.dirtyEffectCount=0)}}flushQueue(n){let t=!1;for(let r of n)r.dirty&&(this.dirtyEffectCount--,t=!0,r.run());return t}},ra=class{[we];constructor(n){this[we]=n}destroy(){this[we].destroy()}};function po(e,n){let t=n?.injector??f(me),r=n?.manualCleanup!==!0?t.get(yt):null,i,o=t.get(fo,null,{optional:!0}),s=t.get(Ht);return o!==null?(i=mC(o.view,s,e),r instanceof ta&&r._lView===o.view&&(r=null)):i=gC(e,t.get(Ca),s),i.injector=t,r!==null&&(i.onDestroyFns=[r.onDestroy(()=>i.destroy())]),new ra(i)}var ng=P(v({},Nc),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let e=Ji(!1);try{Oc(this)}finally{Ji(e)}},cleanup(){if(!this.cleanupFns?.length)return;let e=w(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],w(e)}}}),hC=P(v({},ng),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Dn(this),this.onDestroyFns!==null)for(let e of this.onDestroyFns)e();this.cleanup(),this.scheduler.remove(this)}}),pC=P(v({},ng),{consumerMarkedDirty(){this.view[T]|=8192,dr(this.view),this.notifier.notify(13)},destroy(){if(Dn(this),this.onDestroyFns!==null)for(let e of this.onDestroyFns)e();this.cleanup(),this.view[En]?.delete(this)}});function mC(e,n,t){let r=Object.create(pC);return r.view=e,r.zone=typeof Zone<"u"?Zone.current:null,r.notifier=n,r.fn=rg(r,t),e[En]??=new Set,e[En].add(r),r.consumerMarkedDirty(r),r}function gC(e,n,t){let r=Object.create(hC);return r.fn=rg(r,e),r.scheduler=n,r.notifier=t,r.zone=typeof Zone<"u"?Zone.current:null,r.scheduler.add(r),r.notifier.notify(12),r}function rg(e,n){return()=>{n(t=>(e.cleanupFns??=[]).push(t))}}function wo(e){return{toString:e}.toString()}function IC(e){return typeof e=="function"}function Pg(e,n,t,r){n!==null?n.applyValueToInputSignal(n,r):e[t]=r}var Ra=class{previousValue;currentValue;firstChange;constructor(n,t,r){this.previousValue=n,this.currentValue=t,this.firstChange=r}isFirstChange(){return this.firstChange}},Zt=(()=>{let e=()=>Lg;return e.ngInherit=!0,e})();function Lg(e){return e.type.prototype.ngOnChanges&&(e.setInput=MC),xC}function xC(){let e=jg(this),n=e?.current;if(n){let t=e.previous;if(t===In)e.previous=n;else for(let r in n)t[r]=n[r];e.current=null,this.ngOnChanges(n)}}function MC(e,n,t,r,i){let o=this.declaredInputs[r],s=jg(e)||TC(e,{previous:In,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[o];a[o]=new Ra(c&&c.currentValue,t,l===In),Pg(e,n,i,t)}var Vg="__ngSimpleChanges__";function jg(e){return e[Vg]||null}function TC(e,n){return e[Vg]=n}var ig=[];var J=function(e,n=null,t){for(let r=0;r<ig.length;r++){let i=ig[r];i(e,n,t)}},W=(function(e){return e[e.TemplateCreateStart=0]="TemplateCreateStart",e[e.TemplateCreateEnd=1]="TemplateCreateEnd",e[e.TemplateUpdateStart=2]="TemplateUpdateStart",e[e.TemplateUpdateEnd=3]="TemplateUpdateEnd",e[e.LifecycleHookStart=4]="LifecycleHookStart",e[e.LifecycleHookEnd=5]="LifecycleHookEnd",e[e.OutputStart=6]="OutputStart",e[e.OutputEnd=7]="OutputEnd",e[e.BootstrapApplicationStart=8]="BootstrapApplicationStart",e[e.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",e[e.BootstrapComponentStart=10]="BootstrapComponentStart",e[e.BootstrapComponentEnd=11]="BootstrapComponentEnd",e[e.ChangeDetectionStart=12]="ChangeDetectionStart",e[e.ChangeDetectionEnd=13]="ChangeDetectionEnd",e[e.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",e[e.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",e[e.AfterRenderHooksStart=16]="AfterRenderHooksStart",e[e.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",e[e.ComponentStart=18]="ComponentStart",e[e.ComponentEnd=19]="ComponentEnd",e[e.DeferBlockStateStart=20]="DeferBlockStateStart",e[e.DeferBlockStateEnd=21]="DeferBlockStateEnd",e[e.DynamicComponentStart=22]="DynamicComponentStart",e[e.DynamicComponentEnd=23]="DynamicComponentEnd",e[e.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",e[e.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",e})(W||{});function SC(e,n,t){let{ngOnChanges:r,ngOnInit:i,ngDoCheck:o}=n.type.prototype;if(r){let s=Lg(n);(t.preOrderHooks??=[]).push(e,s),(t.preOrderCheckHooks??=[]).push(e,s)}i&&(t.preOrderHooks??=[]).push(0-e,i),o&&((t.preOrderHooks??=[]).push(e,o),(t.preOrderCheckHooks??=[]).push(e,o))}function Bg(e,n){for(let t=n.directiveStart,r=n.directiveEnd;t<r;t++){let o=e.data[t].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;s&&(e.contentHooks??=[]).push(-t,s),a&&((e.contentHooks??=[]).push(t,a),(e.contentCheckHooks??=[]).push(t,a)),l&&(e.viewHooks??=[]).push(-t,l),c&&((e.viewHooks??=[]).push(t,c),(e.viewCheckHooks??=[]).push(t,c)),d!=null&&(e.destroyHooks??=[]).push(t,d)}}function Ma(e,n,t){Ug(e,n,3,t)}function Ta(e,n,t,r){(e[T]&3)===t&&Ug(e,n,t,r)}function nu(e,n){let t=e[T];(t&3)===n&&(t&=16383,t+=1,e[T]=t)}function Ug(e,n,t,r){let i=r!==void 0?e[sr]&65535:0,o=r??-1,s=n.length-1,a=0;for(let l=i;l<s;l++)if(typeof n[l+1]=="number"){if(a=n[l],r!=null&&a>=r)break}else n[l]<0&&(e[sr]+=65536),(a<o||o==-1)&&(AC(e,t,n,l),e[sr]=(e[sr]&4294901760)+l+2),l++}function og(e,n){J(W.LifecycleHookStart,e,n);let t=w(null);try{n.call(e)}finally{w(t),J(W.LifecycleHookEnd,e,n)}}function AC(e,n,t,r){let i=t[r]<0,o=t[r+1],s=i?-t[r]:t[r],a=e[s];i?e[T]>>14<e[sr]>>16&&(e[T]&3)===n&&(e[T]+=16384,og(a,o)):og(a,o)}var Jr=-1,fr=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,t,r,i){this.factory=n,this.name=i,this.canSeeViewProviders=t,this.injectImpl=r}};function RC(e){return(e.flags&8)!==0}function NC(e){return(e.flags&16)!==0}function OC(e,n,t){let r=0;for(;r<t.length;){let i=t[r];if(typeof i=="number"){if(i!==0)break;r++;let o=t[r++],s=t[r++],a=t[r++];e.setAttribute(n,s,a,o)}else{let o=i,s=t[++r];kC(o)?e.setProperty(n,o,s):e.setAttribute(n,o,s),r++}}return r}function Hg(e){return e===3||e===4||e===6}function kC(e){return e.charCodeAt(0)===64}function ei(e,n){if(!(n===null||n.length===0))if(e===null||e.length===0)e=n.slice();else{let t=-1;for(let r=0;r<n.length;r++){let i=n[r];typeof i=="number"?t=i:t===0||(t===-1||t===2?sg(e,t,i,null,n[++r]):sg(e,t,i,null,null))}}return e}function sg(e,n,t,r,i){let o=0,s=e.length;if(n===-1)s=-1;else for(;o<e.length;){let a=e[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<e.length;){let a=e[o];if(typeof a=="number")break;if(a===t){i!==null&&(e[o+1]=i);return}o++,i!==null&&o++}s!==-1&&(e.splice(s,0,n),o=s+1),e.splice(o++,0,t),i!==null&&e.splice(o++,0,i)}function $g(e){return e!==Jr}function Na(e){return e&32767}function FC(e){return e>>16}function Oa(e,n){let t=FC(e),r=n;for(;t>0;)r=r[or],t--;return r}var hu=!0;function ag(e){let n=hu;return hu=e,n}var PC=256,zg=PC-1,Gg=5,LC=0,Wt={};function VC(e,n,t){let r;typeof t=="string"?r=t.charCodeAt(0)||0:t.hasOwnProperty(rr)&&(r=t[rr]),r==null&&(r=t[rr]=LC++);let i=r&zg,o=1<<i;n.data[e+(i>>Gg)]|=o}function ka(e,n){let t=Wg(e,n);if(t!==-1)return t;let r=n[I];r.firstCreatePass&&(e.injectorIndex=n.length,ru(r.data,e),ru(n,null),ru(r.blueprint,null));let i=Yu(e,n),o=e.injectorIndex;if($g(i)){let s=Na(i),a=Oa(i,n),l=a[I].data;for(let c=0;c<8;c++)n[o+c]=a[s+c]|l[s+c]}return n[o+8]=i,o}function ru(e,n){e.push(0,0,0,0,0,0,0,0,n)}function Wg(e,n){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||n[e.injectorIndex+8]===null?-1:e.injectorIndex}function Yu(e,n){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let t=0,r=null,i=n;for(;i!==null;){if(r=Xg(i),r===null)return Jr;if(t++,i=i[or],r.injectorIndex!==-1)return r.injectorIndex|t<<16}return Jr}function pu(e,n,t){VC(e,n,t)}function jC(e,n){if(n==="class")return e.classes;if(n==="style")return e.styles;let t=e.attrs;if(t){let r=t.length,i=0;for(;i<r;){let o=t[i];if(Hg(o))break;if(o===0)i=i+2;else if(typeof o=="number")for(i++;i<r&&typeof t[i]=="string";)i++;else{if(o===n)return t[i+1];i=i+2}}}return null}function qg(e,n,t){if(t&8||e!==void 0)return e;la(n,"NodeInjector")}function Zg(e,n,t,r){if(t&8&&r===void 0&&(r=null),(t&3)===0){let i=e[sn],o=at(void 0);try{return i?i.get(n,r,t&8):Dd(n,r,t&8)}finally{at(o)}}return qg(r,n,t)}function Yg(e,n,t,r=0,i){if(e!==null){if(n[T]&2048&&!(r&2)){let s=$C(e,n,t,r,Wt);if(s!==Wt)return s}let o=Qg(e,n,t,r,Wt);if(o!==Wt)return o}return Zg(n,t,r,i)}function Qg(e,n,t,r,i){let o=UC(t);if(typeof o=="function"){if(!Zd(n,e,r))return r&1?qg(i,t,r):Zg(n,t,r,i);try{let s;if(s=o(r),s==null&&!(r&8))la(t);else return s}finally{Yd()}}else if(typeof o=="number"){let s=null,a=Wg(e,n),l=Jr,c=r&1?n[Ze][qe]:null;for((a===-1||r&4)&&(l=a===-1?Yu(e,n):n[a+8],l===Jr||!cg(r,!1)?a=-1:(s=n[I],a=Na(l),n=Oa(l,n)));a!==-1;){let d=n[I];if(lg(o,a,d.data)){let u=BC(a,n,t,s,r,c);if(u!==Wt)return u}l=n[a+8],l!==Jr&&cg(r,n[I].data[a+8]===c)&&lg(o,a,n)?(s=d,a=Na(l),n=Oa(l,n)):a=-1}}return i}function BC(e,n,t,r,i,o){let s=n[I],a=s.data[e+8],l=r==null?cn(a)&&hu:r!=s&&(a.type&3)!==0,c=i&1&&o===a,d=Sa(a,s,t,l,c);return d!==null?yo(n,s,d,a,i):Wt}function Sa(e,n,t,r,i){let o=e.providerIndexes,s=n.data,a=o&1048575,l=e.directiveStart,c=e.directiveEnd,d=o>>20,u=r?a:a+d,h=i?a+d:c;for(let p=u;p<h;p++){let m=s[p];if(p<l&&t===m||p>=l&&m.type===t)return p}if(i){let p=s[l];if(p&&Gt(p)&&p.type===t)return l}return null}function yo(e,n,t,r,i){let o=e[t],s=n.data;if(o instanceof fr){let a=o;if(a.resolving)throw _d("");let l=ag(a.canSeeViewProviders);a.resolving=!0;let c=s[t].type||s[t],d,u=a.injectImpl?at(a.injectImpl):null,h=Zd(e,r,0);try{o=e[t]=a.factory(void 0,i,s,e,r),n.firstCreatePass&&t>=r.directiveStart&&SC(t,s[t],n)}finally{u!==null&&at(u),ag(l),a.resolving=!1,Yd()}}return o}function UC(e){if(typeof e=="string")return e.charCodeAt(0)||0;let n=e.hasOwnProperty(rr)?e[rr]:void 0;return typeof n=="number"?n>=0?n&zg:HC:n}function lg(e,n,t){let r=1<<e;return!!(t[n+(e>>Gg)]&r)}function cg(e,n){return!(e&2)&&!(e&1&&n)}var ur=class{_tNode;_lView;constructor(n,t){this._tNode=n,this._lView=t}get(n,t,r){return Yg(this._tNode,this._lView,n,Jn(r),t)}};function HC(){return new ur(Ve(),O())}function On(e){return wo(()=>{let n=e.prototype.constructor,t=n[Xi]||mu(n),r=Object.prototype,i=Object.getPrototypeOf(e.prototype).constructor;for(;i&&i!==r;){let o=i[Xi]||mu(i);if(o&&o!==t)return o;i=Object.getPrototypeOf(i)}return o=>new o})}function mu(e){return dd(e)?()=>{let n=mu(Le(e));return n&&n()}:er(e)}function $C(e,n,t,r,i){let o=e,s=n;for(;o!==null&&s!==null&&s[T]&2048&&!Zr(s);){let a=Qg(o,s,t,r|2,Wt);if(a!==Wt)return a;let l=o.parent;if(!l){let c=s[Sd];if(c){let d=c.get(t,Wt,r&-5);if(d!==Wt)return d}l=Xg(s),s=s[or]}o=l}return i}function Xg(e){let n=e[I],t=n.type;return t===2?n.declTNode:t===1?e[qe]:null}function Qu(e){return jC(Ve(),e)}function zC(){return oi(Ve(),O())}function oi(e,n){return new q(St(e,n))}var q=(()=>{class e{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=zC}return e})();function Kg(e){return e instanceof q?e.nativeElement:e}function GC(){return this._results[Symbol.iterator]()}var Fa=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new j}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,t){return this._results.reduce(n,t)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,t){this.dirty=!1;let r=gm(n);(this._changesDetected=!mm(this._results,r,t))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=GC};function Jg(e){return(e.flags&128)===128}var Xu=(function(e){return e[e.OnPush=0]="OnPush",e[e.Eager=1]="Eager",e[e.Default=1]="Default",e})(Xu||{}),ev=new Map,WC=0;function qC(){return WC++}function ZC(e){ev.set(e[an],e)}function gu(e){ev.delete(e[an])}var dg="__ngContext__";function ti(e,n){ln(n)?(e[dg]=n[an],ZC(n)):e[dg]=n}function tv(e){return rv(e[qr])}function nv(e){return rv(e[pt])}function rv(e){for(;e!==null&&!Tt(e);)e=e[pt];return e}var YC;function Ku(e){YC=e}var si=new g("",{factory:()=>QC}),QC="ng";var Ya=new g(""),vr=new g("",{providedIn:"platform",factory:()=>"unknown"}),Ju=new g(""),yr=new g("",{factory:()=>f(z).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var iv="r";var ov="di";var sv=!1,av=new g("",{factory:()=>sv});var XC=(e,n,t,r)=>{};function KC(e,n,t,r){XC(e,n,t,r)}function Qa(e){return(e.flags&32)===32}var JC=()=>null;function lv(e,n,t=!1){return JC(e,n,t)}function cv(e,n){let t=e.contentQueries;if(t!==null){let r=w(null);try{for(let i=0;i<t.length;i+=2){let o=t[i],s=t[i+1];if(s!==-1){let a=e.data[s];co(o),a.contentQueries(2,n[s],s)}}}finally{w(r)}}}function vu(e,n,t){co(0);let r=w(null);try{n(e,t)}finally{w(r)}}function dv(e,n,t){if(Rd(n)){let r=w(null);try{let i=n.directiveStart,o=n.directiveEnd;for(let s=i;s<o;s++){let a=e.data[s];if(a.contentQueries){let l=t[s];a.contentQueries(1,l,s)}}}finally{w(r)}}}var Nt=(function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e[e.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",e})(Nt||{});var wa;function ew(){if(wa===void 0&&(wa=null,$r.trustedTypes))try{wa=$r.trustedTypes.createPolicy("angular",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return wa}function Xa(e){return ew()?.createHTML(e)||e}var fn=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${ia})`}},yu=class extends fn{getTypeName(){return"HTML"}},bu=class extends fn{getTypeName(){return"Style"}},_u=class extends fn{getTypeName(){return"Script"}},Du=class extends fn{getTypeName(){return"URL"}},Eu=class extends fn{getTypeName(){return"ResourceURL"}};function hn(e){return e instanceof fn?e.changingThisBreaksApplicationSecurity:e}function br(e,n){let t=uv(e);if(t!=null&&t!==n){if(t==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${t} (see ${ia})`)}return t===n}function uv(e){return e instanceof fn&&e.getTypeName()||null}function ef(e){return new yu(e)}function tf(e){return new bu(e)}function nf(e){return new _u(e)}function rf(e){return new Du(e)}function of(e){return new Eu(e)}function tw(e){let n=new wu(e);return nw()?new Cu(n):n}var Cu=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let t=new window.DOMParser().parseFromString(Xa(n),"text/html").body;return t===null?this.inertDocumentHelper.getInertBodyElement(n):(t.firstChild?.remove(),t)}catch{return null}}},wu=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let t=this.inertDocument.createElement("template");return t.innerHTML=Xa(n),t}};function nw(){try{return!!new window.DOMParser().parseFromString(Xa(""),"text/html")}catch{return!1}}var rw=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Ka(e){return e=String(e),e.match(rw)?e:"unsafe:"+e}function pn(e){let n={};for(let t of e.split(","))n[t]=!0;return n}function Io(...e){let n={};for(let t of e)for(let r in t)t.hasOwnProperty(r)&&(n[r]=!0);return n}var fv=pn("area,br,col,hr,img,wbr"),hv=pn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),pv=pn("rp,rt"),iw=Io(pv,hv),ow=Io(hv,pn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),sw=Io(pv,pn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),ug=Io(fv,ow,sw,iw),mv=pn("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),aw=pn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),lw=pn("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),cw=Io(mv,aw,lw),dw=pn("script,style,template");var Iu=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let t=n.firstChild,r=!0,i=[];for(;t;){if(t.nodeType===Node.ELEMENT_NODE?r=this.startElement(t):t.nodeType===Node.TEXT_NODE?this.chars(t.nodeValue):this.sanitizedSomething=!0,r&&t.firstChild){i.push(t),t=hw(t);continue}for(;t;){t.nodeType===Node.ELEMENT_NODE&&this.endElement(t);let o=fw(t);if(o){t=o;break}t=i.pop()}}return this.buf.join("")}startElement(n){let t=fg(n).toLowerCase();if(!ug.hasOwnProperty(t))return this.sanitizedSomething=!0,!dw.hasOwnProperty(t);this.buf.push("<"),this.buf.push(t);let r=n.attributes;for(let i=0;i<r.length;i++){let o=r.item(i),s=o.name,a=s.toLowerCase();if(!cw.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let l=o.value;mv[a]&&(l=Ka(l)),this.buf.push(" ",s,'="',hg(l),'"')}return this.buf.push(">"),!0}endElement(n){let t=fg(n).toLowerCase();ug.hasOwnProperty(t)&&!fv.hasOwnProperty(t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))}chars(n){this.buf.push(hg(n))}};function uw(e,n){return(e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function fw(e){let n=e.nextSibling;if(n&&e!==n.previousSibling)throw gv(n);return n}function hw(e){let n=e.firstChild;if(n&&uw(e,n))throw gv(n);return n}function fg(e){let n=e.nodeName;return typeof n=="string"?n:"FORM"}function gv(e){return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`)}var pw=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,mw=/([^\#-~ |!])/g;function hg(e){return e.replace(/&/g,"&amp;").replace(pw,function(n){let t=n.charCodeAt(0),r=n.charCodeAt(1);return"&#"+((t-55296)*1024+(r-56320)+65536)+";"}).replace(mw,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Ia;function sf(e,n){let t=null;try{Ia=Ia||tw(e);let r=n?String(n):"";t=Ia.getInertBodyElement(r);let i=5,o=r;do{if(i===0)throw new Error("Failed to sanitize html because the input is unstable");i--,r=o,o=t.innerHTML,t=Ia.getInertBodyElement(r)}while(r!==o);let a=new Iu().sanitizeChildren(pg(t)||t);return Xa(a)}finally{if(t){let r=pg(t)||t;for(;r.firstChild;)r.firstChild.remove()}}}function pg(e){return"content"in e&&gw(e)?e.content:null}function gw(e){return e.nodeType===Node.ELEMENT_NODE&&e.nodeName==="TEMPLATE"}function vw(e,n){return e.createText(n)}function yw(e,n,t){e.setValue(n,t)}function vv(e,n,t){return e.createElement(n,t)}function Pa(e,n,t,r,i){e.insertBefore(n,t,r,i)}function yv(e,n,t){e.appendChild(n,t)}function mg(e,n,t,r,i){r!==null?Pa(e,n,t,r,i):yv(e,n,t)}function bv(e,n,t,r){e.removeChild(null,n,t,r)}function bw(e,n,t){e.setAttribute(n,"style",t)}function _w(e,n,t){t===""?e.removeAttribute(n,"class"):e.setAttribute(n,"class",t)}function _v(e,n,t){let{mergedAttrs:r,classes:i,styles:o}=t;r!==null&&OC(e,n,r),i!==null&&_w(e,n,i),o!==null&&bw(e,n,o)}var Ye=(function(e){return e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL",e})(Ye||{});function Dv(e){return e instanceof Function?e():e}function Dw(e,n,t){let r=e.length;for(;;){let i=e.indexOf(n,t);if(i===-1)return i;if(i===0||e.charCodeAt(i-1)<=32){let o=n.length;if(i+o===r||e.charCodeAt(i+o)<=32)return i}t=i+1}}var Ev="ng-template";function Ew(e,n,t,r){let i=0;if(r){for(;i<n.length&&typeof n[i]=="string";i+=2)if(n[i]==="class"&&Dw(n[i+1].toLowerCase(),t,0)!==-1)return!0}else if(af(e))return!1;if(i=n.indexOf(1,i),i>-1){let o;for(;++i<n.length&&typeof(o=n[i])=="string";)if(o.toLowerCase()===t)return!0}return!1}function af(e){return e.type===4&&e.value!==Ev}function Cw(e,n,t){let r=e.type===4&&!t?Ev:e.value;return n===r}function ww(e,n,t){let r=4,i=e.attrs,o=i!==null?Mw(i):0,s=!1;for(let a=0;a<n.length;a++){let l=n[a];if(typeof l=="number"){if(!s&&!At(r)&&!At(l))return!1;if(s&&At(l))continue;s=!1,r=l|r&1;continue}if(!s)if(r&4){if(r=2|r&1,l!==""&&!Cw(e,l,t)||l===""&&n.length===1){if(At(r))return!1;s=!0}}else if(r&8){if(i===null||!Ew(e,i,l,t)){if(At(r))return!1;s=!0}}else{let c=n[++a],d=Iw(l,i,af(e),t);if(d===-1){if(At(r))return!1;s=!0;continue}if(c!==""){let u;if(d>o?u="":u=i[d+1].toLowerCase(),r&2&&c!==u){if(At(r))return!1;s=!0}}}}return At(r)||s}function At(e){return(e&1)===0}function Iw(e,n,t,r){if(n===null)return-1;let i=0;if(r||!t){let o=!1;for(;i<n.length;){let s=n[i];if(s===e)return i;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++i];for(;typeof a=="string";)a=n[++i];continue}else{if(s===4)break;if(s===0){i+=4;continue}}i+=o?1:2}return-1}else return Tw(n,e)}function Cv(e,n,t=!1){for(let r=0;r<n.length;r++)if(ww(e,n[r],t))return!0;return!1}function xw(e){let n=e.attrs;if(n!=null){let t=n.indexOf(5);if((t&1)===0)return n[t+1]}return null}function Mw(e){for(let n=0;n<e.length;n++){let t=e[n];if(Hg(t))return n}return e.length}function Tw(e,n){let t=e.indexOf(4);if(t>-1)for(t++;t<e.length;){let r=e[t];if(typeof r=="number")return-1;if(r===n)return t;t++}return-1}function Sw(e,n){e:for(let t=0;t<n.length;t++){let r=n[t];if(e.length===r.length){for(let i=0;i<e.length;i++)if(e[i]!==r[i])continue e;return!0}}return!1}function gg(e,n){return e?":not("+n.trim()+")":n}function Aw(e){let n=e[0],t=1,r=2,i="",o=!1;for(;t<e.length;){let s=e[t];if(typeof s=="string")if(r&2){let a=e[++t];i+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?i+="."+s:r&4&&(i+=" "+s);else i!==""&&!At(s)&&(n+=gg(o,i),i=""),r=s,o=o||!At(r);t++}return i!==""&&(n+=gg(o,i)),n}function Rw(e){return e.map(Aw).join(",")}function Nw(e){let n=[],t=[],r=1,i=2;for(;r<e.length;){let o=e[r];if(typeof o=="string")i===2?o!==""&&n.push(o,e[++r]):i===8&&t.push(o);else{if(!At(i))break;i=o}r++}return t.length&&n.push(1,...t),n}var _t={};function lf(e,n,t,r,i,o,s,a,l,c,d){let u=De+r,h=u+i,p=Ow(u,h),m=typeof c=="function"?c():c;return p[I]={type:e,blueprint:p,template:t,queries:null,viewQuery:a,declTNode:n,data:p.slice().fill(null,u),bindingStartIndex:u,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:m,incompleteFirstPass:!1,ssrId:d}}function Ow(e,n){let t=[];for(let r=0;r<n;r++)t.push(r<e?null:_t);return t}function kw(e){let n=e.tView;return n===null||n.incompleteFirstPass?e.tView=lf(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):n}function cf(e,n,t,r,i,o,s,a,l,c,d){let u=n.blueprint.slice();return u[Mt]=i,u[T]=r|4|128|8|64|1024,(c!==null||e&&e[T]&2048)&&(u[T]|=2048),Od(u),u[xe]=u[or]=e,u[_e]=t,u[$t]=s||e&&e[$t],u[ae]=a||e&&e[ae],u[sn]=l||e&&e[sn]||null,u[qe]=o,u[an]=qC(),u[ir]=d,u[Sd]=c,u[Ze]=n.type==2?e[Ze]:u,u}function Fw(e,n,t){let r=St(n,e),i=kw(t),o=e[$t].rendererFactory,s=df(e,cf(e,i,null,wv(t),r,n,null,o.createRenderer(r,t),null,null,null));return e[n.index]=s}function wv(e){let n=16;return e.signals?n=4096:e.onPush&&(n=64),n}function Iv(e,n,t,r){if(t===0)return-1;let i=n.length;for(let o=0;o<t;o++)n.push(r),e.blueprint.push(r),e.data.push(null);return i}function df(e,n){return e[qr]?e[Td][pt]=n:e[qr]=n,e[Td]=n,n}function S(e=1){xv(ve(),O(),dn()+e,!1)}function xv(e,n,t,r){if(!r)if((n[T]&3)===3){let o=e.preOrderCheckHooks;o!==null&&Ma(n,o,t)}else{let o=e.preOrderHooks;o!==null&&Ta(n,o,0,t)}Rn(t)}var Ja=(function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e})(Ja||{});function xu(e,n,t,r){let i=w(null);try{let[o,s,a]=e.inputs[t],l=null;(s&Ja.SignalBased)!==0&&(l=n[o][we]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):a!==null&&(r=a.call(n,r)),e.setInput!==null?e.setInput(n,l,r,t,o):Pg(n,l,o,r)}finally{w(i)}}var qt=(function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e})(qt||{}),Pw;function uf(e,n){return Pw(e,n)}var bV=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Mu=new WeakMap,mo=new WeakSet;function Lw(e,n){let t=Mu.get(e);if(!t||t.length===0)return;let r=n.parentNode,i=n.previousSibling;for(let o=t.length-1;o>=0;o--){let s=t[o],a=s.parentNode;s===n?(t.splice(o,1),mo.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(i&&s===i||a&&r&&a!==r)&&(t.splice(o,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function Vw(e,n){let t=Mu.get(e);t?t.includes(n)||t.push(n):Mu.set(e,[n])}var hr=new Set,el=(function(e){return e[e.CHANGE_DETECTION=0]="CHANGE_DETECTION",e[e.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",e})(el||{}),Yt=new g(""),vg=new Set;function _r(e){vg.has(e)||(vg.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}var ff=(()=>{class e{impl=null;execute(){this.impl?.execute()}static \u0275prov=y({token:e,providedIn:"root",factory:()=>new e})}return e})(),hf=[0,1,2,3],Mv=(()=>{class e{ngZone=f(F);scheduler=f(Ht);errorHandler=f(rt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){f(Yt,{optional:!0})}execute(){let t=this.sequences.size>0;t&&J(W.AfterRenderHooksStart),this.executing=!0;for(let r of hf)for(let i of this.sequences)if(!(i.erroredOrDestroyed||!i.hooks[r]))try{i.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=i.hooks[r];return o(i.pipelinedValue)},i.snapshot))}catch(o){i.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let r of this.sequences)r.afterRun(),r.once&&(this.sequences.delete(r),r.destroy());for(let r of this.deferredRegistrations)this.sequences.add(r);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),t&&J(W.AfterRenderHooksEnd)}register(t){let{view:r}=t;r!==void 0?((r[ar]??=[]).push(t),dr(r),r[T]|=8192):this.executing?this.deferredRegistrations.add(t):this.addSequence(t)}addSequence(t){this.sequences.add(t),this.scheduler.notify(7)}unregister(t){this.executing&&this.sequences.has(t)?(t.erroredOrDestroyed=!0,t.pipelinedValue=void 0,t.once=!0):(this.sequences.delete(t),this.deferredRegistrations.delete(t))}maybeTrace(t,r){return r?r.run(el.AFTER_NEXT_RENDER,t):t()}static \u0275prov=y({token:e,providedIn:"root",factory:()=>new e})}return e})(),La=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,t,r,i,o,s=null){this.impl=n,this.hooks=t,this.view=r,this.once=i,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[ar];n&&(this.view[ar]=n.filter(t=>t!==this))}};var Tv=new g("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:f(ue)})});function Sv(e,n,t){let r=e.get(Tv);if(Array.isArray(n))for(let i of n)r.queue.add(i),t?.detachedLeaveAnimationFns?.push(i);else r.queue.add(n),t?.detachedLeaveAnimationFns?.push(n);r.scheduler&&r.scheduler(e)}function jw(e,n){let t=e.get(Tv);if(n.detachedLeaveAnimationFns){for(let r of n.detachedLeaveAnimationFns)t.queue.delete(r);n.detachedLeaveAnimationFns=void 0}}function Bw(e,n){for(let[t,r]of n)Sv(e,r.animateFns)}function yg(e,n,t,r){let i=e?.[Tn]?.enter;n!==null&&i&&i.has(t.index)&&Bw(r,i)}function Kr(e,n,t,r,i,o,s,a){if(i!=null){let l,c=!1;Tt(i)?l=i:ln(i)&&(c=!0,i=i[Mt]);let d=mt(i);e===0&&r!==null?(yg(a,r,o,t),s==null?yv(n,r,d):Pa(n,r,d,s||null,!0)):e===1&&r!==null?(yg(a,r,o,t),Pa(n,r,d,s||null,!0),Lw(o,d)):e===2?(a?.[Tn]?.leave?.has(o.index)&&Vw(o,d),mo.delete(d),bg(a,o,t,u=>{if(mo.has(d)){mo.delete(d);return}bv(n,d,c,u)})):e===3&&(mo.delete(d),bg(a,o,t,()=>{n.destroyNode(d)})),l!=null&&Xw(n,e,t,l,o,r,s)}}function Uw(e,n){Av(e,n),n[Mt]=null,n[qe]=null}function Hw(e,n,t,r,i,o){r[Mt]=i,r[qe]=n,nl(e,r,t,1,i,o)}function Av(e,n){n[$t].changeDetectionScheduler?.notify(9),nl(e,n,n[ae],2,null,null)}function $w(e){let n=e[qr];if(!n)return iu(e[I],e);for(;n;){let t=null;if(ln(n))t=n[qr];else{let r=n[ge];r&&(t=r)}if(!t){for(;n&&!n[pt]&&n!==e;)ln(n)&&iu(n[I],n),n=n[xe];n===null&&(n=e),ln(n)&&iu(n[I],n),t=n&&n[pt]}n=t}}function pf(e,n){let t=e[lr],r=t.indexOf(n);t.splice(r,1)}function tl(e,n){if(cr(n))return;let t=n[ae];t.destroyNode&&nl(e,n,t,3,null,null),$w(n)}function iu(e,n){if(cr(n))return;let t=w(null);try{n[T]&=-129,n[T]|=256,n[lt]&&Dn(n[lt]),Ww(e,n),Gw(e,n),n[I].type===1&&n[ae].destroy();let r=n[Mn];if(r!==null&&Tt(n[xe])){r!==n[xe]&&pf(r,n);let i=n[zt];i!==null&&i.detachView(e)}gu(n)}finally{w(t)}}function bg(e,n,t,r){let i=e?.[Tn];if(i==null||i.leave==null||!i.leave.has(n.index))return r(!1);e&&hr.add(e[an]),Sv(t,()=>{if(i.leave&&i.leave.has(n.index)){let s=i.leave.get(n.index),a=[];if(s){for(let l=0;l<s.animateFns.length;l++){let c=s.animateFns[l],{promise:d}=c();a.push(d)}i.detachedLeaveAnimationFns=void 0}i.running=Promise.allSettled(a),zw(e,r)}else e&&hr.delete(e[an]),r(!1)},i)}function zw(e,n){let t=e[Tn]?.running;if(t){t.then(()=>{e[Tn].running=void 0,hr.delete(e[an]),n(!0)});return}n(!1)}function Gw(e,n){let t=e.cleanup,r=n[Wr];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let a=t[s+3];a>=0?r[a]():r[-a].unsubscribe(),s+=2}else{let a=r[t[s+1]];t[s].call(a)}r!==null&&(n[Wr]=null);let i=n[nn];if(i!==null){n[nn]=null;for(let s=0;s<i.length;s++){let a=i[s];a()}}let o=n[En];if(o!==null){n[En]=null;for(let s of o)s.destroy()}}function Ww(e,n){let t;if(e!=null&&(t=e.destroyHooks)!=null)for(let r=0;r<t.length;r+=2){let i=n[t[r]];if(!(i instanceof fr)){let o=t[r+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=i[o[s]],l=o[s+1];J(W.LifecycleHookStart,a,l);try{l.call(a)}finally{J(W.LifecycleHookEnd,a,l)}}else{J(W.LifecycleHookStart,i,o);try{o.call(i)}finally{J(W.LifecycleHookEnd,i,o)}}}}}function Rv(e,n,t){return qw(e,n.parent,t)}function qw(e,n,t){let r=n;for(;r!==null&&r.type&168;)n=r,r=n.parent;if(r===null)return t[Mt];if(cn(r)){let{encapsulation:i}=e.data[r.directiveStart+r.componentOffset];if(i===Nt.None||i===Nt.Emulated)return null}return St(r,t)}function Nv(e,n,t){return Yw(e,n,t)}function Zw(e,n,t){return e.type&40?St(e,t):null}var Yw=Zw,_g;function mf(e,n,t,r){let i=Rv(e,r,n),o=n[ae],s=r.parent||n[qe],a=Nv(s,r,n);if(i!=null)if(Array.isArray(t))for(let l=0;l<t.length;l++)mg(o,i,t[l],a,!1);else mg(o,i,t,a,!1);_g!==void 0&&_g(o,r,n,t,i)}function go(e,n){if(n!==null){let t=n.type;if(t&3)return St(n,e);if(t&4)return Tu(-1,e[n.index]);if(t&8){let r=n.child;if(r!==null)return go(e,r);{let i=e[n.index];return Tt(i)?Tu(-1,i):mt(i)}}else{if(t&128)return go(e,n.next);if(t&32)return uf(n,e)()||mt(e[n.index]);{let r=Ov(e,n);if(r!==null){if(Array.isArray(r))return r[0];let i=Cn(e[Ze]);return go(i,r)}else return go(e,n.next)}}}return null}function Ov(e,n){if(n!==null){let r=e[Ze][qe],i=n.projection;return r.projection[i]}return null}function Tu(e,n){let t=ge+e+1;if(t<n.length){let r=n[t],i=r[I].firstChild;if(i!==null)return go(r,i)}return n[Sn]}function gf(e,n,t,r,i,o,s){for(;t!=null;){let a=r[sn];if(t.type===128){t=t.next;continue}let l=r[t.index],c=t.type;if(s&&n===0&&(l&&ti(mt(l),r),t.flags|=2),!Qa(t))if(c&8)gf(e,n,t.child,r,i,o,!1),Kr(n,e,a,i,l,t,o,r);else if(c&32){let d=uf(t,r),u;for(;u=d();)Kr(n,e,a,i,u,t,o,r);Kr(n,e,a,i,l,t,o,r)}else c&16?kv(e,n,r,t,i,o):Kr(n,e,a,i,l,t,o,r);t=s?t.projectionNext:t.next}}function nl(e,n,t,r,i,o){gf(t,r,e.firstChild,n,i,o,!1)}function Qw(e,n,t){let r=n[ae],i=Rv(e,t,n),o=t.parent||n[qe],s=Nv(o,t,n);kv(r,0,n,t,i,s)}function kv(e,n,t,r,i,o){let s=t[Ze],l=s[qe].projection[r.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];Kr(n,e,t[sn],i,d,r,o,t)}else{let c=l,d=s[xe];Jg(r)&&(c.flags|=128),gf(e,n,c,d,i,o,!0)}}function Xw(e,n,t,r,i,o,s){let a=r[Sn],l=mt(r);a!==l&&Kr(n,e,t,o,a,i,s);for(let c=ge;c<r.length;c++){let d=r[c];nl(d[I],d,e,n,o,a)}}function Kw(e,n,t,r,i){if(n)i?e.addClass(t,r):e.removeClass(t,r);else{let o=r.indexOf("-")===-1?void 0:qt.DashCase;i==null?e.removeStyle(t,r,o):(typeof i=="string"&&i.endsWith("!important")&&(i=i.slice(0,-10),o|=qt.Important),e.setStyle(t,r,i,o))}}function Fv(e,n,t,r,i){let o=dn(),s=r&2;try{Rn(-1),s&&n.length>De&&xv(e,n,De,!1);let a=s?W.TemplateUpdateStart:W.TemplateCreateStart;J(a,i,t),t(r,i)}finally{Rn(o);let a=s?W.TemplateUpdateEnd:W.TemplateCreateEnd;J(a,i,t)}}function vf(e,n,t){iI(e,n,t),(t.flags&64)===64&&oI(e,n,t)}function rl(e,n,t=St){let r=n.localNames;if(r!==null){let i=n.index+1;for(let o=0;o<r.length;o+=2){let s=r[o+1],a=s===-1?t(n,e):e[s];e[i++]=a}}}function Jw(e,n,t,r){let o=r.get(av,sv)||t===Nt.ShadowDom||t===Nt.ExperimentalIsolatedShadowDom,s=e.selectRootElement(n,o);return eI(s),s}function eI(e){tI(e)}var tI=()=>null;function nI(e){return e==="class"?"className":e==="for"?"htmlFor":e==="formaction"?"formAction":e==="innerHtml"?"innerHTML":e==="readonly"?"readOnly":e==="tabindex"?"tabIndex":e}function Pv(e,n,t,r,i,o){let s=n[I];if(yf(e,s,n,t,r)){cn(e)&&rI(n,e.index);return}e.type&3&&(t=nI(t)),Lv(e,n,t,r,i,o)}function Lv(e,n,t,r,i,o){if(e.type&3){let s=St(e,n);r=o!=null?o(r,e.value||"",t):r,i.setProperty(s,t,r)}else e.type&12}function rI(e,n){let t=gt(n,e);t[T]&16||(t[T]|=64)}function iI(e,n,t){let r=t.directiveStart,i=t.directiveEnd;cn(t)&&Fw(n,t,e.data[r+t.componentOffset]),e.firstCreatePass||ka(t,n);let o=t.initialInputs;for(let s=r;s<i;s++){let a=e.data[s],l=yo(n,e,s,t);if(ti(l,n),o!==null&&cI(n,s-r,l,a,t,o),Gt(a)){let c=gt(t.index,n);c[_e]=yo(n,e,s,t)}}}function oI(e,n,t){let r=t.directiveStart,i=t.directiveEnd,o=t.index,s=Hm();try{Rn(o);for(let a=r;a<i;a++){let l=e.data[a],c=n[a];ga(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&sI(l,c)}}finally{Rn(-1),ga(s)}}function sI(e,n){e.hostBindings!==null&&e.hostBindings(1,n)}function Vv(e,n){let t=e.directiveRegistry,r=null;if(t)for(let i=0;i<t.length;i++){let o=t[i];Cv(n,o.selectors,!1)&&(r??=[],Gt(o)?r.unshift(o):r.push(o))}return r}function aI(e,n,t,r,i,o){let s=St(e,n);lI(n[ae],s,o,e.value,t,r,i)}function lI(e,n,t,r,i,o,s){if(o==null)e.removeAttribute(n,i,t);else{let a=s==null?bd(o):s(o,r||"",i);e.setAttribute(n,i,a,t)}}function cI(e,n,t,r,i,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let l=s[a],c=s[a+1];xu(r,t,l,c)}}function jv(e,n,t,r,i){let o=De+t,s=n[I],a=i(s,n,e,r,t);n[o]=a,Xr(e,!0);let l=e.type===2;return l?(_v(n[ae],a,e),(km()===0||ao(e))&&ti(a,n),Fm()):ti(a,n),_a()&&(!l||!Qa(e))&&mf(s,n,a,e),e}function Bv(e){let n=e;return zd()?Gd():(n=n.parent,Xr(n,!1)),n}function dI(e,n){let t=e[sn];if(!t)return;let r;try{r=t.get(bt,null)}catch{r=null}r?.(n)}function yf(e,n,t,r,i){let o=e.inputs?.[r],s=e.hostDirectiveInputs?.[r],a=!1;if(s)for(let l=0;l<s.length;l+=2){let c=s[l],d=s[l+1],u=n.data[c];xu(u,t[c],d,i),a=!0}if(o)for(let l of o){let c=t[l],d=n.data[l];xu(d,c,r,i),a=!0}return a}function uI(e,n){let t=gt(n,e),r=t[I];fI(r,t);let i=t[Mt];i!==null&&t[ir]===null&&(t[ir]=lv(i,t[sn])),J(W.ComponentStart);try{bf(r,t,t[_e])}finally{J(W.ComponentEnd,t[_e])}}function fI(e,n){for(let t=n.length;t<e.blueprint.length;t++)n.push(e.blueprint[t])}function bf(e,n,t){ya(n);try{let r=e.viewQuery;r!==null&&vu(1,r,t);let i=e.template;i!==null&&Fv(e,n,i,1,t),e.firstCreatePass&&(e.firstCreatePass=!1),n[zt]?.finishViewCreation(e),e.staticContentQueries&&cv(e,n),e.staticViewQueries&&vu(2,e.viewQuery,t);let o=e.components;o!==null&&hI(n,o)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{n[T]&=-5,ba()}}function hI(e,n){for(let t=0;t<n.length;t++)uI(e,n[t])}function xo(e,n,t,r){let i=w(null);try{let o=n.tView,a=e[T]&4096?4096:16,l=cf(e,o,t,a,null,n,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),c=e[n.index];l[Mn]=c;let d=e[zt];return d!==null&&(l[zt]=d.createEmbeddedView(o)),bf(o,l,t),l}finally{w(i)}}function ni(e,n){return!n||n.firstChild===null||Jg(e)}function bo(e,n,t,r,i=!1){for(;t!==null;){if(t.type===128){t=i?t.projectionNext:t.next;continue}let o=n[t.index];o!==null&&r.push(mt(o)),Tt(o)&&Uv(o,r);let s=t.type;if(s&8)bo(e,n,t.child,r);else if(s&32){let a=uf(t,n),l;for(;l=a();)r.push(l)}else if(s&16){let a=Ov(n,t);if(Array.isArray(a))r.push(...a);else{let l=Cn(n[Ze]);bo(l[I],l,a,r,!0)}}t=i?t.projectionNext:t.next}return r}function Uv(e,n){for(let t=ge;t<e.length;t++){let r=e[t],i=r[I].firstChild;i!==null&&bo(r[I],r,i,n)}e[Sn]!==e[Mt]&&n.push(e[Sn])}function Hv(e){if(e[ar]!==null){for(let n of e[ar])n.impl.addSequence(n);e[ar].length=0}}var $v=[];function pI(e){return e[lt]??mI(e)}function mI(e){let n=$v.pop()??Object.create(vI);return n.lView=e,n}function gI(e){e.lView[lt]!==e&&(e.lView=null,$v.push(e))}var vI=P(v({},zn),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{dr(e.lView)},consumerOnSignalRead(){this.lView[lt]=this}});function yI(e){let n=e[lt]??Object.create(bI);return n.lView=e,n}var bI=P(v({},zn),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{let n=Cn(e.lView);for(;n&&!zv(n[I]);)n=Cn(n);n&&kd(n)},consumerOnSignalRead(){this.lView[lt]=this}});function zv(e){return e.type!==2}function Gv(e){if(e[En]===null)return;let n=!0;for(;n;){let t=!1;for(let r of e[En])r.dirty&&(t=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));n=t&&!!(e[T]&8192)}}var _I=100;function Wv(e,n=0){let r=e[$t].rendererFactory,i=!1;i||r.begin?.();try{DI(e,n)}finally{i||r.end?.()}}function DI(e,n){let t=Wd();try{Ji(!0),Su(e,n);let r=0;for(;lo(e);){if(r===_I)throw new b(103,!1);r++,Su(e,1)}}finally{Ji(t)}}function EI(e,n,t,r){if(cr(n))return;let i=n[T],o=!1,s=!1;ya(n);let a=!0,l=null,c=null;o||(zv(e)?(c=pI(n),l=_n(c)):Es()===null?(a=!1,c=yI(n),l=_n(c)):n[lt]&&(Dn(n[lt]),n[lt]=null));try{Od(n),jm(e.bindingStartIndex),t!==null&&Fv(e,n,t,2,r);let d=(i&3)===3;if(!o)if(d){let p=e.preOrderCheckHooks;p!==null&&Ma(n,p,null)}else{let p=e.preOrderHooks;p!==null&&Ta(n,p,0,null),nu(n,0)}if(s||CI(n),Gv(n),qv(n,0),e.contentQueries!==null&&cv(e,n),!o)if(d){let p=e.contentCheckHooks;p!==null&&Ma(n,p)}else{let p=e.contentHooks;p!==null&&Ta(n,p,1),nu(n,1)}II(e,n);let u=e.components;u!==null&&Yv(n,u,0);let h=e.viewQuery;if(h!==null&&vu(2,h,r),!o)if(d){let p=e.viewCheckHooks;p!==null&&Ma(n,p)}else{let p=e.viewHooks;p!==null&&Ta(n,p,2),nu(n,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),n[fa]){for(let p of n[fa])p();n[fa]=null}o||(Hv(n),n[T]&=-73)}catch(d){throw o||dr(n),d}finally{c!==null&&(Wn(c,l),a&&gI(c)),ba()}}function qv(e,n){for(let t=tv(e);t!==null;t=nv(t))for(let r=ge;r<t.length;r++){let i=t[r];Zv(i,n)}}function CI(e){for(let n=tv(e);n!==null;n=nv(n)){if(!(n[T]&2))continue;let t=n[lr];for(let r=0;r<t.length;r++){let i=t[r];kd(i)}}}function wI(e,n,t){J(W.ComponentStart);let r=gt(n,e);try{Zv(r,t)}finally{J(W.ComponentEnd,r[_e])}}function Zv(e,n){pa(e)&&Su(e,n)}function Su(e,n){let r=e[I],i=e[T],o=e[lt],s=!!(n===0&&i&16);if(s||=!!(i&64&&n===0),s||=!!(i&1024),s||=!!(o?.dirty&&Nr(o)),s||=!1,o&&(o.dirty=!1),e[T]&=-9217,s)EI(r,e,r.template,e[_e]);else if(i&8192){let a=w(null);try{Gv(e),qv(e,1);let l=r.components;l!==null&&Yv(e,l,1),Hv(e)}finally{w(a)}}}function Yv(e,n,t){for(let r=0;r<n.length;r++)wI(e,n[r],t)}function II(e,n){let t=e.hostBindingOpCodes;if(t!==null)try{for(let r=0;r<t.length;r++){let i=t[r];if(i<0)Rn(~i);else{let o=i,s=t[++r],a=t[++r];Um(s,o);let l=n[o];J(W.HostBindingsUpdateStart,l);try{a(2,l)}finally{J(W.HostBindingsUpdateEnd,l)}}}}finally{Rn(-1)}}function _f(e,n){let t=Wd()?64:1088;for(e[$t].changeDetectionScheduler?.notify(n);e;){e[T]|=t;let r=Cn(e);if(Zr(e)&&!r)return e;e=r}return null}function Qv(e,n,t,r){return[e,!0,0,n,null,r,null,t,null,null]}function Xv(e,n){let t=ge+n;if(t<e.length)return e[t]}function Mo(e,n,t,r=!0){let i=n[I];if(xI(i,n,e,t),r){let s=Tu(t,e),a=n[ae],l=a.parentNode(e[Sn]);l!==null&&Hw(i,e[qe],a,n,l,s)}let o=n[ir];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Kv(e,n){let t=_o(e,n);return t!==void 0&&tl(t[I],t),t}function _o(e,n){if(e.length<=ge)return;let t=ge+n,r=e[t];if(r){let i=r[Mn];i!==null&&i!==e&&pf(i,r),n>0&&(e[t-1][pt]=r[pt]);let o=io(e,ge+n);Uw(r[I],r);let s=o[zt];s!==null&&s.detachView(o[I]),r[xe]=null,r[pt]=null,r[T]&=-129}return r}function xI(e,n,t,r){let i=ge+r,o=t.length;r>0&&(t[i-1][pt]=n),r<o-ge?(n[pt]=t[i],Ed(t,ge+r,n)):(t.push(n),n[pt]=null),n[xe]=t;let s=n[Mn];s!==null&&t!==s&&Jv(s,n);let a=n[zt];a!==null&&a.insertView(e),ma(n),n[T]|=128}function Jv(e,n){let t=e[lr],r=n[xe];if(ln(r))e[T]|=2;else{let i=r[xe][Ze];n[Ze]!==i&&(e[T]|=2)}t===null?e[lr]=[n]:t.push(n)}var Nn=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,t=n[I];return bo(t,n,t.firstChild,[])}constructor(n,t){this._lView=n,this._cdRefInjectingView=t}get context(){return this._lView[_e]}set context(n){this._lView[_e]=n}get destroyed(){return cr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[xe];if(Tt(n)){let t=n[so],r=t?t.indexOf(this):-1;r>-1&&(_o(n,r),io(t,r))}this._attachedToViewContainer=!1}tl(this._lView[I],this._lView)}onDestroy(n){Fd(this._lView,n)}markForCheck(){_f(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[T]&=-129}reattach(){ma(this._lView),this._lView[T]|=128}detectChanges(){this._lView[T]|=1024,Wv(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new b(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Zr(this._lView),t=this._lView[Mn];t!==null&&!n&&pf(t,this._lView),Av(this._lView[I],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new b(902,!1);this._appRef=n;let t=Zr(this._lView),r=this._lView[Mn];r!==null&&!t&&Jv(r,this._lView),ma(this._lView)}};var ri=(()=>{class e{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=MI;constructor(t,r,i){this._declarationLView=t,this._declarationTContainer=r,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,r){return this.createEmbeddedViewImpl(t,r)}createEmbeddedViewImpl(t,r,i){let o=xo(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:r,dehydratedView:i});return new Nn(o)}}return e})();function MI(){return il(Ve(),O())}function il(e,n){return e.type&4?new ri(n,e,oi(e,n)):null}function ai(e,n,t,r,i){let o=e.data[n];if(o===null)o=TI(e,n,t,r,i),Bm()&&(o.flags|=32);else if(o.type&64){o.type=t,o.value=r,o.attrs=i;let s=Pm();o.injectorIndex=s===null?-1:s.injectorIndex}return Xr(o,!0),o}function TI(e,n,t,r,i){let o=$d(),s=zd(),a=s?o:o&&o.parent,l=e.data[n]=AI(e,a,t,n,r,i);return SI(e,l,o,s),l}function SI(e,n,t,r){e.firstChild===null&&(e.firstChild=n),t!==null&&(r?t.child==null&&n.parent!==null&&(t.child=n):t.next===null&&(t.next=n,n.prev=t))}function AI(e,n,t,r,i,o){let s=n?n.injectorIndex:-1,a=0;return Bd()&&(a|=128),{type:t,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:i,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function RI(e){let n=e[Ad]??[],r=e[xe][ae],i=[];for(let o of n)o.data[ov]!==void 0?i.push(o):NI(o,r);e[Ad]=i}function NI(e,n){let t=0,r=e.firstChild;if(r){let i=e.data[iv];for(;t<i;){let o=r.nextSibling;bv(n,r,!1),r=o,t++}}}var OI=()=>null,kI=()=>null;function Va(e,n){return OI(e,n)}function ey(e,n,t){return kI(e,n,t)}var ty=class{},ol=class{},Au=class{resolveComponentFactory(n){throw new b(917,!1)}},To=class{static NULL=new Au},ct=class{},Oe=(()=>{class e{destroyNode=null;static __NG_ELEMENT_ID__=()=>FI()}return e})();function FI(){let e=O(),n=Ve(),t=gt(n.index,e);return(ln(t)?t:e)[ae]}var ny=(()=>{class e{static \u0275prov=y({token:e,providedIn:"root",factory:()=>null})}return e})();var Aa={},Ru=class{injector;parentInjector;constructor(n,t){this.injector=n,this.parentInjector=t}get(n,t,r){let i=this.injector.get(n,Aa,r);return i!==Aa||t===Aa?i:this.parentInjector.get(n,t,r)}};function ja(e,n,t){let r=t?e.styles:null,i=t?e.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)i=oa(i,a);else if(o==2){let l=a,c=n[++s];r=oa(r,l+": "+c+";")}}t?e.styles=r:e.stylesWithoutHost=r,t?e.classes=i:e.classesWithoutHost=i}function te(e,n=0){let t=O();if(t===null)return C(e,n);let r=Ve();return Yg(r,t,Le(e),n)}function ry(e,n,t,r,i){let o=r===null?null:{"":-1},s=i(e,t);if(s!==null){let a=s,l=null,c=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,l,c]=d.resolveHostDirectives(s);break}VI(e,n,t,a,o,l,c)}o!==null&&r!==null&&PI(t,r,o)}function PI(e,n,t){let r=e.localNames=[];for(let i=0;i<n.length;i+=2){let o=t[n[i+1]];if(o==null)throw new b(-301,!1);r.push(n[i],o)}}function LI(e,n,t){n.componentOffset=t,(e.components??=[]).push(n.index)}function VI(e,n,t,r,i,o,s){let a=r.length,l=null;for(let h=0;h<a;h++){let p=r[h];l===null&&Gt(p)&&(l=p,LI(e,t,h)),pu(ka(t,n),e,p.type)}zI(t,e.data.length,a),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let h=0;h<a;h++){let p=r[h];p.providersResolver&&p.providersResolver(p)}let c=!1,d=!1,u=Iv(e,n,a,null);a>0&&(t.directiveToIndex=new Map);for(let h=0;h<a;h++){let p=r[h];if(t.mergedAttrs=ei(t.mergedAttrs,p.hostAttrs),BI(e,t,n,u,p),$I(u,p,i),s!==null&&s.has(p)){let[D,_]=s.get(p);t.directiveToIndex.set(p.type,[u,D+t.directiveStart,_+t.directiveStart])}else(o===null||!o.has(p))&&t.directiveToIndex.set(p.type,u);p.contentQueries!==null&&(t.flags|=4),(p.hostBindings!==null||p.hostAttrs!==null||p.hostVars!==0)&&(t.flags|=64);let m=p.type.prototype;!c&&(m.ngOnChanges||m.ngOnInit||m.ngDoCheck)&&((e.preOrderHooks??=[]).push(t.index),c=!0),!d&&(m.ngOnChanges||m.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(t.index),d=!0),u++}jI(e,t,o)}function jI(e,n,t){for(let r=n.directiveStart;r<n.directiveEnd;r++){let i=e.data[r];if(t===null||!t.has(i))Dg(0,n,i,r),Dg(1,n,i,r),Cg(n,r,!1);else{let o=t.get(i);Eg(0,n,o,r),Eg(1,n,o,r),Cg(n,r,!0)}}}function Dg(e,n,t,r){let i=e===0?t.inputs:t.outputs;for(let o in i)if(i.hasOwnProperty(o)){let s;e===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(r),iy(n,o)}}function Eg(e,n,t,r){let i=e===0?t.inputs:t.outputs;for(let o in i)if(i.hasOwnProperty(o)){let s=i[o],a;e===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(r,o),iy(n,s)}}function iy(e,n){n==="class"?e.flags|=8:n==="style"&&(e.flags|=16)}function Cg(e,n,t){let{attrs:r,inputs:i,hostDirectiveInputs:o}=e;if(r===null||!t&&i===null||t&&o===null||af(e)){e.initialInputs??=[],e.initialInputs.push(null);return}let s=null,a=0;for(;a<r.length;){let l=r[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!t&&i.hasOwnProperty(l)){let c=i[l];for(let d of c)if(d===n){s??=[],s.push(l,r[a+1]);break}}else if(t&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){s??=[],s.push(c[d+1],r[a+1]);break}}a+=2}e.initialInputs??=[],e.initialInputs.push(s)}function BI(e,n,t,r,i){e.data[r]=i;let o=i.factory||(i.factory=er(i.type,!0)),s=new fr(o,Gt(i),te,null);e.blueprint[r]=s,t[r]=s,UI(e,n,r,Iv(e,t,i.hostVars,_t),i)}function UI(e,n,t,r,i){let o=i.hostBindings;if(o){let s=e.hostBindingOpCodes;s===null&&(s=e.hostBindingOpCodes=[]);let a=~n.index;HI(s)!=a&&s.push(a),s.push(t,r,o)}}function HI(e){let n=e.length;for(;n>0;){let t=e[--n];if(typeof t=="number"&&t<0)return t}return 0}function $I(e,n,t){if(t){if(n.exportAs)for(let r=0;r<n.exportAs.length;r++)t[n.exportAs[r]]=e;Gt(n)&&(t[""]=e)}}function zI(e,n,t){e.flags|=1,e.directiveStart=n,e.directiveEnd=n+t,e.providerIndexes=n}function oy(e,n,t,r,i,o,s,a){let l=n[I],c=l.consts,d=vt(c,s),u=ai(l,e,t,r,d);return o&&ry(l,n,u,vt(c,a),i),u.mergedAttrs=ei(u.mergedAttrs,u.attrs),u.attrs!==null&&ja(u,u.attrs,!1),u.mergedAttrs!==null&&ja(u,u.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,u),u}function sy(e,n){Bg(e,n),Rd(n)&&e.queries.elementEnd(n)}function GI(e,n,t,r,i,o){let s=n.consts,a=vt(s,i),l=ai(n,e,t,r,a);if(l.mergedAttrs=ei(l.mergedAttrs,l.attrs),o!=null){let c=vt(s,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&ja(l,l.attrs,!1),l.mergedAttrs!==null&&ja(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function WI(e,n,t){return e[n]=t}function qI(e,n){return e[n]}function mn(e,n,t){if(t===_t)return!1;let r=e[n];return Object.is(r,t)?!1:(e[n]=t,!0)}function ou(e,n,t){return function r(i){let o=cn(e)?gt(e.index,n):n;_f(o,5);let s=n[_e],a=wg(n,s,t,i),l=r.__ngNextListenerFn__;for(;l;)a=wg(n,s,l,i)&&a,l=l.__ngNextListenerFn__;return a}}function wg(e,n,t,r){let i=w(null);try{return J(W.OutputStart,n,t),t(r)!==!1}catch(o){return dI(e,o),!1}finally{J(W.OutputEnd,n,t),w(i)}}function ZI(e,n,t,r,i,o,s,a){let l=ao(e),c=!1,d=null;if(!r&&l&&(d=QI(n,t,o,e.index)),d!==null){let u=d.__ngLastListenerFn__||d;u.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,c=!0}else{let u=St(e,t),h=r?r(u):u;KC(t,h,o,a);let p=i.listen(h,o,a);if(!YI(o)){let m=r?D=>r(mt(D[e.index])):e.index;ay(m,n,t,o,a,p,!1)}}return c}function YI(e){return e.startsWith("animation")||e.startsWith("transition")}function QI(e,n,t,r){let i=e.cleanup;if(i!=null)for(let o=0;o<i.length-1;o+=2){let s=i[o];if(s===t&&i[o+1]===r){let a=n[Wr],l=i[o+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(o+=2)}return null}function ay(e,n,t,r,i,o,s){let a=n.firstCreatePass?Ld(n):null,l=Pd(t),c=l.length;l.push(i,o),a&&a.push(r,e,c,(c+1)*(s?-1:1))}function Ig(e,n,t,r,i,o){let s=n[t],a=n[I],c=a.data[t].outputs[r],u=s[c].subscribe(o);ay(e.index,a,n,i,o,u,!0)}var Nu=Symbol("BINDING");function ly(e){return e.debugInfo?.className||e.type.name||null}var Ba=class extends To{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let t=rn(n);return new pr(t,this.ngModule)}};function XI(e){return Object.keys(e).map(n=>{let[t,r,i]=e[n],o={propName:t,templateName:n,isSignal:(r&Ja.SignalBased)!==0};return i&&(o.transform=i),o})}function KI(e){return Object.keys(e).map(n=>({propName:e[n],templateName:n}))}function JI(e,n,t){let r=n instanceof ue?n:n?.injector;return r&&e.getStandaloneInjector!==null&&(r=e.getStandaloneInjector(r)||r),r?new Ru(t,r):t}function e0(e){let n=e.get(ct,null);if(n===null)throw new b(407,!1);let t=e.get(ny,null),r=e.get(Ht,null),i=e.get(Yt,null,{optional:!0});return{rendererFactory:n,sanitizer:t,changeDetectionScheduler:r,ngReflect:!1,tracingService:i}}function t0(e,n){let t=cy(e);return vv(n,t,t==="svg"?xm:t==="math"?Mm:null)}function cy(e){return(e.selectors[0][0]||"div").toLowerCase()}var pr=class extends ol{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=XI(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=KI(this.componentDef.outputs),this.cachedOutputs}constructor(n,t){super(),this.componentDef=n,this.ngModule=t,this.componentType=n.type,this.selector=Rw(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!t}create(n,t,r,i,o,s){J(W.DynamicComponentStart);let a=w(null);try{let l=this.componentDef,c=JI(l,i||this.ngModule,n),d=e0(c),u=d.tracingService;return u&&u.componentCreate?u.componentCreate(ly(l),()=>this.createComponentRef(d,c,t,r,o,s)):this.createComponentRef(d,c,t,r,o,s)}finally{w(a)}}createComponentRef(n,t,r,i,o,s){let a=this.componentDef,l=n0(i,a,s,o),c=n.rendererFactory.createRenderer(null,a),d=i?Jw(c,i,a.encapsulation,t):t0(a,c),u=s?.some(xg)||o?.some(m=>typeof m!="function"&&m.bindings.some(xg)),h=cf(null,l,null,512|wv(a),null,null,n,c,t,null,lv(d,t,!0));h[De]=d,ya(h);let p=null;try{let m=oy(De,h,2,"#host",()=>l.directiveRegistry,!0,0);_v(c,d,m),ti(d,h),vf(l,h,m),dv(l,m,h),sy(l,m),r!==void 0&&i0(m,this.ngContentSelectors,r),p=gt(m.index,h),h[_e]=p[_e],bf(l,h,null)}catch(m){throw p!==null&&gu(p),gu(h),m}finally{J(W.DynamicComponentEnd),ba()}return new Ua(this.componentType,h,!!u)}};function n0(e,n,t,r){let i=e?["ng-version","21.2.9"]:Nw(n.selectors[0]),o=null,s=null,a=0;if(t)for(let d of t)a+=d[Nu].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(r)for(let d=0;d<r.length;d++){let u=r[d];if(typeof u!="function")for(let h of u.bindings){a+=h[Nu].requiredVars;let p=d+1;h.create&&(h.targetIdx=p,(o??=[]).push(h)),h.update&&(h.targetIdx=p,(s??=[]).push(h))}}let l=[n];if(r)for(let d of r){let u=typeof d=="function"?d:d.type,h=yd(u);l.push(h)}return lf(0,null,r0(o,s),1,a,l,null,null,null,[i],null)}function r0(e,n){return!e&&!n?null:t=>{if(t&1&&e)for(let r of e)r.create();if(t&2&&n)for(let r of n)r.update()}}function xg(e){let n=e[Nu].kind;return n==="input"||n==="twoWay"}var Ua=class extends ty{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,t,r){super(),this._rootLView=t,this._hasInputBindings=r,this._tNode=ha(t[I],De),this.location=oi(this._tNode,t),this.instance=gt(this._tNode.index,t)[_e],this.hostView=this.changeDetectorRef=new Nn(t,void 0),this.componentType=n}setInput(n,t){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),t))return;let i=this._rootLView,o=yf(r,i[I],i,n,t);this.previousInputValues.set(n,t);let s=gt(r.index,i);_f(s,1)}get injector(){return new ur(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function i0(e,n,t){let r=e.projection=[];for(let i=0;i<n.length;i++){let o=t[i];r.push(o!=null&&o.length?Array.from(o):null)}}var kn=(()=>{class e{static __NG_ELEMENT_ID__=o0}return e})();function o0(){let e=Ve();return dy(e,O())}var Ou=class e extends kn{_lContainer;_hostTNode;_hostLView;constructor(n,t,r){super(),this._lContainer=n,this._hostTNode=t,this._hostLView=r}get element(){return oi(this._hostTNode,this._hostLView)}get injector(){return new ur(this._hostTNode,this._hostLView)}get parentInjector(){let n=Yu(this._hostTNode,this._hostLView);if($g(n)){let t=Oa(n,this._hostLView),r=Na(n),i=t[I].data[r+8];return new ur(i,t)}else return new ur(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let t=Mg(this._lContainer);return t!==null&&t[n]||null}get length(){return this._lContainer.length-ge}createEmbeddedView(n,t,r){let i,o;typeof r=="number"?i=r:r!=null&&(i=r.index,o=r.injector);let s=Va(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(t||{},o,s);return this.insertImpl(a,i,ni(this._hostTNode,s)),a}createComponent(n,t,r,i,o,s,a){let l=n&&!IC(n),c;if(l)c=t;else{let _=t||{};c=_.index,r=_.injector,i=_.projectableNodes,o=_.environmentInjector||_.ngModuleRef,s=_.directives,a=_.bindings}let d=l?n:new pr(rn(n)),u=r||this.parentInjector;if(!o&&d.ngModule==null){let E=(l?u:this.parentInjector).get(ue,null);E&&(o=E)}let h=rn(d.componentType??{}),p=Va(this._lContainer,h?.id??null),m=p?.firstChild??null,D=d.create(u,i,m,o,s,a);return this.insertImpl(D.hostView,c,ni(this._hostTNode,p)),D}insert(n,t){return this.insertImpl(n,t,!0)}insertImpl(n,t,r){let i=n._lView;if(Am(i)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let l=i[xe],c=new e(l,l[qe],l[xe]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(t),s=this._lContainer;return Mo(s,i,o,r),n.attachToViewContainerRef(),Ed(su(s),o,n),n}move(n,t){return this.insert(n,t)}indexOf(n){let t=Mg(this._lContainer);return t!==null?t.indexOf(n):-1}remove(n){let t=this._adjustIndex(n,-1),r=_o(this._lContainer,t);r&&(io(su(this._lContainer),t),tl(r[I],r))}detach(n){let t=this._adjustIndex(n,-1),r=_o(this._lContainer,t);return r&&io(su(this._lContainer),t)!=null?new Nn(r):null}_adjustIndex(n,t=0){return n??this.length+t}};function Mg(e){return e[so]}function su(e){return e[so]||(e[so]=[])}function dy(e,n){let t,r=n[e.index];return Tt(r)?t=r:(t=Qv(r,n,null,e),n[e.index]=t,df(n,t)),a0(t,n,e,r),new Ou(t,e,n)}function s0(e,n){let t=e[ae],r=t.createComment(""),i=St(n,e),o=t.parentNode(i);return Pa(t,o,r,t.nextSibling(i),!1),r}var a0=d0,l0=()=>!1;function c0(e,n,t){return l0(e,n,t)}function d0(e,n,t,r){if(e[Sn])return;let i;t.type&8?i=mt(r):i=s0(n,t),e[Sn]=i}var ku=class e{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new e(this.queryList)}setDirty(){this.queryList.setDirty()}},Fu=class e{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let t=n.queries;if(t!==null){let r=n.contentQueries!==null?n.contentQueries[0]:t.length,i=[];for(let o=0;o<r;o++){let s=t.getByIndex(o),a=this.queries[s.indexInDeclarationView];i.push(a.clone())}return new e(i)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let t=0;t<this.queries.length;t++)Ef(n,t).matches!==null&&this.queries[t].setDirty()}},Ha=class{flags;read;predicate;constructor(n,t,r=null){this.flags=t,this.read=r,typeof n=="string"?this.predicate=m0(n):this.predicate=n}},Pu=class e{queries;constructor(n=[]){this.queries=n}elementStart(n,t){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(n,t)}elementEnd(n){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(n)}embeddedTView(n){let t=null;for(let r=0;r<this.length;r++){let i=t!==null?t.length:0,o=this.getByIndex(r).embeddedTView(n,i);o&&(o.indexInDeclarationView=r,t!==null?t.push(o):t=[o])}return t!==null?new e(t):null}template(n,t){for(let r=0;r<this.queries.length;r++)this.queries[r].template(n,t)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Lu=class e{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,t=-1){this.metadata=n,this._declarationNodeIndex=t}elementStart(n,t){this.isApplyingToNode(t)&&this.matchTNode(n,t)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,t){this.elementStart(n,t)}embeddedTView(n,t){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,t),new e(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,r=n.parent;for(;r!==null&&r.type&8&&r.index!==t;)r=r.parent;return t===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(n,t){let r=this.metadata.predicate;if(Array.isArray(r))for(let i=0;i<r.length;i++){let o=r[i];this.matchTNodeWithReadOption(n,t,u0(t,o)),this.matchTNodeWithReadOption(n,t,Sa(t,n,o,!1,!1))}else r===ri?t.type&4&&this.matchTNodeWithReadOption(n,t,-1):this.matchTNodeWithReadOption(n,t,Sa(t,n,r,!1,!1))}matchTNodeWithReadOption(n,t,r){if(r!==null){let i=this.metadata.read;if(i!==null)if(i===q||i===kn||i===ri&&t.type&4)this.addMatch(t.index,-2);else{let o=Sa(t,n,i,!1,!1);o!==null&&this.addMatch(t.index,o)}else this.addMatch(t.index,r)}}addMatch(n,t){this.matches===null?this.matches=[n,t]:this.matches.push(n,t)}};function u0(e,n){let t=e.localNames;if(t!==null){for(let r=0;r<t.length;r+=2)if(t[r]===n)return t[r+1]}return null}function f0(e,n){return e.type&11?oi(e,n):e.type&4?il(e,n):null}function h0(e,n,t,r){return t===-1?f0(n,e):t===-2?p0(e,n,r):yo(e,e[I],t,n)}function p0(e,n,t){if(t===q)return oi(n,e);if(t===ri)return il(n,e);if(t===kn)return dy(n,e)}function uy(e,n,t,r){let i=n[zt].queries[r];if(i.matches===null){let o=e.data,s=t.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let c=s[l];if(c<0)a.push(null);else{let d=o[c];a.push(h0(n,d,s[l+1],t.metadata.read))}}i.matches=a}return i.matches}function Vu(e,n,t,r){let i=e.queries.getByIndex(t),o=i.matches;if(o!==null){let s=uy(e,n,i,t);for(let a=0;a<o.length;a+=2){let l=o[a];if(l>0)r.push(s[a/2]);else{let c=o[a+1],d=n[-l];for(let u=ge;u<d.length;u++){let h=d[u];h[Mn]===h[xe]&&Vu(h[I],h,c,r)}if(d[lr]!==null){let u=d[lr];for(let h=0;h<u.length;h++){let p=u[h];Vu(p[I],p,c,r)}}}}}return r}function Df(e,n){return e[zt].queries[n].queryList}function fy(e,n,t){let r=new Fa((t&4)===4);return Om(e,n,r,r.destroy),(n[zt]??=new Fu).queries.push(new ku(r))-1}function hy(e,n,t){let r=ve();return r.firstCreatePass&&(my(r,new Ha(e,n,t),-1),(n&2)===2&&(r.staticViewQueries=!0)),fy(r,O(),n)}function py(e,n,t,r){let i=ve();if(i.firstCreatePass){let o=Ve();my(i,new Ha(n,t,r),o.index),g0(i,e),(t&2)===2&&(i.staticContentQueries=!0)}return fy(i,O(),t)}function m0(e){return e.split(",").map(n=>n.trim())}function my(e,n,t){e.queries===null&&(e.queries=new Pu),e.queries.track(new Lu(n,t))}function g0(e,n){let t=e.contentQueries||(e.contentQueries=[]),r=t.length?t[t.length-1]:-1;n!==r&&t.push(e.queries.length-1,n)}function Ef(e,n){return e.queries.getByIndex(n)}function gy(e,n){let t=e[I],r=Ef(t,n);return r.crossesNgTemplate?Vu(t,e,n,[]):uy(t,e,r,n)}function vy(e,n,t){let r,i=Ui(()=>{r._dirtyCounter();let o=v0(r,e);if(n&&o===void 0)throw new b(-951,!1);return o});return r=i[we],r._dirtyCounter=Me(0),r._flatValue=void 0,i}function Cf(e){return vy(!0,!1,e)}function wf(e){return vy(!0,!0,e)}function yy(e,n){let t=e[we];t._lView=O(),t._queryIndex=n,t._queryList=Df(t._lView,n),t._queryList.onDirty(()=>t._dirtyCounter.update(r=>r+1))}function v0(e,n){let t=e._lView,r=e._queryIndex;if(t===void 0||r===void 0||t[T]&4)return n?void 0:$e;let i=Df(t,r),o=gy(t,r);return i.reset(o,Kg),n?i.first:i._changesDetected||e._flatValue===void 0?e._flatValue=i.toArray():e._flatValue}var mr=class{},sl=class{};var $a=class extends mr{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Ba(this);constructor(n,t,r,i=!0){super(),this.ngModuleType=n,this._parent=t;let o=vd(n);this._bootstrapComponents=Dv(o.bootstrap),this._r3Injector=Qd(n,t,[{provide:mr,useValue:this},{provide:To,useValue:this.componentFactoryResolver},...r],no(n),new Set(["environment"])),i&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},za=class extends sl{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new $a(this.moduleType,n,[])}};var Do=class extends mr{injector;componentFactoryResolver=new Ba(this);instance=null;constructor(n){super();let t=new nr([...n.providers,{provide:mr,useValue:this},{provide:To,useValue:this.componentFactoryResolver}],n.parent||Gr(),n.debugName,new Set(["environment"]));this.injector=t,n.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function So(e,n,t=null){return new Do({providers:e,parent:n,debugName:t,runEnvironmentInitializers:!0}).injector}var y0=(()=>{class e{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let r=Id(!1,t.type),i=r.length>0?So([r],this._injector,""):null;this.cachedInjectors.set(t,i)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=y({token:e,providedIn:"environment",factory:()=>new e(C(ue))})}return e})();function re(e){return wo(()=>{let n=by(e),t=P(v({},n),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection===Xu.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&e.dependencies||null,getStandaloneInjector:n.standalone?i=>i.get(y0).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||Nt.Emulated,styles:e.styles||$e,_:null,schemas:e.schemas||null,tView:null,id:""});n.standalone&&_r("NgStandalone"),_y(t);let r=e.dependencies;return t.directiveDefs=Tg(r,b0),t.pipeDefs=Tg(r,um),t.id=E0(t),t})}function b0(e){return rn(e)||yd(e)}function X(e){return wo(()=>({type:e.type,bootstrap:e.bootstrap||$e,declarations:e.declarations||$e,imports:e.imports||$e,exports:e.exports||$e,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function _0(e,n){if(e==null)return In;let t={};for(let r in e)if(e.hasOwnProperty(r)){let i=e[r],o,s,a,l;Array.isArray(i)?(a=i[0],o=i[1],s=i[2]??o,l=i[3]||null):(o=i,s=i,a=Ja.None,l=null),t[o]=[r,a,l],n[o]=s}return t}function D0(e){if(e==null)return In;let n={};for(let t in e)e.hasOwnProperty(t)&&(n[e[t]]=t);return n}function U(e){return wo(()=>{let n=by(e);return _y(n),n})}function by(e){let n={};return{type:e.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:n,inputConfig:e.inputs||In,exportAs:e.exportAs||null,standalone:e.standalone??!0,signals:e.signals===!0,selectors:e.selectors||$e,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:_0(e.inputs,n),outputs:D0(e.outputs),debugInfo:null}}function _y(e){e.features?.forEach(n=>n(e))}function Tg(e,n){return e?()=>{let t=typeof e=="function"?e():e,r=[];for(let i of t){let o=n(i);o!==null&&r.push(o)}return r}:null}function E0(e){let n=0,t=typeof e.consts=="function"?"":e.consts,r=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,t,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery];for(let o of r.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function C0(e){return Object.getPrototypeOf(e.prototype).constructor}function Qe(e){let n=C0(e.type),t=!0,r=[e];for(;n;){let i;if(Gt(e))i=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new b(903,!1);i=n.\u0275dir}if(i){if(t){r.push(i);let s=e;s.inputs=au(e.inputs),s.declaredInputs=au(e.declaredInputs),s.outputs=au(e.outputs);let a=i.hostBindings;a&&T0(e,a);let l=i.viewQuery,c=i.contentQueries;if(l&&x0(e,l),c&&M0(e,c),w0(e,i),dm(e.outputs,i.outputs),Gt(i)&&i.data.animation){let d=e.data;d.animation=(d.animation||[]).concat(i.data.animation)}}let o=i.features;if(o)for(let s=0;s<o.length;s++){let a=o[s];a&&a.ngInherit&&a(e),a===Qe&&(t=!1)}}n=Object.getPrototypeOf(n)}I0(r)}function w0(e,n){for(let t in n.inputs){if(!n.inputs.hasOwnProperty(t)||e.inputs.hasOwnProperty(t))continue;let r=n.inputs[t];r!==void 0&&(e.inputs[t]=r,e.declaredInputs[t]=n.declaredInputs[t])}}function I0(e){let n=0,t=null;for(let r=e.length-1;r>=0;r--){let i=e[r];i.hostVars=n+=i.hostVars,i.hostAttrs=ei(i.hostAttrs,t=ei(t,i.hostAttrs))}}function au(e){return e===In?{}:e===$e?[]:e}function x0(e,n){let t=e.viewQuery;t?e.viewQuery=(r,i)=>{n(r,i),t(r,i)}:e.viewQuery=n}function M0(e,n){let t=e.contentQueries;t?e.contentQueries=(r,i,o)=>{n(r,i,o),t(r,i,o)}:e.contentQueries=n}function T0(e,n){let t=e.hostBindings;t?e.hostBindings=(r,i)=>{n(r,i),t(r,i)}:e.hostBindings=n}function Dy(e,n,t,r,i,o,s,a){if(t.firstCreatePass){e.mergedAttrs=ei(e.mergedAttrs,e.attrs);let d=e.tView=lf(2,e,i,o,s,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,e),d.queries=t.queries.embeddedTView(e))}a&&(e.flags|=a),Xr(e,!1);let l=A0(t,n,e,r);_a()&&mf(t,n,l,e),ti(l,n);let c=Qv(l,n,l,e);n[r+De]=c,df(n,c),c0(c,e,n)}function S0(e,n,t,r,i,o,s,a,l,c,d){let u=t+De,h;return n.firstCreatePass?(h=ai(n,u,4,s||null,a||null),jd()&&ry(n,e,h,vt(n.consts,c),Vv),Bg(n,h)):h=n.data[u],Dy(h,e,n,t,r,i,o,l),ao(h)&&vf(n,e,h),c!=null&&rl(e,h,d),h}function Eo(e,n,t,r,i,o,s,a,l,c,d){let u=t+De,h;if(n.firstCreatePass){if(h=ai(n,u,4,s||null,a||null),c!=null){let p=vt(n.consts,c);h.localNames=[];for(let m=0;m<p.length;m+=2)h.localNames.push(p[m],-1)}}else h=n.data[u];return Dy(h,e,n,t,r,i,o,l),c!=null&&rl(e,h,d),h}function li(e,n,t,r,i,o,s,a){let l=O(),c=ve(),d=vt(c.consts,o);return S0(l,c,e,n,t,r,i,d,void 0,s,a),li}var A0=R0;function R0(e,n,t,r){return Da(!0),n[ae].createComment("")}var al=(()=>{class e{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"platform"})}return e})();function Ao(e){return typeof e=="function"&&e[we]!==void 0}function If(e){return Ao(e)&&typeof e.set=="function"}var xf=new g("");function Fn(e){return!!e&&typeof e.then=="function"}function Mf(e){return!!e&&typeof e.subscribe=="function"}var Ey=new g("");var Tf=(()=>{class e{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,r)=>{this.resolve=t,this.reject=r});appInits=f(Ey,{optional:!0})??[];injector=f(me);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let i of this.appInits){let o=Ne(this.injector,i);if(Fn(o))t.push(o);else if(Mf(o)){let s=new Promise((a,l)=>{o.subscribe({complete:a,error:l})});t.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{r()}).catch(i=>{this.reject(i)}),t.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ll=new g("");function Cy(){Sc(()=>{let e="";throw new b(600,e)})}function wy(e){return e.isBoundToModule}var N0=10;var Qt=(()=>{class e{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=f(bt);afterRenderManager=f(ff);zonelessEnabled=f(ho);rootEffectScheduler=f(Ca);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new j;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=f(un);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(B(t=>!t))}constructor(){f(Yt,{optional:!0})}whenStable(){let t;return new Promise(r=>{t=this.isStable.subscribe({next:i=>{i&&r()}})}).finally(()=>{t.unsubscribe()})}_injector=f(ue);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,r){return this.bootstrapImpl(t,r)}bootstrapImpl(t,r,i=me.NULL){return this._injector.get(F).run(()=>{J(W.BootstrapComponentStart);let s=t instanceof ol;if(!this._injector.get(Tf).done){let m="";throw new b(405,m)}let l;s?l=t:l=this._injector.get(To).resolveComponentFactory(t),this.componentTypes.push(l.componentType);let c=wy(l)?void 0:this._injector.get(mr),d=r||l.selector,u=l.create(i,[],d,c),h=u.location.nativeElement,p=u.injector.get(xf,null);return p?.registerApplication(h),u.onDestroy(()=>{this.detachView(u.hostView),vo(this.components,u),p?.unregisterApplication(h)}),this._loadComponent(u),J(W.BootstrapComponentEnd,u),u})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){J(W.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(el.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw J(W.ChangeDetectionEnd),new b(101,!1);let t=w(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,w(t),this.afterTick.next(),J(W.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(ct,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<N0;){J(W.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{J(W.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i}of this.allViews){if(!r&&!lo(i))continue;let o=r&&!this.zonelessEnabled?0:1;Wv(i,o),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>lo(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let r=t;this._views.push(r),r.attachToAppRef(this)}detachView(t){let r=t;vo(this._views,r),r.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(i){this.internalErrorHandler(i)}this.components.push(t),this._injector.get(ll,[]).forEach(i=>i(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>vo(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new b(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function vo(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function je(e,n,t,r){let i=O(),o=An();if(mn(i,o,n)){let s=ve(),a=uo();aI(a,i,e,n,t,r)}return je}var ju=class{destroy(n){}updateValue(n,t){}swap(n,t){let r=Math.min(n,t),i=Math.max(n,t),o=this.detach(i);if(i-r>1){let s=this.detach(r);this.attach(r,o),this.attach(i,s)}else this.attach(r,o)}move(n,t){this.attach(t,this.detach(n))}};function lu(e,n,t,r,i){return e===t&&Object.is(n,r)?1:Object.is(i(e,n),i(t,r))?-1:0}function O0(e,n,t,r){let i,o,s=0,a=e.length-1,l=void 0;if(Array.isArray(n)){w(r);let c=n.length-1;for(w(null);s<=a&&s<=c;){let d=e.at(s),u=n[s],h=lu(s,d,s,u,t);if(h!==0){h<0&&e.updateValue(s,u),s++;continue}let p=e.at(a),m=n[c],D=lu(a,p,c,m,t);if(D!==0){D<0&&e.updateValue(a,m),a--,c--;continue}let _=t(s,d),E=t(a,p),Y=t(s,u);if(Object.is(Y,E)){let Ae=t(c,m);Object.is(Ae,_)?(e.swap(s,a),e.updateValue(a,m),c--,a--):e.move(a,s),e.updateValue(s,u),s++;continue}if(i??=new Ga,o??=Ag(e,s,a,t),Bu(e,i,s,Y))e.updateValue(s,u),s++,a++;else if(o.has(Y))i.set(_,e.detach(s)),a--;else{let Ae=e.create(s,n[s]);e.attach(s,Ae),s++,a++}}for(;s<=c;)Sg(e,i,t,s,n[s]),s++}else if(n!=null){w(r);let c=n[Symbol.iterator]();w(null);let d=c.next();for(;!d.done&&s<=a;){let u=e.at(s),h=d.value,p=lu(s,u,s,h,t);if(p!==0)p<0&&e.updateValue(s,h),s++,d=c.next();else{i??=new Ga,o??=Ag(e,s,a,t);let m=t(s,h);if(Bu(e,i,s,m))e.updateValue(s,h),s++,a++,d=c.next();else if(!o.has(m))e.attach(s,e.create(s,h)),s++,a++,d=c.next();else{let D=t(s,u);i.set(D,e.detach(s)),a--}}}for(;!d.done;)Sg(e,i,t,e.length,d.value),d=c.next()}for(;s<=a;)e.destroy(e.detach(a--));i?.forEach(c=>{e.destroy(c)})}function Bu(e,n,t,r){return n!==void 0&&n.has(r)?(e.attach(t,n.get(r)),n.delete(r),!0):!1}function Sg(e,n,t,r,i){if(Bu(e,n,r,t(r,i)))e.updateValue(r,i);else{let o=e.create(r,i);e.attach(r,o)}}function Ag(e,n,t,r){let i=new Set;for(let o=n;o<=t;o++)i.add(r(o,e.at(o)));return i}var Ga=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let t=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(t)?(this.kvMap.set(n,this._vMap.get(t)),this._vMap.delete(t)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,t){if(this.kvMap.has(n)){let r=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let i=this._vMap;for(;i.has(r);)r=i.get(r);i.set(r,t)}else this.kvMap.set(n,t)}forEach(n){for(let[t,r]of this.kvMap)if(n(r,t),this._vMap!==void 0){let i=this._vMap;for(;i.has(r);)r=i.get(r),n(r,t)}}};function ie(e,n,t,r,i,o,s,a){_r("NgControlFlow");let l=O(),c=ve(),d=vt(c.consts,o);return Eo(l,c,e,n,t,r,i,d,256,s,a),Sf}function Sf(e,n,t,r,i,o,s,a){_r("NgControlFlow");let l=O(),c=ve(),d=vt(c.consts,o);return Eo(l,c,e,n,t,r,i,d,512,s,a),Sf}function oe(e,n){_r("NgControlFlow");let t=O(),r=An(),i=t[r]!==_t?t[r]:-1,o=i!==-1?Wa(t,De+i):void 0,s=0;if(mn(t,r,e)){let a=w(null);try{if(o!==void 0&&Kv(o,s),e!==-1){let l=De+e,c=Wa(t,l),d=zu(t[I],l),u=ey(c,d,t),h=xo(t,d,n,{dehydratedView:u});Mo(c,h,s,ni(d,u))}}finally{w(a)}}else if(o!==void 0){let a=Xv(o,s);a!==void 0&&(a[_e]=n)}}var Uu=class{lContainer;$implicit;$index;constructor(n,t,r){this.lContainer=n,this.$implicit=t,this.$index=r}get $count(){return this.lContainer.length-ge}};function Ro(e){return e}function Af(e,n){return n}var Hu=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,t,r){this.hasEmptyBlock=n,this.trackByFn=t,this.liveCollection=r}};function ci(e,n,t,r,i,o,s,a,l,c,d,u,h){_r("NgControlFlow");let p=O(),m=ve(),D=l!==void 0,_=O(),E=a?s.bind(_[Ze][_e]):s,Y=new Hu(D,E);_[De+e]=Y,Eo(p,m,e+1,n,t,r,i,vt(m.consts,o),256),D&&Eo(p,m,e+2,l,c,d,u,vt(m.consts,h),512)}var $u=class extends ju{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,t,r){super(),this.lContainer=n,this.hostLView=t,this.templateTNode=r}get length(){return this.lContainer.length-ge}at(n){return this.getLView(n)[_e].$implicit}attach(n,t){let r=t[ir];this.needsIndexUpdate||=n!==this.length,Mo(this.lContainer,t,n,ni(this.templateTNode,r)),k0(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,F0(this.lContainer,n),P0(this.lContainer,n)}create(n,t){let r=Va(this.lContainer,this.templateTNode.tView.ssrId);return xo(this.hostLView,this.templateTNode,new Uu(this.lContainer,t,n),{dehydratedView:r})}destroy(n){tl(n[I],n)}updateValue(n,t){this.getLView(n)[_e].$implicit=t}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[_e].$index=n}getLView(n){return L0(this.lContainer,n)}};function di(e){let n=w(null),t=dn();try{let r=O(),i=r[I],o=r[t],s=t+1,a=Wa(r,s);if(o.liveCollection===void 0){let c=zu(i,s);o.liveCollection=new $u(a,r,c)}else o.liveCollection.reset();let l=o.liveCollection;if(O0(l,e,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=An(),d=l.length===0;if(mn(r,c,d)){let u=t+2,h=Wa(r,u);if(d){let p=zu(i,u),m=ey(h,p,r),D=xo(r,p,void 0,{dehydratedView:m});Mo(h,D,0,ni(p,m))}else i.firstUpdatePass&&RI(h),Kv(h,0)}}}finally{w(n)}}function Wa(e,n){return e[n]}function k0(e,n){if(e.length<=ge)return;let t=ge+n,r=e[t],i=r?r[Tn]:void 0;if(r&&i&&i.detachedLeaveAnimationFns&&i.detachedLeaveAnimationFns.length>0){let o=r[sn];jw(o,i),hr.delete(r[an]),i.detachedLeaveAnimationFns=void 0}}function F0(e,n){if(e.length<=ge)return;let t=ge+n,r=e[t],i=r?r[Tn]:void 0;i&&i.leave&&i.leave.size>0&&(i.detachedLeaveAnimationFns=[])}function P0(e,n){return _o(e,n)}function L0(e,n){return Xv(e,n)}function zu(e,n){return ha(e,n)}function Ee(e,n,t){let r=O(),i=An();if(mn(r,i,n)){let o=ve(),s=uo();Pv(s,r,e,n,r[ae],t)}return Ee}function Gu(e,n,t,r,i){yf(n,e,t,i?"class":"style",r)}function x(e,n,t,r){let i=O(),o=i[I],s=e+De,a=o.firstCreatePass?oy(s,i,2,n,Vv,jd(),t,r):o.data[s];if(cn(a)){let l=i[$t].tracingService;if(l&&l.componentCreate){let c=o.data[a.directiveStart+a.componentOffset];return l.componentCreate(ly(c),()=>(Rg(e,n,i,a,r),x))}}return Rg(e,n,i,a,r),x}function Rg(e,n,t,r,i){if(jv(r,t,e,n,Iy),ao(r)){let o=t[I];vf(o,t,r),dv(o,r,t)}i!=null&&rl(t,r)}function A(){let e=ve(),n=Ve(),t=Bv(n);return e.firstCreatePass&&sy(e,t),Ud(t)&&Hd(),Vd(),t.classesWithoutHost!=null&&RC(t)&&Gu(e,t,O(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&NC(t)&&Gu(e,t,O(),t.stylesWithoutHost,!1),A}function ke(e,n,t,r){return x(e,n,t,r),A(),ke}function dt(e,n,t,r){let i=O(),o=i[I],s=e+De,a=o.firstCreatePass?GI(s,o,2,n,t,r):o.data[s];return jv(a,i,e,n,Iy),r!=null&&rl(i,a),dt}function ut(){let e=Ve(),n=Bv(e);return Ud(n)&&Hd(),Vd(),ut}function ze(e,n,t,r){return dt(e,n,t,r),ut(),ze}var Iy=(e,n,t,r,i)=>(Da(!0),vv(n[ae],r,Zm()));function Rf(){return O()}function ui(e,n,t){let r=O(),i=An();if(mn(r,i,n)){let o=ve(),s=uo();Lv(s,r,e,n,r[ae],t)}return ui}var No="en-US";var V0=No;function xy(e){typeof e=="string"&&(V0=e.toLowerCase().replace(/_/g,"-"))}function Te(e,n,t){let r=O(),i=ve(),o=Ve();return My(i,r,r[ae],o,e,n,t),Te}function My(e,n,t,r,i,o,s){let a=!0,l=null;if((r.type&3||s)&&(l??=ou(r,n,o),ZI(r,e,n,s,t,i,o,l)&&(a=!1)),a){let c=r.outputs?.[i],d=r.hostDirectiveOutputs?.[i];if(d&&d.length)for(let u=0;u<d.length;u+=2){let h=d[u],p=d[u+1];l??=ou(r,n,o),Ig(r,n,h,p,i,l)}if(c&&c.length)for(let u of c)l??=ou(r,n,o),Ig(r,n,u,i,i,l)}}function ce(e=1){return qm(e)}function j0(e,n){let t=null,r=xw(e);for(let i=0;i<n.length;i++){let o=n[i];if(o==="*"){t=i;continue}if(r===null?Cv(e,o,!0):Sw(r,o))return i}return t}function Xe(e){let n=O()[Ze][qe];if(!n.projection){let t=e?e.length:1,r=n.projection=vm(t,null),i=r.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=e?j0(o,e):0;s!==null&&(i[s]?i[s].projectionNext=o:r[s]=o,i[s]=o)}o=o.next}}}function se(e,n=0,t,r,i,o){let s=O(),a=ve(),l=r?e+1:null;l!==null&&Eo(s,a,l,r,i,o,null,t);let c=ai(a,De+e,16,null,t||null);c.projection===null&&(c.projection=n),Gd();let u=!s[ir]||Bd();s[Ze][qe].projection[c.projection]===null&&l!==null?B0(s,a,l):u&&!Qa(c)&&Qw(a,s,c)}function B0(e,n,t){let r=De+t,i=n.data[r],o=e[r],s=Va(o,i.tView.ssrId),a=xo(e,i,void 0,{dehydratedView:s});Mo(o,a,0,ni(i,s))}function fi(e,n,t,r){return py(e,n,t,r),fi}function Pn(e,n,t){return hy(e,n,t),Pn}function fe(e){let n=O(),t=ve(),r=va();co(r+1);let i=Ef(t,r);if(e.dirty&&Sm(n)===((i.metadata.flags&2)===2)){if(i.matches===null)e.reset([]);else{let o=gy(n,r);e.reset(o,Kg),e.notifyOnChanges()}return!0}return!1}function he(){return Df(O(),va())}function cl(e,n,t,r,i){return yy(n,py(e,t,r,i)),cl}function dl(e,n,t,r){return yy(e,hy(n,t,r)),dl}function ul(e=1){co(va()+e)}function fl(e){let n=Lm();return Tm(n,De+e)}function xa(e,n){return e<<17|n<<2}function gr(e){return e>>17&32767}function U0(e){return(e&2)==2}function H0(e,n){return e&131071|n<<17}function Wu(e){return e|2}function ii(e){return(e&131068)>>2}function cu(e,n){return e&-131069|n<<2}function $0(e){return(e&1)===1}function qu(e){return e|1}function z0(e,n,t,r,i,o){let s=o?n.classBindings:n.styleBindings,a=gr(s),l=ii(s);e[r]=t;let c=!1,d;if(Array.isArray(t)){let u=t;d=u[1],(d===null||zr(u,d)>0)&&(c=!0)}else d=t;if(i)if(l!==0){let h=gr(e[a+1]);e[r+1]=xa(h,a),h!==0&&(e[h+1]=cu(e[h+1],r)),e[a+1]=H0(e[a+1],r)}else e[r+1]=xa(a,0),a!==0&&(e[a+1]=cu(e[a+1],r)),a=r;else e[r+1]=xa(l,0),a===0?a=r:e[l+1]=cu(e[l+1],r),l=r;c&&(e[r+1]=Wu(e[r+1])),Ng(e,d,r,!0),Ng(e,d,r,!1),G0(n,d,e,r,o),s=xa(a,l),o?n.classBindings=s:n.styleBindings=s}function G0(e,n,t,r,i){let o=i?e.residualClasses:e.residualStyles;o!=null&&typeof n=="string"&&zr(o,n)>=0&&(t[r+1]=qu(t[r+1]))}function Ng(e,n,t,r){let i=e[t+1],o=n===null,s=r?gr(i):ii(i),a=!1;for(;s!==0&&(a===!1||o);){let l=e[s],c=e[s+1];W0(l,n)&&(a=!0,e[s+1]=r?qu(c):Wu(c)),s=r?gr(c):ii(c)}a&&(e[t+1]=r?Wu(i):qu(i))}function W0(e,n){return e===null||n==null||(Array.isArray(e)?e[1]:e)===n?!0:Array.isArray(e)&&typeof n=="string"?zr(e,n)>=0:!1}var Rt={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function q0(e){return e.substring(Rt.key,Rt.keyEnd)}function Z0(e){return Y0(e),Ty(e,Sy(e,0,Rt.textEnd))}function Ty(e,n){let t=Rt.textEnd;return t===n?-1:(n=Rt.keyEnd=Q0(e,Rt.key=n,t),Sy(e,n,t))}function Y0(e){Rt.key=0,Rt.keyEnd=0,Rt.value=0,Rt.valueEnd=0,Rt.textEnd=e.length}function Sy(e,n,t){for(;n<t&&e.charCodeAt(n)<=32;)n++;return n}function Q0(e,n,t){for(;n<t&&e.charCodeAt(n)>32;)n++;return n}function Dr(e,n,t){return Ay(e,n,t,!1),Dr}function ne(e,n){return Ay(e,n,null,!0),ne}function Xt(e){K0(ix,X0,e,!0)}function X0(e,n){for(let t=Z0(n);t>=0;t=Ty(n,t))da(e,q0(n),!0)}function Ay(e,n,t,r){let i=O(),o=ve(),s=qd(2);if(o.firstUpdatePass&&Ny(o,e,s,r),n!==_t&&mn(i,s,n)){let a=o.data[dn()];Oy(o,a,i,i[ae],e,i[s+1]=sx(n,t),r,s)}}function K0(e,n,t,r){let i=ve(),o=qd(2);i.firstUpdatePass&&Ny(i,null,o,r);let s=O();if(t!==_t&&mn(s,o,t)){let a=i.data[dn()];if(ky(a,r)&&!Ry(i,o)){let l=r?a.classesWithoutHost:a.stylesWithoutHost;l!==null&&(t=oa(l,t||"")),Gu(i,a,s,t,r)}else ox(i,a,s,s[ae],s[o+1],s[o+1]=rx(e,n,t),r,o)}}function Ry(e,n){return n>=e.expandoStartIndex}function Ny(e,n,t,r){let i=e.data;if(i[t+1]===null){let o=i[dn()],s=Ry(e,t);ky(o,r)&&n===null&&!s&&(n=!1),n=J0(i,o,n,r),z0(i,o,n,t,s,r)}}function J0(e,n,t,r){let i=$m(e),o=r?n.residualClasses:n.residualStyles;if(i===null)(r?n.classBindings:n.styleBindings)===0&&(t=du(null,e,n,t,r),t=Co(t,n.attrs,r),o=null);else{let s=n.directiveStylingLast;if(s===-1||e[s]!==i)if(t=du(i,e,n,t,r),o===null){let l=ex(e,n,r);l!==void 0&&Array.isArray(l)&&(l=du(null,e,n,l[1],r),l=Co(l,n.attrs,r),tx(e,n,r,l))}else o=nx(e,n,r)}return o!==void 0&&(r?n.residualClasses=o:n.residualStyles=o),t}function ex(e,n,t){let r=t?n.classBindings:n.styleBindings;if(ii(r)!==0)return e[gr(r)]}function tx(e,n,t,r){let i=t?n.classBindings:n.styleBindings;e[gr(i)]=r}function nx(e,n,t){let r,i=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<i;o++){let s=e[o].hostAttrs;r=Co(r,s,t)}return Co(r,n.attrs,t)}function du(e,n,t,r,i){let o=null,s=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<s&&(o=n[a],r=Co(r,o.hostAttrs,i),o!==e);)a++;return e!==null&&(t.directiveStylingLast=a),r}function Co(e,n,t){let r=t?1:2,i=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?i=s:i===r&&(Array.isArray(e)||(e=e===void 0?[]:["",e]),da(e,s,t?!0:n[++o]))}return e===void 0?null:e}function rx(e,n,t){if(t==null||t==="")return $e;let r=[],i=hn(t);if(Array.isArray(i))for(let o=0;o<i.length;o++)e(r,i[o],!0);else if(i instanceof Set)for(let o of i)e(r,o,!0);else if(typeof i=="object")for(let o in i)i.hasOwnProperty(o)&&e(r,o,i[o]);else typeof i=="string"&&n(r,i);return r}function ix(e,n,t){let r=String(n);r!==""&&!r.includes(" ")&&da(e,r,t)}function ox(e,n,t,r,i,o,s,a){i===_t&&(i=$e);let l=0,c=0,d=0<i.length?i[0]:null,u=0<o.length?o[0]:null;for(;d!==null||u!==null;){let h=l<i.length?i[l+1]:void 0,p=c<o.length?o[c+1]:void 0,m=null,D;d===u?(l+=2,c+=2,h!==p&&(m=u,D=p)):u===null||d!==null&&d<u?(l+=2,m=d):(c+=2,m=u,D=p),m!==null&&Oy(e,n,t,r,m,D,s,a),d=l<i.length?i[l]:null,u=c<o.length?o[c]:null}}function Oy(e,n,t,r,i,o,s,a){if(!(n.type&3))return;let l=e.data,c=l[a+1],d=$0(c)?Og(l,n,t,i,ii(c),s):void 0;if(!qa(d)){qa(o)||U0(c)&&(o=Og(l,null,t,i,a,s));let u=Nd(dn(),t);Kw(r,s,u,i,o)}}function Og(e,n,t,r,i,o){let s=n===null,a;for(;i>0;){let l=e[i],c=Array.isArray(l),d=c?l[1]:l,u=d===null,h=t[i+1];h===_t&&(h=u?$e:void 0);let p=u?ua(h,r):d===r?h:void 0;if(c&&!qa(p)&&(p=ua(l,r)),qa(p)&&(a=p,s))return a;let m=e[i+1];i=s?gr(m):ii(m)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(a=ua(l,r))}return a}function qa(e){return e!==void 0}function sx(e,n){return e==null||e===""||(typeof n=="string"?e=e+n:typeof e=="object"&&(e=no(hn(e)))),e}function ky(e,n){return(e.flags&(n?8:16))!==0}function pe(e,n=""){let t=O(),r=ve(),i=e+De,o=r.firstCreatePass?ai(r,i,1,n,null):r.data[i],s=ax(r,t,o,n);t[i]=s,_a()&&mf(r,t,s,o),Xr(o,!1)}var ax=(e,n,t,r)=>(Da(!0),vw(n[ae],r));function lx(e,n,t,r=""){return mn(e,An(),t)?n+bd(t)+r:_t}function Ot(e){return hi("",e),Ot}function hi(e,n,t){let r=O(),i=lx(r,e,n,t);return i!==_t&&cx(r,dn(),i),hi}function cx(e,n,t){let r=Nd(n,e);yw(e[ae],r,t)}function hl(e,n,t){If(n)&&(n=n());let r=O(),i=An();if(mn(r,i,n)){let o=ve(),s=uo();Pv(s,r,e,n,r[ae],t)}return hl}function Nf(e,n){let t=If(e);return t&&e.set(n),t}function pl(e,n){let t=O(),r=ve(),i=Ve();return My(r,t,t[ae],i,e,n),pl}function kg(e,n,t){let r=ve();r.firstCreatePass&&Fy(n,r.data,r.blueprint,Gt(e),t)}function Fy(e,n,t,r,i){if(e=Le(e),Array.isArray(e))for(let o=0;o<e.length;o++)Fy(e[o],n,t,r,i);else{let o=ve(),s=O(),a=Ve(),l=tr(e)?e:Le(e.provide),c=Md(e),d=a.providerIndexes&1048575,u=a.directiveStart,h=a.providerIndexes>>20;if(tr(e)||!e.multi){let p=new fr(c,i,te,null),m=fu(l,n,i?d:d+h,u);m===-1?(pu(ka(a,s),o,l),uu(o,e,n.length),n.push(l),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),t.push(p),s.push(p)):(t[m]=p,s[m]=p)}else{let p=fu(l,n,d+h,u),m=fu(l,n,d,d+h),D=p>=0&&t[p],_=m>=0&&t[m];if(i&&!_||!i&&!D){pu(ka(a,s),o,l);let E=fx(i?ux:dx,t.length,i,r,c,e);!i&&_&&(t[m].providerFactory=E),uu(o,e,n.length,0),n.push(l),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),t.push(E),s.push(E)}else{let E=Py(t[i?m:p],c,!i&&r);uu(o,e,p>-1?p:m,E)}!i&&r&&_&&t[m].componentProviders++}}}function uu(e,n,t,r){let i=tr(n),o=Cm(n);if(i||o){let l=(o?Le(n.useClass):n).prototype.ngOnDestroy;if(l){let c=e.destroyHooks||(e.destroyHooks=[]);if(!i&&n.multi){let d=c.indexOf(t);d===-1?c.push(t,[r,l]):c[d+1].push(r,l)}else c.push(t,l)}}}function Py(e,n,t){return t&&e.componentProviders++,e.multi.push(n)-1}function fu(e,n,t,r){for(let i=t;i<r;i++)if(n[i]===e)return i;return-1}function dx(e,n,t,r,i){return Zu(this.multi,[])}function ux(e,n,t,r,i){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=yo(r,r[I],this.providerFactory.index,i);s=l.slice(0,a),Zu(o,s);for(let c=a;c<l.length;c++)s.push(l[c])}else s=[],Zu(o,s);return s}function Zu(e,n){for(let t=0;t<e.length;t++){let r=e[t];n.push(r())}return n}function fx(e,n,t,r,i,o){let s=new fr(e,t,te,null);return s.multi=[],s.index=n,s.componentProviders=0,Py(s,i,r&&!t),s}function Ke(e,n){return t=>{t.providersResolver=(r,i)=>kg(r,i?i(e):e,!1),n&&(t.viewProvidersResolver=(r,i)=>kg(r,i?i(n):n,!0))}}function Of(e,n){let t=Vm()+e,r=O();return r[t]===_t?WI(r,t,n()):qI(r,t)}function kf(e,n){return il(e,n)}var Za=class{ngModuleFactory;componentFactories;constructor(n,t){this.ngModuleFactory=n,this.componentFactories=t}},Ff=(()=>{class e{compileModuleSync(t){return new za(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let r=this.compileModuleSync(t),i=vd(t),o=Dv(i.declarations).reduce((s,a)=>{let l=rn(a);return l&&s.push(new pr(l)),s},[]);return new Za(r,o)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ly=(()=>{class e{applicationErrorHandler=f(bt);appRef=f(Qt);taskService=f(un);ngZone=f(F);zonelessEnabled=f(ho);tracing=f(Yt,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ye;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(eo):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(f(tu,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let t=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(t);return}this.switchToMicrotaskScheduler(),this.taskService.remove(t)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let t=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})})}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?Km:Xd;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(eo+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(t),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Vy(){return[{provide:Ht,useExisting:Ly},{provide:F,useClass:to},{provide:ho,useValue:!0}]}function hx(){return typeof $localize<"u"&&$localize.locale||No}var ml=new g("",{factory:()=>f(ml,{optional:!0,skipSelf:!0})||hx()});function Fe(e){return om(e)}function Je(e,n){return Ui(e,n?.equal)}var zy=Symbol("InputSignalNode#UNSET"),Rx=P(v({},Hi),{transformFn:void 0,applyValueToInputSignal(e,n){kr(e,n)}});function Gy(e,n){let t=Object.create(Rx);t.value=e,t.transformFn=n?.transform;function r(){if(Gn(t),t.value===zy){let i=null;throw new b(-950,i)}return t.value}return r[we]=t,r}var ko=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Qu(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function jy(e,n){return Gy(e,n)}function Nx(e){return Gy(zy,e)}var Wy=(jy.required=Nx,jy);function By(e,n){return Cf(n)}function Ox(e,n){return wf(n)}var Fo=(By.required=Ox,By);function Uy(e,n){return Cf(n)}function kx(e,n){return wf(n)}var qy=(Uy.required=kx,Uy);var Lf=new g(""),Fx=new g("");function Oo(e){return!e.moduleRef}function Px(e){let n=Oo(e)?e.r3Injector:e.moduleRef.injector,t=n.get(F);return t.run(()=>{Oo(e)?e.r3Injector.resolveInjectorInitializers():e.moduleRef.resolveInjectorInitializers();let r=n.get(bt),i;if(t.runOutsideAngular(()=>{i=t.onError.subscribe({next:r})}),Oo(e)){let o=()=>n.destroy(),s=e.platformInjector.get(Lf);s.add(o),n.onDestroy(()=>{i.unsubscribe(),s.delete(o)})}else{let o=()=>e.moduleRef.destroy(),s=e.platformInjector.get(Lf);s.add(o),e.moduleRef.onDestroy(()=>{vo(e.allPlatformModules,e.moduleRef),i.unsubscribe(),s.delete(o)})}return Vx(r,t,()=>{let o=n.get(un),s=o.add(),a=n.get(Tf);return a.runInitializers(),a.donePromise.then(()=>{let l=n.get(ml,No);if(xy(l||No),!n.get(Fx,!0))return Oo(e)?n.get(Qt):(e.allPlatformModules.push(e.moduleRef),e.moduleRef);if(Oo(e)){let d=n.get(Qt);return e.rootComponent!==void 0&&d.bootstrap(e.rootComponent),d}else return Lx?.(e.moduleRef,e.allPlatformModules),e.moduleRef}).finally(()=>{o.remove(s)})})})}var Lx;function Vx(e,n,t){try{let r=t();return Fn(r)?r.catch(i=>{throw n.runOutsideAngular(()=>e(i)),i}):r}catch(r){throw n.runOutsideAngular(()=>e(r)),r}}var gl=null;function jx(e=[],n){return me.create({name:n,providers:[{provide:oo,useValue:"platform"},{provide:Lf,useValue:new Set([()=>gl=null])},...e]})}function Bx(e=[]){if(gl)return gl;let n=jx(e);return gl=n,Cy(),Ux(n),n}function Ux(e){let n=e.get(Ya,null);Ne(e,()=>{n?.forEach(t=>t())})}var Hx=1e4;var S$=Hx-1e3;var ft=(()=>{class e{static __NG_ELEMENT_ID__=$x}return e})();function $x(e){return zx(Ve(),O(),(e&16)===16)}function zx(e,n,t){if(cn(e)&&!t){let r=gt(e.index,n);return new Nn(r,r)}else if(e.type&175){let r=n[Ze];return new Nn(r,n)}return null}function Zy(e){let{rootComponent:n,appProviders:t,platformProviders:r,platformRef:i}=e;J(W.BootstrapApplicationStart);try{let o=i?.injector??Bx(r),s=[Vy(),eg,...t||[]],a=new Do({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return Px({r3Injector:a.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{J(W.BootstrapApplicationEnd)}}function Se(e){return typeof e=="boolean"?e:e!=null&&e!=="false"}function it(e,n=NaN){return!isNaN(parseFloat(e))&&!isNaN(Number(e))?Number(e):n}var Pf=Symbol("NOT_SET"),Yy=new Set,Gx=P(v({},Hi),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Pf,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(e){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Pf&&!Nr(this))return this.signal;try{for(let i of this.cleanup??Yy)i()}finally{this.cleanup?.clear()}let n=[];e!==void 0&&n.push(e),n.push(this.registerCleanupFn);let t=_n(this),r;try{r=this.userFn.apply(null,n)}finally{Wn(this,t)}return(this.value===Pf||!this.equal(this.value,r))&&(this.value=r,this.version++),this.signal}}),Vf=class extends La{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,t,r,i,o,s=null){super(n,[void 0,void 0,void 0,void 0],r,!1,o.get(yt),s),this.scheduler=i;for(let a of hf){let l=t[a];if(l===void 0)continue;let c=Object.create(Gx);c.sequence=this,c.phase=a,c.userFn=l,c.dirty=!0,c.signal=()=>(Gn(c),c.value),c.signal[we]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[a]=c,this.hooks[a]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let t of n.cleanup??Yy)t()}finally{Dn(n)}}};function vl(e,n){let t=n?.injector??f(me),r=t.get(Ht),i=t.get(ff),o=t.get(Yt,null,{optional:!0});i.impl??=t.get(Mv);let s=e;typeof s=="function"&&(s={mixedReadWrite:e});let a=t.get(fo,null,{optional:!0}),l=new Vf(i.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,r,t,o?.snapshot(null));return i.impl.register(l),l}function Qy(e,n){let t=rn(e),r=n.elementInjector||Gr();return new pr(t).create(r,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var Xy=null;function Dt(){return Xy}function Bf(e){Xy??=e}var Po=class{},pi=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:()=>f(Ky),providedIn:"platform"})}return e})();var Ky=(()=>{class e extends pi{_location;_history;_doc=f(z);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Dt().getBaseHref(this._doc)}onPopState(t){let r=Dt().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",t,!1),()=>r.removeEventListener("popstate",t)}onHashChange(t){let r=Dt().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",t,!1),()=>r.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,r,i){this._history.pushState(t,r,i)}replaceState(t,r,i){this._history.replaceState(t,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function tb(e,n){return e?n?e.endsWith("/")?n.startsWith("/")?e+n.slice(1):e+n:n.startsWith("/")?e+n:`${e}/${n}`:e:n}function Jy(e){let n=e.search(/#|\?|$/);return e[n-1]==="/"?e.slice(0,n-1)+e.slice(n):e}function Ln(e){return e&&e[0]!=="?"?`?${e}`:e}var yl=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:()=>f(qx),providedIn:"root"})}return e})(),Wx=new g(""),qx=(()=>{class e extends yl{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,r){super(),this._platformLocation=t,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??f(z).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return tb(this._baseHref,t)}path(t=!1){let r=this._platformLocation.pathname+Ln(this._platformLocation.search),i=this._platformLocation.hash;return i&&t?`${r}${i}`:r}pushState(t,r,i,o){let s=this.prepareExternalUrl(i+Ln(o));this._platformLocation.pushState(t,r,s)}replaceState(t,r,i,o){let s=this.prepareExternalUrl(i+Ln(o));this._platformLocation.replaceState(t,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(r){return new(r||e)(C(pi),C(Wx,8))};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var mi=(()=>{class e{_subject=new j;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let r=this._locationStrategy.getBaseHref();this._basePath=Qx(Jy(eb(r))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,r=""){return this.path()==this.normalize(t+Ln(r))}normalize(t){return e.stripTrailingSlash(Yx(this._basePath,eb(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,r="",i=null){this._locationStrategy.pushState(i,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Ln(r)),i)}replaceState(t,r="",i=null){this._locationStrategy.replaceState(i,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Ln(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",r){this._urlChangeListeners.forEach(i=>i(t,r))}subscribe(t,r,i){return this._subject.subscribe({next:t,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=Ln;static joinWithSlash=tb;static stripTrailingSlash=Jy;static \u0275fac=function(r){return new(r||e)(C(yl))};static \u0275prov=y({token:e,factory:()=>Zx(),providedIn:"root"})}return e})();function Zx(){return new mi(C(yl))}function Yx(e,n){if(!e||!n.startsWith(e))return n;let t=n.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:n}function eb(e){return e.replace(/\/index.html$/,"")}function Qx(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}var Uf=/\s+/,nb=[],Hf=(()=>{class e{_ngEl;_renderer;initialClasses=nb;rawClass;stateMap=new Map;constructor(t,r){this._ngEl=t,this._renderer=r}set klass(t){this.initialClasses=t!=null?t.trim().split(Uf):nb}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(Uf):t}ngDoCheck(){for(let r of this.initialClasses)this._updateState(r,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let r of t)this._updateState(r,!0);else if(t!=null)for(let r of Object.keys(t))this._updateState(r,!!t[r]);this._applyStateDiff()}_updateState(t,r){let i=this.stateMap.get(t);i!==void 0?(i.enabled!==r&&(i.changed=!0,i.enabled=r),i.touched=!0):this.stateMap.set(t,{enabled:r,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let r=t[0],i=t[1];i.changed?(this._toggleClass(r,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(r,!1),this.stateMap.delete(r)),i.touched=!1}}_toggleClass(t,r){t=t.trim(),t.length>0&&t.split(Uf).forEach(i=>{r?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(r){return new(r||e)(te(q),te(Oe))};static \u0275dir=U({type:e,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return e})();var $f=(()=>{class e{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=f(me);constructor(t){this._viewContainerRef=t}ngOnChanges(t){if(this._shouldRecreateView(t)){let r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=r.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,r,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,r,i):!1,get:(t,r,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,r,i)}})}static \u0275fac=function(r){return new(r||e)(te(kn))};static \u0275dir=U({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Zt]})}return e})();var bl=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=X({type:e});static \u0275inj=Z({})}return e})();function Lo(e,n){n=encodeURIComponent(n);for(let t of e.split(";")){let r=t.indexOf("="),[i,o]=r==-1?[t,""]:[t.slice(0,r),t.slice(r+1)];if(i.trim()===n)return decodeURIComponent(o)}return null}var Er=class{};var zf="browser";function rb(e){return e===zf}var Vo=class{_doc;constructor(n){this._doc=n}manager},_l=(()=>{class e extends Vo{constructor(t){super(t)}supports(t){return!0}addEventListener(t,r,i,o){return t.addEventListener(r,i,o),()=>this.removeEventListener(t,r,i,o)}removeEventListener(t,r,i,o){return t.removeEventListener(r,i,o)}static \u0275fac=function(r){return new(r||e)(C(z))};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),Cl=new g(""),Zf=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,r){this._zone=r,t.forEach(s=>{s.manager=this});let i=t.filter(s=>!(s instanceof _l));this._plugins=i.slice().reverse();let o=t.find(s=>s instanceof _l);o&&this._plugins.push(o)}addEventListener(t,r,i,o){return this._findPluginFor(r).addEventListener(t,r,i,o)}getZone(){return this._zone}_findPluginFor(t){let r=this._eventNameToPlugin.get(t);if(r)return r;if(r=this._plugins.find(o=>o.supports(t)),!r)throw new b(5101,!1);return this._eventNameToPlugin.set(t,r),r}static \u0275fac=function(r){return new(r||e)(C(Cl),C(F))};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),Gf="ng-app-id";function ib(e){for(let n of e)n.remove()}function ob(e,n){let t=n.createElement("style");return t.textContent=e,t}function Jx(e,n,t,r){let i=e.head?.querySelectorAll(`style[${Gf}="${n}"],link[${Gf}="${n}"]`);if(i)for(let o of i)o.removeAttribute(Gf),o instanceof HTMLLinkElement?r.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]})}function qf(e,n){let t=n.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var Yf=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,r,i,o={}){this.doc=t,this.appId=r,this.nonce=i,Jx(t,r,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,r){for(let i of t)this.addUsage(i,this.inline,ob);r?.forEach(i=>this.addUsage(i,this.external,qf))}removeStyles(t,r){for(let i of t)this.removeUsage(i,this.inline);r?.forEach(i=>this.removeUsage(i,this.external))}addUsage(t,r,i){let o=r.get(t);o?o.usage++:r.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,i(t,this.doc)))})}removeUsage(t,r){let i=r.get(t);i&&(i.usage--,i.usage<=0&&(ib(i.elements),r.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])ib(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[r,{elements:i}]of this.inline)i.push(this.addElement(t,ob(r,this.doc)));for(let[r,{elements:i}]of this.external)i.push(this.addElement(t,qf(r,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,r){return this.nonce&&r.setAttribute("nonce",this.nonce),t.appendChild(r)}static \u0275fac=function(r){return new(r||e)(C(z),C(si),C(yr,8),C(vr))};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),Wf={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Qf=/%COMP%/g;var ab="%COMP%",eM=`_nghost-${ab}`,tM=`_ngcontent-${ab}`,nM=!0,rM=new g("",{factory:()=>nM});function iM(e){return tM.replace(Qf,e)}function oM(e){return eM.replace(Qf,e)}function lb(e,n){return n.map(t=>t.replace(Qf,e))}var Xf=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,r,i,o,s,a,l=null,c=null){this.eventManager=t,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.defaultRenderer=new jo(t,s,a,this.tracingService)}createRenderer(t,r){if(!t||!r)return this.defaultRenderer;let i=this.getOrCreateRenderer(t,r);return i instanceof El?i.applyToHost(t):i instanceof Bo&&i.applyStyles(),i}getOrCreateRenderer(t,r){let i=this.rendererByCompId,o=i.get(r.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,u=this.tracingService;switch(r.encapsulation){case Nt.Emulated:o=new El(l,c,r,this.appId,d,s,a,u);break;case Nt.ShadowDom:return new Dl(l,t,r,s,a,this.nonce,u,c);case Nt.ExperimentalIsolatedShadowDom:return new Dl(l,t,r,s,a,this.nonce,u);default:o=new Bo(l,c,r,d,s,a,u);break}i.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(r){return new(r||e)(C(Zf),C(Yf),C(si),C(rM),C(z),C(F),C(yr),C(Yt,8))};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),jo=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,t,r,i){this.eventManager=n,this.doc=t,this.ngZone=r,this.tracingService=i}destroy(){}destroyNode=null;createElement(n,t){return t?this.doc.createElementNS(Wf[t]||t,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,t){(sb(n)?n.content:n).appendChild(t)}insertBefore(n,t,r){n&&(sb(n)?n.content:n).insertBefore(t,r)}removeChild(n,t){t.remove()}selectRootElement(n,t){let r=typeof n=="string"?this.doc.querySelector(n):n;if(!r)throw new b(-5104,!1);return t||(r.textContent=""),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,t,r,i){if(i){t=i+":"+t;let o=Wf[i];o?n.setAttributeNS(o,t,r):n.setAttribute(t,r)}else n.setAttribute(t,r)}removeAttribute(n,t,r){if(r){let i=Wf[r];i?n.removeAttributeNS(i,t):n.removeAttribute(`${r}:${t}`)}else n.removeAttribute(t)}addClass(n,t){n.classList.add(t)}removeClass(n,t){n.classList.remove(t)}setStyle(n,t,r,i){i&(qt.DashCase|qt.Important)?n.style.setProperty(t,r,i&qt.Important?"important":""):n.style[t]=r}removeStyle(n,t,r){r&qt.DashCase?n.style.removeProperty(t):n.style[t]=""}setProperty(n,t,r){n!=null&&(n[t]=r)}setValue(n,t){n.nodeValue=t}listen(n,t,r,i){if(typeof n=="string"&&(n=Dt().getGlobalEventTarget(this.doc,n),!n))throw new b(5102,!1);let o=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,t,o)),this.eventManager.addEventListener(n,t,o,i)}decoratePreventDefault(n){return t=>{if(t==="__ngUnwrap__")return n;n(t)===!1&&t.preventDefault()}}};function sb(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var Dl=class extends jo{hostEl;sharedStylesHost;shadowRoot;constructor(n,t,r,i,o,s,a,l){super(n,i,o,a),this.hostEl=t,this.sharedStylesHost=l,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=r.styles;c=lb(r.id,c);for(let u of c){let h=document.createElement("style");s&&h.setAttribute("nonce",s),h.textContent=u,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let u of d){let h=qf(u,i);s&&h.setAttribute("nonce",s),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,t){return super.appendChild(this.nodeOrShadowRoot(n),t)}insertBefore(n,t,r){return super.insertBefore(this.nodeOrShadowRoot(n),t,r)}removeChild(n,t){return super.removeChild(null,t)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Bo=class extends jo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,t,r,i,o,s,a,l){super(n,o,s,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=i;let c=r.styles;this.styles=l?lb(l,c):c,this.styleUrls=r.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&hr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},El=class extends Bo{contentAttr;hostAttr;constructor(n,t,r,i,o,s,a,l){let c=i+"-"+r.id;super(n,t,r,o,s,a,l,c),this.contentAttr=iM(c),this.hostAttr=oM(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,t){let r=super.createElement(n,t);return super.setAttribute(r,this.contentAttr,""),r}};var wl=class e extends Po{supportsDOMEvents=!0;static makeCurrent(){Bf(new e)}onAndCancel(n,t,r,i){return n.addEventListener(t,r,i),()=>{n.removeEventListener(t,r,i)}}dispatchEvent(n,t){n.dispatchEvent(t)}remove(n){n.remove()}createElement(n,t){return t=t||this.getDefaultDocument(),t.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,t){return t==="window"?window:t==="document"?n:t==="body"?n.body:null}getBaseHref(n){let t=sM();return t==null?null:aM(t)}resetBaseElement(){Uo=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Lo(document.cookie,n)}},Uo=null;function sM(){return Uo=Uo||document.head.querySelector("base"),Uo?Uo.getAttribute("href"):null}function aM(e){return new URL(e,document.baseURI).pathname}var lM=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),cb=["alt","control","meta","shift"],cM={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},dM={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},db=(()=>{class e extends Vo{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,r,i,o){let s=e.parseEventName(r),a=e.eventCallback(s.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Dt().onAndCancel(t,s.domEventName,a,o))}static parseEventName(t){let r=t.toLowerCase().split("."),i=r.shift();if(r.length===0||!(i==="keydown"||i==="keyup"))return null;let o=e._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),cb.forEach(c=>{let d=r.indexOf(c);d>-1&&(r.splice(d,1),s+=c+".")}),s+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=i,l.fullKey=s,l}static matchEventFullKeyCode(t,r){let i=cM[t.key]||t.key,o="";return r.indexOf("code.")>-1&&(i=t.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),cb.forEach(s=>{if(s!==i){let a=dM[s];a(t)&&(o+=s+".")}}),o+=i,o===r)}static eventCallback(t,r,i){return o=>{e.matchEventFullKeyCode(o,t)&&i.runGuarded(()=>r(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(r){return new(r||e)(C(z))};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();async function Kf(e,n,t){let r=v({rootComponent:e},uM(n,t));return Zy(r)}function uM(e,n){return{platformRef:n?.platformRef,appProviders:[...gM,...e?.providers??[]],platformProviders:mM}}function fM(){wl.makeCurrent()}function hM(){return new rt}function pM(){return Ku(document),document}var mM=[{provide:vr,useValue:zf},{provide:Ya,useValue:fM,multi:!0},{provide:z,useFactory:pM}];var gM=[{provide:oo,useValue:"root"},{provide:rt,useFactory:hM},{provide:Cl,useClass:_l,multi:!0},{provide:Cl,useClass:db,multi:!0},Xf,Yf,Zf,{provide:ct,useExisting:Xf},{provide:Er,useClass:lM},[]];var Vn=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let i=t.slice(0,r),o=t.slice(r+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.addHeaderEntry(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,t);let i=(n.op==="a"?this.headers.get(t):void 0)||[];i.push(...r),this.headers.set(t,i);break;case"d":let o=n.value;if(!o)this.headers.delete(t),this.normalizedNames.delete(t);else{let s=this.headers.get(t);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}break}}addHeaderEntry(n,t){let r=n.toLowerCase();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(t):this.headers.set(r,[t])}setHeaderEntries(n,t){let r=(Array.isArray(t)?t:[t]).map(o=>o.toString()),i=n.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(n,i)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var xl=class{map=new Map;set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Ml=class{encodeKey(n){return ub(n)}encodeValue(n){return ub(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function vM(e,n){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[s,a]=o==-1?[n.decodeKey(i),""]:[n.decodeKey(i.slice(0,o)),n.decodeValue(i.slice(o+1))],l=t.get(s)||[];l.push(a),t.set(s,l)}),t}var yM=/%(\d[a-f0-9])/gi,bM={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ub(e){return encodeURIComponent(e).replace(yM,(n,t)=>bM[t]??n)}function Il(e){return`${e}`}var gn=class e{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Ml,n.fromString){if(n.fromObject)throw new b(2805,!1);this.map=vM(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{let r=n.fromObject[t],i=Array.isArray(r)?r.map(Il):[Il(r)];this.map.set(t,i)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){let t=[];return Object.keys(n).forEach(r=>{let i=n[r];Array.isArray(i)?i.forEach(o=>{t.push({param:r,value:o,op:"a"})}):t.push({param:r,value:i,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let t=this.encoder.encodeKey(n);return this.map.get(n).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let t=(n.op==="a"?this.map.get(n.param):void 0)||[];t.push(Il(n.value)),this.map.set(n.param,t);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],i=r.indexOf(Il(n.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function _M(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function fb(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function hb(e){return typeof Blob<"u"&&e instanceof Blob}function pb(e){return typeof FormData<"u"&&e instanceof FormData}function DM(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var mb="Content-Type",gb="Accept",vb="text/plain",yb="application/json",EM=`${yb}, ${vb}, */*`,gi=class e{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,t,r,i){this.url=t,this.method=n.toUpperCase();let o;if(_M(this.method)||i?(this.body=r!==void 0?r:null,o=i):o=r,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new b(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Vn,this.context??=new xl,!this.params)this.params=new gn,this.urlWithParams=t;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=t;else{let a=t.indexOf("?"),l=a===-1?"?":a<t.length-1?"&":"";this.urlWithParams=t+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||fb(this.body)||hb(this.body)||pb(this.body)||DM(this.body)?this.body:this.body instanceof gn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||pb(this.body)?null:hb(this.body)?this.body.type||null:fb(this.body)?null:typeof this.body=="string"?vb:this.body instanceof gn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?yb:null}clone(n={}){let t=n.method||this.method,r=n.url||this.url,i=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,u=n.referrer||this.referrer,h=n.integrity||this.integrity,p=n.referrerPolicy||this.referrerPolicy,m=n.transferCache??this.transferCache,D=n.timeout??this.timeout,_=n.body!==void 0?n.body:this.body,E=n.withCredentials??this.withCredentials,Y=n.reportProgress??this.reportProgress,Ae=n.headers||this.headers,Re=n.params||this.params,Vi=n.context??this.context;return n.setHeaders!==void 0&&(Ae=Object.keys(n.setHeaders).reduce((ji,$n)=>ji.set($n,n.setHeaders[$n]),Ae)),n.setParams&&(Re=Object.keys(n.setParams).reduce((ji,$n)=>ji.set($n,n.setParams[$n]),Re)),new e(t,r,_,{params:Re,headers:Ae,context:Vi,reportProgress:Y,responseType:i,withCredentials:E,transferCache:m,keepalive:o,cache:a,priority:s,timeout:D,mode:l,redirect:c,credentials:d,referrer:u,integrity:h,referrerPolicy:p})}},Cr=(function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e})(Cr||{}),yi=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,t=200,r="OK"){this.headers=n.headers||new Vn,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Tl=class e extends yi{constructor(n={}){super(n)}type=Cr.ResponseHeader;clone(n={}){return new e({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Ho=class e extends yi{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Cr.Response;clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},vi=class extends yi{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},CM=200,wM=204;var IM=new g("");var xM=/^\)\]\}',?\n/;var eh=(()=>{class e{xhrFactory;tracingService=f(Yt,{optional:!0});constructor(t){this.xhrFactory=t}maybePropagateTrace(t){return this.tracingService?.propagate?this.tracingService.propagate(t):t}handle(t){if(t.method==="JSONP")throw new b(-2800,!1);let r=this.xhrFactory;return M(null).pipe(st(()=>new V(o=>{let s=r.build();if(s.open(t.method,t.urlWithParams),t.withCredentials&&(s.withCredentials=!0),t.headers.forEach((_,E)=>s.setRequestHeader(_,E.join(","))),t.headers.has(gb)||s.setRequestHeader(gb,EM),!t.headers.has(mb)){let _=t.detectContentTypeHeader();_!==null&&s.setRequestHeader(mb,_)}if(t.timeout&&(s.timeout=t.timeout),t.responseType){let _=t.responseType.toLowerCase();s.responseType=_!=="json"?_:"text"}let a=t.serializeBody(),l=null,c=()=>{if(l!==null)return l;let _=s.statusText||"OK",E=new Vn(s.getAllResponseHeaders()),Y=s.responseURL||t.url;return l=new Tl({headers:E,status:s.status,statusText:_,url:Y}),l},d=this.maybePropagateTrace(()=>{let{headers:_,status:E,statusText:Y,url:Ae}=c(),Re=null;E!==wM&&(Re=typeof s.response>"u"?s.responseText:s.response),E===0&&(E=Re?CM:0);let Vi=E>=200&&E<300;if(t.responseType==="json"&&typeof Re=="string"){let ji=Re;Re=Re.replace(xM,"");try{Re=Re!==""?JSON.parse(Re):null}catch($n){Re=ji,Vi&&(Vi=!1,Re={error:$n,text:Re})}}Vi?(o.next(new Ho({body:Re,headers:_,status:E,statusText:Y,url:Ae||void 0})),o.complete()):o.error(new vi({error:Re,headers:_,status:E,statusText:Y,url:Ae||void 0}))}),u=this.maybePropagateTrace(_=>{let{url:E}=c(),Y=new vi({error:_,status:s.status||0,statusText:s.statusText||"Unknown Error",url:E||void 0});o.error(Y)}),h=u;t.timeout&&(h=this.maybePropagateTrace(_=>{let{url:E}=c(),Y=new vi({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:E||void 0});o.error(Y)}));let p=!1,m=this.maybePropagateTrace(_=>{p||(o.next(c()),p=!0);let E={type:Cr.DownloadProgress,loaded:_.loaded};_.lengthComputable&&(E.total=_.total),t.responseType==="text"&&s.responseText&&(E.partialText=s.responseText),o.next(E)}),D=this.maybePropagateTrace(_=>{let E={type:Cr.UploadProgress,loaded:_.loaded};_.lengthComputable&&(E.total=_.total),o.next(E)});return s.addEventListener("load",d),s.addEventListener("error",u),s.addEventListener("timeout",h),s.addEventListener("abort",u),t.reportProgress&&(s.addEventListener("progress",m),a!==null&&s.upload&&s.upload.addEventListener("progress",D)),s.send(a),o.next({type:Cr.Sent}),()=>{s.removeEventListener("error",u),s.removeEventListener("abort",u),s.removeEventListener("load",d),s.removeEventListener("timeout",h),t.reportProgress&&(s.removeEventListener("progress",m),a!==null&&s.upload&&s.upload.removeEventListener("progress",D)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(r){return new(r||e)(C(Er))};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function MM(e,n){return n(e)}function TM(e,n,t){return(r,i)=>Ne(t,()=>n(r,o=>e(o,i)))}var bb=new g("",{factory:()=>[]}),_b=new g(""),Db=new g("",{factory:()=>!0});var th=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=C(eh),i},providedIn:"root"})}return e})();var Sl=(()=>{class e{backend;injector;chain=null;pendingTasks=f(Ea);contributeToStability=f(Db);constructor(t,r){this.backend=t,this.injector=r}handle(t){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(bb),...this.injector.get(_b,[])]));this.chain=r.reduceRight((i,o)=>TM(i,o,this.injector),MM)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(t,i=>this.backend.handle(i)).pipe(Bt(r))}else return this.chain(t,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||e)(C(th),C(ue))};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),nh=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=C(Sl),i},providedIn:"root"})}return e})();function Jf(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,credentials:e.credentials,transferCache:e.transferCache,timeout:e.timeout,keepalive:e.keepalive,priority:e.priority,cache:e.cache,mode:e.mode,redirect:e.redirect,integrity:e.integrity,referrer:e.referrer,referrerPolicy:e.referrerPolicy}}var bi=(()=>{class e{handler;constructor(t){this.handler=t}request(t,r,i={}){let o;if(t instanceof gi)o=t;else{let l;i.headers instanceof Vn?l=i.headers:l=new Vn(i.headers);let c;i.params&&(i.params instanceof gn?c=i.params:c=new gn({fromObject:i.params})),o=new gi(t,r,i.body!==void 0?i.body:null,{headers:l,context:i.context,params:c,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let s=M(o).pipe(Br(l=>this.handler.handle(l)));if(t instanceof gi||i.observe==="events")return s;let a=s.pipe(Pe(l=>l instanceof Ho));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(B(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new b(2806,!1);return l.body}));case"blob":return a.pipe(B(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new b(2807,!1);return l.body}));case"text":return a.pipe(B(l=>{if(l.body!==null&&typeof l.body!="string")throw new b(2808,!1);return l.body}));default:return a.pipe(B(l=>l.body))}case"response":return a;default:throw new b(2809,!1)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:new gn().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,i={}){return this.request("PATCH",t,Jf(i,r))}post(t,r,i={}){return this.request("POST",t,Jf(i,r))}put(t,r,i={}){return this.request("PUT",t,Jf(i,r))}static \u0275fac=function(r){return new(r||e)(C(nh))};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var SM=new g("",{factory:()=>!0}),AM="XSRF-TOKEN",RM=new g("",{factory:()=>AM}),NM="X-XSRF-TOKEN",OM=new g("",{factory:()=>NM}),kM=(()=>{class e{cookieName=f(RM);doc=f(z);lastCookieString="";lastToken=null;parseCount=0;getToken(){let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Lo(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Eb=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=C(kM),i},providedIn:"root"})}return e})();function FM(e,n){if(!f(SM)||e.method==="GET"||e.method==="HEAD")return n(e);try{let i=f(pi).href,{origin:o}=new URL(i),{origin:s}=new URL(e.url,o);if(o!==s)return n(e)}catch{return n(e)}let t=f(Eb).getToken(),r=f(OM);return t!=null&&!e.headers.has(r)&&(e=e.clone({headers:e.headers.set(r,t)})),n(e)}function rh(...e){let n=[bi,Sl,{provide:nh,useExisting:Sl},{provide:th,useFactory:()=>f(IM,{optional:!0})??f(eh)},{provide:bb,useValue:FM,multi:!0}];for(let t of e)n.push(...t.\u0275providers);return on(n)}var wb=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(r){return new(r||e)(C(z))};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ih=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=C(PM),i},providedIn:"root"})}return e})(),PM=(()=>{class e extends ih{_doc;constructor(t){super(),this._doc=t}sanitize(t,r){if(r==null)return null;switch(t){case Ye.NONE:return r;case Ye.HTML:return br(r,"HTML")?hn(r):sf(this._doc,String(r)).toString();case Ye.STYLE:return br(r,"Style")?hn(r):r;case Ye.SCRIPT:if(br(r,"Script"))return hn(r);throw new b(5200,!1);case Ye.URL:return br(r,"URL")?hn(r):Ka(String(r));case Ye.RESOURCE_URL:if(br(r,"ResourceURL"))return hn(r);throw new b(5201,!1);default:throw new b(5202,!1)}}bypassSecurityTrustHtml(t){return ef(t)}bypassSecurityTrustStyle(t){return tf(t)}bypassSecurityTrustScript(t){return nf(t)}bypassSecurityTrustUrl(t){return rf(t)}bypassSecurityTrustResourceUrl(t){return of(t)}static \u0275fac=function(r){return new(r||e)(C(z))};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var k="primary",es=Symbol("RouteTitle"),ch=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let t=this.params[n];return Array.isArray(t)?t[0]:t}return null}getAll(n){if(this.has(n)){let t=this.params[n];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Ci(e){return new ch(e)}function oh(e,n,t){for(let r=0;r<e.length;r++){let i=e[r],o=n[r];if(i[0]===":")t[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function LM(e,n,t){let r=t.path.split("/"),i=r.indexOf("**");if(i===-1){if(r.length>e.length||t.pathMatch==="full"&&(n.hasChildren()||r.length<e.length))return null;let l={},c=e.slice(0,r.length);return oh(r,c,l)?{consumed:c,posParams:l}:null}if(i!==r.lastIndexOf("**"))return null;let o=r.slice(0,i),s=r.slice(i+1);if(o.length+s.length>e.length||t.pathMatch==="full"&&n.hasChildren()&&t.path!=="**")return null;let a={};return!oh(o,e.slice(0,o.length),a)||!oh(s,e.slice(e.length-s.length),a)?null:{consumed:e,posParams:a}}function Fl(e){return new Promise((n,t)=>{e.pipe(tn()).subscribe({next:r=>n(r),error:r=>t(r)})})}function VM(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;++t)if(!Kt(e[t],n[t]))return!1;return!0}function Kt(e,n){let t=e?dh(e):void 0,r=n?dh(n):void 0;if(!t||!r||t.length!=r.length)return!1;let i;for(let o=0;o<t.length;o++)if(i=t[o],!Ob(e[i],n[i]))return!1;return!0}function dh(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ob(e,n){if(Array.isArray(e)&&Array.isArray(n)){if(e.length!==n.length)return!1;let t=[...e].sort(),r=[...n].sort();return t.every((i,o)=>r[o]===i)}else return e===n}function jM(e){return e.length>0?e[e.length-1]:null}function Tr(e){return Gs(e)?e:Fn(e)?de(Promise.resolve(e)):M(e)}function kb(e){return Gs(e)?Fl(e):Promise.resolve(e)}var BM={exact:Lb,subset:Vb},Fb={exact:UM,subset:HM,ignored:()=>!0},Pb={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},uh={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function xb(e,n,t){return BM[t.paths](e.root,n.root,t.matrixParams)&&Fb[t.queryParams](e.queryParams,n.queryParams)&&!(t.fragment==="exact"&&e.fragment!==n.fragment)}function UM(e,n){return Kt(e,n)}function Lb(e,n,t){if(!Ir(e.segments,n.segments)||!Nl(e.segments,n.segments,t)||e.numberOfChildren!==n.numberOfChildren)return!1;for(let r in n.children)if(!e.children[r]||!Lb(e.children[r],n.children[r],t))return!1;return!0}function HM(e,n){return Object.keys(n).length<=Object.keys(e).length&&Object.keys(n).every(t=>Ob(e[t],n[t]))}function Vb(e,n,t){return jb(e,n,n.segments,t)}function jb(e,n,t,r){if(e.segments.length>t.length){let i=e.segments.slice(0,t.length);return!(!Ir(i,t)||n.hasChildren()||!Nl(i,t,r))}else if(e.segments.length===t.length){if(!Ir(e.segments,t)||!Nl(e.segments,t,r))return!1;for(let i in n.children)if(!e.children[i]||!Vb(e.children[i],n.children[i],r))return!1;return!0}else{let i=t.slice(0,e.segments.length),o=t.slice(e.segments.length);return!Ir(e.segments,i)||!Nl(e.segments,i,r)||!e.children[k]?!1:jb(e.children[k],n,o,r)}}function Nl(e,n,t){return n.every((r,i)=>Fb[t](e[i].parameters,r.parameters))}var Pt=class{root;queryParams;fragment;_queryParamMap;constructor(n=new ee([],{}),t={},r=null){this.root=n,this.queryParams=t,this.fragment=r}get queryParamMap(){return this._queryParamMap??=Ci(this.queryParams),this._queryParamMap}toString(){return GM.serialize(this)}},ee=class{segments;children;parent=null;constructor(n,t){this.segments=n,this.children=t,Object.values(t).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ol(this)}},wr=class{path;parameters;_parameterMap;constructor(n,t){this.path=n,this.parameters=t}get parameterMap(){return this._parameterMap??=Ci(this.parameters),this._parameterMap}toString(){return Ub(this)}};function $M(e,n){return Ir(e,n)&&e.every((t,r)=>Kt(t.parameters,n[r].parameters))}function Ir(e,n){return e.length!==n.length?!1:e.every((t,r)=>t.path===n[r].path)}function zM(e,n){let t=[];return Object.entries(e.children).forEach(([r,i])=>{r===k&&(t=t.concat(n(i,r)))}),Object.entries(e.children).forEach(([r,i])=>{r!==k&&(t=t.concat(n(i,r)))}),t}var Gl=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:()=>new xr,providedIn:"root"})}return e})(),xr=class{parse(n){let t=new hh(n);return new Pt(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(n){let t=`/${$o(n.root,!0)}`,r=ZM(n.queryParams),i=typeof n.fragment=="string"?`#${WM(n.fragment)}`:"";return`${t}${r}${i}`}},GM=new xr;function Ol(e){return e.segments.map(n=>Ub(n)).join("/")}function $o(e,n){if(!e.hasChildren())return Ol(e);if(n){let t=e.children[k]?$o(e.children[k],!1):"",r=[];return Object.entries(e.children).forEach(([i,o])=>{i!==k&&r.push(`${i}:${$o(o,!1)}`)}),r.length>0?`${t}(${r.join("//")})`:t}else{let t=zM(e,(r,i)=>i===k?[$o(e.children[k],!1)]:[`${i}:${$o(r,!1)}`]);return Object.keys(e.children).length===1&&e.children[k]!=null?`${Ol(e)}/${t[0]}`:`${Ol(e)}/(${t.join("//")})`}}function Bb(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Al(e){return Bb(e).replace(/%3B/gi,";")}function WM(e){return encodeURI(e)}function fh(e){return Bb(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function kl(e){return decodeURIComponent(e)}function Mb(e){return kl(e.replace(/\+/g,"%20"))}function Ub(e){return`${fh(e.path)}${qM(e.parameters)}`}function qM(e){return Object.entries(e).map(([n,t])=>`;${fh(n)}=${fh(t)}`).join("")}function ZM(e){let n=Object.entries(e).map(([t,r])=>Array.isArray(r)?r.map(i=>`${Al(t)}=${Al(i)}`).join("&"):`${Al(t)}=${Al(r)}`).filter(t=>t);return n.length?`?${n.join("&")}`:""}var YM=/^[^\/()?;#]+/;function sh(e){let n=e.match(YM);return n?n[0]:""}var QM=/^[^\/()?;=#]+/;function XM(e){let n=e.match(QM);return n?n[0]:""}var KM=/^[^=?&#]+/;function JM(e){let n=e.match(KM);return n?n[0]:""}var eT=/^[^&#]+/;function tT(e){let n=e.match(eT);return n?n[0]:""}var hh=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ee([],{}):new ee([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new b(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let r={};this.peekStartsWith("/(")&&(this.capture("/"),r=this.parseParens(!0,n));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1,n)),(t.length>0||Object.keys(r).length>0)&&(i[k]=new ee(t,r)),i}parseSegment(){let n=sh(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new b(4009,!1);return this.capture(n),new wr(kl(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let t=XM(this.remaining);if(!t)return;this.capture(t);let r="";if(this.consumeOptional("=")){let i=sh(this.remaining);i&&(r=i,this.capture(r))}n[kl(t)]=kl(r)}parseQueryParam(n){let t=JM(this.remaining);if(!t)return;this.capture(t);let r="";if(this.consumeOptional("=")){let s=tT(this.remaining);s&&(r=s,this.capture(r))}let i=Mb(t),o=Mb(r);if(n.hasOwnProperty(i)){let s=n[i];Array.isArray(s)||(s=[s],n[i]=s),s.push(o)}else n[i]=o}parseParens(n,t){let r={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=sh(this.remaining),o=this.remaining[i.length];if(o!=="/"&&o!==")"&&o!==";")throw new b(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=k);let a=this.parseChildren(t+1);r[s??k]=Object.keys(a).length===1&&a[k]?a[k]:new ee([],a),this.consumeOptional("//")}return r}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new b(4011,!1)}};function Hb(e){return e.segments.length>0?new ee([],{[k]:e}):e}function $b(e){let n={};for(let[r,i]of Object.entries(e.children)){let o=$b(i);if(r===k&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[r]=o)}let t=new ee(e.segments,n);return nT(t)}function nT(e){if(e.numberOfChildren===1&&e.children[k]){let n=e.children[k];return new ee(e.segments.concat(n.segments),n.children)}return e}function wi(e){return e instanceof Pt}function rT(e,n,t=null,r=null,i=new xr){let o=zb(e);return Gb(o,n,t,r,i)}function zb(e){let n;function t(o){let s={};for(let l of o.children){let c=t(l);s[l.outlet]=c}let a=new ee(o.url,s);return o===e&&(n=a),a}let r=t(e.root),i=Hb(r);return n??i}function Gb(e,n,t,r,i){let o=e;for(;o.parent;)o=o.parent;if(n.length===0)return ah(o,o,o,t,r,i);let s=iT(n);if(s.toRoot())return ah(o,o,new ee([],{}),t,r,i);let a=oT(s,o,e),l=a.processChildren?Go(a.segmentGroup,a.index,s.commands):qb(a.segmentGroup,a.index,s.commands);return ah(o,a.segmentGroup,l,t,r,i)}function Pl(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function Zo(e){return typeof e=="object"&&e!=null&&e.outlets}function Tb(e,n,t){e||="\u0275";let r=new Pt;return r.queryParams={[e]:n},t.parse(t.serialize(r)).queryParams[e]}function ah(e,n,t,r,i,o){let s={};for(let[c,d]of Object.entries(r??{}))s[c]=Array.isArray(d)?d.map(u=>Tb(c,u,o)):Tb(c,d,o);let a;e===n?a=t:a=Wb(e,n,t);let l=Hb($b(a));return new Pt(l,s,i)}function Wb(e,n,t){let r={};return Object.entries(e.children).forEach(([i,o])=>{o===n?r[i]=t:r[i]=Wb(o,n,t)}),new ee(e.segments,r)}var Ll=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,t,r){if(this.isAbsolute=n,this.numberOfDoubleDots=t,this.commands=r,n&&r.length>0&&Pl(r[0]))throw new b(4003,!1);let i=r.find(Zo);if(i&&i!==jM(r))throw new b(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function iT(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new Ll(!0,0,e);let n=0,t=!1,r=e.reduce((i,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...i,{outlets:a}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!="string"?[...i,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?t=!0:a===".."?n++:a!=""&&i.push(a))}),i):[...i,o]},[]);return new Ll(t,n,r)}var Di=class{segmentGroup;processChildren;index;constructor(n,t,r){this.segmentGroup=n,this.processChildren=t,this.index=r}};function oT(e,n,t){if(e.isAbsolute)return new Di(n,!0,0);if(!t)return new Di(n,!1,NaN);if(t.parent===null)return new Di(t,!0,0);let r=Pl(e.commands[0])?0:1,i=t.segments.length-1+r;return sT(t,i,e.numberOfDoubleDots)}function sT(e,n,t){let r=e,i=n,o=t;for(;o>i;){if(o-=i,r=r.parent,!r)throw new b(4005,!1);i=r.segments.length}return new Di(r,!1,i-o)}function aT(e){return Zo(e[0])?e[0].outlets:{[k]:e}}function qb(e,n,t){if(e??=new ee([],{}),e.segments.length===0&&e.hasChildren())return Go(e,n,t);let r=lT(e,n,t),i=t.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){let o=new ee(e.segments.slice(0,r.pathIndex),{});return o.children[k]=new ee(e.segments.slice(r.pathIndex),e.children),Go(o,0,i)}else return r.match&&i.length===0?new ee(e.segments,{}):r.match&&!e.hasChildren()?ph(e,n,t):r.match?Go(e,0,i):ph(e,n,t)}function Go(e,n,t){if(t.length===0)return new ee(e.segments,{});{let r=aT(t),i={};if(Object.keys(r).some(o=>o!==k)&&e.children[k]&&e.numberOfChildren===1&&e.children[k].segments.length===0){let o=Go(e.children[k],n,t);return new ee(e.segments,o.children)}return Object.entries(r).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(i[o]=qb(e.children[o],n,s))}),Object.entries(e.children).forEach(([o,s])=>{r[o]===void 0&&(i[o]=s)}),new ee(e.segments,i)}}function lT(e,n,t){let r=0,i=n,o={match:!1,pathIndex:0,commandIndex:0};for(;i<e.segments.length;){if(r>=t.length)return o;let s=e.segments[i],a=t[r];if(Zo(a))break;let l=`${a}`,c=r<t.length-1?t[r+1]:null;if(i>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!Ab(l,c,s))return o;r+=2}else{if(!Ab(l,{},s))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function ph(e,n,t){let r=e.segments.slice(0,n),i=0;for(;i<t.length;){let o=t[i];if(Zo(o)){let l=cT(o.outlets);return new ee(r,l)}if(i===0&&Pl(t[0])){let l=e.segments[n];r.push(new wr(l.path,Sb(t[0]))),i++;continue}let s=Zo(o)?o.outlets[k]:`${o}`,a=i<t.length-1?t[i+1]:null;s&&a&&Pl(a)?(r.push(new wr(s,Sb(a))),i+=2):(r.push(new wr(s,{})),i++)}return new ee(r,{})}function cT(e){let n={};return Object.entries(e).forEach(([t,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(n[t]=ph(new ee([],{}),0,r))}),n}function Sb(e){let n={};return Object.entries(e).forEach(([t,r])=>n[t]=`${r}`),n}function Ab(e,n,t){return e==t.path&&Kt(n,t.parameters)}var Wo="imperative",Be=(function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e})(Be||{}),Et=class{id;url;constructor(n,t){this.id=n,this.url=t}},Ii=class extends Et{type=Be.NavigationStart;navigationTrigger;restoredState;constructor(n,t,r="imperative",i=null){super(n,t),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},jn=class extends Et{urlAfterRedirects;type=Be.NavigationEnd;constructor(n,t,r){super(n,t),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},et=(function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e[e.Aborted=4]="Aborted",e})(et||{}),Vl=(function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e})(Vl||{}),kt=class extends Et{reason;code;type=Be.NavigationCancel;constructor(n,t,r,i){super(n,t),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Zb(e){return e instanceof kt&&(e.code===et.Redirect||e.code===et.SupersededByNewNavigation)}var Bn=class extends Et{reason;code;type=Be.NavigationSkipped;constructor(n,t,r,i){super(n,t),this.reason=r,this.code=i}},xi=class extends Et{error;target;type=Be.NavigationError;constructor(n,t,r,i){super(n,t),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},jl=class extends Et{urlAfterRedirects;state;type=Be.RoutesRecognized;constructor(n,t,r,i){super(n,t),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},mh=class extends Et{urlAfterRedirects;state;type=Be.GuardsCheckStart;constructor(n,t,r,i){super(n,t),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},gh=class extends Et{urlAfterRedirects;state;shouldActivate;type=Be.GuardsCheckEnd;constructor(n,t,r,i,o){super(n,t),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},vh=class extends Et{urlAfterRedirects;state;type=Be.ResolveStart;constructor(n,t,r,i){super(n,t),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},yh=class extends Et{urlAfterRedirects;state;type=Be.ResolveEnd;constructor(n,t,r,i){super(n,t),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},bh=class{route;type=Be.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},_h=class{route;type=Be.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Dh=class{snapshot;type=Be.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Eh=class{snapshot;type=Be.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ch=class{snapshot;type=Be.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},wh=class{snapshot;type=Be.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Mi=class{},Yo=class{},Ti=class{url;navigationBehaviorOptions;constructor(n,t){this.url=n,this.navigationBehaviorOptions=t}};function dT(e){return!(e instanceof Mi)&&!(e instanceof Ti)&&!(e instanceof Yo)}var Ih=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new ts(this.rootInjector)}},ts=(()=>{class e{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,r){let i=this.getOrCreateContext(t);i.outlet=r,this.contexts.set(t,i)}onChildOutletDestroyed(t){let r=this.getContext(t);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let r=this.getContext(t);return r||(r=new Ih(this.rootInjector),this.contexts.set(t,r)),r}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(r){return new(r||e)(C(ue))};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Bl=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let t=this.pathFromRoot(n);return t.length>1?t[t.length-2]:null}children(n){let t=xh(n,this._root);return t?t.children.map(r=>r.value):[]}firstChild(n){let t=xh(n,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(n){let t=Mh(n,this._root);return t.length<2?[]:t[t.length-2].children.map(i=>i.value).filter(i=>i!==n)}pathFromRoot(n){return Mh(n,this._root).map(t=>t.value)}};function xh(e,n){if(e===n.value)return n;for(let t of n.children){let r=xh(e,t);if(r)return r}return null}function Mh(e,n){if(e===n.value)return[n];for(let t of n.children){let r=Mh(e,t);if(r.length)return r.unshift(n),r}return[]}var ht=class{value;children;constructor(n,t){this.value=n,this.children=t}toString(){return`TreeNode(${this.value})`}};function _i(e){let n={};return e&&e.children.forEach(t=>n[t.value.outlet]=t),n}var Ul=class extends Bl{snapshot;constructor(n,t){super(n),this.snapshot=t,Lh(this,n)}toString(){return this.snapshot.toString()}};function Yb(e,n){let t=uT(e,n),r=new Ie([new wr("",{})]),i=new Ie({}),o=new Ie({}),s=new Ie({}),a=new Ie(""),l=new Mr(r,i,s,a,o,k,e,t.root);return l.snapshot=t.root,new Ul(new ht(l,[]),t)}function uT(e,n){let t={},r={},i={},s=new Qo([],t,i,"",r,k,e,null,{},n);return new Hl("",new ht(s,[]))}var Mr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,t,r,i,o,s,a,l){this.urlSubject=n,this.paramsSubject=t,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(B(c=>c[es]))??M(void 0),this.url=n,this.params=t,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(B(n=>Ci(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(B(n=>Ci(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Ph(e,n,t="emptyOnly"){let r,{routeConfig:i}=e;return n!==null&&(t==="always"||i?.path===""||!n.component&&!n.routeConfig?.loadComponent)?r={params:v(v({},n.params),e.params),data:v(v({},n.data),e.data),resolve:v(v(v(v({},e.data),n.data),i?.data),e._resolvedData)}:r={params:v({},e.params),data:v({},e.data),resolve:v(v({},e.data),e._resolvedData??{})},i&&Xb(i)&&(r.resolve[es]=i.title),r}var Qo=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[es]}constructor(n,t,r,i,o,s,a,l,c,d){this.url=n,this.params=t,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ci(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ci(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(r=>r.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${t}')`}},Hl=class extends Bl{url;constructor(n,t){super(t),this.url=n,Lh(this,t)}toString(){return Qb(this._root)}};function Lh(e,n){n.value._routerState=e,n.children.forEach(t=>Lh(e,t))}function Qb(e){let n=e.children.length>0?` { ${e.children.map(Qb).join(", ")} } `:"";return`${e.value}${n}`}function lh(e){if(e.snapshot){let n=e.snapshot,t=e._futureSnapshot;e.snapshot=t,Kt(n.queryParams,t.queryParams)||e.queryParamsSubject.next(t.queryParams),n.fragment!==t.fragment&&e.fragmentSubject.next(t.fragment),Kt(n.params,t.params)||e.paramsSubject.next(t.params),VM(n.url,t.url)||e.urlSubject.next(t.url),Kt(n.data,t.data)||e.dataSubject.next(t.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function Th(e,n){let t=Kt(e.params,n.params)&&$M(e.url,n.url),r=!e.parent!=!n.parent;return t&&!r&&(!e.parent||Th(e.parent,n.parent))}function Xb(e){return typeof e.title=="string"||e.title===null}var fT=new g(""),Kb=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=k;activateEvents=new Q;deactivateEvents=new Q;attachEvents=new Q;detachEvents=new Q;routerOutletData=Wy();parentContexts=f(ts);location=f(kn);changeDetector=f(ft);inputBinder=f(Wl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:r,previousValue:i}=t.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new b(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new b(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new b(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,r){this.activated=t,this._activatedRoute=r,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,r){if(this.isActivated)throw new b(4013,!1);this._activatedRoute=t;let i=this.location,s=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new Sh(t,a,i.injector,this.routerOutletData);this.activated=i.createComponent(s,{index:i.length,injector:l,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(r){return new(r||e)};static \u0275dir=U({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Zt]})}return e})(),Sh=class{route;childContexts;parent;outletData;constructor(n,t,r,i){this.route=n,this.childContexts=t,this.parent=r,this.outletData=i}get(n,t){return n===Mr?this.route:n===ts?this.childContexts:n===fT?this.outletData:this.parent.get(n,t)}},Wl=new g("");var Jb=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=re({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(r,i){r&1&&ke(0,"router-outlet")},dependencies:[Kb],encapsulation:2})}return e})();function Vh(e){let n=e.children&&e.children.map(Vh),t=n?P(v({},e),{children:n}):v({},e);return!t.component&&!t.loadComponent&&(n||t.loadChildren)&&t.outlet&&t.outlet!==k&&(t.component=Jb),t}function hT(e,n,t){let r=Xo(e,n._root,t?t._root:void 0);return new Ul(r,n)}function Xo(e,n,t){if(t&&e.shouldReuseRoute(n.value,t.value.snapshot)){let r=t.value;r._futureSnapshot=n.value;let i=pT(e,n,t);return new ht(r,i)}else{if(e.shouldAttach(n.value)){let o=e.retrieve(n.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>Xo(e,a)),s}}let r=mT(n.value),i=n.children.map(o=>Xo(e,o));return new ht(r,i)}}function pT(e,n,t){return n.children.map(r=>{for(let i of t.children)if(e.shouldReuseRoute(r.value,i.value.snapshot))return Xo(e,r,i);return Xo(e,r)})}function mT(e){return new Mr(new Ie(e.url),new Ie(e.params),new Ie(e.queryParams),new Ie(e.fragment),new Ie(e.data),e.outlet,e.component,e)}var Ko=class{redirectTo;navigationBehaviorOptions;constructor(n,t){this.redirectTo=n,this.navigationBehaviorOptions=t}},e_="ngNavigationCancelingError";function $l(e,n){let{redirectTo:t,navigationBehaviorOptions:r}=wi(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,i=t_(!1,et.Redirect);return i.url=t,i.navigationBehaviorOptions=r,i}function t_(e,n){let t=new Error(`NavigationCancelingError: ${e||""}`);return t[e_]=!0,t.cancellationCode=n,t}function gT(e){return n_(e)&&wi(e.url)}function n_(e){return!!e&&e[e_]}var Ah=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,t,r,i,o){this.routeReuseStrategy=n,this.futureState=t,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(n){let t=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,r,n),lh(this.futureState.root),this.activateChildRoutes(t,r,n)}deactivateChildRoutes(n,t,r){let i=_i(t);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,i[s],r),delete i[s]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(n,t,r){let i=n.value,o=t?t.value:null;if(i===o)if(i.component){let s=r.getContext(i.outlet);s&&this.deactivateChildRoutes(n,t,s.children)}else this.deactivateChildRoutes(n,t,r);else o&&this.deactivateRouteAndItsChildren(t,r)}deactivateRouteAndItsChildren(n,t){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,t):this.deactivateRouteAndOutlet(n,t)}detachAndStoreRouteSubtree(n,t){let r=t.getContext(n.value.outlet),i=r&&n.value.component?r.children:t,o=_i(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);if(r&&r.outlet){let s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,t){let r=t.getContext(n.value.outlet),i=r&&n.value.component?r.children:t,o=_i(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(n,t,r){let i=_i(t);n.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new wh(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Eh(n.value.snapshot))}activateRoutes(n,t,r){let i=n.value,o=t?t.value:null;if(lh(i),i===o)if(i.component){let s=r.getOrCreateContext(i.outlet);this.activateChildRoutes(n,t,s.children)}else this.activateChildRoutes(n,t,r);else if(i.component){let s=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let a=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),lh(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=i,s.outlet&&s.outlet.activateWith(i,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,r)}},zl=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Ei=class{component;route;constructor(n,t){this.component=n,this.route=t}};function vT(e,n,t){let r=e._root,i=n?n._root:null;return zo(r,i,t,[r.value])}function yT(e){let n=e.routeConfig?e.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:e,guards:n}}function Ai(e,n){let t=Symbol(),r=n.get(e,t);return r===t?typeof e=="function"&&!ud(e)?e:n.get(e):r}function zo(e,n,t,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=_i(n);return e.children.forEach(s=>{bT(s,o[s.value.outlet],t,r.concat([s.value]),i),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>qo(a,t.getContext(s),i)),i}function bT(e,n,t,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=e.value,s=n?n.value:null,a=t?t.getContext(e.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=_T(s,o,o.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new zl(r)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?zo(e,n,a?a.children:null,r,i):zo(e,n,t,r,i),l&&a&&a.outlet&&a.outlet.isActivated&&i.canDeactivateChecks.push(new Ei(a.outlet.component,s))}else s&&qo(n,a,i),i.canActivateChecks.push(new zl(r)),o.component?zo(e,null,a?a.children:null,r,i):zo(e,null,t,r,i);return i}function _T(e,n,t){if(typeof t=="function")return Ne(n._environmentInjector,()=>t(e,n));switch(t){case"pathParamsChange":return!Ir(e.url,n.url);case"pathParamsOrQueryParamsChange":return!Ir(e.url,n.url)||!Kt(e.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Th(e,n)||!Kt(e.queryParams,n.queryParams);default:return!Th(e,n)}}function qo(e,n,t){let r=_i(e),i=e.value;Object.entries(r).forEach(([o,s])=>{i.component?n?qo(s,n.children.getContext(o),t):qo(s,null,t):qo(s,n,t)}),i.component?n&&n.outlet&&n.outlet.isActivated?t.canDeactivateChecks.push(new Ei(n.outlet.component,i)):t.canDeactivateChecks.push(new Ei(null,i)):t.canDeactivateChecks.push(new Ei(null,i))}function ns(e){return typeof e=="function"}function DT(e){return typeof e=="boolean"}function ET(e){return e&&ns(e.canLoad)}function CT(e){return e&&ns(e.canActivate)}function wT(e){return e&&ns(e.canActivateChild)}function IT(e){return e&&ns(e.canDeactivate)}function xT(e){return e&&ns(e.canMatch)}function r_(e){return e instanceof Qn||e?.name==="EmptyError"}var Rl=Symbol("INITIAL_VALUE");function Si(){return st(e=>zc(e.map(n=>n.pipe(wt(1),Yi(Rl)))).pipe(B(n=>{for(let t of n)if(t!==!0){if(t===Rl)return Rl;if(t===!1||MT(t))return t}return!0}),Pe(n=>n!==Rl),wt(1)))}function MT(e){return wi(e)||e instanceof Ko}function i_(e){return e.aborted?M(void 0).pipe(wt(1)):new V(n=>{let t=()=>{n.next(),n.complete()};return e.addEventListener("abort",t),()=>e.removeEventListener("abort",t)})}function o_(e){return It(i_(e))}function TT(e){return We(n=>{let{targetSnapshot:t,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:o}}=n;return o.length===0&&i.length===0?M(P(v({},n),{guardsResult:!0})):ST(o,t,r).pipe(We(s=>s&&DT(s)?AT(t,i,e):M(s)),B(s=>P(v({},n),{guardsResult:s})))})}function ST(e,n,t){return de(e).pipe(We(r=>FT(r.component,r.route,t,n)),tn(r=>r!==!0,!0))}function AT(e,n,t){return de(n).pipe(Br(r=>jr(NT(r.route.parent,t),RT(r.route,t),kT(e,r.path),OT(e,r.route))),tn(r=>r!==!0,!0))}function RT(e,n){return e!==null&&n&&n(new Ch(e)),M(!0)}function NT(e,n){return e!==null&&n&&n(new Dh(e)),M(!0)}function OT(e,n){let t=n.routeConfig?n.routeConfig.canActivate:null;if(!t||t.length===0)return M(!0);let r=t.map(i=>Wi(()=>{let o=n._environmentInjector,s=Ai(i,o),a=CT(s)?s.canActivate(n,e):Ne(o,()=>s(n,e));return Tr(a).pipe(tn())}));return M(r).pipe(Si())}function kT(e,n){let t=n[n.length-1],i=n.slice(0,n.length-1).reverse().map(o=>yT(o)).filter(o=>o!==null).map(o=>Wi(()=>{let s=o.guards.map(a=>{let l=o.node._environmentInjector,c=Ai(a,l),d=wT(c)?c.canActivateChild(t,e):Ne(l,()=>c(t,e));return Tr(d).pipe(tn())});return M(s).pipe(Si())}));return M(i).pipe(Si())}function FT(e,n,t,r){let i=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!i||i.length===0)return M(!0);let o=i.map(s=>{let a=n._environmentInjector,l=Ai(s,a),c=IT(l)?l.canDeactivate(e,n,t,r):Ne(a,()=>l(e,n,t,r));return Tr(c).pipe(tn())});return M(o).pipe(Si())}function PT(e,n,t,r,i){let o=n.canLoad;if(o===void 0||o.length===0)return M(!0);let s=o.map(a=>{let l=Ai(a,e),c=ET(l)?l.canLoad(n,t):Ne(e,()=>l(n,t)),d=Tr(c);return i?d.pipe(o_(i)):d});return M(s).pipe(Si(),s_(r))}function s_(e){return jc(He(n=>{if(typeof n!="boolean")throw $l(e,n)}),B(n=>n===!0))}function LT(e,n,t,r,i,o){let s=n.canMatch;if(!s||s.length===0)return M(!0);let a=s.map(l=>{let c=Ai(l,e),d=xT(c)?c.canMatch(n,t,i):Ne(e,()=>c(n,t,i));return Tr(d).pipe(o_(o))});return M(a).pipe(Si(),s_(r))}var vn=class e extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,e.prototype)}},Jo=class e extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,e.prototype)}};function VT(e){throw new b(4e3,!1)}function jT(e){throw t_(!1,et.GuardRejected)}var Rh=class{urlSerializer;urlTree;constructor(n,t){this.urlSerializer=n,this.urlTree=t}async lineralizeSegments(n,t){let r=[],i=t.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return r;if(i.numberOfChildren>1||!i.children[k])throw VT(`${n.redirectTo}`);i=i.children[k]}}async applyRedirectCommands(n,t,r,i,o){let s=await BT(t,i,o);if(s instanceof Pt)throw new Jo(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,r);if(s[0]==="/")throw new Jo(a);return a}applyRedirectCreateUrlTree(n,t,r,i){let o=this.createSegmentGroup(n,t.root,r,i);return new Pt(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(n,t){let r={};return Object.entries(n).forEach(([i,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);r[i]=t[a]}else r[i]=o}),r}createSegmentGroup(n,t,r,i){let o=this.createSegments(n,t.segments,r,i),s={};return Object.entries(t.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(n,l,r,i)}),new ee(o,s)}createSegments(n,t,r,i){return t.map(o=>o.path[0]===":"?this.findPosParam(n,o,i):this.findOrReturn(o,r))}findPosParam(n,t,r){let i=r[t.path.substring(1)];if(!i)throw new b(4001,!1);return i}findOrReturn(n,t){let r=0;for(let i of t){if(i.path===n.path)return t.splice(r),i;r++}return n}};function BT(e,n,t){if(typeof e=="string")return Promise.resolve(e);let r=e;return Fl(Tr(Ne(t,()=>r(n))))}function UT(e,n){return e.providers&&!e._injector&&(e._injector=So(e.providers,n,`Route: ${e.path}`)),e._injector??n}function Ft(e){return e.outlet||k}function HT(e,n){let t=e.filter(r=>Ft(r)===n);return t.push(...e.filter(r=>Ft(r)!==n)),t}var Nh={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function a_(e){return{routeConfig:e.routeConfig,url:e.url,params:e.params,queryParams:e.queryParams,fragment:e.fragment,data:e.data,outlet:e.outlet,title:e.title,paramMap:e.paramMap,queryParamMap:e.queryParamMap}}function $T(e,n,t,r,i,o,s){let a=l_(e,n,t);if(!a.matched)return M(a);let l=a_(o(a));return r=UT(n,r),LT(r,n,t,i,l,s).pipe(B(c=>c===!0?a:v({},Nh)))}function l_(e,n,t){if(n.path==="")return n.pathMatch==="full"&&(e.hasChildren()||t.length>0)?v({},Nh):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let i=(n.matcher||LM)(t,e,n);if(!i)return v({},Nh);let o={};Object.entries(i.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=i.consumed.length>0?v(v({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:t.slice(i.consumed.length),parameters:s,positionalParamSegments:i.posParams??{}}}function Rb(e,n,t,r,i){return t.length>0&&WT(e,t,r,i)?{segmentGroup:new ee(n,GT(r,new ee(t,e.children))),slicedSegments:[]}:t.length===0&&qT(e,t,r)?{segmentGroup:new ee(e.segments,zT(e,t,r,e.children)),slicedSegments:t}:{segmentGroup:new ee(e.segments,e.children),slicedSegments:t}}function zT(e,n,t,r){let i={};for(let o of t)if(ql(e,n,o)&&!r[Ft(o)]){let s=new ee([],{});i[Ft(o)]=s}return v(v({},r),i)}function GT(e,n){let t={};t[k]=n;for(let r of e)if(r.path===""&&Ft(r)!==k){let i=new ee([],{});t[Ft(r)]=i}return t}function WT(e,n,t,r){return t.some(i=>!ql(e,n,i)||!(Ft(i)!==k)?!1:!(r!==void 0&&Ft(i)===r))}function qT(e,n,t){return t.some(r=>ql(e,n,r))}function ql(e,n,t){return(e.hasChildren()||n.length>0)&&t.pathMatch==="full"?!1:t.path===""}function ZT(e,n,t){return n.length===0&&!e.children[t]}var Oh=class{};async function YT(e,n,t,r,i,o,s="emptyOnly",a){return new kh(e,n,t,r,i,s,o,a).recognize()}var QT=31,kh=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,t,r,i,o,s,a,l){this.injector=n,this.configLoader=t,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=l,this.applyRedirects=new Rh(this.urlSerializer,this.urlTree)}noMatchError(n){return new b(4002,`'${n.segmentGroup}'`)}async recognize(){let n=Rb(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:r}=await this.match(n),i=new ht(r,t),o=new Hl("",i),s=rT(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(n){let t=new Qo([],Object.freeze({}),Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),k,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,k,t),rootSnapshot:t}}catch(r){if(r instanceof Jo)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof vn?this.noMatchError(r):r}}async processSegmentGroup(n,t,r,i,o){if(r.segments.length===0&&r.hasChildren())return this.processChildren(n,t,r,o);let s=await this.processSegment(n,t,r,r.segments,i,!0,o);return s instanceof ht?[s]:[]}async processChildren(n,t,r,i){let o=[];for(let l of Object.keys(r.children))l==="primary"?o.unshift(l):o.push(l);let s=[];for(let l of o){let c=r.children[l],d=HT(t,l),u=await this.processSegmentGroup(n,d,c,l,i);s.push(...u)}let a=c_(s);return XT(a),a}async processSegment(n,t,r,i,o,s,a){for(let l of t)try{return await this.processSegmentAgainstRoute(l._injector??n,t,l,r,i,o,s,a)}catch(c){if(c instanceof vn||r_(c))continue;throw c}if(ZT(r,i,o))return new Oh;throw new vn(r)}async processSegmentAgainstRoute(n,t,r,i,o,s,a,l){if(Ft(r)!==s&&(s===k||!ql(i,o,r)))throw new vn(i);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,i,r,o,s,l);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,i,t,r,o,s,l);throw new vn(i)}async expandSegmentAgainstRouteUsingRedirect(n,t,r,i,o,s,a){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:u,remainingSegments:h}=l_(t,i,o);if(!l)throw new vn(t);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>QT&&(this.allowRedirects=!1));let p=this.createSnapshot(n,i,o,c,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let m=await this.applyRedirects.applyRedirectCommands(d,i.redirectTo,u,a_(p),n),D=await this.applyRedirects.lineralizeSegments(i,m);return this.processSegment(n,r,t,D.concat(h),s,!1,a)}createSnapshot(n,t,r,i,o){let s=new Qo(r,i,Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,JT(t),Ft(t),t.component??t._loadedComponent??null,t,eS(t),n),a=Ph(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(n,t,r,i,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=Ae=>this.createSnapshot(n,r,Ae.consumedSegments,Ae.parameters,s),l=await Fl($T(t,r,i,n,this.urlSerializer,a,this.abortSignal));if(r.path==="**"&&(t.children={}),!l?.matched)throw new vn(t);n=r._injector??n;let{routes:c}=await this.getChildConfig(n,r,i),d=r._loadedInjector??n,{parameters:u,consumedSegments:h,remainingSegments:p}=l,m=this.createSnapshot(n,r,h,u,s),{segmentGroup:D,slicedSegments:_}=Rb(t,h,p,c,o);if(_.length===0&&D.hasChildren()){let Ae=await this.processChildren(d,c,D,m);return new ht(m,Ae)}if(c.length===0&&_.length===0)return new ht(m,[]);let E=Ft(r)===o,Y=await this.processSegment(d,c,D,_,E?k:o,!0,m);return new ht(m,Y instanceof ht?[Y]:[])}async getChildConfig(n,t,r){if(t.children)return{routes:t.children,injector:n};if(t.loadChildren){if(t._loadedRoutes!==void 0){let o=t._loadedNgModuleFactory;return o&&!t._loadedInjector&&(t._loadedInjector=o.create(n).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Fl(PT(n,t,r,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,t);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}throw jT(t)}return{routes:[],injector:n}}};function XT(e){e.sort((n,t)=>n.value.outlet===k?-1:t.value.outlet===k?1:n.value.outlet.localeCompare(t.value.outlet))}function KT(e){let n=e.value.routeConfig;return n&&n.path===""}function c_(e){let n=[],t=new Set;for(let r of e){if(!KT(r)){n.push(r);continue}let i=n.find(o=>r.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...r.children),t.add(i)):n.push(r)}for(let r of t){let i=c_(r.children);n.push(new ht(r.value,i))}return n.filter(r=>!t.has(r))}function JT(e){return e.data||{}}function eS(e){return e.resolve||{}}function tS(e,n,t,r,i,o,s){return We(async a=>{let{state:l,tree:c}=await YT(e,n,t,r,a.extractedUrl,i,o,s);return P(v({},a),{targetSnapshot:l,urlAfterRedirects:c})})}function nS(e){return We(n=>{let{targetSnapshot:t,guards:{canActivateChecks:r}}=n;if(!r.length)return M(n);let i=new Set(r.map(a=>a.route)),o=new Set;for(let a of i)if(!o.has(a))for(let l of d_(a))o.add(l);let s=0;return de(o).pipe(Br(a=>i.has(a)?rS(a,t,e):(a.data=Ph(a,a.parent,e).resolve,M(void 0))),He(()=>s++),Qs(1),We(a=>s===o.size?M(n):be))})}function d_(e){let n=e.children.map(t=>d_(t)).flat();return[e,...n]}function rS(e,n,t){let r=e.routeConfig,i=e._resolve;return r?.title!==void 0&&!Xb(r)&&(i[es]=r.title),Wi(()=>(e.data=Ph(e,e.parent,t).resolve,iS(i,e,n).pipe(B(o=>(e._resolvedData=o,e.data=v(v({},e.data),o),null)))))}function iS(e,n,t){let r=dh(e);if(r.length===0)return M({});let i={};return de(r).pipe(We(o=>oS(e[o],n,t).pipe(tn(),He(s=>{if(s instanceof Ko)throw $l(new xr,s);i[o]=s}))),Qs(1),B(()=>i),Xn(o=>r_(o)?be:Gi(o)))}function oS(e,n,t){let r=n._environmentInjector,i=Ai(e,r),o=i.resolve?i.resolve(n,t):Ne(r,()=>i(n,t));return Tr(o)}function Nb(e){return st(n=>{let t=e(n);return t?de(t).pipe(B(()=>n)):M(n)})}var u_=(()=>{class e{buildTitle(t){let r,i=t.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===k);return r}getResolvedTitleForRoute(t){return t.data[es]}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:()=>f(sS),providedIn:"root"})}return e})(),sS=(()=>{class e extends u_{title;constructor(t){super(),this.title=t}updateTitle(t){let r=this.buildTitle(t);r!==void 0&&this.title.setTitle(r)}static \u0275fac=function(r){return new(r||e)(C(wb))};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Zl=new g("",{factory:()=>({})}),Yl=new g(""),f_=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=f(Ff);async loadComponent(t,r){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await kb(Ne(t,()=>r.loadComponent())),s=await p_(h_(o));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=s,s}finally{this.componentLoaders.delete(r)}})();return this.componentLoaders.set(r,i),i}loadChildren(t,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await aS(r,this.compiler,t,this.onLoadEndListener);return r._loadedRoutes=o.routes,r._loadedInjector=o.injector,r._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(r)}})();return this.childrenLoaders.set(r,i),i}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();async function aS(e,n,t,r){let i=await kb(Ne(t,()=>e.loadChildren())),o=await p_(h_(i)),s;o instanceof sl||Array.isArray(o)?s=o:s=await n.compileModuleAsync(o),r&&r(e);let a,l,c=!1,d;return Array.isArray(s)?(l=s,c=!0):(a=s.create(t).injector,d=s,l=a.get(Yl,[],{optional:!0,self:!0}).flat()),{routes:l.map(Vh),injector:a,factory:d}}function lS(e){return e&&typeof e=="object"&&"default"in e}function h_(e){return lS(e)?e.default:e}async function p_(e){return e}var jh=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:()=>f(cS),providedIn:"root"})}return e})(),cS=(()=>{class e{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,r){return t}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),m_=new g("");var dS=()=>{},g_=new g(""),v_=(()=>{class e{currentNavigation=Me(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Me(null);events=new j;transitionAbortWithErrorSubject=new j;configLoader=f(f_);environmentInjector=f(ue);destroyRef=f(yt);urlSerializer=f(Gl);rootContexts=f(ts);location=f(mi);inputBindingEnabled=f(Wl,{optional:!0})!==null;titleStrategy=f(u_);options=f(Zl,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=f(jh);createViewTransition=f(m_,{optional:!0});navigationErrorHandler=f(g_,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>M(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=i=>this.events.next(new bh(i)),r=i=>this.events.next(new _h(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let r=++this.navigationId;Fe(()=>{this.transitions?.next(P(v({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(t){return this.transitions=new Ie(null),this.transitions.pipe(Pe(r=>r!==null),st(r=>{let i=!1,o=new AbortController,s=()=>!i&&this.currentTransition?.id===r.id;return M(r).pipe(st(a=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,"",et.SupersededByNewNavigation),be;this.currentTransition=r;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:l?P(v({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let c=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=a.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new Bn(a.id,this.urlSerializer.serialize(a.rawUrl),"",Vl.IgnoredSameUrlNavigation)),a.resolve(!1),be;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return M(a).pipe(st(u=>(this.events.next(new Ii(u.id,this.urlSerializer.serialize(u.extractedUrl),u.source,u.restoredState)),u.id!==this.navigationId?be:Promise.resolve(u))),tS(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),He(u=>{r.targetSnapshot=u.targetSnapshot,r.urlAfterRedirects=u.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=u.urlAfterRedirects,h)),this.events.next(new Yo)}),st(u=>de(r.routesRecognizeHandler.deferredHandle??M(void 0)).pipe(B(()=>u))),He(()=>{let u=new jl(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(u)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:u,extractedUrl:h,source:p,restoredState:m,extras:D}=a,_=new Ii(u,this.urlSerializer.serialize(h),p,m);this.events.next(_);let E=Yb(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=P(v({},a),{targetSnapshot:E,urlAfterRedirects:h,extras:P(v({},D),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Y=>(Y.finalUrl=h,Y)),M(r)}else return this.events.next(new Bn(a.id,this.urlSerializer.serialize(a.extractedUrl),"",Vl.IgnoredByUrlHandlingStrategy)),a.resolve(!1),be}),B(a=>{let l=new mh(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(l),this.currentTransition=r=P(v({},a),{guards:vT(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),r}),TT(a=>this.events.next(a)),st(a=>{if(r.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw $l(this.urlSerializer,a.guardsResult);let l=new gh(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(l),!s())return be;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",et.GuardRejected),be;if(a.guards.canActivateChecks.length===0)return M(a);let c=new vh(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(c),!s())return be;let d=!1;return M(a).pipe(nS(this.paramsInheritanceStrategy),He({next:()=>{d=!0;let u=new yh(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(u)},complete:()=>{d||this.cancelNavigationTransition(a,"",et.NoDataFromResolver)}}))}),Nb(a=>{let l=d=>{let u=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let h=d._environmentInjector;u.push(this.configLoader.loadComponent(h,d.routeConfig).then(p=>{d.component=p}))}for(let h of d.children)u.push(...l(h));return u},c=l(a.targetSnapshot.root);return c.length===0?M(a):de(Promise.all(c).then(()=>a))}),Nb(()=>this.afterPreactivation()),st(()=>{let{currentSnapshot:a,targetSnapshot:l}=r,c=this.createViewTransition?.(this.environmentInjector,a.root,l.root);return c?de(c).pipe(B(()=>r)):M(r)}),wt(1),st(a=>{let l=hT(t.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=r=a=P(v({},a),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new Mi);let c=r.beforeActivateHandler.deferredHandle;return c?de(c.then(()=>a)):M(a)}),He(a=>{new Ah(t.routeReuseStrategy,r.targetRouterState,r.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s()&&(i=!0,this.currentNavigation.update(l=>(l.abort=dS,l)),this.lastSuccessfulNavigation.set(Fe(this.currentNavigation)),this.events.next(new jn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),It(i_(o.signal).pipe(Pe(()=>!i&&!r.targetRouterState),He(()=>{this.cancelNavigationTransition(r,o.signal.reason+"",et.Aborted)}))),He({complete:()=>{i=!0}}),It(this.transitionAbortWithErrorSubject.pipe(He(a=>{throw a}))),Bt(()=>{o.abort(),i||this.cancelNavigationTransition(r,"",et.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Xn(a=>{if(i=!0,this.destroyed)return r.resolve(!1),be;if(n_(a))this.events.next(new kt(r.id,this.urlSerializer.serialize(r.extractedUrl),a.message,a.cancellationCode)),gT(a)?this.events.next(new Ti(a.url,a.navigationBehaviorOptions)):r.resolve(!1);else{let l=new xi(r.id,this.urlSerializer.serialize(r.extractedUrl),a,r.targetSnapshot??void 0);try{let c=Ne(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof Ko){let{message:d,cancellationCode:u}=$l(this.urlSerializer,c);this.events.next(new kt(r.id,this.urlSerializer.serialize(r.extractedUrl),d,u)),this.events.next(new Ti(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),a}catch(c){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(c)}}return be}))}))}cancelNavigationTransition(t,r,i){let o=new kt(t.id,this.urlSerializer.serialize(t.extractedUrl),r,i);this.events.next(o),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=Fe(this.currentNavigation),i=r?.targetBrowserUrl??r?.extractedUrl;return t.toString()!==i?.toString()&&!r?.extras.skipLocationChange}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function uS(e){return e!==Wo}var y_=new g("");var fS=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:()=>f(hS),providedIn:"root"})}return e})(),Fh=class{shouldDetach(n){return!1}store(n,t){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,t){return n.routeConfig===t.routeConfig}shouldDestroyInjector(n){return!0}},hS=(()=>{class e extends Fh{static \u0275fac=(()=>{let t;return function(i){return(t||(t=On(e)))(i||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Bh=(()=>{class e{urlSerializer=f(Gl);options=f(Zl,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=f(mi);urlHandlingStrategy=f(jh);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Pt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:r,targetBrowserUrl:i}){let o=t!==void 0?this.urlHandlingStrategy.merge(t,r):r,s=i??o;return s instanceof Pt?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:t,finalUrl:r,initialUrl:i}){r&&t?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,i),this.routerState=t):this.rawUrlTree=i}routerState=Yb(null,f(ue));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:()=>f(pS),providedIn:"root"})}return e})(),pS=(()=>{class e extends Bh{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(r=>{r.type==="popstate"&&setTimeout(()=>{t(r.url,r.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(t,r){t instanceof Ii?this.updateStateMemento():t instanceof Bn?this.commitTransition(r):t instanceof jl?this.urlUpdateStrategy==="eager"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):t instanceof Mi?(this.commitTransition(r),this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):t instanceof kt&&!Zb(t)?this.restoreHistory(r):t instanceof xi?this.restoreHistory(r,!0):t instanceof jn&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:r,id:i}){let{replaceUrl:o,state:s}=r;if(this.location.isCurrentPathEqualTo(t)||o){let a=this.browserPageId,l=v(v({},s),this.generateNgRouterState(i,a));this.location.replaceState(t,"",l)}else{let a=v(v({},s),this.generateNgRouterState(i,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,r=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===t.finalUrl&&o===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,r){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:r}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(i){return(t||(t=On(e)))(i||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function b_(e,n){e.events.pipe(Pe(t=>t instanceof jn||t instanceof kt||t instanceof xi||t instanceof Bn),B(t=>t instanceof jn||t instanceof Bn?0:(t instanceof kt?t.code===et.Redirect||t.code===et.SupersededByNewNavigation:!1)?2:1),Pe(t=>t!==2),wt(1)).subscribe(()=>{n()})}var Uh=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=f(al);stateManager=f(Bh);options=f(Zl,{optional:!0})||{};pendingTasks=f(un);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=f(v_);urlSerializer=f(Gl);location=f(mi);urlHandlingStrategy=f(jh);injector=f(ue);_events=new j;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=f(fS);injectorCleanup=f(y_,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=f(Yl,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!f(Wl,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ye;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,o=Fe(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof kt&&r.code!==et.Redirect&&r.code!==et.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof jn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof Ti){let s=r.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),l=v({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||uS(i.source)},s);this.scheduleNavigation(a,Wo,null,l,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}dT(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Wo,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,r,i,o)=>{this.navigateToSyncWithBrowser(t,i,r,o)})}navigateToSyncWithBrowser(t,r,i,o){let s=i?.navigationId?i:null;if(i){let l=v({},i);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let a=this.parseUrl(t);this.scheduleNavigation(a,r,s,o).catch(l=>{this.disposed||this.injector.get(bt)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Fe(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Vh),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,r={}){let{relativeTo:i,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=r,c=l?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=v(v({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let u;try{let h=i?i.snapshot:this.routerState.snapshot.root;u=zb(h)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),u=this.currentUrlTree.root}return Gb(u,t,d,c??null,this.urlSerializer)}navigateByUrl(t,r={skipLocationChange:!1}){let i=wi(t)?t:this.parseUrl(t),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,Wo,null,r)}navigate(t,r={skipLocationChange:!1}){return mS(t),this.navigateByUrl(this.createUrlTree(t,r),r)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(wn(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,r){let i;if(r===!0?i=v({},Pb):r===!1?i=v({},uh):i=v(v({},uh),r),wi(t))return xb(this.currentUrlTree,t,i);let o=this.parseUrl(t);return xb(this.currentUrlTree,o,i)}removeEmptyProps(t){return Object.entries(t).reduce((r,[i,o])=>(o!=null&&(r[i]=o),r),{})}scheduleNavigation(t,r,i,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((u,h)=>{a=u,l=h});let d=this.pendingTasks.add();return b_(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:o,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function mS(e){for(let n=0;n<e.length;n++)if(e[n]==null)throw new b(4008,!1)}var gS=new g("");function Hh(e,...n){return on([{provide:Yl,multi:!0,useValue:e},[],{provide:Mr,useFactory:vS},{provide:ll,multi:!0,useFactory:yS},n.map(t=>t.\u0275providers)])}function vS(){return f(Uh).routerState.root}function yS(){let e=f(me);return n=>{let t=e.get(Qt);if(n!==t.components[0])return;let r=e.get(Uh),i=e.get(bS);e.get(_S)===1&&r.initialNavigation(),e.get(DS,null,{optional:!0})?.setUpPreloading(),e.get(gS,null,{optional:!0})?.init(),r.resetRootComponentType(t.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var bS=new g("",{factory:()=>new j}),_S=new g("",{factory:()=>1});var DS=new g("");var __=[];var D_={providers:[eu(),rh(),Hh(__)]};var S_=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,r){this._renderer=t,this._elementRef=r}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(r){return new(r||e)(te(Oe),te(q))};static \u0275dir=U({type:e})}return e})(),CS=(()=>{class e extends S_{static \u0275fac=(()=>{let t;return function(i){return(t||(t=On(e)))(i||e)}})();static \u0275dir=U({type:e,features:[Qe]})}return e})(),lc=new g("");var wS={provide:lc,useExisting:xt(()=>cc),multi:!0};function IS(){let e=Dt()?Dt().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var xS=new g(""),cc=(()=>{class e extends S_{_compositionMode;_composing=!1;constructor(t,r,i){super(t,r),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!IS())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(r){return new(r||e)(te(Oe),te(q),te(xS,8))};static \u0275dir=U({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,i){r&1&&Te("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[Ke([wS]),Qe]})}return e})();function Gh(e){return e==null||Wh(e)===0}function Wh(e){return e==null?null:Array.isArray(e)||typeof e=="string"?e.length:e instanceof Set?e.size:null}var qh=new g(""),Zh=new g(""),MS=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Xl=class{static min(n){return TS(n)}static max(n){return SS(n)}static required(n){return AS(n)}static requiredTrue(n){return RS(n)}static email(n){return NS(n)}static minLength(n){return OS(n)}static maxLength(n){return kS(n)}static pattern(n){return FS(n)}static nullValidator(n){return A_()}static compose(n){return P_(n)}static composeAsync(n){return L_(n)}};function TS(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}function SS(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}function AS(e){return Gh(e.value)?{required:!0}:null}function RS(e){return e.value===!0?null:{required:!0}}function NS(e){return Gh(e.value)||MS.test(e.value)?null:{email:!0}}function OS(e){return n=>{let t=n.value?.length??Wh(n.value);return t===null||t===0?null:t<e?{minlength:{requiredLength:e,actualLength:t}}:null}}function kS(e){return n=>{let t=n.value?.length??Wh(n.value);return t!==null&&t>e?{maxlength:{requiredLength:e,actualLength:t}}:null}}function FS(e){if(!e)return A_;let n,t;return typeof e=="string"?(t="",e.charAt(0)!=="^"&&(t+="^"),t+=e,e.charAt(e.length-1)!=="$"&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),r=>{if(Gh(r.value))return null;let i=r.value;return n.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}function A_(e){return null}function R_(e){return e!=null}function N_(e){return Fn(e)?de(e):e}function O_(e){let n={};return e.forEach(t=>{n=t!=null?v(v({},n),t):n}),Object.keys(n).length===0?null:n}function k_(e,n){return n.map(t=>t(e))}function PS(e){return!e.validate}function F_(e){return e.map(n=>PS(n)?n:t=>n.validate(t))}function P_(e){if(!e)return null;let n=e.filter(R_);return n.length==0?null:function(t){return O_(k_(t,n))}}function Yh(e){return e!=null?P_(F_(e)):null}function L_(e){if(!e)return null;let n=e.filter(R_);return n.length==0?null:function(t){let r=k_(t,n).map(N_);return qi(r).pipe(B(O_))}}function Qh(e){return e!=null?L_(F_(e)):null}function E_(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function V_(e){return e._rawValidators}function j_(e){return e._rawAsyncValidators}function $h(e){return e?Array.isArray(e)?e:[e]:[]}function Kl(e,n){return Array.isArray(e)?e.includes(n):e===n}function C_(e,n){let t=$h(n);return $h(e).forEach(i=>{Kl(t,i)||t.push(i)}),t}function w_(e,n){return $h(n).filter(t=>!Kl(e,t))}var Jl=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Yh(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Qh(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}},Sr=class extends Jl{name;get formDirective(){return null}get path(){return null}},Ar=class extends Jl{_parent=null;name=null;valueAccessor=null},zh=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var B_=(()=>{class e extends zh{constructor(t){super(t)}static \u0275fac=function(r){return new(r||e)(te(Ar,2))};static \u0275dir=U({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,i){r&2&&ne("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[Qe]})}return e})();var rs="VALID",Ql="INVALID",Ri="PENDING",is="DISABLED",Un=class{},ec=class extends Un{value;source;constructor(n,t){super(),this.value=n,this.source=t}},ss=class extends Un{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},as=class extends Un{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},Ni=class extends Un{status;source;constructor(n,t){super(),this.status=n,this.source=t}},tc=class extends Un{source;constructor(n){super(),this.source=n}},nc=class extends Un{source;constructor(n){super(),this.source=n}};function U_(e){return(dc(e)?e.validators:e)||null}function LS(e){return Array.isArray(e)?Yh(e):e||null}function H_(e,n){return(dc(n)?n.asyncValidators:e)||null}function VS(e){return Array.isArray(e)?Qh(e):e||null}function dc(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function jS(e,n,t){let r=e.controls;if(!(n?Object.keys(r):r).length)throw new b(1e3,"");if(!r[t])throw new b(1001,"")}function BS(e,n,t){e._forEachChild((r,i)=>{if(t[i]===void 0)throw new b(-1002,"")})}var rc=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Fe(this.statusReactive)}set status(n){Fe(()=>this.statusReactive.set(n))}_status=Je(()=>this.statusReactive());statusReactive=Me(void 0);get valid(){return this.status===rs}get invalid(){return this.status===Ql}get pending(){return this.status===Ri}get disabled(){return this.status===is}get enabled(){return this.status!==is}errors;get pristine(){return Fe(this.pristineReactive)}set pristine(n){Fe(()=>this.pristineReactive.set(n))}_pristine=Je(()=>this.pristineReactive());pristineReactive=Me(!0);get dirty(){return!this.pristine}get touched(){return Fe(this.touchedReactive)}set touched(n){Fe(()=>this.touchedReactive.set(n))}_touched=Je(()=>this.touchedReactive());touchedReactive=Me(!1);get untouched(){return!this.touched}_events=new j;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(C_(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(C_(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(w_(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(w_(n,this._rawAsyncValidators))}hasValidator(n){return Kl(this._rawValidators,n)}hasAsyncValidator(n){return Kl(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(P(v({},n),{sourceControl:r})),t&&n.emitEvent!==!1&&this._events.next(new as(!0,r))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:r})}),n.onlySelf||this._parent?._updateTouched(n,r),t&&n.emitEvent!==!1&&this._events.next(new as(!1,r))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(P(v({},n),{sourceControl:r})),t&&n.emitEvent!==!1&&this._events.next(new ss(!1,r))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,r),t&&n.emitEvent!==!1&&this._events.next(new ss(!0,r))}markAsPending(n={}){this.status=Ri;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ni(this.status,t)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(P(v({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=is,this.errors=null,this._forEachChild(i=>{i.disable(P(v({},n),{onlySelf:!0}))}),this._updateValue();let r=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ec(this.value,r)),this._events.next(new Ni(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(P(v({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=rs,this._forEachChild(r=>{r.enable(P(v({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(P(v({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n,t){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===rs||this.status===Ri)&&this._runAsyncValidator(r,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ec(this.value,t)),this._events.next(new Ni(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(P(v({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?is:rs}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=Ri,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:n!==!1};let r=N_(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((r,i)=>r&&r._find(i),this)}getError(n,t){let r=t?this.get(t):this;return r?.errors?r.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,r){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||r)&&this._events.next(new Ni(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,r)}_initObservables(){this.valueChanges=new Q,this.statusChanges=new Q}_calculateStatus(){return this._allControlsDisabled()?is:this.errors?Ql:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ri)?Ri:this._anyControlsHaveStatus(Ql)?Ql:rs}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let r=!this._anyControlsDirty(),i=this.pristine!==r;this.pristine=r,n.onlySelf||this._parent?._updatePristine(n,t),i&&this._events.next(new ss(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new as(this.touched,t)),n.onlySelf||this._parent?._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){dc(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=LS(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=VS(this._rawAsyncValidators)}},ic=class extends rc{constructor(n,t,r){super(U_(t),H_(r,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,r={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,r={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){BS(this,!0,n),Object.keys(n).forEach(r=>{jS(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){n!=null&&(Object.keys(n).forEach(r=>{let i=this.controls[r];i&&i.patchValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((r,i)=>{r.reset(n?n[i]:null,P(v({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new nc(this))}getRawValue(){return this._reduceChildren({},(n,t,r)=>(n[r]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,r)=>r._syncPendingControls()?!0:t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{let r=this.controls[t];r&&n(r,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[t,r]of Object.entries(this.controls))if(this.contains(t)&&n(r))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(t,r,i)=>((r.enabled||this.disabled)&&(t[i]=r.value),t))}_reduceChildren(n,t){let r=n;return this._forEachChild((i,o)=>{r=t(r,i,o)}),r}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var uc=new g("",{factory:()=>Xh}),Xh="always";function US(e,n){return[...n.path,e]}function oc(e,n,t=Xh){Kh(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),$S(e,n),GS(e,n),zS(e,n),HS(e,n)}function I_(e,n,t=!0){let r=()=>{};n?.valueAccessor?.registerOnChange(r),n?.valueAccessor?.registerOnTouched(r),ac(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function sc(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function HS(e,n){if(n.valueAccessor.setDisabledState){let t=r=>{n.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function Kh(e,n){let t=V_(e);n.validator!==null?e.setValidators(E_(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let r=j_(e);n.asyncValidator!==null?e.setAsyncValidators(E_(r,n.asyncValidator)):typeof r=="function"&&e.setAsyncValidators([r]);let i=()=>e.updateValueAndValidity();sc(n._rawValidators,i),sc(n._rawAsyncValidators,i)}function ac(e,n){let t=!1;if(e!==null){if(n.validator!==null){let i=V_(e);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==n.validator);o.length!==i.length&&(t=!0,e.setValidators(o))}}if(n.asyncValidator!==null){let i=j_(e);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==n.asyncValidator);o.length!==i.length&&(t=!0,e.setAsyncValidators(o))}}}let r=()=>{};return sc(n._rawValidators,r),sc(n._rawAsyncValidators,r),t}function $S(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&$_(e,n)})}function zS(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&$_(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function $_(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function GS(e,n){let t=(r,i)=>{n.valueAccessor.writeValue(r),i&&n.viewToModelUpdate(r)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function z_(e,n){e==null,Kh(e,n)}function WS(e,n){return ac(e,n)}function qS(e,n){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function ZS(e){return Object.getPrototypeOf(e.constructor)===CS}function G_(e,n){e._syncPendingControls(),n.forEach(t=>{let r=t.control;r.updateOn==="submit"&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function YS(e,n){if(!n)return null;Array.isArray(n);let t,r,i;return n.forEach(o=>{o.constructor===cc?t=o:ZS(o)?r=o:i=o}),i||r||t||null}function QS(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}var XS={provide:Sr,useExisting:xt(()=>Jh)},os=Promise.resolve(),Jh=(()=>{class e extends Sr{callSetDisabledState;get submitted(){return Fe(this.submittedReactive)}_submitted=Je(()=>this.submittedReactive());submittedReactive=Me(!1);_directives=new Set;form;ngSubmit=new Q;options;constructor(t,r,i){super(),this.callSetDisabledState=i,this.form=new ic({},Yh(t),Qh(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){os.then(()=>{let r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),oc(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){os.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){os.then(()=>{let r=this._findContainer(t.path),i=new ic({});z_(i,t),r.registerControl(t.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){os.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){os.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),G_(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new tc(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(r){return new(r||e)(te(qh,10),te(Zh,10),te(uc,8))};static \u0275dir=U({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,i){r&1&&Te("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ke([XS]),Qe]})}return e})();function x_(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function M_(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var W_=class extends rc{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,r){super(U_(t),H_(r,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),dc(t)&&(t.nonNullable||t.initialValueIsDefault)&&(M_(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new nc(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){x_(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){x_(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){M_(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var KS=e=>e instanceof W_;var JS={provide:Ar,useExisting:xt(()=>ep)},T_=Promise.resolve(),ep=(()=>{class e extends Ar{_changeDetectorRef;callSetDisabledState;control=new W_;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new Q;constructor(t,r,i,o,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=t,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=YS(this,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),qS(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){oc(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){T_.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let r=t.isDisabled.currentValue,i=r!==0&&Se(r);T_.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?US(t,this._parent):[t]}static \u0275fac=function(r){return new(r||e)(te(Sr,9),te(qh,10),te(Zh,10),te(lc,10),te(ft,8),te(uc,8))};static \u0275dir=U({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Ke([JS]),Qe,Zt]})}return e})();var eA=(()=>{class e extends Sr{callSetDisabledState;get submitted(){return Fe(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=Je(()=>this._submittedReactive());_submittedReactive=Me(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,r,i){super(),this.callSetDisabledState=i,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(ac(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let r=this.form.get(t.path);return oc(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){I_(t.control||null,t,!1),QS(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,r){this.form.get(t.path).setValue(r)}onReset(){this.resetForm()}resetForm(t=void 0,r={}){this.form.reset(t,r),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,G_(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new tc(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,i=this.form.get(t.path);r!==i&&(I_(r||null,t),KS(i)&&(oc(i,t,this.callSetDisabledState),t.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);z_(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let r=this.form?.get(t.path);r&&WS(r,t)&&r.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Kh(this.form,this),this._oldForm&&ac(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(r){return new(r||e)(te(qh,10),te(Zh,10),te(uc,8))};static \u0275dir=U({type:e,features:[Qe,Zt]})}return e})();var tA={provide:Sr,useExisting:xt(()=>tp)},tp=(()=>{class e extends eA{form=null;ngSubmit=new Q;get control(){return this.form}static \u0275fac=(()=>{let t;return function(i){return(t||(t=On(e)))(i||e)}})();static \u0275dir=U({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,i){r&1&&Te("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ke([tA]),Qe]})}return e})();var nA=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=X({type:e});static \u0275inj=Z({})}return e})();var q_=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:uc,useValue:t.callSetDisabledState??Xh}]}}static \u0275fac=function(r){return new(r||e)};static \u0275mod=X({type:e});static \u0275inj=Z({imports:[nA]})}return e})();function ls(e){return e.buttons===0||e.detail===0}function cs(e){let n=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var np;function Z_(){if(np==null){let e=typeof document<"u"?document.head:null;np=!!(e&&(e.createShadowRoot||e.attachShadow))}return np}function rp(e){if(Z_()){let n=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Lt(e){return e.composedPath?e.composedPath()[0]:e.target}var ip;try{ip=typeof Intl<"u"&&Intl.v8BreakIterator}catch{ip=!1}var Ce=(()=>{class e{_platformId=f(vr);isBrowser=this._platformId?rb(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||ip)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ds;function Y_(){if(ds==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ds=!0}))}finally{ds=ds||!1}return ds}function Oi(e){return Y_()?e:!!e.capture}function Vt(e){return e instanceof q?e.nativeElement:e}var Q_=new g("cdk-input-modality-detector-options"),X_={ignoreKeys:[18,17,224,91,16]},K_=650,op={passive:!0,capture:!0},J_=(()=>{class e{_platform=f(Ce);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ie(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(r=>r===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Lt(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<K_||(this._modality.next(ls(t)?"keyboard":"mouse"),this._mostRecentTarget=Lt(t))};_onTouchstart=t=>{if(cs(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Lt(t)};constructor(){let t=f(F),r=f(z),i=f(Q_,{optional:!0});if(this._options=v(v({},X_),i),this.modalityDetected=this._modality.pipe(Qc(1)),this.modalityChanged=this.modalityDetected.pipe(Wc()),this._platform.isBrowser){let o=f(ct).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[o.listen(r,"keydown",this._onKeydown,op),o.listen(r,"mousedown",this._onMousedown,op),o.listen(r,"touchstart",this._onTouchstart,op)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),us=(function(e){return e[e.IMMEDIATE=0]="IMMEDIATE",e[e.EVENTUAL=1]="EVENTUAL",e})(us||{}),eD=new g("cdk-focus-monitor-default-options"),fc=Oi({passive:!0,capture:!0}),sp=(()=>{class e{_ngZone=f(F);_platform=f(Ce);_inputModalityDetector=f(J_);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=f(z);_stopInputModalityDetector=new j;constructor(){let t=f(eD,{optional:!0});this._detectionMode=t?.detectionMode||us.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let r=Lt(t);for(let i=r;i;i=i.parentElement)t.type==="focus"?this._onFocus(t,i):this._onBlur(t,i)};monitor(t,r=!1){let i=Vt(t);if(!this._platform.isBrowser||i.nodeType!==1)return M();let o=rp(i)||this._document,s=this._elementInfo.get(i);if(s)return r&&(s.checkChildren=!0),s.subject;let a={checkChildren:r,subject:new j,rootNode:o};return this._elementInfo.set(i,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(t){let r=Vt(t),i=this._elementInfo.get(r);i&&(i.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(i))}focusVia(t,r,i){let o=Vt(t),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,l])=>this._originChanged(a,r,l)):(this._setOrigin(r),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((t,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===us.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,r){t.classList.toggle("cdk-focused",!!r),t.classList.toggle("cdk-touch-focused",r==="touch"),t.classList.toggle("cdk-keyboard-focused",r==="keyboard"),t.classList.toggle("cdk-mouse-focused",r==="mouse"),t.classList.toggle("cdk-program-focused",r==="program")}_setOrigin(t,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&r,this._detectionMode===us.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?K_:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(t,r){let i=this._elementInfo.get(r),o=Lt(t);!i||!i.checkChildren&&r!==o||this._originChanged(r,this._getFocusOrigin(o),i)}_onBlur(t,r){let i=this._elementInfo.get(r);!i||i.checkChildren&&t.relatedTarget instanceof Node&&r.contains(t.relatedTarget)||(this._setClasses(r),this._emitOrigin(i,null))}_emitOrigin(t,r){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(r))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let r=t.rootNode,i=this._rootNodeFocusListenerCount.get(r)||0;i||this._ngZone.runOutsideAngular(()=>{r.addEventListener("focus",this._rootNodeFocusAndBlurListener,fc),r.addEventListener("blur",this._rootNodeFocusAndBlurListener,fc)}),this._rootNodeFocusListenerCount.set(r,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(It(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let r=t.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let i=this._rootNodeFocusListenerCount.get(r);i>1?this._rootNodeFocusListenerCount.set(r,i-1):(r.removeEventListener("focus",this._rootNodeFocusAndBlurListener,fc),r.removeEventListener("blur",this._rootNodeFocusAndBlurListener,fc),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,r,i){this._setClasses(t,r),this._emitOrigin(i,r),this._lastFocusOrigin=r}_getClosestElementsInfo(t){let r=[];return this._elementInfo.forEach((i,o)=>{(o===t||i.checkChildren&&o.contains(t))&&r.push([o,i])}),r}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:r,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!r||r===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let o=t.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(r))return!0}return!1}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var hc=new WeakMap,yn=(()=>{class e{_appRef;_injector=f(me);_environmentInjector=f(ue);load(t){let r=this._appRef=this._appRef||this._injector.get(Qt),i=hc.get(r);i||(i={loaders:new Set,refs:[]},hc.set(r,i),r.onDestroy(()=>{hc.get(r)?.refs.forEach(o=>o.destroy()),hc.delete(r)})),i.loaders.has(t)||(i.loaders.add(t),i.refs.push(Qy(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var pc;function iA(){if(pc===void 0&&(pc=null,typeof window<"u")){let e=window;e.trustedTypes!==void 0&&(pc=e.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return pc}function ki(e){return iA()?.createHTML(e)||e}var tD=new Set,Rr,ap=(()=>{class e{_platform=f(Ce);_nonce=f(yr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):sA}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&oA(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function oA(e,n){if(!tD.has(e))try{Rr||(Rr=document.createElement("style"),n&&Rr.setAttribute("nonce",n),Rr.setAttribute("type","text/css"),document.head.appendChild(Rr)),Rr.sheet&&(Rr.sheet.insertRule(`@media ${e} {body{ }}`,0),tD.add(e))}catch(t){console.error(t)}}function sA(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var aA=(()=>{class e{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var nD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=X({type:e});static \u0275inj=Z({providers:[aA]})}return e})();var lp={},Hn=class e{_appId=f(si);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,t=!1){return this._appId!=="ng"&&(n+=this._appId),lp.hasOwnProperty(n)||(lp[n]=0),`${n}${t?e._infix+"-":""}${lp[n]++}`}static \u0275fac=function(t){return new(t||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})};var Fi,rD=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function cp(){if(Fi)return Fi;if(typeof document!="object"||!document)return Fi=new Set(rD),Fi;let e=document.createElement("input");return Fi=new Set(rD.filter(n=>(e.setAttribute("type",n),e.type===n))),Fi}var lA=new g("MATERIAL_ANIMATIONS"),iD=null;function dp(){return f(lA,{optional:!0})?.animationsDisabled||f(Ju,{optional:!0})==="NoopAnimations"?"di-disabled":(iD??=f(ap).matchMedia("(prefers-reduced-motion)").matches,iD?"reduced-motion":"enabled")}function Jt(){return dp()!=="enabled"}function Pi(e){return e!=null&&`${e}`!="false"}var tt=(function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e})(tt||{}),up=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=tt.HIDDEN;constructor(n,t,r,i=!1){this._renderer=n,this.element=t,this.config=r,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},oD=Oi({passive:!0,capture:!0}),fp=class{_events=new Map;addHandler(n,t,r,i){let o=this._events.get(t);if(o){let s=o.get(r);s?s.add(i):o.set(r,new Set([i]))}else this._events.set(t,new Map([[r,new Set([i])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,oD)})}removeHandler(n,t,r){let i=this._events.get(n);if(!i)return;let o=i.get(t);o&&(o.delete(r),o.size===0&&i.delete(t),i.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,oD)))}_delegateEventHandler=n=>{let t=Lt(n);t&&this._events.get(n.type)?.forEach((r,i)=>{(i===t||i.contains(t))&&r.forEach(o=>o.handleEvent(n))})}},fs={enterDuration:225,exitDuration:150},dA=800,sD=Oi({passive:!0,capture:!0}),aD=["mousedown","touchstart"],lD=["mouseup","mouseleave","touchend","touchcancel"],uA=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=re({type:e,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return e})(),hs=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new fp;constructor(n,t,r,i,o){this._target=n,this._ngZone=t,this._platform=i,i.isBrowser&&(this._containerElement=Vt(r)),o&&o.get(yn).load(uA)}fadeInRipple(n,t,r={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=v(v({},fs),r.animation);r.centered&&(n=i.left+i.width/2,t=i.top+i.height/2);let s=r.radius||fA(n,t,i),a=n-i.left,l=t-i.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${l-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,r.color!=null&&(d.style.backgroundColor=r.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let u=window.getComputedStyle(d),h=u.transitionProperty,p=u.transitionDuration,m=h==="none"||p==="0s"||p==="0s, 0s"||i.width===0&&i.height===0,D=new up(this,d,r,m);d.style.transform="scale3d(1, 1, 1)",D.state=tt.FADING_IN,r.persistent||(this._mostRecentTransientRipple=D);let _=null;return!m&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let E=()=>{_&&(_.fallbackTimer=null),clearTimeout(Ae),this._finishRippleTransition(D)},Y=()=>this._destroyRipple(D),Ae=setTimeout(Y,c+100);d.addEventListener("transitionend",E),d.addEventListener("transitioncancel",Y),_={onTransitionEnd:E,onTransitionCancel:Y,fallbackTimer:Ae}}),this._activeRipples.set(D,_),(m||!c)&&this._finishRippleTransition(D),D}fadeOutRipple(n){if(n.state===tt.FADING_OUT||n.state===tt.HIDDEN)return;let t=n.element,r=v(v({},fs),n.config.animation);t.style.transitionDuration=`${r.exitDuration}ms`,t.style.opacity="0",n.state=tt.FADING_OUT,(n._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=Vt(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,aD.forEach(r=>{e._eventManager.addHandler(this._ngZone,r,t,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{lD.forEach(t=>{this._triggerElement.addEventListener(t,this,sD)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===tt.FADING_IN?this._startFadeOutTransition(n):n.state===tt.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:r}=n.config;n.state=tt.VISIBLE,!r&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=tt.HIDDEN,t!==null&&(n.element.removeEventListener("transitionend",t.onTransitionEnd),n.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=ls(n),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+dA;!this._target.rippleDisabled&&!t&&!r&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!cs(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let r=0;r<t.length;r++)this.fadeInRipple(t[r].clientX,t[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===tt.VISIBLE||n.config.terminateOnPointerUp&&n.state===tt.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(aD.forEach(t=>e._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(lD.forEach(t=>n.removeEventListener(t,this,sD)),this._pointerUpEventsRegistered=!1))}};function fA(e,n,t){let r=Math.max(Math.abs(e-t.left),Math.abs(e-t.right)),i=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(r*r+i*i)}var ps=new g("mat-ripple-global-options"),hp=(()=>{class e{_elementRef=f(q);_animationsDisabled=Jt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=f(F),r=f(Ce),i=f(ps,{optional:!0}),o=f(me);this._globalOptions=i||{},this._rippleRenderer=new hs(this,t,this._elementRef,r,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:v(v(v({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,r=0,i){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,r,v(v({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,v(v({},this.rippleConfig),t))}static \u0275fac=function(r){return new(r||e)};static \u0275dir=U({type:e,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(r,i){r&2&&ne("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return e})();var hA={capture:!0},pA=["focus","mousedown","mouseenter","touchstart"],pp="mat-ripple-loader-uninitialized",mp="mat-ripple-loader-class-name",cD="mat-ripple-loader-centered",mc="mat-ripple-loader-disabled",dD=(()=>{class e{_document=f(z);_animationsDisabled=Jt();_globalRippleOptions=f(ps,{optional:!0});_platform=f(Ce);_ngZone=f(F);_injector=f(me);_eventCleanups;_hosts=new Map;constructor(){let t=f(ct).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>pA.map(r=>t.listen(this._document,r,this._onInteraction,hA)))}ngOnDestroy(){let t=this._hosts.keys();for(let r of t)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(t,r){t.setAttribute(pp,this._globalRippleOptions?.namespace??""),(r.className||!t.hasAttribute(mp))&&t.setAttribute(mp,r.className||""),r.centered&&t.setAttribute(cD,""),r.disabled&&t.setAttribute(mc,"")}setDisabled(t,r){let i=this._hosts.get(t);i?(i.target.rippleDisabled=r,!r&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(t))):r?t.setAttribute(mc,""):t.removeAttribute(mc)}_onInteraction=t=>{let r=Lt(t);if(r instanceof HTMLElement){let i=r.closest(`[${pp}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let r=this._document.createElement("span");r.classList.add("mat-ripple",t.getAttribute(mp)),t.append(r);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??fs.enterDuration,s=this._animationsDisabled?0:i?.animation?.exitDuration??fs.exitDuration,a={rippleDisabled:this._animationsDisabled||i?.disabled||t.hasAttribute(mc),rippleConfig:{centered:t.hasAttribute(cD),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},l=new hs(a,this._ngZone,r,this._platform,this._injector),c=!a.rippleDisabled;c&&l.setupTriggerEvents(t),this._hosts.set(t,{target:a,renderer:l,hasSetUpEvents:c}),t.removeAttribute(pp)}destroyRipple(t){let r=this._hosts.get(t);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var gc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=re({type:e,selectors:[["structural-styles"]],decls:0,vars:0,template:function(r,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return e})();var mA=["mat-icon-button",""],gA=["*"],vA=new g("MAT_BUTTON_CONFIG");function uD(e){return e==null?void 0:it(e)}var gp=(()=>{class e{_elementRef=f(q);_ngZone=f(F);_animationsDisabled=Jt();_config=f(vA,{optional:!0});_focusMonitor=f(sp);_cleanupClick;_renderer=f(Oe);_rippleLoader=f(dD);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){f(yn).load(gc);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",r){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(r){return new(r||e)};static \u0275dir=U({type:e,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(r,i){r&2&&(je("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),Xt(i.color?"mat-"+i.color:""),ne("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Se],disabled:[2,"disabled","disabled",Se],ariaDisabled:[2,"aria-disabled","ariaDisabled",Se],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Se],tabIndex:[2,"tabIndex","tabIndex",uD],_tabindex:[2,"tabindex","_tabindex",uD]}})}return e})(),vp=(()=>{class e extends gp{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=re({type:e,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Qe],attrs:mA,ngContentSelectors:gA,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(Xe(),ze(0,"span",0),se(1),ze(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return e})();var yA=new g("cdk-dir-doc",{providedIn:"root",factory:()=>f(z)}),bA=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function fD(e){let n=e?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?bA.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var ms=(()=>{class e{get value(){return this.valueSignal()}valueSignal=Me("ltr");change=new Q;constructor(){let t=f(yA,{optional:!0});if(t){let r=t.body?t.body.dir:null,i=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(fD(r||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ge=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=X({type:e});static \u0275inj=Z({})}return e})();var vc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=X({type:e});static \u0275inj=Z({imports:[Ge]})}return e})();var _A=["matButton",""],DA=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],EA=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var hD=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),pD=(()=>{class e extends gp{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=CA(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let r=this._elementRef.nativeElement.classList,i=this._appearance?hD.get(this._appearance):null,o=hD.get(t);i&&r.remove(...i),r.add(...o),this._appearance=t}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=re({type:e,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Qe],attrs:_A,ngContentSelectors:EA,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(Xe(DA),ze(0,"span",0),se(1),dt(2,"span",1),se(3,1),ut(),se(4,2),ze(5,"span",2)(6,"span",3)),r&2&&ne("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return e})();function CA(e){return e.hasAttribute("mat-raised-button")?"elevated":e.hasAttribute("mat-stroked-button")?"outlined":e.hasAttribute("mat-flat-button")?"filled":e.hasAttribute("mat-button")?"text":null}var mD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=X({type:e});static \u0275inj=Z({imports:[vc,Ge]})}return e})();var IA=["*"];var xA=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],MA=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],TA=new g("MAT_CARD_CONFIG"),gD=(()=>{class e{appearance;constructor(){let t=f(TA,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=re({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(r,i){r&2&&ne("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:IA,decls:1,vars:0,template:function(r,i){r&1&&(Xe(),se(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return e})(),vD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=U({type:e,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return e})();var yD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=U({type:e,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return e})(),bD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=U({type:e,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return e})();var _D=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=re({type:e,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:MA,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(r,i){r&1&&(Xe(xA),se(0),dt(1,"div",0),se(2,1),ut(),se(3,2))},encapsulation:2,changeDetection:0})}return e})();var DD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=X({type:e});static \u0275inj=Z({imports:[Ge]})}return e})();var yp=class{_box;_destroyed=new j;_resizeSubject=new j;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new V(t=>{let r=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),r.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Pe(t=>t.some(r=>r.target===n)),Yc({bufferSize:1,refCount:!0}),It(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},ED=(()=>{class e{_cleanupErrorListener;_observers=new Map;_ngZone=f(F);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,r){let i=r?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new yp(i)),this._observers.get(i).observe(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var AA=["notch"],RA=["matFormFieldNotchedOutline",""],NA=["*"],CD=["iconPrefixContainer"],wD=["textPrefixContainer"],ID=["iconSuffixContainer"],xD=["textSuffixContainer"],OA=["textField"],kA=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],FA=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function PA(e,n){e&1&&ke(0,"span",21)}function LA(e,n){if(e&1&&(x(0,"label",20),se(1,1),ie(2,PA,1,0,"span",21),A()),e&2){let t=ce(2);Ee("floating",t._shouldLabelFloat())("monitorResize",t._hasOutline())("id",t._labelId),je("for",t._control.disableAutomaticLabeling?null:t._control.id),S(2),oe(!t.hideRequiredMarker&&t._control.required?2:-1)}}function VA(e,n){if(e&1&&ie(0,LA,3,5,"label",20),e&2){let t=ce();oe(t._hasFloatingLabel()?0:-1)}}function jA(e,n){e&1&&ke(0,"div",7)}function BA(e,n){}function UA(e,n){if(e&1&&li(0,BA,0,0,"ng-template",13),e&2){ce(2);let t=fl(1);Ee("ngTemplateOutlet",t)}}function HA(e,n){if(e&1&&(x(0,"div",9),ie(1,UA,1,1,null,13),A()),e&2){let t=ce();Ee("matFormFieldNotchedOutlineOpen",t._shouldLabelFloat()),S(),oe(t._forceDisplayInfixLabel()?-1:1)}}function $A(e,n){e&1&&(x(0,"div",10,2),se(2,2),A())}function zA(e,n){e&1&&(x(0,"div",11,3),se(2,3),A())}function GA(e,n){}function WA(e,n){if(e&1&&li(0,GA,0,0,"ng-template",13),e&2){ce();let t=fl(1);Ee("ngTemplateOutlet",t)}}function qA(e,n){e&1&&(x(0,"div",14,4),se(2,4),A())}function ZA(e,n){e&1&&(x(0,"div",15,5),se(2,5),A())}function YA(e,n){e&1&&ke(0,"div",16)}function QA(e,n){e&1&&(x(0,"div",18),se(1,6),A())}function XA(e,n){if(e&1&&(x(0,"mat-hint",22),pe(1),A()),e&2){let t=ce(2);Ee("id",t._hintLabelId),S(),Ot(t.hintLabel)}}function KA(e,n){if(e&1&&(x(0,"div",19),ie(1,XA,2,2,"mat-hint",22),se(2,7),ke(3,"div",23),se(4,8),A()),e&2){let t=ce();S(),oe(t.hintLabel?1:-1)}}var gs=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=U({type:e,selectors:[["mat-label"]]})}return e})(),JA=new g("MatError");var bp=(()=>{class e{align="start";id=f(Hn).getId("mat-mdc-hint-");static \u0275fac=function(r){return new(r||e)};static \u0275dir=U({type:e,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(r,i){r&2&&(ui("id",i.id),je("align",null),ne("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return e})(),eR=new g("MatPrefix");var tR=new g("MatSuffix");var OD=new g("FloatingLabelParent"),MD=(()=>{class e{_elementRef=f(q);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=f(ED);_ngZone=f(F);_parent=f(OD);_resizeSubscription=new ye;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return nR(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(r){return new(r||e)};static \u0275dir=U({type:e,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(r,i){r&2&&ne("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return e})();function nR(e){let n=e;if(n.offsetParent!==null)return n.scrollWidth;let t=n.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);let r=t.scrollWidth;return t.remove(),r}var TD="mdc-line-ripple--active",yc="mdc-line-ripple--deactivating",SD=(()=>{class e{_elementRef=f(q);_cleanupTransitionEnd;constructor(){let t=f(F),r=f(Oe);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=r.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(yc),t.add(TD)}deactivate(){this._elementRef.nativeElement.classList.add(yc)}_handleTransitionEnd=t=>{let r=this._elementRef.nativeElement.classList,i=r.contains(yc);t.propertyName==="opacity"&&i&&r.remove(TD,yc)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(r){return new(r||e)};static \u0275dir=U({type:e,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return e})(),AD=(()=>{class e{_elementRef=f(q);_ngZone=f(F);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,r=t.querySelector(".mdc-floating-label");r?(t.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(r.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>r.style.transitionDuration="")}))):t.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(t){let r=this._notch.nativeElement;!this.open||!t?r.style.width="":r.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${t}px)`)}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=re({type:e,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(r,i){if(r&1&&Pn(AA,5),r&2){let o;fe(o=he())&&(i._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(r,i){r&2&&ne("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:RA,ngContentSelectors:NA,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(r,i){r&1&&(Xe(),ze(0,"div",1),dt(1,"div",2,0),se(3),ut(),ze(4,"div",3))},encapsulation:2,changeDetection:0})}return e})(),_p=(()=>{class e{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(r){return new(r||e)};static \u0275dir=U({type:e})}return e})();var Dp=new g("MatFormField"),rR=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),RD="fill",iR="auto",ND="fixed",oR="translateY(-50%)",bc=(()=>{class e{_elementRef=f(q);_changeDetectorRef=f(ft);_platform=f(Ce);_idGenerator=f(Hn);_ngZone=f(F);_defaults=f(rR,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Fo("iconPrefixContainer");_textPrefixContainerSignal=Fo("textPrefixContainer");_iconSuffixContainerSignal=Fo("iconSuffixContainer");_textSuffixContainerSignal=Fo("textSuffixContainer");_prefixSuffixContainers=Je(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=qy(gs);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=Pi(t)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||iR}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let r=t||this._defaults?.appearance||RD;this._appearanceSignal.set(r)}_appearanceSignal=Me(RD);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ND}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||ND}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new j;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Jt();constructor(){let t=this._defaults,r=f(ms);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),po(()=>this._currentDirection=r.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Je(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(t){let r=this._control,i="mat-mdc-form-field-type-";t&&this._elementRef.nativeElement.classList.remove(i+t.controlType),r.controlType&&this._elementRef.nativeElement.classList.add(i+r.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=r.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=r.stateChanges.pipe(Yi([void 0,void 0]),B(()=>[r.errorState,r.userAriaDescribedBy]),qc(),Pe(([[o,s],[a,l]])=>o!==a||s!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),r.ngControl&&r.ngControl.valueChanges&&(this._valueChanges=r.ngControl.valueChanges.pipe(It(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Gc(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",t),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",t)}_syncOutlineLabelOffset(){vl({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Je(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let r=this._control?this._control.ngControl:null;return r&&r[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&t.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?t.push(o.id):this._hintLabel&&t.push(this._hintLabelId),s&&t.push(s.id)}else this._errorChildren&&t.push(...this._errorChildren.map(o=>o.id));let r=this._control.describedByIds,i;if(r){let o=this._describedByIds||t;i=t.concat(r.filter(s=>s&&!o.includes(s)))}else i=t;this._control.setDescribedByIds(i),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,r=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=t?.getBoundingClientRect().width??0,a=r?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",u=`${s+a}px`,p=`calc(${d} * (${u} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,m=`var(--mat-mdc-form-field-label-transform, ${oR} translateX(${p}))`,D=s+a+l+c;return[m,D]}_writeOutlinedLabelStyles(t){if(t!==null){let[r,i]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=r),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let r=t.getRootNode();return r&&r!==t}return document.documentElement.contains(t)}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=re({type:e,selectors:[["mat-form-field"]],contentQueries:function(r,i,o){if(r&1&&(cl(o,i._labelChild,gs,5),fi(o,_p,5)(o,eR,5)(o,tR,5)(o,JA,5)(o,bp,5)),r&2){ul();let s;fe(s=he())&&(i._formFieldControl=s.first),fe(s=he())&&(i._prefixChildren=s),fe(s=he())&&(i._suffixChildren=s),fe(s=he())&&(i._errorChildren=s),fe(s=he())&&(i._hintChildren=s)}},viewQuery:function(r,i){if(r&1&&(dl(i._iconPrefixContainerSignal,CD,5)(i._textPrefixContainerSignal,wD,5)(i._iconSuffixContainerSignal,ID,5)(i._textSuffixContainerSignal,xD,5),Pn(OA,5)(CD,5)(wD,5)(ID,5)(xD,5)(MD,5)(AD,5)(SD,5)),r&2){ul(4);let o;fe(o=he())&&(i._textField=o.first),fe(o=he())&&(i._iconPrefixContainer=o.first),fe(o=he())&&(i._textPrefixContainer=o.first),fe(o=he())&&(i._iconSuffixContainer=o.first),fe(o=he())&&(i._textSuffixContainer=o.first),fe(o=he())&&(i._floatingLabel=o.first),fe(o=he())&&(i._notchedOutline=o.first),fe(o=he())&&(i._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(r,i){r&2&&ne("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ke([{provide:Dp,useExisting:e},{provide:OD,useExisting:e}])],ngContentSelectors:FA,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(r,i){if(r&1&&(Xe(kA),li(0,VA,1,1,"ng-template",null,0,kf),x(2,"div",6,1),Te("click",function(s){return i._control.onContainerClick(s)}),ie(4,jA,1,0,"div",7),x(5,"div",8),ie(6,HA,2,2,"div",9),ie(7,$A,3,0,"div",10),ie(8,zA,3,0,"div",11),x(9,"div",12),ie(10,WA,1,1,null,13),se(11),A(),ie(12,qA,3,0,"div",14),ie(13,ZA,3,0,"div",15),A(),ie(14,YA,1,0,"div",16),A(),x(15,"div",17),ie(16,QA,2,0,"div",18)(17,KA,5,1,"div",19),A()),r&2){let o;S(2),ne("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),S(2),oe(!i._hasOutline()&&!i._control.disabled?4:-1),S(2),oe(i._hasOutline()?6:-1),S(),oe(i._hasIconPrefix?7:-1),S(),oe(i._hasTextPrefix?8:-1),S(2),oe(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),S(2),oe(i._hasTextSuffix?12:-1),S(),oe(i._hasIconSuffix?13:-1),S(),oe(i._hasOutline()?-1:14),S(),ne("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let s=i._getSubscriptMessageType();S(),oe((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[MD,AD,$f,SD,bp],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return e})();var vs=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=X({type:e});static \u0275inj=Z({imports:[nD,bc,Ge]})}return e})();function kD(e){return Error(`Unable to find icon with the name "${e}"`)}function aR(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function FD(e){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${e}".`)}function PD(e){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${e}".`)}var bn=class{url;svgText;options;svgElement=null;constructor(n,t,r){this.url=n,this.svgText=t,this.options=r}},VD=(()=>{class e{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,r,i,o){this._httpClient=t,this._sanitizer=r,this._errorHandler=o,this._document=i}addSvgIcon(t,r,i){return this.addSvgIconInNamespace("",t,r,i)}addSvgIconLiteral(t,r,i){return this.addSvgIconLiteralInNamespace("",t,r,i)}addSvgIconInNamespace(t,r,i,o){return this._addSvgIconConfig(t,r,new bn(i,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,r,i,o){let s=this._sanitizer.sanitize(Ye.HTML,i);if(!s)throw PD(i);let a=ki(s);return this._addSvgIconConfig(t,r,new bn("",a,o))}addSvgIconSet(t,r){return this.addSvgIconSetInNamespace("",t,r)}addSvgIconSetLiteral(t,r){return this.addSvgIconSetLiteralInNamespace("",t,r)}addSvgIconSetInNamespace(t,r,i){return this._addSvgIconSetConfig(t,new bn(r,null,i))}addSvgIconSetLiteralInNamespace(t,r,i){let o=this._sanitizer.sanitize(Ye.HTML,r);if(!o)throw PD(r);let s=ki(o);return this._addSvgIconSetConfig(t,new bn("",s,i))}registerFontClassAlias(t,r=t){return this._fontCssClassesByAlias.set(t,r),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let r=this._sanitizer.sanitize(Ye.RESOURCE_URL,t);if(!r)throw FD(t);let i=this._cachedIconsByUrl.get(r);return i?M(_c(i)):this._loadSvgIconFromConfig(new bn(t,null)).pipe(He(o=>this._cachedIconsByUrl.set(r,o)),B(o=>_c(o)))}getNamedSvgIcon(t,r=""){let i=LD(r,t),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(r,t),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(r);return s?this._getSvgFromIconSetConfigs(t,s):Gi(kD(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?M(_c(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(B(r=>_c(r)))}_getSvgFromIconSetConfigs(t,r){let i=this._extractIconWithNameFromAnySet(t,r);if(i)return M(i);let o=r.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Xn(a=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(Ye.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(c)),M(null)})));return qi(o).pipe(B(()=>{let s=this._extractIconWithNameFromAnySet(t,r);if(!s)throw kD(t);return s}))}_extractIconWithNameFromAnySet(t,r){for(let i=r.length-1;i>=0;i--){let o=r[i];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,t,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(He(r=>t.svgText=r),B(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?M(null):this._fetchIcon(t).pipe(He(r=>t.svgText=r))}_extractSvgIconFromSet(t,r,i){let o=t.querySelector(`[id="${r}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,i);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),i);let a=this._svgElementFromString(ki("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,i)}_svgElementFromString(t){let r=this._document.createElement("DIV");r.innerHTML=t;let i=r.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(t){let r=this._svgElementFromString(ki("<svg></svg>")),i=t.attributes;for(let o=0;o<i.length;o++){let{name:s,value:a}=i[o];s!=="id"&&r.setAttribute(s,a)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&r.appendChild(t.childNodes[o].cloneNode(!0));return r}_setSvgAttributes(t,r){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),r&&r.viewBox&&t.setAttribute("viewBox",r.viewBox),t}_fetchIcon(t){let{url:r,options:i}=t,o=i?.withCredentials??!1;if(!this._httpClient)throw aR();if(r==null)throw Error(`Cannot fetch icon from URL "${r}".`);let s=this._sanitizer.sanitize(Ye.RESOURCE_URL,r);if(!s)throw FD(r);let a=this._inProgressUrlFetches.get(s);if(a)return a;let l=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(B(c=>ki(c)),Bt(()=>this._inProgressUrlFetches.delete(s)),Zi());return this._inProgressUrlFetches.set(s,l),l}_addSvgIconConfig(t,r,i){return this._svgIconConfigs.set(LD(t,r),i),this}_addSvgIconSetConfig(t,r){let i=this._iconSetConfigs.get(t);return i?i.push(r):this._iconSetConfigs.set(t,[r]),this}_svgElementFromConfig(t){if(!t.svgElement){let r=this._svgElementFromString(t.svgText);this._setSvgAttributes(r,t.options),t.svgElement=r}return t.svgElement}_getIconConfigFromResolvers(t,r){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](r,t);if(o)return lR(o)?new bn(o.url,null,o.options):new bn(o,null)}}static \u0275fac=function(r){return new(r||e)(C(bi,8),C(ih),C(z,8),C(rt))};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function _c(e){return e.cloneNode(!0)}function LD(e,n){return e+":"+n}function lR(e){return!!(e.url&&e.options)}var cR=["*"],dR=new g("MAT_ICON_DEFAULT_OPTIONS"),uR=new g("mat-icon-location",{providedIn:"root",factory:()=>{let e=f(z),n=e?e.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),jD=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],fR=jD.map(e=>`[${e}]`).join(", "),hR=/^url\(['"]?#(.*?)['"]?\)$/,BD=(()=>{class e{_elementRef=f(q);_iconRegistry=f(VD);_location=f(uR);_errorHandler=f(rt);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let r=this._cleanupFontValue(t);r!==this._fontSet&&(this._fontSet=r,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let r=this._cleanupFontValue(t);r!==this._fontIcon&&(this._fontIcon=r,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ye.EMPTY;constructor(){let t=f(new ko("aria-hidden"),{optional:!0}),r=f(dR,{optional:!0});r&&(r.color&&(this.color=this._defaultColor=r.color),r.fontSet&&(this.fontSet=r.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let r=t.split(":");switch(r.length){case 1:return["",r[0]];case 2:return r;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let r=this._location.getPathname();r!==this._previousPath&&(this._previousPath=r,this._prependPathToReferences(r))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let r=this._location.getPathname();this._previousPath=r,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(r),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,r=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();r--;){let i=t.childNodes[r];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,r=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>t.classList.remove(i)),r.forEach(i=>t.classList.add(i)),this._previousFontSetClass=r,this.fontIcon!==this._previousFontIconClass&&!r.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let r=this._elementsWithExternalReferences;r&&r.forEach((i,o)=>{i.forEach(s=>{o.setAttribute(s.name,`url('${t}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(t){let r=t.querySelectorAll(fR),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<r.length;o++)jD.forEach(s=>{let a=r[o],l=a.getAttribute(s),c=l?l.match(hR):null;if(c){let d=i.get(a);d||(d=[],i.set(a,d)),d.push({name:s,value:c[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[r,i]=this._splitIconName(t);r&&(this._svgNamespace=r),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,r).pipe(wt(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${r}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=re({type:e,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(r,i){r&2&&(je("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),Xt(i.color?"mat-"+i.color:""),ne("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Se],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:cR,decls:1,vars:0,template:function(r,i){r&1&&(Xe(),se(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return e})(),UD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=X({type:e});static \u0275inj=Z({imports:[Ge]})}return e})();var mR=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=re({type:e,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return e})(),gR={passive:!0},HD=(()=>{class e{_platform=f(Ce);_ngZone=f(F);_renderer=f(ct).createRenderer(null,null);_styleLoader=f(yn);_monitoredElements=new Map;constructor(){}monitor(t){if(!this._platform.isBrowser)return be;this._styleLoader.load(mR);let r=Vt(t),i=this._monitoredElements.get(r);if(i)return i.subject;let o=new j,s="cdk-text-field-autofilled",a=c=>{c.animationName==="cdk-text-field-autofill-start"&&!r.classList.contains(s)?(r.classList.add(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&r.classList.contains(s)&&(r.classList.remove(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(r.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(r,"animationstart",a,gR)));return this._monitoredElements.set(r,{subject:o,unlisten:l}),o}stopMonitoring(t){let r=Vt(t),i=this._monitoredElements.get(r);i&&(i.unlisten(),i.subject.complete(),r.classList.remove("cdk-text-field-autofill-monitored"),r.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(r))}ngOnDestroy(){this._monitoredElements.forEach((t,r)=>this.stopMonitoring(r))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var $D=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=X({type:e});static \u0275inj=Z({})}return e})();var zD=new g("MAT_INPUT_VALUE_ACCESSOR");var GD=(()=>{class e{isErrorState(t,r){return!!(t&&t.invalid&&(t.touched||r&&r.submitted))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Dc=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,t,r,i,o){this._defaultMatcher=n,this.ngControl=t,this._parentFormGroup=r,this._parentForm=i,this._stateChanges=o}updateErrorState(){let n=this.errorState,t=this._parentFormGroup||this._parentForm,r=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,o=r?.isErrorState(i,t)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var vR=["button","checkbox","file","hidden","image","radio","range","reset","submit"],yR=new g("MAT_INPUT_CONFIG"),WD=(()=>{class e{_elementRef=f(q);_platform=f(Ce);ngControl=f(Ar,{optional:!0,self:!0});_autofillMonitor=f(HD);_ngZone=f(F);_formField=f(Dp,{optional:!0});_renderer=f(Oe);_uid=f(Hn).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=f(yR,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new j;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=Pi(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Xl.required)??!1}set required(t){this._required=Pi(t)}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&cp().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=Pi(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>cp().has(t));constructor(){let t=f(Jh,{optional:!0}),r=f(tp,{optional:!0}),i=f(GD),o=f(zD,{optional:!0,self:!0}),s=this._elementRef.nativeElement,a=s.nodeName.toLowerCase();o?Ao(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Dc(i,this.ngControl,r,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=a==="select",this._isTextarea=a==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&po(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let r=this._elementRef.nativeElement;r.type==="number"?(r.type="text",r.setSelectionRange(0,0),r.type="number"):r.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let r=this._elementRef.nativeElement;this._previousPlaceholder=t,t?r.setAttribute("placeholder",t):r.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){vR.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,r=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&r&&r.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let r=this._elementRef.nativeElement;t.length?r.setAttribute("aria-describedby",t.join(" ")):r.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let r=t.target;!r.value&&r.selectionStart===0&&r.selectionEnd===0&&(r.setSelectionRange(1,1),r.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(r){return new(r||e)};static \u0275dir=U({type:e,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(r,i){r&1&&Te("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),r&2&&(ui("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),je("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),ne("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Se]},exportAs:["matInput"],features:[Ke([{provide:_p,useExisting:e}]),Zt]})}return e})(),qD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=X({type:e});static \u0275inj=Z({imports:[vs,vs,$D,Ge]})}return e})();function _R(e,n){e&1&&ze(0,"div",2)}var DR=new g("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var YD=(()=>{class e{_elementRef=f(q);_ngZone=f(F);_changeDetectorRef=f(ft);_renderer=f(Oe);_cleanupTransitionEnd;constructor(){let t=dp(),r=f(DR,{optional:!0});this._isNoopAnimation=t==="di-disabled",t==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),r&&(r.color&&(this.color=this._defaultColor=r.color),this.mode=r.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";get value(){return this._value}set value(t){this._value=ZD(t||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=ZD(t||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Q;get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=t=>{this.animationEnd.observers.length===0||!t.target||!t.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=re({type:e,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(r,i){r&2&&(je("aria-valuenow",i._isIndeterminate()?null:i.value)("mode",i.mode),Xt("mat-"+i.color),ne("_mat-animation-noopable",i._isNoopAnimation)("mdc-linear-progress--animation-ready",!i._isNoopAnimation)("mdc-linear-progress--indeterminate",i._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",it],bufferValue:[2,"bufferValue","bufferValue",it],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(r,i){r&1&&(dt(0,"div",0),ze(1,"div",1),ie(2,_R,1,0,"div",2),ut(),dt(3,"div",3),ze(4,"span",4),ut(),dt(5,"div",5),ze(6,"span",4),ut()),r&2&&(S(),Dr("flex-basis",i._getBufferBarFlexBasis()),S(),oe(i.mode==="buffer"?2:-1),S(),Dr("transform",i._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return e})();function ZD(e,n=0,t=100){return Math.max(n,Math.min(t,e))}var QD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=X({type:e});static \u0275inj=Z({imports:[Ge]})}return e})();var CR=["knob"],wR=["valueIndicatorContainer"];function IR(e,n){if(e&1&&(x(0,"div",2,1)(2,"div",5)(3,"span",6),pe(4),A()()()),e&2){let t=ce();S(4),Ot(t.valueIndicatorText)}}var xR=["trackActive"],MR=["*"];function TR(e,n){if(e&1&&ke(0,"div"),e&2){let t=n.$implicit,r=n.$index,i=ce(3);Xt(t===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),Dr("transform",i._calcTickMarkTransform(r))}}function SR(e,n){if(e&1&&ci(0,TR,1,4,"div",8,Ro),e&2){let t=ce(2);di(t._tickMarks)}}function AR(e,n){if(e&1&&(x(0,"div",6,1),ie(2,SR,2,0),A()),e&2){let t=ce();S(2),oe(t._cachedWidth?2:-1)}}function RR(e,n){if(e&1&&ke(0,"mat-slider-visual-thumb",7),e&2){let t=ce();Ee("discrete",t.discrete)("thumbPosition",1)("valueIndicatorText",t.startValueIndicatorText)}}var R=(function(e){return e[e.START=1]="START",e[e.END=2]="END",e})(R||{}),Li=(function(e){return e[e.ACTIVE=0]="ACTIVE",e[e.INACTIVE=1]="INACTIVE",e})(Li||{}),Ep=new g("_MatSlider"),XD=new g("_MatSliderThumb"),NR=new g("_MatSliderRangeThumb"),KD=new g("_MatSliderVisualThumb");var OR=(()=>{class e{_cdr=f(ft);_ngZone=f(F);_slider=f(Ep);_renderer=f(Oe);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=f(q).nativeElement;_platform=f(Ce);constructor(){}ngAfterViewInit(){let t=this._slider._getInput(this.thumbPosition);t&&(this._ripple.radius=24,this._sliderInput=t,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let r=this._sliderInputEl,i=this._renderer;this._listenerCleanups=[i.listen(r,"pointermove",this._onPointerMove),i.listen(r,"pointerdown",this._onDragStart),i.listen(r,"pointerup",this._onDragEnd),i.listen(r,"pointerleave",this._onMouseLeave),i.listen(r,"focus",this._onFocus),i.listen(r,"blur",this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(t=>t())}_onPointerMove=t=>{if(this._sliderInput._isFocused)return;let r=this._hostElement.getBoundingClientRect(),i=this._slider._isCursorOnSliderThumb(t,r);this._isHovered=i,i?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused")};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused")};_onDragStart=t=>{t.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"))}_isShowingRipple(t){return t?.state===tt.FADING_IN||t?.state===tt.VISIBLE}_showRipple(t,r){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===R.START?R.END:R.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!r)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:t,centered:!0,persistent:!0})}_hideRipple(t){if(t?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let r=this._getSibling();r._isShowingAnyRipple()||(this._hideValueIndicator(),r._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator")}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator")}_getSibling(){return this._slider._getThumb(this.thumbPosition===R.START?R.END:R.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=re({type:e,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(r,i){if(r&1&&Pn(hp,5)(CR,5)(wR,5),r&2){let o;fe(o=he())&&(i._ripple=o.first),fe(o=he())&&(i._knob=o.first),fe(o=he())&&(i._valueIndicatorContainer=o.first)}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[Ke([{provide:KD,useExisting:e}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(r,i){r&1&&(ie(0,IR,5,1,"div",2),ke(1,"div",3,0)(3,"div",4)),r&2&&(oe(i.discrete?0:-1),S(3),Ee("matRippleDisabled",!0))},dependencies:[hp],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
  height: 100%;
  width: 100%;
}

.mat-mdc-slider .mdc-slider__tick-marks {
  justify-content: start;
}
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {
  position: absolute;
  left: 2px;
}
`],encapsulation:2,changeDetection:0})}return e})(),JD=(()=>{class e{_ngZone=f(F);_cdr=f(ft);_elementRef=f(q);_dir=f(ms,{optional:!0});_globalRippleOptions=f(ps,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(t){this._disabled=t;let r=this._getInput(R.END),i=this._getInput(R.START);r&&(r.disabled=this._disabled),i&&(i.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(t){this._discrete=t,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(t){this._showTickMarks=t,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(t){let r=t==null||isNaN(t)?this._min:t;this._min!==r&&this._updateMin(r)}_min=0;color;disableRipple=!1;_updateMin(t){let r=this._min;this._min=t,this._isRange?this._updateMinRange({old:r,new:t}):this._updateMinNonRange(t),this._onMinMaxOrStepChange()}_updateMinRange(t){let r=this._getInput(R.END),i=this._getInput(R.START),o=r.value,s=i.value;i.min=t.new,r.min=Math.max(t.new,i.value),i.max=Math.min(r.max,r.value),i._updateWidthInactive(),r._updateWidthInactive(),t.new<t.old?this._onTranslateXChangeBySideEffect(r,i):this._onTranslateXChangeBySideEffect(i,r),o!==r.value&&this._onValueChange(r),s!==i.value&&this._onValueChange(i)}_updateMinNonRange(t){let r=this._getInput(R.END);if(r){let i=r.value;r.min=t,r._updateThumbUIByValue(),this._updateTrackUI(r),i!==r.value&&this._onValueChange(r)}}get max(){return this._max}set max(t){let r=t==null||isNaN(t)?this._max:t;this._max!==r&&this._updateMax(r)}_max=100;_updateMax(t){let r=this._max;this._max=t,this._isRange?this._updateMaxRange({old:r,new:t}):this._updateMaxNonRange(t),this._onMinMaxOrStepChange()}_updateMaxRange(t){let r=this._getInput(R.END),i=this._getInput(R.START),o=r.value,s=i.value;r.max=t.new,i.max=Math.min(t.new,r.value),r.min=i.value,r._updateWidthInactive(),i._updateWidthInactive(),t.new>t.old?this._onTranslateXChangeBySideEffect(i,r):this._onTranslateXChangeBySideEffect(r,i),o!==r.value&&this._onValueChange(r),s!==i.value&&this._onValueChange(i)}_updateMaxNonRange(t){let r=this._getInput(R.END);if(r){let i=r.value;r.max=t,r._updateThumbUIByValue(),this._updateTrackUI(r),i!==r.value&&this._onValueChange(r)}}get step(){return this._step}set step(t){let r=isNaN(t)?this._step:t;this._step!==r&&this._updateStep(r)}_step=1;_updateStep(t){this._step=t,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let t=this._getInput(R.END),r=this._getInput(R.START),i=t.value,o=r.value,s=r.value;t.min=this._min,r.max=this._max,t.step=this._step,r.step=this._step,this._platform.SAFARI&&(t.value=t.value,r.value=r.value),t.min=Math.max(this._min,r.value),r.max=Math.min(this._max,t.value),r._updateWidthInactive(),t._updateWidthInactive(),t.value<s?this._onTranslateXChangeBySideEffect(r,t):this._onTranslateXChangeBySideEffect(t,r),i!==t.value&&this._onValueChange(t),o!==r.value&&this._onValueChange(r)}_updateStepNonRange(){let t=this._getInput(R.END);if(t){let r=t.value;t.step=this._step,this._platform.SAFARI&&(t.value=t.value),t._updateThumbUIByValue(),r!==t.value&&this._onValueChange(t)}}displayWith=t=>`${t}`;_tickMarks;_noopAnimations=Jt();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=Je(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=f(Ce);constructor(){f(yn).load(gc);let t=this._isRtl();vl(()=>{let r=this._isRtl();r!==t&&(t=r,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let t=this._getInput(R.END),r=this._getInput(R.START);this._isRange=!!t&&!!r,this._cdr.detectChanges();let i=this._getThumb(R.END);this._rippleRadius=i._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(t,r):this._initUINonRange(t),this._updateTrackUI(t),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(t){t.initProps(),t.initUI(),this._updateValueIndicatorUI(t),this._hasViewInitialized=!0,t._updateThumbUIByValue()}_initUIRange(t,r){t.initProps(),t.initUI(),r.initProps(),r.initUI(),t._updateMinMax(),r._updateMinMax(),t._updateStaticStyles(),r._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,t._updateThumbUIByValue(),r._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let t=this._getInput(R.END),r=this._getInput(R.START);t._setIsLeftThumb(),r._setIsLeftThumb(),t.translateX=t._calcTranslateXByValue(),r.translateX=r._calcTranslateXByValue(),t._updateStaticStyles(),r._updateStaticStyles(),t._updateWidthInactive(),r._updateWidthInactive(),t._updateThumbUIByValue(),r._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(R.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(R.START)._isActive||this._getThumb(R.END)._isActive}_getValue(t=R.END){let r=this._getInput(t);return r?r.value:this.min}_skipUpdate(){return!!(this._getInput(R.START)?._skipUIUpdate||this._getInput(R.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(t){let r=this._trackActive.nativeElement.style;r.left=t.left,r.right=t.right,r.transformOrigin=t.transformOrigin,r.transform=t.transform}_calcTickMarkTransform(t){let r=t*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-r:r}px)`}_onTranslateXChange(t){this._hasViewInitialized&&(this._updateThumbUI(t),this._updateTrackUI(t),this._updateOverlappingThumbUI(t))}_onTranslateXChangeBySideEffect(t,r){this._hasViewInitialized&&(t._updateThumbUIByValue(),r._updateThumbUIByValue())}_onValueChange(t){this._hasViewInitialized&&(this._updateValueIndicatorUI(t),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let t=this._getInput(R.END),r=this._getInput(R.START);t._updateThumbUIByValue(),r._updateThumbUIByValue(),t._updateStaticStyles(),r._updateStaticStyles(),t._updateMinMax(),r._updateMinMax(),t._updateWidthInactive(),r._updateWidthInactive()}else{let t=this._getInput(R.END);t&&t._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let t=this._getInput(R.START),r=this._getInput(R.END);return!t||!r?!1:r.translateX-t.translateX<20}_updateOverlappingThumbClassNames(t){let r=t.getSibling(),i=this._getThumb(t.thumbPosition);this._getThumb(r.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),i._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap)}_updateOverlappingThumbUI(t){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(t))}_updateThumbUI(t){if(this._skipUpdate())return;let r=this._getThumb(t.thumbPosition===R.END?R.END:R.START);r._hostElement.style.transform=`translateX(${t.translateX}px)`}_updateValueIndicatorUI(t){if(this._skipUpdate())return;let r=this.displayWith(t.value);if(this._hasViewInitialized?t._valuetext.set(r):t._hostElement.setAttribute("aria-valuetext",r),this.discrete){t.thumbPosition===R.START?this.startValueIndicatorText=r:this.endValueIndicatorText=r;let i=this._getThumb(t.thumbPosition);r.length<3?i._hostElement.classList.add("mdc-slider__thumb--short-value"):i._hostElement.classList.remove("mdc-slider__thumb--short-value")}}_updateValueIndicatorUIs(){let t=this._getInput(R.END),r=this._getInput(R.START);t&&this._updateValueIndicatorUI(t),r&&this._updateValueIndicatorUI(r)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let t=this._step&&this._step>0?this._step:1,i=(Math.floor(this.max/t)*t-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*i}_updateTrackUI(t){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(t):this._updateTrackUINonRange(t))}_updateTrackUIRange(t){let r=t.getSibling();if(!r||!this._cachedWidth)return;let i=Math.abs(r.translateX-t.translateX)/this._cachedWidth;t._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-r.translateX}px`,transformOrigin:"right",transform:`scaleX(${i})`}):this._setTrackActiveStyles({left:`${r.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${i})`})}_updateTrackUINonRange(t){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-t.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${t.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let t=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(t):this._updateTickMarkUINonRange(t)}_updateTickMarkUINonRange(t){let r=this._getValue(),i=Math.max(Math.round((r-this.min)/t),0)+1,o=Math.max(Math.round((this.max-r)/t),0)-1;this._isRtl()?i++:o++,this._tickMarks=Array(i).fill(Li.ACTIVE).concat(Array(o).fill(Li.INACTIVE))}_updateTickMarkUIRange(t){let r=this._getValue(),i=this._getValue(R.START),o=Math.max(Math.round((i-this.min)/t),0),s=Math.max(Math.round((r-i)/t)+1,0),a=Math.max(Math.round((this.max-r)/t),0);this._tickMarks=Array(o).fill(Li.INACTIVE).concat(Array(s).fill(Li.ACTIVE),Array(a).fill(Li.INACTIVE))}_getInput(t){if(t===R.END&&this._input)return this._input;if(this._inputs?.length)return t===R.START?this._inputs.first:this._inputs.last}_getThumb(t){return t===R.END?this._thumbs?.last:this._thumbs?.first}_setTransition(t){this._hasAnimation=!this._platform.IOS&&t&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation)}_isCursorOnSliderThumb(t,r){let i=r.width/2,o=r.x+i,s=r.y+i,a=t.clientX-o,l=t.clientY-s;return Math.pow(a,2)+Math.pow(l,2)<Math.pow(i,2)}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=re({type:e,selectors:[["mat-slider"]],contentQueries:function(r,i,o){if(r&1&&fi(o,XD,5)(o,NR,4),r&2){let s;fe(s=he())&&(i._input=s.first),fe(s=he())&&(i._inputs=s)}},viewQuery:function(r,i){if(r&1&&Pn(xR,5)(KD,5),r&2){let o;fe(o=he())&&(i._trackActive=o.first),fe(o=he())&&(i._thumbs=o)}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(r,i){r&2&&(Xt("mat-"+(i.color||"primary")),ne("mdc-slider--range",i._isRange)("mdc-slider--disabled",i.disabled)("mdc-slider--discrete",i.discrete)("mdc-slider--tick-marks",i.showTickMarks)("_mat-animation-noopable",i._noopAnimations))},inputs:{disabled:[2,"disabled","disabled",Se],discrete:[2,"discrete","discrete",Se],showTickMarks:[2,"showTickMarks","showTickMarks",Se],min:[2,"min","min",it],color:"color",disableRipple:[2,"disableRipple","disableRipple",Se],max:[2,"max","max",it],step:[2,"step","step",it],displayWith:"displayWith"},exportAs:["matSlider"],features:[Ke([{provide:Ep,useExisting:e}])],ngContentSelectors:MR,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(r,i){r&1&&(Xe(),se(0),x(1,"div",2),ke(2,"div",3),x(3,"div",4),ke(4,"div",5,0),A(),ie(6,AR,3,1,"div",6),A(),ie(7,RR,1,3,"mat-slider-visual-thumb",7),ke(8,"mat-slider-visual-thumb",7)),r&2&&(S(6),oe(i.showTickMarks?6:-1),S(),oe(i._isRange?7:-1),S(),Ee("discrete",i.discrete)("thumbPosition",2)("valueIndicatorText",i.endValueIndicatorText))},dependencies:[OR],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--mat-slider-inactive-track-height, 4px);
}

.mdc-slider__track--active,
.mdc-slider__track--inactive {
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
}

.mdc-slider__track--active {
  overflow: hidden;
  border-radius: var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));
  height: var(--mat-slider-active-track-height, 4px);
  top: calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--mat-slider-active-track-color, var(--mat-sys-primary));
  border-top-width: var(--mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));
  height: var(--mat-slider-inactive-track-height, 4px);
  border-radius: var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--inactive::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-slider__track--inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
  color: var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));
  width: var(--mat-slider-value-indicator-width, 28px);
  height: var(--mat-slider-value-indicator-height, 28px);
  padding: var(--mat-slider-value-indicator-padding, 0);
  opacity: var(--mat-slider-value-indicator-opacity, 1);
  border-radius: var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
}
.mdc-slider__value-indicator::before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  bottom: -5px;
  content: "";
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  display: var(--mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
}
.mdc-slider__value-indicator::after {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-slider__value-indicator::after {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-text {
  text-align: center;
  width: var(--mat-slider-value-indicator-width, 28px);
  transform: var(--mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));
  font-size: var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));
  font-weight: var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));
  line-height: var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));
  letter-spacing: var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking));
}

.mdc-slider__thumb {
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  left: -24px;
  outline: none;
  position: absolute;
  height: 48px;
  width: 48px;
  pointer-events: none;
}
.mdc-slider--discrete .mdc-slider__thumb {
  transition: transform 80ms ease;
}
.mdc-slider--disabled .mdc-slider__thumb {
  pointer-events: none;
}

.mdc-slider__thumb--top {
  z-index: 1;
}

.mdc-slider__thumb-knob {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  width: var(--mat-slider-handle-width, 20px);
  height: var(--mat-slider-handle-height, 20px);
  border-width: calc(var(--mat-slider-handle-height, 20px) / 2) calc(var(--mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--mat-slider-handle-elevation, var(--mat-sys-level1));
  background-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-radius: var(--mat-slider-handle-shape, var(--mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
  border-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));
  border-width: var(--mat-slider-with-overlap-handle-outline-width, 1px);
}

.mdc-slider__tick-marks {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1px;
  position: absolute;
  width: 100%;
}

.mdc-slider__tick-mark--active,
.mdc-slider__tick-mark--inactive {
  width: var(--mat-slider-with-tick-marks-container-size, 2px);
  height: var(--mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary));
}

.mdc-slider__input {
  cursor: pointer;
  left: 2px;
  margin: 0;
  height: 44px;
  opacity: 0;
  position: absolute;
  top: 2px;
  width: 44px;
  box-sizing: content-box;
}
.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {
  pointer-events: none;
}
.mdc-slider__input.mat-slider__right-input {
  left: auto;
  right: 0;
}

.mat-mdc-slider {
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  height: 48px;
  margin: 0 8px;
  position: relative;
  touch-action: pan-y;
  width: auto;
  min-width: 112px;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-slider.mdc-slider--disabled {
  cursor: auto;
  opacity: 0.38;
}
.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {
  cursor: auto;
}
.mat-mdc-slider .mdc-slider__thumb,
.mat-mdc-slider .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider .mat-ripple .mat-ripple-element {
  background-color: var(--mat-slider-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent));
}
.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,
.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {
  transition: none;
}
.mat-mdc-slider .mat-focus-indicator::before {
  border-radius: 50%;
}

.mdc-slider__thumb--focused .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return e})();var kR={provide:lc,useExisting:xt(()=>Cp),multi:!0};var Cp=(()=>{class e{_ngZone=f(F);_elementRef=f(q);_cdr=f(ft);_slider=f(Ep);_platform=f(Ce);_listenerCleanups;get value(){return it(this._hostElement.value,0)}set value(t){t===null&&(t=this._getDefaultValue()),t=isNaN(t)?0:t;let r=t+"";if(!this._hasSetInitialValue){this._initialValue=r;return}this._isActive||this._setValue(r)}_setValue(t){this._hostElement.value=t,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new Q;dragStart=new Q;dragEnd=new Q;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(t){this._translateX=t}_translateX;thumbPosition=R.END;get min(){return it(this._hostElement.min,0)}set min(t){this._hostElement.min=t+"",this._cdr.detectChanges()}get max(){return it(this._hostElement.max,0)}set max(t){this._hostElement.max=t+"",this._cdr.detectChanges()}get step(){return it(this._hostElement.step,0)}set step(t){this._hostElement.step=t+"",this._cdr.detectChanges()}get disabled(){return Se(this._hostElement.disabled)}set disabled(t){this._hostElement.disabled=t,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=Me("");_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(t){this._isFocused=t}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new j;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let t=f(Oe);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[t.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),t.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),t.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(t=>t()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!0}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(t){if(!(this.disabled||t.button!==0)){if(this._platform.IOS){let r=this._slider._isCursorOnSliderThumb(t,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=r,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(t,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(t),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(t){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(t)},0)}_fixValue(t){let r=t.clientX-this._slider._cachedLeft,i=this._slider._cachedWidth,o=this._slider.step===0?1:this._slider.step,s=Math.floor((this._slider.max-this._slider.min)/o),a=this._slider._isRtl()?1-r/i:r/i,c=Math.round(a*s)/s*(this._slider.max-this._slider.min)+this._slider.min,d=Math.round(c/o)*o,u=this.value;if(d===u){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation});return}this.value=d,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation})}_onPointerMove(t){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(t)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(t){let r=this._tickMarkOffset,i=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(t,i),r)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(t){return t.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(t){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(t)}_updateThumbUIByPointerEvent(t,r){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(t)),this._updateThumbUI(r)}_updateThumbUI(t){this._slider._setTransition(!!t?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(t){(this._isControlInitialized||t!==null)&&(this.value=t)}registerOnChange(t){this._onChangeFn=t,this._isControlInitialized=!0}registerOnTouched(t){this._onTouchedFn=t}setDisabledState(t){this.disabled=t}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static \u0275fac=function(r){return new(r||e)};static \u0275dir=U({type:e,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(r,i){r&1&&Te("change",function(){return i._onChange()})("input",function(){return i._onInput()})("blur",function(){return i._onBlur()})("focus",function(){return i._onFocus()}),r&2&&je("aria-valuetext",i._valuetext())},inputs:{value:[2,"value","value",it]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[Ke([kR,{provide:XD,useExisting:e}])]})}return e})();var eE=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=X({type:e});static \u0275inj=Z({imports:[vc,Ge]})}return e})();var Ec={production:!0,apiBaseUrl:"http://localhost:5027"};var Cc=class e{constructor(n){this.http=n}solveUrl=`${Ec.apiBaseUrl}/api/sudoku/solve`;solve(n){return this.http.post(this.solveUrl,{values:n})}static \u0275fac=function(t){return new(t||e)(C(bi))};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})};var LR=()=>[1,2,3,4,5,6,7,8,9];function VR(e,n){e&1&&ke(0,"mat-progress-bar",9)}function jR(e,n){if(e&1&&(x(0,"span",20),pe(1),A()),e&2){let t=ce().$implicit;S(),Ot(t.value)}}function BR(e,n){e&1&&(x(0,"span",22),pe(1,"x"),A())}function UR(e,n){if(e&1&&(x(0,"span",25),pe(1),A()),e&2){let t=ce().$implicit,r=ce(2).$implicit;ne("added",r.addedCandidates.includes(t)),S(),hi(" ",t," ")}}function HR(e,n){e&1&&(x(0,"span",24),pe(1,"_"),A())}function $R(e,n){if(e&1&&ie(0,BR,2,0,"span",22)(1,UR,2,3,"span",23)(2,HR,2,0,"span",24),e&2){let t=n.$implicit,r=ce(2).$implicit;oe(r.removedCandidates.includes(t)?0:r.candidates.includes(t)?1:2)}}function zR(e,n){e&1&&(x(0,"div",21),ci(1,$R,3,1,null,null,Af),A()),e&2&&(S(),di(Of(0,LR)))}function GR(e,n){if(e&1&&(x(0,"div",19),ie(1,jR,2,1,"span",20)(2,zR,3,1,"div",21),A()),e&2){let t=n.$implicit,r=n.$index,i=ce(2);Ee("ngClass",i.getCellClasses(r,t.value,t.valueChanged)),S(),oe(t.value>0?1:2)}}function WR(e,n){if(e&1){let t=Rf();x(0,"mat-card",10)(1,"mat-card-content")(2,"div",11)(3,"button",12),Te("click",function(){Yr(t);let i=ce();return Qr(i.goPrev())}),x(4,"mat-icon"),pe(5,"chevron_left"),A()(),x(6,"mat-slider",13)(7,"input",14),Te("valueChange",function(i){Yr(t);let o=ce();return Qr(o.onSliderChange(i))}),A()(),x(8,"button",15),Te("click",function(){Yr(t);let i=ce();return Qr(i.goNext())}),x(9,"mat-icon"),pe(10,"chevron_right"),A()()(),x(11,"div",16),pe(12),A(),x(13,"div",17),pe(14),A(),x(15,"section",18),ci(16,GR,3,2,"div",19,Ro),A()()()}if(e&2){let t=n,r=ce();S(3),Ee("disabled",!r.canGoPrev),S(3),Ee("max",r.steps.length),S(),Ee("ngModel",r.currentIndex),S(),Ee("disabled",!r.canGoNext),S(4),Ot(r.currentStepLabel),S(2),Ot(t.comment),S(2),di(t.grid.cells)}}var wc=class e{constructor(n){this.sudokuApi=n}static examplePuzzle="200000001000906000000801720900300000008000204000000013103005009000700000046200000";puzzleInput=e.examplePuzzle;status="Ready.";isBusy=!1;initialGrid=null;steps=[];currentIndex=0;get currentSnapshot(){if(!this.initialGrid)return null;if(this.currentIndex===0)return{name:"Initial grid",comment:"Input puzzle before solver steps",grid:this.initialGrid};let n=this.steps[this.currentIndex-1];return{name:n.name,comment:n.comment??"",grid:n.grid}}get currentStepLabel(){let n=this.currentSnapshot;return n?`${n.name} (${this.currentIndex}/${this.steps.length})`:"Initial grid (0/0)"}get canGoPrev(){return this.currentIndex>0}get canGoNext(){return this.currentIndex<this.steps.length}get apiBaseUrl(){return Ec.apiBaseUrl}loadExample(){this.puzzleInput=e.examplePuzzle}solve(){let n=this.sanitizePuzzle(this.puzzleInput);if(n.length!==81){this.status="Puzzle must contain exactly 81 digits.";return}let t=n.split("").map(r=>Number.parseInt(r,10));this.isBusy=!0,this.status="Solving...",this.sudokuApi.solve(t).pipe(Bt(()=>this.isBusy=!1)).subscribe({next:r=>{this.initialGrid=r.initialGrid,this.steps=r.steps,this.currentIndex=0,this.status=`Solved. Steps: ${r.steps.length}. Completed: ${r.isSolved}.`},error:r=>{let i=typeof r.error=="string"?r.error:r.error?.title??r.error?.message??r.message??"Unexpected error.";this.status=i}})}goPrev(){this.canGoPrev&&(this.currentIndex-=1)}goNext(){this.canGoNext&&(this.currentIndex+=1)}onSliderChange(n){this.currentIndex=n??0}getCellClasses(n,t,r){let i=Math.floor(n/9),o=n%9;return{cell:!0,solved:t>0,valueChanged:r,boxTop:i%3===0,boxLeft:o%3===0,boxBottom:i%3===2,boxRight:o%3===2}}sanitizePuzzle(n){return(n??"").replace(/[^0-9]/g,"")}static \u0275fac=function(t){return new(t||e)(te(Cc))};static \u0275cmp=re({type:e,selectors:[["app-root"]],decls:27,vars:7,consts:[[1,"pageRoot"],[1,"heroCard"],[1,"apiInfo"],["appearance","outline",1,"fullWidth"],["matInput","","rows","4",3,"ngModelChange","ngModel"],[1,"controlRow"],["mat-stroked-button","","color","primary",3,"click","disabled"],["mat-flat-button","","color","primary",3,"click","disabled"],[1,"statusText"],["mode","indeterminate"],[1,"stepCard"],[1,"stepNav"],["mat-icon-button","","aria-label","Previous step",3,"click","disabled"],["min","0","step","1","discrete","",1,"stepSlider",3,"max"],["matSliderThumb","",3,"valueChange","ngModel"],["mat-icon-button","","aria-label","Next step",3,"click","disabled"],[1,"stepLabel"],[1,"stepComment"],[1,"grid"],[3,"ngClass"],[1,"value"],[1,"candGrid"],[1,"cand","removed"],[1,"cand","present",3,"added"],[1,"cand","empty"],[1,"cand","present"]],template:function(t,r){if(t&1&&(x(0,"main",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),pe(4,"Sudoku Step Visualizer"),A(),x(5,"mat-card-subtitle"),pe(6,"Modern Angular UI with step-by-step candidate diffs"),A()(),x(7,"mat-card-content")(8,"div",2),pe(9),A(),x(10,"mat-form-field",3)(11,"mat-label"),pe(12,"Puzzle values (81 digits, use 0 for empty)"),A(),x(13,"textarea",4),pl("ngModelChange",function(o){return Nf(r.puzzleInput,o)||(r.puzzleInput=o),o}),A()(),x(14,"div",5)(15,"button",6),Te("click",function(){return r.loadExample()}),x(16,"mat-icon"),pe(17,"auto_fix_high"),A(),pe(18," Load Example "),A(),x(19,"button",7),Te("click",function(){return r.solve()}),x(20,"mat-icon"),pe(21,"play_arrow"),A(),pe(22," Solve "),A()(),x(23,"div",8),pe(24),A(),ie(25,VR,1,0,"mat-progress-bar",9),A()(),ie(26,WR,18,6,"mat-card",10),A()),t&2){let i;S(9),hi("API: ",r.apiBaseUrl),S(4),hl("ngModel",r.puzzleInput),S(2),Ee("disabled",r.isBusy),S(4),Ee("disabled",r.isBusy),S(5),Ot(r.status),S(),oe(r.isBusy?25:-1),S(),oe((i=r.currentSnapshot)?26:-1,i)}},dependencies:[bl,Hf,q_,cc,B_,ep,mD,pD,vp,DD,gD,yD,_D,bD,vD,vs,bc,gs,UD,BD,qD,WD,QD,YD,eE,JD,Cp],styles:["[_nghost-%COMP%]{display:block}.pageRoot[_ngcontent-%COMP%]{max-width:1180px;margin:24px auto 40px;padding:0 16px;display:grid;gap:16px}.heroCard[_ngcontent-%COMP%], .stepCard[_ngcontent-%COMP%]{border-radius:14px}.apiInfo[_ngcontent-%COMP%]{margin-bottom:12px;opacity:.8;font-size:12px}.fullWidth[_ngcontent-%COMP%]{width:100%}.controlRow[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.statusText[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px}.stepNav[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:8px}.stepSlider[_ngcontent-%COMP%]{width:100%}.stepLabel[_ngcontent-%COMP%]{margin-top:8px;font-weight:600}.stepComment[_ngcontent-%COMP%]{margin-top:4px;margin-bottom:12px;opacity:.85}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(9,minmax(0,1fr));gap:2px;background:#595959;border:2px solid rgb(120,120,120)}.cell[_ngcontent-%COMP%]{background:#131313;min-height:72px;position:relative;display:grid;align-items:center;justify-items:center}.cell.solved[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:30px;font-weight:700}.cell.solved.valueChanged[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:#2e7d32}.candGrid[_ngcontent-%COMP%]{width:100%;height:100%;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr)}.cand[_ngcontent-%COMP%]{font-size:12px;display:flex;align-items:center;justify-content:center;color:#ffffff8c}.cand.empty[_ngcontent-%COMP%]{color:#fff3}.cand.added[_ngcontent-%COMP%]{color:#4caf50;font-weight:700}.cand.removed[_ngcontent-%COMP%]{color:#ef5350;font-weight:700}.boxTop[_ngcontent-%COMP%]{border-top:2px solid rgb(120,120,120)}.boxLeft[_ngcontent-%COMP%]{border-left:2px solid rgb(120,120,120)}.boxBottom[_ngcontent-%COMP%]{border-bottom:2px solid rgb(120,120,120)}.boxRight[_ngcontent-%COMP%]{border-right:2px solid rgb(120,120,120)}@media(max-width:900px){.cell[_ngcontent-%COMP%]{min-height:52px}.cell.solved[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:24px}}"]})};Kf(wc,D_).catch(e=>console.error(e));
