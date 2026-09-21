import { useEffect, useRef, useState } from "react"
import { CheckValidate } from "../utils/Validate"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"
const Login = ()=>{
    const [signIn,setSignIn] = useState(true)
    const [error,setError] = useState(null)
    const email = useRef(null)
    const password = useRef(null)
    useEffect(()=>{
        email.current.focus()
    },[])
    const validationCheck = ()=>{
        const message = CheckValidate(email?.current?.value,password?.current?.value)
        setError(message)

        if(message) return

        if(!signIn){
            //sign up logic
            createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
            .then((userCredential) => {
            const user = userCredential.user;
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode+"-"+errorMessage)
            });
        }else{
            //sign in logic
            signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode+"-"+errorMessage)
            });
        }
    }
    return(
        <>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fd8ae3c6-340b-490b-9d3c-f8a3df895c45/web/IN-en-20260907-TRIFECTA-perspective_e8f74db6-0559-495d-84fb-a75bca089b27_large.jpg"
        alt="background" className="absolute" />
        <form onSubmit={(e)=>e.preventDefault()} className=" w-3/12 absolute p-12 my-36 mx-auto left-0 right-0 bg-black text-white opacity-80">
            {signIn ? <h1 className="font-bold text-3xl p-2">SignIn</h1> : <h1 className="font-bold text-3xl p-2">SignUp</h1> }
            {!signIn && <>
            <input className="w-full p-2 my-2 rounded-lg bg-slate-700" placeholder="Name" />
            <input className="w-full p-2 my-2 rounded-lg bg-slate-700" placeholder="Mobile Number" />
            </>}
            <input ref={email} className="w-full p-2 my-2 rounded-lg bg-slate-700" placeholder="Email Id" />
            <input ref={password} className="w-full p-2 my-2 rounded-lg bg-slate-700" placeholder="Password" />
            {!signIn &&
            <input className="w-full p-2 my-2 rounded-lg bg-slate-700" placeholder="Re-Enter Password" />}
            <p className="text-red-500">{error}</p>
            <button onClick={validationCheck} className="w-full p-2 my-2 bg-red-700 rounded-lg">{signIn?"SignIn":"SignUp"}</button>
            <span>{signIn ?"New User? Then " :"Already Singed up? Then " }<span className="cursor-pointer" onClick={()=>setSignIn(!signIn)}>{signIn ? " SignUp" : " SignIn"}</span></span>
        </form>
        </>
    )
}
export default Login