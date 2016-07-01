import { combineReducers } from 'redux';
import environment from './../reducers/environment';
import entities from './../reducers/entities';
import player from './../reducers/player';

const rootReducer = combineReducers({
  environment,
  entities,
  player,
});

export default rootReducer;
