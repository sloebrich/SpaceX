(this.webpackJsonpspace_x=this.webpackJsonpspace_x||[]).push([[0],{48:function(e,t,a){e.exports=a(63)},53:function(e,t,a){},54:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),o=(a(53),a(23)),m=a(6),i=(a(54),a(15)),s=a(65),u=a(71),d=a(66),E=a(44),h=a(11);var f=function(e){var t=e.launch,a=t.links.flickr_images[0],n=new Date(t.launch_date_utc);return l.a.createElement(h.LinkContainer,{to:"/".concat(t.flight_number),className:"launch-card-container"},l.a.createElement(s.a,{xl:3,lg:4,md:6,sm:6,xs:12},l.a.createElement(u.a,{bg:"dark",text:"white",className:"dashboard-card"},l.a.createElement(u.a.Img,{variant:"top",src:a,className:"card-image"}),l.a.createElement(u.a.Body,{className:"card-title-body"},l.a.createElement(u.a.Title,null,t.flight_number,". ",t.mission_name)),l.a.createElement(d.a,{className:"list-group-flush card-list"},l.a.createElement(E.a,null,"Launch date: ",n.getDate(),"/",n.getMonth()+1,"/",n.getFullYear()),l.a.createElement(E.a,null,"Launch site: ",t.launch_site.site_name_long),l.a.createElement(E.a,null,"Rocket: ",t.rocket.rocket_name,", type"," ",t.rocket.rocket_type)))))},g=a(67);function k(){return l.a.createElement("div",{className:"d-flex justify-content-center spinner-div"},l.a.createElement(g.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")))}var p=a(68);var v=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(i.a)(c,2),m=o[0],s=o[1];return Object(n.useEffect)((function(){fetch("https://api.spacexdata.com/v3/launches/past").then((function(e){if(!e.ok)throw new Error("API did not respond: Code ".concat(e.status));return e})).then((function(e){return e.json()})).then((function(e){r(e.reverse()),s(!0)}))}),[m]),m?l.a.createElement("div",null,l.a.createElement("h1",null,"SpaceX Launches"),l.a.createElement(p.a,null,a.map((function(e,t){return l.a.createElement(f,{key:t,launch:e})})))):l.a.createElement(k,null)},b=a(36);var _=function(e){return l.a.createElement(b.a,{className:"image-carousel"},e.images.map((function(e){return l.a.createElement(b.a.Item,{key:e},l.a.createElement("img",{className:"d-block w-100 carousel-image",src:e,alt:"Carousel slide"}))})))},N=a(69);var y=function(e){var t=e.launch,a=t.links,n=a.article_link,r=a.video_link,c=a.flickr_images,o=new Date(t.launch_date_utc);return l.a.createElement(p.a,null,l.a.createElement(s.a,{xl:8,lg:8,md:8,sm:12,xs:12,className:"detail-card-col"},l.a.createElement(u.a,{bg:"dark",text:"white",className:"detail-card"},l.a.createElement(u.a.Body,{className:"title-wrapper"},l.a.createElement(u.a.Title,null,t.flight_number,". ",t.mission_name)),l.a.createElement(N.a,{variant:"dark"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{style:{textAlign:"right",width:"25%"}},"Launch date:"," "),l.a.createElement("td",null,o.getDate(),"/",o.getMonth()+1,"/",o.getFullYear())),l.a.createElement("tr",null,l.a.createElement("td",{style:{textAlign:"right"}},"Launch site:"," "),l.a.createElement("td",null,t.launch_site.site_name_long)),l.a.createElement("tr",null,l.a.createElement("td",{style:{textAlign:"right"}},"Rocket: "),l.a.createElement("td",null,t.rocket.rocket_name,", type"," ",t.rocket.rocket_type)),l.a.createElement("tr",null,l.a.createElement("td",{style:{textAlign:"right"}},"Payload:"," "),l.a.createElement("td",null,t.rocket.second_stage.payloads.map((function(e){return e.payload_id+" "+e.payload_type})))),l.a.createElement("tr",null,l.a.createElement("td",{style:{textAlign:"right"}},"Success:"," "),l.a.createElement("td",null,t.launch_success?l.a.createElement("div",{style:{color:"#5cb85c"}},"Launch was successful."):l.a.createElement("div",{style:{color:"#d9534f"}},"Launch failed."))))),l.a.createElement(u.a.Body,null,l.a.createElement(u.a.Text,null,t.details),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(u.a.Link,{href:n,target:"_blank"},"Go to article"),l.a.createElement(u.a.Link,{href:r,target:"_blank"},"Go to video"))))),l.a.createElement(s.a,{xl:4,lg:4,md:12,sm:12,xs:12,className:"carousel-col"},c.length>0&&l.a.createElement(_,{images:c})))},x=a(72);var L=function(e){var t=e.flightNumber,a=e.latest;return l.a.createElement(x.a,{className:"justify-content-center"},t<a&&l.a.createElement(x.a.Item,null,l.a.createElement(h.LinkContainer,{to:"/".concat(t+1)},l.a.createElement(x.a.Link,{className:"detail-footer-link"},l.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"})))),t>1&&l.a.createElement(x.a.Item,null,l.a.createElement(h.LinkContainer,{to:"/".concat(t-1)},l.a.createElement(x.a.Link,{className:"detail-footer-link"},l.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"})))))};function w(){return l.a.createElement("h1",null,"Not found")}var j=function(e){var t=Object(m.m)().flightNumber,a=Object(n.useState)({}),r=Object(i.a)(a,2),c=r[0],o=r[1],s=Object(n.useState)(!1),u=Object(i.a)(s,2),d=u[0],E=u[1];return Object(n.useEffect)((function(){fetch("https://api.spacexdata.com/v3/launches/"+t).then((function(e){if(!e.ok)throw new Error("API did not respond: Code ".concat(e.status));return e})).then((function(e){return e.json()})).then((function(e){o(e),E(!0)}))}),[t,d]),d?Number(t)<1||Number(t)>e.latest?l.a.createElement(w,null):l.a.createElement("div",{className:"detail-container"},l.a.createElement(y,{launch:c}),l.a.createElement(L,{flightNumber:Number(t),latest:e.latest})):l.a.createElement(k,null)},O=a(70);var C=function(e){var t=Object(n.useState)(Math.floor(Number(e.latest)*Math.random())+1),a=Object(i.a)(t,2),r=a[0],c=a[1];return l.a.createElement(O.a,{bg:"dark",variant:"dark"},l.a.createElement(x.a,{className:"mr-auto"},l.a.createElement(h.LinkContainer,{to:"/"},l.a.createElement(x.a.Link,{active:"false"},"Home")),l.a.createElement(h.LinkContainer,{to:"/".concat(e.latest)},l.a.createElement(x.a.Link,null,"Latest")),l.a.createElement(h.LinkContainer,{to:"/55"},l.a.createElement(x.a.Link,null,"Tesla")),l.a.createElement(h.LinkContainer,{to:"/".concat(r),onClick:function(){return c(Math.floor(90*Math.random())+1)}},l.a.createElement(x.a.Link,null,"Random"))))};var A=function(){var e=this;return Object(n.useEffect)((function(){var t=localStorage.getItem("path");t&&(localStorage.removeItem("path"),e.router.navigate([t]))}),[]),l.a.createElement("div",{className:"App"},l.a.createElement(o.HashRouter,{basename:"/spacex"},l.a.createElement(C,{latest:109}),l.a.createElement(m.g,null,l.a.createElement(m.d,{path:"/",exact:!0,component:v}),l.a.createElement(m.d,{path:"/:flightNumber"},l.a.createElement(j,{latest:109})),l.a.createElement(m.d,{component:w}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.a8da76f0.chunk.js.map