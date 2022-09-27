import React from "react";
import "../layout/destaque.css"

const Destaque = ({item}) =>{
   console.log(item)

    let firstDate = new Date(item.first_air_date)
    let genres = []
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }

    return(
        <section className="destaque" style={{
            backgroundSize:'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="destaque-vertical">
                <div className="destaque-horizontal">
                    <div className="destaque-nome">
                        {item.original_name}
                    </div>
                    <div className="destaque-info">
                        <div className="destaque-pontos">               {item.vote_average}
                        </div>
                        <div className="destaque-ano">
                            {firstDate.getFullYear()}
                        </div>
                        <div className="destaque-temporada">
                           {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}
                        </div>
                    </div>
                    <div className="destaque-descricao">
                        {item.overview}
                    </div>
                    <div className="destaque-button">
                        <a href={`/watch/${item.id}`} className="destaque-white">Assistir</a>
                        <a href={`/list/add/${item.id}`} className="destaque-black">Minha lista</a>

                    </div>
                    <div className="destaque-genero">
                        <strong>Gêneros:</strong>{genres.join(', ')}
                    </div>

                </div>

            </div>
            
        </section>
    )
}

export default Destaque



