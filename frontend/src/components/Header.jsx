import { FaBarsStaggered } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Button from './Button';
import { useDispatch,useSelector } from "react-redux";
import { setModal } from "../redux/slices/newsSlice.jsx";


function Header() {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.news);
  return (
    <header className='flex items-center justify-between px-4 py-4'>
        <div className={`${modal === true ? 'opacity-0' : 'block'} flex text-[.8rem] sm:text-xl md:text-2xl gap-1`}
        onClick={() => dispatch(setModal(true))}>
            <FaBarsStaggered/>
            <CiSearch/>
        </div>
        <h1 className='flex text-white text-[.8rem] sm:text-xl md:text-2xl gap-2'>
            <span className='bg-black p-2'>T</span>
            <span className='bg-black p-2' >A</span>
            <span className='bg-black p-2'>L</span>
            <span className='bg-black p-2'>E</span>
        </h1>
        <div className='flex gap-4 md:gap-8 text-[.6rem] md:text-xl'>
        <Button btnName={"Register"} className={"bg-black text-white px-4 py-2"}/>
        <Button btnName={"Sign In"} className={""}/>
        </div>
    </header>
  )
}

export default Header