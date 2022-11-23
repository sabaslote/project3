function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.8617, lng: 104.1954 },
    zoom: 10,
  });
  var marker = new google.maps.Marker({
    position: { lat: 35.8617, lng: 104.1954 },
    map: map,
  });
  var addCircle = new google.maps.Circle({
    center: { lat: 35.8617, lng: 104.1954 },
	radius:1000,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
	map: map,
  });
  var infowindow = new google.maps.InfoWindow({
    content: "<p>This is where origami was first introduced!</p>"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;