import { bg_img } from "../utils/url"
import {language} from "../utils/language"

const GptSearch = ()=>{
    const lang = console.log("lang",language?.tmail?.searchPlaceholder)
    return(
        <>
        <img src={bg_img} alt="background Image" className="absolute -z-20" />
        <div className="flex justify-center pt-[10%]">
            <input className="w-[50%] p-3 m-2 rounded-lg" placeholder={language?.tamil?.searchPlaceholder} />
            <button className=" bg-red-700 text-white p-3 m-2 rounded-lg ">{language?.tamil?.search}</button>
        </div>
        </>
    )
}

export default GptSearch