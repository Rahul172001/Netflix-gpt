import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './Applayout';
import Header from '../Header/Header';
import Login from '../SignIn/Login';
import Home from '../Body/Home';
import Error from '../Body/Error';

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
    <RouterProvider router={appRouter}>
      <AppLayout />
    </RouterProvider>
  );
}

export default App;
