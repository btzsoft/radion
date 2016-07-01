import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions/stations';
import StationsGrid from './../components/StationsGrid';

@connect(
  state => {
    const { entities } = state;
    const { stations } = entities;
    const { recent } = stations;
    return {
      recent,
    };
  },
  dispatch => bindActionCreators(actions, dispatch)
)

export default class RecentStationsContainer extends Component {

  static propTypes = {
    recent: PropTypes.array,
  };

  componentDidMount() {
    const { fetchRecentStations } = this.props;
    fetchRecentStations();
  }

  render() {
    const { recent } = this.props;
    return <StationsGrid stations={recent} />;
  }
}
