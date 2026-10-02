import Header from "../Header/Header"
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../stateUtils/UserSlice";
import { Outlet, useNavigate } from "react-router-dom";
const AppLayout =()=>{
  const dispatch = useDispatch()
  const navigate =  useNavigate()
  useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid,email,displayName,photoURL}))
        navigate("/home")
       } else {
          dispatch(removeUser())
          navigate("/")
       }
    });
    return ()=>unSubscribe()
  },[])
    return(
        <>
        <Header />
        <Outlet />
        </>
    )
}
export default AppLayout