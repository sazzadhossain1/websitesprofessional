import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./LayOut/Main";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import BlogPost from "./components/BlogPost/BlogPost";
import Contact from "./components/Contact/Contact";
import OnlineMarketing from "./components/OnlineMarketing/OnlineMarketing";
import Seo from "./components/Seo/Seo";
import WhenGetting from "./components/WhenGetting/WhenGetting";
import TermsOfService from "./components/TermsOfService/TermsOfService";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        {
          path: "/projects",
          element: <Projects></Projects>,
        },
        {
          path: "/aboutMe",
          element: <AboutMe></AboutMe>,
        },
        {
          path: "/blogPosts",
          element: <BlogPost></BlogPost>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/onlineMarketing",
          element: <OnlineMarketing></OnlineMarketing>,
        },
        {
          path: "/seo",
          element: <Seo></Seo>,
        },
        {
          path: "/whenGetting",
          element: <WhenGetting></WhenGetting>,
        },
        {
          path: "/termsOfService",
          element: <TermsOfService></TermsOfService>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
