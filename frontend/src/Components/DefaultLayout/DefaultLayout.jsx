import { Outlet } from "react-router-dom";

import Header from "../Header/Header.jsx";
import { UseAuth } from "../../context/contextProvide.jsx";
function DefaultLayout() {
  const { token } = UseAuth();
  if (!token) {
    return;
  }
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default DefaultLayout;
