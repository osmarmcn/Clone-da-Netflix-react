import React from "react";
import "../layout/movies.css"

function Movies({title, itens}){
    return(
        <div>
            <h2>{title}</h2>
            <div className="movies-listArea">
                {itens.results.length > 0 && itens.results.map((item,key)=>(
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                    
                    
                ))}
            </div>
        </div>
    )
}

export default Movies
