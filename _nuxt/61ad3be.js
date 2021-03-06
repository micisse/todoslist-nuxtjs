(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(t,e,o){"use strict";o(95);var n=function(t){return t.charAt(0).toUpperCase()+t.slice(1)};e.a=function(t,e){t.app;e("ucfirst",n)}},140:function(t,e,o){var content=o(190);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(65).default)("4e8213bc",content,!0,{sourceMap:!1})},145:function(t,e,o){"use strict";var n=o(0),r=o(97),c=o(98),l=n.a.extend({components:{TodoInput:r.default,TodoFilter:c.default}}),d=(o(189),o(17)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container m-5 p-2 rounded mx-auto bg-light shadow"},[t._m(0),t._v(" "),o("TodoInput"),t._v(" "),o("div",{staticClass:"p-2 mx-4 border-black-25 border-bottom"}),t._v(" "),o("TodoFilter"),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"p-2 mx-4 border-black-25 border-bottom"}),t._v(" "),o("div",{staticClass:"row mx-1 px-5 pb-3 w-80"},[o("div",{staticClass:"col mx-auto"},[o("Nuxt")],1)])],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row m-1 p-4"},[o("div",{staticClass:"col"},[o("div",{staticClass:"p-1 h3 text-secondary text-center mx-auto display-inline-block"},[o("i",{staticClass:"fa fa-check bg-secondary text-white rounded p-2"}),t._v("\n\t\t\t\tTo-Do List - NuxtJS\n\t\t\t")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"alert alert-light text-center",attrs:{role:"alert"}},[o("ul",[o("li",[o("small",[t._v("\n\t\t\t\t\tVous pouvez aussi cliquez sur une tâche pour la modifier\n\t\t\t\t\tdirectement\n\t\t\t\t")])]),t._v(" "),o("li",[o("small",[t._v('\n\t\t\t\t\tVous pouvez aussi cliquez sur la touche "Entrée" de\n\t\t\t\t\tvotre clavier depuis un champ pour enregistrer vos\n\t\t\t\t\tchangements\n\t\t\t\t')])])])])}],!1,null,null,null);e.a=component.exports;installComponents(component,{TodoInput:o(97).default,TodoFilter:o(98).default})},146:function(t,e,o){o(147),t.exports=o(148)},189:function(t,e,o){"use strict";o(140)},190:function(t,e,o){var n=o(64)(!1);n.push([t.i,'body{font-family:"Open Sans",sans-serif;line-height:1.6}.custom-select:focus{border-color:none;outline:0;box-shadow:none}ul{list-style:none}.add-todo-input,.edit-todo-input{outline:none}.add-todo-input:focus,.edit-todo-input:focus{border:none;box-shadow:none}.date-label,.view-opt-label{font-size:.8rem}.edit-todo-input{font-size:1rem}.todo-actions{visibility:hidden}.todo-item:hover .todo-actions{visibility:visible}.todo-item.editing .todo-actions .edit-icon{display:none}',""]),t.exports=n},191:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return n})),o.d(e,"getters",(function(){return r}));var n=function(){return{todos:[],filteredTodos:[]}},r={todos:function(t){return t.todos},filteredTodos:function(t){return t.filteredTodos}}},192:function(t,e,o){"use strict";o.r(e);o(32),o(193),o(194),o(135),o(27),o(37);var n=o(10),r=o(21),c=o.n(r);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={position:"top",timer:4e3,showConfirmButton:!1,toast:!0};e.default={filter:function(t,e){var o=function(){var t=$nuxt.$route.query;$nuxt.$router.replace({query:d(d({},t),{},{filter:e})}).catch((function(){}))};if("all"===e)return t.filteredTodos=[],o(),t.todos;var n=t.todos.filter((function(t){return"completed"===e?t.completed:!t.completed}));if(0===n.length)return c.a.fire({text:"Vous n'avez pas de tâche enregistrée.",icon:"warning",confirmButtonText:"OK"});o(),t.filteredTodos=n},sort:function(t,e){var o=t.todos.sort((function(a,b){var t=new Date(a.createdAt).getTime(),o=new Date(b.createdAt).getTime();return"asc"===e&&t>o?1:-1}));if(0===t.todos.length)return c.a.fire({text:"Vous n'avez pas de tâche enregistrée.",icon:"warning",confirmButtonText:"OK"});$nuxt.$router.push({path:"",query:d(d({},$nuxt.$route.query),{},{sort:e})}),t.todos=o},createTodo:function(t,title){var e,o,n=t.todos,r=null!==(o=null===(e=n[n.length-1])||void 0===e?void 0:e.id)&&void 0!==o?o:0,l=(new Date).toLocaleDateString("fr-FR",{hour:"2-digit",minute:"2-digit"});return n.find((function(t){return t.title===title}))?c.a.fire({text:"Cette tâche existe déjà. Veuillez en créer une autre.",icon:"warning",confirmButtonText:"OK"}):t.todos.push({id:r+1,title:title,completed:!1,createdAt:l})?c.a.fire(d(d({},f),{},{text:"Votre tâche a bien étée créer avec succès.",icon:"success"})):void 0},updateTodo:function(t,e){var o=e.todoId,title=e.title,n=t.todos,r=n.find((function(t){return t.id===o})),l=n.findIndex((function(t){return t.id===o}));return n[l]=d(d({},r),{},{title:title}),t.todos=n,c.a.fire(d(d({},f),{},{text:"Votre tâche a bien été modifiée avec succès.",icon:"success"}))},markAsComplete:function(t,e){var o=e.todoId,n=e.completed,r=t.todos,l=r.find((function(t){return t.id===o})),v=r.findIndex((function(t){return t.id===o}));if(r[v]=d(d({},l),{},{completed:n}),t.todos=r,n)return c.a.fire(d(d({},f),{},{text:"Votre tâche a bien été marquée comme complète.",icon:"info"}))},deleteTodo:function(t,e){c.a.fire({title:"Êtes vous sûre?",text:"Vous ne pourrez pas revenir en arrière!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Annuler",confirmButtonText:"Ok, d'accord!",reverseButtons:!0}).then((function(o){if(o.isConfirmed){var n=t.todos,r=n.findIndex((function(t){return t.id===e}));if(n.splice(r,1),t.todos=n,!n[r])return c.a.fire(d(d({},f),{},{text:"Votre tâche a bien été supprimée avec succès.",icon:"success"}))}}))}}},97:function(t,e,o){"use strict";o.r(e);var n=o(10),r=o(0),c=o(31);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=r.a.extend({name:"TodoInput",data:function(){return{titleText:""}},methods:d(d({},Object(c.c)({createTodo:"createTodo"})),{},{handleCreateTodo:function(){this.titleText.length>0&&(this.createTodo(this.$ucfirst(this.titleText)),this.titleText="")}})}),v=o(17),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row m-1 p-3"},[o("div",{staticClass:"col col-11 mx-auto"},[o("div",{staticClass:"row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center"},[o("div",{staticClass:"col"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.titleText,expression:"titleText"}],staticClass:"form-control form-control-lg border-0 add-todo-input bg-transparent rounded",attrs:{"data-testid":"todo-add-input",type:"text",placeholder:"Ajouter une nouvelle tâche .."},domProps:{value:t.titleText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleCreateTodo()},input:function(e){e.target.composing||(t.titleText=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-auto px-0 mx-0 mr-2"},[o("button",{staticClass:"btn btn-secondary",class:0===t.titleText.length&&"disabled",attrs:{"data-testid":"todo-add-button",type:"button"},on:{click:function(e){return t.handleCreateTodo()}}},[t._v("\n\t\t\t\t\tAjouter\n\t\t\t\t")])])])])])}),[],!1,null,null,null);e.default=component.exports},98:function(t,e,o){"use strict";o.r(e);o(32),o(46);var n=o(0).a.extend({name:"TodoFilter",mounted:function(){var t=this;setTimeout((function(){var e=t.$route.query;t.filterSelected=e.filter,t.sortSelected=e.sort}),100)},data:function(){return{filterSelected:"all",sortSelected:"asc"}},methods:{handleFilter:function(){this.$store.commit("filter",this.filterSelected)},handleSort:function(){this.$store.commit("sort",this.sortSelected)}}}),r=o(17),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row m-1 p-3 px-5 justify-content-end"},[o("div",{staticClass:"col-auto d-flex align-items-center"},[o("label",{staticClass:"text-secondary my-2 pr-2 view-opt-label"},[t._v("Filtre")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.filterSelected,expression:"filterSelected"}],staticClass:"custom-select custom-select-sm btn my-2",on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.filterSelected=e.target.multiple?o:o[0]},t.handleFilter]}},[o("option",{attrs:{value:"all",selected:"",disabled:"all"===t.filterSelected}},[t._v("Tout")]),t._v(" "),o("option",{attrs:{value:"completed",disabled:"completed"===t.filterSelected}},[t._v("Completée")]),t._v(" "),o("option",{attrs:{value:"uncompleted",disabled:"uncompleted"===t.filterSelected}},[t._v("Inachevée")])])]),t._v(" "),o("div",{staticClass:"col-auto d-flex align-items-center px-1 pr-3"},[o("label",{staticClass:"text-secondary my-2 pr-2 view-opt-label"},[t._v("Tri")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.sortSelected,expression:"sortSelected"}],staticClass:"custom-select custom-select-sm btn my-2",on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.sortSelected=e.target.multiple?o:o[0]},t.handleSort]}},[o("option",{attrs:{disabled:"asc"===t.sortSelected,value:"asc",selected:""}},[t._v("\n\t\t\t\tDate (asc)\n\t\t\t")]),t._v(" "),o("option",{attrs:{disabled:"desc"===t.sortSelected,value:"desc"}},[t._v("\n\t\t\t\tDate (desc)\n\t\t\t")])]),t._v(" "),o("i",{staticClass:"fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1",class:"asc"===t.sortSelected?"d-none":"",attrs:{"data-toggle":"tooltip","data-placement":"bottom",title:"Ascending"}}),t._v(" "),o("i",{staticClass:"fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1",class:"desc"===t.sortSelected?"d-none":"",attrs:{"data-toggle":"tooltip","data-placement":"bottom",title:"Descending"}})])])}),[],!1,null,null,null);e.default=component.exports}},[[146,4,1,5]]]);