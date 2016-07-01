import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions/stations';
import { Tabs, Tab } from 'material-ui/Tabs';
import AllStationsContainer from './AllStationsContainer';
import RecentStationsContainer from './RecentStationsContainer';
import PopularStationsContainer from './PopularStationsContainer';


@connect(
  state => ({}),
  dispatch => bindActionCreators(actions, dispatch)
)

export default class HomePage extends Component {

  render() {
    return (
      <Tabs>
        <Tab label="All" value="all">
          <AllStationsContainer />
        </Tab>
        <Tab label="Recent" value="recent">
          <RecentStationsContainer />
        </Tab>
        <Tab label="Popular" value="popular">
          <PopularStationsContainer />
        </Tab>
      </Tabs>
    );
  }
}
