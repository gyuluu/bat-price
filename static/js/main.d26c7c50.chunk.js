(this["webpackJsonpbat-price"]=this["webpackJsonpbat-price"]||[]).push([[0],{173:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(52),i=a.n(r),o=(a(61),a(62),a(10)),s=a(11),l=a(53),u=a.n(l),p=a(54);function d(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(0),l=Object(s.a)(i,2),d=l[0],m=l[1],b=Object(n.useState)([]),v=Object(s.a)(b,2),f=v[0],h=v[1],j=Object(n.useState)([]),E=Object(s.a)(j,2),O=E[0],g=E[1],k={labels:Object(o.a)(O),datasets:[{label:"BAT Price (USD)",data:Object(o.a)(f),fill:!1,borderColor:"red"}]};return Object(n.useEffect)((function(){var e=function(){u.a.get("https://api.cryptonator.com/api/ticker/bat-usd").then((function(e){if(r(e.data.ticker.price),m(e.data.ticker.change),parseFloat(e.data.ticker.price)!==f[f.length-1]){var t=parseFloat(e.data.ticker.price),a=parseInt(e.data.timestamp),n=new Date(1e3*a),c=n.getHours(),i="0"+n.getMinutes(),s="0"+n.getSeconds(),l=c+":"+i.substr(-2)+":"+s.substr(-2);h((function(e){return[].concat(Object(o.a)(e),[t])})),g((function(e){return[].concat(Object(o.a)(e),[l])}))}}))};e();var t=setInterval(e,3e4);return function(){return clearInterval(t)}}),[]),c.a.createElement("div",null,c.a.createElement("div",{className:"w"},c.a.createElement("div",{className:"price"},"$",a),c.a.createElement("p",{className:"change"},"Price (1h ago): $",a-d)),c.a.createElement("div",{className:"canvas-container"},c.a.createElement(p.a,{data:k,options:{maintainAspectRatio:!1}})))}var m=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Basic Attention Token (BAT) Price"),c.a.createElement("p",{className:"copy"},"*price is updated every 30 seconds"),c.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},56:function(e,t,a){e.exports=a(173)},61:function(e,t,a){},62:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.d26c7c50.chunk.js.map