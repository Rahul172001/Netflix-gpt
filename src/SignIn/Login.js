import { useState } from "react"

const Login = ()=>{
    const [signIn,setSignIn] = useState(true)
    return(
        <>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fd8ae3c6-340b-490b-9d3c-f8a3df895c45/web/IN-en-20260907-TRIFECTA-perspective_e8f74db6-0559-495d-84fb-a75bca089b27_large.jpg"
        alt="background" className="absolute" />
        <form className=" w-3/12 absolute p-12 my-36 mx-auto left-0 right-0 bg-black text-white opacity-80">
            {signIn ? <h1 className="font-bold text-3xl p-2">SignIn</h1> : <h1 className="font-bold text-3xl p-2">SignUp</h1> }
            {!signIn && <>
            <input className="w-full p-2 my-2 rounded-lg bg-slate-700" placeholder="Name" />
            <input className="w-full p-2 my-2 rounded-lg bg-slate-700" placeholder="Mobile Number" />
            </>}
            <input className="w-full p-2 my-2 rounded-lg bg-slate-700" placeholder="Email Id" />
            <input className="w-full p-2 my-2 rounded-lg bg-slate-700" placeholder="Password" />
            {!signIn &&
            <input className="w-full p-2 my-2 rounded-lg bg-slate-700" placeholder="Re-Enter Password" />}
            {signIn}
            <button className="w-full p-2 my-2 bg-red-700 rounded-lg">{signIn?"SignIn":"SignUp"}</button>
            <span>{signIn ?"New User? Then " :"Already Singed up? Then " }<span className="cursor-pointer" onClick={()=>setSignIn(!signIn)}>{signIn ? " SignUp" : " SignIn"}</span></span>
        </form>
        </>
    )
}
export default Login