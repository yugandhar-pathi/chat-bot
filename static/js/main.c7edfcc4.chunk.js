(this["webpackJsonpchat-bot"]=this["webpackJsonpchat-bot"]||[]).push([[0],{58:function(e,t,a){e.exports=a(76)},76:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(23),c=a.n(l),r=a(17),i=a(13),m=a(93),u=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,null,"You are on home page"),o.a.createElement(r.b,{to:"/details"},"Details Page"))},s=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,null,"You are on details page."),o.a.createElement(r.b,{to:"/"},"Home Page"))},d=a(91),h=a(84),g=a(85),E=a(86);var f=function(e){var t=e.hideChat;return Object(n.useEffect)((function(){!function(e){var t=0,a=0,n=0,o=0;function l(e){(e=e||window.event).preventDefault(),n=e.clientX,o=e.clientY,document.onmouseup=r,document.onmousemove=c}function c(l){(l=l||window.event).preventDefault(),t=n-l.clientX,a=o-l.clientY,n=l.clientX,o=l.clientY,e.style.top=e.offsetTop-a+"px",e.style.left=e.offsetLeft-t+"px"}function r(){document.onmouseup=null,document.onmousemove=null}console.log("reach drag Element"+e.id),document.getElementById(e.id+"-drag")?(console.log("tie mouse down"),document.getElementById(e.id+"-drag").onmousedown=l):(console.log("reach else case"),e.onmousedown=l)}(document.getElementById("chat-box"))}),[]),o.a.createElement(d.a,{id:"chat-box",style:{position:"absolute",bottom:"5px",right:"5px"}},o.a.createElement(d.a,{width:"300px",height:"480px",border:!0},o.a.createElement(d.a,{direction:"row",align:"center",justify:"between",as:"header",elevation:"small",pad:"small"},o.a.createElement("div",{id:"chat-box-drag"},o.a.createElement(h.a,{size:"medium"})),o.a.createElement(d.a,{direction:"row",alignContent:"center",gap:"small"},o.a.createElement(g.a,{size:"medium",color:"#00c781"}),o.a.createElement(m.a,null,"HPE Infosight Bot")),o.a.createElement(E.a,{size:"medium",onClick:function(){t(!1)}})),o.a.createElement(d.a,{flex:!0,overflow:"auto",pad:"xsmall"},o.a.createElement("iframe",{title:"chatFrame",src:"https://lightning-nimble.cs17.force.com/apex/Prechat_Form?endpoint=https%3A%2F%2F2616.la1-c1cs-ord.salesforceliveagent.com%2Fcontent%2Fs%2Fchat%3Flanguage%3Den_US%26org_id%3D00Dg0000006UNYM%26deployment_id%3D572g00000008Or5%26sid%3D4c0d632e-fc74-4cb1-86d0-20986feb6987%23deployment_id%3D572g00000008Or5%26org_id%3D00Dg0000006UNYM%26button_id%3D573g00000008PXw%26session_id%3D4c0d632e-fc74-4cb1-86d0-20986feb6987",width:"100%",height:"100%"}))))},p=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{direction:"row",as:"header",justify:"center",align:"center",elevation:"small",pad:"small"},o.a.createElement(m.a,null,"ChatBot On Hackdays")))},b=a(55),w=a(90),v=a(54),x=a(89),y=a(92),D=a(88),F=function(e){var t=e.startChat;return o.a.createElement(x.a,{position:"bottom-right",modal:!1,margin:"xsmall"},o.a.createElement(y.a,{icon:o.a.createElement(D.a,null),label:"Chat Now",onClick:function(){return t(!0)}}))},C=function(e){var t=e.children,a=Object(n.useState)(!1),l=Object(b.a)(a,2),c=l[0],r=l[1];return o.a.createElement(w.a,{theme:v.grommet},o.a.createElement(d.a,{width:"100%"},o.a.createElement(p,null),t,!c&&o.a.createElement(F,{startChat:r}),c&&o.a.createElement(f,{hideChat:r})))};var _=function(){return o.a.createElement(C,null,o.a.createElement(r.a,{basename:"/chat-bot"},o.a.createElement(i.a,{exact:!0,path:"/",children:o.a.createElement(u,null)}),o.a.createElement(i.a,{exact:!0,path:"/details",children:o.a.createElement(s,null)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.c7edfcc4.chunk.js.map