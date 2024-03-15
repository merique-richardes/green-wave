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
 map.addLayer(layer)


// create popup contents, should be a string with template literals embedded into it in the future...
// this implementation is terrible.
var aurorasolar = "<div><a style='text-align: center;' href = https://aurorasolar.com/> Aurora Solar </a> <hr> <p> Provides software suite for simplifying the site assesment and installation design process.</p> <hr> <p>Cost: $159-259</p> <hr> <p> <i class='tiny material-icons'>star</i> <i class='tiny material-icons'>star</i> <i class='tiny material-icons'>star</i> <i class='tiny material-icons'>star</i> <i class='tiny material-icons'>star_half</i> </p> </div>";
var ecosolar = "<div><a style='text-align: center;' href = http://www.ecosolarenergy.net/> Eco Solar Energy </a> <hr> <p> Nicaraguan residential solar intaller. </p> <hr> <p>Cost: Requires Solicitation. </p> <hr> <p> <i class='tiny material-icons'>star</i> <i class='tiny material-icons'>star</i> <i class='tiny material-icons'>star</i> <i class='tiny material-icons'>star_half</i> <i class='tiny material-icons'>star_border</i> </p> </div>";
// specify popup options 
var customOptions =
   {
   'maxWidth': '150',
   'className' : 'custom'
   
   }
 
 // creates the markers, needs to support database storage in the future, this sucks!
 var marker = L.marker([37.78955930049995, -122.40403373160581], {icon: supplierIcon})
 .addTo(map)
 .bindPopup(aurorasolar, customOptions)

 var marker = L.marker([12.146666245226955, -86.26020278879957], {icon: installerIcon})
 .addTo(map)
 .bindPopup(ecosolar, customOptions)

 

 window.onload = window.onresize = function(){map.invalidateSize();};