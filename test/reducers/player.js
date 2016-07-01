import { expect } from 'chai';
import reducer from './../../src/reducers/player';
import * as types from './../../src/constants/ActionTypes';

describe('reducers -> player', () => {

  const initialState = {
    playingStation: null,
    isPlaying: false,
  }

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

  it('should return the initial state', () => {

    expect(
      reducer(undefined, {})
    ).to.deep.equal(initialState)

  })

  it('should handle CHANGE_PLAYING_STATION', () => {

    expect(
      reducer(initialState, {
        type: types.CHANGE_PLAYING_STATION,
        playingStation: station
      })
    ).to.deep.equal({...initialState, playingStation: station})

  })

  it('should handle TOGGLE_IS_PLAYING', () => {

    expect(
      reducer(initialState, {
        type: types.TOGGLE_IS_PLAYING,
        isPlaying: true
      })
    ).to.deep.equal({...initialState, isPlaying: true})

  })

})
