import{_ as h,r as B,o as v,a as y,c as F,b as e,d as l,w as p,u as g,p as C,e as b,f as m,g as V}from"./index.c8ad9a4d.js";import{F as w,a as A,E,u as S,l as x}from"./user.5961862f.js";import{v as D,g as N}from"./public.b2252dfe.js";const k={components:{Form:w,Field:A,ErrorMessage:E},setup(){const u=g(),s=B(""),f={userName:"",password:"",code:""},o={userName:_,password:_,code:a=>{const t=a;return!t||!t.trim()?"\u4E0D\u80FD\u4E3A\u7A7A!":t.length!==4?"\u8BF7\u8F93\u51654\u4F4D\u9A8C\u8BC1\u7801!":!0}},{values:r}=S({initialValues:f,validationSchema:o});function _(a){const t=a;return!t||!t.trim()?"\u4E0D\u80FD\u4E3A\u7A7A!":t.length<6||t.length>20?"\u8BF7\u8F93\u51656-20\u4F4D\u5B57\u7B26!":!0}function c(){let a=u.state.sid;a||(u.commit("setSid",D()),a=u.state.sid),N({sid:a}).then(t=>{s.value=t.data.data})}const d=async()=>{const a=await x({username:r.userName,password:r.password,code:r.code,sid:u.state.sid});console.log("ret",a)};return v(()=>{c()}),{captchaSvgCode:s,validationSchema:o,getCaptchaCode:c,formValues:r,onSubmit:d}}},n=u=>(C("data-v-0ce75873"),u=u(),b(),u),M={class:"login"},L={class:"layui-container"},I={class:"layui-tab layui-tab-brief","lay-filter":"docDemoTabBrief"},T={class:"layui-tab-title"},U=n(()=>e("li",{class:"layui-this"},"\u767B\u5F55",-1)),H=n(()=>e("li",null,"\u6CE8\u518C",-1)),j={class:"layui-tab-content"},q={class:"layui-form-item"},z=n(()=>e("label",{class:"layui-form-label"},"\u624B\u673A/\u90AE\u7BB1",-1)),G={class:"layui-input-block"},J={class:"layui-form-item"},K=n(()=>e("label",{class:"layui-form-label"},"\u5BC6\u7801",-1)),O={class:"layui-input-block"},P={class:"layui-form-item"},Q=n(()=>e("label",{class:"layui-form-label"},"\u9A8C\u8BC1\u7801",-1)),R={class:"layui-input-inline"},W=["innerHTML"],X=n(()=>e("button",{class:"layui-btn","lay-filter":"formDemo"},"\u70B9\u51FB\u767B\u5F55",-1)),Y=V("\u5FD8\u8BB0\u5BC6\u7801?"),Z=n(()=>e("div",{class:"third-platform"},"\u6216\u8005\u4F7F\u7528\u793E\u4EA4\u8D26\u53F7\u767B\u5F55",-1));function $(u,s,f,o,r,_){const c=m("router-link"),d=m("Field"),a=m("ErrorMessage"),t=m("Form");return y(),F("div",M,[e("div",L,[e("div",I,[e("ul",T,[U,l(c,{to:{name:"reg"}},{default:p(()=>[H]),_:1})]),e("div",j,[l(t,{class:"layui-form layui-form-pane",onSubmit:o.onSubmit,"validation-schema":o.validationSchema},{default:p(()=>[e("div",q,[z,e("div",G,[l(d,{type:"text",name:"userName",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A/\u90AE\u7BB1",autocomplete:"off",class:"layui-input",modelValue:o.formValues.userName,"onUpdate:modelValue":s[0]||(s[0]=i=>o.formValues.userName=i)},null,8,["modelValue"]),l(a,{class:"error-text",name:"userName"})])]),e("div",J,[K,e("div",O,[l(d,{type:"password",name:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",autocomplete:"off",class:"layui-input",modelValue:o.formValues.password,"onUpdate:modelValue":s[1]||(s[1]=i=>o.formValues.password=i)},null,8,["modelValue"]),l(a,{class:"error-text",name:"password"})])]),e("div",P,[Q,e("div",R,[l(d,{type:"text",name:"code",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",autocomplete:"off",class:"layui-input",modelValue:o.formValues.code,"onUpdate:modelValue":s[2]||(s[2]=i=>o.formValues.code=i)},null,8,["modelValue"]),l(a,{class:"error-text",name:"code"})]),e("div",{class:"layui-form-mid layui-word-aux captch-code-svg",innerHTML:o.captchaSvgCode,onClick:s[3]||(s[3]=(...i)=>o.getCaptchaCode&&o.getCaptchaCode(...i)),title:"\u70B9\u51FB\u5237\u65B0\u9A8C\u8BC1\u7801"},null,8,W)]),X,l(c,{to:{name:"forget"},class:"forgot-pwd"},{default:p(()=>[Y]),_:1}),Z]),_:1},8,["onSubmit","validation-schema"])])])])])}var te=h(k,[["render",$],["__scopeId","data-v-0ce75873"]]);export{te as default};