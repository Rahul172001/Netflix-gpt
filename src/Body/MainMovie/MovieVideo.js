import { useEffect } from "react"
import { api_options } from "../../utils/url"
import { useDispatch, useSelector } from "react-redux"
import { movieTrailer } from "../../stateUtils/MovieSlice"

const MovieVideo = ({id})=>{
    const dispatch = useDispatch()
    const trailerVideo = useSelector((store)=>store?.movie?.mainMovieVideo)
    const fetchTrailer = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos",api_options)
        const json = await data?.json()
        console.log("video",json)
        const video = json?.results
        const trailerData = video?.filter((data)=> data?.type === "Trailer")
        const trailer = trailerData ? trailerData[0] : video[0]
        dispatch(movieTrailer(trailer))
    }
    useEffect(()=>{
        fetchTrailer()
    },[])
    return(
        <div>
        <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?si=URuOe7-jt41xOATz&autoplay=1&mute=1&controls=0&loop=1&playlist=" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>
        </div >
    )
}
export default MovieVideo