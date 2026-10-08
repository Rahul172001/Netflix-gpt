import { useDispatch } from "react-redux"
import { api_options } from "../utils/url"
import { addPopularMovie } from "../stateUtils/MovieSlice"
import { useEffect } from "react"

    const usePopularMovie = (api)=>{
    const dispatch = useDispatch()
    const fetchData = async()=>{
        const data = await fetch(api,api_options)
        const json = await data?.json()
        console.log("js",json)
        dispatch(addPopularMovie(json?.results))
    }
    useEffect(()=>{
        fetchData()
    },[])
}
 export default usePopularMovie
