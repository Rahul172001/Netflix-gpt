import { bg_img } from "../utils/url"

const GptSearch = ()=>{
    return(
        <>
        <img src={bg_img} alt="background Image" className="absolute -z-20" />
        <div className="flex justify-center pt-[10%]">
            <input className="w-[50%] p-3 m-2 rounded-lg" placeholder="What do you want to watch today" />
            <button className=" bg-red-700 text-white p-3 m-2 rounded-lg ">Search</button>
        </div>
        </>
    )
}

export default GptSearch