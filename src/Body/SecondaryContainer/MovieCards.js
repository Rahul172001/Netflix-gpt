import { img_CDN_url } from "../../utils/url"

const MovieCards = ({movies})=>{
    return(
        <div className="m-2">
        <img className="max-w-40" src={img_CDN_url + movies?.poster_path} alt="movie poster" />
        </div>
    )
}
export default MovieCards