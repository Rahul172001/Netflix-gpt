import { useSelector } from "react-redux"
import MovieCards from "./MovieCards"

const MovieList = ()=>{
    const nowPlayingMovies = useSelector((store)=>store?.movie?.newMovie)
    const popularMovies = useSelector((store)=>store?.movie?.popularMovie)
    const topRatedMovies = useSelector((store)=>store?.movie?.topRatedMovie)
    const upComingMovies = useSelector((store)=>store?.movie?.upComingMovie)
    console.log("top",topRatedMovies)
    return(
        <div className="bg-black">
            <div className="relative -my-16 z-40 overflow-x-hidden">
        <div>
            <h1 className="ml-[15px] font-bold text-xl text-white">Now Playing</h1>
            <div className="flex m-2 overflow-x-scroll space-x-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">{nowPlayingMovies?.map((data)=><MovieCards key={data?.id} movies={data} />)}</div>
        </div>
        <div>
            <h1 className="ml-[15px] font-bold text-xl text-white">Popular Movies</h1>
            <div className="flex m-2 overflow-x-scroll space-x-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">{popularMovies?.map((data)=><MovieCards key={data?.id} movies={data} />)}</div>
        </div>
        <div>
            <h1 className="ml-[15px] font-bold text-xl text-white">Top Rated Movies</h1>
            <div className="flex m-2 overflow-x-scroll space-x-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">{topRatedMovies?.map((data)=><MovieCards key={data?.id} movies={data} />)}</div>
        </div>
        <div>
            <h1 className="ml-[15px] font-bold text-xl text-white">Upcoming Movies</h1>
            <div className="flex m-2 overflow-x-scroll space-x-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">{upComingMovies?.map((data)=><MovieCards key={data?.id} movies={data} />)}</div>
        </div>
        </div>
        </div>
    )
}

export default MovieList