import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import HeaderNav from "../components/HeaderNav"
function Category() {
  const {id} = useParams()
  const [data, setData] = useState(null)
  // https://tale-n83d.onrender.com
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/api/id/${id}`)
      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, [id])
  return (
    <div>
      <HeaderNav />
      <div className="w-[80vw] p-4 mx-auto mt-10 flex flex-col gap-4 items-center">
        <div className="text-xl font-semibold">
        <h1 className="text-3xl font-bold">{data?.title}</h1>
        <p>Category: {data?.category}</p>
        <p>Published on: {new Date(data?.publishedAt).toLocaleDateString()}</p>
        </div>
        <img src={data?.image} alt={data?.title} />
        <p className="text-xl">{data?.description}</p>
      </div>
    </div>
  )
}

export default Category