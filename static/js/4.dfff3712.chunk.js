(this.webpackJsonpportfolio_v3=this.webpackJsonpportfolio_v3||[]).push([[4],{250:function(e,t,n){e.exports={aboutScreenContainer:"style_aboutScreenContainer__3UC0c",subTitle:"style_subTitle__3Vftq",description:"style_description__365Am",skillScreenContainer:"style_skillScreenContainer__FXslf",projectsScreenContainer:"style_projectsScreenContainer__22dLB",contactScreen:"style_contactScreen__2RV21",loginScreen:"style_loginScreen__3opmN"}},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var c=n(4),r=n.n(c),a=n(6),i=n(11),l=n(1),s=n(64),o=n.n(s),u=n(28),j=n(78),b=n(9),d=n(12),O=n.n(d),p=n(40),h=n(2);function x(){var e=Object(b.c)((function(e){return e.colors})).text;return Object(h.jsx)("div",{className:O.a.pageErrorComponent,children:Object(h.jsxs)("div",{style:{color:e},children:[Object(h.jsx)(p.c,{size:80,color:e}),Object(h.jsx)("p",{children:"Something Went Wrong"}),Object(h.jsx)("p",{children:"Please check your Network Connection and Try again!"})]})})}var m=n(63);function f(e){var t,n=e.title,c=e.editHandler,s=e.children,d=e.isCreateButton,O=e.createHandler,p=e.action,f=e.isLoad,v=Object(b.b)(),_=Object(l.useState)(!1),y=Object(i.a)(_,2),g=y[0],S=y[1],C=Object(l.useState)(!1),k=Object(i.a)(C,2),N=k[0],w=k[1],E=Object(b.c)((function(e){return e.admin})).isAdmin,D=Object(b.c)((function(e){return e.colors})),T=D.screenBackground,q=D.text,H=D.primary;return Object(l.useEffect)((function(){p?f||function(){var e=Object(a.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!1),S(!0),e.next=5,v(p());case 5:S(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),S(!1),w(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()():S(!1)}),[p,v,f]),t=g?Object(h.jsx)(m.a,{}):!g&&N?Object(h.jsx)(x,{}):Object(h.jsxs)("div",{className:o.a.component,children:[E&&Object(h.jsxs)("div",{children:[Object(h.jsx)(u.c,{className:o.a.icon,onClick:c,size:30}),d&&Object(h.jsx)(j.a,{className:o.a.icon2,onClick:O,size:30})]}),Object(h.jsx)("div",{children:function(e){if(e){var t=e.split(" ");if(t.length<=1)return Object(h.jsx)("span",{className:o.a.title,style:{color:H},children:t[0]});for(var n=[],c=0;c<t.length-1;c++)n.push(t[c]),n.push(" ");return n.push(Object(h.jsx)("span",{style:{color:H},children:t[t.length-1]},"1")),Object(h.jsx)("span",{className:o.a.title,children:n})}}(n)}),s]}),Object(h.jsx)("div",{className:o.a.screenTempleteContainer,style:{color:q,backgroundColor:T},children:t})}},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(3),r=n(11),a=n(79),i=(n(1),n(46)),l=n(45),s=n.n(l),o=n(9),u=n(2),j=["label"];function b(e){var t=e.label,n=Object(a.a)(e,j),l=Object(i.c)(n),b=Object(r.a)(l,2),d=b[0],O=b[1],p=Object(o.c)((function(e){return e.colors})),h=O.touched&&O.error;return Object(u.jsxs)("div",{className:s.a.myTextareaInputContainer,style:{color:p.text},children:[Object(u.jsxs)("label",{children:[t&&Object(u.jsx)("span",{children:t}),Object(u.jsx)("textarea",Object(c.a)(Object(c.a)({style:{borderColor:h?p.warning:"gray"}},d),n))]}),h&&Object(u.jsx)("span",{style:{color:p.warning},className:s.a.error,children:O.error})]})}},255:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var c=n(4),r=n.n(c),a=n(6),i=n(11),l=n(1),s=n.n(l),o=n(251),u=n(9),j=n(250),b=n.n(j),d=n(33),O=n(21),p=n(252),h=n(22),x=n(25),m=n(15),f=n(2);function v(){var e=s.a.useState(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(u.b)(),j=function(){c((function(e){return!e}))},v=Object(u.c)((function(e){return e.load})).isContact,_=Object(u.c)((function(e){return e.admin.contact})),y=_.title,g=_.detail,S=_.subDetail,C=_.email,k={title:y||"",detail:g||"",subDetail:S||"",email:C||""},N=h.b({title:h.c().min(4).max(100).required(),detail:h.c().min(4).max(500).required(),subDetail:h.c().min(4).max(500).required(),email:h.c().email().required()}),w=function(){var e=Object(a.a)(r.a.mark((function e(t,n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.setSubmitting,e.prev=1,c(!0),e.next=5,l(Object(x.m)(t));case 5:l(Object(m.a)("Successfully Updated!","warning")),c(!1),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),l(Object(m.a)("Something Went Wrong!","error")),c(!1);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(f.jsxs)(o.a,{title:y,action:x.b,editHandler:j,isLoad:v,children:[Object(f.jsxs)("div",{className:b.a.contactScreen,children:[Object(f.jsx)("p",{children:g}),Object(f.jsx)("a",{href:"mailto:".concat(C),children:C}),Object(f.jsx)("p",{children:Object(f.jsx)("i",{children:S})})]}),n&&Object(f.jsx)(d.default,{title:"Edit Page",closeHandler:j,initalValues:k,validationSchema:N,submitHandler:w,children:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(O.a,{name:"title",label:"Title",placeholder:"Enter Title"}),Object(f.jsx)(O.a,{name:"email",label:"Email",placeholder:"Enter Email"}),Object(f.jsx)(p.a,{name:"detail",label:"Detail",placeholder:"Enter Detail"}),Object(f.jsx)(p.a,{name:"subDetail",label:"Sub-Details",placeholder:"Enter Sub-Details"})]})}})]})}}}]);
//# sourceMappingURL=4.dfff3712.chunk.js.map