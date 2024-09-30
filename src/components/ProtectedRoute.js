import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = ({}) => {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
