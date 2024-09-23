(()=>{"use strict";var e,t={998:()=>{const e=window.React,t=window.wp.blocks,n=window.wp.i18n,o=window.wp.hooks,l=window.wp.blockEditor,a=window.wp.components,g=window.wp.data,i=window.wp.element,r=window.wp.compose;let s=(e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;)t+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&n[e]];return t};const c=(0,r.compose)((0,g.withSelect)((e=>{const t=e("core/block-editor").getSettings(),o=t.__experimentalFeatures.typography||{};return{fontSizes:t.fontSizes||[],fontFamilies:[{label:(0,n.__)("Default","toggle-anything"),value:""},...(o.fontFamilies?.theme||[]).map((e=>({label:e.name,value:e.fontFamily})))],colors:t.colors||[],fontAppearanceOptions:[{label:(0,n.__)("Normal","toggle-anything"),value:"normal"},{label:(0,n.__)("Italic","toggle-anything"),value:"italic"}]}})))((({attributes:t,setAttributes:o,fontSizes:g,fontFamilies:r,colors:c,fontAppearanceOptions:h})=>{const{onClass:u,offClass:d,onColor:p,offColor:f,toggleColor:m,toggleWidth:b,toggleHeight:y,buttonWidth:_,borderRadius:C,gap:S,onText:x,offText:w,fontSize:v,fontWeight:E,fontAppearance:$,fontFamily:k,fontColor:T,paddingLeft:O,paddingRight:B,blockId:A,customCSSSwitchWrapper:N,customCSSSwitch:R,customCSSToggleRound:z,customCSSButton:W,customCSSButtonActivated:F,customCSSTextWrapper:I,customCSSOff:P,customCSSOn:J,defaultState:L}=t;return(0,i.useEffect)((()=>{A||o({blockId:s(8)})}),[A,o]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.InspectorControls,null,(0,e.createElement)(a.PanelBody,{title:(0,n.__)("Toggle Settings","toggle-anything"),initialOpen:!1},(0,e.createElement)(a.TextControl,{label:(0,n.__)("Off Class","toggle-anything"),value:d,onChange:e=>o({offClass:e})}),(0,e.createElement)(a.TextControl,{label:(0,n.__)("On Class","toggle-anything"),value:u,onChange:e=>o({onClass:e})}),(0,e.createElement)(a.SelectControl,{label:(0,n.__)("Default State","toggle-anything"),value:L,options:[{label:(0,n.__)("Off","toggle-anything"),value:"off"},{label:(0,n.__)("On","toggle-anything"),value:"on"}],onChange:e=>o({defaultState:e}),help:(0,n.__)('Non-JS browsers will also show the default state. See the "Additional Information" section below for more information on non-JS browser handling.',"toggle-anything")})),(0,e.createElement)(a.PanelBody,{title:(0,n.__)("Toggle Design Settings","toggle-anything"),initialOpen:!1},(0,e.createElement)(a.RangeControl,{label:(0,n.__)("Toggle Width","toggle-anything"),value:b,onChange:e=>o({toggleWidth:e}),min:20,max:500}),(0,e.createElement)(a.RangeControl,{label:(0,n.__)("Toggle Height","toggle-anything"),value:y,onChange:e=>o({toggleHeight:e}),min:10,max:200}),(0,e.createElement)(a.RangeControl,{label:(0,n.__)("Button Width","toggle-anything"),value:_,onChange:e=>o({buttonWidth:e}),min:20,max:500}),(0,e.createElement)(a.RangeControl,{label:(0,n.__)("Border Radius","toggle-anything"),value:C,onChange:e=>o({borderRadius:e}),min:0,max:100}),(0,e.createElement)(a.RangeControl,{label:(0,n.__)("Gap","toggle-anything"),value:S,onChange:e=>o({gap:e}),min:-50,max:50})),(0,e.createElement)(a.PanelBody,{title:(0,n.__)("Toggle Text Settings","toggle-anything"),initialOpen:!1},(0,e.createElement)(a.TextControl,{label:(0,n.__)("Off Text","toggle-anything"),value:w,onChange:e=>o({offText:e})}),(0,e.createElement)(a.RangeControl,{label:(0,n.__)("Tweak Left Spacing","toggle-anything"),value:O,onChange:e=>o({paddingLeft:e}),min:0,max:50}),(0,e.createElement)(a.TextControl,{label:(0,n.__)("On Text","toggle-anything"),value:x,onChange:e=>o({onText:e})}),(0,e.createElement)(a.RangeControl,{label:(0,n.__)("Tweak Right Spacing","toggle-anything"),value:B,onChange:e=>o({paddingRight:e}),min:0,max:50}),(0,e.createElement)(a.FontSizePicker,{value:v,fontSizes:g,onChange:e=>o({fontSize:e})}),(0,e.createElement)(a.SelectControl,{label:(0,n.__)("Font Appearance","toggle-anything"),value:$,options:h,onChange:e=>o({fontAppearance:e})}),(0,e.createElement)(a.SelectControl,{label:(0,n.__)("Font Weight","toggle-anything"),value:E,options:[{label:(0,n.__)("100","toggle-anything"),value:100},{label:(0,n.__)("200","toggle-anything"),value:200},{label:(0,n.__)("300","toggle-anything"),value:300},{label:(0,n.__)("400","toggle-anything"),value:400},{label:(0,n.__)("500","toggle-anything"),value:500},{label:(0,n.__)("600","toggle-anything"),value:600},{label:(0,n.__)("700","toggle-anything"),value:700},{label:(0,n.__)("800","toggle-anything"),value:800},{label:(0,n.__)("900","toggle-anything"),value:900}],onChange:e=>o({fontWeight:e})}),(0,e.createElement)(a.SelectControl,{label:(0,n.__)("Font Family","toggle-anything"),value:k,options:r,onChange:e=>o({fontFamily:e})})),(0,e.createElement)(l.PanelColorSettings,{title:(0,n.__)("Color Settings","toggle-anything"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:f,onChange:e=>o({offColor:e}),label:(0,n.__)("Off Background Color","toggle-anything"),colors:c},{value:p,onChange:e=>o({onColor:e}),label:(0,n.__)("On Background Color","toggle-anything"),colors:c},{value:m,onChange:e=>o({toggleColor:e}),label:(0,n.__)("Toggle Button Color","toggle-anything"),colors:c},{value:T,onChange:e=>o({fontColor:e}),label:(0,n.__)("Text Color","toggle-anything"),colors:c}]}),(0,e.createElement)(a.PanelBody,{title:(0,n.__)("Custom CSS","toggle-anything"),initialOpen:!1},(0,e.createElement)(a.TextareaControl,{label:(0,n.__)("Switch Wrapper","toggle-anything"),value:N,onChange:e=>o({customCSSSwitchWrapper:e})}),(0,e.createElement)(a.TextareaControl,{label:(0,n.__)("Switch Body","toggle-anything"),value:R,onChange:e=>o({customCSSSwitch:e})}),(0,e.createElement)(a.TextareaControl,{label:(0,n.__)("Toggle","toggle-anything"),value:z,onChange:e=>o({customCSSToggleRound:e})}),(0,e.createElement)(a.TextareaControl,{label:(0,n.__)("Button","toggle-anything"),value:W,onChange:e=>o({customCSSButton:e})}),(0,e.createElement)(a.TextareaControl,{label:(0,n.__)("Button Activated","toggle-anything"),value:F,onChange:e=>o({customCSSButtonActivated:e})}),(0,e.createElement)(a.TextareaControl,{label:(0,n.__)("Text Wrapper","toggle-anything"),value:I,onChange:e=>o({customCSSTextWrapper:e})}),(0,e.createElement)(a.TextareaControl,{label:(0,n.__)("Off Text","toggle-anything"),value:P,onChange:e=>o({customCSSOff:e})}),(0,e.createElement)(a.TextareaControl,{label:(0,n.__)("On Text","toggle-anything"),value:J,onChange:e=>o({customCSSOn:e})})),(0,e.createElement)(a.PanelBody,{title:(0,n.__)("Additional Information","toggle-anything"),initialOpen:!1},(0,e.createElement)("p",null,(0,n.__)("The toggle button will be hidden on non-JS browsers as it won't be functional anyways.","toggle-anything")),(0,e.createElement)("p",null,(0,n.__)("This block includes helper css classes to hide or show other selected blocks on non-JS browsers.","toggle-anything")),(0,e.createElement)("p",null,(0,n.__)("Add the classes mentioned below to the Advanced > ADDITIONAL CSS CLASS(ES) field of the blocks you want to show or hide on non-JS browsers.","toggle-anything")),(0,e.createElement)("p",null,(0,n.__)('Use the classes "toggle-anything-noscript-hide__block", "__flex", etc., to hide selected blocks in non-JS browsers.',"toggle-anything")),(0,e.createElement)("p",null,(0,n.__)('Use the classes "toggle-anything-noscript-show__block", "__flex", etc., to show selected blocks in non-JS browsers',"toggle-anything")))),(0,e.createElement)("div",{...(0,l.useBlockProps)()},(0,e.createElement)("div",{className:`toggle-anything ${A}`,"data-on-class":u,"data-off-class":d,"data-default-state":L,style:{"--toggle-before-height":y-2*S+"px","--toggle-before-width":`${_}px`,"--toggle-before-border-radius":`${C}px`,"--toggle-before-left":`${S}px`,"--toggle-before-bottom":`${S}px`,"--toggle-before-bg-color":m,"--toggle-before-translate-x":b-_-2*S+"px"}},(0,e.createElement)("label",{className:"switch",style:{width:`${b}px`,height:`${y}px`}},(0,e.createElement)("input",{type:"checkbox",onChange:e=>{const t=e.target.nextElementSibling;e.target.checked?t.style.backgroundColor=p:t.style.backgroundColor=f},defaultChecked:"on"===L}),(0,e.createElement)("span",{className:"toggle round",style:{backgroundColor:f,borderRadius:`${C}px`}},(0,e.createElement)("span",{className:"toggle-text",style:{display:"flex",justifyContent:"space-between",boxSizing:"border-box",alignItems:"center",width:"100%",height:"100%",padding:`0 ${2*S+B}px 0 ${2*S+O}px`,fontSize:v,fontWeight:E,...k?{fontFamily:k}:{},fontStyle:"italic"===$?"italic":"normal",color:T,pointerEvents:"none"}},w&&(0,e.createElement)("span",{className:"off-text",style:{zIndex:2}},w),x&&(0,e.createElement)("span",{className:"on-text",style:{zIndex:2}},x))))),(0,e.createElement)("style",null,`\n\t\t\t\t\t.toggle-anything.${A} {\n\t\t\t\t\t\t${N}\n\t\t\t\t\t}\n\t\t\t\t\t.toggle-anything.${A} .switch{\n\t\t\t\t\t\t${R}\n\t\t\t\t\t}\n\t\t\t\t\t.toggle-anything.${A} .toggle.round {\n                        ${z}\n                    }\n                    .toggle-anything.${A} .toggle.round::before {\n                        ${W}\n                    }\n\t\t\t\t\t.toggle-anything.${A} .switch input:checked + .toggle::before {\n                        ${F}\n                    }\n\t\t\t\t\t.toggle-anything.${A} .toggle-text {\n                        ${I}\n                    }\n                    .toggle-anything.${A} .off-text {\n                        ${P}\n                    }\n                    .toggle-anything.${A} .on-text {\n                        ${J}\n                    }\n                `)))})),h=JSON.parse('{"UU":"nickpagz/toggle-anything"}'),u=(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,e.createElement)("path",{d:"M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128l-192 0c-70.7 0-128-57.3-128-128s57.3-128 128-128l192 0zM576 256c0-106-86-192-192-192L192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"}));(0,t.registerBlockType)(h.UU,{icon:u,edit:c,save:function({attributes:t}){const{onClass:n,offClass:o,onColor:a,offColor:g,toggleColor:i,toggleWidth:r,toggleHeight:s,buttonWidth:c,borderRadius:h,gap:u,onText:d,offText:p,fontColor:f,fontSize:m,fontWeight:b,fontFamily:y,fontAppearance:_,paddingLeft:C,paddingRight:S,blockId:x,customCSSSwitchWrapper:w,customCSSSwitch:v,customCSSToggleRound:E,customCSSButton:$,customCSSButtonActivated:k,customCSSTextWrapper:T,customCSSOff:O,customCSSOn:B,defaultState:A}=t,N=`\n\t\t${w?`.toggle-anything.${x} {${w}}`:""}\n\t\t${v?`.toggle-anything.${x} .switch {${v}}`:""}\n\t\t${E?`.toggle-anything.${x} .toggle.round {${E}}`:""}\n\t\t${$?`.toggle-anything.${x} .toggle.round::before {${$}}`:""}\n\t\t${k?`.toggle-anything.${x} .switch input:checked + .toggle::before {${k}}`:""}\n\t\t${T?`.toggle-anything.${x} .toggle-text {${T}}`:""}\n\t\t${O?`.toggle-anything.${x} .off-text {${O}}`:""}\n\t\t${B?`.toggle-anything.${x} .on-text {${B}}`:""}\n\t`.trim();return(0,e.createElement)("div",{...l.useBlockProps.save()},(0,e.createElement)("div",{className:`toggle-anything ${x}`,"data-on-class":n,"data-off-class":o,"data-on-color":a,"data-off-color":g,"data-default-state":A,style:{"--toggle-before-height":s-2*u+"px","--toggle-before-width":`${c}px`,"--toggle-before-border-radius":`${h}px`,"--toggle-before-left":`${u}px`,"--toggle-before-bottom":`${u}px`,"--toggle-before-bg-color":i,"--toggle-before-translate-x":r-c-2*u+"px"}},(0,e.createElement)("label",{className:"switch",style:{width:`${r}px`,height:`${s}px`}},(0,e.createElement)("input",{type:"checkbox"}),(0,e.createElement)("span",{className:"toggle round",style:{backgroundColor:g,borderRadius:`${h}px`}},(0,e.createElement)("span",{className:"toggle-text",style:{display:"flex",justifyContent:"space-between",boxSizing:"border-box",alignItems:"center",width:"100%",height:"100%",padding:`0 ${2*u+S}px 0 ${2*u+C}px`,fontSize:m,fontWeight:b,...y?{fontFamily:y}:{},fontStyle:"italic"===_?"italic":"normal",color:f,pointerEvents:"none"}},p&&(0,e.createElement)("span",{className:"off-text",style:{zIndex:2}},p),d&&(0,e.createElement)("span",{className:"on-text",style:{zIndex:2}},d))))),(0,e.createElement)("style",null,N),(0,e.createElement)("noscript",null,(0,e.createElement)("style",null,`.toggle-anything.${x} {display: none;}`,`.${"on"===A?o:n} {display: none;}`)))}}),(0,o.addFilter)("blocks.registerBlockType","toggle-anything/add-toggle-anything-attribute",(function(e,t){return e.attributes={...e.attributes,toggleAnything:{type:"string",default:""}},e})),(0,o.addFilter)("editor.BlockEdit","toggle-anything/add-inspector-controls",(function(t){return o=>{const{name:i,attributes:r,setAttributes:s}=o;if("nickpagz/toggle-anything"===i)return(0,e.createElement)(t,{...o});const c=[{label:"None",value:""},...function(){const e=(0,g.useSelect)((e=>e("core/block-editor").getBlocks())),t=new Set;return e.forEach((function e(n){if("nickpagz/toggle-anything"===n.name){const{onClass:e,offClass:o}=n.attributes;t.add(e),t.add(o)}n.innerBlocks.length&&n.innerBlocks.forEach(e)})),Array.from(t)}().map((e=>({label:e,value:e}))),{label:"No-script hide, block",value:"toggle-anything-noscript-hide__block"},{label:"No-script hide, flex",value:"toggle-anything-noscript-hide__flex"},{label:"No-script hide, inline",value:"toggle-anything-noscript-hide__inline"},{label:"No-script hide, inline-block",value:"toggle-anything-noscript-hide__inline-block"},{label:"No-script hide, grid",value:"toggle-anything-noscript-hide__grid"},{label:"No-script show, block",value:"toggle-anything-noscript-show__block"},{label:"No-script show, flex",value:"toggle-anything-noscript-show__flex"},{label:"No-script show, inline",value:"toggle-anything-noscript-show__inline"},{label:"No-script show, inline-block",value:"toggle-anything-noscript-show__inline-block"},{label:"No-script show, grid",value:"toggle-anything-noscript-show__grid"}],{toggleAnything:h}=r;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,{...o}),(0,e.createElement)(l.InspectorControls,null,(0,e.createElement)(a.PanelBody,{title:(0,n.__)("Toggle Anything","toggle-anything"),initialOpen:!1},(0,e.createElement)(a.PanelRow,null,(0,e.createElement)(a.SelectControl,{label:"Choose a Toggle Class",value:r.toggleAnything||"",options:c,onChange:e=>{s({toggleAnything:e})}})))))}}))}},n={};function o(e){var l=n[e];if(void 0!==l)return l.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,n,l,a)=>{if(!n){var g=1/0;for(c=0;c<e.length;c++){for(var[n,l,a]=e[c],i=!0,r=0;r<n.length;r++)(!1&a||g>=a)&&Object.keys(o.O).every((e=>o.O[e](n[r])))?n.splice(r--,1):(i=!1,a<g&&(g=a));if(i){e.splice(c--,1);var s=l();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,l,a]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var l,a,[g,i,r]=n,s=0;if(g.some((t=>0!==e[t]))){for(l in i)o.o(i,l)&&(o.m[l]=i[l]);if(r)var c=r(o)}for(t&&t(n);s<g.length;s++)a=g[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},n=globalThis.webpackChunktoggle_anything=globalThis.webpackChunktoggle_anything||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var l=o.O(void 0,[350],(()=>o(998)));l=o.O(l)})();