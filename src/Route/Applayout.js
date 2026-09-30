import Header from "../Header/Header"
import Login from "../SignIn/Login"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../stateUtils/UserSlice";
import { Provider } from "react-redux";
import { Store } from "../stateUtils/Store";
import { Outlet } from "react-router-dom";
const AppLayout =()=>{

const dispatch = useDispatch()
onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName} = user.uid;
    dispatch(addUser({uid:uid,email:email,displayName:displayName}))
  } else {
    dispatch(removeUser())
  }
});
    return(
        <>
        <Provider store={Store}>
        <Header />
        <Outlet />
        </Provider>
        </>
    )
}
export default AppLayout