import { bg_img } from "../utils/url"
import {language} from "../utils/language"
import { useSelector } from "react-redux"

const GptSearch = ()=>{
    const selectedLanguage = useSelector((store)=>store?.language?.lang)
    return(
        <>
        <img src={bg_img} alt="background Image" className="absolute -z-20" />
        <div className="flex justify-center pt-[10%]">
            <input className="w-[50%] p-3 m-2 rounded-lg" placeholder={language[selectedLanguage]?.searchPlaceholder} />
            <button className=" bg-red-700 text-white p-3 m-2 rounded-lg ">{language[selectedLanguage]?.search}</button>
        </div>
        </>
    )
}

export default GptSearch