import { ADD_ACTOR } from "./types";

const initialState = {
   favourites: []
};

const actorsReducer = (initialState, action) => {
   switch (action.type) {
      case ADD_ACTOR:
         console.log(action.id);
         return null;

      default:
         return null;
   }
}

export default actorsReducer;