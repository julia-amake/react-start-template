"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[125],{"./shared/ui/Select/Select.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});const meta={title:"shared/Select",component:__webpack_require__("./shared/ui/Select/Select.tsx").l,args:{}};__webpack_exports__.default=meta;const Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./shared/ui/Select/Select.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return Select}});var react=__webpack_require__("../node_modules/react/index.js"),clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js");const typedMemo=react.memo;var Select_module={light:"BOcer2Rb",dark:"Ptjg2eij",fieldWrapper:"gRFpNyAr",fieldWrapper_error:"HmjFC6S_",select:"JxPbtO2F",error:"M3vZ_0kM"},jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js");const Select=typedMemo((_ref=>{let{label:label,value:value,options:options,errorMessage:errorMessage,disabled:disabled,className:className,onChange:onChange,...otherProps}=_ref;const selectId=(0,react.useId)();return(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.A)(Select_module.outer,className),children:[(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.A)(Select_module.fieldWrapper,{[Select_module.fieldWrapper_error]:errorMessage}),children:[label&&(0,jsx_runtime.jsx)("label",{className:Select_module.label,htmlFor:selectId,children:label}),(0,jsx_runtime.jsx)("select",{className:(0,clsx_m.A)(Select_module.select,{[Select_module.disabled]:disabled}),...value?{value:value}:{},onChange:onChange,disabled:disabled,...otherProps,children:options.map((opt=>(0,jsx_runtime.jsx)("option",{value:opt.value,children:opt.content},opt.value)))})]}),errorMessage&&(0,jsx_runtime.jsx)("div",{className:Select_module.error,children:errorMessage})]})}));try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOption<T>[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/shared/ui/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}},"../node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_exports__.A=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}}}]);