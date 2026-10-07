import { useSelector } from "react-redux"
import MovieCards from "./MovieCards"

const MovieList = ()=>{
    const nowPlayingMovies = useSelector((store)=>store?.movie?.newMovie)
    console.log("movies",nowPlayingMovies)
    return(
        <div>
            <h1>Now Playing</h1>
            <div className="flex m-2 overflow-x-scroll">{nowPlayingMovies?.map((data)=><MovieCards key={data?.id} movies={data} />)}</div>
        </div>
    )
}

export default MovieList