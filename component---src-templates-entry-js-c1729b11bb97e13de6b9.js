(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"0TdT":function(e,t,n){e.exports={masthead:"entry-module--masthead--20X7M",notes:"entry-module--notes--NEkaU",fadeIn:"entry-module--fadeIn--g28lU",main:"entry-module--main--2y0uD",title:"entry-module--title--3Yzff",fadeDown:"entry-module--fadeDown--34Qix",container:"entry-module--container--1M61v",gatsbyHighlight:"entry-module--gatsby-highlight--3euTM",curve:"entry-module--curve--27sOy",curveContainer:"entry-module--curveContainer--2Pu83",toggle:"entry-module--toggle--34cD4",top:"entry-module--top--3iFBU",middle:"entry-module--middle--1ZrOS",bottom:"entry-module--bottom--1QVnv",menu:"entry-module--menu--1eFb8",menuItem:"entry-module--menuItem--1V6-N",pagination:"entry-module--pagination--yecTL",desc:"entry-module--desc--1Nok7",prevDesc:"entry-module--prevDesc--1W6k8",nextDesc:"entry-module--nextDesc--2HRVs",nextPrevPages:"entry-module--nextPrevPages--2E-w_",previous:"entry-module--previous--3xe7X",next:"entry-module--next--OrTO2"}},QegR:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("Wbzz"),o=n("qhky"),m=n("0TdT"),c=function(e){var t=e.title,n=e.mastheadRef;return l.a.createElement("div",{ref:n,className:m.masthead},l.a.createElement("h1",{className:m.title+" "+m.container},t),l.a.createElement("div",{className:m.curve},l.a.createElement("div",{className:m.curveContainer},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 49 19",height:"70",preserveAspectRatio:"none","aria-hidden":"true",focusable:"false"},l.a.createElement("path",{d:"M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z"})))))},s=function(e){var t=e.title,n=e.children,s=Object(a.useRef)(null),i=Object(a.useState)("i0"),u=i[0],d=i[1],v=Object(a.useState)(""),p=v[0],E=v[1],g=Object(a.useState)(""),h=g[0],y=g[1],f=Object(a.useState)(""),w=f[0],L=f[1],b=Object(a.useState)("rMenuClose"),N=b[0],k=b[1];Object(a.useEffect)((function(){var e=function(e){var t=s.current.clientHeight-133;document.body.scrollTop>=t||document.documentElement.scrollTop>=t?d("rMenuClose"===N?"i1":"i0"):d("i0")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[N]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"wrap"},l.a.createElement(o.a,null,l.a.createElement("meta",{name:"description",content:"Personal Site"}),l.a.createElement("meta",{name:"title",property:"og:title",content:"Data Science"}),l.a.createElement("meta",{property:"og:type",content:"Website"}),l.a.createElement("meta",{name:"image",property:"og:image",content:"https://live.staticflickr.com/8601/15891138064_3a9f462786_k.jpg"}),l.a.createElement("meta",{name:"description",property:"og:description",content:"Personal Site"}),l.a.createElement("meta",{name:"author",content:"Darius Kharazi"})),l.a.createElement(c,{title:t,mastheadRef:s}),l.a.createElement("main",{className:m.main+" "+m.container},n)),l.a.createElement("div",{className:m.menu+" "+N},l.a.createElement("div",{className:"container"},l.a.createElement(r.Link,{className:m.menuItem,to:"/"},"Blog"),l.a.createElement(r.Link,{className:m.menuItem,to:"/about"},"About Me"),l.a.createElement(r.Link,{className:m.menuItem,to:"/projects"},"Projects"),l.a.createElement(r.Link,{className:m.menuItem,to:"/notes"},"Notes"))),l.a.createElement("div",{className:m.toggle,role:"button",onClick:function(){if(""===h)E("rTop"),y("rMid"),L("rBot"),k("rMenu"),d("i0");else{var e=s.current.clientHeight-133;(document.body.scrollTop>=e||document.documentElement.scrollTop>=e)&&d("i1"),E(""),y(""),L(""),k("rMenuClose")}},onKeyPress:function(e){if("Enter"===e.key)if(""===h)E("rTop"),y("rMid"),L("rBot"),k("rMenu"),d("i0");else{var t=s.current.clientHeight-133;(document.body.scrollTop>=t||document.documentElement.scrollTop>=t)&&d("i1"),E(""),y(""),L(""),k("rMenuClose")}},tabIndex:0},l.a.createElement("span",{className:m.top+" "+u+" "+p}),l.a.createElement("span",{className:m.middle+" "+u+" "+h}),l.a.createElement("span",{className:m.bottom+" "+u+" "+w})))};t.default=function(e){var t,n,a=e.data,o=e.pageContext;null!=o.previousSlug&&(t=l.a.createElement(r.Link,{to:"/notes/"+o.previousSlug},l.a.createElement("span",null,l.a.createElement("svg",{stroke:"#195b8a",fill:"#195b8a",strokeWidth:"0",viewBox:"0 0 24 24",height:"1.5em",width:"1.5em",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})),l.a.createElement("p",null,o.previousTitle)))),null!=o.nextSlug&&(n=l.a.createElement(r.Link,{to:"/notes/"+o.nextSlug},l.a.createElement("span",null,l.a.createElement("p",null,o.nextTitle),l.a.createElement("svg",{stroke:"#195b8a",fill:"#195b8a",strokeWidth:"0",viewBox:"0 0 24 24",height:"1.5em",width:"1.5em",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})))));var c=null==n?null:"Next",i=null==t?null:"Previous";return l.a.createElement(s,{title:a.markdownRemark.frontmatter.title},l.a.createElement("div",{className:m.notes},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.markdownRemark.html}})),l.a.createElement("div",{className:m.pagination},l.a.createElement("div",{className:m.desc},l.a.createElement("div",{className:m.prevDesc},i),l.a.createElement("div",{className:m.nextDesc},c)),l.a.createElement("div",{className:m.nextPrevPages},l.a.createElement("div",{className:m.previous},t),l.a.createElement("div",{className:m.next},n))))}}}]);
//# sourceMappingURL=component---src-templates-entry-js-c1729b11bb97e13de6b9.js.map