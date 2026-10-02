import { useSelector } from "react-redux"
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"

const SignOut = ({onClose})=>{
    const signedUser = useSelector((store)=>store?.user)
        const handleSignOut = ()=>{
        signOut(auth)
        .then(() => {
        }).catch((error) => {
            // navigate("/error")
        });
    }
    return(
        <div className="fixed inset-0 z-20" onClick={onClose}>
            <div className="absolue top-12 right-0 w-56 bg-black/97 border border-white/10 rounded-sm shadow-xl z-30 overflow-hidden"
            onClick={(e)=>e.stopPropagation()}>
                <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                    <img src={signedUser?.photoURL} alt="profile" className="w-8 h-8 rounded-md object-cover" />
                    <p className="text-white text-sm font-medium truncate" onClick={(e)=>e.stopPropagation()}>{signedUser?.displayName}</p>
                    </div>
            
            <button className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors" onClick={handleSignOut}>SignOut</button>
            </div>
        </div>
    )
}
export default SignOut