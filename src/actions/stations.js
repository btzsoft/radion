import fetch from './../core/fetch';
import * as types from './../constants/ActionTypes';
import { TOKEN, API_URL } from './../constants/Dirble';
import { setLoading, setError } from './environment';

export function fetchStationIfNeeded(stationId) {
  return (dispatch, getState) => {
    const { entities } = getState();
    const { stations } = entities;
    if (!(stationId in stations)) {
      dispatch(fetchStation(stationId));
    }
  };
}

function fetchStation(stationId) {
  return dispatch => {
    dispatch(setLoading(true));
    fetch(`${API_URL}/station/${stationId}?token=${TOKEN}`)
    .then(response => response.json())
    .then(json => {
      dispatch(setLoading(false));
      dispatch(receiveAllStations([json]));
    })
    .catch(err => {
      dispatch(setError(err));
    });
  };
}

export function fetchAllStations({ page = 0, perPage = 20, offset = 0, append = false } = {}) {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    fetch(`${API_URL}/stations?token=${TOKEN}&page=${page}&per_page=${perPage}&offset=${offset}`)
    .then(response => response.json())
    .then(json => {
      dispatch(setLoading(false));
      if (append) {
        const state = getState();
        dispatch(receiveAllStations([...state.entities.stations.all, ...json]));
      } else {
        dispatch(receiveAllStations(json));
      }
    })
    .catch(err => {
      dispatch(setError(err));
    });
  };
}

export function fetchRecentStations({ page = 0, perPage = 20, offset = 0, append = false } = {}) {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    fetch(`${API_URL}/stations/recent?token=${TOKEN}&page=${page}&per_page=${perPage}&offset=${offset}`)
    .then(response => response.json())
    .then(json => {
      dispatch(setLoading(false));
      if (append) {
        const state = getState();
        dispatch(receiveRecentStations([...state.entities.stations.recent, ...json]));
      } else {
        dispatch(receiveRecentStations(json));
      }
    })
    .catch(err => {
      dispatch(setError(err));
    });
  };
}

export function fetchPopularStations({ page = 0, perPage = 20, offset = 0, append = false } = {}) {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    fetch(`${API_URL}/stations/popular?token=${TOKEN}&page=${page}&per_page=${perPage}&offset=${offset}`)
    .then(response => response.json())
    .then(json => {
      dispatch(setLoading(false));
      if (append) {
        const state = getState();
        dispatch(receivePopularStations([...state.entities.stations.popular, ...json]));
      } else {
        dispatch(receivePopularStations(json));
      }
    })
    .catch(err => {
      dispatch(setError(err));
    });
  };
}

export function receiveAllStations(stations) {
  return {
    type: types.RECEIVE_ALL_STATIONS,
    all: stations,
  };
}

export function receiveRecentStations(stations) {
  return {
    type: types.RECEIVE_RECENT_STATIONS,
    recent: stations,
  };
}

export function receivePopularStations(stations) {
  return {
    type: types.RECEIVE_POPULAR_STATIONS,
    popular: stations,
  };
}
