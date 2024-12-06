import { Outlet } from "react-router-dom";

import Header from "../Header/Header.jsx";
function GuestLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default GuestLayout;
