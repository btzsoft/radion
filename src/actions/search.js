import fetch from './../core/fetch';
import * as types from './../constants/ActionTypes';
import { TOKEN, API_URL } from './../constants/Dirble';

export function fetchSearch(query, page = 0) {
  return dispatch => {
    fetch(`${API_URL}/search/${query}?token=${TOKEN}&page=${page}`)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveSearch(json));
    })
    .catch(err => {
      throw err;
    });
  };
}

export function receiveSearch(stations) {
  return {
    type: types.RECEIVE_SEARCH,
    search: stations,
  };
}
