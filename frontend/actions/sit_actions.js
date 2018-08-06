import * as SitApiUtil from '../util/sit_api_util';

export const RECEIVE_SITS = 'RECEIVE_SITS';

const receiveSits = (sits) => ({
  type: RECEIVE_SITS,
  sits
});

export const fetchSits = () => dispatch => SitApiUtil.fetchSits()
  .then((sits) => dispatch(receiveSits(sits)));
