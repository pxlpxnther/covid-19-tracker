(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(2),s=t.n(r),o=t(3),l=t(4),i=t(5),u=t(6),d=(t(12),function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).onSearch=function(a){e.setState({searchValue:a.target.value}),console.log(a.target.value)},e.state={covid19Stats:[],searchValue:""},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Canada",{method:"GET",headers:{"x-rapidapi-host":"covid-19-coronavirus-statistics.p.rapidapi.com","x-rapidapi-key":"cbba18372fmsh11ab9e60dfeaa18p19529fjsnc7c72655e7be"}}).then((function(e){return e.json()})).then((function(a){e.setState({covid19Stats:a.data.covid19Stats})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,a=this.state.covid19Stats;return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"COVID-19 Tracker"),c.a.createElement("p",null,"Simple UI, because it's just for keeping up to date on the current pandemic."),c.a.createElement("input",{type:"text",onChange:this.onSearch,className:"search",placeholder:"Search for your province"}),c.a.createElement("div",{className:"flex-container"},a.map((function(a,t){return""===e.state.searchValue||a.province.toLowerCase().includes(e.state.searchValue.toLowerCase())?c.a.createElement("div",{key:t,className:a.province},c.a.createElement("h2",null,a.province,", ",a.country),c.a.createElement("p",null,"Last Updated:"," ",c.a.createElement("span",{className:"last-updated"},a.lastUpdate)),c.a.createElement("p",null,"confirmed cases:"," ",c.a.createElement("span",{className:"confirmed-cases"},a.confirmed)),c.a.createElement("p",null,"Deaths: ",c.a.createElement("span",{className:"deaths"},a.deaths))):c.a.createElement("div",{key:t,className:a.province+" hidden"},c.a.createElement("h2",null,a.province,", ",a.country),c.a.createElement("p",null,"Last Updated:"," ",c.a.createElement("span",{className:"last-updated"},a.lastUpdate)),c.a.createElement("p",null,"confirmed cases:"," ",c.a.createElement("span",{className:"confirmed-cases"},a.confirmed)),c.a.createElement("p",null,"Deaths: ",c.a.createElement("span",{className:"deaths"},a.deaths)))}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.50f2443b.chunk.js.map