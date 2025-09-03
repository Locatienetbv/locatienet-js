/*!
 * Locatienet @locatienet/leaflet-tilelayer v1.1.0 (https://github.com/locatienet/leaflet-locatienet-tilelayer#readme)
 * Copyright 2021-2025 Remco Zut
 * Licensed under MIT (https://github.com/locatienet/blob/main/LICENSE)
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
     * Locatienet @locatienet/api-client v1.0.0 (undefined)
     * Copyright 2021-2025 undefined
     * Licensed under undefined (https://github.com/locatienet/blob/main/LICENSE)
     */
    var apiClient_min = apiClient_min$1.exports;

    var hasRequiredApiClient_min;

    function requireApiClient_min () {
    	if (hasRequiredApiClient_min) return apiClient_min$1.exports;
    	hasRequiredApiClient_min = 1;
    	(function (module, exports) {
    		!function(t,e){e(exports);}(apiClient_min,function(t){const e=window.LN_API_KEY||function(){const t=document.getElementsByTagName("script"),e=t[t.length-1];if(e){return new URLSearchParams(e.src.split("?")[1]).get("apikey")||""}return ""}()||"";class o extends Error{constructor(t,e,o){super(o),this.name="ApiError",this.url=e.url,this.status=e.status,this.statusText=e.statusText,this.body=e.body,this.request=t;}}function r(t,e,o,r){if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return "m"===o?r:"a"===o?r.call(t):r?r.value:e.get(t)}function s(t,e,o,r,s){if("function"==typeof e?t!==e||true:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(t,o),o}var n,i,a,c,f,d,h;"function"==typeof SuppressedError&&SuppressedError;class u extends Error{constructor(t){super(t),this.name="CancelError";}get isCancelled(){return  true}}class p{constructor(t){n.set(this,void 0),i.set(this,void 0),a.set(this,void 0),c.set(this,void 0),f.set(this,void 0),d.set(this,void 0),h.set(this,void 0),s(this,n,false),s(this,i,false),s(this,a,false),s(this,c,[]),s(this,f,new Promise((e,o)=>{s(this,d,e,"f"),s(this,h,o,"f");const f=t=>{r(this,n,"f")||r(this,i,"f")||r(this,a,"f")||r(this,c,"f").push(t);};return Object.defineProperty(f,"isResolved",{get:()=>r(this,n,"f")}),Object.defineProperty(f,"isRejected",{get:()=>r(this,i,"f")}),Object.defineProperty(f,"isCancelled",{get:()=>r(this,a,"f")}),t(t=>{r(this,n,"f")||r(this,i,"f")||r(this,a,"f")||(s(this,n,true,"f"),r(this,d,"f")&&r(this,d,"f").call(this,t));},t=>{r(this,n,"f")||r(this,i,"f")||r(this,a,"f")||(s(this,i,true,"f"),r(this,h,"f")&&r(this,h,"f").call(this,t));},f)}));}get[(n=new WeakMap,i=new WeakMap,a=new WeakMap,c=new WeakMap,f=new WeakMap,d=new WeakMap,h=new WeakMap,Symbol.toStringTag)](){return "Cancellable Promise"}then(t,e){return r(this,f,"f").then(t,e)}catch(t){return r(this,f,"f").catch(t)}finally(t){return r(this,f,"f").finally(t)}cancel(){if(!(r(this,n,"f")||r(this,i,"f")||r(this,a,"f"))){if(s(this,a,true),r(this,c,"f").length)try{for(const t of r(this,c,"f"))t();}catch(t){return void console.warn("Cancellation threw an error",t)}r(this,c,"f").length=0,r(this,h,"f")&&r(this,h,"f").call(this,new u("Request aborted"));}}get isCancelled(){return r(this,a,"f")}}const l={BASE:"https://services.locatienet.com",VERSION:"1.0",WITH_CREDENTIALS:false,CREDENTIALS:"include",TOKEN:void 0,USERNAME:void 0,PASSWORD:void 0,HEADERS:void 0,ENCODE_PATH:void 0},y=t=>null!=t,w=t=>"string"==typeof t,b=t=>w(t)&&""!==t,m=t=>"object"==typeof t&&"string"==typeof t.type&&"function"==typeof t.stream&&"function"==typeof t.arrayBuffer&&"function"==typeof t.constructor&&"string"==typeof t.constructor.name&&/^(Blob|File)$/.test(t.constructor.name)&&/^(Blob|File)$/.test(t[Symbol.toStringTag]),E=t=>t instanceof FormData,g=t=>{const e=[],o=(t,r)=>{y(r)&&(Array.isArray(r)?r.forEach(e=>{o(t,e);}):"object"==typeof r?Object.entries(r).forEach(([e,r])=>{o(`${t}[${e}]`,r);}):((t,o)=>{e.push(`${encodeURIComponent(t)}=${encodeURIComponent(String(o))}`);})(t,r));};return Object.entries(t).forEach(([t,e])=>{o(t,e);}),e.length>0?`?${e.join("&")}`:""},T=async(t,e)=>"function"==typeof e?e(t):e,S=async(t,e)=>{const[o,r,s,n]=await Promise.all([T(e,t.TOKEN),T(e,t.USERNAME),T(e,t.PASSWORD),T(e,t.HEADERS)]),i=Object.entries({Accept:"application/json",...n,...e.headers}).filter(([t,e])=>y(e)).reduce((t,[e,o])=>({...t,[e]:String(o)}),{});if(b(o)&&(i.Authorization=`Bearer ${o}`),b(r)&&b(s)){const t=(t=>{try{return btoa(t)}catch(e){return Buffer.from(t).toString("base64")}})(`${r}:${s}`);i.Authorization=`Basic ${t}`;}return void 0!==e.body&&(e.mediaType?i["Content-Type"]=e.mediaType:m(e.body)?i["Content-Type"]=e.body.type||"application/octet-stream":w(e.body)?i["Content-Type"]="text/plain":E(e.body)||(i["Content-Type"]="application/json")),new Headers(i)},v=(t,e)=>new p(async(r,s,n)=>{try{const s=((t,e)=>{const o=encodeURI,r=e.url.replace("{api-version}",t.VERSION).replace(/{(.*?)}/g,(t,r)=>e.path?.hasOwnProperty(r)?o(String(e.path[r])):t),s=`${t.BASE}${r}`;return e.query?`${s}${g(e.query)}`:s})(t,e),i=(t=>{if(t.formData){const e=new FormData,o=(t,o)=>{w(o)||m(o)?e.append(t,o):e.append(t,JSON.stringify(o));};return Object.entries(t.formData).filter(([t,e])=>y(e)).forEach(([t,e])=>{Array.isArray(e)?e.forEach(e=>o(t,e)):o(t,e);}),e}})(e),a=(t=>{if(void 0!==t.body)return t.mediaType?.includes("/json")?JSON.stringify(t.body):w(t.body)||m(t.body)||E(t.body)?t.body:JSON.stringify(t.body)})(e),c=await S(t,e);if(!n.isCancelled){const t=await(async(t,e,o,r,s,n,i)=>{const a=new AbortController,c={headers:n,body:r??s,method:e.method,signal:a.signal};return i(()=>a.abort()),await fetch(o,c)})(0,e,s,a,i,c,n),f=await(async t=>{if(204!==t.status)try{const e=t.headers.get("Content-Type");if(e)return ["application/json","application/problem+json"].some(t=>e.toLowerCase().startsWith(t))?await t.json():await t.text()}catch(t){console.error(t);}})(t),d=((t,e)=>{if(e){const o=t.headers.get(e);if(w(o))return o}})(t,e.responseHeader),h={url:s,ok:t.ok,status:t.status,statusText:t.statusText,body:d??f};((t,e)=>{const r={400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found",500:"Internal Server Error",502:"Bad Gateway",503:"Service Unavailable",...t.errors}[e.status];if(r)throw new o(t,e,r);if(!e.ok){const r=e.status??"unknown",s=e.statusText??"unknown",n=(()=>{try{return JSON.stringify(e.body,null,2)}catch(t){return}})();throw new o(t,e,`Generic Error: status: ${r}; status text: ${s}; body: ${n}`)}})(e,h),r(h.body);}}catch(t){s(t);}});class R{static postRsV1LocateSearchByText(t){return v(l,{method:"POST",url:"/rs/v1/Locate/searchByText",body:t,mediaType:"application/json"})}static postRsV1LocateSearchByAddress(t){return v(l,{method:"POST",url:"/rs/v1/Locate/searchByAddress",body:t,mediaType:"application/json"})}static postRsV1RouteCalculateRouteInfo(t){return v(l,{method:"POST",url:"/rs/v1/Route/calculateRouteInfo",body:t,mediaType:"application/json"})}static getRsV1CountryList(){return v(l,{method:"GET",url:"/rs/v1/Country/list"})}}l.BASE="https://services.locatienet.com",l.HEADERS={"X-API-KEY":e};const A={apikey:e,countries:async()=>await R.getRsV1CountryList(),locateByText:async(t,e,o)=>{const r={text:t,country:e,options:o};return await R.postRsV1LocateSearchByText(r).then(t=>t.map(t=>({type:"Feature",geometry:{type:"Point",coordinates:[t.coordinate?.x,t.coordinate?.y]},properties:{description:t.description}})))}};"undefined"!=typeof window&&(window.LN=window.LN||{},window.LN.api=A),t.Api=A;});
    		
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
        window.L = window.L || {};
        window.L.LocatienetTileLayer = window.L.LocatienetTileLayer || {};
        window.L.locatienetTileLayer = function () {
            return new LocatienetTileLayer();
        };
    }

    exports.LocatienetTileLayer = LocatienetTileLayer;

}));
//# sourceMappingURL=leaflet-tilelayer.js.map
