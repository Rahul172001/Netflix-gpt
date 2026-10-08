import { useSelector } from "react-redux"
import MovieCards from "./MovieCards"

const MovieList = ()=>{
    const nowPlayingMovies = useSelector((store)=>store?.movie?.newMovie)
    const popularMovies = useSelector((store)=>store?.movie?.popularMovie)
    const topRatedMovies = useSelector((store)=>store?.movie?.topRatedMovie)
    console.log("top",topRatedMovies)
    return(
        <>
        <div>
            <h1 className="ml-[15px] font-bold text-xl">Now Playing</h1>
            <div className="flex m-2 overflow-x-scroll">{nowPlayingMovies?.map((data)=><MovieCards key={data?.id} movies={data} />)}</div>
        </div>
        <div>
            <h1 className="ml-[15px] font-bold text-xl">Popular Movies</h1>
            <div className="flex m-2 overflow-x-scroll">{popularMovies?.map((data)=><MovieCards key={data?.id} movies={data} />)}</div>
        </div>
        <div>
            <h1 className="ml-[15px] font-bold text-xl">Top Rated Movies</h1>
            <div className="flex m-2 overflow-x-scroll">{topRatedMovies?.map((data)=><MovieCards key={data?.id} movies={data} />)}</div>
        </div>
        </>
    )
}

export default MovieList