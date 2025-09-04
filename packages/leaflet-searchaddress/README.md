# Leaflet-searchaddress

## 🚀 Installation

To install the package, run:

```sh
npm install @locatienet/leaflet-searchadress
```

## 📖 Usage

Example of use with Leaflet:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Locatienet Leaflet SearchAddress Demo</title>
    <style>
        body, html { height: 100%; margin: 0; } #map { height: 100%; width: 100%; }
    </style>
    
</head>
<body>
    <div id="map"></div>
    <script src="dev-api-key.js"></script>

    <!-- Leaflet -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

    <!-- Locatienet Leaflet SearchAddress  -->
    <link rel="stylesheet" href="https://unpkg.com/@locatienet/leaflet-searchaddress/leaflet-searchaddress.css" />
    <script src="https://unpkg.com/@locatienet/leaflet-addresssearch/dist/leaflet-searchaddress.js?apikey=YOUR_APIKEY_HERE"></script>
    <script src="https://unpkg.com/@locatienet/leaflet-tilelayer/dist/leaflet-tilelayer.js?apikey=YOUR_APIKEY_HERE"></script>
    
    <script>
        const map = L.map('map').setView([52.1, 5.1], 7);
        L.locatienetTileLayer().addTo(map);

        // Add Locatienet Leaflet SearchAddress control
        const searchAddress = new L.SearchAddress.Control().addTo(map);


        // Listen to SearchAddress event address selected
        const featureGroup = L.featureGroup().addTo(map)
        searchAddress.on('address', (e) => {
            featureGroup.clearLayers();
            L.geoJSON(e.address).bindPopup(function (layer) {
                return layer.feature.properties.description;
            }).addTo(featureGroup);
            map.flyToBounds(featureGroup.getBounds(), { maxZoom: 12, animate: true, duration: 3, easeLinearity: 1, })

        });
    </script>
</body>
</html>
    
```

## ⚙ Available options

- {
  language: 'nl' => set preferred ui language 'de', 'en', 'fr'
}

## 📜 License

Distributed under **MIT** license.
