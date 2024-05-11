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
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import AccessDenied from "./components/AccessDenied/AccessDenied";
import FooterService from "./components/FooterService/FooterService";
import HomeSignUp from "./components/HomeSignUp/HomeSignUp";
import Review from "./components/Review/Review";
import Service from "./components/Service/Service";
import Blog from "./components/Blog/Blog";
import ServiceAllMap from "./components/ServiceAllMap/ServiceAllMap";
import DigitalMarketing from "./components/DigitalMarketing/DigitalMarketing";
import SeoExperts from "./components/SeoExperts/SeoExperts";
import SeoFirm from "./components/SeoFirm/SeoFirm";
import SeoServices from "./components/SeoServices/SeoServices";
import SeoServicesAgency from "./components/SeoServicesAgency/SeoServicesAgency";
import WordPressSeo from "./components/WordPressSeo/WordPressSeo";
import Policy from "./components/Policy/Policy";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://admin.websitesprofessional.com/api/setting");
          },
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: async () => {
            return fetch("https://admin.websitesprofessional.com/api/setting");
          },
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
          path: "/homeSignUp",
          element: <HomeSignUp></HomeSignUp>,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        {
          path: "/service/:serviceId",

          loader: async ({ params }) => {
            return fetch(
              `https://admin.websitesprofessional.com/api/service/${params.serviceId}`
            );
          },
          element: <Service></Service>,
        },

        {
          path: "/serviceAllMap",
          loader: async () => {
            return fetch("https://admin.websitesprofessional.com/api/service");
          },
          element: <ServiceAllMap></ServiceAllMap>,
        },
        {
          path: "/projects",
          element: <Projects></Projects>,
        },
        {
          path: "/digital_marketing",
          loader: async () => {
            return fetch(
              "https://admin.websitesprofessional.com/api/digital_marketing"
            );
          },
          element: <DigitalMarketing></DigitalMarketing>,
        },
        {
          path: "/seo_expart",
          loader: async () => {
            return fetch(
              "https://admin.websitesprofessional.com/api/seo_expart"
            );
          },
          element: <SeoExperts></SeoExperts>,
        },
        {
          path: "/seo_firm",
          loader: async () => {
            return fetch("https://admin.websitesprofessional.com/api/seo_firm");
          },
          element: <SeoFirm></SeoFirm>,
        },
        {
          path: "/seo_service",
          loader: async () => {
            return fetch(
              "https://admin.websitesprofessional.com/api/seo_service"
            );
          },
          element: <SeoServices></SeoServices>,
        },
        {
          path: "/seo_service_agency",
          loader: async () => {
            return fetch(
              "https://admin.websitesprofessional.com/api/seo_service_agency"
            );
          },
          element: <SeoServicesAgency></SeoServicesAgency>,
        },
        {
          path: "/wordpress_seo",
          loader: async () => {
            return fetch(
              "https://admin.websitesprofessional.com/api/wordpress_seo"
            );
          },
          element: <WordPressSeo></WordPressSeo>,
        },
        {
          path: "/policy",
          loader: async () => {
            return fetch("https://admin.websitesprofessional.com/api/policy");
          },
          element: <Policy></Policy>,
        },
        {
          path: "/aboutMe",
          loader: async () => {
            const response = await fetch(
              "https://admin.websitesprofessional.com/api/setting"
            );
            const data = await response.json();
            return data;
          },
          element: <AboutMe></AboutMe>,
        },
        {
          path: "/review",

          element: <Review></Review>,
        },
        {
          path: "/blogPosts",
          element: <BlogPost></BlogPost>,
        },
        {
          path: "/blog/:blogId",

          element: <Blog></Blog>,
        },
        {
          path: "/blogs/:blogId",

          loader: async ({ params }) => {
            return fetch(
              `https://admin.websitesprofessional.com/api/blog/${params.blogId}`
            );
          },
          element: <OnlineMarketing></OnlineMarketing>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
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
        {
          path: "/privacyPolicy",
          element: <PrivacyPolicy></PrivacyPolicy>,
        },
        {
          path: "/accessDenied",
          element: <AccessDenied></AccessDenied>,
        },
        {
          path: "/footerService",
          element: <FooterService></FooterService>,
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
