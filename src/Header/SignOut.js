import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { removeUser } from "../stateUtils/UserSlice"

const SignOut = ({onClose})=>{
    const signedUser = useSelector((store)=>store?.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
        const handleSignOut = ()=>{
        signOut(auth)
        .then(() => {
            dispatch(removeUser())
            navigate("/")
        }).catch((error) => {
            // navigate("/error")
        });
    }
    return(
        <div onClick={onClose}>
            <p>{signedUser?.displayName}</p>
            <button onClick={handleSignOut}>SignOut</button>
        </div>
    )
}
export default SignOut