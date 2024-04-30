"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[511],{"./widgets/temp/ModalStateTesting/ui/ModalStateTesting/ModalStateTesting.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ModalStateTesting_stories}});var react=__webpack_require__("../node_modules/react/index.js"),clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),Button=__webpack_require__("./shared/ui/Button/index.ts"),Modal=__webpack_require__("./shared/ui/Modal/Modal.tsx"),TextField=__webpack_require__("./shared/ui/TextField/TextField.tsx"),ModalStateTesting_module_outer="EEqoMqNo",jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js");const ModalStateTesting=(0,react.memo)((_ref=>{let{className:className}=_ref;const[message,setMessage]=(0,react.useState)(""),[isModalOpen,setIsModalOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.A)(ModalStateTesting_module_outer,className),children:[(0,jsx_runtime.jsx)(TextField.A,{label:"Что вывести в модалке?",onChange:setMessage}),(0,jsx_runtime.jsx)(Button.$,{label:"Открыть модалку",onClick:()=>setIsModalOpen(!0),disabled:!message}),(0,jsx_runtime.jsx)(Modal.a,{visible:isModalOpen,onClose:()=>setIsModalOpen(!1),children:message})]})}));ModalStateTesting.displayName="ModalStateTesting";try{ModalStateTesting.displayName="ModalStateTesting",ModalStateTesting.__docgenInfo={description:"",displayName:"ModalStateTesting",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/temp/ModalStateTesting/ui/ModalStateTesting/ModalStateTesting.tsx#ModalStateTesting"]={docgenInfo:ModalStateTesting.__docgenInfo,name:"ModalStateTesting",path:"src/widgets/temp/ModalStateTesting/ui/ModalStateTesting/ModalStateTesting.tsx#ModalStateTesting"})}catch(__react_docgen_typescript_loader_error){}var ModalStateTesting_stories={title:"widgets/ModalStateTesting",component:ModalStateTesting,args:{}};const Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./shared/lib/hooks/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{hJ:function(){return useImageLoading},XD:function(){return useInfiniteScroll},w5:function(){return usePreventPageScrolling}});var react=__webpack_require__("../node_modules/react/index.js");const usePreventPageScrolling=isPrevent=>{(0,react.useEffect)((()=>{isPrevent?document.body.classList.add("modal-opened"):document.body.classList.remove("modal-opened")}),[isPrevent])};try{usePreventPageScrolling.displayName="usePreventPageScrolling",usePreventPageScrolling.__docgenInfo={description:"",displayName:"usePreventPageScrolling",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/lib/hooks/usePreventPageScrolling/usePreventPageScrolling.tsx#usePreventPageScrolling"]={docgenInfo:usePreventPageScrolling.__docgenInfo,name:"usePreventPageScrolling",path:"src/shared/lib/hooks/usePreventPageScrolling/usePreventPageScrolling.tsx#usePreventPageScrolling"})}catch(__react_docgen_typescript_loader_error){}const useImageLoading=src=>{const[isLoading,setIsLoading]=(0,react.useState)(!0),[isError,setIsError]=(0,react.useState)(!1);return(0,react.useLayoutEffect)((()=>{const img=new Image;img.src=src,img.onload=()=>{setIsLoading(!1),setIsError(!1)},img.onerror=()=>{setIsLoading(!1),setIsError(!0)}}),[src]),[isLoading,isError]};try{useImageLoading.displayName="useImageLoading",useImageLoading.__docgenInfo={description:"",displayName:"useImageLoading",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/lib/hooks/useImageLoading/useImageLoading.tsx#useImageLoading"]={docgenInfo:useImageLoading.__docgenInfo,name:"useImageLoading",path:"src/shared/lib/hooks/useImageLoading/useImageLoading.tsx#useImageLoading"})}catch(__react_docgen_typescript_loader_error){}const useInfiniteScroll=_ref=>{let{triggerRef:triggerRef,wrapperRef:wrapperRef,action:action}=_ref;const[isVisible,setIsVisible]=(0,react.useState)(!1),observerRef=(0,react.useRef)(null);return(0,react.useEffect)((()=>{const wrapperElement=wrapperRef?.current||null,triggerElement=triggerRef.current;let observer=observerRef.current;if(triggerElement)return observer=new IntersectionObserver((entries=>{entries.forEach((entry=>{entry.isIntersecting&&(setIsVisible(entry.isIntersecting),action?.())}),{root:wrapperElement})})),observer.observe(triggerElement),()=>observer?.disconnect()}),[action,triggerRef,wrapperRef]),{isVisible:isVisible}};try{useInfiniteScroll.displayName="useInfiniteScroll",useInfiniteScroll.__docgenInfo={description:"",displayName:"useInfiniteScroll",props:{triggerRef:{defaultValue:null,description:"",name:"triggerRef",required:!0,type:{name:"RefObject<HTMLElement>"}},wrapperRef:{defaultValue:null,description:"",name:"wrapperRef",required:!1,type:{name:"RefObject<HTMLElement>"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll.tsx#useInfiniteScroll"]={docgenInfo:useInfiniteScroll.__docgenInfo,name:"useInfiniteScroll",path:"src/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll.tsx#useInfiniteScroll"})}catch(__react_docgen_typescript_loader_error){}},"./shared/ui/Button/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return Button}});var react=__webpack_require__("../node_modules/react/index.js"),clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),Button_module={light:"FsDb7TyM",dark:"cfvuD2f9",outer:"WvrqF4fU",outer_full:"A_HXkQ8k","outer_variant-primary":"VkAqq1Mz",outer_disabled:"rxHgDSGr","outer_variant-secondary":"IThhr5Yo","outer_variant-clean":"tlW4EkXE","outer_text-center":"chk5Xay3","outer_text-left":"jV478Wi7","outer_text-right":"leiH9zFI","outer_size-xs":"JoEoUWMW","outer_size-s":"mIF1bhUh","outer_size-m":"MZMMZEub","outer_noLabel-xs":"u1RT6wDE","outer_noLabel-s":"mEqPuAYw","outer_noLabel-m":"Ru0wfdNq",outer_rounded:"JBkbFkDn",icon:"RKHfdB3X",icon_withLabel:"WVvm9MJ8","icon_size-xs":"KwslkaOH",icon_noLabel:"bRzaxF2b","icon_size-s":"dsqQK5jM","icon_size-m":"s_UNaqkz","icon_variant-primary":"La2uGDr2","icon_variant-secondary":"xAYICHo9","icon_variant-clean":"ytw4JIRK",icon_right:"HT3LDlSb"},jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js");const Button=(0,react.memo)((0,react.forwardRef)(((_ref,ref)=>{let{label:label,icon:Icon,iconPosition:iconPosition="left",iconClassName:iconClassName,textPosition:textPosition="center",size:size="m",variant:variant="primary",rounded:rounded=!1,full:full=!1,title:title,disabled:disabled,onClick:onClick,className:className}=_ref;if(!label&&!Icon)return null;const buttonClassNames=(0,clsx_m.A)(Button_module.outer,className,Button_module[`outer_size-${size}`],Button_module[`outer_variant-${variant}`],Button_module[`outer_text-${textPosition}`],{[Button_module[`outer_noLabel-${size}`]]:!label,[Button_module.outer_full]:full,[Button_module.outer_disabled]:disabled,[Button_module.outer_rounded]:rounded}),buttonInner=(()=>{if(!Icon)return label;const iconElem=(0,jsx_runtime.jsx)(Icon,{className:(0,clsx_m.A)(Button_module.icon,iconClassName,Button_module[`icon_variant-${variant}`],Button_module[`icon_size-${size}`],{[Button_module.icon_right]:"right"===iconPosition,[Button_module.icon_withLabel]:label,[Button_module.icon_noLabel]:!label})});return label?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[iconElem,(0,jsx_runtime.jsx)("span",{children:label})]}):iconElem})();return(0,jsx_runtime.jsx)("button",{className:buttonClassNames,title:title,disabled:disabled,type:"button",onClick:()=>onClick?.(),ref:ref,children:buttonInner})})));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xs"'},{value:'"m"'}]}},title:{defaultValue:null,description:"Подсказка при наведении",name:"title",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},label:{defaultValue:null,description:"Текст на кнопке",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"any"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},iconClassName:{defaultValue:null,description:"",name:"iconClassName",required:!1,type:{name:"string"}},textPosition:{defaultValue:null,description:"",name:"textPosition",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"clean"'}]}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},full:{defaultValue:null,description:"",name:"full",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/ui/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./shared/ui/Button/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return _Button__WEBPACK_IMPORTED_MODULE_0__.$}});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./shared/ui/Button/Button.tsx")},"./shared/ui/Modal/Modal.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return Modal}});var react=__webpack_require__("../node_modules/react/index.js"),clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),hooks=__webpack_require__("./shared/lib/hooks/index.ts"),Button=__webpack_require__("./shared/ui/Button/index.ts"),react_dom=__webpack_require__("../node_modules/react-dom/index.js");const Portal=props=>{const{children:children,elementId:elementId="root"}=props;return(0,react_dom.createPortal)(children,document.getElementById(elementId)||document.body)};try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{elementId:{defaultValue:null,description:"",name:"elementId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Portal/Portal.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/shared/ui/Portal/Portal.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}var _path;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Close=props=>react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},props),_path||(_path=react.createElement("path",{d:"M25.707 24.293a1 1 0 0 1 0 1.415 1 1 0 0 1-1.415 0L16 17.414l-8.293 8.294a1 1 0 0 1-1.415-1.415L14.586 16 6.292 7.708a1 1 0 1 1 1.415-1.415L16 14.586l8.292-8.293a1 1 0 0 1 1.415 1.415L17.414 16z"}))),Modal_module_outer="QPp96y7f",Modal_module_outer_visible="E3NGlyJm",Modal_module_inner="WZoUWWeK",Modal_module_overlay="kDXEAdZ2",Modal_module_close="_F3KOFZ2",Modal_module_closeIcon="HXakvWOS",jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js");const Modal=_ref=>{let{children:children,visible:visible=!1,lazy:lazy=!0,onClose:onClose}=_ref;return(0,hooks.w5)(visible),lazy&&!visible?null:(0,jsx_runtime.jsx)(Portal,{children:(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.A)(Modal_module_outer,{[Modal_module_outer_visible]:visible}),children:[(0,jsx_runtime.jsx)("div",{className:Modal_module_overlay,onClick:()=>onClose?.(),children:(0,jsx_runtime.jsx)(Button.$,{className:Modal_module_close,icon:Close,iconClassName:Modal_module_closeIcon,variant:"clean",size:"m",title:"Закрыть"})}),(0,jsx_runtime.jsx)("div",{className:Modal_module_inner,children:children})]})})};Modal.displayName="Modal";try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{visible:{defaultValue:{value:"false"},description:"",name:"visible",required:!1,type:{name:"boolean"}},lazy:{defaultValue:{value:"true"},description:"",name:"lazy",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/shared/ui/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./shared/ui/TextField/TextField.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return TextField}});var react=__webpack_require__("../node_modules/react/index.js"),clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),TextField_module_fieldWrapper="IbR1a_5W",TextField_module_fieldWrapper_error="zQ88zS58",TextField_module_label="hzEyBse6",TextField_module_field="lu2nOaTh",TextField_module_label_top="iRwho7BT",TextField_module_error="OgO2dF33",jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js");const TextField=_ref=>{let{type:type="text",label:label,defaultValue:defaultValue,placeholder:placeholder,errorMessage:errorMessage,classNames:classNames,onChange:onChange,onFocus:onFocus,onBlur:onBlur,...other}=_ref;const[value,setValue]=(0,react.useState)(),[isFocused,setIsFocused]=(0,react.useState)(!1),inputId=(0,react.useId)();return(0,jsx_runtime.jsxs)("div",{className:classNames?.wrapper,children:[(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.A)(TextField_module_fieldWrapper,{[TextField_module_fieldWrapper_error]:errorMessage}),children:[label&&(0,jsx_runtime.jsx)("label",{className:(0,clsx_m.A)(TextField_module_label,{[TextField_module_label_top]:isFocused||value||defaultValue}),htmlFor:inputId,children:label}),(0,jsx_runtime.jsx)("input",{className:(0,clsx_m.A)(TextField_module_field,classNames?.field),id:inputId,type:type,value:value,defaultValue:defaultValue,...!label&&placeholder?{placeholder:placeholder}:{},onChange:e=>{setValue(e.currentTarget.value),onChange?.(e.currentTarget.value)},onFocus:e=>{setIsFocused(!0),onFocus?.(e.target.value)},onBlur:e=>{setIsFocused(!1),onBlur?.(e.target.value)},...other})]}),errorMessage&&(0,jsx_runtime.jsx)("div",{className:TextField_module_error,children:errorMessage})]})};TextField.displayName="TextField";try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'},{value:'"text"'},{value:'"url"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"TextFieldClassNames"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((value: string) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((value: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/TextField/TextField.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"src/shared/ui/TextField/TextField.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}},"../node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_exports__.A=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}}}]);