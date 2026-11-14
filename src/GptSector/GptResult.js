import { useSelector } from "react-redux"
import MovieCards from "../Body/SecondaryContainer/MovieCards"

const GptResult = ()=>{
    const {gptMovies,gptDataResult} = useSelector((store)=>store?.gpt)
    return(
         <div className="bg-black">
            <h2 className="text-white">{gptDataResult}</h2>
                {gptMovies?.map((data)=><MovieCards key={data?.id} movies={data} />)}
            </div>
            
    )
} 
export default GptResult