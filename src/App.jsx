
import React from 'react';
// import du composant header dans la l'app.jsx qui est le point de départ de l'app
import Header from './Header';
import NavBar from './NavBar';
import MainHomePage from './MainHomePage';


function App() {

  return (
    <div className='w-full h-full absolute bg-orange-50'>

    {/*import du composant header */}
      <Header/>
      <NavBar/>
      <MainHomePage/>
    </div>
  )
}
export default App
