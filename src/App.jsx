import React, { useState, useEffect } from 'react';
// import des routes de react router pour faire plusieurs pages
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import du composant header dans la l'app.jsx qui est le point de départ de l'app
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
    // <> div root, syntaxe jsx de react
    <>
    {/* div principal de l'appli */}
    <Router>
      <div className='w-full h-full absolute bg-orange-50'>
        {/* import du composant header */}
        <Header setSearchResults={setSearchResults} />
        <NavBar/>
        <main>
          {/* Fonctionnement du react router dom pour faire plusieurs pages */}
            <Routes>
                <Route path="/" element={<HomePageCard searchResults={searchResults} />} />
                <Route path="/details/:id" element={<DetailPage />} />
            </Routes>
        </main>
      </div>
    </Router>
    </>
  )
}

export default App;
