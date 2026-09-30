import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './Applayout';
import { Provider } from 'react-redux';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />
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
