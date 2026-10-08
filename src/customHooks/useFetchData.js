import { useEffect } from "react"
import { api_options } from "../utils/url"
import { useDispatch } from "react-redux"
import { addNewMovies } from "../stateUtils/MovieSlice"

const useFechData = (api,actionItem)=>{
        const dispatch = useDispatch()

        const fetchNowPlaying = async()=>{
        const data = await fetch(api,api_options)
        const json = await data?.json()
        dispatch(actionItem(json?.results))
    }
    useEffect(()=>{
        fetchNowPlaying()
    },[])
}
export default useFechData