import React from 'react';
import SitIndexItem from './sit_index_item';

class SitIndex extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    // request benches from your API here
    this.props.fetchSits();
  }

  render() {
    // console.log(this.props);

    let sits = Object.values(this.props.sits).map(sit => (<SitIndexItem key={sit.id} sit={sit}/>));

    return (
      <div>
        {sits}
      </div>
    );
  }
}

export default SitIndex;
