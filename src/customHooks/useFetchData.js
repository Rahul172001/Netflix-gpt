import { useEffect } from "react"
import { api_options } from "../utils/url"
import { useDispatch } from "react-redux"
import { addNewMovies } from "../stateUtils/MovieSlice"

const useFechData = (api)=>{
        const dispatch = useDispatch()

        const fetchNowPlaying = async()=>{
        const data = await fetch(api,api_options)
        const json = await data?.json()
        dispatch(addNewMovies(json?.results))
    }
    useEffect(()=>{
        fetchNowPlaying()
    },[])
}
export default useFechData