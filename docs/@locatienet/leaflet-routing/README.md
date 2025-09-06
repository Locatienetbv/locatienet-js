[**Documentation**](../../README.md)

***

[Documentation](../../README.md) / @locatienet/leaflet-routing

# Locatienet Leaflet Tilelayer

Locatienet Leaflet TileLayer

## 🚀 Installation

To install the package, run:

```sh
npm install @locatienet/leaflet-tilelayer
```

## 📖 Usage

Example of use with Leaflet:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Locatienet Leaflet TileLayer Demo</title>
    <style>
        body, html { height: 100%; margin: 0; } #map { height: 100%; width: 100%; }
    </style>
</head>
<body>
    <div id="map"></div> 

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script src="https://unpkg.com/@locatienet/leaflet-tilelayer@1.0.2/dist/leaflet-tilelayer.js?apikey=YOUR_API_KEY_HERE"></script>

    <script>
        const map = L.map('map').setView([52.1, 5.1], 7);
        L.locatienetTileLayer().addTo(map);
    </script>
</body>
</html>

```

## 📜 License

Distributed under **MIT** license.
