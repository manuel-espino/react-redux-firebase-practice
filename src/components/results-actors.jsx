import React from 'react';
import CardPerson from '../shared/components/card-person';

const ResultsActors = ({ results }) => (
   <>
      <h3 className="title title--2"> Results</h3>
      <div className="results">
         {
            results && results.map(result => (
               <CardPerson key={result.person.id} person={result} />
            ))
         }
      </div>
   </>
)

export default ResultsActors;