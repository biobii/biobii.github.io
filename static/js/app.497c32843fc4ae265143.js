webpackJsonp([1],{"0spi":function(t,a,e){t.exports=e.p+"static/img/work-porsigal-2.6d9a171.png"},"1PMz":function(t,a){},DB1U:function(t,a,e){t.exports=e.p+"static/img/work-idlearn-4.d32eb38.png"},Eo2A:function(t,a){},FEHE:function(t,a,e){t.exports=e.p+"static/img/work-idlearn-1.be00056.png"},Fuum:function(t,a){},IN1G:function(t,a){},Kdx8:function(t,a,e){t.exports=e.p+"static/img/not-found.18756e4.jpg"},LGdf:function(t,a,e){t.exports=e.p+"static/img/work-idlearn-2.9e38b03.png"},"Mtw/":function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i=e("NYxO"),r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var n=e("VU/8")({name:"App"},r,!1,function(t){e("ymcE")},null,null).exports,o=e("/ocq"),l={render:function(){var t=this.$createElement,a=this._self._c||t;return a("header",{attrs:{role:"header"}},[a("div",{staticClass:"container"},[a("h1",[a("router-link",{attrs:{to:"/"}},[this._v("Beranda")])],1)])])},staticRenderFns:[]};var c=e("VU/8")({},l,!1,function(t){e("Mtw/")},"data-v-388e92d5",null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("section",{staticClass:"col-xs-12 col-sm-6 col-md-6 col-lg-6 "},[a("article",{attrs:{role:"pge-title-content"}},[a("header",[a("h2",{attrs:{id:"greet"}},[a("span",[this._v("Portofolio")]),this._v(" Mohammad Robih T.Z")])]),this._v(" "),a("p",{staticStyle:{"text-indent":"2em"}},[this._v("Hai, saya Obi. Saat ini sedang kuliah di Universitas Islam Negeri Maulana Malik Ibrahim Malang. Saya tertarik dengan web development terutama bagian backend.")])])]),this._v(" "),a("section",{staticClass:"col-xs-12 col-sm-6 col-md-6 col-lg-6 grid"},[a("img",{staticClass:"img-responsive",attrs:{src:e("O2OG"),alt:"Mohammad Robih T.Z",title:"Mohammad Robih T.Z"}}),this._v(" "),a("figure",{staticClass:"effect-oscar"},[a("figcaption")])])])}]};var u=e("VU/8")({},d,!1,function(t){e("IN1G")},"data-v-62798c1a",null).exports,p={methods:{thumbnail:function(t){return e("sxkt")("./"+t)}}},m={computed:{works:function(){return this.$store.getters.odd}},filters:{overview:function(t){return t.substr(0,50)+"..."},link:function(t){return"work/"+t}},mixins:[p]},v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"col-xs-12 col-sm-6 col-md-6 col-lg-6 grid"},[e("ul",{staticClass:"grid-lod effect-2",attrs:{id:"grid"}},t._l(t.works,function(a){return e("li",{key:a.id},[e("figure",{staticClass:"effect-oscar"},[e("img",{staticClass:"img-responsive",attrs:{src:t.thumbnail(a.thumbnail),alt:""}}),t._v(" "),e("figcaption",[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(t._f("overview")(a.description)))]),t._v(" "),e("router-link",{attrs:{to:t._f("link")(a.slug)}},[t._v("Detail")])],1)])])}))])},staticRenderFns:[]};var g=e("VU/8")(m,v,!1,function(t){e("oZ4W")},"data-v-498299fe",null).exports,f={computed:{works:function(){return this.$store.getters.even}},filters:{overview:function(t){return t.substr(0,50)+"..."},link:function(t){return"work/"+t}},mixins:[p]},h={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"col-xs-12 col-sm-6 col-md-6 col-lg-6 grid"},[e("ul",{staticClass:"grid-lod effect-2",attrs:{id:"grid"}},t._l(t.works,function(a){return e("li",{key:a.id},[e("figure",{staticClass:"effect-oscar"},[e("img",{staticClass:"img-responsive",attrs:{src:t.thumbnail(a.thumbnail),alt:""}}),t._v(" "),e("figcaption",[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(t._f("overview")(a.description)))]),t._v(" "),e("router-link",{attrs:{to:t._f("link")(a.slug)}},[t._v("View more")])],1)])])}))])},staticRenderFns:[]};var _=e("VU/8")(f,h,!1,function(t){e("1PMz")},"data-v-2bac29b0",null).exports,k={mounted:function(){this.run()},methods:{run:function(){var t=document.getElementsByClassName("progress-bar");this.startFromZero(t),this.loading(t)},startFromZero:function(t){for(var a=0;a<t.length;a++)t[a].textContent="0%",t[a].style.width="0%"},loading:function(t){var a=!1,e=document.getElementsByTagName("h2")[0];document.addEventListener("scroll",function(s){if(window.scrollY>=e.offsetTop+400&&!a){for(var i=function(a){var e=0,s=parseInt(t[a].getAttribute("state-value")),i=setInterval(function(){e>=s?(e=0,s=0,clearInterval(i)):(e++,t[a].style.width=e+"%",t[a].textContent=e+"%")},10)},r=0;r<t.length;r++)i(r);a=!0}})}}},w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"container",attrs:{role:"main-home-wrapper"}},[e("div",{staticClass:"row"},[e("h2",[t._v("Progress")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"col-md-1 col-md-offset-1"},[e("p",{staticClass:"skill-name"},[t._v("HTML5")])]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar progress-color-orange",staticStyle:{width:"86%"},attrs:{role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100","state-value":"86"}},[t._v("86%")])])]),t._v(" "),e("div",{staticClass:"col-md-1 col-md-offset-1"},[e("p",{staticClass:"skill-name"},[t._v("CSS")])]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar progress-color-blue",staticStyle:{width:"70%"},attrs:{role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100","state-value":"70"}},[t._v("70%")])])]),t._v(" "),e("div",{staticClass:"col-md-1 col-md-offset-1"},[e("p",{staticClass:"skill-name"},[t._v("PHP")])]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar progress-color-purple",staticStyle:{width:"80%"},attrs:{role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100","state-value":"80"}},[t._v("80%")])])]),t._v(" "),e("div",{staticClass:"col-md-1 col-md-offset-1"},[e("p",{staticClass:"skill-name"},[t._v("Laravel")])]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar progress-color-red",staticStyle:{width:"78%"},attrs:{role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100","state-value":"78"}},[t._v("78%")])])]),t._v(" "),e("div",{staticClass:"col-md-1 col-md-offset-1"},[e("p",{staticClass:"skill-name"},[t._v("jQuery")])]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar progress-color-aqua",staticStyle:{width:"62%"},attrs:{role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100","state-value":"62"}},[t._v("62%")])])]),t._v(" "),e("div",{staticClass:"col-md-1 col-md-offset-1"},[e("p",{staticClass:"skill-name"},[t._v("Vue")])]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar progress-color-toska",staticStyle:{width:"51%"},attrs:{role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100","state-value":"51"}},[t._v("51%")])])])])])}]};var b=e("VU/8")(k,w,!1,function(t){e("Y2Bs")},"data-v-10f47553",null).exports,C={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"container",attrs:{role:"main-inner-wrapper"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-sm-6 col-md-6 col-lg-6 "},[t._m(0),t._v(" "),e("ul",{staticClass:"grid-lod effect-2",attrs:{id:"grid"}},t._l(t.activities,function(a){return e("li",{key:a.id},[e("section",{staticClass:"blog-content"},[e("a",{attrs:{href:a.link,target:"_blank"}},[e("figure",[e("div",{staticClass:"post-date"},[e("span",[t._v(t._s(t._f("showDate")(a.date)))]),t._v(" "+t._s(t._f("showMonth")(a.date))+"\n                            ")]),t._v(" "),e("img",{attrs:{src:a.thumbnail}})])]),t._v(" "),e("article",[t._v(t._s(a.title))])])])}))]),t._v(" "),e("div",{staticClass:"col-xs-12 col-sm-6 col-md-6 col-lg-6"},[e("ul",{staticClass:"grid-lod effect-2",attrs:{id:"grid"}},t._l(t.posts,function(a){return e("li",{key:a.id},[e("section",{staticClass:"blog-content"},[e("a",{attrs:{href:a.link,target:"_blank"}},[e("figure",[e("div",{staticClass:"post-date"},[e("span",[t._v(t._s(t._f("showDate")(a.date)))]),t._v(" "+t._s(t._f("showMonth")(a.date))+"\n                            ")]),t._v(" "),e("img",{staticClass:"img-responsive",attrs:{src:a.thumbnail,alt:""}})])]),t._v(" "),e("article",[t._v(t._s(a.title))])])])}))])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("article",{staticClass:"blog-header",attrs:{role:"pge-title-content"}},[a("header",[a("h2",[a("span",[this._v("Aktivitas")]),this._v(" Menulis dan dokumentasi belajar")])]),this._v(" "),a("p",[this._v("Menulis di Medium untuk mendokumentasikan hasil belajar dan berbagi sesuatu yang menurut saya menarik.")])])}]};var x=e("VU/8")({computed:{activities:function(){return this.$store.getters.activities},posts:function(){return this.$store.getters.posts}},filters:{showDate:function(t){return t.substr(0,2)},showMonth:function(t){return t.substr(3)}}},C,!1,function(t){e("Eo2A")},"data-v-0e882d72",null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{attrs:{role:"footer"}},[e("h2",[t._v("Kontak")]),t._v(" "),e("hr"),t._v(" "),e("h3",[e("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),t._v(" biobii.game@gmail.com")]),t._v(" "),e("ul",{attrs:{role:"social-icons"}},[e("li",[e("a",{attrs:{href:"https://twitter.com/biobii",target:"_blank"}},[e("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.facebook.com/profile.php?id=100016015544807",target:"_blank"}},[e("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.linkedin.com/in/biobii/",target:"_blank"}},[e("i",{staticClass:"fa fa-linkedin",attrs:{"aria-hidden":"true"}})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[e("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),e("p",{staticClass:"copy-right"},[t._v("© 2018 Portofolio - Biobii")]),t._v(" "),e("p",{staticClass:"copy-right"},[t._v("Template oleh "),e("a",{attrs:{href:"https://www.free-css.com/free-css-templates/page225/avana",target:"_blank"}},[t._v("avana LLC")]),t._v(", diedit oleh Biobii")])])}]};var E=e("VU/8")({},y,!1,function(t){e("Fuum")},"data-v-a24c678c",null).exports,P={name:"Home",components:{appHeader:c,appHeadline:u,appLeftGrid:g,appRightGrid:_,appSkills:b,appActivity:x,appFooter:E}},M={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("main",{staticClass:"container",attrs:{role:"main-home-wrapper"}},[e("div",{staticClass:"row"},[e("app-header"),t._v(" "),e("app-headline"),t._v(" "),e("div",{staticClass:"clearfix"}),t._v(" "),e("h2",[t._v("Works")]),t._v(" "),e("hr"),t._v(" "),e("app-left-grid"),t._v(" "),e("app-right-grid"),t._v(" "),e("div",{staticClass:"clearfix"}),t._v(" "),e("app-skills"),t._v(" "),e("app-activity"),t._v(" "),e("app-footer")],1)])])},staticRenderFns:[]};var F=e("VU/8")(P,M,!1,function(t){e("lKDa")},"data-v-18d17db4",null).exports,$={components:{appHeader:c}},R={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("app-header"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("main",{staticClass:"container",attrs:{role:"main-home-wrapper"}},[a("div",{staticClass:"row"},[a("section",{staticClass:"col-xs-12 col-sm-6 col-md-6 col-lg-6 "},[a("article",{attrs:{role:"pge-title-content"}},[a("header",[a("h2",{attrs:{id:"greet"}},[a("span",[this._v("404")]),this._v(" Maaf, halaman tidak ditemukan.")])])])]),this._v(" "),a("section",{staticClass:"col-xs-12 col-sm-6 col-md-6 col-lg-6 grid"},[a("img",{staticClass:"img-responsive",attrs:{src:e("Kdx8"),alt:""}}),this._v(" "),a("figure",{staticClass:"effect-oscar"},[a("figcaption")])])])])}]};var L=e("VU/8")($,R,!1,function(t){e("Yjnq")},null,null).exports,D={name:"Detail",mounted:function(){window.scroll({top:0,behavior:"smooth"})},computed:{work:function(){var t=this.$route.params.slug;return this.$store.getters.detail(t)}},components:{appHeader:c,appFooter:E,appNotFound:L},mixins:[p]},H={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.work?e("div",[e("app-header"),t._v(" "),e("main",{staticClass:"container",attrs:{role:"main-inner-wrapper"}},[e("div",{staticClass:"work-details"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-sm-12 col-md-4"},[e("header",{attrs:{role:"work-title"}},[e("h2",[t._v(t._s(t.work.title))]),t._v(" "),t.work.link?e("a",{attrs:{href:t.work.link,target:"_blank"}},[t._v("Live Demo "),e("i",{staticClass:"fa fa-external-link",attrs:{"aria-hidden":"true"}})]):e("a",{attrs:{id:"no-link",href:"#"}},[t._v("Demo tidak tersedia")])])]),t._v(" "),e("div",{staticClass:"col-xs-12 col-sm-12 col-md-8"},[e("section",[e("p",{attrs:{id:"work-description"}},[t._v(t._s(t.work.description))]),t._v(" "),e("p",[e("strong",[t._v("Teknologi")]),e("br"),t._v("\n                            "+t._s(t.work.tech))])])])]),t._v(" "),e("div",{staticClass:"clearfix"}),t._v(" "),e("div",{staticClass:"work-images grid"},[e("ul",{staticClass:"grid-lod effect-2",attrs:{id:"grid"}},t._l(t.work.images,function(a,s){return e("li",{key:s},[e("img",{staticClass:"img-responsive",attrs:{src:t.thumbnail(a),alt:""}})])}))])])]),t._v(" "),e("app-footer")],1):e("app-not-found")],1)},staticRenderFns:[]};var S=e("VU/8")(D,H,!1,function(t){e("OrLi")},"data-v-a0663b1e",null).exports;s.a.use(o.a);var V=new o.a({routes:[{path:"/",name:"Home",component:F},{path:"/work/:slug",name:"Detail",component:S},{path:"*",name:"Not Found",component:L}]});e("mtWM");s.a.config.productionTip=!1,s.a.use(i.a);var j=new i.a.Store({state:{works:[{id:1,title:"Porsigal",slug:"porsigal",thumbnail:"work-porsigal-1.png",images:["work-porsigal-1.png","work-porsigal-2.png"],link:"http://porsigal.com",tech:"PHP 7, Laravel, Vue.",description:"Porsigal adalah website suatu organisasi untuk mengelola data keanggotaan dan berdiskusi. Dibangun menggunakan PHP 7 dengan framework Laravel. Vue juga digunakan dalam website ini untuk menangani konsep single page application. Pada website ini saya mengerjakan bagian backend."},{id:2,title:"IDLearn",slug:"idlearn",thumbnail:"work-idlearn-1.png",images:["work-idlearn-1.png","work-idlearn-2.png","work-idlearn-3.png","work-idlearn-4.png"],link:"http://idlearn.servisperut.com",tech:"PHP 7, Laravel, Vue.",description:"IDLearn merupakan website untuk pengumpulan tugas yang menghubungkan antara dosen, asisten laboratorium dan praktikan. Aplikasi ini juga dapat digunakan untuk mengerjakan soal kuis yang telah dibuat sebelumnya. IDLearn dibangun menggunakan PHP 7 dengan framework Laravel dan Vue sebagai frontend Javascript framework. Aplikasi ini dikembangkan sebagai tugas salah satu mata kuliah semester empat."}],activities:[{id:1,title:"#MayMeetup Bersama Malang PHP User Group",thumbnail:"https://cdn-images-1.medium.com/max/800/1*v6ND1Inz9ZlRTW90XXk3Tg.jpeg",link:"#",date:"08 Mei 2018"}],posts:[{id:1,title:"Memahami Konsep PSR-4 Autoloading PHP",link:"https://medium.com/easyread/memahami-konsep-psr-4-autoloading-pada-php-ba6cdefe068b",thumbnail:"https://cdn-images-1.medium.com/max/800/1*-Rp5iqurNy6FUOpfbrxuJg.png",date:"22 Februari 2018"},{id:2,title:"Pengalaman Public Speaking Pertama",link:"https://medium.com/@biobii/pengalaman-public-speaking-pertama-bersama-malang-php-user-group-6babd53857b5",thumbnail:"https://cdn-images-1.medium.com/max/800/1*y3SarKIerXyMrYzpPQd0Og.jpeg",date:"25 Mei 2018"},{id:3,title:"Memahami Konsep Stack Secara Sederhana",link:"https://medium.com/easyread/memahami-konsep-stack-secara-sederhana-bd4409ec560c",thumbnail:"https://cdn-images-1.medium.com/max/800/1*vhJk3D_nRDwPJGdljOGViw.png",date:"09 Januari 2018"}]},getters:{odd:function(t){var a=[];return t.works.forEach(function(t){t.id%2!=0&&a.push(t)}),a},even:function(t){var a=[];return t.works.forEach(function(t){t.id%2==0&&a.push(t)}),a},detail:function(t){return function(a){return t.works.find(function(t){return t.slug===a})}},activities:function(t){return t.activities},posts:function(t){return t.posts}}});new s.a({el:"#app",store:j,router:V,components:{App:n},template:"<App/>"})},O2OG:function(t,a,e){t.exports=e.p+"static/img/me.ab9f8dc.jpg"},OrLi:function(t,a){},RLBO:function(t,a,e){t.exports=e.p+"static/img/work-idlearn-3.cb33954.png"},Y2Bs:function(t,a){},Yjnq:function(t,a){},kg1l:function(t,a,e){t.exports=e.p+"static/img/work-porsigal-1.0cebfdb.png"},lKDa:function(t,a){},oZ4W:function(t,a){},sxkt:function(t,a,e){var s={"./work-idlearn-1.png":"FEHE","./work-idlearn-2.png":"LGdf","./work-idlearn-3.png":"RLBO","./work-idlearn-4.png":"DB1U","./work-porsigal-1.png":"kg1l","./work-porsigal-2.png":"0spi"};function i(t){return e(r(t))}function r(t){var a=s[t];if(!(a+1))throw new Error("Cannot find module '"+t+"'.");return a}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id="sxkt"},ymcE:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.497c32843fc4ae265143.js.map