import { useEffect } from "react"
import { addTopRatedMovie } from "../stateUtils/MovieSlice"
import { api_options } from "../utils/url"
import { useDispatch } from "react-redux"

const useTopRatedMovie = (api)=>{
 const dispatch = useDispatch()
 const fetchData = async()=>{
    const data = await fetch(api,api_options)
    const json = await data?.json()
    dispatch(addTopRatedMovie(json?.results))
 }
 useEffect(()=>{
    fetchData()
 },[])
}
export default useTopRatedMovie