(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var s=a(5),n=a.n(s),i=a(8),o=a(2),r=a(4),c=a(6),l=a(7),d=a(10),m=a(9),u=a(1),h=a.n(u),b=(a(15),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),p=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],g=(a(16),a(0)),y=function(e){var t=e.todos,a=e.users;return Object(g.jsx)("ul",{className:"todoList",children:t.map((function(e){var t=e.completed?"yes":"no",s=a.find((function(t){return t.id===e.userId}));return Object(g.jsxs)("li",{className:"todoList__item",children:[Object(g.jsx)("h2",{children:e.title}),Object(g.jsx)("p",{children:"User: ".concat(null===s||void 0===s?void 0:s.name)}),Object(g.jsx)("span",{className:t,children:"Is it done: ".concat(t)})]},e.id)}))})},j=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={users:b,todos:p,todoTitle:"",selectedUser:"",isTitleValid:!0,isUserValid:!0},e.handleChange=function(t){var a=t.target,s=a.name,n=a.value;return"todoTitle"===s&&e.setState({isTitleValid:!0}),"selectedUser"===s&&e.setState({isUserValid:!0}),e.setState((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(o.a)({},s,n))}))},e.addTask=function(){var t=e.state,a=t.todoTitle,s=t.selectedUser,n=e.state.users.find((function(e){return e.name===s}));if(!n||!a.length)return e.showError();var o={userId:n.id,id:e.state.todos.length+1,title:a,completed:!1};return e.setState((function(e){return{todos:[].concat(Object(i.a)(e.todos),[o]),todoTitle:"",selectedUser:""}}))},e.showError=function(){var t=e.state,a=t.todoTitle,s=t.selectedUser;a.length||e.setState({isTitleValid:!1}),s.length||e.setState({isUserValid:!1})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.selectedUser,a=e.todoTitle,s=e.isTitleValid,n=e.isUserValid;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{children:"Add todo form"}),Object(g.jsxs)("form",{className:"todoForm",action:"",method:"GET",onSubmit:function(e){return e.preventDefault()},children:[Object(g.jsxs)("label",{htmlFor:"todo",className:"todoForm__label",children:["\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435:",Object(g.jsx)("input",{id:"todo",type:"text",name:"todoTitle",placeholder:"\u0417\u0430\u0432\u0430\u0440\u0438 \u0447\u0430\u0439\u043a\u0443",className:"todoForm__input",value:a,onChange:this.handleChange}),!s&&Object(g.jsx)("span",{className:"error",children:"Please enter the task"})]}),Object(g.jsxs)("label",{htmlFor:"selectName",className:"todoForm__label",children:["\u041a\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443:",Object(g.jsxs)("select",{name:"selectedUser",className:"todoForm__input",id:"selectName",value:t,onChange:this.handleChange,children:[Object(g.jsx)("option",{value:"",children:"Who will be a chosen one?"}),b.map((function(e){return Object(g.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),!n&&Object(g.jsx)("span",{className:"error",children:"Please choose someone"})]}),Object(g.jsx)("button",{type:"submit",onClick:this.addTask,className:"button",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u0435"})]}),Object(g.jsx)(y,{todos:this.state.todos,users:this.state.users})]})}}]),a}(h.a.Component),f=j;n.a.render(Object(g.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.539af4ce.chunk.js.map