# Leaflet-searchaddress



## 🚀 Installation.

To install the package, run:

```sh
npm install @locatienet/leaflet-searchadress
```

## 📖 Usage

Example of use with Leaflet:

```js
    
        // Initialize map
        const map = L.map('map').setView([52.1, 5.1], 7);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Add SearchAddress control
        const searchAddress = new L.SearchAddress.Control({
            position: 'topright',
            placeholder: 'Zoek adres'
        });

        map.addControl(searchAddress);

        const featureGroup = L.featureGroup().addTo(map)

        // Listen to events
		searchAddress.on('address', (e) => {
            featureGroup.clearLayers();
            L.geoJSON(e.address).bindPopup(function (layer) {
                return layer.feature.properties.description;
            }).addTo(featureGroup);
            map.flyToBounds(featureGroup.getBounds(), { animate: true, duration: 3, easeLinearity: 1, })

        });

		searchAddress.on('clear', () => {
            console.log('Address cleared');
        });
    
```

## ⚙ Available options.



## 📜 License

Distributed under **MIT** license.

