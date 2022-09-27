import React, {useEffect,useState}from 'react'

import Tmdb from './Tmdb'
import Movies from './componentes/movies'

import "./App.css"




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
    <div className="page">
      <section className="list">
        {listMovies.map((item,key)=>(
          <Movies key={key} title={item.title} itens={item.itens}/>

        ))}
      </section>
      destaque
      rodapé
      
    </div>
  )
}

export default App
