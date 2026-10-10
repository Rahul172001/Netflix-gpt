import { useSelector } from "react-redux"
import MovieTitle from "./MainMovie/MovieTitle"
import MovieVideo from "./MainMovie/MovieVideo"
import useFechData from "../customHooks/useFetchData"
import MovieList from "./SecondaryContainer/MovieList"
import { addNewMovies,addPopularMovies,addTopRatedMovies, addUpComingMovies } from "../stateUtils/MovieSlice"

const Home = ()=>{
    const movie = useSelector((store)=>store?.movie?.newMovie)
    
    useFechData("https://api.themoviedb.org/3/movie/now_playing",addNewMovies)
    useFechData("https://api.themoviedb.org/3/discover/movie",addPopularMovies)
    useFechData("https://api.themoviedb.org/3/movie/top_rated",addTopRatedMovies)
    useFechData("https://api.themoviedb.org/3/movie/upcoming",addUpComingMovies)
    if(movie === null) return

    return(
        <>
        <MovieTitle />
        <MovieVideo />
        <MovieList />
        </>
    )
}
export default Home