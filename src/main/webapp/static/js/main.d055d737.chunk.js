(this["webpackJsonpcs4550-20su1-shinekim-client-react"]=this["webpackJsonpcs4550-20su1-shinekim-client-react"]||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),s=a.n(l),c=(a(27),a(6)),o=a(7),i=a(9),m=a(8),u=a(21),d=a(12),b=a(3),v=function(e){return fetch("https://wbdv-generic-server.herokuapp.com/api/shinekim/courses",{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then((function(e){return e.json()}))},p=function(e){return fetch("https://wbdv-generic-server.herokuapp.com/api/shinekim/courses/"+e,{method:"DELETE"}).then((function(e){return e.json()}))},E=function(){return fetch("https://wbdv-generic-server.herokuapp.com/api/shinekim/courses").then((function(e){return e.json()}))},h=function(e,t){return fetch("https://wbdv-generic-server.herokuapp.com/api/shinekim/courses/"+e,{method:"PUT",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(e){return e.json()}))},w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={edit:!1,course:e.props.course},e.setEdit=function(t){return e.setState({edit:t})},e.save=function(){h(e.state.course._id,e.state.course).then((function(t){return e.setEdit(!1)}))},e.updateCourseTitle=function(t){return e.setState((function(e){return{course:Object(d.a)(Object(d.a)({},e.course),{},{title:t})}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",{className:this.state.edit?"table-secondary":"",key:this.props.course._id},r.a.createElement("td",null,!this.state.edit&&r.a.createElement(b.b,{to:"/editor/".concat(this.state.course._id)},this.state.course.title),this.state.edit&&r.a.createElement("input",{className:"wbdv-form wbdv-input form-control",onChange:function(t){return e.updateCourseTitle(t.target.value)},value:this.state.course.title})),r.a.createElement("td",null,this.state.course.owner),r.a.createElement("td",null,this.state.course.modified),r.a.createElement("td",null,!this.state.edit&&r.a.createElement("button",{className:"wbdv-btn wbdv-edit btn btn-secondary",onClick:function(){return e.setEdit(!0)}},"Edit"),this.state.edit&&r.a.createElement("span",null,r.a.createElement("button",{className:"wbdv-btn wbdv-save btn btn-primary",onClick:this.save},"Save"),r.a.createElement("button",{className:"wbdv-btn wbdv-delete btn btn-danger",onClick:function(){return e.props.deleteCourse(e.props.course)}},"Delete"))))}}]),a}(r.a.Component),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null),r.a.createElement("table",{className:"wbdv-table table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"wbdv-course-title"},"Title"),r.a.createElement("th",{className:"wbdv-course-owner"},"Owner"),r.a.createElement("th",{className:"wbdv-course-modified"},"Last Modified"),r.a.createElement("th",null,r.a.createElement("button",{className:"wbdv-btn wbdv-sort btn btn-light"},"Sort")))),r.a.createElement("tbody",null,this.props.courses.map((function(t){return r.a.createElement(w,{deleteCourse:e.props.deleteCourse,key:t._id,course:t})})))))}}]),a}(r.a.Component),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={edit:!1,course:e.props.course},e.setEdit=function(t){return e.setState({edit:t})},e.save=function(){h(e.state.course._id,e.state.course).then((function(t){return e.setEdit(!1)}))},e.updateCourseTitle=function(t){return e.setState((function(e){return{course:Object(d.a)(Object(d.a)({},e.course),{},{title:t})}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col mb-4",key:this.props.course._id},r.a.createElement("div",{className:this.state.edit?"wbdv-card card text-center border-primary bg-light":"wbdv-card card text-center bg-light"},r.a.createElement("h5",null," \xa0 "),r.a.createElement("h3",{className:"wbdv-card-title card-title text-center"},r.a.createElement("div",null,!this.state.edit&&r.a.createElement(b.b,{to:"/editor/".concat(this.state.course._id)},this.state.course.title)),r.a.createElement("div",null,this.state.edit&&r.a.createElement("input",{className:"wbdv-card-input form-control",onChange:function(t){return e.updateCourseTitle(t.target.value)},value:this.state.course.title}))),r.a.createElement("div",{className:"wbdv-card-body card-body"},r.a.createElement("p",{className:"wbdv-card-text card-text"},"Owner: ",this.state.course.owner),r.a.createElement("p",{className:"wbdv-card-text card-text"},r.a.createElement("small",{className:"text-muted"},"Last Modified: ",this.state.course.modified)),r.a.createElement("div",null,!this.state.edit&&r.a.createElement("button",{className:"wbdv-edit wbdv-btn btn btn-secondary",onClick:function(){return e.setEdit(!0)}},"Edit"),this.state.edit&&r.a.createElement("span",null,r.a.createElement("button",{className:"wbdv-btn wbdv-save btn btn-primary",onClick:this.save},"Save"),r.a.createElement("button",{className:"wbdv-btn wbdv-delete btn btn-danger",onClick:function(){return e.props.deleteCourse(e.props.course)}},"Delete"))))))}}]),a}(r.a.Component),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null),r.a.createElement("div",{className:"wbdv-grid row row-cols-1 row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6"},this.props.courses.map((function(t){return r.a.createElement(N,{deleteCourse:e.props.deleteCourse,key:t._id,course:t})}))))}}]),a}(r.a.Component),y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={layout:e.props.match.params.layout,courses:[],newCourseTitle:""},e.setLayout=function(t){e.props.history.push("/".concat(t,"/courses"))},e.addCourse=function(t){var a={title:t,owner:"me",modified:(new Date).toDateString()};v(a).then((function(t){return e.setState((function(e){return{courses:[].concat(Object(u.a)(e.courses),[t])}}))}))},e.deleteCourse=function(t){p(t._id).then((function(a){return e.setState((function(e){return{courses:e.courses.filter((function(e){return e!==t}))}}))}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;E().then((function(t){return e.setState({courses:t})}))}},{key:"componentDidUpdate",value:function(e,t,a){e.match.params.layout!==this.props.match.params.layout&&this.setState({layout:this.props.match.params.layout})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"My Courses"),r.a.createElement("div",{className:"wbdv-input wbdv-form input-group mb-3"},r.a.createElement("input",{className:"form-control",type:"text",onChange:function(t){return e.setState({newCourseTitle:t.target.value})},value:this.state.newCourseTitle,placeholder:"Course Title"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"wbdv-btn wbdv-add btn btn-primary",onClick:function(){return e.addCourse(" "+e.state.newCourseTitle)}},"Add Course"))),"table"===this.state.layout&&r.a.createElement("div",null,r.a.createElement("button",{className:"wbdv-btn wbdv-grid btn btn-light",onClick:function(){return e.setLayout("grid")}},"Grid"),r.a.createElement(f,{deleteCourse:this.deleteCourse,courses:this.state.courses})),"grid"===this.state.layout&&r.a.createElement("div",null,r.a.createElement("button",{className:"wbdv-btn wbdv-table btn btn-light",onClick:function(){return e.setLayout("table")}},"Table"),r.a.createElement(g,{deleteCourse:this.deleteCourse,courses:this.state.courses})))}}]),a}(r.a.Component),k=function(){return r.a.createElement("div",{className:"tabbable"},r.a.createElement("ul",{className:"wbdv-nav-tabs nav nav-tabs"},r.a.createElement("li",{className:"wbdv-nav-item nav-item"},r.a.createElement("a",{className:"nav-link active",href:"#"},"Lesson 1")),r.a.createElement("li",{className:"wbdv-nav-item nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Lesson 2")),r.a.createElement("li",{className:"wbdv-nav-item nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Lesson 3")),r.a.createElement("li",{className:"wbdv-nav-item nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Lesson 4")),r.a.createElement("li",{className:"wbdv-nav-item nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Lesson 5")),r.a.createElement("li",{className:"wbdv-nav-item nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Lesson 6")),r.a.createElement("li",{className:"wbdv-nav-item nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Add"))))},C=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group"},r.a.createElement("button",{type:"button",className:"wbdv-btn list-group-item list-group-item-action active"},"Module A"),r.a.createElement("button",{type:"button",className:"wbdv-btn list-group-item list-group-item-action"},"Module B"),r.a.createElement("button",{type:"button",className:"wbdv-btn list-group-item list-group-item-action"},"Module C"),r.a.createElement("button",{type:"button",className:"wbdv-btn list-group-item list-group-item-action"},"Module D"),r.a.createElement("button",{type:"button",className:"wbdv-btn list-group-item list-group-item-action"},"Module E"),r.a.createElement("button",{type:"button",className:"wbdv-btn list-group-item list-group-item-action"},"Module F"),r.a.createElement("button",{type:"button",className:"wbdv-btn list-group-item list-group-item-action"},"Module G"),r.a.createElement("button",{type:"button",className:"wbdv-btn list-group-item list-group-item-action"},"Module H"),r.a.createElement("button",{type:"button",className:"wbdv-btn list-group-item list-group-item-action"},"Module I"),r.a.createElement("button",{type:"button",className:"wbdv-btn list-group-item list-group-item-action"},"Module J"),r.a.createElement("button",{type:"button",className:"wbdv-btn list-group-item list-group-item-action"},"Add")))},j=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"wbdv-nav wbdv-nav-pills nav nav-pills"},r.a.createElement("li",{className:"wbdv-nav-item nav-item"},r.a.createElement("a",{className:"nav-link active",href:"#"},"Topic 1")),r.a.createElement("li",{className:"wbdv-nav-item nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Topic 2")),r.a.createElement("li",{className:"wbdv-nav-item nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Topic 3"))))},O=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(b.b,{to:"/table/courses"},"Back"),r.a.createElement("h2",{className:"wbdv-course-title"},"CS1234"),r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:" wbdv-module-list col-4 col-lg-3 col-md-4"},r.a.createElement(C,null)),r.a.createElement("div",{className:"col-8 col-lg-9 col-md-8"},r.a.createElement("br",null),r.a.createElement("div",{className:"wbdv-lesson-tabs container horizontal-scrollable"},r.a.createElement("div",{className:"row text-center"},r.a.createElement(k,null))),r.a.createElement("br",null),r.a.createElement("div",{className:"wbdv-topic-pills container horizontal-scrollable"},r.a.createElement("div",{className:"row text-center"},r.a.createElement(j,null))),r.a.createElement("br",null)))))},S=a(1),x=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"wbdv-home wbdv-home-title"},"Home"),r.a.createElement("div",{className:"wbdv-list list-group"},r.a.createElement(b.b,{className:"wbdv-list-item list-group-item",to:"/editor"},"Course Editor"),r.a.createElement(b.b,{className:"wbdv-list-item list-group-item",to:"/table/courses"},"Course List"),r.a.createElement(b.b,{className:"wbdv-list-item list-group-item",to:"/sign-in"},"Sign-in"),r.a.createElement(b.b,{className:"wbdv-list-item list-group-item",to:"/sign-up"},"Sign-up"),r.a.createElement(b.b,{className:"wbdv-list-item list-group-item",to:"/profile"},"Profile")))},T=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"mx-auto container"},r.a.createElement("h2",null,"Sign-in"),r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{className:"form-control wbdv-field wbdv-username",id:"username",type:"text",placeholder:"joe123"}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:"form-control wbdv-field wbdv-password",id:"password",type:"password",placeholder:"********",title:"passwords must be at least 8 characters"}),r.a.createElement("a",{href:"#",className:"btn btn-primary wbdv-button wbdv-login"},"Sign In"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"wbdv-link wbdv-forgot-password"},"Forgot Password?"),r.a.createElement("div",{className:"float-right"},"Don't have an account?"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"float-right wbdv-link wbdv-register"},"Sign up"),r.a.createElement("a",{href:"#"},"Cancel")))},M=function(){return r.a.createElement("div",{className:"mx-auto container"},r.a.createElement("h1",null,"Sign-up"),r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{className:"form-control wbdv-field wbdv-username",id:"username",type:"text",placeholder:"joe123"}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:"form-control wbdv-field wbdv-password",id:"password",type:"password",placeholder:"********",title:"passwords must be at least 8 characters"}),r.a.createElement("label",{htmlFor:"verify"},"Verify Password"),r.a.createElement("input",{className:"form-control wbdv-field wbdv-password-verify",id:"verify",type:"password",placeholder:"********"}),r.a.createElement("a",{href:"#",className:"btn btn-primary wbdv-button wbdv-register"},"Sign Up"),r.a.createElement("br",null),r.a.createElement("div",{className:"float-right"},"Already have an account?"),r.a.createElement("br",null),r.a.createElement("a",{className:"float-right wbdv-link wbdv-login",href:"#"},"Sign in"),r.a.createElement("a",{href:"#"},"Cancel"))},F=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"alert alert-primary",role:"alert"},"Your updates have been saved."),r.a.createElement("h2",null,"Profile"),r.a.createElement("div",null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-2 col-form-label",htmlFor:"username"},"Username"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{readOnly:!0,className:"form-control wbdv-field wbdv-username",id:"username",type:"text",placeholder:"joe123"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-2 col-form-label",htmlFor:"password"},"Password"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control wbdv-field wbdv-password",id:"password",type:"password",placeholder:"********",title:"passwords must be at least 8 characters"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-2 col-form-label",htmlFor:"email"},"Email"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{placeholder:"joe@northeastern.edu",className:"form-control wbdv-field wbdv-email",id:"email",type:"text"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-2 col-form-label",htmlFor:"number"},"Phone Number"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{placeholder:"(123)456-7890",className:"form-control wbdv-field wbdv-phone",id:"number",type:"tel"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-2 col-form-label",htmlFor:"dob"},"Date of Birth"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control wbdv-field wbdv-dob",id:"dob",type:"date",value:"yyyy-mm-dd"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-2 col-form-label"},"Role"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("select",{className:"wbdv-field wbdv-role"},r.a.createElement("option",{value:"FAC"},"Faculty"),r.a.createElement("option",{value:"STU"},"Student"),r.a.createElement("option",{value:"ADMIN"},"Admin")))),r.a.createElement("a",{className:"btn btn-success btn-block wbdv-button wbdv-update"},"Update"),r.a.createElement("a",{className:"btn btn-danger btn-block wbdv-button wbdv-logout"},"Sign out")))},L=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement("h1",{className:"wbdv-whiteboard whiteboard"},"Whiteboard"),r.a.createElement(S.a,{path:"/",exact:!0,component:x}),r.a.createElement(S.a,{path:"/sign-in",exact:!0,component:T}),r.a.createElement(S.a,{path:"/sign-up",exact:!0,component:M}),r.a.createElement(S.a,{path:"/profile",exact:!0,component:F}),r.a.createElement(S.a,{path:"/courses",exact:!0,component:y}),r.a.createElement(S.a,{path:"/:layout/courses",exact:!0,component:y}),r.a.createElement(S.a,{path:"/editor",component:O})))}}]),a}(r.a.Component);var A=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.d055d737.chunk.js.map