import { GET_FILM, GET_ALL_FILMS, ADD_FILM, REMOVE_FILM } from './types';

//ACTIONS
//Action creators 
export const getFilm = (id) => ({
   type: GET_FILM,
   id: id
})

export const getAllActos = () => ({
   type: GET_ALL_FILMS
})

export const addFilm = (actor) => ({
   type: ADD_FILM,
   actor: actor
})

export const removeFilm = (id) => ({
   type: REMOVE_FILM,
   id: id
})