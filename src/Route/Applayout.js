import Header from "../Header/Header"
import Login from "../SignIn/Login"
const AppLayout =()=>{
    return(
        <>
        <Provider store={appStore}>
        <Header />
        <Login />
        </Provider>
        </>
    )
}
export default AppLayout