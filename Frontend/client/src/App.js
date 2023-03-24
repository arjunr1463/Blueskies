import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/Footer/Footer";
import Home from "./page/Home/Home";
import Academy from "./page/BlueSkiesAcademy/BlueSkiesAcademy";
import OurBlogs from "./page/OurBlogs/OurBlogs";
import Contactus from "./page/Contactus/ContactUs";
import SingleBlog from "./component/Blog/SingleBlog";
import Courses from "./page/Courses/Courses";
import Testimonial from "./page/Testimonial/Testimonial";
import StudentLogin from "./page/StudentLogin/StudentLogin";
import Photo from "./page/Gallery/Photo";
import Video from "./page/Gallery/Video";
import StudentDashBoard from "./page/StudentDashBoard/StudentDashBoard";
import StudentBanner from "./component/Banner/StudentDashBoard";
import StudentSidebar from "./component/StudentDashSidebar/StudentDashSidebar";
import StudentFooter from "./component/Footer/StudentFooter";
import ChangePassword from "./component/ChangePassword/ChangePassword";
import Material from "./component/Materials/Material";
import ForgotPassword from "./component/ForgotPassword/ForgotPassword";

//Layout
const Layout = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="absolute top-0 w-full z-[999]">
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

const Layout2 = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <StudentBanner />
        <div className="lg:justify-center flex flex-col items-center gap-[30px] lg:gap-[20px] lg:items-start lg:flex-row pt-[100px] md:px-[10px] pb-[40px] ">
          <div className="w-[90vw] md:w-[70vw] lg:w-[250px]">
            <StudentSidebar />
          </div>
          <div className="w-[90vw] md:w-[70vw] lg:w-[800px]">
            <Outlet />
          </div>
        </div>
      </div>
      <div>
        <StudentFooter />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/BlueSkiesAcademy",
        element: <Academy />,
      },
      {
        path: "/OurBlogs",
        element: <OurBlogs />,
      },
      {
        path: "/Contactus",
        element: <Contactus />,
      },
      {
        path: "/SingleBlog",
        element: <SingleBlog />,
      },
      {
        path: "/Courses",
        element: <Courses />,
      },
      {
        path: "/Testimonial",
        element: <Testimonial />,
      },
      {
        path: "/StudentLogin",
        element: <StudentLogin />,
      },
      {
        path: "/Gallery/Photo",
        element: <Photo />,
      },
      {
        path: "/Gallery/Video",
        element: <Video />,
      },
      {
        path: "/forgotpassword/student",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout2 />,
    children: [
      {
        path: "/StudentDashBoard",
        element: <StudentDashBoard />,
      },
      {
        path: "/Changepassword",
        element: <ChangePassword />,
      },
      {
        path: "/Material/:id",
        element: <Material />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
