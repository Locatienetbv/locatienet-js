# Locatienet Leaflet Routing

Locatienet Routing using the [Leaflet Routing Machine](https://github.com/perliedman/leaflet-routing-machine)

## 📖 Usage

To install the package, run:

Download [latest release](https://github.com/Locatienetbv/locatienet-js/releases), or obtain the latest release via [unpkg.com](https://www.npmjs.com/package/@locatienet/leaflet-routing).

```js
<script src="https://unpkg.com/@locatienet/leaflet-searchaddress/dist/leaflet-routing.js?apikey=aa101d91-bc54-4c68-b0ea-12dbfe116bf6"></script>
```

or via npm:

```npm
npm install --save @locatienet/leaflet-routing
```

Example of use with Leaflet:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Locatienet Leaflet Routing Demo</title>
    <style>
        body, html { height: 100%; margin: 0; } #map { height: 100%; width: 100%; }
    </style>
</head>
<body>
    <div id="map"></div> 

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script src="https://unpkg.com/@locatienet/leaflet-tilelayer/dist/leaflet-tilelayer.js?apikey=YOUR_API_KEY_HERE"></script>

    <script>
        const map = L.map('map').setView([52.1, 5.1], 7);
        L.locatienetTileLayer().addTo(map);
    </script>
</body>
</html>

```

## 📜 License

Distributed under **MIT** license.
