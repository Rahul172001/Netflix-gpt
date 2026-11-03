import { bg_img } from "../utils/url"
import {language, languageList} from "../utils/language"
import { useSelector } from "react-redux"
import { useRef } from "react"
import ai from "../Body/Ai_Utils/ai"
import groq from "../Body/Ai_Utils/groq"


const GptSearch = ()=>{
    const selectedLanguage = useSelector((store)=>store?.language?.lang)
    const searchText = useRef(null)
    const handleSearch = async()=>{
        const searchQuery = `Give me top 5 movies of${searchText.current.value} movie name with comma seperated. Only give the movie list of ${searchText.current.value}`
        //groq
        const response = await groq.responses.create({
                        model: "openai/gpt-oss-20b",
                        input: searchQuery,
        });
        console.log(response.output_text);
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