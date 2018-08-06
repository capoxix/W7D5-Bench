import React from 'react';

const SitIndexItem = (props) => (
  <ul>
  <li>description: {props.sit.description}</li>
  <li>lat: {props.sit.lat}</li>
  <li>long: {props.sit.long}</li>
  </ul>

);

export default SitIndexItem;
