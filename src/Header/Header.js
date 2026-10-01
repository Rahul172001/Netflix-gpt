import { useSelector } from "react-redux"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
const Header = ()=>{
    const user = useSelector((store)=>store?.user)
    console.log("u",user)

    const navigate = useNavigate()

    const handleSignOut = ()=>{
        signOut(auth)
        .then(() => {
            navigate("/")
        }).catch((error) => {
            // navigate("/error")
        });
    }
    return(
        <div className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex">
            <div className="m-6 max-w-[250px]">
            <img src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAdEhm1UzVexHjKqFOP9W6E2UVtkWFvL-vdxIEbTU81rsqNuPmDDy_dQvmQ85ath49JBruVV4aGQA3gY2Dl5SiqFf-AEwPAZBTNkW8FMxGXpDN2mHrf8KlRRiddj1P422ZW1eZkZNWLTd.svg"
            alt="logo" />
            </div>
            {user && <div className="m-6 max-w-12">
            <img src={user?.photoURL} />
            <button onClick={handleSignOut}>SignOut</button>
            </div>}
            
        </div>
    )
}
export default Header