// I am using App.jsx to define my router and to use Layout
// as the wrapper
// Here I will show Home, MyPlants and About pages inside the Outlet
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import MyPlants from "./pages/MyPlants";
import About from "./pages/About";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "myplants", element: <MyPlants /> },
        { path: "about", element: <About /> }
      ],
    },
  ],
  {
    basename: "/Exam-FlowerPlant-Arnas/"
  }
);

export default function App() {
  return <RouterProvider router={router} />
}