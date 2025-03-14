import React, { useState } from 'react';
import Header from './Header';
import MainHomePage from './MainHomePage';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className='w-full h-full absolute bg-orange-50'>
      <Header setSearchResults={setSearchResults} />
      <MainHomePage searchResults={searchResults} />
    </div>
  );
}

export default App;
