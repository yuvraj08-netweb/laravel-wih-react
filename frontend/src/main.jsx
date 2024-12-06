import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Error from "./error/Error.jsx";
import Home from "./Home/Home.jsx";
import SignUp from "./Views/SignUp.jsx";
import Login from "./Views/Login.jsx";
import DefaultLayout from "./Components/DefaultLayout/DefaultLayout.jsx";
import GuestLayout from "./Components/GuestLayout/GuestLayout.jsx";
import { AuthProvider } from "./context/contextProvide.jsx";

const routes = createBrowserRouter([
  {
    path: "",
    element: <DefaultLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "",
    element: <GuestLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </StrictMode>
);
