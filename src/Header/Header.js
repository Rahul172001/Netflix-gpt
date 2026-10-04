import { useState } from "react"
import SignOut from "./SignOut"
import { useSelector } from "react-redux"
import { logo } from "../utils/url"
const Header = ()=>{
    const [modal,setModal] = useState(false)
    const user = useSelector((store)=>store?.user)

    return(
        <div className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between px-10 py-4">
            <div className="max-w-[150px]">
            <img src={logo} alt="logo" className="w-full" />
            </div>
            {user && <>
            <div className="relative flex items-center gap-2 cursor-pointer select-none" onClick={()=>setModal(!modal)}>
            <img className="w-9 h-9 rounded-sm object-cover" src={user?.photoURL} />
            </div>
            {modal && <SignOut onClose={()=>setModal(false)} />}
            </> }
        </div>
    )
}
export default Header