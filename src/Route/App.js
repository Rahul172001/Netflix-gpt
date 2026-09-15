import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './Applayout';

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
