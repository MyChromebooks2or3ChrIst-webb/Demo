(function(t){function e(e){for(var n,i,l=e[0],c=e[1],o=e[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,l=1;l<a.length;l++){var c=a[l];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h1",[t._v("DEMO")]),a("center",[t._v("This is a demo")]),a("br"),a("hr"),a("br"),a("sender",{attrs:{name:"Sender",g1:t.g1,g2:t.g2,z:t.z,u1:t.u1,u2:t.u2,kappa:t.kappa,flag_s:t.flag_s},on:{updateCT:t.updateCT,switchAll:t.switchAll}}),a("receiver",{attrs:{name:"Receiver",C1:t.C1,C2:t.C2,D1:t.D1,D2:t.D2,E:t.E,C:t.C,flag_r:t.flag_r},on:{updatePK:t.updatePK,switchS:t.switchS,switchAll:t.switchAll}})],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{staticClass:"sender",attrs:{xs:24,sm:24,md:24,lg:12}},[a("h1",[t._v(t._s(t.name))]),a("br"),a("v-row",{staticClass:"block_message",staticStyle:{"text-align":"left"}},[a("v-col",{attrs:{span:"4"}}),a("v-col",{attrs:{span:"16"}},[a("v-steps",{attrs:{current:t.flag-1}},[a("v-step",{attrs:{title:"Enc",description:"Encrypt your message"}}),a("v-step",{attrs:{title:"Connect",description:"Connect to blockchain"}}),a("v-step",{attrs:{title:"Deploy",description:"Deploy smart contract"}}),a("v-step",{attrs:{title:"Store",description:"Store a tag"}})],1)],1),a("v-col",{attrs:{span:"1"}}),a("v-col",{attrs:{span:"3"}},[a("v-button",{attrs:{type:"primary",disabled:t.flag_s},on:{click:t.next}},[t._v(" next "),a("v-icon",{attrs:{type:"right"}})],1)],1)],1),a("v-row",{staticClass:"block_message",staticStyle:{"text-align":"left"}},[a("v-col",{attrs:{span:"4"}}),a("v-col",{attrs:{span:"16"}},[a("v-card",{staticClass:"block_message",attrs:{title:"Receiver's PK"}},[t._v(" g1 = "+t._s(t.g1)+" "),a("br"),t._v(" g2 = "+t._s(t.g2)+" "),a("br"),t._v(" z = "+t._s(t.z)+" "),a("br"),t._v(" u1 = "+t._s(t.u1)+" "),a("br"),t._v(" u2 = "+t._s(t.u2)+" "),a("br")]),a("v-card",{staticClass:"block_message",attrs:{title:"Encrypt Parameter"}},[t._v(" message = "+t._s(t.message)+" "),a("br"),t._v(" tag = "+t._s(t.tag)+" "),a("br")]),a("v-card",{staticClass:"block_message",attrs:{title:"Blockchain Information"}},[t._v(" Status: "),a("br"),t._v(" address = "+t._s(t.address)+" "),a("br")]),a("v-card",{staticClass:"block_message",attrs:{title:"Cryptext"}},[t._v(" C1: "+t._s(t.C1)+" "),a("br"),t._v(" C2: "+t._s(t.C2)+" "),a("br"),t._v(" D1: "+t._s(t.D1)+" "),a("br"),t._v(" D2: "+t._s(t.D2)+" "),a("br"),t._v(" E: "+t._s(t.E)+" "),a("br"),t._v(" C: "+t._s(t.C)+" "),a("br")])],1)],1),a("v-modal",{attrs:{title:"Enter your message",visible:t.visible_enc,"confirm-loading":t.asyncConfirmLoading},on:{ok:t.handleOk_enc,cancel:t.handleCancel}},[a("div",{staticClass:"block_message"},[a("v-input",{attrs:{type:"textarea",placeholder:"Please enter the message"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)])],1)},l=[],c=(a("ace4"),a("d3b7"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a9"),a("72f7"),a("96cf"),a("5e80")),o={name:"sender",props:{name:String,g1:{type:String,default:""},g2:{type:String,default:""},z:{type:String,default:""},u1:{type:String,default:""},u2:{type:String,default:""},kappa:{type:String,default:""},flag_s:{type:Boolean,default:!0}},data:function(){return{flag:0,visible_enc:!1,message:null,tag:null,address:null,C1:null,C2:null,D1:null,D2:null,E:null,C:null,local_gateway:"ws://localhost:8546",public_gateway:"https://gateway.devnet.oasiscloud.io",public_credential:"",bytecode:"simstore.wasm",blackBox:null}},methods:{next:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:t.t0=this.flag,t.next=0===t.t0?3:1===t.t0?6:2===t.t0?8:3===t.t0?10:4===t.t0?12:13;break;case 3:return this.visible_enc=!0,this.flag++,t.abrupt("break",14);case 6:return this.handleConnect(),t.abrupt("break",14);case 8:return this.handleDeploy(),t.abrupt("break",14);case 10:return this.handleStore(),t.abrupt("break",14);case 12:return t.abrupt("break",14);case 13:alert("You opened the Stein Gate!");case 14:case"end":return t.stop()}}),null,this)},handleConnect:function(){var t,e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:t=new c["a"].Wallet("0xb5144c6bda090723de712e52b92b4c758d78348ddce9aa80ca8ef51125bfb308"),e=new c["a"].gateways.Web3Gateway(this.local_gateway,t),c["a"].setGateway(e),this.flag++;case 4:case"end":return a.stop()}}),null,this)},handleDeploy:function(){var t,e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(fetch(this.bytecode).then((function(t){return t.body})).then((function(t){return new Response(t)})).then((function(t){var e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(t.arrayBuffer());case 2:return e=a.sent,a.abrupt("return",new Uint8Array(e));case 4:case"end":return a.stop()}}))})));case 2:return t=a.sent,a.next=5,regeneratorRuntime.awrap(c["a"].deploy("hello world~",{bytecode:t,header:{confidential:!1},gasLimit:"0xf42400"}));case 5:e=a.sent,this.blackBox=e,this.address=e.address.hex,this.flag++;case 9:case"end":return a.stop()}}),null,this)},handleStore:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:this.blackBox.store(this.tag),this.$emit("switchAll"),this.flag++;case 3:case"end":return t.stop()}}),null,this)},handleCancel:function(){this.visible_enc=!1},handleOk_enc:function(){var t=this;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:null==this.message?this.$message["error"]("Please check your message"):(this.asyncConfirmLoading=!0,this.$http.post("/enc",{g1:this.g1,g2:this.g2,z:this.z,u1:this.u1,u2:this.u2,L:this.kappa,M:this.message}).then((function(e){var a=JSON.parse(e.body);t.C1=a.C1,t.C2=a.C2,t.D1=a.D1,t.D2=a.D2,t.E=a.E,t.C=a.C,t.tag=a.tag,t.$emit("updateCT",{C1:t.C1,C2:t.C2,D1:t.D1,D2:t.D2,E:t.E,C:t.C}),t.visible_enc=!1,t.asyncConfirmLoading=!1}),(function(t){window.console.log(t)})));case 1:case"end":return e.stop()}}),null,this)}}},u=o,d=a("2877"),p=Object(d["a"])(u,i,l,!1,null,null,null),h=p.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{staticClass:"receiver",attrs:{xs:24,sm:24,md:24,lg:12}},[a("h1",[t._v(t._s(t.name))]),a("br"),a("v-row",{staticClass:"block_message",staticStyle:{"text-align":"left"}},[a("v-col",{attrs:{span:"4"}}),a("v-col",{attrs:{span:"16"}},[a("v-steps",{attrs:{current:t.flag-1}},[a("v-step",{attrs:{title:"Setup",description:"Init parameters"}}),a("v-step",{attrs:{title:"Connect",description:"Connect to blockchain"}}),a("v-step",{attrs:{title:"Fetch",description:"Fetch a tag"}}),a("v-step",{attrs:{title:"Dec",description:"Decryption"}})],1)],1),a("v-col",{attrs:{span:"1"}}),a("v-col",{attrs:{span:"3"}},[a("v-button",{attrs:{type:"primary",disabled:t.flag_r},on:{click:t.next}},[t._v(" next "),a("v-icon",{attrs:{type:"right"}})],1)],1)],1),a("v-row",{staticClass:"block_message",staticStyle:{"text-align":"left"}},[a("v-col",{attrs:{span:"4"}}),a("v-col",{attrs:{span:"16"}},[a("v-card",{staticClass:"block_message",attrs:{title:"Public key"}},[t._v(" g1 = "+t._s(t.g1)+" "),a("br"),t._v(" g2 = "+t._s(t.g2)+" "),a("br"),t._v(" z = "+t._s(t.z)+" "),a("br"),t._v(" u1 = "+t._s(t.u1)+" "),a("br"),t._v(" u2 = "+t._s(t.u2)+" "),a("br")]),a("v-card",{staticClass:"block_message",attrs:{title:"Private key"}},[t._v(" x1 = "+t._s(t.x1)+" "),a("br"),t._v(" x2 = "+t._s(t.x2)+" "),a("br"),t._v(" y1 = "+t._s(t.y1)+" "),a("br"),t._v(" y2 = "+t._s(t.y2)+" "),a("br")]),a("v-card",{staticClass:"block_message",attrs:{title:"Cryptext"}},[t._v(" C1: "+t._s(t.C1)+" "),a("br"),t._v(" C2: "+t._s(t.C2)+" "),a("br"),t._v(" D1: "+t._s(t.D1)+" "),a("br"),t._v(" D2: "+t._s(t.D2)+" "),a("br"),t._v(" E: "+t._s(t.E)+" "),a("br"),t._v(" C: "+t._s(t.C)+" "),a("br")]),a("v-card",{staticClass:"block_message",attrs:{title:"Blockchain Information"}},[t._v(" Status : "),a("br"),t._v(" address = "+t._s(t.address)+" "),a("br"),t._v(" Tag = "+t._s(t.tag)+" "),a("br")]),a("v-card",{staticClass:"block_message",attrs:{title:"Decryption Result"}},[t._v(" message = "+t._s(t.message)+" "),a("br")])],1)],1),a("v-modal",{attrs:{title:"Choose a group type",visible:t.visible_init,"confirm-loading":t.asyncConfirmLoading},on:{ok:t.handleOk_init,cancel:t.handleCancel}},[a("div",{staticClass:"block_message"},[a("v-radio",{attrs:{label:"SS512"},model:{value:t.kappa,callback:function(e){t.kappa=e},expression:"kappa"}},[t._v("SS512")]),a("v-radio",{attrs:{label:"MNT159"},model:{value:t.kappa,callback:function(e){t.kappa=e},expression:"kappa"}},[t._v("MNT159")])],1)]),a("v-modal",{attrs:{title:"Please input the address",visible:t.visible_addre,"confirm-loading":t.asyncConfirmLoading},on:{ok:t.handleOk_addre,cancel:t.handleCancel}},[a("div",{staticClass:"block_message"},[a("v-input",{attrs:{type:"textarea",placeholder:"Please enter the address"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1)])],1)},f=[],v={name:"receiver",props:{name:String,C1:{type:String,default:""},C2:{type:String,default:""},D1:{type:String,default:""},D2:{type:String,default:""},E:{type:String,default:""},C:{type:String,default:""},flag_r:{type:Boolean,default:!0}},data:function(){return{asyncConfirmLoading:!1,flag:0,visible_init:!1,visible_addre:!1,flag_init:!1,flag_connect:!1,flag_load:!1,flag_dec:!1,kappa:"SS512",g1:null,g2:null,z:null,u1:null,u2:null,x1:null,x2:null,y1:null,y2:null,tag:null,message:null,address:null,local_gateway:"ws://localhost:8546",public_gateway:"https://gateway.devnet.oasiscloud.io",public_credential:""}},methods:{handleCancel:function(){this.visible_init=!1,this.visible_addre=!1},handleOk_init:function(){var t=this;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:this.asyncConfirmLoading=!0,this.flag_r=!0,this.$emit("switchAll"),this.$http.post("/setup",{L:this.kappa}).then((function(e){var a=JSON.parse(e.body);t.g1=a.g1,t.g2=a.g2,t.z=a.z,t.u1=a.u1,t.u2=a.u2,t.x1=a.x1,t.x2=a.x2,t.y1=a.y1,t.y2=a.y2,t.$emit("updatePK",{g1:t.g1,g2:t.g2,z:t.z,u1:t.u1,u2:t.u2,L:t.kappa,C:t.C}),t.visible_init=!1,t.asyncConfirmLoading=!1,t.flag++}),(function(t){window.console.log(t)}));case 4:case"end":return e.stop()}}),null,this)},handleCancel_init:function(){this.visible_init=!1},next:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:t.t0=this.flag,t.next=0===t.t0?3:1===t.t0?5:2===t.t0?7:3===t.t0?9:11;break;case 3:return this.visible_init=!0,t.abrupt("break",12);case 5:return this.handleConnect(),t.abrupt("break",12);case 7:return this.handleFetch(),t.abrupt("break",12);case 9:return this.handleDec(),t.abrupt("break",12);case 11:alert("You opened the Stein Gate!");case 12:case"end":return t.stop()}}),null,this)},handleConnect:function(){var t,e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:t=new c["a"].Wallet("0x7ec6102f6a2786c03b3daf6ac4772491f33925902326a0d2d83521b964a87402"),e=new c["a"].gateways.Web3Gateway(this.local_gateway,t),c["a"].setGateway(e),this.flag++;case 4:case"end":return a.stop()}}),null,this)},handleFetch:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:this.visible_addre=!0;case 1:case"end":return t.stop()}}),null,this)},handleOk_addre:function(){var t,e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return this.asyncConfirmLoading=!0,a.next=3,regeneratorRuntime.awrap(c["a"].Service.at(new c["a"].Address(this.address)));case 3:return t=a.sent,a.next=6,regeneratorRuntime.awrap(t.fetch());case 6:e=a.sent,this.tag=e,this.visible_addre=!1,this.asyncConfirmLoading=!1,this.flag++;case 11:case"end":return a.stop()}}),null,this)},handleDec:function(){var t=this;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:this.$http.post("/dec",{x1:this.x1,x2:this.x2,y1:this.y1,y2:this.y2,tag:this.tag,C1:this.C1,C2:this.C2,D1:this.D1,D2:this.D2,E:this.E,L:this.kappa,C:this.C}).then((function(e){var a=JSON.parse(e.body);t.message=a.M,t.flag++}),(function(t){window.console.log(t)}));case 1:case"end":return e.stop()}}),null,this)}}},b=v,_=Object(d["a"])(b,g,f,!1,null,null,null),y=_.exports,m={name:"app",components:{sender:h,receiver:y},data:function(){return{kappa:"",g1:"",g2:"",z:"",u1:"",u2:"",C1:"",C2:"",D1:"",D2:"",E:"",C:"",flag_s:!0,flag_r:!1}},methods:{updatePK:function(t){this.g1=t.g1,this.g2=t.g2,this.z=t.z,this.u1=t.u1,this.u2=t.u2,this.kappa=t.L},updateCT:function(t){this.C1=t.C1,this.C2=t.C2,this.D1=t.D1,this.D2=t.D2,this.E=t.E,this.C=t.C},switchAll:function(){this.flag_s=!this.flag_s,this.flag_r=!this.flag_r}}},C=m,w=(a("034f"),Object(d["a"])(C,s,r,!1,null,null,null)),k=w.exports,x=a("28dd"),S=(a("76fe"),a("9012")),D=a.n(S);n["default"].use(D.a),n["default"].use(x["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(k)}}).$mount("#app")},6:function(t,e){},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.e11eb8de.js.map