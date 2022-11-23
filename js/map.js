function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.8617, lng: 104.1954 },
    zoom: 8,
  });
  var marker = new google.maps.Marker({
    position: { lat: 35.8617, lng: 104.1954 },
    map: map,
  });
  var circleArea = new google.maps.Circle({
    position: { lat: 35.8617, lng: 104.1954 },
	radius:100,
	stroke0pacity:0.8,
	fillColor:"rgba(0,0,255,0.4)",
	map: map,
  });
}
window.initMap = initMap;