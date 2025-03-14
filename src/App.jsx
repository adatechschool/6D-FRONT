
import React from 'react';
// import des routes de react router pour faire plusieurs pages
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import du composant header dans la l'app.jsx qui est le point de départ de l'app
import Header from './Header';
import NavBar from './NavBar';
import HomePageCard from './HomePageCard';
import DetailPage from './DetailPage';
function App() {

  return (
    // <> div root, syntaxe jsx de react
    <>
    {/* div principal de l'appli */}
    <Router>
      <div className='w-full h-full absolute bg-orange-50'>
        {/* import du composant header */}
        <Header/>
        <NavBar/>
        <main>
          {/* Fonctionnement du react router dom pour faire plusieurs pages */}
            <Routes>
                <Route path="/" element={<HomePageCard/>}/>
                <Route path="/details" element={<DetailPage/>}/>
            </Routes>
        </main>
      </div>
    </Router>
    </>
  )
}
export default App
