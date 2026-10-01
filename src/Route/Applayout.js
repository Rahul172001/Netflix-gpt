import Header from "../Header/Header"
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../stateUtils/UserSlice";
import { Outlet } from "react-router-dom";
const AppLayout =()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid,email,displayName,photoURL}))
       } else {
          dispatch(removeUser())
       }
    });
  },[])
    return(
        <>
        <Header />
        <Outlet />
        </>
    )
}
export default AppLayout