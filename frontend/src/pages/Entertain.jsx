import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { useSelector } from 'react-redux'
import { GeneralNews } from './Home'
import { useEffect } from 'react'
import getNews from '../utils/geNews.jsx'
import { useDispatch } from 'react-redux'
import { setEntertainment } from '../redux/slices/newsSlice.jsx'
import HeaderNav from "../components/HeaderNav"
function Entertain() {
    const dispatch = useDispatch()
    useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await getNews('entertainment')
              dispatch(setEntertainment(data))
          } catch (err) {
              console.error("Error fetching entertainment news:", err)
          }
      }
      fetchData()
  }, [dispatch])
  return (
    <div>
        <HeaderNav />
        <GeneralNews newsType={"Entertainment"} news={useSelector((state) => state.news.entertainment)} />
    </div>
  )
}

export default Entertain