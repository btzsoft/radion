import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import PlayButton from 'material-ui/svg-icons/av/play-arrow';
import PauseButton from 'material-ui/svg-icons/av/pause';
import LazyLoad from 'react-lazyload';
import * as actions from './../actions/player';

@connect(
  state => {
    const { player } = state;
    const { playingStation } = player;
    return {
      playingStation,
    };
  },
  dispatch => bindActionCreators(actions, dispatch)
)

export default class StationCard extends Component {

  static propTypes = {
    station: PropTypes.object.isRequired,
  };

  render() {
    const { station, playingStation, changePlayingStation } = this.props;
    const {
      id, name, country, description, image, slug, website, created_at, updated_at, streams, categories
    } = station;

    return (
      <GridTile
        key={id}
        title={<Link to={`/station/${id}/${slug}`}>{name}</Link>}
        subtitle={<span>{website}</span>}
        actionIcon={<IconButton onTouchTap={() => changePlayingStation(station)}>
            {playingStation && playingStation.id === station.id
              ? <PauseButton color="white" />
              : <PlayButton color="white" />
            }
          </IconButton>}
      >
        <LazyLoad>
          <img src={image && image.url} alt={name} />
        </LazyLoad>
      </GridTile>
    );
  }
}
