$(function(){
    var socket=io()
      , map=new L.Map('map').setView([-17.39417,-66.17056],16);

    L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png',{
        maxZoom:18
      , id:'examples.map-20v6611k'
    }).addTo(map);

    var layer1=new L.GeoJSON.AJAX('/geojson/k.json').addTo(map).bindPopup('Linea K')
      , layer2=new L.GeoJSON.AJAX('/geojson/3.json').addTo(map).bindPopup('Linea 3')

    L.marker([-17.39417,-66.17056]).addTo(map).bindPopup('Tu estas aquí')

    var cars=new Array();

    socket.on('track',function(data){
//        var mark1=L.marker([-17.39317,-66.17056]).addTo(map)
//        cars[data.key]
//        mark1.setLatLng([-17.39217,-66.17056])
    });
});

