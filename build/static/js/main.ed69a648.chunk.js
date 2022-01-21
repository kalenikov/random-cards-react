(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{173:function(e,n,t){e.exports=t(213)},213:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(11),i=t.n(r),c=t(78),l=t(79),s=t(93),u=t(91),d=t(280),g=t(276),p=t(34),m=t(48),f=t(26),h=t(23),v=Object(h.a)(),E=t(149),b=t(46),k=t(270),y=t(272),S=t(216),O=t(152),w=t(260),x=t(7),j=(t(274),t(271)),C=t(71),T=t(130),F=t.n(T),R=t(131),M=t.n(R),z=(t(281),t(121),t(122),t(31)),L=t(62),I=t(56),H=Object(I.b)({name:"songs",initialState:{songs:[],songsViews:[],index:-1,song:{},isLoading:!1,getOnlyFavor:!1,showHidden:!1,term:"",fontSize:14,editMode:!1},reducers:{setSong:function(e,n){e.song=n.payload;var t=e.song.id,a=e.songs.filter((function(e){return console.log("set song"+e),e.id===t}));e.index=a[0].index},setIndex:function(e,n){e.index=n.payload},toogleGetOnlyFavor:function(e){e.getOnlyFavor=!e.getOnlyFavor},toogleShowHidden:function(e){e.showHidden=!e.showHidden},setSongsList:function(e,n){var t=n.payload;t.sort((function(e,n){return n.time_last_seen-e.time_last_seen}));e.songs=t.map((function(e,n){return Object(L.a)({},e,{index:n})})),console.log("setSongsList "+e.songs)},setTerm:function(e,n){e.term=n.payload},setFontSize:function(e,n){e.fontSize=n.payload},setEditMode:function(e,n){e.editMode=n.payload},setLoadingOn:function(e){e.isLoading=!0},setLoadingOff:function(e){e.isLoading=!1},toogleHide:function(e,n){e.song&&(e.song.hide=!e.song.hide),e.songs.map((function(e){return e._id===n.payload&&(e.hide=!e.hide),e}))},toogleFavor:function(e,n){e.song&&(e.song.favor=!e.song.favor),e.songs.map((function(e){return e._id===n.payload&&(e.favor=!e.favor),e}))}}}),_=H.actions,B=H.reducer,N=_.setSong,D=_.toogleGetOnlyFavor,G=_.setSongsList,W=_.setTerm,A=_.toogleFavor,P=_.setLoadingOff,U=_.setLoadingOn,J=_.setEditMode,V=_.setFontSize,$=(_.setIndex,_.toogleHide),q=_.toogleShowHidden,K=B,Q=t(20),X=t.n(Q),Y=t(49),Z="";Z="http://localhost:9000/api/v1/";var ee=t(123).create({baseURL:Z,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}}),ne=function(e){return console.log("getSongsList"),ee.get("/cards?limit=999"+(e?"&favor=true":""))},te=function(e){console.log("getSong+");var n=ee.get("/cards?id="+e);return console.log(n),console.log("getSong-"),n},ae=function(e,n){return ee.post("/cards",{_id:e,favor:n})},oe=function(e,n){return ee.post("/cards",{_id:e,hide:n})},re=function(e,n){return ee.post("/cards",{_id:e,content:n})},ie=function(e,n,t){return ee.post("/cards/add",{name:e,content:n,favor:t})},ce=function(e){return ee.delete("/cards",{data:{_id:e}})},le=Object(I.b)({name:"app",initialState:{initialized:!1,error:"",popper:""},reducers:{initializedSuccess:function(e){e.initialized=!0},setError:function(e,n){e.error=n.payload}}}),se=le.actions,ue=le.reducer,de=se.initializedSuccess,ge=se.setError,pe=ue,me=function(){return function(){var e=Object(Y.a)(X.a.mark((function e(n,t){var a,o;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(U()),a=t().songReducer.getOnlyFavor,e.prev=2,e.next=5,ne(a);case 5:o=e.sent,n(G(o.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0),n(ge(e.t0.toString()));case 13:n(P());case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n,t){return e.apply(this,arguments)}}()},fe=function(e,n){return function(){var t=Object(Y.a)(X.a.mark((function t(a){return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ae(e,!n);case 2:a(A(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},he=function(e,n){return function(){var t=Object(Y.a)(X.a.mark((function t(a,o){var r;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(U()),t.next=3,ce(e);case 3:t.sent,r=o().songReducer.songs,a(G(r.filter((function(n){return n._id!=e})))),a(P()),n.push("/cards");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},ve=t(267),Ee=t(285),be=t(268),ke=t(263),ye=t(264),Se=t(266),Oe=t(265),we=t(286),xe=t(269),je=t(126),Ce=t.n(je),Te=t(127),Fe=t.n(Te),Re=Object(w.a)((function(e){return Object(we.a)({list:{width:250},drawer:Object(b.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0})})})),Me=function(e){var n=Re();return o.a.createElement(Ee.a,{className:n.drawer,variant:"temporary",anchor:"left",open:e.open,onClose:e.handleDrawerClose,classes:{paper:n.drawerPaper}},o.a.createElement("div",{className:n.list,role:"presentation"},o.a.createElement(ke.a,null,o.a.createElement(ye.a,{onClick:e.handleDrawerClose,button:!0,component:z.a,to:"//"},o.a.createElement(Oe.a,{primary:"Main"})),o.a.createElement(o.a.Fragment,null,o.a.createElement(ye.a,{onClick:e.handleDrawerClose,button:!0,component:z.a,to:"/cards"},o.a.createElement(Se.a,null,o.a.createElement(Ce.a,null)),o.a.createElement(Oe.a,{primary:"My cards"})),o.a.createElement(ye.a,{button:!0,component:z.a,to:"/lists"},o.a.createElement(Se.a,null,o.a.createElement(Fe.a,null)),o.a.createElement(Oe.a,{primary:"My tags"})),o.a.createElement(ve.a,null),o.a.createElement(ye.a,null,o.a.createElement(be.a,{control:o.a.createElement(xe.a,{checked:e.getOnlyFavor,onChange:function(){return e.toogleGetOnlyFavor()},name:"ShowOnlyFavor",color:"primary"}),label:"Show only favor"})),o.a.createElement(ye.a,null,o.a.createElement(be.a,{control:o.a.createElement(xe.a,{checked:e.showHidden,onChange:function(){return e.toogleShowHidden()},name:"ShowHide",color:"primary"}),label:"Show hide"}))),o.a.createElement(ve.a,null))))},ze=Object(w.a)((function(e){return{list:{width:250},root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(b.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(b.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(x.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(x.c)(e.palette.common.white,.25)},marginLeft:0,width:"70%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(b.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),Le=Object(p.b)((function(e){return{getOnlyFavor:e.songReducer.getOnlyFavor,showHidden:e.songReducer.showHidden,term:e.songReducer.term}}),{toogleGetOnlyFavor:D,toogleShowHidden:q,toogleGetOnlyFavorUpdateList:function(e,n){return function(e,n){e(D()),n().songReducer.getOnlyFavor&&e(G(n().songReducer.songs.filter((function(e){return e.favor}))))}},setTerm:W})((function(e){var n=ze(),t=o.a.useState(!1),a=Object(E.a)(t,2),r=a[0],i=a[1];return o.a.createElement("div",{className:n.root},o.a.createElement(k.a,{position:"sticky"},o.a.createElement(j.a,null,o.a.createElement(S.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)}},o.a.createElement(F.a,null)),o.a.createElement(C.a,{className:n.title,variant:"h6",noWrap:!0},o.a.createElement(y.a,{component:z.a,to:"/",style:{color:"white"}},"Random Cards")),o.a.createElement("div",{className:n.search},o.a.createElement("div",{className:n.searchIcon},o.a.createElement(M.a,null)),o.a.createElement(O.a,{value:e.term,onChange:function(n){return e.setTerm(n.currentTarget.value)},placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"}})))),o.a.createElement(Me,{handleDrawerClose:function(e){i(!1)},getOnlyFavor:e.getOnlyFavor,toogleGetOnlyFavor:e.toogleGetOnlyFavor,toogleShowHidden:e.toogleShowHidden,open:r}))})),Ie=function(e){var n=e.error;return o.a.createElement(C.a,{variant:"h1"},n)},He=t(275),_e=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(He.a,{maxWidth:"lg"},o.a.createElement("div",null,o.a.createElement("h1",null,"Random cards v 15.06.2020"))))},Be=t(33),Ne=t(70),De=Object(p.b)(null,{addSongThunk:function(e,n,t,a){return function(){var o=Object(Y.a)(X.a.mark((function o(r){var i;return X.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r(U()),o.next=3,ie(n,t,a);case 3:i=o.sent,e.push("/card/"+i.data),r(P());case 6:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}()}})((function(e){return a.createElement(Be.d,{initialValues:{name:"",content:"",favor:!1},validate:function(e){console.log("validate");var n={};return e.name||(n.name="Enter song name"),e.content||(n.text="Enter song text"),n},onSubmit:function(n,t){var a=t.setSubmitting;e.addSongThunk(v,n.name,n.content,!1),a(!1)}},(function(e){var n=e.submitForm,t=e.isSubmitting,o=e.errors,r=e.touched,i=e.handleBlur,c=e.values,l=e.handleChange;return a.createElement(Be.c,null,a.createElement(Be.b,{component:Ne.b,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Song name",name:"name",onBlur:i,onChange:l,value:c.name}),a.createElement(Be.a,{name:"name"}),a.createElement(Be.b,{component:Ne.a,name:"favor",type:"checkbox",Label:{label:"Add to favor?"}}),";",a.createElement(Be.b,{component:Ne.b,variant:"outlined",margin:"normal",fullWidth:!0,rows:window.innerHeight/50,id:"content",label:"Song text",name:"content",multiline:!0,onChange:l}),r.text&&o.text?a.createElement("div",null,o.text):null,a.createElement("br",null),t&&a.createElement(g.a,null),a.createElement("br",null),a.createElement(y.a,{variant:"contained",color:"primary",disabled:t,onClick:n},"Save"))}))})),Ge=t(137),We=t.n(Ge);var Ae=t(277),Pe=Object(w.a)((function(e){return{root:{height:"97vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},spinner:{marginBottom:"30px"}}})),Ue=function(e){var n=e.title,t=void 0===n?"Songs is loading...":n,a=Pe();return o.a.createElement(He.a,{className:a.root},o.a.createElement(Ae.a,{size:100,className:a.spinner}),o.a.createElement(C.a,{variant:"h6"},t))},Je=t(214),Ve=t(282),$e=t(142),qe=t.n($e),Ke=t(138),Qe=t.n(Ke),Xe=t(143),Ye=t.n(Xe),Ze=t(140),en=t.n(Ze),nn=t(141),tn=t.n(nn),an=t(139),on=t.n(an),rn=Object(w.a)((function(e){return Object(we.a)({root:{display:"flex",flexDirection:"column",flexWrap:"nowrap"},fab:{position:"absolute",bottom:e.spacing(5),right:e.spacing(5)},floatButtonBlock:{color:"black",position:"absolute",right:"10px",top:"100px",zIndex:100,"& Button":{display:"block"}}})})),cn=function(e){var n=rn();return o.a.createElement(Ve.a,{className:n.floatButtonBlock},o.a.createElement(S.a,{onClick:function(n){return e.shuffle(n)}},o.a.createElement(Qe.a,null)),o.a.createElement(S.a,{onClick:function(n){return e.next(n)}},o.a.createElement(on.a,null)),o.a.createElement(S.a,{onClick:function(n){return e.changefontSize(n,1)}},o.a.createElement(en.a,null)),o.a.createElement(S.a,{onClick:function(n){return e.changefontSize(n,-1)}},o.a.createElement(tn.a,null)),o.a.createElement(S.a,{onClick:e.toogleEditMode},e.editMode?o.a.createElement(Ye.a,null):o.a.createElement(qe.a,null)))},ln=t(273),sn=t(90),un=t.n(sn),dn=t(68),gn=t.n(dn),pn=t(69),mn=t.n(pn),fn=t(145),hn=t.n(fn),vn=t(144),En=t.n(vn),bn=t(104),kn=function(e){var n=Object(a.useRef)();return Object(a.useEffect)((function(){n.current=e})),n.current},yn=Object(w.a)((function(e){return{paper:{border:"1px solid",top:"20px",left:"20px",padding:e.spacing(1),backgroundColor:e.palette.background.paper},typography:{padding:e.spacing(1),opacity:.5}}})),Sn=function(e){var n=Object(m.f)().id,t=yn(),r=Object(bn.usePopupState)({variant:"popper",popupId:"favorPopper"}),i=Object(a.useRef)(),c=e.song.favor,l=kn(c),s=kn(n);r.setAnchorEl(i.current),Object(a.useEffect)((function(){void 0!==l&&n===s&&c!==l&&(r.open(),setTimeout((function(){r.close()}),2e3))}),[n,c]);return o.a.createElement(He.a,null,o.a.createElement(C.a,{variant:"h6",noWrap:!0},e.song.name+(e.editMode?" (\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435)":"")),o.a.createElement(C.a,{variant:"caption"},"last seen: ".concat(new Date(e.song.time_last_seen).toLocaleDateString())),o.a.createElement(ln.a,Object.assign({anchorEl:i},Object(bn.bindPopper)(r)),o.a.createElement(Je.a,null,o.a.createElement(C.a,{className:t.typography},e.song.favor?"Song add to favor":"Song deleted from favor"))),o.a.createElement(S.a,{ref:i,onClick:function(){return e.toogleFavorThunk(e.song._id,e.song.favor)}},e.song.favor?o.a.createElement(gn.a,null):o.a.createElement(mn.a,null)),o.a.createElement(S.a,{onClick:function(){window.confirm("Delete this song?")&&e.deleteSongThunk(e.song._id,v)}},o.a.createElement(un.a,null)),o.a.createElement(S.a,{onClick:function(){return e.toogleHideThunk(e.song._id,e.song.hide)}},e.song.hide?o.a.createElement(En.a,null):o.a.createElement(hn.a,null)))},On=Object(w.a)((function(e){return Object(we.a)({root:{display:"flex",flexDirection:"column",flexWrap:"nowrap"},fab:{position:"absolute",bottom:e.spacing(5),right:e.spacing(5)},floatButtonBlock:{color:"black",position:"absolute",right:"10px",top:"100px",zIndex:100,"& Button":{display:"block"}},editable:{fontSize:function(e){return e.fontSize},padding:10,fontFace:"Roboto"}})})),wn=function(e){var n=On(e),t=o.a.createRef();if(e.isLoading||!e.song)return o.a.createElement(Ue,null);var a,r,i="undefined"===typeof(a=e.song.content)||null===a?"":(a+"").replace(/(\r\n|\n\r|\r|\n)/g,(r||"undefined"===typeof r?"<br />":"<br>")+"$1");return o.a.createElement(o.a.Fragment,null,o.a.createElement(cn,{shuffle:function(n){n.preventDefault(),e.editMode&&e.setEditMode(!1),e.getRandomSongIdThunk(e.history)},next:function(n){n.preventDefault(),e.editMode&&e.setEditMode(!1),e.getNextSongIdThunk(e.history)},changefontSize:function(n,t){e.setFontSize(e.fontSize+t)},toogleEditMode:function(){e.setEditMode(!e.editMode),e.editMode&&t.current&&(e.setSongContentThunk(e.song.id,function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("undefined"===typeof e||null===e)return"";var t=n?"\n":"";return e.replace(/<\s*\/?br\s*[\/]?>/gi,t)}(t.current.innerText)),e.setEditMode(!1))},editMode:e.editMode}),o.a.createElement(Sn,{song:e.song,editMode:e.editMode,toogleFavorThunk:e.toogleFavorThunk,toogleHideThunk:e.toogleHideThunk,deleteSongThunk:e.deleteSongThunk}),o.a.createElement(Je.a,{elevation:3},o.a.createElement(We.a,{html:i,innerRef:t,disabled:!e.editMode,spellCheck:"false",onChange:function(){return null},className:n.editable})))},xn=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&this.props.getSongByIdThunk(this.props.match.params.id)}},{key:"componentDidMount",value:function(){this.props.getSongByIdThunk(this.props.match.params.id)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(wn,{history:this.props.history,song:this.props.song,toogleFavorThunk:this.props.toogleFavorThunk,toogleHideThunk:this.props.toogleHideThunk,getRandomSongIdThunk:this.props.getRandomSongIdThunk,getNextSongIdThunk:this.props.getNextSongIdThunk,fontSize:this.props.fontSize,setFontSize:this.props.setFontSize,editMode:this.props.editMode,setEditMode:this.props.setEditMode,setSongContentThunk:this.props.setSongContentThunk,isLoading:this.props.isLoading,deleteSongThunk:this.props.deleteSongThunk}))}}]),t}(o.a.Component),jn=Object(p.b)((function(e){return{song:e.songReducer.song,isLoading:e.songReducer.isLoading,fontSize:e.songReducer.fontSize,editMode:e.songReducer.editMode}}),{getSongByIdThunk:function(e){return function(){var n=Object(Y.a)(X.a.mark((function n(t){var a;return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(U()),n.next=3,te(e);case 3:1===(a=n.sent).data.length&&(t(P()),t(N(a.data[0])));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},getRandomSongIdThunk:function(e){return function(n,t){var a=t().songReducer,o=a.songs;o.filter((function(e){return!e.hide}));a.getOnlyFavor&&(o=a.songs.filter((function(e){return e.favor}))),a.showHidden||(o=o.filter((function(e){return!e.hide})));var r=o[Math.floor(Math.random()*o.length)];n(N(Object(L.a)({},r))),e.push("/card/"+r._id)}},getNextSongIdThunk:function(e){return function(n,t){var a=t().songReducer,o=a.index+1,r=a.songs[o];n(N(Object(L.a)({},r))),e.push("/card/"+r._id)}},toogleFavorThunk:fe,setEditMode:J,toogleHideThunk:function(e,n){return function(){var t=Object(Y.a)(X.a.mark((function t(a,o){return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe(e,!n);case 2:a($(e)),a(G(o().songReducer.songs.filter((function(n){return n._id!=e}))));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},setSongContentThunk:function(e,n){return function(){var t=Object(Y.a)(X.a.mark((function t(a,o){return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(U()),t.next=3,re(e,n);case 3:202===t.sent.status&&(a(P()),a(N(Object(L.a)({},o().songReducer.song,{content:n}))));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},setFontSize:V,deleteSongThunk:he})(xn),Cn=t(279),Tn=t(278),Fn=t(147),Rn=t.n(Fn),Mn=t(151),zn=t(146),Ln=Object(w.a)((function(e){return{root:{},fab:{position:"fixed",bottom:e.spacing(5),right:e.spacing(4)},listContainer:{height:"85vh"}}})),In=function(e){var n=e.index,t=e.style,a=e.data[n];return o.a.createElement(ye.a,{key:n,button:!0,ContainerProps:{style:t},ContainerComponent:"div"},o.a.createElement(Se.a,null,a.favor?o.a.createElement(gn.a,null):o.a.createElement(mn.a,null)),o.a.createElement(Oe.a,{component:z.a,to:"/card/"+a._id,primary:"["+a.index+"] "+a.name,onClick:function(){return v.push("/card/"+a._id+"/"+n)}}),o.a.createElement(Oe.a,null,new Date(a.time_last_seen).toLocaleString()),o.a.createElement(Tn.a,{onClick:function(){return alert("!")}},o.a.createElement(S.a,{edge:"end","aria-label":"delete"},o.a.createElement(un.a,null))))},Hn=function(e){var n=o.a.createRef();return o.a.createElement(o.a.Fragment,null,o.a.createElement(zn.a,null,(function(t){var a=t.height,r=t.width;return o.a.createElement(Mn.a,{ref:n,itemData:e.songs,itemCount:e.songs.length,overscanCount:20,height:a,width:r,itemSize:48},In)})))},_n=function(e){var n=e.songs,t=e.isLoading,a=e.lastSongIndex,r=Ln();return t?o.a.createElement(Ue,null):o.a.createElement(He.a,{className:r.listContainer},o.a.createElement(C.a,{variant:"h4"},"All songs"),o.a.createElement(Hn,{songs:n,lastSongIndex:a}),o.a.createElement(Cn.a,{component:z.b,to:"/new",className:r.fab,color:"primary","aria-label":"add"},o.a.createElement(Rn.a,null)))},Bn=t(27),Nn=function(e){return e.songReducer.term},Dn=function(e){return e.songReducer.showHidden},Gn=Object(Bn.a)([function(e){return e.songReducer.songs},Nn,function(e){return e.songReducer.getOnlyFavor}],(function(e,n,t){var a=e.filter((function(e){return!e.hide}));t&&(a=e.filter((function(e){return e.favor}))),Dn||(a=e.filter((function(e){return!e.hide})));return a})),Wn=Object(p.b)((function(e){return{songs:Gn(e),term:Nn(e),isLoading:e.songReducer.isLoading,getOnlyFavor:e.songReducer.getOnlyFavor,lastSongIndex:e.songReducer.lastSongIndex}}),{getSongsListThunk:me,setTerm:W,toogleFavorThunk:fe,deleteSongThunk:he})(_n),An=t(150),Pn=t(148),Un=Object(Pn.createLogger)({level:"log"}),Jn=[].concat(Object(An.a)(Object(I.c)()),[Un]),Vn=Object(I.a)({reducer:{songReducer:K,app:pe},middleware:Jn}),$n=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){if(this.props.error)return o.a.createElement(Ie,{error:this.props.error});if(!this.props.initialized)return o.a.createElement(g.a,null);var e=o.a.createElement(m.c,null,o.a.createElement(m.a,{path:"/new/",exact:!0,render:function(){return o.a.createElement(De,null)}}),o.a.createElement(m.a,{path:"/card/:id/:index(\\d+)?",component:jn}),o.a.createElement(m.a,{path:"/cards/",exact:!0,render:function(){return o.a.createElement(Wn,null)}}),o.a.createElement(m.a,{exact:!0,component:_e}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,null),o.a.createElement(Le,null),e)}}]),t}(o.a.Component),qn=Object(f.d)(Object(p.b)((function(e){return{initialized:e.app.initialized,error:e.app.error}}),{initializeApp:function(){return function(e){e(me()),e(de())}}}))($n),Kn=function(){return console.log("redirect_uri",window.location.origin),o.a.createElement(m.b,{history:v},o.a.createElement(p.a,{store:Vn},o.a.createElement(qn,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(Kn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[173,1,2]]]);