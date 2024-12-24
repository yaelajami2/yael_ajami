import './polyfills.server.mjs';
import{A as L,B as $,C as D,D as _,E as v,F as Te,G as y,H as b,I as M,J as A,K as h,L as u,M as p,N as pe,O as N,P as c,Q as w,R as W,S as Re,T as Ge,U as je,V as z,W as m,X as Be,Z as Ue,a as Ae,b as ue,ba as qe,c as we,d as Ee,da as Q,e as Fe,f as xe,fa as He,g as Ie,ga as Z,h as Se,ha as C,i as j,ia as Le,j as B,ja as me,k as ce,l as V,la as $e,m as Oe,ma as X,n as Ne,na as We,o as f,oa as ze,p as de,pa as Qe,q as g,qa as Ze,r as U,s as he,t as fe,ta as Xe,u as Pe,v as ke,w as q,x as H,y as l,z as s,za as Je}from"./chunk-JA7OD7XE.mjs";import{a,b as d}from"./chunk-5XUXGTUW.mjs";var st=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(s(L),s(H))}}static{this.\u0275dir=g({type:i})}}return i})(),ot=(()=>{class i extends st{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Pe(i)))(r||i)}})()}static{this.\u0275dir=g({type:i,features:[D]})}}return i})(),Ce=new V("");var Dt={provide:Ce,useExisting:j(()=>te),multi:!0};function bt(){let i=me()?me().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Mt=new V(""),te=(()=>{class i extends st{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!bt())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(s(L),s(H),s(Mt,8))}}static{this.\u0275dir=g({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&N("input",function(O){return r._handleInput(O.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(O){return r._compositionEnd(O.target.value)})},features:[z([Dt]),D]})}}return i})();var At=new V(""),wt=new V("");function at(i){return i!=null}function lt(i){return Ue(i)?we(i):i}function ut(i){let e={};return i.forEach(t=>{e=t!=null?a(a({},e),t):e}),Object.keys(e).length===0?null:e}function ct(i,e){return e.map(t=>t(i))}function Et(i){return!i.validate}function dt(i){return i.map(e=>Et(e)?e:t=>e.validate(t))}function Ft(i){if(!i)return null;let e=i.filter(at);return e.length==0?null:function(t){return ut(ct(t,e))}}function ht(i){return i!=null?Ft(dt(i)):null}function xt(i){if(!i)return null;let e=i.filter(at);return e.length==0?null:function(t){let n=ct(t,e).map(lt);return Fe(n).pipe(Ee(ut))}}function ft(i){return i!=null?xt(dt(i)):null}function Ye(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function It(i){return i._rawValidators}function St(i){return i._rawAsyncValidators}function ge(i){return i?Array.isArray(i)?i:[i]:[]}function Y(i,e){return Array.isArray(i)?i.includes(e):i===e}function Ke(i,e){let t=ge(e);return ge(i).forEach(r=>{Y(t,r)||t.push(r)}),t}function et(i,e){return ge(e).filter(t=>!Y(i,t))}var K=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ht(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ft(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},_e=class extends K{get formDirective(){return null}get path(){return null}},x=class extends K{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ve=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Ot={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Fi=d(a({},Ot),{"[class.ng-submitted]":"isSubmitted"}),pt=(()=>{class i extends ve{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(s(x,2))}}static{this.\u0275dir=g({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&Te("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[D]})}}return i})();var P="VALID",J="INVALID",E="PENDING",k="DISABLED",I=class{},ee=class extends I{constructor(e,t){super(),this.value=e,this.source=t}},T=class extends I{constructor(e,t){super(),this.pristine=e,this.source=t}},R=class extends I{constructor(e,t){super(),this.touched=e,this.source=t}},F=class extends I{constructor(e,t){super(),this.status=e,this.source=t}};function Nt(i){return(ie(i)?i.validators:i)||null}function Pt(i){return Array.isArray(i)?ht(i):i||null}function kt(i,e){return(ie(e)?e.asyncValidators:i)||null}function Tt(i){return Array.isArray(i)?ft(i):i||null}function ie(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var ye=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=Z(()=>this.statusReactive()),this.statusReactive=$(void 0),this._pristine=Z(()=>this.pristineReactive()),this.pristineReactive=$(!0),this._touched=Z(()=>this.touchedReactive()),this.touchedReactive=$(!1),this._events=new Ae,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return C(this.statusReactive)}set status(e){C(()=>this.statusReactive.set(e))}get valid(){return this.status===P}get invalid(){return this.status===J}get pending(){return this.status==E}get disabled(){return this.status===k}get enabled(){return this.status!==k}get pristine(){return C(this.pristineReactive)}set pristine(e){C(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return C(this.touchedReactive)}set touched(e){C(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ke(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ke(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(et(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(et(e,this._rawAsyncValidators))}hasValidator(e){return Y(this._rawValidators,e)}hasAsyncValidator(e){return Y(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(d(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new R(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new R(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(d(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new T(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new T(!0,n))}markAsPending(e={}){this.status=E;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new F(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(d(a({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=k,this.errors=null,this._forEachChild(r=>{r.disable(d(a({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ee(this.value,n)),this._events.next(new F(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(d(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=P,this._forEachChild(n=>{n.enable(d(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(d(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===P||this.status===E)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ee(this.value,t)),this._events.next(new F(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(d(a({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?k:P}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=E,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=lt(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new F(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new q,this.statusChanges=new q}_calculateStatus(){return this._allControlsDisabled()?k:this.errors?J:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(E)?E:this._anyControlsHaveStatus(J)?J:P}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new T(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new R(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ie(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Pt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Tt(this._rawAsyncValidators)}};var Ve=new V("CallSetDisabledState",{providedIn:"root",factory:()=>ne}),ne="always";function Rt(i,e){return[...e.path,i]}function Gt(i,e,t=ne){Bt(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Ut(i,e),Ht(i,e),qt(i,e),jt(i,e)}function tt(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function jt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function Bt(i,e){let t=It(i);e.validator!==null?i.setValidators(Ye(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=St(i);e.asyncValidator!==null?i.setAsyncValidators(Ye(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();tt(e._rawValidators,r),tt(e._rawAsyncValidators,r)}function Ut(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&mt(i,e)})}function qt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&mt(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function mt(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Ht(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Lt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function $t(i){return Object.getPrototypeOf(i.constructor)===ot}function Wt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(o=>{o.constructor===te?t=o:$t(o)?n=o:r=o}),r||n||t||null}function it(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function nt(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var zt=class extends ye{constructor(e=null,t,n){super(Nt(t),kt(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ie(t)&&(t.nonNullable||t.initialValueIsDefault)&&(nt(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){it(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){it(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){nt(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Qt={provide:x,useExisting:j(()=>De)},rt=Promise.resolve(),De=(()=>{class i extends x{constructor(t,n,r,o,O,Vt){super(),this._changeDetectorRef=O,this.callSetDisabledState=Vt,this.control=new zt,this._registered=!1,this.name="",this.update=new q,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Wt(this,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Lt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Gt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){rt.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&He(n);rt.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Rt(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(s(_e,9),s(At,10),s(wt,10),s(Ce,10),s(Q,8),s(Ve,8))}}static{this.\u0275dir=g({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[z([Qt]),D,U]})}}return i})();var Zt={provide:Ce,useExisting:j(()=>be),multi:!0};var Xt=(()=>{class i{constructor(){this._accessors=[]}add(t,n){this._accessors.push([t,n])}remove(t){for(let n=this._accessors.length-1;n>=0;--n)if(this._accessors[n][1]===t){this._accessors.splice(n,1);return}}select(t){this._accessors.forEach(n=>{this._isSameGroup(n,t)&&n[1]!==t&&n[1].fireUncheck(t.value)})}_isSameGroup(t,n){return t[0].control?t[0]._parent===n._control._parent&&t[1].name===n.name:!1}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=B({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),be=(()=>{class i extends ot{constructor(t,n,r,o){super(t,n),this._registry=r,this._injector=o,this.setDisabledStateFired=!1,this.onChange=()=>{},this.callSetDisabledState=Ne(Ve,{optional:!0})??ne}ngOnInit(){this._control=this._injector.get(x),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this.setProperty("checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=()=>{t(this.value),this._registry.select(this)}}setDisabledState(t){(this.setDisabledStateFired||t||this.callSetDisabledState==="whenDisabledForLegacyCode")&&this.setProperty("disabled",t),this.setDisabledStateFired=!0}fireUncheck(t){this.writeValue(t)}_checkName(){this.name&&this.formControlName&&(this.name,this.formControlName),!this.name&&this.formControlName&&(this.name=this.formControlName)}static{this.\u0275fac=function(n){return new(n||i)(s(L),s(H),s(Xt),s(ke))}}static{this.\u0275dir=g({type:i,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(n,r){n&1&&N("change",function(){return r.onChange()})("blur",function(){return r.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[z([Zt]),D]})}}return i})();var Jt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=de({type:i})}static{this.\u0275inj=ce({})}}return i})();var gt=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Ve,useValue:t.callSetDisabledState??ne}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=de({type:i})}static{this.\u0275inj=ce({imports:[Jt]})}}return i})();var re=class{constructor(e,t,n){this.question=e;this.id=t;this.answers=n;this.id=e,this.question=e,this.answers=n}};var S=class i{constructor(e){this.http=e}sharedValue=new ue([]);currentValue$=this.sharedValue.asObservable();all_quions=new ue([]);quions$=this.all_quions.asObservable();updateValue(e){this.sharedValue.next(e)}update_all_quions(e){this.all_quions.next(e)}fetchAllQuions(){return this.http.get("https://server-robot.onrender.com/quion").pipe(Se(e=>{this.all_quions.next(e)}),Ie(1))}getAllLocally(){return this.quions$}getcurrentValue(){return this.currentValue$}static \u0275fac=function(t){return new(t||i)(Oe(We))};static \u0275prov=B({token:i,factory:i.\u0275fac,providedIn:"root"})};function Kt(i,e){if(i&1){let t=pe();h(0,"label",1)(1,"input",3),je("ngModelChange",function(r){he(t);let o=c(2);return Ge(o.selectedOptions,r)||(o.selectedOptions=r),fe(r)}),u(),w(2),u()}if(i&2){let t=e.$implicit,n=c(2);l(),v("name","options_"+n.id)("value",t),Re("ngModel",n.selectedOptions),l(),W(" ",t.answer," ")}}function ei(i,e){if(i&1){let t=pe();h(0,"div",0),M(1,Kt,3,4,"label",1,b),h(3,"img",2),N("click",function(r){he(t);let o=c();return fe(o.send_answar(r))}),u()()}if(i&2){let t=c();l(),A(t.answers)}}var se=class i{constructor(e){this.serv=e}answers=[];id=void 0;quions=[];quions_current=[];ngOnInit(){this.serv.getAllLocally().subscribe(e=>{this.quions=e}),this.serv.currentValue$.subscribe(e=>{this.quions_current=e})}selectedOptions=null;updateSharedValue(e){this.serv.updateValue(e)}send_answar(e){let t=document.getElementsByClassName("send-icon");t&&Array.from(t)[0].remove(),this.selectedOptions?.profession?this.quions_current.push(new re(`\u05D4\u05DE\u05E7\u05E6\u05D5\u05E2 \u05D4\u05DE\u05EA\u05D0\u05D9\u05DD \u05D1\u05D9\u05D5\u05EA\u05E8 \u05E2\u05D1\u05D5\u05E8\u05DA \u05D4\u05D5\u05D0: ${this.selectedOptions?.profession} \u05D1\u05D4\u05EA\u05D7\u05E9\u05D1 \u05D1\u05EA\u05E9\u05D5\u05D1\u05EA\u05DA`)):this.quions_current.push(this.quions.filter(n=>n.id==this.selectedOptions?.next_question_id)[0]),this.updateSharedValue(this.quions_current)}static \u0275fac=function(t){return new(t||i)(s(S))};static \u0275cmp=f({type:i,selectors:[["app-answer"]],inputs:{answers:"answers",id:"id"},standalone:!0,features:[m],decls:1,vars:1,consts:[[1,"answers"],[1,"custom-checkbox"],["src","assets/send.png","alt","Send",1,"send-icon",3,"click"],["type","radio",3,"ngModelChange","name","value","ngModel"]],template:function(t,n){t&1&&_(0,ei,4,0,"div",0),t&2&&y(n.answers?0:-1)},dependencies:[gt,te,be,pt,De],styles:[".checkbox-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.custom-checkbox[_ngcontent-%COMP%]{padding:8px;border:1px solid #000;border-radius:12px;display:flex;align-items:center;cursor:pointer;position:relative;font-size:16px}.custom-checkbox[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]{display:none}.custom-checkbox[_ngcontent-%COMP%]:has(input:checked){border:2px solid #000}.answers[_ngcontent-%COMP%]{display:flex;gap:20px}.send-icon[_ngcontent-%COMP%]{width:50px;height:40px;transform:scaleX(-1);cursor:pointer}"]})};var ti=i=>({thinking:i});function ii(i,e){if(i&1&&p(0,"div",4),i&2){let t=e.$implicit;v("ngClass",Be(1,ti,t))}}function ni(i,e){if(i&1&&(h(0,"div",3),M(1,ii,1,3,"div",4,b),u()),i&2){let t=c();l(),A(t.dots)}}function ri(i,e){if(i&1&&p(0,"app-answer",6),i&2){let t=c(2);v("answers",t.answers)("id",t.id)}}function si(i,e){if(i&1&&(h(0,"div",5),w(1),u(),_(2,ri,1,2,"app-answer",6)),i&2){let t=c();l(),W(" ",t.quion," "),l(),y(t.answers&&t.id?2:-1)}}var oe=class i{constructor(e){this.cdr=e;this.isThinking=!1}quion="";answers=[];id="";isThinking=!1;question="\u05D0\u05D9\u05DA \u05D0\u05EA\u05D4 \u05DE\u05E2\u05D3\u05D9\u05E3 \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D0\u05EA \u05D4\u05D9\u05D5\u05DD \u05E9\u05DC\u05DA?";ngAfterViewInit(){this.isThinking=!1}dots=[!1,!1,!1];ngOnChanges(e){(e.quion||e.answers)&&this.startThinking()}subscription=null;startThinking(){this.isThinking=!0;let e=0;this.subscription?.unsubscribe(),this.subscription=xe(500).subscribe(()=>{e=(e+1)%4,this.dots=[e>0,e>1,e>2],e===0&&(this.isThinking=!1,this.subscription?.unsubscribe())})}static \u0275fac=function(t){return new(t||i)(s(Q))};static \u0275cmp=f({type:i,selectors:[["app-quion"]],inputs:{quion:"quion",answers:"answers",id:"id"},standalone:!0,features:[U,m],decls:5,vars:1,consts:[[1,"row"],[1,"robot","col-md-auto"],["src","assets/robot.jpg","alt","Robot",1,"robot-icon"],[1,"thinking-dots"],[1,"dot",3,"ngClass"],[1,"question","col-md-8"],[3,"answers","id"]],template:function(t,n){t&1&&(h(0,"div",0)(1,"div",1),p(2,"img",2),u(),_(3,ni,3,0,"div",3)(4,si,3,2),u()),t&2&&(l(3),y(n.isThinking?3:n.isThinking?-1:4))},dependencies:[X,$e,se],styles:['@charset "UTF-8";.robot-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px}.robot[_ngcontent-%COMP%]{margin-bottom:20px}.robot-icon[_ngcontent-%COMP%]{border-radius:48px;width:70px;height:70px}.thinking-dots[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10px}.dot[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;background-color:#ccc;transition:background-color .3s ease}.dot.thinking[_ngcontent-%COMP%]{background-color:#888}.question[_ngcontent-%COMP%]{font-size:18px;font-weight:700;margin-top:20px}']})};function oi(i,e){if(i&1&&p(0,"app-quion",1),i&2){let t=e.$implicit;v("id",t.id?t.id:null)("quion",t.question)("answers",t.answers?t.answers:null)}}function ai(i,e){if(i&1&&M(0,oi,1,3,"app-quion",1,b),i&2){let t=c();A(t.currentValue)}}var ae=class i{constructor(e){this.serv=e;this.serv.currentValue$.subscribe(t=>{this.currentValue=t})}arr_quion=[];currentValue=[];ngOnInit(){this.serv.fetchAllQuions().subscribe(e=>{this.currentValue?.push(e[0]),this.arr_quion=e,this.updateSharedValue(this.currentValue)}),this.serv.getcurrentValue().subscribe(e=>{this.currentValue=e})}updateSharedValue(e){this.serv.updateValue(e)}static \u0275fac=function(t){return new(t||i)(s(S))};static \u0275cmp=f({type:i,selectors:[["app-manage"]],standalone:!0,features:[m],decls:3,vars:1,consts:[[1,"title_reserved"],[3,"id","quion","answers"]],template:function(t,n){t&1&&(h(0,"h1",0),w(1,"\u05E6\u05D0\u05D8 \u05D6\u05D4 \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D9\u05E2\u05DC \u05E2\u05D2'\u05DE\u05D9"),u(),_(2,ai,2,0)),t&2&&(l(2),y(n.currentValue?2:-1))},dependencies:[X,oe],styles:[".title_reserved[_ngcontent-%COMP%]{text-align:center;color:#6495ed}"]})};var le=class i{title="robot";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["app-root"]],standalone:!0,features:[m],decls:1,vars:0,consts:[[1,"container"]],template:function(t,n){t&1&&p(0,"app-manage",0)},dependencies:[ae],styles:["app-manage[_ngcontent-%COMP%]{margin-top:5%!important}"]})};var vt=[];var yt={providers:[qe({eventCoalescing:!0}),Je(vt),Ze(),ze()]};var li={providers:[Xe()]},Ct=Le(yt,li);var ui=()=>Qe(le,Ct),pn=ui;export{pn as a};
