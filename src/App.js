import React from 'react';
import './App.css';
import './scss/custom.scss';
import SearchActors from './components/search-actors';
import DateInput from './shared2/forms/inputs/DateInput';

function App() {
  const handleChange = () => {
    console.log("change");
  }
  return (
    <div className="App">
      <DateInput onChange={handleChange} />
      <SearchActors />
    </div>
  );
}

export default App;