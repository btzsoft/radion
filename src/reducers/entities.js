import * as types from '../constants/ActionTypes';

const initialState = {
  stations: {
    all: [],
    recent: [],
    popular: [],
    search: [],
  },
};

export default function entities(state = initialState, action) {

  switch (action.type) {
    case types.RECEIVE_ALL_STATIONS:
      return {
        ...state,
        stations: {
          ...state.stations,
          all: action.all,
        },
      };

    case types.RECEIVE_RECENT_STATIONS:
      return {
        ...state,
        stations: {
          ...state.stations,
          recent: action.recent,
        },
      };

    case types.RECEIVE_POPULAR_STATIONS:
      return {
        ...state,
        stations: {
          ...state.stations,
          popular: action.popular,
        },
      };

    case types.RECEIVE_SEARCH:
      return {
        ...state,
        stations: {
          ...state.stations,
          search: action.search,
        },
      };

    default:
      return state;
  }
}
