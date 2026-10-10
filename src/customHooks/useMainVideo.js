import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { api_options } from "../utils/url"
import { movieTrailer, selectMainMovie } from "../stateUtils/MovieSlice"

const useMainVideo = ()=>{
    const dispatch = useDispatch()
    const mainMovie = useSelector((store)=>store?.movie?.newMovie)

    const fetchTrailer = async()=>{
        for (const movie of mainMovie){
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movie?.id+"/videos",api_options)
        const json = await data?.json()
        console.log("video",json)
        const video = json?.results
        if(video?.length > 0){
        const filterdVideo = video?.filter((data)=>data?.type === "Trailer")
        const trailer = filterdVideo.length > 0 ? filterdVideo[0] : video[0]
        dispatch(movieTrailer(trailer))
        dispatch(selectMainMovie(movie))
        return
        }
        }
    }
    useEffect(()=>{
        if(mainMovie !== null){
            fetchTrailer()
        }
    },[mainMovie])
}

export default useMainVideo