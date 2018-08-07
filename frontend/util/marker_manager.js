export default class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {};
  }

  updateMarkers(sits){
    sits.forEach(sit => {
      if(this.markers[sit.id] === undefined) {
        this.createMarkerFromSit(sit);
      }
    });
  }

  createMarkerFromSit(sit){
    console.log(sit.lat, sit.lng);
    let myLatlng = new google.maps.LatLng(sit.lat,sit.lng);
    let marker = new google.maps.Marker({
      position: myLatlng,
      title:sit.description
    });
    this.markers[sit.id] = marker;
    marker.setMap(this.map);
  }
}
