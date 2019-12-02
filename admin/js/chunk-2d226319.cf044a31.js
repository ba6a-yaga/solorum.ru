(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d226319"],{e82b:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"animated fadeIn"},[a("b-row",[a("b-col",{attrs:{cols:"12",md:"6"}},[a("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"fa fa-align-justify"}),a("strong",[t._v(" Bootstrap Alert")]),a("div",{staticClass:"card-header-actions"},[a("a",{staticClass:"card-header-action",attrs:{href:"https://bootstrap-vue.js.org/docs/components/alert",rel:"noreferrer noopener",target:"_blank"}},[a("small",{staticClass:"text-muted"},[t._v("docs")])])])]),a("div",[a("b-alert",{attrs:{show:"",variant:"primary"}},[t._v("Primary Alert")]),a("b-alert",{attrs:{show:"",variant:"secondary"}},[t._v("Secondary Alert")]),a("b-alert",{attrs:{show:"",variant:"success"}},[t._v("Success Alert")]),a("b-alert",{attrs:{show:"",variant:"danger"}},[t._v("Danger Alert")]),a("b-alert",{attrs:{show:"",variant:"warning"}},[t._v("Warning Alert")]),a("b-alert",{attrs:{show:"",variant:"info"}},[t._v("Info Alert")]),a("b-alert",{attrs:{show:"",variant:"light"}},[t._v("Light Alert")]),a("b-alert",{attrs:{show:"",variant:"dark"}},[t._v("Dark Alert")])],1)])],1),a("b-col",{attrs:{cols:"12",md:"6"}},[a("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"fa fa-align-justify"}),t._v(" Alert\n            "),a("small",[t._v(" use "),a("code",[t._v(".alert-link")]),t._v(" to provide links")])]),a("div",[a("b-alert",{attrs:{show:"",variant:"primary"}},[t._v("\n              Primary Alert with "),a("a",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("an example link")]),t._v(".\n            ")]),a("b-alert",{attrs:{show:"",variant:"secondary"}},[t._v("\n              Secondary Alert with "),a("a",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("an example link")]),t._v(".\n            ")]),a("b-alert",{attrs:{show:"",variant:"success"}},[t._v("\n              Success Alert with "),a("a",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("an example link")]),t._v(".\n            ")]),a("b-alert",{attrs:{show:"",variant:"danger"}},[t._v("\n              Danger Alert with "),a("a",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("an example link")]),t._v(".\n            ")]),a("b-alert",{attrs:{show:"",variant:"warning"}},[t._v("\n              Warning Alert with "),a("a",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("an example link")]),t._v(".\n            ")]),a("b-alert",{attrs:{show:"",variant:"info"}},[t._v("\n              Info Alert with "),a("a",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("an example link")]),t._v(".\n            ")]),a("b-alert",{attrs:{show:"",variant:"light"}},[t._v("\n              Light Alert with "),a("a",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("an example link")]),t._v(".\n            ")]),a("b-alert",{attrs:{show:"",variant:"dark"}},[t._v("\n              Dark Alert with\n              "),a("b-link",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("an example link")]),t._v("\n              .\n            ")],1)],1)])],1),a("b-col",{attrs:{cols:"12",md:"6"}},[a("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"fa fa-align-justify"}),t._v(" Alerts "),a("small",[t._v("with additional content")])]),a("b-alert",{attrs:{show:"",variant:"success"}},[a("h4",{staticClass:"alert-heading"},[t._v("Well done!")]),a("p",[t._v("\n              Aww yeah, you successfully read this important alert message.\n              This example text is going to run a bit longer so that you can see\n              how spacing within an alert works with this kind of content.\n            ")]),a("hr"),a("p",{staticClass:"mb-0"},[t._v("\n              Whenever you need to, be sure to use margin utilities to keep things nice and tidy.\n            ")])])],1)],1),a("b-col",{attrs:{cols:"12",md:"6"}},[a("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"fa fa-align-justify"}),t._v(" Alerts "),a("small",[t._v("dismissible")])]),a("div",[a("b-alert",{attrs:{show:"",dismissible:""}},[t._v("\n              Dismissible Alert!\n            ")]),a("b-alert",{attrs:{variant:"danger",dismissible:"",show:t.showDismissibleAlert},on:{dismissed:function(s){t.showDismissibleAlert=!1}}},[t._v("\n            Dismissible Alert!\n          ")]),a("b-btn",{staticClass:"m-1",attrs:{variant:"info"},on:{click:function(s){t.showDismissibleAlert=!0}}},[t._v("\n            Show dismissible alert ("+t._s(t.showDismissibleAlert?"visible":"hidden")+")\n          ")])],1)]),a("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"fa fa-align-justify"}),t._v(" Alerts "),a("small",[t._v("auto dismissible")])]),a("div",[a("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"warning"},on:{dismissed:function(s){t.dismissCountdown=0},"dismiss-count-down":t.countDownChanged}},[t._v("\n              Alert will dismiss after "),a("strong",[t._v(t._s(t.dismissCountDown))]),t._v(" seconds...\n            ")]),a("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"info"},on:{dismissed:function(s){t.dismissCountdown=0},"dismiss-count-down":t.countDownChanged}},[t._v("\n              Alert will dismiss after "+t._s(t.dismissCountDown)+" seconds...\n              "),a("b-progress",{attrs:{variant:"info",max:t.dismissSecs,value:t.dismissCountDown,height:"4px"}})],1),a("b-btn",{staticClass:"m-1",attrs:{variant:"info"},on:{click:t.showAlert}},[t._v("\n              Show alert with timer\n            ")])],1)])],1)],1)],1)])},i=[],r={name:"alerts",data:function(){return{dismissSecs:10,dismissCountDown:0,showDismissibleAlert:!1}},methods:{countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},n=r,l=a("2877"),o=Object(l["a"])(n,e,i,!1,null,null,null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d226319.cf044a31.js.map