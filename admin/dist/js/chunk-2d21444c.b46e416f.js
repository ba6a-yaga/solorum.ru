(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21444c"],{afe6:function(t,o,a){"use strict";a.r(o);var e=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"animated fadeIn"},[a("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"fa fa-align-justify"}),a("strong",[t._v(" Bootstrap Tooltips ")]),a("small",[a("code",[t._v("v-b-tooltip")]),t._v(" directive")]),a("div",{staticClass:"card-header-actions"},[a("a",{staticClass:"card-header-action",attrs:{href:"https://bootstrap-vue.js.org/docs/components/tooltip",rel:"noreferrer noopener",target:"_blank"}},[a("small",{staticClass:"text-muted"},[t._v("docs")])])])]),a("b-row",[a("b-col",{attrs:{cols:"6"}},[a("div",{staticClass:"text-center my-3"},[a("b-btn",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"I am a tooltip!"}},[t._v("Hover Me")])],1)]),a("b-col",{attrs:{cols:"6"}},[a("div",{staticClass:"text-center my-3"},[a("b-btn",{attrs:{id:"tooltipButton-2",variant:"primary"}},[t._v("Button")]),a("b-tooltip",{attrs:{show:"",target:"tooltipButton-2"}},[t._v("\n              I start open\n            ")])],1)])],1)],1),a("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"fa fa-align-justify"}),a("strong",[t._v(" Tooltips ")]),a("small",[a("code",[t._v("b-tooltip")]),t._v(" component")])]),a("b-row",[a("b-col",{staticClass:"py-4 text-center",attrs:{md:"6"}},[a("b-btn",{attrs:{id:"exButton1",variant:"outline-success"}},[t._v("Live chat")])],1),a("b-col",{staticClass:"py-4 text-center",attrs:{md:"6"}},[a("b-btn",{attrs:{id:"exButton2",variant:"outline-success"}},[t._v("Html chat")])],1)],1),a("b-tooltip",{attrs:{target:"exButton1",title:"Online!"}}),a("b-tooltip",{attrs:{target:"exButton2",placement:"bottom"}},[t._v("\n        Hello "),a("strong",[t._v("World!")])])],1),a("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"fa fa-align-justify"}),a("strong",[t._v(" Tooltips ")]),a("small",[a("code",[t._v("show")]),t._v(" prop")])]),a("div",{staticClass:"text-center"},[a("b-btn",{attrs:{id:"tooltipButton-1",variant:"primary"}},[t._v("I have a tooltip")]),a("br"),a("br"),a("b-btn",{on:{click:function(o){t.show=!t.show}}},[t._v("Toggle Tooltip")]),a("b-tooltip",{attrs:{show:t.show,target:"tooltipButton-1",placement:"top"},on:{"update:show":function(o){t.show=o}}},[t._v("\n          Hello "),a("strong",[t._v("World!")])])],1)]),a("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"fa fa-align-justify"}),a("strong",[t._v(" Tooltips ")]),a("small",[a("code",[t._v("open close")]),t._v(" events")])]),a("div",{staticClass:"d-flex flex-column text-md-center"},[a("div",{staticClass:"p-2"},[a("b-btn",{attrs:{id:"tooltipButton-showEvent",variant:"primary"}},[t._v("I have a tooltip")])],1),a("div",{staticClass:"p-2"},[a("b-btn",{staticClass:"px-1 mr-1",on:{click:t.onOpen}},[t._v("Open")]),a("b-btn",{staticClass:"px-1",on:{click:t.onClose}},[t._v("Close")])],1),a("b-tooltip",{ref:"tooltip",attrs:{target:"tooltipButton-showEvent"}},[t._v("\n          Hello "),a("strong",[t._v("World!")])])],1)]),a("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"fa fa-align-justify"}),a("strong",[t._v(" Tooltips ")]),a("small",[a("code",[t._v("enable disable")]),t._v(" events")])]),a("div",{staticClass:"d-flex flex-column text-md-center"},[a("div",{staticClass:"p-2"},[a("b-btn",{attrs:{id:"tooltipButton-disable",variant:"primary"}},[t._v("I have a tooltip")])],1),a("div",{staticClass:"p-2"},[a("b-btn",{staticClass:"mr-1",on:{click:function(o){t.disabled=!t.disabled}}},[t._v("\n            "+t._s(t.disabled?"Enable":"Disable")+" Tooltip by prop\n          ")]),a("b-btn",{on:{click:t.disableByRef}},[t._v("\n            "+t._s(t.disabled?"Enable":"Disable")+" Tooltip by $ref event\n          ")]),a("b-tooltip",{ref:"tooltip2",attrs:{disabled:t.disabled,target:"tooltipButton-disable"},on:{"update:disabled":function(o){t.disabled=o}}},[t._v("\n            Hello "),a("strong",[t._v("World!")])])],1)])])],1)])},s=[],i={name:"tooltips",data:function(){return{show:!0,disabled:!1}},methods:{onOpen:function(){this.$refs.tooltip.$emit("open")},onClose:function(){this.$refs.tooltip.$emit("close")},disableByRef:function(){this.disabled?this.$refs.tooltip2.$emit("enable"):this.$refs.tooltip2.$emit("disable")}}},l=i,r=a("2877"),n=Object(r["a"])(l,e,s,!1,null,null,null);o["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d21444c.b46e416f.js.map