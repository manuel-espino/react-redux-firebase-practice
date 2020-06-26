import React from 'react';
import { useSelector } from 'react-redux';
import ListActors from './lists-actors';

const Favourites = () => {

   const favouritesActors = useSelector(state => state.actors.favourites);

   return (
      <>{
         favouritesActors && favouritesActors.length > 0 ?
            <ListActors title="Favourites" results={favouritesActors} mode="remove" />
            : null
      }</>
   )
}

export default Favourites;