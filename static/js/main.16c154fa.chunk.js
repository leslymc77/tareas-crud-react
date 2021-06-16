(this["webpackJsonptarea-crud"]=this["webpackJsonptarea-crud"]||[]).push([[0],{23:function(a,t,e){},24:function(a,t,e){},44:function(a,t,e){"use strict";e.r(t);var r=e(2),n=e.n(r),i=e(17),c=e.n(i),s=(e(23),e(3)),o=e(4),l=e(6),d=e(5),p=e.p+"static/media/logo.6ce24c58.svg",b=(e(24),e(7)),h=e.n(b),j=e(18),u=e(0),m=function(a){Object(l.a)(e,a);var t=Object(d.a)(e);function e(){var a;Object(s.a)(this,e);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=t.call.apply(t,[this].concat(n))).state={idtarea:"",titulo:"",responsable:"",descripcion:"",prioridad:"Baja"},a.almacenarData=function(t){a.setState(Object(j.a)({},t.target.name,t.target.value))},a.grabarData=function(t){""===a.state.idtarea?a.props.agregarData(a.state.titulo,a.state.responsable,a.state.descripcion,a.state.prioridad):a.props.actualizar(a.state.idtarea,a.state.titulo,a.state.responsable,a.state.descripcion,a.state.prioridad),a.setState({idtarea:"",titulo:"",responsable:"",descripcion:"",prioridad:"Baja"})},a.cargarData=function(t,e,r,n,i){a.setState({idtarea:t,titulo:e,responsable:r,descripcion:n,prioridad:i})},a}return Object(o.a)(e,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("form",{className:"card-body",children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("input",{type:"hidden",className:"form-control",name:"idtarea",id:"",value:this.state.idtarea}),Object(u.jsx)("input",{type:"text",name:"titulo",className:"form-control",value:this.state.titulo,onChange:this.almacenarData,placeholder:"Titulo"})]}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{type:"text",name:"responsable",className:"form-control",value:this.state.responsable,onChange:this.almacenarData,placeholder:"Responsable"})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{type:"text",name:"descripcion",className:"form-control",value:this.state.descripcion,onChange:this.almacenarData,placeholder:"Descripcion"})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsxs)("select",{name:"prioridad",className:"form-control",value:this.state.prioridad,onChange:this.almacenarData,children:[Object(u.jsx)("option",{children:"Baja"}),Object(u.jsx)("option",{children:"Media"}),Object(u.jsx)("option",{children:"Alta"})]})}),""===this.state.idtarea?Object(u.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.grabarData,children:"Guardar"}):Object(u.jsx)("button",{type:"button",className:"btn btn-warning",onClick:this.grabarData,children:"Actualizar"})]})})}}]),e}(r.Component),O=function(a){Object(l.a)(e,a);var t=Object(d.a)(e);function e(){return Object(s.a)(this,e),t.apply(this,arguments)}return Object(o.a)(e,[{key:"render",value:function(){var a=this;return this.props.data.map((function(t){return Object(u.jsx)("div",{className:"col-md-4",children:Object(u.jsxs)("div",{className:"card mt-4",children:[Object(u.jsxs)("div",{className:"card-header",children:[Object(u.jsx)("h3",{children:t.titulo}),Object(u.jsx)("span",{className:"badge badge-pill badge-danger ml-2",children:t.prioridad})]}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("p",{children:t.descripcion}),Object(u.jsx)("p",{children:Object(u.jsx)("mark",{children:t.responsable})})]}),Object(u.jsxs)("div",{className:"card-footer",children:[Object(u.jsx)("p",{children:Object(u.jsx)("button",{className:"btn btn-danger btn-sm",onClick:a.props.eliminarData.bind(a,t.idtarea),children:"Borrar"})}),Object(u.jsx)("p",{children:Object(u.jsx)("button",{className:"btn btn-secondary btn-sm",onClick:a.props.actualizarData.bind(a,t.idtarea),children:"Editar"})})]})]})},t.idtarea)}))}}]),e}(r.Component),f=function(a){Object(l.a)(e,a);var t=Object(d.a)(e);function e(){var a;Object(s.a)(this,e);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=t.call.apply(t,[this].concat(n))).state={data:[]},a.agregarData=function(t,e,r,n){var i={titulo:t,responsable:e,descripcion:r,prioridad:n};h.a.post("http://localhost:8080/tareas/new/",i).then((function(t){a.sincronizarApi()}))},a.eliminarData=function(t){h.a.delete("http://localhost:8080/tareas/del/"+t).then((function(t){a.sincronizarApi()}))},a.actualizarData=function(t){var e=a.state.data.find((function(a){return a.idtarea===t}));a.child.cargarData(e.idtarea,e.titulo,e.responsable,e.descripcion,e.prioridad)},a.actualizar=function(t,e,r,n,i){var c={idtarea:t,titulo:e,responsable:r,descripcion:n,prioridad:i};h.a.put("http://localhost:8080/tareas/upd/",c).then((function(t){a.sincronizarApi()}))},a}return Object(o.a)(e,[{key:"sincronizarApi",value:function(){var a=this;h.a.get("http://localhost:8080/tareas/list").then((function(t){var e=t.data;a.setState({data:e})}))}},{key:"componentDidMount",value:function(){this.sincronizarApi()}},{key:"render",value:function(){var a=this;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(u.jsxs)("a",{href:"http://localhost:3000/",className:"text-white",children:["Tareas",Object(u.jsx)("span",{className:"badge badge-pill badge-light ml-2",children:this.state.data.length})]})}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row mt-4",children:[Object(u.jsxs)("div",{className:"col md-3",children:[Object(u.jsx)("img",{src:p,className:"App-logo",alt:"logo"}),Object(u.jsx)(m,{agregarData:this.agregarData,onRef:function(t){return a.child=t},actualizar:this.actualizar})]}),Object(u.jsx)("div",{className:"col md-9",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(O,{data:this.state.data,eliminarData:this.eliminarData,actualizarData:this.actualizarData})})})]})})]})}}]),e}(r.Component),g=function(a){a&&a instanceof Function&&e.e(3).then(e.bind(null,45)).then((function(t){var e=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;e(a),r(a),n(a),i(a),c(a)}))};c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),g()}},[[44,1,2]]]);
//# sourceMappingURL=main.16c154fa.chunk.js.map