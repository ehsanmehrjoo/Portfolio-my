import { createBrowserRouter, Outlet } from "react-router-dom";
import MainLayout from "../layout";
import Home from "../pages/home";
import Skills from "../pages/skills";
import About from "../pages/about";
import Experience from "../pages/experience";
import Projects from "@/pages/projects";
import ErrorComponent from "./error-component";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    errorElement: <ErrorComponent />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);
