/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/
$(document).ready(function() { 
  
// invoke the Leaflet.js library to draw a map
  
var map = L.map('map-container').setView([46.8523, -121.7603], 13);
  
// create map
  
var drawLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
  
// add layers to map    
  
var terrainLayer = L.tileLayer('http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
}).addTo(map);
  

 // map layers selection box
  
var mapLayers = {
    "Terrain": terrainLayer,
    "Map View": drawLayer,
   
}

// controller for map selection

L.control.layers(mapLayers).addTo(map);
terrainLayer.addTo(map); 


  
//Points of Interest Markers//  

L.marker([46.8523, -121.76403]).addTo(map)
    .bindPopup('<b>Welcome to Mt. Rainier!</b><br>The mountain is 14,111 feet high.')
    .openPopup();
  
L.marker([46.871, -121.732]).addTo(map)
  .bindPopup("<b>Steamboat Prow</b><br>Hike to this sub-peak and ski the Inter Glacier.")
  .openPopup();
  
L.marker([46.863, -121.775]).addTo(map)
  .bindPopup("<b>Liberty Cap</b><br>A small glacier near the summit.")
  .openPopup();

         
});

   
  // Customize that Map to show markers with popups at no fewer than 3
  // interesting locations. 
/*   
L.marker([46.852, -121.760]).addTo(map)
bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.")
openPopup();

L.marker([46.871, -121.732]).addTo(map)
bindPopup("<b>Steamboat Prow</b><br>Hike to this sub-peak and ski the Inter Glacier.")
openPopup();
   
L.marker([46.902, -121.643]).addTo(map)
bindPopup("<b>White River Campground</b><br>Bring your tent and relax or do some hiking.")  
openPopup();  
 
 });*/