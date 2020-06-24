import React from 'react';
import image_replacement from '../statics/image-replacement';
import { useDispatch } from 'react-redux';
import { addActor } from '../../redux/actors/actions';

const CardPerson = ({ person }) => {

   const dispatch = useDispatch();

   const { id, image, name, birthday, deathday, country } = person.person;

   const handleAdd = () => {
      dispatch(addActor(person.id))
   }
   return (
      <article className="card card-result">
         <figure className="card-result__image image-raplacement">
            <img src={image?.medium || image_replacement} alt={"Picture of " + name} />
         </figure>
         <div className="card-result__data-wrapper">
            <h1 className="card-result__title">{name} </h1>
            <div className="card-result__data">
               {(birthday || deathday) &&
                  < p className="card-result__data--life">
                     {birthday && <span> {birthday} </span >}
                     {deathday && < span > / {deathday} </span >}
                  </p>
               }
               {country?.name &&
                  <p className="card-result__data--country">
                     <span>{country?.name}</span>
                  </p>
               }
            </div>
         </div >
         <button className="card-result__add" onClick={handleAdd}>+</button>
      </article >
   )
}

export default CardPerson;