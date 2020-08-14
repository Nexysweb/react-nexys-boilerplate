(window["webpackJsonpnexys-boilerplate"]=window["webpackJsonpnexys-boilerplate"]||[]).push([[0],{445:function(e,t,a){e.exports=a(637)},637:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),i=a.n(o),l=a(664),c=a(29),m=a(50),u=a(15),s=a(207),p=a(663),f=a(380),g=a(379),d=u.UI.Nav.Top,h=u.Utils.makeStyles((function(e){return{appBar:{backgroundColor:e.palette.primary.main}}})),E=function(e){var t=e.isOpen,a=e.onToggle,n=[{link:"/app/profile",Icon:f.a},{link:"/logout",Icon:g.a}],o=h();return r.a.createElement(d,{title:"Boilerplate",menus:n,isOpen:t,onToggle:a,className:o.appBar})},b=a(378),y=a(377),S=a(376),v=function(e){return"/app"+e},k=function(e){return""+e},x={default:k("/"),signup:k("/signup"),unauthorized:k("/unauthorized"),login:k("/login"),logout:k("/logout")},H={default:v("/"),dashboard:v("/dashboard"),crud:v("/crud"),profile:v("/profile"),unauthorizedPage:v("/unauthorizedPage")},w=u.UI.Nav.Left,z=w.Drawer,U=w.Menu,F=[{link:H.dashboard,label:"Dashboard",Icon:b.a},{link:H.crud,label:"Crud",Icon:y.a},{link:H.unauthorizedPage,label:"Unauthorized Page",Icon:S.a}],T=function(e){var t=e.isOpen,a=e.onClose;return r.a.createElement(z,{isOpen:t,onClose:a},r.a.createElement(U,{list:F}))},W=a(72),L=a(667),I=function(){return r.a.createElement(W.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9"," ",r.a.createElement(L.a,{color:"inherit",href:""},"Nexys Boilerplate")," ".concat((new Date).getFullYear()))},N=u.Utils.makeStyles((function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}}));var C=function(e){var t=r.a.useState(!1),a=Object(s.a)(t,2),n=a[0],o=a[1],i=N(),c=e.children;return r.a.createElement("div",{className:i.root},r.a.createElement(l.a,null),r.a.createElement(E,{isOpen:n,onToggle:function(){return o(!n)}}),r.a.createElement(T,{isOpen:n,onClose:function(){return o(!1)}}),r.a.createElement("main",{className:i.content},r.a.createElement("div",{className:i.appBarSpacer}),r.a.createElement(p.a,{maxWidth:"lg",className:i.container},c),r.a.createElement(I,null)))},P=function(e){var t=e.title,a=e.type,n=e.className;return r.a.createElement(W.a,{component:"subtitle"===a?"h2":"groupTitle"===a?"h3":"h1",variant:"subtitle"===a?"h5":"groupTitle"===a?"h6":"h4",className:"".concat(n?" "+n:"")},t)},R=a(248),B=a(435),A=a.n(B),O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{title:"Home",type:"pageTitle"}),r.a.createElement("p",null,r.a.createElement(u.UI.Link,{to:"/app/profile"},"an internal link")),r.a.createElement("p",null,"Source",r.a.createElement("a",{href:"https://github.com/Nexysweb/react-nexys-boilerplate"},r.a.createElement(R.a,null,r.a.createElement(A.a,null)))))},j=[{id:1,name:"United States",short:"USA"},{id:2,name:"France",short:"FR"},{id:3,name:"Hungary",short:"HU"},{id:4,name:"Spain",short:"ES"},{id:5,name:"Germany",short:"DE"},{id:6,name:"Switzerland",short:"CH"},{id:7,name:"Canada",short:"CA"}],D={list:function(){return Promise.resolve(j)},detail:function(e){var t=j.find((function(t){return Number(t.id)===Number(e)}));return t?Promise.resolve(t):Promise.reject(null)},insert:function(e){return Promise.resolve({id:3})},update:function(e){return Promise.resolve(!0)},deleteById:function(e){return Promise.resolve(!0)}},G={urlPrefix:"/app/crud",displayType:"toggle",title:"Simple",fields:[{name:"name",label:"Name",type:"string"},{name:"short",label:"Short",type:"string"}],listConfig:{search:!0}},J=function(){return r.a.createElement(u.CrudSimple.Generic.App,{dataDef:G,Data:D})},V=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{title:"CRUD Example",type:"pageTitle"}),r.a.createElement("p",null,"This is a simple CRUD example, for more UX journey examples, please refer to:"," ",r.a.createElement("a",{href:"https://components.nexys.io/crud"},"https://components.nexys.io/crud")),r.a.createElement(J,null))},M=a(367),Y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{item:!0,xs:6},r.a.createElement(P,{title:e.title,type:"pageTitle"})),e.children)},q={firstName:"John",lastName:"Doe",email:"john.doe@gmail.com",uuid:"myuid"},X=function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.UI.ViewWrapper,{label:"First Name"},r.a.createElement(W.a,null,t.firstName)),r.a.createElement(u.UI.ViewWrapper,{label:"Last Name"},r.a.createElement(W.a,null,t.lastName)),r.a.createElement(u.UI.ViewWrapper,{label:"Email"},r.a.createElement(W.a,null,t.email)))},$=function(){return r.a.createElement(Y,{title:"Profile"},r.a.createElement(u.Data.Load.WithLoader,{Component:X,dataLoad:new Promise((function(e){return e(q)}))}))},K=function(e,t){return function(a){var n=u.Stateful.Credentials.getPermissions(),o=a.location.pathname;return n?n.includes(t)?r.a.createElement(e,a):(u.Stateful.Store.set("redirectUri",o),r.a.createElement(c.c,{to:"/unauthorized"})):(u.Stateful.Store.set("redirectUri",o),r.a.createElement(c.c,{to:"/login"}))}},Q=function(){return r.a.createElement("p",null,"This content is unauthorized")};var Z=K((function(e){return r.a.createElement(C,null,r.a.createElement(c.g,null,r.a.createElement(c.d,{path:H.dashboard,component:O,props:e}),r.a.createElement(c.d,{path:H.crud,component:V,props:e}),r.a.createElement(c.d,{path:H.profile,component:$,props:e}),r.a.createElement(c.d,{path:H.unauthorizedPage,component:K(Q,"permissionThatDoesNotExist"),props:e}),r.a.createElement(c.d,{path:H.default,component:function(){return r.a.createElement(c.c,{to:H.dashboard})}})))}),"app"),_=a(200),ee=a.n(_),te=a(436),ae={token:"mytoken",profile:q,permissions:["app","anotherpermission"],lang:"en"},ne=function(){var e=Object(te.a)(ee.a.mark((function e(t){var a,n,r,o,i;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("john@doe.com"===t.email){e.next=2;break}return e.abrupt("return",Promise.reject({errors:{email:["my uuid"]}}));case 2:return e.next=4,Promise.resolve(ae);case 4:return a=e.sent,n=a.token,r=a.profile,o=a.permissions,i=a.lang,u.Stateful.Credentials.set(n,r,o,i),e.abrupt("return",{uuid:"myuuid"});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=u.UI.Layout,oe=u.UI.Business,ie=function(){var e=r.a.useState(void 0),t=Object(s.a)(e,2),a=t[0],n=t[1];return a?r.a.createElement(c.c,{to:a}):r.a.createElement(re.Login,{title:"Boilerplate"},r.a.createElement(oe.Login.Error,{name:"notifLogout"},"You were successfully logged out."),r.a.createElement(re.Title,{title:"Login to Nexys",type:"groupTitle"}),r.a.createElement("p",null,r.a.createElement("small",null,r.a.createElement("i",null,"enter ",r.a.createElement("code",null,"john@doe.com")," as email"))),r.a.createElement(oe.Login.Login,{onSuccess:function(e){n("/app")},onSubmit:function(e){return ne(e)}}),r.a.createElement("p",null,r.a.createElement(u.UI.Link,{to:x.signup},"to signup")))},le=function(){return r.a.createElement(u.UI.Layout.Login,{title:"Signup"},r.a.createElement("h2",null,"Signup"),r.a.createElement("p",null,"here signup..."),r.a.createElement("p",null,r.a.createElement(u.UI.Link,{to:x.login},"to login")))},ce=function(){var e=Object(c.k)();return r.a.createElement(u.UI.Layout.Login,{title:"Unauthorized"},r.a.createElement("h2",null,"Unauthorized"),r.a.createElement("p",null,"The page you were trying to access requires permissions that your profile does not have. Get in touch with your administrator."),r.a.createElement("p",null,"The page you were trying to access:"," ",r.a.createElement("code",null,u.Stateful.Store.get("redirectUri"))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.UI.Button,{onClick:function(){return e.goBack()},label:"Back"})),r.a.createElement("li",null,r.a.createElement(u.UI.Link,{to:"/login"},"Login"))))},me=function(){return Object(n.useEffect)((function(){u.Stateful.Credentials.remove(),u.Stateful.Store.set("notifLogout",!0),Promise.resolve(!0)}),[]),r.a.createElement(c.c,{to:"/"})},ue=function(e){return r.a.createElement(c.g,null,r.a.createElement(c.d,{path:x.logout,component:me,props:e}),r.a.createElement(c.d,{path:x.signup,component:le,props:e}),r.a.createElement(c.d,{path:x.unauthorized,component:ce,props:e}),r.a.createElement(c.d,{path:x.login,component:ie,props:e}),r.a.createElement(c.d,{path:x.default,component:function(){return u.Stateful.Credentials.getProfile()?r.a.createElement(c.c,{to:H.default}):r.a.createElement(c.c,{to:x.login})}}))},se=m.a({basename:"/react-nexys-boilerplate"}),pe=Object(c.o)((function(e){return r.a.createElement(u.SnackbarProvider,{maxSnack:3},r.a.createElement(c.g,null,r.a.createElement(c.d,{path:"/app",component:Z,props:e}),r.a.createElement(c.d,{path:"/",component:ue,props:e})))})),fe=function(){return r.a.createElement(c.e,{history:se},r.a.createElement(pe,null))},ge=a(189),de=a.n(ge)()({mixins:{toolbar:{minHeight:56,"@media (min-width:0px) and (orientation: landscape)":{minHeight:48},"@media (min-width:600px)":{minHeight:64}}},palette:{common:{black:"#000",white:"#fff"},type:"dark",primary:{main:"#5F87CC",light:"rgb(22, 168, 250)",dark:"rgb(2, 76, 117)",contrastText:"#fff"},secondary:{main:"rgb(220, 0, 78)",light:"rgb(227, 51, 113)",dark:"rgb(154, 0, 54)",contrastText:"#fff"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",third:"rgba(0, 0, 0, 0.18)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:"#fff",default:"#fff",level2:"#f5f5f5",level1:"#fff"},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.08)",hoverOpacity:.08,selected:"rgba(0, 0, 0, 0.14)",disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)"}},typography:{htmlFontSize:16,fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,h1:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:300,fontSize:"6rem",lineHeight:1,letterSpacing:"-0.01562em"},h2:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:300,fontSize:"3.75rem",lineHeight:1,letterSpacing:"-0.00833em"},h3:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:400,fontSize:"3rem",lineHeight:1.04,letterSpacing:"0em"},h4:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:400,fontSize:"2.125rem",lineHeight:1.17,letterSpacing:"0.00735em"},h5:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:400,fontSize:"1.5rem",lineHeight:1.33,letterSpacing:"0em"},h6:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:500,fontSize:"1.25rem",lineHeight:1.6,letterSpacing:"0.0075em"},subtitle1:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:400,fontSize:"1rem",lineHeight:1.75,letterSpacing:"0.00938em"},subtitle2:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:500,fontSize:"0.875rem",lineHeight:1.57,letterSpacing:"0.00714em"},body1:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:400,fontSize:"1rem",lineHeight:1.5,letterSpacing:"0.00938em"},body2:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:400,fontSize:"0.875rem",lineHeight:1.43,letterSpacing:"0.01071em"},button:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:500,fontSize:"0.875rem",lineHeight:1.75,letterSpacing:"0.02857em",textTransform:"uppercase"},caption:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:400,fontSize:"0.75rem",lineHeight:1.66,letterSpacing:"0.03333em"},overline:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:400,fontSize:"0.75rem",lineHeight:2.66,letterSpacing:"0.08333em",textTransform:"uppercase"}},shape:{borderRadius:4},zIndex:{mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},nprogress:{color:"#000"}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(u.ThemeProvider,{theme:de},r.a.createElement(l.a,null),r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[445,1,2]]]);
//# sourceMappingURL=main.dd8857df.chunk.js.map