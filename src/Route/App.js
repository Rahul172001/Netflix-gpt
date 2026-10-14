import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './Applayout';
import Header from '../Header/Header';
import Login from '../SignIn/Login';
import Home from '../Body/Home';
import Error from '../Body/Error';
import { Provider } from "react-redux";
import { Store } from "../stateUtils/Store";
import GptSearch from '../Body/GptSearch';

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
      },
      {
        path:"/gptsearch",
        element:<GptSearch />
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
