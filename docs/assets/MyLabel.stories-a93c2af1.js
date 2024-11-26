import{j as S}from"./jsx-runtime-50395f49.js";import"./index-9fa1aa67.js";const g=({label:t,size:x="normal",allCaps:f=!1,color:v,fontColor:h})=>S.jsxs("span",{className:`${x} ${v} label`,style:{backgroundColor:h},children:[" ",f?t.toUpperCase():t.toLowerCase()," "]});g.__docgenInfo={description:`allCaps : boolean,\r
 color : 'text-primary' | 'text-secondary' |'text-tertiary'\r
 fontColor : string, texto de span`,methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"Text size",defaultValue:{value:'"normal"',computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize letters",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:"Label color"},fontColor:{required:!1,tsType:{name:"string"},description:"Font color"}}};const q={title:"UI/labels/MyLabel",component:g,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select"}}},e={args:{label:"Basic label"}},a={args:{label:"AllCaps",allCaps:!0}},r={args:{label:"Secundary",color:"text-secondary"}},s={args:{label:"CustomsColor"}};var l,o,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Basic label"
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "AllCaps",
    allCaps: true
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Secundary",
    color: "text-secondary"
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var y,C,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "CustomsColor"
  }
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const z=["Basic","AllCaps","Secundary","CustomsColor"];export{a as AllCaps,e as Basic,s as CustomsColor,r as Secundary,z as __namedExportsOrder,q as default};
