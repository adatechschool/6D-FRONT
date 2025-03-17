import React from 'react';
import like from './assets/like_2794617.svg';
import fauteuil from './assets/fauteuil.webp';
import { Link } from 'react-router-dom';

// Fonction utilitaire pour tronquer le texte à 22 caractères max
function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
}

function Annonce({ annonce }) {
    const truncatedTitle = truncateText(annonce.nom_de_l_annonce, 18);

    return (
        <div className='grid grid-cols-4 grid-rows-1 gap-4 px-4 py-4'>
            <Link to="/details" className='bg-white w-70 h-92 rounded-2xl text-emerald-700 font-primary shadow-md'>
                <img src={fauteuil} alt="fauteuil" className="w-full rounded-t-2xl" />
                <div className='p-5'>
                    <div className='flex justify-between items-center mb-4'>
                        <p className='font-bold text-xl'>{truncatedTitle}</p>
                        <button className='hover:scale-90 transition-all'>
                            <img src={like} alt="favoris" className="w-5 hover:scale-90 cursor-grab" />
                        </button>
                    </div>
                    <div className='flex justify-between items-center mb-4'>
                        <p className='text-emerald-700'>{annonce.type_de_meuble}</p>
                        <p className='text-emerald-700'>{annonce.dimensions}</p>
                    </div>
                    <div className='flex justify-between items-center mb-4'>
                        <p className='font-semibold text-emerald-700'>{annonce.prix} €</p>
                        <button className='hover:scale-90 transition-all cursor-grab text-white w-20 h-7 bg-emerald-700 rounded-2xl flex items-center justify-center'>
                            Acheter
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
}

function HomePageCard({ searchResults = [] }) {
    return (
        <main>
            <div className='grid grid-cols-5 grid-rows-2 gap-4 px-4 py-4'>
                {searchResults.map((annonce, index) => (
                    <Annonce key={index} annonce={annonce} />
                ))}
            </div>
        </main>
    );
}

export default HomePageCard;
