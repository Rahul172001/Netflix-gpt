import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './Applayout';
import Header from '../Header/Header';
import Login from '../SignIn/Login';
import Home from '../Body/Home';
import Error from '../Body/Error';
import { Provider } from "react-redux";
import { Store } from "../stateUtils/Store";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Login />
      },
      {
        path:"/home",
        element:<Home />
      }
    ],
    errorElement:<Error />
  }
])
function App() {
  return ( 
    <Provider store={Store}>
    <RouterProvider router={appRouter}>
      <AppLayout />
    </RouterProvider>
    </Provider>
  );
}

export default App;
