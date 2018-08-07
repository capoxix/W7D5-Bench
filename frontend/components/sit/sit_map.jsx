import React from 'react';
import MarkerManager from '../../util/marker_manager';

class SitMap extends React.Component {
  componentDidMount() {
    // set the map to show SF
    // this.props.fetchSits();
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    // this.MarkerManager.updateMarkers(this.props.sits);
  }

  render(){
    if(this.MarkerManager && this.props.sits){
      console.log("RENDER");
      this.MarkerManager.updateMarkers(this.props.sits);
    }
    return (
      <div id='map-container' ref={ map => this.mapNode = map }>
      </div>
    );
  }
}

export default SitMap;
