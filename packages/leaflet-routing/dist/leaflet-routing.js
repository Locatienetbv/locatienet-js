/*!
 * Locatienet @locatienet/leaflet-routing v1.0.27 (https://github.com/Locatienetbv/locatienet-js/tree/master/packages/leaflet-routing#readme)
 * Copyright 2021-2025 Remco Zut
 * Licensed under MIT (https://github.com/locatienetbv/locatienet-js/LICENSE)
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('leaflet')) :
	typeof define === 'function' && define.amd ? define(['leaflet'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.L));
})(this, (function (require$$0) { 'use strict';

	var Control_Geocoder = {exports: {}};

	var hasRequiredControl_Geocoder;

	function requireControl_Geocoder () {
		if (hasRequiredControl_Geocoder) return Control_Geocoder.exports;
		hasRequiredControl_Geocoder = 1;
		(function (module) {
			(function (factory) {
				// Packaging/modules magic dance
				var L;
				{
					// Node/CommonJS
					L = require$$0;
					module.exports = factory(L);
				}
			}(function (L) {
				L.Control.Geocoder = L.Control.extend({
					options: {
						showResultIcons: false,
						collapsed: true,
						expand: 'click',
						position: 'topright',
						placeholder: 'Search...',
						errorMessage: 'Nothing found.'
					},

					_callbackId: 0,

					initialize: function (options) {
						L.Util.setOptions(this, options);
						if (!this.options.geocoder) {
							this.options.geocoder = new L.Control.Geocoder.Nominatim();
						}
					},

					onAdd: function (map) {
						var className = 'leaflet-control-geocoder',
						    container = L.DomUtil.create('div', className),
							icon = L.DomUtil.create('div', 'leaflet-control-geocoder-icon', container),
						    form = this._form = L.DomUtil.create('form', className + '-form', container),
						    input;

						this._map = map;
						this._container = container;
						input = this._input = L.DomUtil.create('input');
						input.type = 'text';
						input.placeholder = this.options.placeholder;

						L.DomEvent.addListener(input, 'keydown', this._keydown, this);
						//L.DomEvent.addListener(input, 'onpaste', this._clearResults, this);
						//L.DomEvent.addListener(input, 'oninput', this._clearResults, this);

						this._errorElement = document.createElement('div');
						this._errorElement.className = className + '-form-no-error';
						this._errorElement.innerHTML = this.options.errorMessage;

						this._alts = L.DomUtil.create('ul', className + '-alternatives leaflet-control-geocoder-alternatives-minimized');

						form.appendChild(input);
						form.appendChild(this._errorElement);
						container.appendChild(this._alts);

						L.DomEvent.addListener(form, 'submit', this._geocode, this);

						if (this.options.collapsed) {
							if (this.options.expand === 'click') {
								L.DomEvent.addListener(icon, 'click', function(e) {
									// TODO: touch
									if (e.button === 0 && e.detail === 1) {
										this._toggle();
									}
								}, this);
							} else {
								L.DomEvent.addListener(icon, 'mouseover', this._expand, this);
								L.DomEvent.addListener(icon, 'mouseout', this._collapse, this);
								this._map.on('movestart', this._collapse, this);
							}
						} else {
							this._expand();
						}

						L.DomEvent.disableClickPropagation(container);

						return container;
					},

					_geocodeResult: function (results) {
						L.DomUtil.removeClass(this._container, 'leaflet-control-geocoder-throbber');
						if (results.length === 1) {
							this._geocodeResultSelected(results[0]);
						} else if (results.length > 0) {
							this._alts.innerHTML = '';
							this._results = results;
							L.DomUtil.removeClass(this._alts, 'leaflet-control-geocoder-alternatives-minimized');
							for (var i = 0; i < results.length; i++) {
								this._alts.appendChild(this._createAlt(results[i], i));
							}
						} else {
							L.DomUtil.addClass(this._errorElement, 'leaflet-control-geocoder-error');
						}
					},

					markGeocode: function(result) {
						this._map.fitBounds(result.bbox);

						if (this._geocodeMarker) {
							this._map.removeLayer(this._geocodeMarker);
						}

						this._geocodeMarker = new L.Marker(result.center)
							.bindPopup(result.html || result.name)
							.addTo(this._map)
							.openPopup();

						return this;
					},

					_geocode: function(event) {
						L.DomEvent.preventDefault(event);

						L.DomUtil.addClass(this._container, 'leaflet-control-geocoder-throbber');
						this._clearResults();
						this.options.geocoder.geocode(this._input.value, this._geocodeResult, this);

						return false;
					},

					_geocodeResultSelected: function(result) {
						if (this.options.collapsed) {
							this._collapse();
						} else {
							this._clearResults();
						}
						this.markGeocode(result);
					},

					_toggle: function() {
						if (this._container.className.indexOf('leaflet-control-geocoder-expanded') >= 0) {
							this._collapse();
						} else {
							this._expand();
						}
					},

					_expand: function () {
						L.DomUtil.addClass(this._container, 'leaflet-control-geocoder-expanded');
						this._input.select();
					},

					_collapse: function () {
						this._container.className = this._container.className.replace(' leaflet-control-geocoder-expanded', '');
						L.DomUtil.addClass(this._alts, 'leaflet-control-geocoder-alternatives-minimized');
						L.DomUtil.removeClass(this._errorElement, 'leaflet-control-geocoder-error');
					},

					_clearResults: function () {
						L.DomUtil.addClass(this._alts, 'leaflet-control-geocoder-alternatives-minimized');
						this._selection = null;
						L.DomUtil.removeClass(this._errorElement, 'leaflet-control-geocoder-error');
					},

					_createAlt: function(result, index) {
						var li = document.createElement('li'),
						    a = L.DomUtil.create('a', '', li),
						    icon = this.options.showResultIcons && result.icon ? L.DomUtil.create('img', '', a) : null,
						    text = result.html ? undefined : document.createTextNode(result.name);

						if (icon) {
							icon.src = result.icon;
						}

						a.href = '#';
						a.setAttribute('data-result-index', index);

						if (result.html) {
							a.innerHTML = result.html;
						} else {
							a.appendChild(text);
						}

						L.DomEvent.addListener(li, 'click', function clickHandler(e) {
							L.DomEvent.preventDefault(e);
							this._geocodeResultSelected(result);
						}, this);

						return li;
					},

					_keydown: function(e) {
						var _this = this,
							select = function select(dir) {
								if (_this._selection) {
									L.DomUtil.removeClass(_this._selection.firstChild, 'leaflet-control-geocoder-selected');
									_this._selection = _this._selection[dir > 0 ? 'nextSibling' : 'previousSibling'];
								}
								if (!_this._selection) {
									_this._selection = _this._alts[dir > 0 ? 'firstChild' : 'lastChild'];
								}

								if (_this._selection) {
									L.DomUtil.addClass(_this._selection.firstChild, 'leaflet-control-geocoder-selected');
								}
							};

						switch (e.keyCode) {
						// Escape
						case 27:
							this._collapse();
							break;
						// Up
						case 38:
							select(-1);
							L.DomEvent.preventDefault(e);
							break;
						// Up
						case 40:
							select(1);
							L.DomEvent.preventDefault(e);
							break;
						// Enter
						case 13:
							if (this._selection) {
								var index = parseInt(this._selection.firstChild.getAttribute('data-result-index'), 10);
								this._geocodeResultSelected(this._results[index]);
								this._clearResults();
								L.DomEvent.preventDefault(e);
							}
						}
						return true;
					}
				});

				L.Control.geocoder = function(id, options) {
					return new L.Control.Geocoder(id, options);
				};

				L.Control.Geocoder.callbackId = 0;
				L.Control.Geocoder.jsonp = function(url, params, callback, context, jsonpParam) {
					var callbackId = '_l_geocoder_' + (L.Control.Geocoder.callbackId++);
					params[jsonpParam || 'callback'] = callbackId;
					window[callbackId] = L.Util.bind(callback, context);
					var script = document.createElement('script');
					script.type = 'text/javascript';
					script.src = url + L.Util.getParamString(params);
					script.id = callbackId;
					document.getElementsByTagName('head')[0].appendChild(script);
				};
				L.Control.Geocoder.getJSON = function(url, params, callback) {
					var xmlHttp = new XMLHttpRequest();
					xmlHttp.open( "GET", url + L.Util.getParamString(params), true);
					xmlHttp.send(null);
					xmlHttp.onreadystatechange = function () {
						if (xmlHttp.readyState != 4) return;
						if (xmlHttp.status != 200 && req.status != 304) return;
						callback(JSON.parse(xmlHttp.response));
					};
				};

				L.Control.Geocoder.template = function (str, data, htmlEscape) {
					return str.replace(/\{ *([\w_]+) *\}/g, function (str, key) {
						var value = data[key];
						if (value === undefined) {
							value = '';
						} else if (typeof value === 'function') {
							value = value(data);
						}
						return L.Control.Geocoder.htmlEscape(value);
					});
				};

				// Adapted from handlebars.js
				// https://github.com/wycats/handlebars.js/
				L.Control.Geocoder.htmlEscape = (function() {
					var badChars = /[&<>"'`]/g;
					var possible = /[&<>"'`]/;
					var escape = {
					  '&': '&amp;',
					  '<': '&lt;',
					  '>': '&gt;',
					  '"': '&quot;',
					  '\'': '&#x27;',
					  '`': '&#x60;'
					};

					function escapeChar(chr) {
					  return escape[chr];
					}

					return function(string) {
						if (string == null) {
							return '';
						} else if (!string) {
							return string + '';
						}

						// Force a string conversion as this will be done by the append regardless and
						// the regex test will do this transparently behind the scenes, causing issues if
						// an object's to string has escaped characters in it.
						string = '' + string;

						if (!possible.test(string)) {
							return string;
						}
						return string.replace(badChars, escapeChar);
					};
				})();


				return L.Control.Geocoder;
			})); 
		} (Control_Geocoder));
		return Control_Geocoder.exports;
	}

	requireControl_Geocoder();

	var Control_Geocoder_Locatienet = {exports: {}};

	var hasRequiredControl_Geocoder_Locatienet;

	function requireControl_Geocoder_Locatienet () {
		if (hasRequiredControl_Geocoder_Locatienet) return Control_Geocoder_Locatienet.exports;
		hasRequiredControl_Geocoder_Locatienet = 1;
		(function (module) {
			(function (factory) {
				// Packaging/modules magic dance
				var L;
				{
					// Node/CommonJS
					L = require$$0;
					module.exports = factory(L);
				}
			}(function (L) {

				L.Control.Geocoder.Locatienet = L.Class.extend({
					options: {
						service_url: 'https://services.locatienet.com/rs/v1/Locate/'
					},

					initialize: function() {
						this._apikey = window.LN_API_KEY;
					},

					geocode: function (query, cb, context) {
						const body = {
							text: query,
							options: {
								language: 'nl',
								numresults: 5,
								minimalResultScore: 0 // fetch all possible results
							}
						};


						this._post(this.options.service_url + 'searchByText', body, function(err, data) {
							var results = [],
							loc,
							latLng,
							latLngBounds;
							if (data && data.length) {
								for (var i = 0; i <= data.length - 1; i++) {
									loc = data[i];
									latLng = L.latLng(loc.coordinate.y, loc.coordinate.x);

									if(loc.hasOwnProperty('bbox')) {
											latLngBounds = L.latLngBounds(L.latLng(loc.bbox.slice(0, 2).reverse()), L.latLng(loc.bbox.slice(2, 4).reverse()));
									} else {
											latLngBounds = L.latLngBounds(latLng, latLng);
									}
									results[i] = {
										name: loc.description,
										bbox: latLngBounds,
										center: latLng
									};
								}
							}

							cb.call(context, results);
						});
					},

					reverse: function (location, scale, cb, context) {

						var body = {
							coordinate: { x: location.lng, y: location.lat },
							options: { numresults: 5}
						};

						this._post(this.options.service_url + 'searchByPosition', body, function(err, data) {
							var results = [],
							loc,
							latLng,
							latLngBounds;
							if (data && data.length) {
								for (var i = 0; i <= data.length - 1; i++) {
									loc = data[i];
									latLng = L.latLng(loc.coordinate.y, loc.coordinate.x);
									if(loc.hasOwnProperty('bbox'))
									{
										latLngBounds = L.latLngBounds(L.latLng(loc.bbox.slice(0, 2).reverse()), L.latLng(loc.bbox.slice(2, 4).reverse()));
									}
									else
									{
										latLngBounds = L.latLngBounds(latLng, latLng);
									}
									results[i] = {
										name: loc.description,
										bbox: latLngBounds,
										center: latLng
									};
								}
							}

							cb.call(context, results);
						});
					},

					_post: function (url, data, callback) {
						fetch(url, {
							method: 'POST',
							headers: {
								'Accept': 'application/json',
								'Content-Type': 'application/json',
								'X-API-KEY': this._apikey
							},
							body: JSON.stringify(data)
						})
							.then(res => res.json())
							.then(res => callback(null, res));
					}
				});

				L.Control.Geocoder.locatienet = function(apikey) {
						return new L.Control.Geocoder.Locatienet(apikey);
				};

			})); 
		} (Control_Geocoder_Locatienet));
		return Control_Geocoder_Locatienet.exports;
	}

	requireControl_Geocoder_Locatienet();

	var Routing_Locatienet = {exports: {}};

	var hasRequiredRouting_Locatienet;

	function requireRouting_Locatienet () {
		if (hasRequiredRouting_Locatienet) return Routing_Locatienet.exports;
		hasRequiredRouting_Locatienet = 1;
		(function (module) {
			(function (factory) {
				// Packaging/modules magic dance
				var L;
				{
					// Node/CommonJS
					L = require$$0;
					module.exports = factory(L);
				}
			}(function (L) {

				var L = require$$0;

				L.Routing = L.Routing || {};

				L.Routing.Locatienet = L.Evented.extend({
					options: {
						serviceUrl: 'https://services.locatienet.com/rs/v1/Route/calculateRouteDescription',
						timeout: 30 * 1000,
						urlParameters: {}
					},

					initialize: function(options) {
						this._apikey = window.LN_API_KEY;
						L.Util.setOptions(this, options);
					},

					route: function(waypoints, callback, context, options) {
						var timedOut = false,
							wps = [],
							body,
							timer,
							wp,
							i;

						options = options || {};
						body = this.buildRouteRequest(waypoints, options);

						timer = setTimeout(function() {
											timedOut = true;
											callback.call(context || callback, {
												status: -1,
												message: 'Locatienet request timed out.'
											});
										}, this.options.timeout);

						// Create a copy of the waypoints, since they
						// might otherwise be asynchronously modified while
						// the request is being processed.
						for (i = 0; i < waypoints.length; i++) {
							wp = waypoints[i];
							wps.push({
								latLng: wp.latLng,
								name: wp.name,
								options: wp.options
							});
						}

						this._post(this.options.serviceUrl, body, L.bind(function(err, data) {
							

							clearTimeout(timer);
							if (!timedOut) {
								this.fire("response", {
									//status: fired.status,
									//limit: Number(fired.getResponseHeader("X-RateLimit-Limit")),
									//remaining: Number(fired.getResponseHeader("X-RateLimit-Remaining")),
									//reset: Number(fired.getResponseHeader("X-RateLimit-Reset")),
									//credits: Number(fired.getResponseHeader("X-RateLimit-Credits"))
								});
								if (!err) {
									this._routeDone(data, wps, callback, context);
								} else {
									var finalResponse;
									var responseText = err && err.responseText;
									try {
										finalResponse = JSON.parse(responseText);
									} catch (e) {
										finalResponse = responseText;
									}

									callback.call(context || callback, {
										status: -1,
										message: 'HTTP request failed: ' + err,
										response: finalResponse
									});
								}
							}
						}, this));

						return this;
					},

					_routeDone: function(response, inputWaypoints, callback, context) {
						var alts = [],
						    mappedWaypoints,
						    coordinates,
						    path;

						context = context || callback;
						path = response;
						coordinates = this._decodePolyline(path.polyline);
						mappedWaypoints =
							this._mapWaypointIndices(inputWaypoints, path.descriptions, coordinates);

						alts.push({
							name: '',
							coordinates: coordinates,
							instructions: this._convertInstructions(path.descriptions, coordinates),
							summary: {
								totalDistance: path.distance,
								totalTime: path.travelTime,
								totalAscend: 0,
							},
							inputWaypoints: inputWaypoints,
							actualWaypoints: mappedWaypoints.waypoints,
							waypointIndices: mappedWaypoints.waypointIndices
						});
						

						callback.call(context, null, alts);
					},

					_decodePolyline: function(coords) {
						var latlngs = new Array(coords.length),
							i;
						for (i = 0; i < coords.length; i++) {
							latlngs[i] = new L.LatLng(coords[i].y, coords[i].x);
						}

						return latlngs;
					},

					_toWaypoints: function(inputWaypoints, vias) {
						var wps = [],
						    i;
						for (i = 0; i < vias.length; i++) {
							wps.push({
								latLng: L.latLng(vias[i]),
								name: inputWaypoints[i].name,
								options: inputWaypoints[i].options
							});
						}

						return wps;
					},

					buildRouteRequest: function(waypoints, options) {
						var request = {
							locations: [],
							options: {
								"vehicle": "carfast",
								"optimization": "optimal",
								"language": "nl",
								'includePolyline': true
							}
						};

						for (var i = 0; i < waypoints.length; i++) {
							request.locations.push({ coordinate: { x: waypoints[i].latLng.lng, y: waypoints[i].latLng.lat } });
						}

						return request;

					},

					_convertInstructions: function(instructions, coordinates) {
						var signToType = {
							'TURNHALFLEFT': 'SlightLeft',
							'TURNSHARPLEFT': 'SharpLeft',
							'TURNLEFT': 'Left',
							'CONTINUE': 'Straight',
							'TURNHALFRIGHT': 'SlightRight',
							'TURNRIGHT': 'Right',
							'TURNSHARPRIGHT': 'SharpRight',
							'ARRIVELEFT': 'DestinationReached',
							'ARRIVERIGHT': 'DestinationReached',
							'TAKEROUNDABOUTRIGHT': 'Roundabout',
							'TAKEROUNDABOUTLEFT': 'Roundabout'
							},
							result = [],
							type,
							i,
							instr;

						for (i = 0; instructions && i < instructions.length; i++) {
							instr = instructions[i];
							if (!instr.description) continue;
							if (result.length === 0) {
								type = 'Head';
							} else {
								if (i < instructions.length - 2 && ['ARRIVELEFT', 'ARRIVERIGHT'].includes(instr.maneuverType)) {
									type = 'WaypointReached';
								} else {
									type = signToType[instr.maneuverType];
								}
							}
							result.push({
								type: type,
								modifier: type,
								text: instr.description,
								distance: instr.accDistance,
								time: instr.accTime,
								index: coordinates.findIndex((c) => c.lat == instr.coordinate.y && c.lng == instr.coordinate.x),
								exit: 0,
							});
						}

						return result;
					},

					_mapWaypointIndices: function(waypoints, instructions, coordinates) {
						var wps = [],
							wpIndices = [],
						    i,
						    idx;

						for (i = 0; instructions && i < instructions.length; i++) {
							if (instructions[i].event === 'WAYPOINT') {
								idx = coordinates.findIndex((c) => c.lat == instructions[i].coordinate.y && c.lng == instructions[i].coordinate.x);
								wpIndices.push(idx);
								wps.push({
									latLng: coordinates[idx],
									name: waypoints[wps.length].name
								});
							}
						}


						return {
							waypointIndices: wpIndices,
							waypoints: wps
						};
					},

					_post: function (url, data, callback) {
						fetch(url, {
							method: 'POST',
							headers: {
								'Accept': 'application/json',
								'Content-Type': 'application/json',
								'X-API-KEY': this._apikey
							},
							body: JSON.stringify(data)
						})
							.then(res => res.json())
							.then(res => callback(null, res));
					}
				});

				L.Routing.locatienet = function(apikey, options) {
					return new L.Routing.Locatienet(apikey, options);
				};

				module.exports = L.Routing.Locatienet;
			})); 
		} (Routing_Locatienet));
		return Routing_Locatienet.exports;
	}

	requireRouting_Locatienet();

}));
//# sourceMappingURL=leaflet-routing.js.map
