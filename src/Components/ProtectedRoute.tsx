import { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const ProtectedRoute = ({ children }: any) => {
  const { userLogin } = useSelector((store: any) => store.user);
  const { user } = useContext(AppContext);

  if (!userLogin) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
