import React from 'react';
import './App.css';
import './scss/custom.scss';
import SearchActors from './components/search-actors';
import Favourites from './components/favourites';
import Auth from './components/Auth';
import DataBase from './components/database';

import { useUser } from 'reactfire';

function App() {
  const user = useUser();
  return (
    <div className="App">
      <div>
        {user && <h5>User: {user.email}</h5>}
        <Auth />
      </div>
      <SearchActors />
      <Favourites />
      <DataBase />
    </div>
  );
}

export default App;