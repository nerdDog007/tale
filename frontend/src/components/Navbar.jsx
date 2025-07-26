import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const navList = ["Home", "News", "Business", "Entertainment", "Health", "Technology"];
    const location = useLocation();
    const currentPath = location.pathname.slice(1).toLowerCase() || 'home';

    return (
        <div className='w-screen border-y-2 border-black/20 py-4'>
            <nav className='hidden md:flex w-[80vw] mx-auto '>
                <ul className='flex items-center w-full md:justify-between lg:justify-center lg:gap-16 text-xl font-[500]'>
                    {
                        navList.map((item, index) => (
                            <NavbarItem
                                key={index}
                                route={item}
                                name={item}
                                isActive={currentPath === item.toLowerCase()}
                            />
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
}

function NavbarItem({ route, name, isActive }) {
    return (
        <Link
            to={`/${route.toLowerCase()}`}
            className={`hover:text-black ${isActive ? 'border-b-4 border-black' : ''}`}
        >
            {name}
        </Link>
    );
}

export default Navbar;
