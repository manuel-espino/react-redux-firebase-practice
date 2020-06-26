import React, { useEffect, useState } from 'react';
import SimpleSearchForm from '../shared/components/simple-search-form';
import Message from '../shared/components/message';
import ResultsActors from './results-actors';

const SearchActors = () => {

   const API_URL = "http://api.tvmaze.com/search/people?q=";
   const [results, setResults] = useState(null);
   const [searchValue, setSearchValue] = useState('');
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
               {results ?
                  (results.length ?
                     <ResultsActors results={results} />
                     : <Message type="info" text="Nobody was found." />)
                  : null
               }
            </section>
         </main>
      </div >
   )
}


export default SearchActors;