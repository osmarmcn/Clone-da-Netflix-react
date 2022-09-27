import React from "react";
import "../layout/movies.css"

function Movies({title, itens}){
    return(
        <div className="movies-geral">
            <h2>{title}</h2>
            <div className="movies-listArea">
                <div className="movies-list">
                    {itens.results.length > 0 && itens.results.map((item,key)=>(
                    <div key={key} className="movies-itens">
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                    </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default Movies
