(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),i=n.n(r),o=(n(15),n(4)),s=n(5),b=n(6),d=n(10),u=n(9),j=n(7),l=n.n(j),h=n(0),O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)("button",{className:l.a.btn,name:e,type:"button",onClick:n,children:e},e)}))})},x=function(e){var t=e.title;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h2",{children:t})})},f=n(8),g=n.n(f),p=function(e){var t=e.title,n=e.children;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:g.a.section,children:[Object(h.jsx)("h2",{children:t}),n]})})},v=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["GOOD: ",t]}),Object(h.jsxs)("p",{children:["NEUTRAL: ",n]}),Object(h.jsxs)("p",{children:["BAD: ",c]}),Object(h.jsxs)("p",{children:["TOTAL: ",a," "]}),Object(h.jsxs)("p",{children:["POSITIVE FEEDBACK: ",r,"%"]})]})},k=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.changeState=function(t){var n=t.target.name;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{title:"Please leave feedback",children:Object(h.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:this.changeState})}),Object(h.jsx)(p,{title:"Statistic",children:this.countTotalFeedback()?Object(h.jsx)(v,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(x,{title:"No feedback given"})})]})}}]),n}(c.Component),F=k;i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={btn:"FeedbackOption_btn__15ncJ"}},8:function(e,t,n){e.exports={section:"Section_section__1VAri"}}},[[17,1,2]]]);
//# sourceMappingURL=main.3f5f1a57.chunk.js.map