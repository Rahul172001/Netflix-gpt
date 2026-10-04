import { useSelector } from "react-redux"

const MovieTitle = ({title,overview})=>{
    return(
        <div className="w-screen aspect-video absolute bg-gradient-to-r from-black/80 via-black/40 to-transparent pt-[20%]  text-white z-20">
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="w-6/12">{overview}</p>
        <div className="text-black">
            <button className="w-36 px-auto py-2 bg-white hover:bg-opacity-70 font-bold mr-1">▶︎ Play</button>
            <button className="w-36 px-auto py-2 bg-gray-500 font-bold ml-1">🛈︎ More Info</button>
        </div>
        </div>
    )
}
export default MovieTitle