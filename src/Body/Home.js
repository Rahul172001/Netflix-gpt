import { useSelector } from "react-redux"
import MovieTitle from "./MainMovie/MovieTitle"
import MovieVideo from "./MainMovie/MovieVideo"
import useFechData from "../customHooks/useFetchData"
import MovieList from "./SecondaryContainer/MovieList"
import usePopularMovie from "../customHooks/usePopularMovie"
import useTopRatedMovie from "../customHooks/useTopRatedMovie"

const Home = ()=>{
    const movie = useSelector((store)=>store?.movie?.newMovie)

    useFechData("https://api.themoviedb.org/3/movie/now_playing")
    usePopularMovie("https://api.themoviedb.org/3/discover/movie")
    useTopRatedMovie("https://api.themoviedb.org/3/movie/top_rated")

    if(movie === null) return
    const mainMovie = movie[0]
    console.log(mainMovie)

    const {title,overview,id} = mainMovie

    return(
        <>
        <MovieTitle title={title} overview={overview} />
        <MovieVideo id={id} />
        <MovieList />
        </>
    )
}
export default Home