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
    fetch('http://localhost:8000/ads')
          .then(response => response.json())
          .then(data => {
              setSearchResults(data);
              console.log('Données chargées:', data);
          })
          .catch(error => console.error("C'est nous, Erreur lors du chargement du JSON:", error));
    }, []);

  return (
    <Router>
      <div className='w-full h-full absolute bg-orange-50'>
        <Header setSearchResults={setSearchResults} />
        <Routes>
          <Route path="/" element={<HomePageCard searchResults={searchResults} />} />
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
