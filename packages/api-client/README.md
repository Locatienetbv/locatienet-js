# Locatienet API Client

Locatienet API Client 

## 🚀 Installation.

To install the package, run:

```sh
npm install @locatienet/api-client
```

## 📖 Usage

Example of use:

```js
<script>
window.LN_API_KEY = 'YOUR_API_KEY_HERE';
</script>
<script src="dist/api-client.js"></script>
<script>
// Call the API
LN.api.getCountries().then(countries => {
console.log('Countries:', countries);
});

LN.api.geocode("Damstraat 1", "NL").then(results => {
console.log('Geocode:', results);
});
</script>
```

## ⚙ Available options.



## 📜 License

Distributed under **MIT** license.



