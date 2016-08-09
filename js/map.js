var map;
var marker;

function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(40.680898, -8.684059),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}
google.maps.event.addDomListener(window, "load", initialize);






function pesquisarEndereco() {
    var enderecoInput = document.getElementById('endereco-input').value;
   
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: enderecoInput }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var myResult = results[0].geometry.location;

            criarMarcador(myResult);

            map.setCenter(myResult);

            map.setZoom(17);
        } else{
            alert("O Geocode não foi bem sucedido pela seguinte razão" + status);
        }
    });
}

function criarMarcador(latlng) {
    if (marker != undefined && marker != '') {
        marker.setMap(null);
        marker = '';
    }

    marker = new google.maps.Marker({
        map: map,
        position: latlng
    });
}


