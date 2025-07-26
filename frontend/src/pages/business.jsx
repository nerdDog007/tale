import HeaderNav from '../components/HeaderNav'
import { useSelector } from 'react-redux'
import { GeneralNews } from './Home'
import { useEffect } from 'react'
import getNews from '../utils/geNews.jsx'
import { useDispatch } from 'react-redux'
import { setBusiness } from '../redux/slices/newsSlice.jsx'
function Business() {
    const dispatch = useDispatch()
    const { business } = useSelector((state) => state.news)
    useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await getNews('business')
              const dataa= data
              dispatch(setBusiness(dataa))
          } catch (err) {
              console.error("Error fetching business news:", err)
          }
      }
      fetchData()
  }, [dispatch])
  return (
    <>
    <HeaderNav />
    <GeneralNews newsType={"Business"} news={business} />
    </>
  )
}

export default Business