webpackJsonp([4,36,40],{"./app/containers/DomainListPage/sagas.js":function(e,t,n){"use strict";function r(e){var t,r,a,i,s,o,p,d;return regeneratorRuntime.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return t=e.api,r=e.agentId,a=e.page,i=e.filter,s=0,o=-1,(a||0===a)&&(s=10*a,o=s+10),E.prev=4,E.next=7,n.i(c.call)(t.agent.getAgentIdDomain,{id:r.toString().split("~")[0],start:s,limit:o,filter:i});case 7:return p=E.sent,E.next=10,n.i(c.put)(n.i(u.O)(p.obj));case 10:E.next=27;break;case 12:if(E.prev=12,E.t0=E.catch(4),d={err:E.t0},!d.err||"Failed to fetch"!==d.err.message){E.next=20;break}return E.next=18,n.i(c.put)(n.i(u.P)({message:"Can't find a connection with the API. Please check your API is alive and configured properly."}));case 18:E.next=27;break;case 20:if(!d.err.response.obj||!d.err.response.obj.message){E.next=25;break}return E.next=23,n.i(c.put)(n.i(u.P)({message:d.err.response.obj.message}));case 23:E.next=27;break;case 25:return E.next=27,n.i(c.put)(n.i(u.P)({message:"Unknow API error"}));case 27:return E.prev=27,E.next=30,n.i(c.cancelled)();case 30:if(!E.sent){E.next=31;break}case 31:return E.finish(27);case 32:case"end":return E.stop()}},E,this,[[4,12,27,32]])}function a(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(c.takeLatest)(o.k,r);case 2:e=t.sent;case 3:case"end":return t.stop()}},d,this)}function i(){var e,t;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=regeneratorRuntime.mark(function e(t){var a,i,s,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.api,i=t.id,e.next=3,n.i(c.select)(n.i(p.g)());case 3:return s=e.sent,e.prev=4,e.next=7,n.i(c.call)(a.domain.deleteDomainId,{id:i});case 7:return e.next=9,n.i(c.put)(n.i(u.Q)());case 9:return e.next=11,n.i(c.call)(r,{api:a,agentId:s.id});case 11:e.next=28;break;case 13:if(e.prev=13,e.t0=e.catch(4),o={err:e.t0},!o.err||"Failed to fetch"!==o.err.message){e.next=21;break}return e.next=19,n.i(c.put)(n.i(u.R)({message:"Can't find a connection with the API. Please check your API is alive and configured properly."}));case 19:e.next=28;break;case 21:if(!o.err.response.obj||!o.err.response.obj.message){e.next=26;break}return e.next=24,n.i(c.put)(n.i(u.R)({message:o.err.response.obj.message}));case 24:e.next=28;break;case 26:return e.next=28,n.i(c.put)(n.i(u.R)({message:"Unknow API error"}));case 28:case"end":return e.stop()}},e,this,[[4,13]])}),a.next=3,n.i(c.takeLatest)(o.U,e);case 3:return t=a.sent,a.next=6,n.i(c.take)(s.LOCATION_CHANGE);case 6:return a.next=8,n.i(c.cancel)(t);case 8:case"end":return a.stop()}},_,this)}Object.defineProperty(t,"__esModule",{value:!0});var s=n("./node_modules/react-router-redux/lib/index.js"),c=(n.n(s),n("./node_modules/redux-saga/effects.js")),u=(n.n(c),n("./app/containers/App/actions.js")),o=n("./app/containers/App/constants.js"),p=n("./app/containers/App/selectors.js");t.getAgentDomains=r,t.loadAgentDomains=a,t.deleteDomain=i;var E=regeneratorRuntime.mark(r),d=regeneratorRuntime.mark(a),_=regeneratorRuntime.mark(i);t.default=[a,i]},"./app/containers/EntityListPage/sagas.js":function(e,t,n){"use strict";function r(e){var t,r,a,i,c,u,E,d,f,S,I;return regeneratorRuntime.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return t=e.api,r=e.agentId,a=e.page,i=e.filter,c=e.forIntentEdit,u=0,E=-1,(a||0===a)&&(u=10*a,E=u+10),_.prev=4,_.next=7,n.i(o.call)(t.agent.getAgentIdEntity,{id:r.toString().split("~")[0],start:u,limit:E,filter:i});case 7:return d=_.sent,f=d.obj,_.next=11,n.i(o.put)(n.i(p.u)(f));case 11:if(c){_.next=15;break}return _.next=14,f.entities.map(function(e){return n.i(o.call)(s,{api:t,id:e.id})});case 14:S=_.sent;case 15:_.next=32;break;case 17:if(_.prev=17,_.t0=_.catch(4),I={err:_.t0},!I.err||"Failed to fetch"!==I.err.message){_.next=25;break}return _.next=23,n.i(o.put)(n.i(p.v)({message:"Can't find a connection with the API. Please check your API is alive and configured properly."}));case 23:_.next=32;break;case 25:if(!I.err.response.obj||!I.err.response.obj.message){_.next=30;break}return _.next=28,n.i(o.put)(n.i(p.v)({message:I.err.response.obj.message}));case 28:_.next=32;break;case 30:return _.next=32,n.i(o.put)(n.i(p.v)({message:"Unknow API error"}));case 32:return _.prev=32,_.next=35,n.i(o.cancelled)();case 35:if(!_.sent){_.next=36;break}case 36:return _.finish(32);case 37:case"end":return _.stop()}},_,this,[[4,17,32,37]])}function a(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(o.takeLatest)(E.o,r);case 2:return e=t.sent,t.next=5,n.i(o.take)(u.LOCATION_CHANGE);case 5:return t.next=7,n.i(o.cancel)(e);case 7:case"end":return t.stop()}},f,this)}function i(){var e,t;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=regeneratorRuntime.mark(function e(t){var a,i,s,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.api,i=t.id,e.next=3,n.i(o.select)(n.i(d.g)());case 3:return s=e.sent,e.prev=4,e.next=7,n.i(o.call)(a.entity.deleteEntityId,{id:i});case 7:return e.next=9,n.i(o.put)(n.i(p.w)());case 9:return e.next=11,n.i(o.call)(r,{api:a,agentId:s.id});case 11:e.next=28;break;case 13:if(e.prev=13,e.t0=e.catch(4),c={err:e.t0},!c.err||"Failed to fetch"!==c.err.message){e.next=21;break}return e.next=19,n.i(o.put)(n.i(p.x)({message:"Can't find a connection with the API. Please check your API is alive and configured properly."}));case 19:e.next=28;break;case 21:if(!c.err.response.obj||!c.err.response.obj.message){e.next=26;break}return e.next=24,n.i(o.put)(n.i(p.x)({message:c.err.response.obj.message}));case 24:e.next=28;break;case 26:return e.next=28,n.i(o.put)(n.i(p.x)({message:"Unknow API error"}));case 28:case"end":return e.stop()}},e,this,[[4,13]])}),a.next=3,n.i(o.takeLatest)(E._3,e);case 3:return t=a.sent,a.next=6,n.i(o.take)(u.LOCATION_CHANGE);case 6:return a.next=8,n.i(o.cancel)(t);case 8:case"end":return a.stop()}},S,this)}function s(e){var t,r,a,i,s;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.api,r=e.id,c.prev=1,c.next=4,n.i(o.call)(t.entity.getEntityIdIntent,{id:r});case 4:return a=c.sent,i=a.obj,c.next=8,n.i(o.put)(n.i(p.y)({id:r,intents:i}));case 8:c.next=25;break;case 10:if(c.prev=10,c.t0=c.catch(1),s={err:c.t0},!s.err||"Failed to fetch"!==s.err.message){c.next=18;break}return c.next=16,n.i(o.put)(n.i(p.z)({message:"Can't find a connection with the API. Please check your API is alive and configured properly."}));case 16:c.next=25;break;case 18:if(!s.err.response.obj||!s.err.response.obj.message){c.next=23;break}return c.next=21,n.i(o.put)(n.i(p.z)({message:s.err.response.obj.message}));case 21:c.next=25;break;case 23:return c.next=25,n.i(o.put)(n.i(p.z)({message:"Unknow API error"}));case 25:return c.prev=25,c.next=28,n.i(o.cancelled)();case 28:if(!c.sent){c.next=29;break}case 29:return c.finish(25);case 30:case"end":return c.stop()}},I,this,[[1,10,25,30]])}function c(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(o.takeLatest)(E._28,s);case 2:return e=t.sent,t.next=5,n.i(o.take)(u.LOCATION_CHANGE);case 5:return t.next=7,n.i(o.cancel)(e);case 7:case"end":return t.stop()}},O,this)}Object.defineProperty(t,"__esModule",{value:!0});var u=n("./node_modules/react-router-redux/lib/index.js"),o=(n.n(u),n("./node_modules/redux-saga/effects.js")),p=(n.n(o),n("./app/containers/App/actions.js")),E=n("./app/containers/App/constants.js"),d=n("./app/containers/App/selectors.js");t.getAgentEntities=r,t.loadAgentEntities=a,t.deleteEntity=i,t.getEntityIntents=s,t.loadEntityIntents=c;var _=regeneratorRuntime.mark(r),f=regeneratorRuntime.mark(a),S=regeneratorRuntime.mark(i),I=regeneratorRuntime.mark(s),O=regeneratorRuntime.mark(c);t.default=[a,i,c]},"./app/containers/IntentPage/actions.js":function(e,t,n){"use strict";function r(e){return{type:D.a,payload:e}}function a(e){return{type:D.b,payload:e}}function i(e){return{type:D.c,payload:e}}function s(){return{type:D.d}}function c(e){return{type:D.f,payload:e}}function u(e){return{type:D.g,payload:e}}function o(e){return{type:D.h,payload:e}}function p(e){return{type:D.i,payload:e}}function E(e){return{type:D.j,payload:e}}function d(e){return{type:D.k,payload:e}}function _(e){return{type:D.l,index:e}}function f(e){return{type:D.m,index:e}}function S(e){return{type:D.n,index:e}}function I(e){return{type:D.o,slot:e}}function O(e){return{type:D.p,selection:e}}function x(e){return{type:D.q,error:e}}function g(e){return{type:D.r,intent:e}}function l(e){return{type:D.s,intent:e}}function m(e){return{type:D.t,apiCall:!0,id:e}}function N(e){return{type:D.u,apiCall:!0,id:e}}function R(e){return{type:D.v,error:e}}function P(e){return{type:D.w,scenario:e}}function A(e){return{type:D.x,apiCall:!0,id:e}}function T(e){return{type:D.y,error:e}}function k(e){return{type:D.z,webhook:e}}function h(e){return{type:D.A,apiCall:!0,id:e}}function L(e){return{type:D.B,error:e}}function v(e){return{type:D.C,postFormat:e}}function b(e){return{type:D.D,apiCall:!0,id:e}}function C(e,t){return{type:D.E,oldIndex:e,newIndex:t}}var D=n("./app/containers/IntentPage/constants.js");t.a=r,t.b=a,t.c=i,t.o=s,t.i=c,t.j=u,t.k=o,t.l=p,t.m=E,t.n=d,t.d=_,t.e=f,t.f=S,t.g=I,t.p=O,t.w=x,t.v=g,t.D=l,t.r=m,t.h=N,t.y=R,t.x=P,t.q=A,t.A=T,t.z=k,t.s=h,t.C=L,t.B=v,t.t=b,t.u=C},"./app/containers/IntentPage/constants.js":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"u",function(){return s}),n.d(t,"d",function(){return c}),n.d(t,"f",function(){return u}),n.d(t,"e",function(){return o}),n.d(t,"g",function(){return p}),n.d(t,"j",function(){return E}),n.d(t,"k",function(){return d}),n.d(t,"h",function(){return _}),n.d(t,"i",function(){return f}),n.d(t,"l",function(){return S}),n.d(t,"m",function(){return I}),n.d(t,"n",function(){return O}),n.d(t,"o",function(){return x}),n.d(t,"p",function(){return g}),n.d(t,"t",function(){return l}),n.d(t,"r",function(){return m}),n.d(t,"s",function(){return N}),n.d(t,"q",function(){return R}),n.d(t,"x",function(){return P}),n.d(t,"w",function(){return A}),n.d(t,"v",function(){return T}),n.d(t,"D",function(){return k}),n.d(t,"C",function(){return h}),n.d(t,"B",function(){return L}),n.d(t,"A",function(){return v}),n.d(t,"z",function(){return b}),n.d(t,"y",function(){return C}),n.d(t,"E",function(){return D});var r="IntentPage/CHANGE_INTENT_DATA",a="IntentPage/CHANGE_WEBHOOK_DATA",i="IntentPage/CHANGE_POSTFORMAT_DATA",s="IntentPage/FIND_SYS_ENTITIES",c="IntentPage/RESET_INTENT_DATA",u="IntentPage/TAG_ENTITY",o="IntentPage/UNTAG_ENTITY",p="IntentPage/TOGGLE_FLAG",E="IntentPage/ADD_TEXT_PROMPT",d="IntentPage/DELETE_TEXT_PROMPT",_="IntentPage/CHANGE_SLOT_NAME",f="IntentPage/CHANGE_SLOT_AGENT",S="IntentPage/REMOVE_USER_SAYING",I="IntentPage/REMOVE_AGENT_RESPONSE",O="IntentPage/REMOVE_SLOT",x="IntentPage/ADD_SLOT",g="IntentPage/SET_WINDOW_SELECTION",l="IntentPage/LOAD_INTENT",m="IntentPage/LOAD_INTENT_SUCCESS",N="IntentPage/RELOAD_INTENT_WITH_SYS_ENTITIES",R="IntentPage/LOAD_INTENT_ERROR",P="IntentPage/LOAD_SCENARIO",A="IntentPage/LOAD_SCENARIO_SUCCESS",T="IntentPage/LOAD_SCENARIO_ERROR",k="AgentPage/LOAD_POSTFORMAT",h="AgentPage/LOAD_POSTFORMAT_SUCCESS",L="AgentPage/LOAD_POSTFORMAT_ERROR",v="IntentPage/LOAD_WEBHOOK",b="IntentPage/LOAD_WEBHOOK_SUCCESS",C="IntentPage/LOAD_WEBHOOK_ERROR",D="IntentPage/SORT_SLOTS"},"./app/containers/IntentPage/sagas.js":function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e){var t,r,a,i,s;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.api,r=e.id,a=e.intentData,c.next=3,n.i(w.select)(n.i(K.d)());case 3:return i=c.sent,a&&(i=i.set("agent",a.agent),i=i.set("domain",a.domain),i=i.set("intent",a.intentName)),c.prev=5,c.next=8,n.i(w.call)(t.intent.postIntentIdWebhook,{id:r,body:i});case 8:c.next=16;break;case 10:return c.prev=10,c.t0=c.catch(5),s=c.t0.response,c.next=15,n.i(w.put)(n.i(y.D)({message:s.obj.message}));case 15:throw s;case 16:case"end":return c.stop()}},Y,this,[[5,10]])}function s(e){var t,r,a,i,s;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.api,r=e.id,a=e.intentData,c.next=3,n.i(w.select)(n.i(K.g)());case 3:return i=c.sent,a&&(i=i.set("agent",a.agent),i=i.set("domain",a.domain),i=i.set("intent",a.intentName)),c.prev=5,c.next=8,n.i(w.call)(t.intent.postIntentIdPostformat,{id:r,body:i});case 8:c.next=16;break;case 10:return c.prev=10,c.t0=c.catch(5),s=c.t0.response,c.next=15,n.i(w.put)(n.i(y.D)({message:s.obj.message}));case 15:throw s;case 16:case"end":return c.stop()}},X,this,[[5,10]])}function c(e){var t,r,a,i,s,c,u;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.api,r=e.id,a=e.intentData,o.next=3,n.i(w.select)(n.i(K.c)());case 3:return i=o.sent,a&&(i=i.set("agent",a.agent),i=i.set("domain",a.domain),i=i.set("intent",a.intentName),i=i.set("scenarioName",a.intentName)),o.prev=5,o.next=8,n.i(w.call)(t.intent.postIntentIdScenario,{id:r,body:i});case 8:return s=o.sent,c=s.obj,o.next=12,n.i(w.put)(n.i(y.E)(c,c.id));case 12:o.next=20;break;case 14:return o.prev=14,o.t0=o.catch(5),u=o.t0.response,o.next=19,n.i(w.put)(n.i(y.F)({message:u.obj.message}));case 19:throw u;case 20:case"end":return o.stop()}},V,this,[[5,14]])}function u(e){var t,r,a,u,o;return regeneratorRuntime.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return t=e.api,p.next=3,n.i(w.select)(n.i(K.a)());case 3:return r=p.sent,r=D.a.asMutable(r,{deep:!0}),p.prev=5,p.next=8,n.i(w.call)(t.intent.postIntent,{body:r});case 8:return a=p.sent,u=a.obj,p.next=12,n.i(w.put)(n.i(y.G)(u,u.id));case 12:return p.next=14,n.i(w.call)(c,{api:t,id:u.id});case 14:if(!u.useWebhook){p.next=17;break}return p.next=17,n.i(w.call)(i,{api:t,id:u.id});case 17:if(!u.usePostFormat){p.next=20;break}return p.next=20,n.i(w.call)(s,{api:t,id:u.id,intentData:r});case 20:return p.next=22,n.i(w.put)(n.i(G.push)("/intents"));case 22:p.next=29;break;case 24:return p.prev=24,p.t0=p.catch(5),o=p.t0.response,p.next=29,n.i(w.put)(n.i(y.H)({message:o.obj.message}));case 29:case"end":return p.stop()}},z,this,[[5,24]])}function o(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(w.takeLatest)(j.A,u);case 2:return e=t.sent,t.next=5,n.i(w.take)(G.LOCATION_CHANGE);case 5:return t.next=7,n.i(w.cancel)(e);case 7:case"end":return t.stop()}},q,this)}function p(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(w.takeLatest)(j.b,H.b);case 2:return e=t.sent,t.next=5,n.i(w.take)(G.LOCATION_CHANGE);case 5:return t.next=7,n.i(w.cancel)(e);case 7:case"end":return t.stop()}},Q,this)}function E(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(w.takeLatest)(j.k,U.getAgentDomains);case 2:return e=t.sent,t.next=5,n.i(w.take)(G.LOCATION_CHANGE);case 5:return t.next=7,n.i(w.cancel)(e);case 7:case"end":return t.stop()}},J,this)}function d(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(w.takeLatest)(j.o,M.getAgentEntities);case 2:return e=t.sent,t.next=5,n.i(w.take)(G.LOCATION_CHANGE);case 5:return t.next=7,n.i(w.cancel)(e);case 7:case"end":return t.stop()}},Z,this)}function _(e){var t,r,i,s,c,u,o,p,E;return regeneratorRuntime.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return t=e.api,r=e.id,d.next=3,n.i(w.select)(n.i(K.d)());case 3:return i=d.sent,d.next=6,n.i(w.select)(n.i(K.h)());case 6:if(s=d.sent,d.prev=7,b.a.isEqual(i,s)){d.next=13;break}return c=i.agent,u=i.domain,o=i.intent,p=a(i,["agent","domain","intent"]),delete p.id,d.next=13,n.i(w.call)(t.intent.putIntentIdWebhook,{id:r,body:p});case 13:d.next=21;break;case 15:return d.prev=15,d.t0=d.catch(7),E=d.t0.response,d.next=20,n.i(w.put)(n.i(y.I)({message:E.obj.message}));case 20:throw E;case 21:case"end":return d.stop()}},$,this,[[7,15]])}function f(e){var t,r,a;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.api,r=e.id,i.prev=1,i.next=4,n.i(w.call)(t.intent.deleteIntentIdWebhook,{id:r});case 4:i.next=12;break;case 6:return i.prev=6,i.t0=i.catch(1),a=i.t0.response,i.next=11,n.i(w.put)(n.i(y.I)({message:a.obj.message}));case 11:throw a;case 12:case"end":return i.stop()}},ee,this,[[1,6]])}function S(e){var t,r,i,s,c,u,o,p;return regeneratorRuntime.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return t=e.api,r=e.id,E.next=3,n.i(w.select)(n.i(K.g)());case 3:return i=E.sent,E.prev=4,s=i.agent,c=i.domain,u=i.intent,o=a(i,["agent","domain","intent"]),delete o.id,E.next=9,n.i(w.call)(t.intent.putIntentIdPostformat,{id:r,body:o});case 9:E.next=17;break;case 11:return E.prev=11,E.t0=E.catch(4),p=E.t0.response,E.next=16,n.i(w.put)(n.i(y.I)({message:p.obj.message}));case 16:throw p;case 17:case"end":return E.stop()}},te,this,[[4,11]])}function I(e){var t,r,a;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.api,r=e.id,i.prev=1,i.next=4,n.i(w.call)(t.intent.deleteIntentIdPostformat,{id:r});case 4:i.next=12;break;case 6:return i.prev=6,i.t0=i.catch(1),a=i.t0.response,i.next=11,n.i(w.put)(n.i(y.I)({message:a.obj.message}));case 11:throw a;case 12:case"end":return i.stop()}},ne,this,[[1,6]])}function O(e){var t,r,i,s,c,u,o,p,E;return regeneratorRuntime.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return t=e.api,r=e.id,d.next=3,n.i(w.select)(n.i(K.c)());case 3:return i=d.sent,d.next=6,n.i(w.select)(n.i(K.i)());case 6:if(s=d.sent,d.prev=7,b.a.isEqual(i,s)){d.next=13;break}return c=i.agent,u=i.domain,o=i.intent,p=a(i,["agent","domain","intent"]),delete p.id,d.next=13,n.i(w.call)(t.intent.putIntentIdScenario,{id:r,body:p});case 13:return d.next=15,n.i(w.put)(n.i(y.J)());case 15:d.next=23;break;case 17:return d.prev=17,d.t0=d.catch(7),E=d.t0.response,d.next=22,n.i(w.put)(n.i(y.K)({message:E.obj.message}));case 22:throw E;case 23:case"end":return d.stop()}},re,this,[[7,17]])}function x(e){var t,r,u,o,p,E,d,x,g,l,m;return regeneratorRuntime.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return t=e.api,N.next=3,n.i(w.select)(n.i(K.a)());case 3:return r=N.sent,r=D.a.asMutable(r,{deep:!0}),N.next=7,n.i(w.select)(n.i(K.b)());case 7:return u=N.sent,N.next=10,n.i(w.select)(n.i(K.i)());case 10:if(o=N.sent,N.prev=11,b.a.isEqual(r,u)){N.next=19;break}return p=r,E=p.id,d=p.agent,x=p.domain,g=a(p,["id","agent","domain"]),N.next=16,n.i(w.call)(t.intent.putIntentId,{id:E,body:g});case 16:return l=N.sent,N.next=19,n.i(w.call)(y.L,{id:d.id});case 19:return N.next=21,n.i(w.put)(n.i(y.M)());case 21:if(!o){N.next=26;break}return N.next=24,n.i(w.call)(O,{api:t,id:r.id});case 24:N.next=28;break;case 26:return N.next=28,n.i(w.call)(c,{api:t,id:r.id,intentData:r});case 28:if(!u.useWebhook){N.next=38;break}if(!r.useWebhook){N.next=34;break}return N.next=32,n.i(w.call)(_,{api:t,id:r.id});case 32:N.next=36;break;case 34:return N.next=36,n.i(w.call)(f,{api:t,id:r.id});case 36:N.next=41;break;case 38:if(!r.useWebhook){N.next=41;break}return N.next=41,n.i(w.call)(i,{api:t,id:r.id,intentData:r});case 41:if(!u.usePostFormat){N.next=51;break}if(!r.usePostFormat){N.next=47;break}return N.next=45,n.i(w.call)(S,{api:t,id:r.id});case 45:N.next=49;break;case 47:return N.next=49,n.i(w.call)(I,{api:t,id:r.id});case 49:N.next=54;break;case 51:if(!r.usePostFormat){N.next=54;break}return N.next=54,n.i(w.call)(s,{api:t,id:r.id,intentData:r});case 54:return N.next=56,n.i(w.put)(n.i(G.push)("/intents"));case 56:N.next=74;break;case 58:if(N.prev=58,N.t0=N.catch(11),console.log(N.t0),m={err:N.t0},!m.err||"Failed to fetch"!==m.err.message){N.next=67;break}return N.next=65,n.i(w.put)(n.i(y.N)({message:"Can't find a connection with the API. Please check your API is alive and configured properly."}));case 65:N.next=74;break;case 67:if(!m.err.response.obj||!m.err.response.obj.message){N.next=72;break}return N.next=70,n.i(w.put)(n.i(y.N)({message:m.err.response.obj.message}));case 70:N.next=74;break;case 72:return N.next=74,n.i(w.put)(n.i(y.N)({message:"Unknow API error"}));case 74:case"end":return N.stop()}},ae,this,[[11,58]])}function g(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(w.takeLatest)(j._19,x);case 2:return e=t.sent,t.next=5,n.i(w.take)(G.LOCATION_CHANGE);case 5:return t.next=7,n.i(w.cancel)(e);case 7:case"end":return t.stop()}},ie,this)}function l(e){var t,r,a,i,s,c,u;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.api,r=e.id,o.prev=1,o.next=4,n.i(w.call)(t.intent.getIntentId,{id:r});case 4:return a=o.sent,i=a.obj,o.next=8,n.i(w.call)(t.agent.getAgentNameAgentname,{agentName:i.agent});case 8:return s=o.sent,c=s.obj,o.next=12,n.i(w.call)(U.getAgentDomains,{api:t,agentId:c.id});case 12:return o.next=14,n.i(w.call)(M.getAgentEntities,{api:t,agentId:c.id,forIntentEdit:!0});case 14:return o.next=16,n.i(w.put)(n.i(F.v)(i));case 16:o.next=23;break;case 18:return o.prev=18,o.t0=o.catch(1),u=o.t0.response,o.next=23,n.i(w.put)(n.i(F.w)({message:u.obj.message}));case 23:case"end":return o.stop()}},se,this,[[1,18]])}function m(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(w.takeLatest)(B.t,l);case 2:return e=t.sent,t.next=5,n.i(w.take)(G.LOCATION_CHANGE);case 5:return t.next=7,n.i(w.cancel)(e);case 7:case"end":return t.stop()}},ce,this)}function N(e){var t,r,a,i,s;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.api,r=e.id,c.prev=1,c.next=4,n.i(w.call)(t.intent.getIntentIdScenario,{id:r});case 4:return a=c.sent,i=a.obj,c.next=8,n.i(w.put)(n.i(F.x)(i));case 8:c.next=15;break;case 10:return c.prev=10,c.t0=c.catch(1),s=c.t0.response,c.next=15,n.i(w.put)(n.i(F.y)({message:s.obj.message}));case 15:case"end":return c.stop()}},ue,this,[[1,10]])}function R(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(w.takeLatest)(B.x,N);case 2:return e=t.sent,t.next=5,n.i(w.take)(G.LOCATION_CHANGE);case 5:return t.next=7,n.i(w.cancel)(e);case 7:case"end":return t.stop()}},oe,this)}function P(e){var t,r,a,i,s;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.api,r=e.id,c.prev=1,c.next=4,n.i(w.call)(t.intent.getIntentIdWebhook,{id:r});case 4:return a=c.sent,i=a.obj,c.next=8,n.i(w.put)(n.i(F.z)(i));case 8:c.next=15;break;case 10:return c.prev=10,c.t0=c.catch(1),s=c.t0.response,c.next=15,n.i(w.put)(n.i(F.A)({message:s.obj.message}));case 15:case"end":return c.stop()}},pe,this,[[1,10]])}function A(e){var t,r,a,i,s;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.api,r=e.id,c.prev=1,c.next=4,n.i(w.call)(t.intent.getIntentIdPostformat,{id:r});case 4:return a=c.sent,i=a.obj,c.next=8,n.i(w.put)(n.i(F.B)(i));case 8:c.next=15;break;case 10:return c.prev=10,c.t0=c.catch(1),s=c.t0.response,c.next=15,n.i(w.put)(n.i(F.C)({message:s.obj.message}));case 15:case"end":return c.stop()}},Ee,this,[[1,10]])}function T(e){var t,a,i,s=this;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.api,a=e.id,c.prev=1,c.delegateYield(regeneratorRuntime.mark(function e(){var c,u,o,p,E,d;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(w.select)(n.i(K.c)());case 2:return c=e.sent,u=[],c.slots.forEach(function(e){null!==e.entity&&e.entity.indexOf("sys.")>-1&&u.push(e.entity)}),e.next=7,n.i(w.select)(n.i(K.a)());case 7:o=e.sent,o=D.a.asMutable(o,{deep:!0}),i=0;case 10:if(!(i<o.examples.length)){e.next=22;break}if(o.examples[i].entities=o.examples[i].entities.filter(function(e){return e.entity.indexOf("sys.")<0}),!(u.length>0)){e.next=19;break}return p=o.examples[i],e.next=16,n.i(w.call)(t.agent.getAgentIdParse,{id:a,text:p.userSays,timezone:""});case 16:E=e.sent,d=E.obj.result.results,d.forEach(function(e){e.entities.forEach(function(e){u.indexOf(e.entity)>-1&&(o.examples[i].entities=[].concat(r(o.examples[i].entities),[{value:e.value.value||e.value.values[0].value,entity:e.entity,start:e.start,end:e.end,extractor:"system",entityId:0}]))})});case 19:i++,e.next=10;break;case 22:return e.next=24,n.i(w.put)(n.i(F.D)(o));case 24:case"end":return e.stop()}},e,s)})(),"t0",3);case 3:c.next=8;break;case 5:c.prev=5,c.t1=c.catch(1),console.log(c.t1);case 8:case"end":return c.stop()}},de,this,[[1,5]])}function k(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(w.takeLatest)(B.A,P);case 2:return e=t.sent,t.next=5,n.i(w.take)(G.LOCATION_CHANGE);case 5:return t.next=7,n.i(w.cancel)(e);case 7:case"end":return t.stop()}},_e,this)}function h(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(w.takeLatest)(B.D,A);case 2:return e=t.sent,t.next=5,n.i(w.take)(G.LOCATION_CHANGE);case 5:return t.next=7,n.i(w.cancel)(e);case 7:case"end":return t.stop()}},fe,this)}function L(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(w.takeLatest)(B.u,T);case 2:e=t.sent;case 3:case"end":return t.stop()}},Se,this)}Object.defineProperty(t,"__esModule",{value:!0});var v=n("./node_modules/lodash/lodash.js"),b=n.n(v),C=n("./node_modules/seamless-immutable/seamless-immutable.development.js"),D=n.n(C),G=n("./node_modules/react-router-redux/lib/index.js"),w=(n.n(G),n("./node_modules/redux-saga/effects.js")),y=(n.n(w),n("./app/containers/App/actions.js")),j=n("./app/containers/App/constants.js"),H=n("./app/containers/App/sagas.js"),U=n("./app/containers/DomainListPage/sagas.js"),M=n("./app/containers/EntityListPage/sagas.js"),F=n("./app/containers/IntentPage/actions.js"),B=n("./app/containers/IntentPage/constants.js"),K=n("./app/containers/IntentPage/selectors.js"),W=n("./node_modules/constants-browserify/constants.json");n.n(W);n.d(t,"postIntent",function(){return u}),n.d(t,"getIntent",function(){return l}),n.d(t,"getScenario",function(){return N}),n.d(t,"getWebhook",function(){return P}),n.d(t,"getPostFormat",function(){return A}),t.createIntent=o,t.loadAgents=p,t.loadAgentDomains=E,t.loadAgentEntities=d,t.putIntent=x,t.updateIntent=g,t.loadIntent=m,t.loadScenario=R,t.getSysEntities=T,t.loadWebhook=k,t.loadPostFormatSaga=h,t.findSysEntitiesSaga=L;var Y=regeneratorRuntime.mark(i),X=regeneratorRuntime.mark(s),V=regeneratorRuntime.mark(c),z=regeneratorRuntime.mark(u),q=regeneratorRuntime.mark(o),Q=regeneratorRuntime.mark(p),J=regeneratorRuntime.mark(E),Z=regeneratorRuntime.mark(d),$=regeneratorRuntime.mark(_),ee=regeneratorRuntime.mark(f),te=regeneratorRuntime.mark(S),ne=regeneratorRuntime.mark(I),re=regeneratorRuntime.mark(O),ae=regeneratorRuntime.mark(x),ie=regeneratorRuntime.mark(g),se=regeneratorRuntime.mark(l),ce=regeneratorRuntime.mark(m),ue=regeneratorRuntime.mark(N),oe=regeneratorRuntime.mark(R),pe=regeneratorRuntime.mark(P),Ee=regeneratorRuntime.mark(A),de=regeneratorRuntime.mark(T),_e=regeneratorRuntime.mark(k),fe=regeneratorRuntime.mark(h),Se=regeneratorRuntime.mark(L);t.default=[o,p,E,d,g,m,R,k,h,L]},"./app/containers/IntentPage/selectors.js":function(e,t,n){"use strict";var r=n("./node_modules/reselect/es/index.js");n.d(t,"g",function(){return u}),n.d(t,"e",function(){return d}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return c}),n.d(t,"b",function(){return o}),n.d(t,"i",function(){return p}),n.d(t,"h",function(){return E}),n.d(t,"f",function(){return _});var a=function(e){return e.intent},i=function(){return n.i(r.a)(a,function(e){return e.intentData})},s=function(){return n.i(r.a)(a,function(e){return e.scenarioData})},c=function(){return n.i(r.a)(a,function(e){return e.webhookData})},u=function(){return n.i(r.a)(a,function(e){return e.postFormatData})},o=function(){return n.i(r.a)(a,function(e){return e.oldIntent})},p=function(){return n.i(r.a)(a,function(e){return e.oldScenario})},E=function(){return n.i(r.a)(a,function(e){return e.oldWebhook})},d=function(){return n.i(r.a)(a,function(e){return e.windowSelection})},_=function(){return n.i(r.a)(a,function(e){return e.touched})}},"./node_modules/constants-browserify/constants.json":function(e,t){e.exports={O_RDONLY:0,O_WRONLY:1,O_RDWR:2,S_IFMT:61440,S_IFREG:32768,S_IFDIR:16384,S_IFCHR:8192,S_IFBLK:24576,S_IFIFO:4096,S_IFLNK:40960,S_IFSOCK:49152,O_CREAT:512,O_EXCL:2048,O_NOCTTY:131072,O_TRUNC:1024,O_APPEND:8,O_DIRECTORY:1048576,O_NOFOLLOW:256,O_SYNC:128,O_SYMLINK:2097152,O_NONBLOCK:4,S_IRWXU:448,S_IRUSR:256,S_IWUSR:128,S_IXUSR:64,S_IRWXG:56,S_IRGRP:32,S_IWGRP:16,S_IXGRP:8,S_IRWXO:7,S_IROTH:4,S_IWOTH:2,S_IXOTH:1,E2BIG:7,EACCES:13,EADDRINUSE:48,EADDRNOTAVAIL:49,EAFNOSUPPORT:47,EAGAIN:35,EALREADY:37,EBADF:9,EBADMSG:94,EBUSY:16,ECANCELED:89,ECHILD:10,ECONNABORTED:53,ECONNREFUSED:61,ECONNRESET:54,EDEADLK:11,EDESTADDRREQ:39,EDOM:33,EDQUOT:69,EEXIST:17,EFAULT:14,EFBIG:27,EHOSTUNREACH:65,EIDRM:90,EILSEQ:92,EINPROGRESS:36,EINTR:4,EINVAL:22,EIO:5,EISCONN:56,EISDIR:21,ELOOP:62,EMFILE:24,EMLINK:31,EMSGSIZE:40,EMULTIHOP:95,ENAMETOOLONG:63,ENETDOWN:50,ENETRESET:52,ENETUNREACH:51,ENFILE:23,ENOBUFS:55,ENODATA:96,ENODEV:19,ENOENT:2,ENOEXEC:8,ENOLCK:77,ENOLINK:97,ENOMEM:12,ENOMSG:91,ENOPROTOOPT:42,ENOSPC:28,ENOSR:98,ENOSTR:99,ENOSYS:78,ENOTCONN:57,ENOTDIR:20,ENOTEMPTY:66,ENOTSOCK:38,ENOTSUP:45,ENOTTY:25,ENXIO:6,EOPNOTSUPP:102,EOVERFLOW:84,EPERM:1,EPIPE:32,EPROTO:100,EPROTONOSUPPORT:43,EPROTOTYPE:41,ERANGE:34,EROFS:30,ESPIPE:29,ESRCH:3,ESTALE:70,ETIME:101,ETIMEDOUT:60,ETXTBSY:26,EWOULDBLOCK:35,EXDEV:18,SIGHUP:1,SIGINT:2,SIGQUIT:3,SIGILL:4,SIGTRAP:5,SIGABRT:6,SIGIOT:6,SIGBUS:10,SIGFPE:8,SIGKILL:9,SIGUSR1:30,SIGSEGV:11,SIGUSR2:31,SIGPIPE:13,SIGALRM:14,SIGTERM:15,SIGCHLD:20,SIGCONT:19,SIGSTOP:17,SIGTSTP:18,SIGTTIN:21,SIGTTOU:22,SIGURG:16,SIGXCPU:24,SIGXFSZ:25,SIGVTALRM:26,SIGPROF:27,SIGWINCH:28,SIGIO:23,SIGSYS:12,SSL_OP_ALL:2147486719,SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION:262144,SSL_OP_CIPHER_SERVER_PREFERENCE:4194304,SSL_OP_CISCO_ANYCONNECT:32768,SSL_OP_COOKIE_EXCHANGE:8192,SSL_OP_CRYPTOPRO_TLSEXT_BUG:2147483648,SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS:2048,SSL_OP_EPHEMERAL_RSA:0,SSL_OP_LEGACY_SERVER_CONNECT:4,SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER:32,SSL_OP_MICROSOFT_SESS_ID_BUG:1,SSL_OP_MSIE_SSLV2_RSA_PADDING:0,SSL_OP_NETSCAPE_CA_DN_BUG:536870912,SSL_OP_NETSCAPE_CHALLENGE_BUG:2,SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG:1073741824,SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG:8,SSL_OP_NO_COMPRESSION:131072,SSL_OP_NO_QUERY_MTU:4096,SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION:65536,SSL_OP_NO_SSLv2:16777216,SSL_OP_NO_SSLv3:33554432,SSL_OP_NO_TICKET:16384,SSL_OP_NO_TLSv1:67108864,SSL_OP_NO_TLSv1_1:268435456,SSL_OP_NO_TLSv1_2:134217728,SSL_OP_PKCS1_CHECK_1:0,SSL_OP_PKCS1_CHECK_2:0,SSL_OP_SINGLE_DH_USE:1048576,SSL_OP_SINGLE_ECDH_USE:524288,SSL_OP_SSLEAY_080_CLIENT_DH_BUG:128,SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG:0,SSL_OP_TLS_BLOCK_PADDING_BUG:512,SSL_OP_TLS_D5_BUG:256,SSL_OP_TLS_ROLLBACK_BUG:8388608,ENGINE_METHOD_DSA:2,ENGINE_METHOD_DH:4,ENGINE_METHOD_RAND:8,ENGINE_METHOD_ECDH:16,ENGINE_METHOD_ECDSA:32,ENGINE_METHOD_CIPHERS:64,ENGINE_METHOD_DIGESTS:128,ENGINE_METHOD_STORE:256,ENGINE_METHOD_PKEY_METHS:512,ENGINE_METHOD_PKEY_ASN1_METHS:1024,ENGINE_METHOD_ALL:65535,ENGINE_METHOD_NONE:0,DH_CHECK_P_NOT_SAFE_PRIME:2,DH_CHECK_P_NOT_PRIME:1,DH_UNABLE_TO_CHECK_GENERATOR:4,DH_NOT_SUITABLE_GENERATOR:8,NPN_ENABLED:1,RSA_PKCS1_PADDING:1,RSA_SSLV23_PADDING:2,RSA_NO_PADDING:3,RSA_PKCS1_OAEP_PADDING:4,RSA_X931_PADDING:5,RSA_PKCS1_PSS_PADDING:6,POINT_CONVERSION_COMPRESSED:2,POINT_CONVERSION_UNCOMPRESSED:4,POINT_CONVERSION_HYBRID:6,F_OK:0,R_OK:4,W_OK:2,X_OK:1,UV_UDP_REUSEADDR:4}}});