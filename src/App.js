import Home from "./components/Home";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';


function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    }
  ]);


  return (
    <div className='bg-gray-200 px-20'>
     <RouterProvider router = {appRouter}/>
    </div>
  );
}

export default App;
