"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115,623],{115:function(t,e,r){r.r(e);var a=r(861),n=r(439),c=r(757),s=r.n(c),u=r(791),o=r(689),i=r(390),f=r(623),p=r(184);e.default=function(){var t=(0,u.useState)([]),e=(0,n.Z)(t,2),r=e[0],c=e[1],l=(0,o.UO)().movieId;return(0,u.useEffect)((function(){var t=function(){var t=(0,a.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.uV)(l);case 3:e=t.sent,c(e),console.log(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[l]),(0,p.jsx)("div",{className:f.default.cast_section,children:0!==r.length?(0,p.jsx)("ul",{className:f.default.cast_list,children:r.map((function(t){return(0,p.jsxs)("li",{className:f.default.cast_item,children:[(0,p.jsx)("img",{width:200,height:300,src:t.profile_path?"https://image.tmdb.org/t/p/w300".concat(t.profile_path):"https://profnastil.by/local/templates/aspro-stroy/images/noimage_detail.png",alt:t.original_name,className:f.default.actor_image}),(0,p.jsxs)("p",{className:f.default.actor_character,children:["Character: ",t.character]})]},t.id)}))}):(0,p.jsx)("div",{className:f.default.no_cast_message,children:"We don't have any cast for this movie."})})}},390:function(t,e,r){r.d(e,{Hx:function(){return l},Y5:function(){return i},o1:function(){return f},uV:function(){return p},wr:function(){return o}});var a=r(861),n=r(757),c=r.n(n),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var u={params:{api_key:"a4e0e6c94492c515df52f4a6ebcc54c7"}},o=function(){var t=(0,a.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/trending/movie/day",u);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,a.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e),u);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/search/movie?query=".concat(e),u);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"/credits"),u);case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"/reviews?"),u);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},623:function(t,e,r){r.r(e),e.default={cast_section:"Cast_cast_section__VTDTK",cast_list:"Cast_cast_list__2-Taf",cast_item:"Cast_cast_item__QVL5J",actor_image:"Cast_actor_image__Q-vM+",actor_character:"Cast_actor_character__JdoOG",no_cast_message:"Cast_no_cast_message__PHANZ"}}}]);
//# sourceMappingURL=115.270c35aa.chunk.js.map