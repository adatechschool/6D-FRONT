import logo from './assets/ecology_2384273.svg';
import user from './assets/user_456283.svg';
import basket from './assets/shopping-basket_1002795.svg';
import like from './assets/like_2794617.svg';
import './App.css';
import NavBar from './NavBar';

function Header () {
    return (
        <>
        <header className="flex justify-between item-center text-emerald-700 py-6 px-2 md:px-32 bg-orange-50 drop-shadow-md">
            <button className='hover:scale-90 transition-all'>
                    <img src={logo} alt="logo" className="w-15" />
            </button>
            <p className='font-primary font-bold text-2xl ml-4'>Ancien meuble pour<br/>une nouvelle vie</p>
            <div className='relative hidden md:flex item-center justify-center gap-3'>
                <i className='bx bx-search absolute left-3 bottom-4 text-2xl text-gray-500'></i>
                <input type="text" placeholder='Rechercher...'
                className='py-2 pl-10 rounded-xl border-2 border-green-emerald-700 focus:bg-teal-50 focus:outline-teal-50'/>
            </div>
            <div className="flex item-center justify-center gap-6">
                <button className='hover:scale-90 transition-all text-black'>
                    <img src={user} alt="user" className="w-10" />
                    <p className='text-sm flex'>Connexion</p>
                </button>
                <button className='hover:scale-90 transition-all text-black'>
                    <img src={basket} alt="panier" className="w-10" />
                    <p className='text-sm'>Panier(0)</p>
                </button>
                <button className='hover:scale-90 transition-all text-black'>
                    <img src={like} alt="favoris" className="w-10" />
                    <p className='text-sm'>Favoris(0)</p>
                </button>
            </div>
            <br />
            

        </header>
        </>
    )
}

export default Header