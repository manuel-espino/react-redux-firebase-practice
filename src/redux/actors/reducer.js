import { ADD_ACTOR, REMOVE_ACTOR } from "./types";
import { actorIsFavourite } from './utils';

const initialState = {
   favourites: []
};
const actorsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_ACTOR:
         if (!actorIsFavourite(state.favourites, action.actor.person.id)) {
            const aux_add = [...state.favourites, action.actor];
            return { ...state, favourites: aux_add }
         }
         return state;
      case REMOVE_ACTOR:
         const aux_remove = state.favourites.filter(a => a.person.id !== action.actor.person.id);
         return { ...state, favourites: aux_remove }
      default:
         return state;
   }
}

export default actorsReducer;

