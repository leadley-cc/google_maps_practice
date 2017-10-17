var initialise = function () {
  var mapDiv = document.getElementById("main-map")
  // var coords = { lat: 40.712784, lng: -74.005941 }
  var coords = { lat: 63.6195751, lng: -19.5991159 }
  var mainMap = new MapWrapper(mapDiv, coords, 10)
  mainMap.addMarker(coords)
  mainMap.addMarker({ lat: 36.476945, lng: 53.559506 })
  mainMap.addMarker({ lat: 39.334936, lng: -78.781114 })
  mainMap.addClickEvent()

  var bounceButton = document.getElementById("bounce-markers")
  bounceButton.addEventListener("click", mainMap.bounceMarkers)
}

window.addEventListener("load", initialise)
