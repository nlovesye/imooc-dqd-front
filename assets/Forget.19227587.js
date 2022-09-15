import{F as h,a as v,E as y,u as B,r as F,f as b}from"./user.435ff1d3.js";import{_ as g,r as C,o as A,a as E,c as V,b as a,d as n,w as p,p as N,e as x,f as i}from"./main.61a30f6e.js";const D={components:{Form:h,Field:v,ErrorMessage:y},setup(){const l=C(""),t={userName:"",code:""},c={userName:d,password:d,code:s=>{const o=s;return!o||!o.trim()?"\u4E0D\u80FD\u4E3A\u7A7A!":o.length!==4?"\u8BF7\u8F93\u51654\u4F4D\u9A8C\u8BC1\u7801!":!0}},{values:e}=B({initialValues:t,validationSchema:c});function d(s){const o=s;return!o||!o.trim()?"\u4E0D\u80FD\u4E3A\u7A7A!":o.length<6||o.length>20?"\u8BF7\u8F93\u51656-20\u4F4D\u5B57\u7B26!":!0}function m(){F.get("/public/getCaptcha").then(s=>{l.value=s.data.data})}const _=async()=>{const s=await b({userName:e.userName,code:e.code,email:e.userName}),{code:o,data:f,message:u}=s;o===200&&alert(u)};return A(()=>{m()}),{captchaSvgCode:l,validationSchema:c,getCaptchaCode:m,formValues:e,onSubmit:_}}},r=l=>(N("data-v-71ab4bed"),l=l(),x(),l),S={class:"forget"},k={class:"layui-container"},w={class:"layui-tab layui-tab-brief","lay-filter":"docDemoTabBrief"},M={class:"layui-tab-title"},I=r(()=>a("li",null,"\u767B\u5F55",-1)),L=r(()=>a("li",{class:"layui-this"},"\u627E\u56DE\u5BC6\u7801",-1)),T={class:"layui-tab-content"},H={class:"layui-form-item"},U=r(()=>a("label",{class:"layui-form-label"},"\u624B\u673A/\u90AE\u7BB1",-1)),q={class:"layui-input-block"},j={class:"layui-form-item"},z=r(()=>a("label",{class:"layui-form-label"},"\u9A8C\u8BC1\u7801",-1)),G={class:"layui-input-inline"},J=["innerHTML"];function K(l,t,c,e,d,m){const _=i("router-link"),s=i("Field"),o=i("ErrorMessage"),f=i("Form");return E(),V("div",S,[a("div",k,[a("div",w,[a("ul",M,[n(_,{to:{name:"login"}},{default:p(()=>[I]),_:1}),L]),a("div",T,[n(f,{class:"layui-form layui-form-pane","validation-schema":e.validationSchema},{default:p(()=>[a("div",H,[U,a("div",q,[n(s,{type:"text",name:"userName",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A/\u90AE\u7BB1",autocomplete:"off",class:"layui-input",modelValue:e.formValues.userName,"onUpdate:modelValue":t[0]||(t[0]=u=>e.formValues.userName=u)},null,8,["modelValue"]),n(o,{class:"error-text",name:"userName"})])]),a("div",j,[z,a("div",G,[n(s,{type:"text",name:"code",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",autocomplete:"off",class:"layui-input",modelValue:e.formValues.code,"onUpdate:modelValue":t[1]||(t[1]=u=>e.formValues.code=u)},null,8,["modelValue"]),n(o,{class:"error-text",name:"code"})]),a("div",{class:"layui-form-mid layui-word-aux captch-code-svg",innerHTML:e.captchaSvgCode,onClick:t[2]||(t[2]=(...u)=>e.getCaptchaCode&&e.getCaptchaCode(...u)),title:"\u70B9\u51FB\u5237\u65B0\u9A8C\u8BC1\u7801"},null,8,J)]),a("button",{class:"layui-btn",onClick:t[3]||(t[3]=(...u)=>e.onSubmit&&e.onSubmit(...u)),"lay-filter":"formDemo"}," \u63D0\u4EA4 ")]),_:1},8,["validation-schema"])])])])])}var Q=g(D,[["render",K],["__scopeId","data-v-71ab4bed"]]);export{Q as default};
