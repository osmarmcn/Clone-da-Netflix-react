import React, {useEffect,useState}from 'react'

import Tmdb from './Tmdb'
import Movies from './componentes/movies'
import Destaque from './componentes/destaque'

import "./App.css"




function App() {

  const [listMovies, setListMovies] = useState([])
  const [destaqueData, setDestaqueData] = useState(null)

  useEffect(() =>{
    const loadAll = async ()=>{
      let list = await Tmdb.getHomeList()
      console.log(list)
      setListMovies(list)

      //=========================
      let originais = list.filter(i=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random()*(originais[0].itens.results.length -1))
      let chosen = originais[0].itens.results[randomChosen]
      //console.log(chosen)

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      //console.log(chosenInfo)
      setDestaqueData(chosenInfo)

    }
    loadAll()

  },[])

  return (
    <div className="page">
      {destaqueData &&
        <Destaque item={destaqueData}/>
      }


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
