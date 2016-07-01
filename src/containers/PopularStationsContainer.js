import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions/stations';
import StationsGrid from './../components/StationsGrid';

@connect(
  state => {
    const { entities } = state;
    const { stations } = entities;
    const { popular } = stations;
    return {
      popular,
    };
  },
  dispatch => bindActionCreators(actions, dispatch)
)

export default class PopularStationsContainer extends Component {

  static propTypes = {
    popular: PropTypes.array,
  };

  componentDidMount() {
    const { fetchPopularStations } = this.props;
    fetchPopularStations();
  }

  render() {
    const { popular } = this.props;
    return <StationsGrid stations={popular} />;
  }
}
