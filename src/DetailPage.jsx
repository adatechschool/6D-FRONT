import React, { useState, useEffect } from 'react';
import like from './assets/like_2794617.svg';
import { useParams } from 'react-router-dom';



function DetailPage() {
    const { id } = useParams();
    const [donnees, setDonnees] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:8000/products/${id}`)
        .then(response => response.json())
        .then(data => {
            setDonnees(data);
            console.log('Données chargées:', data);
        })
        .catch(error => console.error("C'est nous, Erreur lors du chargement du JSON:", error));
    }, []);

    const [picture, setPicture] = useState({});
    
    useEffect(() => {
        fetch(`http://localhost:8000/pictures/first/${id}`)
        .then(response => response.json())
        .then(data => {
            setPicture(data);
            console.log('Picture Données chargées:', data);
        })
        .catch(error => console.error("C'est nous, Erreur lors du chargement du JSON:", error));
    }, []);
    console.log(picture.url);

    return (
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-6 space-y-6 md:space-y-0 mb-8 px-4 md:px-6">
            {/* Photo Card */}
            <div className="bg-white rounded-2xl shadow-md w-full md:w-1/2 p-4">
                <h3 className="text-xl font-bold text-emerald-700 mb-4 font-primary"></h3>
                <img src={picture.url} alt="photo meuble" className="w-full h-64 object-contain rounded-lg mb-6" />
                <div className="flex justify-between">
                    {/* Navigation arrows */}
                     <button className="bg-gray-200 hover:bghttps://github.com/adatechschool/6D-FRONT/pull/27/conflict?name=src%252FDetailPage.jsx&base_oid=fae473bf9d725479603ecebaeb235d4a081e981f&head_oid=500080b6d71ad0872355dd08594f9641508522c7-gray-300 text-gray-500 hover:text-gray-700 rounded-full w-10 h-10 flex items-center justify-center transition-all">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-500 hover:text-gray-700 rounded-full w-10 h-10 flex items-center justify-center transition-all">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>

            {/* Details Card */}
            <div className="bg-white rounded-2xl shadow-md w-full md:w-1/2 p-6">
                <div className="flex justify-between items-center mb-4">

                    <h2 className="text-2xl font-bold text-emerald-700 font-primary">{donnees.name}</h2>
                    
                    <button className="hover:scale-90 transition-all">
                        <img src={like} alt="favoris" className="w-6 hover:scale-90 cursor-pointer" />
                    </button>
                </div>
                <p className="text-lg font-semibold text-emerald-700 mb-2 font-primary">{donnees.price}</p>
                <hr className="border-emerald-700 mb-4" />
                <ul className="text-emerald-700 mb-4 space-y-2 font-primary">
                    <li><strong>Type de meuble : </strong>{donnees.type}</li>
                    <li><strong>Dimensions : </strong>{donnees.dimensions}</li>
                    <li><strong>Couleurs : </strong>{donnees.color}</li>
                    <li><strong>Matières : </strong>{donnees.material}</li>
                    <li><strong>État : </strong>{donnees.product_condition}</li>
                    <li>{donnees.description}</li>
                </ul>
                <button className="bg-emerald-700 text-white font-primary px-6 py-2 rounded-full hover:scale-90">
                    Commander
                </button>
            </div>
        </div>
    );
}

export default DetailPage;