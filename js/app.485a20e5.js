(function(t){function e(e){for(var i,u,o=e[0],s=e[1],c=e[2],p=0,d=[];p<o.length;p++)u=o[p],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(i=!1)}i&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var i={},a={app:0},r=[];function u(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=i,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)u.d(n,i,function(e){return t[e]}.bind(null,i));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vueajaxszamonkeres/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col-md-10 mx-auto"},[n("table",{staticClass:"table table-dark table-striped"},[t._m(0),t._l(t.statues,(function(e){return n("TableLine",{key:e.id,attrs:{statue:e},on:{refreshTable:t.loadData}})})),n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputName,expression:"inputName"}],staticClass:"form-control bg-dark text-white",attrs:{type:"text",placeholder:"Statue name"},domProps:{value:t.inputName},on:{input:function(e){e.target.composing||(t.inputName=e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputHeight,expression:"inputHeight"}],staticClass:"form-control bg-dark text-white",attrs:{type:"number",placeholder:"Statue Height"},domProps:{value:t.inputHeight},on:{input:function(e){e.target.composing||(t.inputHeight=e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputPrice,expression:"inputPrice"}],staticClass:"form-control bg-dark text-white",attrs:{type:"number",placeholder:"Statue price"},domProps:{value:t.inputPrice},on:{input:function(e){e.target.composing||(t.inputPrice=e.target.value)}}})]),n("td",{staticClass:"text-end"},[n("button",{staticClass:"btn btn-outline-success mx-1",on:{click:t.addStatueBtnClicked}},[t._v("Save")]),n("button",{staticClass:"btn btn-outline-danger mx-1",on:{click:t.cancelAddStatueBtnClicked}},[t._v("Cancel")])])])],2)])])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Name")]),n("th",[t._v("Height")]),n("th",[t._v("Price")])])}],u=n("1da1"),o=(n("96cf"),n("d3b7"),n("498a"),n("e9c4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{attrs:{id:"TableLine"}},[t.editMode?t._e():n("td",{staticClass:"py-2"},[t._v(t._s(t.statue.person))]),t.editMode?t._e():n("td",[t._v(t._s(t.statue.height))]),t.editMode?t._e():n("td",[t._v(t._s(t.statue.price))]),t.editMode?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputName,expression:"inputName"}],staticClass:"form-control bg-dark text-white",attrs:{type:"text",placeholder:"Statue name"},domProps:{value:t.inputName},on:{input:function(e){e.target.composing||(t.inputName=e.target.value)}}})]):t._e(),t.editMode?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputHeight,expression:"inputHeight"}],staticClass:"form-control bg-dark text-white",attrs:{type:"number",placeholder:"Statue Height"},domProps:{value:t.inputHeight},on:{input:function(e){e.target.composing||(t.inputHeight=e.target.value)}}})]):t._e(),t.editMode?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputPrice,expression:"inputPrice"}],staticClass:"form-control bg-dark text-white",attrs:{type:"number",placeholder:"Statue price"},domProps:{value:t.inputPrice},on:{input:function(e){e.target.composing||(t.inputPrice=e.target.value)}}})]):t._e(),n("td",{staticClass:"text-end"},[n("button",{staticClass:"btn mx-1",class:t.editBtnColor,on:{click:function(e){return t.editBtnClicked(t.statue.id)}}},[t._v(t._s(t.editBtnText))]),n("button",{staticClass:"btn btn-outline-danger px-3 bold mx-1",on:{click:function(e){return t.deleteBtnClicked(t.statue.id)}}},[t._v(t._s(t.deleteBtnText))])])])}),s=[],c={name:"TableLine",props:["statue"],data:function(){return{editMode:!1,deleteBtnText:"X",editBtnText:"Edit",editBtnColor:"btn-outline-warning",inputName:"",inputHeight:"",inputPrice:""}},methods:{editBtnClicked:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.editMode){n.next=7;break}e.editMode=!e.editMode,e.deleteBtnText="Cancel",e.editBtnText="Save",e.editBtnColor="btn-outline-success",n.next=23;break;case 7:if(i="",""===e.inputName.trim()&&(i+="Name can't be empty"),e.inputName.trim().length<5&&(0!=i.length&&(i+="\r\n"),i+="Name must be at least 5 charachters long"),(e.inputHeight<1||""===e.inputHeight)&&(0!=i.length&&(i+="\r\n"),i+="Height must be positive"),(e.inputHeight>250||""===e.inputHeight)&&(0!=i.length&&(i+="\r\n"),i+="Height can not be greater than 250"),(e.inputPrice<1e3||""===e.inputPrice)&&(0!=i.length&&(i+="\r\n"),i+="The price must be at least 1000"),!(i.length>0)){n.next=16;break}return alert(i),n.abrupt("return");case 16:return a={person:e.inputName.trim(),height:e.inputHeight,price:e.inputPrice},n.next=19,fetch("http://localhost:8000/api/statues/"+t,{method:"PATCH",body:JSON.stringify(a),headers:{"Content-Type":"application/json",Accept:"application/json"}});case 19:return n.next=21,e.$emit("refreshTable");case 21:e.defaultEditMode(),e.setInputValues();case 23:case"end":return n.stop()}}),n)})))()},defaultEditMode:function(){this.editMode=!this.editMode,this.deleteBtnText="X",this.editBtnText="Edit",this.editBtnColor="btn-outline-warning",this.setInputValues()},deleteBtnClicked:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.editMode){n.next=4;break}e.defaultEditMode(),n.next=7;break;case 4:return n.next=6,fetch("http://localhost:8000/api/statues/"+t,{method:"DELETE"});case 6:e.$emit("refreshTable");case 7:case"end":return n.stop()}}),n)})))()},setInputValues:function(){this.inputName=this.statue.person,this.inputHeight=this.statue.height,this.inputPrice=this.statue.price}},mounted:function(){this.setInputValues()}},l=c,p=n("2877"),d=Object(p["a"])(l,o,s,!1,null,null,null),h=d.exports,m={name:"App",components:{TableLine:h},data:function(){return{statues:{},inputName:"",inputHeight:"",inputPrice:""}},methods:{loadData:function(){var t=this;fetch("http://localhost:8000/api/statues").then((function(t){return t.json()})).then((function(e){return t.statues=e}))},addStatueBtnClicked:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n="",""===t.inputName.trim()&&(n+="Name can't be empty"),t.inputName.trim().length<5&&(0!=n.length&&(n+="\r\n"),n+="Name must be at least 5 charachters long"),(t.inputHeight<1||""===t.inputHeight)&&(0!=n.length&&(n+="\r\n"),n+="Height must be positive"),(t.inputHeight>250||""===t.inputHeight)&&(0!=n.length&&(n+="\r\n"),n+="Height can not be greater than 250"),(t.inputPrice<1e3||""===t.inputPrice)&&(0!=n.length&&(n+="\r\n"),n+="The price must be at least 1000"),!(n.length>0)){e.next=9;break}return alert(n),e.abrupt("return");case 9:return i={person:t.inputName.trim(),height:t.inputHeight,price:t.inputPrice},e.next=12,fetch("http://localhost:8000/api/statues",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json",Accept:"application/json"}});case 12:t.loadData(),t.clearAddInputs();case 14:case"end":return e.stop()}}),e)})))()},cancelAddStatueBtnClicked:function(){this.clearAddInputs()},clearAddInputs:function(){this.inputName="",this.inputHeight="",this.inputPrice=""}},mounted:function(){this.loadData()}},g=m,f=Object(p["a"])(g,a,r,!1,null,null,null),b=f.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(b)}}).$mount("#app")}});
//# sourceMappingURL=app.485a20e5.js.map