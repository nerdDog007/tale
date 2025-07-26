import HeaderNav from '../components/HeaderNav'
import { useSelector,useDispatch } from 'react-redux'
import { GeneralNews } from './Home'
import { useEffect } from 'react'
import getNews from '../utils/geNews'
import { setGeneral } from '../redux/slices/newsSlice'
function News() {
    const dispatch = useDispatch()
    const { general } = useSelector((state) => state.news)
    useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await getNews('general')
              dispatch(setGeneral(data))
          } catch (err) {
              console.error("Error fetching general news:", err)
          }
      }
      fetchData()
  }, [dispatch])
  return (
    <>
    <HeaderNav />
    <section>
    <GeneralNews newsType={"General"} news={general} />
    </section>
    </>
  )
}

export default News