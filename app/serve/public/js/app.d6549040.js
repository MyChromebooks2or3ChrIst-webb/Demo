(function(e){function t(t){for(var s,i,l=t[0],c=t[1],o=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,l=1;l<a.length;l++){var c=a[l];0!==n[c]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},n={app:0},r=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("h1",[e._v("DEMO")]),a("center",[e._v("This is a demo")]),a("br"),a("hr"),a("br"),a("sender",{attrs:{name:"Sender",g1:e.g1,g2:e.g2,z:e.z,u1:e.u1,u2:e.u2,kappa:e.kappa,flag_s:e.flag_s},on:{updateCT:e.updateCT,switchAll:e.switchAll}}),a("receiver",{attrs:{name:"Receiver",C1:e.C1,C2:e.C2,D1:e.D1,D2:e.D2,E:e.E,C:e.C,flag_r:e.flag_r},on:{updatePK:e.updatePK,switchS:e.switchS,switchAll:e.switchAll}})],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{staticClass:"sender",attrs:{xs:24,sm:24,md:24,lg:12}},[a("h1",[e._v(e._s(e.name))]),a("br"),a("v-row",{staticClass:"block_message",staticStyle:{"text-align":"left"}},[a("v-col",{attrs:{span:"4"}}),a("v-col",{attrs:{span:"16"}},[a("v-steps",{attrs:{current:e.flag-1}},[a("v-step",{attrs:{title:"Enc",description:"Encrypt your message"}}),a("v-step",{attrs:{title:"Connect",description:"Connect to blockchain"}}),a("v-step",{attrs:{title:"Deploy",description:"Deploy smart contract"}}),a("v-step",{attrs:{title:"Store",description:"Store a tag"}})],1)],1),a("v-col",{attrs:{span:"1"}}),a("v-col",{attrs:{span:"3"}},[a("v-button",{attrs:{type:"primary",disabled:e.flag_s},on:{click:e.next}},[e._v(" next "),a("v-icon",{attrs:{type:"right"}})],1)],1)],1),a("v-row",{staticClass:"block_message",staticStyle:{"text-align":"left"}},[a("v-col",{attrs:{span:"4"}}),a("v-col",{attrs:{span:"16"}},[a("v-card",{staticClass:"block_message",attrs:{title:"Receiver's PK"}},[e._v(" g1 = "+e._s(e.g1)+" "),a("br"),e._v(" g2 = "+e._s(e.g2)+" "),a("br"),e._v(" z = "+e._s(e.z)+" "),a("br"),e._v(" u1 = "+e._s(e.u1)+" "),a("br"),e._v(" u2 = "+e._s(e.u2)+" "),a("br")]),a("v-card",{staticClass:"block_message",attrs:{title:"Encrypt Parameter"}},[e._v(" message = "+e._s(e.message)+" "),a("br"),e._v(" tag = "+e._s(e.tag)+" "),a("br")]),a("v-card",{staticClass:"block_message",attrs:{title:"Blockchain Information"}},[e._v(" Status: "),a("br"),e._v(" address = "+e._s(e.address)+" "),a("br")]),a("v-card",{staticClass:"block_message",attrs:{title:"Cryptext"}},[e._v(" C1: "+e._s(e.C1)+" "),a("br"),e._v(" C2: "+e._s(e.C2)+" "),a("br"),e._v(" D1: "+e._s(e.D1)+" "),a("br"),e._v(" D2: "+e._s(e.D2)+" "),a("br"),e._v(" E: "+e._s(e.E)+" "),a("br"),e._v(" C: "+e._s(e.C)+" "),a("br")])],1)],1),a("v-modal",{attrs:{title:"Enter your message",visible:e.visible_enc,"confirm-loading":e.asyncConfirmLoading},on:{ok:e.handleOk_enc,cancel:e.handleCancel}},[a("div",{staticClass:"block_message"},[a("v-input",{attrs:{type:"textarea",placeholder:"Please enter the message"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1)])],1)},l=[],c=(a("ace4"),a("d3b7"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a9"),a("72f7"),a("96cf"),a("5e80")),o={name:"sender",props:{name:String,g1:{type:String,default:""},g2:{type:String,default:""},z:{type:String,default:""},u1:{type:String,default:""},u2:{type:String,default:""},kappa:{type:String,default:""},flag_s:{type:Boolean,default:!0}},data:function(){return{flag:0,visible_enc:!1,message:null,tag:null,address:null,C1:null,C2:null,D1:null,D2:null,E:null,C:null,local_gateway:"ws://localhost:8546",public_gateway:"https://gateway.devnet.oasiscloud.io",public_credential:"",bytecode:"simstore.wasm",blackBox:null}},methods:{next:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:e.t0=this.flag,e.next=0===e.t0?3:1===e.t0?6:2===e.t0?8:3===e.t0?10:4===e.t0?12:14;break;case 3:return this.visible_enc=!0,this.flag++,e.abrupt("break",15);case 6:return this.handleConnect(),e.abrupt("break",15);case 8:return this.handleDeploy(),e.abrupt("break",15);case 10:return this.handleStore(),e.abrupt("break",15);case 12:return alert("You opened the Stein Gate!"),e.abrupt("break",15);case 14:alert("You made a big mistake!");case 15:case"end":return e.stop()}}),null,this)},handleConnect:function(){var e,t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:e=new c["a"].Wallet("0xb5144c6bda090723de712e52b92b4c758d78348ddce9aa80ca8ef51125bfb308"),t=new c["a"].gateways.Web3Gateway(this.local_gateway,e),c["a"].setGateway(t),this.flag++;case 4:case"end":return a.stop()}}),null,this)},handleDeploy:function(){var e,t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(fetch(this.bytecode).then((function(e){return e.body})).then((function(e){return new Response(e)})).then((function(e){var t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(e.arrayBuffer());case 2:return t=a.sent,a.abrupt("return",new Uint8Array(t));case 4:case"end":return a.stop()}}))})));case 2:return e=a.sent,a.next=5,regeneratorRuntime.awrap(c["a"].deploy("hello world~",{bytecode:e,header:{confidential:!1},gasLimit:"0xf42400"}));case 5:t=a.sent,this.blackBox=t,this.address=t.address.hex,this.flag++;case 9:case"end":return a.stop()}}),null,this)},handleStore:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:this.blackBox.store(this.tag),this.$emit("switchAll"),this.flag++;case 3:case"end":return e.stop()}}),null,this)},handleCancel:function(){this.visible_enc=!1},handleOk_enc:function(){var e=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:null==this.message?this.$message["error"]("Please check your message"):(this.asyncConfirmLoading=!0,this.$http.post("/enc",{g1:this.g1,g2:this.g2,z:this.z,u1:this.u1,u2:this.u2,L:this.kappa,M:this.message}).then((function(t){var a=JSON.parse(t.body);e.C1=a.C1,e.C2=a.C2,e.D1=a.D1,e.D2=a.D2,e.E=a.E,e.C=a.C,e.tag=a.tag,e.$emit("updateCT",{C1:e.C1,C2:e.C2,D1:e.D1,D2:e.D2,E:e.E,C:e.C}),e.visible_enc=!1,e.asyncConfirmLoading=!1}),(function(e){window.console.log(e)})));case 1:case"end":return t.stop()}}),null,this)}}},u=o,d=a("2877"),p=Object(d["a"])(u,i,l,!1,null,null,null),h=p.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{staticClass:"receiver",attrs:{xs:24,sm:24,md:24,lg:12}},[a("h1",[e._v(e._s(e.name))]),a("br"),a("v-row",{staticClass:"block_message",staticStyle:{"text-align":"left"}},[a("v-col",{attrs:{span:"4"}}),a("v-col",{attrs:{span:"16"}},[a("v-steps",{attrs:{current:e.flag-1}},[a("v-step",{attrs:{title:"Setup",description:"Init parameters"}}),a("v-step",{attrs:{title:"Connect",description:"Connect to blockchain"}}),a("v-step",{attrs:{title:"Fetch",description:"Fetch a tag"}}),a("v-step",{attrs:{title:"Dec",description:"Decryption"}})],1)],1),a("v-col",{attrs:{span:"1"}}),a("v-col",{attrs:{span:"3"}},[a("v-button",{attrs:{type:"primary",disabled:e.flag_r},on:{click:e.next}},[e._v(" next "),a("v-icon",{attrs:{type:"right"}})],1)],1)],1),a("v-row",{staticClass:"block_message",staticStyle:{"text-align":"left"}},[a("v-col",{attrs:{span:"4"}}),a("v-col",{attrs:{span:"16"}},[a("v-card",{staticClass:"block_message",attrs:{title:"Public key"}},[e._v(" g1 = "+e._s(e.g1)+" "),a("br"),e._v(" g2 = "+e._s(e.g2)+" "),a("br"),e._v(" z = "+e._s(e.z)+" "),a("br"),e._v(" u1 = "+e._s(e.u1)+" "),a("br"),e._v(" u2 = "+e._s(e.u2)+" "),a("br")]),a("v-card",{staticClass:"block_message",attrs:{title:"Private key"}},[e._v(" x1 = "+e._s(e.x1)+" "),a("br"),e._v(" x2 = "+e._s(e.x2)+" "),a("br"),e._v(" y1 = "+e._s(e.y1)+" "),a("br"),e._v(" y2 = "+e._s(e.y2)+" "),a("br")]),a("v-card",{staticClass:"block_message",attrs:{title:"Cryptext"}},[e._v(" C1: "+e._s(e.C1)+" "),a("br"),e._v(" C2: "+e._s(e.C2)+" "),a("br"),e._v(" D1: "+e._s(e.D1)+" "),a("br"),e._v(" D2: "+e._s(e.D2)+" "),a("br"),e._v(" E: "+e._s(e.E)+" "),a("br"),e._v(" C: "+e._s(e.C)+" "),a("br")]),a("v-card",{staticClass:"block_message",attrs:{title:"Blockchain Information"}},[e._v(" Status : "),a("br"),e._v(" address = "+e._s(e.address)+" "),a("br"),e._v(" Tag = "+e._s(e.tag)+" "),a("br")]),a("v-card",{staticClass:"block_message",attrs:{title:"Decryption Result"}},[e._v(" message = "+e._s(e.message)+" "),a("br")])],1)],1),a("v-modal",{attrs:{title:"Choose a group type",visible:e.visible_init,"confirm-loading":e.asyncConfirmLoading},on:{ok:e.handleOk_init,cancel:e.handleCancel}},[a("div",{staticClass:"block_message"},[a("v-radio",{attrs:{label:"SS512"},model:{value:e.kappa,callback:function(t){e.kappa=t},expression:"kappa"}},[e._v("SS512")]),a("v-radio",{attrs:{label:"MNT159"},model:{value:e.kappa,callback:function(t){e.kappa=t},expression:"kappa"}},[e._v("MNT159")])],1)]),a("v-modal",{attrs:{title:"Please input the address",visible:e.visible_addre,"confirm-loading":e.asyncConfirmLoading},on:{ok:e.handleOk_addre,cancel:e.handleCancel}},[a("div",{staticClass:"block_message"},[a("v-input",{attrs:{type:"textarea",placeholder:"Please enter the address"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1)])],1)},f=[],v={name:"receiver",props:{name:String,C1:{type:String,default:""},C2:{type:String,default:""},D1:{type:String,default:""},D2:{type:String,default:""},E:{type:String,default:""},C:{type:String,default:""},flag_r:{type:Boolean,default:!0}},data:function(){return{asyncConfirmLoading:!1,flag:0,visible_init:!1,visible_addre:!1,flag_init:!1,flag_connect:!1,flag_load:!1,flag_dec:!1,kappa:"SS512",g1:null,g2:null,z:null,u1:null,u2:null,x1:null,x2:null,y1:null,y2:null,tag:null,message:null,address:null,local_gateway:"ws://localhost:8546",public_gateway:"https://gateway.devnet.oasiscloud.io",public_credential:""}},methods:{handleCancel:function(){this.visible_init=!1,this.visible_addre=!1},handleOk_init:function(){var e=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:this.asyncConfirmLoading=!0,this.flag_r=!0,this.$emit("switchAll"),this.$http.post("/setup",{L:this.kappa}).then((function(t){var a=JSON.parse(t.body);e.g1=a.g1,e.g2=a.g2,e.z=a.z,e.u1=a.u1,e.u2=a.u2,e.x1=a.x1,e.x2=a.x2,e.y1=a.y1,e.y2=a.y2,e.$emit("updatePK",{g1:e.g1,g2:e.g2,z:e.z,u1:e.u1,u2:e.u2,L:e.kappa,C:e.C}),e.visible_init=!1,e.asyncConfirmLoading=!1,e.flag++}),(function(e){window.console.log(e)}));case 4:case"end":return t.stop()}}),null,this)},handleCancel_init:function(){this.visible_init=!1},next:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:e.t0=this.flag,e.next=0===e.t0?3:1===e.t0?5:2===e.t0?7:3===e.t0?9:11;break;case 3:return this.visible_init=!0,e.abrupt("break",12);case 5:return this.handleConnect(),e.abrupt("break",12);case 7:return this.handleFetch(),e.abrupt("break",12);case 9:return this.handleDec(),e.abrupt("break",12);case 11:alert("You opened the Stein Gate!");case 12:case"end":return e.stop()}}),null,this)},handleConnect:function(){var e,t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:e=new c["a"].Wallet("0x7ec6102f6a2786c03b3daf6ac4772491f33925902326a0d2d83521b964a87402"),t=new c["a"].gateways.Web3Gateway(this.local_gateway,e),c["a"].setGateway(t),this.flag++;case 4:case"end":return a.stop()}}),null,this)},handleFetch:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:this.visible_addre=!0;case 1:case"end":return e.stop()}}),null,this)},handleOk_addre:function(){var e,t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:if(null!=this.address){a.next=4;break}this.$message["error"]("Please check the address"),a.next=15;break;case 4:return this.asyncConfirmLoading=!0,a.next=7,regeneratorRuntime.awrap(c["a"].Service.at(new c["a"].Address(this.address)));case 7:return e=a.sent,a.next=10,regeneratorRuntime.awrap(e.fetch());case 10:t=a.sent,this.tag=t,this.visible_addre=!1,this.asyncConfirmLoading=!1,this.flag++;case 15:case"end":return a.stop()}}),null,this)},handleDec:function(){var e=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:this.$http.post("/dec",{x1:this.x1,x2:this.x2,y1:this.y1,y2:this.y2,tag:this.tag,C1:this.C1,C2:this.C2,D1:this.D1,D2:this.D2,E:this.E,L:this.kappa,C:this.C}).then((function(t){var a=JSON.parse(t.body);e.message=a.M,e.flag_r=!0,e.flag++}),(function(e){window.console.log(e)}));case 1:case"end":return t.stop()}}),null,this)}}},b=v,_=Object(d["a"])(b,g,f,!1,null,null,null),y=_.exports,m={name:"app",components:{sender:h,receiver:y},data:function(){return{kappa:"",g1:"",g2:"",z:"",u1:"",u2:"",C1:"",C2:"",D1:"",D2:"",E:"",C:"",flag_s:!0,flag_r:!1}},methods:{updatePK:function(e){this.g1=e.g1,this.g2=e.g2,this.z=e.z,this.u1=e.u1,this.u2=e.u2,this.kappa=e.L},updateCT:function(e){this.C1=e.C1,this.C2=e.C2,this.D1=e.D1,this.D2=e.D2,this.E=e.E,this.C=e.C},switchAll:function(){this.flag_s=!this.flag_s,this.flag_r=!this.flag_r}}},C=m,w=(a("034f"),Object(d["a"])(C,n,r,!1,null,null,null)),k=w.exports,x=a("28dd"),S=(a("76fe"),a("9012")),D=a.n(S);s["default"].use(D.a),s["default"].use(x["a"]),s["default"].config.productionTip=!1,new s["default"]({render:function(e){return e(k)}}).$mount("#app")},6:function(e,t){},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.d6549040.js.map