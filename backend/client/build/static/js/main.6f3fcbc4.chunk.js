(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{37:function(e){e.exports=JSON.parse('{"a":"Hola bienvenidos a mi sitio"}')},51:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/logo.6c8ca4e5.svg"},64:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/logo_mobile.b34829f7.svg"},65:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/email.5a656c18.svg"},66:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/instagram.76e5fab8.svg"},67:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/404.0aaa5389.svg"},69:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(14),i=a.n(r),s=(a(51),a(52),a(11)),l=a(9),o=a(19),j=a(15),u=a(16),d=a(36),b=a(77),h=a(78),p=(a(54),a(79)),O=a(18),f=a(6),m=a(27),x=a.p+"static/media/juanchi.217a9241.svg",g=a(37),v=a(3),y=function(){return Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsx)("div",{className:"App-centered",children:Object(v.jsx)("p",{children:g.a})}),Object(v.jsx)("div",{className:"App-centered",children:Object(v.jsx)(O.b,{to:"/about",children:Object(v.jsxs)(m.a,{children:[Object(v.jsx)(m.a.Image,{src:x,fluid:!0,alt:"Juanchi",style:{maxWidth:"12rem"}}),Object(v.jsx)(m.a.Caption,{children:"\xbfQui\xe9n soy?"})]})})})]})},N=a(43),k=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).state={apiResponse:""},c}return Object(o.a)(a,[{key:"callAPI",value:function(){var e=this,t=this.props.match.params.id;fetch("/api/"+t).then((function(e){return e.text()})).then((function(t){return e.setState({apiResponse:t})}))}},{key:"componentDidMount",value:function(){this.callAPI()}},{key:"render",value:function(){return Object(v.jsx)(n.a.Fragment,{children:Object(v.jsx)(N.a,{children:this.state.apiResponse})})}}]),a}(c.Component),C=Object(c.lazy)((function(){return a.e(3).then(a.bind(null,81))})),A=Object(c.lazy)((function(){return a.e(4).then(a.bind(null,82))})),E=d.isBrowser?a(63).default:a(64).default,F=a(65).default,I=a(66).default,z=a(67).default,J=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).state={hasError:!1},c}return Object(o.a)(a,[{key:"render",value:function(){return this.state.hasError?Object(v.jsx)("p",{children:"\xa1Carga de p\xe1gina fallida! Por favor, rec\xe1rgala."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(n.a.Component),P=function(e){return Object(v.jsx)(b.a,Object(s.a)(Object(s.a)({id:"email-tooltip"},e),{},{children:"Enviar e-mail"}))},R=function(e){return Object(v.jsx)(b.a,Object(s.a)(Object(s.a)({id:"email-tooltip"},e),{},{children:"Ver Instagram"}))},S=function(){return Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{src:z,className:"_404",alt:"404 Error"}),Object(v.jsx)("h3",{children:"404 - Not found"})]}),Object(v.jsx)("div",{className:"back-button",children:Object(v.jsx)(O.b,{to:"/",children:Object(v.jsx)(p.a,{variant:"flat",size:"lg",children:"Volver"})})})]})},D=function(){return Object(v.jsxs)(f.c,{children:[" ",Object(v.jsx)(f.a,{exact:!0,path:"/",component:y}),Object(v.jsx)(f.a,{exact:!0,path:"/ciberseguridad",component:A}),Object(v.jsx)(f.a,{exact:!0,path:"/about",component:C}),Object(v.jsx)(f.a,{exact:!0,path:"/ideas/:id",component:k}),Object(v.jsx)(f.a,{component:S})]})},w=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("header",{className:"App-header",children:Object(v.jsx)("img",{src:E,className:"App-logo",alt:"Juanchi"})}),Object(v.jsx)(J,{children:Object(v.jsx)(c.Suspense,{fallback:Object(v.jsx)("p",{children:"Cargando..."}),children:Object(v.jsx)(D,{})})}),Object(v.jsx)(f.a,{exact:!0,path:"/",children:Object(v.jsxs)("footer",{class:"text-center",children:[Object(v.jsxs)("p",{children:[Object(v.jsx)(h.a,{placement:"left",overlay:P,children:Object(v.jsx)("a",{href:"mailto:juancho.proaso@gmail.com",children:Object(v.jsx)("img",{src:F,className:"email",alt:"E-mail"})})}),Object(v.jsx)(h.a,{placement:"right",overlay:R,children:Object(v.jsx)("a",{href:"http://instagram.com/juan.diaz.diaz.ferrol",children:Object(v.jsx)("img",{src:I,className:"instagram",alt:"instagram"})})})]}),Object(v.jsx)("p",{children:"Alojado en una Raspberry | Desarrollado con React"})]})})]})}}]),a}(c.Component),B=function(e){e&&e instanceof Function&&a.e(5).then(a.bind(null,83)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};i.a.render(Object(v.jsx)(O.a,{children:Object(v.jsx)(w,{})}),document.getElementById("root")),B()}},[[69,1,2]]]);
//# sourceMappingURL=main.6f3fcbc4.chunk.js.map