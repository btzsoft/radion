import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions/search';
import StationsGrid from './../components/StationsGrid';

@connect(
  state => {
    const { entities } = state;
    const { stations } = entities;
    const { search } = stations;
    return {
      search,
    };
  },
  dispatch => bindActionCreators(actions, dispatch)
)

export default class SearchPage extends Component {

  static propTypes = {
    search: PropTypes.array,
  };

  componentDidMount() {
    const { params, fetchSearch } = this.props;
    fetchSearch(params.query);
  }

  componentWillReceiveProps(nextProps) {
    const { params, fetchSearch } = this.props;
    if (nextProps.params.query !== params.query) {
      fetchSearch(params.query);
    }
  }

  render() {
    const { search } = this.props;
    return <StationsGrid stations={search} />;
  }
}
