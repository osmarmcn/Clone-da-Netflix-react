import React, {useEffect,useState}from 'react'

import Tmdb from './Tmdb'
import Movies from './componentes/movies'
import Destaque from './componentes/destaque'
import Header from './componentes/header'

import "./App.css"




function App() {

  const [listMovies, setListMovies] = useState([])
  const [destaqueData, setDestaqueData] = useState(null)
  const [blackHeader,setBlackHeader] = useState (true)

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

  useEffect(() =>{
    const scrollListener = () =>{
      if(scrollY > 10){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }

    }
    addEventListener('scroll',scrollListener)
    return () =>{
      removeEventListener('scroll', scrollListener)
    }

  },[])

  return (
    <div className="page">
      <Header black={blackHeader}/>
      {destaqueData &&
        <Destaque item={destaqueData}/>
      }


      <section className="list">
        {listMovies.map((item,key)=>(
          <Movies key={key} title={item.title} itens={item.itens}/>

        ))}
      </section>
      <footer>
        
      </footer>
     
      {listMovies.length <=0 && 

        <div className="loading">
            <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading"></img>
        </div>
      }

    </div>
  )
}

export default App
