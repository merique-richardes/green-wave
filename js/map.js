// creates the default green wave icon settings class.
var GreenWaveIcon = L.Icon.extend({
    options: {
       iconSize:     [36, 56], // default size is 142 x 231 px
       iconAnchor:   [18, 56],
       popupAnchor:  [0, -61]
    }
 });

 // initializes the custom icons.
 var supplierIcon = new GreenWaveIcon({iconUrl: './assets/supplierIcon.png'}),
 installerIcon = new GreenWaveIcon({iconUrl: './assets/installerIcon.png'});


 // starting position of the map
 // in the future, there should be a menu that asks if the user is a solar supplier or installer.
 var mapOptions = {
    center: [37.8272, -122.2913], // set to SF
    zoom: 5
 }
 
 // Creating a map object, using the dictionary we just made.
 var map = new L.map('map', mapOptions);
 
 // Creating a Layer object
 var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
 
 // Adding layer to the map
 map.addLayer(layer);

 // reading marker database
 // taken from https://stackoverflow.com/questions/62864483/read-sqlite-database-with-node-js
 let markers_db = new sqlite3.Database('./database/markers.db', (err) => {
      if (err) {
     console.error(err.message);
   }
   console.log('Connected to the markers database.');
 });

 var marker = L.marker([37.78955930049995, -122.40403373160581], {icon: supplierIcon})
 .addTo(map)
 .bindPopup("Aurora Solar")

 var marker = L.marker([12.103539004571969, -86.26922537500955], {icon: installerIcon})
 .addTo(map)
 .bindPopup("Censolar Nicaragua")

 window.onload = window.onresize = function(){map.invalidateSize();};