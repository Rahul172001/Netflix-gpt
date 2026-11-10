import { useSelector } from "react-redux"
import MovieCards from "../Body/SecondaryContainer/MovieCards"

const GptResult = ()=>{
    const gpt = useSelector((store)=>store?.gpt?.gptMovies)
    const movieName = useSelector((store)=>store?.gpt?.gptDataResult)
    return(
         <div className="bg-black">
            <h2 className="text-white">{movieName?.map((data)=>data)}</h2>
                {gpt?.map((data)=><MovieCards key={data?.id} movies={data} />)}
            </div>
            
    )
} 
export default GptResult