import { useSelector } from 'react-redux'
import { GeneralNews } from './Home.jsx'
import { useEffect } from 'react'
import getNews from '../utils/geNews.jsx/'
import { useDispatch } from 'react-redux'
import { setTechnology } from '../redux/slices/newsSlice.jsx'
import HeaderNav from '../components/HeaderNav.jsx'

function Technology() {
    const dispatch = useDispatch()
    const { technology } = useSelector((state) => state.news)
    useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await getNews('technology')
              dispatch(setTechnology(data))
          } catch (err) {
              console.error("Error fetching health news:", err)
          }
      }
      fetchData()
  }, [dispatch])
  return (
    <>
    <HeaderNav />
    <GeneralNews newsType={"Technology"} news={technology} />
    </>
  )}

export default Technology