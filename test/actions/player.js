import { expect } from 'chai';
import * as actions from './../../src/actions/player';
import * as types from './../../src/constants/ActionTypes';

describe('actions -> player', () => {

  const station = {
    "id": 10,
    "name": "Sr P3",
    "description": "",
    "country": "SE",
    "website": "",
    "image": {
      "url": null,
      "thumb": {
        "url": null
      }
    },
    "created_at": "2012-01-15T05:55:12.000+01:00",
    "updated_at": "2015-04-11T14:10:45.000+02:00",
    "slug": "sr-p3"
  }

  it('should create an action to change playing station', () => {

    const expectedAction = {
      type: types.CHANGE_PLAYING_STATION,
      playingStation: station
    }

    expect(actions.changePlayingStation(station)).to.deep.equal(expectedAction);
  })

  it('should create an action to toggle playing station state', () => {

    const expectedAction = {
      type: types.TOGGLE_IS_PLAYING,
      isPlaying: true
    }

    expect(actions.toggleIsPlaying(true)).to.deep.equal(expectedAction);

  })
})