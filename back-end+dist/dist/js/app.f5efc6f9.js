(function(e){function t(t){for(var n,a,s=t[0],i=t[1],l=t[2],p=0,d=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,s=1;s<o.length;s++){var i=o[s];0!==r[i]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},c=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},1184:function(e,t,o){},2454:function(e,t,o){"use strict";o("29e8")},"29e8":function(e,t,o){},"2e39":function(e,t,o){"use strict";o("c146")},3117:function(e,t,o){"use strict";o("ec23")},"342c":function(e,t,o){"use strict";o("fb5f")},4147:function(e,t,o){"use strict";o("5990")},4327:function(e,t,o){"use strict";o("e15a")},"438d":function(e,t,o){},4800:function(e,t,o){"use strict";o("aa1c")},"4ad5":function(e,t,o){},"4c5c":function(e,t,o){"use strict";o("79e2")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r=(o("b0c0"),{class:"container"}),c={class:"information-container"};function a(e,t,o,a,s,i){var l=Object(n["resolveComponent"])("user-auth"),u=Object(n["resolveComponent"])("the-header"),p=Object(n["resolveComponent"])("chart"),d=Object(n["resolveComponent"])("protocol-info"),b=Object(n["resolveComponent"])("auto-control"),f=Object(n["resolveComponent"])("basic-card"),A=Object(n["resolveComponent"])("switch-card"),m=Object(n["resolveComponent"])("request-log");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])(l),Object(n["createVNode"])("div",r,[Object(n["createVNode"])(u),Object(n["createVNode"])("main",null,[Object(n["createVNode"])("section",c,[Object(n["createVNode"])(p),Object(n["createVNode"])(d,{currentProtocol:i.getRasInfo.currentProtocol},null,8,["currentProtocol"]),Object(n["createVNode"])(b,{autoControl:i.getRasInfo.autoControl,token:i.token},null,8,["autoControl","token"]),Object(n["createVNode"])(f,{data:i.getRasInfo.waterLevel},null,8,["data"]),Object(n["createVNode"])(f,{data:i.getRasInfo.temperature},null,8,["data"]),(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(i.getRasInfo.pumps,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(A,{key:e.name,data:e},null,8,["data"])})),128)),Object(n["createVNode"])(m)])])])],64)}var s=o("cf05"),i=o.n(s),l=Object(n["createVNode"])("img",{src:i.a,class:"header-logo"},null,-1),u=Object(n["createVNode"])("h1",null,"ProjectRAS",-1);function p(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])("header",null,[l,u])}o("743e");const d={};d.render=p;var b=d;function f(e,t,o,r,c,a){var s=Object(n["resolveComponent"])("login-form");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[c.loginForm?(Object(n["openBlock"])(),Object(n["createBlock"])("div",{key:0,class:"backDrop",onClick:t[1]||(t[1]=function(){return a.toggleLoginForm&&a.toggleLoginForm.apply(a,arguments)})})):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(n["Transition"],{name:"fade"},{default:Object(n["withCtx"])((function(){return[c.loginForm?(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:0,onCloseLoginForm:a.toggleLoginForm},null,8,["onCloseLoginForm"])):Object(n["createCommentVNode"])("",!0)]})),_:1}),a.token?(Object(n["openBlock"])(),Object(n["createBlock"])("button",{key:2,class:"loginFormSwitch",onClick:t[3]||(t[3]=function(){return a.logout&&a.logout.apply(a,arguments)})},"Logout")):(Object(n["openBlock"])(),Object(n["createBlock"])("button",{key:1,class:"loginFormSwitch",onClick:t[2]||(t[2]=function(){return a.toggleLoginForm&&a.toggleLoginForm.apply(a,arguments)})}," Login "))],64)}var A={class:"test"},m={class:"loginForm__formControl"},O=Object(n["createVNode"])("label",{for:"login",class:"loginForm__label"},"Login",-1),h={key:0,class:"loginForm__errorMsg"},g={class:"loginForm__formControl"},j=Object(n["createVNode"])("label",{for:"password",class:"loginForm__label"},"Password",-1),k={key:0,class:"loginForm__errorMsg"},v={key:0,class:"loginForm_errorAuthMsg"},B={key:1,class:"loginForm__submitButton"};function C(e,t,o,r,c,a){var s=Object(n["resolveComponent"])("loader");return Object(n["openBlock"])(),Object(n["createBlock"])("div",A,[Object(n["createVNode"])("form",{onSubmit:t[5]||(t[5]=Object(n["withModifiers"])((function(){return a.handleLoginRequest&&a.handleLoginRequest.apply(a,arguments)}),["prevent"])),class:"loginForm",onClick:t[6]||(t[6]=function(){return a.clearErrors&&a.clearErrors.apply(a,arguments)})},[Object(n["createVNode"])("div",m,[O,Object(n["withDirectives"])(Object(n["createVNode"])("input",{onClick:t[1]||(t[1]=function(){return a.clearErrors&&a.clearErrors.apply(a,arguments)}),type:"text",id:"login",autocomplete:"username",required:"",class:["loginForm__input",{loginForm__redBorder:!this.login.validated||!this.password.validated}],"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.login.input=e})},null,2),[[n["vModelText"],c.login.input,void 0,{trim:!0}]]),c.login.validated?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])("p",h,Object(n["toDisplayString"])(c.login.errorMsg),1))]),Object(n["createVNode"])("div",g,[j,Object(n["withDirectives"])(Object(n["createVNode"])("input",{onClick:t[3]||(t[3]=function(){return a.clearErrors&&a.clearErrors.apply(a,arguments)}),type:"password",id:"password","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.password.input=e}),class:"loginForm__input loginForm__passwordInput",autocomplete:"current-password",required:""},null,512),[[n["vModelText"],c.password.input,void 0,{trim:!0}]]),c.password.validated?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])("p",k,Object(n["toDisplayString"])(c.password.errorMsg),1))]),c.authErrorMsg?(Object(n["openBlock"])(),Object(n["createBlock"])("p",v," Incorrect data or password ! ")):Object(n["createCommentVNode"])("",!0),c.loader?(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:2,class:"loginForm__loader"})):(Object(n["openBlock"])(),Object(n["createBlock"])("button",B,"Login"))],32)])}o("96cf");var V=o("1da1"),x=Object(n["withScopeId"])("data-v-b49ba9d2");Object(n["pushScopeId"])("data-v-b49ba9d2");var N={class:"loader"},w=Object(n["createVNode"])("div",{class:"lds-roller"},[Object(n["createVNode"])("div"),Object(n["createVNode"])("div"),Object(n["createVNode"])("div"),Object(n["createVNode"])("div"),Object(n["createVNode"])("div"),Object(n["createVNode"])("div"),Object(n["createVNode"])("div"),Object(n["createVNode"])("div")],-1),I=Object(n["createVNode"])("p",null,"Loading...",-1);Object(n["popScopeId"])();var R=x((function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])("div",N,[w,I])}));o("c397");const S={};S.render=R,S.__scopeId="data-v-b49ba9d2";var y=S,q={components:{Loader:y},emits:["loginRequest","closeLoginForm"],data:function(){return{login:{input:null,validated:!0,errorMsg:"Please insert correct username"},password:{input:null,validated:!0,errorMsg:"Please insert password"},loader:!1,authErrorMsg:!1}},methods:{clearErrors:function(){this.login.validated=!0,this.password.validated=!0,this.authErrorMsg=!1},validateForm:function(){return null===this.login.input?(this.login.validated=!1,!1):null!==this.password.input||(this.password.validated=!1,!1)},closeLoginForm:function(){this.$emit("closeLoginForm")},handleLoginRequest:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.validateForm()){t.next=3;break}return t.abrupt("return");case 3:return e.loader=!0,t.next=6,e.$store.dispatch("setToken",{userName:e.login.input,password:e.password.input});case 6:e.closeLoginForm(),e.loader=!1,t.next=15;break;case 10:t.prev=10,t.t0=t["catch"](0),e.authErrorMsg=!0,e.loader=!1,console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}};o("ca20");q.render=C;var _=q,L={components:{LoginForm:_},data:function(){return{loginForm:!1}},computed:{token:function(){return this.$store.getters["getToken"]}},methods:{toggleLoginForm:function(){this.loginForm=!this.loginForm},logout:function(){this.$store.dispatch("logout")}}};o("6776");L.render=f;var D=L,P={class:"informationContainer__protocolBox"},F={class:"protocolBox__text"},T=Object(n["createVNode"])("h4",null,"Current protocol",-1),E={key:0,class:"informationContainer__protocolInformation"},z={key:0,class:"protocolBox__dangerIconBox"},H=Object(n["createVNode"])("span",{class:"protocolBox__dangerIcon"},null,-1),M={key:1,class:"protocolBox__checkmarkIconBox"},Z=Object(n["createVNode"])("span",{class:"protocolBox__checkmarkIcon"},null,-1);function U(e,t,o,r,c,a){var s=Object(n["resolveComponent"])("loader");return Object(n["openBlock"])(),Object(n["createBlock"])("section",P,[Object(n["createVNode"])("div",F,[T,this.currentProtocol.dataInfo?(Object(n["openBlock"])(),Object(n["createBlock"])("p",E,Object(n["toDisplayString"])(this.currentProtocol.dataInfo),1)):(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:1,class:"information-container__protocolLoader"}))]),0!==this.currentProtocol.state?(Object(n["openBlock"])(),Object(n["createBlock"])("div",z,[H])):(Object(n["openBlock"])(),Object(n["createBlock"])("div",M,[Z]))])}var W={components:{Loader:y},props:{currentProtocol:{require:!0,type:Object}}};o("4800");W.render=U;var J=W,K={class:"tempChartBox_container"},X={class:"tempChartBox__console"},G={class:"tempChartBox__categories"},Q={key:0,class:"tempChartBox__list"},Y={class:"tempChartBox_chart"},$={key:0,class:"tempChart__loader"};function ee(e,t,o,r,c,a){var s=Object(n["resolveComponent"])("apex"),i=Object(n["resolveComponent"])("loader");return Object(n["openBlock"])(),Object(n["createBlock"])("article",K,[Object(n["createVNode"])("div",X,[Object(n["createVNode"])("button",{class:"tempChartBox__button",onClick:t[1]||(t[1]=function(){return a.handleButtonClick&&a.handleButtonClick.apply(a,arguments)})},Object(n["toDisplayString"])(a.buttonText),1),Object(n["createVNode"])("div",G,[Object(n["createVNode"])("button",{class:"tempChartBox__categoryButton",onClick:t[2]||(t[2]=function(){return a.toggleListOptions&&a.toggleListOptions.apply(a,arguments)})},Object(n["toDisplayString"])(c.listOptions.selected),1),c.listOptions.showListOption?(Object(n["openBlock"])(),Object(n["createBlock"])("ul",Q,[Object(n["createVNode"])("li",{class:"tempChartBox__listOption",onClick:t[3]||(t[3]=function(e){return a.changeCategory(c.listOptions.day)})},Object(n["toDisplayString"])(c.listOptions.day),1),Object(n["createVNode"])("li",{class:"tempChartBox__listOption",onClick:t[4]||(t[4]=function(e){return a.changeCategory(c.listOptions.week)})},Object(n["toDisplayString"])(c.listOptions.week),1),Object(n["createVNode"])("li",{class:"tempChartBox__listOption",onClick:t[5]||(t[5]=function(e){return a.changeCategory(c.listOptions.month)})},Object(n["toDisplayString"])(c.listOptions.month),1)])):Object(n["createCommentVNode"])("",!0)])]),Object(n["createVNode"])("div",Y,[c.chart.chartIsVisible?(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:0,options:c.chart.options,series:c.chart.series},null,8,["options","series"])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(n["Transition"],{name:"tempChartLoader"},{default:Object(n["withCtx"])((function(){return[c.loader?(Object(n["openBlock"])(),Object(n["createBlock"])("div",$,[Object(n["createVNode"])(i)])):Object(n["createCommentVNode"])("",!0)]})),_:1})])])}o("d81d"),o("d3b7"),o("ac1f"),o("5319");function te(e,t,o,r,c,a){var s=Object(n["resolveComponent"])("apex-charts");return Object(n["openBlock"])(),Object(n["createBlock"])(s,{width:"500",type:"area",options:this.options,series:this.series},null,8,["options","series"])}var oe=o("ae27"),ne=o.n(oe),re={components:{ApexCharts:ne.a},props:{options:{require:!0},series:{require:!0}}};re.render=te;var ce=re,ae={components:{apex:ce,Loader:y},data:function(){return{showChartButton:{clickable:!0},listOptions:{showListOption:!1,selected:"LAST 24H",day:"LAST 24H",week:"LAST WEEK",month:"LAST MONTH"},loader:!1,chart:{chartIsVisible:!1,options:{chart:{id:"temperatureChart"},xaxis:{categories:null},dataLabels:{enabled:!0,style:{colors:["#169e53"],background:{enabled:!0,foreColor:"#fff",border:0,fontFamily:"Helvetica, Arial, sans-serif"}},offsetY:-10},yaxis:{min:0,max:35}},series:[{name:"°C",data:null}]}}},computed:{apiQuery:function(){return this.listOptions.selected.replace(/\s+/g,"").toLowerCase()},buttonText:function(){return this.chart.chartIsVisible?"HIDE TEMPERATURE CHART":"SHOW TEMPERATURE CHART"}},methods:{toggleListOptions:function(){this.listOptions.showListOption=!this.listOptions.showListOption},changeCategory:function(e){e!==this.listOptions.selected?(this.listOptions.selected=e,this.toggleListOptions(),this.createChartDisplayValues()):this.toggleListOptions()},handleButtonClick:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.showChartButton.clickable){t.next=2;break}return t.abrupt("return");case 2:if(!e.chart.chartIsVisible){t.next=5;break}return e.chart.chartIsVisible=!1,t.abrupt("return");case 5:return e.showChartButton.clickable=!1,e.loader=!0,t.next=9,e.createChartDisplayValues();case 9:e.showChartButton.clickable=!0;case 10:case"end":return t.stop()}}),t)})))()},getDataFromAPI:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://project-ras.herokuapp.com/temp".concat(e.apiQuery));case 3:return o=t.sent,t.next=6,o.json();case 6:return n=t.sent,t.abrupt("return",n);case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},createChartDisplayValues:function(){var e=this;return Object(V["a"])(regeneratorRuntime.mark((function t(){var o,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.chart.chartIsVisible=!1,e.loader=!0,t.next=4,e.getDataFromAPI();case 4:o=t.sent,n=o.map((function(e){return e.temp})),e.chart.series[0].data=n,r=o[0].hour?o.map((function(e){return e.hour+":00"})):o.map((function(e){return e.day})),e.chart.options.xaxis.categories=r,e.loader=!1,e.chart.chartIsVisible=!0;case 11:case"end":return t.stop()}}),t)})))()}}};o("4147");ae.render=ee;var se=ae,ie={class:"information-container__box information-container__box__autoControl"},le=Object(n["createVNode"])("h4",null,"AutoControl :",-1),ue={key:0,class:'"information-container__InfoDisplay'},pe=Object(n["createVNode"])("div",{class:"protocolBox__checkmarkIconBox protocolBox__checkmarkIconBox--autoControl"},[Object(n["createVNode"])("span",{class:"protocolBox__checkmarkIcon"})],-1),de={key:1},be=Object(n["createVNode"])("div",{class:"protocolBox__dangerIconBox protocolBox__checkmarkIconBox--autoControl"},[Object(n["createVNode"])("span",{class:"protocolBox__dangerIcon"})],-1);function fe(e,t,o,r,c,a){var s=Object(n["resolveComponent"])("checkbox");return Object(n["openBlock"])(),Object(n["createBlock"])("div",ie,[le,this.autoControl?(Object(n["openBlock"])(),Object(n["createBlock"])("div",ue,[pe])):(Object(n["openBlock"])(),Object(n["createBlock"])("div",de,[be])),Object(n["createVNode"])(s,{class:"information-container__autocontrol__checkbox",onChange:t[1]||(t[1]=function(e){return a.toggleSocket("autoControl")}),check:a.autoControl,token:a.token},null,8,["check","token"])])}var Ae={key:0,class:"switch"};function me(e,t,o,r,c,a){return this.token?(Object(n["openBlock"])(),Object(n["createBlock"])("label",Ae,[Object(n["createVNode"])("input",{type:"checkbox",class:{checked:this.check,checkboxAnimation:this.check}},null,2),Object(n["createVNode"])("span",{class:["slider round",{checked:this.check}]},null,2)])):Object(n["createCommentVNode"])("",!0)}var Oe={props:{check:{require:!0},token:{required:!0}}};o("2e39");Oe.render=me;var he=Oe,ge={components:{Checkbox:he},emits:["change"],computed:{autoControl:function(){return this.$store.getters["getAutoControl"]},token:function(){return this.$store.getters["getToken"]}},methods:{toggleSocket:function(){this.token&&this.$store.dispatch("toggleAutoControl")}}};o("dce4");ge.render=fe;var je=ge,ke={class:"information-container__box"},ve={key:0,class:"information-container__p"};function Be(e,t,o,r,c,a){var s=Object(n["resolveComponent"])("loader");return Object(n["openBlock"])(),Object(n["createBlock"])("div",ke,[Object(n["createVNode"])("h4",null,Object(n["toDisplayString"])(o.data.textContent),1),o.data.dataInfo?(Object(n["openBlock"])(),Object(n["createBlock"])("p",ve,Object(n["toDisplayString"])(o.data.dataInfo),1)):(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:1,class:"information-container__loader"}))])}var Ce={props:{data:{type:Object}}};o("3117");Ce.render=Be;var Ve=Ce,xe={class:"information-container__box"},Ne={key:0,class:'"information-container__InfoDisplay'},we={class:"information-container__p"};function Ie(e,t,o,r,c,a){var s=Object(n["resolveComponent"])("checkbox"),i=Object(n["resolveComponent"])("small-loader"),l=Object(n["resolveComponent"])("loader");return Object(n["openBlock"])(),Object(n["createBlock"])("div",xe,[Object(n["createVNode"])("h4",null,Object(n["toDisplayString"])(o.data.textContent),1),o.data.dataInfo?(Object(n["openBlock"])(),Object(n["createBlock"])("div",Ne,[Object(n["createVNode"])("p",we,Object(n["toDisplayString"])(o.data.dataInfo),1),Object(n["createVNode"])(s,{onChange:t[1]||(t[1]=function(e){return a.toggleSocket(o.data)}),check:o.data.state,token:a.token},null,8,["check","token"]),a.requested?(Object(n["openBlock"])(),Object(n["createBlock"])(i,{key:0,class:"information-container__smallLoader"})):Object(n["createCommentVNode"])("",!0)])):(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:1,class:"information-container__loader"}))])}var Re={class:"loader"},Se=Object(n["createVNode"])("div",{class:"lds-roller"},[Object(n["createVNode"])("div"),Object(n["createVNode"])("div"),Object(n["createVNode"])("div"),Object(n["createVNode"])("div"),Object(n["createVNode"])("div"),Object(n["createVNode"])("div"),Object(n["createVNode"])("div"),Object(n["createVNode"])("div")],-1);function ye(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])("div",Re,[Se])}o("5b50");const qe={};qe.render=ye;var _e=qe,Le={components:{SmallLoader:_e},props:{data:{type:Object,required:!0}},computed:{token:function(){return this.$store.getters["getToken"]},requested:function(){var e=this.data.name;return this.$store.getters.getRequestedValue(e)}},methods:{toggleSocket:function(e){if(this.token){e.state=!e.state;var t={name:e.name,state:e.state};this.$store.dispatch("toggleDevice",t)}}}};o("4327");Le.render=Ie;var De=Le,Pe={class:"requestsLog"},Fe={class:"requestsLog__buttonsBox"},Te={key:0,class:"requestList"};function Ee(e,t,o,r,c,a){var s=Object(n["resolveComponent"])("request-list");return Object(n["openBlock"])(),Object(n["createBlock"])("section",Pe,[Object(n["createVNode"])("div",Fe,[Object(n["createVNode"])("button",{class:"requestsLog__button",onClick:t[1]||(t[1]=function(){return a.toggleRequestsLog&&a.toggleRequestsLog.apply(a,arguments)})},Object(n["toDisplayString"])(a.toggleButtonText),1),c.showList?(Object(n["openBlock"])(),Object(n["createBlock"])("button",{key:0,class:"requestsLog__button",onClick:t[2]||(t[2]=function(){return a.fetchRequestLogData&&a.fetchRequestLogData.apply(a,arguments)})}," Refresh ")):Object(n["createCommentVNode"])("",!0)]),c.showList?(Object(n["openBlock"])(),Object(n["createBlock"])("ul",Te,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(a.requestLogData,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:e._id,data:e},null,8,["data"])})),128))])):Object(n["createCommentVNode"])("",!0)])}var ze={class:"singleRequestBox"},He={class:"singleRequest"},Me={class:"singleRequest__detailsBox"},Ze={class:"singleRequest__details"},Ue={class:"singleRequest__List"},We={class:"singleRequest__changes"},Je=Object(n["createVNode"])("span",null,"--\x3e",-1),Ke={class:"singleRequest__result"};function Xe(e,t,o,r,c,a){var s=Object(n["resolveComponent"])("ok-checkmark"),i=Object(n["resolveComponent"])("danger-checkmark");return Object(n["openBlock"])(),Object(n["createBlock"])("li",ze,[Object(n["createVNode"])("p",He,Object(n["toDisplayString"])(a.date),1),Object(n["createVNode"])("button",{class:"singleRequest__button",onClick:t[1]||(t[1]=function(){return a.toggleDetails&&a.toggleDetails.apply(a,arguments)})}," Check Details "),c.showDetails?(Object(n["openBlock"])(),Object(n["createBlock"])(n["Teleport"],{key:0,to:"body"},[Object(n["createVNode"])("div",Me,[Object(n["createVNode"])("div",{class:"singleRequest__backdrop",onClick:t[2]||(t[2]=function(){return a.closeDetailView&&a.closeDetailView.apply(a,arguments)})}),Object(n["createVNode"])("div",Ze,[Object(n["createVNode"])("button",{class:"singleRequest__closeButton",onClick:t[3]||(t[3]=function(){return a.closeDetailView&&a.closeDetailView.apply(a,arguments)})}," X "),Object(n["createVNode"])("ul",Ue,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(this.data.changes,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])("li",{class:"singleRequest__listElement",key:t},[Object(n["createVNode"])("h4",null,Object(n["toDisplayString"])(t),1),Object(n["createVNode"])("div",We,[Object(n["createVNode"])("p",{class:["singleRequest__state",a.computeClass(e[0])]},Object(n["toDisplayString"])(a.deviceState(e[0])),3),Je,Object(n["createVNode"])("p",{class:["singleRequest__state",a.computeClass(e[1])]},Object(n["toDisplayString"])(a.deviceState(e[1])),3)])])})),128))])])])])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])("div",Ke,[this.data.result?(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:0})):(Object(n["openBlock"])(),Object(n["createBlock"])(i,{key:1}))])])}o("1276");var Ge={class:"protocolBox__checkmarkIconBox"},Qe=Object(n["createVNode"])("span",{class:"protocolBox__checkmarkIcon"},null,-1);function Ye(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])("div",Ge,[Qe])}o("4c5c");const $e={};$e.render=Ye;var et=$e,tt={class:"protocolBox__dangerIconBox"},ot=Object(n["createVNode"])("span",{class:"protocolBox__dangerIcon"},null,-1);function nt(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])("div",tt,[ot])}o("f4a7");const rt={};rt.render=nt;var ct=rt,at={components:{OkCheckmark:et,DangerCheckmark:ct},props:["data"],data:function(){return{showDetails:!1}},computed:{date:function(){var e=this.data.date.split(",")[1];return e}},methods:{toggleDetails:function(){this.showDetails=!0},closeDetailView:function(){this.showDetails=!1},deviceState:function(e){return!0===e?"ON":"OFF"},computeClass:function(e){return!0===e?"singleRequest__changes--on":"singleRequest__changes--off"}}};o("342c");at.render=Xe;var st=at,it={components:{RequestList:st},data:function(){return{showList:!1}},methods:{toggleRequestsLog:function(){this.showList=!this.showList},fetchRequestLogData:function(){this.$store.dispatch("setRequstLogData")}},computed:{toggleButtonText:function(){var e;return e=!0===this.showList?"Hide Requests Log":"Show requests Log",e},requestLogData:function(){return this.$store.getters["getRequestLog"]}}};o("2454");it.render=Ee;var lt=it,ut={name:"App",components:{ProtocolInfo:J,UserAuth:D,TheHeader:b,Chart:se,AutoControl:je,RequestLog:lt,BasicCard:Ve,SwitchCard:De},mounted:function(){var e=this;this.$store.dispatch("setRequstLogData"),this.$store.dispatch("fetchRasInfo"),this.$store.dispatch("createSocketConnection"),this.$store.dispatch("setListenerForSockerEvents");var t=this.$store.getters["getSocket"];t.on("currentState",(function(t){e.$store.dispatch("handleSocketData",t)}))},data:function(){return{}},computed:{getRasInfo:function(){return this.$store.getters["getRASInformation"]},token:function(){return this.$store.getters["getToken"]}}};o("f89b");ut.render=a;var pt=ut,dt=o("5530"),bt=o("5502"),ft=o("8e27"),At=o.n(ft),mt=Object(bt["a"])({state:function(){return{token:null,RASInfo:{autoControl:null,currentProtocol:{dataInfo:null,state:null},waterLevel:{textContent:"Water Level:",dataInfo:null,state:null},temperature:{textContent:"Temperature",dataInfo:null},pumps:{waterPump1:{textContent:"Water Pump 1 :",dataInfo:null,state:null,name:"waterPump1",requested:!1},waterPump2:{textContent:"Water Pump 2 :",dataInfo:null,state:!0,name:"waterPump2",requested:!1},airPump1:{textContent:"Air Pump 1 :",dataInfo:null,state:null,name:"airPump1",requested:!1},airPump2:{textContent:"Air Pump 2 :",dataInfo:null,state:null,name:"airPump2",requested:!1}}},requestLogsData:null}},mutations:{setToken:function(e,t){e.token=t},logout:function(e){e.token=null},setRasInfo:function(e,t){var o=t.autoControl,n=t.currentProtocol,r=t.pumps,c=t.waterLevel,a=t.temperature;for(var s in e.RASInfo.autoControl=o,0===n?(e.RASInfo.currentProtocol.dataInfo="DEFAULT",e.RASInfo.currentProtocol.state=0):(e.RASInfo.currentProtocol.dataInfo="BACKUP!",e.RASInfo.currentProtocol.state=1),!0===r.waterPump1?(e.RASInfo.pumps.waterPump1.dataInfo="ON",e.RASInfo.pumps.waterPump1.state=!0):(e.RASInfo.pumps.waterPump1.dataInfo="OFF",e.RASInfo.pumps.waterPump1.state=!1),!0===r.waterPump2?(e.RASInfo.pumps.waterPump2.dataInfo="ON",e.RASInfo.pumps.waterPump2.state=!0):(e.RASInfo.pumps.waterPump2.dataInfo="OFF",e.RASInfo.pumps.waterPump2.state=!1),!0===r.airPump1?(e.RASInfo.pumps.airPump1.dataInfo="ON",e.RASInfo.pumps.airPump1.state=!0):(e.RASInfo.pumps.airPump1.dataInfo="OFF",e.RASInfo.pumps.airPump1.state=!1),!0===r.airPump2?(e.RASInfo.pumps.airPump2.dataInfo="ON",e.RASInfo.pumps.airPump2.state=!0):(e.RASInfo.pumps.airPump2.dataInfo="OFF",e.RASInfo.pumps.airPump2.state=!1),1===c?(e.RASInfo.waterLevel.dataInfo="OK",e.RASInfo.waterLevel.state=1):(e.RASInfo.waterLevel.dataInfo="UNDERLEVEL",e.RASInfo.waterLevel.state=0),e.RASInfo.temperature.dataInfo=null!==a?a+"°C":"NO DATA",e.RASInfo.pumps)e.RASInfo.pumps[s].requested=!1},createSocketConnection:function(e,t){e.io=t},toggleDevice:function(e,t){var o=t.name;e.RASInfo.pumps[o].state=t.state,e.RASInfo.pumps[o].requested=!0},toggleAutoControl:function(e,t){e.RASInfo.autoControl=t},setRequstLogData:function(e,t){e.requestLogsData=t}},actions:{setToken:function(e,t){return Object(V["a"])(regeneratorRuntime.mark((function o(){var n,r,c,a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,fetch("https://project-ras.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:t.userName,password:t.password})});case 3:if(n=o.sent,console.log(n.status),200===n.status){o.next=7;break}throw new Error("Authentication rejected");case 7:return o.next=9,n.json();case 9:r=o.sent,c=r.token,e.commit("setToken",c),o.next=18;break;case 14:throw o.prev=14,o.t0=o["catch"](0),a=o.t0,a;case 18:case"end":return o.stop()}}),o,null,[[0,14]])})))()},logout:function(e){e.commit("logout")},fetchRasInfo:function(e){return Object(V["a"])(regeneratorRuntime.mark((function t(){var o,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://project-ras.herokuapp.com/data");case 3:return o=t.sent,t.next=6,o.json();case 6:n=t.sent,e.commit("setRasInfo",n),t.next=14;break;case 10:throw t.prev=10,t.t0=t["catch"](0),r=new Error(t.t0),r;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},toggleDevice:function(e,t){var o=Object(dt["a"])({},t);o.token=e.getters["getToken"],e.getters["getSocket"].emit("setRequest",o),e.commit("toggleDevice",t)},toggleAutoControl:function(e){var t={};t.autoControl=!e.getters["getAutoControl"],t.token=e.getters["getToken"],e.getters["getSocket"].emit("setRequest",t);var o=t.autoControl;e.commit("toggleAutoControl",o)},createSocketConnection:function(e){var t=At()("https://project-ras.herokuapp.com");e.commit("createSocketConnection",t)},handleSocketData:function(e,t){e.commit("setRasInfo",t)},setListenerForSockerEvents:function(e){var t=e.getters["getSocket"];t.on("currentState",(function(t){e.commit("setRasInfo",t)}))},setRequstLogData:function(e){return Object(V["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://project-ras.herokuapp.com/requestLogData");case 2:return o=t.sent,t.next=5,o.json();case 5:n=t.sent,e.commit("setRequstLogData",n);case 7:case"end":return t.stop()}}),t)})))()}},getters:{getToken:function(e){return e.token},getRASInformation:function(e){return e.RASInfo},getAutoControl:function(e){return e.RASInfo.autoControl},getSocket:function(e){return e.io},getRequestLog:function(e){return e.requestLogsData},getRequestedValue:function(e){return function(t){return e.RASInfo.pumps[t].requested}}}}),Ot=mt,ht=Object(n["createApp"])(pt);ht.use(Ot),ht.component("loader",y),ht.component("checkbox",he),ht.mount("#app")},5990:function(e,t,o){},"5b50":function(e,t,o){"use strict";o("4ad5")},6776:function(e,t,o){"use strict";o("1184")},"6ecd":function(e,t,o){},"743e":function(e,t,o){"use strict";o("a4c2")},"79e2":function(e,t,o){},"8dd0":function(e,t,o){},"8f69":function(e,t,o){},a4c2:function(e,t,o){},aa1c:function(e,t,o){},be82:function(e,t,o){},c146:function(e,t,o){},c397:function(e,t,o){"use strict";o("6ecd")},ca20:function(e,t,o){"use strict";o("8f69")},cf05:function(e,t){e.exports="data:image/png;base64,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"},dce4:function(e,t,o){"use strict";o("8dd0")},e15a:function(e,t,o){},ec23:function(e,t,o){},f4a7:function(e,t,o){"use strict";o("438d")},f89b:function(e,t,o){"use strict";o("be82")},fb5f:function(e,t,o){}});
//# sourceMappingURL=app.f5efc6f9.js.map