(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ErrorWrapper:"ErrorImage_ErrorWrapper__2rgyZ",text:"ErrorImage_text__qdZoK"}},12:function(e,t,a){e.exports={backdrop:"Modal_backdrop__3KgI4",modal:"Modal_modal__1TS7v"}},13:function(e,t,a){e.exports={item:"ImageGalleryItem_item__1lTA3",image:"ImageGalleryItem_image__14hM8"}},17:function(e,t,a){e.exports={overlay:"Loader_overlay__3Sr__"}},18:function(e,t,a){e.exports={list:"ImageGallery_list__3diw1"}},19:function(e,t,a){e.exports={btn:"Button_btn__3G8jr"}},25:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(7),s=a.n(c),i=(a(25),a(3)),l=a(4),u=a(6),m=a(5),d=a(9),h=(a(15),a(8)),p=a.n(h),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:" "},e.handleNameChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()?(e.props.onSubmit(e.state.imageName),e.setState({imageName:""})):d.b.error("Enter a value to search")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:p.a.header,children:Object(n.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:p.a.btn,children:Object(n.jsx)("span",{className:p.a.label,children:"Search"})}),Object(n.jsx)("input",{className:p.a.input,type:"text",value:this.state.imageName,autoComplete:"off",autoFocus:!0,placeholder:"Search images",onChange:this.handleNameChange})]})})}}]),a}(r.Component),b=a(14);var j={fetchImages:function(e,t){return fetch("".concat("https://pixabay.com/api","/?q=").concat(e,"&page=").concat(t,"&key=").concat("11349157-fc9c2ea73d90d296f310c891d","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("No picture with name ".concat(e)))}))}},f=a.p+"static/media/\u2014Pngtree\u2014red gradient ring fork symbol_4609561.1589bf7d.png",v=a(11),O=a.n(v);var _=function(e){var t=e.message;return Object(n.jsxs)("div",{role:"alert",className:O.a.errorWrapper,children:[Object(n.jsx)("img",{src:f,width:"550",alt:"sadcat"}),Object(n.jsx)("p",{text:t,className:O.a.text,children:t})]})},x=a(16),y=a.n(x),w=(a(47),a(17)),N=a.n(w);var S=function(){return Object(n.jsx)("div",{className:N.a.overlay,children:Object(n.jsx)(y.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3})})},k=a(12),C=a.n(k),M=document.querySelector("#modal-root"),I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("\u041d\u0430\u0436\u0430\u043b\u0438 ESC, \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"),e.props.onClose())},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("Modal componentDidMount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("Modal componentWillUnmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(c.createPortal)(Object(n.jsx)("div",{className:C.a.backdrop,onClick:this.handleBackdropClick,children:Object(n.jsx)("div",{className:C.a.modal,children:Object(n.jsx)("img",{src:t,alt:a})})}),M)}}]),a}(r.Component),E=a(13),F=a.n(E),L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt,r=e.largeImageUrl,o=this.state.showModal;return Object(n.jsxs)("li",{className:F.a.item,children:[Object(n.jsx)("img",{onClick:this.toggleModal,src:t,alt:a,className:F.a.image}),o&&Object(n.jsx)(I,{onClose:this.toggleModal,src:r,alt:a})]})}}]),a}(r.Component),D=a(18),T=a.n(D);var A=function(e){var t=e.images;return Object(n.jsx)("ul",{className:T.a.list,children:t.map((function(e){return Object(n.jsx)(L,{src:e.webformatURL,alt:e.tags,largeImageUrl:e.largeImageURL},e.id)}))})},P=a(19),U=a.n(P);var q=function(e){var t=e.onLoadMore;return Object(n.jsx)("button",{type:"button",className:U.a.btn,onClick:t,children:"Load more"})},B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],error:null,status:"idle",page:1},e.onLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.imageName,r=this.props.imageName,o=t.page,c=this.state.page;n!==r&&this.setState({page:1}),n===r&&o===c||(this.setState({status:"pending"}),j.fetchImages(r,c).then((function(e){if(0===e.total)return Promise.reject(new Error("Invalid request"));a.setState((function(t){return{images:[].concat(Object(b.a)(t.images),Object(b.a)(e.hits)),status:"resolved"}}))})).catch((function(e){return a.setState({error:e,status:"rejected"})})).finally((function(e){window.scrollTo({top:document.documentElement.scrollHeight-970,behavior:"smooth"})})))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.status;return"idle"===a?Object(n.jsx)("p",{children:"Please enter your request"}):"pending"===a?Object(n.jsx)(S,{}):"rejected"===a?Object(n.jsx)(_,{message:t.message}):"resolved"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(A,{images:this.state.images}),Object(n.jsx)(q,{onLoadMore:this.onLoadMore,page:this.state.page})]}):void 0}}]),a}(r.Component),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleFormSubmit=function(t){e.setState({imageName:t})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g,{onSubmit:this.handleFormSubmit}),Object(n.jsx)(B,{imageName:this.state.imageName}),Object(n.jsx)(d.a,{autoClose:3e3})]})}}]),a}(r.Component),K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(G,{})}),document.getElementById("root")),K()},8:function(e,t,a){e.exports={header:"Searchbar_header__3pk7k",form:"Searchbar_form__16KOI",btn:"Searchbar_btn__3GXAq",label:"Searchbar_label__pzGZA",input:"Searchbar_input__TztF-"}}},[[48,1,2]]]);
//# sourceMappingURL=main.68a1a92f.chunk.js.map