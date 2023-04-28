import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Experience from './components/Experience';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import {createBrowserRouter,RouterProvider, Outlet} from 'react-router-dom';


function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <>
        <Header/>
        <Outlet/>
        <Footer/>
      </>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/education',
          element: <Education/>
        },
        {
          path: '/experience',
          element: <Experience/>
        },
        {
          path: '/projects',
          element: <Projects/>
        },
        {
          path: '/contactme',
          element: <ContactMe/>
        },
      ]
    }
  ]);


  return (
    <div className='bg-gray-200 px-20 max-w-full'>
     <RouterProvider router = {appRouter}/>
    </div>
  );
}

export default App;
