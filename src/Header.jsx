import React, { useState } from 'react';
import logo from './assets/ecology_2384273.svg';
import user from './assets/user_456283.svg';
import basket from './assets/shopping-basket_1002795.svg';
import like from './assets/like_2794617.svg';
import './App.css';
import tableauObjets from './tableauObjets.json'; // Assurez-vous que le chemin est correct

function Header({ setSearchResults }) {
    const [query, setQuery] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        const filteredResults = tableauObjets.filter(item =>
            item.nom_de_l_annonce.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    // Fonction pour filtrer par catégorie
    const filterByCategory = (category) => {
        let filteredResults;
        
        if (category === 'all') {
            // Afficher tous les meubles
            filteredResults = tableauObjets;
        } else if (category === 'new') {
            // Filtrer les nouveautés (les 3 derniers)
            filteredResults = [...tableauObjets].slice(-3);
        } else if (category === 'table') {
            // Filtrer par la catégorie Table
            filteredResults = tableauObjets.filter(item =>
                item.type_de_meuble && item.type_de_meuble.toLowerCase().includes('table')
            );
        } else if (category === 'chaise') {
            // Filtrer les chaises
            filteredResults = tableauObjets.filter(item =>
                item.type_de_meuble && item.type_de_meuble.toLowerCase().includes('chaise')
            );
        } else if (category === 'canape') {
            // Filtrer les canapés
            filteredResults = tableauObjets.filter(item =>
                item.type_de_meuble && item.type_de_meuble.toLowerCase().includes('canapé')
            );
        }
        
        setSearchResults(filteredResults);
    };

    return (
        <header className="flex flex-col items-center text-emerald-700 py-6 px-2 md:px-32 bg-orange-50 drop-shadow-md">
            <div className="flex justify-between items-center w-full">
            <a href="/" className='hover:scale-90 transition-all cursor-grab'>
                    <img src={logo} alt="logo" className="w-15" />
                </a>
                <p className='font-primary font-bold text-2xl ml-4'>Ancien meuble pour<br/>une nouvelle vie</p>
                <div className='relative hidden md:flex items-center justify-center gap-3'>
                    <i className='bx bx-search absolute left-3 bottom-4 text-2xl text-gray-500'></i>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder='Rechercher...'
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className='py-2 pl-10 rounded-xl border-2 border-green-emerald-700 focus:bg-teal-50 focus:outline-teal-50'
                        />
                    </form>
                </div>
                <div className="flex items-center justify-center gap-6">
                    <button className='hover:scale-90 transition-all cursor-grab text-black'>
                        <img src={user} alt="user" className="w-10" />
                        <p className='text-sm flex'>Connexion</p>
                    </button>
                    <button className='hover:scale-90 transition-all cursor-grab text-black'>
                        <img src={basket} alt="panier" className="w-10" />
                        <p className='text-sm'>Panier(0)</p>
                    </button>
                    <button className='hover:scale-90 transition-all cursor-grab text-black'>
                        <img src={like} alt="favoris" className="w-10" />
                        <p className='text-sm'>Favoris(0)</p>
                    </button>
                </div>
            </div>
            {/* Inclure la NavBar ici avec le style approprié */}
            <nav className="mt-4 w-full bg-emerald-700 text-orange-50">
                <ul className="flex justify-center space-x-4 py-2">
                    <li><a href="#" onClick={(e) => { e.preventDefault(); filterByCategory('all'); }} className="hover:text-emerald-300">Tous les meubles</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); filterByCategory('new'); }}className="hover:text-emerald-300">Nouveautés</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); filterByCategory('table'); }} className="hover:text-emerald-300">Tables</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); filterByCategory('chaise'); }} className="hover:text-emerald-300">Chaises</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
