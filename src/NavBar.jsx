function NavBar(){
    return (
        <>
        <nav className="text-orange-50 w-full h-15 bg-emerald-700">
           <ul className="flex gap-5 justify-center py-3 px-2 md:px-32">
           <li>
            Tous nos meubles
            </li> 
            <p>|</p>
            <li>
            Nouveautés
            </li>
            <p>|</p>
            <li>
            Tables
            </li> 
            <p>|</p> 
            <li>
            Chaises
            </li>
           </ul>
        </nav>
        </>

    )
}
export default NavBar