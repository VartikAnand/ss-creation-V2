import{h as _,ah as j,ai as F,aj as L,r as c,ak as M,a as e,al as R,a9 as P,T as B,am as E,an as W,ao as q,ap as z,j as g,aq as K}from"./sanity-de5200ac.js";const N=(t,n)=>({title:g("em",{children:["No schema found for type ",e("code",{children:n})]}),subtitle:g("em",{children:["Document: ",e("code",{children:t})]}),media:()=>e(K,{})});function O(t){const{layout:n,value:a}=t;return e(P,{...N(a._id,a._type),layout:n})}function k(t,n,a){return t===!1?!1:t||n&&n.icon||a||!1}function $(t){const{icon:n,id:a,layout:i="default",pressed:y,schemaType:s,selected:u,title:l,value:o,margin:I,marginBottom:v,marginTop:C}=t,S=_(),d=j(),{ChildLink:m}=F(),f=L(a),h=!!(s&&s.name&&S.get(s.name)),[b,r]=c.useState(!1),w=c.useMemo(()=>o&&M(o)?!s||!h?e(O,{value:o}):e(R,{documentPreviewStore:d,icon:k(n,s,q),layout:i,schemaType:s,value:o,presence:f}):e(P,{status:e(B,{muted:!0,children:e(E,{})}),icon:k(n,s,z),layout:i,title:l}),[d,h,n,i,s,l,o,f]),x=c.useMemo(()=>function(T){return e(m,{...T,childId:a})},[m,a]),D=c.useCallback(p=>{if(p.metaKey){r(!1);return}r(!0)},[]);return c.useEffect(()=>r(!1),[u]),e(W,{__unstable_focusRing:!0,as:x,"data-as":"a","data-ui":"PaneItem",margin:I,marginBottom:v,marginTop:C,onClick:D,padding:2,pressed:y,radius:2,selected:u||b,sizing:"border",tabIndex:-1,tone:"inherit",children:w})}export{$ as P};
