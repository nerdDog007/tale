import { Link } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { setModal } from '../redux/slices/newsSlice.jsx';

function Sidenav() {
    const dispatch = useDispatch();
    const navList = ["Home", "News", "Business", "Entertainment", "Health", "Technology"];
    const { modal } = useSelector((state) => state.news);
    console.log(modal);
  return (
    <div className='relative'>
    <nav className={`${modal ===false ? 'hidden' : 'block'}  fixed w-[50vw] sm:w-[30vw] md:w-[20vw] lg:w-[15vw] h-screen shadow-2xl p-2 bg-gray-100`}>
        <input type="search" name="" id="" className='w-full p-1 border-2 outline-0 'placeholder='Search'/>
        <ul className='flex flex-col gap-4 p-4'>
            {
                navList.map((item, index) => (
                    <NavbarItem
                    key={index}
                    route={item}
                    name={item}
                    isActive={false}
                    />
                ))
            }
        </ul>
        <p className='absolute top-[-3rem] text-2xl cursor-pointer' onClick={()=>dispatch(setModal(false))}>X</p>
    </nav>
</div>
  )
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

export default Sidenav