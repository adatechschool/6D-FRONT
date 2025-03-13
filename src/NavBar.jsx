function NavBar(){
    return (
        <>
        <nav className="text-orange-50 w-full h-15 bg-emerald-700">
            <ul className="flex gap-5 justify-center py-3 px-2 md:px-32">
                <button className="bg-transparent border-none hover:scale-90 cursor-grab text-orange-50 focus:outline-none">
                    Tous nos meubles
                </button>
                <span className="text-orange-50">|</span>
                <button className="bg-transparent border-none hover:scale-90 cursor-grab text-orange-50 focus:outline-none">
                    Nouveautés
                </button>
                <span className="text-orange-50">|</span>
                <button className="bg-transparent border-none hover:scale-90 cursor-grab text-orange-50 focus:outline-none">
                    Tables
                </button>
                <span className="text-orange-50">|</span>
                <button className="bg-transparent border-none hover:scale-90 cursor-grab text-orange-50 focus:outline-none">
                    Chaises
                </button>
            </ul>
        </nav>
        </>

    )
}
export default NavBar