(this["webpackJsonpfaculty-dashboard"]=this["webpackJsonpfaculty-dashboard"]||[]).push([[0],{35:function(e,a,t){e.exports=t.p+"static/media/user.5e946c20.svg"},45:function(e,a,t){},62:function(e,a,t){e.exports=t(89)},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},89:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(21),o=t.n(r),s=(t(67),t(12)),c=t(15),i=t(14),m=t(13),u=t(10),d=t(16),p=t(52),h=t.n(p),g=(t(45),t(68),t(35)),E=t.n(g),v=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:{textAlign:"center",alignItems:"center",display:"flex",justifyContent:"center"}},l.a.createElement("span",{style:{marginTop:200,fontSize:50,fontWeight:"lighter"}},"Coming soon... Stay tuned!"))}}]),a}(l.a.Component),f=(t(69),t(26)),b=t(19),y=t(94),N=t(55),D=t(92),C=t(93),S=t(95),O=t(29),k=t.n(O),w=t(53),F=t.n(w),j=t(41),T=t.n(j),I=(t(85),t(25)),B=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(i.a)(a).call(this,e))).handleFromChange=t.handleFromChange.bind(Object(m.a)(t)),t.handleToChange=t.handleToChange.bind(Object(m.a)(t)),t.state={from:void 0,to:void 0},t.today=new Date,t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"showFromMonth",value:function(){var e=this.state,a=e.from,t=e.to;a&&k()(t).diff(k()(a),"months")<2&&this.to.getDayPicker().showMonth(a)}},{key:"handleFromChange",value:function(e){if(this.setState({from:e}),console.log(e),void 0!==e){var a=new Date(e);a=a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear(),console.log(a),this.props.fromDate(a)}}},{key:"handleToChange",value:function(e){if(null==this.state.from)return alert("from is null"),console.log(document.getElementsByTagName("input")[4]),document.getElementsByTagName("input")[4].value="",void console.log(document.getElementsByTagName("input")[4].value);if(this.setState({to:e},this.showFromMonth),console.log(e),void 0!==e){var a=new Date(e);a=a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear(),console.log(a),this.props.toDate(a)}}},{key:"render",value:function(){var e=this,a=this.state,t=a.from,n=a.to,r={start:t,end:n};return l.a.createElement("div",{className:"InputFromTo"},l.a.createElement(T.a,{id:"FROMFROM",min:this.today,value:t,placeholder:"From",format:"LL",formatDate:I.formatDate,parseDate:I.parseDate,dayPickerProps:{selectedDays:[t,{from:t,to:n}],disabledDays:{before:this.today,after:n},toMonth:n,modifiers:r,numberOfMonths:2,onDayClick:function(){e.to.getInput().focus(),e.handleFromChange()}},onDayChange:this.handleFromChange})," ","\u2014"," ",l.a.createElement("span",{className:"InputFromTo-to"},l.a.createElement(T.a,{id:"TOTO",min:this.today,ref:function(a){return e.to=a},value:n,placeholder:"To",format:"LL",formatDate:I.formatDate,parseDate:I.parseDate,dayPickerProps:{selectedDays:[t,{from:t,to:n}],disabledDays:{before:t},modifiers:r,month:t,fromMonth:t,numberOfMonths:2},onDayChange:this.handleToChange})),l.a.createElement(F.a,null,l.a.createElement("style",null,"\n  .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {\n    background-color: #f0f8ff !important;\n    color: #4a90e2;\n  }\n  .InputFromTo .DayPicker-Day {\n    border-radius: 0 !important;\n  }\n  .InputFromTo .DayPicker-Day--start {\n    border-top-left-radius: 50% !important;\n    border-bottom-left-radius: 50% !important;\n  }\n  .InputFromTo .DayPicker-Day--end {\n    border-top-right-radius: 50% !important;\n    border-bottom-right-radius: 50% !important;\n  }\n  .InputFromTo .DayPickerInput-Overlay {\n    width: 550px;\n  }\n  .InputFromTo-to .DayPickerInput-Overlay {\n    margin-left: -198px;\n  }\n")))}}]),a}(l.a.Component),L=function(){return l.a.createElement("h1",null,"Not found")},P=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Leave Log comes here"))}}]),a}(l.a.Component),x=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(i.a)(a).call(this,e))).handleApplyForm=function(e){e.preventDefault();for(var a=Object(m.a)(t),n=!1,l=document.getElementsByName("formHorizontalRadios"),r=0;r<l.length;r++)l[r].checked&&(t.formData.leaveType=l[r].value,n=!0);if(t.formData.reason=document.getElementById("reason").value,!n)return alert("Select leave type");if(!t.formData.reason)return alert("Enter Reason");var o=a.today.getDate()+"/"+(a.today.getMonth()+1)+"/"+a.today.getFullYear();if(a.today=o,!t.formData.startDate||!t.formData.endDate)return alert("Enter Dates");var s=new Date(a.today),c=new Date(t.formData.startDate),i=new Date(t.formData.endDate);if(console.log(s),console.log(c),console.log(i),c<s||c>i)return alert("Improper Dates");alert("Im pausing, check log!"),console.log(t.formData)},t.handlefromDate=function(e){t.formData.startDate=e},t.handletoDate=function(e){t.formData.endDate=e},t.formData={leaveType:null,startDate:null,endDate:null,reason:null},t.today=new Date,t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y.a,{onSubmit:this.handleApplyForm},l.a.createElement("fieldset",null,l.a.createElement(N.a,null,l.a.createElement(y.a.Group,{id:"leaveType"},l.a.createElement(y.a.Label,{as:"legend",column:!0,sm:2},"Type of Leave"),l.a.createElement(y.a.Check,{type:"radio",label:"Casual Leave",name:"formHorizontalRadios",id:"formHorizontalRadios1",value:"CL"}),l.a.createElement(y.a.Check,{type:"radio",label:"Sick Leave",name:"formHorizontalRadios",id:"formHorizontalRadios2",value:"SL"}),l.a.createElement(y.a.Check,{type:"radio",label:"Privilege Leave",name:"formHorizontalRadios",id:"formHorizontalRadios3",value:"PL"})))),l.a.createElement("br",null),l.a.createElement(N.a,null,l.a.createElement("span",null,"Enter Dates"),l.a.createElement(B,{fromDate:this.handlefromDate,toDate:this.handletoDate})),l.a.createElement("br",null),l.a.createElement(N.a,null,l.a.createElement(y.a.Group,{controlId:"exampleForm.ControlTextarea1",value:"reason"},l.a.createElement(y.a.Label,null,"Reason"),l.a.createElement(y.a.Control,{as:"textarea",rows:"2",id:"reason"}))),l.a.createElement("br",null),l.a.createElement(N.a,null,l.a.createElement(D.a,{variant:"primary",type:"submit"},"Apply"))))}}]),a}(l.a.Component),A=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Leave Request Table Comes Here"))}}]),a}(l.a.Component),R=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return console.log("Page Load Started"),l.a.createElement(f.a,null,l.a.createElement(C.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},l.a.createElement(C.a.Brand,{href:"#"},l.a.createElement(f.b,{exact:!0,activeClassName:"active",to:"/"},"Leave Log")),l.a.createElement(C.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(C.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(S.a,{className:"mr-auto"},l.a.createElement(S.a.Link,{href:"#"},l.a.createElement(f.b,{activeClassName:"active",to:"/apply"},"Apply")),l.a.createElement(S.a.Link,{href:"#"},l.a.createElement(f.b,{activeClassName:"active",to:"/approvedecline"},"Approve/Decline"))))),l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/",component:P}),l.a.createElement(b.a,{path:"/apply",component:x}),l.a.createElement(b.a,{path:"/approvedecline",component:A}),l.a.createElement(b.a,{component:L})))}}]),a}(l.a.Component),M=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(i.a)(a).call(this,e))).handleLogin=function(e){e.preventDefault();var a=Object(m.a)(t),n={id:document.getElementsByName("id")[0].value,password:document.getElementsByName("password")[0].value};console.log(JSON.stringify(n)),fetch(a.state.sendurl+"login",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(n)}).then((function(e){if(e.status>=400)throw new Error("Bad response from server");return e.json()})).then((function(e){console.log(e),1==(e=JSON.parse(e)).res.length?(console.log("Success"),a.setState({user:e.res[0].name}),a.setState({login:1})):0==e.res.length?(console.log("Incorrect credentials!"),alert("Incorrect credentials!")):(console.log("Failure"),alert("Something went wrong, Try again later!"))})).catch((function(e){console.log(e)}))},t.handleRegister=function(e){e.preventDefault();var a=Object(m.a)(t),n={id:document.getElementsByName("id")[0].value,name:document.getElementsByName("name")[0].value,dept:document.getElementsByName("dept")[0].value,email:document.getElementsByName("email")[0].value,password:document.getElementsByName("password")[0].value};console.log(JSON.stringify(n)),fetch(a.state.sendurl+"register",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(n)}).then((function(e){if(e.status>=400)throw new Error("Bad response from server");return e.json()})).then((function(e){console.log(e),1==(e=JSON.parse(e)).res.length?(console.log("Account already exists!"),alert("Account already exists!")):1==e.res.affectedRows?(console.log("Success"),alert("Account successfully created!")):(console.log("Failure"),alert("Something went wrong, Try again later!"))})).catch((function(e){console.log(e)}))},t.handleFP=function(e){e.preventDefault();var a=Object(m.a)(t),n={id:document.getElementsByName("id")[0].value};console.log(JSON.stringify(n)),fetch(a.state.sendurl+"fp",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(n)}).then((function(e){if(e.status>=400)throw new Error("Bad response from server");return e.json()})).then((function(e){console.log(e),1==(e=JSON.parse(e)).res?(console.log("Success"),alert("Password sent to your Email ID!")):0==e.res&&alert("Account does not exist!")})).catch((function(e){console.log(e)}))},t.handleChange=function(e){if(e.preventDefault(),console.log(e.target),0==t.state.login)"Register"==e.target.value?t.setState({page:1}):"Forgot Password?"==e.target.value?t.setState({page:2}):t.setState({page:0});else{for(var a=e.target.innerHTML.split(" ")[0],n=0;n<e.target.parentNode.parentNode.children.length;n++)e.target.parentNode.parentNode.children[n].children[0].style.borderStyle="none";e.target.style.borderStyle="solid","My"==a?t.setState({page:0}):"Course"==a?t.setState({page:1}):"Time"==a?t.setState({page:2}):"Announcements"==a?t.setState({page:3}):"Leave"==a?t.setState({page:4}):(t.setState({page:0}),t.setState({login:0}))}},t.state={page:0,login:0,user:"User",sendurl:"https://server-for-faculty-dashboard.herokuapp.com/"},t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){document.title="Faculty Dashboard"}}]),Object(u.a)(a,[{key:"render",value:function(){return 0==this.state.login?0==this.state.page?l.a.createElement("div",{className:"Container"},l.a.createElement("div",{className:"Box"},l.a.createElement("img",{src:E.a,className:"Userloginlogo",alt:"User"}),l.a.createElement("h1",{className:"Heads"},"Sign In"),l.a.createElement("div",{className:"Content"},l.a.createElement("form",{onSubmit:this.handleLogin},l.a.createElement("div",{className:"FormGroup"},l.a.createElement("input",{className:"InputBoxes",name:"id",placeholder:"Faculty ID",required:!0}),l.a.createElement("span",{className:"Subheads",name:"userinv",style:{visibility:"collapse"}},"Enter a username!")),l.a.createElement("div",{className:"FormGroup"},l.a.createElement("input",{className:"InputBoxes",name:"password",type:"password",placeholder:"Password",required:!0}),l.a.createElement("span",{className:"Subheads",name:"passinv",style:{visibility:"collapse"}},"Invalid password!")),l.a.createElement("input",{className:"btn-lg btn btn-default InputBoxes",type:"submit",value:"Login"}),l.a.createElement("br",null),l.a.createElement("div",{className:"FormGroup"},l.a.createElement("input",{className:"btn-md btn btn-default Smbtn",value:"Register",onClick:this.handleChange}),l.a.createElement("input",{className:"btn-md btn btn-default Smbtn",value:"Forgot Password?",onClick:this.handleChange})))))):1==this.state.page?l.a.createElement("div",{className:"Container"},l.a.createElement("div",{className:"Box"},l.a.createElement("img",{src:E.a,className:"Userloginlogo",alt:"User"}),l.a.createElement("h1",{className:"Heads"},"Register"),l.a.createElement("div",{className:"Content"},l.a.createElement("form",{onSubmit:this.handleRegister},l.a.createElement("div",{className:"FormGroup"},l.a.createElement("input",{className:"InputBoxes",name:"id",placeholder:"Faculty ID",required:!0}),l.a.createElement("span",{className:"Subheads",name:"userinv",style:{visibility:"collapse"}},"Enter a username!")),l.a.createElement("div",{className:"FormGroup"},l.a.createElement("input",{className:"InputBoxes",name:"name",placeholder:"Full Name",required:!0}),l.a.createElement("span",{className:"Subheads",name:"userinv",style:{visibility:"collapse"}},"Enter a username!")),l.a.createElement("div",{className:"FormGroup"},l.a.createElement("select",{className:"InputBoxes",name:"dept",placeholder:"Department",required:!0},l.a.createElement("option",{default:!0,value:"cse"},"CSE"),l.a.createElement("option",{value:"ece"},"ECE"),l.a.createElement("option",{value:"eee"},"EEE"),l.a.createElement("option",{value:"mec"},"MEC"),l.a.createElement("option",{value:"cvl"},"CVL"),l.a.createElement("option",{value:"che"},"CHE"),l.a.createElement("option",{value:"aro"},"ARO"),l.a.createElement("option",{value:"sci"},"SCI"),l.a.createElement("option",{value:"eng"},"ENG"),l.a.createElement("option",{value:"mat"},"MAT"),l.a.createElement("option",{value:"asc"},"ASC")),l.a.createElement("span",{className:"Subheads",name:"userinv",style:{visibility:"collapse"}},"Enter a username!")),l.a.createElement("div",{className:"FormGroup"},l.a.createElement("input",{className:"InputBoxes",name:"email",placeholder:"Email ID",pattern:"^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$",required:!0}),l.a.createElement("span",{className:"Subheads",name:"userinv",style:{visibility:"collapse"}},"Enter an Email!")),l.a.createElement("div",{className:"FormGroup"},l.a.createElement(h.a,{className:"FormGroup",style:{border:0},minLength:5,minScore:2,scoreWords:["Weak","Okay","Good","Strong","Stronger"],tooShortWord:"Too short",inputProps:{name:"password",autoComplete:"off",className:"Passbox",placeholder:"Password",required:"true",pattern:"^.{5}.*$"}})),l.a.createElement("input",{className:"btn-lg btn btn-default InputBoxes",type:"submit",value:"Register"}),l.a.createElement("br",null),l.a.createElement("div",{className:"FormGroup"},l.a.createElement("input",{className:"btn-md btn btn-default Smbtn",value:"Login",onClick:this.handleChange}),l.a.createElement("input",{className:"btn-md btn btn-default Smbtn",value:"Forgot Password?",onClick:this.handleChange})))))):l.a.createElement("div",{className:"Container"},l.a.createElement("div",{className:"Box"},l.a.createElement("img",{src:E.a,className:"Userloginlogo",alt:"User"}),l.a.createElement("h1",{className:"Heads"},"Forgot Password"),l.a.createElement("div",{className:"Content"},l.a.createElement("form",{onSubmit:this.handleFP},l.a.createElement("div",{className:"FormGroup"},l.a.createElement("span",{className:"Subheads",name:"otp-thing"},"Send the password to the registered Email ID?"),l.a.createElement("span",{className:"Subheads",name:"userinv",style:{visibility:"collapse"}},"This is the header!")),l.a.createElement("div",{className:"FormGroup"},l.a.createElement("input",{className:"InputBoxes",name:"id",placeholder:"Faculty ID",required:!0}),l.a.createElement("span",{className:"Subheads",name:"userinv",style:{visibility:"collapse"}},"Enter a Username!")),l.a.createElement("div",{className:"FormGroup"},l.a.createElement("input",{className:"btn-lg btn btn-default InputBoxes",type:"submit",value:"Send"}),l.a.createElement("br",null)),l.a.createElement("div",{className:"FormGroup"},l.a.createElement("input",{className:"btn-md btn btn-default Smbtn",value:"Login",onClick:this.handleChange}),l.a.createElement("input",{className:"btn-md btn btn-default Smbtn",value:"Register",onClick:this.handleChange})))))):l.a.createElement("div",{className:"Container2"},l.a.createElement("div",null,l.a.createElement("div",{className:"row Topbar"},l.a.createElement("div",{className:"col-lg-2",onClick:this.handleChange},l.a.createElement("span",{style:{borderStyle:"solid"},className:"Navbut"},"My Profile")),l.a.createElement("div",{className:"col-lg-2",onClick:this.handleChange},l.a.createElement("span",{className:"Navbut"},"Course Handled")),l.a.createElement("div",{className:"col-lg-2",onClick:this.handleChange},l.a.createElement("span",{className:"Navbut"},"Time Table")),l.a.createElement("div",{className:"col-lg-2",onClick:this.handleChange},l.a.createElement("span",{className:"Navbut"},"Announcements")),l.a.createElement("div",{className:"col-lg-2",onClick:this.handleChange},l.a.createElement("span",{className:"Navbut"},"Leave Management")),l.a.createElement("div",{className:"col-lg-2",onClick:this.handleChange,title:"Logout"},l.a.createElement("span",{className:"Navbut"},this.state.user))),l.a.createElement("hr",null),0==this.state.page?l.a.createElement(v,null):1==this.state.page?l.a.createElement(v,null):2==this.state.page?l.a.createElement(v,null):3==this.state.page?l.a.createElement(v,null):4==this.state.page?l.a.createElement(R,null):l.a.createElement(v,null)))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[62,1,2]]]);
//# sourceMappingURL=main.2ed466af.chunk.js.map