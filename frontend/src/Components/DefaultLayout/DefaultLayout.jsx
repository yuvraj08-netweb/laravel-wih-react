import { Outlet } from "react-router-dom";

import Header from "../Header/Header.jsx";
function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default DefaultLayout;
