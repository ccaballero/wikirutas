var map=new L.Map('map').setView([-17.36651,-66.17563],15);

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
    maxZoom:18
  , attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>'
  , id:'examples.map-20v6611k'
}).addTo(map);

var layer1=new L.GeoJSON.AJAX('/geojson/k.json').addTo(map);

//L.marker([51.5, -0.09])
// .addTo(map)
// .bindPopup("<b>Hello world!</b><br />I am a popup.")
// .openPopup();

//var popup = L.popup();
//map.on('click',function(e){
//    popup.setLatLng(e.latlng)
//         .setContent('You clicked the map at '+e.latlng.toString())
//         .openOn(map);
//});

