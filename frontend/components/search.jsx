import React from 'react';
import SitMap from './sit/sit_map';
import SitIndex from './sit/sit_index';

class Search extends React.Component{
  render(){
    return(
      <div>
        <SitMap />
        <SitIndex sits={this.props.sits} fetchSits={this.props.fetchSits} />
      </div>
    );
  }
}

export default Search;
