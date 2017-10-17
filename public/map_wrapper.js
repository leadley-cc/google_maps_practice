var MapWrapper = function (container, coords, zoom, styles) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom,
    styles: styles
  })
  this.markers = []
  this.bounceMarkers = this.bounceMarkers.bind(this)
  this.moveToVancouver = this.moveToVancouver.bind(this)
  this.moveToCurrentLocation = this.moveToCurrentLocation.bind(this)
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
  },

  moveToVancouver: function () {
    this.googleMap.setCenter({ lat: 49.282729, lng: -123.120738 })
  },

  moveToCurrentLocation: function () {
    navigator.geolocation.getCurrentPosition(pos => {
      var coords = { lat: pos.coords.latitude, lng: pos.coords.longitude }
      console.log(this)
      this.googleMap.setCenter(coords)
    })
  }
}
