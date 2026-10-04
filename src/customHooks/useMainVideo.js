import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { api_options } from "../utils/url"
import { movieTrailer } from "../stateUtils/MovieSlice"

const useMainVideo = (id)=>{
    const dispatch = useDispatch()

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
}

export default useMainVideo