import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions/player';

@connect(
  state => {
    const { player } = state;
    const { isPlaying, playingStation } = player;
    return {
      isPlaying,
      playingStation,
    };
  },
  dispatch => bindActionCreators(actions, dispatch)
)

export default class Player extends Component {

  static propTypes = {
    isPlaying: PropTypes.bool,
    playingStation: PropTypes.object,
  }

  render() {
    const { isPlaying, playingStation } = this.props;
    return (
      <div>
        Player
        {playingStation && <div>
          Playing... {playingStation.name}
        </div>}
      </div>
    );
  }
}
