const API_KEY = '02a6236bc1b43363643a68ddaf07cc19';
const API_BASE = 'https://api.themoviedb.org/3';

/*
-originais da netflix
-recomendados(traiding)
-em alta(top rated)
-comedia
-documentarios
-ação
-terror 
-romance
*/
//===================================
//OUTRA FORMA
/*
const baseFetch = async (endPoint) =>{
    const req = await fetch(`${API_BASE}${endPoint}`)
    const json = await req.json()
    return json

}
}

*/
//===================================

const baseFetch  = async (endpoint) =>{
    return (await fetch(`${API_BASE}${endpoint}`)).json();
}


export default{
    getHomeList: async () =>{
        return[
            {
                slug:'originals',
                title:'Originais do Netflix',
                itens: await baseFetch(`/discover/tv?witch_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title:'Recomendados para você',
                itens: await baseFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug:'toprated',
                title:'Em alta',
                itens: await baseFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'action',
                title:'Ação',
                itens:await baseFetch(`/discover/movie?witch_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'comedy',
                title:'Comédia',
                itens:await baseFetch(`/discover/movie?witch_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'horror',
                title:'Terror',
                itens:await baseFetch(`/discover/movie?witch_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'romace',
                title:'Romance',
                itens:await baseFetch(`/discover/movie?witch_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'documetary',
                title:'Documentários',
                itens:await baseFetch(`/discover/movie?witch_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },

    getMovieInfo: async(movieId,type) =>{
        let info = {}

        if(movieId){
            switch(type){
                case 'movie': 
                info = await baseFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                
                break;
                case 'tv':
                    info = await baseFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    
                break;
            }
        }

        return info

    }

}
    