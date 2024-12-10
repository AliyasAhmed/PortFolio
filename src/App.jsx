import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "*",
      element: (
        <>
          <Navbar /> <Home />
        </>
      ),
    },
    {
      path: "/Home",
      element: (
        <>
          <Navbar /> <Home />
        </>
      ),
    },
    {
      path: "/Contact",
      element: (
        <>
          <Navbar /> <Contact />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Navbar /> <About />
        </>
      ),
    },
  ]);

  return (
    <>
      <div className="app-container bg-black z-0">
        <div className="content ">
          <RouterProvider router={router} />
          
          <video autoPlay loop muted className="background-video">
            <source src="https://raw.githubusercontent.com/AliyasAhmed/media-files/f758c973df7fe6fa5db810faebb899342069b470/ForPc.mp4
" media="(max-width:1920px)" type="video/mp4" />
          </video>
          <div className="bg"></div>
        </div>
      </div>
    </>
  );
};

export default App;
