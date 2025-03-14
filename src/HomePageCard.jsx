import like from './assets/like_2794617.svg';
import fauteuil from './assets/fauteuil.webp';
import { Link } from 'react-router-dom';

function HomePageCard(){

    return (
        <>
            <div className='grid grid-cols-4 grid-rows-2 gap-4 px-4 py-4'>
                {/* balise link poutr spéficier la partie qui est un lien et renvoie vers une autre page */}
                <Link to="/details" className='bg-white w-70 h-92 rounded-2xl text-emerald-700 font-primary shadow-md'>
                    <img src={fauteuil} alt="fauteuil" className="w-full rounded-t-2xl" />
                    <div className='p-5'>
                        <div className='flex justify-between items-center mb-4'>
                            <p className='font-bold text-xl'>Nom de l'annonce</p>
                            <button className='hover:scale-90 transition-all'>
                                <img src={like} alt="favoris" className="w-5 hover:scale-90 cursor-grab" />
                            </button>
                        </div>
                        <div className='flex justify-between items-center mb-4'>
                            <p className=' text-emerald-700'>Type de meuble</p>
                            <p className=' text-emerald-700'>Dimensions</p>
                        </div>
                        <div className='flex justify-between items-center mb-4'>
                            <p className='font-semibold text-emerald-700'>Prix</p>
                            <button className='hover:scale-90 transition-all cursor-grab text-white w-20 h-7 bg-emerald-700 rounded-2xl flex items-center justify-center'>
                                Acheter
                            </button>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    )
}
export default HomePageCard