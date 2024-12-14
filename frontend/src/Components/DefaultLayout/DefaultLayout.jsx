
import { Navigate } from "react-router-dom";
import { UseAuth } from "../../context/contextProvide.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
function DefaultLayout() {
  const { token } = UseAuth();
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <>

      <Dashboard />
    </>
  );
}

export default DefaultLayout;
