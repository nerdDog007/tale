import { useEffect } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector, } from 'react-redux'
import { setGeneral, setBusiness, setEntertainment, setHealth, setTechnology } from '../redux/slices/newsSlice.jsx'
import getNews from '../utils/geNews.jsx'
import { Link } from 'react-router-dom'
import HeaderNav from '../components/HeaderNav'

function Home() {
  const dispatch = useDispatch()
  const arr = ['general', 'business', 'entertainment', 'health', 'technology']
  const {general, business, entertainment, health, technology} = useSelector((state) => state.news)
  useEffect(() => {
    const fetchData = async () => {
        try {
            arr.forEach(async (item) => {
              const data = await getNews(item)
              if (item === 'general') {
                dispatch(setGeneral(data))
              }
              if (item === 'business') {
                dispatch(setBusiness(data))
              }
              if (item === 'entertainment') {
                dispatch(setEntertainment(data))
              }
              if (item === 'health') {
                dispatch(setHealth(data))
              }
              if (item === 'technology') {
                dispatch(setTechnology(data))
              }
            })
        } catch (err) {
            console.error("Error fetching general news:", err)
        }
    }
    fetchData()
}, [dispatch])
  return (
    <>
        <HeaderNav />
        <GeneralNews newsType={"General"} news={general}/>
        <GeneralNews newsType={"Business"} news={business}/>
        <GeneralNews newsType={"Entertainment"} news={entertainment}/>
        <GeneralNews newsType={"Health"} news={health}/>
        <GeneralNews newsType={"Technology"} news={technology}/>
    </>
  )
}
function GeneralNews({newsType,news}){
  if (!news || news.length === 0) {
    return <div className='text-center text-gray-500'>Loading ...</div>
  }
  return (
    <section className='p-4 md:w-[80vw] lg:w-[70vw] w-screen mx-auto'>
      <h2 className='text-2xl font-bold mb-4'>{newsType} News</h2>
      <ul className='flex w-full gap-4 flex-wrap'>
        {news.map((item, index) => (
          <Link key={index} to={`/${item._id}`} className='w-[100%] md:w-[40%] lg:w-[30%] p-2  rounded-lg shadow-md'>
            <img src={item.image} alt={item.title} className='w-full h-40 object-cover mb-2 rounded' />
            <h3 className='text-xl font-semibold'>{item.title}</h3>
            <p className='text-gray-600'>{item.description?.slice(0, 100)}...</p>
          </Link>
        ))}
      </ul>
    </section>
  )
}
export {GeneralNews}
export default Home