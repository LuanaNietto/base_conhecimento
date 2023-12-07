import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import { Search } from "./pages/search/Search";
import { GlobalStyled } from "./GlobalStyled";
import ErrorPage from "./pages/error/ErrorPage";
import { Login } from "./pages/login/Login";
import {Article} from "./pages/article/Article"
import UserProvider from "./context/Context";
import { Teste } from "./pages/teste/teste";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:title",
        element: <Search />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/article",
    element: <Article />,
  },
  {
    path: "/teste",
    element: <Teste />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);