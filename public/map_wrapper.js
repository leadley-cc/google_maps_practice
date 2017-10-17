var MapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
  this.markers = []
  this.bounceMarkers = this.bounceMarkers.bind(this)
}

MapWrapper.prototype = {
  addMarker: function (coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })
    this.markers.push(marker)
    return marker
  },

  addClickEvent: function () {
    google.maps.event.addListener(this.googleMap, "click", event => {
      var coords = { lat: event.latLng.lat(), lng: event.latLng.lng() }
      this.addMarker(coords)
    })
  },

  bounceMarkers: function () {
    this.markers.forEach(
      marker => marker.setAnimation(google.maps.Animation.BOUNCE)
    )
  }
}
