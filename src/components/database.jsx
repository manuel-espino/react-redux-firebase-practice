import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/firebase-database';

const DataBase = () => {
   const [value, setValue] = useState("");

   const firebase = useFirebaseApp();

   const handleDataBase = async () => {
      let messageReg = await firebase.database().ref('message').orderByKey().limitToLast;
      await firebase.database().ref('messages').push(value);
      setValue("")

   }

   return (
      <div>
         <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
         <button onClick={handleDataBase}>Put</button>
      </div>
   )
}
export default DataBase;