(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{595:function(e,a,t){"use strict";t.r(a);var n=t(65),l=t(7),r=t(8),c=t(9),s=t(11),i=t(10),m=t(12),o=t(25),u=t(16),d=t(15),E=t(1),f=t.n(E),h=t(3),p=t(534),b=t.n(p),g=t(553),v=t.n(g),w=t(23),k=(t(557),t(591)),C=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(i.a)(a).call(this,e))).marks={frequency:{min:299,max:858,step:13,data:{299:"Min",439:"439MHz",579:"579MHz",719:"719MHz",858:"Max"}},voltage:{min:644,max:911,step:4.15,data:{644:"Min",710.75:"710.75V",777.5:"777.5V",845.25:"845.25V",911:"Max"}},fan:{min:0,max:100,data:{0:"Min",25:"25%",50:"50%",75:"75%",100:"Max"}}},t.state={autoFan:0===e.fan},t.onSelect=t.onSelect.bind(Object(o.a)(Object(o.a)(t))),t.autoFanSwitchChange=t.autoFanSwitchChange.bind(Object(o.a)(Object(o.a)(t))),t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"onSelect",value:function(e){(0,this.props.onChange)({name:"minerMode",value:e})}},{key:"autoFanSwitchChange",value:function(){var e=this.props,a=(e.fan,e.onChange);this.setState({autoFan:!this.state.autoFan}),a({name:"fan",value:this.state.autoFan?50:0})}},{key:"render",value:function(){var e=this,a=this.props,t=a.minerMode,n=a.voltage,l=a.fan,r=(a.customApproval,a.frequency),c=a.onChange;return f.a.createElement(u.I18n,null,function(a){a.i18n;return f.a.createElement("div",{className:"animated fadeIn"},f.a.createElement(h.H,null,f.a.createElement(h.m,{xl:"12"},f.a.createElement(h.f,null,f.a.createElement(h.j,null,f.a.createElement(h.l,null,f.a.createElement("i",{className:"fa fa-hdd mr-2"}),f.a.createElement(u.Trans,{id:"Miner"})),f.a.createElement(h.k,{className:"text-muted"},f.a.createElement(u.Trans,{id:"Manage miner specific configurations"}))),f.a.createElement(h.g,null,f.a.createElement(h.p,null,f.a.createElement(h.H,{form:!0},f.a.createElement(h.m,{lg:12,xl:4},f.a.createElement("div",null,f.a.createElement("div",{className:"clearfix"},f.a.createElement(w.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"success",checked:"eco"===t,size:"",onChange:function(){return e.onSelect("eco")},disabled:"eco"===t}),f.a.createElement("h4",null,f.a.createElement("i",{className:"fa fa-leaf mr-2 initialism text-secondary"}),f.a.createElement(u.Trans,{id:"ECO"}))),f.a.createElement("div",null,f.a.createElement("p",{className:"text-muted "},f.a.createElement(u.Trans,{id:"In ECO mode your miner will consume less power (about <0>1.0W/MHs</0>) but its hashrate will be slower.",components:[f.a.createElement("b",null)]}))))),f.a.createElement(h.m,{lg:12,xl:4},f.a.createElement("div",null,f.a.createElement("div",{className:"clearfix"},f.a.createElement(w.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"primary",checked:"balanced"===t,size:"",onChange:function(){return e.onSelect("balanced")},disabled:"balanced"===t}),f.a.createElement("h4",null,f.a.createElement("i",{className:"fa fa-balance-scale mr-2 initialism text-secondary"}),f.a.createElement(u.Trans,{id:"BALANCED"}))),f.a.createElement("div",null,f.a.createElement("p",{className:"text-muted "},f.a.createElement(u.Trans,{id:"In BALANCED mode your miner will consume a bit more power (about <0>1.2W/MHs</0>) and its hashrate will be a bit faster.",components:[f.a.createElement("b",null)]}))))),f.a.createElement(h.m,{lg:12,xl:4},f.a.createElement("div",null,f.a.createElement("div",{className:"clearfix"},f.a.createElement(w.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"warning",checked:"turbo"===t,size:"",onChange:function(){return e.onSelect("turbo")},disabled:"turbo"===t}),f.a.createElement("h4",null,f.a.createElement("i",{className:"fa fa-rocket mr-2 initialism text-secondary"}),f.a.createElement(u.Trans,{id:"TURBO"}))),f.a.createElement("div",null,f.a.createElement("p",{className:"text-muted "},f.a.createElement(u.Trans,{id:"In Turbo mode your miner will consume more power (about <0>1.4W/MHs</0>) and so its hashrate will be faster.",components:[f.a.createElement("b",null)]}))))))))))),f.a.createElement(h.H,null,f.a.createElement(h.m,{xl:"12"},f.a.createElement(h.f,null,f.a.createElement(h.j,null,f.a.createElement(w.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"danger",checked:"custom"===t,size:"",onChange:function(){return e.onSelect("custom")},disabled:"custom"===t}),f.a.createElement(h.l,null,f.a.createElement("i",{className:"fa fa-diagnoses mr-2"}),f.a.createElement(u.Trans,{id:"Miner custom mode"})),f.a.createElement(h.k,{className:"text-muted"},f.a.createElement(u.Trans,{id:"DANGER zone!"}))),f.a.createElement(h.g,null,f.a.createElement("div",{className:"lead"},f.a.createElement("p",{className:"text-muted "},f.a.createElement(u.Trans,{id:"The Apollo comes with tuned preset values (look above) which offer a good range of operating modes, by selecting custom you risk damaging your device and FutureBit will not be responsible for any or all damage caused by over-clocking or over-volting"}))),"custom"===t&&f.a.createElement(h.p,null,f.a.createElement(h.H,{form:!0},f.a.createElement(h.m,{lg:12,xl:6},f.a.createElement("div",null,f.a.createElement("div",{className:"clearfix"},f.a.createElement("h4",null,f.a.createElement(u.Trans,{id:"Voltage"})," ",f.a.createElement("b",null,n,f.a.createElement("span",{className:"small"},"V")))),f.a.createElement("div",null,f.a.createElement("p",{className:"text-muted "},f.a.createElement(u.Trans,{id:"You can set your miner custom voltage or <0>reset</0> to default value.",components:[f.a.createElement("a",{href:""})]})),f.a.createElement(h.f,{className:"border-0"},f.a.createElement(h.g,null,f.a.createElement(k.a,{min:e.marks.voltage.min,max:e.marks.voltage.max,marks:e.marks.voltage.data,step:e.marks.voltage.step,value:n,onChange:function(e){return c({value:e,name:"voltage"})}})))))),f.a.createElement(h.m,{lg:12,xl:6},f.a.createElement("div",null,f.a.createElement("div",{className:"clearfix"},f.a.createElement("h4",null,f.a.createElement(u.Trans,{id:"Frequency"})," ",f.a.createElement("b",null,r,f.a.createElement("span",{className:"small"},"MHz")))),f.a.createElement("div",null,f.a.createElement("p",{className:"text-muted "},f.a.createElement(u.Trans,{id:"You can set your miner custom frequency or <0>reset</0> to default value.",components:[f.a.createElement("a",{href:""})]})),f.a.createElement(h.f,{className:"border-0"},f.a.createElement(h.g,null,f.a.createElement(k.a,{min:e.marks.frequency.min,max:e.marks.frequency.max,marks:e.marks.frequency.data,step:e.marks.frequency.step,value:r,onChange:function(e){return c({value:e,name:"frequency"})}})))))))))))),f.a.createElement(h.H,null,f.a.createElement(h.m,{xl:"12"},f.a.createElement(h.f,null,f.a.createElement(h.j,null,f.a.createElement(h.l,null,f.a.createElement("i",{className:"fa fa-wind mr-2"}),f.a.createElement(u.Trans,{id:"Miner fan speed"})),f.a.createElement(h.k,{className:"text-muted"},f.a.createElement(u.Trans,{id:"Adjust the fan speed or set it automatic"}))),f.a.createElement(h.g,null,f.a.createElement(h.p,null,f.a.createElement(h.H,{form:!0},f.a.createElement(h.m,{lg:12,xl:6},f.a.createElement("div",null,f.a.createElement("div",{className:"clearfix"},f.a.createElement("h4",null,"Fan ",l?f.a.createElement("span",null,"at ",f.a.createElement("b",null,l,f.a.createElement("span",{className:"small"},"%"))):f.a.createElement(h.b,{size:"sm",color:"success"},"Auto"))),f.a.createElement("div",null,f.a.createElement("p",{className:"text-muted "},f.a.createElement(u.Trans,{id:"Put the slider to the minimum to set automatic fan speed, or choose yours."})),f.a.createElement(h.f,{className:"border-0"},f.a.createElement(h.g,null,f.a.createElement(k.a,{min:e.marks.fan.min,max:e.marks.fan.max,step:5,marks:e.marks.fan.data,value:l,onChange:function(e){return c({value:e,name:"fan"})}})))))))))))))})}}]),a}(E.Component),N=t(20),y=t(45),x=t(38),j=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(i.a)(a).call(this,e))).handleScan=function(){(0,t.props.wifiScanMcu)()},t.handleClick=function(e){t.setState({ssid:e,connected:null})},t.handleConnect=function(e){var a=t.props.wifiConnectMcu;t.setState({connected:!0}),a({ssid:t.state.ssid,passphrase:t.state.wifiPassword}),e.preventDefault()},t.handleDisconnect=function(){var e=t.props.wifiDisconnectMcu;t.setState({ssid:null,connected:!1}),e()},t.onChange=function(e){t.setState(Object(n.a)({},e.target.name,e.target.value))},t.state={ssid:null,wifiPassword:"",connected:null},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.loadingWifiScan,n=a.loadingWifiConnect,l=a.loadingWifiDisconnect,r=a.wifiError,c=a.wifis,s=a.address,i=a.mcu,m=this.state,o=m.wifiPassword,d=m.ssid,E=m.connected;return f.a.createElement(u.I18n,null,function(a){a.i18n;return f.a.createElement("div",{className:"animated fadeIn"},f.a.createElement(h.H,null,f.a.createElement(h.m,{lg:"12"},f.a.createElement(h.f,null,f.a.createElement(h.j,null,f.a.createElement(h.l,null,f.a.createElement("i",{className:"fa fa-wifi mr-2"}),f.a.createElement(u.Trans,{id:"Wifi"})),f.a.createElement(h.k,{className:"text-muted"},f.a.createElement(u.Trans,{id:"Connect your system controller to a Wifi instead using ethernet"}))),f.a.createElement(h.g,null,f.a.createElement(h.H,null,f.a.createElement(h.m,{md:6},f.a.createElement("div",null,f.a.createElement("div",{className:"clearfix"},f.a.createElement("h4",null,i.stats.activeWifi&&f.a.createElement("div",{className:"d-inline mr-2"},f.a.createElement("small",{className:"text-muted"},"Active wifi")," ",f.a.createElement(h.b,{color:"success",pill:!0},i.stats.activeWifi)),f.a.createElement("div",{className:i.stats.activeWifi?"d-inline":"d-inline-block"},f.a.createElement(h.e,{className:"float-left mr-2 text-uppercase",color:"warning",size:"sm",disabled:l,onClick:e.handleDisconnect},f.a.createElement(u.Trans,{id:"Disconnect"})),f.a.createElement(h.e,{className:"float-left mr-2 text-uppercase",color:"primary",size:"sm",disabled:l,onClick:e.handleScan},f.a.createElement(u.Trans,{id:"Scan"})))),f.a.createElement("div",{className:"mt-1"},f.a.createElement("p",{className:"text-muted "},f.a.createElement(u.Trans,{id:"Clicking the button your system will scan for available wifi networks. Clicking one of the available ssid will require to input the passphrase. Clicking the disconnect button will delete every wifi connections, if you are in trouble try to click disconnect before trying anything else."}))),d&&!E?f.a.createElement(h.p,{onSubmit:e.handleConnect,className:"mt-4"},f.a.createElement(h.H,{form:!0},f.a.createElement(h.m,{md:12},f.a.createElement(h.q,null,f.a.createElement(h.w,{for:"wifiPassword"},f.a.createElement(u.Trans,{id:"Wifi <0>{ssid}</0> Password",values:{ssid:d},components:[f.a.createElement("b",null)]})),f.a.createElement(h.r,{type:"password",name:"wifiPassword",id:"wifiPassword",value:o,onChange:e.onChange,bsSize:"lg"}))),f.a.createElement(h.m,{md:12},f.a.createElement(h.e,{className:"mr-2 text-uppercase",color:"primary",size:"sm",onClick:e.handleConnect},f.a.createElement(u.Trans,{id:"Connect"}))))):null,E&&f.a.createElement("div",{className:"text-muted lead"},n?f.a.createElement(x.a,null):r?f.a.createElement(h.a,{color:"warning"},"There was a problem connecting to the wifi, please doucle check the password. ",f.a.createElement("b",null,r)):f.a.createElement(h.a,{color:"success"},"Your controller should be connected to ",f.a.createElement("b",null,d)," Wifi now. Try to go to ",f.a.createElement("a",{href:"http://"+s,className:"font-weight-bold"},s)," before disconnecting the ethernet cable."))))),f.a.createElement(h.m,{md:6},f.a.createElement("div",null,f.a.createElement("div",{className:"clearfix"},f.a.createElement("h4",null,f.a.createElement("i",{className:"fa fa-wifi mr-2 initialism text-secondary"}),f.a.createElement(u.Trans,{id:"Wifi networks"}))),t||l?f.a.createElement(x.a,null):c&&c.length?f.a.createElement(h.x,null,c.map(function(a,t){return f.a.createElement(h.y,{key:t,className:"border-0"},f.a.createElement(h.e,{color:"link",className:"p-0",onClick:function(){e.handleClick(a.ssid)}},a.ssid),f.a.createElement(h.G,{className:"progress-xs",color:Object(y.d)(a.signal,"inverse"),value:a.signal}),f.a.createElement("small",{className:"text-muted"},"Signal ",f.a.createElement("b",null,a.signal,"%")))})):f.a.createElement("div",{className:""},f.a.createElement("p",{className:"text-muted "},f.a.createElement(u.Trans,{id:"There are no wifi networks available yet. Please click the scan button to look at them."})))))))))))})}}]),a}(E.Component),O=Object(d.connect)(function(e){return{wifis:e.mcuWifiScan.data,loadingWifiScan:e.mcuWifiScan.loading,address:e.mcuWifiConnect.data,wifiError:e.mcuWifiConnect.error,loadingWifiConnect:e.mcuWifiConnect.loading,loadingWifiDisconnect:e.mcuWifiDisconnect.loading,mcu:e.mcuStats.data}},function(e){return{wifiScanMcu:function(){e(Object(N.p)())},wifiConnectMcu:function(a){var t=a.ssid,n=a.passphrase;e(Object(N.n)({ssid:t,passphrase:n}))},wifiDisconnectMcu:function(){e(Object(N.o)())}}})(j),S=t(174),T=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(i.a)(a).call(this,e))).state={content:"",backupError:""},t.onChange=t.onChange.bind(Object(o.a)(Object(o.a)(t))),t.handleRestore=t.handleRestore.bind(Object(o.a)(Object(o.a)(t))),t.handleClose=t.handleClose.bind(Object(o.a)(Object(o.a)(t))),t.handleFileChosen=t.handleFileChosen.bind(Object(o.a)(Object(o.a)(t))),t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"onChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"handleRestore",value:function(){var e=this.state,a=e.content,t=(e.backupError,this.props),n=t.toggleRestoreModal,l=t.restoreConfiguration;if(a){var r="";try{r=JSON.parse(a)}catch(c){return void this.setState({backupError:"Invalid backup file"})}r.settings&&r.pools?(l(r),n(!1)):this.setState({backupError:"Invalid backup file"})}else this.setState({backupError:"Backup file is required."})}},{key:"handleClose",value:function(){(0,this.props.toggleRestoreModal)(!1)}},{key:"handleFileChosen",value:function(e){var a=this,t=(this.state.content,new FileReader);t.onload=function(e){a.setState({content:e.target.result})},t.readAsText(e)}},{key:"render",value:function(){var e=this,a=this.props,t=a.show,n=a.className,l=this.state.backupError;return f.a.createElement("div",null,f.a.createElement(h.z,{isOpen:t,className:n,size:"md"},f.a.createElement(h.C,{className:"bg-light"},"Restore backup configuration"),f.a.createElement(h.A,null,f.a.createElement("div",{className:"animated fadeIn"},f.a.createElement(h.H,null,f.a.createElement(h.m,{lg:"12"},f.a.createElement(h.f,{className:"border-0"},f.a.createElement(h.g,null,f.a.createElement(h.q,{className:"mb-0"},f.a.createElement(h.r,{type:"file",name:"backup",id:"backup",bsSize:"lg",onChange:function(a){return e.handleFileChosen(a.target.files[0])}}),f.a.createElement("span",{className:"text-danger"},l)))))))),f.a.createElement(h.B,null,f.a.createElement(h.e,{onClick:this.handleClose},"Close"),f.a.createElement(h.e,{color:"primary",onClick:this.handleRestore},"Restore"))))}}]),a}(E.Component),M=Object(d.connect)(function(e){return{show:e.backup.status}},function(e){return{toggleRestoreModal:function(a){e(Object(S.d)({status:a}))},restoreConfiguration:function(a){e(Object(S.c)({backup:a}))}}})(T),R=t(29),z=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(i.a)(a).call(this,e))).state={password:"",repeatPassword:"",passwordError:"",repeatPasswordError:""},t.handlePasswordChange=t.handlePasswordChange.bind(Object(o.a)(Object(o.a)(t))),t.onChange=t.onChange.bind(Object(o.a)(Object(o.a)(t))),t.handleBackupConfiguration=t.handleBackupConfiguration.bind(Object(o.a)(Object(o.a)(t))),t.handletoggleRestoreModal=t.handletoggleRestoreModal.bind(Object(o.a)(Object(o.a)(t))),t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"onChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"handlePasswordChange",value:function(){var e=this.state,a=e.password,t=e.repeatPassword,n=this.props.changePassword;a?a===t?n(a):this.setState({passwordError:"Passwords do not match.",repeatPasswordError:"Passwords do not match."}):this.setState({passwordError:"Password is required."})}},{key:"handleBackupConfiguration",value:function(){(0,this.props.backupConfiguration)()}},{key:"handletoggleRestoreModal",value:function(){(0,this.props.toggleRestoreModal)(!0)}},{key:"render",value:function(){var e=this,a=this.props,t=a.leftSidebarVisibility,n=a.leftSidebarExtended,l=a.rightSidebarVisibility,r=a.temperatureUnit,c=a.onChange,s=this.state,i=s.password,m=s.repeatPassword,o=s.passwordError,d=s.repeatPasswordError;return f.a.createElement(u.I18n,null,function(a){a.i18n;return f.a.createElement("div",{className:"animated fadeIn"},f.a.createElement(h.h,null,f.a.createElement(h.f,null,f.a.createElement(h.j,null,f.a.createElement(h.l,null,f.a.createElement("i",{className:"fa fa-key mr-2"}),f.a.createElement(u.Trans,{id:"Change lockscreen password"})),f.a.createElement(h.k,{className:"text-muted"},f.a.createElement(u.Trans,{id:"Change the password to access the dashboard"}))),f.a.createElement(h.g,null,f.a.createElement("p",{className:"help-block form-text text-muted"},f.a.createElement(u.Trans,{id:"Changing the password will lock the dashboard. You will need to use the new password to unlock it."})),f.a.createElement(h.p,null,f.a.createElement(h.H,{form:!0},f.a.createElement(h.m,{md:6},f.a.createElement(h.q,null,f.a.createElement(h.w,{for:"password"},f.a.createElement(u.Trans,{id:"Password"})),f.a.createElement(h.r,{type:"password",name:"password",id:"password",bsSize:"lg",value:i,onChange:e.onChange}),f.a.createElement("span",{className:"text-danger"},o))),f.a.createElement(h.m,{md:6},f.a.createElement(h.q,null,f.a.createElement(h.w,{for:"repeatPassword"},f.a.createElement(u.Trans,{id:"Repeat password"})),f.a.createElement(h.r,{type:"password",name:"repeatPassword",id:"repeatPassword",placeholder:"",bsSize:"lg",value:m,onChange:e.onChange}),f.a.createElement("span",{className:"text-danger"},d))),f.a.createElement(h.m,{md:12},f.a.createElement(h.e,{className:"mr-2 text-uppercase",color:"primary",size:"sm",onClick:e.handlePasswordChange},f.a.createElement(u.Trans,{id:"Change"}))))))),f.a.createElement(h.f,null,f.a.createElement(h.j,null,f.a.createElement(h.l,null,f.a.createElement("i",{className:"fa fa-sliders-h mr-2"}),f.a.createElement(u.Trans,{id:"Layout options"})),f.a.createElement(h.k,{className:"text-muted"},f.a.createElement(u.Trans,{id:"Manage dashboard specific configurations"}))),f.a.createElement(h.g,null,f.a.createElement(h.p,null,f.a.createElement(h.H,null,f.a.createElement(h.m,{lg:12,xl:6},f.a.createElement(h.x,{flush:!0},f.a.createElement(h.y,null,f.a.createElement("div",{className:"clearfix"},f.a.createElement(w.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"success",checked:t,size:"",onChange:function(){return c({name:"leftSidebarVisibility",value:!t})}}),f.a.createElement("div",null,f.a.createElement(u.Trans,{id:"Left Sidebar visibility"}))),f.a.createElement("div",{className:"mt-1 small text-muted"},f.a.createElement(u.Trans,{id:"Set left sidebar default visibility"}))),f.a.createElement(h.y,null,f.a.createElement("div",{className:"clearfix"},f.a.createElement(w.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"success",checked:n,size:"",onChange:function(){return c({name:"leftSidebarExtended",value:!n})}}),f.a.createElement("div",null,f.a.createElement(u.Trans,{id:"Extended sidebar"}))),f.a.createElement("div",{className:"mt-1 small text-muted"},f.a.createElement(u.Trans,{id:"Keep left sidebar extended or only icons"}))),f.a.createElement(h.y,null,f.a.createElement("div",{className:"clearfix"},f.a.createElement(w.n,{className:"float-left mr-2",variant:"pill",dataOn:"\xb0C",dataOff:"\xb0F",label:!0,color:"success",checked:"c"===r,size:"",onChange:function(){return c({name:"temperatureUnit",value:"f"===r?"c":"f"})}}),f.a.createElement("div",null,f.a.createElement(u.Trans,{id:"Temperature unit"}))),f.a.createElement("div",{className:"mt-1 small text-muted"},f.a.createElement(u.Trans,{id:"Set it to Celsius or Fahrenheit"}))))),f.a.createElement(h.m,{lg:12,xl:6},f.a.createElement(h.x,{flush:!0},f.a.createElement(h.y,null,f.a.createElement("div",{className:"clearfix"},f.a.createElement(w.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"success",checked:l,size:"",onChange:function(){return c({name:"rightSidebarVisibility",value:!l})}}),f.a.createElement("div",null,f.a.createElement(u.Trans,{id:"Right sidebar visibility"}))),f.a.createElement("div",{className:"mt-1 small text-muted"},f.a.createElement(u.Trans,{id:"Set right sidebar default visibility"}))))))))),f.a.createElement(h.f,null,f.a.createElement(h.j,null,f.a.createElement(h.l,null,f.a.createElement("i",{className:"fa fa-save mr-2"}),f.a.createElement(u.Trans,{id:"Backup & Reset"})),f.a.createElement(h.k,{className:"text-muted"},f.a.createElement(u.Trans,{id:"Use this tools to backup, restore and reset configurations"}))),f.a.createElement(h.g,null,f.a.createElement(h.p,null,f.a.createElement(h.H,{form:!0},f.a.createElement(h.m,{md:12},f.a.createElement(h.x,{flush:!0},f.a.createElement(h.y,null,f.a.createElement("div",{className:""},f.a.createElement(h.e,{className:"mr-2 text-uppercase",color:"primary",size:"sm",onClick:e.handleBackupConfiguration},f.a.createElement(u.Trans,{id:"Backup"})),f.a.createElement("div",{className:"mt-1 small text-muted"},f.a.createElement(u.Trans,{id:"Create a backup file of dashboard, miner and pools configurations"})))),f.a.createElement(h.y,null,f.a.createElement("div",{className:""},f.a.createElement(h.e,{className:"mr-2 text-uppercase",color:"primary",size:"sm",onClick:e.handletoggleRestoreModal},f.a.createElement(u.Trans,{id:"Restore"})),f.a.createElement("div",{className:"mt-1 small text-muted"},f.a.createElement(u.Trans,{id:"Restore all configurations from a backup file"}))))))))))),f.a.createElement(M,null))})}}]),a}(E.Component),P=Object(d.connect)(null,function(e){return{changePassword:function(a){e(Object(R.e)({password:a}))},backupConfiguration:function(){e(Object(S.b)())},toggleRestoreModal:function(a){e(Object(S.d)({status:a}))}}})(z),W=t(74),H=["minerMode","frequency"],A=function(e){function a(e){var t;Object(r.a)(this,a);var n=(t=Object(s.a)(this,Object(i.a)(a).call(this,e))).props.settings;return t.state={settings:Object(l.a)({},n)},t.onChange=t.onChange.bind(Object(o.a)(Object(o.a)(t))),t.handleSave=t.handleSave.bind(Object(o.a)(Object(o.a)(t))),t.handleSaveAndRestart=t.handleSaveAndRestart.bind(Object(o.a)(Object(o.a)(t))),t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"onChange",value:function(e){var a=e.name,t=e.value;this.setState(function(e){return{settings:Object(l.a)({},e.settings,Object(n.a)({},a,t))}})}},{key:"handleSave",value:function(){(0,this.props.save)(this.state.settings)}},{key:"handleSaveAndRestart",value:function(){(0,this.props.saveAndRestart)(this.state.settings)}},{key:"render",value:function(){var e=this.state,a=e.settings,t=a.minerMode,n=a.voltage,l=a.frequency,r=a.fan,c=a.customApproval,s=a.leftSidebarVisibility,i=a.leftSidebarExtended,m=a.rightSidebarVisibility,o=a.temperatureUnit,d=e.settings,E=this.props.oldSettings,p=!b()(d,E),g=!b()(v()(d,H),v()(E,H));return f.a.createElement("div",{className:"animated fadeIn"},p&&f.a.createElement(h.H,null,f.a.createElement(h.m,{lg:"12"},f.a.createElement(h.f,null,f.a.createElement(h.j,{className:"bg-dark"},!g&&f.a.createElement(h.e,{size:"sm",className:"btn-success text-uppercase mr-2",disabled:!p,onClick:this.handleSave},f.a.createElement(u.Trans,{id:"Save"})),g&&f.a.createElement(h.e,{size:"sm",className:"btn-warning text-uppercase",onClick:this.handleSaveAndRestart},f.a.createElement(u.Trans,{id:"Save & Restart"})),g&&f.a.createElement("span",{className:"ml-2"},f.a.createElement(u.Trans,{id:"You need to restart your miner to apply changes."})),!g&&p&&f.a.createElement("span",{className:"ml-2"},f.a.createElement(u.Trans,{id:"You need to save your settings to apply changes (miner won't be restarted)."})))))),f.a.createElement(C,Object.assign({minerMode:t,voltage:n,frequency:l,fan:r,customApproval:c},{onChange:this.onChange})),f.a.createElement(O,null),f.a.createElement(P,Object.assign({leftSidebarVisibility:s,leftSidebarExtended:i,rightSidebarVisibility:m,temperatureUnit:o},{onChange:this.onChange})),f.a.createElement("p",null))}}]),a}(E.Component),q=Object(d.connect)(function(e){return{settings:e.settings,oldSettings:e.settings}},function(e){return{save:function(a){e(Object(W.b)(a))},saveAndRestart:function(a){e(Object(W.c)(a))}}})(A);a.default=q}}]);
//# sourceMappingURL=3.eba9835f.chunk.js.map