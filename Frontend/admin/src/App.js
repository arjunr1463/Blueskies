import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Blog from "./Pages/Blogs/Blog";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import DashBoard from "./components/Dashboard/Dashboard";
import ViewBlog from "./components/Blog/ViewBlog";
import EditBlog from "./components/Blog/EditBlog";
import SideBar from "./components/DashSideBar/DashSideBar";
import Testimony from "./Pages/Testimony/Testimony";
import Photo from "./Pages/Gallery/ImageUpload";
import Video from "./Pages/Gallery/VideoUpload";
import Student from "./components/Student/Student";
import { SidebarContext } from "./Context/Context";
import EditTestimony from "./components/Testimony/EditTestimony";
import AllStudent from "./components/Student/AllStudent";
import ViewStudent from "./components/Student/ViewStudent";
import AdminUser from "./components/Adminuser/AdminUser";
import Changepassword from "./components/ChangePassword/ChangePassword";
import AllAdmin from "./components/AllAdmin/AllAdmin"
import Addmaterial from "./components/AddMaterial/AddMaterial"
//Layout
const Layout = () => {
  const [action, setAction] = useState(false);
  const handleClick = () => {
    setAction(!action);
  };
  return (
    <>
      <SidebarContext.Provider value={{ action, handleClick }}>
        <div className="flex flex-col h-screen justify-between relative ">
          <NavBar />
          <div className="flex">
            <div
              className={
                action
                  ? "absolute top-20 md:static h-screen z-[999] bg-gray-900 "
                  : "h-screen "
              }
            >
              <SideBar />
            </div>
            <div className="w-full h-[100vh] overflow-y-scroll">
              <Outlet />
            </div>
          </div>
        </div>
      </SidebarContext.Provider>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "create/adminuser",
    element: <AdminUser />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "admin/Dashboard",
        element: <DashBoard />,
      },
      {
        path: "admin/Blogs",
        element: <Blog />,
      },
      {
        path: "admin/ViewBlog",
        element: <ViewBlog />,
      },
      {
        path: "admin/EditBlog/:id",
        element: <EditBlog />,
      },
      {
        path: "admin/Testimony",
        element: <Testimony />,
      },
      {
        path: "admin/Photo",
        element: <Photo />,
      },
      {
        path: "admin/Video",
        element: <Video />,
      },
      {
        path: "admin/Student",
        element: <Student />,
      },
      {
        path: "admin/AllStudent",
        element: <AllStudent />,
      },
      {
        path: "admin/Viewstudent/:id",
        element: <ViewStudent />,
      },
      {
        path: "EditTestimony",
        element: <EditTestimony />,
      },
      {
        path: "admin/Changepassword",
        element: <Changepassword/>,
      },
      {
        path: "admin/Alladmin/:id",
        element: <AllAdmin/>,
      },
      {
        path: "admin/Addmaterial",
        element: <Addmaterial/>,
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
