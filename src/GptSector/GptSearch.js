import { api_options, bg_img } from "../utils/url"
import {language, languageList} from "../utils/language"
import { useDispatch, useSelector } from "react-redux"
import { useRef } from "react"
import ai from "../Body/Ai_Utils/ai"
import groq from "../Body/Ai_Utils/groq"
import { gptResult } from "../stateUtils/GptSlice"


const GptSearch = ()=>{
    const selectedLanguage = useSelector((store)=>store?.language?.lang)
    const dispatch = useDispatch()
    const searchText = useRef(null)
    const movieApi = async(movie)=>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",api_options)
        const json = await data?.json()
        return json
    }
    const handleSearch = async()=>{
        const searchQuery = `Give me top 5 movies of${searchText.current.value} movie name with comma seperated. Only give the movie list of ${searchText.current.value}`
        //groq
        const response = await groq.responses.create({
                        model: "openai/gpt-oss-20b",
                        input: searchQuery,
        });
        const aiResult = response.output_text.split(",")
        console.log("aiResult",aiResult)
        const movieData = aiResult?.map((data)=>movieApi(data))
        const promiseResult = await Promise.all(movieData)
        dispatch(gptResult(promiseResult))
        
        //gemini
        // const aiResults = await ai.interactions.create({
        //     model: "gemini-3.1-flash-lite",
        //     input: searchQuery,
        // });
        // console.log("ai result",aiResults.output_text)

    }
    return(
        <>
        <img src={bg_img} alt="background Image" className="absolute -z-20" />
        <div className="flex justify-center pt-[10%]">
            <input ref={searchText} className="w-[50%] p-3 m-2 rounded-lg" placeholder={languageList[selectedLanguage]?.searchPlaceholder} />
            <button onClick={handleSearch} className=" bg-red-700 text-white p-3 m-2 rounded-lg ">{languageList[selectedLanguage]?.search}</button>
        </div>
        </>
    )
}

export default GptSearch