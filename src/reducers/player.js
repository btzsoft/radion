import * as types from '../constants/ActionTypes';

const initialState = {
  playingStation: null,
  isPlaying: false,
};

export default function player(state = initialState, action) {
  switch (action.type) {

    case types.CHANGE_PLAYING_STATION:
      return { ...state, playingStation: action.playingStation };

    case types.TOGGLE_IS_PLAYING:
      return { ...state, isPlaying: action.isPlaying };

    default:
      return state;
  }
}
