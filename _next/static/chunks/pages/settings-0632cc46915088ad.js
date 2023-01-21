(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{70368:function(e,n,l){"use strict";l.r(n);var r=l(50029),i=l(87794),t=l.n(i),a=l(93563),u=l(14468),s=l(23100),o=l(4085),d=l(43655),c=l(85893);n.default=function(){var e,n=(0,a.a)().mutate,l=(e=(0,r.Z)(t().mark(function e(l){return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!l.target.files){e.next=4;break}return e.next=3,u.x.users.post({body:{file:l.target.files[0]}});case 3:n();case 4:case"end":return e.stop()}},e)})),function(n){return e.apply(this,arguments)});return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.xu,{children:(0,c.jsx)(o.U,{children:(0,c.jsx)(d.I,{type:"file",accept:"image/*",onChange:l})})})})}},73406:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return l(70368)}])},38267:function(e,n,l){"use strict";l.d(n,{NI:function(){return h},NJ:function(){return v},e:function(){return p}});var r=l(55227),i=l(81103),t=l(35059),a=l(54662),u=l(33179),s=l(79513),o=l(25432),d=l(67294),c=l(85893),[f,p]=(0,r.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[m,v]=(0,r.k)({strict:!1,name:"FormControlContext"}),h=(0,t.G)(function(e,n){let l=(0,a.jC)("Form",e),r=(0,u.Lr)(e),{getRootProps:t,htmlProps:p,...v}=function(e){let{id:n,isRequired:l,isInvalid:r,isDisabled:t,isReadOnly:a,...u}=e,s=(0,d.useId)(),c=n||`field-${s}`,f=`${c}-label`,p=`${c}-feedback`,m=`${c}-helptext`,[v,h]=(0,d.useState)(!1),[x,b]=(0,d.useState)(!1),[_,k]=(0,d.useState)(!1),y=(0,d.useCallback)((e={},n=null)=>({id:m,...e,ref:(0,i.lq)(n,e=>{e&&b(!0)})}),[m]),C=(0,d.useCallback)((e={},n=null)=>{var l,i;return{...e,ref:n,"data-focus":(0,o.PB)(_),"data-disabled":(0,o.PB)(t),"data-invalid":(0,o.PB)(r),"data-readonly":(0,o.PB)(a),id:null!=(l=e.id)?l:f,htmlFor:null!=(i=e.htmlFor)?i:c}},[c,t,_,r,a,f]),F=(0,d.useCallback)((e={},n=null)=>({id:p,...e,ref:(0,i.lq)(n,e=>{e&&h(!0)}),"aria-live":"polite"}),[p]),N=(0,d.useCallback)((e={},n=null)=>({...e,...u,ref:n,role:"group"}),[u]),I=(0,d.useCallback)((e={},n=null)=>({...e,ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!l,isInvalid:!!r,isReadOnly:!!a,isDisabled:!!t,isFocused:!!_,onFocus:()=>k(!0),onBlur:()=>k(!1),hasFeedbackText:v,setHasFeedbackText:h,hasHelpText:x,setHasHelpText:b,id:c,labelId:f,feedbackId:p,helpTextId:m,htmlProps:u,getHelpTextProps:y,getErrorMessageProps:F,getRootProps:N,getLabelProps:C,getRequiredIndicatorProps:I}}(r),h=(0,o.cx)("chakra-form-control",e.className);return(0,c.jsx)(m,{value:v,children:(0,c.jsx)(f,{value:l,children:(0,c.jsx)(s.m.div,{...t({},n),className:h,__css:l.container})})})});h.displayName="FormControl",(0,t.G)(function(e,n){let l=v(),r=p(),i=(0,o.cx)("chakra-form__helper-text",e.className);return(0,c.jsx)(s.m.div,{...null==l?void 0:l.getHelpTextProps(e,n),__css:r.helperText,className:i})}).displayName="FormHelperText"},43655:function(e,n,l){"use strict";l.d(n,{I:function(){return d}});var r=l(38267),i=l(25432),t=l(35059),a=l(54662),u=l(33179),s=l(79513),o=l(85893),d=(0,t.G)(function(e,n){let{htmlSize:l,...t}=e,d=(0,a.jC)("Input",t),c=(0,u.Lr)(t),f=function(e){let{isDisabled:n,isInvalid:l,isReadOnly:t,isRequired:a,...u}=function(e){var n,l,t;let a=(0,r.NJ)(),{id:u,disabled:s,readOnly:o,required:d,isRequired:c,isInvalid:f,isReadOnly:p,isDisabled:m,onFocus:v,onBlur:h,...x}=e,b=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==a?void 0:a.hasFeedbackText)&&(null==a?void 0:a.isInvalid)&&b.push(a.feedbackId),(null==a?void 0:a.hasHelpText)&&b.push(a.helpTextId),{...x,"aria-describedby":b.join(" ")||void 0,id:null!=u?u:null==a?void 0:a.id,isDisabled:null!=(n=null!=s?s:m)?n:null==a?void 0:a.isDisabled,isReadOnly:null!=(l=null!=o?o:p)?l:null==a?void 0:a.isReadOnly,isRequired:null!=(t=null!=d?d:c)?t:null==a?void 0:a.isRequired,isInvalid:null!=f?f:null==a?void 0:a.isInvalid,onFocus:(0,i.v0)(null==a?void 0:a.onFocus,v),onBlur:(0,i.v0)(null==a?void 0:a.onBlur,h)}}(e);return{...u,disabled:n,readOnly:t,required:a,"aria-invalid":(0,i.Qm)(l),"aria-required":(0,i.Qm)(a),"aria-readonly":(0,i.Qm)(t)}}(c),p=(0,i.cx)("chakra-input",e.className);return(0,o.jsx)(s.m.input,{size:l,...f,__css:d.field,ref:n,className:p})});d.displayName="Input",d.id="Input"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=73406)}),_N_E=e.O()}]);