
import React from 'react';
// import du composant header dans la l'app.jsx qui est le point de départ de l'app
import Header from './Header';

function App() {

  return (
    // <> div root, syntaxe jsx de react
    <>
    {/* div principal de l'appli */}
    <div className='w-full h-full absolute bg-orange-50'>
    {/* import du composant header */}
      <Header/>
    </div>
    </>
  )
}
export default App
