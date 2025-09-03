/*!
 * Locatienet @locatienet/api-client v1.0.0 (undefined)
 * Copyright 2021-2025 undefined
 * Licensed under undefined (https://github.com/locatienet/blob/main/LICENSE)
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.LocatienetApiClient = {}));
})(this, (function (exports) { 'use strict';

    function getApiKeyFromScript() {
        const scripts = document.getElementsByTagName('script');
        const script = scripts[scripts.length - 1];
        if (script) {
            const params = new URLSearchParams(script.src.split('?')[1]);
            return params.get('apikey') || '';
        }
        return '';
    }
    const apikey = window.LN_API_KEY || getApiKeyFromScript() || '';

    class ApiError extends Error {
        constructor(request, response, message) {
            super(message);
            this.name = 'ApiError';
            this.url = response.url;
            this.status = response.status;
            this.statusText = response.statusText;
            this.body = response.body;
            this.request = request;
        }
    }

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol, Iterator */


    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }

    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    var _CancelablePromise_isResolved, _CancelablePromise_isRejected, _CancelablePromise_isCancelled, _CancelablePromise_cancelHandlers, _CancelablePromise_promise, _CancelablePromise_resolve, _CancelablePromise_reject;
    /* generated using openapi-typescript-codegen -- do not edit */
    /* istanbul ignore file */
    /* tslint:disable */
    /* eslint-disable */
    class CancelError extends Error {
        constructor(message) {
            super(message);
            this.name = 'CancelError';
        }
        get isCancelled() {
            return true;
        }
    }
    class CancelablePromise {
        constructor(executor) {
            _CancelablePromise_isResolved.set(this, void 0);
            _CancelablePromise_isRejected.set(this, void 0);
            _CancelablePromise_isCancelled.set(this, void 0);
            _CancelablePromise_cancelHandlers.set(this, void 0);
            _CancelablePromise_promise.set(this, void 0);
            _CancelablePromise_resolve.set(this, void 0);
            _CancelablePromise_reject.set(this, void 0);
            __classPrivateFieldSet(this, _CancelablePromise_isResolved, false, "f");
            __classPrivateFieldSet(this, _CancelablePromise_isRejected, false, "f");
            __classPrivateFieldSet(this, _CancelablePromise_isCancelled, false, "f");
            __classPrivateFieldSet(this, _CancelablePromise_cancelHandlers, [], "f");
            __classPrivateFieldSet(this, _CancelablePromise_promise, new Promise((resolve, reject) => {
                __classPrivateFieldSet(this, _CancelablePromise_resolve, resolve, "f");
                __classPrivateFieldSet(this, _CancelablePromise_reject, reject, "f");
                const onResolve = (value) => {
                    if (__classPrivateFieldGet(this, _CancelablePromise_isResolved, "f") || __classPrivateFieldGet(this, _CancelablePromise_isRejected, "f") || __classPrivateFieldGet(this, _CancelablePromise_isCancelled, "f")) {
                        return;
                    }
                    __classPrivateFieldSet(this, _CancelablePromise_isResolved, true, "f");
                    if (__classPrivateFieldGet(this, _CancelablePromise_resolve, "f"))
                        __classPrivateFieldGet(this, _CancelablePromise_resolve, "f").call(this, value);
                };
                const onReject = (reason) => {
                    if (__classPrivateFieldGet(this, _CancelablePromise_isResolved, "f") || __classPrivateFieldGet(this, _CancelablePromise_isRejected, "f") || __classPrivateFieldGet(this, _CancelablePromise_isCancelled, "f")) {
                        return;
                    }
                    __classPrivateFieldSet(this, _CancelablePromise_isRejected, true, "f");
                    if (__classPrivateFieldGet(this, _CancelablePromise_reject, "f"))
                        __classPrivateFieldGet(this, _CancelablePromise_reject, "f").call(this, reason);
                };
                const onCancel = (cancelHandler) => {
                    if (__classPrivateFieldGet(this, _CancelablePromise_isResolved, "f") || __classPrivateFieldGet(this, _CancelablePromise_isRejected, "f") || __classPrivateFieldGet(this, _CancelablePromise_isCancelled, "f")) {
                        return;
                    }
                    __classPrivateFieldGet(this, _CancelablePromise_cancelHandlers, "f").push(cancelHandler);
                };
                Object.defineProperty(onCancel, 'isResolved', {
                    get: () => __classPrivateFieldGet(this, _CancelablePromise_isResolved, "f"),
                });
                Object.defineProperty(onCancel, 'isRejected', {
                    get: () => __classPrivateFieldGet(this, _CancelablePromise_isRejected, "f"),
                });
                Object.defineProperty(onCancel, 'isCancelled', {
                    get: () => __classPrivateFieldGet(this, _CancelablePromise_isCancelled, "f"),
                });
                return executor(onResolve, onReject, onCancel);
            }), "f");
        }
        get [(_CancelablePromise_isResolved = new WeakMap(), _CancelablePromise_isRejected = new WeakMap(), _CancelablePromise_isCancelled = new WeakMap(), _CancelablePromise_cancelHandlers = new WeakMap(), _CancelablePromise_promise = new WeakMap(), _CancelablePromise_resolve = new WeakMap(), _CancelablePromise_reject = new WeakMap(), Symbol.toStringTag)]() {
            return "Cancellable Promise";
        }
        then(onFulfilled, onRejected) {
            return __classPrivateFieldGet(this, _CancelablePromise_promise, "f").then(onFulfilled, onRejected);
        }
        catch(onRejected) {
            return __classPrivateFieldGet(this, _CancelablePromise_promise, "f").catch(onRejected);
        }
        finally(onFinally) {
            return __classPrivateFieldGet(this, _CancelablePromise_promise, "f").finally(onFinally);
        }
        cancel() {
            if (__classPrivateFieldGet(this, _CancelablePromise_isResolved, "f") || __classPrivateFieldGet(this, _CancelablePromise_isRejected, "f") || __classPrivateFieldGet(this, _CancelablePromise_isCancelled, "f")) {
                return;
            }
            __classPrivateFieldSet(this, _CancelablePromise_isCancelled, true, "f");
            if (__classPrivateFieldGet(this, _CancelablePromise_cancelHandlers, "f").length) {
                try {
                    for (const cancelHandler of __classPrivateFieldGet(this, _CancelablePromise_cancelHandlers, "f")) {
                        cancelHandler();
                    }
                }
                catch (error) {
                    console.warn('Cancellation threw an error', error);
                    return;
                }
            }
            __classPrivateFieldGet(this, _CancelablePromise_cancelHandlers, "f").length = 0;
            if (__classPrivateFieldGet(this, _CancelablePromise_reject, "f"))
                __classPrivateFieldGet(this, _CancelablePromise_reject, "f").call(this, new CancelError('Request aborted'));
        }
        get isCancelled() {
            return __classPrivateFieldGet(this, _CancelablePromise_isCancelled, "f");
        }
    }

    const OpenAPI = {
        BASE: 'https://services.locatienet.com',
        VERSION: '1.0',
        WITH_CREDENTIALS: false,
        CREDENTIALS: 'include',
        TOKEN: undefined,
        USERNAME: undefined,
        PASSWORD: undefined,
        HEADERS: undefined,
        ENCODE_PATH: undefined,
    };

    /* generated using openapi-typescript-codegen -- do not edit */
    /* istanbul ignore file */
    /* tslint:disable */
    /* eslint-disable */
    const isDefined = (value) => {
        return value !== undefined && value !== null;
    };
    const isString = (value) => {
        return typeof value === 'string';
    };
    const isStringWithValue = (value) => {
        return isString(value) && value !== '';
    };
    const isBlob = (value) => {
        return (typeof value === 'object' &&
            typeof value.type === 'string' &&
            typeof value.stream === 'function' &&
            typeof value.arrayBuffer === 'function' &&
            typeof value.constructor === 'function' &&
            typeof value.constructor.name === 'string' &&
            /^(Blob|File)$/.test(value.constructor.name) &&
            /^(Blob|File)$/.test(value[Symbol.toStringTag]));
    };
    const isFormData = (value) => {
        return value instanceof FormData;
    };
    const base64 = (str) => {
        try {
            return btoa(str);
        }
        catch (err) {
            // @ts-ignore
            return Buffer.from(str).toString('base64');
        }
    };
    const getQueryString = (params) => {
        const qs = [];
        const append = (key, value) => {
            qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
        };
        const process = (key, value) => {
            if (isDefined(value)) {
                if (Array.isArray(value)) {
                    value.forEach(v => {
                        process(key, v);
                    });
                }
                else if (typeof value === 'object') {
                    Object.entries(value).forEach(([k, v]) => {
                        process(`${key}[${k}]`, v);
                    });
                }
                else {
                    append(key, value);
                }
            }
        };
        Object.entries(params).forEach(([key, value]) => {
            process(key, value);
        });
        if (qs.length > 0) {
            return `?${qs.join('&')}`;
        }
        return '';
    };
    const getUrl = (config, options) => {
        const encoder = encodeURI;
        const path = options.url
            .replace('{api-version}', config.VERSION)
            .replace(/{(.*?)}/g, (substring, group) => {
            if (options.path?.hasOwnProperty(group)) {
                return encoder(String(options.path[group]));
            }
            return substring;
        });
        const url = `${config.BASE}${path}`;
        if (options.query) {
            return `${url}${getQueryString(options.query)}`;
        }
        return url;
    };
    const getFormData = (options) => {
        if (options.formData) {
            const formData = new FormData();
            const process = (key, value) => {
                if (isString(value) || isBlob(value)) {
                    formData.append(key, value);
                }
                else {
                    formData.append(key, JSON.stringify(value));
                }
            };
            Object.entries(options.formData)
                .filter(([_, value]) => isDefined(value))
                .forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    value.forEach(v => process(key, v));
                }
                else {
                    process(key, value);
                }
            });
            return formData;
        }
        return undefined;
    };
    const resolve = async (options, resolver) => {
        if (typeof resolver === 'function') {
            return resolver(options);
        }
        return resolver;
    };
    const getHeaders = async (config, options) => {
        const [token, username, password, additionalHeaders] = await Promise.all([
            resolve(options, config.TOKEN),
            resolve(options, config.USERNAME),
            resolve(options, config.PASSWORD),
            resolve(options, config.HEADERS),
        ]);
        const headers = Object.entries({
            Accept: 'application/json',
            ...additionalHeaders,
            ...options.headers,
        })
            .filter(([_, value]) => isDefined(value))
            .reduce((headers, [key, value]) => ({
            ...headers,
            [key]: String(value),
        }), {});
        if (isStringWithValue(token)) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        if (isStringWithValue(username) && isStringWithValue(password)) {
            const credentials = base64(`${username}:${password}`);
            headers['Authorization'] = `Basic ${credentials}`;
        }
        if (options.body !== undefined) {
            if (options.mediaType) {
                headers['Content-Type'] = options.mediaType;
            }
            else if (isBlob(options.body)) {
                headers['Content-Type'] = options.body.type || 'application/octet-stream';
            }
            else if (isString(options.body)) {
                headers['Content-Type'] = 'text/plain';
            }
            else if (!isFormData(options.body)) {
                headers['Content-Type'] = 'application/json';
            }
        }
        return new Headers(headers);
    };
    const getRequestBody = (options) => {
        if (options.body !== undefined) {
            if (options.mediaType?.includes('/json')) {
                return JSON.stringify(options.body);
            }
            else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {
                return options.body;
            }
            else {
                return JSON.stringify(options.body);
            }
        }
        return undefined;
    };
    const sendRequest = async (config, options, url, body, formData, headers, onCancel) => {
        const controller = new AbortController();
        const request = {
            headers,
            body: body ?? formData,
            method: options.method,
            signal: controller.signal,
        };
        onCancel(() => controller.abort());
        return await fetch(url, request);
    };
    const getResponseHeader = (response, responseHeader) => {
        if (responseHeader) {
            const content = response.headers.get(responseHeader);
            if (isString(content)) {
                return content;
            }
        }
        return undefined;
    };
    const getResponseBody = async (response) => {
        if (response.status !== 204) {
            try {
                const contentType = response.headers.get('Content-Type');
                if (contentType) {
                    const jsonTypes = ['application/json', 'application/problem+json'];
                    const isJSON = jsonTypes.some(type => contentType.toLowerCase().startsWith(type));
                    if (isJSON) {
                        return await response.json();
                    }
                    else {
                        return await response.text();
                    }
                }
            }
            catch (error) {
                console.error(error);
            }
        }
        return undefined;
    };
    const catchErrorCodes = (options, result) => {
        const errors = {
            400: 'Bad Request',
            401: 'Unauthorized',
            403: 'Forbidden',
            404: 'Not Found',
            500: 'Internal Server Error',
            502: 'Bad Gateway',
            503: 'Service Unavailable',
            ...options.errors,
        };
        const error = errors[result.status];
        if (error) {
            throw new ApiError(options, result, error);
        }
        if (!result.ok) {
            const errorStatus = result.status ?? 'unknown';
            const errorStatusText = result.statusText ?? 'unknown';
            const errorBody = (() => {
                try {
                    return JSON.stringify(result.body, null, 2);
                }
                catch (e) {
                    return undefined;
                }
            })();
            throw new ApiError(options, result, `Generic Error: status: ${errorStatus}; status text: ${errorStatusText}; body: ${errorBody}`);
        }
    };
    /**
     * Request method
     * @param config The OpenAPI configuration object
     * @param options The request options from the service
     * @returns CancelablePromise<T>
     * @throws ApiError
     */
    const request = (config, options) => {
        return new CancelablePromise(async (resolve, reject, onCancel) => {
            try {
                const url = getUrl(config, options);
                const formData = getFormData(options);
                const body = getRequestBody(options);
                const headers = await getHeaders(config, options);
                if (!onCancel.isCancelled) {
                    const response = await sendRequest(config, options, url, body, formData, headers, onCancel);
                    const responseBody = await getResponseBody(response);
                    const responseHeader = getResponseHeader(response, options.responseHeader);
                    const result = {
                        url,
                        ok: response.ok,
                        status: response.status,
                        statusText: response.statusText,
                        body: responseHeader ?? responseBody,
                    };
                    catchErrorCodes(options, result);
                    resolve(result.body);
                }
            }
            catch (error) {
                reject(error);
            }
        });
    };

    class TimeDistanceService {
        /**
         * Search for locations using a free-form text input.
         * @param requestBody
         * @returns Location OK
         * @throws ApiError
         */
        static postRsV1LocateSearchByText(requestBody) {
            return request(OpenAPI, {
                method: 'POST',
                url: '/rs/v1/Locate/searchByText',
                body: requestBody,
                mediaType: 'application/json',
            });
        }
        /**
         * Search for locations using structured address input.
         * @param requestBody
         * @returns Location OK
         * @throws ApiError
         */
        static postRsV1LocateSearchByAddress(requestBody) {
            return request(OpenAPI, {
                method: 'POST',
                url: '/rs/v1/Locate/searchByAddress',
                body: requestBody,
                mediaType: 'application/json',
            });
        }
        /**
         * Calculates and returns basic route information and polyline.
         * @param requestBody
         * @returns CalculateRouteInfoResponse OK
         * @throws ApiError
         */
        static postRsV1RouteCalculateRouteInfo(requestBody) {
            return request(OpenAPI, {
                method: 'POST',
                url: '/rs/v1/Route/calculateRouteInfo',
                body: requestBody,
                mediaType: 'application/json',
            });
        }
        /**
         * A list of available countries.
         * @returns Country OK
         * @throws ApiError
         */
        static getRsV1CountryList() {
            return request(OpenAPI, {
                method: 'GET',
                url: '/rs/v1/Country/list',
            });
        }
    }

    // Configure OpenAPI defaults
    OpenAPI.BASE = 'https://services.locatienet.com';
    OpenAPI.HEADERS = {
        'X-API-KEY': apikey
    };
    // API wrapper
    const Api = {
        apikey: apikey, // store API key in the wrapper
        countries: async () => {
            return await TimeDistanceService.getRsV1CountryList();
        },
        locateByText: async (query, country, options) => {
            const request = {
                text: query,
                country,
                options: options
            };
            return await TimeDistanceService.postRsV1LocateSearchByText(request).then((response) => {
                return response.map(x => {
                    return { type: "Feature", geometry: { type: "Point", coordinates: [x.coordinate?.x, x.coordinate?.y] }, properties: { description: x.description } };
                });
            });
        }
    };
    // Attach to global for UMD
    if (typeof window !== 'undefined') {
        window.LN = window.LN || {};
        window.LN.api = Api;
    }

    exports.Api = Api;

}));
//# sourceMappingURL=api-client.esm.js.map
