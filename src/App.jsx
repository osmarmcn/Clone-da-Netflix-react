import React, {useEffect,useState}from 'react'
import Tmdb from './Tmdb'



function App() {

  const [listMovies, setListMovies] = useState([])

  useEffect(() =>{
    const loadAll = async ()=>{
      let list = await Tmdb.getHomeList()
      console.log(list)
      setListMovies(list)
    }
    loadAll()

  },[])

  return (
    <div>
      <h1>ola</h1>
      
    </div>
  )
}

export default App
