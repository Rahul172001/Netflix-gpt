import { useSelector } from "react-redux"
import MovieCards from "../Body/SecondaryContainer/MovieCards"

const GptResult = ()=>{
    const gpt = useSelector((store)=>store?.gpt?.GptResult)
    // const {movieList} = gpt
    if(gpt) return
    console.log("movie",gpt)
    return(
         <div className="bg-black">
            <div className="relative -my-16 z-40 overflow-x-hidden">
                {/* {movieList?.map((data)=><MovieCards key={data?.id} movies={data} />)} */}
            </div>
            </div>
    )
} 
export default GptResult