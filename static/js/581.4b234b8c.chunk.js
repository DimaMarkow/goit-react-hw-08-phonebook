(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[581],{3581:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return me}});var a=n(9434),r=n(2791),o=n(1614),i=n(3634),s=n(4515),c=n(4942),l=n(1413),d=n(9439),u=n(890),p=n(4554),m=n(1787),v=n(6151),f=n(4141),b=n(3329),Z={name:"",number:""},g=function(){var e=(0,r.useState)(Z),t=(0,d.Z)(e,2),n=t[0],o=t[1],s=(0,a.I0)(),g=(0,a.v9)(f.mk),y=function(e){var t=e.target,n=t.name,a=t.value;o((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,c.Z)({},n,a))}))};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(u.Z,{variant:"h4",component:"h4",sx:{p:1},children:"Phonebook"}),(0,b.jsxs)(p.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:400}},onSubmit:function(e){e.preventDefault();var t=n,a=t.name.toLowerCase();if(g.some((function(e){return e.name.toLowerCase()===a}))){var r=t.name+" is already in contacts.";alert(r)}else s((0,i.uK)((0,l.Z)({},t))),o(Z)},noValidate:!0,autoComplete:"off",children:[(0,b.jsxs)("div",{children:[" ",(0,b.jsx)(m.Z,{id:"outlined-name-input",label:"name",type:"text",name:"name",required:!0,value:n.name,onChange:y})]}),(0,b.jsx)("div",{children:(0,b.jsx)(m.Z,{id:"outlined-number-input",label:"tel number",type:"number",name:"number",required:!0,inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:n.number,onChange:y})}),(0,b.jsx)(v.Z,{type:"submit",children:" Add contact"})]})]})},y=n(493),h=n(3366),x=n(7462),I=n(8182),C=n(4419),j=n(627),S=n(2065),w=n(6934),F=n(1402),P=n(3701),k=n(9103),M=n(162),N=n(2071),O=n(6199),L=n(5878),G=n(1217);function R(e){return(0,G.Z)("MuiListItem",e)}var T=(0,L.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);function A(e){return(0,G.Z)("MuiListItemButton",e)}var V=(0,L.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function B(e){return(0,G.Z)("MuiListItemSecondaryAction",e)}(0,L.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var _=["className"],q=(0,w.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,x.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),D=r.forwardRef((function(e,t){var n=(0,F.Z)({props:e,name:"MuiListItemSecondaryAction"}),a=n.className,o=(0,h.Z)(n,_),i=r.useContext(O.Z),s=(0,x.Z)({},n,{disableGutters:i.disableGutters}),c=function(e){var t=e.disableGutters,n=e.classes,a={root:["root",t&&"disableGutters"]};return(0,C.Z)(a,B,n)}(s);return(0,b.jsx)(q,(0,x.Z)({className:(0,I.Z)(c.root,a),ownerState:s,ref:t},o))}));D.muiName="ListItemSecondaryAction";var W=D,z=["className"],E=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],H=(0,w.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,x.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!a.disablePadding&&(0,x.Z)({paddingTop:8,paddingBottom:8},a.dense&&{paddingTop:4,paddingBottom:4},!a.disableGutters&&{paddingLeft:16,paddingRight:16},!!a.secondaryAction&&{paddingRight:48}),!!a.secondaryAction&&(0,c.Z)({},"& > .".concat(V.root),{paddingRight:48}),(t={},(0,c.Z)(t,"&.".concat(T.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,c.Z)(t,"&.".concat(T.selected),(0,c.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,S.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(T.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,S.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,c.Z)(t,"&.".concat(T.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===a.alignItems&&{alignItems:"flex-start"},a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},a.button&&(0,c.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(T.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,S.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,S.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),a.hasSecondaryAction&&{paddingRight:48})})),K=(0,w.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),Y=r.forwardRef((function(e,t){var n=(0,F.Z)({props:e,name:"MuiListItem"}),a=n.alignItems,o=void 0===a?"center":a,i=n.autoFocus,s=void 0!==i&&i,c=n.button,l=void 0!==c&&c,d=n.children,u=n.className,p=n.component,m=n.components,v=void 0===m?{}:m,f=n.componentsProps,Z=void 0===f?{}:f,g=n.ContainerComponent,y=void 0===g?"li":g,S=n.ContainerProps,w=(S=void 0===S?{}:S).className,L=n.dense,G=void 0!==L&&L,A=n.disabled,V=void 0!==A&&A,B=n.disableGutters,_=void 0!==B&&B,q=n.disablePadding,D=void 0!==q&&q,Y=n.divider,J=void 0!==Y&&Y,Q=n.focusVisibleClassName,U=n.secondaryAction,X=n.selected,$=void 0!==X&&X,ee=n.slotProps,te=void 0===ee?{}:ee,ne=n.slots,ae=void 0===ne?{}:ne,re=(0,h.Z)(n.ContainerProps,z),oe=(0,h.Z)(n,E),ie=r.useContext(O.Z),se=r.useMemo((function(){return{dense:G||ie.dense||!1,alignItems:o,disableGutters:_}}),[o,ie.dense,G,_]),ce=r.useRef(null);(0,M.Z)((function(){s&&ce.current&&ce.current.focus()}),[s]);var le=r.Children.toArray(d),de=le.length&&(0,k.Z)(le[le.length-1],["ListItemSecondaryAction"]),ue=(0,x.Z)({},n,{alignItems:o,autoFocus:s,button:l,dense:se.dense,disabled:V,disableGutters:_,disablePadding:D,divider:J,hasSecondaryAction:de,selected:$}),pe=function(e){var t=e.alignItems,n=e.button,a=e.classes,r=e.dense,o=e.disabled,i={root:["root",r&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,C.Z)(i,R,a)}(ue),me=(0,N.Z)(ce,t),ve=ae.root||v.Root||H,fe=te.root||Z.root||{},be=(0,x.Z)({className:(0,I.Z)(pe.root,fe.className,u),disabled:V},oe),Ze=p||"li";return l&&(be.component=p||"div",be.focusVisibleClassName=(0,I.Z)(T.focusVisible,Q),Ze=P.Z),de?(Ze=be.component||p?Ze:"div","li"===y&&("li"===Ze?Ze="div":"li"===be.component&&(be.component="div")),(0,b.jsx)(O.Z.Provider,{value:se,children:(0,b.jsxs)(K,(0,x.Z)({as:y,className:(0,I.Z)(pe.container,w),ref:me,ownerState:ue},re,{children:[(0,b.jsx)(ve,(0,x.Z)({},fe,!(0,j.Z)(ve)&&{as:Ze,ownerState:(0,x.Z)({},ue,fe.ownerState)},be,{children:le})),le.pop()]}))})):(0,b.jsx)(O.Z.Provider,{value:se,children:(0,b.jsxs)(ve,(0,x.Z)({},fe,{as:Ze,ref:me},!(0,j.Z)(ve)&&{ownerState:(0,x.Z)({},ue,fe.ownerState)},be,{children:[le,U&&(0,b.jsx)(W,{children:U})]}))})}));function J(e){return(0,G.Z)("MuiListItemText",e)}var Q=(0,L.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),U=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],X=(0,w.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,c.Z)({},"& .".concat(Q.primary),t.primary),(0,c.Z)({},"& .".concat(Q.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,x.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),$=r.forwardRef((function(e,t){var n=(0,F.Z)({props:e,name:"MuiListItemText"}),a=n.children,o=n.className,i=n.disableTypography,s=void 0!==i&&i,c=n.inset,l=void 0!==c&&c,d=n.primary,p=n.primaryTypographyProps,m=n.secondary,v=n.secondaryTypographyProps,f=(0,h.Z)(n,U),Z=r.useContext(O.Z).dense,g=null!=d?d:a,y=m,j=(0,x.Z)({},n,{disableTypography:s,inset:l,primary:!!g,secondary:!!y,dense:Z}),S=function(e){var t=e.classes,n=e.inset,a=e.primary,r=e.secondary,o={root:["root",n&&"inset",e.dense&&"dense",a&&r&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,C.Z)(o,J,t)}(j);return null==g||g.type===u.Z||s||(g=(0,b.jsx)(u.Z,(0,x.Z)({variant:Z?"body2":"body1",className:S.primary,component:null!=p&&p.variant?void 0:"span",display:"block"},p,{children:g}))),null==y||y.type===u.Z||s||(y=(0,b.jsx)(u.Z,(0,x.Z)({variant:"body2",className:S.secondary,color:"text.secondary",display:"block"},v,{children:y}))),(0,b.jsxs)(X,(0,x.Z)({className:(0,I.Z)(S.root,o),ownerState:j,ref:t},f,{children:[g,y]}))})),ee=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],te=(0,w.ZP)(P.Z,{shouldForwardProp:function(e){return(0,w.FO)(e)||"classes"===e},name:"MuiListItemButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,x.Z)((t={display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,c.Z)(t,"&.".concat(V.selected),(0,c.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,S.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(V.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,S.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,c.Z)(t,"&.".concat(V.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,S.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,S.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,c.Z)(t,"&.".concat(V.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,c.Z)(t,"&.".concat(V.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},"flex-start"===a.alignItems&&{alignItems:"flex-start"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.dense&&{paddingTop:4,paddingBottom:4})})),ne=r.forwardRef((function(e,t){var n=(0,F.Z)({props:e,name:"MuiListItemButton"}),a=n.alignItems,o=void 0===a?"center":a,i=n.autoFocus,s=void 0!==i&&i,c=n.component,l=void 0===c?"div":c,d=n.children,u=n.dense,p=void 0!==u&&u,m=n.disableGutters,v=void 0!==m&&m,f=n.divider,Z=void 0!==f&&f,g=n.focusVisibleClassName,y=n.selected,j=void 0!==y&&y,S=n.className,w=(0,h.Z)(n,ee),P=r.useContext(O.Z),k=r.useMemo((function(){return{dense:p||P.dense||!1,alignItems:o,disableGutters:v}}),[o,P.dense,p,v]),L=r.useRef(null);(0,M.Z)((function(){s&&L.current&&L.current.focus()}),[s]);var G=(0,x.Z)({},n,{alignItems:o,dense:k.dense,disableGutters:v,divider:Z,selected:j}),R=function(e){var t=e.alignItems,n=e.classes,a=e.dense,r=e.disabled,o={root:["root",a&&"dense",!e.disableGutters&&"gutters",e.divider&&"divider",r&&"disabled","flex-start"===t&&"alignItemsFlexStart",e.selected&&"selected"]},i=(0,C.Z)(o,A,n);return(0,x.Z)({},n,i)}(G),T=(0,N.Z)(L,t);return(0,b.jsx)(O.Z.Provider,{value:k,children:(0,b.jsx)(te,(0,x.Z)({ref:T,href:w.href||w.to,component:(w.href||w.to)&&"div"===l?"a":l,focusVisibleClassName:(0,I.Z)(R.focusVisible,g),ownerState:G,className:(0,I.Z)(R.root,S)},w,{classes:R,children:d}))})}));function ae(e){return(0,G.Z)("MuiListItemIcon",e)}(0,L.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var re=["className"],oe=(0,w.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.theme,n=e.ownerState;return(0,x.Z)({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===n.alignItems&&{marginTop:8})})),ie=r.forwardRef((function(e,t){var n=(0,F.Z)({props:e,name:"MuiListItemIcon"}),a=n.className,o=(0,h.Z)(n,re),i=r.useContext(O.Z),s=(0,x.Z)({},n,{alignItems:i.alignItems}),c=function(e){var t=e.alignItems,n=e.classes,a={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,C.Z)(a,ae,n)}(s);return(0,b.jsx)(oe,(0,x.Z)({className:(0,I.Z)(c.root,a),ownerState:s,ref:t},o))})),se=n(7247),ce=function(){var e=(0,a.v9)(f.F4),t=(0,a.I0)();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(u.Z,{variant:"h4",component:"h4",sx:{p:1,pt:3},children:"Contacts"}),(0,b.jsx)(p.Z,{sx:{width:"100%",maxWidth:450,bgcolor:"background.paper",justifyContent:"space-between",pl:2},children:(0,b.jsx)(y.Z,{children:e.map((function(e){var n=e.id,a=e.name,r=e.number;return(0,b.jsxs)(Y,{disablePadding:!0,children:[(0,b.jsxs)($,{sx:{flexGrow:1},children:[a," ",r]}),(0,b.jsxs)(ne,{type:"button",color:"",onClick:function(){return e=n,void t((0,i.GK)(e));var e},sx:{p:1,justifyContent:"right",maxWidth:110},children:[(0,b.jsx)(u.Z,{variant:"subtitle2",children:"Delete"}),(0,b.jsx)(ie,{children:(0,b.jsx)(se.Z,{})})]})]},n)}))})})]})},le=n(5653),de=function(e){return e.filter},ue=function(){var e=(0,a.I0)(),t=(0,a.v9)(de);return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(p.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:400}},noValidate:!0,autoComplete:"off",children:(0,b.jsxs)("div",{children:[" ",(0,b.jsx)(m.Z,{id:"outlined-filter-input",label:"Find a contact by name",type:"text",name:"filter",required:!0,value:t,onChange:function(t){e((0,le.T)(t.currentTarget.value))}})]})})})},pe=function(){var e=(0,a.I0)(),t=(0,a.v9)(f.Vc),n=(0,a.v9)(f.by);(0,r.useEffect)((function(){e((0,i.yF)())}),[e]);var c=(0,a.v9)(f.F4),l=Boolean(c.length);return(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(g,{}),(0,b.jsx)(ue,{}),t&&!n&&(0,b.jsx)(s.Z,{}),l&&(0,b.jsx)(ce,{}),!l&&!t&&(0,b.jsx)("p",{children:"No contacts in the list"})]})};function me(){return(0,b.jsx)(o.Z,{children:(0,b.jsx)(pe,{})})}},7247:function(e,t,n){"use strict";var a=n(4836);t.Z=void 0;var r=a(n(5649)),o=n(3329),i=(0,r.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i},5649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=n(4454)},4454:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return i.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return l.Z},ownerDocument:function(){return d.Z},ownerWindow:function(){return u.Z},requirePropFactory:function(){return p},setRef:function(){return m},unstable_ClassNameGenerator:function(){return x},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return f},unsupportedProp:function(){return b},useControlled:function(){return Z.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return y.Z},useIsFocusVisible:function(){return h.Z}});var a=n(5902),r=n(4036),o=n(8949).Z,i=n(9201),s=n(3199);var c=function(e,t){return function(){return null}},l=n(9103),d=n(8301),u=n(7602);n(7462);var p=function(e,t){return function(){return null}},m=n(2971).Z,v=n(162),f=n(6248).Z;var b=function(e,t,n,a,r){return null},Z=n(8744),g=n(9683),y=n(2071),h=n(3031),x={configure:function(e){a.Z.configure(e)}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=581.4b234b8c.chunk.js.map