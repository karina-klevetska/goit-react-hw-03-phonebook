(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(t,e,n){},25:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),s=(n(16),n(11)),o=n(4),l=n(5),u=n(8),d=n(7),b=n(2),h=n.n(b),m=n(6),j=(n(25),n(0)),f=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameId=h()(),t.numberId=h()(),t.handleChangeName=function(e){t.setState({name:e.target.value})},t.handleChangeNumber=function(e){t.setState({number:e.target.value})},t.handleSubmit=function(e){e.preventDefault();var n=t.props.banOnAddingDuplicateContact,a=t.state,c=a.name,r=a.number,i=Object(m.a)(t).resetForm;n({id:h()(),name:c,number:r}),i()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.handleSubmit,e=this.handleChangeName,n=this.handleChangeNumber,a=this.nameId,c=this.numberId,r=this.state,i=r.name,s=r.number;return Object(j.jsxs)("form",{className:"contact-form",onSubmit:t,children:[Object(j.jsx)("label",{className:"label",htmlFor:a,children:"Enter name"}),Object(j.jsx)("input",{id:a,type:"text",className:"input",name:"name",value:i,onChange:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(j.jsx)("label",{className:"label",htmlFor:c,children:"Enter number"}),Object(j.jsx)("input",{id:c,type:"tel",className:"input",name:"number",value:s,onChange:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(j.jsx)("button",{type:"submit",className:"contact-button",children:"Add contact"})]})}}]),n}(a.Component),p=f,O=(n(27),function(t){var e=t.filterId,n=t.handleChangeFilter;return Object(j.jsxs)("div",{className:"filter-container",children:[Object(j.jsx)("label",{className:"label",htmlFor:e,children:"Find contacts by name"}),Object(j.jsx)("input",{className:"input",id:e,type:"text",name:"filter",onChange:n})]})}),C=(n(28),function(t){var e=t.children;return Object(j.jsx)("ul",{className:"contact-list",children:e})}),g=(n(29),function(t){var e=t.filter,n=t.contacts,a=t.deleteContact;return Object(j.jsx)(j.Fragment,{children:""===e?n.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(j.jsxs)("li",{children:[n,": ",c,Object(j.jsx)("button",{type:"button",className:"delete-button",onClick:function(){return a(e)},children:"Delete"})]},e)})):n.map((function(t){var n=t.id,c=t.name,r=t.number;return c.toLowerCase().includes(e.toLowerCase())&&Object(j.jsxs)("li",{children:[c,": ",r,Object(j.jsx)("button",{type:"button",className:"delete-button",onClick:function(){return a(n)},children:"Delete"})]},n)}))})}),v=(n(30),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.filterId=h()(),t.addNewContact=function(e){t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[e])}}))},t.banOnAddingDuplicateContact=function(e){t.state.contacts.map((function(t){return t.name})).includes(e.name)?alert("".concat(e.name," is already in contacts")):t.addNewContact(e)},t.handleChangeFilter=function(e){t.setState({filter:e.target.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.banOnAddingDuplicateContact,e=this.handleChangeFilter,n=this.deleteContact,a=this.filterId,c=this.state,r=c.filter,i=c.contacts;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(p,{banOnAddingDuplicateContact:t}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(O,{filterId:a,handleChangeFilter:e}),Object(j.jsx)(C,{children:Object(j.jsx)(g,{filter:r,contacts:i,deleteContact:n})})]})}}]),n}(a.Component)),x=v;i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.beee6268.chunk.js.map