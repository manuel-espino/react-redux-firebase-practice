export const actorIsFavourite = (array, id) => {
   const exists = array.filter((a) => a.person.id === id);
   return exists.length ? true : false;
}