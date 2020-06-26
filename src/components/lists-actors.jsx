import React from 'react';
import CardPerson from '../shared/components/card-person';

const ListActors = ({ title, results, mode }) => {

   return (
      <>
         <h3 className="title title--2">{title}</h3>
         <div className="results">
            {
               results && results.length > 0 && results.map(result => (
                  <CardPerson key={result.person.id} person={result} mode={mode} />
               ))
            }
         </div>
      </>
   )
}

export default ListActors;