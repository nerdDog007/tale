import { useSelector } from 'react-redux'
import { GeneralNews } from './Home'
import { useEffect } from 'react'
import getNews from '../utils/geNews.jsx'
import { useDispatch } from 'react-redux'
import { setHealth } from '../redux/slices/newsSlice.jsx'
import HeaderNav from '../components/HeaderNav'

function Health() {
    const dispatch = useDispatch()
    const { health } = useSelector((state) => state.news)
    useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await getNews('health')
              dispatch(setHealth(data))
          } catch (err) {
              console.error("Error fetching health news:", err)
          }
      }
      fetchData()
  }, [dispatch])
  return (
    <>
    <HeaderNav />
    <GeneralNews newsType={"Health"} news={health} />
    </>
  )}

export default Health