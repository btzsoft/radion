import * as types from './../constants/ActionTypes';

export function changePlayingStation(playingStation) {
  return {
    type: types.CHANGE_PLAYING_STATION,
    playingStation,
  };
}

export function toggleIsPlaying(isPlaying) {
  return {
    type: types.TOGGLE_IS_PLAYING,
    isPlaying,
  };
}
