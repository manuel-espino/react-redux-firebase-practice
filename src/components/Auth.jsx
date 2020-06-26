import React, { useState } from 'react';
import 'firebase/firebase-auth';
import { useFirebaseApp, useUser } from 'reactfire';

const Auth = () => {

   const firebase = useFirebaseApp();
   const user = useUser();

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [error, setError] = useState("")

   //Creating user in Firebase Auth service
   const hanldeSignin = async (e) => {
      setError("")
      e.preventDefault()
      await firebase.auth().createUserWithEmailAndPassword(email, password);
   }

   const hanldeLogin = async (e) => {
      setError("")
      e.preventDefault();
      try {
         const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (err) {
         console.log("catch", err)
         setError(err.message)
      }
   }
   const hanldeLogout = async () => {
      setError("");
      await firebase.auth().signOut();
   }

   return (
      <div>
         {
            !user &&
            <form>
               <div>
                  <label htmlFor="email">Email: </label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <label htmlFor="password">Password: </label>
                  <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
               </div>
               <div>
                  <small>{error}</small>
               </div>
               <div>
                  <button onClick={hanldeLogin}>Login</button>
                  <button onClick={hanldeSignin}>Signin</button>
               </div>
            </form>
         }
         {user &&
            <button onClick={hanldeLogout}>Logout</button>}
      </div>
   )
}

export default Auth;