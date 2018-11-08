(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{596:function(e,a,t){"use strict";t.r(a);var n=t(64),l=t(14),r=t(7),s=t(8),c=t(11),m=t(9),i=t(10),o=t(24),d=t(16),u=t(15),E=t(1),f=t.n(E),h=t(3),p=t(533),b=t.n(p),g=t(552),v=t.n(g),w=t(22),y=(t(556),t(590)),x=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).marks={frequency:{min:384,max:954,data:{384:"Min",450:"",480:"",540:"",600:"",612:"",625:"",636:"",648:"",700:"",720:"",744:"",756:"",768:"",796:"",832:"",852:"",876:"",900:"",924:"",954:"Max"}},voltage:{min:384,max:954,data:{384:"Min",450:"",480:"",540:"",600:"",612:"",625:"",636:"",648:"",700:"",720:"",744:"",756:"",768:"",796:"",832:"",852:"",876:"",900:"",924:"",954:"Max"}},fan:{min:0,max:100,data:{0:"Min",10:"",20:"",30:"",40:"",50:"50%",60:"",70:"",80:"",90:"",100:"Max"}}},t.slider={},t.onSelect=t.onSelect.bind(Object(o.a)(Object(o.a)(t))),t.autoFanSwitchChange=t.autoFanSwitchChange.bind(Object(o.a)(Object(o.a)(t))),t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"onSelect",value:function(e){(0,this.props.onChange)({name:"minerMode",value:e})}},{key:"autoFanSwitchChange",value:function(){var e=this.props,a=e.fan;(0,e.onChange)({name:"fan",value:-1===a?0:-1})}},{key:"render",value:function(){var e=this,a=this.props,t=a.minerMode,n=a.voltage,l=a.fan,r=a.frequency,s=a.onChange;return f.a.createElement(d.I18n,null,function(a){a.i18n;return f.a.createElement("div",{className:"animated fadeIn"},f.a.createElement(h.H,null,f.a.createElement(h.m,{xl:"12"},f.a.createElement(h.f,null,f.a.createElement(h.j,null,f.a.createElement(h.l,null,f.a.createElement(d.Trans,{id:"Miner"})),f.a.createElement(h.k,{className:"text-muted"},f.a.createElement(d.Trans,{id:"Manage miner specific configurations"}))),f.a.createElement(h.g,null,f.a.createElement(h.p,null,f.a.createElement(h.H,{form:!0},f.a.createElement(h.m,{lg:12,xl:4},f.a.createElement("div",null,f.a.createElement("div",{className:"clearfix"},f.a.createElement(w.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"primary",checked:"eco"===t,size:"",onChange:function(){return e.onSelect("eco")},disabled:"eco"===t}),f.a.createElement("h4",null,f.a.createElement("i",{className:"fa fa-leaf mr-2 initialism text-secondary"}),f.a.createElement(d.Trans,{id:"ECO mode"}))),f.a.createElement("div",null,f.a.createElement("p",{className:"text-muted "},f.a.createElement(d.Trans,{id:"In ECO mode your miner will consume less power (about <0>1.0W/MHs</0>) but its hashrate will be slower. This mode is recommende if you want have less noise and less possible to overheat your miner.",components:[f.a.createElement("b",null)]}))))),f.a.createElement(h.m,{lg:12,xl:4},f.a.createElement("div",null,f.a.createElement("div",{className:"clearfix"},f.a.createElement(w.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"success",checked:"turbo"===t,size:"",onChange:function(){return e.onSelect("turbo")},disabled:"turbo"===t}),f.a.createElement("h4",null,f.a.createElement("i",{className:"fa fa-rocket mr-2 initialism text-secondary"}),f.a.createElement(d.Trans,{id:"TURBO mode"}))),f.a.createElement("div",null,f.a.createElement("p",{className:"text-muted "},f.a.createElement(d.Trans,{id:"In Turbo mode your miner will consume more power (about <0>1.4W/MHs</0>) and so its hashrate will be faster. This mode is good to gain the maximum profit but you need to take care of possible overheat.",components:[f.a.createElement("b",null)]}))))),f.a.createElement(h.m,{lg:12,xl:4},f.a.createElement("div",null,f.a.createElement("div",{className:"clearfix"},f.a.createElement(w.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"warning",checked:"custom"===t,size:"",onChange:function(){return e.onSelect("custom")},disabled:"custom"===t}),f.a.createElement("h4",null,f.a.createElement("i",{className:"fa fa-diagnoses mr-2 initialism text-secondary"}),f.a.createElement(d.Trans,{id:"Custom mode"}))),f.a.createElement("div",null,f.a.createElement("p",{className:"text-muted "},f.a.createElement(d.Trans,{id:"In custom mode you can control frequency and voltage of your miner for your specific needs. This mode is for expert users and is not recommended if you don't know what you are doing. You could harm your miner."}))))))))))),"custom"===t&&f.a.createElement(h.H,null,f.a.createElement(h.m,{xl:"12"},f.a.createElement(h.f,null,f.a.createElement(h.j,null,f.a.createElement(h.l,null,f.a.createElement(d.Trans,{id:"Miner custom mode"})),f.a.createElement(h.k,{className:"text-muted"},f.a.createElement(d.Trans,{id:"Personalise your miner configurations"}))),f.a.createElement(h.g,null,f.a.createElement(h.p,null,f.a.createElement(h.H,{form:!0},f.a.createElement(h.m,{lg:12,xl:4},f.a.createElement("div",null,f.a.createElement("div",{className:"clearfix"},f.a.createElement("h4",null,f.a.createElement(d.Trans,{id:"Voltage"})," ",f.a.createElement("b",null,n,f.a.createElement("span",{className:"small"},"V")))),f.a.createElement("div",null,f.a.createElement("p",{className:"text-muted "},f.a.createElement(d.Trans,{id:"You can set your miner custom voltage or <0>reset</0> to default value.",components:[f.a.createElement("a",{href:""})]})),f.a.createElement(h.f,{className:"border-0"},f.a.createElement(h.g,null,f.a.createElement(y.a,{min:e.marks.voltage.min,max:e.marks.voltage.max,marks:e.marks.voltage.data,step:null,value:n,onChange:function(e){return s({value:e,name:"voltage"})}})))))),f.a.createElement(h.m,{lg:12,xl:4},f.a.createElement("div",null,f.a.createElement("div",{className:"clearfix"},f.a.createElement("h4",null,f.a.createElement(d.Trans,{id:"Frequency"})," ",f.a.createElement("b",null,r,f.a.createElement("span",{className:"small"},"MHz")))),f.a.createElement("div",null,f.a.createElement("p",{className:"text-muted "},f.a.createElement(d.Trans,{id:"You can set your miner custom frequency or <0>reset</0> to default value.",components:[f.a.createElement("a",{href:""})]})),f.a.createElement(h.f,{className:"border-0"},f.a.createElement(h.g,null,f.a.createElement(y.a,{min:e.marks.frequency.min,max:e.marks.frequency.max,marks:e.marks.frequency.data,step:null,value:r,onChange:function(e){return s({value:e,name:"frequency"})}})))))),f.a.createElement(h.m,{lg:12,xl:4},f.a.createElement("div",null,f.a.createElement("div",{className:"clearfix"},f.a.createElement(w.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"success",checked:-1===l,onChange:e.autoFanSwitchChange}),f.a.createElement("h4",null,f.a.createElement(d.Trans,{id:"Auto adjust fan"})," ",l>-1?f.a.createElement("b",null,l,f.a.createElement("span",{className:"small"},"%")):null)),f.a.createElement("div",null,f.a.createElement("p",{className:"text-muted "},f.a.createElement(d.Trans,{id:"Keep fan speed at auto mode or turn of it to manually set the fan speed."})),f.a.createElement(h.f,{className:"border-0"},f.a.createElement(h.g,null,f.a.createElement(y.a,{min:e.marks.fan.min,max:e.marks.fan.max,step:10,marks:e.marks.fan.data,disabled:-1===l,value:-1!==l?l:0,onChange:function(e){return s({value:e,name:"fan"})}})))))))))))))})}}]),a}(E.Component),N=t(28),k=t(43),C=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).handleScan=function(){(0,t.props.wifiScanMcu)()},t.handleClick=function(e){t.setState({ssid:e,connected:null})},t.handleConnect=function(e){var a=t.props.wifiConnectMcu;t.setState({connected:!0}),a(t.state)},t.onChange=function(e){t.setState(Object(n.a)({},e.target.name,e.target.value))},t.state={ssid:null,wifiPassword:"",connected:null},t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.wifis,n=a.address,l=this.state,r=l.wifiPassword,s=l.ssid,c=l.connected;return f.a.createElement(d.I18n,null,function(a){a.i18n;return f.a.createElement("div",{className:"animated fadeIn"},f.a.createElement(h.H,null,f.a.createElement(h.m,{lg:"12"},f.a.createElement(h.f,null,f.a.createElement(h.j,null,f.a.createElement(h.l,null,f.a.createElement(d.Trans,{id:"Wifi"})),f.a.createElement(h.k,{className:"text-muted"},f.a.createElement(d.Trans,{id:"Connect your system controller to a Wifi instead using ethernet"}))),f.a.createElement(h.g,null,f.a.createElement(h.H,null,f.a.createElement(h.m,{md:6},f.a.createElement("div",null,f.a.createElement("div",{className:"clearfix"},f.a.createElement("h4",null,f.a.createElement(h.e,{className:"float-left mr-2 text-uppercase",color:"primary",size:"sm",onClick:e.handleScan},f.a.createElement(d.Trans,{id:"Scan"})),f.a.createElement(d.Trans,{id:"Look for Wifi"})),f.a.createElement("div",{className:"mt-1"},f.a.createElement("p",{className:"text-muted "},f.a.createElement(d.Trans,{id:"Clicking the button your system will scan for available wifi networks. Be aware that connecting to a Wifi network you will need to connect to the new Wifi IP address you have to find in your LAN."}))),s&&!c?f.a.createElement(h.p,{className:"mt-4"},f.a.createElement(h.H,{form:!0},f.a.createElement(h.m,{md:12},f.a.createElement(h.q,null,f.a.createElement(h.w,{for:"wifiPassword"},f.a.createElement(d.Trans,{id:"Wifi <0>{ssid}</0> Password",values:{ssid:s},components:[f.a.createElement("b",null)]})),f.a.createElement(h.r,{type:"password",name:"wifiPassword",id:"wifiPassword",value:r,onChange:e.onChange,bsSize:"lg"}))),f.a.createElement(h.m,{md:12},f.a.createElement(h.e,{className:"mr-2 text-uppercase",color:"primary",size:"sm",onClick:e.handleConnect},f.a.createElement(d.Trans,{id:"Connect"}))))):null,c?f.a.createElement("p",{className:"text-muted lead"},f.a.createElement(d.Trans,{id:"Your controller should be connected to <0>{ssid}</0> Wifi now. Try to go to <1>{address}</1> before disconnecting the ethernet cable.",values:{ssid:s,address:n},components:[f.a.createElement("b",null),f.a.createElement("a",{href:"http://"+n,className:"font-weight-bold"})]})):null))),f.a.createElement(h.m,{md:6},f.a.createElement("div",null,f.a.createElement("div",{className:"clearfix"},f.a.createElement("h4",null,f.a.createElement("i",{className:"fa fa-wifi mr-2 initialism text-secondary"}),f.a.createElement(d.Trans,{id:"Wifi networks"}))),t.length||c?f.a.createElement(h.x,null,t.map(function(a,t){return f.a.createElement(h.y,{key:t,className:"border-0"},f.a.createElement(h.e,{color:"link",className:"p-0",onClick:function(){e.handleClick(a.ssid)}},a.ssid),f.a.createElement(h.G,{className:"progress-xs",color:Object(k.d)(a.signal,"inverse"),value:a.signal}),f.a.createElement("small",{className:"text-muted"},"Signal ",f.a.createElement("b",null,a.signal,"%")))})):f.a.createElement("div",{className:""},f.a.createElement("p",{className:"text-muted "},f.a.createElement(d.Trans,{id:"There are no wifi networks available yet. Please click the scan button to look at them."})))))))))))})}}]),a}(E.Component),T=Object(u.connect)(function(e){return{wifis:e.mcuWifiScan.data,address:e.mcuWifiConnect.data}},function(e){return{wifiScanMcu:function(){e(Object(N.j)())},wifiConnectMcu:function(a,t){e(Object(N.i)({ssid:a,password:t}))}}})(C),j=t(36),O=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={password:"",repeatPassword:"",passwordError:"",repeatPasswordError:""},t.handlePasswordChange=t.handlePasswordChange.bind(Object(o.a)(Object(o.a)(t))),t.onChange=t.onChange.bind(Object(o.a)(Object(o.a)(t))),t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"onChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"handlePasswordChange",value:function(){var e=this.state,a=e.password,t=e.repeatPassword,n=this.props.changePassword;a?a===t?n(a):this.setState({passwordError:"Passwords do not match.",repeatPasswordError:"Passwords do not match."}):this.setState({passwordError:"Password is required."})}},{key:"render",value:function(){var e=this,a=this.props,t=a.leftSidebarVisibility,n=a.leftSidebarExtended,l=a.rightSidebarVisibility,r=a.temperatureUnit,s=a.onChange,c=this.state,m=c.password,i=c.repeatPassword,o=c.passwordError,u=c.repeatPasswordError;return f.a.createElement(d.I18n,null,function(a){a.i18n;return f.a.createElement("div",{className:"animated fadeIn"},f.a.createElement(h.h,null,f.a.createElement(h.f,null,f.a.createElement(h.j,null,f.a.createElement(h.l,null,f.a.createElement(d.Trans,{id:"Change lockscreen password"})),f.a.createElement(h.k,{className:"text-muted"},f.a.createElement(d.Trans,{id:"Change the password to access the dashboard"}))),f.a.createElement(h.g,null,f.a.createElement("p",{className:"help-block form-text text-muted"},f.a.createElement(d.Trans,{id:"Changing the password will lock the dashboard. You will need to use the new password to unlock it."})),f.a.createElement(h.p,null,f.a.createElement(h.H,{form:!0},f.a.createElement(h.m,{md:6},f.a.createElement(h.q,null,f.a.createElement(h.w,{for:"password"},f.a.createElement(d.Trans,{id:"Password"})),f.a.createElement(h.r,{type:"password",name:"password",id:"password",bsSize:"lg",value:m,onChange:e.onChange}),f.a.createElement("span",{className:"text-danger"},o))),f.a.createElement(h.m,{md:6},f.a.createElement(h.q,null,f.a.createElement(h.w,{for:"repeatPassword"},f.a.createElement(d.Trans,{id:"Repeat password"})),f.a.createElement(h.r,{type:"password",name:"repeatPassword",id:"repeatPassword",placeholder:"",bsSize:"lg",value:i,onChange:e.onChange}),f.a.createElement("span",{className:"text-danger"},u))),f.a.createElement(h.m,{md:12},f.a.createElement(h.e,{className:"mr-2 text-uppercase",color:"primary",size:"sm",onClick:e.handlePasswordChange},f.a.createElement(d.Trans,{id:"Change"}))))))),f.a.createElement(h.f,null,f.a.createElement(h.j,null,f.a.createElement(h.l,null,f.a.createElement(d.Trans,{id:"Layout options"})),f.a.createElement(h.k,{className:"text-muted"},f.a.createElement(d.Trans,{id:"Manage dashboard specific configurations"}))),f.a.createElement(h.g,null,f.a.createElement(h.p,null,f.a.createElement(h.H,null,f.a.createElement(h.m,{lg:12,xl:6},f.a.createElement(h.x,{flush:!0},f.a.createElement(h.y,null,f.a.createElement("div",{className:"clearfix"},f.a.createElement(w.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"success",checked:t,size:"",onChange:function(){return s({name:"leftSidebarVisibility",value:!t})}}),f.a.createElement("div",null,f.a.createElement(d.Trans,{id:"Left Sidebar visibility"}))),f.a.createElement("div",{className:"mt-1 small text-muted"},f.a.createElement(d.Trans,{id:"Set left sidebar default visibility"}))),f.a.createElement(h.y,null,f.a.createElement("div",{className:"clearfix"},f.a.createElement(w.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"success",checked:n,size:"",onChange:function(){return s({name:"leftSidebarExtended",value:!n})}}),f.a.createElement("div",null,f.a.createElement(d.Trans,{id:"Extended sidebar"}))),f.a.createElement("div",{className:"mt-1 small text-muted"},f.a.createElement(d.Trans,{id:"Keep left sidebar extended or only icons"}))),f.a.createElement(h.y,null,f.a.createElement("div",{className:"clearfix"},f.a.createElement(w.n,{className:"float-left mr-2",variant:"pill",dataOn:"\xb0C",dataOff:"\xb0F",label:!0,color:"success",checked:"c"===r,size:"",onChange:function(){return s({name:"temperatureUnit",value:"f"===r?"c":"f"})}}),f.a.createElement("div",null,f.a.createElement(d.Trans,{id:"Temperature unit"}))),f.a.createElement("div",{className:"mt-1 small text-muted"},f.a.createElement(d.Trans,{id:"Set it to Celsius or Fahrenheit"}))))),f.a.createElement(h.m,{lg:12,xl:6},f.a.createElement(h.x,{flush:!0},f.a.createElement(h.y,null,f.a.createElement("div",{className:"clearfix"},f.a.createElement(w.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"success",checked:l,size:"",onChange:function(){return s({name:"rightSidebarVisibility",value:!l})}}),f.a.createElement("div",null,f.a.createElement(d.Trans,{id:"Right sidebar visibility"}))),f.a.createElement("div",{className:"mt-1 small text-muted"},f.a.createElement(d.Trans,{id:"Set right sidebar default visibility"}))))))))),f.a.createElement(h.f,null,f.a.createElement(h.j,null,f.a.createElement(h.l,null,f.a.createElement(d.Trans,{id:"Backup & Reset"})),f.a.createElement(h.k,{className:"text-muted"},f.a.createElement(d.Trans,{id:"Use this tools to backup, restore and reset configurations"}))),f.a.createElement(h.g,null,f.a.createElement(h.p,null,f.a.createElement(h.H,{form:!0},f.a.createElement(h.m,{md:12},f.a.createElement(h.x,{flush:!0},f.a.createElement(h.y,null,f.a.createElement("div",{className:""},f.a.createElement(h.e,{className:"mr-2 text-uppercase",color:"primary",size:"sm"},f.a.createElement(d.Trans,{id:"Backup"})),f.a.createElement("div",{className:"mt-1 small text-muted"},f.a.createElement(d.Trans,{id:"Create a backup file of dashboard, miner and pools configurations"})))),f.a.createElement(h.y,null,f.a.createElement("div",{className:""},f.a.createElement(h.e,{className:"mr-2 text-uppercase",color:"primary",size:"sm"},f.a.createElement(d.Trans,{id:"Restore"})),f.a.createElement("div",{className:"mt-1 small text-muted"},f.a.createElement(d.Trans,{id:"Restore all configurations from a backup file"})))),f.a.createElement(h.y,null,f.a.createElement("div",{className:""},f.a.createElement(h.e,{className:"mr-2 text-uppercase",color:"danger",size:"sm"},f.a.createElement(d.Trans,{id:"Reset"})),f.a.createElement("div",{className:"mt-1 small text-muted"},f.a.createElement(d.Trans,{id:"Reset all configurations to factory default"}))))))))))))})}}]),a}(E.Component),S=Object(u.connect)(null,function(e){return{changePassword:function(a){e(Object(j.c)({password:a}))}}})(O),P=t(112),M=["minerMode","voltage","frequency","fan"],z=function(e){function a(e){var t;Object(r.a)(this,a);var n=(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).props.settings;return t.state={settings:Object(l.a)({},n)},t.onChange=t.onChange.bind(Object(o.a)(Object(o.a)(t))),t.handleSave=t.handleSave.bind(Object(o.a)(Object(o.a)(t))),t.handleSaveAndRestart=t.handleSaveAndRestart.bind(Object(o.a)(Object(o.a)(t))),t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"onChange",value:function(e){var a=e.name,t=e.value;this.setState(function(e){return{settings:Object(l.a)({},e.settings,Object(n.a)({},a,t))}})}},{key:"handleSave",value:function(){(0,this.props.save)(this.state.settings)}},{key:"handleSaveAndRestart",value:function(){(0,this.props.saveAndRestart)(this.state.settings)}},{key:"render",value:function(){var e=this.state,a=e.settings,t=a.minerMode,n=a.voltage,l=a.frequency,r=a.fan,s=a.leftSidebarVisibility,c=a.leftSidebarExtended,m=a.rightSidebarVisibility,i=a.temperatureUnit,o=e.settings,u=this.props.oldSettings,E=!b()(o,u),p=!b()(v()(o,M),v()(u,M));return f.a.createElement("div",{className:"animated fadeIn"},E&&f.a.createElement(h.H,null,f.a.createElement(h.m,{lg:"12"},f.a.createElement(h.f,null,f.a.createElement(h.j,{className:"bg-dark"},!p&&f.a.createElement(h.e,{size:"sm",className:"btn-success text-uppercase mr-2",disabled:!E,onClick:this.handleSave},f.a.createElement(d.Trans,{id:"Save"})),p&&f.a.createElement(h.e,{size:"sm",className:"btn-warning text-uppercase",onClick:this.handleSaveAndRestart},f.a.createElement(d.Trans,{id:"Save & Restart"})),p&&f.a.createElement("span",{className:"ml-2"},f.a.createElement(d.Trans,{id:"You need to restart your miner to apply changes."})),!p&&E&&f.a.createElement("span",{className:"ml-2"},f.a.createElement(d.Trans,{id:"You need to save your settings to apply changes (miner won't be restarted)."})))))),f.a.createElement(x,Object.assign({minerMode:t,voltage:n,frequency:l,fan:r},{onChange:this.onChange})),f.a.createElement(T,null),f.a.createElement(S,Object.assign({leftSidebarVisibility:s,leftSidebarExtended:c,rightSidebarVisibility:m,temperatureUnit:i},{onChange:this.onChange})),f.a.createElement("p",null))}}]),a}(E.Component),q=Object(u.connect)(function(e){return{settings:e.settings,oldSettings:e.settings}},function(e){return{save:function(a){e(Object(P.b)(a))},saveAndRestart:function(a){e(Object(P.c)(a))}}})(z);a.default=q}}]);
//# sourceMappingURL=3.42eda361.chunk.js.map