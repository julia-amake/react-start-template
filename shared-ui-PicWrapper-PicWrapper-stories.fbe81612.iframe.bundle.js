"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[551],{"./shared/ui/PicWrapper/PicWrapper.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BrokenImage:function(){return BrokenImage},Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("../node_modules/react/index.js");var _PicWrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./shared/ui/PicWrapper/PicWrapper.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/react/jsx-runtime.js");const meta={title:"shared/PicWrapper",component:_PicWrapper__WEBPACK_IMPORTED_MODULE_1__.a,args:{}};__webpack_exports__.default=meta;const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:270},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PicWrapper__WEBPACK_IMPORTED_MODULE_1__.a,{...args})});Template.displayName="Template";const Default=Template.bind({}),BrokenImage=Template.bind({});Default.args={pic:"https://amake.ru/assets/img/abs/rain-1.jpg"},BrokenImage.args={pic:""},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <div style={{\n  width: 270\n}}>\n    <PicWrapper {...args} />\n  </div>",...Default.parameters?.docs?.source}}},BrokenImage.parameters={...BrokenImage.parameters,docs:{...BrokenImage.parameters?.docs,source:{originalSource:"args => <div style={{\n  width: 270\n}}>\n    <PicWrapper {...args} />\n  </div>",...BrokenImage.parameters?.docs?.source}}};const __namedExportsOrder=["Default","BrokenImage"]},"./shared/lib/hooks/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{hJ:function(){return useImageLoading},XD:function(){return useInfiniteScroll},w5:function(){return usePreventPageScrolling}});var react=__webpack_require__("../node_modules/react/index.js");const usePreventPageScrolling=isPrevent=>{(0,react.useEffect)((()=>{isPrevent?document.body.classList.add("modal-opened"):document.body.classList.remove("modal-opened")}),[isPrevent]),(0,react.useEffect)((()=>()=>{document.body.classList.remove("modal-opened")}),[])};try{usePreventPageScrolling.displayName="usePreventPageScrolling",usePreventPageScrolling.__docgenInfo={description:"",displayName:"usePreventPageScrolling",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/lib/hooks/usePreventPageScrolling/usePreventPageScrolling.tsx#usePreventPageScrolling"]={docgenInfo:usePreventPageScrolling.__docgenInfo,name:"usePreventPageScrolling",path:"src/shared/lib/hooks/usePreventPageScrolling/usePreventPageScrolling.tsx#usePreventPageScrolling"})}catch(__react_docgen_typescript_loader_error){}const useImageLoading=src=>{const[isLoading,setIsLoading]=(0,react.useState)(!0),[isError,setIsError]=(0,react.useState)(!1);return(0,react.useLayoutEffect)((()=>{const img=new Image;img.src=src,img.onload=()=>{setIsLoading(!1),setIsError(!1)},img.onerror=()=>{setIsLoading(!1),setIsError(!0)}}),[src]),[isLoading,isError]};try{useImageLoading.displayName="useImageLoading",useImageLoading.__docgenInfo={description:"",displayName:"useImageLoading",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/lib/hooks/useImageLoading/useImageLoading.tsx#useImageLoading"]={docgenInfo:useImageLoading.__docgenInfo,name:"useImageLoading",path:"src/shared/lib/hooks/useImageLoading/useImageLoading.tsx#useImageLoading"})}catch(__react_docgen_typescript_loader_error){}const useInfiniteScroll=_ref=>{let{triggerRef:triggerRef,wrapperRef:wrapperRef,action:action}=_ref;const[isVisible,setIsVisible]=(0,react.useState)(!1),observerRef=(0,react.useRef)(null);return(0,react.useEffect)((()=>{const wrapperElement=wrapperRef?.current||null,triggerElement=triggerRef.current;let observer=observerRef.current;if(triggerElement)return observer=new IntersectionObserver((entries=>{entries.forEach((entry=>{entry.isIntersecting&&(setIsVisible(entry.isIntersecting),action?.())}),{root:wrapperElement})})),observer.observe(triggerElement),()=>observer?.disconnect()}),[action,triggerRef,wrapperRef]),{isVisible:isVisible}};try{useInfiniteScroll.displayName="useInfiniteScroll",useInfiniteScroll.__docgenInfo={description:"",displayName:"useInfiniteScroll",props:{triggerRef:{defaultValue:null,description:"",name:"triggerRef",required:!0,type:{name:"RefObject<HTMLElement>"}},wrapperRef:{defaultValue:null,description:"",name:"wrapperRef",required:!1,type:{name:"RefObject<HTMLElement>"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll.tsx#useInfiniteScroll"]={docgenInfo:useInfiniteScroll.__docgenInfo,name:"useInfiniteScroll",path:"src/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll.tsx#useInfiniteScroll"})}catch(__react_docgen_typescript_loader_error){}},"./shared/ui/PicWrapper/PicWrapper.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return PicWrapper}});__webpack_require__("../node_modules/react/index.js");var clsx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),src_shared_lib_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./shared/lib/hooks/index.ts"),src_shared_assets_img_no_product_svg_url__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./shared/assets/img/no-product.svg?url"),_PicWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./shared/ui/PicWrapper/PicWrapper.module.scss"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../node_modules/react/jsx-runtime.js");const PicWrapper=_ref=>{let{pic:pic,defaultPic:defaultPic,alt:alt="",className:className}=_ref;const[isPicLoading,isPicError]=(0,src_shared_lib_hooks__WEBPACK_IMPORTED_MODULE_1__.hJ)(pic||"");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__.A)(_PicWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__.A.outer,className),children:!isPicLoading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{className:_PicWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__.A.pic,src:isPicError?defaultPic||src_shared_assets_img_no_product_svg_url__WEBPACK_IMPORTED_MODULE_2__:pic,alt:alt})})};PicWrapper.displayName="PicWrapper";try{PicWrapper.displayName="PicWrapper",PicWrapper.__docgenInfo={description:"",displayName:"PicWrapper",props:{pic:{defaultValue:null,description:"",name:"pic",required:!1,type:{name:"string"}},defaultPic:{defaultValue:null,description:"",name:"defaultPic",required:!1,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/PicWrapper/PicWrapper.tsx#PicWrapper"]={docgenInfo:PicWrapper.__docgenInfo,name:"PicWrapper",path:"src/shared/ui/PicWrapper/PicWrapper.tsx#PicWrapper"})}catch(__react_docgen_typescript_loader_error){}},"../node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_exports__.A=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./shared/ui/PicWrapper/PicWrapper.module.scss":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.A={light:"XrhMUrC1",dark:"LvcTRug9",outer:"x3Qew1wu",pic:"WYhPKZt6"}},"./shared/assets/img/no-product.svg?url":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"img/no-product.svg"}}]);