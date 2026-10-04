import { useEffect } from "react"
import { api_options } from "../utils/url"
import { useDispatch,useSelector } from "react-redux"
import { addNewMovies } from "../stateUtils/MovieSlice"
import MovieTitle from "./MainMovie/MovieTitle"
import MovieVideo from "./MainMovie/MovieVideo"

const Home = ()=>{

    const dispatch = useDispatch()
    const movie = useSelector((store)=>store?.movie?.newMovie)
    const fetchNowPlaying = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing",api_options)
        const json = await data?.json()
        dispatch(addNewMovies(json?.results))
    }
    useEffect(()=>{
        fetchNowPlaying()
    },[])

    if(movie === null) return
    const mainMovie = movie[0]
    console.log(mainMovie)

    const {title,overview,id} = mainMovie

    return(
        <>
        <MovieTitle title={title} overview={overview} />
        <MovieVideo id={id} />
        </>
    )
}
export default Home