async function getMovies(genre){
    const response = await fetch(`http://localhost:3000/api/${genre}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    // console.log(data[0]._id)
    return data
  
}

export default getMovies