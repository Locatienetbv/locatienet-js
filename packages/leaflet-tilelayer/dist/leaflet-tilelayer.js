/*!
 * Locatienet @locatienet/leaflet-tilelayer v1.0.20 (https://github.com/Locatienetbv/locatienet-js/tree/master/packages/leaflet-tilelayer#readme)
 * Copyright 2021-2025 Remco Zut
 * Licensed under MIT (https://github.com/locatienetbv/locatienet-js/LICENSE)
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('leaflet')) :
    typeof define === 'function' && define.amd ? define(['exports', 'leaflet'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.L = global.L || {}, global.L.LocatienetTilelayer = {}), global.L));
})(this, (function (exports, L) { 'use strict';

    function _interopNamespaceDefault(e) {
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n.default = e;
        return Object.freeze(n);
    }

    var L__namespace = /*#__PURE__*/_interopNamespaceDefault(L);

    var apiClient_min$1 = {exports: {}};

    /*!
     * Locatienet @locatienet/api-client v1.0.20 (https://github.com/Locatienetbv/locatienet-js/tree/master/packages/api-client#readme)
     * Copyright 2021-2025 Remco Zut
     * Licensed under MIT (https://github.com/locatienetbv/locatienet-js/LICENSE)
     */
    var apiClient_min = apiClient_min$1.exports;

    var hasRequiredApiClient_min;

    function requireApiClient_min () {
    	if (hasRequiredApiClient_min) return apiClient_min$1.exports;
    	hasRequiredApiClient_min = 1;
    	(function (module, exports) {
    		!function(t,e){e(exports);}(apiClient_min,function(t){class e extends Error{constructor(t,e,o){super(o),this.name="ApiError",this.url=e.url,this.status=e.status,this.statusText=e.statusText,this.body=e.body,this.request=t;}}function o(t,e,o,r){if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return "m"===o?r:"a"===o?r.call(t):r?r.value:e.get(t)}function r(t,e,o,r,n){if("function"==typeof e?t!==e||true:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(t,o),o}var n,s,a,i,c,d,u;"function"==typeof SuppressedError&&SuppressedError;class p extends Error{constructor(t){super(t),this.name="CancelError";}get isCancelled(){return  true}}class l{constructor(t){n.set(this,void 0),s.set(this,void 0),a.set(this,void 0),i.set(this,void 0),c.set(this,void 0),d.set(this,void 0),u.set(this,void 0),r(this,n,false),r(this,s,false),r(this,a,false),r(this,i,[]),r(this,c,new Promise((e,c)=>{r(this,d,e,"f"),r(this,u,c,"f");const p=t=>{o(this,n,"f")||o(this,s,"f")||o(this,a,"f")||o(this,i,"f").push(t);};return Object.defineProperty(p,"isResolved",{get:()=>o(this,n,"f")}),Object.defineProperty(p,"isRejected",{get:()=>o(this,s,"f")}),Object.defineProperty(p,"isCancelled",{get:()=>o(this,a,"f")}),t(t=>{o(this,n,"f")||o(this,s,"f")||o(this,a,"f")||(r(this,n,true,"f"),o(this,d,"f")&&o(this,d,"f").call(this,t));},t=>{o(this,n,"f")||o(this,s,"f")||o(this,a,"f")||(r(this,s,true,"f"),o(this,u,"f")&&o(this,u,"f").call(this,t));},p)}));}get[(n=new WeakMap,s=new WeakMap,a=new WeakMap,i=new WeakMap,c=new WeakMap,d=new WeakMap,u=new WeakMap,Symbol.toStringTag)](){return "Cancellable Promise"}then(t,e){return o(this,c,"f").then(t,e)}catch(t){return o(this,c,"f").catch(t)}finally(t){return o(this,c,"f").finally(t)}cancel(){if(!(o(this,n,"f")||o(this,s,"f")||o(this,a,"f"))){if(r(this,a,true),o(this,i,"f").length)try{for(const t of o(this,i,"f"))t();}catch(t){return void console.warn("Cancellation threw an error",t)}o(this,i,"f").length=0,o(this,u,"f")&&o(this,u,"f").call(this,new p("Request aborted"));}}get isCancelled(){return o(this,a,"f")}}const y={BASE:"https://services.locatienet.com",VERSION:"1.0",WITH_CREDENTIALS:false,CREDENTIALS:"include",TOKEN:void 0,USERNAME:void 0,PASSWORD:void 0,HEADERS:void 0,ENCODE_PATH:void 0},f=t=>null!=t,h=t=>"string"==typeof t,m=t=>h(t)&&""!==t,w=t=>"object"==typeof t&&"string"==typeof t.type&&"function"==typeof t.stream&&"function"==typeof t.arrayBuffer&&"function"==typeof t.constructor&&"string"==typeof t.constructor.name&&/^(Blob|File)$/.test(t.constructor.name)&&/^(Blob|File)$/.test(t[Symbol.toStringTag]),T=t=>t instanceof FormData,b=t=>{const e=[],o=(t,r)=>{f(r)&&(Array.isArray(r)?r.forEach(e=>{o(t,e);}):"object"==typeof r?Object.entries(r).forEach(([e,r])=>{o(`${t}[${e}]`,r);}):((t,o)=>{e.push(`${encodeURIComponent(t)}=${encodeURIComponent(String(o))}`);})(t,r));};return Object.entries(t).forEach(([t,e])=>{o(t,e);}),e.length>0?`?${e.join("&")}`:""},R=async(t,e)=>"function"==typeof e?e(t):e,S=async(t,e)=>{const[o,r,n,s]=await Promise.all([R(e,t.TOKEN),R(e,t.USERNAME),R(e,t.PASSWORD),R(e,t.HEADERS)]),a=Object.entries({Accept:"application/json",...s,...e.headers}).filter(([t,e])=>f(e)).reduce((t,[e,o])=>({...t,[e]:String(o)}),{});if(m(o)&&(a.Authorization=`Bearer ${o}`),m(r)&&m(n)){const t=(t=>{try{return btoa(t)}catch(e){return Buffer.from(t).toString("base64")}})(`${r}:${n}`);a.Authorization=`Basic ${t}`;}return void 0!==e.body&&(e.mediaType?a["Content-Type"]=e.mediaType:w(e.body)?a["Content-Type"]=e.body.type||"application/octet-stream":h(e.body)?a["Content-Type"]="text/plain":T(e.body)||(a["Content-Type"]="application/json")),new Headers(a)},g=(t,o)=>new l(async(r,n,s)=>{try{const n=((t,e)=>{const o=encodeURI,r=e.url.replace("{api-version}",t.VERSION).replace(/{(.*?)}/g,(t,r)=>e.path?.hasOwnProperty(r)?o(String(e.path[r])):t),n=`${t.BASE}${r}`;return e.query?`${n}${b(e.query)}`:n})(t,o),a=(t=>{if(t.formData){const e=new FormData,o=(t,o)=>{h(o)||w(o)?e.append(t,o):e.append(t,JSON.stringify(o));};return Object.entries(t.formData).filter(([t,e])=>f(e)).forEach(([t,e])=>{Array.isArray(e)?e.forEach(e=>o(t,e)):o(t,e);}),e}})(o),i=(t=>{if(void 0!==t.body)return t.mediaType?.includes("/json")?JSON.stringify(t.body):h(t.body)||w(t.body)||T(t.body)?t.body:JSON.stringify(t.body)})(o),c=await S(t,o);if(!s.isCancelled){const t=await(async(t,e,o,r,n,s,a)=>{const i=new AbortController,c={headers:s,body:r??n,method:e.method,signal:i.signal};return a(()=>i.abort()),await fetch(o,c)})(0,o,n,i,a,c,s),d=await(async t=>{if(204!==t.status)try{const e=t.headers.get("Content-Type");if(e)return ["application/json","application/problem+json"].some(t=>e.toLowerCase().startsWith(t))?await t.json():await t.text()}catch(t){console.error(t);}})(t),u=((t,e)=>{if(e){const o=t.headers.get(e);if(h(o))return o}})(t,o.responseHeader),p={url:n,ok:t.ok,status:t.status,statusText:t.statusText,body:u??d};((t,o)=>{const r={400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found",500:"Internal Server Error",502:"Bad Gateway",503:"Service Unavailable",...t.errors}[o.status];if(r)throw new e(t,o,r);if(!o.ok){const r=o.status??"unknown",n=o.statusText??"unknown",s=(()=>{try{return JSON.stringify(o.body,null,2)}catch(t){return}})();throw new e(t,o,`Generic Error: status: ${r}; status text: ${n}; body: ${s}`)}})(o,p),r(p.body);}}catch(t){n(t);}});class E{static postRsV1LocateSearchByText(t){return g(y,{method:"POST",url:"/rs/v1/Locate/searchByText",body:t,mediaType:"application/json"})}static postRsV1LocateSearchByAddress(t){return g(y,{method:"POST",url:"/rs/v1/Locate/searchByAddress",body:t,mediaType:"application/json"})}static postRsV1LocateSearchByPosition(t){return g(y,{method:"POST",url:"/rs/v1/Locate/searchByPosition",body:t,mediaType:"application/json"})}static postRsV1RouteCalculateRouteDescription(t){return g(y,{method:"POST",url:"/rs/v1/Route/calculateRouteDescription",body:t,mediaType:"application/json"})}static getRsV1MapRenderMapTile(){return g(y,{method:"GET",url:"/rs/v1/Map/renderMapTile"})}static postRsV1MapRenderMapByBounds(t){return g(y,{method:"POST",url:"/rs/v1/Map/renderMapByBounds",body:t,mediaType:"application/json"})}static postRsV1MapRenderMapByCenter(t){return g(y,{method:"POST",url:"/rs/v1/Map/renderMapByCenter",body:t,mediaType:"application/json"})}static getRsV1CountryList(){return g(y,{method:"GET",url:"/rs/v1/Country/list"})}}class v{static postRsV1LocateSearchByText(t){return g(y,{method:"POST",url:"/rs/v1/Locate/searchByText",body:t,mediaType:"application/json"})}static postRsV1LocateSearchByAddress(t){return g(y,{method:"POST",url:"/rs/v1/Locate/searchByAddress",body:t,mediaType:"application/json"})}static postRsV1RouteCalculateRouteInfo(t){return g(y,{method:"POST",url:"/rs/v1/Route/calculateRouteInfo",body:t,mediaType:"application/json"})}static getRsV1CountryList(){return g(y,{method:"GET",url:"/rs/v1/Country/list"})}}async function A(t,e){const o={locations:t,options:{...e,includePolyline:true}},r=await v.postRsV1RouteCalculateRouteInfo(o);return {type:"Feature",geometry:{type:"LineString",coordinates:(r.polyline??[]).filter(t=>null!=t.x&&null!=t.y).map(t=>[t.x,t.y])},properties:{distance:r.distance,travelTime:r.travelTime}}}const B=window.LN_API_KEY||function(){const t=document.getElementsByTagName("script"),e=t[t.length-1];if(e){return new URLSearchParams(e.src.split("?")[1]).get("apikey")||""}return ""}()||"";y.HEADERS={"X-API-KEY":B};const P={apikey:B,locateByText:async function(t,e,o){const r={text:t,country:e,options:o};return (await v.postRsV1LocateSearchByText(r)).filter(t=>null!=t.coordinate?.x&&null!=t.coordinate?.y).map(t=>({type:"Feature",geometry:{type:"Point",coordinates:[t.coordinate?.x||0,t.coordinate?.y||0]},properties:t}))},locateByAddress:async function(t,e){const o={address:t,options:e};return (await v.postRsV1LocateSearchByAddress(o)).filter(t=>null!=t.coordinate?.x&&null!=t.coordinate?.y).map(t=>({type:"Feature",geometry:{type:"Point",coordinates:[t.coordinate?.x||0,t.coordinate?.y||0]},properties:t}))},locateByPosition:async function(t,e){const o={coordinate:Array.isArray(t)?{x:t[0],y:t[1]}:t,options:e};return (await E.postRsV1LocateSearchByPosition(o)).filter(t=>null!=t.coordinate?.x&&null!=t.coordinate?.y).map(t=>({type:"Feature",geometry:{type:"Point",coordinates:[t.coordinate?.x||0,t.coordinate?.y||0]},properties:t}))},calculateRouteInfo:A,calculateRoute:A,countries:async function(){return await v.getRsV1CountryList()}};"undefined"!=typeof window&&(window.LN=window.LN||{},window.LN.Api=P),t.Api=P;});
    		
    	} (apiClient_min$1, apiClient_min$1.exports));
    	return apiClient_min$1.exports;
    }

    var apiClient_minExports = requireApiClient_min();

    const url = `https://tile{s}.locatienet.com/{z}/{x}/{y}.png?apikey=${apiClient_minExports.Api.apikey}`;
    const attribution = ' &#169; <a href="https://locatienet.com">Locatienet</a>, <a href="https://ptvgroup.com">PTV Group</a>, <a href="https://here.com">HERE</a>';
    // declare all characters
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    const sku = generateString(10);
    const options = { sku: sku, subdomains: '0123', minZoom: 4, maxZoom: 23, attribution: new Date().getFullYear() + attribution };
    class LocatienetTileLayer extends L__namespace.TileLayer {
        constructor() {
            super(url, options);
        }
        createTile(coords, done) {
            const url = this.getTileUrl(coords);
            const tile = document.createElement("img");
            tile._map = this._map;
            const headers = {};
            if (options.sku) {
                headers["sku"] = options.sku;
            }
            (async () => {
                try {
                    const response = await fetch(url, { headers });
                    if (!response.ok)
                        throw new Error(`HTTP ${response.status}`);
                    const blob = await response.blob();
                    const blobUrl = URL.createObjectURL(blob);
                    tile.src = blobUrl;
                    // Clean up blob after image loads or errors
                    tile.onload = tile.onerror = () => {
                        URL.revokeObjectURL(blobUrl);
                    };
                    done(undefined, tile);
                }
                catch (e) {
                    // Still call done so Leaflet doesn't hang waiting
                    done(undefined, tile);
                }
            })();
            return tile;
        }
    }
    // Attach globally for UMD/browser usage
    if (typeof window !== "undefined" && window.L) {
        const L = window.L;
        L.LocatienetTileLayer = L.LocatienetTileLayer || {};
        L.locatienetTileLayer = function () {
            return new LocatienetTileLayer();
        };
    }

    exports.LocatienetTileLayer = LocatienetTileLayer;

}));
//# sourceMappingURL=leaflet-tilelayer.js.map
