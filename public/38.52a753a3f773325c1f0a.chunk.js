webpackJsonp([38],{"./app/containers/DucklingSettingsPage/sagas.js":function(e,t,r){"use strict";function n(e){var t,n,s,a,i;return regeneratorRuntime.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return t=e.api,p.next=3,r.i(u.select)(r.i(g.b)());case 3:return n=p.sent,p.prev=4,p.next=7,r.i(u.call)(t.settings.putSettings,{body:n});case 7:return s=p.sent,a=s.obj,p.next=11,r.i(u.put)(r.i(o.g)(a));case 11:return p.next=13,r.i(u.put)(r.i(c.push)("/settings/duckling"));case 13:p.next=30;break;case 15:if(p.prev=15,p.t0=p.catch(4),i={err:p.t0},!i.err||"Failed to fetch"!==i.err.message){p.next=23;break}return p.next=21,r.i(u.put)(r.i(o.h)({message:"Can't find a connection with the API. Please check your API is alive and configured properly."}));case 21:p.next=30;break;case 23:if(!i.err.response.obj||!i.err.response.obj.message){p.next=28;break}return p.next=26,r.i(u.put)(r.i(o.h)({message:i.err.response.obj.message}));case 26:p.next=30;break;case 28:return p.next=30,r.i(u.put)(r.i(o.h)({message:"Unknow API error"}));case 30:case"end":return p.stop()}},x,this,[[4,15]])}function s(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.i(u.takeLatest)(p._16,n);case 2:return e=t.sent,t.next=5,r.i(u.take)(c.LOCATION_CHANGE);case 5:return t.next=7,r.i(u.cancel)(e);case 7:case"end":return t.stop()}},m,this)}function a(e){var t,n,s,a,i;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.api,n=e.id,c.prev=1,c.next=4,r.i(u.call)(t.settings.getSettings);case 4:return s=c.sent,a=s.obj,c.next=8,r.i(u.put)(r.i(o.i)(a));case 8:c.next=25;break;case 10:if(c.prev=10,c.t0=c.catch(1),i={err:c.t0},!i.err||"Failed to fetch"!==i.err.message){c.next=18;break}return c.next=16,r.i(u.put)(r.i(o.j)({message:"Can't find a connection with the API. Please check your API is alive and configured properly."}));case 16:c.next=25;break;case 18:if(!i.err.response.obj||!i.err.response.obj.message){c.next=23;break}return c.next=21,r.i(u.put)(r.i(o.j)({message:i.err.response.obj.message}));case 21:c.next=25;break;case 23:return c.next=25,r.i(u.put)(r.i(o.j)({message:"Unknow API error"}));case 25:case"end":return c.stop()}},d,this,[[1,10]])}function i(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.i(u.takeLatest)(p._36,a);case 2:return e=t.sent,t.next=5,r.i(u.take)(c.LOCATION_CHANGE);case 5:return t.next=7,r.i(u.cancel)(e);case 7:case"end":return t.stop()}},k,this)}Object.defineProperty(t,"__esModule",{value:!0});var c=r("./node_modules/react-router-redux/lib/index.js"),u=(r.n(c),r("./node_modules/redux-saga/effects.js")),o=(r.n(u),r("./app/containers/App/actions.js")),p=r("./app/containers/App/constants.js"),g=r("./app/containers/App/selectors.js"),l=r("./node_modules/seamless-immutable/seamless-immutable.development.js");r.n(l);t.putDucklingSettings=n,t.updateDucklingSettings=s,t.getDucklingSettings=a,t.loadDucklingSettings=i;var x=regeneratorRuntime.mark(n),m=regeneratorRuntime.mark(s),d=regeneratorRuntime.mark(a),k=regeneratorRuntime.mark(i);t.default=[s,i]}});