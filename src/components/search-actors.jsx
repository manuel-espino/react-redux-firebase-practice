import React, { useEffect, useState } from 'react';
import SimpleSearchForm from '../shared/components/simple-search-form';
import Message from '../shared/components/message';
import ListActors from './lists-actors';
import { useSelector } from 'react-redux';
import { actorIsFavourite } from '../redux/actors/utils';

const SearchActors = () => {
   const favouritesActors = useSelector(state => state.actors.favourites);

   const API_URL = "http://api.tvmaze.com/search/people?q=";
   const [results, setResults] = useState(null);
   const [trasformedResults, setTrasformedResults] = useState(null);
   const [searchValue, setSearchValue] = useState('ana');
   const [response, setResponse] = useState(null)
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   const handleChange = (value) => {
      setSearchValue(value);
   }

   const getData = async () => {
      setResults(null);
      setLoading(true);

      try {
         const res = await fetch(API_URL + searchValue);
         const data = await res.json();
         setResponse(data)
      }
      catch (e) { setError(e) }
      finally { setLoading(false) }
   }

   useEffect(() => {
      setResults(response)
   }, [response]);

   useEffect(() => {
      let timer;
      if (searchValue.length > 2) {
         clearTimeout(timer);
         timer = setTimeout(() => {
            getData()
         }, 1000);
      } else {
         setLoading(false);
         setError(false);
         setResults(null)
      }
      return () => clearTimeout(timer)
   }, [searchValue]);


   useEffect(() => {
      let aux = [...results || []];
      aux = aux?.filter(a => {
         if (actorIsFavourite(favouritesActors, a.person.id)) {
            a.favourite = true;
         } else {
            a.favourite = false;

         }
         return a;
      })
      setTrasformedResults(aux)
   }, [results, favouritesActors]);


   return (
      <div>
         <header>
            <h1 className="title title--1">Search actors</h1>
         </header>
         <main>
            <SimpleSearchForm searchValue={searchValue} handleChange={handleChange} />
            <section>
               {loading && <Message type="loading" text="Loading..." />}
               {error && <Message type="error" text={error.message} />}
               {trasformedResults ?
                  (trasformedResults.length > 0 ?
                     <ListActors results={trasformedResults} title="Results" />
                     : <Message type="info" text="Nobody was found." />)
                  : null
               }
            </section>
         </main>
      </div >
   )
}

export default SearchActors;