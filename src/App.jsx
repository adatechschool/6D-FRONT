import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import HomePageCard from './HomePageCard';
import DetailPage from './DetailPage';
import tableauObjets from './tableauObjets.json'; // Assurez-vous que le chemin est correct

function App() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Charger les données de l'API locale au montage du composant
    setSearchResults(tableauObjets);
  }, []);

  return (
    <Router>
      <div className='w-full h-full absolute bg-orange-50'>
        <Header setSearchResults={setSearchResults} />
        <Routes>
          <Route path="/" element={<HomePageCard searchResults={searchResults} />} />
          <Route path="/details" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
