import { useSelector } from "react-redux"
import useMainVideo from "../../customHooks/useMainVideo"


const MovieVideo = ({id})=>{
    const trailerVideo = useSelector((store)=>store?.movie?.mainMovieVideo)

    useMainVideo(id)
    
    return(
        <div className="w-screen aspect-video overflow-hidden">
        <iframe className="w-full h-full scale-[1.4] origin-center pointer-events-none"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?si=URuOe7-jt41xOATz&autoplay=1&mute=1&controls=0&loop=1&playlist=" + trailerVideo?.key+"&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>
        </div >
    )
}
export default MovieVideo