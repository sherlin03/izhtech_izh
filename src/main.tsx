import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./mobile.css";
import Services from "./pages/services";
import About from "./pages/about";
import Home from "./pages/home";
import Contact from "./pages/contact";
import BlogDetail from "./pages/BlogDetail";
import CommonLayout from "./shared/layouts/CommonLayout";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ServiceDetail from "./pages/ServiceDetailPage";
import Blog from "./pages/blog";
import MobScreen from "./pages/mobile/pages/mobilescreen";
import AOS from 'aos';
import 'aos/dist/aos.css';
import MobHome from "./pages/mobile/pages/home";
import Oasissportopia from "./pages/oasissportopia";
import Subhadental from "./pages/subhadental";
import Digital from "./pages/digital";
import Projects from "./pages/project";
import AdMarketing from "./pages/admarketing";
AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/service", element: <Services /> },
      { path: "/blog-detail/:id", element: <BlogDetail /> },
      { path: "/service-detail/:id", element: <ServiceDetail /> },
      { path: "/blog", element: <Blog/> },
      { path: "/mobilescreen", element: <MobScreen/> },
      { path: "/mobilehome", element: <MobHome/> },
      { path: "/oasissportopia", element: <Oasissportopia/> },
      { path: "/subhadental", element: <Subhadental/> },
      { path: "/digital", element: <Digital/> },
      { path: "/project", element: <Projects/> },
      { path: "/admarketing", element: <AdMarketing/> },

    ],
  },
]);
const queryClient = new QueryClient()
ReactDOM.render(
  <React.StrictMode>
    
    <QueryClientProvider client={queryClient} >
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);