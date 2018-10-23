webpackJsonp([5],{"./app/containers/EntityPage/actions.js":function(e,t,n){"use strict";function r(e){return{type:g.a,payload:e}}function a(){return{type:g.b}}function i(e){return{type:g.c,example:e}}function s(e){return{type:g.d,example:e}}function c(e){return{type:g.e,payload:e}}function u(e){return{type:g.f,payload:e}}function o(){return{type:g.g}}function p(){return{type:g.h}}function f(e){return{type:g.i,error:e}}function d(e){return{type:g.j,entity:e}}function y(e){return{type:g.k,apiCall:!0,id:e}}var g=n("./app/containers/EntityPage/constants.js");t.a=r,t.h=a,t.b=i,t.c=s,t.d=c,t.e=u,t.f=o,t.g=p,t.k=f,t.j=d,t.i=y},"./app/containers/EntityPage/constants.js":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return s}),n.d(t,"e",function(){return c}),n.d(t,"f",function(){return u}),n.d(t,"g",function(){return o}),n.d(t,"h",function(){return p}),n.d(t,"k",function(){return f}),n.d(t,"j",function(){return d}),n.d(t,"i",function(){return y});var r="EntityPage/CHANGE_ENTITY_DATA",a="EntityPage/RESET_ENTITY_DATA",i="EntityPage/REMOVE_EXAMPLE",s="EntityPage/ADD_EXAMPLE",c="EntityPage/REMOVE_SYNONYM",u="EntityPage/ADD_SYNONYM",o="EntityPage/SWITCH_COLOR_PICKER_DISPLAY",p="EntityPage/CLOSE_COLOR_PICKER",f="EntityPage/LOAD_ENTITY",d="EntityPage/LOAD_ENTITY_SUCCESS",y="EntityPage/LOAD_ENTITY_ERROR"},"./app/containers/EntityPage/sagas.js":function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e){var t,r,a,i,s;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.api,c.next=3,n.i(f.select)(n.i(x.a)());case 3:return r=c.sent,c.prev=4,c.next=7,n.i(f.call)(t.entity.postEntity,{body:r});case 7:return a=c.sent,i=a.obj,c.next=11,n.i(f.put)(n.i(d.m)(i,i.id));case 11:c.next=18;break;case 13:return c.prev=13,c.t0=c.catch(4),s=c.t0.response,c.next=18,n.i(f.put)(n.i(d.n)({message:s.obj.message}));case 18:case"end":return c.stop()}},l,this,[[4,13]])}function i(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(f.takeLatest)(y.F,a);case 2:return e=t.sent,t.next=5,n.i(f.take)(p.LOCATION_CHANGE);case 5:return t.next=7,n.i(f.cancel)(e);case 7:case"end":return t.stop()}},m,this)}function s(e){var t,a,i,s,c,u,o,y;return regeneratorRuntime.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return t=e.api,g.next=3,n.i(f.select)(n.i(x.a)());case 3:return a=g.sent,i=a.id,s=a.agent,c=r(a,["id","agent"]),g.prev=5,g.next=8,n.i(f.call)(t.entity.putEntityId,{id:i,body:c});case 8:return u=g.sent,o=u.obj,g.next=12,n.i(f.put)(n.i(d.o)(o));case 12:return g.next=14,n.i(f.put)(n.i(p.push)("/entities"));case 14:g.next=31;break;case 16:if(g.prev=16,g.t0=g.catch(5),y={err:g.t0},!y.err||"Failed to fetch"!==y.err.message){g.next=24;break}return g.next=22,n.i(f.put)(n.i(d.p)({message:"Can't find a connection with the API. Please check your API is alive and configured properly."}));case 22:g.next=31;break;case 24:if(!y.err.response.obj||!y.err.response.obj.message){g.next=29;break}return g.next=27,n.i(f.put)(n.i(d.p)({message:y.err.response.obj.message}));case 27:g.next=31;break;case 29:return g.next=31,n.i(f.put)(n.i(d.p)({message:"Unknow API error"}));case 31:case"end":return g.stop()}},k,this,[[5,16]])}function c(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(f.takeLatest)(y._24,s);case 2:return e=t.sent,t.next=5,n.i(f.take)(p.LOCATION_CHANGE);case 5:return t.next=7,n.i(f.cancel)(e);case 7:case"end":return t.stop()}},P,this)}function u(e){var t,r,a,i,s;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.api,r=e.id,c.prev=1,c.next=4,n.i(f.call)(t.entity.getEntityId,{id:r});case 4:return a=c.sent,i=a.obj,c.next=8,n.i(f.put)(n.i(g.j)(i));case 8:c.next=25;break;case 10:if(c.prev=10,c.t0=c.catch(1),s={err:c.t0},!s.err||"Failed to fetch"!==s.err.message){c.next=18;break}return c.next=16,n.i(f.put)(n.i(g.k)({message:"Can't find a connection with the API. Please check your API is alive and configured properly."}));case 16:c.next=25;break;case 18:if(!s.err.response.obj||!s.err.response.obj.message){c.next=23;break}return c.next=21,n.i(f.put)(n.i(g.k)({message:s.err.response.obj.message}));case 21:c.next=25;break;case 23:return c.next=25,n.i(f.put)(n.i(g.k)({message:"Unknow API error"}));case 25:case"end":return c.stop()}},b,this,[[1,10]])}function o(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(f.takeLatest)(E.k,u);case 2:return e=t.sent,t.next=5,n.i(f.take)(p.LOCATION_CHANGE);case 5:return t.next=7,n.i(f.cancel)(e);case 7:case"end":return t.stop()}},v,this)}var p=n("./node_modules/react-router-redux/lib/index.js");n.n(p);Object.defineProperty(t,"__esModule",{value:!0});var f=n("./node_modules/redux-saga/effects.js"),d=(n.n(f),n("./app/containers/App/actions.js")),y=n("./app/containers/App/constants.js"),g=n("./app/containers/EntityPage/actions.js"),E=n("./app/containers/EntityPage/constants.js"),x=n("./app/containers/EntityPage/selectors.js");n.d(t,"postEntity",function(){return a}),t.createEntity=i,t.putEntity=s,t.updateEntity=c,t.getEntity=u,t.loadEntity=o;var l=regeneratorRuntime.mark(a),m=regeneratorRuntime.mark(i),k=regeneratorRuntime.mark(s),P=regeneratorRuntime.mark(c),b=regeneratorRuntime.mark(u),v=regeneratorRuntime.mark(o);t.default=[i,c,o]},"./app/containers/EntityPage/selectors.js":function(e,t,n){"use strict";var r=n("./node_modules/reselect/es/index.js");n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return c});var a=function(e){return e.entity},i=function(){return n.i(r.a)(a,function(e){return e.entityData})},s=function(){return n.i(r.a)(a,function(e){return e.displayColorPicker})},c=function(){return n.i(r.a)(a,function(e){return e.touched})}}});