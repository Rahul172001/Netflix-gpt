import { useSelector } from "react-redux"

const MovieTitle = ()=>{
    const mainMovie = useSelector((store)=>store?.movie?.mainMovie)
    if (mainMovie === null) return
    const {title,overview} = mainMovie
    return(
        <div className="w-screen aspect-video absolute bg-gradient-to-r from-black via-black/60 to-transparent text-white z-20 flex-col px-10 pb-[15%] pt-24">
        <h1 className="font-bold text-4xl md:text-5xl drop-shadow-lg mb-4 max-w-xl">{title}</h1>
        <p className="w-full md:w-5/12 text-sm md:tesxt-base text-gray-200 line-clamp-3 mb-6">{overview}</p>
        <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-2.5 bg-white text-black font-semibold rounded-sm hover:bg-white/80 transition-colors">
                <span>▶︎</span> Play
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-white text-black font-semibold rounded-sm hover:bg-white/80 transition-colors">
                <span>🛈︎</span> More Info</button>
        </div>
        </div>
    )
}
export default MovieTitle