[**Documentation**](../../../README.md)

***

[Documentation](../../../README.md) / [@locatienet/leaflet-tilelayer](../README.md) / LocatienetTileLayer

# Class: LocatienetTileLayer

Defined in: [packages/leaflet-tilelayer/src/index.ts:28](https://github.com/locatienetbv/Locatienet-js/blob/603c25287647f8b4b5ac02149bb1ec5caac2e6f0/packages/leaflet-tilelayer/src/index.ts#L28)

## Extends

- `TileLayer`

## Constructors

### Constructor

> **new LocatienetTileLayer**(): `LocatienetTileLayer`

Defined in: [packages/leaflet-tilelayer/src/index.ts:30](https://github.com/locatienetbv/Locatienet-js/blob/603c25287647f8b4b5ac02149bb1ec5caac2e6f0/packages/leaflet-tilelayer/src/index.ts#L30)

#### Returns

`LocatienetTileLayer`

#### Overrides

`L.TileLayer.constructor`

## Properties

### \_map

> `protected` **\_map**: `Map`

Defined in: node\_modules/@types/leaflet/index.d.ts:1715

#### Inherited from

`L.TileLayer._map`

***

### \_tiles

> `protected` **\_tiles**: `InternalTiles`

Defined in: node\_modules/@types/leaflet/index.d.ts:1774

#### Inherited from

`L.TileLayer._tiles`

***

### \_tileZoom?

> `protected` `optional` **\_tileZoom**: `number`

Defined in: node\_modules/@types/leaflet/index.d.ts:1775

#### Inherited from

`L.TileLayer._tileZoom`

***

### options

> **options**: `TileLayerOptions`

Defined in: node\_modules/@types/leaflet/index.d.ts:1807

#### Inherited from

`L.TileLayer.options`

## Methods

### \_abortLoading()

> `protected` **\_abortLoading**(): `void`

Defined in: node\_modules/@types/leaflet/index.d.ts:1804

#### Returns

`void`

#### Inherited from

`L.TileLayer._abortLoading`

***

### \_getZoomForUrl()

> `protected` **\_getZoomForUrl**(): `number`

Defined in: node\_modules/@types/leaflet/index.d.ts:1805

#### Returns

`number`

#### Inherited from

`L.TileLayer._getZoomForUrl`

***

### \_tileCoordsToKey()

> `protected` **\_tileCoordsToKey**(`coords`): `string`

Defined in: node\_modules/@types/leaflet/index.d.ts:1771

#### Parameters

##### coords

`Coords`

#### Returns

`string`

#### Inherited from

`L.TileLayer._tileCoordsToKey`

***

### \_tileOnError()

> `protected` **\_tileOnError**(`done`, `tile`, `e`): `void`

Defined in: node\_modules/@types/leaflet/index.d.ts:1803

#### Parameters

##### done

`DoneCallback`

##### tile

`HTMLElement`

##### e

`Error`

#### Returns

`void`

#### Inherited from

`L.TileLayer._tileOnError`

***

### \_tileOnLoad()

> `protected` **\_tileOnLoad**(`done`, `tile`): `void`

Defined in: node\_modules/@types/leaflet/index.d.ts:1802

#### Parameters

##### done

`DoneCallback`

##### tile

`HTMLElement`

#### Returns

`void`

#### Inherited from

`L.TileLayer._tileOnLoad`

***

### \_wrapCoords()

> `protected` **\_wrapCoords**(`parameter`): `Coords`

Defined in: node\_modules/@types/leaflet/index.d.ts:1772

#### Parameters

##### parameter

`Coords`

#### Returns

`Coords`

#### Inherited from

`L.TileLayer._wrapCoords`

***

### addEventListener()

#### Call Signature

> **addEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1386

Alias for on(...)

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"baselayerchange"` | `"overlayadd"` | `"overlayremove"`

###### fn

`LayersControlEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addEventListener`

#### Call Signature

> **addEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1391

Alias for on(...)

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"layeradd"` | `"layerremove"`

###### fn

`LayerEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addEventListener`

#### Call Signature

> **addEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1392

Alias for on(...)

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"add"` | `"error"` | `"remove"` | `"zoom"` | `"move"` | `"loading"` | `"drag"` | `"dragstart"` | `"load"` | `"unload"` | `"update"` | `"zoomlevelschange"` | `"viewreset"` | `"zoomstart"` | `"movestart"` | `"zoomend"` | `"moveend"` | `"autopanstart"` | `"down"` | `"predrag"`

###### fn

`LeafletEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addEventListener`

#### Call Signature

> **addEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1417

Alias for on(...)

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"resize"`

###### fn

`ResizeEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addEventListener`

#### Call Signature

> **addEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1418

Alias for on(...)

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"popupopen"` | `"popupclose"`

###### fn

`PopupEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addEventListener`

#### Call Signature

> **addEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1419

Alias for on(...)

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"tooltipopen"` | `"tooltipclose"`

###### fn

`TooltipEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addEventListener`

#### Call Signature

> **addEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1420

Alias for on(...)

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"locationerror"`

###### fn

`ErrorEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addEventListener`

#### Call Signature

> **addEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1421

Alias for on(...)

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"locationfound"`

###### fn

`LocationEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addEventListener`

#### Call Signature

> **addEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1422

Alias for on(...)

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"click"` | `"contextmenu"` | `"dblclick"` | `"mousedown"` | `"mousemove"` | `"mouseout"` | `"mouseover"` | `"mouseup"` | `"preclick"`

###### fn

`LeafletMouseEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addEventListener`

#### Call Signature

> **addEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1436

Alias for on(...)

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"keydown"` | `"keypress"` | `"keyup"`

###### fn

`LeafletKeyboardEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addEventListener`

#### Call Signature

> **addEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1437

Alias for on(...)

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"zoomanim"`

###### fn

`ZoomAnimEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addEventListener`

#### Call Signature

> **addEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1438

Alias for on(...)

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"dragend"`

###### fn

`DragEndEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addEventListener`

#### Call Signature

> **addEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1439

Alias for on(...)

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"tileunload"` | `"tileloadstart"` | `"tileload"` | `"tileabort"`

###### fn

`TileEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addEventListener`

#### Call Signature

> **addEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1444

Alias for on(...)

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"tileerror"`

###### fn

`TileErrorEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addEventListener`

#### Call Signature

> **addEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1445

Alias for on(...)

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`string`

###### fn

`LeafletEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addEventListener`

#### Call Signature

> **addEventListener**(`eventMap`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1452

Alias for on(...)

Adds a set of type/listener pairs, e.g. {click: onClick, mousemove: onMouseMove}

##### Parameters

###### eventMap

`LeafletEventHandlerFnMap`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addEventListener`

***

### addEventParent()

> **addEventParent**(`obj`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1370

Adds an event parent - an Evented that will receive propagated events

#### Parameters

##### obj

`Evented`

#### Returns

`this`

#### Inherited from

`L.TileLayer.addEventParent`

***

### addInteractiveTarget()

> **addInteractiveTarget**(`targetEl`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1685

#### Parameters

##### targetEl

`HTMLElement`

#### Returns

`this`

#### Inherited from

`L.TileLayer.addInteractiveTarget`

***

### addOneTimeEventListener()

#### Call Signature

> **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1550

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"baselayerchange"` | `"overlayadd"` | `"overlayremove"`

###### fn

`LayersControlEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addOneTimeEventListener`

#### Call Signature

> **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1555

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"layeradd"` | `"layerremove"`

###### fn

`LayerEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addOneTimeEventListener`

#### Call Signature

> **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1556

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"add"` | `"error"` | `"remove"` | `"zoom"` | `"move"` | `"loading"` | `"drag"` | `"dragstart"` | `"load"` | `"unload"` | `"update"` | `"zoomlevelschange"` | `"viewreset"` | `"zoomstart"` | `"movestart"` | `"zoomend"` | `"moveend"` | `"autopanstart"` | `"down"` | `"predrag"`

###### fn

`LeafletEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addOneTimeEventListener`

#### Call Signature

> **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1581

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"resize"`

###### fn

`ResizeEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addOneTimeEventListener`

#### Call Signature

> **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1582

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"popupopen"` | `"popupclose"`

###### fn

`PopupEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addOneTimeEventListener`

#### Call Signature

> **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1583

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"tooltipopen"` | `"tooltipclose"`

###### fn

`TooltipEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addOneTimeEventListener`

#### Call Signature

> **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1584

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"locationerror"`

###### fn

`ErrorEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addOneTimeEventListener`

#### Call Signature

> **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1585

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"locationfound"`

###### fn

`LocationEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addOneTimeEventListener`

#### Call Signature

> **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1586

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"click"` | `"contextmenu"` | `"dblclick"` | `"mousedown"` | `"mousemove"` | `"mouseout"` | `"mouseover"` | `"mouseup"` | `"preclick"`

###### fn

`LeafletMouseEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addOneTimeEventListener`

#### Call Signature

> **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1600

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"keydown"` | `"keypress"` | `"keyup"`

###### fn

`LeafletKeyboardEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addOneTimeEventListener`

#### Call Signature

> **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1605

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"zoomanim"`

###### fn

`ZoomAnimEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addOneTimeEventListener`

#### Call Signature

> **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1606

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"dragend"`

###### fn

`DragEndEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addOneTimeEventListener`

#### Call Signature

> **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1607

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"tileunload"` | `"tileloadstart"` | `"tileload"` | `"tileabort"`

###### fn

`TileEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addOneTimeEventListener`

#### Call Signature

> **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1612

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"tileerror"`

###### fn

`TileErrorEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addOneTimeEventListener`

#### Call Signature

> **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1613

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`string`

###### fn

`LeafletEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addOneTimeEventListener`

#### Call Signature

> **addOneTimeEventListener**(`eventMap`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1620

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### eventMap

`LeafletEventHandlerFnMap`

##### Returns

`this`

##### Inherited from

`L.TileLayer.addOneTimeEventListener`

***

### addTo()

> **addTo**(`map`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1680

#### Parameters

##### map

`Map` | `LayerGroup`\<`any`\>

#### Returns

`this`

#### Inherited from

`L.TileLayer.addTo`

***

### beforeAdd()?

> `optional` **beforeAdd**(`map`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1713

#### Parameters

##### map

`Map`

#### Returns

`this`

#### Inherited from

`L.TileLayer.beforeAdd`

***

### bindPopup()

> **bindPopup**(`content`, `options?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1689

#### Parameters

##### content

`Content` | `Popup` | (`layer`) => `Content`

##### options?

`PopupOptions`

#### Returns

`this`

#### Inherited from

`L.TileLayer.bindPopup`

***

### bindTooltip()

> **bindTooltip**(`content`, `options?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1699

#### Parameters

##### content

`Content` | `Tooltip` | (`layer`) => `Content`

##### options?

`TooltipOptions`

#### Returns

`this`

#### Inherited from

`L.TileLayer.bindTooltip`

***

### bringToBack()

> **bringToBack**(): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1762

#### Returns

`this`

#### Inherited from

`L.TileLayer.bringToBack`

***

### bringToFront()

> **bringToFront**(): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1761

#### Returns

`this`

#### Inherited from

`L.TileLayer.bringToFront`

***

### clearAllEventListeners()

> **clearAllEventListeners**(): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1542

Alias for off()

Removes all listeners to all events on the object.

#### Returns

`this`

#### Inherited from

`L.TileLayer.clearAllEventListeners`

***

### closePopup()

> **closePopup**(): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1692

#### Returns

`this`

#### Inherited from

`L.TileLayer.closePopup`

***

### closeTooltip()

> **closeTooltip**(): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1702

#### Returns

`this`

#### Inherited from

`L.TileLayer.closeTooltip`

***

### createTile()

> **createTile**(`coords`, `done`): `HTMLImageElement`

Defined in: [packages/leaflet-tilelayer/src/index.ts:34](https://github.com/locatienetbv/Locatienet-js/blob/603c25287647f8b4b5ac02149bb1ec5caac2e6f0/packages/leaflet-tilelayer/src/index.ts#L34)

#### Parameters

##### coords

`Coords`

##### done

`DoneCallback`

#### Returns

`HTMLImageElement`

#### Overrides

`L.TileLayer.createTile`

***

### fire()

> **fire**(`type`, `data?`, `propagate?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1164

Fires an event of the specified type. You can optionally provide a data
object — the first argument of the listener function will contain its properties.
The event might can optionally be propagated to event parents.

#### Parameters

##### type

`string`

##### data?

`any`

##### propagate?

`boolean`

#### Returns

`this`

#### Inherited from

`L.TileLayer.fire`

***

### fireEvent()

> **fireEvent**(`type`, `data?`, `propagate?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1630

Alias for fire(...)

Fires an event of the specified type. You can optionally provide a data
object — the first argument of the listener function will contain its properties.
The event might can optionally be propagated to event parents.

#### Parameters

##### type

`string`

##### data?

`any`

##### propagate?

`boolean`

#### Returns

`this`

#### Inherited from

`L.TileLayer.fireEvent`

***

### getAttribution()?

> `optional` **getAttribution**(): `null` \| `string`

Defined in: node\_modules/@types/leaflet/index.d.ts:1712

#### Returns

`null` \| `string`

#### Inherited from

`L.TileLayer.getAttribution`

***

### getContainer()

> **getContainer**(): `null` \| `HTMLElement`

Defined in: node\_modules/@types/leaflet/index.d.ts:1763

#### Returns

`null` \| `HTMLElement`

#### Inherited from

`L.TileLayer.getContainer`

***

### getEvents()?

> `optional` **getEvents**(): `object`

Defined in: node\_modules/@types/leaflet/index.d.ts:1711

#### Returns

`object`

#### Inherited from

`L.TileLayer.getEvents`

***

### getPane()

> **getPane**(`name?`): `undefined` \| `HTMLElement`

Defined in: node\_modules/@types/leaflet/index.d.ts:1683

#### Parameters

##### name?

`string`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

`L.TileLayer.getPane`

***

### getPopup()

> **getPopup**(): `undefined` \| `Popup`

Defined in: node\_modules/@types/leaflet/index.d.ts:1696

#### Returns

`undefined` \| `Popup`

#### Inherited from

`L.TileLayer.getPopup`

***

### getTileSize()

> **getTileSize**(): `Point`

Defined in: node\_modules/@types/leaflet/index.d.ts:1768

#### Returns

`Point`

#### Inherited from

`L.TileLayer.getTileSize`

***

### getTileUrl()

> **getTileUrl**(`coords`): `string`

Defined in: node\_modules/@types/leaflet/index.d.ts:1800

#### Parameters

##### coords

`Coords`

#### Returns

`string`

#### Inherited from

`L.TileLayer.getTileUrl`

***

### getTooltip()

> **getTooltip**(): `undefined` \| `Tooltip`

Defined in: node\_modules/@types/leaflet/index.d.ts:1706

#### Returns

`undefined` \| `Tooltip`

#### Inherited from

`L.TileLayer.getTooltip`

***

### hasEventListeners()

> **hasEventListeners**(`type`): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1637

Alias for listens(...)

Returns true if a particular event type has any listeners attached to it.

#### Parameters

##### type

`string`

#### Returns

`boolean`

#### Inherited from

`L.TileLayer.hasEventListeners`

***

### isLoading()

> **isLoading**(): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1766

#### Returns

`boolean`

#### Inherited from

`L.TileLayer.isLoading`

***

### isPopupOpen()

> **isPopupOpen**(): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1694

#### Returns

`boolean`

#### Inherited from

`L.TileLayer.isPopupOpen`

***

### isTooltipOpen()

> **isTooltipOpen**(): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1704

#### Returns

`boolean`

#### Inherited from

`L.TileLayer.isTooltipOpen`

***

### listens()

#### Call Signature

> **listens**(`type`, `propagate?`): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1170

Returns true if a particular event type has any listeners attached to it.

##### Parameters

###### type

`"add"` | `"error"` | `"remove"` | `"resize"` | `"zoom"` | `"move"` | `"loading"` | `"click"` | `"contextmenu"` | `"dblclick"` | `"drag"` | `"dragend"` | `"dragstart"` | `"keydown"` | `"keypress"` | `"keyup"` | `"load"` | `"mousedown"` | `"mousemove"` | `"mouseout"` | `"mouseover"` | `"mouseup"` | `"unload"` | `"update"` | `"baselayerchange"` | `"overlayadd"` | `"overlayremove"` | `"layeradd"` | `"layerremove"` | `"zoomlevelschange"` | `"viewreset"` | `"zoomstart"` | `"movestart"` | `"zoomend"` | `"moveend"` | `"autopanstart"` | `"down"` | `"predrag"` | `"popupopen"` | `"tooltipopen"` | `"tooltipclose"` | `"locationerror"` | `"locationfound"` | `"preclick"` | `"zoomanim"` | `"tileunload"` | `"tileloadstart"` | `"tileload"` | `"tileabort"` | `"tileerror"`

###### propagate?

`boolean`

##### Returns

`boolean`

##### Inherited from

`L.TileLayer.listens`

#### Call Signature

> **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1225

Returns true if a particular event type has any listeners attached to it.

##### Parameters

###### type

`"baselayerchange"` | `"overlayadd"` | `"overlayremove"`

###### fn

`LayersControlEventHandlerFn`

###### context?

`any`

###### propagate?

`boolean`

##### Returns

`boolean`

##### Inherited from

`L.TileLayer.listens`

#### Call Signature

> **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1231

Returns true if a particular event type has any listeners attached to it.

##### Parameters

###### type

`"layeradd"` | `"layerremove"`

###### fn

`LayerEventHandlerFn`

###### context?

`any`

###### propagate?

`boolean`

##### Returns

`boolean`

##### Inherited from

`L.TileLayer.listens`

#### Call Signature

> **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1232

Returns true if a particular event type has any listeners attached to it.

##### Parameters

###### type

`"add"` | `"error"` | `"remove"` | `"zoom"` | `"move"` | `"loading"` | `"drag"` | `"dragstart"` | `"load"` | `"unload"` | `"update"` | `"zoomlevelschange"` | `"viewreset"` | `"zoomstart"` | `"movestart"` | `"zoomend"` | `"moveend"` | `"autopanstart"` | `"down"` | `"predrag"`

###### fn

`LeafletEventHandlerFn`

###### context?

`any`

###### propagate?

`boolean`

##### Returns

`boolean`

##### Inherited from

`L.TileLayer.listens`

#### Call Signature

> **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1258

Returns true if a particular event type has any listeners attached to it.

##### Parameters

###### type

`"resize"`

###### fn

`ResizeEventHandlerFn`

###### context?

`any`

###### propagate?

`boolean`

##### Returns

`boolean`

##### Inherited from

`L.TileLayer.listens`

#### Call Signature

> **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1259

Returns true if a particular event type has any listeners attached to it.

##### Parameters

###### type

`"popupopen"` | `"popupclose"`

###### fn

`PopupEventHandlerFn`

###### context?

`any`

###### propagate?

`boolean`

##### Returns

`boolean`

##### Inherited from

`L.TileLayer.listens`

#### Call Signature

> **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1260

Returns true if a particular event type has any listeners attached to it.

##### Parameters

###### type

`"tooltipopen"` | `"tooltipclose"`

###### fn

`TooltipEventHandlerFn`

###### context?

`any`

###### propagate?

`boolean`

##### Returns

`boolean`

##### Inherited from

`L.TileLayer.listens`

#### Call Signature

> **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1266

Returns true if a particular event type has any listeners attached to it.

##### Parameters

###### type

`"locationerror"`

###### fn

`ErrorEventHandlerFn`

###### context?

`any`

###### propagate?

`boolean`

##### Returns

`boolean`

##### Inherited from

`L.TileLayer.listens`

#### Call Signature

> **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1267

Returns true if a particular event type has any listeners attached to it.

##### Parameters

###### type

`"locationfound"`

###### fn

`LocationEventHandlerFn`

###### context?

`any`

###### propagate?

`boolean`

##### Returns

`boolean`

##### Inherited from

`L.TileLayer.listens`

#### Call Signature

> **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1268

Returns true if a particular event type has any listeners attached to it.

##### Parameters

###### type

`"click"` | `"contextmenu"` | `"dblclick"` | `"mousedown"` | `"mousemove"` | `"mouseout"` | `"mouseover"` | `"mouseup"` | `"preclick"`

###### fn

`LeafletMouseEventHandlerFn`

###### context?

`any`

###### propagate?

`boolean`

##### Returns

`boolean`

##### Inherited from

`L.TileLayer.listens`

#### Call Signature

> **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1283

Returns true if a particular event type has any listeners attached to it.

##### Parameters

###### type

`"keydown"` | `"keypress"` | `"keyup"`

###### fn

`LeafletKeyboardEventHandlerFn`

###### context?

`any`

###### propagate?

`boolean`

##### Returns

`boolean`

##### Inherited from

`L.TileLayer.listens`

#### Call Signature

> **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1289

Returns true if a particular event type has any listeners attached to it.

##### Parameters

###### type

`"zoomanim"`

###### fn

`ZoomAnimEventHandlerFn`

###### context?

`any`

###### propagate?

`boolean`

##### Returns

`boolean`

##### Inherited from

`L.TileLayer.listens`

#### Call Signature

> **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1290

Returns true if a particular event type has any listeners attached to it.

##### Parameters

###### type

`"dragend"`

###### fn

`DragEndEventHandlerFn`

###### context?

`any`

###### propagate?

`boolean`

##### Returns

`boolean`

##### Inherited from

`L.TileLayer.listens`

#### Call Signature

> **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1291

Returns true if a particular event type has any listeners attached to it.

##### Parameters

###### type

`"tileunload"` | `"tileloadstart"` | `"tileload"` | `"tileabort"`

###### fn

`TileEventHandlerFn`

###### context?

`any`

###### propagate?

`boolean`

##### Returns

`boolean`

##### Inherited from

`L.TileLayer.listens`

#### Call Signature

> **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1297

Returns true if a particular event type has any listeners attached to it.

##### Parameters

###### type

`"tileerror"`

###### fn

`TileEventHandlerFn`

###### context?

`any`

###### propagate?

`boolean`

##### Returns

`boolean`

##### Inherited from

`L.TileLayer.listens`

#### Call Signature

> **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

Defined in: node\_modules/@types/leaflet/index.d.ts:1298

Returns true if a particular event type has any listeners attached to it.

##### Parameters

###### type

`string`

###### fn

`LeafletEventHandlerFn`

###### context?

`any`

###### propagate?

`boolean`

##### Returns

`boolean`

##### Inherited from

`L.TileLayer.listens`

***

### off()

#### Call Signature

> **off**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1090

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"baselayerchange"` | `"overlayadd"` | `"overlayremove"`

###### fn?

`LayersControlEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.off`

#### Call Signature

> **off**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1095

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"layeradd"` | `"layerremove"`

###### fn?

`LayerEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.off`

#### Call Signature

> **off**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1096

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"add"` | `"error"` | `"remove"` | `"zoom"` | `"move"` | `"loading"` | `"drag"` | `"dragstart"` | `"load"` | `"unload"` | `"update"` | `"zoomlevelschange"` | `"viewreset"` | `"zoomstart"` | `"movestart"` | `"zoomend"` | `"moveend"` | `"autopanstart"` | `"down"` | `"predrag"`

###### fn?

`LeafletEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.off`

#### Call Signature

> **off**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1121

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"resize"`

###### fn?

`ResizeEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.off`

#### Call Signature

> **off**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1122

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"popupopen"` | `"popupclose"`

###### fn?

`PopupEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.off`

#### Call Signature

> **off**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1123

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"tooltipopen"` | `"tooltipclose"`

###### fn?

`TooltipEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.off`

#### Call Signature

> **off**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1124

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"locationerror"`

###### fn?

`ErrorEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.off`

#### Call Signature

> **off**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1125

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"locationfound"`

###### fn?

`LocationEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.off`

#### Call Signature

> **off**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1126

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"click"` | `"contextmenu"` | `"dblclick"` | `"mousedown"` | `"mousemove"` | `"mouseout"` | `"mouseover"` | `"mouseup"` | `"preclick"`

###### fn?

`LeafletMouseEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.off`

#### Call Signature

> **off**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1140

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"keydown"` | `"keypress"` | `"keyup"`

###### fn?

`LeafletKeyboardEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.off`

#### Call Signature

> **off**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1141

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"zoomanim"`

###### fn?

`ZoomAnimEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.off`

#### Call Signature

> **off**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1142

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"dragend"`

###### fn?

`DragEndEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.off`

#### Call Signature

> **off**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1143

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"tileunload"` | `"tileloadstart"` | `"tileload"` | `"tileabort"`

###### fn?

`TileEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.off`

#### Call Signature

> **off**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1144

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"tileerror"`

###### fn?

`TileErrorEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.off`

#### Call Signature

> **off**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1145

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`string`

###### fn?

`LeafletEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.off`

#### Call Signature

> **off**(`eventMap`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1151

Removes a set of type/listener pairs.

##### Parameters

###### eventMap

`LeafletEventHandlerFnMap`

##### Returns

`this`

##### Inherited from

`L.TileLayer.off`

#### Call Signature

> **off**(): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1156

Removes all listeners to all events on the object.

##### Returns

`this`

##### Inherited from

`L.TileLayer.off`

***

### on()

#### Call Signature

> **on**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1024

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"baselayerchange"` | `"overlayadd"` | `"overlayremove"`

###### fn

`LayersControlEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.on`

#### Call Signature

> **on**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1025

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"layeradd"` | `"layerremove"`

###### fn

`LayerEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.on`

#### Call Signature

> **on**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1026

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"add"` | `"error"` | `"remove"` | `"zoom"` | `"move"` | `"loading"` | `"drag"` | `"dragstart"` | `"load"` | `"unload"` | `"update"` | `"zoomlevelschange"` | `"viewreset"` | `"zoomstart"` | `"movestart"` | `"zoomend"` | `"moveend"` | `"autopanstart"` | `"down"` | `"predrag"`

###### fn

`LeafletEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.on`

#### Call Signature

> **on**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1051

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"resize"`

###### fn

`ResizeEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.on`

#### Call Signature

> **on**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1052

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"popupopen"` | `"popupclose"`

###### fn

`PopupEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.on`

#### Call Signature

> **on**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1053

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"tooltipopen"` | `"tooltipclose"`

###### fn

`TooltipEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.on`

#### Call Signature

> **on**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1054

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"locationerror"`

###### fn

`ErrorEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.on`

#### Call Signature

> **on**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1055

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"locationfound"`

###### fn

`LocationEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.on`

#### Call Signature

> **on**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1056

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"click"` | `"contextmenu"` | `"dblclick"` | `"mousedown"` | `"mousemove"` | `"mouseout"` | `"mouseover"` | `"mouseup"` | `"preclick"`

###### fn

`LeafletMouseEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.on`

#### Call Signature

> **on**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1070

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"keydown"` | `"keypress"` | `"keyup"`

###### fn

`LeafletKeyboardEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.on`

#### Call Signature

> **on**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1071

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"zoomanim"`

###### fn

`ZoomAnimEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.on`

#### Call Signature

> **on**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1072

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"dragend"`

###### fn

`DragEndEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.on`

#### Call Signature

> **on**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1073

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"tileunload"` | `"tileloadstart"` | `"tileload"` | `"tileabort"`

###### fn

`TileEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.on`

#### Call Signature

> **on**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1074

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`"tileerror"`

###### fn

`TileErrorEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.on`

#### Call Signature

> **on**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1075

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

###### type

`string`

###### fn

`LeafletEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.on`

#### Call Signature

> **on**(`eventMap`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1080

Adds a set of type/listener pairs, e.g. {click: onClick, mousemove: onMouseMove}

##### Parameters

###### eventMap

`LeafletEventHandlerFnMap`

##### Returns

`this`

##### Inherited from

`L.TileLayer.on`

***

### onAdd()

> **onAdd**(`map`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1709

#### Parameters

##### map

`Map`

#### Returns

`this`

#### Inherited from

`L.TileLayer.onAdd`

***

### once()

#### Call Signature

> **once**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1304

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"baselayerchange"` | `"overlayadd"` | `"overlayremove"`

###### fn

`LayersControlEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.once`

#### Call Signature

> **once**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1309

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"layeradd"` | `"layerremove"`

###### fn

`LayerEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.once`

#### Call Signature

> **once**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1310

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"add"` | `"error"` | `"remove"` | `"zoom"` | `"move"` | `"loading"` | `"drag"` | `"dragstart"` | `"load"` | `"unload"` | `"update"` | `"zoomlevelschange"` | `"viewreset"` | `"zoomstart"` | `"movestart"` | `"zoomend"` | `"moveend"` | `"autopanstart"` | `"down"` | `"predrag"`

###### fn

`LeafletEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.once`

#### Call Signature

> **once**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1335

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"resize"`

###### fn

`ResizeEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.once`

#### Call Signature

> **once**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1336

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"popupopen"` | `"popupclose"`

###### fn

`PopupEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.once`

#### Call Signature

> **once**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1337

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"tooltipopen"` | `"tooltipclose"`

###### fn

`TooltipEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.once`

#### Call Signature

> **once**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1338

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"locationerror"`

###### fn

`ErrorEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.once`

#### Call Signature

> **once**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1339

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"locationfound"`

###### fn

`LocationEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.once`

#### Call Signature

> **once**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1340

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"click"` | `"contextmenu"` | `"dblclick"` | `"mousedown"` | `"mousemove"` | `"mouseout"` | `"mouseover"` | `"mouseup"` | `"preclick"`

###### fn

`LeafletMouseEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.once`

#### Call Signature

> **once**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1354

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"keydown"` | `"keypress"` | `"keyup"`

###### fn

`LeafletKeyboardEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.once`

#### Call Signature

> **once**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1355

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"zoomanim"`

###### fn

`ZoomAnimEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.once`

#### Call Signature

> **once**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1356

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"dragend"`

###### fn

`DragEndEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.once`

#### Call Signature

> **once**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1357

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"tileunload"` | `"tileloadstart"` | `"tileload"` | `"tileabort"`

###### fn

`TileEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.once`

#### Call Signature

> **once**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1358

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`"tileerror"`

###### fn

`TileEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.once`

#### Call Signature

> **once**(`type`, `fn`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1359

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### type

`string`

###### fn

`LeafletEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.once`

#### Call Signature

> **once**(`eventMap`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1364

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

###### eventMap

`LeafletEventHandlerFnMap`

##### Returns

`this`

##### Inherited from

`L.TileLayer.once`

***

### onRemove()

> **onRemove**(`map`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1710

#### Parameters

##### map

`Map`

#### Returns

`this`

#### Inherited from

`L.TileLayer.onRemove`

***

### openPopup()

> **openPopup**(`latlng?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1691

#### Parameters

##### latlng?

`LatLngExpression`

#### Returns

`this`

#### Inherited from

`L.TileLayer.openPopup`

***

### openTooltip()

> **openTooltip**(`latlng?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1701

#### Parameters

##### latlng?

`LatLngExpression`

#### Returns

`this`

#### Inherited from

`L.TileLayer.openTooltip`

***

### redraw()

> **redraw**(): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1767

#### Returns

`this`

#### Inherited from

`L.TileLayer.redraw`

***

### remove()

> **remove**(): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1681

#### Returns

`this`

#### Inherited from

`L.TileLayer.remove`

***

### removeEventListener()

#### Call Signature

> **removeEventListener**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1464

Alias for off(...)

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"baselayerchange"` | `"overlayadd"` | `"overlayremove"`

###### fn?

`LayersControlEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1469

Alias for off(...)

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"layeradd"` | `"layerremove"`

###### fn?

`LayerEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1470

Alias for off(...)

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"add"` | `"error"` | `"remove"` | `"zoom"` | `"move"` | `"loading"` | `"drag"` | `"dragstart"` | `"load"` | `"unload"` | `"update"` | `"zoomlevelschange"` | `"viewreset"` | `"zoomstart"` | `"movestart"` | `"zoomend"` | `"moveend"` | `"autopanstart"` | `"down"` | `"predrag"`

###### fn?

`LeafletEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1495

Alias for off(...)

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"resize"`

###### fn?

`ResizeEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1496

Alias for off(...)

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"popupopen"` | `"popupclose"`

###### fn?

`PopupEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1497

Alias for off(...)

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"tooltipopen"` | `"tooltipclose"`

###### fn?

`TooltipEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1498

Alias for off(...)

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"locationerror"`

###### fn?

`ErrorEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1499

Alias for off(...)

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"locationfound"`

###### fn?

`LocationEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1500

Alias for off(...)

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"click"` | `"contextmenu"` | `"dblclick"` | `"mousedown"` | `"mousemove"` | `"mouseout"` | `"mouseover"` | `"mouseup"` | `"preclick"`

###### fn?

`LeafletMouseEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1514

Alias for off(...)

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"keydown"` | `"keypress"` | `"keyup"`

###### fn?

`LeafletKeyboardEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1519

Alias for off(...)

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"zoomanim"`

###### fn?

`ZoomAnimEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1520

Alias for off(...)

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"dragend"`

###### fn?

`DragEndEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1521

Alias for off(...)

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"tileunload"` | `"tileloadstart"` | `"tileload"` | `"tileabort"`

###### fn?

`TileEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1526

Alias for off(...)

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`"tileerror"`

###### fn?

`TileErrorEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `fn?`, `context?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1527

Alias for off(...)

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

###### type

`string`

###### fn?

`LeafletEventHandlerFn`

###### context?

`any`

##### Returns

`this`

##### Inherited from

`L.TileLayer.removeEventListener`

#### Call Signature

> **removeEventListener**(`eventMap`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1534

Alias for off(...)

Removes a set of type/listener pairs.

##### Parameters

###### eventMap

`LeafletEventHandlerFnMap`

##### Returns

`this`

##### Inherited from

`L.TileLayer.removeEventListener`

***

### removeEventParent()

> **removeEventParent**(`obj`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1375

Removes an event parent, so it will stop receiving propagated events

#### Parameters

##### obj

`Evented`

#### Returns

`this`

#### Inherited from

`L.TileLayer.removeEventParent`

***

### removeFrom()

> **removeFrom**(`map`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1682

#### Parameters

##### map

`Map`

#### Returns

`this`

#### Inherited from

`L.TileLayer.removeFrom`

***

### removeInteractiveTarget()

> **removeInteractiveTarget**(`targetEl`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1686

#### Parameters

##### targetEl

`HTMLElement`

#### Returns

`this`

#### Inherited from

`L.TileLayer.removeInteractiveTarget`

***

### setOpacity()

> **setOpacity**(`opacity`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1764

#### Parameters

##### opacity

`number`

#### Returns

`this`

#### Inherited from

`L.TileLayer.setOpacity`

***

### setPopupContent()

> **setPopupContent**(`content`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1695

#### Parameters

##### content

`Content` | `Popup`

#### Returns

`this`

#### Inherited from

`L.TileLayer.setPopupContent`

***

### setTooltipContent()

> **setTooltipContent**(`content`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1705

#### Parameters

##### content

`Content` | `Tooltip`

#### Returns

`this`

#### Inherited from

`L.TileLayer.setTooltipContent`

***

### setUrl()

> **setUrl**(`url`, `noRedraw?`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1799

#### Parameters

##### url

`string`

##### noRedraw?

`boolean`

#### Returns

`this`

#### Inherited from

`L.TileLayer.setUrl`

***

### setZIndex()

> **setZIndex**(`zIndex`): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1765

#### Parameters

##### zIndex

`number`

#### Returns

`this`

#### Inherited from

`L.TileLayer.setZIndex`

***

### togglePopup()

> **togglePopup**(): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1693

#### Returns

`this`

#### Inherited from

`L.TileLayer.togglePopup`

***

### toggleTooltip()

> **toggleTooltip**(): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1703

#### Returns

`this`

#### Inherited from

`L.TileLayer.toggleTooltip`

***

### unbindPopup()

> **unbindPopup**(): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1690

#### Returns

`this`

#### Inherited from

`L.TileLayer.unbindPopup`

***

### unbindTooltip()

> **unbindTooltip**(): `this`

Defined in: node\_modules/@types/leaflet/index.d.ts:1700

#### Returns

`this`

#### Inherited from

`L.TileLayer.unbindTooltip`

***

### addInitHook()

#### Call Signature

> `static` **addInitHook**(`initHookFn`): `any`

Defined in: node\_modules/@types/leaflet/index.d.ts:13

##### Parameters

###### initHookFn

() => `void`

##### Returns

`any`

##### Inherited from

`L.TileLayer.addInitHook`

#### Call Signature

> `static` **addInitHook**(`methodName`, ...`args`): `any`

Defined in: node\_modules/@types/leaflet/index.d.ts:14

##### Parameters

###### methodName

`string`

###### args

...`any`[]

##### Returns

`any`

##### Inherited from

`L.TileLayer.addInitHook`

***

### callInitHooks()

> `static` **callInitHooks**(): `void`

Defined in: node\_modules/@types/leaflet/index.d.ts:16

#### Returns

`void`

#### Inherited from

`L.TileLayer.callInitHooks`

***

### extend()

> `static` **extend**(`props`): (...`args`) => `any` & *typeof* `Class`

Defined in: node\_modules/@types/leaflet/index.d.ts:9

#### Parameters

##### props

`any`

#### Returns

(...`args`) => `any` & *typeof* `Class`

#### Inherited from

`L.TileLayer.extend`

***

### include()

> `static` **include**(`props`): `any`

Defined in: node\_modules/@types/leaflet/index.d.ts:10

#### Parameters

##### props

`any`

#### Returns

`any`

#### Inherited from

`L.TileLayer.include`

***

### mergeOptions()

> `static` **mergeOptions**(`props`): `any`

Defined in: node\_modules/@types/leaflet/index.d.ts:11

#### Parameters

##### props

`any`

#### Returns

`any`

#### Inherited from

`L.TileLayer.mergeOptions`
