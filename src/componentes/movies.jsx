import React, { useState } from "react";
import "../layout/movies.css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Movies({title, itens}){

    const[scrollX,setScrollX] = useState(0)

    const handleLeftArrow = () =>{
        let x = scrollX + Math.round(innerWidth/2)
        if(x > 0){
            x=0
        }
        setScrollX(x)

    }

    const handleRigthArrow = () =>{
        let x = scrollX - Math.round(innerWidth / 2);
        let listW = itens.results.length * 150;
        if(window.innerWidth - listW > x){
            x = (window.innerWidth - listW) - 30;
        }
        setScrollX(x);

        
    }


    return(
        <div className="movies-geral">
            <h2 className="movies-h2">{title}</h2>
            <div className="movies-left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize:50}}/>
            </div>
            <div className="movies-rigth" onClick={handleRigthArrow}>
                <NavigateNextIcon style={{fontSize:50}}/>
            </div>
            <div className="movies-listArea">
                <div className="movies-list" style={{
                    marginLeft: scrollX,
                    width: itens.results.length *150
                }}

                
                
                
                >
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
