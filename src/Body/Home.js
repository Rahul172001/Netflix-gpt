import { useSelector } from "react-redux"
import MovieTitle from "./MainMovie/MovieTitle"
import MovieVideo from "./MainMovie/MovieVideo"
import useFechData from "../customHooks/useFetchData"
import MovieList from "./SecondaryContainer/MovieList"

const Home = ()=>{
    const movie = useSelector((store)=>store?.movie?.newMovie)

    useFechData("https://api.themoviedb.org/3/movie/now_playing")

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