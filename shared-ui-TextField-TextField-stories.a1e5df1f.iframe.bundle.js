"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71],{"./shared/ui/TextField/TextField.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultValue:function(){return DefaultValue},Error:function(){return Error},LabelAsPlaceholder:function(){return LabelAsPlaceholder},NoLabelWithPlaceholder:function(){return NoLabelWithPlaceholder},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("../node_modules/react/index.js");var _TextField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./shared/ui/TextField/TextField.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/react/jsx-runtime.js");const meta={title:"shared/TextField",component:_TextField__WEBPACK_IMPORTED_MODULE_1__.A,args:{}};__webpack_exports__.default=meta;const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:320},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_1__.A,{...args})});Template.displayName="Template";const LabelAsPlaceholder=Template.bind({}),NoLabelWithPlaceholder=Template.bind({}),DefaultValue=Template.bind({}),Error=Template.bind({});LabelAsPlaceholder.args={label:"Введите свой email"},DefaultValue.args={label:"Введите свой email",defaultValue:"12345"},Error.args={label:"Введите свой email",errorMessage:"Текст ошибки"},NoLabelWithPlaceholder.args={placeholder:"Введите свой email"},LabelAsPlaceholder.parameters={...LabelAsPlaceholder.parameters,docs:{...LabelAsPlaceholder.parameters?.docs,source:{originalSource:"args => <div style={{\n  width: 320\n}}>\n    <TextField {...args} />\n  </div>",...LabelAsPlaceholder.parameters?.docs?.source}}},NoLabelWithPlaceholder.parameters={...NoLabelWithPlaceholder.parameters,docs:{...NoLabelWithPlaceholder.parameters?.docs,source:{originalSource:"args => <div style={{\n  width: 320\n}}>\n    <TextField {...args} />\n  </div>",...NoLabelWithPlaceholder.parameters?.docs?.source}}},DefaultValue.parameters={...DefaultValue.parameters,docs:{...DefaultValue.parameters?.docs,source:{originalSource:"args => <div style={{\n  width: 320\n}}>\n    <TextField {...args} />\n  </div>",...DefaultValue.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"args => <div style={{\n  width: 320\n}}>\n    <TextField {...args} />\n  </div>",...Error.parameters?.docs?.source}}};const __namedExportsOrder=["LabelAsPlaceholder","NoLabelWithPlaceholder","DefaultValue","Error"]},"./shared/ui/TextField/TextField.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return TextField}});var react=__webpack_require__("../node_modules/react/index.js"),clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),TextField_module_fieldWrapper="IbR1a_5W",TextField_module_fieldWrapper_error="zQ88zS58",TextField_module_label="hzEyBse6",TextField_module_field="lu2nOaTh",TextField_module_label_top="iRwho7BT",TextField_module_error="OgO2dF33",jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js");const TextField=(0,react.memo)((0,react.forwardRef)(((_ref,ref)=>{let{type:type="text",label:label,defaultValue:defaultValue,placeholder:placeholder,errorMessage:errorMessage,classNames:classNames,onChange:onChange,onFocus:onFocus,onBlur:onBlur,...other}=_ref;const[value,setValue]=(0,react.useState)(defaultValue||""),[isFocused,setIsFocused]=(0,react.useState)(!1),inputId=(0,react.useId)();return(0,jsx_runtime.jsxs)("div",{className:classNames?.wrapper,children:[(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.A)(TextField_module_fieldWrapper,{[TextField_module_fieldWrapper_error]:errorMessage}),children:[label&&(0,jsx_runtime.jsx)("label",{className:(0,clsx_m.A)(TextField_module_label,{[TextField_module_label_top]:isFocused||value||defaultValue}),htmlFor:inputId,children:label}),(0,jsx_runtime.jsx)("input",{ref:ref,className:(0,clsx_m.A)(TextField_module_field,classNames?.field),id:inputId,type:type,value:value,...!label&&placeholder?{placeholder:placeholder}:{},onChange:e=>{setValue(e.currentTarget.value),onChange?.(e)},onFocus:e=>{setIsFocused(!0),onFocus?.(e)},onBlur:e=>{setIsFocused(!1),onBlur?.(e)},...other})]}),errorMessage&&(0,jsx_runtime.jsx)("div",{className:TextField_module_error,children:errorMessage})]})})));try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'},{value:'"text"'},{value:'"url"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"undefined"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"ReactNode"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"TextFieldClassNames"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/TextField/TextField.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"src/shared/ui/TextField/TextField.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}},"../node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_exports__.A=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}}}]);