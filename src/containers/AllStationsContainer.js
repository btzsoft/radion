import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions/stations';
import StationsGrid from './../components/StationsGrid';
import Infinite from 'react-infinite';

@connect(
  state => {
    const { entities, environment } = state;
    const { stations } = entities;
    const { all } = stations;
    const { isLoading } = environment;
    return {
      all,
      isLoading,
    };
  },
  dispatch => bindActionCreators(actions, dispatch)
)

export default class AllStationsContainer extends Component {

  static propTypes = {
    all: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
    };
  }

  componentDidMount() {
    const { fetchAllStations } = this.props;
    fetchAllStations();
  }

  handleInfiniteLoad() {
    const { fetchAllStations } = this.props;
    this.setState({
      offset: this.state.offset + 20,
    });
    fetchAllStations({ offset: this.state.offset, append: true });
  }

  render() {
    const { all, isLoading } = this.props;
    return (<Infinite
      elementHeight={40}
      containerHeight={500}
      infiniteLoadBeginEdgeOffset={200}
      isInfiniteLoading={isLoading}
      onInfiniteLoad={this.handleInfiniteLoad.bind(this)}
    >
      <StationsGrid stations={all} />
    </Infinite>);
  }
}
