import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions/stations';

@connect(
  state => {
    const { entities } = state;
    const { stations } = entities;
    const { all } = stations;
    return {
      all,
    };
  },
  dispatch => bindActionCreators(actions, dispatch)
)

export default class StationDetails extends Component {

  static propTypes = {
    all: PropTypes.array,
  };

  componentDidMount() {
    const { params, fetchStationIfNeeded } = this.props;
    fetchStationIfNeeded(params.id);
  }

  componentWillReceiveProps(nextProps) {
    const { params, fetchStationIfNeeded } = this.props;
    if (nextProps.params.id !== params.id) {
      fetchStationIfNeeded(params.id);
    }
  }

  render() {
    const { params, all } = this.props;
    const station = all.find(el => el.id == params.id);
    const {
      id, name, country, description, image, slug, website, created_at, updated_at, streams, categories
    } = station || {};

    return (
      <div>
        {station && <div>
          <div>{id}</div>
          <div>{name}</div>
          <div>{country}</div>
          <div>{description}</div>
          <div>{website}</div>
        </div>}
      </div>
    );
  }
}
