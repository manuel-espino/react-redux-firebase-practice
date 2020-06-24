import actors from './actors/reducer';
import films from './films/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers(
   {
      actors,
      films
   }
);

export default rootReducer;