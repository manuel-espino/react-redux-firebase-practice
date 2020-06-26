import { GET_ACTOR, GET_ALL_ACTORS, ADD_ACTOR, REMOVE_ACTOR } from './types';

//ACTIONS
//Action creators 
export const getActor = (id) => ({
   type: GET_ACTOR,
   id: id
})

export const getAllActos = () => ({
   type: GET_ALL_ACTORS
})

export const addActor = (actor) => ({
   type: ADD_ACTOR,
   actor: actor
})

export const removeActor = (actor) => ({
   type: REMOVE_ACTOR,
   actor: actor
})