import Classnames from 'classnames';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addActor, removeActor } from '../../redux/actors/actions';
import image_replacement from '../statics/image-replacement';
import Modal from './modal';

const CardPerson = ({ person, mode = "add" }) => {
   const [visibleModalRemove, setvisibleModalRemove] = useState(false);

   const dispatch = useDispatch();

   const { image, name, birthday, deathday, country } = person.person;

   const handleAdd = useCallback((person) =>
      dispatch(addActor(person)),
      [dispatch]
   );

   const handleRemove = () => {
      setvisibleModalRemove(true)
   };


   const confirmRemove = useCallback((person) =>
      dispatch(removeActor(person)),
      [dispatch]
   );

   const AddActor = React.memo(({ onAction }) => (
      <button disabled={mode === "add" && person.favourite} onClick={onAction} className={"button button--" + mode} />
   ));

   const ModalContent = () => (
      <>
         <header>
            <h3>Remove...</h3>
         </header>
         <main>
            <p>Are you sure you want to remove this actor from your favorites?</p>
         </main>
         <footer>
            <button className="button button--secondary" onClick={() => confirmRemove(person)}>Remove</button>
            <button className="button" onClick={() => setvisibleModalRemove(false)}>Cancel</button>
         </footer>
      </>
   )

   return (
      <article className={Classnames("card card-result",
         {
            "card-result--dark": mode === "remove",
            "card-result--disabled": mode === "add" && person.favourite
         })} >
         < figure className="card-result__image image-raplacement" >
            <img src={image?.medium || image_replacement} alt={"Picture of " + name} />
         </figure >
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
         <AddActor onAction={() => mode === "remove" ? handleRemove(person) : handleAdd(person)} />
         <Modal toggle={() => setvisibleModalRemove(false)} open={visibleModalRemove}>
            <ModalContent />
         </Modal>
      </article >
   )
}

export default CardPerson;